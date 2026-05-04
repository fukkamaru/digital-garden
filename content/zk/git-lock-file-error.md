---
title: Gitの「.lock」による排他ロックエラー
type: literature
created: 2026-04-28T19:25:49+09:00
updated: 2026-04-28T19:25:49+09:00
id: 20260428-192549
aliases:
  - Gitの「.lock」による排他ロックエラー
permalink:
draft: false
source:
---

![](Pasted-image-20260428192555.png)

Gitは同時に複数の操作が走ると壊れるため、  <br>
処理中は `.git/index.lock` というファイルを作って「作業中ロック」します。<br>

とのことらしい。<br>
※ファイル名は可変


## ■ よくある原因

ほぼこれです：
- `git add` や `commit` を途中で中断した（Ctrl+Cなど）
- VSCode / Obsidian Git / 他ツールが裏でGit操作している
- Gitがクラッシュしてロックだけ残った
