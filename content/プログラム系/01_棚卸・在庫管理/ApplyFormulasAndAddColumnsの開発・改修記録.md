---
title: ApplyFormulasAndAddColumnsの開発・改修記録
aliases:
  - ApplyFormulasAndAddColumnsの開発・改修記録
  - "`ApplyFormulasAndAddColumns` VBA改修まとめ — 副資材専用から原料・副資材両対応へ"
  - VBA「ApplyFormulasAndAddColumns」修正・確認の整理
  - VBA「ApplyFormulasAndAddColumns」開発・修正経緯まとめ
type:
created: 2026-09-03T23:06:54+09:00
updated: 2026-09-03T23:06:54+09:00
id: 20260903-230654
permalink:
draft: true
tags:
---

このノートは、棚卸フォーマットを加工するVBAマクロ `ApplyFormulasAndAddColumns` について、複数の過去メモに分かれていた開発・修正の記録を統合したものです。

元の活動日時は記録から確認できないため、以下では実際の日付順ではなく、内容から推定した開発段階順に整理しています。コードは現在使用しているものではなく、当時の記録から再構成した未検証の最終版候補です。

## マクロの目的

棚卸フォーマットのExcelファイルを選び、入力した年月に対応する次の3列を追加します。

- `数量_YYYYMM`
- `単価_YYYYMM`
- `金額_YYYYMM`

新しい列は、入力年月の4か月前に相当する同種の列の左側へ追加します。その後、識別子や重複確認用の列、単価、金額、Statusなどへ計算式を設定する構想でした。

開発初期は副資材だけが対象でしたが、後の段階で原料にも対応させる設計へ拡張されています。

## 対象としていたテーブル

|種別|状態|シート|テーブル|
|---|---|---|---|
|副資材|使用|`使用`|`棚卸表_副資材_使用`|
|副資材|不使用と廃番|`不使用と廃番`|`棚卸表_副資材_不使用と廃番`|
|原料|使用|`使用`|`棚卸表_原料_使用`|
|原料|不使用と廃番|`不使用と廃番`|`棚卸表_原料_不使用と廃番`|

「不使用と廃盤」と記載された途中記録もありましたが、正しいシート名・状態名は「不使用と廃番」です。

## 推定した開発段階

### 段階1：副資材用マクロの作成

最初は副資材の「使用」と「不使用と廃番」を処理するマクロとして作られていました。

主な役割分担は次のとおりです。

|プロシージャまたは関数|役割|
|---|---|
|`ApplyFormulasAndAddColumns`|ファイル選択、種別判定、年月入力、対象ブックの取得|
|`ProcessTable`|4か月前の算出、列追加、計算式の設定|
|`AddColumnBefore`|基準列の左側へ新しい年月列を追加|
|`ColumnExists`|指定した列がテーブルに存在するか確認|

入力例が `202502` の場合、4か月前は `202410` です。

```text
数量_202502 | 数量_202410
単価_202502 | 単価_202410
金額_202502 | 金額_202410
```

新しい列がすでに存在する場合は追加せず、同名列の重複を防ぐ仕様でした。

### 段階2：「使用」と「不使用と廃番」の参照を分離

開発途中では、1組のシート変数とテーブル変数を使い回したため、「使用」は処理できても「不使用と廃番」を正しく処理できない問題がありました。

そこで、次のように参照を分ける方針になりました。

```vba
Dim wsUsage As Worksheet
Dim tblUsage As ListObject

Dim wsUnused As Worksheet
Dim tblUnused As ListObject
```

この変更によって、2つのテーブルを個別に取得し、同じ処理を明示的に適用する構造になりました。

### 段階3：年月列と計算式の整理

年月が付く列は次の3つだけです。

- `数量_YYYYMM`
- `単価_YYYYMM`
- `金額_YYYYMM`

次のような識別・確認用列には年月を付けない設計でした。

