---
title: Excel VBAで複数ファイルを選択し、提出用ファイルを一括生成する処理の整理
aliases:
  - Excel VBAで複数ファイルを選択し、提出用ファイルを一括生成する処理の整理
type:
created: 2026-09-03T21:39:52+09:00
updated: 2026-09-03T21:39:52+09:00
id: 20260903-213952
permalink:
draft: true
tags:
---
## Excel VBAで複数ファイルを選択し、提出用ファイルを一括生成する処理の整理

今回のチャットでは、既存の `SalesReportSubmitter` マクロを「1ファイル処理」から「複数ファイル一括処理」へ拡張することを目的に検討しました。最終的な要件は、ファイル選択ダイアログで複数のExcelファイルを選択し、各ファイルについて「複製 → Power Query削除 → 接続削除 → 保存」という同じ処理を順番に実行することです。

### 1. 元のマクロの処理内容

最初に提示された `SalesReportSubmitter` は、1つのExcelファイルを選択し、そのファイルから提出用ファイルを生成するマクロでした。

処理の流れは次のとおりです。

```mermaid
flowchart TD
    A[ファイル選択ダイアログを表示]
    B[Excelファイルを1つ選択]
    C[元ファイルを複製]
    D[ファイル名に _提出用 を付与]
    E[複製したブックを開く]
    F[Power Queryをすべて削除]
    G[WorkbookConnectionをすべて削除]
    H[シート上の出力データは保持]
    I[保存して閉じる]

    A --> B --> C --> D --> E --> F --> G --> H --> I
```

元コードでは、ファイル選択後に以下のように1件目だけを取得していました。

```vba
selectedFilePath = fd.SelectedItems(1)
```

このため、標準状態では1つのファイルしか処理できません。

---

## 2. VBAのファイル選択ダイアログでは複数選択が可能

`Application.FileDialog(msoFileDialogFilePicker)` では、次の設定を追加することで複数ファイルを選択できます。

```vba
fd.AllowMultiSelect = True
```

複数選択されたファイルは、

```vba
fd.SelectedItems
```

に格納されます。

そのため、1件だけ取得するのではなく、

```vba
For Each selectedFile In fd.SelectedItems
```

というループで処理すれば、選択したすべてのファイルに同じ処理を適用できます。

基本構造は次の形です。

```vba
If fd.Show = -1 Then

    For Each selectedFile In fd.SelectedItems

        ' 1ファイル分の処理

    Next selectedFile

End If
```

---

## 3. 複数ファイル対応で変更した部分

元の処理ロジックそのものは変えず、ファイル単位の処理をループ内へ移動する方針としました。

主な変更点は次のとおりです。

|項目|元コード|複数ファイル対応|
|---|---|---|
|ファイル選択|1ファイル|複数ファイル|
|`AllowMultiSelect`|未設定|`True`|
|ファイル取得|`SelectedItems(1)`|`For Each`|
|ファイル複製|1回|ファイルごと|
|Query削除|1ブック|各ブック|
|Connection削除|1ブック|各ブック|
|完了通知|1ファイルごと|全処理終了後|
|処理状況|特になし|`Debug.Print`で確認可能|

処理全体としては次の構造になります。

```mermaid
flowchart TD
    A[ファイル選択ダイアログ]
    B[複数ファイルを選択]
    C{未処理ファイルがあるか}
    D[対象ファイルのパス取得]
    E[提出用ファイル名を作成]
    F[FileCopyで複製]
    G[複製ファイルを開く]
    H[Power Query削除]
    I[WorkbookConnection削除]
    J[保存して閉じる]
    K[次のファイル]
    L[全処理完了メッセージ]

    A --> B --> C
    C -->|ある| D --> E --> F --> G --> H --> I --> J --> K --> C
    C -->|ない| L
```

---

## 4. 途中で発生した問題

複数ファイル対応版を実際に使用したところ、**1つのファイルしか生成されない**という問題が発生しました。

そこで、提出用ファイル名を生成している部分を重点的に見直しました。

提出用ファイル名は、

```text
元ファイル名 + "_提出用" + 拡張子
```

とする必要があります。

例えば、

```text
売上実績_大阪.xlsx
```

なら、

```text
売上実績_大阪_提出用.xlsx
```

とします。

また、

```text
sales.report.xlsx
```

のようにファイル名中に `.` が含まれていても、

```text
sales.report_提出用.xlsx
```

となるよう、**最後の `.` を拡張子の境界として扱う**必要があります。

---

## 5. ファイル名取得処理でさらに問題が発生

修正版を試したところ、提出用ファイル名が

```text
._提出用.xlsx
```

となる問題が発生しました。

これは、ファイルパスから「拡張子を除いたファイル名」を取り出す文字列処理が正しくなかったことが原因です。

Windowsのフルパスを次の3つに分解する必要があります。

```text
C:\Sales\2026\大阪売上.xlsx
│              │      │
│              │      └ 拡張子
│              └ ファイル名
└ フォルダ
```

それぞれ、

```text
フォルダ:
C:\Sales\2026\

ファイル名:
大阪売上

拡張子:
.xlsx
```

として扱います。

