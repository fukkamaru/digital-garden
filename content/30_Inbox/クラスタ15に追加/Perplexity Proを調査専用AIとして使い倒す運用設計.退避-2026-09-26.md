---
title: Perplexity Proを調査専用AIとして使い倒す運用設計
aliases:
  - Perplexity Proを調査専用AIとして使い倒す運用設計
type:
created: 2026-09-21T08:36:38+09:00
updated: 2026-09-21T08:36:38+09:00
id: 20260921-083638
permalink:
draft: true
tags:
  - ai-generated
---
# Perplexity Proを調査専用AIとして使い倒す運用設計

Y!mobile等のキャンペーンでPerplexity Proを6か月無料利用できる一方、Computerなどローカルファイル操作に使うクレジットは付与されないことが分かった。

この条件では、PerplexityをChatGPT Workの代替として使うよりも、**外部情報の収集・比較・検証に特化した調査AIとして位置づける方が合理的**である。

役割分担は次のようになる。

|役割|担当|
|---|---|
|Web検索・最新情報収集|Perplexity|
|複数ソース比較|Perplexity|
|市場統計・専門情報の探索|Perplexity Premium Sources|
|本格的な調査|Perplexity Research|
|Researchの論点整理・プロンプト設計|ChatGPT|
|ローカルファイル操作|ChatGPT Work|
|Obsidian既存ノートとの照合|ChatGPT Work|
|Research結果の整理・統合|ChatGPT|
|最終的な採用・Permanent化判断|人間|

要するに、

> Perplexityは「外部世界を調べるAI」、ChatGPTは「自分の知識環境を扱うAI」

として分業する。

---

## Perplexityの検索機能は3段階で考える

Perplexityには、単純な検索から本格調査まで複数段階がある。

|モード|深さ|主な用途|
|---|---|---|
|Quick Search|浅い|単純な事実確認|
|Pro Search|中〜深|比較、複雑な検索、最新情報確認|
|Research|非常に深い|包括的調査、レポート作成|

### Quick Search

単純な確認向け。

- 価格はいくらか
- その機能は存在するか
- 公式発表は出ているか
- 開催期間はいつまでか

といった質問ならこれで足りる。

### Pro Search

日常利用の中心にするべき機能。

単に検索結果を数件拾うのではなく、

- 複数の情報源
- 公式情報
- 比較情報
- 最近の変更
- ユーザー報告

などを横断して答えをまとめる。

普段ChatGPTにしている、

- 「2026年現在どうなっている？」
- 「AとBを比較して」
- 「実際のユーザーはどう使っている？」
- 「公式情報と利用者報告の両方を調べて」
- 「規約上これは可能？」

といった質問は、かなりPro Search向き。

### Research

Researchは、ChatGPTでいうDeep Researchに近い。

単発検索ではなく、

1. 調査方針を立てる
2. 検索する
3. 資料を読む
4. 不足論点を見つける
5. 再検索する
6. 複数の情報を照合する
7. 最終的にレポート化する

という反復型の調査を行う。

そのため、

> Research = 高性能な検索

というより、

> Research = AIによる小規模な調査プロジェクト

と考える方が適切。

---

## Researchするテーマを無理に考えない

Researchを「使い倒そう」とすると、

> 何をResearchしたらよいか思いつかない

という問題が起こる。

そこで、Researchを起点にしない。

日常的なPro Searchから、自然にResearch候補を発生させる。

```
flowchart LR
    A[疑問が発生] --> B[Pro Search]
    B --> C{簡単に解決したか}
    C -->|はい| D[終了]
    C -->|いいえ| E{論点が広がったか}
    E -->|いいえ| B
    E -->|はい| F[Research候補]
    F --> G[Research設計]
    G --> H[Research]
```

Researchへ昇格させる目安は次のような状態。

- 同じテーマを何度も検索している
- 比較対象が多い
- 情報源によって結論が食い違う
- 公式情報とユーザー報告が矛盾する
- 数年単位の変化を見る必要がある
- 賛成・反対の両論を調べる必要がある
- 高額な購入や契約判断に関わる
- 技術選定や業務判断に使う
- 後からObsidianへ長期保存したい

簡易ルールとして、

> 同じテーマを3回前後Pro SearchしたらResearch候補

としてもよい。

---

## 単発質問をResearchテーマに変える

Research向きの問いは、単発の疑問を一段抽象化すると作りやすい。