|列|記録上の目的|
|---|---|
|`AM_UID`|副資材のコードと発注先を連結した識別子|
|`RM_UID`|原料用の識別子|
|`Code_Cnt`|同じコードの件数|
|`AM_UID_Cnt` / `RM_UID_Cnt`|同じUIDの件数|
|`AM_Dup_Cnt_PII` / `RM_Dup_Cnt_PII`|Purchase Item Information側の一致件数|
|`Max_Cnt`|重複確認用カウントの最大値|
|`Current Status`または`Current_Status`|Purchase Item Information側のStatus|

副資材用UIDは、次の式で作る想定でした。

```excel
=TEXTJOIN("_", FALSE, [@コード], [@発注先])
```

### 段階4：書式コピーの試行と失敗

追加した年月列へ、右隣にある4か月前の列の書式を引き継ぐ処理が試されました。

当初は `NumberFormat`、背景色、文字色、太字、配置などを個別にコピーしましたが、追加列が黒くなる問題が発生しました。そのため、いったんVBAによる書式操作を削除する判断が記録されています。

その後、値や数式ではなく書式だけをコピーする `CopyFormat` が再検討されました。ここでは次の型指定によってエラーが発生しています。

```vba
Dim colName As String
For Each colName In targetCols
```

`For Each` の制御変数には `Variant` またはObjectが必要なため、次のように修正されました。

```vba
Dim colName As Variant
```

この型修正後、`xlPasteFormats` を使った処理が動作したという記録があります。ただし、当時確認したコピー範囲がヘッダーだけだったのか列全体だったのかは、3件の記録から確定できません。

### 段階5：計算式の参照エラー

単価とStatusは、同一ブックの `PII` シートにある `PurchaseItemInformation` テーブルから取得する構想でした。

途中では `INDIRECT` を組み合わせた式を使用しました。VBAによる式の書き込み自体は成功しましたが、Excel上の結果が `#N/A` になりました。

この時点で分かったのは、VBAが式を書き込めない問題ではなく、`MATCH` が一致するUIDを取得できていない可能性が高いということです。

最後に、目的列を直接 `INDEX` する次の形が候補になりました。

```excel
=INDEX(
    PII!PurchaseItemInformation[単価],
    MATCH(
        [@[AM_UID]],
        PII!PurchaseItemInformation[AM_UID],
        0
    )
)
```

ただし、この直接参照案の動作確認は記録上完了していません。

### 段階6：原料への対応拡張

初期コードには、ファイル名に「原料」が含まれる場合は処理を終了する分岐がありました。これを廃止し、ファイル名から原料と副資材を判定して双方を処理する方向へ変更しました。

```vba
isRawMaterial = (InStr(fileName, "原料") > 0)
isSubMaterial = (InStr(fileName, "副資材") > 0)
```

原料では、副資材用の `AM_UID` と `AM_UID_Cnt` を、それぞれ `RM_UID` と `RM_UID_Cnt` に置き換える方針でした。

最初の原料対応案には「使用」テーブルしか含まれておらず、「不使用と廃番」の処理が抜けていました。指摘後、副資材と同様に2テーブルを処理する構成へ修正されています。

## 最終版候補として再構成したコード

以下は3件の記録に残っていた仕様と断片を統合し、構造が分かる形に再構成したコードです。当時実際に使われた完全版ではなく、現在のExcelブックでも動作確認していません。

また、元の記録にあった個人環境固有の初期フォルダは、この再構成版には含めていません。

