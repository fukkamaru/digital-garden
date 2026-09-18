---
title: 管理部署別棚卸ファイル切り出しVBA：初期版
aliases:
  - VBAで個別のファイルをガッチャンコする その1
  - 管理部署別棚卸ファイルの切り出し
type: literature
created: 2026-08-13T10:11:24+09:00
updated: 2026-09-18T04:06:51+09:00
id: 20260813-101124
permalink:
draft: false
tags:
  - vba
  - historical-note
  - inventory
---
# 管理部署別棚卸ファイル切り出しVBA：初期版

これは、1つの棚卸ブックにある「使用」「不使用と廃番」のデータを、管理部署ごとのExcelファイルへ切り出すために当時作成した初期コードである。コードブロックは当時の記録として変更していない。

同じコードを再掲した「その3」は重複ノートとして退避後に削除した。機能を拡張した後続版は[[VBAで個別ファイルをガッチャンコする その4|管理部署別棚卸ファイル切り出しVBA：拡張版]]、安全な後継設計は[[safe-department-inventory-workbook-export|管理部署別棚卸ファイルを安全に切り出すVBA]]を参照。

## VBAコード

```vba
Option Explicit

Sub CreateFilteredDepartmentFiles()
    ' 変数宣言
    Dim departmentListSheet As Worksheet
    Dim activeSourceSheet As Worksheet
    Dim inactiveSourceSheet As Worksheet
    Dim departmentRange As Range
    Dim departmentCell As Range
    Dim uniqueDepartments As Collection
    Dim currentDepartment As Variant
    Dim departmentWorkbook As Workbook
    Dim outputFolderPath As String
    Dim activeDataRange As Range
    Dim inactiveDataRange As Range
    Dim activeDepartmentColumn As Long
    Dim inactiveDepartmentColumn As Long

    ' シートの設定
    Set departmentListSheet = ThisWorkbook.Sheets("管理部署一覧")
    Set activeSourceSheet = ThisWorkbook.Sheets("使用")
    Set inactiveSourceSheet = ThisWorkbook.Sheets("不使用と廃番")

    ' "管理部署一覧"の"管理部署"列の範囲を設定
    Set departmentRange = departmentListSheet.Range("A2:A" & departmentListSheet.Cells(departmentListSheet.Rows.Count, "A").End(xlUp).row)

    ' ユニークな部署名を保存するコレクションを作成
    Set uniqueDepartments = New Collection

    ' 範囲内の各セルをループしてユニークな部署名を取得
    On Error Resume Next
    For Each departmentCell In departmentRange
        If departmentCell.value <> "" Then
            uniqueDepartments.Add departmentCell.value, CStr(departmentCell.value)
        End If
    Next cell
    On Error GoTo 0

    ' 現在のディレクトリを取得
    outputFolderPath = ThisWorkbook.Path

    ' データ範囲を設定
    Set activeDataRange = activeSourceSheet.Range("A1").CurrentRegion
    Set inactiveDataRange = inactiveSourceSheet.Range("A1").CurrentRegion

    ' "管理部署"の列番号を取得
    activeDepartmentColumn = 0
    inactiveDepartmentColumn = 0
    On Error Resume Next
    activeDepartmentColumn = activeSourceSheet.Rows(1).Find(What:="管理部署", LookIn:=xlValues, LookAt:=xlWhole).Column
    inactiveDepartmentColumn = inactiveSourceSheet.Rows(1).Find(What:="管理部署", LookIn:=xlValues, LookAt:=xlWhole).Column
    On Error GoTo 0

    ' "管理部署"列が見つからない場合のエラーメッセージ
    If activeDepartmentColumn = 0 Or inactiveDepartmentColumn = 0 Then
        MsgBox "管理部署列がいずれかのシートに見つかりませんでした！", vbCritical
        Exit Sub
    End If

    ' 各部署名ごとに新しいExcelファイルを作成
    For Each currentDepartment In uniqueDepartments
        ' 新しいブックを作成
        Set departmentWorkbook = Workbooks.Add

        ' 新しいシートを追加して名前を変更
        With departmentWorkbook
            .Sheets(1).Name = "使用"
            .Sheets.Add(After:=.Sheets(1)).Name = "不使用と廃番"
            .SaveAs fileName:=outputFolderPath & "\棚卸表_原料_" & currentDepartment & ".xlsx"
        End With

        ' 部署名でデータをフィルターし、新しいブックの"使用"シートにコピー
        activeDataRange.AutoFilter Field:=activeDepartmentColumn, Criteria1:=currentDepartment
        activeDataRange.SpecialCells(xlCellTypeVisible).Copy Destination:=departmentWorkbook.Sheets("使用").Range("A1")
        activeSourceSheet.AutoFilterMode = False

        ' 部署名でデータをフィルターし、新しいブックの"不使用と廃番"シートにコピー
        inactiveDataRange.AutoFilter Field:=inactiveDepartmentColumn, Criteria1:=currentDepartment
        inactiveDataRange.SpecialCells(xlCellTypeVisible).Copy Destination:=departmentWorkbook.Sheets("不使用と廃番").Range("A1")
        inactiveSourceSheet.AutoFilterMode = False

        ' 新しいブックを閉じる
        departmentWorkbook.Close SaveChanges:=True
    Next currentDepartment

    ' 元のシートの全データを表示
    On Error Resume Next
    If activeSourceSheet.FilterMode Then activeSourceSheet.ShowAllData
    If inactiveSourceSheet.FilterMode Then inactiveSourceSheet.ShowAllData
    On Error GoTo 0

    ' ユーザーに完了メッセージを表示
    MsgBox "すべての部署のフィルタリングされたデータが現在のディレクトリに作成されました。"
End Sub
```
