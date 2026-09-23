---
title: ChatGPT Workの利用制限・完全リセット・長時間運用
aliases:
  - ChatGPT Workの利用制限・完全リセット・長時間運用
type:
created: 2026-09-21T19:50:08+09:00
updated: 2026-09-21T19:50:08+09:00
id: 20260921-195008
permalink:
draft: true
tags:
  - ai-generated
---
# ChatGPT Workの利用制限・完全リセット・長時間運用

ChatGPT Workを長時間利用すると、主に**5時間単位の利用制限**と**週間利用制限**の2種類が問題になる。さらに、アカウントによっては期限付きの**完全リセット**が保存されており、5時間枠と週間枠をまとめて回復できる。

このスレッドでは、完全リセットをいつ使うのが合理的か、5時間制限で中断されたWorkをどう再開するか、長期間同じWorkスレッドを使い続けてもよいのかまで整理した。

---

## 利用制限は「5時間」と「週間」を分けて考える

確認時点では、次のような状態になっていた。

|利用枠|状態の例|
|---|---|
|5時間枠|0%まで使い切ると数時間待機|
|週間枠|0%まで使い切ると週間リセットまで待機|
|完全リセット|5時間枠と週間枠をまとめて回復|
|完全リセットの保存|有効期限付きで複数保存される場合がある|

5時間制限だけに到達した場合、数時間待てば自然回復する。

一方、週間制限に到達すると、タイミングによっては数日間Workを十分に使えなくなるため、影響が大きい。

このため、完全リセットは基本的に**5時間制限対策ではなく週間制限対策として温存する**のが合理的。

---

## 完全リセットは「容量追加」ではなく「周期のやり直し」に近い

完全リセットで重要なのは、残っている利用枠に100%が加算されるわけではないこと。

例えば、

```
5時間枠：0%
週間枠：43%
```

の状態で完全リセットすると、

```
5時間枠：100%
週間枠：100%
```

になる。

```
43% + 100% = 143%
```

になるわけではない。

したがって、週間枠が43%残っている状態で使えば、その43%は事実上捨てることになる。

さらに完全リセットは、現在の週間周期を維持したまま容量だけ補充するというより、

> 現在の周期を終了して、その時点から新しい週間周期を開始する

ものとして理解した方がよい。

---

## 完全リセットを使う価値は2要素で決まる

判断するときは、

1. **週間利用枠がどれだけ残っているか**
2. **次の自然リセットまで何日残っているか**

を見る。

|状況|リセット価値|
|---|---|
|週間0%、次回まで約7日|非常に高い|
|週間0%、次回まで5日|高い|
|週間0%、次回まで2日|状況次第|
|週間0%、次回まで数時間|低い|
|週間40%、次回まで5日|残量を捨てるため効率が悪い|
|週間80%、次回まで数日|基本的に使わない|

極論すると、最も効率がよいのは、

