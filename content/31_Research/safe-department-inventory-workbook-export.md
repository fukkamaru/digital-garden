---
title: 管理部署別棚卸ファイルを安全に切り出すVBA
aliases:
  - 部署別棚卸ファイル切り出しVBAの安全な後継設計
type: literature
created: 2026-09-18T04:06:51+09:00
updated: 2026-09-23T22:00:58+09:00
id: 20260918-040651
permalink:
draft: true
---

[[VBAで個別のファイルをガッチャンコする その1|初期版]]と[[VBAで個別ファイルをガッチャンコする その4|拡張版]]は、当時の開発履歴として残す。このノートはそれらを直接書き換えず、管理部署ごとに棚卸データを切り出すための**後継例**を示す。

## この後継例で優先すること

|観点|後継例の扱い|
|---|---|
|元ブック|フィルターを掛けず、テーブルの値と列表示形式を読み取るだけにする|
|出力先|元ブックと同じフォルダ内の `部署別棚卸表` フォルダ|
|既存ファイル|既定では上書きせず、スキップして件数を通知する|
|列の指定|ワークシート全体の列番号ではなく、テーブル内の列名で指定する|
|対象なしの部署|空ファイルを作らず、出力なしとして数える|
|異常時|処理を停止し、未保存の出力ブックを閉じて画面更新・イベント設定を戻す|

### 前提

- このマクロを入れるブックは保存済みである。
- `管理部署一覧`、`使用`、`不使用と廃番`の3シートがある。
- 元データは `棚卸表_原料_使用`、`棚卸表_原料_不使用と廃番` というテーブルである。
- 各テーブルと管理部署一覧に `管理部署` 列がある。
- 金額の再計算・ソート・グループ化に使う列名は、コード先頭の定数と一致している。列名が異なる場合は、実行前に定数を変える。

出力は値のスナップショットである。元テーブルの数式・条件付き書式・入力規則を丸ごと複製する設計ではない。帳票として値とテーブル形式を渡す目的に限定し、書式の完全な複製が必要な場合はテンプレートブック方式を別途設計する。

