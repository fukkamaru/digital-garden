---
title: AIサブスク比較と複数AI運用の検討
aliases:
  - AIサブスク比較と複数AI運用の検討
type:
created: 2026-09-21T20:01:06+09:00
updated: 2026-09-26T19:08:17+09:00
id: 20260921-200106
permalink:
draft: true
tags:
  - ai-generated
---
# AIサブスク比較と複数AI運用の検討

ChatGPT Plusを起点として、Business Standard、Claude Pro、Google AI Pro、そのほかの月額20ドル前後のAIサービスを比較した検討記録である。主な論点は、料金差、Work／Codexなどの利用量、複数アカウント運用、AI組織化、3大AI契約後に第4のAIを追加する意味である。

料金、利用枠、搭載機能、キャンペーンは変わり得るため、このノートは検討時点の比較と判断理由を残す。実際に契約を判断する際は、その時点で公式の契約画面と利用条件を確認する。

## ChatGPT PlusとBusiness Standard

最初の疑問は、ChatGPT Plusが通常月額20ドル、Business Standardが年払いなら1席あたり月額20ドル相当なので、両者の価格が実質同じなのではないかという点だった。

ただしBusiness Standardは**最低2席必要**なので、実際の最低料金は以下になる。

|プラン|単価|最低契約|実質最低額|
|---|---|---|---|
|ChatGPT Plus|$20/月|1アカウント|$20/月|
|Business Standard・月払い|$25/席|2席|$50/月|
|Business Standard・年払い|$20/席相当|2席|$40/月相当|

年間では、

- Plus ×1：$240
- Plus ×2：$480
- Business Standard ×2席・年払い：$480

となる。

したがって、Business Standardは「Plusと同じ$20で使える上位プラン」ではない。**1人で1アカウントだけ使うならPlusの方が半額**である。

一方、最初から2アカウントまたは2ユーザー分を使うなら、Plus×2とBusiness Standard×2席の年間費用が同じになるため、比較する意味が出てくる。

## Work / Codexの利用量

Business Standardへ変更すればWorkやCodexをPlusより大幅に使えるのではないかと考えたが、確認した範囲では、**PlusとBusiness StandardのStandard席はWork / Codexの標準利用枠がほぼ同等**だった。

概念的には、

```
ChatGPT Plus
└─ Work / Codex
   └─ Standard利用枠
```

と、

```
Business Standard
└─ Standard Seat
   └─ Work / Codex
      └─ Standard利用枠
```

になる。

さらにWorkとCodexは、独立した無関係な利用枠ではなく、agentic usageの共通枠を消費する。

そのため、

> Work / Codexをもっと大量に使いたいからBusiness Standardへ移行する

という理由だけでは、移行メリットは小さい。

Business Standardの主な価値は、利用量ではなく以下のような組織向け機能にある。

- Business Workspace
- Workspace Agents
- Company Knowledge
- 統合管理
- SSO / MFAなどの管理・セキュリティ機能
- Businessデータをモデル学習に利用しない運用
- Workspace内での知識・Agent・GPT等の共有
- Plusより上位の推論モードや一部Pro系モデルへのアクセス

## 1人で2アカウント運用する場合

ChatGPTには複数アカウントを切り替える仕組みがあり、

```
Account A
→ 仕事

Account B
→ 個人・研究
```

のような用途分離自体は可能。

その場合、

```
Plus A   $20
Plus B   $20
-------------
合計      $40/月
```

となる。

Business Standardも、

```
Seat A   $20/月相当
Seat B   $20/月相当
-------------------
合計      $40/月相当
```

なので、年払いなら費用だけ見れば同じになる。

このため、

> 本当に2つのアカウント環境を必要としているなら、Plus×2よりBusiness Standard×2席の方が機能面では魅力的ではないか

という検討になった。

ただし注意点として、Businessの2席を**1人が2アカウントで占有することが明確に推奨された利用方法とは確認できなかった**。

特に、

```
AのWork / Codex上限到達
↓
Bへ切り替える
↓
さらに利用
```

というように、利用制限回避を主目的とする運用は避けるべき。

用途分離と、利用上限回避は別問題として扱う必要がある。

## Plus×2とBusiness Standard×2席

2アカウント前提なら年間費用は同じになる。

|項目|Plus ×2|Business Standard ×2席|
|---|---|---|
|年額|$480|$480|
|支払方法|月払い|年払いなら$480一括|
|Work / Codex|Standard ×2|Standard ×2席|
|Workspace|なし|あり|
|Company Knowledge|なし|あり|
|Workspace Agents|なし|あり|
|組織管理|なし|あり|
|Extra High等|なし|あり|
|データ管理|個人向け|Business向け|
|アカウント間の共有基盤|基本なし|Workspaceあり|

