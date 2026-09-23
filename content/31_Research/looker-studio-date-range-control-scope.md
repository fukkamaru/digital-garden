---
title: Looker Studioにおける期間コントロールの適用範囲
aliases:
  - Looker Studio「期間設定」のページ間同期についての整理
type: literature
created: 2026-06-20T22:35:35+09:00
updated: 2026-09-23T22:00:58+09:00
id: 20260620-223535
permalink:
draft: true
---

Looker Studioの期間コントロールは、閲覧者が選んだ期間を**そのコントロールが置かれたページのグラフ**へ適用する。グループ化や対象グラフの選択で適用範囲を狭められる。公式仕様はページ内の適用範囲を定義しているため、複数ページをまたぐ閲覧者の選択状態を前提としたレポート設計にはしない。[^date-control]

|対象|期間の決め方|用途|
|---|---|---|
|レポート全体の既定値|編集者がレポート設定で指定|全ページの初期表示をそろえる|
|ページ・グラフの既定値|編集者がページまたはコンポーネントに指定|個別ページだけ別期間にする|
|期間コントロール|閲覧者がページ内で選択|そのページの比較期間を切り替える|

## 閲覧モードでの設計判断

- 「1ページ目で選んだ日付が、2ページ目でも必ず維持される」ことを標準機能として期待しない。
- 全ページで同じ比較期間を前提に読ませるなら、共通の既定期間を設定し、ページごとに期間コントロールを置く場合は各ページで再選択が必要になり得ることを説明する。
- 期間を一度だけ選ばせたいことが強い要件なら、情報を1ページに集約する、ページ数を減らす、またはURLパラメータ等を含む別の設計を個別に検討する。

編集者が設定する既定の期間と、閲覧者が操作する期間コントロールを混同しない。過去の誤った案内と、そこからの修正経緯は[[looker-studio-date-range-control-initial-review|期間コントロール初期検討の記録]]に残す。[^date-default]

[^date-control]: [Looker Studio の日付範囲コントロール（Google Cloud）](https://cloud.google.com/looker/docs/studio/date-range-control)
[^date-default]: [Looker Studio のレポート日付範囲の設定（Google Cloud）](https://cloud.google.com/looker/docs/studio/set-report-date-ranges)