```vba
Option Explicit

Public Sub ApplyFormulasAndAddColumns()
    Dim selectedFile As Variant
    Dim fileName As String
    Dim yyyyMM As String
    Dim targetBook As Workbook
    Dim isRawMaterial As Boolean
    Dim isSubMaterial As Boolean

    selectedFile = Application.GetOpenFilename( _
        FileFilter:="Excel Files (*.xlsx), *.xlsx", _
        Title:="棚卸フォーマットを選択してください" _
    )

    If VarType(selectedFile) = vbBoolean Then Exit Sub

    fileName = Dir(CStr(selectedFile))

    If InStr(1, fileName, "棚卸フォーマット", vbTextCompare) = 0 Then
        MsgBox "棚卸フォーマットのファイルではありません。", vbExclamation
        Exit Sub
    End If

    isRawMaterial = (InStr(1, fileName, "原料", vbTextCompare) > 0)
    isSubMaterial = (InStr(1, fileName, "副資材", vbTextCompare) > 0)

    If Not isRawMaterial And Not isSubMaterial Then
        MsgBox "原料または副資材を判定できません。", vbExclamation
        Exit Sub
    End If

    yyyyMM = InputBox("対象年月をYYYYMM形式で入力してください。")
    If Not IsValidYearMonth(yyyyMM) Then
        MsgBox "YYYYMM形式の年月を入力してください。", vbExclamation
        Exit Sub
    End If

    On Error GoTo ErrorHandler
    Set targetBook = Workbooks.Open(CStr(selectedFile))

    If isSubMaterial Then
        ProcessTargetTable targetBook, "使用", _
            "棚卸表_副資材_使用", yyyyMM, False
        ProcessTargetTable targetBook, "不使用と廃番", _
            "棚卸表_副資材_不使用と廃番", yyyyMM, False
    Else
        ProcessTargetTable targetBook, "使用", _
            "棚卸表_原料_使用", yyyyMM, True
        ProcessTargetTable targetBook, "不使用と廃番", _
            "棚卸表_原料_不使用と廃番", yyyyMM, True
    End If

    MsgBox "処理が完了しました。", vbInformation
    Exit Sub

ErrorHandler:
    MsgBox "処理中にエラーが発生しました: " & Err.Description, vbExclamation
End Sub

Private Sub ProcessTargetTable( _
    ByVal targetBook As Workbook, _
    ByVal sheetName As String, _
    ByVal tableName As String, _
    ByVal yyyyMM As String, _
    ByVal isRawMaterial As Boolean _
)
    Dim targetSheet As Worksheet
    Dim targetTable As ListObject

    On Error Resume Next
    Set targetSheet = targetBook.Worksheets(sheetName)
    If Not targetSheet Is Nothing Then
        Set targetTable = targetSheet.ListObjects(tableName)
    End If
    On Error GoTo 0

    If targetTable Is Nothing Then
        MsgBox "テーブル「" & tableName & "」が見つかりません。", vbExclamation
        Exit Sub
    End If

    If isRawMaterial Then
        ProcessTableRawMaterial targetTable, yyyyMM
    Else
        ProcessTable targetTable, yyyyMM
    End If

    CopyFormat targetTable, yyyyMM
End Sub

Private Sub ProcessTable(ByVal tbl As ListObject, ByVal yyyyMM As String)
    ProcessTableCore tbl, yyyyMM, _
        "AM_UID", "AM_UID_Cnt", "AM_Dup_Cnt_PII"
End Sub

Private Sub ProcessTableRawMaterial( _
    ByVal tbl As ListObject, _
    ByVal yyyyMM As String _
)
    ProcessTableCore tbl, yyyyMM, _
        "RM_UID", "RM_UID_Cnt", "RM_Dup_Cnt_PII"
End Sub

Private Sub ProcessTableCore( _
    ByVal tbl As ListObject, _
    ByVal yyyyMM As String, _
    ByVal uidColumn As String, _
    ByVal uidCountColumn As String, _
    ByVal piiCountColumn As String _
)
    Dim fourMonthsAgo As String
    Dim statusColumn As String

    fourMonthsAgo = Format( _
        DateAdd( _
            "m", _
            -4, _
            DateValue(Left(yyyyMM, 4) & "/" & Right(yyyyMM, 2) & "/01") _
        ), _
        "yyyymm" _
    )

    AddColumnBefore tbl, "数量_", yyyyMM, fourMonthsAgo
    AddColumnBefore tbl, "単価_", yyyyMM, fourMonthsAgo
    AddColumnBefore tbl, "金額_", yyyyMM, fourMonthsAgo

    SetTableFormula tbl, uidColumn, _
        "=TEXTJOIN(""_"",FALSE,[@コード],[@発注先])"
    SetTableFormula tbl, "Code_Cnt", _
        "=COUNTIF([コード],[@コード])"
    SetTableFormula tbl, uidCountColumn, _
        "=COUNTIF([" & uidColumn & "],[@[" & uidColumn & "]])"
    SetTableFormula tbl, piiCountColumn, _
        "=COUNTIF(PII!PurchaseItemInformation[" & uidColumn & _
        "],[@[" & uidColumn & "]])"
    SetTableFormula tbl, "Max_Cnt", _
        "=MAX([@[Code_Cnt]:[" & piiCountColumn & "]])"
    SetTableFormula tbl, "単価_" & yyyyMM, _
        "=INDEX(PII!PurchaseItemInformation[単価]," & _
        "MATCH([@[" & uidColumn & "]]," & _
        "PII!PurchaseItemInformation[" & uidColumn & "],0))"
    SetTableFormula tbl, "金額_" & yyyyMM, _
        "=[@[数量_" & yyyyMM & "]]*[@[単価_" & yyyyMM & "]]"

    If ColumnExists(tbl, "Current_Status") Then
        statusColumn = "Current_Status"
    ElseIf ColumnExists(tbl, "Current Status") Then
        statusColumn = "Current Status"
    End If

    If statusColumn <> "" Then
        SetTableFormula tbl, statusColumn, _
            "=INDEX(PII!PurchaseItemInformation[Status]," & _
            "MATCH([@[" & uidColumn & "]]," & _
            "PII!PurchaseItemInformation[" & uidColumn & "],0))"
    End If
End Sub

Private Sub SetTableFormula( _
    ByVal tbl As ListObject, _
    ByVal columnName As String, _
    ByVal formulaText As String _
)
    Dim targetRange As Range

    If Not ColumnExists(tbl, columnName) Then Exit Sub
    Set targetRange = tbl.ListColumns(columnName).DataBodyRange

    If Not targetRange Is Nothing Then
        targetRange.Formula = formulaText
    End If
End Sub

Private Sub AddColumnBefore( _
    ByVal tbl As ListObject, _
    ByVal baseName As String, _
    ByVal yyyyMM As String, _
    ByVal fourMonthsAgo As String _
)
    Dim baseColumn As ListColumn
    Dim newColumn As ListColumn

    If Not ColumnExists(tbl, baseName & fourMonthsAgo) Then Exit Sub
    If ColumnExists(tbl, baseName & yyyyMM) Then Exit Sub

    Set baseColumn = tbl.ListColumns(baseName & fourMonthsAgo)
    Set newColumn = tbl.ListColumns.Add(Position:=baseColumn.Index)
    newColumn.Name = baseName & yyyyMM
End Sub

Private Sub CopyFormat(ByVal tbl As ListObject, ByVal yyyyMM As String)
    Dim targetColumns As Variant
    Dim columnPrefix As Variant
    Dim targetColumn As ListColumn
    Dim sourceRange As Range
    Dim destinationRange As Range

    targetColumns = Array("数量_", "単価_", "金額_")

    For Each columnPrefix In targetColumns
        If ColumnExists(tbl, CStr(columnPrefix) & yyyyMM) Then
            Set targetColumn = tbl.ListColumns(CStr(columnPrefix) & yyyyMM)

            If targetColumn.Index < tbl.ListColumns.Count Then
                Set destinationRange = targetColumn.Range
                Set sourceRange = targetColumn.Range.Offset(0, 1).Resize( _
                    targetColumn.Range.Rows.Count, _
                    targetColumn.Range.Columns.Count _
                )

                sourceRange.Copy
                destinationRange.PasteSpecial Paste:=xlPasteFormats
            End If
        End If
    Next columnPrefix

    Application.CutCopyMode = False
End Sub

Private Function ColumnExists( _
    ByVal tbl As ListObject, _
    ByVal columnName As String _
) As Boolean
    Dim columnItem As ListColumn

    For Each columnItem In tbl.ListColumns
        If columnItem.Name = columnName Then
            ColumnExists = True
            Exit Function
        End If
    Next columnItem

    ColumnExists = False
End Function

Private Function IsValidYearMonth(ByVal yyyyMM As String) As Boolean
    Dim monthValue As Integer

    If Len(yyyyMM) <> 6 Then Exit Function
    If Not yyyyMM Like "######" Then Exit Function

    monthValue = CInt(Right(yyyyMM, 2))
    IsValidYearMonth = (monthValue >= 1 And monthValue <= 12)
End Function
```

