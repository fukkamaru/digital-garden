---
title: Obsidianの保管庫を変更した場合、新規ノートはどこに保存されるのか？
type: permanent
created: 2026-04-22
updated: 2026-04-25T16:24:37+09:00
id: 20260425-162437
aliases:
  - Obsidianの保管庫を変更した場合、新規ノートはどこに保存されるのか？
draft: false
source:
---

Obsidian Gitを使うには、vault（保管庫）は「.git」のあるフォルダを選択する必要があるらしい。
先に **「quartz」を使ったWebページ作成を実装** したので、保管庫の変更作業が必要になった。


■vault（保管庫）
- 変更前：degital-garden > content
- 変更後：degital-garden

vaultの変更にあたって、次の疑問が頭をよぎった。
- 新規ノートがどこに作られるのか？
- commitやpushしたら、githubのどこに保存されるのか？

そこで、このノートを作成し更新することで確認テストを行った。

結論、適切に'content'に作成・保存されることが分かった。
**この後、vault名を変更したことによって別の問題が発生しましたけどね。**