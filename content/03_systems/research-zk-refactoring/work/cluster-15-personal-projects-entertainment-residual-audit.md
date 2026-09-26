---
title: Research＋ZKリファクタリング作業台：15：個人プロジェクト・娯楽・残余監査
aliases:
  - Research＋ZKリファクタリング作業台：15：個人プロジェクト・娯楽・残余監査
type: fleeting
created: 2026-09-20T20:26:12+09:00
updated: 2026-09-26T17:49:03+09:00
id: 20260920-202612
permalink:
draft: false
tags:
  - ai-generated
---

# Research＋ZKリファクタリング作業台：個人プロジェクト・娯楽・残余監査

## このノートの役割

Cluster 15「個人プロジェクト・娯楽・残余監査」の親クラスタ内部で、子クラスタ、予定Workスレッド境界、判断、進捗を管理する一時作業台。子クラスタごとの完了結果は、親クラスタ用ログへ記録する。

## 現在の状態

- 親クラスタ：Cluster 15「個人プロジェクト・娯楽・残余監査」
- 状態：監査中（2026-09-26）。15-05、15-04、15-01は完了済み。15-01では21ノートを監査し、前半11件はFukkamaruの判断により変更不要として維持した。後半10件（No.12〜21）は修正済み検証基準と実ファイルを照合し、12〜20は変更不要、21は空の箇条書き1行だけを削除した。主クラスタの再配置は行っていない。
- 台帳上の対象：278件。既存表の実パス174件に加え、Fukkamaruの明示指示により`30_Inbox/クラスタ15に追加`の現役104件を追加した。既存・追加は単一の対象一覧へ統合し、出自を区切り行で保持する。本文が現行購入ガイドと完全一致した旧コピー11件は、2026-09-22に`.退避`へ変更して本文監査の対象外とした。フォルダ内の既存`.退避`16件も復元用であり、本文監査の対象外とする。
- 内容別の子クラスタ：[Cluster 15内容別子クラスタ台帳](cluster-15-content-subcluster-map.md)を正本とする。全278件を主題と利用場面で15クラスタへ割り当て済みであり、既存・追加・保存フォルダ・過去の作業工程は分類軸に使わない。
- 次の処理順：15-02「AIサービス・モデル利用」を、初回作業単位、予定Work境界、閲覧と変更の境界を提示してから監査する。
- 既存のCluster 15作業台・親クラスタ用ログはなかったため、このノートと親ログを新規作成した。
- 中心課題：他クラスタの中心課題に入らなかったノートを「その他」として固定せず、内容、関係、役割を監査して、既存クラスタへの移管、小さな新規クラスタ、単独維持、統合候補、意図的保留を区別する。
- スレッド由来の内容：スレッド内容を一括転記しない。ノートとして残す目的、発話者・時点・出典、転記先の役割を確認できたものだけを候補として扱う。

## 子クラスタと進捗

| ID    | 内容別子クラスタ        | 件数  | 状態                                        |
| ----- | --------------- | --- | ----------------------------------------- |
| 15-01 | AI・知識管理の運用      | 21  | 完了（2026-09-26。前半11件は維持、後半10件を検証。主クラスタ再配置なし） |
| 15-02 | AIサービス・モデル利用    | 24  | 分類完了。内容監査は未着手 |
| 15-03 | 文書・データ・デジタル作業   | 25  | 完了（2026-09-22）                            |
| 15-04 | PC・Web・ソフトウェア基盤 | 12  | 完了（2026-09-26。本文・YAML・タイトル・ファイル名・参照を整理。問題把握1・2を1ノートへ統合） |
| 15-05 | 製品・業務・産業知識      | 24  | 完了（2026-09-26）                             |
| 15-06 | 映像・画像・配信制作      | 13  | 完了（2026-09-24。本文・YAML・タイトル・ファイル名・参照を整理）   |
| 15-07 | ゲーム・インタラクティブ娯楽  | 26  | 完了（2026-09-22）                            |
| 15-08 | 芸術・文化・創作        | 21  | 完了（2026-09-24。本文・YAML・タイトル・ファイル名・参照を整理）   |
| 15-09 | 旅行・地域・移動        | 21  | 完了（2026-09-23。本文・YAML・タイトル・ファイル名・参照を整理）   |
| 15-10 | 個人の購入・サービス判断    | 18  | 完了（2026-09-25。本文・YAML・タイトル・英語ファイル名・参照を整理） |
| 15-11 | 生活・住環境・個人運用     | 15  | 完了（2026-09-22）                            |
| 15-12 | 健康・医療・心理        | 17  | 完了（2026-09-22。心理検査2件を1件へ統合）               |
| 15-13 | 言語・概念・基礎知識      | 17  | 完了（2026-09-22）                            |
| 15-14 | 自然科学・材料・食       | 10  | 完了（2026-09-23。本文・YAML・タイトル・ファイル名・参照を整理）   |
| 15-15 | 仕事・労働・制度        | 6   | 完了（2026-09-23。本文・YAML・タイトル・ファイル名・参照を整理）   |

## 予定Workスレッド境界

1. [内容別子クラスタ台帳](cluster-15-content-subcluster-map.md)の一つを選び、対象全件を本文・YAML・リンク・時点依存性で監査する。
2. 各ノートの主題・役割に基づく判断を行い、統合、分割、移動、YAML変更、リンク追加は具体案と承認後にだけ実施する。
3. 医療、金融、価格、制度、サービス仕様を扱うクラスタでは、本文更新の直前に根拠を確認する。
4. 以前の重複確認・リンク修正・個別監査は親クラスタ用ログに記録済みであり、内容別子クラスタのIDとしては扱わない。

## 初回監査での着眼点

- 個人的な記録、一般知識、時限情報、AI生成の調査結果を同じ役割として扱わない。
- 他クラスタとの関係が見つかったノートは、内容を読んだうえで主クラスタ変更を提案する。保存フォルダは主クラスタだけを理由に移動しない。
- 医療、金融、サービス仕様、キャンペーン、価格などの時限性・安全性がある情報は、本文を更新する直前に根拠を確認する。
- 統合、分割、削除、title・type・draft・ファイル名の変更、既存本文の再構成は、対象・現状・変更案・理由・影響・退避方法を示し、Fukkamaruの承認後に実施する。

## 過去に実施したゲーム関連の監査記録

対象21件を本文、YAML、リンクの有無、時点依存性で確認した。本文・YAML・ファイル名・リンクは変更していない。

