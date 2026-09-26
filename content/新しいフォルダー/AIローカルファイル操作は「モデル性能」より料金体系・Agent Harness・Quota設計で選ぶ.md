---
title: AIローカルファイル操作は「モデル性能」より料金体系・Agent Harness・Quota設計で選ぶ
aliases:
  - AIローカルファイル操作は「モデル性能」より料金体系・Agent Harness・Quota設計で選ぶ
type:
created: 2026-09-21T20:55:22+09:00
updated: 2026-09-26T19:08:17+09:00
id: 20260921-205522
permalink:
draft: true
tags:
  - ai-generated
---
# AIローカルファイル操作は「モデル性能」より料金体系・Agent Harness・Quota設計で選ぶ

Perplexity Proを契約したことを起点に、AIサービスを「検索・チャット」ではなく、**PC上のローカルファイルやObsidian Vaultを直接扱う作業エージェントとして使う場合、どのサービスが実用的か**を比較した。

この検討で重要だったのは、単に「どのAIモデルが賢いか」ではなく、料金体系、実行基盤（Agent Harness）、利用枠、権限・データ経路を分離して考えることだった。

ローカルファイルを操作できるAIでも、**月額料金だけで使えるとは限らない**。また「ローカルファイルを扱える」ことと「データがPC外へ出ない」ことも別問題である。このノートの価格、利用枠、対応機能は検討時点の情報として扱い、導入判断の直前には公式情報を確認する。

---

## Perplexity Proは検索サービスとComputerを分けて考える

Perplexity Pro契約後、まず確認したのはプライバシーとパーソナライズ設定だった。

初期設定としては次の方針が妥当。

- AI Data Retention / AI Data UsageはOFF
- 回答言語は日本語
- 長い調査ではResponse Lengthを長めにする
- Headers and Listsを有効化
- Locationは必要なときだけ利用
- 個人プロフィールは必要最小限
- Custom Instructionsには個人情報より調査ルールを入れる
    - 一次情報優先
    - 日付を明記
    - 事実と推測を分離
    - Markdownで整理
    - 確認不能事項は確認不能と明示

Perplexityでは、単なるファイル添付とローカルファイル操作は別機能である。

```
Web / Ask
└─ ファイルをアップロード
   └─ コピーを解析

Desktop / Computer
└─ ローカルフォルダを許可
   ├─ 検索
   ├─ 読み取り
   ├─ 作成
   ├─ 編集
   └─ 整理
```

したがって本番のObsidian Vaultをいきなり渡すのではなく、まず専用テストフォルダで、

1. 読み取り
2. 新規作成
3. コピー編集
4. 移動・リネーム
5. 本番データ

の順に検証する方が安全である。

---

## Perplexity Pro最大の注意点はComputer Credits

今回の検討が他サービス比較へ発展した直接の理由がこれだった。

Perplexity Pro契約後のCredits画面で、

> Available usage-based credits: 0

と表示された。

調査した範囲では、Consumer向けPerplexity Proは、**Computer用の恒常的な月次Creditsを持たない料金体系**だった。

つまり、

```
Perplexity Pro
├─ Ask
├─ Search
├─ Research
├─ 高性能モデル
└─ Computer
   └─ 別途Creditsが必要
```

という構造になる。

「翌日になれば配布される」「翌月になれば回復する」という仕組みではない。

新規Pro向けに数千Creditsが付くキャンペーン情報も存在したが、これは恒常的なPro特典ではなく、**期間限定・一回限りのPromotional Credits**として扱うべきものだった。

SoftBank / Y!mobile経由のPerplexity Proでも、月次Computer Creditsが0なのは「SoftBank版だから機能制限されている」という意味ではない。Consumer Pro自体の料金体系としてComputerを別枠にしている。

そのため、Perplexityは次の役割に限定する方が合理的という判断になった。

> **Perplexity = Web検索・Research担当**

一方、

> **大量のローカルファイル編集 = 別サービス**

とする。

---

# AIエージェントは「定額内で動くか」が重要

PerplexityのComputer Credits問題から、Google AI Pro、ChatGPT Plus、Claude Proまで比較対象を広げた。

大きな違いは、**月額料金の中にローカルAgent利用枠が含まれているか**である。

|サービス|主なローカルAgent|月額内の基本Agent枠|
|---|---|---|
|ChatGPT Plus|Work / Codex|あり|
|Claude Pro|Claude Code / Cowork|あり|
|Google AI Pro|Antigravity|あり|
|Perplexity Pro|Computer|原則別途Credits|

