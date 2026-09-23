---
title: サムネイル制作方式の探索：Cluster 04 の記録構造
aliases:
  - サムネイル制作方式の探索：Cluster 04 の記録構造
  - Cluster 04 サムネイル制作方式の探索
type: structure
created: 2026-09-20T06:30:00+09:00
updated: 2026-09-23T22:00:58+09:00
id: 20260920-063000
permalink:
draft: true
---

# サムネイル制作方式の探索：Cluster 04 の記録構造

用語と成果物の認識がずれた経緯は、[サムネイル制作で生じた用語と成果物の認識ずれ](thumbnail-production-terminology-communication-record.md)に分けている。

## このクラスタで起きたこと

| 時期・段階                | 当時の問い                               | 記録                                                                                                                                                          |
| -------------------- | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. 制作工程を考え始めた段階      | 対話で何を決め、HTMLへ何を渡せば再現できるのか。          | [サムネイル制作の13工程：当時の設計モデル](thumbnail-production-13-step-model.md)／[サムネイル制作の13工程：旧・一表形式](thumbnail-production-13-step-table-legacy.md)                                                                        |
| 2. 実案件でブリーフを固めた段階    | 訴求・素材・禁止事項をAIとの対話で決められるか。           | [HTMLサムネイル制作：ブリーフ対話](html-thumbnail-brief-dialogue.md)                                                                                            |
| 3. 初期のAI生成方式         | HTMLと素材を次のAIへ渡し、完成画像を作らせられるか。       | [HTMLと実素材をAIへ渡す初期方式の説明](thumbnail-ai-generation-approach.md)／[HTMLと実素材からサムネイルを生成するためのプロンプト](thumbnail-ai-generation-prompt.md)／[HTMLと実素材をAIへ渡す初期方式の試行総括](thumbnail-ai-html-generation-experiment-summary.md)                                 |
| 4. 認識ずれと方式転換         | AIの再解釈を減らし、素材・文字・配置を固定するにはどうするか。    | [AI生成方式からローカルHTML/CSS方式へ切り替えた判断](thumbnail-ai-generation-to-local-html-decision.md)／[制作ブリーフ作成の負荷から生まれた改善検討](thumbnail-production-workflow-improvement.md)                                          |
| 5. ローカルHTML/CSSと書き出し | ローカルで素材を読み込み、完成表示したものをどう出力するか。      | [ローカルHTML/CSSで表示したサムネイルの出力試行](thumbnail-local-html-devtools-export-experiment.md)                                                                                                         |
| 6. 縞鋼板防滑材の個別事例       | 具体的な素材・訴求・HTML調整をどう残すか。             | [HTMLサムネイル制作：設計記録](html-thumbnail-design-record.md)／[HTMLサムネイル制作：調整記録](html-thumbnail-adjustment-record.md)／[HTMLサムネイル制作：制作要約](html-thumbnail-production-summary.md) |
| 7. 初期方式の生成試行         | AIがHTMLと実素材をどこまで指定どおりに扱えるか。         | [HTMLサムネイル制作：AI生成の初回試行](html-thumbnail-ai-generation-initial-trial.md) → [HTMLサムネイル制作：AI生成の続行試行](html-thumbnail-ai-generation-continuation-trial.md)                             |
| 8. GUI編集・ファイル形式の試行   | HTML表示後のサムネイルを、どのツール・形式なら編集可能にできるか。 | [Canva CodeからFigmaへ移った編集試行](canva-code-to-figma-editing-trial.md)／[HTMLサムネイル制作：SVG観察記録](html-thumbnail-svg-observation.md)<br>                                                          |

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

この流れは一直線の成功談ではない。13工程の対話は、ブリーフを作るだけで30分以上かかる負荷を生み、約2時間の試行でも十分な品質に届かなかった。そのため、[制作ブリーフ作成の負荷から生まれた改善検討](thumbnail-production-workflow-improvement.md)には、モックを先に作って構造を逆算する案など、未検証の改善仮説も残っている。

## 個別事例の読み分け

| 知りたいこと                 | 読むノート                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 縞鋼板防滑材案件で何を作る条件にしたか    | [HTMLサムネイル制作：設計記録](html-thumbnail-design-record.md)                                                                        |
| 文言・色・余白などをどの順に調整したか    | [HTMLサムネイル制作：調整記録](html-thumbnail-adjustment-record.md)                                                                       |
| 案件を短く把握したい             | [HTMLサムネイル制作：制作要約](html-thumbnail-production-summary.md)                                                                                  |
| AI生成方式で何を試したか          | [HTMLサムネイル制作：AI生成の初回試行](html-thumbnail-ai-generation-initial-trial.md)／[HTMLサムネイル制作：AI生成の続行試行](html-thumbnail-ai-generation-continuation-trial.md) |
| ブラウザ出力で何が問題になったか       | [ローカルHTML/CSSで表示したサムネイルの出力試行](thumbnail-local-html-devtools-export-experiment.md)                                                                           |
| Canva・Figma・SVGで何を試したか | [Canva CodeからFigmaへ移った編集試行](canva-code-to-figma-editing-trial.md)／[HTMLサムネイル制作：SVG観察記録](html-thumbnail-svg-observation.md)                                |

## 本流外の関連記録

[楽天向け背景画像プロンプトの圧縮比較](image-prompt-compression-comparison.md)は、楽天向け看板画像の背景生成プロンプトを短縮した別案件である。AI画像への指示を短くする問題意識は共通するが、YouTubeサムネイルの方式転換やこの時系列の根拠には含めない。

Canva・Figma・Affinityの調査、操作試行、自身の管理方針は、[Canva・Figma・Affinity：調査・試行・管理方針へのリンク集](design-tools-reference-links.md)にまとめている。これらは本流の時系列を構成する記録ではなく、必要に応じて参照する周辺知識である。

## 記録から導いた現在の制作体系

04-Extraとして、現在の用語を使う再利用用ノート群を作成・内容確定した。これは当時の記録を現在の用語で読み替えるものではなく、この記録から得た判断を今後の制作へ使うための別レイヤーである。

入口は[HTML/CSSレイアウトテンプレートを作る制作フロー](thumbnail-layout-template-workflow.md)である。ワイヤーフレーム、デザインモック、画像／テキストスロット、ローカル画像を表示するHTML/CSSレイアウトテンプレート、SVGの役割は、このフローから参照する。