#chatgpt-mermaid-_r_3mo_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_3mo_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_3mo_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_3mo_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_3mo_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3mo_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_3mo_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_3mo_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_3mo_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_3mo_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_3mo_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_3mo_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3mo_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3mo_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_3mo_ p{margin:0;}#chatgpt-mermaid-_r_3mo_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3mo_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3mo_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3mo_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_3mo_ .label text,#chatgpt-mermaid-_r_3mo_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3mo_ .node rect,#chatgpt-mermaid-_r_3mo_ .node circle,#chatgpt-mermaid-_r_3mo_ .node ellipse,#chatgpt-mermaid-_r_3mo_ .node polygon,#chatgpt-mermaid-_r_3mo_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_3mo_ .rough-node .label text,#chatgpt-mermaid-_r_3mo_ .node .label text,#chatgpt-mermaid-_r_3mo_ .image-shape .label,#chatgpt-mermaid-_r_3mo_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_3mo_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_3mo_ .rough-node .label,#chatgpt-mermaid-_r_3mo_ .node .label,#chatgpt-mermaid-_r_3mo_ .image-shape .label,#chatgpt-mermaid-_r_3mo_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_3mo_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_3mo_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3mo_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3mo_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_3mo_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_3mo_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_3mo_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_3mo_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_3mo_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_3mo_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_3mo_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3mo_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3mo_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_3mo_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3mo_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_3mo_ .icon-shape,#chatgpt-mermaid-_r_3mo_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_3mo_ .icon-shape p,#chatgpt-mermaid-_r_3mo_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_3mo_ .icon-shape .label rect,#chatgpt-mermaid-_r_3mo_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_3mo_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_3mo_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_3mo_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_3mo_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_3mo_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_3mo_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_3mo_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3mo_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_3mo_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_3mo_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_3mo_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3mo_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_3mo_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_3mo_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3mo_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_3mo_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_3mo_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3mo_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_3mo_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3mo_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_3mo_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_3mo_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_3mo_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_3mo_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_3mo_ .node rect,#chatgpt-mermaid-_r_3mo_ .node circle,#chatgpt-mermaid-_r_3mo_ .node ellipse,#chatgpt-mermaid-_r_3mo_ .node polygon,#chatgpt-mermaid-_r_3mo_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_3mo_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_3mo_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_3mo_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_3mo_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_3mo_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}週間自然リセット100%Workを大量利用週間枠0%次回自然回復までほぼ7日完全リセット週間枠100%新しい週間周期開始

51%

という状態。

つまり、

> **週間枠を0%まで使い切り、なおかつ次の週間自然リセットまで7日に近いほど、完全リセット1回あたりの価値が高い。**

実際には5時間制限もあるため、週間枠を瞬時に使い切ることは難しいが、週間周期の序盤に大量利用して週間枠が尽きた場合が、かなり有利な使用タイミングになる。

---

## 5時間制限だけなら基本的に自然回復を待つ

例えば、

```
5時間枠：0%
週間枠：43%
5時間枠の回復：数時間後
```

という場合、完全リセットを使うと、

- 数時間早くWorkを再開できる
- 週間残量43%を捨てる
- 完全リセットを1回消費する
- 週間周期も新しくなる

という交換になる。

そのため、緊急性がない限り、

> **5時間制限は自然回復待ち**

でよい。

完全リセットは、週間枠をほぼ使い切った局面まで残した方が価値が高い。

---

## 保存済み完全リセットは「毎月○個」とは限らない

スレッド内で確認した範囲では、保存済み完全リセットは、

> 毎月必ず一定数付与される通常利用枠

として考えるべきものではない。

キャンペーンなどによって付与され、個別に有効期限が設定される場合がある。

したがって、

```
現在3個ある
↓
毎月3個もらえる
```

とは限らない。

また、未使用で保有していても、

- 利用枠が増える
- 翌月ボーナスが付く
- 現金やクレジットに変換される

といったメリットがあるわけではない。

メリットは単純に、

> **必要になるまで非常用として温存できること**

にある。

一方で期限を過ぎれば失効するため、「期限が近いから必ず使う」とも限らない。

週間枠を大量に捨てるくらいなら、使わず失効した方が合理的な場合もある。

---

## 完全リセットの簡単な運用ルール

判断を単純化するなら、次の条件が揃ったときに使用を検討する。

- 週間残量が0〜10%程度
- 次の週間自然リセットまで1〜2日以上ある
- その間もWorkを使う必要がある

逆に次の場合は基本的に温存する。

- 5時間枠だけ0%
- 週間枠が十分残っている
- 次の自然回復まで数時間しかない
- Workを急いで再開する必要がない

要するに、

> **「週間枠を使い切ったのに、次の週までまだ長い」**

という状態が完全リセットの典型的な使いどころ。

---

# 5時間制限でWorkが中断された場合

5時間制限に到達してWorkが停止しても、同じWorkスレッドを使えば基本的に作業を継続できる。

ただし、

> 「中断したAI内部の実行状態そのものが、そのまま完全復元される」

