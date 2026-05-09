---
title: QuartzにおけるURL設計
aliases:
  - QuartzにおけるURL設計
type: journal
created: 2026-04-26T10:59:40+09:00
updated: 2026-04-26T10:59:40+09:00
id: 20260426-105940
draft: false
source:
  - https://quartz.jzhao.xyz/features/private-pages
---
Quartzで公開されるノートは、**ノートタイトル（マークダウンファイル名）がそのままURL**にも使われる。

この仕様がデジタル上でツェッテルカステンを構築すること、またそれをQuartzでインターネット公開するにあたって、早々にURL設計を決める必要性を迫られたので、問題点と解決策を整理する。


**理想**
- ファイル名はUIDにする
	- [ツェッテルカステンはUIDが推奨される]
- permalinkでURLを設計する
	- 一般的にリダイレクト先となるURLのこと


**仕様と問題点**
- 公開URLはファイル名が使われる。
	- UIDを使う→**UID**となる。
	- 日本語タイトルにする→**文字コードが化ける**
		- ※例：[エンコード・デコードの例](QuartzにおけるURL設計.md)
- **[Quartzのpermalinkは恒久的ではない]**
	- 致命的だが技術的な問題なので仕方がない。


**妥協案**
- ファイル名は`Alphanumeric`を採用
	- **小文字限定**
	- ケパブケースを採用
- 冗長にならない
	- 5単語ぐらいに収める

>[!question]
>わっちのような、英語が出来ないユーザーがどうやって？ ↓


**妥協案に対する解決方**
- マークダウンはObsidianで管理
	- 拡張プラグイン「front matter title」を使う
		- YAMLのtitle値、aliases値の日本語名をObsidian上で使える
- YAMLでメタ情報を管理
	- title：日本語でタイトを入力
		- **Quartzで公開されるページタイトルとして優先される**
	- aliases：title値と同じ値を入れる
		- **リンク入力時にオートコンプリート機能で使える**
	- id：ファイル名に含めないUIDの代わりとして、固有番号をメタ情報で管理
		- YYYYMMDD-hhmmdd
