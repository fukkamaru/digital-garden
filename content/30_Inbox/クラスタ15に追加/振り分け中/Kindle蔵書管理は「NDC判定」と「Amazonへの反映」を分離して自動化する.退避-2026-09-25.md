---
title: Kindle蔵書管理は「NDC判定」と「Amazonへの反映」を分離して自動化する
aliases:
  - Kindle蔵書管理は「NDC判定」と「Amazonへの反映」を分離して自動化する
type:
created: 2026-09-21T21:07:11+09:00
updated: 2026-09-21T21:07:11+09:00
id: 20260921-210711
permalink:
draft: true
tags:
  - ai-generated
---
# Kindle蔵書管理は「NDC判定」と「Amazonへの反映」を分離して自動化する

Kindle蔵書をNDCベースで整理する場合、すべてを一つの仕組みで自動化しようとするより、**書誌情報の取得・NDC判定・蔵書データベース化と、Kindle Collectionへの反映を分離した方が安定する**。

国立国会図書館のAPIとAIを使えばNDC判定は大部分を自動化できる。一方、Amazonは一般ユーザー向けのKindle Collection書き込みAPIを公開していないため、Collection整理はKindle for WindowsのGUI操作を利用する。

この構成なら、Amazonの非公開内部APIに依存せず、将来的にはWindowsアプリのGUI自動化・半自動化の練習にも発展させられる。

---

## 背景

Kindle本をNDC（日本十進分類法）に基づくCollectionで管理してきた。

Collectionは主として3桁単位で、

- `[915]`
- `[916]`
- `[923]`
- `[929]`
- `[933]`
- `[943]`
- `[953]`
- `[989]`
- `[999] その他`

のように作成している。

問題は、本を購入するたびに、

1. Kindleで書名を確認する
2. 国立国会図書館サーチ等を開く
3. 書籍を検索する
4. NDCを調べる
5. Kindleへ戻る
6. 対応するCollectionへ登録する

という作業を手動で行っていたことだった。

分類そのものに時間を使いすぎ、

> 整理整頓だけして本を読まない

状態になることもあった。

したがって、この自動化の目的は蔵書管理を精緻化することではない。

**整理に使っていた時間を読書へ戻すこと**が本来の目的である。

---

## AIの役割は「NDCを推測すること」だけではない

単純に全書籍についてAIへ、

> この本のNDCは何か

と質問する方式にはしない。

一次的なNDC情報は、可能な限り国立国会図書館などの書誌データから取得する。

AIが担当するのは、その周辺業務である。

- タイトル表記の正規化
- 著者名の照合
- ISBNやASINとの対応付け
- Kindle版と紙版の同一性判断
- 同名書籍が複数ある場合の候補選択
- 複数のNDC候補から適切なものを判断
- NDLで見つからない書籍の追加調査
- 書誌情報が存在しない場合のNDC推定
- NDCから既存Kindle Collectionへの割り当て
- 信頼度判定
- 人間による確認が必要な本の抽出

したがって、

```
AI = NDC分類器
```

ではなく、

```
AI = 蔵書整理ワークフローのオーケストレーター
```

として扱う。

---

## NDC判定の基本フロー

優先順位は次のようにする。

1. 国立国会図書館の書誌データ
2. その他の信頼できる書誌データ
3. AIによる内容調査・分類
4. それでも判断不能なら `[999] その他`

人間が確認するのは、最後まで確信を持てなかった少数の本に限定する。

---

## `[999] その他` は原則としてNDC未確定の保留箱

現在 `[999] その他` には46冊程度入っている。

内容には、

- 雑誌・ムック
- 美術・作品集
- ランキング・カタログ類
- 古典・文学作品
- その他、手動ではNDCを判断できなかった書籍

などが混在している。

当初は「999を意図的な特殊分類として残す」案も考えたが、実際の運用では、

> **NDCが分からなかったため一時的に入れた**

本が多い。

したがって、今後はNDLやAIで分類できたものから通常Collectionへ移す。

