---
title: 公開型ツェッテルカステンの設計と構築
aliases:
  - 公開型ツェッテルカステンの設計と構築
type: permanent
created: 2026-05-02T06:32:51+09:00
updated: 2026-10-25T14:33
id: 20260502-063251
permalink:
draft: false
---
ツェッテルカステンとは？

ドイツの社会学者ニクラス・ルーマンが開発した情報管理システム。情報（学び）を1カード・1とピックと小さく切り出したカードを、それぞれリンクさせることでカード同士の関係性・繋がり（ネットワーク）を後から追うことを可能にしある情報整理術

![[fukkamaru.png|25x25]] ITの世界で例えるなら？
2026/05/02
- ファンクション（関数）を作るイメージ
	- 様々な場面で呼び出し・再利用される単一の機能
	- それ自体が意味をなすこともある
	- 幾つかをパッケーしてライブラリとしても提供

>[!warning]
>モジュールで理解すると単一のカードは、それだけでは意味をなさないように思えてします
> ⇨ そんなことはない

> [!note]
> ファンクションと明確に異なる点として、番号は振られていない
> 	- カードの繋がりを追いかけることができる
> 	- 思い出すことができる

2020/XX/XX
- ~~モジュール（部品）を作るイメージ~~
	- ~~いくつかを組み合わせて機能する~~
	- ~~それ自体だけでは意味をなさない~~


ノートの書き方
- 一時ノート（Fleeting）
	- 思いついたことを自由に走り書きする
	- 永続ノートに清書したら削除する
- 文献ノート（Literature）
	- 書籍、動画、Webといった一次情報から、その要約や感想をまとめたもの
	- 文献として残しておく必要のないものは、永続ノートに清書したら削除する
- 永続ノート（Permanent）
	- 一時ノートや文献ノートから、自分の言葉でまとめたノート
	- 一定期間ごとに見直して情報を修正をする他、不要になったものやクラス替えの必要なものを削除・変更を行う
- 構造ノート（Structure）
	- 永続ノートについて、ある特定の分野でまとめたもの
	- ハブとして機能する

AIに出力させた記事はどう扱う？
セカンダリ情報として文献ノートとして扱う
AIによるものと一目でわかるようにしておく

タイトルの付け方
- 命題型
	- ○○はXXである
- 説明型
	- ○○は△△することでXXとなる
- 問題解決型
	- ○○は△△することでXXとなる

それぞれのノートは、再利用できるようにアトミックに始めると良い。ただし、何でもかんでもアトミックにするのではなく再利用しやすい単位で区切る。そのため、必ずしもアトミックとは限らない。

また、ノートが肥大化してきたら、再利用しやすい単位で分割・再構成する。この辺りもファンクション的な考えに近い。

---

- 構築方法
	- 環境
		- ノート作成・管理：Obsidian
		- 性的サイト生成：Quartz
		- リポジトリ管理：Github
			- [Gitエコシステムまとめ](32_Zk/git-ecosystem-notes.md)
		- ホスティング：Cloudeflare Pages
			- [比較](cloudflare-pages-vs-github-pages.md) / [主な制限](cloudflare-pages-limitations.md)
		- ドメイン管理：ConoHa
			- [外部カスタムドメインの制限](cloudflare-pages-external-domain-restrictions.md)
		- iOS Gitクライアント：Working Copy
- 設計・運用
- ノート管理
	-  [ツェッテルカステン向けのVaultのフォルダ構成](zettelkasten-vault-folder-structure.md)
	- [Quartzにおけるノートの管理設計](quartz-note-management-design.md)
- 記述
	- [[return-to-thinking-on-reread|再読時に思考へ戻れること]]
	- [[keep-activity-logs-as-journal|活動記録はジャーナルとして残す]]
	- [[separating-external-and-reflective-knowledge|外部環境で得た知識と内省知の切り分け方]]
	- [AIに尋ねた質問をメモとして残す判断基準](criteria-for-saving-ai-questions.md)
	- [外部環境で得た知識と内省知の切り分け方](separating-external-and-reflective-knowledge.md)
	- [知識や経験を自分のネットワークに編み込んでいく](weaving-knowledge-into-zettelkasten.md)
	- [外部リンクだけのノートには接続意図を残す](external-link-hub-notes.md)
	- [読書習慣を取り戻すための仕組みを作る](building-a-reading-folder-to-rebuild-the-habit.md)

---

- [QuartzにおけるURL設計](quartz-url-design.md)
- [Quartzにおけるノートの管理設計](quartz-note-management-design.md)
- [Quartzの公開・非公開を設定する](quartz-publish-visibility-settings.md)
- [markdownlinkを採用](adopting-markdown-links.md)
- [画像ファイルの命名規則](image-naming-conventions.md)
- [コールアウトの使い分け](using-markdown-callouts.md)


---

| ------------ |
| フォルダ   | 作業段階や利用場面を示す       |
| `type` | ノートの現在の知識上の役割を示す   |
| `tags` | 分野・情報源などを横断する属性を示す |


| `type`       | 意味                     |
| ------------ | ---------------------- |
| `fleeting`   | 未整理の着想や一時的な問い          |
| `literature` | 外部資料の内容や、それに対する記録      |
| `permanent`  | 自分の言葉で成立する再利用可能な主張     |
| `structure`  | 複数ノートの関係や読み順を案内する構造ノート |
| `index`      | 特定の規則に基づき対象を列挙する索引     |


## フォルダ構成

フォルダ間の移動を機械的な必須工程にはしない。ノートの役割と今後の利用方法から保存先を判断する。

| フォルダ           | 用途                                                |
| -------------- | ------------------------------------------------- |
| `01_Templates` | 新規ノート用テンプレート                                      |
| `02_images`    | 画像などの添付ファイル                                       |
| `10_Analytics` | 分析結果や集計                                           |
| `20_Journal`   | 日記、活動経過、試行錯誤                                      |
| `21_Reading`   | 負担の軽い読書記録                                         |
| `30_Inbox`     | 未整理のメモと一時的な作業領域                                   |
| `31_Research`  | 調査記録、資料整理、精読                                      |
| `32_Zk`        | Permanent Note、Structure Note、Indexを中心とする知識ネットワーク |