ただしBusinessが完全上位互換ではない。

この比較時点では、個人向けChatGPTの方が過去チャットを使ったMemoryの運用で有利な部分があり、Business Workspaceではデータエクスポート等にも制約があった。

また、Personal WorkspaceをBusinessへ統合した場合、簡単に元へ戻せないため、

> 既存のPersonal WorkspaceをいきなりBusinessへ統合するのは避ける

という判断になった。

## ChatGPT Proは比較対象から除外

ChatGPT Proは価格が高すぎるため、現状では検討しない。

以後の比較対象は主に、

- ChatGPT Plus
- ChatGPT Business Standard
- Claude Pro
- Google AI Pro
- その他月額20ドル前後のAIサービス

とする。

---

# 2つ目のAIとしてClaudeやGeminiを追加する案

ChatGPT Plusをもう1契約するよりも、同程度の費用で別会社のAIを追加した方が、単純な利用枠増加以上の価値が得られる。

考え方としては、

```
ChatGPT Plus ×2
→ 同系統の能力・利用枠を増やす

ChatGPT Plus + Claude / Gemini
→ 利用枠を増やしつつ、別系統のモデル・ツール環境も追加する
```

という違い。

## Claude Pro

Claude Proは月額20ドルだが、年払いがある。

|支払方法|料金|
|---|---|
|月払い|$20/月|
|年払い|$200/年|
|月換算|約$16.67|
|年間割引|約$40|

そのため、

```
ChatGPT Plus   $240/年
Claude Pro     $200/年
---------------------
合計           $440/年
```

となり、ChatGPT Plus×2の$480/年より安い。

Claude Proでは、Claude本体以外にも、

- Claude Code
- Cowork
- Research
- Projects
- Skills
- Plugins
- MCP / Connectors

などを利用できる。

ChatGPTとの役割分担は、

```
ChatGPT
├─ Chat
├─ Memory
├─ Work
├─ Codex
└─ Deep Research

Claude
├─ Claude
├─ Cowork
├─ Claude Code
├─ Research
├─ Projects
├─ Skills
└─ MCP
```

という形になる。

特に、

```
Work ↔ Cowork
Codex ↔ Claude Code
```

という2系統の作業環境・Coding環境を持てる点が大きい。

また、Claudeの対応する最新モデルでは最大1Mトークンのコンテキストが利用できるため、「長文ならGeminiしかない」という状況ではなくなっている。

## Google AI Pro

Google AI Proも月払いだけでなく年払いがある。

ChatGPT Plusとの大きな違いは、Gemini単体への課金ではなく、Googleサービス全体との統合が強いこと。

主な価値は、

- Gemini
- Deep Research
- Gmail
- Google Drive
- Docs / Sheets等
- NotebookLM
- Antigravity
- Google Oneストレージ
- その他Google AI機能

など。

そのため、

```
Claude Pro
→ AIそのもの・作業エージェントへの課金

Google AI Pro
→ Gemini + Googleエコシステム全体への課金
```

と考える方が分かりやすい。

Google Drive、Gmail、NotebookLMを重視する場合はGoogle AI Proの価値が高い。

## ChatGPT + ClaudeとChatGPT + Gemini

整理すると、

|観点|ChatGPT + Claude|ChatGPT + Gemini|
|---|---|---|
|別モデル系統|強い|強い|
|PC作業|Work + Cowork|Work + Google系Agent|
|Coding|Codex + Claude Code|Codex + Antigravity|
|Google連携|可能|非常に強い|
|長文処理|最大1M級|1M級|
|NotebookLM|なし|あり|
|MCP|強い|開発系中心|
|ChatGPTとの重複|比較的少ない|やや多い|
|年払い|あり|あり|

現時点では、ChatGPT Plusを主環境とした場合、**2つ目としてはClaude Pro年払いの方が役割の重複が少ない**という判断になった。

一方、Google Drive / Gmail / NotebookLM中心ならGeminiが有力。

---

# AIを複数人の従業員として使う仕組み

最近よく聞く、

> AIを複数人の従業員として働かせる

という話についても確認した。

これは単にチャットを複数作る話ではなく、

```
役割
+
専門知識
+
ツールアクセス
+
自律実行
+
他AIによる監査
```

を組み合わせたもの。

会社組織に対応させると以下になる。

