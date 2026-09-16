---
title: VS CodeとTyporaでMarkdownを編集する使い分け
aliases:
  - VS CodeとTyporaでMarkdownを編集する使い分け
  - vscodeとTyporaでマークダウンエディタの違い
  - VS CodeとTyporaの違い
type: permanent
created: 2026-06-20T19:50:01+09:00
updated: 2026-09-17T07:42:09+09:00
id: 20260620-195001
permalink:
draft: false
tags:
  - ai-generated
---
# VS CodeとTyporaでMarkdownを編集する使い分け

VS CodeとTyporaは、どちらもMarkdownファイルを編集できる。ただし、選ぶ基準は「Markdownを書けるか」ではなく、ファイル群・Git・リンクを管理する作業か、見た目を確認しながら単一文書を書く作業かにある。

|観点|VS Code|Typora|
|---|---|---|
|主な強み|複数ファイル、検索、Git、拡張機能、開発作業と一体化|見た目を確認しながら文書を書くことに集中しやすい|
|Markdown表示|標準のプレビュー、見出し一覧、リンクや画像の補完を利用できる|編集画面で整形結果を直接見ながら入力する|
|向く作業|デジタルガーデン、リポジトリ、リンク修正、コードブロックを含む文書|単一の文章、見出し・表・画像を見ながら整える文書|
|注意点|フォルダーを開くとWorkspace Trustの判断が必要になる|Git・一括検索・リポジトリ全体の検証は別の手段が必要になる|

VS CodeにはMarkdownの見出し一覧、パス補完、画像・ファイルリンクの挿入、リンク検証などがある。基本的なMarkdown編集・プレビューのために拡張機能が必須というわけではない。[Markdown and Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown)

## 使い分けの目安

```text
複数ノートのリンクを直す／Gitで変更を管理する／コードも扱う
    → VS Code

文章の見た目を確かめながら、一つの文書を集中して整える
    → Typora
```

同じMarkdownファイルを両方で開くことはできるが、同時編集は競合や上書きの原因になる。片方を閉じるか、保存した更新日時を確認してから切り替える。

デジタルガーデンでは、最終的な表示は公開側のテーマや変換処理にも左右される。TyporaまたはVS Codeのプレビューだけを公開表示の完全な再現とみなさず、必要ならビルド結果も確認する。
