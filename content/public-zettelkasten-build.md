---
title: 公開型ツェッテルカステンの構築
aliases:
  - 公開型ツェッテルカステンの構築
type: permanent
created: 2026-05-02T06:32:51+09:00
updated: 2026-05-02T06:32:51+09:00
id: 20260502-063251
permalink:
draft: false
---
## ツェッテルカステンとは？

ドイツの社会学者ニクラス・ルーマンが開発した情報管理システム。情報（学び）を1カード・1トピックと小さくしたカードを、それぞれリンクさせることでカード同士の関連性・繋がり（ネットワーク）を後から追うことを可能とした情報整理術。

**ITの世界で例えるなら？**
- ~~モジュール（部品）を作るイメージ~~
- ファンクション（関数）を作るイメージ / ※2026-05-09
	- 様々な場面で呼び出される再利用される単一の機能
	- 幾つかをパッケージしてライブラリとして提供される

**ファンクションと明確に異なる点 = 番号が振られている**
- カードの繋がりを追いかけることが出来る
- 思い出すことが出来る

> [!warning]
> モジュールでイメージすると、**リンクされていない単一のカード**は機能していないと誤解してしまう。
> 
> そんなことはない。

### ノートの書き方

- 一次ノート（フリーティング：fleeting）
    - 思いついたことを自由に走り書きする
    - 永続ノートに清書したら削除する
- 文献ノート（リテラチャー：literature）
    - 書籍、動画、Webといった一次情報から、その要約・感想をまとめたもの
	    - 他人の言葉
	    - AIに質問して出力したもの
		    - セカンダリとして分かるようにする
    - 文献として残しておく必要のないものは、永続ノートに清書したら削除する
- 永続ノート（パーマメント：permanent）
	- 一時メモや文献ノートから、自分の言葉で内容をまとめる
	- Wikipediaのリンクだけを貼ったページでも構わない
	- タイトルの付け方
		- 命題型
		- 説明型
		- 問題提起型
		- 避けたほうが良い命名
- 構造ノート（ストラクチャー：structuer）
	- 永続ノートについて、ある特定の分野グループでまとめたもの
    - ハブとして機能する

それぞれのノートは、再利用出来るようにアトミックに作る。

## 構築方法

- 環境
	- ノート作成・管理：Obsidian
	- 静的サイト生成：Quartz
	- リポジトリ管理：GitHub
		- [Gitエコシステムまとめ](git-ecosystem-notes.md)
	- ホスティング：Cloudflare Pages
		- [Cloudflare Pages / GitHub / GitHub Pagesの比較](cloudflare-pages-vs-github-pages.md)
		- [Cloudflare Pagesの主な制限](cloudflare-pages-limitations.md)
	- ドメイン管理：conoHa
		- [外部カスタムドメインをCloudflare Pagesで利用する場合の制限](cloudflare-pages-external-domain-restrictions.md)


- 設計・運用
	- [QuartzにおけるURL設計](quartz-url-design.md)
	- [Quartzにおけるノートの管理設計](quartz-note-management-design.md)
	- [Quartzの公開・非公開を設定する](quartz-publish-visibility-settings.md)

- 記述
	- [再読時に思考へ戻れること](return-to-thinking-on-reread.md)
	- [活動記録はジャーナルとして残す](keep-activity-logs-as-journal.md)
	- [外部環境で得た知識と内省知の切り分け方](separating-external-and-reflective-knowledge.md)



