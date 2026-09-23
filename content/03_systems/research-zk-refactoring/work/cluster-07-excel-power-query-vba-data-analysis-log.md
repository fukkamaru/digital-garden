---
title: Research＋ZKリファクタリングログ：Excel・Power Query・VBA・データ分析
aliases:
  - Research＋ZKリファクタリングログ：Excel・Power Query・VBA・データ分析
type: fleeting
created: 2026-09-18T01:31:53+09:00
updated: 2026-09-18T12:00:00+09:00
id: 20260918-013154
permalink:
draft: true
tags:
  - ai-generated
---

# Research＋ZKリファクタリングログ：Excel・Power Query・VBA・データ分析

## 2026-09-18T01:31:53+09:00 — 07-0：CSV学習ノートのクラスタ境界

- 作業内容：`csv-qa-to-mindmap-knowledge-network.md`の主題を確認し、Cluster 07から完了済みCluster 11へ主クラスタを変更する案を検討した。
- 結果：Fukkamaruの判断により、当該ノートはCluster 07に維持した。既存ノート、台帳、完了済みCluster 11は変更していない。
- 判断・理由：完了済みCluster 11を再開・変更せず、Cluster 07の対象として継続して監査する。
- 次のアクション／未解決事項：07-A「売上分析のデータ設計」の詳細監査を行う。

## 2026-09-18T02:31:49+09:00 — 07-A：売上分析のデータ設計

- 作業内容：架空サンプル事業、データクレンジング構成、分析条件マスタ、Power Queryの結合キーを監査・再構成した。
- 結果：`kyoto-patty-029-sample-business.md`を、架空事業の設定、14件の略語、データ層、サンプルレコードを持つ中心ノートへ更新した。`data-cleansing-file-organization-and-naming.md`を公開用のRaw／Standard／Analysis／Report設計へ更新し、初期案は`data-cleansing-initial-design-review.md`へ分離した。`sales-analysis-exclusion-criteria-management.md`は分析条件を管理するマスタ設計へ更新し、`mizuoka`を`kyouto_yasue`へ置換した。結合キーのノートは`power-query-merge-key-design.md`へリネームし、結合・集計時の複数パターンと判断基準を再構成した。
- 対象：`31_Research/kyoto-patty-029-sample-business.md`、`31_Research/data-cleansing-initial-design-review.md`、`31_Research/data-cleansing-file-organization-and-naming.md`、`31_Research/sales-analysis-exclusion-criteria-management.md`、`31_Research/power-query-merge-key-design.md`、`31_Research/kyoto-patty-029-fictional-staff.md`。
- 判断・理由：実在の構成や人物を公開用の説明へ持ち込まず、架空事業の設定を共通の参照先として整備した。過去の初期案は削除せず、見直し理由を添えた履歴ノートとして保持した。
- 次のアクション／未解決事項：07-B「Power Queryの変換」を詳細監査する。

## 2026-09-18T03:24:42+09:00 — 07-B：Power Queryの変換

- 作業内容：置換マスタ、空白整形、正規表現による品名表記ゆれの3ノートを監査し、実運用で使用していた記法を保存したうえで、現行の推奨設計を追記・新設した。
- 結果：`power-query-replacement-master-bulk-replace.md`には、部分文字列置換の推奨例と、置換順序・連鎖置換の検証観点を追加した。空白整形ノートには、京藤康恵の入出力例と、対象空白文字を明示した実装例を追加した。初期の正規表現ノートは`regex-based-product-name-normalization-initial-review.md`へ履歴化し、`product-name-notation-normalization-design.md`、`chaotic-product-name-variation-normalization-methods.md`、`cheese-kamaboko-product-name-normalization-case.md`を新設した。
- 判断・理由：VBAの`Replace`とPower Queryの`Text.Replace`へ正規表現文字列を渡す方式は採用しない。表記差のみを自動整形し、規格や区分の不整合は対応マスタと例外一覧で確認する。チーズかまぼこの33件は、別名マスタとの完全一致結合を優先し、正規表現は要素抽出の補助手段として位置づけた。
- 対象：`31_Research/power-query-replacement-master-bulk-replace.md`、`31_Research/パワークエリで文字列前後のスペースを削除して、連続するスペースを1つにする.md`、`31_Research/regex-based-product-name-normalization-initial-review.md`、`31_Research/product-name-notation-normalization-design.md`、`31_Research/chaotic-product-name-variation-normalization-methods.md`、`31_Research/cheese-kamaboko-product-name-normalization-case.md`。
- 次のアクション／未解決事項：07-C「VBAによるファイル処理」を詳細監査する。