| 区分 | 件数 | 対象と判断 |
| --- | ---: | --- |
| シリーズ・サービス別の購入ガイド | 11 | アトリエ3件、ダンガンロンパ、DQビルダーズ、Game Pass、GeForce NOW 2件、ぷよテト、幻想水滸伝、テイルズ。判断対象が異なるため、統合せず個別ガイドとして維持する。いずれも2026年9月時点の価格・サービス情報を含む。 |
| 価格・所持・配布履歴 | 5 | アトリエDXの価格予想、ルーンファクトリーの購入先比較、Epic/EA無料配布履歴、PCゲーム所持一覧、SimCityのシリーズ調査。価格・所持一覧は更新頻度が異なり、統合せず相互参照候補とする。 |
| ゲーム配信準備 | 4 | Switch 2/OBS構成の整理と、配信目的・機材/録画・概要欄/遅延/話し方の調査3件。後者3件は会話ログ形式で、特に機材/録画ノートはiPad利用まで混在する。現時点では統合せず、要約ノートへの分割・接続を変更候補とする。 |
| ゲーム用Structure | 1 | `32_Zk/pokoa-pokemon.md`。7件のMarkdownリンクのうち3件が有効、4件は`31_Research`へ移動済みのノートを旧ディレクトリから参照している。リンク先候補は確認できたが、既存Structureの変更は承認待ち。 |

### 承認済みの変更（2026-09-22）

1. `pokoa-pokemon.md`の4件の相対Markdownリンクを、存在する`31_Research`の対応ノートへ修正した。
2. Epic/EA無料配布履歴とPCゲーム所持一覧を相互参照した。
3. [ゲーム配信準備](../../32_Zk/game-streaming-preparation.md)を新設し、現行のSwitch 2/OBS構成と配信会話ログ3件の役割を分けて接続した。
4. 価格・サービス情報を含む購入ガイドは、次回の実際の購入判断時に公式情報で再確認する。今回の監査では価格・サービス仕様を更新していない。

## 過去に実施したAI運用関連の監査記録

既存3件と追加5件を、`_AI Start Here`、`Obsidian Zettelkasten Ai Operations`、`AI Work Log Rules`、`AI Handoff`を正本として照合した。ソースノートとコンテキスト文書は変更していない。

| 対象 | 判断 |
| --- | --- |
| `AI作業ログの作成準備` / `AI作業ログを追加する` | 前者は設計・引継ぎ用プロンプトを含む準備記録、後者は実装結果と決定事項の記録であり、時系列と役割が異なる。既存リンクを維持し、統合しない。 |
| `AIに尋ねた質問をメモとして残す判断基準` | AI出力を保存する基準として独立している。`type`と`ai-generated`タグの区別も現行運用と整合するため、維持する。 |
| `AIがObsidian / Zettelkasten / Quartzを操作するための運用コンテキスト設計` | 現行の操作コンテキストと共通する運用規則を含む一方、設計経緯と不採用案も含む。現行コンテキストの代替にはせず、設計履歴のdraftとして維持する。 |
| `AI管理領域とZettelkasten領域のフォルダ境界を明示する` | AI側とZK側を独立ROOTとして扱う具体案。現行の開始文書には一般的なアクセス境界はあるが、このROOT分離ルールは未採用のため、実施候補として保留する。 |
| `AI作業の再現性を高めるにはポリシー・ワークフロー・ハンドオフを分離する` | Policy・Workflow・Handoffの責務分離という設計ノート。現行文書の役割分担と整合するが、新規Workflowの要否は未決定のため、設計候補として維持する。 |
| `AIとのチャットで用語を統一すると誤解を減らせる` | 会話参照の表現ルールとして独立している。ただし`type: ai-generated`は現行YAML仕様のtypeではないため、修正候補とする。 |
| `複数AIでObsidianのZettelkasten整理を分担する運用` | クラスタ単位でAIを担当させる判断と、特定サービスの試験計画が混在する。サービス名・料金・機能の部分は時点依存のため、実行前の再確認が必要。 |

### 変更候補（未実施）

1. `AIとのチャットで用語を統一すると誤解を減らせる`のYAMLを、現行仕様に沿って`type: fleeting`と`tags: [ai-generated]`へ修正する。
2. AI側とZK側のROOT分離ルールを現行コンテキストへ採用するか、具体的な文面・適用範囲・既存ルールとの優先順位を検討する。
3. 新規Workflowを作るかどうかは、現行文書の責務重複を別途比較してから決定する。

## 15-01後半10ノートの修正済み検証基準（2026-09-26）

Fukkamaruが修正した、次スレッドで実ファイルと照合するための判断・本文変更案。これは実装済みの記録ではない。本文、YAML、ファイル名、リンク、公開状態、外部サービス設定は変更していない。

| No. | ノート | 判断 | 本文変更案 |
| ---: | --- | --- | --- |
| 12 | AI時代のDigital Gardenにおける公開・限定公開の設計 | 長い検討記録。Cloudflare Accessや`visibility`は将来案で、現行設定ではない。 | 冒頭で「設計検討記録」と明示し、公開／限定公開／完全非公開の考え方、前提、未決事項を表に集約する。実装手順・設定案は「未実施の案」として残す。 |
| 13 | AI整理済みObsidianノートを公開可能な知識へ育てる方針 | AI生成物を知識へ育てる思想と、話者表示などの実装案が混在している。 | 「知識の成熟モデル」と「将来の表示・テンプレート案」を分け、現行運用ではない試作案を明示する。 |
| 14 | Obsidianの最短経路リンクと相対パスの比較・判断 | 比較・判断の記録として価値がある。設定の現況確認は未実施。 | 比較軸、採用理由、前提、未確認事項を表へ整理する。「現在の設定値」ではなく、当時の採用判断として表現を統一する。 |
| 15 | ResearchとZettelkastenをクラスタ単位でリファクタリングする | 現行リファクタリングの出発点となった構想記録。本文中の図がコードブロック化されていない。 | 冒頭で経緯・現行正本との関係を示す。クラスタ処理モデルをMermaidとして正しく整形し、実施済み方針と当時の未解決事項を区別する。 |
| 16 | Quartzのモバイル表示で表とMermaidを読みやすくする | Quartz側の表示設計案。実環境のDOMや設定は未確認。 | 表／Mermaid／余白の方針と、実装前の確認事項を整理する。CSS・JavaScriptの実装提案は未検証案として保持する。 |
| 17 | メモ同士のリンクとバックリンクの関係を理解する | 短く、リンクとバックリンクの向きの説明が逆になっている。 | 「発信元ノート→リンク先ノート」「リンク先ノート→発信元一覧としてのバックリンク」を図と短い例で正確に書き直す。 |
| 18 | 外部環境で得た知識と内省知の切り分け方 | `type`と由来を分ける中心主張は有効。ただし本文の`permanent`表記は現行の許可typeと整合しない。 | `type`の現行運用に合わせ、過去のPermanent概念との関係を注記する。`field`はユーザーが由来を判断して付ける、という原則を明確化する。 |
| 19 | 完了済みクラスタの公開化記録（2026-09-17） | 日付付きの変更履歴として完結している。 | 冒頭で「2026-09-17時点の実施記録」と明示し、対象・変更・除外理由を要約する。公開化したノート一覧は証跡として維持する。 |
| 20 | 削除済みノートへのDead Link運用と公開Webの設計 | 大規模な調査・設計記録。Quartz実装やSEO／AI検索の議論を、現行ルールと誤認しやすい。 | 結論、Obsidian内の履歴表現、公開Web上の扱い、未実施のQuartz実装案を分離する。冒頭で「調査・将来設計」であることを示す。 |
| 21 | 調べたいことの一覧 | 未整理の調査バックログとして役割が明確。 | 本文は原則維持。見出し階層・箇条書きの表記だけを必要最小限に整え、未作成リンクや調査済み項目を推測で変更しない。 |

