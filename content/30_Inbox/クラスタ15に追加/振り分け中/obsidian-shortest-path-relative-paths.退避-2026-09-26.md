---
title: Obsidianの最短経路リンクと相対パスの比較・判断
aliases:
  - Obsidianの最短経路リンクと相対パスの比較・判断
  - Obsidianにおける「最短経路パス」と「相対パス」の比較・判断整理
type:
created: 2026-09-21T20:57:12+09:00
updated: 2026-09-26T10:38:08+09:00
id: 20260921-205712
permalink:
draft: true
tags:
  - ai-generated
---
以下、このスレッドで扱った内容を、判断の流れが追えるように整理します。

# Obsidianの最短経路リンクと相対パスの比較・判断

今回のテーマは、ObsidianのMarkdownリンクについて、

- **最短経路パス（Shortest path when possible）**
- **相対パス（Relative path to file）**

のどちらを採用するのが適切か、という比較でした。

最終的には、単純な「リンクの書き方」の問題ではなく、

> **フォルダ再編時に発生するGit差分を、設計上の問題として重視するかどうか**

が重要な判断軸だと整理されました。

---

## 1. 両方式の基本的な違い

例として、以下のようなVaultがあるとします。

```
Vault/
├─ 31_Research/
│  └─ ai/
│     └─ ai-knowledge-management.md
│
└─ 32_Zk/
   └─ knowledge-management.md
```

`ai-knowledge-management.md`から`knowledge-management.md`へリンクする場合です。

### 最短経路パス

```
[知識管理](knowledge-management.md)
```

ファイル名だけでリンク先を一意に特定できる場合、フォルダ情報を省略します。

一方、同名ファイルが存在してファイル名だけでは一意に決まらない場合は、必要なだけパスが追加されます。

### 相対パス

```
[知識管理](../../32_Zk/knowledge-management.md)
```

現在のファイル位置から見た、通常のファイルシステム上の相対位置を記述します。

これは標準的なMarkdownのリンクとして理解しやすい形式です。

---

# 2. 比較結果

|観点|最短経路パス|相対パス|
|---|---|---|
|リンクの短さ|◎|△|
|可読性|◎|△〜○|
|フォルダ移動への耐性|◎|△|
|Vault再編との相性|◎|△|
|Git差分の少なさ|**◎**|**△**|
|Zettelkastenとの相性|◎|○|
|同名ファイルへの強さ|△|◎|
|標準Markdown互換性|△|**◎**|
|GitHub上で直接読む|△|◎|
|Obsidian依存度|高め|低い|
|Quartz利用|設定を合わせれば対応可能|対応しやすい|
|他ツールへの移行性|△〜○|◎|

この中で、今回最も重要になったのが**Git差分**です。

---

# 3. 最短経路パスのメリット

最短経路の強みは、

> **ノート同士の論理的な関係を、フォルダ上の物理的位置から切り離しやすい**

ことです。

たとえば、

```
31_Research/
└─ ai/
   └─ foo.md
```

を、

```
31_Research/
└─ knowledge-management/
   └─ foo.md
```

へ移動しても、リンクが

```
[foo](foo.md)
```

で成立しているなら、リンク文字列そのものを変更する必要がありません。

これはZettelkastenとの相性が良い考え方です。

Zettelkastenでは本来、

```
フォルダ階層
```

よりも、

```
ノートA ──リンク──> ノートB
```

という**知識同士の関係性**の方が重要だからです。

---

# 4. 相対パスの最大のメリット

一方、相対パスには明確な強みがあります。

それは、

> **Obsidian以外でも意味が通じる、標準的なMarkdownリンクになること**

です。

たとえば、

```
[知識管理](../../32_Zk/knowledge-management.md)
```

であれば、

- GitHub
- VS Code
- 通常のMarkdownビューア
- 他の静的サイトジェネレータ
- 別のPKMツール

などでも、そのリンク構造を理解しやすくなります。

つまり相対パスは、

> **Obsidian / Quartzから独立したMarkdown資産としての移植性**

に優れています。

---

# 5. 今回思い出した「相対パスを使わなかった理由」

スレッド後半で、以前に相対パスを採用しなかった理由を思い出しました。

それが、

> **Git差分への懸念**

です。

ここが今回の結論を大きく左右しました。

---

## 相対パスでフォルダを移動した場合

たとえば、

```
[知識管理](../../32_Zk/knowledge-management.md)
```

