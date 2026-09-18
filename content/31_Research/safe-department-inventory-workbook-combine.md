---
title: 部署別棚卸ファイルを安全に再集約するVBA
aliases:
  - 棚卸結果を次回用の新しいマクロ有効ブックへ再集約する
type: literature
created: 2026-09-18T04:34:24+09:00
updated: 2026-09-18T04:34:24+09:00
id: 20260918-043424
permalink:
draft: false
tags:
  - vba
  - inventory
  - safety
---

これは[[VBAで個別のファイルをガッチャンコする その2|初期版]]の後継例である。目的は、各部署が入力した棚卸ファイルを集約し、**次回の切り出しにも使える新しい`.xlsm`**を作ることにある。

```text
現在の棚卸運用ブック.xlsm（変更しない）
  ├─ 部署別棚卸表\棚卸表_原料_部署名.xlsx（入力済み）
  └─ 集約済み棚卸表\棚卸表_原料_集約_日時.xlsm（新規作成）
```

## 安全上の前提

- マクロを含む現在の集約ブックは保存済みの`.xlsm`である。
- 各部署の入力ファイルがすべてそろってから実行する。
- `INPUT_PREFIX` は、切り出し時に使ったファイル名の接頭辞と一致させる。その1系は `棚卸表_原料_`、その4の当時の出力は `石切棚卸表_原料_` であり、混在させない。
- 集約前に、各入力ファイルのシート・列見出し・管理部署の値を検証する。不備が1件でもあれば、新しい集約ファイルは作らない。
- 入力ファイルは値として集約する。部署別で入力した値を次回用の正本として残すためである。
- 出力先に同名ファイルがある場合は停止し、上書きしない。

## VBA

