---
title: VBAで個別ファイルをガッチャンコする その4
aliases:
  - VBAで個別ファイルをガッチャンコする その4
type:
created: 2026-08-13T11:13:32+09:00
updated: 2026-08-13T11:13:32+09:00
id: 20260813-111332
permalink:
draft: true
tags:
---
Sub CreateFilteredDepartmentFiles()
    ' 変数宣言
    Dim ws As Worksheet
    Dim wsSourceUsage As Worksheet
    Dim wsSourceUnused As Worksheet
    Dim rng As Range
    Dim cell As Range
    Dim departmentList As Collection
    Dim departmentName As Variant
    Dim newWorkbook As Workbook
    Dim currentDirectory As String
    Dim sourceDataUsage As Range
    Dim sourceDataUnused As Range
    Dim colNumUsage As Long
    Dim colNumUnused As Long

    ' シートの設定
    Set ws = ThisWorkbook.Sheets("管理部署一覧")
    Set wsSourceUsage = ThisWorkbook.Sheets("使用")
    Set wsSourceUnused = ThisWorkbook.Sheets("不使用と廃番")

    ' "管理部署一覧"の"管理部署"列の範囲を設定
    Dim departmentColumn As Range
    Set departmentColumn = ws.Rows(1).Find(What:="管理部署", LookIn:=xlValues, LookAt:=xlWhole)

    If departmentColumn Is Nothing Then
        MsgBox "管理部署列が見つかりませんでした！", vbCritical
        Exit Sub
    Else
        ' "管理部署"列の範囲を設定
        Set rng = ws.Range(departmentColumn.Offset(1, 0), ws.Cells(ws.Rows.Count, departmentColumn.Column).End(xlUp))
    End If

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
            .SaveAs fileName:=currentDirectory & "\石切棚卸表_原料_" & departmentName & ".xlsx"
        End With

        ' 部署名でデータをフィルターし、新しいブックの"使用"シートにコピー
        wsSourceUsage.ListObjects("棚卸表_原料_使用").Range.AutoFilter Field:=colNumUsage, Criteria1:=departmentName
        wsSourceUsage.ListObjects("棚卸表_原料_使用").Range.SpecialCells(xlCellTypeVisible).Copy Destination:=newWorkbook.Sheets("使用").Range("A1")
        wsSourceUsage.AutoFilterMode = False

        ' コピー先のデータをテーブル化し、スタイルを設定、名前を変更、セル幅を文字幅に合わせて調整
        Dim tblUsage As ListObject
        Set tblUsage = newWorkbook.Sheets("使用").ListObjects.Add(xlSrcRange, newWorkbook.Sheets("使用").Range("A1").CurrentRegion, , xlYes)
        tblUsage.TableStyle = "TableStyleLight1"
        tblUsage.Name = "棚卸表_原料_使用"
        newWorkbook.Sheets("使用").Columns.AutoFit

        ' 品名で昇順にソート
        With newWorkbook.Sheets("使用").Sort
            .SortFields.Clear
            .SortFields.Add Key:=tblUsage.ListColumns("品名").Range, Order:=xlAscending
            .SetRange tblUsage.Range
            .Header = xlYes
            .Apply
        End With

        ' グループ化と折りたたみ
        Call GroupAndCollapseColumns(newWorkbook.Sheets("使用"), "発注単位")
        Call GroupAndCollapseColumns(newWorkbook.Sheets("使用"), "数量_202402", "数量_202210")
        Call GroupAndCollapseColumns(newWorkbook.Sheets("使用"), "単価_202402", "単価_202210")
        Call GroupAndCollapseColumns(newWorkbook.Sheets("使用"), "金額_202402", "金額_202210")
        Call GroupAndCollapseColumnsFrom(newWorkbook.Sheets("使用"), "Registration Date")

        ' "金額_202406"列に計算式を代入
        Dim lastRow As Long
        Dim quantityCol As Long
        Dim priceCol As Long
        Dim amountCol As Long
        With newWorkbook.Sheets("使用")
            lastRow = .Cells(.Rows.Count, 1).End(xlUp).Row
            quantityCol = tblUsage.ListColumns("数量_202406").Index
            priceCol = tblUsage.ListColumns("単価_202406").Index
            amountCol = tblUsage.ListColumns("金額_202406").Index
            .Range(.Cells(2, amountCol), .Cells(lastRow, amountCol)).FormulaR1C1 = "=RC[" & (quantityCol - amountCol) & "]*RC[" & (priceCol - amountCol) & "]"
        End With

        ' 部署名でデータをフィルターし、新しいブックの"不使用と廃番"シートにコピー
        wsSourceUnused.ListObjects("棚卸表_原料_不使用と廃番").Range.AutoFilter Field:=colNumUnused, Criteria1:=departmentName
        wsSourceUnused.ListObjects("棚卸表_原料_不使用と廃番").Range.SpecialCells(xlCellTypeVisible).Copy Destination:=newWorkbook.Sheets("不使用と廃番").Range("A1")
        wsSourceUnused.AutoFilterMode = False

        ' コピー先のデータをテーブル化し、スタイルを設定、名前を変更、セル幅を文字幅に合わせて調整
        Dim tblUnused As ListObject
        Set tblUnused = newWorkbook.Sheets("不使用と廃番").ListObjects.Add(xlSrcRange, newWorkbook.Sheets("不使用と廃番").Range("A1").CurrentRegion, , xlYes)
        tblUnused.TableStyle = "TableStyleLight1"
        tblUnused.Name = "棚卸表_原料_不使用と廃番"
        newWorkbook.Sheets("不使用と廃番").Columns.AutoFit

        ' 品名で昇順にソート
        With newWorkbook.Sheets("不使用と廃番").Sort
            .SortFields.Clear
            .SortFields.Add Key:=tblUsage.ListColumns("品名").Range, Order:=xlAscending
            .SetRange tblUsage.Range
            .Header = xlYes
            .Apply
        End With

        ' グループ化と折りたたみ
        Call GroupAndCollapseColumns(newWorkbook.Sheets("不使用と廃番"), "発注単位")
        Call GroupAndCollapseColumns(newWorkbook.Sheets("不使用と廃番"), "数量_202402", "数量_202210")
        Call GroupAndCollapseColumns(newWorkbook.Sheets("不使用と廃番"), "単価_202402", "単価_202210")
        Call GroupAndCollapseColumns(newWorkbook.Sheets("不使用と廃番"), "金額_202402", "金額_202210")
        Call GroupAndCollapseColumnsFrom(newWorkbook.Sheets("不使用と廃番"), "Registration Date")

        ' "金額_202406"列に計算式を代入
        With newWorkbook.Sheets("不使用と廃番")
            lastRow = .Cells(.Rows.Count, 1).End(xlUp).Row
            quantityCol = tblUnused.ListColumns("数量_202406").Index
            priceCol = tblUnused.ListColumns("単価_202406").Index
            amountCol = tblUnused.ListColumns("金額_202406").Index
            .Range(.Cells(2, amountCol), .Cells(lastRow, amountCol)).FormulaR1C1 = "=RC[" & (quantityCol - amountCol) & "]*RC[" & (priceCol - amountCol) & "]"
        End With

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