というリンクがあったとします。

リンク元ノートをフォルダ移動すると、

```
[知識管理](../knowledge-management.md)
```

のようにリンク自体を書き換える必要があります。

Obsidianの自動リンク更新によってリンク切れそのものは防げたとしても、Gitから見ると、

```
-[知識管理](../../32_Zk/knowledge-management.md)
+[知識管理](../knowledge-management.md)
```

という変更になります。

---

# 6. 問題は「リンク切れ」より「Git履歴のノイズ」

ここが重要な整理です。

相対パスの弱点を単純に、

> 「ノートを動かすとリンクが切れる」

と理解するのは正確ではありません。

Obsidianがリンクを自動更新するのであれば、リンク切れ自体はかなり防げます。

むしろ本当の問題は、

> **内容を一切変更していないのに、フォルダ移動だけでMarkdown本文が大量変更される**

ことです。

例えば100ノートを再配置して、それぞれが多数のリンクを持っていれば、

```
フォルダ変更
        ↓
Obsidianが相対リンクを自動更新
        ↓
Markdown本文が大量変更
        ↓
Git diffが大量発生
```

となります。

---

# 7. なぜ現在のVaultでは特に重要なのか

現在のObsidian / Zettelkasten運用では、今後かなり積極的に、

- Researchノートのクラスタリング
- 子クラスタへの細分化
- Permanentカードの監査
- ノートの統合
- ノートの分割
- MOC / Structureノートの再編
- ResearchとZKの突き合わせ
- フォルダ間移動

を行います。

つまりフォルダ移動が、

> 「めったに発生しない例外処理」

ではなく、

> **通常のリファクタリング工程**

になります。

そのため、相対パスを使用すると、知識整理を行うたびに大量の機械的Git差分が生まれる可能性があります。

---

# 8. Git差分で何を見たいのか

今回の議論をさらに抽象化すると、Gitに期待している役割は、

#chatgpt-mermaid-_r_h6c_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_h6c_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_h6c_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_h6c_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_h6c_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_h6c_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_h6c_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_h6c_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_h6c_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_h6c_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_h6c_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_h6c_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_h6c_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_h6c_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_h6c_ p{margin:0;}#chatgpt-mermaid-_r_h6c_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_h6c_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_h6c_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_h6c_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_h6c_ .label text,#chatgpt-mermaid-_r_h6c_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_h6c_ .node rect,#chatgpt-mermaid-_r_h6c_ .node circle,#chatgpt-mermaid-_r_h6c_ .node ellipse,#chatgpt-mermaid-_r_h6c_ .node polygon,#chatgpt-mermaid-_r_h6c_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_h6c_ .rough-node .label text,#chatgpt-mermaid-_r_h6c_ .node .label text,#chatgpt-mermaid-_r_h6c_ .image-shape .label,#chatgpt-mermaid-_r_h6c_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_h6c_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_h6c_ .rough-node .label,#chatgpt-mermaid-_r_h6c_ .node .label,#chatgpt-mermaid-_r_h6c_ .image-shape .label,#chatgpt-mermaid-_r_h6c_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_h6c_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_h6c_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_h6c_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_h6c_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_h6c_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_h6c_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_h6c_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_h6c_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_h6c_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_h6c_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_h6c_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_h6c_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_h6c_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_h6c_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_h6c_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_h6c_ .icon-shape,#chatgpt-mermaid-_r_h6c_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_h6c_ .icon-shape p,#chatgpt-mermaid-_r_h6c_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_h6c_ .icon-shape .label rect,#chatgpt-mermaid-_r_h6c_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_h6c_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_h6c_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_h6c_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_h6c_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_h6c_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_h6c_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_h6c_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_h6c_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_h6c_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_h6c_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_h6c_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_h6c_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_h6c_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_h6c_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_h6c_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_h6c_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_h6c_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_h6c_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_h6c_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_h6c_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_h6c_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_h6c_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_h6c_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_h6c_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_h6c_ .node rect,#chatgpt-mermaid-_r_h6c_ .node circle,#chatgpt-mermaid-_r_h6c_ .node ellipse,#chatgpt-mermaid-_r_h6c_ .node polygon,#chatgpt-mermaid-_r_h6c_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_h6c_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_h6c_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_h6c_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_h6c_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_h6c_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}知識内容を変更Git差分に出てほしいフォルダだけ移動なるべくGit差分を増やしたくない意味のある履歴

100%