```vba
Option Explicit

Private Const DEPARTMENT_LIST_SHEET As String = "管理部署一覧"
Private Const USAGE_SHEET As String = "使用"
Private Const UNUSED_SHEET As String = "不使用と廃番"
Private Const USAGE_TABLE As String = "棚卸表_原料_使用"
Private Const UNUSED_TABLE As String = "棚卸表_原料_不使用と廃番"
Private Const DEPARTMENT_HEADER As String = "管理部署"
Private Const INPUT_FOLDER_NAME As String = "部署別棚卸表"
Private Const OUTPUT_FOLDER_NAME As String = "集約済み棚卸表"
Private Const INPUT_PREFIX As String = "棚卸表_原料_"
Private Const OUTPUT_PREFIX As String = "棚卸表_原料_集約_"

Public Sub CombineDepartmentFilesIntoNewCycle()
    Dim wsDepartments As Worksheet
    Dim usageTemplate As ListObject
    Dim unusedTemplate As ListObject
    Dim departments As Collection
    Dim department As Variant
    Dim inputFolder As String
    Dim outputFolder As String
    Dim outputPath As String
    Dim outputBook As Workbook
    Dim outputUsage As Worksheet
    Dim outputUnused As Worksheet
    Dim usageRows As Long
    Dim unusedRows As Long
    Dim priorScreenUpdating As Boolean
    Dim priorEnableEvents As Boolean
    Dim priorAutomationSecurity As MsoAutomationSecurity
    Dim errorMessage As String

    priorScreenUpdating = Application.ScreenUpdating
    priorEnableEvents = Application.EnableEvents
    priorAutomationSecurity = Application.AutomationSecurity
    On Error GoTo Failed

    If Len(ThisWorkbook.Path) = 0 Then
        Err.Raise vbObjectError + 2000, , "このマクロブックを保存してから実行してください。"
    End If
    If LCase$(Right$(ThisWorkbook.Name, 5)) <> ".xlsm" Then
        Err.Raise vbObjectError + 2001, , "次回用にマクロを引き継ぐため、このブックは .xlsm である必要があります。"
    End If

    Set wsDepartments = RequireWorksheet(ThisWorkbook, DEPARTMENT_LIST_SHEET)
    Set usageTemplate = RequireTable(RequireWorksheet(ThisWorkbook, USAGE_SHEET), USAGE_TABLE)
    Set unusedTemplate = RequireTable(RequireWorksheet(ThisWorkbook, UNUSED_SHEET), UNUSED_TABLE)
    Set departments = GetDepartmentNames(wsDepartments, DEPARTMENT_HEADER)

    inputFolder = ThisWorkbook.Path & Application.PathSeparator & INPUT_FOLDER_NAME
    outputFolder = ThisWorkbook.Path & Application.PathSeparator & OUTPUT_FOLDER_NAME
    RequireFolder inputFolder, "部署別入力ファイルのフォルダ"
    CreateFolderIfMissing outputFolder

    ' 出力を作る前に、全入力ファイルの存在・列構成・部署値を検証する。
    Application.AutomationSecurity = msoAutomationSecurityForceDisable
    For Each department In departments
        ValidateDepartmentWorkbook inputFolder, CStr(department), usageTemplate, unusedTemplate
    Next department

    outputPath = outputFolder & Application.PathSeparator & _
        OUTPUT_PREFIX & Format(Now, "yyyymmdd_hhnnss") & ".xlsm"
    If Len(Dir(outputPath)) > 0 Then
        Err.Raise vbObjectError + 2002, , "同名の出力ファイルが既にあります。時間を置いて再実行してください。"
    End If

    Application.ScreenUpdating = False
    Application.EnableEvents = False

    ' マクロ、管理部署一覧、設定シートを含む現在のブックを複製する。
    ThisWorkbook.SaveCopyAs outputPath
    Set outputBook = Workbooks.Open(Filename:=outputPath, UpdateLinks:=0, ReadOnly:=False, AddToMru:=False)

    Set outputUsage = RequireWorksheet(outputBook, USAGE_SHEET)
    Set outputUnused = RequireWorksheet(outputBook, UNUSED_SHEET)
    ResetDataSheet outputUsage
    ResetDataSheet outputUnused

    WriteHeaders outputUsage, usageTemplate
    WriteHeaders outputUnused, unusedTemplate

    For Each department In departments
        AppendDepartmentWorkbook inputFolder, CStr(department), outputUsage, outputUnused, usageRows, unusedRows
    Next department

    CreateOutputTable outputUsage, USAGE_TABLE, usageRows, usageTemplate
    CreateOutputTable outputUnused, UNUSED_TABLE, unusedRows, unusedTemplate

    outputBook.Save
    outputBook.Close SaveChanges:=False
    Set outputBook = Nothing

    Application.AutomationSecurity = priorAutomationSecurity
    Application.ScreenUpdating = priorScreenUpdating
    Application.EnableEvents = priorEnableEvents

    MsgBox "新しい集約ブックを作成しました。" & vbCrLf & _
           outputPath & vbCrLf & vbCrLf & _
           "使用: " & usageRows & "行" & vbCrLf & _
           "不使用と廃番: " & unusedRows & "行", vbInformation
    Exit Sub

Failed:
    errorMessage = Err.Description
    On Error Resume Next
    If Not outputBook Is Nothing Then outputBook.Close SaveChanges:=False
    Application.AutomationSecurity = priorAutomationSecurity
    Application.ScreenUpdating = priorScreenUpdating
    Application.EnableEvents = priorEnableEvents
    On Error GoTo 0
    MsgBox "集約を中止しました。" & vbCrLf & errorMessage, vbCritical
End Sub

Private Sub ValidateDepartmentWorkbook(ByVal inputFolder As String, _
                                       ByVal departmentName As String, _
                                       ByVal usageTemplate As ListObject, _
                                       ByVal unusedTemplate As ListObject)
    Dim inputPath As String
    Dim inputBook As Workbook
    Dim usageRange As Range
    Dim unusedRange As Range

    inputPath = inputFolder & Application.PathSeparator & _
        INPUT_PREFIX & SafeFileNamePart(departmentName) & ".xlsx"
    If Len(Dir(inputPath)) = 0 Then
        Err.Raise vbObjectError + 2010, , "部署「" & departmentName & "」の入力ファイルが見つかりません。"
    End If

    Set inputBook = Workbooks.Open(Filename:=inputPath, UpdateLinks:=0, ReadOnly:=True, AddToMru:=False)
    On Error GoTo CloseAndReraise

    Set usageRange = InputDataRange(RequireWorksheet(inputBook, USAGE_SHEET))
    Set unusedRange = InputDataRange(RequireWorksheet(inputBook, UNUSED_SHEET))
    ValidateHeaders usageRange, usageTemplate, inputPath, USAGE_SHEET
    ValidateHeaders unusedRange, unusedTemplate, inputPath, UNUSED_SHEET
    ValidateDepartmentValues usageRange, departmentName, inputPath, USAGE_SHEET
    ValidateDepartmentValues unusedRange, departmentName, inputPath, UNUSED_SHEET

    inputBook.Close SaveChanges:=False
    Exit Sub

CloseAndReraise:
    inputBook.Close SaveChanges:=False
    Err.Raise Err.Number, , Err.Description
End Sub

Private Sub AppendDepartmentWorkbook(ByVal inputFolder As String, _
                                     ByVal departmentName As String, _
                                     ByVal outputUsage As Worksheet, _
                                     ByVal outputUnused As Worksheet, _
                                     ByRef usageRows As Long, _
                                     ByRef unusedRows As Long)
    Dim inputPath As String
    Dim inputBook As Workbook

    inputPath = inputFolder & Application.PathSeparator & _
        INPUT_PREFIX & SafeFileNamePart(departmentName) & ".xlsx"
    Set inputBook = Workbooks.Open(Filename:=inputPath, UpdateLinks:=0, ReadOnly:=True, AddToMru:=False)
    On Error GoTo CloseAndReraise

    usageRows = usageRows + AppendDataRows(InputDataRange(RequireWorksheet(inputBook, USAGE_SHEET)), outputUsage)
    unusedRows = unusedRows + AppendDataRows(InputDataRange(RequireWorksheet(inputBook, UNUSED_SHEET)), outputUnused)

    inputBook.Close SaveChanges:=False
    Exit Sub

CloseAndReraise:
    inputBook.Close SaveChanges:=False
    Err.Raise Err.Number, , Err.Description
End Sub

Private Function InputDataRange(ByVal ws As Worksheet) As Range
    Dim tableObject As ListObject

    For Each tableObject In ws.ListObjects
        If ListObjectHasHeader(tableObject, DEPARTMENT_HEADER) Then
            Set InputDataRange = tableObject.Range
            Exit Function
        End If
    Next tableObject

    Set InputDataRange = ws.Range("A1").CurrentRegion
    If Not RangeHasHeader(InputDataRange, DEPARTMENT_HEADER) Then
        Err.Raise vbObjectError + 2020, , "シート「" & ws.Name & "」に管理部署列を持つ表が見つかりません。"
    End If
End Function

Private Sub ValidateHeaders(ByVal inputRange As Range, ByVal templateTable As ListObject, _
                            ByVal inputPath As String, ByVal sheetName As String)
    If HeaderSignature(inputRange.Rows(1)) <> HeaderSignature(templateTable.HeaderRowRange) Then
        Err.Raise vbObjectError + 2030, , "列構成が一致しません: " & inputPath & " / " & sheetName
    End If
End Sub

Private Sub ValidateDepartmentValues(ByVal inputRange As Range, ByVal departmentName As String, _
                                     ByVal inputPath As String, ByVal sheetName As String)
    Dim departmentColumn As Long
    Dim dataRow As Long
    Dim value As Variant

    If inputRange.Rows.Count = 1 Then Exit Sub
    departmentColumn = HeaderColumnIndex(inputRange.Rows(1), DEPARTMENT_HEADER)

    For dataRow = 2 To inputRange.Rows.Count
        value = inputRange.Cells(dataRow, departmentColumn).Value2
        If IsError(value) Or Trim$(CStr(value)) <> departmentName Then
            Err.Raise vbObjectError + 2040, , "管理部署の値が入力ファイル名と一致しません: " & inputPath & " / " & sheetName
        End If
    Next dataRow
End Sub

Private Function AppendDataRows(ByVal inputRange As Range, ByVal outputSheet As Worksheet) As Long
    Dim dataRows As Long
    Dim destinationRow As Long
    Dim dataRange As Range

    dataRows = inputRange.Rows.Count - 1
    If dataRows <= 0 Then Exit Function

    Set dataRange = inputRange.Offset(1, 0).Resize(dataRows, inputRange.Columns.Count)
    destinationRow = outputSheet.Cells(outputSheet.Rows.Count, 1).End(xlUp).Row + 1
    outputSheet.Cells(destinationRow, 1).Resize(dataRows, inputRange.Columns.Count).Value2 = dataRange.Value2
    AppendDataRows = dataRows
End Function

Private Sub ResetDataSheet(ByVal ws As Worksheet)
    Do While ws.ListObjects.Count > 0
        ws.ListObjects(1).Delete
    Loop
    ws.Cells.Clear
End Sub

Private Sub WriteHeaders(ByVal outputSheet As Worksheet, ByVal templateTable As ListObject)
    outputSheet.Cells(1, 1).Resize(1, templateTable.ListColumns.Count).Value2 = templateTable.HeaderRowRange.Value2
End Sub

Private Sub CreateOutputTable(ByVal outputSheet As Worksheet, ByVal tableName As String, _
                              ByVal dataRowCount As Long, ByVal templateTable As ListObject)
    Dim outputRange As Range
    Dim outputTable As ListObject

    Set outputRange = outputSheet.Cells(1, 1).Resize(dataRowCount + 1, templateTable.ListColumns.Count)
    Set outputTable = outputSheet.ListObjects.Add(xlSrcRange, outputRange, , xlYes)
    outputTable.Name = tableName
    outputTable.TableStyle = "TableStyleLight1"
    outputRange.Columns.AutoFit
End Sub

Private Function RequireWorksheet(ByVal book As Workbook, ByVal sheetName As String) As Worksheet
    On Error Resume Next
    Set RequireWorksheet = book.Worksheets(sheetName)
    On Error GoTo 0
    If RequireWorksheet Is Nothing Then Err.Raise vbObjectError + 2050, , "シート「" & sheetName & "」が見つかりません。"
End Function

Private Function RequireTable(ByVal ws As Worksheet, ByVal tableName As String) As ListObject
    On Error Resume Next
    Set RequireTable = ws.ListObjects(tableName)
    On Error GoTo 0
    If RequireTable Is Nothing Then Err.Raise vbObjectError + 2051, , "テーブル「" & tableName & "」が見つかりません。"
End Function

Private Function GetDepartmentNames(ByVal ws As Worksheet, ByVal headerName As String) As Collection
    Dim headerCell As Range, cell As Range, result As Collection, seen As Object
    Dim lastRow As Long, departmentName As String

    Set headerCell = ws.Rows(1).Find(What:=headerName, LookIn:=xlValues, LookAt:=xlWhole)
    If headerCell Is Nothing Then Err.Raise vbObjectError + 2060, , "管理部署一覧に管理部署列がありません。"
    lastRow = ws.Cells(ws.Rows.Count, headerCell.Column).End(xlUp).Row
    Set result = New Collection
    Set seen = CreateObject("Scripting.Dictionary")

    For Each cell In ws.Range(ws.Cells(2, headerCell.Column), ws.Cells(lastRow, headerCell.Column))
        If Not IsError(cell.Value2) Then
            departmentName = Trim$(CStr(cell.Value2))
            If Len(departmentName) > 0 And Not seen.Exists(departmentName) Then
                seen.Add departmentName, True
                result.Add departmentName
            End If
        End If
    Next cell
    Set GetDepartmentNames = result
End Function

Private Function HeaderSignature(ByVal headerRange As Range) As String
    Dim columnIndex As Long
    For columnIndex = 1 To headerRange.Columns.Count
        HeaderSignature = HeaderSignature & ChrW$(30) & CStr(headerRange.Cells(1, columnIndex).Value2)
    Next columnIndex
End Function

Private Function HeaderColumnIndex(ByVal headerRange As Range, ByVal headerName As String) As Long
    Dim columnIndex As Long
    For columnIndex = 1 To headerRange.Columns.Count
        If CStr(headerRange.Cells(1, columnIndex).Value2) = headerName Then
            HeaderColumnIndex = columnIndex
            Exit Function
        End If
    Next columnIndex
    Err.Raise vbObjectError + 2070, , "列「" & headerName & "」が見つかりません。"
End Function

Private Function RangeHasHeader(ByVal inputRange As Range, ByVal headerName As String) As Boolean
    On Error Resume Next
    RangeHasHeader = HeaderColumnIndex(inputRange.Rows(1), headerName) > 0
    On Error GoTo 0
End Function

Private Function ListObjectHasHeader(ByVal tableObject As ListObject, ByVal headerName As String) As Boolean
    On Error Resume Next
    ListObjectHasHeader = tableObject.ListColumns(headerName).Index > 0
    On Error GoTo 0
End Function

Private Sub RequireFolder(ByVal folderPath As String, ByVal label As String)
    If Len(Dir(folderPath, vbDirectory)) = 0 Then
        Err.Raise vbObjectError + 2080, , label & "が見つかりません: " & folderPath
    End If
End Sub

Private Sub CreateFolderIfMissing(ByVal folderPath As String)
    If Len(Dir(folderPath, vbDirectory)) = 0 Then MkDir folderPath
End Sub

Private Function SafeFileNamePart(ByVal text As String) As String
    Dim invalidCharacter As Variant
    For Each invalidCharacter In Array(Chr$(92), "/", ":", "*", "?", """", "<", ">", "|")
        text = Replace(text, CStr(invalidCharacter), "_")
    Next invalidCharacter
    SafeFileNamePart = Trim$(text)
End Function
```

## 実行前の確認

1. 実運用ブックと部署別入力ファイルをコピーしたテスト用フォルダで試す。
2. 部署別入力ファイルが、管理部署一覧にある全部署分そろっていることを確認する。
3. 新しい`.xlsm`を開き、管理部署一覧・マクロ・「使用」「不使用と廃番」の行数とテーブル名を確認する。
4. 新しい`.xlsm`で切り出しマクロを実行できることを、次の棚卸前に確認する。

`SaveCopyAs`は開いている元ブックを変更せずにコピーを保存する。入力ファイルを開く際は、リンク更新を停止し、マクロ自動実行を無効化している。[^copy][^open][^tables]

[^copy]: [Workbook.SaveCopyAs method（Microsoft Learn）](https://learn.microsoft.com/en-us/office/vba/api/excel.workbook.savecopyas)
[^open]: [Workbooks.Open method（Microsoft Learn）](https://learn.microsoft.com/en-us/office/vba/api/excel.workbooks.open)
[^tables]: [ListObjects.Add method（Microsoft Learn）](https://learn.microsoft.com/en-us/office/vba/api/excel.listobjects.add)