|単発質問|Research化|
|---|---|
|Perplexityはローカルファイル操作できる？|主要AIサービスのローカルファイル操作・エージェント機能・料金体系比較|
|Gemini AI Proはどう？|個人向け有料AIサービスの実用コスト・機能比較|
|AMDとIntelはどちらがよい？|2026年時点の長期運用PCプラットフォーム比較|
|ObsidianをAIで整理したい|AI × PKM / Zettelkastenの実践事例調査|
|Perplexityを皆どう使っている？|Perplexity Proの実践活用事例と他AIとの役割分担|
|AI時代にブログはどうなる？|生成AI時代の個人サイト・ブログ・デジタルガーデンの価値変化|

要するに、

> 質問を「答え」ではなく「論点」に変える

とResearch向きになる。

---

## Research前にPro Searchで下調べする

重要なテーマでは、いきなりResearchを実行せず、

> Pro Search → Research

という2段階にするとよい。

Pro Searchでは、

- 主要論点
- 有力な一次情報
- 重要な引用元
- 情報の対立点
- 不足している情報
- Researchで確認すべき事項

を洗い出す。

そのうえでResearchに、

> 先ほど確認した資料を出発点にはするが、それを鵜呑みにせず、最新の一次情報で再検証し、反証も探す

と指示する。

重要なのは、Pro Searchの結果をResearchの「正解」として固定しないこと。

Pro Searchは、Researchの探索範囲を適切に設定するための前処理として使う。

この役割は、研究でいうScoping Reviewに近い。

```
flowchart LR
    A[テーマ] --> B[Pro Search]
    B --> C[論点整理]
    B --> D[一次情報発見]
    B --> E[対立点発見]
    C --> F[Research]
    D --> F
    E --> F
    F --> G[包括的レポート]
```

---

## Research用プロンプトはChatGPTに設計させる

Researchの質を高めるには、ある程度適切なプロンプトが必要になる。

最低限、次を決める。

1. 何を知りたいか
2. どの時点の情報を対象にするか
3. 何を比較するか
4. 最終的に何を判断したいか

必要ならさらに、

- 一次情報を優先する
- 日本と海外を分ける
- ユーザー事例を含める
- 賛否両方を調べる
- 古い情報を除外する
- Premium Sourcesを含める
- 反証を探す
- 不明点は不明と明記する

といった条件を追加する。

ただし、この設計を毎回自分で行う必要はない。

```
flowchart LR
    A[気になるテーマ] --> B[ChatGPT]
    B --> C[論点整理]
    C --> D[Research用プロンプト]
    D --> E[Perplexity Research]
    E --> F[Research結果]
    F --> G[ChatGPT]
    G --> H[Obsidianへ統合]
```

ChatGPTをResearchの「設計担当」として使い、Perplexityを「調査実行担当」にすると負担が減る。

---

## Premium Sourcesの価値

Perplexity Proでは、一般Web検索だけでなく、専門的・有料の情報源を利用できる。

代表例として確認したのは、

- Statista
- Wiley
- PitchBook Essentials
- CB Insights
- Midpage

など。

これにより、調査をユーザー投稿や一般Web記事だけで終わらせず、

- 一般Web
- 企業公式情報
- ユーザー体験
- 市場統計
- 企業データ
- 学術情報

を組み合わせられる。

特に重要なのは、

> ユーザー体験と、客観的な統計・企業データ・学術情報を同じResearchに載せられる

こと。

例えばAIサービスを調べる場合でも、

- Reddit等の利用者：「制限が厳しい」
- 公式：「仕様上はこうなっている」
- 統計：「市場ではこの程度利用されている」
- 企業情報：「投資・事業規模はこうなっている」
- 学術・技術資料：「技術的な特徴はこうである」

という多層的な調査が可能になる。

---

## Premium Sourcesはすべて別契約不要ではない

Premium Sourcesには大きく2種類ある。

### Perplexity側で利用権が含まれているもの

Perplexity Proの範囲内で利用でき、元サービスへの別契約や別アカウントが不要なものがある。

例：

- Statista
- Wiley
- PitchBook Essentials
- CB Insights

ただし、

> Perplexityで利用できる = 元サービスを完全契約したのと同じ

ではない。

利用できるデータ範囲や機能は限定される。

### 自分で契約が必要なConnector

FactSetなど、一部の外部サービスは、

- 元サービス契約
- アカウント
- 必要な権限

が別途必要。

したがって、Premium Sourcesを「すべての有料データベースを無料で使える機能」と考えてはいけない。

---

## Premium Sourcesで得た情報は自由転載できない

Premium Sourcesで情報を閲覧できても、

> その情報の著作権や再配布権まで取得できるわけではない。

例えばStatistaの情報を取得できても、

- グラフをそのまま公開
- 表を丸ごと転載
- 大量データをコピー
- CSV化して再配布
- 独自データベースとして再公開

などは別の権利問題になる。

基本運用は、

