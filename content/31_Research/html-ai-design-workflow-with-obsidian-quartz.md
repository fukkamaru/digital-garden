---
title: HTMLを使ったAI時代のデザイン・資料作成と、Obsidian / Quartzとの関係
aliases:
  - HTMLを使ったAI時代のデザイン・資料作成と、Obsidian / Quartzとの関係
type: literature
created: 2026-08-30T23:18:25+09:00
updated: 2026-08-30T23:18:25+09:00
id: 20260830-231825
permalink:
draft: false
tags:
  - ai-generated
---
以下に、チャット開始からここまでの内容を、後からZKや設計判断に使える形で整理します。

## HTMLを使ったAI時代のデザイン・資料作成と、Obsidian / Quartzとの関係

### 1. 起点：HTML形式でサムネイルを作る最近の流れ

最初に、「最近流行している、HTML形式を使ったサムネイルデザイン制作について解説している日本語サイト」を調査した。  
確認できた主な流れは、単にWebページを作るためのHTMLではなく、**HTML/CSSをデザインデータそのものとして扱う**方法。  
代表的な日本語記事として以下のような事例が見つかった。

- Zenn「YouTubeサムネ作りがわからなさすぎて、AIにHTML/CSSで作ってもらった」
    - AIに1280×720固定のHTML/CSSを生成させる
    - ブラウザ上で表示確認
    - PlaywrightなどでPNG化
    - 「文字を大きく」「吹き出しを上へ」などの修正も自然言語でAIに指示
- note「Canvaをやめて、HTML+CSSでnoteのサムネを量産している」
    - HTML/CSSをサムネイルテンプレートとして保存
    - AIに特定部分だけ変更させる
    - Gitによる差分管理も可能
    - Headless Chromeなどで画像化
- note「毎回AIに頼んでいたnoteサムネ作成を、HTMLツール化してみた」
    - HTML/CSS/JavaScript/Canvas APIでサムネイル生成ツール自体を作る
    - 毎回ゼロから画像生成するのではなく、テンプレート＋差し替えで量産
- Claude Codeなどを利用し、HTML/CSS → Playwright → PNGという制作フローを自動化する事例もある  
    この流れから、「HTMLでサムネイルを作る」には少なくとも次の3系統があると整理した。  
    |方式|HTMLの役割|完成物|  
    |---|---|---|  
    |HTMLレンダリング型|HTML/CSSそのものが完成デザイン|ブラウザやPlaywrightでPNG化|  
    |HTMLツール型|HTML上に制作UIやテンプレートを構築|Canvas等からPNG化|  
    |HTML設計書型|AIにレイアウト・素材・座標・制約を伝える機械可読仕様|AIや別レンダラーがPNG生成|  
    特に日本語圏で記事が増えているのは、現時点では上2つ。  
    一方で、**HTMLをAI向けの「デザイン設計書」として使う方式**は、それ自体を正面から説明した日本語記事はまだ少ない。  
    ただし、「AIに扱わせる成果物を画像ではなく構造化テキストとして保持する」という考え方そのものは増えている。

### 2. 動画でも同じ流れがあり、JSONが重要

ユーザーから「動画では静止画やJSONファイルで作る話もある」と指摘があり、その通りだと整理した。  
動画では特に、  
**素材＋構造化された設計データ → レンダリング → MP4**  
という方式が自然。  
代表例としてRemotionがある。  
典型的には、

```text
project.json
├─ 動画全体
│  ├─ 解像度
│  ├─ fps
│  └─ BGM
├─ Scene 01
│  ├─ 開始時間・長さ
│  ├─ image_01.png
│  ├─ テキスト
│  └─ animation
├─ Scene 02
│  ├─ image_02.png
│  ├─ narration.wav
│  └─ fade
└─ ...
```

という構成になる。  
素材は、

```text
project.json
image_01.png
image_02.png
narration.wav
bgm.mp3
```

のように分離して管理。  
レンダラー側が、

```text
JSONを読む
↓
画像配置
↓
テロップ描画
↓
音声配置
↓
アニメーション
↓
MP4
```

を実行する。  
JSON動画にも2種類あると整理した。

- JSONを「動画編集・設計指示書」として使う
    - Scene
    - Duration
    - Image
    - Text
    - Animation
    - Audio
    - などを記述
    - RemotionやFFmpeg、自作レンダラーで動画化