|会社|AI|
|---|---|
|社員|Agent / Sub-agent|
|上司|Manager Agent|
|検査担当|Reviewer Agent|
|業務マニュアル|Skill|
|部署|Project / Workspace|
|システムアクセス|Connector / MCP|
|定例業務|Scheduled Task|

Claudeでこの話を聞くことが多いのは、

- Cowork
- Projects
- Skills
- Plugins
- Sub-agents
- MCP
- Scheduled Tasks

が揃っており、「AI社員」として理解しやすいから。

ChatGPTでも、

- Work
- Codex
- Workspace Agents
- Skills
- Apps / Connectors
- Scheduled Tasks

で似た構成が可能。

Geminiでも、

- Gems
- Skills
- Spark
- Antigravity
- Scheduled Tasks

などで類似構成を作れる。

したがって、AI組織はClaude専用の考え方ではない。

## 確認作業を減らすにはReviewerが重要

現在の問題は、

> AIに作業させることはできるが、その確認が面倒になってきた

という点。

この場合、単純にAI Workerを増やすと、

```
AIを5人動かす
↓
5人分を自分で確認
```

となり、逆に管理負荷が増える。

そのため、

#chatgpt-mermaid-_r_43i_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_43i_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_43i_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_43i_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_43i_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_43i_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_43i_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_43i_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_43i_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_43i_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_43i_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_43i_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_43i_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_43i_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_43i_ p{margin:0;}#chatgpt-mermaid-_r_43i_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_43i_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_43i_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_43i_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_43i_ .label text,#chatgpt-mermaid-_r_43i_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_43i_ .node rect,#chatgpt-mermaid-_r_43i_ .node circle,#chatgpt-mermaid-_r_43i_ .node ellipse,#chatgpt-mermaid-_r_43i_ .node polygon,#chatgpt-mermaid-_r_43i_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_43i_ .rough-node .label text,#chatgpt-mermaid-_r_43i_ .node .label text,#chatgpt-mermaid-_r_43i_ .image-shape .label,#chatgpt-mermaid-_r_43i_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_43i_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_43i_ .rough-node .label,#chatgpt-mermaid-_r_43i_ .node .label,#chatgpt-mermaid-_r_43i_ .image-shape .label,#chatgpt-mermaid-_r_43i_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_43i_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_43i_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_43i_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_43i_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_43i_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_43i_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_43i_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_43i_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_43i_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_43i_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_43i_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_43i_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_43i_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_43i_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_43i_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_43i_ .icon-shape,#chatgpt-mermaid-_r_43i_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_43i_ .icon-shape p,#chatgpt-mermaid-_r_43i_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_43i_ .icon-shape .label rect,#chatgpt-mermaid-_r_43i_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_43i_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_43i_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_43i_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_43i_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_43i_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_43i_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_43i_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_43i_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_43i_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_43i_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_43i_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_43i_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_43i_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_43i_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_43i_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_43i_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_43i_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_43i_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_43i_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_43i_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_43i_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_43i_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_43i_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_43i_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_43i_ .node rect,#chatgpt-mermaid-_r_43i_ .node circle,#chatgpt-mermaid-_r_43i_ .node ellipse,#chatgpt-mermaid-_r_43i_ .node polygon,#chatgpt-mermaid-_r_43i_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_43i_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_43i_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_43i_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_43i_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_43i_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}自分Manager AIWorker AWorker BWorker CReviewer AI問題あり?自動完了NoYes

74%

のように、

> 正常なものはAIが承認し、例外だけ人間が見る

という運用が重要。

例えば、

```
処理：27件
正常：23件
人間確認が必要：4件
```

という形にすれば、27件全部を確認する必要がなくなる。

これは**例外管理（management by exception）**の考え方。

ただしこのスレッドではAI組織自体はこれ以上深掘りしない方針とした。

---

# ChatGPT・Claude・Gemini以外の月額20ドル前後のAI

3大AI以外にも同価格帯のサービスは多数ある。

主な候補は以下。

|サービス|おおよその価格帯|主な特徴|
|---|---|---|
|Perplexity Pro|$20前後|検索・Research|
|Genspark Plus|$20〜25前後|複数モデル＋Agent＋成果物生成|
|Manus|$20前後〜|自律Agent|
|Poe|$20前後|多数モデル統合|
|Microsoft 365 Premium|$20前後|Copilot＋Office|
|Mistral Pro|約$15|独自モデル＋Work / Code|
|Cursor Pro|$20前後|Coding特化|
|Grok|$30前後|xAI＋X検索|

