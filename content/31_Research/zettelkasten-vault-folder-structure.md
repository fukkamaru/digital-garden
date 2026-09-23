---
title: ツェッテルカステン向けのVaultのフォルダ構成
aliases:
  - ツェッテルカステン向けのVaultのフォルダ構成
type: literature
created: 2026-08-30T16:51:21+09:00
updated: 2026-09-23T18:45:30+09:00
id: 20260830-165121
permalink:
draft: true
tags:
  - ai-generated
---
このVaultでは、保存フォルダ、Zettelkasten上の役割、情報の由来を別の軸として扱う。

## 現在のフォルダ構成

```text
content/
├─ 01_Templates
├─ 02_images
├─ 10_Analytics
├─ 20_Journal
├─ 21_Reading
├─ 30_Inbox
├─ 31_Research
└─ 32_Zk
```

| フォルダ | 役割 |
| --- | --- |
| `01_Templates` | Obsidian用テンプレート |
| `02_images` | 画像 |
| `10_Analytics` | Vault内の分析・一覧・変更履歴 |
| `20_Journal` | 実際に行ったことの記録 |
| `21_Reading` | 読書という活動の記録 |
| `30_Inbox` | 思いつきや未整理情報の一時置き場 |
| `31_Research` | 一次資料やAI回答から作成した参照資料・調査結果 |
| `32_Zk` | Zettelkasten本体 |

フォルダ構成は情報の保存場所と運用上の役割を示す。ノートの種類そのものはYAMLの`type`で表す。

## `type`と保存フォルダを分ける

正式な`type`は次の5種類。

- `fleeting`
- `literature`
- `permanent`
- `structure`
- `index`

たとえば、`type: literature`だから必ず`32_Zk`へ置く、という関係ではない。`31_Research`にも`32_Zk`にもLiterature Noteは存在し得る。

- `31_Research`のLiterature Note：AI回答、引用、調査結果など、ユーザー自身の言葉に十分直していない参照資料
- `32_Zk`のLiterature Note：外部情報をユーザー自身の言葉で整理したカード

既存ノートは、`type`や内容だけを理由に自動で移動しない。

## 情報の由来は`tags`で表す

`type`がノートの役割を表すのに対し、`tags`は情報の由来や属性を表す。

- `field`：外部環境で実際に経験したこと
- `reading`：ユーザー自身の読書記録
- `ai-generated`：最終的な思考・主張の主体がAIであるもの

単にAIを一部利用しただけでは`ai-generated`にしない。`field`と`reading`は、人間側の判断なしにAIが推測して付けない。

## 知識処理の流れ

```text
30_Inbox ──→ 31_Research
        └──→ 32_Zk

31_Research ──→ 32_Zk
20_Journal ───→ 32_Zk
21_Reading ───→ 32_Zk
```

矢印は必ず移動や昇格を行うという意味ではない。

- Researchは参照資料として完成した状態で残してよい
- JournalやReadingも、それぞれの活動記録として残してよい
- 新しい考えが生まれた場合だけ、別のZettelを作って元ノートと接続する
- ResearchとZKは相互にリンクしてよい

この考え方により、AI調査結果を毎回Permanent Noteへ書き直す負担を減らしながら、必要な情報を検索可能な状態で保持できる。

## フォルダ設計の理由

過去には、未処理メモを`20_Notes`でも管理していた。しかし、`30_Inbox`と役割が重なり、処理先が分かれたため廃止された。

現在は、次の違いが見えるように配置している。

- `20_Journal`：実際に行ったこと
- `21_Reading`：読書したこと
- `30_Inbox`：未整理
- `31_Research`：参照可能な調査資料
- `32_Zk`：Zettelkastenとして編み込むカード

この構成は、フォルダだけで知識を完全分類するためではない。保存場所を安定させながら、カード間の関係をリンクで育てるための土台である。

## 関連ノート

- [Quartzにおけるノートの管理設計](quartz-note-management-design.md)
- [外部環境で得た知識と内省知の切り分け方](separating-external-and-reflective-knowledge.md)
- [知識や経験を自分のネットワークに編み込んでいく](weaving-knowledge-into-zettelkasten.md)
- [活動記録はジャーナルとして残す](keep-activity-logs-as-journal.md)
- [読書習慣を取り戻すための仕組みを作る](building-a-reading-folder-to-rebuild-the-habit.md)