```
[999] その他
    ↓
NDLで再調査
    ↓
他の書誌情報
    ↓
AI補完
    ↓
判定できれば通常NDCへ移動
    ↓
どうしても判断不能なものだけ999に残す
```

### 電子書籍系の999

通常の `[999] その他` とは別に、電子書籍限定・特殊な電子出版物などをまとめた999系Collectionも存在する。

ただし、

> 電子書籍であること自体を理由にNDC分類から除外する

必要はない。

NDCを合理的に決定できるなら通常のNDC Collectionへ移してよい。

---

## NDCでは「版」を必ず管理する

現在使用している分類体系は**NDC新訂9版**である。

一方、現行版は新訂10版なので、自動化するときに単純に、

```
007
548
933
```

だけを保存してはいけない。

どの版のNDCなのかが分からなくなるからである。

最低でも、

```
ndc_code
ndc_edition
```

を分離する。

例：

```
ndc_code: 933.7
ndc_edition: 9
```

将来的にNDC10へ移行する場合には、

```
ndc9: 548.9
ndc10: 007.6
```

のように両方を保持してもよい。

### 原則

**NDC9とNDC10を無意識に混在させない。**

既存Collectionが9版基準である以上、APIから10版の番号が得られたからといって、そのまま既存体系へ投入しない。

必要なら明示的なマッピングを行う。

---

## NDC9を維持するかNDC10へ移行するかは未決定

現在はNDC9を使っているため、二つの選択肢がある。

|方針|利点|問題|
|---|---|---|
|NDC9継続|現在のCollectionを維持しやすい|現行の書誌データとズレることがある|
|NDC10移行|現行体系と整合する|既存蔵書の再分類が必要|

Kindleでは主に3桁分類を使っているため、細分類の改訂すべてを反映する必要はない。

将来移行する場合も、

> **NDC9→10で3桁Collectionが変わる書籍だけ抽出する**

ことで作業量を抑えられる。

---

## Kindle側はNDC取得とは別問題

NDC判定そのものは、NDL Search APIとAIによって大部分を自動化できる。

残る問題は、

> 判定したNDCをAmazon KindleのCollectionへどう反映するか

である。

Amazonは一般ユーザー向けに、Kindle Collectionを読み書きする公開APIを提供していない。

理想的には、

```
ASIN
↓
Collection ID
↓
追加
```

という処理をAPIで行いたいが、正式な外部インターフェースはない。

---

## Amazon内部APIは基本的に使用しない

Kindleアプリ自体がCloud Collectionsを操作している以上、Amazon内部では何らかのAPI相当の仕組みが存在する。

その通信を解析して、

```
ASIN B0AAAA → Collection 913
```

のように直接書き込むことも技術的には考えられる。

ただし、今回の用途では基本的に採用しない。

理由は、

- 外部利用を前提とした公開仕様ではない
- Amazon側の変更で突然動かなくなる可能性がある
- Cookieやセッショントークンなどの認証情報を扱う可能性がある
- Bot対策や再認証の影響を受ける
- 利用規約上の扱いが不透明
- Collection削除等を誤実行した場合の影響が大きい
- 長期的な保守対象が増える

ためである。

内部APIは「技術的に不可能だから避ける」のではない。

**今回の目的に対してリスクと保守負担が大きすぎるため使わない。**

---

## Amazon側は「読み取り」と「書き込み」を分離する

最終的な方針は、

```
Amazonから蔵書情報を取得する
        ↓
自分のDBで整理する
        ↓
Kindleへの反映だけ公式GUIを使う
```

とする。

### 読み取り

所有書籍情報を取得可能な、

- Amazon公式のデータ取得手段
- サードパーティアプリ
- エクスポート手段
- Web上からの取得手段

などを利用する。

用途は蔵書DB作成までに留める。

### 書き込み

Amazon内部APIでCloud Collectionsを書き換えず、

**Kindle for Windowsの公式GUIを操作する。**

---

## Amazonを蔵書データベースの正本にしない

