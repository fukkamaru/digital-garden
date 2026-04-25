---
title: Digital Garden環境を構築する
type: fleeting
created: 2026-04-25T11:46:14+09:00
updated: 2026-04-25T11:46:14+09:00
id: 20260425-114614
aliases: []
draft: "false"
source:
---

## 流れ

- obsidianを選択
	- ツェッテルカステンでPKMを蓄積したいから ※最適ではないらしい
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
	  ※githubを中核としたworking copy利用の場合はここで課金が必須
		- **obsidianのスマホ同期は一旦保留とする。**
	- プラグインとテンプレートの設定を行う
		- ノートの種別：YAML（type）で管理
			- literature, peamenent, structureは同一フォルダで管理
			- fleetingのみ別フォルダ管理
		- ファイル名とUID 
			- ファイル名はUIDではなくYAML（id）で管理
				- 小文字英単語のケパブケースを採用
					- 例1: build-a-digital-garden-environment
					- 例2: this-is-a-pen	
				- quartzはファイル名がslugになる仕様
					- YAMLのperamlinkはリダイレクト用の旧リンク入れとしてしか機能しない
						- 一般的なperamlinkと意味合いが異なる
						- 並列処理（仕様）の関係で難しいらしい
						- 諦めるかUIDを採用するか？
							- ⇒ 諦めた
					- 「fukkamaru.space/20260425」はリンク名が直感的ではない
					- 日本語ファイル名は直感的だが、リンク付けで「%3%5%2～」ともっとカオス

		
		- 



複数端末で同期　：githubを中核にする
ノートのチェック：スマホならウェブで見るのが視認性が良い：quartzを使う

quartzでの表示を調整していく
・



## 流れ
1. LLMと親和性の高いマークダウンファイルを使ったobsidianを採用する
2. githubを中核として複数端末でアクセス出来るようにする
3. 
