---
title: Research＋ZKリファクタリング作業台：10：生成AIサービス・AI活用
aliases:
  - Research＋ZKリファクタリング作業台：10：生成AIサービス・AI活用
type: fleeting
created: 2026-09-11T20:12:26+09:00
updated: 2026-09-17T03:05:00+09:00
id: 20260911-201226
permalink:
draft: false
tags:
  - ai-generated
---

# Research＋ZK作業台：生成AIサービス・AI活用

## このノートの役割

Cluster 10「生成AIサービス・AI活用」の子クラスタ、判断、進捗を管理する一時作業台。子クラスタごとの完了結果は[Research＋ZK作業ログ：生成AIサービス・AI活用](cluster-10-generative-ai-log.md)へ記録する。

## 現在の状態

- 親クラスタ：Cluster 10「生成AIサービス・AI活用」
- 状態：10-A〜10-Fを完了。各ノートの変更前全文は対象フォルダの日付付き`.退避`へ保全済み。
- 台帳上の主対象：22件
- 中心課題：変化しやすいサービス仕様・契約条件と、本人の利用経験・設定・障害記録・再利用できる判断を混同しない。
- 安全上の前提：製品機能、料金、利用制限、規約、年齢制限、ガードレールを更新する場合は、変更直前に公式資料を確認する。

## 子クラスタと進捗

| ID | 子クラスタ | 主な対象 | 状態 |
| --- | --- | --- | --- |
| 10-A | 契約・アカウント利用 | [生成AIサービスの契約構成と費用を考える](../../31_Research/generative-ai-subscription-costs.md)、[生成AIサービスの契約費用：公開事例（2026年7月調査）](../../31_Research/ai-subscription-cost-examples-2026.md)、[chatgptの有料課金をやめたらアカウントはどうなる？](../../31_Research/chatgpt-subscription-cancellation.md)、[吾輩は、ChatGPTの週間利用制限すら使い切れない凡人である](../../31_Research/chatgpt-weekly-usage-limits.md) | 完了（2026-09-11） |
| 10-B | ChatGPTの機能・カスタム指示・コンテキスト | [ChatGPTで出来ること](../../31_Research/chatgpt-capabilities.md)、[ChatGPTにアップロードしたファイル名を認識できる条件](../../31_Research/chatgpt-can-recognize-uploaded-filenames.md)、[AIに設定するカスタム指示についての議論とまとめ](../../31_Research/ai-custom-instructions-discussion.md)、[ツェッテルカステン専用コンテキストの動作確認](../../32_Zk/zettelkasten-context-test.md) | 完了（2026-09-11） |
| 10-C | 音声・操作・遠隔利用 | [ChatGPTの音声入力・出力と自動送信の検討](../../31_Research/chatgpt-text-to-speech.md)、[フットペダルと音声入力の組み合わせのテスト](../../31_Research/foot-pedal-voice-input-test.md)、[ChatGPTの音声入力と「Voice Control for ChatGPT」のショートカット競合](../../32_Zk/chatgpt-voice-input-output-shortcut-conflict.md)、[スマートフォンからChatGPT Work／Codex／PCを遠隔利用する方法の整理](../../31_Research/remote-access-chatgpt-codex-pc.md) | 完了（2026-09-11） |
| 10-D | ローカルLLM・文字起こし・長文処理 | [ローカルLLMを試す・購入を判断するためのPC性能](../../31_Research/local-llm-pc-purchase-decision.md)、[ローカルLLMの概要と、長文要約・文字起こし済みテキスト処理に必要なPC性能](../../31_Research/local-llm-long-text-processing.md)、[Windowsでローカル処理できる動画・音声文字起こしアプリ](../../31_Research/windows-local-transcription-apps.md) | 完了（2026-09-11） |
| 10-E | 信頼性・安全性・年齢制限 | [AIによる嘘情報まとめ](../../31_Research/ai-misinformation-corrections.md)、[AIサービスにおける性的・センシティブコンテンツのガードレール整理](../../31_Research/ai-content-safety-guardrails.md)、[主要生成AIの年齢制限・ペアレンタルコントロールと、子どもへの使わせ方](../../31_Research/generative-ai-age-limits-parental-controls.md) | 完了（2026-09-13） |
| 10-F | AIによる知識活用・発信 | [ChatGPTとの対話で読書を思い出し、考えを深める](../../31_Research/chatgpt-reflective-reading.md)、[X × ChatGPT連携による情報収集・知識整理の検討まとめ](../../31_Research/x-chatgpt-knowledge-workflow.md)、[AI時代のWeb閲覧・広告収益・個人サイト戦略についての整理](../../31_Research/ai-web-advertising-personal-site-strategy.md)、[先週の運動データからChatGPTに次週メニューを作成させたテスト](../../32_Zk/create-training-plan-with-chatgpt.md) | 完了（2026-09-13）。運動メニュー試作ノートはCluster 10に維持 |

## 予定Workスレッド境界

1. 10-A〜10-B：ChatGPTの契約・アカウント利用・基本機能・設定。時限仕様と本人の設定・利用記録を比較する。
2. 10-C〜10-D：音声・遠隔利用・ローカル処理。製品仕様、試行記録、PC性能・ツール比較を分ける。
3. 10-E〜10-F：信頼性・安全性・年齢制限と、知識活用・発信。規約・安全情報と個別の利用判断を分ける。

## 10-A 完了結果

