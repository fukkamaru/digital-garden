---
title: fukkamaru.spaceのフォルダ構成における番号体系の整理
aliases:
  - fukkamaru.spaceのフォルダ構成における番号体系の整理
type: literature
created: 2026-09-01T04:49:53+09:00
updated: 2026-09-01T04:49:53+09:00
id: 20260901-044953
permalink:
draft: false
tags:
  - ai-generated
---
以下のように整理できます。

# Fukkamaru Context Vault：フォルダ構成における番号体系の整理

現在のVaultでは、フォルダ名の先頭に番号を付与し、Obsidian上での並び順と各フォルダの役割を整理している。

現在の主要構成は次のとおり。

```text
01_Templates
02_Images

10_Analytics

20_Journal
21_Reading

30_Inbox
31_Research
32_Zk
```

Quartzで公開するブログ側では、`01_Templates` と `02_Images` は公開対象ではないため、実質的には次のように `10_Analytics` から始まる。

```text
10_Analytics
20_Journal
21_Reading
30_Inbox
31_Research
32_Zk
```

この「01・02の次が10」という構成、および「00が存在しない」点について検討した。

---

## 1. 番号は単純な連番ではなく「分類コード」と考える

現在の番号体系は、

```text
01
02
10
20
21
30
31
32
```

という単純な連番ではない。

むしろ、**十の位によってフォルダの大分類を表し、一の位によってその分類内の個別フォルダを表す方式**と考えると整合性が高い。

概念的には次のようになる。

|番号帯|役割|
|---|---|
|`00–09`|Vault Infrastructure / System|
|`10–19`|Analytics|
|`20–29`|Activity / Records|
|`30–39`|Knowledge System|

現在のフォルダを当てはめると、

|フォルダ|位置づけ|
|---|---|
|`01_Templates`|Vault運用を支える内部資産|
|`02_Images`|Vault・ブログで利用する画像資産|
|`10_Analytics`|分析|
|`20_Journal`|日々の活動・一次記録|
|`21_Reading`|読書という活動の記録|
|`30_Inbox`|未処理情報の入口|
|`31_Research`|調査・参照知識|
|`32_Zk`|自分で咀嚼したZettelkasten|

となる。

この考え方では、番号は「第1フォルダ、第2フォルダ、第3フォルダ」という順番そのものではなく、**役割を示す名前空間**に近い。

---

## 2. `01_Templates`・`02_Images` と `10_Analytics` 以降はレイヤーが異なる

`01_Templates` と `02_Images` は、`Analytics`・`Journal`・`Research`などと性質が異なる。

前者は、

```text
Vaultを運用するためのもの
```

であり、後者は、

```text
Vaultの中で蓄積・処理する情報
```

である。

したがって、次のように二層に分けて考えられる。

```text
Vault Infrastructure
├─ 01_Templates
└─ 02_Images

Vault Contents
├─ 10_Analytics
├─ 20_Journal
├─ 21_Reading
├─ 30_Inbox
├─ 31_Research
└─ 32_Zk
```

この違いがあるため、

```text
02 → 10
```

と番号が飛んでいても不自然ではない。

むしろ無理に、

```text
01
02
03
04
05
...
```

と連番にすると、内部資産と知識フォルダという異なる役割を同じ階層の番号として扱うことになる。

現在のように番号帯を分ける方が、構造上の意味は明確になる。

---

## 3. ブログ側が `10_Analytics` から始まっても問題ない

Quartzで公開されるブログでは、

```text
01_Templates
02_Images
```

が表示されない。

そのため、閲覧者から見ると、

```text
10_Analytics
20_Journal
21_Reading
30_Inbox
31_Research
32_Zk
```

という構成になる。

一見すると「なぜ10から始まるのか」と感じる可能性はあるが、設計上は問題ない。

理由は、`01`・`02`が「ブログカテゴリの1番・2番」ではなく、**非公開のVault Infrastructureに割り当てられている番号だから**である。

したがって、

```text
Obsidian / Vault
01_Templates
02_Images
10_Analytics
20_Journal
...

Quartz / Blog
10_Analytics
20_Journal
...
```

という違いは自然である。

Vaultの内部構造とブログの情報構造を完全に一致させる必要はない。

むしろ、Quartz上に表示されないという理由だけで番号を詰め直すと、Vault内部の分類設計をWeb表示の都合に合わせることになる。

その必要性は低い。

---

## 4. 10・20・30と番号を飛ばすメリット

大分類ごとに10刻みで番号を割り当てる方法には、将来的な拡張性がある。

たとえば現在、

```text
20_Journal
21_Reading
```

となっているように、20番台の中に関連フォルダを追加できる。

将来的には例として、

```text
10_Analytics
11_Dashboard
12_Reports

20_Journal
21_Reading
22_Travel

30_Inbox
31_Research
32_Zk
33_Archive
```

のような拡張も可能である。

単純連番の場合、

```text
03_Analytics
04_Journal
05_Reading
06_Inbox
...
```

となり、新しいカテゴリを途中に追加したい場合、既存番号を変更するか、不自然な位置に追加する必要が出てくる。

10刻みの分類コード方式なら、その問題を避けられる。

---

## 5. `00` が存在しないことについて

現在、

```text
01_Templates
02_Images
```

から始まり、`00`は存在しない。

これも問題ではない。

番号体系は連番ではなく分類コードなので、

```text
00が存在しない
```

ことを「欠番」と考える必要はない。

したがって、単に番号を0から始めたいという理由だけで、

```text
01_Templates
↓
00_Templates
```