1. Premium Sourceで調べる
2. 内容を理解する
3. 必要な数値や事実を限定的に使う
4. 出典を明記する
5. 自分の分析・文章へ再構成する

とする。

```
flowchart LR
    A[Premium Source] --> B[Perplexity]
    B --> C[数値・事実を確認]
    C --> D[自分で理解]
    D --> E[自分の文章へ再構成]
    E --> F[出典を明示]
```

公開用のQuartz / ZKでは、Researchレポートをそのまま掲載するのではなく、

> Research資料として保持 → 必要な事実を検証 → 自分の主張・分析へ変換

という流れが適している。

---

## 日本固有のPremium Sourcesは現状弱い

確認した範囲では、

- 日本経済新聞
- 日経BP
- 帝国データバンク
- 東京商工リサーチ
- 矢野経済研究所
- 富士経済
- 日経NEEDS

など、日本固有の主要有料情報サービスはPremium Sourcesの中心にはなっていない。

したがって、

> 日本の有料サイトをPerplexity経由で無料閲覧する

というサービスではない。

一方で、海外のPremium Sourcesには日本関連データも含まれている。

|日本について調べたい内容|向いているSource|
|---|---|
|市場規模|Statista|
|消費者動向|Statista|
|日本企業・スタートアップ|PitchBook|
|AI・新興市場|CB Insights|
|学術的根拠|Wiley|
|日本法・行政制度|政府・行政等の一次Web情報|

つまり、

> 海外の専門データベースを使って日本について調べる

という使い方になる。

---

## 各機能の使用枠は別系統

Pro Search、Research、Premium Sources、Computerは単純な共通回数制ではない。

概念的には、

|機能|主な制限体系|
|---|---|
|Pro Search|週単位|
|Research|月単位|
|Premium Sources|日単位|
|Computer|Credit制|

したがって、

> Researchを使うとPremium Sourcesの残り回数も同時に減る

という単純な構造ではない。

一方で、具体的な回数は変更されることがあり、固定値として扱わない方がよい。

Researchについては月20回前後というユーザー報告を目安として確認したが、保証された固定値ではない。

また、Researchを20回使えるとしても、

> 20本のResearchレポートを読む時間の方がボトルネックになる

可能性が高い。

そのため、利用回数の完全消化を目標にするより、

> 月5〜10本程度の価値の高いResearchを残す

方が実用的。

---

## Research Backlogを持つ

Researchテーマを毎回思いつく必要をなくすため、簡単なBacklogを持つ。

例：

```
# Research Backlog

- [ ] AIサービス × ローカルファイル操作比較
- [ ] AI × Zettelkasten実践事例
- [ ] AMD AM5長期運用調査
- [ ] AI時代のデジタルガーデン
- [ ] Perplexity Pro活用事例
```

普段の検索や会話で、

> これは一度きちんと調べたい

となったテーマだけ追加する。

Researchを使うときは、このBacklogから選択する。

---

## 6か月無料期間の標準運用

全体を簡略化すると次の流れになる。

```
flowchart TD
    A[日常の疑問] --> B[Quick Search / Pro Search]
    B --> C{重要テーマに育ったか}
    C -->|いいえ| D[終了]
    C -->|はい| E[Research Backlog]
    E --> F[Pro SearchでScoping]
    F --> G[ChatGPTでResearch設計]
    G --> H[Premium Sources込みResearch]
    H --> I[ChatGPTで整理・照合]
    I --> J[Obsidianへ統合]
```

運用ルールとしては、

1. 普段のWeb検索を可能な範囲でPerplexityへ寄せる。
2. 単純確認はQuick Search。
3. 比較・最新情報・複数情報源確認はPro Search。
4. 同じテーマを何度も調べ始めたらResearch候補へ。
5. 重要Researchでは先にPro Searchで論点整理する。
6. ResearchプロンプトはChatGPTに設計させる。
7. Premium Sourcesを意識的に組み込む。
8. 一般Web・公式・統計・学術・ユーザー体験を分けて見る。
9. Research結果をそのまま公開せず、自分の分析へ再構成する。
10. Research回数を無理に使い切ることを目的にしない。

---

## 最終的な位置づけ

Perplexity Proの6か月無料期間は、

> 質問回数を大量消費して元を取る期間

ではない。

むしろ、

> **自分専用のWeb調査パイプラインを構築し、本当に継続課金する価値があるか検証する期間**

として使う。

最終的な理想形は、

```
疑問
↓
Pro Search
↓
Research候補
↓
ChatGPTで調査設計
↓
Premium Sources込みResearch
↓
ChatGPTで再整理
↓
Obsidianへ知識化
```

である。

この形なら、Perplexityを単なる検索サービスではなく、**外部情報を構造的に取り込むための前段調査システム**として活用できる。