---
title: 複数AIでObsidianのZettelkasten整理を分担する運用
aliases:
  - 複数AIでObsidianのZettelkasten整理を分担する運用
type:
created: 2026-09-21T08:44:52+09:00
updated: 2026-09-21T08:44:52+09:00
id: 20260921-084452
permalink:
draft: true
tags:
  - ai-generated
---
# 複数AIでObsidianのZettelkasten整理を分担する運用

ChatGPT Workを使って、Obsidian上のZettelkastenノートを大量に修正・整理している。現在は、ノート群をまず仮クラスタへ分類し、その後クラスタ単位で内容を精査する。必要に応じてクラスタをさらに細分化し、既存ノートの修正・校正・統廃合・分割・新規ノート作成・リンク調整などを進めている。

この作業量が大きく、ChatGPT Plusで利用できるChatGPT Workの週間制限に、2日程度の集中的な作業で到達することがある。そのため、Perplexity ProやGoogle AI Proなど、他のAIサービスにも一部クラスタを担当させ、処理量を分散できないかを検討した。

## AIを工程ごとに切り替える方法は採用しない

当初は、

- ChatGPT：構造判断
- Gemini：大量ファイル処理
- Perplexity：調査・事実確認

のように、工程ごとにAIを使い分ける案も考えられた。

しかし、現在のZettelkasten整理ではこの方式は適さない。

1つのクラスタを整理している途中では、

- どのノートを統合するか
- 何をResearchとして残すか
- 何をPermanent化するか
- 新規ノートをどの粒度で作るか
- どのノート同士をリンクするか
- どの判断を一度保留したか

といった局所的な判断が連続して積み重なる。

途中でAIを切り替えると、新しいAIへその判断過程や作業状態を再説明する必要が生じる。AI利用によって削減したいはずの人間側の操作・説明コストが逆に増えてしまう。

したがって、現時点では**工程ではなくクラスタをAIへの割当単位とする**方針が適している。

```
flowchart TD
    V[Obsidian Vault] --> A[Cluster A]
    V --> B[Cluster B]
    V --> C[Cluster C]

    A --> CW[ChatGPT Work]
    B --> P[Perplexity]
    C --> G[Google系Agent]

    CW --> A2[Cluster A 完了]
    P --> B2[Cluster B 完了]
    G --> C2[Cluster C 完了]
```

1つのクラスタについては、原則として最初から最後まで同じAIに担当させる。

これならAIの切替は、

> Cluster A終了 → Cluster Bは別AI

という自然な作業境界でのみ発生する。

また、AIごとに別クラスタを担当させることで、文章品質だけでなく、

- クラスタ分割
- 統廃合判断
- Permanent化判断
- 新規カードの粒度
- 情報の欠落
- ルール遵守
- 人間による最終修正量

などを比較しやすくなる。

## AIごとの差は「文章」より「知識構造」に出やすい

複数AIを使う場合、YAML、Markdown、リンク形式などの機械的なルールは、共通ルールを与えれば比較的揃えやすい。

一方で差が大きく出やすいのは、

- どこでノートを分割するか
- どこまで統合するか
- Permanent Noteとして何を独立させるか
- どの主張を中心と考えるか
- どのノート同士に関係があると判断するか

といった**Zettelkastenの知識構造そのもの**である。

そのため、統一すべきなのはAIの文章表現ではなく、Zettelkastenの運用ルールである。

共通化が必要なのは例えば、

- `type`の定義
- Permanent / Literature / Researchの判断基準
- YAML仕様
- aliasesの扱い
- tagsの扱い
- ファイル名ルール
- Markdownリンク形式
- 統合・削除時のルール
- AIが変更してよい範囲
- `ai-generated`の付与基準

などである。

一方で、

- 表現
- 見出し
- 説明順序
- 関係性の発見方法

にはある程度AIごとの差があってもよい。

## 複数AIを本格連携させるにはオーケストレーションが必要

理想的には、Claude Codeの複数エージェントのように、

- AIが自分に仕事があるか確認する
- タスクを取得する
- 他Agentと競合せず作業する
- 終了後に次のAgentへ渡す
- 必要に応じて人間レビューを要求する

という環境を作れると、工程別のAI分業も実現しやすい。

しかし、単に引き継ぎファイルを用意するだけでは不十分である。

必要なのは少なくとも、

- タスク発見
- 起動条件
- スケジューリング
- タスク状態管理
- 排他制御
- ファイルロック
- Lease
- Heartbeat
- Retry
- Timeout
- Dependency管理
- 実行履歴
- Human Approval
- 障害時の再割当

などである。

特に問題になるのが、

> AIはいつ「自分に仕事があるか」を確認するのか

という点と、

> 複数AIが同じファイルへ同時アクセスした場合どうするか

という同期問題である。

つまり複数AIを自動連携させるには、AI同士の通信より先に、**ジョブスケジューラと分散タスク管理システムに相当する仕組み**が必要になる。

