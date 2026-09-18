---
title: Research＋ZKリファクタリング作業台：Excel・Power Query・VBA・データ分析
aliases:
  - Research＋ZKリファクタリング作業台：Excel・Power Query・VBA・データ分析
type: fleeting
created: 2026-09-18T01:31:53+09:00
updated: 2026-09-18T12:00:00+09:00
id: 20260918-013153
permalink:
draft: true
tags:
  - ai-generated
---

# Research＋ZKリファクタリング作業台：Excel・Power Query・VBA・データ分析

## 親クラスタの範囲

Excel、Googleスプレッドシート、AppSheet、Power Query、VBA、GA4、Looker Studioに関するノートを対象に、再利用可能な仕組みと、個別の業務・学習・設定記録を分けて監査する。

Cluster 07の現役ノートは35件である。正規表現置換ノートの初期案・現行設計、一般例と「チーズかまぼこ」のケーススタディ、依存プルダウンの初期案、棚卸VBAの安全な後継例、架空事業の補助ノートを含めて数えている。削除済み「その3」の退避ノートはアーカイブのため、この件数に含めない。

## 子クラスタと処理順序

| ID | 子クラスタ | 対象 | 状態 | 主な論点 |
| --- | --- | --- | --- |
| 07-0 | 境界確認：CSV学習 | [CSVのQ&Aデータをマインドマップと知識ネットワークへ変換する記録](../../31_Research/csv-qa-to-mindmap-knowledge-network.md) | 完了 | 学習・知識整理を主題とするが、Fukkamaruの判断によりCluster 07に維持する。完了済みCluster 11へは移管しない。 |
| 07-A | 売上分析のデータ設計 | [架空事業](../../31_Research/kyoto-patty-029-sample-business.md)・[スタッフ](../../31_Research/kyoto-patty-029-fictional-staff.md)・[初期案](../../31_Research/data-cleansing-initial-design-review.md)・[ファイル構成](../../31_Research/data-cleansing-file-organization-and-naming.md)・[除外条件](../../31_Research/sales-analysis-exclusion-criteria-management.md)・[結合キー](../../31_Research/power-query-merge-key-design.md) | 完了 | 架空サンプル、マスタ、結合キー、除外条件、Raw／Standard／Reportの関係を再構成。 |
| 07-B | Power Queryの変換 | [置換マスタ](../../31_Research/power-query-replacement-master-bulk-replace.md)・[空白整形](../../31_Research/パワークエリで文字列前後のスペースを削除して、連続するスペースを1つにする.md)・[初期案](../../31_Research/regex-based-product-name-normalization-initial-review.md)・[現行設計](../../31_Research/product-name-notation-normalization-design.md)・[段階的正規化](../../31_Research/chaotic-product-name-variation-normalization-methods.md)・[ケース](../../31_Research/cheese-kamaboko-product-name-normalization-case.md) | 完了 | 実運用の記法を残しつつ、置換・正規化・例外管理の推奨設計と、実データ33件を用いたケーススタディを整備。 |
| 07-C | VBAによるファイル処理 | [シート複製](../../31_Research/vba-sheet-copy-visible-cells-column-grouping.md)・[切り出し初期版](<../../31_Research/VBAで個別のファイルをガッチャンコする その1.md>)・[再集約初期版](<../../31_Research/VBAで個別のファイルをガッチャンコする その2.md>)・[切り出し拡張版](<../../31_Research/VBAで個別ファイルをガッチャンコする その4.md>)・[安全な切り出し](../../31_Research/safe-department-inventory-workbook-export.md)・[安全な再集約](../../31_Research/safe-department-inventory-workbook-combine.md)・[リファクタリング例](../../31_Research/inventory-split-and-combine-refactored-vba.md)・[マクロ安全運用](../../32_Zk/enable-macros-in-excel.md) | 完了 | 棚卸の分割・入力・新世代`.xlsm`への再集約という運用サイクルを、履歴と安全な後継例に分離。 |
| 07-D | 入力・表計算の仕組み | [AppSheet実装記録](../../31_Research/appsheet-workout-recording-app-implementation-history.md)・[数式表示](../../31_Research/エクセルに計算式を文字列として表示したい.md)・[全組み合わせ](../../31_Research/google-sheets-generate-all-combinations.md)・[依存プルダウン](../../31_Research/google-sheets-dependent-dropdown-design.md)・[初期検討](../../31_Research/dependent-dropdown-initial-design-review.md) | 完了 | AppSheetは判断の迷いを含む実装記録として校正。数式表示、食品系サンプルの直積、依存プルダウンの既存構成と安全な設計を整理。 |
| 07-E | GA4・Looker Studio | [EC計測](../../31_Research/ecommerce-ga4-measurement-design.md)・[ページ分析](../../31_Research/ga4-page-and-landing-page-analysis.md)・[ユーザー指標](../../31_Research/ga4-user-metrics.md)・[KPI](../../31_Research/ga4-site-analysis-kpi-design.md)・[キーイベント](../../31_Research/ga4-key-event-metrics-and-rate.md)・[ダウンロード](../../31_Research/ga4-file-download-measurement.md)・[期間コントロール](../../31_Research/looker-studio-date-range-control-scope.md)・[GA4初期記録](../../31_Research/ga4-initial-analysis-notes.md)・[Looker初期記録](../../31_Research/looker-studio-date-range-control-initial-review.md) | 完了 | ユーザー指標、ページ／入口、キーイベント、`file_download`、EC計測、期間コントロールを公式仕様に照らして再構成。 |

