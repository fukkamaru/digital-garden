---
title: AI時代のDigital Gardenにおける公開・限定公開の設計
aliases:
  - AI時代のDigital Gardenにおける公開・限定公開の設計
  - AI時代の個人サイト／Digital Gardenにおいて、何を公開し、何を限定公開にするべきか
type:
created: 2026-09-21T21:00:27+09:00
updated: 2026-09-26T10:38:08+09:00
id: 20260921-210027
permalink:
draft: true
tags:
  - ai-generated
---
このスレッド全体では、**AI時代の個人サイト／Digital Gardenにおいて、何を公開し、何を限定公開にするべきか**を整理し、その実装手段として **Cloudflare Access を使った特定パスの認証保護**まで話を進めました。

中心的な結論は次の通りです。

> **公開情報を減らすこと自体が目的ではない。**
> 
> **「サイトの表に出す情報」と「自分用にWebから参照したい情報」を分離し、公開レベルを持たせるべき。**
> 
> そのため、Obsidian + Quartz + GitHub + Cloudflare Pages という現在の構成を維持したまま、Cloudflare側で特定パスだけ認証必須にする設計は、今回の目的にかなり適している。

---

# 1. 出発点：AI時代に「何でも公開する」のは正しいのか

現在のサイトは、

```
Obsidian
    +
Zettelkasten
    +
Quartz
    +
GitHub
    +
Cloudflare Pages
```

によるDigital Garden兼ブログとして運用している。

さらに、

- 自分のノート
- 考察
- 調査結果
- Deep Researchで作成したPDF
- 自分がネット越しに参照したい資料

なども公開状態で置いている。

そこで問題になったのが、

> AI時代には広告収益や単純な検索流入の価値が下がっていく可能性がある。
> 
> その一方で「個人として何を考えているか」「誰が情報を編集・判断しているか」の価値が高くなるのであれば、公開情報も厳選すべきではないか？

という問いだった。

---

# 2. 最初の整理：「公開情報を減らす」ではなく「公開情報に階層をつける」

ここで重要だったのは、

```
公開する
vs
公開しない
```

という二択で考えないこと。

むしろ、

#chatgpt-mermaid-_r_it5_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_it5_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_it5_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_it5_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_it5_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_it5_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_it5_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_it5_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_it5_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_it5_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_it5_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_it5_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_it5_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_it5_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_it5_ p{margin:0;}#chatgpt-mermaid-_r_it5_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_it5_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_it5_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_it5_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_it5_ .label text,#chatgpt-mermaid-_r_it5_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_it5_ .node rect,#chatgpt-mermaid-_r_it5_ .node circle,#chatgpt-mermaid-_r_it5_ .node ellipse,#chatgpt-mermaid-_r_it5_ .node polygon,#chatgpt-mermaid-_r_it5_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_it5_ .rough-node .label text,#chatgpt-mermaid-_r_it5_ .node .label text,#chatgpt-mermaid-_r_it5_ .image-shape .label,#chatgpt-mermaid-_r_it5_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_it5_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_it5_ .rough-node .label,#chatgpt-mermaid-_r_it5_ .node .label,#chatgpt-mermaid-_r_it5_ .image-shape .label,#chatgpt-mermaid-_r_it5_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_it5_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_it5_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_it5_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_it5_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_it5_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_it5_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_it5_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_it5_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_it5_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_it5_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_it5_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_it5_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_it5_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_it5_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_it5_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_it5_ .icon-shape,#chatgpt-mermaid-_r_it5_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_it5_ .icon-shape p,#chatgpt-mermaid-_r_it5_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_it5_ .icon-shape .label rect,#chatgpt-mermaid-_r_it5_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_it5_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_it5_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_it5_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_it5_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_it5_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_it5_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_it5_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_it5_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_it5_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_it5_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_it5_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_it5_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_it5_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_it5_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_it5_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_it5_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_it5_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_it5_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_it5_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_it5_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_it5_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_it5_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_it5_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_it5_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_it5_ .node rect,#chatgpt-mermaid-_r_it5_ .node circle,#chatgpt-mermaid-_r_it5_ .node ellipse,#chatgpt-mermaid-_r_it5_ .node polygon,#chatgpt-mermaid-_r_it5_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_it5_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_it5_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_it5_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_it5_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_it5_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}全情報前面に出す資料として公開限定公開完全非公開