と考えるのは危険。

区別すべきなのは、

|残りやすいもの|完全復元を前提にしないもの|
|---|---|
|Workの会話|実行中だった内部処理位置|
|過去の指示|一時的な画面状態|
|作成済み成果物|処理途中だった操作|
|作業方針|未保存の一時状態|
|ファイルに反映済みの変更|AI内部だけに存在した進捗|

したがって、再開時には単に、

> 続きをしてください

だけではなく、

> **これまでの作業結果と現在のファイル状態を確認し、完了済みの処理を重複させず、未完了部分から再開する**

という確認工程を入れた方が安全。

---

## 5時間制限は「作業終了」ではなく「一時休止」と考える

長時間作業では、次のような運用になる。

#chatgpt-mermaid-_r_3m1_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_3m1_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_3m1_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_3m1_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_3m1_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3m1_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_3m1_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_3m1_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_3m1_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_3m1_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_3m1_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_3m1_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3m1_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3m1_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_3m1_ p{margin:0;}#chatgpt-mermaid-_r_3m1_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3m1_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3m1_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3m1_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_3m1_ .label text,#chatgpt-mermaid-_r_3m1_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3m1_ .node rect,#chatgpt-mermaid-_r_3m1_ .node circle,#chatgpt-mermaid-_r_3m1_ .node ellipse,#chatgpt-mermaid-_r_3m1_ .node polygon,#chatgpt-mermaid-_r_3m1_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_3m1_ .rough-node .label text,#chatgpt-mermaid-_r_3m1_ .node .label text,#chatgpt-mermaid-_r_3m1_ .image-shape .label,#chatgpt-mermaid-_r_3m1_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_3m1_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_3m1_ .rough-node .label,#chatgpt-mermaid-_r_3m1_ .node .label,#chatgpt-mermaid-_r_3m1_ .image-shape .label,#chatgpt-mermaid-_r_3m1_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_3m1_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_3m1_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3m1_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3m1_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_3m1_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_3m1_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_3m1_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_3m1_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_3m1_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_3m1_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_3m1_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3m1_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3m1_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_3m1_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3m1_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_3m1_ .icon-shape,#chatgpt-mermaid-_r_3m1_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_3m1_ .icon-shape p,#chatgpt-mermaid-_r_3m1_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_3m1_ .icon-shape .label rect,#chatgpt-mermaid-_r_3m1_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_3m1_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_3m1_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_3m1_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_3m1_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_3m1_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_3m1_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_3m1_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3m1_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_3m1_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_3m1_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_3m1_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3m1_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_3m1_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_3m1_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3m1_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_3m1_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_3m1_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3m1_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_3m1_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3m1_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_3m1_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_3m1_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_3m1_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_3m1_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_3m1_ .node rect,#chatgpt-mermaid-_r_3m1_ .node circle,#chatgpt-mermaid-_r_3m1_ .node ellipse,#chatgpt-mermaid-_r_3m1_ .node polygon,#chatgpt-mermaid-_r_3m1_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_3m1_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_3m1_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_3m1_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_3m1_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_3m1_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}Work開始作業5時間制限自然回復待ち同じWorkを再開現在状態を確認未完了部分から続行

55%

つまり、5時間制限に到達するたびに、新しいスレッドを作ったり最初から処理をやり直したりする必要はない。

この点でも、5時間制限だけを理由に完全リセットを消費する必要性は低い。

---

# スケジュール機能による再開

5時間枠の自然回復予定時刻が分かっていれば、その少し後にWorkを実行するようスケジュールする運用は考えられる。

例えば、

```
14:20　5時間枠回復予定
14:25　Workを再実行
```

とする。

ただし、

> 「5時間制限が解除された瞬間」を専用トリガーとして検知して、停止位置から内部処理を完全自動復帰する

という意味ではない。

考え方としては、

