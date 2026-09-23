---
title: Google Antigravity無料版はローカルファイル操作にどこまで使えるか
aliases:
  - Google Antigravity無料版はローカルファイル操作にどこまで使えるか
type:
created: 2026-09-21T20:15:19+09:00
updated: 2026-09-21T20:15:19+09:00
id: 20260921-201519
permalink:
draft: true
tags:
  - ai-generated
---
# Google Antigravity無料版はローカルファイル操作にどこまで使えるか

Google Antigravityの個人向け無料プランについて、**ローカルファイルをどの程度直接操作できるのか、また無料枠で実際にどの程度の作業量をこなせるのか**を調べた。

当初は「無料版ではローカルファイル操作そのものに強い制限があるのではないか」という疑問から始まったが、調査すると制約の中心はそこではなかった。

> Antigravity無料版は、ローカルファイルの読み書き・作成・検索などの機能自体はかなり広く利用できる。  
> 実用上のボトルネックは「何ファイル触れるか」ではなく、Agentにどれだけ探索・推論・処理をさせるかによって消費される週次クォータである。

つまり、無料版を「機能制限版」と考えるより、**処理量制限版**と考える方が実態に近い。

---

## 無料版でも可能なローカル操作

ローカルフォルダをProject / Workspaceとして扱うことで、少なくとも次のような処理が可能と確認した。

|操作|無料版|
|---|---|
|ローカルファイルの読み取り|可能|
|ファイル内容の検索|可能|
|フォルダを横断した探索|可能|
|ファイルの編集|可能|
|新規ファイル作成|可能|
|複数ファイルの編集|可能|
|Terminal利用|可能|
|Shell / Python等の利用|可能|
|Git操作|可能|
|Git diffによる変更確認|可能|
|複数ステップのAgent作業|可能|
|Project外へのアクセス|権限設定次第|
|明示的な「○ファイルまで」という固定制限|確認できず|

したがって、たとえばObsidian Vaultについて、

```
ノートを読む
↓
関連ノートを検索
↓
複数ノートを比較
↓
Markdownを書き換える
↓
必要なファイルを新規作成
↓
リンクを修正
↓
Git diffで確認
```

という一連の処理を行わせること自体は、無料プランでも可能である。

これは「ファイルをAIへアップロードして加工してもらう」方式というより、**AI AgentがローカルWorkspaceを直接作業対象として扱う**方式に近い。

---

## 本当の制限はファイル数ではなくAgentの仕事量

無料版には週次の利用枠がある。

重要なのは、その消費が単純なプロンプト回数ではなく、Agentが実際に行う作業量に大きく左右される点。

同じ1000ファイルのProjectでも、

```
指定された1ファイルを修正する
```

のと、

```
1000ファイル全部を調べて、
関連ファイルを自分で発見し、
内容を比較し、
構造を判断して、
必要なファイルを書き換える
```

のとでは負荷が大きく異なる。

おおむね次のように考えられる。

|作業|Agent負荷|
|---|---|
|1ファイルの軽微な修正|小|
|数ファイルの比較・修正|小～中|
|数十ファイルの意味的比較|中|
|数百～千ファイルからAgent自身が探索|大|
|Workspace全体の構造分析|大|
|大量探索＋意味判断＋編集|非常に大|
|長時間の自律処理・複数Agent|非常に大|

したがって、

> **存在するファイル数より、実際にLLMへ読ませるファイル数の方が重要**

となる。

---

## Obsidian Vaultを使った実測事例

Web上の利用事例を調査したところ、今回の用途にかなり近い例として、

- Obsidian Vault
- 約1,095ファイル
- 約18.5MB

をAntigravity無料版で扱った報告が見つかった。

この事例では、Agent自身に広範囲のファイル探索まで担当させると、**1タスクで無料週次枠の20%以上を消費する場合があった**。

一方で、

- Python
- PowerShell
- grep系処理

などを使い、先に候補ファイルを機械的に絞り込んでからAgentへ渡す方式では、同種の処理を**約1～7%程度**まで削減できたという。

この差はかなり大きい。

単純化すると、

|1タスクの消費量|100%で実行できる概算回数|
|---|---|
|20%|約5回|
|10%|約10回|
|7%|約14回|
|5%|約20回|
|3%|約33回|
|1%|約100回|

ただし、この数字は固定保証ではない。

モデル、タスク内容、探索量、読み込むファイル、Agentの行動回数などによって変化するため、**目安として扱う必要がある**。

---

## AIに探索から丸投げする方式は効率が悪い

もっとも消費量が大きくなりやすいのは、

という方式。

この構成ではAgentが、

- ファイル探索
- 候補選定
- ファイル読み込み
- 内容理解
- 意味比較
- 判断
- 編集

のすべてを担当する。