## 再構成コードで行った推定

記録に完全版が残っていなかったため、次の点はAIが推定して補っています。

- 副資材と原料の共通部分を `ProcessTableCore` にまとめた。
- `Current Status` と `Current_Status` の両方を候補として扱った。
- `INDIRECT` を使わず、目的列を直接参照する式を採用した。
- `CopyFormat` はヘッダーだけでなく、テーブル列全体へ適用する形にした。
- 元の個人環境固有の初期フォルダ指定を削除した。
- ファイル選択、年月入力、テーブル取得に最低限の確認処理を加えた。

これらは、当時の完成コードを復元できたことを意味しません。記録に残された意図を、ひとつの読みやすいコードへ再構成したものです。

## 確認できた仕様

- マクロ名は `ApplyFormulasAndAddColumns`。
- 入力年月は `YYYYMM` 形式。
- 入力年月の4か月前を基準にする。
- `数量_YYYYMM`、`単価_YYYYMM`、`金額_YYYYMM` を基準列の左へ追加する。
- 同名列がすでにある場合は追加しない。
- 「使用」と「不使用と廃番」は別々に取得する。
- 書式コピー処理は、列追加と計算式設定の後に行う。
- `For Each` で使用する列名変数は `Variant` とする。
- 原料と副資材の双方について、「使用」と「不使用と廃番」を処理対象とする。