## 次のアクション

1. 15-01後半10件の実ファイルを、上の検証基準と一件ずつ照合する。
2. 変更候補は、対象・影響・退避方法を示して承認を得てから実施する。
3. 残る11件は、初回監査の設計と閲覧境界を示してから扱う。
4. 15-01全21件の処理と検証が完了した場合だけ、親ログへ子クラスタの結果を記録する。

## 15-07の完了記録（2026-09-22）

- 26件を、購入・所持・作品調査・録画／配信・個別ゲームメモの役割に分けて整理した。
- 購入・サービスガイドは`literature`、所持一覧と購入ガイド一覧は`index`、個人の録画／配信検討は`fleeting`、AI対話・未検証の調査記録は`literature`としてYAMLを整えた。
- 英名ファイル名への改名は11件。改名前の内容は`.退避-2026-09-22.md`として保存した。
- [ゲームの購入・所持・録画／配信ストラクチャー](../../32_Zk/game-ownership-purchase-streaming-structure.md)を新設し、用途ごとに26件へ辿れる入口とした。
- 価格・セール・サービス仕様・権利ガイドラインは更新せず、各ノートに記録時点の情報であることを明示した。

## 内容別子クラスタのファイル一覧

各リンクはこの作業台からの相対Markdownリンク。全278件を一度ずつ掲載する。内容別子クラスタの定義・件数の正本は[Cluster 15内容別子クラスタ台帳](cluster-15-content-subcluster-map.md)。

### 15-01 AI・知識管理の運用

- [AIがObsidian / Zettelkasten / Quartzを操作するための運用コンテキスト設計](../../30_Inbox/クラスタ15に追加/ai-obsidian-zettelkasten-operations-design.md)
- [AIとのチャットで用語を統一すると誤解を減らせる](../../30_Inbox/クラスタ15に追加/ai-chat-terminology-consistency.md)
- [AIに尋ねた質問をメモとして残す判断基準](../../32_Zk/criteria-for-saving-ai-questions.md)
- [AI管理領域とZettelkasten領域のフォルダ境界を明示する](../../30_Inbox/クラスタ15に追加/ai-zettelkasten-root-boundaries.md)
- [AI作業の再現性を高めるPolicy・Workflow・Handoffの分離](../../30_Inbox/クラスタ15に追加/ai-policy-workflow-handoff-separation.md)
- [AI作業ログの導入準備と記録方針](../../32_Zk/ai-work-log-implementation-preparation.md)
- [AI作業ログの導入記録](../../32_Zk/ai-work-log-implementation-record.md)
- [AI時代のDigital Gardenにおける公開・限定公開の設計](../../30_Inbox/クラスタ15に追加/digital-garden-publication-access-design.md)
- [AI整理済みObsidianノートを公開可能な知識へ育てる方針](../../30_Inbox/クラスタ15に追加/ai-curated-notes-publication-policy.md)
- [Obsidianの最短経路リンクと相対パスの比較・判断](../../30_Inbox/クラスタ15に追加/obsidian-shortest-path-relative-paths.md)
- [ResearchとZettelkastenをクラスタ単位でリファクタリングする](../../30_Inbox/クラスタ15に追加/research-zettelkasten-cluster-refactoring.md)
- [Quartzのモバイル表示で表とMermaidを読みやすくする](../../30_Inbox/クラスタ15に追加/quartz-mobile-table-mermaid-layout.md)
- [Zettelkastenリファクタリングの作業管理記録を置く場所](../../30_Inbox/クラスタ15に追加/zettelkasten-refactoring-work-records.md)
- [Zettelkastenリファクタリングの運用構成と処理手順](../../30_Inbox/クラスタ15に追加/zettelkasten-refactoring-operations-guide.md)
- [楽天市場向け建材背景画像の生成プロンプト](../../30_Inbox/クラスタ15に追加/rakuten-building-materials-background-prompt.md)
- [メモ同士のリンクとバックリンクの関係を理解する](../../32_Zk/note-links-and-backlinks.md)
- [外部環境で得た知識と内省知の切り分け方](../../32_Zk/separating-external-and-reflective-knowledge.md)
- [完了済みクラスタの公開化記録（2026-09-17）](../../30_Inbox/クラスタ15に追加/振り分け中/completed-cluster-publication-record.md)
- [削除済みノートへのDead Link運用と公開Webの設計](../../30_Inbox/クラスタ15に追加/deleted-note-dead-link-policy.md)
- [調べたいことの一覧](../../31_Research/research-topics-list.md)
- [複数AIによるZettelkasten整理の分担方針（2026年9月の検討記録）](../../30_Inbox/クラスタ15に追加/multi-ai-zettelkasten-work-allocation.md)

### 15-02 AIサービス・モデル利用

