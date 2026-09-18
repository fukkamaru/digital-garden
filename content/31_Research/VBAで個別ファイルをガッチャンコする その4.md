---
title: 管理部署別棚卸ファイル切り出しVBA：拡張版
aliases:
  - VBAで個別ファイルをガッチャンコする その4
  - 管理部署別棚卸ファイルの切り出し
type: literature
created: 2026-08-13T11:13:32+09:00
updated: 2026-09-18T04:06:51+09:00
id: 20260813-111332
permalink:
draft: false
tags:
  - vba
  - historical-note
  - inventory
---
# 管理部署別棚卸ファイル切り出しVBA：拡張版

これは、[[VBAで個別のファイルをガッチャンコする その1|初期版]]へ、出力後のテーブル化、品名順ソート、列のグループ化、金額列の式を加えた当時の拡張コードである。元コードは開発履歴として変更していない。

このコードは「個別ファイルの結合」ではなく、管理部署ごとのファイルを出力する処理である。既存ファイルの上書き回避、元ブックを変更しない抽出、テーブルの相対列番号、例外時の後始末を加えた後継例は[[safe-department-inventory-workbook-export|管理部署別棚卸ファイルを安全に切り出すVBA]]に分離した。

## VBAコード

```vba
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
    Dim departmentColumn As Range
    Set departmentColumn = departmentListSheet.Rows(1).Find(What:="管理部署", LookIn:=xlValues, LookAt:=xlWhole)

    If departmentColumn Is Nothing Then
        MsgBox "管理部署列が見つかりませんでした！", vbCritical
        Exit Sub
    Else
        ' "管理部署"列の範囲を設定
        Set departmentRange = departmentListSheet.Range(departmentColumn.Offset(1, 0), departmentListSheet.Cells(departmentListSheet.Rows.Count, departmentColumn.Column).End(xlUp))
    End If

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
            .SaveAs fileName:=outputFolderPath & "\石切棚卸表_原料_" & currentDepartment & ".xlsx"
        End With

        ' 部署名でデータをフィルターし、新しいブックの"使用"シートにコピー
        activeSourceSheet.ListObjects("棚卸表_原料_使用").Range.AutoFilter Field:=activeDepartmentColumn, Criteria1:=currentDepartment
        activeSourceSheet.ListObjects("棚卸表_原料_使用").Range.SpecialCells(xlCellTypeVisible).Copy Destination:=departmentWorkbook.Sheets("使用").Range("A1")
        activeSourceSheet.AutoFilterMode = False

        ' コピー先のデータをテーブル化し、スタイルを設定、名前を変更、セル幅を文字幅に合わせて調整
        Dim activeOutputTable As ListObject
        Set activeOutputTable = departmentWorkbook.Sheets("使用").ListObjects.Add(xlSrcRange, departmentWorkbook.Sheets("使用").Range("A1").CurrentRegion, , xlYes)
        activeOutputTable.TableStyle = "TableStyleLight1"
        activeOutputTable.Name = "棚卸表_原料_使用"
        departmentWorkbook.Sheets("使用").Columns.AutoFit

        ' 品名で昇順にソート
        With newWorkbook.Sheets("使用").Sort
            .SortFields.Clear
            .SortFields.Add Key:=activeOutputTable.ListColumns("品名").Range, Order:=xlAscending
            .SetRange activeOutputTable.Range
            .Header = xlYes
            .Apply
        End With

        ' グループ化と折りたたみ
        Call GroupAndCollapseColumns(departmentWorkbook.Sheets("使用"), "発注単位")
        Call GroupAndCollapseColumns(departmentWorkbook.Sheets("使用"), "数量_202402", "数量_202210")
        Call GroupAndCollapseColumns(departmentWorkbook.Sheets("使用"), "単価_202402", "単価_202210")
        Call GroupAndCollapseColumns(departmentWorkbook.Sheets("使用"), "金額_202402", "金額_202210")
        Call GroupAndCollapseColumnsFrom(departmentWorkbook.Sheets("使用"), "Registration Date")

        ' "金額_202406"列に計算式を代入
        Dim lastDataRow As Long
        Dim quantityColumnIndex As Long
        Dim unitPriceColumnIndex As Long
        Dim amountColumnIndex As Long
        With departmentWorkbook.Sheets("使用")
            lastDataRow = .Cells(.Rows.Count, 1).End(xlUp).Row
            quantityColumnIndex = activeOutputTable.ListColumns("数量_202406").Index
            unitPriceColumnIndex = activeOutputTable.ListColumns("単価_202406").Index
            amountColumnIndex = activeOutputTable.ListColumns("金額_202406").Index
            .Range(.Cells(2, amountColumnIndex), .Cells(lastDataRow, amountColumnIndex)).FormulaR1C1 = "=RC[" & (quantityColumnIndex - amountColumnIndex) & "]*RC[" & (unitPriceColumnIndex - amountColumnIndex) & "]"
        End With

        ' 部署名でデータをフィルターし、新しいブックの"不使用と廃番"シートにコピー
        inactiveSourceSheet.ListObjects("棚卸表_原料_不使用と廃番").Range.AutoFilter Field:=inactiveDepartmentColumn, Criteria1:=currentDepartment
        inactiveSourceSheet.ListObjects("棚卸表_原料_不使用と廃番").Range.SpecialCells(xlCellTypeVisible).Copy Destination:=departmentWorkbook.Sheets("不使用と廃番").Range("A1")
        inactiveSourceSheet.AutoFilterMode = False

        ' コピー先のデータをテーブル化し、スタイルを設定、名前を変更、セル幅を文字幅に合わせて調整
        Dim inactiveOutputTable As ListObject
        Set inactiveOutputTable = departmentWorkbook.Sheets("不使用と廃番").ListObjects.Add(xlSrcRange, departmentWorkbook.Sheets("不使用と廃番").Range("A1").CurrentRegion, , xlYes)
        inactiveOutputTable.TableStyle = "TableStyleLight1"
        inactiveOutputTable.Name = "棚卸表_原料_不使用と廃番"
        departmentWorkbook.Sheets("不使用と廃番").Columns.AutoFit

        ' 品名で昇順にソート
        With newWorkbook.Sheets("不使用と廃番").Sort
            .SortFields.Clear
            .SortFields.Add Key:=activeOutputTable.ListColumns("品名").Range, Order:=xlAscending
            .SetRange activeOutputTable.Range
            .Header = xlYes
            .Apply
        End With

        ' グループ化と折りたたみ
        Call GroupAndCollapseColumns(departmentWorkbook.Sheets("不使用と廃番"), "発注単位")
        Call GroupAndCollapseColumns(departmentWorkbook.Sheets("不使用と廃番"), "数量_202402", "数量_202210")
        Call GroupAndCollapseColumns(departmentWorkbook.Sheets("不使用と廃番"), "単価_202402", "単価_202210")
        Call GroupAndCollapseColumns(departmentWorkbook.Sheets("不使用と廃番"), "金額_202402", "金額_202210")
        Call GroupAndCollapseColumnsFrom(departmentWorkbook.Sheets("不使用と廃番"), "Registration Date")

        ' "金額_202406"列に計算式を代入
        With departmentWorkbook.Sheets("不使用と廃番")
            lastDataRow = .Cells(.Rows.Count, 1).End(xlUp).Row
            quantityColumnIndex = inactiveOutputTable.ListColumns("数量_202406").Index
            unitPriceColumnIndex = inactiveOutputTable.ListColumns("単価_202406").Index
            amountColumnIndex = inactiveOutputTable.ListColumns("金額_202406").Index
            .Range(.Cells(2, amountColumnIndex), .Cells(lastDataRow, amountColumnIndex)).FormulaR1C1 = "=RC[" & (quantityColumnIndex - amountColumnIndex) & "]*RC[" & (unitPriceColumnIndex - amountColumnIndex) & "]"
        End With

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

Sub GroupAndCollapseColumns(ws As Worksheet, startCol As String, Optional endCol As String = "")
    Dim startColumn As Range
    Dim endColumn As Range
    
    Set startColumn = ws.Rows(1).Find(What:=startCol, LookIn:=xlValues, LookAt:=xlWhole)
    If endCol <> "" Then
        Set endColumn = ws.Rows(1).Find(What:=endCol, LookIn:=xlValues, LookAt:=xlWhole)
    Else
        Set endColumn = startColumn
    End If
    
    If Not startColumn Is Nothing And Not endColumn Is Nothing Then
        ws.Range(startColumn, endColumn).Columns.Group
        ws.Outline.ShowLevels ColumnLevels:=1
    End If
End Sub

Sub GroupAndCollapseColumnsFrom(ws As Worksheet, startCol As String)
    Dim startColumn As Range
    
    Set startColumn = ws.Rows(1).Find(What:=startCol, LookIn:=xlValues, LookAt:=xlWhole)
    
    If Not startColumn Is Nothing Then
        ws.Range(startColumn, ws.Cells(1, ws.Columns.Count).End(xlToLeft)).Columns.Group
        ws.Outline.ShowLevels ColumnLevels:=1
    End If
End Sub
```
