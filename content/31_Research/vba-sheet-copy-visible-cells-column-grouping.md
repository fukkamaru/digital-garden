---
title: VBAにおけるシート複製・表示セル抽出・列グループ化
type: literature
created: 2026-08-13T11:06:18+09:00
updated: 2026-09-18T03:31:42+09:00
id: 20260813-110618
permalink:
draft: true
tags:
  - ai-generated
---
# vbaでシートをコピーするときのフィルターとグループ化の挙動について

フィルター・グループ化・手動非表示を含むシートを扱うときは、**シートそのものを複製したいのか、現在表示されているデータだけを抽出したいのか**を分けて考える。両者は結果も用途も異なる。

| 目的 | 主な方法 | 非表示の行・列 | 向く用途 |
| --- | --- | --- | --- |
| シートをそのまま複製する | `Worksheet.Copy` | シート構成の一部として維持される | レイアウト、数式、フィルター設定、アウトラインを含むひな型の複製 |
| 表示セルだけを抽出する | `SpecialCells(xlCellTypeVisible)` | 現在非表示のセルは抽出しない | フィルター結果を別シート・別帳票へ出力 |

`Worksheet.Copy`はワークシートを別の位置やブックへコピーするメソッドであり、データ抽出には使わない。コピー先が新規ブックになる場合、ワークシートのコードシートも引き継がれうるため、マクロを含むひな型を配布する意図があるかも確認する。[Microsoft Learn](https://learn.microsoft.com/en-us/office/vba/api/Excel.Worksheet.Copy)

## シート全体を複製する例

```vba
Option Explicit

Sub CopyWholeSheet()
    Dim sourceSheet As Worksheet
    Dim copiedSheet As Worksheet

    Set sourceSheet = ThisWorkbook.Worksheets("元のシート名")
    sourceSheet.Copy After:=ThisWorkbook.Worksheets(ThisWorkbook.Worksheets.Count)

    Set copiedSheet = ThisWorkbook.Worksheets(ThisWorkbook.Worksheets.Count)
    copiedSheet.Name = "コピーしたシート名"
End Sub
```

この方法は、フィルター状態、グループ化、非表示設定も含めて「シートを複製したい」場合に使う。抽出データだけを渡したい用途には向かない。

## 表示セルだけを抽出する例

```vba
Option Explicit

Sub ExportVisibleCells()
    Dim sourceSheet As Worksheet
    Dim destinationSheet As Worksheet
    Dim visibleRange As Range

    Set sourceSheet = ThisWorkbook.Worksheets("元のシート名")

    On Error Resume Next
    Set visibleRange = sourceSheet.UsedRange.SpecialCells(xlCellTypeVisible)
    On Error GoTo 0

    If visibleRange Is Nothing Then
        MsgBox "表示されているセルがありません。抽出を中止しました。", vbExclamation
        Exit Sub
    End If

    Set destinationSheet = ThisWorkbook.Worksheets.Add(After:=ThisWorkbook.Worksheets(ThisWorkbook.Worksheets.Count))
    destinationSheet.Name = "抽出結果"

    visibleRange.Copy Destination:=destinationSheet.Range("A1")
    Application.CutCopyMode = False
End Sub
```

`SpecialCells(xlCellTypeVisible)`は、フィルター、グループ化、手動非表示の状態を反映して可視セルだけを返す。表示対象がない場合は実行時エラーになるため、上記のように取得失敗を明示的に扱う。`Range.Copy`へコピー先を渡すことで、クリップボード依存の貼り付けを避けられる。[Microsoft Learn](https://learn.microsoft.com/en-us/office/vba/api/excel.range.specialcells) [Microsoft Learn](https://learn.microsoft.com/en-us/office/vba/api/excel.range.copy)

## 抽出前の確認

1. フィルター条件とアウトラインの開閉状態が、意図した表示状態になっているか確認する。
2. 見出し行が可視の範囲に含まれるか確認する。
3. 抽出先のシート名が既存と重複しないことを確認する。
4. 列幅、印刷設定、アウトライン設定まで必要なら、表示セル抽出ではなくシート複製を選ぶ。