へ変更する必要はない。

---

## 6. `Templates` を `00` に変更しない方がよい理由

仮に、

```text
00_Templates
01_Images
```

と変更することは可能だが、得られるメリットは小さい。

むしろ `00` は、番号体系の中で最も上位・基盤的な意味を持たせやすい番号である。

そのため、

```text
00 = Templates
```

と限定してしまうよりも、

```text
00 = Vaultそのものを管理する領域
```

として予約しておく方が、将来の拡張性が高い。

したがって、

```text
01_Templates
02_Images
```

は現状維持が望ましい。

---

## 7. `00` に相応しい役割

将来的に必要になった場合、`00`は例えば、

```text
00_System
```

のようなフォルダに適している。

ここには、特定のテーマに関する知識ではなく、**Vaultそのものを管理・説明・制御する情報**を置く。

候補としては、

- Vault全体の設計方針
- フォルダ構成ルール
- ファイル命名規則
- Property設計
- タグ設計
- Zettelkasten運用ルール
- AI用コンテキスト
- AIへの初期指示
- Dataview設定
- Obsidianプラグイン関連の管理資料
- Quartz公開ルール
- VaultとQuartz間の連携仕様
- 自動化・スクリプトの仕様
- ワークフロー設計
- Vaultの変更履歴・設計判断

などが考えられる。

構造としては、

```text
00_System
01_Templates
02_Images

10_Analytics

20_Journal
21_Reading

30_Inbox
31_Research
32_Zk
```

となる。

この場合、

```text
00 = Vaultそのもの
01–09 = Vaultを支える内部資産
10以降 = Vaultで扱う情報
```

という非常に明確な階層になる。

---

## 8. ただし現時点で `00_System` を作る必要はない

`00_System` が意味的に適しているからといって、今すぐ作る必要はない。

フォルダは、実際に格納する情報が存在して初めて作る方がよい。

「番号体系を完成させるため」だけに空フォルダを作ると、構造そのものが目的化する。

したがって現時点では、

```text
01_Templates
02_Images
```

から始まる状態を維持し、

```text
00 = System / Meta用として予約
```

という設計だけ決めておけば十分である。

必要になった段階で、

```text
00_System
```

を追加すればよい。

---

## 9. 推奨する番号体系

現時点では、次のルールが最も整合性が高い。

```text
00      System / Meta
01–09   Infrastructure / Assets

10–19   Analytics

20–29   Activity / Records

30–39   Knowledge System
```

実際の現在構成は、

```text
[00_System]       ← 将来用として予約

01_Templates
02_Images

10_Analytics

20_Journal
21_Reading

30_Inbox
31_Research
32_Zk
```

と考える。

`00_System` の角括弧は「現在は存在しない予約領域」を示している。

---

## 10. 各番号帯の意味

### `00`

Vaultそのものを扱う最上位のMeta / System領域。

現在は未使用でも問題ない。

### `01–09`

Vaultを支えるInfrastructure / Assets。

現在は、

```text
01_Templates
02_Images
```

が該当する。

### `10–19`

分析・集計・可視化などのAnalytics領域。

```text
10_Analytics
```

が該当する。

### `20–29`

自分が行った活動や経験の一次記録。

```text
20_Journal
21_Reading
```

が該当する。

JournalとReadingは、いずれも「自分が何をしたか」というActivity / Recordとして同じ番号帯に配置する。

### `30–39`

知識の取得・整理・再構成を行うKnowledge System。

```text
30_Inbox
31_Research
32_Zk
```

が該当する。

この3つは、

```text
Inbox
  ↓
Research
  ↓
Zk
```

という単純な強制フローではないものの、知識処理システムとして強く関連するため、30番台にまとめる。

---

## 11. 番号体系全体を図にすると

```text
00–09 : Vault Infrastructure / System
│
├─ 00_System        ← 将来必要なら追加
├─ 01_Templates
└─ 02_Images

10–19 : Analytics
│
└─ 10_Analytics

20–29 : Activity / Records
│
├─ 20_Journal
└─ 21_Reading

30–39 : Knowledge System
│
├─ 30_Inbox
├─ 31_Research
└─ 32_Zk
```

この構造では、十の位が「何の領域なのか」を示し、一の位がその領域内での役割・順序を示す。

---

## 12. 最終的な判断

現時点では、フォルダ名を変更する必要はない。

維持する構成は、

```text
01_Templates
02_Images
10_Analytics
20_Journal
21_Reading
30_Inbox
31_Research
32_Zk
```

とする。

番号体系については、次のように定義しておく。

> フォルダ先頭の番号は単純な連番ではなく、役割ごとの分類コードとして使用する。十の位を大分類、一の位をその分類内の識別番号として扱う。`00–09`はVaultのシステム・内部資産、`10–19`はAnalytics、`20–29`はActivity / Records、`30–39`はKnowledge Systemに割り当てる。`00`は現在使用せず、将来的なVault全体のSystem / Meta領域として予約する。

このルールであれば、

- `01`・`02`の次が`10`であること
- Quartz上では`10_Analytics`から始まること
- `00`が現在存在しないこと
- 将来途中にフォルダを追加すること

のすべてを一つの設計思想で説明できる。

したがって、現在の番号構成は変更せず、**「00はSystem用予約、01–09は内部基盤、10以降を主要情報領域」と定義する**のが現時点で最も安定した方針である。

必要なら次に、これをそのままVaultの設計資料に入れられるように、**「フォルダ構成ルール」用のPermanent Note風に短く圧縮した版**も作れます。