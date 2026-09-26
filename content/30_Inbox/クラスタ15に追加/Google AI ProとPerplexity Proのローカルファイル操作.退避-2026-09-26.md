---
title: Google AI ProとPerplexity Proのローカルファイル操作
aliases:
  - Google AI ProとPerplexity Proのローカルファイル操作
type:
created: 2026-09-21T08:37:42+09:00
updated: 2026-09-21T08:37:42+09:00
id: 20260921-083742
permalink:
draft: true
tags:
  - ai-generated
---
# Google AI ProとPerplexity Proのローカルファイル操作

Google AI ProやPerplexity Proは、通常のWebチャットだけを見ると「ファイルをアップロードして分析するAI」に見えるが、2026年時点ではそれぞれ別の実行環境を通して、PC上のローカルファイルを直接扱えるようになっている。

重要なのは、**有料プランそのものが直接PCを操作するのではなく、ローカル操作機能を持つ別のツールやデスクトップ環境と組み合わせる**という点である。

---

## Google AI Proとローカルファイル操作

Google AI ProのGemini Web版やモバイルアプリには、PC内の任意のフォルダを直接読み書きする機能はない。

通常のGeminiでは、

```
ローカルファイル
      ↓
ユーザーがアップロード
      ↓
Geminiが分析
```

という形になる。

一方で、Googleには **Gemini CLI** があり、こちらをPC上で実行することでローカルファイルを直接操作できる。

```
Google AI Pro
│
├─ Gemini Web / アプリ
│   └─ ファイルをアップロードして分析
│
├─ Gemini CLI
│   └─ PC上のファイル・フォルダを直接操作
│
├─ Gemini Code Assist
│   └─ IDE内での開発支援
│
├─ Google Antigravity
│   └─ エージェント型の開発環境
│
└─ Gmail / Docs / Drive等
    └─ Googleクラウド側のデータを扱う
```

したがって、

> Google AI Proならローカルファイルを操作できる

という表現より、

> **Gemini CLIなどを利用すればローカルファイルを操作でき、Google AI Proはその利用枠やモデルアクセスを強化する**

と理解する方が正確である。

---

## Gemini CLI

Gemini CLIは、GoogleのGeminiをターミナルから利用するためのエージェント型ツールである。

単なる「コマンドライン版Gemini」ではなく、ファイルシステムやシェルを操作するためのツールを持っている。

主な操作は次のようになる。

|操作|Gemini CLI|
|---|---|
|ファイルを読む|○|
|複数ファイルを読む|○|
|ファイル名・本文を検索|○|
|Markdownを読む|○|
|PDF・画像等を読む|○|
|新規ファイルを作成|○|
|ファイル内容を編集|○|
|ファイルを上書き|○|
|フォルダを調査|○|
|ファイルをリネーム|○|
|ファイルを移動|○|
|ファイルを削除|○|
|PowerShell等を実行|○|
|Python等を実行|○|
|Git操作|○|

読み書きについてはGemini CLI自身のファイル操作ツールを利用できる。

リネーム、移動、削除、Git、Pythonなどについては、シェルコマンドを実行することで対応できる。

つまり、

```
AI
 ↓
Gemini CLI
 ↓
Windows / PowerShell
 ↓
ローカルファイル
```

という経路になる。

---

## Obsidianとの相性

Gemini CLIの用途として、自分のObsidian Vaultはかなり相性がよい。

たとえば、

```
Vault
│
├─ 30_Inbox
├─ 31_Research
├─ 32_Zk
└─ 04_Context
```

というVaultがあれば、Vaultを作業ディレクトリとしてGemini CLIを起動し、

1. Research内のノートを検索する
2. 関連する既存ZKノートを探す
3. 必要なファイルのみ読む
4. 内容を比較する
5. 重複・補完・矛盾を調べる
6. Markdownを編集する
7. リンクを追加・修正する
8. ファイルを移動・リネームする
9. Git diffで変更内容を確認する

といった処理が可能になる。

重要なのは、Vault全体を毎回LLMのコンテキストに投入する必要がないことである。

```
Vault全体
   ↓
検索
   ↓
候補ノートを絞る
   ↓
必要なファイルだけ読む
   ↓
判断
   ↓
編集
```

というエージェント型の処理になる。