同じ約20ドル帯のAIサービスでも、料金体系はかなり違う。

したがって、

> 月額料金が同程度  
> ＝ Agent利用量も同程度

とは考えない方がよい。

---

## ChatGPT Plus

ChatGPTではローカル作業を主に、

- Work
- Codex

で扱う。

強みは、検索・チャット・推論・ファイル操作・開発を一つのサービスでまとめられること。

一方で、Agent系の使用量は、

- 5時間単位の枠
- 週次枠
- 使用モデル
- Reasoning量
- Context量
- Tool実行量

などで変化する。

絶対的な「月○億Token」のような数値は公開されていないため、**処理可能量の予測性はそれほど高くない**。

ただし、軽量モデルと高性能モデルを分業させられる点は大きい。

```
大量の走査・候補抽出
→ 軽量モデル

統合・削除・意味判断
→ 高性能モデル
```

という構成にすれば、大規模Vault処理の効率を改善できる。

---

## Claude Pro

Claude Proでは、

- Claude Code
- Cowork

がローカル作業候補になる。

用途は分けて考えやすい。

```
非コード中心
Markdown整理
文書操作
↓
Cowork

大量ファイル
Shell
Git
スクリプト
↓
Claude Code
```

Claude CodeはAgent Harnessとして非常に強力であり、後述する中国モデルをバックエンドとして利用する構成にもつながる。

一方、Claude通常チャット、Claude Codeなどで利用枠が関係し合うため、**Pro契約だけで常時無制限にローカル処理できるわけではない**。

こちらも絶対Token量より、5時間枠・週次枠による管理が中心。

---

## Google AI Pro / Antigravity

Google AI ProではAntigravityがローカルAgentに相当する。

Perplexityとの大きな違いは、**Google AI Pro料金内にBaseline Quotaがあること**。

```
Google AI Pro
└─ Antigravity
   ├─ ファイル読取
   ├─ 編集
   ├─ Terminal
   └─ Baseline Quota
      └─ 月額料金内
```

ただし、Quotaは単純なプロンプト数ではなく、Agentが実際に行った作業量によって消費される。

そのため、

```
Markdown 1枚の編集
```

と、

```
Vault 2,000ノート走査
→ 重複判定
→ リンク解析
→ 100ファイル編集
```

では消費量が大きく異なる。

Googleは具体的なToken量をあまり公開していないため、**Quotaの透明性は低い**。

また、このスレッドで確認した時点では、日本では追加AI Credits購入に制約があり、枠を使い切った場合は回復待ちや上位プランへの移行が必要になる点も注意事項となった。

---

# 「AIモデル」と「Agent Harness」を分離して考える

中国AIまで比較を広げたことで、この考え方が重要になった。

Claude CodeやCodexは単なるモデルではなく、

- ファイル探索
- ファイル読取
- 編集
- Terminal
- Git
- diff
- Tool Calling
- Context管理

を行う**Agent Harness**である。

一方、推論自体は別のモデルが担当する。

このため、

```
Claude Code
↓
Claude
```

だけでなく、

```
Claude Code
↓
DeepSeek
```

や、

```
Claude Code
↓
GLM
```

という構成も比較対象になる。

つまり中国AIは、

> ChatGPTやClaudeの代替サービス

としてだけでなく、

> **既存Agent Harnessを動かす安価な推論エンジン**

としても見る必要がある。

---

# 中国AIではDeepSeek・MiniMax・GLMが特に重要

比較対象として、

- DeepSeek
- MiniMax
- GLM / Z.ai
- Kimi
- Qwen
- ByteDance Seed / TRAE

を調べた。

その中でも、大量ローカルファイル処理という用途では、

> **DeepSeek / MiniMax / GLM**

を重点候補とした。

---

## DeepSeekは「安価な従量制燃料」

DeepSeekは定額サブスクというより、API従量課金として評価した方が分かりやすい。

大きな特徴は、

- Fresh Input
- Cached Input
- Output

の単価がかなり低いこと。

Agent処理では同じContextを繰り返し参照するため、**Cache Hit率が高ければ非常に低コストで動かせる可能性がある**。

このため、月額サブスクではなく、

> 使った分だけ支払う

運用が、使用頻度の低い人には合理的になる可能性がある。