この中でも、

- Perplexity
- Genspark
- Manus
- Mistral

あたりが比較対象として特に重要。

---

# 「モデルを提供するサービス」と「独自モデルを持つサービス」

さらに、

> 裏側でGPT・Claude・Geminiを使うサービスと、Mistralのような第4の独立モデルを追加するのではどちらがよいか

を検討した。

ここでは、**モデルとサービスを分けて考える必要がある**。

例えばPoeやGensparkは、

```
GPT
Claude
Gemini
Grok
その他
```

を1契約で利用できる。

しかし、

> Poe上のClaude = Claude.ai

ではない。

Claude本家には、

- Cowork
- Claude Code
- Projects
- Skills
- Memory
- Connector

などの独自機能がある。

同様に、

> Perplexity上のGPT = ChatGPT Plus

でもない。

ChatGPT本家には、

- Work
- Codex
- Memory
- Tasks
- Apps

などがある。

したがって、

> **モデルにアクセスできることと、本家サービスを使えることは別**

という整理になる。

---

# 3大AIすべて契約済みの場合

仮に、

```
ChatGPT
Claude
Gemini
```

の3つすべてに契約済みなら、4つ目のAIを選ぶ基準は大きく変わる。

3大AIを持っていない場合：

> どのモデルが使えるか

が重要。

3大AIをすでに持っている場合：

> **現在持っていない能力が何個増えるか**

が重要。

このため、

> GPT / Claude / Gemini全部使えます

だけを強みにするサービスの追加価値は下がる。

## 限界追加価値

4つ目のサービスは、既存契約との**限界追加価値**で見る。

|サービス|独自モデル|独自ワークフロー|3大AIとの重複|4つ目としての意味|
|---|---|---|---|---|
|Mistral Pro|◎|◎|低〜中|高い|
|Perplexity Pro|△|◎ 検索|モデルは高|高い|
|Genspark|△|◎|高い|機能次第|
|Manus|△|◎ Agent|比較的低い|高い|
|Poe|△|△|非常に高い|低〜中|
|Cursor|△|◎ Coding|中|開発用途なら高い|

つまり、

> **他社モデルを再販していること自体にはあまりお金を払わず、独自モデルまたは独自ワークフローに払う**

という基準が合理的。

---

# 第4の独立モデルとしてのMistral Pro

Mistralは、

```
OpenAI
Anthropic
Google
```

とは別の独立したモデル開発会社。

そのため、3大AI契約済みなら、

```
GPT
Claude
Gemini
Mistral
```

という4系統に分散できる。

また、現在のMistralは単なるチャットLLMではなく、Vibe系の作業環境を持つ。

```
Mistral Vibe
├─ Work
├─ Code
├─ Deep Research
├─ Skills
├─ Projects
├─ Scheduled Tasks
├─ Connectors
├─ MCP
└─ Sub-agents
```

そのため、

> 第4のモデル

だけでなく、

> **第4のWork / Coding環境**

として追加できる。

価格も約$15前後で、3大AIより若干安い。

## ただし「4人目の意見」だけでは弱い

同じ質問を、

```
GPT
Claude
Gemini
Mistral
```

の4つに聞くためだけなら、追加価値はそこまで高くない。

3モデルから4モデルへ増えたことで、判断品質が劇的に上がるとは限らないため。

Mistralを追加する意味が高くなるのは、

- 独立モデル
- 独立利用枠
- Vibe Work
- Vibe Code
- MCP
- Connectors
- Scheduled Tasks

まで使う場合。

---

# Genspark・Perplexityなどの評価方法

3大AIを契約済みでも、これらのサービスが無意味になるわけではない。

ただし契約理由が変わる。

## Genspark

価値は、

> GPT / Claude / Geminiが使える

ことではなく、

```
Super Agent
Mixture-of-Agents
Slides
Sheets
Docs
Code
AI Drive
```

などの独自ワークフローにある。

つまり、

> 複数AIをGenspark独自の処理系で協働させる環境

を買う。

## Perplexity

価値は、

> ClaudeやGPTが使える

ことではなく、

```
Web検索
引用
情報源探索
Deep Research
```

という検索・調査環境にある。

考え方としては、

> AIモデルを買う

より、

> **AI検索エンジンを買う**

に近い。

## Manus

価値は自律Agent・並列タスク実行。

```
指示
↓
AIが作業
↓
成果物を受け取る
```

という使い方を重視する場合に意味がある。

## Cursor

Codingに特化して追加するなら有力。

ChatGPT / Claude / Geminiとは別に、

