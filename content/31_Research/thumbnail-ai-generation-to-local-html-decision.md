---
title: AI生成方式からローカルHTML/CSS方式へ切り替えた判断
aliases:
  - サムネイル製作はHTML設計書からデザインフレームに素材を差し込むのが良い
type:
created: 2026-08-26T20:52:49+09:00
updated: 2026-09-23T22:00:58+09:00
id: 20260826-205249
permalink:
draft: true
tags:
  - ai-generated
---

# AI生成方式からローカルHTML/CSS方式へ切り替えた判断

## 判断の背景

HTMLと実素材をAIへ渡して完成画像を作らせる方式では、AIが文字・座標・余白・素材の扱いを改めて解釈する。その結果、対話で決めた構成を繰り返し確認・修正する必要があった。

そこで、当時「デザインフレーム」と呼んだHTMLへ実素材を差し込み、ブラウザ上で完成表示する方向を検討した。

## 比較した二つの方式

| 観点 | HTMLと素材をAIへ渡す | HTMLへ実素材を差し込み表示する |
| --- | --- | --- |
| 文字・座標・余白 | 生成時に変化し得る | HTML/CSSで指定した状態を表示できる |
| 実素材 | AIが再構成する余地がある | 指定した素材をそのまま配置できる |
| 修正 | 再生成と確認が必要 | CSSまたは素材差し替えで対応できる |
| 偶発的な見た目 | 生成で得られる可能性がある | 表示する構成の範囲に限られる |

## この時点の結論

完成サムネイルで文字・素材・配置を安定させたい場合は、AIへ完成画像を作らせるより、ローカルHTML/CSSで実素材を配置して完成表示する方が扱いやすい、と判断した。

ただし、AI生成を不要としたわけではない。不足素材の検討や構成案の比較など、完成表示の前段で使う余地は残した。

## 後続の記録

- 初期のAI生成方式：[HTMLと実素材をAIへ渡す初期方式の説明](thumbnail-ai-generation-approach.md)／[HTMLと実素材からサムネイルを生成するためのプロンプト](thumbnail-ai-generation-prompt.md)
- 実際のローカルHTML/CSSとDevTools出力：[ローカルHTML/CSSで表示したサムネイルの出力試行](thumbnail-local-html-devtools-export-experiment.md)
- 縞鋼板案件での試行：[HTMLサムネイル制作：AI生成の初回試行](html-thumbnail-ai-generation-initial-trial.md)／[HTMLサムネイル制作：AI生成の続行試行](html-thumbnail-ai-generation-continuation-trial.md)
- 用語と成果物の認識ずれ：[サムネイル制作で生じた用語と成果物の認識ずれ](thumbnail-production-terminology-communication-record.md)