分類情報はAmazon側だけに保存しない。

最低限、手元に次のようなデータを持つ。

|フィールド|内容|
|---|---|
|Title|書名|
|Author|著者|
|ASIN|Amazon識別子|
|ISBN|ISBN|
|NDC|NDC番号|
|NDC Edition|9版／10版|
|NDC Source|NDL／他書誌／AI|
|Confidence|判定信頼度|
|Kindle Collection|登録先|
|Status|未処理／確認待ち／処理済み|

例えば、

```
Title,ASIN,NDC,NDC_Edition,Collection,Source,Confidence
本A,B0AAAA,913.6,9,[913],NDL,0.99
本B,B0BBBB,933.7,9,[933],NDL,0.98
本C,B0CCCC,007.6,10,[007],AI,0.82
```

のような形式。

---

## Obsidianには全蔵書を1冊1ノート化しない

蔵書DBをObsidianにそのまま展開し、全Kindle本について1冊1ノートを作る案は避ける。

それを行うと、

> 本を読むための管理が、新たな管理作業を生む

からである。

役割を分離する。

```
蔵書DB
├─ CSV
├─ SQLite
└─ その他の構造化データ

実際に読んだ本・考えた本
        ↓
Obsidianの読書ノート／ZK
```

Obsidianは読書・思考・知識化のために使い、単純な在庫管理は別システムに任せる。

---

## Kindle for WindowsでCollectionへ反映する

Kindle for WindowsをCollection整理の操作対象とする。

AI側では、例えば次の状態まで作る。

```
[913]
- 本A
- 本B
- 本C

[933]
- 本D
- 本E

[007]
- 本F
```

人間はWindowsアプリ側で同じCollectionの本をまとめて選択して登録する。

この段階でも、

> 一冊ずつNDCを検索してCollectionを判断する

工程は消える。

---

## Kindle for WindowsをGUI自動化の練習台にする

このプロジェクトは、単なるKindle整理に留めない。

**Windowsアプリの自動操作・半自動操作技術を強化するための練習プロジェクト**として利用する。

Kindle for Windowsには、

- 検索欄への入力
- 検索結果の認識
- 一覧からの対象選択
- 複数選択
- メニュー操作
- Collection選択
- 処理完了確認

など、GUI自動化で頻繁に使う要素が含まれている。

そのため、他の業務アプリへ応用するための教材として適している。

---

## GUI自動化は段階的に強化する

いきなり全自動にはしない。

### 段階1：AI補助

```
本A → [913]
本B → [933]
```

までAIが判断。

GUI操作は人間が行う。

### 段階2：半自動

例えば、

1. 本のタイトルを自動入力
2. 検索結果を表示
3. 登録予定Collectionを提示
4. 人間が確認
5. 実行

とする。

### 段階3：単冊自動化

```
書籍検索
↓
対象を特定
↓
Collectionメニュー
↓
Collection選択
↓
登録
```

まで自動化する。

### 段階4：少数バッチ

5〜10冊程度を連続処理する。

この段階から、

- ログ
- エラー停止
- 再実行
- リトライ
- 人間への確認

を入れる。

### 段階5：蔵書DBと連携

```
ASIN / Title / Collection
```

をDBから読み込み、GUI操作へ渡す。

### 段階6：例外処理

例えば、

- 検索結果なし
- 同名書籍
- 読み込み遅延
- Collectionが見つからない
- 既にCollectionへ登録済み
- ログイン要求
- ダイアログ表示
- Kindle側UI変更

などを処理する。

### 段階7：半自律運転

正常系は自動処理し、曖昧なものだけ人間へ返す。

