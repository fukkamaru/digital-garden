---
title: Research＋ZKリファクタリング作業台：06：建材・補修材・材料化学
aliases:
  - Research＋ZKリファクタリング作業台：06：建材・補修材・材料化学
type: fleeting
created: 2026-09-09T14:30:00+09:00
updated: 2026-09-15T19:44:55+09:00
id: 20260909-143000
permalink:
draft: false
tags:
  - ai-generated
---

# Research＋ZKリファクタリング作業台：建材・補修材・材料化学

## このノートの役割

Cluster 06「建材・補修材・材料化学」の親クラスタ内部で、子クラスタ、予定Workスレッド境界、判断、進捗を管理する一時作業台。子クラスタごとの完了結果は [Research＋ZKリファクタリング作業ログ：建材・補修材・材料化学](cluster-06-building-materials-log.md) へ記録する。

## 現在の状態

- 親クラスタ：Cluster 06「建材・補修材・材料化学」
- 状態：06-A〜06-Hと06-Xは完了。完了後メンテナンスの結果確認待ち。
- 一次抽出の規模：台帳上32件。全件がCluster 06の主対象
- 中心課題：材料の分類、物性、施工用途、安全情報、販促表現を混同せず、再利用できる知識関係へ整理する

## 子クラスタと進捗

| ID | 子クラスタ | 主な対象 | 状態 |
| --- | --- | --- | --- |
| 06-A | 加水分解：一般概念・PUレザー・消化 | `chemical-hydrolysis-reaction.md`、`pu-leather-hydrolysis.md`、`digestion-and-hydrolysis.md` | 完了 |
| 06-B | 樹脂、硬化、イオン性、流動特性 | 1液剤／2液剤、エポキシ、カチオン・アニオン・ノニオン、チクソ性 | 完了 |
| 06-C | 断熱・遮熱・充填材・放熱計算 | エアロゲル、ガラスバルーン、断熱／遮熱塗料、窓用断熱材、放熱計算、カタログ設計メモ | 完了 |
| 06-D | 燃焼性・火気リスク・SDS／TDS | UL94、水性塗料の火気リスク、TDS／SDS | 完了 |
| 06-E | 補修用語・パテ・床／石材の表面処理 | 補修・修理・修繕・改修、総パテ、床色、コンクリート床、大理石／御影石 | 完了 |
| 06-F | 防水・屋根・排水設備 | 防水材の容量設計、屋根、排水ます | 完了 |
| 06-G | 配管・耐熱補修・FRP | 配管の穴、蒸気配管、ガラステープ・FRP | 完了 |
| 06-H | 製品カテゴリーと化学業界上の位置づけ | 製品カテゴリ、製品一覧、パテ・シーリング材の体系、建設用化学製品 | 完了 |

## 現役対象ノート（32件）

移管済み10件を除く、現在のCluster 06主配置ノートへの入口一覧。表示名は各ノートの現在のtitleと一致させている。

### 06-A：加水分解

- [加水分解](chemical-hydrolysis-reaction.md)
- [PUレザーと加水分解](pu-leather-hydrolysis.md)
- [消化と加水分解の整理](digestion-and-hydrolysis.md)

### 06-B：樹脂・硬化・流動特性

- [1液剤と2液剤のメリットとデメリット](one-part-vs-two-part-systems.md)
- [エポキシ樹脂の分類](epoxy-resin-classification.md)
- [カチオン系・アニオン系・ノニオン系の整理](ionic-surfactant-classification.md)
- [チクソ性とダイラタンシー現象についての理解と比較](thixotropy-and-dilatancy-comparison.md)

### 06-C：断熱・遮熱・充填材・放熱計算

- [ガラスバルーンについて](glass-microballoon-materials.md)
- [断熱・遮熱とエアロゲルについて](thermal-insulation-heat-shielding-aerogel.md)
- [断熱塗料と遮熱塗料の違い](insulating-vs-reflective-paints.md)
- [放熱量と年間エネルギー量の試算](heat-loss-annual-energy-estimates.md)
- [塗料タイプの窓用断熱材](thermal-paint-for-windows.md)

### 06-D：燃焼性・火気リスク・SDS／TDS

- [UL94 V-0によるプラスチック材料の燃焼性評価](ul94-v0-flammability-rating.md)
- [水性塗料の火気リスク](water-based-paint-fire-risks.md)
- [ビジネス：TDSとSDSの違い](tds-and-sds-purposes.md)

### 06-E：補修用語・パテ・床／石材の表面処理

- [補修・修理・修繕・改修などの言葉の使い分け](repair-renovation-terms-comparison.md)
- [補修表現における範囲・箇所・規模の違い](repair-scope-location-scale-terms.md)
- [総パテ作業とは](full-surface-putty-work.md)
- [床色に合わせて補修する理由](floor-repair-color-matching.md)
- [コンクリート床の表面処理](concrete-floor-surface-treatment.md)
- [大理石と御影石の違い](marble-and-granite-differences.md)