そのため、数百・数千ノート規模になっても、「全ノートを一度にプロンプトへ入れる」という使い方をする必要はない。

---

## Gemini CLIの安全性

Gemini CLIはローカルファイルを書き換えられるため、権限制御が重要になる。

特に注意すべき操作は、

- ファイル上書き
- 一括置換
- ファイル移動
- リネーム
- 削除
- シェルコマンド
- Git操作

である。

こうした処理については承認フローを利用できる。

また、AIから除外したいファイルは `.geminiignore` などによって制御できる。

例：

```
.env
private/
secrets.md
02_images/
```

Git管理しているVaultなら、

```
作業開始
 ↓
git status
 ↓
Gemini CLIで編集
 ↓
git diff
 ↓
人間が確認
 ↓
必要なら確定
```

という運用にすると安全性を高められる。

特にObsidianでは、AIに自由な削除やリネームまで許可するより、

- 読み込み・検索は比較的自由
- 本文編集は承認
- 移動・リネームは承認
- 削除は必ず人間確認

のように権限を分けた方が安全である。

---

## Google AI ProとGemini CLIの関係

Gemini CLIそのものは、Google AI Pro専用ではない。

無料のGoogleアカウントでも利用できる。

Google AI Proを契約すると、

- Geminiの上位モデル
- より大きな利用枠
- Gemini関連サービス
- Google WorkspaceとのAI統合
- Notebook系機能
- AI生成系機能
- ストレージ

などをまとめて利用できる。

したがって、

```
Google AI Pro契約
      ↓
Gemini CLIが使える
```

ではなく、

```
Gemini CLI
├─ 無料Googleアカウントでも利用可能
│
└─ Google AI Pro
    └─ 利用枠や利用可能モデル等が強化
```

という関係になる。

ローカルファイル操作そのものを目的にGoogle AI Proを契約する、というより、

> **Gemini、Deep Research、Gemini CLI、Workspace統合などをまとめて利用するプラン**

として評価する方がよい。

---

## Gemini APIとは別

Google AI ProとGemini APIも別物として考える必要がある。

Google AI Proの月額料金を払えば、Gemini APIを無制限に利用できるという意味ではない。

Gemini CLIでは、

- Googleアカウントによるログイン
- Gemini API
- Google Cloud / Vertex AI

など複数の認証・課金経路を利用できる。

したがって、

```
Google AI Pro
 └─ サブスクリプション

Gemini API
 └─ APIとして別の料金体系
```

と区別する。

Gemini CLIをAI Proの利用枠で使いたい場合は、通常はGoogleアカウントによる認証を利用することになる。

---

## Google Antigravity

GoogleにはGemini CLIとは別に、エージェント型開発環境の **Google Antigravity** も存在する。

Gemini CLIがターミナル中心なのに対し、Antigravityは、

- エディタ
- ターミナル
- ブラウザ
- AIエージェント

を組み合わせた開発環境に近い。

```
Gemini CLI
└─ Terminal中心
   ├─ Files
   ├─ Shell
   ├─ Git
   └─ Scripts

Antigravity
└─ GUI型開発環境
   ├─ Editor
   ├─ Terminal
   ├─ Browser
   └─ Agents
```

ただし、一般的なPC操作エージェントというより、現状はソフトウェア開発用途に寄っている。

MarkdownやObsidian Vaultの整理だけを目的とするなら、Gemini CLIの方が用途を理解しやすい。

---

## Perplexity Proの場合

Perplexityについても、Web版とローカルPC操作機能は分けて考える。

通常のPerplexity Webでは、ローカルファイルは基本的にアップロードして利用する。

一方、Perplexityのデスクトップ環境・Personal Computer系機能では、許可したローカルフォルダに対して、

- ファイル検索
- 読み込み
- 作成
- 編集
- リネーム
- 移動
- 整理
- 削除

などを行える。

構造としては、

```
Perplexity Web
└─ 検索・Research・ファイルアップロード

Perplexity Desktop / Personal Computer
└─ PC操作
   ├─ ローカルファイル
   ├─ フォルダ
   └─ デスクトップ作業
```

となる。

Gemini CLIがCLI・開発ツール寄りなのに対して、Perplexityは人間が行うデスクトップ作業を代行する方向に近い。