100%

のように、**公開レベルと露出レベルを分離する**方が適していると整理した。

特にDigital Gardenでは、

> 完成した記事だけを公開する

という通常のブログ的発想だけではなく、

> 調査 → メモ → ノート → 関連付け → 考察 → 記事

という**知識の成長過程そのもの**にも価値がある。

そのため、

「未完成だから非公開」

と単純に判断する必要はない。

問題なのは、

> どれが完成した考察で、どれが参考資料なのか分からない状態

である。

---

# 3. AI時代に価値が移る場所

スレッドの根底には次の考え方がある。

以前なら、

```
大量の情報を持っている
↓
大量の記事を書く
↓
検索流入を集める
```

こと自体が強みになりやすかった。

しかし生成AIによって、

- 調査
- 要約
- 比較
- 情報収集
- 基礎的な整理

のコストが大幅に下がった。

そのため価値は、

#chatgpt-mermaid-_r_ish_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_ish_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_ish_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_ish_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_ish_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_ish_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_ish_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_ish_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_ish_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_ish_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_ish_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_ish_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_ish_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_ish_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_ish_ p{margin:0;}#chatgpt-mermaid-_r_ish_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_ish_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_ish_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_ish_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_ish_ .label text,#chatgpt-mermaid-_r_ish_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_ish_ .node rect,#chatgpt-mermaid-_r_ish_ .node circle,#chatgpt-mermaid-_r_ish_ .node ellipse,#chatgpt-mermaid-_r_ish_ .node polygon,#chatgpt-mermaid-_r_ish_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_ish_ .rough-node .label text,#chatgpt-mermaid-_r_ish_ .node .label text,#chatgpt-mermaid-_r_ish_ .image-shape .label,#chatgpt-mermaid-_r_ish_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_ish_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_ish_ .rough-node .label,#chatgpt-mermaid-_r_ish_ .node .label,#chatgpt-mermaid-_r_ish_ .image-shape .label,#chatgpt-mermaid-_r_ish_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_ish_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_ish_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_ish_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_ish_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_ish_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_ish_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_ish_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_ish_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_ish_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_ish_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_ish_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_ish_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_ish_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_ish_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_ish_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_ish_ .icon-shape,#chatgpt-mermaid-_r_ish_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_ish_ .icon-shape p,#chatgpt-mermaid-_r_ish_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_ish_ .icon-shape .label rect,#chatgpt-mermaid-_r_ish_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_ish_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_ish_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_ish_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_ish_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_ish_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_ish_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_ish_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_ish_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_ish_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_ish_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_ish_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_ish_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_ish_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_ish_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_ish_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_ish_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_ish_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_ish_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_ish_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_ish_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_ish_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_ish_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_ish_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_ish_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_ish_ .node rect,#chatgpt-mermaid-_r_ish_ .node circle,#chatgpt-mermaid-_r_ish_ .node ellipse,#chatgpt-mermaid-_r_ish_ .node polygon,#chatgpt-mermaid-_r_ish_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_ish_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_ish_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_ish_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_ish_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_ish_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}情報量選択編集関連付け解釈判断その人固有の知識体系

66%

へ移りやすい。

特に重要なのは、

- 何を重要だと判断したか
- 何と何を関連付けたか
- どの情報を捨てたか
- 自分は最終的にどう考えたか
- 過去の考えからどう変化したか

という部分。