というものです。

理想的には、

```
Git diff
│
├─ 主張を修正した
├─ 情報を追加した
├─ リンク関係を変更した
├─ ノートを統合した
└─ ノートを削除した
```

といった**意味のある変更**を確認したいわけです。

しかし相対パスでは、

```
Git diff
│
├─ 主張を修正した
├─ 情報を追加した
├─ フォルダを移動しただけ ← 大量発生
├─ フォルダを移動しただけ
├─ フォルダを移動しただけ
└─ ...
```

となりやすくなります。

このノイズを許容するかどうかが重要になります。

---

# 9. Quartzとの関係

最短経路について懸念になるのが、標準Markdownでは、

```
[foo](foo.md)
```

は通常、

> 現在のMarkdownファイルと同じフォルダの`foo.md`

を意味するという点です。

Obsidianの、

> Vault全体から`foo.md`を探す

という挙動はObsidian独自寄りのものです。

ただしQuartzには、Markdownリンクの解決方法として、

```
absolute
relative
shortest
```

という考え方があります。

そのため、

```
Obsidian
Shortest path when possible

        ↓ 同じ思想に合わせる

Quartz
markdownLinkResolution: "shortest"
```

と揃えれば、Obsidian → Quartzという現在の公開経路では運用できます。

したがって、

> 「最短経路だからQuartz公開できない」

という問題ではありません。

---

# 10. GitHubで直接読む場合との差

ここでは相対パスに明確な優位性があります。

GitHubがMarkdownをそのまま解釈する場合、

```
[foo](../../32_Zk/foo.md)
```

なら通常のファイルリンクとして理解できます。

一方、

```
[foo](foo.md)
```

なのに実際の`foo.md`が別フォルダにある場合、GitHubはObsidianのようにVault全体を検索してくれません。

したがって、

```
Obsidian → GitHubをそのまま読む
```

ことを重視するなら相対パスが有利です。

しかし現在の運用では、GitHubは主として、

> **Quartz公開用のリポジトリ**

という位置付けです。

GitHub上のMarkdownそのものをブログとして閲覧することは主目的ではありません。

そのため、このメリットをどれほど重視するかは再検討できます。

---

# 11. 同名ファイル問題

最短経路を採用する場合は、ファイル名の一意性も重要です。

例えば、

```
31_Research/index.md
32_Zk/index.md
```

が存在すると、

```
[index](index.md)
```

ではリンク先が一意に決まりません。

そのため最短経路方式では、必要に応じて、

```
[index](31_Research/index.md)
```

のようにパスが追加されます。

現在の運用では、

```
title: 日本語タイトル
aliases:
  - 日本語タイトル
```

としつつ、ファイル名そのものは、

```
knowledge-management-in-ai-era.md
```

のような英語slugを使用しています。

そのため、

> **英語slugをVault全体でなるべく一意にする**

というルールと最短経路はかなり相性が良いです。

---

# 12. 最終的な判断軸

今回の議論から、選択基準は次のように整理できます。

#chatgpt-mermaid-_r_h3m_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_h3m_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_h3m_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_h3m_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_h3m_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_h3m_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_h3m_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_h3m_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_h3m_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_h3m_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_h3m_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_h3m_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_h3m_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_h3m_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_h3m_ p{margin:0;}#chatgpt-mermaid-_r_h3m_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_h3m_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_h3m_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_h3m_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_h3m_ .label text,#chatgpt-mermaid-_r_h3m_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_h3m_ .node rect,#chatgpt-mermaid-_r_h3m_ .node circle,#chatgpt-mermaid-_r_h3m_ .node ellipse,#chatgpt-mermaid-_r_h3m_ .node polygon,#chatgpt-mermaid-_r_h3m_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_h3m_ .rough-node .label text,#chatgpt-mermaid-_r_h3m_ .node .label text,#chatgpt-mermaid-_r_h3m_ .image-shape .label,#chatgpt-mermaid-_r_h3m_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_h3m_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_h3m_ .rough-node .label,#chatgpt-mermaid-_r_h3m_ .node .label,#chatgpt-mermaid-_r_h3m_ .image-shape .label,#chatgpt-mermaid-_r_h3m_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_h3m_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_h3m_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_h3m_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_h3m_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_h3m_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_h3m_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_h3m_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_h3m_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_h3m_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_h3m_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_h3m_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_h3m_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_h3m_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_h3m_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_h3m_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_h3m_ .icon-shape,#chatgpt-mermaid-_r_h3m_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_h3m_ .icon-shape p,#chatgpt-mermaid-_r_h3m_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_h3m_ .icon-shape .label rect,#chatgpt-mermaid-_r_h3m_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_h3m_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_h3m_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_h3m_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_h3m_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_h3m_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_h3m_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_h3m_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_h3m_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_h3m_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_h3m_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_h3m_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_h3m_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_h3m_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_h3m_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_h3m_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_h3m_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_h3m_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_h3m_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_h3m_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_h3m_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_h3m_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_h3m_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_h3m_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_h3m_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_h3m_ .node rect,#chatgpt-mermaid-_r_h3m_ .node circle,#chatgpt-mermaid-_r_h3m_ .node ellipse,#chatgpt-mermaid-_r_h3m_ .node polygon,#chatgpt-mermaid-_r_h3m_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_h3m_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_h3m_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_h3m_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_h3m_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_h3m_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}Markdownリンク形式を選択何を優先するか最短経路相対パスGit履歴の純度頻繁なVault再編Zettelkastenの論理構造標準Markdown互換性GitHubで直接閲覧Obsidian依存を減らす

