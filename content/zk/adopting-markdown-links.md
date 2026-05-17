---
title: markdownlinkを採用
aliases:
  - markdownlinkを採用
type:
created: 2026-04-26T17:35:18+09:00
updated: 2026-04-26T17:35:18+09:00
id: 20260426-173518
permalink:
draft: false
source:
---

**obsidianで採用されるリンク記述方式**
- wikilinke
	- obsidian初期設定
- markdownlink
	- markdown標準仕様
	- 記述方法


**wikilinke**
- ノート名ベースでリンク
- リネームしても自動追従
- バックリンクが強い（グラフ・双方向リンク）

> 	記述方法：[[ノート名|表示テキスト]]

**markdownlink**
- 完全に標準仕様
- 他ツールでもそのまま使える（GitHub、静的サイトなど）
- ファイルパス依存（リネームで壊れる可能性あり）

>	記述方法：[ノート名](リンク)



**どちらを使う？**
obsidianを使ってリンクを設定するなら、標準仕様のmarkdownlinkを使用しても、volut内であればファイルパスが変わっても自動追従してくれる。

⇒[堅牢性を考えるならpandoc]()に対応する、markdownlinkを使うのがよい。