```vba
Option Explicit

Private Const DEPARTMENT_LIST_SHEET As String = "管理部署一覧"
Private Const USAGE_SHEET As String = "使用"
Private Const UNUSED_SHEET As String = "不使用と廃番"
Private Const USAGE_TABLE As String = "棚卸表_原料_使用"
Private Const UNUSED_TABLE As String = "棚卸表_原料_不使用と廃番"
Private Const DEPARTMENT_HEADER As String = "管理部署"
Private Const ITEM_HEADER As String = "品名"
Private Const QUANTITY_HEADER As String = "数量_202406"
Private Const UNIT_PRICE_HEADER As String = "単価_202406"
Private Const AMOUNT_HEADER As String = "金額_202406"
Private Const GROUP_FROM_HEADER As String = "Registration Date"
Private Const OUTPUT_FOLDER_NAME As String = "部署別棚卸表"
Private Const OUTPUT_PREFIX As String = "棚卸表_原料_"

Public Sub ExportInventoryByDepartment()
    Dim wsDepartmentList As Worksheet
    Dim sourceUsage As ListObject
    Dim sourceUnused As ListObject
    Dim departmentNames As Collection
    Dim departmentName As Variant
    Dim outputFolder As String
    Dim outputPath As String
    Dim outputBook As Workbook
    Dim outputUsage As Worksheet
    Dim outputUnused As Worksheet
    Dim outputUsageTable As ListObject
    Dim outputUnusedTable As ListObject
    Dim usageRows As Long
    Dim unusedRows As Long
    Dim exportedCount As Long
    Dim existingFileCount As Long
    Dim noDataCount As Long
    Dim previousScreenUpdating As Boolean
    Dim previousEnableEvents As Boolean
    Dim errorMessage As String

    previousScreenUpdating = Application.ScreenUpdating
    previousEnableEvents = Application.EnableEvents

    On Error GoTo Failed

    If Len(ThisWorkbook.Path) = 0 Then
        Err.Raise vbObjectError + 1000, , "このブックを保存してから実行してください。"
    End If

    Set wsDepartmentList = RequireWorksheet(ThisWorkbook, DEPARTMENT_LIST_SHEET)
    Set sourceUsage = RequireTable(RequireWorksheet(ThisWorkbook, USAGE_SHEET), USAGE_TABLE)
    Set sourceUnused = RequireTable(RequireWorksheet(ThisWorkbook, UNUSED_SHEET), UNUSED_TABLE)
    Set departmentNames = GetDepartmentNames(wsDepartmentList, DEPARTMENT_HEADER)

    If departmentNames.Count = 0 Then
        Err.Raise vbObjectError + 1001, , "管理部署一覧に出力対象の部署がありません。"
    End If

    outputFolder = ThisWorkbook.Path & Application.PathSeparator & OUTPUT_FOLDER_NAME
    EnsureFolder outputFolder

    Application.ScreenUpdating = False
    Application.EnableEvents = False

    For Each departmentName In departmentNames
        outputPath = outputFolder & Application.PathSeparator & _
            OUTPUT_PREFIX & SafeFileNamePart(CStr(departmentName)) & ".xlsx"

        If Len(Dir(outputPath)) > 0 Then
            existingFileCount = existingFileCount + 1
        Else
            Set outputBook = Workbooks.Add(xlWBATWorksheet)
            Set outputUsage = outputBook.Worksheets(1)
            outputUsage.Name = USAGE_SHEET
            Set outputUnused = outputBook.Worksheets.Add(After:=outputUsage)
            outputUnused.Name = UNUSED_SHEET

            usageRows = WriteDepartmentSnapshot(sourceUsage, outputUsage, CStr(departmentName))
            unusedRows = WriteDepartmentSnapshot(sourceUnused, outputUnused, CStr(departmentName))

            If usageRows + unusedRows = 0 Then
                outputBook.Close SaveChanges:=False
                Set outputBook = Nothing
                noDataCount = noDataCount + 1
            Else
                If usageRows > 0 Then
                    Set outputUsageTable = CreateOutputTable(outputUsage, "tblUsage", usageRows, sourceUsage.ListColumns.Count)
                    ApplyOutputEnhancements outputUsageTable
                End If

                If unusedRows > 0 Then
                    Set outputUnusedTable = CreateOutputTable(outputUnused, "tblUnused", unusedRows, sourceUnused.ListColumns.Count)
                    ApplyOutputEnhancements outputUnusedTable
                End If

                outputBook.SaveAs Filename:=outputPath, FileFormat:=xlOpenXMLWorkbook, CreateBackup:=False
                outputBook.Close SaveChanges:=False
                Set outputBook = Nothing
                exportedCount = exportedCount + 1
            End If
        End If
    Next departmentName

    Application.ScreenUpdating = previousScreenUpdating
    Application.EnableEvents = previousEnableEvents

    MsgBox "部署別ファイルの出力が完了しました。" & vbCrLf & _
           "出力: " & exportedCount & "件" & vbCrLf & _
           "既存ファイルのためスキップ: " & existingFileCount & "件" & vbCrLf & _
           "元データなし: " & noDataCount & "件", vbInformation
    Exit Sub

Failed:
    errorMessage = Err.Description

    On Error Resume Next
    If Not outputBook Is Nothing Then outputBook.Close SaveChanges:=False
    Application.ScreenUpdating = previousScreenUpdating
    Application.EnableEvents = previousEnableEvents
    On Error GoTo 0

    MsgBox "処理を中止しました。出力済みファイルは確認してください。" & vbCrLf & _
           errorMessage, vbCritical
End Sub

Private Function RequireWorksheet(ByVal book As Workbook, ByVal sheetName As String) As Worksheet
    On Error Resume Next
    Set RequireWorksheet = book.Worksheets(sheetName)
    On Error GoTo 0

    If RequireWorksheet Is Nothing Then
        Err.Raise vbObjectError + 1010, , "シート「" & sheetName & "」が見つかりません。"
    End If
End Function

Private Function RequireTable(ByVal ws As Worksheet, ByVal tableName As String) As ListObject
    On Error Resume Next
    Set RequireTable = ws.ListObjects(tableName)
    On Error GoTo 0

    If RequireTable Is Nothing Then
        Err.Raise vbObjectError + 1011, , "シート「" & ws.Name & "」にテーブル「" & tableName & "」が見つかりません。"
    End If
End Function

Private Function GetDepartmentNames(ByVal ws As Worksheet, ByVal headerName As String) As Collection
    Dim headerCell As Range
    Dim lastRow As Long
    Dim cell As Range
    Dim result As Collection
    Dim seen As Object
    Dim departmentName As String

    Set headerCell = ws.Rows(1).Find(What:=headerName, LookIn:=xlValues, LookAt:=xlWhole)
    If headerCell Is Nothing Then
        Err.Raise vbObjectError + 1020, , "管理部署一覧に「" & headerName & "」列が見つかりません。"
    End If

    lastRow = ws.Cells(ws.Rows.Count, headerCell.Column).End(xlUp).Row
    Set result = New Collection
    Set seen = CreateObject("Scripting.Dictionary")
    seen.CompareMode = vbBinaryCompare

    For Each cell In ws.Range(ws.Cells(2, headerCell.Column), ws.Cells(lastRow, headerCell.Column))
        If Not IsError(cell.Value2) Then
            departmentName = Trim$(CStr(cell.Value2))
            If Len(departmentName) > 0 Then
                If Not seen.Exists(departmentName) Then
                    seen.Add departmentName, True
                    result.Add departmentName
                End If
            End If
        End If
    Next cell

    Set GetDepartmentNames = result
End Function

Private Function WriteDepartmentSnapshot(ByVal sourceTable As ListObject, _
                                         ByVal destination As Worksheet, _
                                         ByVal departmentName As String) As Long
    Dim sourceValues As Variant
    Dim resultValues() As Variant
    Dim sourceRowCount As Long
    Dim columnCount As Long
    Dim departmentColumnIndex As Long
    Dim sourceRow As Long
    Dim outputRow As Long
    Dim columnIndex As Long
    Dim matchingRows As Long

    destination.Cells.Clear
    columnCount = sourceTable.ListColumns.Count
    destination.Cells(1, 1).Resize(1, columnCount).Value2 = sourceTable.HeaderRowRange.Value2

    If sourceTable.DataBodyRange Is Nothing Then Exit Function

    departmentColumnIndex = RequireListColumnIndex(sourceTable, DEPARTMENT_HEADER)
    sourceValues = sourceTable.DataBodyRange.Value2
    sourceRowCount = sourceTable.DataBodyRange.Rows.Count

    For sourceRow = 1 To sourceRowCount
        If Not IsError(sourceValues(sourceRow, departmentColumnIndex)) Then
            If Trim$(CStr(sourceValues(sourceRow, departmentColumnIndex))) = departmentName Then
                matchingRows = matchingRows + 1
            End If
        End If
    Next sourceRow

    If matchingRows = 0 Then Exit Function

    ReDim resultValues(1 To matchingRows, 1 To columnCount)
    outputRow = 0

    For sourceRow = 1 To sourceRowCount
        If Not IsError(sourceValues(sourceRow, departmentColumnIndex)) Then
            If Trim$(CStr(sourceValues(sourceRow, departmentColumnIndex))) = departmentName Then
                outputRow = outputRow + 1
                For columnIndex = 1 To columnCount
                    resultValues(outputRow, columnIndex) = sourceValues(sourceRow, columnIndex)
                Next columnIndex
            End If
        End If
    Next sourceRow

    destination.Cells(2, 1).Resize(matchingRows, columnCount).Value2 = resultValues
    CopyOutputNumberFormats sourceTable, destination, matchingRows
    WriteDepartmentSnapshot = matchingRows
End Function

Private Sub CopyOutputNumberFormats(ByVal sourceTable As ListObject, _
                                    ByVal destination As Worksheet, _
                                    ByVal dataRowCount As Long)
    Dim columnIndex As Long
    Dim sourceColumn As Range

    For columnIndex = 1 To sourceTable.ListColumns.Count
        Set sourceColumn = sourceTable.ListColumns(columnIndex).DataBodyRange
        destination.Cells(2, columnIndex).Resize(dataRowCount, 1).NumberFormat = sourceColumn.Cells(1, 1).NumberFormat
    Next columnIndex
End Sub

Private Function RequireListColumnIndex(ByVal sourceTable As ListObject, ByVal headerName As String) As Long
    On Error Resume Next
    RequireListColumnIndex = sourceTable.ListColumns(headerName).Index
    On Error GoTo 0

    If RequireListColumnIndex = 0 Then
        Err.Raise vbObjectError + 1030, , "テーブル「" & sourceTable.Name & "」に「" & headerName & "」列が見つかりません。"
    End If
End Function

Private Function CreateOutputTable(ByVal ws As Worksheet, _
                                   ByVal tableName As String, _
                                   ByVal dataRowCount As Long, _
                                   ByVal columnCount As Long) As ListObject
    Dim outputRange As Range

    Set outputRange = ws.Cells(1, 1).Resize(dataRowCount + 1, columnCount)
    Set CreateOutputTable = ws.ListObjects.Add(xlSrcRange, outputRange, , xlYes)
    CreateOutputTable.Name = tableName
    CreateOutputTable.TableStyle = "TableStyleLight1"
    outputRange.Columns.AutoFit
End Function

Private Sub ApplyOutputEnhancements(ByVal outputTable As ListObject)
    SortOutputTable outputTable, ITEM_HEADER
    WriteAmountFormula outputTable, QUANTITY_HEADER, UNIT_PRICE_HEADER, AMOUNT_HEADER
    TryGroupColumns outputTable.Parent, "発注単位"
    TryGroupColumns outputTable.Parent, "数量_202402", "数量_202210"
    TryGroupColumns outputTable.Parent, "単価_202402", "単価_202210"
    TryGroupColumns outputTable.Parent, "金額_202402", "金額_202210"
    TryGroupColumnsFrom outputTable, GROUP_FROM_HEADER
End Sub

Private Sub SortOutputTable(ByVal outputTable As ListObject, ByVal headerName As String)
    Dim sortColumn As ListColumn

    Set sortColumn = OptionalListColumn(outputTable, headerName)
    If sortColumn Is Nothing Then Exit Sub

    With outputTable.Sort
        .SortFields.Clear
        .SortFields.Add Key:=sortColumn.DataBodyRange, SortOn:=xlSortOnValues, Order:=xlAscending, DataOption:=xlSortNormal
        .SetRange outputTable.Range
        .Header = xlYes
        .MatchCase = False
        .Orientation = xlTopToBottom
        .Apply
    End With
End Sub

Private Sub WriteAmountFormula(ByVal outputTable As ListObject, _
                               ByVal quantityHeader As String, _
                               ByVal unitPriceHeader As String, _
                               ByVal amountHeader As String)
    Dim quantityColumn As ListColumn
    Dim unitPriceColumn As ListColumn
    Dim amountColumn As ListColumn

    Set quantityColumn = OptionalListColumn(outputTable, quantityHeader)
    Set unitPriceColumn = OptionalListColumn(outputTable, unitPriceHeader)
    Set amountColumn = OptionalListColumn(outputTable, amountHeader)

    If quantityColumn Is Nothing Or unitPriceColumn Is Nothing Or amountColumn Is Nothing Then Exit Sub

    amountColumn.DataBodyRange.Formula = "=[@[" & quantityHeader & "]]*[@[" & unitPriceHeader & "]]"
End Sub

Private Function OptionalListColumn(ByVal sourceTable As ListObject, ByVal headerName As String) As ListColumn
    On Error Resume Next
    Set OptionalListColumn = sourceTable.ListColumns(headerName)
    On Error GoTo 0
End Function

Private Sub TryGroupColumns(ByVal ws As Worksheet, ByVal startHeader As String, Optional ByVal endHeader As String = "")
    Dim startCell As Range
    Dim endCell As Range

    Set startCell = ws.Rows(1).Find(What:=startHeader, LookIn:=xlValues, LookAt:=xlWhole)
    If startCell Is Nothing Then Exit Sub

    If Len(endHeader) = 0 Then
        Set endCell = startCell
    Else
        Set endCell = ws.Rows(1).Find(What:=endHeader, LookIn:=xlValues, LookAt:=xlWhole)
    End If

    If endCell Is Nothing Then Exit Sub
    If startCell.Column > endCell.Column Then Exit Sub

    ws.Range(ws.Cells(1, startCell.Column), ws.Cells(1, endCell.Column)).EntireColumn.Group
    ws.Outline.ShowLevels ColumnLevels:=1
End Sub

Private Sub TryGroupColumnsFrom(ByVal outputTable As ListObject, ByVal startHeader As String)
    Dim ws As Worksheet
    Dim startCell As Range
    Dim endColumn As Long

    Set ws = outputTable.Parent
    Set startCell = ws.Rows(1).Find(What:=startHeader, LookIn:=xlValues, LookAt:=xlWhole)
    If startCell Is Nothing Then Exit Sub

    endColumn = outputTable.Range.Column + outputTable.Range.Columns.Count - 1
    ws.Range(ws.Cells(1, startCell.Column), ws.Cells(1, endColumn)).EntireColumn.Group
    ws.Outline.ShowLevels ColumnLevels:=1
End Sub

Private Sub EnsureFolder(ByVal folderPath As String)
    If Len(Dir(folderPath, vbDirectory)) = 0 Then MkDir folderPath
End Sub

Private Function SafeFileNamePart(ByVal text As String) As String
    Dim invalidCharacter As Variant

    For Each invalidCharacter In Array(Chr$(92), "/", ":", "*", "?", """", "<", ">", "|")
        text = Replace(text, CStr(invalidCharacter), "_")
    Next invalidCharacter

    SafeFileNamePart = Trim$(text)
    If Len(SafeFileNamePart) = 0 Then
        Err.Raise vbObjectError + 1040, , "出力ファイル名に使える管理部署名がありません。"
    End If
End Function
```