---

# AgentコストではCache Readが重要

大規模ファイル処理を考えると、単純なInput / Output Token価格だけ比較するのは不十分。

Agentは例えば、

```
ファイルを読む
↓
考える
↓
別ファイルを読む
↓
修正
↓
確認する
↓
以前のContextを再利用する
```

という処理を繰り返す。

その結果、

```
Output Tokens
```

より、

```
Cached Context Read
```

の方が桁違いに大きくなることがある。

したがって実効コストは、

```
モデル単価
×
Cache単価
×
Cache Hit率
×
Agent HarnessのContext管理能力
```

で決まる。

この点では、単純な「1M Input Tokenあたり何ドル」という比較は不十分である。

---

## MiniMaxは大量定額処理候補

MiniMaxは約20ドル前後のプランで、大きなToken枠を持つ点が特徴だった。

そのため、

> 定額料金で大量にAgentを回す

用途ではかなり魅力的。

一方、Agent処理ではCached Contextも大量消費する。

実際のユーザー公開例でも、

```
数百万Output
に対して
数億Cache Read
```

というケースがあった。

したがって、

> 1.7B Tokens  
> ＝ 1.7B Tokens分の実ファイルだけ読める

という意味ではない。

それでも、**大量定額処理という料金モデル自体はChatGPT / Claudeとは異なる魅力**がある。

---

## GLMはQuotaの透明性が強み

GLM / Z.aiはClaude CodeやOpenCode等と組み合わせて使用できる。

特徴は、Quota計算を比較的細かく公開している点。

```
Fresh Input
Cached Input
Output
```

それぞれに異なる係数があり、

> なぜ利用枠が減ったか

を比較的計算しやすい。

これは、

- OpenAI
- Anthropic
- Google

のように実効Quotaが見えにくいサービスとの大きな違い。

また、

```
大量走査
→ Flash系

重要判断
→ 上位GLM
```

というモデル分業も可能。

---

# Kimi・Qwen・TRAEも候補だが位置付けは異なる

## Kimi

Kimi CodeやKimi Workなどを備える。

低価格帯のMembershipがある一方、

- 通常Kimi
- Research
- Kimi Work
- Kimi Code

などでCredit poolを共有するため、利用量を評価しにくい。

さらに高性能モデルではQuota消費が大きいという利用者報告もあり、現段階ではDeepSeek / MiniMax / GLMより優先度を下げた。

---

## Qwen / Alibaba

Qwen Codeを含むAlibabaのCoding Planは、月額20ドル帯より上に位置する。

しかし、

- 大きな5時間Quota
- 大きな週次Quota
- 大きな月次Quota
- Qwenだけでなく複数の中国AIモデル

を利用できる点が特徴。

そのため、

> 多数の中国AIモデルを大量利用するヘビーユーザー向け

という位置付け。

---

## ByteDance Seed / TRAE

TRAEはAI Coding IDEから、Research・Writing・Data Analysis・Planningなどへ広がっている。

月額価格が比較的安く、

> 中国系Agent環境を低コストで試す入口

として興味深い。

ただし、実際の消費量は内部で利用するモデルのToken単価に左右されるため、単純な「月何回」という評価は難しい。

---

# 大規模Obsidian処理には共通ベンチマークが必要

各サービスのQuota体系が異なるため、単純な月額比較では実用性を判断できない。

そこで仮想タスクとして、

> **Obsidian Vault 1,000 Markdownを走査し、関連・重複・YAML・リンクを確認して100ファイル程度を整理・編集する**

という処理を想定した。

ただし元ノートのToken総量だけでは足りない。

Agentは同じファイルやContextを何度も参照するため、累積Token Activityは元データより遥かに大きくなる。

比較用モデルとして、

```
100M Agent Tokens

Fresh Input    5M
Cached Input  94M
Output         1M
```

という仮定を置いた。

これは実測値ではなく、サービス間の料金比較をするための計算モデル。

実際の1,000ノート処理は、

> 約50M～300M Agent Tokens

程度まで振れる可能性があると考えた。

---

# Token単価だけではAI作業コストを判断できない

最終的に比較すべきなのは次のような項目。