- JSON自体がアニメーションデータである
    - 代表例はLottie
    - 座標、色、形状、ベジェ曲線、キーフレームなどをJSONに保持  
        ここから、現在のAI制作には共通して、

```text
人間
↓
自然言語
↓
AI
↓
HTML / JSON / TSX等
↓
レンダラー
↓
PNG / MP4
```

という構造が現れていると整理した。  
重要なのは、**完成画像や完成動画をAIが直接編集するのではなく、「編集可能な構造化設計データ」をAIに変更させる**という点。

### 3. HTMLとObsidianの関係

次に、「HTMLの利用が増えた場合、Obsidianとの相性はどうか」という話へ進んだ。  
最初はこちらがMarkdownとの役割分担まで広げてしまったが、ユーザーから、

> 聞きたいのはObsidianとHTML。Markdown抜きで話して。  
> と修正が入った。  
> その前提で整理し直した結論は、  
> **ObsidianはHTMLファイルの保管・管理場所としては十分使える。ただし、標準状態ではHTML文書の編集・表示は主力機能ではない。**  
> Vault内には普通に、

```text
Project/
├─ document.html
├─ style.css
├─ script.js
└─ assets/
   ├─ photo.jpg
   └─ logo.png
```

のようなWebプロジェクト構成を置ける。  
ただしObsidian標準だけでは、ローカルHTMLをChromeのように完全レンダリング・編集する用途には弱い。  
一方、コミュニティプラグインではHTML用途がかなり補強されている。  
確認した例：

- HTML V Editor
    - Preview
    - Visual Edit
    - Source
    - Save
    - をObsidian内で切り替え
- HTML Docs
    - HTMLをObsidian内で文書として表示
    - sandboxed iframeを利用
    - JavaScript実行にも対応する構成
- HTML Preview系
    - ローカルHTTPサーバーを使いHTML/CSS/JS/画像を表示
    - 保存時にリロード
    - VS Code Live Previewに近い運用  
        このため、

```text
Obsidian
↓
HTML / CSS / JS / JSON / 画像の保存
↓
Obsidian内で閲覧・編集
↓
必要に応じてChromeで最終確認
```

という使い方は十分可能。  
ただし最終表示精度が重要なHTMLについては、Chromeなど通常ブラウザを最終レンダラーとした方が安全。  
理由は、

- CSP
- iframe sandbox
- JavaScript制限
- file://参照
- ローカル画像
- フォント
- ブラウザAPI  
    などがObsidian内とChromeで異なる可能性があるため。

### 4. HTMLファイルとQuartzの関係

次に、「Obsidian Vault内に増えていくHTMLとQuartzの関係」を検討した。  
ここでは当初、  
**HTMLを独立したHTMLファイルとして置いた場合**  
について説明した。  
Quartzでは、content配下にあるHTMLなどの非Markdownファイルは、基本的に静的アセットとしてそのまま出力できる。  
例えば、

```text
content/
└─ thumbnail/
   ├─ design01.html
   ├─ design02.html
   └─ assets/
```

なら、Quartzビルド後もHTMLファイルとしてWeb上に配置できる。  
その場合、

```text
https://example.com/thumbnail/design01.html
```

のように直接アクセスできる。  
ただし、このHTMLは通常のQuartzコンテンツページとは扱いが異なる。  
つまり、

```text
HTML
↓
そのまま静的ファイルとしてコピー
↓
独立したWebページ
```

となる。  
Quartz側が通常のコンテンツとして処理して、

- Quartzテーマ
- 左右サイドバー
- Graph View
- Backlinks
- 全文検索
- ページインデックス  
    などへ自動的に統合するわけではない。  
    整理すると、  
    |機能|独立HTML|  
    |---|---|  
    |Quartzから配信|可能|  
    |直接URLで開く|可能|  
    |独自HTML/CSS|可能|  
    |JavaScript|基本的に可能|  
    |Quartzテーマ自動適用|しない|  
    |Graph Viewノード|基本的に対象外|  
    |Backlinks|基本的に対象外|  
    |Quartz全文検索|基本的に対象外|  
    この性質は、**サムネイル設計書・デモ・独立成果物としてHTMLを置く用途にはむしろ都合がよい**。

### 5. Quartz公開時の重要な注意

Vault内にHTMLを置く場合、Quartzによる公開範囲には注意が必要。  
通常の非公開ノートの感覚で、