79%

さらに簡潔にすると、

|最優先事項|適した方式|
|---|---|
|Git差分をきれいに保つ|**最短経路**|
|フォルダ再編を頻繁に行う|**最短経路**|
|Zettelkastenのリンク構造を重視|**最短経路**|
|Markdown標準互換性|相対パス|
|GitHub上でそのまま読む|相対パス|
|将来Obsidian/Quartzを離れる可能性を重視|相対パス|

---

# 13. 現時点での結論

現在の運用では、**最短経路パスを継続する方が合理的**という判断です。

特に重要なのは、

> 相対パスを採用することで得られるMarkdown互換性に、フォルダ再編時の大量Git差分を受け入れるだけの価値があるか

という比較です。

現在は、

```
Obsidian
   ↓
GitHub
   ↓
Quartz
   ↓
Web公開
```

という構成が中心です。

そして、

- GitHub上でMarkdownを直接読むことは重要ではない
- Quartzが最短経路を処理できる
- Vault再編を頻繁に行う
- Git履歴を変更管理として利用する

という条件があります。

したがって現状では、

```
Markdownリンク
+
Shortest path
+
英語slugを原則一意
+
Quartz側もshortestに合わせる
```

という構成が最も一貫しています。

---

# Decisions

今回確認・再確認できた判断は以下です。

- **現在の最短経路パス運用を維持する方向が妥当。**
- 相対パスを採用しなかった重要な理由は、**フォルダ移動に伴う大量のGit差分**だった。
- Git差分のノイズは単なる副作用ではなく、Vault設計上の判断基準として扱う。
- 「リンク切れ防止」と「Git差分抑制」は別問題として考える。
- Quartzとの互換性があるため、最短経路を採用すること自体は現在の公開構成では大きな障害にならない。
- 最短経路を採用するなら、**ファイル名をVault全体で原則ユニークにする**方針と組み合わせる。
- 相対パスへの移行を将来検討する場合は、「標準Markdown互換性をどこまで重視するようになったか」を判断基準にする。

# Outstanding issues

今後確認してもよいのは、主に次の点です。

1. 現在のQuartz設定で`markdownLinkResolution`が実際に何になっているか。
2. Obsidian側の現在のリンク形式設定とQuartz側が完全に一致しているか。
3. Vault内に同名Markdownファイルがどの程度存在するか。
4. 最短経路リンクをGitHub上で直接閲覧できないことを、今後も許容するか。
5. 将来Quartz以外へ移行するときにリンク変換をどう行うか。

# Next actions

直近でやるなら、**ObsidianとQuartzのリンク解決設定が「最短経路」で統一されているかを一度確認する**のが最優先です。

そのうえで、この判断を長期ルールとして残すなら、Vaultの運用ポリシーに例えば、

```
- Markdownリンクは最短経路パスを使用する。
- 相対パスは使用しない。
- 理由は、Vault再編・フォルダ移動時にリンク文字列が大量更新され、
  Git差分に機械的なノイズが発生することを避けるため。
- ファイル名は可能な限りVault内で一意な英語slugとする。
- Quartz側のリンク解決設定もObsidianと一致させる。
```

程度を追記しておくと、**「なぜ最短経路を選んだのか」を後から再び忘れる問題も防げます。**