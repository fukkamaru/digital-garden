---
title: 部署別棚卸ファイル再集約VBA：初期版
aliases:
  - VBAで個別のファイルをガッチャンコする その2
  - 部署別棚卸ファイルの再集約
type: literature
created: 2026-08-13T10:12:57+09:00
updated: 2026-09-18T04:34:24+09:00
id: 20260813-101257
permalink:
draft: false
tags:
  - vba
  - historical-note
  - inventory
---
# 部署別棚卸ファイル再集約VBA：初期版

これは、[[VBAで個別のファイルをガッチャンコする その1|部署別ファイルの切り出し]]後に、各部署が棚卸入力したファイルを1つの棚卸ブックへ戻すために当時作成した初期コードである。コードブロックは開発履歴として変更していない。

初期版は現在の元ブックへ追記する構造である。各棚卸サイクルを新しいファイルとして残す現在の運用に合わせ、既存の`.xlsm`をコピーしてコピー側だけを再集約する後継例は[[safe-department-inventory-workbook-combine|部署別棚卸ファイルを安全に再集約するVBA]]に分離した。

## VBAコード

```vba
Option Explicit

Sub CombineDepartmentFiles()
    ' 変数宣言
    Dim departmentListSheet As Worksheet
    Dim departmentRange As Range
    Dim departmentCell As Range
    Dim uniqueDepartments As Collection
    Dim currentDepartment As Variant
    Dim departmentWorkbook As Workbook
    Dim sourceFolderPath As String
    Dim departmentFilePath As String
    Dim inputWorksheet As Worksheet
    Dim aggregateActiveSheet As Worksheet
    Dim aggregateInactiveSheet As Worksheet
    Dim nextActiveRow As Long
    Dim nextInactiveRow As Long
    Dim headerRowRange As Range
    Dim headerSignature As String

    ' シートの設定
    Set departmentListSheet = ThisWorkbook.Sheets("管理部署一覧")

    ' "管理部署一覧"の"管理部署"列の範囲を設定
    Set departmentRange = departmentListSheet.Range("A2:A" & departmentListSheet.Cells(departmentListSheet.Rows.Count, "A").End(xlUp).Row)

    ' ユニークな部署名を保存するコレクションを作成
    Set uniqueDepartments = New Collection

    ' 範囲内の各セルをループしてユニークな部署名を取得
    On Error Resume Next
    For Each departmentCell In departmentRange
        If departmentCell.Value <> "" Then
            uniqueDepartments.Add departmentCell.Value, CStr(departmentCell.Value)
        End If
    Next cell
    On Error GoTo 0

    ' 現在のディレクトリを取得
    sourceFolderPath = ThisWorkbook.Path

    ' デスティネーションシートを設定または作成
    On Error Resume Next
    Set aggregateActiveSheet = ThisWorkbook.Sheets("使用")
    Set aggregateInactiveSheet = ThisWorkbook.Sheets("不使用と廃番")
    On Error GoTo 0

    If aggregateActiveSheet Is Nothing Then
        Set aggregateActiveSheet = ThisWorkbook.Sheets.Add(After:=ThisWorkbook.Sheets(ThisWorkbook.Sheets.Count))
        aggregateActiveSheet.Name = "使用"
    End If

    If aggregateInactiveSheet Is Nothing Then
        Set aggregateInactiveSheet = ThisWorkbook.Sheets.Add(After:=ThisWorkbook.Sheets(ThisWorkbook.Sheets.Count))
        aggregateInactiveSheet.Name = "不使用と廃番"
    End If

    ' 各部署名ごとにファイルを結合
    For Each currentDepartment In uniqueDepartments
        ' ファイル名を設定
        departmentFilePath = sourceFolderPath & "\棚卸表_原料_" & currentDepartment & ".xlsx"
        
        ' ファイルが存在するか確認
        If Dir(departmentFilePath) <> "" Then
            ' ソースブックを開く
            Set departmentWorkbook = Workbooks.Open(departmentFilePath)
            
            ' "使用"シートのデータを結合
            On Error Resume Next
            Set inputWorksheet = departmentWorkbook.Sheets("使用")
            On Error GoTo 0
            If Not inputWorksheet Is Nothing Then
                nextActiveRow = aggregateActiveSheet.Cells(aggregateActiveSheet.Rows.Count, "A").End(xlUp).Row + 1
                If nextActiveRow = 2 Then nextActiveRow = 1 ' データがない場合ヘッダ行
                inputWorksheet.UsedRange.Copy Destination:=aggregateActiveSheet.Range("A" & nextActiveRow)
            End If
            
            ' "不使用と廃番"シートのデータを結合
            On Error Resume Next
            Set inputWorksheet = departmentWorkbook.Sheets("不使用と廃番")
            On Error GoTo 0
            If Not inputWorksheet Is Nothing Then
                nextInactiveRow = aggregateInactiveSheet.Cells(aggregateInactiveSheet.Rows.Count, "A").End(xlUp).Row + 1
                If nextInactiveRow = 2 Then nextInactiveRow = 1 ' データがない場合ヘッダ行
                inputWorksheet.UsedRange.Copy Destination:=aggregateInactiveSheet.Range("A" & nextInactiveRow)
            End If
            
            ' ソースブックを閉じる
            departmentWorkbook.Close SaveChanges:=False
        End If
    Next currentDepartment

    ' 重複ヘッダー行の削除
    Set headerRowRange = aggregateActiveSheet.Rows(1)
    headerSignature = Join(Application.WorksheetFunction.Transpose(Application.WorksheetFunction.Transpose(headerRowRange.Value)), ",")
    RemoveDuplicateHeaders aggregateActiveSheet, headerSignature

    Set headerRowRange = aggregateInactiveSheet.Rows(1)
    headerSignature = Join(Application.WorksheetFunction.Transpose(Application.WorksheetFunction.Transpose(headerRowRange.Value)), ",")
    RemoveDuplicateHeaders aggregateInactiveSheet, headerSignature

    ' ユーザーに完了メッセージを表示
    MsgBox "すべての部署のデータが結合されました。"
End Sub

Sub RemoveDuplicateHeaders(targetWorksheet As Worksheet, expectedHeaderSignature As String)
    Dim lastDataRow As Long
    Dim rowIndex As Long
    Dim currentRowSignature As String
    
    lastDataRow = targetWorksheet.Cells(targetWorksheet.Rows.Count, "A").End(xlUp).Row
    
    For rowIndex = lastDataRow To 2 Step -1
        currentRowSignature = Join(Application.WorksheetFunction.Transpose(Application.WorksheetFunction.Transpose(targetWorksheet.Rows(rowIndex).Value)), ",")
        If currentRowSignature = expectedHeaderSignature Then
            targetWorksheet.Rows(rowIndex).Delete
        End If
    Next i
End Sub
```
