---
title: 公開型ツェッテルカステンの構築
aliases:
  - 公開型ツェッテルカステンの構築
type: structure
created: 2026-05-02T06:32:51+09:00
updated: 2026-09-05T21:57:42+09:00
id: 20260502-063251
permalink:
draft: false
---
## このStructure Noteの役割

公開型ツェッテルカステンについて、知識管理の原則とQuartzによる公開環境を案内する入口として使う。個別ノートを分類して並べるだけでなく、どの順序で読めば運用判断を追えるかを示す。

### 運用原則を理解する

1. [ツェッテルカステン向けのVaultのフォルダ構成](zettelkasten-vault-folder-structure.md)
2. [Quartzにおけるノートの管理設計](quartz-note-management-design.md)
3. [外部環境で得た知識と内省知の切り分け方](separating-external-and-reflective-knowledge.md)
4. [知識や経験を自分のネットワークに編み込んでいく](weaving-knowledge-into-zettelkasten.md)

### 個別の記録方法を判断する

- [再読時に思考へ戻れること](return-to-thinking-on-reread.md)
- [活動記録はジャーナルとして残す](keep-activity-logs-as-journal.md)
- [AIに尋ねた質問をメモとして残す判断基準](criteria-for-saving-ai-questions.md)
- [外部リンクだけのノートには接続意図を残す](external-link-hub-notes.md)
- [読書習慣を取り戻すための仕組みを作る](building-a-reading-folder-to-rebuild-the-habit.md)

## 基本設計

カードは一つの問いや主張を扱い、関係の理由が分かるリンクで接続する。アトミックであることを文章の短さと同一視せず、別の文脈でも再利用でき、再読時に思考を再開できる単位を目指す。

フォルダ、`type`、`tags`には異なる役割がある。

- フォルダ：作業段階や利用場面を示す
- `type`：現在のノートの知識上の役割を示す
- `tags`：分野や情報源など、横断的な属性を示す

現行の`type`は次の5種類とする。

- `fleeting`：未整理の着想や一時的な問い
- `literature`：外部資料の内容や、それに対する記録
- `permanent`：自分の言葉で成立する再利用可能な主張
- `structure`：複数ノートの関係や読み順を案内する構造ノート
- `index`：特定の規則に基づき対象を列挙する索引

AI回答は自動的にLiterature Noteとせず、検証段階と保存目的から`type`を選ぶ。AIが生成した本文であることは`type`ではなく`ai-generated`タグで示す。外部リンクだけを保存する場合も、何のためのリンクか、どの問いや主張へ接続するかを記録する。

## 構築方法

- 環境
	- ノート作成・管理：Obsidian
	- 静的サイト生成：Quartz
	- リポジトリ管理：GitHub
		- [Gitエコシステムまとめ](32_Zk/git-ecosystem-notes.md)
	- ホスティング：Cloudflare Pages
		- [Cloudflare Pages / GitHub / GitHub Pagesの比較](cloudflare-pages-vs-github-pages.md)
		- [Cloudflare Pagesの主な制限](cloudflare-pages-limitations.md)
	- ドメイン管理：conoHa
		- [外部カスタムドメインをCloudflare Pagesで利用する場合の制限](cloudflare-pages-external-domain-restrictions.md)


- 設計・運用
	- [QuartzにおけるURL設計](quartz-url-design.md)
	- [Quartzにおけるノートの管理設計](quartz-note-management-design.md)
	- [Quartzの公開・非公開を設定する](quartz-publish-visibility-settings.md)
	- [markdownlinkを採用](adopting-markdown-links.md)
	- [画像ファイルの命名規則](image-naming-conventions.md)
	- [コールアウトの使い分け](using-markdown-callouts.md)

## フォルダ構成

現在のフォルダ構成は次のとおり。フォルダ間の移動を機械的な必須工程にはせず、各ノートの役割と今後の利用方法から保存先を判断する。

- `01_Templates`：新規ノート用テンプレート
- `02_images`：画像などの添付ファイル
- `10_Analytics`：分析結果や集計
- `20_Journal`：日記、活動経過、試行錯誤
- `21_Reading`：負担の軽い読書記録
- `30_Inbox`：未整理のメモと一時的な作業領域
- `31_Research`：調査記録、資料整理、精読
- `32_Zk`：Permanent Note、Structure Note、Indexを中心とする知識ネットワーク