- [AIサービス × 外部ツール連携・AIエージェント構築事例 Deep Research](../../30_Inbox/クラスタ15に追加/AIサービス × 外部ツール連携・AIエージェント構築事例 Deep Research.md)
- [AIサービス・モデル別「ファイル部分読み込み」とトークン消費の比較調査](../../30_Inbox/クラスタ15に追加/AIサービス・モデル別「ファイル部分読み込み」とトークン消費の比較調査.md)
- [AIサブスク比較と複数AI運用の検討](../../30_Inbox/クラスタ15に追加/AIサブスク比較と複数AI運用の検討.md)
- [AIローカルファイル操作は「モデル性能」より料金体系・Agent Harness・Quota設計で選ぶ](../../30_Inbox/クラスタ15に追加/AIローカルファイル操作は「モデル性能」より料金体系・Agent Harness・Quota設計で選ぶ.md)
- [AI有料プランの割引・キャンペーン比較 ― Claude Pro・Google AI Pro・Perplexity Pro](../../30_Inbox/クラスタ15に追加/AI有料プランの割引・キャンペーン比較 ― Claude Pro・Google AI Pro・Perplexity Pro.md)
- [ChatGPT Workでファイルアクセス拒否が繰り返される原因と切り分け](../../30_Inbox/クラスタ15に追加/ChatGPT Workでファイルアクセス拒否が繰り返される原因と切り分け.md)
- [ChatGPT WorkとCodexは料金体系・クレジット・使用量上限を共有する](../../30_Inbox/クラスタ15に追加/ChatGPT WorkとCodexは料金体系・クレジット・使用量上限を共有する.md)
- [ChatGPT WorkのFastモードとは何か](../../30_Inbox/クラスタ15に追加/ChatGPT WorkのFastモードとは何か.md)
- [ChatGPT Workの利用制限・完全リセット・長時間運用](../../30_Inbox/クラスタ15に追加/ChatGPT Workの利用制限・完全リセット・長時間運用.md)
- [ChatGPTの特定スレッドを1ファイルとして保存する方法](../../30_Inbox/クラスタ15に追加/ChatGPTの特定スレッドを1ファイルとして保存する方法.md)
- [ChatGPT風のMermaid図をObsidian・Quartzで再現する方針](../../30_Inbox/クラスタ15に追加/ChatGPT風のMermaid図をObsidian・Quartzで再現する方針.md)
- [Google AI Creditsの日本購入制限と法規制](../../30_Inbox/クラスタ15に追加/Google AI Creditsの日本購入制限と法規制.md)
- [Google AI ProとPerplexity Proのローカルファイル操作](../../30_Inbox/クラスタ15に追加/Google AI ProとPerplexity Proのローカルファイル操作.md)
- [Google Antigravity無料版はローカルファイル操作にどこまで使えるか](../../30_Inbox/クラスタ15に追加/Google Antigravity無料版はローカルファイル操作にどこまで使えるか.md)
- [KimiのClaude利用問題とAIモデル蒸留の境界](../../30_Inbox/クラスタ15に追加/KimiのClaude利用問題とAIモデル蒸留の境界.md)
- [Perplexity Proを調査専用AIとして使い倒す運用設計](../../30_Inbox/クラスタ15に追加/Perplexity Proを調査専用AIとして使い倒す運用設計.md)
- [Perplexity Research Backlogの設計と運用](../../30_Inbox/クラスタ15に追加/Perplexity Research Backlogの設計と運用.md)
- [Perplexityは2026年時点で検索・調査の専門AIとして評価する](../../30_Inbox/クラスタ15に追加/Perplexityは2026年時点で検索・調査の専門AIとして評価する.md)
- [Windows版ChatGPT Work Localのローカルファイル編集不具合と切り分け](../../30_Inbox/クラスタ15に追加/Windows版ChatGPT Work Localのローカルファイル編集不具合と切り分け.md)
- [Workのモデル・推論レベルとZettelkasten整理作業の使い分け](../../30_Inbox/クラスタ15に追加/Workのモデル・推論レベルとZettelkasten整理作業の使い分け.md)
- [トークン消費量を抑えるための基礎的なスレッド管理](../../32_Zk/basic-thread-management-for-token-efficiency.md)
- [ローカルLLM兼用PCの選定基準](../../30_Inbox/クラスタ15に追加/ローカルLLM兼用PCの選定基準.md)
- [ローカルLLM用PCはVRAM容量を軸に選ぶ](../../30_Inbox/クラスタ15に追加/ローカルLLM用PCはVRAM容量を軸に選ぶ.md)
- [利用状況はCodexとWorkのこと](../../30_Inbox/クラスタ15に追加/利用状況はCodexとWorkのこと.md)

### ~~15-03 文書・データ・デジタル作業~~

- [docsフォルダの役割と構成例](../../31_Research/docs-folder-purpose-and-structure.md)
- [dummy・mock・sample・test・temp・draftの使い分け](../../31_Research/placeholder-mock-sample-test-naming.md)
- [iPadのキャプチャ方法を検討する](../../31_Research/ipad-capture-methods.md)
- [ISO 8601系の日時表記](../../32_Zk/iso-8601-date-time-format.md)
- [KB・MB・GBとKiB・MiB・GiBの違い](../../31_Research/binary-and-decimal-data-units.md)
- [Kindleハイライト時のメモを簡略化](../../32_Zk/simplify-kindle-highlight-notes.md)
- [kindlハイライトのアイコン一覧表](../../32_Zk/kindle-tag-icon-reference.md)
- [line worksとline worksの違いと使い方](../../31_Research/line-vs-line-works-differences.md)
- [Outlookのwinmail.dat問題は添付ファイルの有無を判別できないことがある](../../30_Inbox/クラスタ15に追加/winmail-dat-attachment-handling.md)
- [RICOH IM C3510 VS RICOH IM C3010](../../32_Zk/ricoh-im-c3510-vs-im-c3010.md)
- [sentence-per-lineとsemantic line breaks](../../31_Research/semantic-line-breaks.md)
- [Wordで背景色の付いた図形の上に文字を置くと、その周辺部分だけ背景色が濃くなる問題の解決](../../32_Zk/fix-word-text-background-darkening.md)
- [Wordの比較機能使用中は図形内テキストの画面表示が崩れることがある](../../30_Inbox/クラスタ15に追加/word-compare-shape-text-display.md)
- [エクセル関数で重複判定するときの完全一致と曖昧一致](../../31_Research/excel-exact-duplicate-detection.md)
- [ショートカット、ジャンクション、シンボリックリンクの違い](../../32_Zk/shortcut-junction-symlink-differences.md)
- [スマホ向け「メーラー」一覧表](../../32_Zk/smartphone-mailer-list.md)
- [ネット話題の日次巡回の設計と実施記録](../../30_Inbox/クラスタ15に追加/daily-web-topics-monitoring.md)
- [パスワード管理アプリの選び方](../../31_Research/password-manager-selection.md)
- [パワークエリ内部の整理](../../31_Research/power-query-layer-naming.md)
- [解像度と一般的な呼称](../../32_Zk/resolution-and-common-names.md)
- [図形のベースファイルをコピーするときの現実的な安全設計について](../../31_Research/office-shape-template-replacement.md)
- [中間ファイルの名称を考える](../../31_Research/intermediate-file-naming.md)
- [表示形式で通貨と会計の使い分け](../../31_Research/currency-accounting-number-format.md)
- [優れたユーティリティーの提供はUXを向上させる](../../32_Zk/useful-utilities-improve-ux.md)

### 15-04 PC・Web・ソフトウェア基盤

