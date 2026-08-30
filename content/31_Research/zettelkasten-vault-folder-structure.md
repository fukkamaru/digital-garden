---
title: ツェッテルカステン向けのVaultのフォルダ構成
aliases:
  - ツェッテルカステン向けのVaultのフォルダ構成
type: literature
created: 2026-08-30T16:51:21+09:00
updated: 2026-08-30T16:51:21+09:00
id: 20260830-165121
permalink:
draft: false
tags:
  - ai-generated
---
以下が、ここまでのフォルダ構成についての整理です。

## 現状の前提

ツェッテルカステン用Vaultは、一般コンテキスト用Vaultとは別管理。

現在の主な役割は次の通り。

- `01_Templates`
    - Templater用テンプレート
- `02_Images`
    - スクリーンショット等
- `Inbox`
    - 未処理メモ、Fleeting Note、調べたいこと、AI対話のコピペなど
- `Research`
    - AI主体で整理した参照ノート
    - 自分の思考が十分に伴っていないもの
    - 後日、ブログやObsidian上で参照できれば完成
- `Journal`
    - 自分が実際に行った作業のログ
    - Obsidian、Quartz、GitHub設定など
- `Analytics`
    - 分析関係
- `Zk`
    - 自分の思考を伴って作ったツェッテルカステン用カード
    - Literature / Structure / Permanentなどもここに入る

## 旧`20_Notes`について

`20_Notes`の中身を確認すると、主に「後で調べたいこと」のメモだった。

そのため、

- `20_Notes`は廃止候補
- 中身はFleeting Noteとして`Inbox`へ統合  
    という方向になった。

## 知識処理の基本フロー

今後は、まずすべてをInboxへ入れ、そこから処理する。

```text
Inbox
├─→ Research
└─→ Zk
```

具体的には、

- AI主体で整理し、自分の思考が薄いもの → `Research`
- 自分で咀嚼し、思考としてまとめたもの → `Zk`

また、Researchは未完成品置き場ではなく、参照ノートとしては完成扱い。

```text
Inbox
↓
AIに整理させる
↓
Research
↓
必要になったときだけ自分で再考
↓
Zk
```

ResearchからZkへ進む場合も、必ず元ノートを移動する必要はない。

- Researchを残す
- それを参照して新しいZettelを作る
- 相互リンクする  
    という形でもよい。

## Inboxを空にする運用

今回の見直しの中心は、

> Inboxを定期的に空にする  
> こと。

その処理の大部分をAIに任せ、

- AI整理済み → Research
- 自分で考えたもの → Zk  
    へ振り分ける。

これにより、「全部自分で咀嚼しないといけない」という処理負債を減らす。

## Researchの位置づけ

Researchは単なるAIフォルダではなく、

> 自分のための検索可能な参照知識ベース  
> として育てる。

Quartz上でも公開されるため、ブログ自体が自分用の参照DBとして機能する。

Researchの特徴は、

- AI主体
- 自分の思考は薄い
- 参照目的
- 必要になったらZkへ昇格可能

## Zkの位置づけ

ZkはVaultおよびQuartz公開ブログの主役。

ここには、

- Literature
- Structure
- Permanent  
    など、Fleeting以外のツェッテルカステン用カードが入る。

重要なのは、

> ノート種別によってフォルダを分けるわけではない  
> こと。

Zkは「自分の思考を伴うカード群」という意味でまとまっている。

## Journalの位置づけ

JournalはZk配下に入れる案も検討したが、現時点ではトップレベル維持を推奨。

理由は、

- 自分が実際に行ったことなので一次情報として価値は高い
- ただし「作業記録」と「再利用可能な知識」は別
- JournalはZettelそのものではない
- Journalから意味のある知見を抽出してZkへつなげる方が自然

関係は次のようになる。

```text
Journal ─────→ Zk
Research ────→ Zk
```

Journalは、

> 自分自身による一次資料  
> としてZkを支える層。

## フォルダ番号と並び順

当初は、

```text
10_Inbox
11_Research
12_Zk
```

という連番案を検討した。

これは処理フローとしては分かりやすいが、

- ZkがVault・ブログの主役
- それが一覧の真ん中に埋もれる  
    という違和感が出た。

そこで、

> Zkを一覧の一番下に置き、視認性を上げる  
> 方向へ変更。

JournalとAnalyticsを先に置き、その後に  
`Inbox → Research → Zk`  
を連続配置する案が有力になった。

## 現時点の第一候補

現時点では、次の並びが最有力。

```text
01_Templates
02_Images
10_Analytics
20_Journal
30_Inbox
31_Research
32_Zk
```

意味としては、

```text
01–02
システム・素材

10
特殊用途・分析

20
自分自身の一次記録

30–32
知識処理のメインフロー
Inbox → Research → Zk
```

この構成の利点は、

- `Inbox → Research → Zk`が連続して見える
- Zkが一番下に来る
- Obsidian上でもQuartzのフォルダリスト上でもZkを見つけやすい
- JournalとResearchの役割が混ざらない
- ResearchとZkの違いが「AI主体か、自分の思考主体か」で明確
- Inboxを定期的に空にする運用と整合する

## 現時点の設計思想

最終的には、次の4層として考えると整理しやすい。

|層|役割|
|---|---|
|Inbox|未処理|
|Research|AI主体の参照知識|
|Journal|自分が実際に行ったことの一次記録|
|Zk|自分の思考として再構成した知識|

そしてZkを中心に、

```text
Research ──→
             Zk
Journal ───→
```

という関係を作る。

現時点では、フォルダ構成の第一案は **`01_Templates / 02_Images / 10_Analytics / 20_Journal / 30_Inbox / 31_Research / 32_Zk`** です。