---

## Gemini CLIとPerplexityの違い

両方ともローカルファイルを扱えるが、思想が異なる。

|項目|Gemini CLI|Perplexity Personal Computer系|
|---|---|---|
|主な操作環境|ターミナル|デスクトップエージェント|
|ローカルファイル検索|○|○|
|Markdown編集|○|○|
|ファイル整理|○|○|
|シェルコマンド|**強い**|主目的ではない|
|Git|**強い**|主目的ではない|
|Python等の実行|**強い**|主目的ではない|
|開発用途|**強い**|弱め|
|一般的なPC作業|○|**強い**|
|Web調査|○|**非常に強い**|

そのため、

> 「フォルダ内の資料を調べて整理する」

なら両方が候補になる。

一方、

> 「Obsidian Vaultを検索し、Markdownを書き換え、Git diffを確認し、必要ならPythonで一括処理する」

という用途になると、Gemini CLIの性格により近い。

---

## ローカルAI作業ツールとして考える

2026年現在、主要AIサービスは単純なWebチャットだけでは比較しにくくなっている。

```
ChatGPT
└─ Work / Computer系

Claude
└─ Claude Code

Google
└─ Gemini CLI / Antigravity

Perplexity
└─ Personal Computer系
```

それぞれに「PCやファイルを直接扱うエージェント」が存在する。

このため、サービスを比較するときはモデル単体の性能だけでなく、

- ローカルファイルを扱えるか
- 複数ファイルを横断できるか
- ファイルを書き換えられるか
- 長時間・複数工程を自律実行できるか
- CLIかGUIか
- Gitやシェルを扱えるか
- 人間の承認をどこで要求するか
- MCPや外部ツールを利用できるか
- 利用制限
- コンテキスト保持
- Web調査能力

まで比較する必要がある。

---

## 自分のObsidian運用との関係

自分の用途では、単なる文章生成能力よりも、

> **既存のVaultを安全に読み、必要なノートだけを発見し、過去のルールを守りながら実際に編集できること**

の方が重要になる。

想定している処理には、

- Inbox / Researchの整理
- 既存ZKとの照合
- 重複・補完・矛盾の確認
- Permanent化候補の抽出
- Markdownリンクの追加・修正
- 本文編集
- ファイル移動
- リネーム
- 作業ログ更新

などがある。

この用途ではGemini CLIはかなり有力な候補になる。

ただし、ローカルファイルを操作できること自体と、**大量の既存ルールや文脈を正確に守り続けられることは別問題**である。

そのため実運用では、

```
AI Start Here
      ↓
必要なContextを読む
      ↓
対象クラスタを検索
      ↓
変更案
      ↓
人間確認
      ↓
編集
      ↓
diff確認
      ↓
ログ記録
```

というワークフローを維持する必要がある。

AIがローカル操作できるからといって、Vault全体への無制限な自動変更を許可するべきではない。

---

## 結論

Google AI Proについて重要なのは、Gemini Webだけで評価しないことである。

Google AI Proそのものはローカルファイル操作機能ではないが、GoogleにはGemini CLIというローカル実行エージェントがあり、これを利用することでPC上のファイルを直接読み書きできる。

特にObsidianでは、

- ノート検索
- 複数ノート読込
- Markdown編集
- 新規ノート作成
- リンク修正
- ファイル移動・リネーム
- Git操作
- Python等による処理

まで行える。

Gemini CLIは無料でも利用でき、Google AI Proはその利用環境を強化する位置づけになる。

Perplexity ProについてもローカルPC操作機能が存在するが、Gemini CLIがCLI・開発・ファイルシステム操作寄りなのに対し、Perplexityは検索と一般的なデスクトップ作業を組み合わせる方向に近い。

自分の用途では、Google AI Proを検討する際には、

> 「Geminiのチャット性能」

だけではなく、

> **Gemini + Deep Research + Gemini CLI + Googleサービス連携を一つの契約としてどこまで活用できるか**

で判断する必要がある。

また、Obsidianの大規模整理用途では、Google AI Pro単体の評価よりも、

**ChatGPT Work / Claude Code / Gemini CLI / PerplexityのPC操作機能**

を同じ条件で比較する方が、最終的なサービス選択には有用である。