|指標|意味|
|---|---|
|正しい変更率|必要な編集を正確に行えるか|
|誤編集率|ノートを壊さないか|
|Context理解|ノート間の意味関係を理解できるか|
|Cache効率|同じ内容を何度も無駄に読まないか|
|Agent安定性|長時間処理で脱線しないか|
|diff / Git|人間が変更を確認しやすいか|
|Token / Credit単価|AIそのものの原価|
|Quota|月額料金でどれだけ使えるか|
|人間確認時間|AI処理後に何分レビューが必要か|

特に重要なのは、

> **AI料金が半額でも、人間のレビュー時間が2倍なら実質的には安くない**

という点。

Zettelkasten整理では、

- 似たノートの意味的差異
- Permanent化の妥当性
- 統合すべきかリンクだけ追加すべきか
- 人間の主張と資料由来情報の区別

などが必要になる。

単純なコード生成以上に、**意味理解の品質と人間レビュー量**が重要になる。

---

# 本番Vaultではなく100ノートで比較する

実サービス選定では、いきなり数千ノートのVaultを使わない。

代表的な100ノート程度をコピーし、同一条件で各AIを比較する。

測る項目は、

1. 処理時間
2. 読み込んだファイル数
3. 編集ファイル数
4. 正しい変更数
5. 誤編集数
6. 不要変更数
7. Fresh Input
8. Cached Input
9. Output
10. 5時間Quota消費率
11. 週間Quota消費率
12. Credits / 実費
13. 人間によるレビュー時間
14. 人間による修正時間

など。

最終的には、

```
AI料金
+
レビュー時間
+
誤編集修正時間
```

を含めた**実効コスト**で判断する。

---

# ローカルファイル操作とローカルAIは別

今回の議論で最後に重要になったのがプライバシー。

```
ローカルファイルを直接編集できる
```

ことと、

```
ファイル内容がローカルPCから出ない
```

ことは別である。

例えば、

```
Obsidian
↓
Claude Code
↓
Claude Cloud
```

なら、必要なノート内容はクラウド側へ送信される。

同様に、

- OpenAI
- Google
- DeepSeek
- MiniMax
- GLM
- Kimi

等のクラウドモデルを使う場合も、必要なContextは外部サーバーで処理される。

そのため本番Vault接続前には、

- AI学習利用
- データ保持期間
- APIデータの扱い
- オプトアウト
- ログ保存
- 保存地域
- 機密情報の扱い

を別途比較する必要がある。

---

# 現時点での役割分担

今回の比較から、サービスは一つに統一するより、役割を分ける方が合理的。

### Perplexity Pro

検索・Research担当。

Computerは常用しない。

### ChatGPT Plus

総合作業担当。

既に月額内にローカルAgent枠があり、検索・推論・ファイル操作をまとめやすい。

### Claude Pro

ローカルファイル・コード作業の有力候補。

特にClaude Code / Coworkの二系統が強い。

### Google AI Pro

Googleサービス全体とAntigravityを利用する場合の候補。

利用枠はあるがQuotaの絶対量が見えにくい。

### DeepSeek

低価格な従量APIとして大量処理候補。

### MiniMax

大きな定額Token枠による大量処理候補。

### GLM

低価格に加えてQuota計算の透明性が高い候補。

---

# 判断

このスレッドで固まった方針は以下。

- Perplexity Proは**Web検索・Research中心**に利用する。
- Perplexity Computerは月額Proに恒常的な月次Creditsがないため、大量ローカル作業には使わない。
- PerplexityのCredits自動補充は当面OFF。
- SoftBank / Y!mobile経由だからComputer Creditsが0なのではなく、Consumer Pro自体の料金設計による。
- ChatGPT Plus、Claude Pro、Google AI Proは、Perplexityと異なり月額料金内に基本Agent枠を持つ。
- 中国AIではDeepSeek、MiniMax、GLMを重点比較対象とする。
- 「AIモデル」と「Agent Harness」を別々に評価する。
- Token単価だけでなく、人間の確認時間を含めた実効コストで比較する。
- 本番Obsidian Vaultには直接接続せず、まず100ノート程度のコピーで比較する。

---

## 今後の検証

次に必要なのは、料金ではなく**実データでの品質比較**。

特に、

- ChatGPT Work / Codex
- Claude Code / Cowork
- Google Antigravity
- DeepSeek + Agent Harness
- MiniMax
- GLM

に同じ100ノートを渡し、

> **100ノートあたりの実効コスト**

と、

> **正しい編集1件あたりの実効コスト**

を測定する。

そのうえで、プライバシー条件も含めて、本番Vaultで使うAIを決定する。