つまり、AI時代に育てるべき「個」とは、単純なキャラクター性だけではなく、

> **その人独自の知識体系・判断体系・編集体系**

も含む。

この点で、Zettelkasten + Digital Garden はAI時代と相性がよいと整理した。

---

# 4. サイトの役割を「ブログ」だけに限定しない

現在のサイトは、単なるブログとして捉えるより、

> **公開型Personal Knowledge Base + Digital Garden + Blog**

として考えた方が自然。

役割を分けると次のようになる。

|領域|主な役割|
|---|---|
|Blog / Articles|他人に読ませるために編集した文章|
|Digital Garden / Notes|自分の知識・思考体系|
|Research Library|調査結果・Deep Research・参考資料|
|Private Knowledge|自分だけが参照する資料|

この構造にすれば、

Deep Research PDFを保存していること自体は問題ではない。

むしろ、

> その人が何を調査して、そこから何を考えたのか

という思考過程を支える資料になる。

---

# 5. Deep Research PDFはどう扱うべきか

最初の段階では、

> Deep Research PDFなどを大量にそのまま公開してよいのか

という問題があった。

ここでは、

**PDF自体を主役にする必要はない**

と整理した。

例えば、

```
AI時代の個人ブログについて.pdf
```

を単独で公開するより、

```
# AI時代の個人ブログについて

## なぜ調べたか
検索流入や広告モデルの変化を踏まえ、
今後の個人サイト運営を考えるため。

## 調査から重要だと思った点
- 検索流入依存はリスクがある
- 一次情報や経験の価値が高まる
- 個人の判断や編集が差別化になる

## 自分の結論
広告収益最大化型ブログより、
自分の知識体系を公開するDigital Gardenを重視する。

## 元調査
Deep Research PDF
```

とした方が、

```
AI生成情報
↓
自分による選択・整理
↓
自分の知識
```

という変換が起こる。

ここがAI時代では特に重要。

---

# 6. ただし、すべてのResearch PDFを他人に見せる必要はない

ここから次の問いへ進んだ。

> 自分がネット上から見られるように置いているだけのDeep Research PDFまで、公開する必要があるのか？

結論として、

**公開する必要はない。**

だが、

**サイトから消す必要もない。**

ここで、

```
Public
Restricted
Private
```

という公開レベルを導入する発想へ進んだ。

---

# 7. Cloudflare側で特定ページにパスワードをかければよいのでは？

ユーザーから、

> GitHubにObsidianノートを公開し、それをCloudflare Pagesで無料公開している。
> 
> Cloudflare側で特定ページだけパスワードをかけられれば解決するのでは？

という提案があった。

これについては、

> **方向性としてかなり正しい**

と回答した。

Cloudflareには **Cloudflare Access** があり、

```
example.com/private/*
```

のような特定パスだけに認証を要求できる。

つまり、

```
/notes/
/articles/
/research/
```

は通常公開しつつ、

```
/private/
/private-research/
/archive-private/
```

だけを本人認証必須にできる。

---

# 8. Cloudflare Accessは「共通パスワード」だけではない

Cloudflare Accessは、単純に

```
password: 123456
```

というBasic認証のような仕組みだけではない。

例えば、

- メールOTP
- Google認証
- GitHub認証
- Cloudflare認証
- 許可したメールアドレスだけ通す

といったアクセス制御が可能。

今回の用途では、

> **自分のメールアドレスだけ許可してOTPでログイン**

のような構成でも十分現実的。

また、個人利用規模ならCloudflare Accessの無料枠で運用可能な範囲が大きいため、

現在の

> **ほぼ0円のDigital Garden**

という運用方針とも相性がよい。

---

# 9. 一度指摘した「GitHub Public問題」

ここで一度、

> GitHub RepositoryがPublicなら、Cloudflare側でページを保護してもMarkdownやPDFをGitHubから直接取得できる

という点を指摘した。

