---
title: 棚卸ファイルの分割・再集約を分けたVBAリファクタリング例
aliases:
  - 棚卸VBAの読みやすい実行入口
type: literature
created: 2026-09-18T05:19:33+09:00
updated: 2026-09-18T05:19:33+09:00
id: 20260918-051933
permalink:
draft: false
tags:
  - vba
  - inventory
  - refactoring
---

分割と再集約は逆向きの処理であり、1つの巨大なマクロにはしない。実行入口だけを明確にし、実装は[[safe-department-inventory-workbook-export|安全な切り出し]]と[[safe-department-inventory-workbook-combine|安全な再集約]]へ分ける。

```vba
Option Explicit

Public Sub RunInventoryWorkflow()
    Select Case MsgBox( _
        Prompt:="実行する処理を選んでください。" & vbCrLf & _
                "［はい］部署別ファイルを作成" & vbCrLf & _
                "［いいえ］入力済みファイルを再集約", _
        Buttons:=vbYesNoCancel + vbQuestion, _
        Title:="棚卸ファイル処理")

        Case vbYes
            ExportInventoryByDepartment

        Case vbNo
            CombineDepartmentFilesIntoNewCycle

        Case vbCancel
            Exit Sub
    End Select
End Sub
```

この実行入口と、2本の後継マクロを同じ標準モジュール群に置く。次の対応が明確になる。

|処理|呼び出すマクロ|出力|
|---|---|---|
|棚卸開始前の配布|`ExportInventoryByDepartment`|部署別の`.xlsx`|
|棚卸完了後の集約|`CombineDepartmentFilesIntoNewCycle`|次回用の新しい`.xlsm`|

処理内容を一つのプロシージャへ混ぜず、実行選択・分割・再集約・検証を分離することが、再読時と棚卸時の確認を容易にする。