#chatgpt-mermaid-_r_3lm_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_3lm_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_3lm_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_3lm_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_3lm_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3lm_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_3lm_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_3lm_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_3lm_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_3lm_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_3lm_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_3lm_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3lm_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3lm_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_3lm_ p{margin:0;}#chatgpt-mermaid-_r_3lm_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3lm_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3lm_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3lm_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_3lm_ .label text,#chatgpt-mermaid-_r_3lm_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3lm_ .node rect,#chatgpt-mermaid-_r_3lm_ .node circle,#chatgpt-mermaid-_r_3lm_ .node ellipse,#chatgpt-mermaid-_r_3lm_ .node polygon,#chatgpt-mermaid-_r_3lm_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_3lm_ .rough-node .label text,#chatgpt-mermaid-_r_3lm_ .node .label text,#chatgpt-mermaid-_r_3lm_ .image-shape .label,#chatgpt-mermaid-_r_3lm_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_3lm_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_3lm_ .rough-node .label,#chatgpt-mermaid-_r_3lm_ .node .label,#chatgpt-mermaid-_r_3lm_ .image-shape .label,#chatgpt-mermaid-_r_3lm_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_3lm_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_3lm_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3lm_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3lm_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_3lm_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_3lm_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_3lm_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_3lm_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_3lm_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_3lm_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_3lm_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3lm_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3lm_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_3lm_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3lm_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_3lm_ .icon-shape,#chatgpt-mermaid-_r_3lm_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_3lm_ .icon-shape p,#chatgpt-mermaid-_r_3lm_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_3lm_ .icon-shape .label rect,#chatgpt-mermaid-_r_3lm_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_3lm_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_3lm_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_3lm_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_3lm_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_3lm_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_3lm_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_3lm_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3lm_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_3lm_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_3lm_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_3lm_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3lm_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_3lm_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_3lm_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3lm_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_3lm_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_3lm_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3lm_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_3lm_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3lm_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_3lm_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_3lm_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_3lm_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_3lm_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_3lm_ .node rect,#chatgpt-mermaid-_r_3lm_ .node circle,#chatgpt-mermaid-_r_3lm_ .node ellipse,#chatgpt-mermaid-_r_3lm_ .node polygon,#chatgpt-mermaid-_r_3lm_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_3lm_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_3lm_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_3lm_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_3lm_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_3lm_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}5時間制限回復予定時刻を確認回復後の時刻に予約Work起動前回進捗を確認未完了地点を特定作業再開

52%

となる。

また、スケジュール実行自体も利用制限の対象なので、5時間枠がまだ回復していない状態で予約タスクを実行しても、利用制限を迂回できるわけではない。

---

# 長期間同じWorkスレッドを使うと判断がぶれる可能性がある

1つのWorkスレッドで長期間・大量の作業を続ける場合、

> **結果の一貫性が徐々に低下する可能性がある。**

これは「過去の指示を完全に忘れる」というより、

- 古い指示の重要度が相対的に低下する
- 最近の指示に引っ張られる
- 細かい例外ルールを見落とす
- 過去の判断理由が薄れる
- 同じ分類でも前半と後半で基準が微妙に変わる

といった形で現れる。

例えばZettelkasten整理では、

```
前半
「この条件ならResearch」

後半
「この条件ならPermanentでもいいのでは？」
```

のように、長時間作業の途中で基準が少しずつずれる可能性がある。

---

## Workの会話履歴を唯一の仕様書にしない

長時間作業を安定させるには、

> **AIに全部覚えさせるのではなく、作業状態を外部ファイルへ持たせる**

方が安全。

特に次の3種類を分離するとよい。

|情報|役割|
|---|---|
|Master Instructions / Policy|恒久的なルール、禁止事項、命名規則、判断基準|
|Decision Log|作業中に確定した判断、その理由、以前の判断からの変更|
|Progress / Handoff|完了済み、現在位置、未処理、次に行うこと|

関係は次のようになる。

