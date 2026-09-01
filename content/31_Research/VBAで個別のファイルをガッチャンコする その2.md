---
title: VBAで個別のファイルをガッチャンコする その2
aliases:
  - VBAで個別のファイルをガッチャンコする その2
type:
created: 2026-08-13T10:12:57+09:00
updated: 2026-09-01T19:28:44+09:00
id: 20260813-101257
permalink:
draft: true
tags:
  - ai-generated
---
# VBAで個別のファイルをガッチャンコする その2

## VBAコード

```vba
Option Explicit

Sub CombineDepartmentFiles()
    ' 変数宣言
    Dim ws As Worksheet                  ' シート変数
    Dim rng As Range                     ' 管理部署の範囲変数
    Dim cell As Range                    ' 各セル変数
    Dim departmentList As Collection     ' 部署名コレクション
    Dim departmentName As Variant        ' 部署名変数
    Dim sourceWorkbook As Workbook       ' ソースブック変数
    Dim currentDirectory As String       ' 現在のディレクトリ変数
    Dim fileName As String               ' ファイル名変数
    Dim wsSource As Worksheet            ' ソースシート変数
    Dim wsUsage As Worksheet             ' デスティネーションシート変数（使用）
    Dim wsUnused As Worksheet            ' デスティネーションシート変数（不使用と廃番）
    Dim lastRowUsage As Long             ' 最終行番号（使用）
    Dim lastRowUnused As Long            ' 最終行番号（不使用と廃番）
    Dim headerRange As Range             ' ヘッダー範囲変数
    Dim headerText As String             ' ヘッダーテキスト変数

    ' シートの設定
    Set ws = ThisWorkbook.Sheets("管理部署一覧")

    ' "管理部署一覧"の"管理部署"列の範囲を設定
    Set rng = ws.Range("A2:A" & ws.Cells(ws.Rows.Count, "A").End(xlUp).Row)

    ' ユニークな部署名を保存するコレクションを作成
    Set departmentList = New Collection

    ' 範囲内の各セルをループしてユニークな部署名を取得
    On Error Resume Next
    For Each cell In rng
        If cell.Value <> "" Then
            departmentList.Add cell.Value, CStr(cell.Value)
        End If
    Next cell
    On Error GoTo 0

    ' 現在のディレクトリを取得
    currentDirectory = ThisWorkbook.Path

    ' デスティネーションシートを設定または作成
    On Error Resume Next
    Set wsUsage = ThisWorkbook.Sheets("使用")
    Set wsUnused = ThisWorkbook.Sheets("不使用と廃番")
    On Error GoTo 0

    If wsUsage Is Nothing Then
        Set wsUsage = ThisWorkbook.Sheets.Add(After:=ThisWorkbook.Sheets(ThisWorkbook.Sheets.Count))
        wsUsage.Name = "使用"
    End If

    If wsUnused Is Nothing Then
        Set wsUnused = ThisWorkbook.Sheets.Add(After:=ThisWorkbook.Sheets(ThisWorkbook.Sheets.Count))
        wsUnused.Name = "不使用と廃番"
    End If

    ' 各部署名ごとにファイルを結合
    For Each departmentName In departmentList
        ' ファイル名を設定
        fileName = currentDirectory & "\棚卸表_原料_" & departmentName & ".xlsx"
        
        ' ファイルが存在するか確認
        If Dir(fileName) <> "" Then
            ' ソースブックを開く
            Set sourceWorkbook = Workbooks.Open(fileName)
            
            ' "使用"シートのデータを結合
            On Error Resume Next
            Set wsSource = sourceWorkbook.Sheets("使用")
            On Error GoTo 0
            If Not wsSource Is Nothing Then
                lastRowUsage = wsUsage.Cells(wsUsage.Rows.Count, "A").End(xlUp).Row + 1
                If lastRowUsage = 2 Then lastRowUsage = 1 ' データがない場合ヘッダ行
                wsSource.UsedRange.Copy Destination:=wsUsage.Range("A" & lastRowUsage)
            End If
            
            ' "不使用と廃番"シートのデータを結合
            On Error Resume Next
            Set wsSource = sourceWorkbook.Sheets("不使用と廃番")
            On Error GoTo 0
            If Not wsSource Is Nothing Then
                lastRowUnused = wsUnused.Cells(wsUnused.Rows.Count, "A").End(xlUp).Row + 1
                If lastRowUnused = 2 Then lastRowUnused = 1 ' データがない場合ヘッダ行
                wsSource.UsedRange.Copy Destination:=wsUnused.Range("A" & lastRowUnused)
            End If
            
            ' ソースブックを閉じる
            sourceWorkbook.Close SaveChanges:=False
        End If
    Next departmentName

    ' 重複ヘッダー行の削除
    Set headerRange = wsUsage.Rows(1)
    headerText = Join(Application.WorksheetFunction.Transpose(Application.WorksheetFunction.Transpose(headerRange.Value)), ",")
    RemoveDuplicateHeaders wsUsage, headerText

    Set headerRange = wsUnused.Rows(1)
    headerText = Join(Application.WorksheetFunction.Transpose(Application.WorksheetFunction.Transpose(headerRange.Value)), ",")
    RemoveDuplicateHeaders wsUnused, headerText

    ' ユーザーに完了メッセージを表示
    MsgBox "すべての部署のデータが結合されました。"
End Sub

Sub RemoveDuplicateHeaders(ws As Worksheet, headerText As String)
    Dim lastRow As Long
    Dim i As Long
    Dim currentRowText As String
    
    lastRow = ws.Cells(ws.Rows.Count, "A").End(xlUp).Row
    
    For i = lastRow To 2 Step -1
        currentRowText = Join(Application.WorksheetFunction.Transpose(Application.WorksheetFunction.Transpose(ws.Rows(i).Value)), ",")
        If currentRowText = headerText Then
            ws.Rows(i).Delete
        End If
    Next i
End Sub
```