現在クラスタを人間がAIへ割り振っている状態では、人間自身が、

- Scheduler
- Task Queue管理者
- Lock Manager
- Reviewer

を兼ねていると考えられる。

これは原始的ではあるが、現時点では安全で実用的である。

## 将来的な専用ダッシュボード構想

将来、本格的に複数AIを連携させるなら、人間と複数AIの双方がアクセスできる専用ダッシュボードを作る方法が考えられる。

構造としては、

```
flowchart TD
    H[Human]
    A1[ChatGPT Agent]
    A2[Google Agent]
    A3[Perplexity Agent]

    H --> API[Dashboard / Orchestrator API]
    A1 --> API
    A2 --> API
    A3 --> API

    API --> DB[(SQLite)]
    API --> V[Obsidian Vault]
```

のようになる。

SQLiteには、

- Tasks
- Agents
- Task Dependencies
- Task Claims
- Execution Logs
- Approvals
- File Locks
- Events

などを保持する。

Obsidian Vaultそのものをタスク状態の正とせず、

- **SQLite = Control Plane / 現在状態**
- **Obsidian Vault = 成果物**

と分ける。

SQLiteはコア部分がパブリックドメインであり、商用・非商用を問わず利用しやすい。個人用のローカルAIオーケストレーター程度の規模なら、PostgreSQLなどを用意するより軽量で扱いやすい。

AIからSQLiteを直接操作させるのではなく、

```
GET /tasks/next
POST /tasks/{id}/claim
POST /tasks/{id}/heartbeat
POST /tasks/{id}/complete
POST /tasks/{id}/fail
```

のようなAPIを通す方が安全である。

ただし、この仕組み自体を先に作ると、自動化環境の開発・保守が本来のZettelkasten整理より大きな作業になる危険がある。

したがって現時点では開発せず、複数AIをクラスタ単位で使いながら、実際に必要になった機能を観察する方がよい。

## Perplexity ProとGoogle系Agentの比較

当初は、ChatGPT Workの補助として、

- Perplexity Pro
- Google AI Pro + Gemini CLI

を比較した。

Gemini CLIについては、ローカルMarkdownを大量に扱う能力が高く、

- ディレクトリ探索
- 複数ファイル読込
- grep
- 差分編集
- 一括変更

など、Obsidian Vault整理との相性は良いと考えられた。

ただし、従来のGemini CLIは2026年6月18日をもって、Google AI Pro / Ultraおよび無料の個人ユーザー向け利用が終了している。

そのため現在は、**Gemini CLIそのものではなく、後継のGoogle Antigravity 2.0 / Antigravity CLIを比較対象にする必要がある。**

## Google Antigravity 2.0

Antigravity 2.0は、単なるCLIではなく、ローカルファイルを扱えるデスクトップ型Agent環境として提供されている。

今回の用途で重要なのは、

- Windowsで利用可能
- ローカルProjectを指定可能
- ローカルファイルのread/write
- GUIからAgentへ指示可能
- Workspace Rules
- Plan
- Goal
- Subagents
- Git / worktree
- 複数モデル
- 有料プランではマルチAgent機能

などを持つ点である。

つまり、

```
Antigravity Project
└─ Obsidian Vault
    ├─ 31_Research
    └─ 32_Zk
```

のようにVaultをProjectとして登録し、Zettelkasten整理をAgentへ任せることができる。

Workspace RulesにAI Start HereやZK Operationsに相当するルールを組み込めば、ChatGPT Workに比較的近い使い方も可能と考えられる。

またAntigravityには無料のIndividualプランが存在するため、Google AI Proを契約する前にローカルVault作業との相性を確認できる。

### マルチエージェント機能

AntigravityにはSubagentに加え、有料側では複数AgentによるTeamwork系機能も存在する。

ここでは、

- Orchestrator
- Worker
- Reviewer
- Critic
- Auditor

などに処理を分割でき、同じファイルを複数Workerが同時編集しないためのファイル所有管理も用意されている。

これは将来的に検討していた、

> タスク割当  
> 状態管理  
> 同期  
> 排他制御  
> 引き継ぎ

の一部をGoogle側のAgent基盤が担当してくれる可能性を意味する。

ただし、これはAntigravity内部のAgent間の仕組みであり、

- ChatGPT Work
- Perplexity
- Antigravity

という異なるサービス間を直接オーケストレーションするものではない。

## Perplexity Pro

PerplexityはWindowsデスクトップから、許可したローカルフォルダを扱える。

今回の用途では、

- ローカルフォルダを読む
- ファイルを作成・変更する
- GUI中心で操作できる
- ChatGPT Workからの移行時に操作体系が大きく変わりにくい

という点が利点になる。

また、複数モデルを選択できるため、同じPerplexity環境でもClaude系などを使える場合がある。

Perplexityを先に試す案が出た理由は、

> Perplexityの方がGemini系よりZettelkasten整理能力が高い

という評価ではない。

