---
title: 中間ファイルの名称を考える
aliases:
  - 中間ファイルの名称を考える
type: literature
created: 2026-08-13T10:14:55+09:00
updated: 2026-09-22T14:09:02+09:00
id: 20260813-101455
permalink:
draft: true
tags:
  - field
  - ai-generated
---

# 中間ファイルの名称を考える

売上分析で内部データを置換・集計する場合、中間ファイル名は「何を含むか」と「どの集計範囲か」が判断できる名前にする。保存先が`analysis_inspection/sales_analysis/intermediate_files`なら、ファイル名は工程よりデータ内容を優先してよい。

|対象|命名例|
|---|---|
|組織別・地域別・単月データ|`organization_region_monthly_data.xlsx`|
|組織別・地域別・累計データ|`organization_region_cumulative_data.xlsx`|
|組織別KPデータ|`organization_kp_data.xlsx`|
|組織別SCデータ|`organization_sc_data.xlsx`|
|営業担当・杉本のデータ|`sales_rep_sugimoto.xlsx`|
|総合・単月データ|`general_monthly_data.xlsx`|
|総合・累計データ|`general_cumulative_data.xlsx`|

名称には、対象範囲、集計期間、データ種別を必要な順に含める。中間ファイルは最終成果物ではないため、用途が変わった場合に誤解を生まないよう、作業段階を示すフォルダと内容を示すファイル名を組み合わせる。