- [iphoneでおすそ分け充電](../../32_Zk/iphone-wired-charge-sharing-rental-decision.md)
- [SAKULaLaによる生体認証プラットフォームサービス](../../31_Research/sakulala-biometric-service-store-observation.md)
- [USBメモリを用途別に分離する管理方針](../../31_Research/usb-drive-purpose-separation-policy.md)
- [WindowsのDiskイベントID 7とユーザープロファイル変更後の再発について](../../30_Inbox/クラスタ15に追加/windows-disk-event-id-7-profile-recurrence.md)
- [データセンターの冷却特集](../../31_Research/data-center-cooling-feature-product-fit.md)
- [パソコンで特定のアプリの音量を下げる](../../31_Research/windows-app-volume-adjustment.md)
- [マイクロソフトのイルカとキーボードのcaps lockはどちらの方が嫌われているのか？](../../32_Zk/clippy-caps-lock-comparison-question.md)
- [リファクタリング前のコード。](../../31_Research/power-query-receipt-date-transformation.md)
- [ワードプレスでのリダイレクション設定](../../31_Research/wordpress-redirect-configuration-options.md)
- [交流・直流の基本とACアダプター表記](../../31_Research/ac-dc-basics-adapter-labels.md)
- [Windows障害の切り分け：症状から下位原因へ進む診断フロー](../../31_Research/windows-troubleshooting-diagnostic-flow.md)

### ~~15-05 製品・業務・産業知識~~

- [「受信確認」ラベルを設計](../../32_Zk/read-receipt-label.md)
- [「商品」と「製品」の違い](../../32_Zk/difference-between-product-and-goods.md)
- [電力量と電力削減量：技術表現と実務表記の使い分け](../../31_Research/electric-energy-and-power-reduction-terminology.md)
- [BtoB製品リーフレットの会社情報配置](../../30_Inbox/クラスタ15に追加/btob-leaflet-company-information-layout.md)
- [SDGsと8がけ社会と施工業界](../../31_Research/sdgs-eight-tenths-society-construction-industry.md)
- [ファイル名の縦横比表記：ar記法](../../31_Research/aspect-ratio-filename-convention.md)
- [安全在庫算定におけるケース単位とバラ単位の扱い](../../31_Research/safety-stock-case-and-unit-management.md)
- [楽天市場では基本商品を絞り、特殊下地は問い合わせ対応にする](../../30_Inbox/クラスタ15に追加/rakuten-basic-products-and-special-substrates.md)
- [楽天市場のスマホ向け小バナー設計とグランドオープン告知の違い](../../30_Inbox/クラスタ15に追加/rakuten-mobile-small-banner-design.md)
- [楽天市場の商品管理番号は正式英名と分離して設計する](../../30_Inbox/クラスタ15に追加/rakuten-product-management-number-naming.md)
- [楽天市場店の大バナー：役割別訴求の設計](../../30_Inbox/クラスタ15に追加/rakuten-store-large-banner-role-design.md)
- [株式会社アイル](../../32_Zk/ill-inc.md)
- [株式会社アイルソフト](../../32_Zk/aislesoft-inc.md)
- [機械的特性と物理的特性](../../31_Research/mechanical-and-physical-properties.md)
- [現物添付](../../31_Research/physical-sample-attachment.md)
- [施工作業以外に発生する作業の名称まとめ](../../31_Research/non-installation-work-terminology.md)
- [自己消火性と難燃性](../../31_Research/self-extinguishing-and-flame-retardancy.md)
- [施工業界の人手不足を背景にした軽量建材のPRストーリー](../../31_Research/lightweight-materials-pr-story.md)
- [水処理特集とコンタミの関係整理](../../31_Research/water-treatment-and-contamination.md)
- [製品カテゴリーとタグ](../../31_Research/product-categories-and-tags.md)
- [製品関連ファイルは `marketing/products` に集約する](../../30_Inbox/クラスタ15に追加/product-file-organization.md)
- [特定ECルートの売上増加：要因仮説の検証](../../31_Research/ec-sales-increase-hypothesis-analysis.md)
- [売上推移グラフの軸設計に関する整理](../../31_Research/sales-trend-chart-axis-design.md)
- [保温材の燃えやすさについて](../../31_Research/insulation-material-combustibility.md)

### 15-06 映像・画像・配信制作

- [Googleスライドの「セクション管理」と特定スライドの画像エクスポートまとめ](../../31_Research/google-slides-section-management-and-slide-image-export.md)
- [YouTubeアナリティクスにおけるインプレッションの扱い](../../31_Research/youtube-analytics-impressions-explained.md)
- [チャンネル分けを考える判断基準](../../31_Research/channel-separation-decision-criteria.md)
- [Windowsプリンタードライバーの印刷ジョブ設定](../../31_Research/windows-printer-job-settings.md)
- [プリントパック入稿時にグレーが濃くなる問題](../../30_Inbox/クラスタ15に追加/printpac-gray-tone-shift.md)
- [ラベル紙印刷プリセットの確認](../../30_Inbox/クラスタ15に追加/振り分け中/label-paper-printing-preset-investigation.md)
- [画像ファイルの命名規則](../../32_Zk/image-naming-conventions.md)
- [継続的な画像共有ではファイル転送より共有場所を固定する](../../30_Inbox/クラスタ15に追加/persistent-image-sharing-location.md)
- [iPhone・iPadからWindows外付けHDDへ写真・動画を保存するSMB運用](../../31_Research/iphone-ipad-to-windows-hdd-smb-photo-video-workflow.md)
- [代替テキストの必要性](../../32_Zk/need-for-alt-text.md)
- [展示会で写真入りミニカードを活用する目的と設計](../../31_Research/exhibition-photo-mini-card-purpose-and-design.md)
- [動画アーカイブではRAW・クリーンマスター・完成版を分けて保存する](../../30_Inbox/クラスタ15に追加/video-archive-raw-clean-master-deliverable.md)
- [動画公開時間はBtoB・BtoCと閲覧時間帯で分けて考える](../../30_Inbox/クラスタ15に追加/video-publishing-time-by-audience.md)

### ~~15-07 ゲーム・インタラクティブ娯楽~~

