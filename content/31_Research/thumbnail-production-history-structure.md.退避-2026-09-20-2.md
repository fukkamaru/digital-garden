---
title: サムネイル制作方式の探索：Cluster 04 の記録構造
aliases:
  - Cluster 04 サムネイル制作方式の探索
type: structure
created: 2026-09-20T06:30:00+09:00
updated: 2026-09-23T22:00:58+09:00
id: 20260920-063000
permalink:
draft: true
---

#  

> [!important] 読み方
> 当時、ユーザーは「ワイヤーフレーム」や「デザインカンプ」という用語を制作指示として用いていなかった。記録中の「デザインフレーム」「設計図」「設計書」は、当時の会話で使われた言葉、またはAIが提示した説明である。現在の用語で説明するPermanent Noteは、この記録群を精査した後の **04-Extra** で別に作る。

## このクラスタで起きたこと

| 時期・段階                | 当時の問い                               | 記録                                                                                                       |
| -------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 1. 制作工程を考え始めた段階      | 対話で何を決め、HTMLへ何を渡せば再現できるのか。          | [[planning-thumbnail-workflow-structure]]／[[planning-thumbnail-workflow-table]]                          |
| 2. 実案件でブリーフを固めた段階    | 訴求・素材・禁止事項をAIとの対話で決められるか。           | [[preparing-youtube-thumbnail-creative-brief]]                                                           |
| 3. 初期のAI生成方式         | HTMLと素材を次のAIへ渡し、完成画像を作らせられるか。       | [[サムネイル作成のプロンプト]]／[[HTMLからサムネイルを作ってもらうプロンプト]]／[[youtube-thumbnail-ai-html-spec-workflow-summary]]        |
| 4. 認識ずれと方式転換         | AIの再解釈を減らし、素材・文字・配置を固定するにはどうするか。    | [[サムネイル製作はHTML設計書からデザインフレームに素材を差し込むのが良い]]／[[thumbnail-production-workflow-improvement-summary]]          |
| 5. ローカルHTML/CSSと書き出し | ローカルで素材を読み込み、完成表示したものをどう出力するか。      | [[thumbnail-production-workflow]]                                                                        |
| 6. 縞鋼板防滑材の個別事例       | 具体的な素材・訴求・HTML調整をどう残すか。             | [[縞鋼板向け防滑材サムネイル HTML設計まとめ]]／[[checker-plate-anti-slip-thumbnail-html-adjustments]]／[[YouTubeサムネイル制作まとめ]] |
| 7. 初期方式の生成試行         | AIがHTMLと実素材をどこまで指定どおりに扱えるか。         | [[thumbnail-creation-practice-part-2]] → [[thumbnail-creation-practice-part-3]]                          |
| 8. GUI編集・ファイル形式の試行   | HTML表示後のサムネイルを、どのツール・形式なら編集可能にできるか。 | [[figma-design-workflow-overview]]／[[svg-canva-thumbnail-file-summary]]                                  |

## 流れの要点

```text
工程モデルを作る
  ↓
実案件のブリーフを対話で作る
  ↓
HTMLと素材をAIへ渡して完成画像を作らせる
  ↓
AIごとの再解釈・用語の認識ずれが残る
  ↓
ローカルHTML/CSSで素材と配置を固定する方向へ転換
  ↓
DevToolsでの出力、Figma・SVGでの編集可能性を試す
```

この流れは一直線の成功談ではない。13工程の対話は、ブリーフを作るだけで30分以上かかる負荷を生み、約2時間の試行でも十分な品質に届かなかった。そのため、[[thumbnail-production-workflow-improvement-summary]]には、モックを先に作って構造を逆算する案など、未検証の改善仮説も残っている。

## 個別事例の読み分け

| 知りたいこと | 読むノート |
| --- | --- |
| 縞鋼板防滑材案件で何を作る条件にしたか | [[縞鋼板向け防滑材サムネイル HTML設計まとめ]] |
| 文言・色・余白などをどの順に調整したか | [[checker-plate-anti-slip-thumbnail-html-adjustments]] |
| 案件を短く把握したい | [[YouTubeサムネイル制作まとめ]] |
| AI生成方式で何を試したか | [[thumbnail-creation-practice-part-2]]／[[thumbnail-creation-practice-part-3]] |
| ブラウザ出力で何が問題になったか | [[thumbnail-production-workflow]] |
| Canva・Figma・SVGで何を試したか | [[figma-design-workflow-overview]]／[[svg-canva-thumbnail-file-summary]] |

## 本流外の関連記録

[[image-prompt-compression-comparison|楽天向け背景画像プロンプトの圧縮比較]]は、楽天向け看板画像の背景生成プロンプトを短縮した別案件である。AI画像への指示を短くする問題意識は共通するが、YouTubeサムネイルの方式転換やこの時系列の根拠には含めない。

Canva・Figma・Affinityの調査、操作試行、自身の管理方針は、[[design-tools-reference-links|Canva・Figma・Affinity：調査・試行・管理方針へのリンク集]]にまとめている。これらは本流の時系列を構成する記録ではなく、必要に応じて参照する周辺知識である。

## 次の段階

このクラスタの記録を完了した後、04-Extraとして、全記録をもう一度精査する。その時点で初めて、現在の用語（例：ワイヤーフレーム、モック、HTML/CSSレイアウトテンプレート）を明示した再利用可能なPermanent Noteを検討する。