## 2026-09-18T03:31:42+09:00 — 07-C：VBAによるファイル処理（一部完了）

- 作業内容：シート複製・表示セル抽出の使い分けと、マクロ有効化時の安全運用を現行の公式資料に照らして再構成した。
- 結果：`vba-sheet-copy-visible-cells-column-grouping.md`を、`Worksheet.Copy`と`SpecialCells(xlCellTypeVisible)`の目的・対象・失敗時の扱いを分けたノートへ更新した。`enable-macros-in-excel.md`は、個別ファイルのブロック解除、信頼できる発行元、信頼済み場所の最小権限運用へ更新した。両方の変更前ノートは退避した。
- 保留事項：`VBAで個別のファイルをガッチャンコする その1.md`〜`その4.md`は、順序と関連が未確定である。関係のある開発履歴として残し、統合・再構成は後回しにする。
- 判断・理由：分割・再結合マクロを急いで現行手順へ統合すると、処理順を誤って履歴情報を失うおそれがあるため。先に、直接再利用できる安全上の知識だけを整備した。
- 次のアクション／未解決事項：07-D「入力・表計算の仕組み」を詳細監査する。

## 2026-09-18T03:40:58+09:00 — 07-D：入力・表計算の仕組み

- 作業内容：数式表示、全組み合わせの出力、依存プルダウンを監査した。AppSheetのトレーニング記録アプリは既に現行運用と関連ノートの関係が整理されているため、当初は内容を変更しなかった。
- 結果：`エクセルに計算式を文字列として表示したい.md`を`literature`へ整備した。`google-sheets-generate-all-combinations.md`はKyoto Patty 029の食品系架空データを使う説明へ更新し、直積を使う条件と対応マスタを使う条件を分けた。`無題のファイル 3 1.md`は`google-sheets-dependent-dropdown-design.md`へリネームし、既存の候補表構成を保存したうえで、補助範囲と入力規則を分ける安全な設計を追加した。初期検討は`dependent-dropdown-initial-design-review.md`へ分離した。
- 判断・理由：依存プルダウンの候補は、正本マスタを一つに保ち、`FILTER`等の結果を補助範囲へ出してから入力規則の候補範囲として参照する。入力規則へ式を直接書く説明は採用しない。
- 次のアクション／未解決事項：07-E「GA4・Looker Studio」を詳細監査する。

## 2026-09-18T00:00:00+09:00 — 07-E：GA4・Looker Studio

- 作業内容：GA4とLooker Studioの7ノートを公式資料に照らして監査し、用語・計測範囲・レポート上の解釈を現行仕様へ再構成した。
- 結果：EC計測、ページ／ランディングページ、ユーザー指標、サイト分析KPI、キーイベント率、`file_download`、期間コントロールをそれぞれ英語ファイル名・明確なtitle・`literature`で整備した。`GA4についての調べごと`と期間設定の初期回答は、`ga4-initial-analysis-notes.md`と`looker-studio-date-range-control-initial-review.md`へ履歴化した。キーイベント率の実測値は値を変えず、丸めによる概算であることと、キーイベント数とは分母が違うことを追記した。
- 判断・理由：総ユーザーを重複訪問の合計とする説明、`file_download`で保存・右クリック操作まで断定する説明、旧「コンバージョン」と現行のキーイベントを混同する説明は採用しない。ページ間の期間同期は、ページ内適用という公式仕様を超えて保証しない設計とした。
- 対象：`31_Research/ecommerce-ga4-measurement-design.md`、`ga4-page-and-landing-page-analysis.md`、`ga4-user-metrics.md`、`ga4-site-analysis-kpi-design.md`、`ga4-key-event-metrics-and-rate.md`、`ga4-file-download-measurement.md`、`looker-studio-date-range-control-scope.md`、`ga4-initial-analysis-notes.md`、`looker-studio-date-range-control-initial-review.md`。
- 次のアクション／未解決事項：07-Cの分割・再結合VBA（その1〜4）は保留のまま。Cluster 07の他の承認済み子クラスタは完了したため、次の対象クラスタはロードマップに従いCluster 04とする。