- [Epic Games Store・EAのPCゲーム無料配布履歴](../../30_Inbox/クラスタ15に追加/epic-ea-free-game-history.md)
- [GeForce NOW：セール・加入タイミングガイド](../../30_Inbox/クラスタ15に追加/振り分け中/geforce-now-membership-sale-guide.md)
- [GeForce NOW：連携ストア・ライブラリ運用ガイド](../../30_Inbox/クラスタ15に追加/振り分け中/geforce-now-storefront-guide.md)
- [ゲーム購入ガイド一覧](../../30_Inbox/クラスタ15に追加/振り分け中/game-purchase-guides-index.md)
- [PCゲームライブラリ（Steam / Epic Games Store）](../../30_Inbox/クラスタ15に追加/pc-game-library.md)
- [SimCityシリーズの系譜・評価・MOD文化・現行プレイ環境](../../30_Inbox/クラスタ15に追加/simcity-series-history-mods-play-environment.md)
- [Switch 2のゲーム録画・配信準備ログ](../../31_Research/switch-2-game-streaming-planning-log.md)
- [Switch 2・OBS・キャプチャーボード・複数モニター構成メモ](../../30_Inbox/クラスタ15に追加/switch-2-obs-capture-monitor-setup.md)
- [アトリエ アーランド三部作：購入・プラットフォームガイド](../../30_Inbox/クラスタ15に追加/振り分け中/atelier-arland-trilogy-purchase-guide.md)
- [アトリエ 黄昏三部作：購入・プラットフォームガイド](../../30_Inbox/クラスタ15に追加/振り分け中/atelier-dusk-trilogy-purchase-guide.md)
- [アトリエ 不思議三部作：購入・プラットフォームガイド](../../30_Inbox/クラスタ15に追加/振り分け中/atelier-mysterious-trilogy-purchase-guide.md)
- [アトリエDXセットのセール価格予想](../../30_Inbox/クラスタ15に追加/atelier-dx-sale-price-estimates.md)
- [ゲームサブスクとクラウドゲーミング：選び方ガイド](../../30_Inbox/クラスタ15に追加/振り分け中/game-subscription-cloud-gaming-guide.md)
- [ゲーム配信の概要欄・遅延・話し方に関する検討メモ](../../31_Research/game-streaming-description-latency-voice.md)
- [ダンガンロンパ：シリーズ・購入ガイド](../../30_Inbox/クラスタ15に追加/振り分け中/danganronpa-series-purchase-guide.md)
- [テイルズ オブ シリーズ：価格・購入ガイド](../../30_Inbox/クラスタ15に追加/振り分け中/tales-series-price-purchase-guide.md)
- [DQ7リイマジンドの熟練度稼ぎ：未検証の仕様メモ](../../31_Research/dragon-quest-7-reimagined-proficiency.md)
- [ドラゴンクエストビルダーズ1・2：購入・プラットフォームガイド](../../30_Inbox/クラスタ15に追加/振り分け中/dragon-quest-builders-1-2-purchase-platform-guide.md)
- [ニンテンドープリペイドとSwitch Online：キャンペーン活用ガイド](../../30_Inbox/クラスタ15に追加/振り分け中/nintendo-prepaid-switch-online-campaign-guide.md)
- [パラスの本体は「きのこ」である](../../32_Zk/pokemon-paras-mushroom-host-theory.md)
- [ぷよぷよテトリス：シリーズ・購入ガイド](../../30_Inbox/クラスタ15に追加/振り分け中/puyo-puyo-tetris-series-purchase-guide.md)
- [ぽこあポケモン](../../32_Zk/pokoa-pokemon.md)
- [モンスターハンター：シリーズ評価とRise＋Sunbreak購入ガイド](../../30_Inbox/クラスタ15に追加/振り分け中/monster-hunter-series-rise-sunbreak-purchase-guide.md)
- [ルーンファクトリー：SteamとSwitch 2の購入判断ガイド](../../30_Inbox/クラスタ15に追加/rune-factory-platform-purchase-guide.md)
- [幻想水滸伝：シリーズ・HDリマスター購入ガイド](../../30_Inbox/クラスタ15に追加/振り分け中/suikoden-series-hd-remaster-purchase-guide.md)
- [公開しないゲーム配信・録画の意義と運用メモ](../../31_Research/meaningful-game-streaming.md)


### 15-08 芸術・文化・創作

- [「花を愛でる 古きを尊ぶ」の注目作品](../../32_Zk/admiring-flowers-honoring-the-past-highlights.md)
- [『ライオン・キング：ムファサ』感想](../../31_Research/mufasa-the-lion-king-impressions.md)
- [5x5クリエイト](../../32_Zk/sandbox-5x5-creation-method.md)
- [MIHO MUSEUMを囲む大自然「信楽高原」](../../31_Research/miho-museum-and-shigaraki-highlands.md)
- [あをによし：奈良を讃える枕詞と歌](../../31_Research/aoniyoshi-nara-poem-meaning.md)
- [アーモンドタルトの食べ方](../../32_Zk/how-to-eat-almond-tart.md)
- [インスタレーションとラボラトリー](../../30_Inbox/クラスタ15に追加/installation-and-laboratory.md)
- [おーいお茶 ピュアグリーン vs おーいお茶レモン](../../31_Research/oi-ocha-pure-green-vs-lemon.md)
- [ピンクの家キットの活用アイデア](../../31_Research/pink-house-kit-uses.md)
- [フェルメール展 鑑賞メモ](../../30_Inbox/クラスタ15に追加/vermeer-exhibition-viewing-notes.md)
- [河鍋暁斎の世界 2026｜鑑賞ガイド簡易版](../../30_Inbox/クラスタ15に追加/kawanabe-kyosai-2026-viewing-guide-brief.md)
- [河鍋暁斎の世界 2026｜鑑賞ガイド詳細版](../../30_Inbox/クラスタ15に追加/kawanabe-kyosai-2026-viewing-guide-detailed.md)
- [隈研吾・山本理顕・安藤忠雄の建築思想比較](../../31_Research/kengo-kuma-riken-yamamoto-tadao-ando-comparison.md)
- [笹本晃作品の見方―物・力・身体・行為](../../30_Inbox/クラスタ15に追加/akiko-sasamoto-viewing-framework.md)
- [サンドボックス建築における床・天井の素材と模様](../../31_Research/sandbox-floor-ceiling-material-design.md)
- [サンドボックスで赤レンガ倉庫を目玉にする景観設計](../../31_Research/red-brick-warehouse-landmark-design.md)
- [草花をオシャレに散りばめるテクニック](../../31_Research/natural-looking-flower-placement-tips.md)
- [特別企画展　花を愛でる　古きを尊ぶ](../../32_Zk/admiring-flowers-honoring-the-past.md)
- [虹色みぃつけた！｜感想メモ](../../31_Research/rainbow-discovery-viewing-notes.md)
- [伊賀・甲賀忍者を巡る日帰り移動メモ](../../31_Research/iga-koka-ninja-day-trip-notes.md)
- [臨済宗の代表的な宗派](../../32_Zk/major-rinzai-sects.md)

### ~~15-09 旅行・地域・移動~~

