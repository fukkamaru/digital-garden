---
title: Research＋ZKリファクタリング作業ログ：EC・商品管理・マーケティング
aliases:
  - Research＋ZKリファクタリング作業ログ：EC・商品管理・マーケティング
type: fleeting
created: 2026-09-17T04:59:15+09:00
updated: 2026-09-17T05:59:08+09:00
id: 20260917-045915
permalink:
draft: true
tags:
  - ai-generated
---

# Research＋ZKリファクタリング作業ログ：EC・商品管理・マーケティング

## このログの役割

Cluster 08「EC・商品管理・マーケティング」の親クラスタ用ログ。Workスレッドをまたいで、子クラスタごとの完了結果を記録する。

- ログへの1回の書き込みは、子クラスタの処理と検証が完了した時点で行う。
- Workスレッドの開始・終了・切替だけを理由にログエントリを作らない。
- 同じCluster 08の処理中は、Workスレッドが替わってもこのファイルへ追記する。
- 子クラスタ一覧、依存関係、予定スレッド境界、進捗は[Cluster 08作業台](cluster-08-ec-product-management-marketing.md)を正本とする。

## 状態

- 親クラスタ：Cluster 08「EC・商品管理・マーケティング」
- 状態：完了。08-A〜08-Dを完了。
- ログエントリ：4件

## 2026-09-17T05:59:08+09:00 — 08-D BtoBマーケティングと根拠あるPR