## 実行前の確認

1. 本番ブックではなくコピーで、部署1件・数行のデータから試す。
2. `部署別棚卸表` に既存ファイルがある場合、上書きされずスキップされることを確認する。
3. `使用`と`不使用と廃番`の両方で、部署名・件数・金額式・ソート・列の折りたたみを確認する。
4. 管理部署、テーブル名、月別列名が変更された場合は、先頭の定数を先に更新する。

`Workbooks.Add(xlWBATWorksheet)` は空のワークシート1枚で出力ブックを作るため、Excelの新規ブック設定に余計なシート数があっても影響を受けない。`ListObject.DataBodyRange`はテーブルの見出しを除くデータ範囲、`Range.Value2`はセル値を読み書きするプロパティであり、この例では元ブックをフィルター操作せずに値を抽出している。[^workbooks-add][^databodyrange][^value2][^saveas]

[^workbooks-add]: [Workbooks.Add method（Microsoft Learn）](https://learn.microsoft.com/en-us/office/vba/api/excel.workbooks.add)
[^databodyrange]: [ListObject.DataBodyRange property（Microsoft Learn）](https://learn.microsoft.com/en-us/office/vba/api/excel.listobject.databodyrange)
[^value2]: [Range.Value2 property（Microsoft Learn）](https://learn.microsoft.com/en-us/office/vba/api/excel.range.value2)
[^saveas]: [Workbook.SaveAs method（Microsoft Learn）](https://learn.microsoft.com/en-us/office/vba/api/excel.workbook.saveas)