#chatgpt-mermaid-_r_mlo_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_mlo_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_mlo_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_mlo_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_mlo_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_mlo_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_mlo_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_mlo_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_mlo_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_mlo_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_mlo_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_mlo_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_mlo_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_mlo_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_mlo_ p{margin:0;}#chatgpt-mermaid-_r_mlo_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_mlo_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_mlo_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_mlo_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_mlo_ .label text,#chatgpt-mermaid-_r_mlo_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_mlo_ .node rect,#chatgpt-mermaid-_r_mlo_ .node circle,#chatgpt-mermaid-_r_mlo_ .node ellipse,#chatgpt-mermaid-_r_mlo_ .node polygon,#chatgpt-mermaid-_r_mlo_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_mlo_ .rough-node .label text,#chatgpt-mermaid-_r_mlo_ .node .label text,#chatgpt-mermaid-_r_mlo_ .image-shape .label,#chatgpt-mermaid-_r_mlo_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_mlo_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_mlo_ .rough-node .label,#chatgpt-mermaid-_r_mlo_ .node .label,#chatgpt-mermaid-_r_mlo_ .image-shape .label,#chatgpt-mermaid-_r_mlo_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_mlo_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_mlo_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_mlo_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_mlo_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_mlo_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_mlo_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_mlo_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_mlo_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_mlo_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_mlo_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_mlo_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_mlo_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_mlo_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_mlo_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_mlo_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_mlo_ .icon-shape,#chatgpt-mermaid-_r_mlo_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_mlo_ .icon-shape p,#chatgpt-mermaid-_r_mlo_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_mlo_ .icon-shape .label rect,#chatgpt-mermaid-_r_mlo_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_mlo_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_mlo_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_mlo_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_mlo_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_mlo_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_mlo_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_mlo_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_mlo_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_mlo_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_mlo_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_mlo_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_mlo_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_mlo_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_mlo_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_mlo_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_mlo_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_mlo_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_mlo_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_mlo_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_mlo_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_mlo_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_mlo_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_mlo_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_mlo_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_mlo_ .node rect,#chatgpt-mermaid-_r_mlo_ .node circle,#chatgpt-mermaid-_r_mlo_ .node ellipse,#chatgpt-mermaid-_r_mlo_ .node polygon,#chatgpt-mermaid-_r_mlo_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_mlo_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_mlo_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_mlo_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_mlo_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_mlo_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}新しいKindle本蔵書DBへ追加NDL Search APINDC判定十分な確度かCollection決定人間確認Kindle for WindowsGUI自動操作正常終了か処理済みYesNoYesNo

100%

---

## GUI自動化で学ぶべきこと

単純なクリック記録ではなく、他のアプリへ転用可能な自動化を目指す。

### UI要素認識

座標クリックより、

- 検索ボックス
- ボタン
- リスト
- メニュー
- ダイアログ

などをUI要素として指定できる方式を優先する。

### 状態待機

```
3秒待機
```

ではなく、

```
検索結果が表示されるまで待機
```

のように状態を見て進む。

### 状態判定

処理後に、

- Collection登録済みか
- 対象書籍が見つかったか
- ダイアログが閉じたか

を確認する。

### ログ

最低限、

```
日時
書籍
登録先Collection
処理結果
エラー内容
```

を残す。

### 再実行可能性

途中で停止しても、

> 最初から全冊処理し直す

ことがないように、処理済み状態を保存する。

---

## 自動化ツール候補

今後比較する候補は、

- Power Automate Desktop
- AutoHotkey
- Windows UI Automation
- Python系UI Automation

など。

画像認識や固定座標クリックは、UI要素を直接取得できない場合の最後の手段とする。

主軸ツールはまだ決めていない。

---

## 最終的なシステム構成

