---
title: HTMLと実素材をAIへ渡す初期方式の説明
aliases:
  - サムネイル作成のプロンプト
type: fleeting
created: 2026-08-23T16:08:33+09:00
updated: 2026-09-23T18:45:30+09:00
id: 20260823-160833
permalink:
draft: true
tags:
  - ai-generated
---

# HTMLと実素材をAIへ渡す初期方式の説明

## 何を試そうとした記録か

対話で訴求・構成・素材・コピーを決め、HTMLと実素材を別スレッドまたは別のAIサービスへ渡して、完成サムネイルを生成させる方法を考えた記録である。ここではHTMLを、完成画像をブラウザで表示するデータではなく、次のAIが制作条件を読むためのデータとして扱おうとした。

この方法の実行用プロンプトは[HTMLと実素材からサムネイルを生成するためのプロンプト](thumbnail-ai-generation-prompt.md)に残す。方式そのものの試行と問題は[HTMLと実素材をAIへ渡す初期方式の試行総括](thumbnail-ai-html-generation-experiment-summary.md)、AIの再解釈を避けるための後続の検討は[AI生成方式からローカルHTML/CSS方式へ切り替えた判断](thumbnail-ai-generation-to-local-html-decision.md)を参照する。

## 当時、AIへ伝えようとしたこと

| 項目 | 内容 |
| --- | --- |
| 読み手 | 完成画像を生成する次のAI |
| HTMLの役割 | 構成、文字、素材、禁止事項を伝える制作条件 |
| 一緒に渡すもの | 施工写真などの実素材 |
| 求める出力 | 16:9の完成サムネイル画像 |
| 避けたい処理 | HTMLの画面そのもののスクリーンショット化、素材や文字の勝手な変更 |

## この方式で残った課題

HTMLの座標・余白・文字・素材の役割を細かく書いても、受け取ったAIが同じ意味で扱うとは限らなかった。完成画像を生成する過程で、文字や構成が変わる可能性が残る。そのため、後続では実素材をローカルHTML/CSSで配置・表示する方法を検討した。

## 関連記録

- 実行時に使った指示：[HTMLと実素材からサムネイルを生成するためのプロンプト](thumbnail-ai-generation-prompt.md)
- 縞鋼板案件での初期方式の試行総括：[HTMLと実素材をAIへ渡す初期方式の試行総括](thumbnail-ai-html-generation-experiment-summary.md)
- 用語と成果物の認識ずれ：[サムネイル制作で生じた用語と成果物の認識ずれ](thumbnail-production-terminology-communication-record.md)