LLMでなくてもできる作業までLLMに任せるため、クォータ消費が大きくなる。

---

## 機械処理とAgentを分業する方が効率的

より合理的なのは、機械的に処理できる部分を通常のプログラムへ任せる方法。

たとえば以下はLLMを使う必要がない。

- ファイル名検索
- YAML検索
- 特定文字列検索
- リンク検索
- 更新日検索
- ファイル一覧生成
- 一定条件による絞り込み

一方、AIが得意なのは、

- 内容が実質的に重複しているか
- 補完関係にあるか
- 矛盾しているか
- Permanentとして独立させる価値があるか
- 統合すべきか
- ノート間に新しい接続があるか
- 文脈上どのクラスタへ所属させるべきか

といった**意味的判断**である。

したがって、

> 機械にできる処理は機械へ、意味判断だけAIへ

という分担が、無料枠を有効に使ううえで重要になる。

---

## Zettelkasten整理との相性

現在のZettelkasten運用では、大量のResearchノートを一度に処理するのではなく、

```
Research全体
↓
親クラスタ
↓
子クラスタ
↓
子クラスタ単位で既存ZKと比較
↓
重複・補完・矛盾を判断
↓
必要に応じてPermanent化・統廃合
```

という流れを採用している。

この方式はAntigravity無料版の利用量を抑えるうえでも合理的。

特に、

```
Vault全体
↓
対象となる親クラスタ
↓
対象となる子クラスタ
↓
Python / ripgrep等で既存ZK候補を抽出
↓
10～30程度の関連ノート
↓
Antigravity
↓
意味的比較・判断
↓
必要なノートのみ編集
```

という構成なら、Vault全体をAgentに毎回探索させずに済む。

これはクォータ削減だけでなく、不要な情報を大量にコンテキストへ入れないため、AIの判断精度にも有利と考えられる。

---

## 別の利用例では無料枠でもかなり長い作業ができている

Obsidian以外にも、無料枠を使ってアプリ開発を行った利用事例が確認された。

比較的新しい事例では、無料枠が約半分残っている状態から、

```
要件整理
↓
実装計画作成
↓
複数ファイルのWebアプリ生成
↓
実行
↓
デバッグ
↓
コード修正
↓
記事作成
↓
画像生成
↓
さらに別アプリの作成
```

まで進められたという報告があった。

つまり無料版は、

> 数回試しただけで使えなくなる単純な体験版

とは必ずしも言えない。

タスク設計と使用モデルによっては、まとまった実作業を処理できる。

---

## 数回で無料枠を使い切ったという報告もある

一方で、

- 数requestで枠を使い切った
- 数分程度の処理でquotaに達した

というユーザー報告も存在した。

ただし、これらには、

- Antigravityの初期バージョン
- quota関連の不具合
- 非常に重いAgent処理
- 利用モデルの違い
- Agentに任せた処理内容の違い

などが混在している。

したがって、

> 「無料版は5回しか使えない」

とも、

> 「必ず100タスク使える」

とも断定できない。

利用可能量は**数タスクから数十・数百の軽量タスクまで大きく変化する**と考えた方がよい。

---

## モデル選択も消費量に影響する

Antigravityで複数モデルを利用できる場合、すべての処理を高性能モデルへ任せる必要はない。

たとえば、

```
ファイル探索
軽微な編集
形式修正
単純な生成
↓
Flash系

複数ノートの意味的比較
統廃合判断
難しい構造判断
↓
高性能モデル
```

という使い分けが考えられる。

無料枠の実用性を高めるには、**タスクの難易度に応じてモデルを使い分ける**ことも重要になる。

---

## 「Unlimited Command requests」はAgent無制限という意味ではない

料金ページでは、

- Unlimited Tab completions
- Unlimited Command requests
- Basic weekly rate limits

といった表現がある。

ここで注意すべきなのは、

> Unlimited Command requests = AgentのAI処理量も無制限

ではないこと。

Command自体を送信する回数とは別に、モデルを利用したAgent処理には週次制限が存在する。

そのため無料版の特徴は、

|項目|状況|
|---|---|
|ローカルアクセス|本格的|
|ファイル編集|本格的|
|Terminal|本格的|
|Git|本格的|
|Agent機能|利用可能|
|Agent総処理量|制限あり|

という構造になる。

---

## 無料版とGoogle AI Proの違い

当初は、

> Google AI Proへ加入しないと、本格的なローカル操作ができないのではないか

という可能性も考えていた。

しかし調査した限りでは、無料版でもローカルファイル操作自体はかなり開放されている。

したがってProの意味は、

```
無料
機能はかなり使える
ただし処理量が少ない

↓

Pro
同様の処理を
より大量・継続的に行える
```

と考える方が近い。

つまりGoogle AI Proは、**ローカル操作を解禁するプランというより、Agentをより大量に働かせるためのプラン**として見ることができる。