## 未解決・未検証事項

- `RM_UID` が本当に「コード＋発注先」の2項目でよいかは不明。
- `RM_Dup_Cnt_PII` が当時正式採用された列名かは不明。
- `Current Status` と `Current_Status` のどちらが最終的な列名かは不明。
- 原料側の `PurchaseItemInformation` に `RM_UID` が存在するかは未確認。
- 単価・Statusの直接構造化参照式は、記録上では動作確認が完了していない。
- `Max_Cnt` の計算範囲が「不使用と廃番」でも同じ設計だったかは不明。
- `CopyFormat` を列全体に適用する再構成は未検証。
- 完全版コードが残っていないため、実行前提のコードとしては扱えない。

## この記録から分かること

この活動では、単にVBAコードを書いただけでなく、次のような実務上の問題を順番に切り分けていました。

- 年月を基準にした動的な列追加
- テーブル列の存在確認と重複防止
- 複数シート・複数テーブルの明示的な管理
- Excelテーブルへ数式を一括設定する方法
- 書式コピーによる表示崩れと型エラーへの対処
- Purchase Item Informationとの照合
- 副資材専用処理から原料・副資材共通処理への拡張
- 途中のコード省略や要件漏れを発見し、修正する過程

最終的な動作コードを保存する資料というより、棚卸業務の自動化を試行錯誤しながら組み立てた活動記録として位置づけるのが適切です。

## 統合元ファイル

次の3ファイルを内容確認のうえ統合しました。元ファイルは削除せず、`99_統合元ファイル/01_棚卸・在庫管理/` に退避しています。

- 「 `ApplyFormulasAndAddColumns` VBA改修まとめ — 副資材専用から原料・副資材両対応へ.md 」
- 「VBA「ApplyFormulasAndAddColumns」修正・確認の整理.md」
- 「VBA「ApplyFormulasAndAddColumns」開発・修正経緯まとめ.md」