主な理由は、

- Y!mobile特典で6か月無料にできる
- GUIで始めやすい
- ChatGPT Workに比較的近い操作感

という**試しやすさ**にある。

## 「ChatGPT 5回、Perplexity 7回、Gemini CLI 20回」という例について

途中で、

```
ChatGPT Work：人間の介入5回
Perplexity：7回
Gemini CLI：20回
```

という例を示したが、これは実測値でも平均値でもなく、単なる説明用の模式例だった。

Gemini CLIが実際にPerplexityより3倍程度多く人間の介入を必要とするという根拠はない。

むしろ、

- 初期設定
- CLI操作の学習

についてはGemini系の負担が大きくなる可能性がある一方、

一度環境を整えた後の、

- 大量ファイル横断処理
- 一括編集
- 差分確認
- 長時間の自律作業

では、Gemini CLIや後継のAntigravityが強い可能性もある。

比較する場合は「介入回数」だけではなく、

- 1クラスタ完了までに人間が操作した時間
- 修正指示回数
- 誤編集数
- 情報の見落とし
- 最終的な手直し時間

を記録した方がよい。

## 現時点での試験方針

2026年9月時点では、PerplexityとGoogle側のどちらも大きな費用をかけず試せる。

そのため、

1. **Antigravity Individual無料版を試す**
2. 実際の小〜中規模クラスタを1つ丸ごと担当させる
3. **Y!mobile特典でPerplexity Proを導入**
4. 別の同程度クラスタを丸ごと担当させる
5. ChatGPT Workを含めて成果を比較する
6. Antigravityが有力で無料枠が不足する場合のみGoogle AI Proを検討する

という順序が合理的である。

比較時には、異なるAIへ同一クラスタを重複処理させる必要は必ずしもない。近い規模・性質のクラスタを割り当て、実際の運用上の負担を見る方が現在の目的には合う。

比較項目は以下を重視する。

|評価項目|見る内容|
|---|---|
|ルール遵守|ZK Operations等を最後まで守るか|
|クラスタ理解|ノート群の関係を正しく把握するか|
|統廃合|過剰統合・過剰分割がないか|
|Permanent判断|独立させる主張の粒度|
|情報保持|統合時に情報を落とさないか|
|新規ノート|不要なカードを量産しないか|
|ファイル安全性|リンク・YAML・既存構造を壊さないか|
|自律性|不要な確認を頻発しないか|
|人間負荷|操作・説明・修正にかかる時間|
|最終品質|そのままZKへ残せる品質か|

## 現時点の結論

現在のZettelkasten大量整理では、**1クラスタを1つのAIに最初から最後まで担当させる方式が最も現実的**である。

工程ごとに複数AIを切り替える方法は、理論上は各AIの得意分野を生かしやすいが、人間が毎回コンテキスト・タスク・状態を引き継ぐ必要があり、現在の環境では操作コストが大きすぎる。

将来的には、

> Dashboard + Task Queue + SQLite + API + Lock / Lease + Human Approval

のような共通オーケストレーション基盤を用意することで、異なるAI同士をより自律的に連携できる可能性がある。

ただし今はその基盤を作る段階ではなく、

> **ChatGPT Work、Perplexity、Antigravityへクラスタ単位で仕事を割り振り、それぞれの実際の品質と人間負荷を観察する**

ことを優先する。

この運用自体が、将来マルチエージェント環境を構築するときに、

- どのAIを何のAgentにするか
- どの作業で競合が起きるか
- どの部分を自動化すべきか
- どこにHuman Reviewが必要か

を判断するための実地データにもなる。

## 決定事項

- AIの切替単位は**工程ではなくクラスタ**とする。
- 1つのクラスタは原則として1つのAIが完了まで担当する。
- AIごとの差は文章よりも、統廃合・Permanent化などの**知識構造判断**を重視して評価する。
- 複数AIで共通化するのは文体ではなく、Zettelkasten運用ルールと変更権限。
- 現時点では異種AI間の自動オーケストレーション環境は作らない。
- Gemini CLIではなく、現在は**Antigravity 2.0をGoogle側の比較対象**とする。
- Google AI Pro契約前にAntigravity無料版を試す。
- Perplexity ProはY!mobile特典を利用できるなら無料期間中に試す。
- ChatGPT Work / Perplexity / Antigravityを、実際のクラスタ処理で比較する。

## 今後確認したいこと

- Antigravityで現在のAI Start Here / ZK Operationsをどこまでそのまま再利用できるか。
- Antigravityの無料枠でクラスタ整理をどの程度処理できるか。
- Perplexity Desktopが複数ノート横断の統廃合でどこまで安定するか。
- ChatGPT Workとの差が、最終成果物よりも人間の介入量にどの程度現れるか。
- AntigravityのSubagent / TeamworkがZettelkasten整理にも実用的か。
- 将来異種AI間オーケストレーションが必要になった場合、SQLiteベースのTask Queueを作る価値があるか。