---

## Obsidian用途での適性

今回の調査結果からすると、おおむね次のように評価できる。

|処理|無料Antigravityとの相性|
|---|---|
|Markdown 1ファイル修正|非常に良い|
|数ファイル編集|非常に良い|
|リンク修正|良い|
|YAML整理|良い|
|Git diff確認|良い|
|子クラスタ単位のZK整理|良い|
|数十ノートの意味比較|比較的良い|
|数百ノートから関連候補探索|工夫が必要|
|1000ノート以上をAgentが直接探索|非効率|
|Vault全体の意味分析|無料枠には重い|
|毎回Vault全体を再読|避けるべき|
|スクリプトで絞り込み→AI判断|非常に相性が良い|

---

## ChatGPT Workとの違い

Zettelkasten整理ではChatGPT Workも利用しているが、Antigravityには異なる特徴がある。

Antigravityは、ローカルWorkspace・Terminal・Gitと密接に連携しながら直接ファイルを扱うCoding Agent的性格が強い。

そのため、

#chatgpt-mermaid-_r_9p8_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_9p8_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_9p8_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_9p8_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_9p8_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_9p8_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_9p8_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_9p8_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_9p8_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_9p8_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_9p8_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_9p8_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_9p8_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_9p8_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_9p8_ p{margin:0;}#chatgpt-mermaid-_r_9p8_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_9p8_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_9p8_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_9p8_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_9p8_ .label text,#chatgpt-mermaid-_r_9p8_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_9p8_ .node rect,#chatgpt-mermaid-_r_9p8_ .node circle,#chatgpt-mermaid-_r_9p8_ .node ellipse,#chatgpt-mermaid-_r_9p8_ .node polygon,#chatgpt-mermaid-_r_9p8_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_9p8_ .rough-node .label text,#chatgpt-mermaid-_r_9p8_ .node .label text,#chatgpt-mermaid-_r_9p8_ .image-shape .label,#chatgpt-mermaid-_r_9p8_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_9p8_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_9p8_ .rough-node .label,#chatgpt-mermaid-_r_9p8_ .node .label,#chatgpt-mermaid-_r_9p8_ .image-shape .label,#chatgpt-mermaid-_r_9p8_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_9p8_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_9p8_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_9p8_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_9p8_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_9p8_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_9p8_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_9p8_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_9p8_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_9p8_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_9p8_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_9p8_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_9p8_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_9p8_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_9p8_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_9p8_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_9p8_ .icon-shape,#chatgpt-mermaid-_r_9p8_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_9p8_ .icon-shape p,#chatgpt-mermaid-_r_9p8_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_9p8_ .icon-shape .label rect,#chatgpt-mermaid-_r_9p8_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_9p8_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_9p8_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_9p8_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_9p8_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_9p8_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_9p8_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_9p8_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_9p8_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_9p8_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_9p8_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_9p8_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_9p8_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_9p8_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_9p8_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_9p8_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_9p8_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_9p8_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_9p8_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_9p8_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_9p8_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_9p8_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_9p8_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_9p8_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_9p8_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_9p8_ .node rect,#chatgpt-mermaid-_r_9p8_ .node circle,#chatgpt-mermaid-_r_9p8_ .node ellipse,#chatgpt-mermaid-_r_9p8_ .node polygon,#chatgpt-mermaid-_r_9p8_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_9p8_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_9p8_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_9p8_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_9p8_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_9p8_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}Obsidian VaultAntigravityローカル検索Terminalファイル編集Git diff

100%

のような処理には向いている。

一方、ChatGPT WorkとはAgentの作業環境や利用枠の仕組みが異なるため、単純な代替関係ではなく、**作業内容ごとの使い分け候補**になる。

---

## 安全な運用

ローカルファイルを直接編集できるAgentは便利だが、その分だけ事故時の影響も大きい。

最初から、

```
C:\
```

のような広大な範囲を自由に操作させる必要はない。

対象となるVaultや作業フォルダだけをProjectとして指定する方が安全。

特にZettelkastenでは既にGit管理しているため、

