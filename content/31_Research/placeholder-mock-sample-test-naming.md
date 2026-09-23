---
title: dummy・mock・sample・test・temp・draftの使い分け
aliases:
  - dummy・mock・sample・test・temp・draftの使い分け
type: literature
created: 2026-08-13T02:25:08+09:00
updated: 2026-09-22T14:09:02+09:00
id: 20260813-022508
permalink:
draft: true
tags:
  - ai-generated
---

# dummy・mock・sample・test・temp・draftの使い分け

これらの語は、対象の**用途・役割**と、**完成状態または寿命**を分けて考えると使い分けやすい。`dummy`、`mock`、`sample`、`test`は主に前者、`temp`と`draft`は主に後者を表す。`draft-design`や`test-data`のように、対象物と組み合わせて命名する。

|語|中心的な意味|適した場面|例|
|---|---|---|---|
|`dummy`|中身や機能を持たない代用品|仮データ、穴埋め、配置確認|`dummy-user`|
|`mock`|本物らしく見せる・振る舞う再現物|UI見本、mock API、外部サービスの模倣|`mock-payment-api`|
|`sample`|参考として見せる代表例|記入例、コード例、設定例|`sample-config.yaml`|
|`test`|正しさや動作を検証するもの|テスト用アカウント、データ、環境|`test-dataset`|
|`temp`|役目が終われば消せる一時物|書き出し、中間生成物、作業用コピー|`temp-export.csv`|
|`draft`|完成へ向けて編集中の制作物|原稿、提案、設計、デザイン|`draft-proposal`|

## 近い語の境界

- `dummy` は、そこに何かを置くことが目的で、内容が実用的でなくてもよい。
- `mock` は、外観または振る舞いを本物に近づける必要がある。
- `sample` は、他者が構造や使い方を理解できる例である。
- `test` は、特定の条件で合否や動作を確認するためのものである。誤って本番に混ざらないよう、名前だけでなく環境・権限も分ける。
- `temp` は短い寿命、`draft` は将来の完成版へ育てる途中状態を表す。長く編集する原稿を`temp`とは呼ばない。

## 迷ったときの判断順

1. 本物の代わりに場所を埋めるだけなら `dummy`。
2. 本物らしい見た目・振る舞いを再現するなら `mock`。
3. 他者が参照できる例なら `sample`。
4. 動作や品質を検証するなら `test`。
5. 用途が終われば消すなら `temp`。
6. 修正を重ねて完成させるなら `draft`。

`placeholder`（後で差し替える仮置き）、`prototype`（アイデアや操作性を検証する試作品）、`demo`（価値を見せる実演用）、`staging`（本番前の統合確認環境）も、意図をより正確に表す場合がある。