技術的にはこれは正しい。

構造としては、

#chatgpt-mermaid-_r_iqp_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_iqp_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_iqp_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_iqp_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_iqp_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_iqp_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_iqp_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_iqp_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_iqp_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_iqp_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_iqp_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_iqp_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_iqp_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_iqp_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_iqp_ p{margin:0;}#chatgpt-mermaid-_r_iqp_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_iqp_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_iqp_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_iqp_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_iqp_ .label text,#chatgpt-mermaid-_r_iqp_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_iqp_ .node rect,#chatgpt-mermaid-_r_iqp_ .node circle,#chatgpt-mermaid-_r_iqp_ .node ellipse,#chatgpt-mermaid-_r_iqp_ .node polygon,#chatgpt-mermaid-_r_iqp_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_iqp_ .rough-node .label text,#chatgpt-mermaid-_r_iqp_ .node .label text,#chatgpt-mermaid-_r_iqp_ .image-shape .label,#chatgpt-mermaid-_r_iqp_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_iqp_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_iqp_ .rough-node .label,#chatgpt-mermaid-_r_iqp_ .node .label,#chatgpt-mermaid-_r_iqp_ .image-shape .label,#chatgpt-mermaid-_r_iqp_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_iqp_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_iqp_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_iqp_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_iqp_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_iqp_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_iqp_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_iqp_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_iqp_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_iqp_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_iqp_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_iqp_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_iqp_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_iqp_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_iqp_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_iqp_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_iqp_ .icon-shape,#chatgpt-mermaid-_r_iqp_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_iqp_ .icon-shape p,#chatgpt-mermaid-_r_iqp_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_iqp_ .icon-shape .label rect,#chatgpt-mermaid-_r_iqp_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_iqp_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_iqp_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_iqp_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_iqp_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_iqp_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_iqp_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_iqp_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_iqp_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_iqp_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_iqp_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_iqp_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_iqp_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_iqp_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_iqp_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_iqp_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_iqp_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_iqp_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_iqp_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_iqp_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_iqp_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_iqp_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_iqp_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_iqp_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_iqp_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_iqp_ .node rect,#chatgpt-mermaid-_r_iqp_ .node circle,#chatgpt-mermaid-_r_iqp_ .node ellipse,#chatgpt-mermaid-_r_iqp_ .node polygon,#chatgpt-mermaid-_r_iqp_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_iqp_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_iqp_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_iqp_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_iqp_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_iqp_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}ObsidianGitHub PublicCloudflare PagesCloudflare Access

94%

となっていて、

Cloudflare側を保護しても、

```
GitHub Public Repository
↓
Markdown / PDFを直接閲覧
```

できるからである。

---

# 10. しかし「脅威モデル」が違うという修正

ここでユーザーから、

> GitHubから直接読みたいと思うユーザーはほぼ皆無。
> 
> GitHubはリポジトリであってブログではない。

という指摘があった。

これは今回の目的を考える上で重要な修正だった。

つまり、今回求めているのは、

> 機密情報を完全に秘匿するセキュリティシステム

ではない。

目的は、

> **一般のブログ訪問者に普通に見せたくない情報を、サイト上では隠す**

こと。

そのため、脅威モデルはこうなる。

|レベル|意味|
|---|---|
|公開|誰でも通常閲覧|
|限定公開|普通の閲覧者には見えない|
|完全秘匿|ソースやGitHub等からも取得困難|

今回必要なのは主に、

> **限定公開**

である。

したがって、

GitHub Publicであることは、

**技術的には抜け道だが、今回の用途では致命的問題ではない**

という整理に修正した。

---

# 11. Cloudflare Accessによる「実用的な非公開」で十分

その前提なら、

```
Obsidian
↓
GitHub Public
↓
Quartz
↓
Cloudflare Pages
↓
一部パスだけCloudflare Access
```

でも、実用上かなり目的を達成できる。