- [スマートEXで自由席・指定席を選ぶ](../../31_Research/smart-ex-shinkansen-seat-guide.md)
- [初めての和歌山ラーメン訪問記録](../../31_Research/first-wakayama-ramen-visit.md)
- [ユニバーサルホテルの低価格モデルと予約経路の比較](../../30_Inbox/クラスタ15に追加/universal-hotel-booking-comparison.md)
- [リュックの荷重分散とチェストストラップによる改善](../../31_Research/backpack-load-distribution-guide.md)
- [リュックへ後付けベルトを装着する際の確認項目](../../31_Research/retrofit-backpack-straps.md)
- [岡山と倉敷を巡る旅行は1泊以上を基本にする](../../32_Zk/okayama-kurashiki-overnight-travel.md)
- [関西の鉄道における特急・指定席の追加料金](../../31_Research/kansai-railway-surcharge-rules.md)
- [近鉄週末フリーパスの行き先候補と使い方](../../32_Zk/kintetsu-weekend-free-pass-trip-ideas.md)
- [九州旅行支援を前提とした初九州旅行の候補](../../30_Inbox/クラスタ15に追加/kyushu-support-discount-trip-options.md)
- [九州旅行支援の出典メモ](../../32_Zk/kyushu-travel-support-source.md)
- [ゲーム内港湾都市の区域設計](../../31_Research/city-builder-port-zoning-plan.md)
- [初めてのホテル宿泊チェックリスト](../../30_Inbox/クラスタ15に追加/first-hotel-stay-checklist.md)
- [深里橋周辺の花街に関するメモ](../../31_Research/fukari-bridge-hanamachi-memo.md)
- [神戸・姫路・大阪を巡る2日間の美術館・城郭旅行](../../30_Inbox/クラスタ15に追加/kobe-himeji-osaka-two-day-trip.md)
- [生駒駅前図書室のスマホ・PC利用制限と背景](../../30_Inbox/クラスタ15に追加/ikoma-station-library-device-rules.md)
- [大阪・難波発の九州旅行における交通費と宿泊割引の判断](../../30_Inbox/クラスタ15に追加/振り分け中/osaka-kyushu-budget-travel-guide.md)
- [大阪駅北側にあるルクアとヨドバシ梅田の位置関係](../../32_Zk/lucua-yodobashi-umeda-location.md)
- [姫路アーモンドトーストの成立と観光名物化](../../30_Inbox/クラスタ15に追加/himeji-almond-toast-history.md)
- [姫路城下町1000円クーポンの引換手順と現地確認](../../30_Inbox/クラスタ15に追加/himeji-castle-coupon-redemption.md)
- [旅行・美術館巡り用リュックの容量と買い替え判断](../../30_Inbox/クラスタ15に追加/travel-museum-backpack-capacity.md)
- [和歌山市民図書館の公式情報メモ](../../32_Zk/wakayama-city-library-source.md)

### 15-10 個人の購入・サービス判断

- [Amazonの配送先エラーを確認する](../../32_Zk/amazon-delivery-address-error-checks.md)
- [FamiPay翌月払いの残高・締め日・支払日の確認（2026年9月）](../../30_Inbox/クラスタ15に追加/famipay-deferred-payment-balance-and-due-dates.md)
- [Kindle蔵書のNDC分類とCollection反映を分離する](../../30_Inbox/クラスタ15に追加/kindle-ndc-classification-and-collection-workflow.md)
- [NSFW用途の中古Windowsタブレット選定メモ（2026年1月）](../../32_Zk/nsfw-used-windows-tablet-selection.md)
- [オレンジブックとモノタロウの事業・流通モデル比較](../../32_Zk/orange-book-monotaro-business-models.md)
- [個人用クレジットカードの締め日・支払日メモ](../../32_Zk/personal-card-closing-and-payment-dates.md)
- [ジョーシンポイントの失効前の使い道を考える](../../31_Research/joshin-points-before-expiry.md)
- [月見バーガーの価格・PFC比較（ゼッテリア／マクドナルド、2026年9月）](../../30_Inbox/クラスタ15に追加/tsukimi-burger-price-and-pfc-comparison-2026.md)
- [チケットぴあ定価リセールの条件と手数料（2026年調査）](../../31_Research/pia-face-value-resale-terms-and-fees-2026.md)
- [FamiPay翌月払い新規登録キャンペーンとPOSAカード利用（2026年9月）](../../30_Inbox/クラスタ15に追加/famipay-deferred-payment-posa-campaign-2026.md)
- [回転寿司でタンパク質を選ぶ際のコスパ](../../31_Research/conveyor-belt-sushi-protein-cost-efficiency.md)
- [楽天モバイル従業員紹介URLの記録（2026年5月）](../../32_Zk/rakuten-mobile-employee-referral-url-2026.md)
- [期間限定ファミマポイントでPOSAカードを購入する際の確認（2026年9月）](../../30_Inbox/クラスタ15に追加/famipay-limited-points-posa-card-checks-2026.md)
- [Amazon Seller大口から小口へ移行する際の確認](../../32_Zk/amazon-seller-plan-downgrade-checklist.md)
- [三井住友カードの残高不足後の再引落記録（2026年8月）](../../32_Zk/smbc-card-repayment-after-insufficient-funds.md)
- [保湿ジェルとクリームの使用感・注意点の比較](../../31_Research/moisturizing-gel-and-cream-comparison.md)
- [買う理由が値段ならやめるべき。買わない理由が値段なら買うべき](../../32_Zk/purchase-decisions-value-before-price.md)
- [ChatGPTの解約前無料継続オファーの記録（2026年8月）](../../32_Zk/chatgpt-retention-offer-2026.md)

### ~~15-11 生活・住環境・個人運用~~

- [「目標」は理想と現実のギャップを測るために設置する](../../32_Zk/goals-as-gap-measure.md)
- [2026年の目標：部屋の掃除](../../32_Zk/2026-room-cleaning-goal.md)
- [2分ルールに頼らず、時間枠で判断コストを減らす](../../31_Research/reducing-decision-cost-with-timeboxing.md)
- [所持クリアファイル一覧](../../32_Zk/clear-file-collection.md)
- [スーツの日常ケアには馬毛の洋服ブラシを選ぶ](../../32_Zk/suit-clothes-brush-buying-guide.md)
- [スツールの色は部屋の印象と集中に影響する](../../32_Zk/stools-as-functional-decor.md)
- [デジタルノート術としてのボクシング・メソッド](../../31_Research/boxing-method-for-digital-notes.md)
- [床座り生活からゲーミングチェアへ切り替えた記録](../../32_Zk/buying-a-chair-seriously.md)
- [環境が人を変える](../../32_Zk/environment-shapes-people.md)
- [個人的なブックマーク](../../32_Zk/personal-bookmarks.md)
- [再読時に思考へ戻れること](../../32_Zk/return-to-thinking-on-reread.md)
- [使ってみたいアイテム](../../32_Zk/things-i-want-to-try.md)
- [棚卸し作業の安全に関するなぞなぞ](../../32_Zk/inventory-safety-riddle.md)
- [部屋の初期整理では収納ボックスよりスツールを優先する](../../32_Zk/buy-stools-not-storage-boxes.md)
- [目標一覧](../../32_Zk/goals-list.md)