```text
content/
└─ Internal/
   └─ confidential.html
```

を置くと、そのHTML自体が静的ファイルとして公開対象になる可能性がある。  
そのため、公開したくないHTMLはQuartzの`ignorePatterns`などで除外する必要がある。  
HTMLが増える場合は、

```text
HTML/
├─ Public/
└─ Private/
```

のように、最初から公開・非公開を物理的に分ける設計も候補になる。

### 6. 今回まだ十分に回答できていない重要論点

最後にユーザーが質問したのは、ここまでとは少し違う。

> アセットではなく文章や資料としてHTMLを使う場合におけるObsidianとQuartzはどうなる？  
> それこそZKに保存するつもりだったら？  
> これは、これまで説明していた  
> **「HTMLを独立ファイル／アセット／設計成果物として保存する」**  
> 話ではない。  
> 論点は、  
> **HTMLをZK（Zettelkasten）の「ノート本文そのもの」として使った場合、ObsidianとQuartzが知識管理システムとしてどう機能するか**  
> というもの。  
> ここはまだこのチャットでは回答を完了していない。

この問題では少なくとも以下を分けて考える必要がある。

- Obsidianは`.html`を「ノート」としてどこまで認識できるか
- HTML内のリンクをObsidianの内部リンク・Backlink・Graphとして扱えるか
- 検索・タグ・プロパティ・リンク解析がHTMLでも成立するか
- QuartzはHTML本文を「Content」として解析・インデックスできるか
- HTMLをQuartzページとしてレンダリングするのか、単なる静的ファイルとして扱うのか
- ZKで重要な、
    - ノート間リンク
    - Backlink
    - Graph
    - ID
    - タグ
    - 検索
    - 引用
    - メタデータ  
        がHTMLベースでも維持できるか
- HTMLをZKのSource of Truthにする場合にQuartzをカスタマイズする必要があるか

つまり、次に検討すべき本題は、

```text
HTMLを「成果物」として持つ
```

ではなく、

```text
HTMLを「知識ノートのネイティブ形式」として持つ
```

場合の成立性。

これはかなり大きな違いがある。

### 7. 現時点での全体像

ここまでの議論をまとめると、

```text
AI時代の制作
│
├─ サムネイル
│  └─ HTML/CSS
│
├─ 動画
│  └─ JSON / TSX / Remotion
│
├─ アニメーション
│  └─ Lottie JSON
│
└─ 資料・文書
   └─ HTMLを構造化文書として使う流れ
```

という方向性が見えてきた。  
共通する思想は、  
**「完成物だけを保存するのではなく、AIが読み書きできる構造化された中間表現を保存する」**  
こと。  
そのためHTMLは、

- 人間がブラウザで読める
- AIが構造として解析できる
- CSSで視覚表現まで持てる
- JavaScriptも組み込める
- Gitで差分管理できる
- ブラウザという普遍的なレンダラーがある  
    という性質から、単なるWeb制作言語を超えて「AI時代の文書・設計表現」として注目されている。  
    一方で、ObsidianとQuartzはもともとHTMLノートを第一級の知識ノードとして扱う設計ではないため、**ZKそのものをHTMLベースへ寄せる場合は、単にHTMLをVaultへ保存できるかどうかとは別の検討が必要**。

## 現時点の決定・未解決事項

- HTML/CSSでサムネイルを構造化して作る流れは実際に増えている。
- 動画でもJSONやTSXなどを中間表現として使う同様の流れがある。
- Obsidian Vault内にHTML/CSS/JS/JSON/画像を保存・管理すること自体は問題ない。
- Obsidian内でHTMLを閲覧・編集するコミュニティプラグインも存在する。
- Quartzは独立HTMLを静的ファイルとして配信できる。
- ただし独立HTMLは通常のQuartzコンテンツとしてGraph・Backlink・検索等へ自動統合されるわけではない。
- 公開したくないHTMLはQuartzのビルド対象から明示的に外す必要がある。
- **未解決の本題：ZKのノート本文をHTMLで保存する場合に、Obsidian・Quartzの知識管理機能をどこまで維持できるか。**
- 次に検討すべきなのは「HTMLをアセットとして扱う場合」ではなく、**「HTMLをZKの第一級ノート形式にした場合のObsidian / Quartzアーキテクチャ」**。