一般ユーザーは、

```
/private/research/foo
```

へアクセスすると認証画面になる。

通常のブログUIからは閲覧できない。

GitHubまで追いかければ取得できるとしても、

> そこまで調べることを防ぐ必要がない

のであれば問題ない。

---

# 12. 最終的に想定された3段階構造

最も自然な構成として、次の3段階が浮かび上がった。

#chatgpt-mermaid-_r_ips_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_ips_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_ips_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_ips_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_ips_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_ips_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_ips_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_ips_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_ips_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_ips_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_ips_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_ips_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_ips_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_ips_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_ips_ p{margin:0;}#chatgpt-mermaid-_r_ips_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_ips_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_ips_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_ips_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_ips_ .label text,#chatgpt-mermaid-_r_ips_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_ips_ .node rect,#chatgpt-mermaid-_r_ips_ .node circle,#chatgpt-mermaid-_r_ips_ .node ellipse,#chatgpt-mermaid-_r_ips_ .node polygon,#chatgpt-mermaid-_r_ips_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_ips_ .rough-node .label text,#chatgpt-mermaid-_r_ips_ .node .label text,#chatgpt-mermaid-_r_ips_ .image-shape .label,#chatgpt-mermaid-_r_ips_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_ips_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_ips_ .rough-node .label,#chatgpt-mermaid-_r_ips_ .node .label,#chatgpt-mermaid-_r_ips_ .image-shape .label,#chatgpt-mermaid-_r_ips_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_ips_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_ips_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_ips_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_ips_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_ips_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_ips_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_ips_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_ips_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_ips_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_ips_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_ips_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_ips_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_ips_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_ips_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_ips_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_ips_ .icon-shape,#chatgpt-mermaid-_r_ips_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_ips_ .icon-shape p,#chatgpt-mermaid-_r_ips_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_ips_ .icon-shape .label rect,#chatgpt-mermaid-_r_ips_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_ips_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_ips_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_ips_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_ips_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_ips_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_ips_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_ips_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_ips_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_ips_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_ips_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_ips_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_ips_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_ips_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_ips_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_ips_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_ips_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_ips_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_ips_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_ips_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_ips_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_ips_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_ips_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_ips_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_ips_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_ips_ .node rect,#chatgpt-mermaid-_r_ips_ .node circle,#chatgpt-mermaid-_r_ips_ .node ellipse,#chatgpt-mermaid-_r_ips_ .node polygon,#chatgpt-mermaid-_r_ips_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_ips_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_ips_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_ips_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_ips_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_ips_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}Obsidian VaultQuartz公開限定公開非公開誰でも閲覧Cloudflare Access本人のみ閲覧Quartzへ出力しない

100%

意味としては、

### 公開

例：

- 自分の考察
- Evergreen Note
- 他人にも役立つ調査
- 記事
- 公開したいDigital Garden

### 限定公開

例：

- Deep Research PDF
- 自分用Research Library
- Webからアクセスしたい資料
- まだ公開価値を判断していないノート
- 自分向けアーカイブ

### 完全非公開

例：

- 個人情報
- 業務上の機密
- パスワード
- 認証情報
- 本当に漏洩してはいけない情報

これはCloudflareへ出すべきではない。

---

# 13. 「公開情報を厳選する」の意味も変わった

スレッドの最初では、

> 公開情報そのものを減らした方がよいのでは？

という話だった。

最終的には、

> **公開情報の総量より、「何を表に出すか」を厳選する**

という考え方へ整理された。

つまり、

```
大量に持っている
```

ことと、

```
大量に前面表示する
```

ことは別。

例えばResearch PDFを500個持っていても、

```
トップページ
↓
主要ノート
↓
主要記事
↓
代表的なResearch
```

だけを前面に出して、

その他は、

```
/private/research/
```

へ置くことができる。

---

# 14. 「サイト」と「自分用Knowledge Base」を統合できる