#chatgpt-mermaid-_r_3l2_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_3l2_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_3l2_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_3l2_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_3l2_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3l2_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_3l2_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_3l2_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_3l2_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_3l2_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_3l2_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_3l2_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3l2_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3l2_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_3l2_ p{margin:0;}#chatgpt-mermaid-_r_3l2_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3l2_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3l2_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3l2_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_3l2_ .label text,#chatgpt-mermaid-_r_3l2_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3l2_ .node rect,#chatgpt-mermaid-_r_3l2_ .node circle,#chatgpt-mermaid-_r_3l2_ .node ellipse,#chatgpt-mermaid-_r_3l2_ .node polygon,#chatgpt-mermaid-_r_3l2_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_3l2_ .rough-node .label text,#chatgpt-mermaid-_r_3l2_ .node .label text,#chatgpt-mermaid-_r_3l2_ .image-shape .label,#chatgpt-mermaid-_r_3l2_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_3l2_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_3l2_ .rough-node .label,#chatgpt-mermaid-_r_3l2_ .node .label,#chatgpt-mermaid-_r_3l2_ .image-shape .label,#chatgpt-mermaid-_r_3l2_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_3l2_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_3l2_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3l2_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3l2_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_3l2_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_3l2_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_3l2_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_3l2_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_3l2_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_3l2_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_3l2_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3l2_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3l2_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_3l2_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3l2_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_3l2_ .icon-shape,#chatgpt-mermaid-_r_3l2_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_3l2_ .icon-shape p,#chatgpt-mermaid-_r_3l2_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_3l2_ .icon-shape .label rect,#chatgpt-mermaid-_r_3l2_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_3l2_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_3l2_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_3l2_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_3l2_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_3l2_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_3l2_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_3l2_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3l2_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_3l2_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_3l2_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_3l2_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3l2_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_3l2_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_3l2_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3l2_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_3l2_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_3l2_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3l2_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_3l2_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3l2_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_3l2_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_3l2_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_3l2_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_3l2_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_3l2_ .node rect,#chatgpt-mermaid-_r_3l2_ .node circle,#chatgpt-mermaid-_r_3l2_ .node ellipse,#chatgpt-mermaid-_r_3l2_ .node polygon,#chatgpt-mermaid-_r_3l2_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_3l2_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_3l2_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_3l2_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_3l2_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_3l2_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}Master InstructionsWorkDecision LogProgress / Handoff実際の処理

100%

こうしておけば、5時間制限で数時間止まっても、新しいWorkスレッドへ切り替えても、

```
ルールを読む
↓
これまでの判断を読む
↓
進捗を読む
↓
未完了部分から再開
```

という復帰が可能になる。

---

# 長期Workは意味上の区切りでスレッドを分ける

1つのWorkスレッドを無制限に伸ばすより、

- 1クラスタ
- 複数の子クラスタ
- 1作業フェーズ
- 大きな判断が確定した地点

など、**作業上意味のある境界**で新しいWorkへ切り替える方が管理しやすい。

「○時間使ったから分割」「○メッセージになったから分割」といった機械的な基準より、

> **作業の意味上の境界**

を優先した方がよい。

例えばZettelkasten整理なら、

```
親クラスタA
├─ Work 1：子クラスタA1〜A3
├─ Work 2：子クラスタA4〜A6
└─ Work 3：親クラスタ全体の統合監査
```

のように分けられる。

ただし、これはProgressやDecision Logなどの引き継ぎ情報が外部化されていることが前提になる。

---

# 長時間Workの推奨運用

全体としては、次のような構造にすると安定する。

