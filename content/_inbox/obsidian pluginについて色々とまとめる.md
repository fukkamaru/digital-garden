---
title: obsidian pluginについて色々とまとめる
type: fleeting
created: 2026-04-26T17:26:54+09:00
updated: 2026-04-26T17:26:54+09:00
id: 20260426-172654
aliases:
  - obsidian pluginについて色々とまとめる
permalink:
draft: false
source:
---
結論から言うと、これらは役割で3グループに分かれる：

- **データ管理系（Dataview / Linter / front matter title / update time）**
- **自動化系（QuickAdd / Templater）**
- **UI・操作系（Recent Files / 2hop / file tree / tables / git）**

その前提で、**一覧＋デメリット＋ZK＋Quartz視点**でまとめる。

---

# 全体像（ざっくり結論）

|プラグイン|重要度|一言|
|---|---|---|
|Dataview|★★★★★|データベース化|
|Linter|★★★★☆|YAML品質管理|
|QuickAdd|★★★☆☆|作業自動化|
|Templater|★★★★☆|テンプレ拡張|
|front matter title|★★★★☆|表示とURL分離|
|update time on edit|★★★☆☆|更新管理|
|git|★★★★☆|バージョン管理|
|advanced tables|★★☆☆☆|表編集|
|2hop links plus|★★☆☆☆|関係発見|
|file tree alternative|★★☆☆☆|UI改善|
|Recent Files|★☆☆☆☆|ほぼ不要|

---

# ① Dataview

### 何ができる

- YAMLを元に一覧・検索・抽出（DB化）
- SQLっぽいクエリ

### デメリット

- Quartzにそのまま出ない
- 設計ミスると崩壊
- 学習コストあり

### Zettelkasten

- ノートを「ネットワーク＋データ」に昇格
- structure noteが強化

👉 **最重要プラグイン**

### Quartz

- 直接使えない
- 内部管理専用として割り切る

---

# ② Linter

### 何ができる

- Markdown/YAMLの自動整形
- 日付・キー統一

### デメリット

- 設定が多く沼
- 意図しない書き換え

### Zettelkasten

- ノートの一貫性維持（超重要）

### Quartz

- HTML化の安定性向上
- 崩れ防止

---

# ③ QuickAdd

### 何ができる

- ノート作成・入力の自動化
- テンプレ・マクロ・キャプチャ

### デメリット

- 設定が複雑
- 初期は過剰

### Zettelkasten

- フリーティング入力が高速化

### Quartz

- 間接的（生成効率UP）

---

# ④ Recent Files

### 何ができる

- 最近開いたノート一覧

### デメリット

- 標準機能で代替可能
- 本質に関係ない

### Zettelkasten

- ほぼ意味なし

### Quartz

- 無関係

---

# ⑤ 2hop links plus

### 何ができる

- 「リンクのリンク」表示（2階層関係）

### デメリット

- 情報過多
- ノイズになりやすい

### Zettelkasten

- 関係発見に役立つ
- セレンディピティ強化

### Quartz

- 使えない

---

# ⑥ advanced tables

### 何ができる

- Markdown表の編集補助

### デメリット

- Dataviewがあれば優先度低い

### Zettelkasten

- 表ベース整理に便利

### Quartz

- そのまま表示されるので相性○

---

# ⑦ file tree alternative

### 何ができる

- ファイルツリーUI改善

### デメリット

- 本質機能ではない
- type運用と相性悪い

### Zettelkasten

- フォルダ依存になる危険

### Quartz

- 無関係

---

# ⑧ front matter title

### 何ができる

- YAMLのtitleを表示名にする

### デメリット

- 設定しないと混乱

### Zettelkasten

- ノート名と概念名を分離できる（重要）

👉 例  
ファイル名：`anti-slip-coating.md`  
表示名：あれろえれろ塗装

### Quartz

- URL英語＋表示日本語が可能

👉 **かなり重要**

---

# ⑨ git

### 何ができる

- 自動バックアップ・履歴管理

### デメリット

- 初期設定が面倒

### Zettelkasten

- 思考の履歴が残る

### Quartz

- GitHub連携でそのまま公開

👉 **実質必須**

---

# ⑩ templater

### 何ができる

- 動的テンプレ（JS可）
- 日付・変数展開

### デメリット

- 書き方が難しい
- Dataviewと混同しやすい

### Zettelkasten

- リテラチャー/パーマネントの型を固定

### Quartz

- YAML生成に効く（間接的）

---

# ⑪ update time on edit

### 何ができる

- 更新日自動更新

### デメリット

- 更新頻度がノイズになる場合あり

### Zettelkasten

- 知識の鮮度管理

### Quartz

- 更新順表示に使える

---

# 最終結論（あなた向け）

## 必須

- Dataview
- Linter
- front matter title
- git

---

## あった方がいい

- templater
- update time on edit

---

## 状況次第

- QuickAdd
- 2hop links

---

## いらない寄り

- Recent Files
- file tree alternative
- advanced tables（優先低）