#chatgpt-mermaid-_r_mla_{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;fill:rgb(26, 28, 31);}@keyframes edge-animation-frame{from{stroke-dashoffset:0;}}@keyframes dash{to{stroke-dashoffset:0;}}#chatgpt-mermaid-_r_mla_ .edge-animation-slow{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 50s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_mla_ .edge-animation-fast{stroke-dasharray:9,5!important;stroke-dashoffset:900;animation:dash 20s linear infinite;stroke-linecap:round;}#chatgpt-mermaid-_r_mla_ .error-icon{fill:rgba(255, 255, 255, 0.96);}#chatgpt-mermaid-_r_mla_ .error-text{fill:rgb(26, 28, 31);stroke:rgb(26, 28, 31);}#chatgpt-mermaid-_r_mla_ .edge-thickness-normal{stroke-width:1px;}#chatgpt-mermaid-_r_mla_ .edge-thickness-thick{stroke-width:3.5px;}#chatgpt-mermaid-_r_mla_ .edge-pattern-solid{stroke-dasharray:0;}#chatgpt-mermaid-_r_mla_ .edge-thickness-invisible{stroke-width:0;fill:none;}#chatgpt-mermaid-_r_mla_ .edge-pattern-dashed{stroke-dasharray:3;}#chatgpt-mermaid-_r_mla_ .edge-pattern-dotted{stroke-dasharray:2;}#chatgpt-mermaid-_r_mla_ .marker{fill:rgba(26, 28, 31, 0.494);stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_mla_ .marker.cross{stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_mla_ svg{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:14px;}#chatgpt-mermaid-_r_mla_ p{margin:0;}#chatgpt-mermaid-_r_mla_ .label{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_mla_ .cluster-label text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_mla_ .cluster-label span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_mla_ .cluster-label span p{background-color:transparent;}#chatgpt-mermaid-_r_mla_ .label text,#chatgpt-mermaid-_r_mla_ span{fill:rgb(26, 28, 31);color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_mla_ .node rect,#chatgpt-mermaid-_r_mla_ .node circle,#chatgpt-mermaid-_r_mla_ .node ellipse,#chatgpt-mermaid-_r_mla_ .node polygon,#chatgpt-mermaid-_r_mla_ .node path{fill:rgb(224, 237, 254);stroke:rgb(83, 154, 248);stroke-width:1px;}#chatgpt-mermaid-_r_mla_ .rough-node .label text,#chatgpt-mermaid-_r_mla_ .node .label text,#chatgpt-mermaid-_r_mla_ .image-shape .label,#chatgpt-mermaid-_r_mla_ .icon-shape .label{text-anchor:middle;}#chatgpt-mermaid-_r_mla_ .node .katex path{fill:#000;stroke:#000;stroke-width:1px;}#chatgpt-mermaid-_r_mla_ .rough-node .label,#chatgpt-mermaid-_r_mla_ .node .label,#chatgpt-mermaid-_r_mla_ .image-shape .label,#chatgpt-mermaid-_r_mla_ .icon-shape .label{text-align:center;}#chatgpt-mermaid-_r_mla_ .node.clickable{cursor:pointer;}#chatgpt-mermaid-_r_mla_ .root .anchor path{fill:rgba(26, 28, 31, 0.494)!important;stroke-width:0;stroke:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_mla_ .arrowheadPath{fill:rgba(26, 28, 31, 0.494);}#chatgpt-mermaid-_r_mla_ .edgePath .path{stroke:rgba(26, 28, 31, 0.494);stroke-width:1px;}#chatgpt-mermaid-_r_mla_ .flowchart-link{stroke:rgba(26, 28, 31, 0.494);fill:none;}#chatgpt-mermaid-_r_mla_ .edgeLabel{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_mla_ .edgeLabel p{background-color:rgb(255, 255, 255);}#chatgpt-mermaid-_r_mla_ .edgeLabel rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_mla_ .labelBkg{background-color:rgba(255, 255, 255, 0.5);}#chatgpt-mermaid-_r_mla_ .cluster rect{fill:rgba(255, 255, 255, 0.96);stroke:rgba(26, 28, 31, 0.08);stroke-width:1px;}#chatgpt-mermaid-_r_mla_ .cluster text{fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_mla_ .cluster span{color:rgb(26, 28, 31);}#chatgpt-mermaid-_r_mla_ div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:12px;background:rgba(255, 255, 255, 0.96);border:1px solid rgba(26, 28, 31, 0.08);border-radius:2px;pointer-events:none;z-index:100;}#chatgpt-mermaid-_r_mla_ .flowchartTitleText{text-anchor:middle;font-size:18px;fill:rgb(26, 28, 31);}#chatgpt-mermaid-_r_mla_ rect.text{fill:none;stroke-width:0;}#chatgpt-mermaid-_r_mla_ .icon-shape,#chatgpt-mermaid-_r_mla_ .image-shape{background-color:rgb(255, 255, 255);text-align:center;}#chatgpt-mermaid-_r_mla_ .icon-shape p,#chatgpt-mermaid-_r_mla_ .image-shape p{background-color:rgb(255, 255, 255);padding:2px;}#chatgpt-mermaid-_r_mla_ .icon-shape .label rect,#chatgpt-mermaid-_r_mla_ .image-shape .label rect{opacity:0.5;background-color:rgb(255, 255, 255);fill:rgb(255, 255, 255);}#chatgpt-mermaid-_r_mla_ .label-icon{display:inline-block;height:1em;overflow:visible;vertical-align:-0.125em;}#chatgpt-mermaid-_r_mla_ .node .label-icon path{fill:currentColor;stroke:revert;stroke-width:revert;}#chatgpt-mermaid-_r_mla_ .node .neo-node{stroke:rgb(83, 154, 248);}#chatgpt-mermaid-_r_mla_ [data-look="neo"].node rect,#chatgpt-mermaid-_r_mla_ [data-look="neo"].cluster rect,#chatgpt-mermaid-_r_mla_ [data-look="neo"].node polygon{stroke:url(#chatgpt-mermaid-_r_mla_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_mla_ [data-look="neo"].swimlane.cluster rect{filter:none;}#chatgpt-mermaid-_r_mla_ [data-look="neo"].node path{stroke:url(#chatgpt-mermaid-_r_mla_-gradient);stroke-width:1px;}#chatgpt-mermaid-_r_mla_ [data-look="neo"].node .outer-path{filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_mla_ [data-look="neo"].node .neo-line path{stroke:rgb(83, 154, 248);filter:none;}#chatgpt-mermaid-_r_mla_ [data-look="neo"].node circle{stroke:url(#chatgpt-mermaid-_r_mla_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_mla_ [data-look="neo"].node circle .state-start{fill:#000000;}#chatgpt-mermaid-_r_mla_ [data-look="neo"].icon-shape .icon{fill:url(#chatgpt-mermaid-_r_mla_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_mla_ [data-look="neo"].icon-shape .icon-neo path{stroke:url(#chatgpt-mermaid-_r_mla_-gradient);filter:drop-shadow( 1px 2px 2px rgba(185,185,185,1));}#chatgpt-mermaid-_r_mla_ .node text{font-size:14px;font-weight:600;letter-spacing:normal;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_mla_ .edgeLabels text{font-size:13px;font-weight:600;letter-spacing:-0.08px;fill:rgb(0, 79, 153);}#chatgpt-mermaid-_r_mla_ .node tspan[font-weight="normal"],#chatgpt-mermaid-_r_mla_ .edgeLabels tspan[font-weight="normal"]{font-weight:600;}#chatgpt-mermaid-_r_mla_ .edgeLabel .label rect{opacity:1;rx:13px;ry:13px;fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-width:1px;}#chatgpt-mermaid-_r_mla_ .node rect,#chatgpt-mermaid-_r_mla_ .node circle,#chatgpt-mermaid-_r_mla_ .node ellipse,#chatgpt-mermaid-_r_mla_ .node polygon,#chatgpt-mermaid-_r_mla_ .node path{fill:rgb(229, 243, 255);stroke:rgba(0, 0, 0, 0.1);stroke-width:1px;}#chatgpt-mermaid-_r_mla_ .node rect{rx:16px;ry:16px;}#chatgpt-mermaid-_r_mla_ .node.mermaid-decision .label-container{fill:rgb(245, 250, 255);stroke:rgb(206, 219, 229);stroke-dasharray:2,2;}#chatgpt-mermaid-_r_mla_ .edgePaths .flowchart-link{stroke:rgb(206, 219, 229);stroke-width:1px;stroke-linecap:round;stroke-linejoin:round;}#chatgpt-mermaid-_r_mla_ .marker{fill:rgb(206, 219, 229);stroke:rgb(206, 219, 229);}#chatgpt-mermaid-_r_mla_ :root{--mermaid-font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;}Amazon Kindle所有書籍情報取得蔵書マスターDBNDL Search APINDC取得書誌から確定できるかNDC確定AIによる補完調査十分な確度か[999] その他NDC版を記録Kindle Collectionへ変換Kindle for WindowsGUI半自動化GUI自動化Cloud Collectionへ反映YesNoYesNo