## 予定Workスレッド境界

1. 07-0〜07-B：学習データ、売上分析設計、Power Query変換は、データ構造と再利用可能な処理という共通文脈で扱う。
2. 07-C〜07-D：VBA、入力フォーム、スプレッドシートの操作・自動化を扱う。
3. 07-E：GA4／Looker Studioの時限仕様と分析設計を、公式資料の確認を伴う独立した文脈で扱う。

## 作業上の境界と留意点

- Cluster 11は完了済みのため、07-0のノートは主クラスタを変更しない。
- GA4、Looker Studio、AppSheet、Excelの現行仕様を本文へ更新する場合は、変更直前に公式資料を確認する。
- 実務由来のデータ、組織、パス、商品、数値は、公開可否と架空サンプルへの置換要否を個別に確認する。
- 各子クラスタでは、内容・関係・役割を監査した後に、変更案を指示ID付きで提示する。承認前に既存ノートは変更しない。

## 進捗

- 2026-09-18：親クラスタを開始。07-0は「Cluster 07に維持」と決定。
- 2026-09-18：07-Aを完了。架空事業設定、データクレンジング構成、分析条件マスタ、結合キー設計を公開用サンプルとして再構成した。次の詳細監査対象は07-B。
- 2026-09-18：07-Bを完了。実運用の置換・空白整形の記法を保存し、正規化・対応マスタ・例外管理・実データ33件の扱いを整理した。次の詳細監査対象は07-C。
- 2026-09-18：07-Cは一部完了。シートコピーとマクロ安全運用を更新し、分割・再結合マクロ（その1〜4）は開発履歴として保留した。次の詳細監査対象は07-D。
- 2026-09-18：07-Dを完了。AppSheetの運用ノートは変更せず、数式表示、組み合わせ、依存プルダウンの実装・履歴を整理した。次の詳細監査対象は07-E。
- 2026-09-18：07-Eを完了。GA4／Looker Studioの現行設計を7件へ再構成し、GA4 KPIと期間コントロールの初期検討を履歴ノートとして2件分離した。キーイベント率の実測値は日付付きの例として保持し、定義・概算・解釈を修正した。
- 2026-09-18：07-Cの一次保留を再開。その1とその4を「管理部署別ファイル切り出し」の開発履歴として接続し、同一コードのその3は退避後に削除した。元コードを変更しない安全な後継例を新設した。再結合を担うその2は継続保留とする。
- 2026-09-18：その2を確認し、部署別入力ファイルを棚卸完了後に再集約する処理と確定した。現在の`.xlsm`を複製してコピー側だけを再構成する後継例を作成し、次回もマクロ一式を使える新世代ファイルを残す運用へ整理した。07-Cを完了とする。
- 2026-09-18：Cluster 07のタイトルと本文を照合し、7件を内容に合う英語ファイル名へ変更した。AppSheet実装記録とCSV学習記録を校正し、作業台の全35件のリンクと台帳・ロードマップを更新した。Cluster 07を完了とする。
