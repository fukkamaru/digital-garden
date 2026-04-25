---
title: デジタルガーデンの環境を構築する
type: permanent
created: 2026-04-25T11:46:14+09:00
updated: 2026-04-25T11:46:14+09:00
id: 20260425-114614
aliases: []
draft: "false"
source: https://jmatsuzaki.com/archives/28115
---

## 構築の流れ

- obsidianを選択
	- ツェッテルカステンでPKMを蓄積したいから **※最適ではないらしい**
	- LLMとマークダウンファイルの親和性
	- 複数端末で同期
		- githubを中核とすることで解決可能
	- デジタルガーデンとしても機能させたい
		- obsidian sync（公式機能、有料）
		- quartz（無料）
			- github, quartz, cloudflareで完全無料化出来る
			- 独自ドメイン利用の場合（ドメイン料だけで済む）
	- コストを抑えたい
		- quartz, github, cloudflareは無料
			- github pages（商用利用は有料）
			- cloudflare pages（商用利用も無料）
		- iosのworking copy（githubアプリ）は有料（\4500、学生は無料）
- githubの設定
	- 公開用アカウントおよびリポジトリの用意
- quartsの設定
	- githubにクローンを作成
	- テストする
		- local:8080でindex.mdを開く
	- cludeflare側とgithubの接続を進める
- cludeflareの設定
	- cludeflare pagesでデプロイする ※worksではない
		- **ちゃんと文字をみないとpagesへ行けない**
	- conohaにあるドメインを利用する ※移管ではなくカスタム利用
- obsidianの設定
	- 複数端末で使えるようにする
	  ※githubを中核としたworking copy利用（ios）の場合は、ここで課金が必須
		- **obsidianのスマホ同期は一旦保留とする。**
	- wikilinkをやめてmarkdown linkに変更する **※それでも、pandocじゃないので堅牢性は低いらしい**
	- プラグインとテンプレートの設定を行う
		- ノートの種別：YAML（type）で管理
			- literature, peamenent, structureは同一フォルダで管理
			- fleetingのみ別フォルダ管理
		- ファイル名とUID 
			- ファイル名はUIDではなくYAML（title）で管理
				- 小文字英単語のケパブケースを採用
					- 例1: build-a-digital-garden-environment
					- 例2: this-is-a-pen	
				- quartzはファイル名がslugになる仕様
					- peramlinkがリダイレクト用の旧リンクにしか使えない
						- 一般的なperamlinkと意味合いが異なる
						- 並列処理の関係で難しいらしい（開発者曰く）
						- 諦めるかUIDを採用するか？
							- ⇒ 諦めた
					- 「fukkamaru.space/20260425」はリンク名が直感的ではない
					- 日本語ファイル名は直感的だが、リンク付けで「%3%5%2～」ともっとカオス
			- obsidianはコミュニティプラグイン「front matter title」を使うことでカバー出来る
			- quartzもtitle値が入ってるとページタイトルとして扱ってくれる
			- UIDはメタ情報として持っては置く。日付データを入れる。※使うかは不明
		- その他のプラグイン
			- Git
			- Dataview
			- Templater
			- Update time on Edit


とりあえずコレで暫く運用してみる。


## 今後の調整

- obsidianプラグインの追加
	- デジタルガーデンを続けやすくしたい
	- ツェッテルカステンやquartzと相性の用意ものが欲しい
- YAMLの入力単純化
	- プラグインでドロップボックスによる選択式がある
- ウェブページのレイアウト
	- デジタルガーデンとしてのページタイトル名を考える
	- サイト下部にあるリンク先などの調整
- カスタムドメインによる問題
	- 「CNAME」しか使えないことで「www.」のサブドメイン利用
	- ルートドメインでアクセスするとページなし ※設定は簡単らしい
	- ドメイン移管したら、ルートドメインをメインに修正して「www.」はリダイレクトするとよい
- サーバーによるログイン管理は無理
	- githubおよびcloudflareの両方でアクセス管理したら、特定個人ページは作成可能

