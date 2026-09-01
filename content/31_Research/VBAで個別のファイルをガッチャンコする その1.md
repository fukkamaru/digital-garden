---
title: VBAで個別のファイルをガッチャンコする その1
aliases:
  - VBAで個別のファイルをガッチャンコする その1
type:
created: 2026-08-13T10:11:24+09:00
updated: 2026-09-01T19:28:44+09:00
id: 20260813-101124
permalink:
draft: true
tags:
  - ai-generated
---
# VBAで個別のファイルをガッチャンコする その1

## VBAコード

```vba
Option Explicit

Sub CreateFilteredDepartmentFiles()
    ' 変数宣言
    Dim ws As Worksheet                  ' シート変数
    Dim wsSourceUsage As Worksheet       ' "使用"シート変数
    Dim wsSourceUnused As Worksheet      ' "不使用と廃番"シート変数
    Dim rng As Range                     ' 管理部署の範囲変数
    Dim cell As Range                    ' 各セル変数
    Dim departmentList As Collection     ' 部署名コレクション
    Dim departmentName As Variant        ' 部署名変数
    Dim newWorkbook As Workbook          ' 新規ブック変数
    Dim currentDirectory As String       ' 現在のディレクトリ変数
    Dim sourceDataUsage As Range         ' "使用"データ範囲
    Dim sourceDataUnused As Range        ' "不使用と廃番"データ範囲
    Dim colNumUsage As Long              ' "使用"シートの管理部署列番号
    Dim colNumUnused As Long             ' "不使用と廃番"シートの管理部署列番号

    ' シートの設定
    Set ws = ThisWorkbook.Sheets("管理部署一覧")
    Set wsSourceUsage = ThisWorkbook.Sheets("使用")
    Set wsSourceUnused = ThisWorkbook.Sheets("不使用と廃番")

    ' "管理部署一覧"の"管理部署"列の範囲を設定
    Set rng = ws.Range("A2:A" & ws.Cells(ws.Rows.Count, "A").End(xlUp).row)

    ' ユニークな部署名を保存するコレクションを作成
    Set departmentList = New Collection

    ' 範囲内の各セルをループしてユニークな部署名を取得
    On Error Resume Next
    For Each cell In rng
        If cell.value <> "" Then
            departmentList.Add cell.value, CStr(cell.value)
        End If
    Next cell
    On Error GoTo 0

    ' 現在のディレクトリを取得
    currentDirectory = ThisWorkbook.Path

    ' データ範囲を設定
    Set sourceDataUsage = wsSourceUsage.Range("A1").CurrentRegion
    Set sourceDataUnused = wsSourceUnused.Range("A1").CurrentRegion

    ' "管理部署"の列番号を取得
    colNumUsage = 0
    colNumUnused = 0
    On Error Resume Next
    colNumUsage = wsSourceUsage.Rows(1).Find(What:="管理部署", LookIn:=xlValues, LookAt:=xlWhole).Column
    colNumUnused = wsSourceUnused.Rows(1).Find(What:="管理部署", LookIn:=xlValues, LookAt:=xlWhole).Column
    On Error GoTo 0

    ' "管理部署"列が見つからない場合のエラーメッセージ
    If colNumUsage = 0 Or colNumUnused = 0 Then
        MsgBox "管理部署列がいずれかのシートに見つかりませんでした！", vbCritical
        Exit Sub
    End If

    ' 各部署名ごとに新しいExcelファイルを作成
    For Each departmentName In departmentList
        ' 新しいブックを作成
        Set newWorkbook = Workbooks.Add

        ' 新しいシートを追加して名前を変更
        With newWorkbook
            .Sheets(1).Name = "使用"
            .Sheets.Add(After:=.Sheets(1)).Name = "不使用と廃番"
            .SaveAs fileName:=currentDirectory & "\棚卸表_原料_" & departmentName & ".xlsx"
        End With

        ' 部署名でデータをフィルターし、新しいブックの"使用"シートにコピー
        sourceDataUsage.AutoFilter Field:=colNumUsage, Criteria1:=departmentName
        sourceDataUsage.SpecialCells(xlCellTypeVisible).Copy Destination:=newWorkbook.Sheets("使用").Range("A1")
        wsSourceUsage.AutoFilterMode = False

        ' 部署名でデータをフィルターし、新しいブックの"不使用と廃番"シートにコピー
        sourceDataUnused.AutoFilter Field:=colNumUnused, Criteria1:=departmentName
        sourceDataUnused.SpecialCells(xlCellTypeVisible).Copy Destination:=newWorkbook.Sheets("不使用と廃番").Range("A1")
        wsSourceUnused.AutoFilterMode = False

        ' 新しいブックを閉じる
        newWorkbook.Close SaveChanges:=True
    Next departmentName

    ' 元のシートの全データを表示
    On Error Resume Next
    If wsSourceUsage.FilterMode Then wsSourceUsage.ShowAllData
    If wsSourceUnused.FilterMode Then wsSourceUnused.ShowAllData
    On Error GoTo 0

    ' ユーザーに完了メッセージを表示
    MsgBox "すべての部署のフィルタリングされたデータが現在のディレクトリに作成されました。"
End Sub
```