- 作業内容：パブリシティ型PRと製品アピールの違い、BtoBにおけるリード、建設業就業者の年齢構成をPR資料で扱う際の根拠を監査した。
- 結果：`publicity-pr-and-product-appeal.md`を、製品の魅力を直接伝えるアピールと、媒体の取材・掲載判断に接続するパブリシティ型PRを分けるLiterature Noteへ再構成した。第三者評価とは断定せず、媒体の掲載判断・報道価値・検証可能な根拠を扱う形にした。`b2b-lead-basics.md`はリードだけを扱うFleeting Noteとして整理し、`construction-workforce-aging-statistics.md`は国土交通省の2025年版資料に基づき2024年値を55歳以上36.7％、29歳以下11.7％へ更新した。
- 対象：`31_Research/publicity-pr-and-product-appeal.md`、`32_Zk/b2b-lead-basics.md`、`31_Research/construction-workforce-aging-statistics.md`
- 判断・理由：背景統計はパブリシティの題材となる社会・業界課題の説明に使えるが、製品性能の証明にはならない。製品の主張には、仕様書、試験、施工条件など別の根拠が必要である。
- 保全：3ノートの変更前全文を日付付き`.退避`へ保存した。内容との対応を再監査し、Cluster 08の現役8ファイルを英語名へ変更した。リンク集とリードの2ノートは本文に合わせてtitleを修正し、旧titleはaliasesとして保持した。
- 主要な参照元：[日本パブリックリレーションズ協会：パブリシティー](https://prsj.or.jp/dictionary/%E3%83%91%E3%83%96%E3%83%AA%E3%82%B7%E3%83%86%E3%82%A3%E3%83%BC%EF%BC%88publicity%EF%BC%89/)、[国土交通白書 2025](https://www.mlit.go.jp/hakusyo/mlit/r06/hakusho/r07/html/n1111000.html)
- 検証：作業台に記録したCluster 08の現役13ファイルへのリンクがすべて実在ファイルへ解決すること、13件すべてで英語ファイル名、YAMLの`title`と`aliases`の一致を確認した。旧ファイル名の現役パスは残っていない。
- 次のアクション／未解決事項：08-A〜08-Dを完了し、Cluster 08を完了とする。

## 2026-09-17T05:29:44+09:00 — 08-C EC運用・認証・掲載条件

- 作業内容：R-LoginとRMSの利用者・権限管理、パスワード変更要求の記録、現代のパスワード管理、認証設計の変化、楽天市場の商品画像容量の記録を監査した。
- 結果：`rakuten-rlogin-rms-overview.md`を、現行のR-Login公式ヘルプに基づく利用者管理・権限・RMSの役割のLiterature Noteへ再構成した。統合元の退避を参照し、90日変更を求められた当時の記録、現在のパスワード管理、定期変更からMFA・パスキーへ向かう認証設計の変化を、3件の新規Literature Noteへ分割した。`rakuten-product-image-file-size-management.md`は、時点付きの短いFleeting Noteとして`field`タグを維持した。
- 対象：`31_Research/rakuten-rlogin-rms-overview.md`、`31_Research/rlogin-90-day-password-change-record.md`、`31_Research/modern-password-management-principles.md`、`31_Research/password-authentication-practice-transition.md`、`32_Zk/rakuten-product-image-file-size-management.md`
- 判断・理由：90日という期間は、元記録にある表示・運用として保存する一方、2026-09-17時点の公開ヘルプでは固定の90日ルールを確認できなかった。現行仕様として断定せず、操作時点の公式画面を優先する。定期変更の歴史的な統制意図と、個別アカウント・MFA・パスキーを重視する現在の考え方を別ノートへ分けた。
- 保全：統合先・統合元の変更前全文を、同じ`31_Research`フォルダの日付付き`.退避`へ保存済み。統合元の現役ファイルは削除済みであり、3件の新規ノートはその退避を根拠に作成した。
- 主要な参照元：[楽天ビジネスログイン：R-Loginとは](https://glogin.rms.rakuten.co.jp/help/29_01.html)、[NIST SP 800-63B](https://pages.nist.gov/800-63-4/sp800-63b.html)、[CISA：フィッシング耐性のあるMFA](https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-059a)
- 検証：新規3ファイルの存在、YAMLの`title`・`aliases`・`type`・`draft`・`id`、相互リンク、および作業台・変更履歴の相対リンクを確認した。
- 次のアクション／未解決事項：08-D「BtoBマーケティングと根拠あるPR」を詳細監査する。統計・市場情報・サービス仕様を本文へ更新する場合は、変更直前に一次資料または公式資料を確認する。

## 2026-09-17T05:08:09+09:00 — 08-B 販売チャネルと商品情報の見せ方

- 作業内容：FBA/FBAEの説明、Amazon A+コンテンツ、iPROSの短い現場記録を、チャネルごとの情報設計と現行仕様の区別という観点で監査した。
- 結果：`channel-fbae-framework.md`を、製品説明をFeature、Advantage、Benefit、Evidenceで整理し、チャネルごとに要約と詳細資料を分けるLiterature Noteへ再構成した。`amazon-a-plus-content-states.md`を、Amazon公式で確認したA+コンテンツだけを扱うLiterature Noteへ再構成した。両ノートを相互リンクし、ASIN・XASINに関する未確認の内容は現役ノートから外した。`ipros-industry-site-links.md`は`field`タグの短い記録として維持した。
- 対象：`31_Research/channel-fbae-framework.md`、`31_Research/amazon-a-plus-content-states.md`、`31_Research/ipros-industry-site-links.md`
- 判断・理由：FBAEは特定のモールの固定入力ルールではなく、製品の説明と根拠を整理する枠組みである。Amazon・iPROSの掲載仕様は変わり得るため、現行仕様と一般的な情報設計を分離した。個人や特定業種が扱う製品だと分かる表現は一般化した。
- 保全：再構成した2ノートの変更前全文を、それぞれ同じ`31_Research`フォルダの日付付き`.退避`へ保存し、作成後に存在を確認した。
- 主要な参照元：[Amazon Selling Services：Amazon Brand Registry](https://sell.amazon.co.jp/en/brand-registry)、[イプロス：BtoB向け情報検索サイト](https://pro.www.ipros.com/)
- 次のアクション／未解決事項：08-C「EC運用・認証・掲載条件」を詳細監査する。楽天の認証・RMS・画像容量の仕様を本文へ更新する場合は、変更直前に公式資料で確認する。

## 2026-09-17T04:59:15+09:00 — 08-A 商品識別と商品マスタ設計

- 作業内容：楽天市場における商品管理番号とSKU管理番号の設計例、および型番・品番・GTIN（JANコード）・ISBN・店舗内SKUの役割を、内容・関係・役割の3軸で監査した。
- 結果：`rakuten-product-number-sku-variation-design.md`を、楽天の現行仕様とダミー製品での設計例を区別するLiterature Noteへ再構成した。ダミー製品のカタカナ名は「サーモン」へ変更し、英字識別子は維持した。`product-identifiers-model-number-gtin-isbn.md`は一般知識を扱うLiterature Noteへ変更し、個人が扱う製品だと分かる表現を一般化した。両ノートに相互リンクを追加した。
- 対象：`31_Research/rakuten-product-number-sku-variation-design.md`、`31_Research/product-identifiers-model-number-gtin-isbn.md`
- 判断・理由：商品ページ、バリエーション、流通上の取引単位、店舗内在庫の識別子は役割が異なる。楽天のサービス仕様は変わり得るため、実際の登録直前に公式資料を再確認する。特定の製品・色・コードはダミーであることを明示し、一般原則と混同しない。
- 保全：両ノートの変更前全文を、それぞれ同じ`31_Research`フォルダの日付付き`.退避`へ保存し、作成後に存在と内容を確認した。
- 主要な参照元：[楽天市場 Compass：SKU版：初めての商品登録の流れ](https://compass-next.zendesk.com/hc/ja/articles/17622562530585--SKU%E7%89%88-%E5%88%9D%E3%82%81%E3%81%A6%E3%81%AE%E5%95%86%E5%93%81%E7%99%BB%E9%8C%B2%E3%81%AE%E6%B5%81%E3%82%8C)、[GS1 Japan：GTIN（JANコード）とは](https://www.gs1jp.org/code/jan/about_jan.html)、[International ISBN Agency：What is an ISBN?](https://www.isbn-international.org/index.php/node/10)
- 次のアクション／未解決事項：08-B「販売チャネルと商品情報の見せ方」を詳細監査する。AmazonやiPROSの掲載仕様を本文へ更新する場合は、変更直前に公式資料で確認する。
