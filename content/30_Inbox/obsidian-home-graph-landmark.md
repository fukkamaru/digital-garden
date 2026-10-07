---
title: ObsidianグラフビューでHOMEを視覚的ランドマーク化する
aliases:
  - ObsidianグラフビューでHOMEを視覚的ランドマーク化する
type: literature
created: 2026-10-04T15:27:48+09:00
updated: 2026-10-04T15:27:48+09:00
id: 20261004-152753
permalink:
draft: true
tags:
  - ai-generated
---

# ObsidianグラフビューでHOMEを視覚的ランドマーク化する

Obsidianのグローバルグラフで `HOME` を探す際、HOMEへのリンク数が少ないためノードが小さく、色分けしていても他のノードに埋もれて位置を見失いやすかった。

そこで、知識構造そのものとは切り離した**グラフ表示専用のアンカーノート**を複数作成し、HOMEとの接続数を意図的に増やすことで、HOMEをグラフ上の視覚的ランドマークとして目立たせる方式を採用した。

## 方針

完全なダミーデータを恒久的な知識ノートとして混在させるのではなく、用途を明示した「グラフアンカー」としてシステム領域へ隔離して管理する。

```text
03_systems/
└─ obsidian-graph/
   └─ home-anchors/
```

この方式の目的は、

- HOMEのグラフ上でのノードサイズを大きくする
- HOMEを見失いにくくする
- 通常のノート本文の見た目を汚さない
- ダミーノートと実際の知識ノートを明確に分離する
- 不要になった際に一括管理・削除しやすくする

ことにある。

アンカーノートは知識そのものではなく、**Obsidianの表示・ナビゲーションを補助するシステム資産**として扱う。

## アンカーノート

命名規則は次の通り。

```text
graph-anchor-home-XX.md
```

`XX` は `01` ～ `50` の連番。

最終的に50ノートを用意した。

```text
graph-anchor-home-01.md
graph-anchor-home-02.md
graph-anchor-home-03.md
...
graph-anchor-home-49.md
graph-anchor-home-50.md
```

`01`・`02` は事前に作成済みだったためそのまま維持し、Workで `03` ～ `50` の48ノートを追加した。

各アンカーノートの内容は最小限とする。

```yaml
---
title: graph-anchor-home-XX
aliases:
  - graph-anchor-home-XX
type:
draft: true
---
```

本文は置かない。

`draft: true` とすることで、Quartz上で通常の公開コンテンツとして扱わない。

## HOMEからのリンク方法

HOMEに50件のリンクをそのまま表示すると本文の視認性を損なうため、ページ末尾のObsidianコメント内へ配置する。

```markdown
%%
[[graph-anchor-home-01]]
[[graph-anchor-home-02]]
[[graph-anchor-home-03]]
...
[[graph-anchor-home-50]]
%%
```

`%% ... %%` はObsidian上でコメントとして扱われるため、通常のReading Viewでは表示されない。

一方、今回の環境では実機確認により、

```markdown
%%
[[graph-anchor-home-01]]
%%
```

のように**コメント内へ置いたWikiリンクもグラフビューではリンクとして認識される**ことを確認した。

したがって、

> 表示上は隠すが、グラフ上の接続関係としては利用する

という今回の用途に適している。

Workによる作業では、実際のHOMEである

```text
content/index.md
```

のコメントブロックへ `01` ～ `50` のリンクを追加した。

確認結果：

- 01～50がすべて存在
- 欠番なし
- 重複なし
- リンク先欠落なし

## 一覧用Structure Note

グラフアンカーを管理・確認しやすくするため、別途一覧用Structure Noteも作成した。

```text
content/home-graph-anchors.md
```

名称：

```text
HOMEグラフアンカー
```

設定：

```text
type: structure
draft: false
```

このノートには50件すべてのアンカーノートへのリンクを一覧化している。

アンカーノート本体は `draft: true` だが、管理入口となるStructure Note自体は `draft: false` とし公開対象としている。

これにより、

