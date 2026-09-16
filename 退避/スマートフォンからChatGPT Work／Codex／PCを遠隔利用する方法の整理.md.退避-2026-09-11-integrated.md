---
title: スマートフォンからChatGPT Work／Codex／PCを遠隔利用する方法の整理
aliases:
  - スマートフォンからChatGPT Work／Codex／PCを遠隔利用する方法の整理
type: literature
created: 2026-09-02T03:40:15+09:00
updated: 2026-09-11T21:25:26+09:00
id: 20260902-034015
permalink:
draft: true
tags:
  - ai-generated
---

# スマートフォンからChatGPT Work／Codex／PCを遠隔利用する方法の整理

## このノートの役割

スマートフォンから、自宅や職場のPCにあるObsidian Vault、Excel、ローカルファイル、ChatGPT Work、Codexを扱いたいという相談を整理したLiterature Noteである。機能の提供範囲、Remote、権限、対応端末は変わり得るため、2026年9月時点の比較として扱い、実行前に公式資料と実際の画面を確認する。

## 問題の中心

論点は「スマホからChatGPTを使えるか」ではなく、次の二つを分けることである。

1. スマホからクラウド上の作業を開始・継続・確認したい。
2. スマホから、PC内のObsidianやExcelなどローカル資源を使う作業を進めたい。

クラウド上のWorkは対応するWeb・モバイル・デスクトップ環境で使える。一方、PC内のファイルやアプリを直接扱うLocal Workは、許可されたデスクトップ環境上で実行される。クラウド作業をスマホから開いても、PCのローカルファイル、アプリ、開いているブラウザタブへ直接アクセスすることにはならない。([OpenAI Docs: ChatGPT Workの概要](https://learn.chatgpt.com/fr-FR/docs/enterprise/chatgpt-work-overview), [OpenAI Docs: Local Workの安全性](https://learn.chatgpt.com/es-419/docs/enterprise/chatgpt-work-local-security))

## 三つの方法

| 方法 | 誰がPCを操作するか | PCローカル資源 | スマホからの利用 | 向く用途 |
| --- | --- | --- | --- | --- |
| Cloud Work | クラウド上のWork | 直接は扱わない | 対応環境で利用する | Web調査、クラウド上の資料、PCを必要としない作業。 |
| Codex Remote | 接続したPC上のCodex | Codexに許可された範囲で扱う | モバイルから指示・確認・承認する | PC上のCodexへ作業を任せる。 |
| Remote Desktop | 自分 | PC画面上で扱える範囲 | スマホからPC画面を操作する | PC版Work、Obsidian、Excelを自分で操作する。 |

Codex Remoteでは、モバイルアプリから接続したPC上のCodexを開始、指示、承認、確認できる。リポジトリと実行環境はスマホではなく接続先のPCに残る。([OpenAI Docs: WorktreesとRemote](https://learn.chatgpt.com/es-419/docs/environments/git-worktrees))

## 方式ごとの考え方

### Cloud Work

PC内のファイルを必要としない調査、クラウドブラウザ、ChatGPTへアップロードしたファイル、接続したAppを使う作業に向く。スマホから同じクラウド作業を進められるため、PCを遠隔操作する必要はない。

### Codex Remote

スマホからPC上のCodexへ指示し、ローカル資源を使う作業を任せる方式である。ChatGPT Desktop全体をスマホからマウス操作する機能とは区別する。ファイル操作の可否は、PC側のプロジェクト、権限、実行環境、承認に依存する。

### Remote Desktop

Chrome Remote DesktopやWindows Remote Desktopなどで、スマホからPCそのものを操作する方式である。PC版Workをそのまま使いたい場合、ObsidianやExcelの画面を直接確認したい場合、承認画面を自分で操作したい場合に向く。

Windows標準のRDPで接続される側になるには、通常はWindows Proなど対応するエディションが必要である。Windows Homeを使う場合は、Chrome Remote Desktopなど別の方式を検討する。PCは電源オン、ネットワーク接続、スリープ設定を確認しておく必要がある。Wake on LANは将来の拡張候補であり、最初から必須ではない。

## Obsidian整理に当てはめる

```text
クラウド作業だけで足りる
  → スマホからCloud Work

PC上のCodexにObsidian整理を任せたい
  → スマホからCodex Remote

PC版WorkやObsidianを自分で操作したい
  → Remote DesktopでPCへ接続
```

Markdown編集、YAML修正、ファイル移動、リネーム、大量処理が中心なら、Codexに任せる方式を比較する価値がある。一方、PC版Workの画面で調査・対話・承認を行いたいなら、Remote DesktopによるPC操作が分かりやすい。

## 実行前の確認

- 何を遠隔で行いたいかを、指示追加、結果確認、Obsidian整理、Excel処理、PC画面の直接操作に分ける。
- ローカルファイルが必要か、PC版Workを使う必要があるかを確認する。
- 接続先PCの電源、ネットワーク、スリープ、リモート接続の設定を確認する。
- Local Work、Codex、接続したAppの権限と、送信・削除・上書きの承認条件を確認する。
- 外出先から初めて実行する前に、自宅内で短いテストを行う。

## まとめ

クラウドだけで完結する作業はスマホからCloud Workを使う。PC上のCodexへ作業を任せるならCodex Remoteを使う。PC版WorkそのものやPCアプリを自分で操作したいなら、Remote DesktopでPCへ接続する。この三つを混同しないことが、スマホからの遠隔利用を選ぶ基準になる。