#chatgpt-mermaid-_r_3kk_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_3kk_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_3kk_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_3kk_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_3kk_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3kk_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_3kk_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_3kk_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_3kk_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_3kk_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_3kk_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_3kk_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3kk_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3kk_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_3kk_ p{margin:0;}#chatgpt-mermaid-_r_3kk_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3kk_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3kk_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3kk_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_3kk_ .label text,#chatgpt-mermaid-_r_3kk_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3kk_ .node rect,#chatgpt-mermaid-_r_3kk_ .node circle,#chatgpt-mermaid-_r_3kk_ .node ellipse,#chatgpt-mermaid-_r_3kk_ .node polygon,#chatgpt-mermaid-_r_3kk_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_3kk_ .rough-node .label text,#chatgpt-mermaid-_r_3kk_ .node .label text,#chatgpt-mermaid-_r_3kk_ .image-shape .label,#chatgpt-mermaid-_r_3kk_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_3kk_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_3kk_ .rough-node .label,#chatgpt-mermaid-_r_3kk_ .node .label,#chatgpt-mermaid-_r_3kk_ .image-shape .label,#chatgpt-mermaid-_r_3kk_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_3kk_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_3kk_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3kk_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_3kk_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_3kk_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_3kk_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_3kk_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_3kk_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_3kk_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_3kk_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_3kk_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3kk_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3kk_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_3kk_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_3kk_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_3kk_ .icon-shape,#chatgpt-mermaid-_r_3kk_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_3kk_ .icon-shape p,#chatgpt-mermaid-_r_3kk_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_3kk_ .icon-shape .label rect,#chatgpt-mermaid-_r_3kk_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_3kk_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_3kk_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_3kk_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_3kk_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_3kk_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_3kk_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_3kk_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3kk_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_3kk_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_3kk_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_3kk_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3kk_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_3kk_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_3kk_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3kk_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_3kk_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_3kk_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3kk_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_3kk_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_3kk_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_3kk_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_3kk_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_3kk_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_3kk_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_3kk_ .node rect,#chatgpt-mermaid-_r_3kk_ .node circle,#chatgpt-mermaid-_r_3kk_ .node ellipse,#chatgpt-mermaid-_r_3kk_ .node polygon,#chatgpt-mermaid-_r_3kk_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_3kk_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_3kk_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_3kk_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_3kk_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_3kk_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}固定ルール判断ログ進捗Work 1処理5時間制限自然回復Work再開または新規Work未完了部分を処理

100%

この方式なら、

- 5時間制限
- 数時間の中断
- Workスレッドの長期化
- 新規スレッドへの切替
- AIの判断ぶれ

の影響を小さくできる。

---

# 実運用方針

今回の検討から、Workは次のように運用する。

1. **5時間制限**
    - 原則自然回復を待つ。
    - 数時間後に同じWorkを再開する。
2. **週間制限**
    - こちらを完全リセットの主な使用対象とする。
3. **完全リセット**
    - 週間残量ができるだけ0%に近い状態で使用する。
    - 次の週間自然リセットまで長いほど価値が高い。
    - 週間残量が十分ある状態では基本的に使わない。
4. **Work再開**
    - 「続きをやる」だけではなく、現在状態を確認してから未完了部分を処理する。
5. **長期間のWork**
    - 会話履歴だけを作業仕様として使わない。
    - 固定ルール・判断ログ・進捗を外部化する。
6. **スレッド分割**
    - トークン数や時間ではなく、クラスタ・フェーズなど意味上の境界で行う。
7. **自動再開**
    - 必要なら自然回復予定時刻の少し後にWorkを予約する。
    - ただし利用制限解除そのものを検知する自動復帰ではない。

---

## 結論

Workの利用制限は、「5時間枠」と「週間枠」で対応を分ける。

**5時間制限は一時休止として扱い、自然回復後に続きを行う。完全リセットは週間枠をほぼ使い切った状態で使う。**

また、長時間Workでは利用制限そのもの以上に、

> **AIの会話履歴に作業状態を依存しすぎないこと**

が重要になる。

固定ルール、途中で確定した判断、現在の進捗を外部化しておけば、5時間制限による中断やWorkスレッドの分割が発生しても、一貫した状態から作業を再開できる。

長期的には、

> **Workは実行環境、外部Markdownは作業状態の正本**

という役割分担にするのが安定した運用になる。