- `generative-ai-subscription-costs.md`は、契約形態、費用の種類、費用帯、月額・年額・APIの使い分け、複数アカウントを判断する観点を扱うLiterature Noteへ再構成した。
- `ai-subscription-cost-examples-2026.md`は、2026年7月時点の他者が公開した契約構成・支払額・複数アカウント運用の事例だけを保管するLiterature Noteとして新規作成した。過去の個人事例を、現行価格や現在の規約と混同しない役割を明記した。
- `chatgpt-subscription-cancellation.md`は、Freeへ移行した場合のアカウント内情報と機能制限を分けて整理した。対象範囲は縮小していない。
- `chatgpt-weekly-usage-limits.md`は、本人の原文と画像を維持した。本文は変更していない。
- 大きく再構成した3ノートは、同じ`31_Research`フォルダの日付付き`.退避`へ変更前全文を保存し、内容一致を確認した。

## 10-B 完了結果

- `chatgpt-capabilities.md`は、元の検討背景であるDriveからObsidianへの受け渡し運用を残し、通常チャット、Cloud Work、Local Work、接続したApp／プラグインの役割を一つの流れとして文章校正した。
- `chatgpt-can-recognize-uploaded-filenames.md`は、サムネイル生成でHTML設計書と素材画像を照合する背景を残し、認識条件、限界、確認手順、運用上の注意へ文章を組み直した。変更前のtitleはaliasとして維持した。
- `ai-custom-instructions-discussion.md`は、`type: literature`へ修正し、`ai-generated`をタグへ移した。出発点、情報の置き場所、指示の限界、書き方、公開された利用者の体験談、最終評価の順へ文章を組み直した。
- `zettelkasten-context-test.md`は、テスト結果と`draft: false`を維持し、`30_Inbox`での作成結果と現在の`32_Zk`への整理移動を区別して追記した。

## 10-C 完了結果

- `chatgpt-text-to-speech.md`は、音声会話、マイク入力、停止・送信、フットペダル、ゲーム・配信中の画面配置という検討の条件変化を、音声入力からテキスト返答を受け取るための一つの操作設計として再構成した。旧titleはaliasとして残した。
- `foot-pedal-voice-input-test.md`は、実テストの結果を正本として本文を変更していない。`32_Zk`への整理移動に関する追記だけを維持した。
- `chatgpt-voice-input-output-shortcut-conflict.md`は、拡張機能の音読を維持したい背景、`Ctrl + M`の競合、想定した操作数と実際の操作数の差を明確にした。
- `remote-access-chatgpt-codex-pc.md`は、クラウド作業、Codex Remote、Remote Desktopを、PCを誰が操作するかという軸で比較できるよう再構成した。PCの電源・スリープ、Windows HomeとRDPの制約、Chrome Remote DesktopとTailscale＋RDPを候補として検討した経緯も残した。

## 10-D 完了結果

- `local-llm-pc-purchase-decision.md`は、現在のHP Pavilion Aeroでの試用、RAM・VRAMを優先する理由、32GB／8〜16GB VRAMの現実的な構成、100万円級の上限、クラウドAIとの役割分担を一つの購入判断の流れとして再構成した。
- `local-llm-long-text-processing.md`は、動画から文字起こしまでPCで行う前提と、Pixelなどで文字起こしを済ませてテキストだけをPCへ渡す前提を区別し、後者では文章整理用の性能を比較すればよい理由を明確にした。
- `windows-local-transcription-apps.md`は、ローカル文字起こしのアプリ比較を、文字起こしから出力確認、ローカルLLMでの要約・Obsidian向けMarkdown化までの処理全体の入口として整理した。ファイル名は明示指示がないため維持した。

## 10-E 完了結果

- `ai-misinformation-corrections.md`は、AIに誤案内された内容と実画面で確認した正しい到達経路を、誤案内の理由を失わない訂正記録として再構成した。タイトルは本文と一致するため維持した。
- `ai-content-safety-guardrails.md`は、年齢、現実性、同意、露出、目的、媒体を判断軸として統合し、サービス比較は調査時点の情報として位置付けた。
- `generative-ai-age-limits-parental-controls.md`は、各サービスの年齢・保護機能の調査時点と、家庭内での利用判断・ルールを分けて再構成した。

## 10-F 完了結果

- `chatgpt-reflective-reading.md`は、読書中の本人の発話、AIからの問い、そこから得た考えを区別して再構成した。要約ではなく対話で読み返すという目的、知識の偶発的な接続、将来の専門性への考えを残した。
- `x-chatgpt-knowledge-workflow.md`は、X APIによる取得、ChatGPTによる分類・意味的重複の判定、Obsidianへのテーマ単位での統合を一つの運用設計として再構成した。API料金は2026-09-03調査時点の試算として明記した。
- `ai-web-advertising-personal-site-strategy.md`は、AI経由の閲覧と広告計測の差、利用者・サイト運営者・個人サイト運営の選択肢、自分自身の原典データベースを育てる記録方法を、因果関係が追える一つの文章へ統合した。
- `create-training-plan-with-chatgpt.md`は、先週の運動データ、生活条件、利用可能なマシンを渡して、ChatGPTが次週の運動メニューを組めるかを検証したノートとして再構成した。実際の週間メニューと記録は削らずに維持した。

## 今後の扱い

1. このClusterの時限情報を更新する必要が生じた場合は、該当する公式資料を変更直前に確認する。
2. 次のClusterを扱う際も、対象ノートの全文を読んでから、目的・判断・例外・保留事項を保持した統合構成を作る。