100%

---

## 決定事項

- Kindle蔵書は引き続きNDCを軸に整理する。
- NDC取得を手作業中心から機械処理へ移す。
- NDL Search APIを主要なNDC情報源とする。
- AIは書誌照合・補完・例外判定を担当する。
- `[999] その他` は原則としてNDC未確定本の保留先とする。
- 判定できた999本は通常のNDC Collectionへ移してよい。
- 電子書籍限定本でもNDCを判定できれば通常分類して構わない。
- NDC番号だけでなく版を必ず保持する。
- 現在利用しているのはNDC新訂9版。
- NDC9とNDC10を暗黙に混在させない。
- Amazon内部の非公開Write APIによるCollection操作は基本的に採用しない。
- Amazon側からの所有書籍情報取得はDB構築目的で利用する。
- Kindleへの書き込みはKindle for Windowsの公式GUIを使う。
- Kindle for WindowsをWindows GUI自動化の練習台にする。
- GUI自動化は半自動から段階的に強化する。
- Amazonを蔵書分類情報の唯一の正本にしない。
- 蔵書DBとObsidianの読書・ZKノートは分離する。

---

## 未決事項

- NDC9を今後も継続するか
- NDC10へ段階移行するか
- NDC9→10の変換ルール
- Kindle全蔵書を取得する具体的方法
- 蔵書マスターをCSV・SQLite等のどれで持つか
- GUI自動化の主ツール
- Kindle for WindowsでASINを操作キーとして利用可能か
- タイトル検索を基本とするか
- 既存Collectionの完全な一覧と名称マッピング
- `[999] その他` 46冊の再分類
- 現在未整理のKindle本をどの単位で初回バッチ処理するか