VBAでは `InStrRev` を使うことで、最後に現れる `\` と `.` を検索できます。

---

## 6. ファイル名生成の基本ロジック

安定して処理するなら、考え方としては次の3段階に分離するのが分かりやすいです。

```vba
Dim folderPath As String
Dim baseFileName As String
Dim fileExtension As String
```

### フォルダ部分

```vba
folderPath = Left( _
    selectedFilePath, _
    InStrRev(selectedFilePath, "\") _
)
```

例えば、

```text
C:\Sales\大阪売上.xlsx
```

なら、

```text
C:\Sales\
```

を取得します。

### 拡張子

```vba
fileExtension = Mid( _
    selectedFilePath, _
    InStrRev(selectedFilePath, ".") _
)
```

結果：

```text
.xlsx
```

### ファイル名

```vba
baseFileName = Mid( _
    selectedFilePath, _
    InStrRev(selectedFilePath, "\") + 1, _
    InStrRev(selectedFilePath, ".") _
        - InStrRev(selectedFilePath, "\") - 1 _
)
```

結果：

```text
大阪売上
```

そして最終的に、

```vba
destinationFilePath = _
    folderPath & _
    baseFileName & _
    "_提出用" & _
    fileExtension
```

とします。

---

## 7. 最終的に目指しているコード構成

今回の議論を整理すると、マクロは次のような形にするのが自然です。

```vba
Option Explicit

Sub SalesReportSubmitter()

    Dim fd As FileDialog
    Dim selectedFile As Variant

    Dim selectedFilePath As String
    Dim destinationFilePath As String

    Dim folderPath As String
    Dim baseFileName As String
    Dim fileExtension As String

    Dim wb As Workbook
    Dim conn As WorkbookConnection
    Dim pq As Object

    ' ファイル選択ダイアログ
    Set fd = Application.FileDialog(msoFileDialogFilePicker)

    With fd
        .Title = "エクセルファイルを選択してください"
        .Filters.Clear
        .Filters.Add "Excelファイル", "*.xls; *.xlsx"
        .AllowMultiSelect = True
    End With

    If fd.Show <> -1 Then
        MsgBox "ファイルが選択されませんでした。"
        Set fd = Nothing
        Exit Sub
    End If

    Application.ScreenUpdating = False
    Application.DisplayAlerts = False

    ' 選択されたファイルを順番に処理
    For Each selectedFile In fd.SelectedItems

        selectedFilePath = CStr(selectedFile)

        ' パスを分解
        folderPath = Left( _
            selectedFilePath, _
            InStrRev(selectedFilePath, "\") _
        )

        fileExtension = Mid( _
            selectedFilePath, _
            InStrRev(selectedFilePath, ".") _
        )

        baseFileName = Mid( _
            selectedFilePath, _
            InStrRev(selectedFilePath, "\") + 1, _
            InStrRev(selectedFilePath, ".") _
                - InStrRev(selectedFilePath, "\") - 1 _
        )

        ' 提出用ファイル名
        destinationFilePath = _
            folderPath & _
            baseFileName & _
            "_提出用" & _
            fileExtension

        ' 複製
        FileCopy selectedFilePath, destinationFilePath

        ' 複製先を開く
        Set wb = Workbooks.Open(destinationFilePath)

        ' Power Queryを削除
        On Error Resume Next

        For Each pq In wb.Queries
            wb.Queries(pq.Name).Delete
        Next pq

        ' 接続を削除
        For Each conn In wb.Connections
            conn.Delete
        Next conn

        On Error GoTo 0

        ' 保存して閉じる
        wb.Close SaveChanges:=True

        Set wb = Nothing

        Debug.Print "処理完了: " & destinationFilePath

    Next selectedFile

    Application.DisplayAlerts = True
    Application.ScreenUpdating = True

    Set fd = Nothing

    MsgBox _
        "選択したすべてのファイルの処理が完了しました。", _
        vbInformation, _
        "完了"

End Sub
```

---

## 8. このマクロで想定される変換結果

例えば3ファイルを選択した場合、

|元ファイル|作成されるファイル|
|---|---|
|`大阪売上.xlsx`|`大阪売上_提出用.xlsx`|
|`東京売上.xlsx`|`東京売上_提出用.xlsx`|
|`福岡売上.xlsx`|`福岡売上_提出用.xlsx`|

各提出用ファイルについて、

```text
元ファイル
  ↓ FileCopy
提出用ファイル
  ↓
Power Query削除
  ↓
WorkbookConnection削除
  ↓
シート上の既存データを残す
  ↓
保存
```

という処理を行います。

---

## 9. 今回の重要ポイント

今回の修正では、単に

```vba
fd.AllowMultiSelect = True
```

とするだけでは不十分です。

重要なのは次の3点です。

- `fd.SelectedItems(1)` を使わず、`For Each` で全選択ファイルを処理する。
- `destinationFilePath` を**ループのたびに元ファイルから生成し直す**。
- フォルダ・ファイル名・拡張子を明確に分離してから提出用ファイル名を組み立てる。

特に今回発生した

```text
._提出用.xlsx
```

という現象は、複数ファイル処理そのものではなく、**ファイル名抽出ロジックの問題**と考えるのが適切です。

---

## 10. 今後改善するとしたら

現在のマクロでも基本的な一括処理は可能ですが、業務用マクロとして安定させるなら次の改善余地があります。

- 同名の `_提出用.xlsx` がすでに存在した場合の処理
- 1ファイルでエラーが起きても、残りのファイルを続行する仕組み
- 成功／失敗したファイルの一覧表示
- `ScreenUpdating` や `DisplayAlerts` をエラー発生時にも必ず元へ戻すエラーハンドリング
- `.xlsm` も処理対象にするかどうか
- `.xls` を最終的に `.xls` のまま提出用とするのか、`.xlsx` に統一するのか

特に**既存の提出用ファイルが存在する場合**は、現在の `FileCopy` ではエラーになるため、実運用では仕様を決めておいた方が安全です。

現時点での処理方針を一言でまとめると、**「選択した各Excelファイルを個別に複製し、その複製側からPower Queryと接続だけを取り除いた提出用ファイルを、一括で生成するマクロ」**です。