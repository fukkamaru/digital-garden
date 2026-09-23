---
title: sentence-per-lineとsemantic line breaks
aliases:
  - sentence-per-lineとsemantic line breaks
  - sentence-per-line
type: literature
created: 2026-05-09T16:57:15+09:00
updated: 2026-09-23T22:00:58+09:00
id: 20260509-165715
permalink:
draft: true
---

# sentence-per-lineとsemantic line breaks

このノートは、Gitで文章を管理するときの改行単位を考えた記録である。`sentence-per-line`も差分を読みやすくする方法だが、`semantic line breaks`とは分割の粒度が異なる。

|方式|主な改行単位|主な目的|
|---|---|---|
|段落の自動折返し|表示幅|閲覧|
|sentence-per-line|文|1文を1つの差分単位にする|
|semantic line breaks|句・節などの意味単位|小さな修正でも差分を絞る|

sentence-per-lineは英語の伝統的作文規則というより、プレーンテキストやGitで編集差分を扱いやすくする慣習に近い。英語では文の境界が比較的明確なため相性がよい。

日本語では、一文が長くなりやすく、助詞や接続関係によって文節の依存が強い。そのため一文一行にしても十分に細かい差分にならない場合があり、意味の区切りで改行する方法や、普通の段落を保つ方法が選択肢になる。

個人の公開ノートでは、Git差分だけでなく、公開時の読みやすさと思考の流れも判断材料になる。このZKでは、差分の細かさを目的に一律の改行規則を導入するのではなく、文章の論理と可読性を優先する。