### 06-F：防水・屋根・排水設備

- [ベランダ・屋上・バルコニー向け防水材の容量設計に関する整理](waterproofing-material-quantity-design.md)
- [屋根の名称と分類](roof-names-and-classification.md)
- [排水ますの種類・役割・用語整理](drainage-inspection-chambers.md)

### 06-G：配管・耐熱補修・FRP

- [配管に空いた穴の名称と違い](pipe-hole-terminology.md)
- [蒸気配管の穴を放置することの問題](steam-pipe-leak-risks.md)
- [耐熱補修・ガラステープ・FRPに関する学習まとめ](heat-resistant-repair-glass-tape-frp.md)

### 06-H：製品カテゴリーと化学業界上の位置づけ

- [建築・工業用材料の製品カテゴリー分類](building-industrial-material-product-categories.md)
- [建築・工業用材料の製品カテゴリー 一覧表](building-industrial-material-product-category-list.md)
- [建築・工業用材料の製品一覧表](building-industrial-material-product-list.md)
- [パテ・シーリング材・関連建材製品を分類するためのカテゴリ体系](putty-sealant-product-taxonomy.md)
- [化学業界における補修材や建材の立ち位置](construction-chemical-product-positioning.md)

## 予定Workスレッド境界

1. 06-A：加水分解の分野横断関係。完了。
2. 06-B：樹脂・硬化・流動特性。化学的な前提を共有するため一つのWorkスレッドで扱う。
3. 06-C：断熱・遮熱・放熱計算。性能の根拠とリーフレット表現を分けて扱う。
4. 06-Dと06-G：安全情報と高温・配管補修。製品条件と施工上の注意を接続して扱う。
5. 06-Eと06-F：建築補修・表面処理・防水・排水。施工対象と用語を共有するため一つのWorkスレッドで扱う。
6. 06-H：製品分類と業界上の位置づけ。Cluster 08・09との境界を確認するため独立して扱う。

## 06-X：他クラスタへの移管処理済み

材料そのものを主題としない10件は、台帳上の主クラスタを確定した。ファイルの保存場所、本文、YAML、公開状態は変更していない。

| 移管候補 | 主クラスタ案 | 理由 |
| --- | --- | --- |
| [交流・直流の基本とACアダプター表記](ac-dc-basics-adapter-labels.md)、ネジのオス・メス、嵌合 | Cluster 15 | 一般的な電気・機械用語が中心。 |
| [電子レンジのワット数と加熱時間の換算](microwave-power-time-conversion.md)、[精神科におけるSDS・TEGの役割](psychiatric-sds-teg-questionnaires.md) | Cluster 12 | 生活・健康領域。後者のSDSは安全データシートではなく抑うつ自己評価尺度。 |
| [建設業の高齢化統計とPR資料での活用](construction-workforce-aging-statistics.md) | Cluster 08 | 製品市場・PRでの統計利用が中心。 |
| [断熱塗料リーフレットの算定条件と表記設計](thermal-paint-leaflet-calculation-notes.md)、[補修材リーフレットにおける法規・安全情報の記載](repair-material-leaflet-legal-safety-info.md)、[補修材リーフレットのデータ表記・注釈設計](repair-material-leaflet-data-annotation-design.md)、[工場で使う印刷物のラミネート加工](../32_Zk/factory-print-lamination.md) | Cluster 09 | 製品情報、業務文書、現場運用が中心。 |

## 06-Aの完了内容

- [加水分解](chemical-hydrolysis-reaction.md)を、材料劣化と生体の消化を結ぶ中心概念として再構成した。
- [PUレザーと加水分解](pu-leather-hydrolysis.md)を、加水分解が関わり得る高分子材料の具体例として整理した。
- [消化と加水分解の整理](digestion-and-hydrolysis.md)を、消化に固有の内容を残したLiterature Noteへ圧縮した。
- 3件の変更前全文を同じフォルダの日付付き`.退避-2026-09-09.md`へ保存した。

## 06-Bの完了内容

- 1液剤／2液剤を、成分数ではなく硬化機構・施工条件・製品別の技術資料で比較するLiterature Noteへ再構成した。
- エポキシ樹脂について、硬化前の反応性樹脂と硬化後のエポキシポリマーを分けて整理した。
- カチオン・アニオン・ノニオンについて、荷電の対象を特定しない一般化と、接着性に関する根拠のない断定を除いた。
- レオロジー用語について、チクソ性、せん断増粘、ダイラタンシーを測定条件とともに区別した。
- 4件の変更前全文を同じフォルダの日付付き`.退避-2026-09-09.md`へ保存した。

## 06-Cの完了内容