```text
HOMEグラフアンカー
        │
        ├─ graph-anchor-home-01
        ├─ graph-anchor-home-02
        ├─ graph-anchor-home-03
        │
        └─ ...
             graph-anchor-home-50
```

という管理構造になる。

## 全体構造

```text
HOME（index.md）
│
│  %% コメント内リンク %%
│
├─ graph-anchor-home-01
├─ graph-anchor-home-02
├─ graph-anchor-home-03
│
├─ ...
│
└─ graph-anchor-home-50

03_systems/
└─ obsidian-graph/
   └─ home-anchors/
      ├─ graph-anchor-home-01.md
      ├─ graph-anchor-home-02.md
      ├─ graph-anchor-home-03.md
      └─ ...
         graph-anchor-home-50.md

content/
└─ home-graph-anchors.md
   └─ 50件のアンカーへの管理用リンク
```

## なぜ `dummy` ではなく `graph-anchor` としたか

単なる `dummy-01` などでも技術的には成立するが、長期管理では用途が分かりにくい。

```text
dummy-01
```

では、

> 何のために存在するダミーなのか

がファイル名から判断できない。

対して、

```text
graph-anchor-home-01
```

なら、

- `graph`：グラフビュー用
- `anchor`：視覚的位置を補助するノード
- `home`：HOME専用
- `01`：連番

まで用途を名前だけで把握できる。

そのため、実態はダミーノートであっても、管理名称としては `graph-anchor` を採用した。

## この方式の位置付け

本来、Zettelkastenのリンクはノート間の意味的関係を表現するものなので、表示上の都合だけで大量のリンクを作ると、

> 知識構造としてのリンク  
> と  
> UI調整のためのリンク

が混在する。

今回はそれを承知した上で、

- HOMEをグラフ上のランドマークとして利用したい
- 通常コンテンツとはフォルダを分離できる
- 命名規則によって機械的に識別できる
- `draft: true` にできる
- 将来まとめて撤去できる

という条件から、意図的な例外として採用した。

重要なのは、これらを**通常のZKノートとして扱わないこと**。

```text
知識ノート
≠
Structure Note
≠
グラフ表示用アンカー
```

として役割を分離する。

## アンカー数について

今回は50件を初期値とした。

50という数そのものに意味があるわけではなく、HOMEを十分に視認できる大きさにするための試験値である。

今後の判断基準は、

```text
HOMEがまだ小さい
    ↓
アンカー追加を検討

HOMEが十分見つけやすい
    ↓
現状維持

HOMEだけ極端に巨大になりグラフを邪魔する
    ↓
アンカーを減らす
```

とする。

したがって、50件を恒久的な仕様として固定する必要はない。

## 今後の確認

Obsidianのグローバルグラフで次を確認する。

- HOMEのノードサイズが十分に大きくなったか
- グラフ全体を俯瞰した状態でもHOMEを発見できるか
- HOMEの位置を見失う問題が改善したか
- 50アンカーが過剰ではないか
- 他の主要Structure Noteとの視覚的バランスが崩れていないか

必要であればアンカー数を増減する。

## 運用上の注意

この仕組みを後から見た際に「なぜ意味のない50ノートが存在するのか」が分からなくならないよう、用途を明示して維持する。

特に、

- アンカーノートへ通常の知識を書かない
- 通常ノートの代用として使わない
- 命名規則を変更しない
- HOME以外へ流用する場合は目的別に別アンカー群を作る
- 不要になった場合はHOME側リンクとアンカーノートをセットで撤去する

ことを基本とする。

作成・変更履歴については `AI Work Log.md` に記録済み。

## 結論

HOMEがグラフビュー上で小さく見失いやすい問題に対し、`03_systems/obsidian-graph/home-anchors/` に50個の専用アンカーノートを設置し、HOMEからコメント内リンクを張ることで、本文表示を変えずにグラフ上の接続数を増やす仕組みを導入した。

これはZettelkasten本来の意味的リンクとは異なる**UI補助用の意図的な例外**である。

そのため、通常ノートとは明確に分離し、`graph-anchor-home-XX` という用途の分かる命名と専用フォルダによって管理する。