#chatgpt-mermaid-_r_9p3_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_9p3_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_9p3_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_9p3_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_9p3_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_9p3_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_9p3_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_9p3_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_9p3_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_9p3_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_9p3_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_9p3_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_9p3_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_9p3_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_9p3_ p{margin:0;}#chatgpt-mermaid-_r_9p3_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_9p3_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_9p3_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_9p3_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_9p3_ .label text,#chatgpt-mermaid-_r_9p3_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_9p3_ .node rect,#chatgpt-mermaid-_r_9p3_ .node circle,#chatgpt-mermaid-_r_9p3_ .node ellipse,#chatgpt-mermaid-_r_9p3_ .node polygon,#chatgpt-mermaid-_r_9p3_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_9p3_ .rough-node .label text,#chatgpt-mermaid-_r_9p3_ .node .label text,#chatgpt-mermaid-_r_9p3_ .image-shape .label,#chatgpt-mermaid-_r_9p3_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_9p3_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_9p3_ .rough-node .label,#chatgpt-mermaid-_r_9p3_ .node .label,#chatgpt-mermaid-_r_9p3_ .image-shape .label,#chatgpt-mermaid-_r_9p3_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_9p3_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_9p3_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_9p3_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_9p3_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_9p3_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_9p3_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_9p3_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_9p3_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_9p3_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_9p3_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_9p3_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_9p3_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_9p3_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_9p3_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_9p3_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_9p3_ .icon-shape,#chatgpt-mermaid-_r_9p3_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_9p3_ .icon-shape p,#chatgpt-mermaid-_r_9p3_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_9p3_ .icon-shape .label rect,#chatgpt-mermaid-_r_9p3_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_9p3_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_9p3_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_9p3_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_9p3_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_9p3_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_9p3_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_9p3_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_9p3_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_9p3_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_9p3_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_9p3_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_9p3_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_9p3_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_9p3_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_9p3_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_9p3_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_9p3_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_9p3_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_9p3_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_9p3_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_9p3_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_9p3_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_9p3_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_9p3_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_9p3_ .node rect,#chatgpt-mermaid-_r_9p3_ .node circle,#chatgpt-mermaid-_r_9p3_ .node ellipse,#chatgpt-mermaid-_r_9p3_ .node polygon,#chatgpt-mermaid-_r_9p3_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_9p3_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_9p3_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_9p3_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_9p3_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_9p3_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}Agent作業git diff人間が確認問題なしcommit

89%

という運用と相性が良い。

初回検証については、本番Vaultそのものより、

- Vaultのコピー
- Git worktree
- テスト用ブランチ

などで試す方が安全。

---

## 実際に評価するなら「1クラスタあたりの消費量」を測る

一般ユーザーの実測例は参考になるが、自分のZettelkasten運用でどの程度消費するかは実際に試さなければ分からない。

そのため、無料版を導入した場合には次のようなベンチマークが有効。

1. Vaultのコピーなど安全な環境を作る。
2. 実際の子クラスタを1つ選ぶ。
3. 作業開始前の無料枠残量を記録する。
4. 通常のZK整理を一通り実行させる。
    - Research確認
    - 関連ZK探索
    - 重複・補完・矛盾確認
    - 必要な編集
    - Markdownリンク修正
    - Git diff確認
5. 作業終了後のクォータを記録する。
6. 所要時間・処理ノート数・変更ファイル数も記録する。
7. 「Agentが直接探索する方式」と「機械処理で候補を絞る方式」を比較する。

最終的に知りたいのは、

> **自分の通常のZettelkasten子クラスタ1個を処理するのに、無料枠を何%消費するか**

である。

この数字が分かれば、

```
1クラスタ = 3%
→ 約33クラスタ / 週

1クラスタ = 7%
→ 約14クラスタ / 週

1クラスタ = 20%
→ 約5クラスタ / 週
```

のように、実際の運用可能量を推定できる。

---

## 結論

Google Antigravity無料版は、ローカルファイルを扱うための単純な体験版ではなく、**ローカルWorkspaceを直接読み書きできる実用的なAgent環境**として利用できる。

ただし、無料版で重要になるのはファイル操作回数ではなく、AI Agentへどれだけ仕事をさせるかという設計。

特に大量のMarkdownを扱うObsidian / Zettelkastenでは、

> **Vault全体を毎回AIへ探索させる設計は避け、機械的な検索・絞り込みとAIによる意味判断を分離する**

ことが重要になる。

今回確認した約1,095ファイル・18.5MBのObsidian利用例では、探索からAIへ丸投げすると1タスクで20%以上を消費する一方、事前に候補を機械的に絞ることで約1～7%まで削減できたという報告があった。

このため、現在採用している**親クラスタ → 子クラスタ単位でZKを整理する運用**は、Antigravity無料版とも相性が良い。

Google AI Proへの課金を先に決めるより、まず無料版で実際の子クラスタを1つ処理し、

- クォータ消費
- 作業時間
- 編集精度
- Agentの安定性
- ChatGPT Workとの差

を測定したうえで判断するのが合理的である。

---

**関連して残った検討事項**

- Antigravity無料版で実際のZK子クラスタを1つ処理して消費量を測る
- Python / PowerShell / ripgrepによる候補抽出方法を設計する
- ChatGPT WorkとAntigravityの役割分担を比較する
- 無料版で不足する場合のみGoogle AI Proを検討する
- 本番Vaultに導入する前にコピーまたはGit worktreeで安全性を検証する