### ~~15-12 健康・医療・心理~~

- [WAIS-IV・AQ・CAARSによる心理検査の結果と認知特性](../../30_Inbox/クラスタ15に追加/cognitive-assessment-results-wais-aq-caars.md)
- [ショルダープレスの正しいフォーム](../../32_Zk/how-to-do-shoulder-press-correctly.md)
- [ディップスの正しいフォーム](../../32_Zk/how-to-do-dips-correctly.md)
- [バイセップカールの正しいフォーム](../../32_Zk/how-to-do-bicep-curls-correctly.md)
- [マッサージチェアの効果に関する調査メモ](../../31_Research/massage-chair-effects.md)
- [マットレスとカバーについて](../../31_Research/mattress-and-cover.md)
- [マットレスの返品対応に関する調査メモ](../../31_Research/mattress-return-policy.md)
- [むずむず脚症候群](../../31_Research/restless-legs-syndrome.md)
- [筋肉の5つの能力](../../31_Research/five-muscle-capacities.md)
- [服用・常備薬の履歴](../../30_Inbox/クラスタ15に追加/medication-history.md)
- [室内空気の循環に関する検討](../../31_Research/indoor-air-circulation.md)
- [処方箋の4日以内ルールと受け取り忘れへの対応](../../31_Research/prescription-four-day-rule.md)
- [精神科・心療内科・メンタルクリニックに関する相談記録](../../31_Research/mental-health-care-consultation-notes.md)
- [精神科におけるエゴグラム](../../31_Research/egogram-in-psychiatric-care.md)
- [洗面利用での衛生面と清掃負担](../../31_Research/washbasin-hygiene-and-cleaning.md)
- [日常的なストレス・不安への対策と仕事の確認漏れ](../../30_Inbox/クラスタ15に追加/stress-anxiety-and-work-checking.md)
- [未開封のサラダチキンでも常温放置は危険](../../31_Research/unopened-salad-chicken-food-safety.md)

### ~~15-13 言語・概念・基礎知識~~

- [「さい」ではじまる日本の苗字と創作](../../32_Zk/sai-japanese-surnames-and-creation.md)
- [「たか」ではじまる日本の苗字と創作](../../32_Zk/taka-japanese-surnames-and-creation.md)
- [「ふか」ではじまる日本の苗字と創作](../../32_Zk/fuka-japanese-surnames-and-creation.md)
- [「みさ」ではじまる日本の苗字と創作](../../32_Zk/misa-japanese-surnames-and-creation.md)
- [「刷新」や「一新」など変更に関する単語の比較](../../31_Research/「刷新」や「一新」など変更に関する単語の比較.md)
- [adopt, adapt, adeptの違いと覚え方](../../32_Zk/adopt-adapt-adept-how-to-remember.md)
- [ベージュ色と枯草色](../../32_Zk/beige-and-dried-grass-color.md)
- [会計用語](../../32_Zk/accounting-terms.md)
- [旗艦店（フラグシップストア）](../../32_Zk/flagship-store.md)
- [気になった言葉](../../31_Research/気になった言葉.md)
- [記録媒体と磁石の関係](../../32_Zk/magnetism-in-storage-media.md)
- [処置と措置の違いと使い分け](../../31_Research/treatment-vs-measures.md)
- [職業とかけもちの意味の違い](../../31_Research/occupation-and-side-job-meaning.md)
- [前提の相対性](../../32_Zk/obvious-to-me-not-to-others.md)
- [ファイル名に部署名を挿入する位置](../../31_Research/file-name-department-position.md)
- [業務フォルダ名におけるfixとsummaryの使い分け](../../31_Research/fix-vs-summary-for-work-folders.md)
- [透過性](../../32_Zk/transparency.md)

### 15-14 ~~自然科学・材料・食~~

- [エビワラーのパンチ速度を身近な速度と比較する](../../32_Zk/hitmonchan-punch-speed-comparison.md)
- [ケンタッキーのとりの日パックと創業記念パックを比較する](../../31_Research/kfc-chicken-day-and-anniversary-pack-comparison.md)
- [サントリー天然水の地域差に関する資料](../../32_Zk/suntory-natural-water-regional-variations-reference.md)
- [データ・文書・開発ファイルの分類案](../../31_Research/data-document-and-development-file-classification.md)
- [工業部品におけるオス・メス表現と代替用語](../../32_Zk/male-female-terms-in-industrial-components.md)
- [PC操作にフットペダルを活用するための参考記事](../../31_Research/foot-pedal-articles-for-pc-operation.md)
- [雨後に虫が大量に見える原因と羽化の仕組み](../../30_Inbox/クラスタ15に追加/振り分け中/post-rain-insect-emergence-and-eclosion.md)
- [鰻水木で食べたうなぎのたんぱく質量の概算](../../31_Research/unagi-mizuki-eel-protein-estimate.md)
- [オンライン販売サイトの安全性を確認する](../../31_Research/online-store-safety-check.md)
- [中空バルーンとエアロゲルの構造・性能・用途の比較](../../31_Research/hollow-microspheres-and-aerogel-comparison.md)

### 15-15 ~~仕事・労働・制度~~

- [Officeへの不満と転職：業務設計・組織文化・職務適合](../../30_Inbox/クラスタ15に追加/office-dissatisfaction-work-design-and-career-change.md)
- [ミス・能力不足による雇用終了：反復・改善・職務適合の見方](../../30_Inbox/クラスタ15に追加/performance-issues-dismissal-and-job-fit.md)
- [時給の相対的な待遇を最低賃金との差額と差率で評価する](../../30_Inbox/クラスタ15に追加/evaluate-wages-against-minimum-wage.md)
- [近畿2府5県の賃金・最低賃金・物価：実績・現状・見通し](../../31_Research/kansai-wages-minimum-wage-and-inflation.md)
- [出勤命令・有給休暇・休日労働の判断順序](../../30_Inbox/クラスタ15に追加/work-orders-paid-leave-and-holiday-work.md)
- [放送大学とZEN大学を学習目的・費用・学生特典で比較する](../../31_Research/open-university-and-zen-university-comparison.md)