- ガラスバルーン、エアロゲル、断熱・遮熱塗料を、材料名や製品名だけから性能を断定しないLiterature Noteへ再構成した。
- 公開済みの窓用断熱材ノートを、製品適合と窓性能の確認事項を中心に精密化した。
- ぷちぷちシート、簡易二重窓、塗料タイプの窓用断熱材を比較するLiterature Noteを新設した。
- カタログ案・製品訴求・コピー案を既存の材料ノートから外し、根拠と注意点を含む暫定カタログ設計メモへ分離した。
- 放熱量の試算を「放熱量と年間エネルギー量の試算」として、仮定条件下の表面熱損失差から年間熱量・設備条件を用いた入力エネルギーを段階的に概算するノートへ再整理した。
- 既存5件の変更前全文を同じフォルダの日付付き`.退避-2026-09-09.md`へ保存した。

## 06-Dの完了内容

- UL 94 V-0を、規定火炎に対する小規模な垂直燃焼試験の材料分類として整理し、不燃・耐火・完成製品全体の火災安全性とは区別した。
- 水性塗料の火気管理を、水性表示・消防法上の区分だけで結論づけず、製品・混合後製品のSDSと施工要領を確認する構成へ改めた。
- TDSとSDSを、製品選定・施工の技術資料と、危険有害性・安全取扱いの資料として補完関係に整理した。
- 3件の変更前全文を同じフォルダの日付付き`.退避-2026-09-09.md`へ保存した。

## 06-Eの完了内容

- 補修・修理・修繕・改修を、対象範囲と回復・改善・更新の目的で使い分けるノートへ整理した。
- 総パテを下地面全体の調整作業として整理し、施工回数・材料を一般化しない構成へ改めた。
- 床色の補修を、施設固有の区画ルールと補修箇所の識別性を両立させる判断として整理した。
- コンクリート床の表面処理を、要求性能・下地・使用環境から選定する構成へ改め、固有名称を一般名として扱わない注意を加えた。
- 大理石と御影石の比較を石材の扱いに絞り、石種・仕上げ・使用環境を確認する構成へ改めた。
- 5件の変更前全文を同じフォルダの日付付き`.退避-2026-09-09.md`へ保存した。

## 06-Fの完了内容

- 防水材の必要量を、製品別の標準使用量、工程、施工範囲、ロスで算定するノートへ再構成した。
- 屋根を形状・材料・構法・防水仕様・施工課題の複数軸で整理した。
- 排水ますを用途・位置・構造・機能の多軸分類として整理し、自治体ごとの管理境界を確認する注意を残した。
- 3件の変更前全文を同じフォルダの日付付き`.退避-2026-09-09.md`へ保存した。

## 06-Gの完了内容

- 配管の穴を、観察状態と原因候補を分けて整理した。
- 蒸気漏れを熱損失・安全リスクとして整理し、損失額と補修手順を一般化しない構成へ改めた。
- ガラステープ、樹脂、FRPの役割を分け、補修可否は設備条件と仕様で判断する形へ整理した。
- 3件の変更前全文を同じフォルダの日付付き`.退避-2026-09-09.md`へ保存した。

## 完了後メンテナンス（結果確認待ち）

- [交流・直流の基本とACアダプター表記](ac-dc-basics-adapter-labels.md)、[建設業の高齢化統計とPR資料での活用](construction-workforce-aging-statistics.md)、[精神科におけるSDS・TEGの役割](psychiatric-sds-teg-questionnaires.md)、[補修表現における範囲・箇所・規模の違い](repair-scope-location-scale-terms.md)を、本文に合わせて再構成した。
- [断熱塗料リーフレットの算定条件と表記設計](thermal-paint-leaflet-calculation-notes.md)、[補修材リーフレットにおける法規・安全情報の記載](repair-material-leaflet-legal-safety-info.md)、[補修材リーフレットのデータ表記・注釈設計](repair-material-leaflet-data-annotation-design.md)を、条件・数値・安全情報の根拠を分けて再構成した。
- [電子レンジのワット数と加熱時間の換算](microwave-power-time-conversion.md)と[工場で使う印刷物のラミネート加工](../32_Zk/factory-print-lamination.md)は、本文を変更せず命名整合のみを実施した。
- 旧ファイル名のリンクを更新し、移管候補10件の台帳上の主クラスタをCluster 08・09・12・15へ確定した。

7件の変更前本文は同じフォルダの日付付き退避ファイルへ保存済み。旧ファイル名への現役リンクは0件である。

## 発見時の着眼点

- 材料の一般概念と、特定製品の用途・施工手順を分ける。
- 物性・安全情報・法規・SDS/TDS由来の条件は、出典と時点を確認する。
- ECや販促の表現はCluster 08・09との境界候補として扱い、材料知識そのものと混同しない。
- 同じ材料を複数の分類軸で説明しているノートは、重複か補完かを本文比較で判断する。

## 次のアクション

1. 完了後メンテナンスの結果をFukkamaruが確認する。
2. 問題がなければ、親クラスタの再完了確認を行う。
