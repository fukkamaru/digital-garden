---
title: vbaでシートをコピーするときのフィルターとグループ化の挙動について
aliases:
  - vbaでシートをコピーするときのフィルターとグループ化の挙動について
type:
created: 2026-08-13T11:06:18+09:00
updated: 2026-09-01T19:28:44+09:00
id: 20260813-110618
permalink:
draft: true
tags:
  - ai-generated
---
# vbaでシートをコピーするときのフィルターとグループ化の挙動について

vbaでシートをコピーする際、フィルタやグループ化して非表示にした箇所はコピーされる？それともされない？

VBAでシートをコピーする際、フィルタやグループ化して非表示にした箇所は基本的にコピーされます。つまり、元のシートに適用されているフィルタやグループ化の設定、非表示行や列はコピー先のシートにも引き継がれます。

以下のコードはシートをコピーする際の例です：

```
Sub CopySheet()
    Dim ws As Worksheet
    Dim newWs As Worksheet
    
    ' シートを指定してコピー
    Set ws = ThisWorkbook.Sheets("元のシート名")
    ws.Copy After:=ThisWorkbook.Sheets(ThisWorkbook.Sheets.Count)
    
    ' コピーされた新しいシートを取得
    Set newWs = ThisWorkbook.Sheets(ThisWorkbook.Sheets.Count)
    
    ' 新しいシートの名前を変更
    newWs.Name = "コピーしたシート名"
End Sub
```

このコードでは、元のシートにあるフィルタやグループ化された非表示の行・列も含めてコピーされます。

もしフィルタやグループ化された非表示の行・列を含めずにコピーしたい場合は、フィルタやグループ化を解除する、またはVisibleプロパティを利用して表示されているセルのみをコピーする必要があります。以下は表示されているセルのみをコピーする例です：

```
Sub CopyVisibleCellsOnly()
    Dim ws As Worksheet
    Dim newWs As Worksheet
    Dim rng As Range
    
    ' シートを指定
    Set ws = ThisWorkbook.Sheets("元のシート名")
    
    ' 表示されているセルの範囲を選択
    ws.UsedRange.SpecialCells(xlCellTypeVisible).Copy
    
    ' 新しいシートを追加
    Set newWs = ThisWorkbook.Sheets.Add(After:=ThisWorkbook.Sheets(ThisWorkbook.Sheets.Count))
    
    ' 新しいシートに貼り付け
    newWs.Paste
    
    ' 新しいシートの名前を変更
    newWs.Name = "コピーしたシート名"
End Sub
```

このコードでは、元のシートの表示されているセルのみを新しいシートにコピーします。フィルタやグループ化で非表示になっているセルはコピーされません。