## 2026-09-18T04:34:24+09:00 — 07-C：管理部署別ファイル切り出しの開発履歴

- 作業内容：一次保留の「その1〜4」を照合し、実際の処理内容と改版関係を確認した。
- 結果：その1とその3のVBAは94行すべて完全一致していたため、現役のその3を削除し、削除理由を記した退避ノートを残した。その1は切り出し初期版、その4はテーブル化・ソート・列グループ化・金額式を加えた切り出し拡張版として相互リンクした。`safe-department-inventory-workbook-export.md`を新設し、元データをフィルター操作せず、既存出力を上書きせず、テーブルの列名で扱う後継例を提示した。
- 判断・理由：その1・その4のコードは当時の開発履歴として変更しない。実行安全性・出力方針・列指定・例外時の復旧は、歴史的コードへ混在させず後継例で扱う。なお、実際に個別ファイルを再結合する処理はその2であり、位置付けと改修は保留する。
- 対象：`31_Research/VBAで個別のファイルをガッチャンコする その1.md`、`31_Research/VBAで個別ファイルをガッチャンコする その4.md`、`31_Research/safe-department-inventory-workbook-export.md`。削除対象は`VBAで個別ファイルをガッチャンコする その3.md`（退避版あり）。
- 次のアクション／未解決事項：その2の再結合処理について、部署別ファイル側でどの編集を想定していたかを確認してから、安全な後継設計を決める。

## 2026-09-18T05:19:33+09:00 — 07-C：部署別入力ファイルの再集約

- 作業内容：その2の運用目的を確認した。部署別に切り出した棚卸ファイルを、棚卸入力後に一つの次回用ブックへ戻すサイクルである。
- 結果：その2は`部署別棚卸ファイル再集約VBA：初期版`として当時のコードを保存し、`safe-department-inventory-workbook-combine.md`を新設した。後継例は、全入力を検証してから現在の`.xlsm`を新しい日時付き`.xlsm`へ複製し、複製側の「使用」「不使用と廃番」だけをデータ行から再構成する。
- 判断・理由：元の`.xlsm`を直接更新すると、次回に戻る基準と今回の結果が混ざる。新世代の`.xlsm`を残せば、マクロ・管理部署一覧を引き継ぎつつ、棚卸サイクルごとの正本を分けられる。
- 次のアクション／未解決事項：実運用前に、コピーしたテスト用フォルダで1部署・複数部署・不足ファイルの各ケースを検証する。

## 2026-09-18T12:00:00+09:00 — 07：校正・命名・参照の最終整理

- 作業内容：本文とtitleを照合し、内容に合う英語ファイル名へ変更した。CSV学習ノートはデータ構造・変換フロー・マインドマップの方針を中心に校正し、AppSheetノートは当時の迷い・試行・判断を残す実装記録として校正した。
- 結果：7件を英語ファイル名へ変更し、作業台にCluster 07の全35件へのリンクを追加した。台帳の件数とパスを更新し、ロードマップではCluster 07を完了とした。
- 判断・理由：完成した内容だけに圧縮すると、既存データとの互換性、計算の責務、一括入力の設計をどう選んだかが失われるため。AppSheetは判断過程を残し、CSVは再利用可能な変換手順を読み取りやすくする方針とした。
- 次のアクション／未解決事項：Cluster 04を次の作業対象とし、その後にCluster 14、Cluster 15へ進む。