---

## 次に進めること

実装前の次段階は、

1. Kindle for WindowsでCollection整理の実操作を確認する
2. Kindle蔵書情報を取得できる既存手段を比較する
3. 現在のCollection一覧を取得する
4. NDC9継続／NDC10移行を決める
5. 10〜20冊でNDL APIによる分類試験を行う
6. NDLで取得できない場合のAIフォールバック基準を決める
7. 蔵書マスターのデータ構造を決定する
8. Kindle for Windowsで半自動操作を試す
9. 単冊処理から少数バッチへ拡張する
10. 安定後、未分類本・`[999]` をまとめて処理する

---

## 関連ノート候補

このノートから今後分離するなら、次のPermanent／Structure候補が考えられる。

- `kindle-library-management-should-separate-classification-and-gui-automation.md`
    - NDC判定とKindleへの書き戻しを分離する設計思想
- `ndc-automation-must-preserve-edition-information.md`
    - NDC9／NDC10の版管理
- `gui-automation-should-start-with-confirmable-semi-automation.md`
    - 半自動→自動化の段階設計
- `bibliographic-database-should-be-independent-from-reading-notes.md`
    - 蔵書DBとObsidian読書ノートを分離する理由
- `kindle-for-windows-as-gui-automation-training-project.md`
    - KindleをGUI自動化の練習環境として使う方針

このスレッド全体としての中心的な考えは、**「本の分類を自動化する」のではなく、「読書を阻害していた蔵書整理業務を機械側へ移し、その過程をWindows GUI自動化の実践課題として再利用する」**ことである。