Cloudflare Accessを使う発想によって、サイトの位置付けそのものも拡張できる。

従来：

```
Obsidian
↓
Quartz
↓
公開ブログ
```

今後：

```
Obsidian
↓
Quartz
↓
┌─────────────────┐
│ Public Digital Garden │
│ Private Knowledge Web │
└─────────────────┘
```

つまりQuartzサイトを、

> **他人に見せるサイト**

だけではなく、

> **自分自身がWebからアクセスするPersonal Knowledge Base**

としても利用できる。

これは今回の運用ではかなり相性がよい。

---

# 15. YAML設計にも発展できる

現在はObsidianノートに、

```
draft: true
```

などを利用している。

今後は公開制御を明確化するなら、

例えば、

```
visibility: public
```

```
visibility: restricted
```

```
visibility: private
```

のような独立fieldを持たせる設計も考えられる。

例えば、

|visibility|Quartz|Cloudflare|
|---|---|---|
|`public`|出力|公開|
|`restricted`|出力|Access認証|
|`private`|出力しない|―|

とできる。

この方が、

```
draft
```

と

```
公開範囲
```

を混同しなくて済む。

例えば、

```
draft: true
visibility: public
```

なら、

> まだ完成していないがDigital Gardenとしては公開

という意味にできる。

逆に、

```
draft: false
visibility: restricted
```

なら、

> ノートとしては完成しているが、自分だけが読む

という意味にできる。

これはかなり合理的。

---

# 16. 今回の話から導かれる情報設計

現在のサイト全体は、概念的にはこう整理できる。

#chatgpt-mermaid-_r_inf_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_inf_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_inf_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_inf_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_inf_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_inf_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_inf_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_inf_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_inf_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_inf_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_inf_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_inf_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_inf_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_inf_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_inf_ p{margin:0;}#chatgpt-mermaid-_r_inf_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_inf_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_inf_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_inf_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_inf_ .label text,#chatgpt-mermaid-_r_inf_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_inf_ .node rect,#chatgpt-mermaid-_r_inf_ .node circle,#chatgpt-mermaid-_r_inf_ .node ellipse,#chatgpt-mermaid-_r_inf_ .node polygon,#chatgpt-mermaid-_r_inf_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_inf_ .rough-node .label text,#chatgpt-mermaid-_r_inf_ .node .label text,#chatgpt-mermaid-_r_inf_ .image-shape .label,#chatgpt-mermaid-_r_inf_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_inf_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_inf_ .rough-node .label,#chatgpt-mermaid-_r_inf_ .node .label,#chatgpt-mermaid-_r_inf_ .image-shape .label,#chatgpt-mermaid-_r_inf_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_inf_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_inf_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_inf_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_inf_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_inf_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_inf_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_inf_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_inf_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_inf_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_inf_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_inf_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_inf_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_inf_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_inf_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_inf_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_inf_ .icon-shape,#chatgpt-mermaid-_r_inf_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_inf_ .icon-shape p,#chatgpt-mermaid-_r_inf_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_inf_ .icon-shape .label rect,#chatgpt-mermaid-_r_inf_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_inf_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_inf_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_inf_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_inf_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_inf_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_inf_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_inf_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_inf_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_inf_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_inf_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_inf_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_inf_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_inf_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_inf_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_inf_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_inf_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_inf_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_inf_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_inf_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_inf_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_inf_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_inf_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_inf_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_inf_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_inf_ .node rect,#chatgpt-mermaid-_r_inf_ .node circle,#chatgpt-mermaid-_r_inf_ .node ellipse,#chatgpt-mermaid-_r_inf_ .node polygon,#chatgpt-mermaid-_r_inf_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_inf_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_inf_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_inf_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_inf_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_inf_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}Obsidian VaultKnowledgePublic KnowledgeRestricted KnowledgePrivate KnowledgeArticlesEvergreen NotesSelected ResearchDeep Research PDFsResearch ArchivePersonal ReferencePersonal DataConfidential WorkCredentialsQuartzCloudflare PagesPublicCloudflare AccessPublish対象外