> AI Coding IDE・Agent環境

を追加する形になる。

---

# 現時点の整理

AI契約を増やす場合は、段階によって考え方を変える。

#chatgpt-mermaid-_r_418_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_418_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_418_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_418_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_418_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_418_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_418_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_418_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_418_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_418_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_418_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_418_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_418_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_418_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_418_ p{margin:0;}#chatgpt-mermaid-_r_418_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_418_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_418_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_418_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_418_ .label text,#chatgpt-mermaid-_r_418_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_418_ .node rect,#chatgpt-mermaid-_r_418_ .node circle,#chatgpt-mermaid-_r_418_ .node ellipse,#chatgpt-mermaid-_r_418_ .node polygon,#chatgpt-mermaid-_r_418_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_418_ .rough-node .label text,#chatgpt-mermaid-_r_418_ .node .label text,#chatgpt-mermaid-_r_418_ .image-shape .label,#chatgpt-mermaid-_r_418_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_418_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_418_ .rough-node .label,#chatgpt-mermaid-_r_418_ .node .label,#chatgpt-mermaid-_r_418_ .image-shape .label,#chatgpt-mermaid-_r_418_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_418_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_418_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_418_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_418_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_418_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_418_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_418_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_418_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_418_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_418_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_418_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_418_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_418_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_418_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_418_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_418_ .icon-shape,#chatgpt-mermaid-_r_418_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_418_ .icon-shape p,#chatgpt-mermaid-_r_418_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_418_ .icon-shape .label rect,#chatgpt-mermaid-_r_418_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_418_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_418_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_418_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_418_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_418_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_418_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_418_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_418_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_418_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_418_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_418_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_418_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_418_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_418_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_418_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_418_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_418_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_418_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_418_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_418_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_418_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_418_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_418_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_418_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_418_ .node rect,#chatgpt-mermaid-_r_418_ .node circle,#chatgpt-mermaid-_r_418_ .node ellipse,#chatgpt-mermaid-_r_418_ .node polygon,#chatgpt-mermaid-_r_418_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_418_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_418_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_418_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_418_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_418_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}ChatGPT Plus2つ目を追加Claude ProGoogle AI Pro3大AIすべて契約4つ目で何を増やす?Mistral ProPerplexity ProGensparkManusCursor別作業環境Google環境独立モデル + Work/Code検索・出典確認複数AI統合作業自律AgentCoding特化

86%

判断基準は、

```
1個目
→ 総合性能

2個目
→ 主AIと重複しない能力

3個目
→ エコシステムの補完

4個目以降
→ 限界追加価値
```

と変わっていく。

---

# 決定・判断

- ChatGPT Proは高すぎるため現状の比較対象から除外。
- ChatGPT Business Standardは、Work / Codex利用量増加目的では優先しない。
- 2アカウント必要ならPlus×2とBusiness Standard×2席は費用面では同程度。
- ただしBusiness 2席を1人で使う運用には規約面の不確実性が残る。
- ChatGPT Plusに2つ目を足すなら、現状ではClaude Pro年払いが有力。
- Googleサービス利用量が大きい場合はGoogle AI Proも有力。
- AI組織ではWorkerを増やすよりReviewer / Managerによる例外管理が重要。
- 3大AI契約済みなら、単純なマルチLLMサービスの優先度は下がる。
- 4つ目以降は「独自モデル」または「独自ワークフロー」のどちらかを持つサービスを優先する。
- Mistral Proは第4の独立モデル＋Work / Code環境として有力。
- Perplexityは検索環境、Gensparkは統合作業環境、Manusは自律Agentとして評価する。

## 保留事項

- 実際にChatGPT / Claude / Geminiの3契約まで増やすか。
- Business Standardを本当に利用する必要があるか。
- 1人でBusinessの2席を使う運用を契約判断に含める場合、最新規約を再確認する必要がある。
- 第4サービスまで追加する場合、Mistral / Perplexity / Genspark / Manusのどれを優先するか。
- AIサブスク全体に年間いくらまで許容するか。

## 次に比較するなら

4つ目を選ぶ段階では、単なる機能一覧ではなく、

```
年間料金
+
実際の利用制限
+
既存3サービスとの重複率
+
独自機能
+
日常的に使う頻度
```

で比較する。

特に候補は、

- Mistral Pro：第4の独立モデル＋Vibe Work / Code
- Perplexity Pro：Web検索・Research
- Genspark：複数AI統合・成果物生成
- Manus：自律Agent
- Cursor：Coding専用

として扱うのが分かりやすい。