33%

---

# 17. Deep Researchの位置付け

今回の話からすると、Deep Researchには少なくとも3種類ある。

|種類|推奨|
|---|---|
|他人にも価値がある|Public|
|自分用資料として価値がある|Restricted|
|一時的な調査・不要|Obsidian内だけ|

重要なのは、

> AIが作ったものだから公開する／しない

ではない。

判断基準は、

> **この情報がサイトの外向け価値を高めるか**

である。

---

# 18. Digital Gardenとしての公開方針

Digital Gardenである以上、

> すべてを完成記事にする

必要はない。

ただし、

```
何が自分の主張なのか
何が調査資料なのか
何が作業途中なのか
```

は分かるようにする。

そのため、

- Information architecture
- visibility
- maturity
- type

は分離して管理した方がよい。

例えば、

```
type: evergreen-note
maturity: growing
visibility: public
```

のような管理も考えられる。

---

# 19. このスレッドで確定した考え方

## Decisions

1. **AI時代だからといって、情報を大量に削除する必要はない。**
2. 問題なのは情報量ではなく、  
    **何を自分の代表情報として前面に出すか。**
3. サイトは単純なブログではなく、
    > Public Knowledge Base
    > 
    > - Digital Garden
    > - Blog
    > - Personal Web Knowledge Base
    として考えられる。
4. Deep Research PDFは、  
    **すべてをPublicにする必要はない。**
5. 自分がWebから参照したいだけの資料は、  
    **Restricted領域へ移すのが合理的。**
6. Cloudflare Accessによる  
    **特定パスの認証保護は今回の用途に適している。**
7. GitHub Publicであることは完全秘匿の観点では問題になるが、  
    **今回の目的では許容可能。**
8. 本当に漏洩して困る情報はCloudflare Accessに頼らず、  
    **Quartzへ出力しない。**

---

# 20. 今後の推奨設計

現時点では、私は次の4層くらいが最も扱いやすいと思う。

|レベル|内容|アクセス|
|---|---|---|
|Featured|特に見せたい記事・ノート|Public|
|Garden|通常の公開ノート|Public|
|Research Archive|Deep Research等|Access|
|Private|機密・個人情報|Publishしない|

URLとしては例えば、

```
/articles/
/notes/
/research/
```

を公開。

```
/private/
/archive/
/research-private/
```

をCloudflare Access。

完全非公開はQuartz外。

---

# Outstanding issues

まだ決めていないのは主に次の点。

- `draft` と `visibility` をどう分離するか
- RestrictedノートをどのURL配下に置くか
- Deep Research PDFをMarkdownノートとどう関連付けるか
- Quartzの検索・Graph・RSS・SitemapにRestricted情報を載せるか
- Public / Restrictedをフォルダで管理するかYAMLで管理するか
- Cloudflare Access認証をメールOTPにするか他方式にするか
- GitHub Public Repositoryを今後も維持するか

---

# Next actions

次に詰めるなら、順番としては、

1. **公開レベルを定義**
    - Public
    - Restricted
    - Private
2. **YAML設計**
    - `visibility`
    - `draft`
    - `type`  
        の役割を分離
3. **Quartz側の出力ルールを決定**
4. **Restricted用URLを決定**
5. **Cloudflare Accessをそのパスへ設定**
6. **Deep Research PDFをRestricted領域へ段階的に移行**

という流れが自然です。

最終的にこのスレッドで形成された方針を一文で表すなら、

> **Digital Gardenの情報量を減らすのではなく、Public / Restricted / Privateを分離し、「外向けに何を見せるか」を編集する。Restricted領域はCloudflare Accessで本人だけがWeb閲覧できるようにする。**

という設計です。