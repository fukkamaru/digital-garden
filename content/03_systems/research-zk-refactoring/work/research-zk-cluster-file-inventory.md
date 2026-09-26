---
title: Research＋ZK仮クラスタ・ファイル台帳
aliases:
  - Research＋ZK仮クラスタ・ファイル台帳
type: fleeting
created: 2026-09-08T21:03:56+09:00
updated: 2026-09-26T10:38:08+09:00
id: 20260908-210356
permalink:
draft: false
tags:
  - ai-generated
---

# Research＋ZK仮クラスタ・ファイル台帳

## このノートの役割

ResearchとZettelkastenの現役Markdownを、ファイル単位で既存クラスタ番号へ仮配置する台帳。スレッド変更時は、本台帳を全体ロードマップと各クラスタ作業台の間に読み、対象ファイルとクラスタ番号のずれを防ぐ。

内容精査前の配置であり、分類は確定判断ではない。各クラスタの詳細監査で、主クラスタ・副クラスタ・状態を更新する。

## 対象と集計基準

- 対象：`31_Research` 382件、`32_Zk` 188件、合計 570件
- 含む：現役の`.md`ファイル。type、draftの値を問わない
- 除く：ファイル名に`.退避`を含む復元用ファイル
- 根拠：既存ロードマップ、既存作業台、ファイル名、YAML `title`
- Cluster 15：現時点で既存14クラスタへの配置根拠が弱いノートを保留せず保持する受け皿

## クラスタ別件数

| No. | クラスタ | 件数 | 配置の性質 |
|---:|---|---:|---|
| 01 | ノートの役割と運用原則 | 30 | 既存ロードマップの仮クラスタ |
| 02 | 旅行・交通の意思決定 | 41 | 既存ロードマップの仮クラスタ |
| 03 | 美術鑑賞・文化史 | 41 | 既存ロードマップの仮クラスタ |
| 04 | YouTubeサムネイル・ビジュアル制作 | 25 | 既存ロードマップの仮クラスタ |
| 05 | 購入判断・家電・デジタル機器 | 22 | 内容監査済み。中心対象のみ残す |
| 06 | 建材・補修材・材料化学 | 42 | 既存ロードマップの仮クラスタ |
| 07 | Excel・Power Query・VBA・データ分析 | 32 | 07-A〜07-Eを完了 |
| 08 | EC・商品管理・マーケティング | 13 | Cluster 08初回監査により4件をCluster 15へ主クラスタ変更し、R-Login関連2件を1件へ統合後、認証に関する論点を3件の新規ノートへ分割 |
| 09 | 業務文書・製品情報・社内運用 | 25 | 既存ロードマップの仮クラスタ |
| 10 | 生成AIサービス・AI活用 | 21 | 内容監査済み1件を追加。残りは既存ロードマップの仮クラスタ |
| 11 | 読書・学習・言語・文章表現 | 28 | 既存ロードマップの仮クラスタ |
| 12 | 健康・運動・食事・生活管理 | 12 | 初回内容監査後。SSD診断ノートをCluster 13へ主クラスタ変更 |
| 13 | Windows・ストレージ・PC障害 | 36 | 初回監査で36件を確認。主対象23件と境界確認対象13件をCluster 13作業台へ記録 |
| 14 | Git・GitHub・Cloudflare・Web公開基盤 | 20 | 既存ロードマップの仮クラスタ |
| 15 | 個人プロジェクト・娯楽・残余監査 | 278 | 既存表174件と、`30_Inbox/クラスタ15に追加`の現役104件を含む。本文完全一致の旧コピー11件は`.退避`として履歴保持し、未分類を残して後続監査する受け皿 |

## 利用手順

1. 次に扱うクラスタ番号をロードマップで確認する。
2. この台帳の該当クラスタ一覧から、対象を数枚のサブクラスタへ絞る。
3. 内容・リンク・YAMLを確認し、主／副クラスタや状態をクラスタ作業台へ反映する。
4. 台帳の分類を変更するときは、理由を残す。クラスタ番号の振り直しは行わない。

## Cluster 01：ノートの役割と運用原則

件数：30件。主クラスタの仮配置。

| パス（ファイル名）                                                              | title                                                | type       | draft | 判定根拠            |
| ---------------------------------------------------------------------- | ---------------------------------------------------- | ---------- | ----- | --------------- |
| `31_Research/between-wysiwyg-convenience-and-markdown-purism.md`       | WYSIWYG寄りとMarkdown原理主義者の狭間                           | —          | false | ファイル名・title（仮）  |
| `31_Research/html-ai-design-workflow-with-obsidian-quartz.md`          | HTMLを使ったAI時代のデザイン・資料作成と、Obsidian / Quartzとの関係        | literature | false | ファイル名・title（仮）  |
| `31_Research/initialization-context-does-not-need-reloading.md`        | 初期化用コンテキストは毎ターン読み直す必要がない                             | literature | false | ファイル名・title（仮）  |
| `31_Research/kindle-highlights-and-obsidian-workflow.md`               | Kindleハイライトとobsidian運用についての整理                        | fleeting   | true  | Cluster 01でリネーム |
| `31_Research/safe-prompt-for-my-context.md`                            | My Context作成を依頼する安全なプロンプト                            | —          | false | Cluster 01でリネーム |
| `31_Research/obsidian-plugin-overview.md`                              | obsidian pluginについて色々とまとめる                           | fleeting   | false | Cluster 01でリネーム |
| `31_Research/obsidian-quartz-line-breaks.md`                           | obsidianとquartzにおける改行問題                              | —          | false | Cluster 01でリネーム |
| `31_Research/quartz-github-repository-questions.md`                    | quartz利用におけるgithubリポジトリ内についての疑問                      | —          | false | Cluster 01でリネーム |
| `31_Research/sentence-per-line-semantic-line-breaks-popularity.md`     | sentence per lineとsemantic line breaksはどちらが人気ですか？    | —          | false | Cluster 01でリネーム |
| `31_Research/sentence-per-line-vs-semantic-line-breaks.md`             | Sentence per linettooとSemantic line breaksの違い        | —          | false | ファイル名・title（仮）  |
| `31_Research/vscode-extensions-and-markdown-pdf.md`                    | VScodeで拡張機能追加のエラーとMarkdown PDFについて                   | fleeting   | true  | Cluster 01でリネーム |
| `31_Research/zettelkasten-vault-folder-structure.md`                   | ツェッテルカステン向けのVaultのフォルダ構成                             | literature | false | ファイル名・title（仮）  |
| `31_Research/company-obsidian-vault-structure.md`                      | 会社用Obsidian Vaultの構成方針まとめ                            | literature | false | Cluster 01でリネーム |
| `31_Research/obsidian-quartz-line-breaks-and-zettelkasten-workflow.md` | Obsidian / Quartz における改行思想と Zettelkasten 運用についての議論整理 | —          | false | Cluster 01でリネーム |
| `32_Zk/adopting-markdown-links.md`                                     | markdownlinkを採用                                      | permanent  | false | ファイル名・title（仮）  |
| `32_Zk/enable-hard-line-breaks-in-quartz.md`                           | QuartzにHardLineBreaksを導入                             | permanent  | false | ファイル名・title（仮）  |
| `32_Zk/external-link-hub-notes.md`                                     | 外部リンクだけのノートには接続意図を残す                                 | permanent  | false | ファイル名・title（仮）  |
| `32_Zk/keep-activity-logs-as-journal.md`                               | 活動記録はジャーナルとして残す                                      | permanent  | false | ファイル名・title（仮）  |
| `32_Zk/new-note-save-location-obsidian.md`                             | Obsidianの保管庫を変更した場合、新規ノートはどこに保存されるのか？                | permanent  | false | ファイル名・title（仮）  |
| `32_Zk/obsidian-notion-cosense-usability.md`                           | Obsidian, Notion, Cosenseの使い勝手                       | permanent  | false | ファイル名・title（仮）  |
| `32_Zk/prompt-for-obsidian-structured-list.md`                         | Obsidianに貼り付ける構造リストを作ってもらうプロンプト                      | permanent  | false | ファイル名・title（仮）  |
| `32_Zk/quartz-graph-view-tuning.md`                                    | quartzのグラフビューの調整                                     | permanent  | false | ファイル名・title（仮）  |
| `32_Zk/quartz-note-management-design.md`                               | Quartzにおけるノートの管理設計                                   | permanent  | false | ファイル名・title（仮）  |
| `32_Zk/quartz-publish-visibility-settings.md`                          | Quartzの公開・非公開を設定する                                   | permanent  | false | ファイル名・title（仮）  |
| `32_Zk/quartz-url-design.md`                                           | QuartzにおけるURL設計                                      | permanent  | false | ファイル名・title（仮）  |
| `32_Zk/remove-extra-blank-lines-when-copying-markdown.md`              | マークダウンをコピーしたときの余計な空白行をなくす                            | permanent  | false | ファイル名・title（仮）  |
| `32_Zk/using-markdown-callouts.md`                                     | コールアウトの使い分け                                          | —          | false | ファイル名・title（仮）  |
| `32_Zk/weaving-knowledge-into-zettelkasten.md`                         | 知識や経験を自分のネットワークに編み込んでいく                              | permanent  | false | ファイル名・title（仮）  |
| `32_Zk/zettelkasten-plugins.md`                                        | ツェッテルカステン用プラグイン                                      | permanent  | false | ファイル名・title（仮）  |
| `32_Zk/zettelkasten-yaml-frontmatter.md`                               | ツェッテルカステン用YAMLフロントマター                                | —          | false | ファイル名・title（仮）  |

## Cluster 02：旅行・交通の意思決定

件数：40件。主クラスタの確定配置。

| パス（ファイル名）                                                       | title                                 | type       | draft | 判定根拠           |
| --------------------------------------------------------------- | ------------------------------------- | ---------- | ----- | -------------- |
| `31_Research/booking-com-accommodation-selection-guide.md`      | Booking.comで宿を選ぶときの整理                 | literature | false | ファイル名・title（仮） |
| `31_Research/google-maps-list-feature-usage.md`                 | Googleマップのリスト機能の使い方                   | literature | false | ファイル名・title（仮） |
| `31_Research/osaka-to-tokyo-overnight-trip-cost-and-fatigue.md` | 夜行バスと昼行バスの疲労を考えるための参考資料               | literature | true  | ファイル名・title（仮） |
| `31_Research/smart-ex-hayatoku-five-discount-types.md`          | スマートEXの早特商品は購入期限・列車・設備で選ぶ             | literature | true  | ファイル名・title（仮） |
| `31_Research/tentative-silver-week-travel-plan.md`              | 神戸・姫路・大阪旅行｜2026年9月18日～19日の暫定計画        | literature | true  | ファイル名・title（仮） |
| `31_Research/tokyo-osaka-time-cost-tradeoff.md`                 | 東京旅行最終日の帰宅手段比較（2026年10月18日）           | literature | true  | ファイル名・title（仮） |
| `31_Research/tokyo-trip-tentative-schedule.md`                  | 東京・箱根旅行｜2026年10月16日～18日の暫定計画          | literature | true  | ファイル名・title（仮） |
| `31_Research/solo-international-travel-options-from-kansai.md`  | 海外一人旅の候補を関西発・文化比較の目的から絞る              | literature | true  | ファイル名・title（仮） |
| `31_Research/kyoto-station-route-options.md`                    | 京都駅を起点とした交通ルート                        | literature | true  | ファイル名・title（仮） |
| `31_Research/shiga-miho-shigaraki-trip-2026-08-08.md`           | 滋賀旅行｜MIHO MUSEUM・信楽｜2026年8月8日の実績      | literature | true  | ファイル名・title（仮） |
| `31_Research/osaka-okayama-transport-comparison-2026.md`        | 大阪―岡山間の交通手段比較（2026年調査）                | literature | true  | ファイル名・title（仮） |
| `31_Research/shin-osaka-station-route-options.md`               | 新大阪駅を起点とした交通ルート                       | literature | true  | ファイル名・title（仮） |
| `31_Research/ikoma-station-route-options.md`                    | 生駒駅を起点とした交通ルート                        | literature | true  | ファイル名・title（仮） |
| `31_Research/seishun-18-ticket-kansai-travel-2026.md`           | 青春18きっぷで関西から旅行する条件（2026年調査）           | literature | true  | ファイル名・title（仮） |
| `31_Research/osaka-station-route-options.md`                    | 大阪駅を起点とした交通ルート                        | literature | true  | ファイル名・title（仮） |
| `31_Research/yamato-saidaiji-station-route-options.md`          | 大和西大寺駅を起点とした交通ルート                     | literature | true  | ファイル名・title（仮） |
| `31_Research/tsuruhashi-station-route-options.md`               | 鶴橋駅を起点とした交通ルート                        | literature | true  | ファイル名・title（仮） |
| `31_Research/tennoji-station-route-options.md`                  | 天王寺駅を起点とした交通ルート                       | literature | true  | ファイル名・title（仮） |
| `31_Research/arashiyama-food-before-togetsukyo.md`              | 嵐山では渡月橋を渡る前に飲食を済ませるべきだった              | permanent  | true  | ファイル名・title（仮） |
| `31_Research/sunrise-seto-izumo-tokyo-osaka-2026.md`            | 東京―大阪間でサンライズ瀬戸・出雲を使う（2026年調査）         | literature | true  | ファイル名・title（仮） |
| `31_Research/tokyo-kanto-transport-passes-2026.md`              | 東京観光と関東日帰りで使う周遊券（2026年調査）             | literature | true  | ファイル名・title（仮） |
| `31_Research/nara-station-route-options.md`                     | 奈良駅を起点とした交通ルート                        | literature | true  | ファイル名・title（仮） |
| `31_Research/namba-station-route-options.md`                    | 難波駅を起点とした交通ルート                        | literature | true  | ファイル名・title（仮） |
| `31_Research/osaka-tokyo-daytime-highway-bus-2026.md`           | 大阪から東京への昼行高速バス（2026年調査）               | literature | true  | ファイル名・title（仮） |
| `31_Research/osaka-to-tokyo-travel-options.md`                  | 大阪発東京行きについて                           | fleeting   | true  | ファイル名・title（仮） |
| `31_Research/hotel-booking-site-comparison.md`                  | 宿泊予約サイトは最終総額と予約条件をそろえて比較する            | literature | true  | ファイル名・title（仮） |
| `31_Research/arashiyama-day-trip-cost-analysis.md`              | 嵐山日帰り旅行の費用分析                          | literature | true  | ファイル名・title（仮） |
| `31_Research/wakayama-osetsu-castle-library-trip-2026-08-11.md` | 和歌山旅行｜芦雪・和歌山城・図書館｜2026年8月11日の実績       | literature | true  | ファイル名・title（仮） |
| `32_Zk/benefits-of-okayama-kurashiki-tabiwa-pass.md`            | 岡山・倉敷 tabiwaぐるりんパス（2026年度）            | literature | true  | ファイル名・title（仮） |
| `32_Zk/compare-discount-passes-after-planning-the-itinerary.md` | 割引切符は旅程を決めてから通常料金と比較する                | permanent  | true  | ファイル名・title（仮） |
| `32_Zk/compare-transport-by-total-cost-and-usable-time.md`      | 交通手段は運賃ではなく総費用と自由時間で比較する              | permanent  | true  | ファイル名・title（仮） |
| `32_Zk/how-to-get-to-otsuka-museum-of-art.md`                   | 大塚国際美術館 行き方                           | literature | false | ファイル名・title（仮） |
| `32_Zk/is-limited-express-southern-worth-it.md`                 | 特急サザンの座席指定料金で買うのは時間ではなく着席の確実性         | permanent  | true  | ファイル名・title（仮） |
| `32_Zk/kishu-kuroshio-hot-spring.md`                            | 紀州黒潮温泉の料金・営業時間（2026年確認）               | literature | true  | ファイル名・title（仮） |
| `32_Zk/nankai-southern-seat-car-layout.md`                      | 特急サザンはなんば側が自由席、和歌山側が指定席               | literature | true  | ファイル名・title（仮） |
| `32_Zk/nara-to-tokyo-travel-routes.md`                          | 奈良から乃木坂への交通手段比較（2026年5月調査）            | literature | true  | ファイル名・title（仮） |
| `32_Zk/otsuka-museum-access-comparison.md`                      | 大塚国際美術館 行き方比較表                        | literature | false | ファイル名・title（仮） |
| `32_Zk/shiga-travel-plan.md`                                    | 滋賀旅行｜MIHO MUSEUM・信楽｜2026年8月8日の旅行計画    | literature | true  | ファイル名・title（仮） |
| `32_Zk/station-based-transport-routes.md`                       | 主要駅を起点とした交通ルート                        | structure  | true  | ファイル名・title（仮） |
| `32_Zk/travel-wishlist.md`                                      | 旅行へ行きたい                               | index      | false | ファイル名・title（仮） |
| `32_Zk/wakayama-travel-plan.md`                                 | 和歌山旅行｜芦雪・和歌山城・マリーナシティ｜2026年8月11日の旅行計画 | literature | true  | ファイル名・title（仮） |

## Cluster 03：美術鑑賞・文化史

件数：40件。主クラスタの確定配置。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/yohen-tenmoku-2026-viewing-record.md` | 2026年に見られる曜変天目・耀変天目 | fleeting | false | 既存作業台・ファイル名・title |
| `31_Research/daitokuji-ryukoin-yohen-tenmoku.md` | 大徳寺 龍光院「国宝 曜変天目」まとめ | literature | false | 既存作業台・ファイル名・title |
| `31_Research/miho-museum-yohen-tenmoku.md` | MIHO MUSEUMの曜変天目について | literature | false | 既存作業台・ファイル名・title |
| `31_Research/unryu-zu-differences.md` | 雲龍図の違い | literature | false | 既存作業台・ファイル名・title |
| `31_Research/what-to-look-for-in-ukiyo-e.md` | 浮世絵は何を見たら良いのか？ | literature | false | 既存作業台・ファイル名・title |
| `31_Research/el-greco-annunciation-japan-collections.md` | エル・グレコ《受胎告知》と日本所蔵作品まとめ | literature | false | 既存作業台・ファイル名・title |
| `31_Research/carl-walser-contemporary-art-timeline.md` | カール・ヴァルザーと同時代美術の年表 | literature | false | 既存作業台・ファイル名・title |
| `31_Research/carl-walser-exhibition-highlights.md` | カール・ヴァルザー展 注目作品 | literature | false | 既存作業台・ファイル名・title |
| `31_Research/van-gogh-gloss-and-gaze-direction.md` | ゴッホ作品の「光沢」と視線誘導は意図か | literature | false | 既存作業台・ファイル名・title |
| `31_Research/sarah-morris.md` | サラ・モリス | literature | false | 既存作業台・ファイル名・title |
| `31_Research/sarah-morris-exhibition.md` | サラ・モリス展 | literature | false | 既存作業台・ファイル名・title |
| `31_Research/harukas-van-gogh-exhibition-guide.md` | 「ゴッホの跳ね橋と印象派の画家たち」鑑賞ガイド | literature | false | 既存作業台・ファイル名・title |
| `31_Research/harukas-van-gogh-exhibition-catalog.md` | 「ゴッホの跳ね橋と印象派の画家たち」出品目録 | literature | false | 既存作業台・ファイル名・title |
| `31_Research/noh-kyogen-kabuki-comparison.md` | 能・狂言・歌舞伎を比較する | literature | false | Cluster 03で役割・種別を改訂 |
| `31_Research/kyoto-national-museum-kitano-tenjin-highlights.md` | 京都国立博物館　北野天神　見るべきリスト | literature | false | 既存作業台・ファイル名・title |
| `31_Research/kyoto-national-museum-kitano-tenjin-overview.md` | 京都国立博物館の特別展「北野天神」とは何か | literature | false | 既存作業台・ファイル名・title |
| `31_Research/kofukuji-takigi-noh-2026-05-16.md` | 興福寺 薪御能（2026年5月16日）についての整理 | literature | false | 既存作業台・ファイル名・title |
| `31_Research/takamatsuzuka-kitora-tomb-primer.md` | 高松塚古墳・キトラ古墳の事前知識 | literature | false | 既存作業台・ファイル名・title |
| `31_Research/kobe-van-gogh-night-cafe-terrace-visit.md` | 神戸市立博物館「大ゴッホ展 夜のカフェテラス」鑑賞記録 | literature | false | 既存作業台・ファイル名・title |
| `31_Research/moco-collection-omnibus-part-2-visit-guide.md` | 大阪市立東洋陶磁美術館「MOCOコレクション オムニバス―初公開・久々の公開―PART2」鑑賞資料 | literature | false | 既存作業台・ファイル名・title |
| `31_Research/ohara-masterpieces-journey-exhibition-visit.md` | 特別展「大原美術館所蔵　名画への旅―虎次郎の夢」鑑賞記録 | literature | false | Cluster 03で役割・種別を改訂 |
| `31_Research/tsuzuri-project-work-list.md` | 綴プロジェクトの作品リスト | literature | false | 既存作業台・ファイル名・title |
| `31_Research/sugawara-no-michizane-scholarship-faith.md` | 菅原道真が「学問の神」として定着した背景 | literature | false | Cluster 03で役割・種別を改訂 |
| `31_Research/japanese-chawan-karamono-korai-wamono-comparison.md` | 茶の湯における唐物茶碗・高麗茶碗・和物茶碗の比較 | literature | false | 既存作業台・ファイル名・title |
| `31_Research/national-treasure-important-cultural-property-display-conditions.md` | 国宝・重要文化財の公開日数と保存条件 | literature | false | Cluster 03で役割・種別を改訂 |
| `31_Research/takamatsuzuka-kitora-tombs-overview.md` | 高松塚古墳とキトラ古墳 | literature | false | 既存作業台・ファイル名・title |
| `31_Research/takamatsuzuka-kitora-tombs-artworks.md` | 高松塚古墳とキトラ古墳2 | literature | false | 既存作業台・ファイル名・title |
| `31_Research/takamatsuzuka-kitora-tombs-public-display.md` | 高松塚古墳とキトラ古墳3 公開とは？ | literature | false | 既存作業台・ファイル名・title |
| `31_Research/yuteki-yohen-tenmoku-viewing-plan.md` | 2026年の曜変天目・油滴天目鑑賞計画 | literature | false | 既存作業台・ファイル名・title |
| `31_Research/yohen-tenmoku-and-tenmoku-basics.md` | 曜変天目茶碗と天目茶碗の世界 | literature | false | 既存作業台・ファイル名・title |
| `32_Zk/basic-shrine-etiquette.md` | 神社での基本的な作法・マナー | literature | false | 既存作業台・ファイル名・title |
| `32_Zk/buddhist-honzan-in-japan.md` | 日本の仏教各宗派における「本山」についての説明 | literature | false | Cluster 03で種別・役割を改訂 |
| `32_Zk/cat-pawprint-sue-ware.md` | 猫の足跡付き須恵器 | literature | false | 既存作業台・ファイル名・title |
| `32_Zk/daihonzan-examples.md` | 大本山の代表例 | literature | false | Cluster 03で種別・役割を改訂 |
| `32_Zk/kurashiki-and-chichu-museum-in-one-day.md` | 大原美術館と地中美術館を１日で楽しめるのか？ | permanent | false | 既存作業台・ファイル名・title |
| `32_Zk/myoshin-ji-zen-daihonzan.md` | 妙心寺 禅の大本山 | literature | false | 既存作業台・ファイル名・title |
| `32_Zk/osetsu-in-motion.md` | 特別展「蘆雪生動―南紀 無量寺への旅―」鑑賞記録 | literature | false | 既存作業台・ファイル名・title |
| `32_Zk/temples-famous-for-unryu-zu.md` | 雲龍図で有名な寺 | permanent | false | 既存作業台・ファイル名・title |
| `32_Zk/traveling-exhibition-requirements.md` | 特別展が巡回する条件 | literature | false | 既存作業台・ファイル名・title |
| `32_Zk/understanding-honzan-through-chain-stores.md` | 全国チェーン店で理解する「本山」 | permanent | false | 既存作業台・ファイル名・title |

## Cluster 04：YouTubeサムネイル・ビジュアル制作

件数：25件。本文監査・リファクタリング・現行YAML確認を完了。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/Affinity（Canva版）についての整理まとめ.md` | Affinity（Canva版）についての整理まとめ | literature | true | 本文監査・現行YAML確認（2026-09-20） |
| `31_Research/html-thumbnail-adjustment-record.md` | HTMLサムネイル制作：調整記録 | literature | true | 本文再構成・現行YAML確認（2026-09-20） |
| `31_Research/canva-code-to-figma-editing-trial.md` | Canva CodeからFigmaへ移った編集試行 | permanent | false | 本文再構成・現行YAML確認（2026-09-20） |
| `31_Research/figma-plan-comparison.md` | Figmaの各種プランの比較 | literature | false | 本文監査・現行YAML確認（2026-09-20） |
| `31_Research/figma-starter-commercial-business-use.md` | Figma Starterプランの商用・企業利用について | literature | false | 本文監査・現行YAML確認（2026-09-20） |
| `31_Research/thumbnail-ai-generation-prompt.md` | HTMLと実素材からサムネイルを生成するためのプロンプト | fleeting | false | 本文再構成・現行YAML確認（2026-09-20） |
| `31_Research/thumbnail-production-13-step-model.md` | サムネイル制作の13工程：当時の設計モデル | literature | false | 正本維持・現行YAML確認（2026-09-20） |
| `31_Research/thumbnail-production-13-step-table-legacy.md` | サムネイル制作の13工程：旧・一表形式 | literature | false | 旧表現として維持・現行YAML確認（2026-09-20） |
| `31_Research/html-thumbnail-brief-dialogue.md` | HTMLサムネイル制作：ブリーフ対話 | literature | false | 本文監査・現行YAML確認（2026-09-20） |
| `31_Research/html-thumbnail-svg-observation.md` | HTMLサムネイル制作：SVG観察記録 | literature | false | 本文分離・現行YAML確認（2026-09-20） |
| `31_Research/html-thumbnail-ai-generation-initial-trial.md` | HTMLサムネイル制作：AI生成の初回試行 | fleeting | false | 本文再構成・現行YAML確認（2026-09-20） |
| `31_Research/html-thumbnail-ai-generation-continuation-trial.md` | HTMLサムネイル制作：AI生成の続行試行 | fleeting | false | 本文再構成・現行YAML確認（2026-09-20） |
| `31_Research/thumbnail-production-workflow-improvement.md` | 制作ブリーフ作成の負荷から生まれた改善検討 | literature | false | 本文再構成・現行YAML確認（2026-09-20） |
| `31_Research/thumbnail-local-html-devtools-export-experiment.md` | ローカルHTML/CSSで表示したサムネイルの出力試行 | literature | false | 本文再構成・現行YAML確認（2026-09-20） |
| `31_Research/thumbnail-ai-html-generation-experiment-summary.md` | HTMLと実素材をAIへ渡す初期方式の試行総括 | fleeting | false | 本文再構成・現行YAML確認（2026-09-20） |
| `31_Research/Youtubeサムネイルサイズのベストプラクティス.md` | Youtubeサムネイルサイズのベストプラクティス | literature | false | 本文監査・現行YAML確認（2026-09-20） |
| `31_Research/html-thumbnail-production-summary.md` | HTMLサムネイル制作：案件要約 | literature | false | 本文再構成・現行YAML確認（2026-09-20） |
| `31_Research/イラスト外注における気をつけること.md` | イラスト外注における気をつけること | literature | true | 本文監査・現行YAML確認（2026-09-20） |
| `31_Research/thumbnail-ai-generation-approach.md` | HTMLと実素材をAIへ渡す初期方式の説明 | fleeting | false | 本文再構成・現行YAML確認（2026-09-20） |
| `31_Research/thumbnail-ai-generation-to-local-html-decision.md` | AI生成方式からローカルHTML/CSS方式へ切り替えた判断 | permanent | false | 本文再構成・現行YAML確認（2026-09-20） |
| `31_Research/html-thumbnail-design-record.md` | HTMLサムネイル制作：初期設計 | literature | false | 本文再構成・現行YAML確認（2026-09-20） |
| `32_Zk/image-prompt-compression-comparison.md` | 楽天向け背景画像プロンプトの圧縮比較 | fleeting | false | 別案件として位置づけ・現行YAML確認（2026-09-20） |
| `32_Zk/ipros-thumbnail-creation-workflow.md` | IPROSに掲載するサムネイルの作成手順 | permanent | false | 本文監査・現行YAML確認（2026-09-20） |
| `32_Zk/planning-canva-folder-structure.md` | Canvaのフォルダ構成を考える | permanent | false | 本文監査・現行YAML確認（2026-09-20） |
| `32_Zk/youtube-thumbnail-guide-settings.md` | Youtubeサムネイル作成時のガイド設定 | permanent | false | 本文監査・現行YAML確認（2026-09-20） |

## Cluster 05：購入判断・家電・デジタル機器

件数：20件。内容監査・本文再構成・リンク再検証済みの中心対象。

| パス（ファイル名）                                                      | title                             | type       | draft | 判定根拠                          |
| -------------------------------------------------------------- | --------------------------------- | ---------- | ----- | ----------------------------- |
| `31_Research/43-inch-large-display-tunerless-tv-comparison.md` | 43型大型ディスプレイ・チューナーレステレビの比較記録       | literature | false | 43型を検討した経緯を残す履歴資料。現在の推奨とは分離済み |
| `31_Research/50-inch-4k-workspace-fancyzones-layout.md`        | 50型4Kディスプレイの作業環境とFancyZones配置     | permanent  | false | 採用済みの作業環境・配置の記録               |
| `31_Research/50-inch-4k-display-video-test-log.md`             | 50型4Kディスプレイの映像テスト記録               | fleeting   | true  | 映像設定の確認結果を残す一時ノート             |
| `31_Research/koolertron-one-handed-keyboard-setup.md`          | Koolertron片手キーボードの設定方針            | fleeting   | true  | 実機の設定を試すための下書き                |
| `31_Research/50-inch-display-vesa-mount-safety-check.md`       | 50型ディスプレイのVESA金具取付・安全確認           | permanent  | false | 取付時の判断を統合した最終確認記録             |
| `31_Research/tunerless-tv-purchase-checklist.md`               | チューナーレステレビを選ぶ際の確認事項             | literature | false | チューナーレスTVを選ぶ際の確認資料            |
| `31_Research/50-inch-display-settings.md`                      | 50型ディスプレイの設定                      | permanent  | false | 約100cmでの現行設定と見直し条件            |
| `31_Research/display-connection-ports-comparison.md`           | ディスプレイ接続端子の比較                     | literature | false | PCと外部画面を接続する確認資料              |
| `31_Research/large-4k-display-selection-purchase-record.md`    | 大型4Kディスプレイの選定・購入記録                | literature | false | 43型から50型への変更と追加費用を扱う中心記録      |
| `31_Research/macro-keyboard-usage-selection.md`                | マクロキーボードの用途と選び方                   | literature | false | 購入前の選定観点                      |
| `31_Research/monitor-size-aspect-ratio-guide.md`               | モニターサイズと縦横比の比較                    | literature | false | 寸法・縦横比・視聴距離の基礎資料              |
| `31_Research/switch-game-used-price-reasons.md`                | Switch版ゲームソフトの中古価格が高くなりやすい理由      | literature | true  | 中古価格を比較する観点                   |
| `31_Research/switch-2-microsd-express-card-comparison.md`      | Switch 2向けmicroSD Expressカードの比較メモ | fleeting   | true  | 購入時に公式情報を確認するための一時メモ          |
| `31_Research/switch-2-joycon-cover-necessity.md`               | Switch 2のJoy-Conカバーは必要か           | fleeting   | true  | 使用環境と互換性を確認する購入判断メモ           |
| `31_Research/extended-warranty-value-decision.md`              | 延長保証の価値を判断する                      | permanent  | true  | 製品横断の保証判断軸                    |
| `31_Research/usb-microphone-input-device-troubleshooting.md`   | USBマイクが入力デバイスに現れないときの確認手順         | fleeting   | true  | 認識不良時の切り分け手順                  |
| `31_Research/switch-2-extended-warranty-decision.md`           | Switch 2に延長保証を付けるべきか              | literature | true  | Switch 2固有の保証判断               |
| `31_Research/switch-2-screen-protector-replacement.md`         | Switch2の画面保護フィルム：交換判断             | literature | true  | 状態で判断する交換基準                   |
| `31_Research/streaming-usb-microphone-review.md`               | 配信用USBマイクの見直し                     | literature | true  | M4Uの使用感から始める改善・買替え資料          |
| `32_Zk/switch-2-4k-output-games.md`                            | Switch 2の4K出力対応ゲーム一覧              | fleeting   | true  | 公式情報の再確認が必要な時点付き調査メモ          |

## Cluster 06：建材・補修材・材料化学

件数：41件。主クラスタの仮配置。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/one-part-vs-two-part-systems.md` | 1液剤と2液剤のメリットとデメリット | fleeting | true | ファイル名・title（仮） |
| `31_Research/building-industrial-material-product-categories.md` | 建築・工業用材料の製品カテゴリー分類 | literature | false | ファイル名・title（仮） |
| `31_Research/building-industrial-material-product-category-list.md` | 建築・工業用材料の製品カテゴリー 一覧表 | literature | false | ファイル名・title（仮） |
| `31_Research/building-industrial-material-product-list.md` | 建築・工業用材料の製品一覧表 | literature | false | ファイル名・title（仮） |
| `31_Research/chemical-hydrolysis-reaction.md` | 加水分解 | literature | false | ファイル名・title（仮） |
| `31_Research/ul94-v0-flammability-rating.md` | UL94 V-0によるプラスチック材料の燃焼性評価 | fleeting | true | ファイル名・title（仮） |
| `31_Research/epoxy-resin-classification.md` | エポキシ樹脂の分類 | fleeting | true | ファイル名・title（仮） |
| `31_Research/ionic-surfactant-classification.md` | カチオン系・アニオン系・ノニオン系の整理 | ai-generated | true | ファイル名・title（仮） |
| `31_Research/glass-microballoon-materials.md` | ガラスバルーンについて | fleeting | true | ファイル名・title（仮） |
| `31_Research/concrete-floor-surface-treatment.md` | コンクリート床の表面処理 | fleeting | true | ファイル名・title（仮） |
| `31_Research/thixotropy-and-dilatancy-comparison.md` | チクソ性とダイラタンシー現象についての理解と比較 | fleeting | true | ファイル名・title（仮） |
| `31_Research/putty-sealant-product-taxonomy.md` | パテ・シーリング材・関連建材製品を分類するためのカテゴリ体系 | fleeting | true | ファイル名・title（仮） |
| `31_Research/waterproofing-material-quantity-design.md` | ベランダ・屋上・バルコニー向け防水材の容量設計に関する整理 | — | true | ファイル名・title（仮） |
| `31_Research/roof-names-and-classification.md` | 屋根の名称と分類 | fleeting | true | ファイル名・title（仮） |
| `31_Research/construction-chemical-product-positioning.md` | 化学業界における補修材や建材の立ち位置 | fleeting | true | ファイル名・title（仮） |
| `31_Research/digestion-and-hydrolysis.md` | 消化と加水分解の整理 | fleeting | true | ファイル名・title（仮） |
| `31_Research/water-based-paint-fire-risks.md` | 水性塗料の火気リスク | — | true | ファイル名・title（仮） |
| `31_Research/heat-resistant-repair-glass-tape-frp.md` | 耐熱補修・ガラステープ・FRPに関する学習まとめ | fleeting | true | ファイル名・title（仮） |
| `31_Research/marble-and-granite-differences.md` | 大理石と御影石の違い | fleeting | true | ファイル名・title（仮） |
| `31_Research/thermal-insulation-heat-shielding-aerogel.md` | 断熱・遮熱とエアロゲルについて | fleeting | true | ファイル名・title（仮） |
| `31_Research/insulating-vs-reflective-paints.md` | 断熱塗料と遮熱塗料の違い | — | true | ファイル名・title（仮） |
| `31_Research/repair-renovation-terms-comparison.md` | 補修・修理・修繕・改修などの言葉の使い分け | literature | false | ファイル名・title（仮） |
| `31_Research/heat-loss-annual-energy-estimates.md` | 放熱量・年間削減電力量リーフレット検討内容まとめ | fleeting | true | ファイル名・title（仮） |
| `31_Research/floor-repair-color-matching.md` | 床色に合わせて補修する理由 | fleeting | true | ファイル名・title（仮） |
| `31_Research/pipe-hole-terminology.md` | 配管に空いた穴の名称と違い | fleeting | true | ファイル名・title（仮） |
| `31_Research/full-surface-putty-work.md` | 総パテ作業とは | fleeting | true | ファイル名・title（仮） |
| `31_Research/steam-pipe-leak-risks.md` | 蒸気配管の穴を放置することの問題 | — | true | ファイル名・title（仮） |
| `31_Research/drainage-inspection-chambers.md` | 排水ますの種類・役割・用語整理 | fleeting | false | ファイル名・title（仮） |
| `32_Zk/pu-leather-hydrolysis.md` | PUレザーと加水分解 | literature | false | ファイル名・title（仮） |
| `32_Zk/tds-and-sds-purposes.md` | ビジネス：TDSとSDSの違い | permanent | false | ファイル名・title（仮） |
| `32_Zk/thermal-paint-for-windows.md` | 塗料タイプの窓用断熱材 | literature | false | ファイル名・title（仮） |

| `31_Research/repair-scope-location-scale-terms.md` | 補修表現における範囲・箇所・規模の違い | fleeting | true | 06-Ieで本文を再構成し、title・英名を整備 |
## Cluster 07：Excel・Power Query・VBA・データ分析

件数：35件。主クラスタの配置。正規表現置換ノートの初期案・現行設計、一般的な実践ノート、「チーズかまぼこ」実データのケーススタディ、依存プルダウンの初期案、GA4／Looker Studioの初期検討履歴、棚卸の分割・再集約後継例、架空事業の補助ノートを含む。削除済み「その3」の退避ノートはアーカイブのため含めない。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/appsheet-workout-recording-app-implementation-history.md` | AppSheetによる筋トレ記録アプリの実装記録 | fleeting | true | 実装結果だけでなく、既存シートの採用、ID、計算の責務、一括入力設計の迷いと判断を残す作業記録として校正。 |
| `31_Research/csv-qa-to-mindmap-knowledge-network.md` | CSVのQ&Aデータをマインドマップと知識ネットワークへ変換する記録 | — | true | CSVの`category`・`question`・`answer`・`remarks`を意味構造とMermaidマインドマップへ変換する流れを整理。 |
| `31_Research/ecommerce-ga4-measurement-design.md` | ECサイトにおけるGA4計測設計の判断基準 | literature | false | 07-Eで、EC基幹との役割分担、eコマースイベント、検証・照合の順序を再構成。 |
| `31_Research/ga4-page-and-landing-page-analysis.md` | GA4のページ分析とランディングページ分析 | literature | false | 07-Eで、閲覧ページとセッション入口、フィールドの選び方を整理。 |
| `31_Research/ga4-user-metrics.md` | GA4の総ユーザー・アクティブユーザー・新規ユーザー | literature | false | 07-Eで、各ユーザー指標をユニークユーザーとして定義し直した。 |
| `31_Research/ga4-site-analysis-kpi-design.md` | GA4サイト分析のKPI設計 | literature | false | 07-Eで、到達・関心・意向・主要成果とキーイベント／広告コンバージョンを分離。 |
| `31_Research/ga4-key-event-metrics-and-rate.md` | GA4のキーイベント数・セッションキーイベント率・ユーザーキーイベント率 | literature | false | 07-Eで、実測例を保持したまま分母・概算・解釈を修正。 |
| `31_Research/ga4-file-download-measurement.md` | GA4のfile_downloadは何を計測するか | literature | false | 07-Eで、リンククリックと保存・読了を区別して再構成。 |
| `31_Research/looker-studio-date-range-control-scope.md` | Looker Studioにおける期間コントロールの適用範囲 | literature | false | 07-Eで、ページ内適用と既定期間を分け、ページ間同期を前提にしない設計へ更新。 |
| `31_Research/ga4-initial-analysis-notes.md` | GA4初期運用の検討記録 | literature | false | 07-Eで、CV代替イベントを混在させていた初期案と見直し理由を保存。 |
| `31_Research/looker-studio-date-range-control-initial-review.md` | Looker Studio期間コントロール初期検討の記録 | literature | false | 07-Eで、初期の誤案内とページ単位で扱う判断を保存。 |
| `31_Research/power-query-replacement-master-bulk-replace.md` | Power Queryで置換マスタを使い一括置換する方法 | literature | true | 07-Bで実運用の記法を保存し、部分文字列置換の推奨例と置換順序の検証観点を追記。 |
| `31_Research/vba-sheet-copy-visible-cells-column-grouping.md` | VBAにおけるシート複製・表示セル抽出・列グループ化 | literature | true | 07-Cで、シート複製と表示セル抽出の目的・失敗時の扱いを再構成。 |
| `31_Research/VBAで個別のファイルをガッチャンコする その1.md` | 管理部署別棚卸ファイル切り出しVBA：初期版 | literature | false | 07-Cで、当時のコードを保った開発履歴として整理。その3と完全一致することを確認。 |
| `31_Research/VBAで個別のファイルをガッチャンコする その2.md` | 部署別棚卸ファイル再集約VBA：初期版 | literature | false | 07-Cで、当時のコードを保った再集約の開発履歴として整理。 |
| `31_Research/VBAで個別ファイルをガッチャンコする その4.md` | 管理部署別棚卸ファイル切り出しVBA：拡張版 | literature | false | 07-Cで、当時のコードを保った拡張開発履歴として整理。 |
| `31_Research/safe-department-inventory-workbook-export.md` | 管理部署別棚卸ファイルを安全に切り出すVBA | literature | false | 07-Cで新設。元ブックを変更せず、既存出力を上書きしない後継例。 |
| `31_Research/safe-department-inventory-workbook-combine.md` | 部署別棚卸ファイルを安全に再集約するVBA | literature | false | 07-Cで新設。新しい`.xlsm`を作り、全入力検証後に再集約する後継例。 |
| `31_Research/inventory-split-and-combine-refactored-vba.md` | 棚卸ファイルの分割・再集約を分けたVBAリファクタリング例 | literature | false | 07-Cで新設。安全な切り出し・再集約の後継例を呼び分ける、読みやすい実行入口。 |
| `31_Research/エクセルに計算式を文字列として表示したい.md` | Excelで数式を文字列として表示する方法 | literature | false | 07-Dで本文を維持し、typeを整備。 |
| `31_Research/google-sheets-generate-all-combinations.md` | Google スプレッドシートで全組み合わせを生成する | literature | true | 07-Dで食品系の架空データへ更新し、直積と対応マスタの使い分けを追記。 |
| `31_Research/data-cleansing-file-organization-and-naming.md` | データクレンジングにおけるファイル構成と命名規則 | literature | true | 07-Aで公開用のRaw／Standard／Analysis／Report設計へ更新。初期案は別ノートとして保持。 |
| `31_Research/パワークエリで文字列前後のスペースを削除して、連続するスペースを1つにする.md` | Power Queryで文字列の前後・連続スペースを整理する | literature | false | 07-Bで実運用の関数を保存し、空白種別を明示する推奨例と検証手順を追記 |
| `31_Research/sales-analysis-exclusion-criteria-management.md` | 売上分析における除外条件の管理 | — | true | 07-Aで、分析条件を管理するマスタ設計として再構成。 |
| `31_Research/power-query-merge-key-design.md` | Power Queryにおける結合キーの設計と管理 | literature | true | Cluster 07-Aで本文を再構成し、title・英語ファイル名・typeを整備 |
| `31_Research/google-sheets-dependent-dropdown-design.md` | Google スプレッドシートにおける依存プルダウンの設計 | literature | true | 07-Dでリネーム・再構成。既存の候補表構成を残し、補助範囲と入力規則を分ける安全な設計を追加。 |
| `32_Zk/enable-macros-in-excel.md` | マクロ付きのExcelファイルを編集出来るようにする | permanent | false | 07-Cで、個別ファイルの確認・ブロック解除と信頼済み場所の最小権限運用へ更新。 |
| `31_Research/kyoto-patty-029-sample-business.md` | Kyoto Patty 029の架空事業設定とデータ設計 | permanent | false | 07-Aで公開用の架空サンプル事業・データ設計として再構成。Power Query・VBA・分析の共通基盤。 |
| `31_Research/kyoto-patty-029-fictional-staff.md` | Kyoto Patty 029の架空スタッフ一覧 | literature | true | 07-Aで新設。架空事業設定にリンクする、スタッフ・経営陣の一覧。 |
| `31_Research/data-cleansing-initial-design-review.md` | データクレンジング構成の初期案と見直し | literature | true | 07-Aで新設。初期案を削除せず、現行設計を採用した理由とともに保存。 |

| `31_Research/regex-based-product-name-normalization-initial-review.md` | 正規表現による品名表記ゆれ置換の初期案と制約 | literature | true | 07-Bで初期のAI生成案を履歴化。Power Query・VBAの正規表現非対応な置換関数と、入力例・期待値の不整合を記録。 |
| `31_Research/product-name-notation-normalization-design.md` | 品名表記ゆれを正規化する設計 | literature | true | 07-Bで新設。Raw保持、正規化、マスタ照合、例外管理、テスト値による現行設計。 |
| `31_Research/chaotic-product-name-variation-normalization-methods.md` | 表記ゆれの多い品名データを段階的に正規化する方法 | literature | true | 07-Bで新設。表記ゆれの種類、対応マスタ・置換・要素解析・正規表現・例外キューの選択と、推奨ハイブリッド方式を整理。 |
| `31_Research/cheese-kamaboko-product-name-normalization-case.md` | チーズかまぼこの表記ゆれを正規化する実データケース | literature | true | 07-Bで新設。33件の入力を要素別に分類し、旧期待値との不整合、別名マスタ・Power Query結合・正規表現による抽出の役割を整理。 |
| `31_Research/dependent-dropdown-initial-design-review.md` | 依存プルダウン設計の初期検討 | literature | true | 07-Dで新設。初期の検討内容と、入力規則へ式を直接指定しない見直し理由を記録。 |
## Cluster 08：EC・商品管理・マーケティング

件数：13件。主クラスタの配置。Cluster 06から移管された1件を含む。初回監査により4件をCluster 15へ主クラスタ変更し、R-Login関連2件を1件へ統合後、認証に関する論点を3件の新規ノートへ分割。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/amazon-a-plus-content-states.md` | Amazonの商品ページにおける「A+なし」「A+あり」「プレミアムA+あり」の違い | literature | false | 08-Bで現行の公式情報を根拠に再構成 |
| `31_Research/rakuten-rlogin-rms-overview.md` | R-Login と RMS の基本理解まとめ | literature | false | 08-Cで現行の公式ヘルプを根拠に再構成 |
| `31_Research/rlogin-90-day-password-change-record.md` | R-Loginの90日パスワード変更要求の記録 | literature | false | 08-Cで統合元の表示・運用記録を新規ノートとして分割。現行仕様の断定はしない |
| `31_Research/modern-password-management-principles.md` | 現代のパスワード管理の基本 | literature | false | 08-Cで統合元の一般原則を新規ノートとして分割。NIST・CISAを参照 |
| `31_Research/password-authentication-practice-transition.md` | 定期変更から多要素認証へ：認証設計の変化 | literature | false | 08-Cで統合元の変遷・価値観を新規ノートとして分割。NIST・CISAを参照 |
| `31_Research/channel-fbae-framework.md` | チャネルにおけるFBAとFBAE | literature | false | 08-Bで情報設計の一般原則として再構成 |
| `31_Research/publicity-pr-and-product-appeal.md` | マーケティングにおけるPRとアピールの違い | literature | false | 08-Dでパブリシティ型PRと製品アピールの違いとして再構成。第三者評価とは区別 |
| `31_Research/rakuten-product-number-sku-variation-design.md` | 楽天市場｜商品管理番号・SKU・バリエーション設計まとめ | literature | false | 08-Aで英語ファイル名へ変更 |
| `31_Research/product-identifiers-model-number-gtin-isbn.md` | 型番商品・JAN・ISBN・非型番商品の整理 | literature | false | 08-Aで識別子の一般知識として再構成 |
| `31_Research/ipros-industry-site-links.md` | イプロス業界別専門サイトへのリンク | literature | false | 08-Bで内容に合わせてtitleと英語ファイル名を変更 |
| `32_Zk/b2b-lead-basics.md` | BtoBにおけるリードの基本 | fleeting | false | 08-Dで内容に合わせてtitleと英語ファイル名を変更。旧titleはaliasとして保持 |
| `32_Zk/rakuten-product-image-file-size-management.md` | 楽天市場の商品画像の容量管理 | fleeting | false | 08-Cで時点付きの容量記録として整理。`field`タグで由来を保持 |
| [construction-workforce-aging-statistics.md](../../31_Research/construction-workforce-aging-statistics.md) | 建設業の高齢化統計とPR資料での活用 | literature | false | 08-Dで2024年値を国土交通省の2025年版資料で更新。統計と製品性能の根拠を分離 |

## Cluster 09：業務文書・製品情報・社内運用

件数：23件。主クラスタの配置。Cluster 11-Eから移管された1件、Cluster 06から移管された4件を含む。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| [occupational-safety-health-workplace-management.md](../../31_Research/occupational-safety-health-workplace-management.md) | 労働安全衛生法と職場の安全管理 | literature | true | 本文再構成後の内容に合わせ、旧titleをaliasとして保持して英語ファイル名へ変更 |
| [a4-label-manual-feed-lot-editing-workflow.md](../../31_Research/a4-label-manual-feed-lot-editing-workflow.md) | A4ラベルの手差し印刷・LOT編集運用まとめ | — | false | ファイル名・title（仮） |
| [fabe-product-description-framework.md](../../31_Research/fabe-product-description-framework.md) | FABEによる製品説明と根拠の整理 | literature | true | 本文再構成後の内容に合わせ、旧titleをaliasとして保持して英語ファイル名へ変更 |
| [fab-product-description-practice.md](../../31_Research/fab-product-description-practice.md) | FAB法で製品説明を簡略化する練習 | literature | false | 内容に沿って英語ファイル名へ変更 |
| [HACCP.md](../../31_Research/HACCP.md) | HACCP | fleeting | true | ファイル名・title（仮） |
| [silver-week-announcement-wording.md](../../31_Research/silver-week-announcement-wording.md) | シルバーウィークとお知らせ表現 | field | false | ファイル名・title（仮） |
| [corporate-officer-titles-order.md](../../31_Research/corporate-officer-titles-order.md) | 会社役員の肩書き・並び順についての整理 | literature | true | 内容に沿って英語ファイル名へ変更 |
| [procurement-master-code-design.md](../../31_Research/procurement-master-code-design.md) | 仕入品マスターと仕入れコードの設計 | literature | true | 本文再構成後の内容に合わせ、旧titleをaliasとして保持して英語ファイル名へ変更 |
| [promotional-leaflet-safety-information.md](../../31_Research/promotional-leaflet-safety-information.md) | 販促用リーフレットと危険情報の役割分担 | literature | true | 本文再構成後の内容に合わせ、旧titleをaliasとして保持して英語ファイル名へ変更 |
| [packaging-specifications-product-labels.md](../../31_Research/packaging-specifications-product-labels.md) | 包装仕様と製品ラベル | literature | true | 内容に沿って英語ファイル名へ変更 |
| [case-label-quantity-packaging-terms.md](../../31_Research/case-label-quantity-packaging-terms.md) | ケースラベルにおける内容量・入数・荷姿の表記 | literature | true | 本文再構成後の内容に合わせ、旧titleをaliasとして保持して英語ファイル名へ変更 |
| [product-label-change-announcement.md](../../31_Research/product-label-change-announcement.md) | 製品容器ラベル変更のHP掲載用お知らせ文の検討 | literature | true | 内容に沿って英語ファイル名へ変更 |
| [announcement-update-format.md](../../32_Zk/announcement-update-format.md) | 「お知らせ」を修正するときのラベルと記述方法 | permanent | false | ファイル名・title（仮） |
| [announcements-vs-guidance.md](../../32_Zk/announcements-vs-guidance.md) | 「ご案内」と「お知らせ」の違い | literature | false | ファイル名・title（仮） |
| [asking-ai-how-to-take-work-notes.md](../../32_Zk/asking-ai-how-to-take-work-notes.md) | 業務中のメモの取り方をAIに尋ねた話 | permanent | false | ファイル名・title（仮） |
| [phase-based-business-understanding.md](../../32_Zk/phase-based-business-understanding.md) | 「聞き手の思考プロセス」と「作業フェーズ」に合わせた業務理解 | fleeting | false | ファイル名・title（仮） |
| [two-tips-for-printing-on-label-paper.md](../../32_Zk/two-tips-for-printing-on-label-paper.md) | ラベル紙で印刷するときに気をつけたいこと2選 | permanent | false | ファイル名・title（仮） |
| [what-is-a-product-requirements-document.md](../../32_Zk/what-is-a-product-requirements-document.md) | PRD：製品要求仕様書とは？ | permanent | false | ファイル名・title（仮） |

| [safety-incident-expression-nuance.md](../../31_Research/safety-incident-expression-nuance.md) | 安全資料でよく使われる事故表現のニュアンス比較 | literature | true | Cluster 11-Eの監査によりCluster 09へ主クラスタ変更後、内容に沿って英語ファイル名へ変更 |
| [thermal-paint-leaflet-calculation-notes.md](../../31_Research/thermal-paint-leaflet-calculation-notes.md) | 断熱塗料リーフレットの算定条件と表記設計 | fleeting | true | Cluster 06の移管候補を確定。製品リーフレットの算定条件・表記設計が中心であり、保存場所は変更しない |
| [repair-material-leaflet-legal-safety-info.md](../../31_Research/repair-material-leaflet-legal-safety-info.md) | 補修材リーフレットにおける法規・安全情報の記載 | fleeting | true | Cluster 06の移管候補を確定。製品リーフレットの安全情報設計が中心であり、保存場所は変更しない |
| [repair-material-leaflet-data-annotation-design.md](../../31_Research/repair-material-leaflet-data-annotation-design.md) | 補修材リーフレットのデータ表記・注釈設計 | fleeting | true | Cluster 06の移管候補を確定。製品情報のデータ・注釈設計が中心であり、保存場所は変更しない |
| [factory-print-lamination.md](../../32_Zk/factory-print-lamination.md) | 工場で使う印刷物のラミネート加工 | permanent | false | Cluster 06の移管候補を確定。工場内の印刷物運用が中心であり、保存場所は変更しない |
## Cluster 10：生成AIサービス・AI活用

件数：22件。10-A完了後の現役ノート配置。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `32_Zk/zettelkasten-context-test.md` | ツェッテルカステン専用コンテキストの動作確認 | fleeting | true | Inbox整理時にAI Workの動作テストとしてCluster 10へ移管 |
| `31_Research/ai-content-safety-guardrails.md` | AIサービスにおける性的・センシティブコンテンツのガードレール整理 | literature | false | ファイル名・title（仮） |
| `31_Research/ai-misinformation-corrections.md` | AIによる嘘情報まとめ | — | true | ファイル名・title（仮） |
| `31_Research/ai-custom-instructions-discussion.md` | AIに設定するカスタム指示についての議論とまとめ | ai-generated | true | ファイル名・title（仮） |
| `31_Research/generative-ai-subscription-costs.md` | 生成AIサービスの契約構成と費用を考える | literature | true | Cluster 10-Aで契約比較の判断軸を扱う資料へ再構成 |
| `31_Research/ai-subscription-cost-examples-2026.md` | 生成AIサービスの契約費用：公開事例（2026年7月調査） | literature | true | Cluster 10-Aで過去の公開事例を中心資料から分離して作成 |
| `31_Research/ai-web-advertising-personal-site-strategy.md` | AI時代のWeb閲覧・広告収益・個人サイト戦略についての整理 | literature | false | ファイル名・title（仮） |
| `31_Research/chatgpt-can-recognize-uploaded-filenames.md` | ChatGPTはアップロードされたファイル名を認識できる | literature | false | ファイル名・title（仮） |
| `31_Research/chatgpt-text-to-speech.md` | chatpgtの出力を音声にする | fleeting | true | ファイル名・title（仮） |
| `31_Research/chatgpt-capabilities.md` | ChatGPTで出来ること | — | true | ファイル名・title（仮） |
| `31_Research/chatgpt-subscription-cancellation.md` | chatgptの有料課金をやめたらアカウントはどうなる？ | fleeting | true | Cluster 10-AでFree移行時の情報保持と機能制限を整理 |
| `31_Research/chatgpt-reflective-reading.md` | chatgptを使った思い出し読書 | — | true | ファイル名・title（仮） |
| `31_Research/x-chatgpt-knowledge-workflow.md` | X × ChatGPT連携による情報収集・知識整理の検討まとめ | literature | false | ファイル名・title（仮） |
| `31_Research/foot-pedal-voice-input-test.md` | フットペダルと音声入力の組み合わせてテスト | permanent | true | ファイル名・title（仮） |
| `31_Research/local-llm-pc-purchase-decision.md` | ローカルLLMについて調べる | — | true | ファイル名・title（仮） |
| `31_Research/local-llm-long-text-processing.md` | 日本語名を入ローカルLLMの概要と、長文要約・文字起こし済みテキスト処理に必要なPC性能まとめ力 | literature | false | ファイル名・title（仮） |
| `31_Research/chatgpt-weekly-usage-limits.md` | 吾輩は、ChatGPTの週間利用制限すら使い切れない凡人である | permanent | false | Cluster 10-Aの監査で、本人の利用頻度の記録として本文を維持 |
| `31_Research/generative-ai-age-limits-parental-controls.md` | 主要生成AIの年齢制限・ペアレンタルコントロールと、子どもへの使わせ方 | literature | true | ファイル名・title（仮） |
| `31_Research/windows-local-transcription-apps.md` | ローカル上でWindowsマシンで、動画の音声を文字起こしするアプリ | — | true | ファイル名・title（仮） |
| `32_Zk/chatgpt-voice-input-output-shortcut-conflict.md` | ChatGTPの音声入力と「Voice Control for ChatGPT」によるショートカットの競合問題 | permanent | false | ファイル名・title（仮） |
| `32_Zk/create-training-plan-with-chatgpt.md` | トレーニングメニューをchatgptに作成してもらう | permanent | false | ファイル名・title（仮） |
| `31_Research/remote-access-chatgpt-codex-pc.md` | スマートフォンからChatGPT Work／Codex／PCを遠隔利用する方法の整理 | literature | false | Cluster 05の内容監査。AIサービス、Codex、Work、遠隔運用が中心 |

## Cluster 11：読書・学習・言語・文章表現

件数：28件。11-Eで4件を他クラスタへ主配置変更後の現行件数。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/product-value-proposition-vocabulary.md` | 製品・サービスの訴求軸別語彙 | literature | false | 本文の主題に合わせてtitle・aliasを整備 |
| `31_Research/building-a-reading-folder-to-rebuild-the-habit.md` | 読書習慣を再開するための読書記録運用 | literature | false | 本文の主題に合わせてtitle・aliasを整備 |
| `31_Research/ndc-classification-name-punctuation.md` | NDC分類名における記号の読み方 | fleeting | true | 本文の主題に合わせてtitle・aliasを整備 |
| `31_Research/study-topic-backlog.md` | 学習テーマのリサーチ・バックログ | fleeting | false | 本文の主題に合わせてtitle・aliasを整備 |
| `31_Research/collocation-connotation-core-image.md` | 英単語学習におけるコロケーション・コノテーション・コアイメージ | fleeting | true | 本文の主題に合わせてtitle・aliasを整備 |
| `31_Research/ten-thousand-word-vocabulary-plan.md` | 語彙サイズから考える英単語1万語学習方針 | fleeting | true | 本文の主題に合わせてtitle・aliasを整備 |
| `31_Research/english-word-core-images.md` | 英単語のコアイメージと接頭辞の捉え方 | — | false | 本文の主題に合わせてtitle・aliasを整備 |
| `31_Research/voice-chat-reading-method.md` | 読書中の音声チャット活用法 | fleeting | true | 本文の主題に合わせてtitle・aliasを整備 |
| `31_Research/b2b-customer-terminology.md` | B2B売上管理における顧客・販路の英語用語 | fleeting | true | 本文の主題に合わせてtitle・aliasを整備 |
| `31_Research/oem-customer-terminology.md` | OEM・受託製造における顧客関連用語 | fleeting | true | 本文の主題に合わせてtitle・aliasを整備 |
| `31_Research/integrating-terms-into-notes.md` | 英単語・専門用語を知識ネットワークに組み込む方法 | fleeting | true | 本文の主題に合わせてtitle・aliasを整備 |
| `31_Research/comparing-notes-within-genre.md` | 同一テーマの読書メモを比較・統合する方法 | fleeting | true | 本文の主題に合わせてtitle・aliasを整備 |
| `31_Research/reading-method-reflection.md` | 読書習慣を続けるための段階的な読書法 | fleeting | true | 本文の主題に合わせてtitle・aliasを整備 |
| `31_Research/japanese-date-expression-sense.md` | 「中旬頃」「下旬以降」の日付表現の読み方 | fleeting | true | 本文の主題に合わせてtitle・aliasを整備 |
| `31_Research/question-answer-evidence-summary.md` | 要約の実践フレーム：問い・答え・根拠 | fleeting | false | 本文の主題に合わせてtitle・aliasを整備 |
| `32_Zk/seven-w-four-h-grouping.md` | 7W4Hの要素とグループ分け | permanent | false | 本文の主題に合わせてtitle・aliasを整備 |
| `32_Zk/7w4h-song-rabbit-tortoise.md` | ウサギとカメで覚える7W4Hの歌 | permanent | false | ファイル名・title（仮） |
| `32_Zk/conjunctive-adverb-after-all.md` | 副詞「結局」の用法 | literature | false | 本文の主題に合わせてtitle・aliasを整備 |
| `32_Zk/bullet-list-writing-rules.md` | 箇条書きの見出しとラベルの書き方 | permanent | false | 本文の主題に合わせてtitle・aliasを整備 |
| `32_Zk/conjunctive-adverb-formula-cheatsheet.md` | 接続表現の論理関係・記号早見表 | structure | false | 本文の主題に合わせてtitle・aliasを整備 |
| `32_Zk/in-other-words.md` | 「つまり」の用法 | literature | false | 本文の主題に合わせてtitle・aliasを整備 |
| `32_Zk/conjunctive-adverb-in-short.md` | 「要するに」の用法 | literature | false | 本文の主題に合わせてtitle・aliasを整備 |
| `32_Zk/learn-math-notation-note-taking.md` | 数学記号を使ったノート記法 | literature | false | 願望部分を別ノートへ分離し、title・aliasを整備 |
| `32_Zk/mathematical-symbol-reference.md` | 数学記号の参照先 | literature | false | 本文の主題に合わせてtitle・aliasを整備 |
| `32_Zk/conjunctive-adverb-that-is.md` | 「すなわち」の用法 | literature | false | 本文の主題に合わせてtitle・aliasを整備 |
| `32_Zk/conjunctive-adverb-therefore.md` | 接続詞「だから」の用法 | literature | false | 本文の主題に合わせてtitle・aliasを整備 |
| `32_Zk/conjunctive-adverb-which-means.md` | 「ということは」の用法 | literature | false | 本文の主題に合わせてtitle・aliasを整備 |
| `32_Zk/words-of-the-self.md` | 自分の言葉をつくるための接続表現 | literature | false | 本文の主題に合わせてtitle・aliasを整備 |

## Cluster 12：健康・運動・食事・生活管理

件数：15件。Cluster 12完了後の現役ノート配置。Cluster 06から移管された2件を含む。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/strength-training-record-entry-improvements.md` | 筋トレ記録の入力方法改善についての整理 | fleeting | true | ファイル名・title（仮） |
| `31_Research/health-checkup-preparation-record.md` | 健康診断についてのまとめ | fleeting | true | ファイル名・title（仮） |
| `31_Research/health-checkup-preparation.md` | 健康診断前の準備：受診先の案内を優先する | literature | true | Cluster 12-Bで個別準備記録から一般資料を分離して作成 |
| `31_Research/psychiatric-sds-teg-questionnaires.md` | 精神科におけるSDS・TEGの役割 | literature | true | Fukkamaruの訂正によりCluster 06からCluster 12へ主クラスタ変更。06-Icで本文を再構成し、title・英名・typeを整備 |
| [microwave-power-time-conversion.md](../../31_Research/microwave-power-time-conversion.md) | 電子レンジのワット数と加熱時間の換算 | permanent | false | Cluster 06の移管候補を確定。生活上の加熱時間換算が中心であり、保存場所は変更しない |
| `31_Research/temporary-health-condition-record.md` | 体調不良について | fleeting | true | ファイル名・title（仮） |
| `31_Research/myna-insurance-card-use.md` | マイナ保険証の使い方 | literature | true | Cluster 12-Bで公的情報に基づく制度資料へ再構成し、ファイル名を変更 |
| `31_Research/late-night-snacking-consultation.md` | 夜食の相談メモ | fleeting | true | Cluster 12-Cで個別相談の記録へ再構成 |
| `31_Research/late-night-eating-considerations.md` | 夜食を考える際の観点 | literature | true | Cluster 12-Cで夜食の一般資料として分離して作成 |
| `32_Zk/2026-fitness-strength-plan.md` | 2026年の目標：筋力トレーニング | permanent | false | ファイル名・title（仮） |
| `32_Zk/adaptogen-herbs-overview.md` | アダプトゲンハーブについての概要 | literature | true | Cluster 12-Dで出典と安全上の留意点を補い、一般資料へ再構成 |
| `32_Zk/chocozap-workout-tracking-is-hard-to-use.md` | chocoZAPの運動記録が使いにくい | permanent | false | ファイル名・title（仮） |
| `32_Zk/difference-between-kampo-and-adaptogens.md` | 漢方とアダプトゲンハーブの違い | literature | true | Cluster 12-Dで製品・概念の違いと注意点を比較する資料へ再構成 |
| `32_Zk/heart-rate-training-zones.md` | 心拍数トレーニングゾーン | permanent | false | ファイル名・title（仮） |
| `31_Research/audio-devices-hearing-damage-comparison.md` | イヤホンとヘッドホンでの聴力への影響を調べる | literature | true | Cluster 12-Eで音量・時間・頻度を中心とする一般資料へ更新 |

## Cluster 13：Windows・ストレージ・PC障害

件数：36件。以前の内容監査済み2件を含む。2026-09-15の初回監査で主対象23件、境界確認対象13件を[Cluster 13作業台](cluster-13-windows-storage-pc-incidents.md)へ記録した。境界確認対象の主クラスタ変更は未実施。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/【簡易版】フェルメール展でたどる17世紀オランダ絵画 ― 12作品で学ぶジャンルと時代背景.md` | 【簡易版】フェルメール展でたどる17世紀オランダ絵画 ― 12作品で学ぶジャンルと時代背景 | literature | false | ファイル名・title（仮） |
| `31_Research/Gmailプラグインを使う.md` | Gmailプラグインを使う | — | true | ファイル名・title（仮） |
| `31_Research/PDFのサイズを圧縮できるソフトウェア、オンラインサービス.md` | PDFのサイズを圧縮できるソフトウェア、オンラインサービス | fleeting | true | ファイル名・title（仮） |
| `31_Research/powerrename-bulk-file-renaming.md` | PowerRenameで複数ファイル名を一括変更する方法 | permanent | true | Cluster 13-Eで英語名へリネームし、一括リネームの安全な手順として再構成 |
| `31_Research/smb-share-connection.md` | SMB共有フォルダへ接続する方法 | permanent | true | Cluster 13-Dで英語名へリネームし、利用者向け接続手順として再構成 |
| `31_Research/storage-event-id-7.md` | ストレージ関連エラー イベントID7 | — | true | ファイル名・title（仮） |
| `31_Research/vscode-user-system-installation.md` | VS Codeのユーザーインストールとシステムインストール | permanent | true | Cluster 13-Eで英語名へリネームし、導入形態の選択基準として再構成 |
| `31_Research/vscode-restricted-mode-workspace-trust.md` | VS Codeの制限モードとワークスペースの信頼 | permanent | true | Cluster 13-Eで英語名へリネームし、信頼境界の判断手順として再構成 |
| `31_Research/vscode-typora-markdown-editing.md` | VS CodeとTyporaでMarkdownを編集する使い分け | permanent | true | Cluster 13-Eで英語名へリネームし、編集用途の選択基準として再構成 |
| `31_Research/WeChatについてのまとめ.md` | WeChatについてのまとめ | fleeting | true | ファイル名・title（仮） |
| `31_Research/what-is-byod.md` | BYODについて | — | true | ファイル名・title（仮） |
| `31_Research/windows-preview-update-repair-decision.md` | Windows Updateでプレビュー更新が失敗したときの修復判断 | literature | true | Cluster 13-Cで英語名へリネームし、更新失敗時の修復判断として再構成 |
| `31_Research/windows-profile-ssd-read-errors.md` | Windowsユーザープロファイル障害・SSD不良ブロック調査まとめ | — | true | ファイル名・title（仮） |
| `31_Research/Yahoo! JAPANメールをAIで整理する方法についての検討まとめ.md` | Yahoo! JAPANメールをAIで整理する方法についての検討まとめ | — | true | ファイル名・title（仮） |
| `31_Research/Yahoo！JAPANメールとAI接続.md` | Yahoo！JAPANメールとAI接続 | fleeting | true | ファイル名・title（仮） |
| `31_Research/yt-dlpによる動画ダウンロード.md` | yt-dlpによる動画ダウンロード | fleeting | true | ファイル名・title（仮） |
| `31_Research/フェルメール展（2026・大阪中之島美術館）に関する検討内容まとめ.md` | フェルメール展2026｜鑑賞日時とチケット購入経緯 | literature | true | ファイル名・title（仮） |
| `31_Research/フェルメール展でたどる17世紀オランダ絵画 ― 12作品で学ぶジャンルと時代背景.md` | フェルメール展でたどる17世紀オランダ絵画 ― 12作品で学ぶジャンルと時代背景 | literature | false | ファイル名・title（仮） |
| `31_Research/user-profile-load-failure-causes.md` | ユーザープロファイルを読み込めなくなる原因候補 | literature | true | Cluster 13-Aで日本語名へリネームし、初期の原因候補として位置付け |
| `31_Research/user-profile-recovery-decision.md` | ユーザープロファイルを復旧するか、諦めるかの判断基準 | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 1 2.md` | お礼メール | fleeting | true | ファイル名・title（仮） |
| `31_Research/lifebook-ssd-bios-detection-incident.md` | LIFEBOOK AシリーズでBIOSからSSDが消えた事例 | literature | true | Cluster 13-Bで英語名へリネームし、単独の業務事例として再構成 |
| `31_Research/user-profile-incident-investigation-time.md` | ユーザープロファイル障害の原因調査に要した時間の評価 | literature | true | Cluster 13-Aで英語名へリネームし、調査作業量の評価記録として位置付け |
| `31_Research/user-profile-storage-incident-sources.md` | ユーザープロファイル障害とストレージ障害の調査資料 | literature | true | Cluster 13-Aで英語名へリネームし、参照資料一覧として位置付け |
| `32_Zk/android-gboard-dictionary-import.md` | android端末でGboard辞書を一括インポートする方法 | permanent | false | ファイル名・title（仮） |
| `32_Zk/keyboard-manager-caps-lock-remapping.md` | Keyboard ManagerでCaps Lockを再割り当てる方法 | permanent | false | Cluster 13-Eで英語名へリネームし、個人の設定例を含む再割り当て手順として再構成 |
| `32_Zk/url-encoding-decoding-examples.md` | URLエンコードとデコードの具体例 | permanent | false | Cluster 13-Fで英語名へリネームし、URLの具体例として再構成 |
| `32_Zk/ios-gboard-dictionary-import.md` | ios端末でGboard辞書を一括インポートする方法 | literature | false | ファイル名・title（仮） |
| `32_Zk/windows-smb-share-administration.md` | WindowsのSMB共有を管理する方法 | permanent | true | Cluster 13-Dで日本語名へリネームし、共有元の運用・管理手順として再構成 |
| `32_Zk/windows-smb-share-setup.md` | WindowsでSMB共有フォルダを設定する方法 | permanent | false | Cluster 13-Dで日本語名へリネームし、共有作成・権限設定手順として再構成 |
| `32_Zk/why-japanese-urls-get-encoded.md` | URLで日本語がエンコードされる理由 | permanent | false | Cluster 13-Fで英語名へリネームし、URLの概念説明として再構成 |
| `32_Zk/why-powertoys-is-not-preinstalled.md` | PowerToysがWindowsに標準搭載されない理由 | permanent | false | Cluster 13-Eで英語名へリネームし、確認済み事実と推論を分離 |
| `32_Zk/winmail-dat-causes-solutions.md` | winmail.datが届く原因と対処方法 | permanent | false | Cluster 13-Fで英語名へリネームし、TNEF・再送判断の手順として再構成 |
| `31_Research/ssd-health-monitoring-tools.md` | ハードディスクやSSDの健康状態を見る定番ソフト | literature | true | Cluster 13-Aで英語名へリネーム。ストレージ障害の切り分け資料 |
| `31_Research/windows-storage-health-check-commands.md` | ハードディスクやSSDの健康状態を見るコマンド入力 | — | true | Cluster 12の初回内容監査。Windows標準コマンド、イベントビューアー、SSD障害の切り分けが中心 |
| `31_Research/pc-cooling-technology-chronology.md` | パソコン冷却技術の変遷年表：個人PC・競技用途・業務用 | fleeting | true | Cluster 09-Eの監査。PC・データセンター冷却の時限性を含む技術資料としてCluster 13へ主クラスタ変更。本文監査はCluster 13で行う |

## Cluster 14：Git・GitHub・Cloudflare・Web公開基盤

件数：20件。主クラスタの仮配置。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/organizing-fukkamaru-space-folder-numbers.md` | fukkamaru.spaceのフォルダ構成における番号体系の整理 | literature | false | ファイル名・title（仮） |
| `31_Research/WordPressのプラグイン.md` | WordPressのプラグイン | — | true | ファイル名・title（仮） |
| `31_Research/ローカルリポジトリとクラウドリポジトリの違い.md` | ローカルリポジトリとクラウドリポジトリの違い | fleeting | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 222.md` | GitとGitHubの違い | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 333.md` | ホスティングサイトの違い | ai-generated | false | ファイル名・title（仮） |
| `31_Research/無題のファイル 555.md` | DNSの違いについて | — | false | ファイル名・title（仮） |
| `31_Research/無題のファイル 888.md` | # Gitにおけるコミット・プッシュ・プル・リモートリポジトリ・ブランチの整理 | — | false | ファイル名・title（仮） |
| `31_Research/無題のファイル113.md` | Git/GitHub/GitLFS/GitHub/GitHub Pagesの違い | — | true | ファイル名・title（仮） |
| `32_Zk/build-a-digital-garden-environment.md` | デジタルガーデンの環境を構築する | permanent | false | ファイル名・title（仮） |
| `32_Zk/cloudflare-pages-external-domain-restrictions.md` | 外部カスタムドメインをCloudflare Pagesで利用する場合の制限 | permanent | false | ファイル名・title（仮） |
| `32_Zk/cloudflare-pages-limitations.md` | Cloudflare Pagesの主な制限 | literature | false | ファイル名・title（仮） |
| `32_Zk/cloudflare-pages-vs-github-pages.md` | Cloudflare Pages / GitHub / GitHub Pagesの比較 | literature | false | ファイル名・title（仮） |
| `32_Zk/git-ecosystem-notes.md` | Gitエコシステムまとめ | structure | false | ファイル名・title（仮） |
| `32_Zk/git-lfs-limitations.md` | Git LFSの制限 | — | false | ファイル名・title（仮） |
| `32_Zk/git-lock-file-error.md` | Gitの「.lock」による排他ロックエラー | literature | false | ファイル名・title（仮） |
| `32_Zk/github-limitations.md` | Github本体のの主な制限 | literature | false | ファイル名・title（仮） |
| `32_Zk/github-pages-limitations.md` | GitHub Pagesの主な制限 | literature | false | ファイル名・title（仮） |
| `32_Zk/github-releases-limitations.md` | GitHub Releasesの制限 | literature | false | ファイル名・title（仮） |
| `32_Zk/himeji-castle-digital-ticket-with-coupon.md` | 姫路城下まち1000円クーポン付きデジタルチケット（2026年） | literature | true | ファイル名・title（仮） |
| `32_Zk/wakayama-sightseeing-digital-ticket.md` | 和歌山観光デジタルきっぷ（2026年調査） | literature | true | ファイル名・title（仮） |

## Cluster 15：個人プロジェクト・娯楽・残余監査

件数：278件。内容監査前の残余ノートと、他クラスタの内容監査で主クラスタを変更したノートを含む。2026年9月22日に既存表の実パスを再照合し、重複なしの174件であることを確認した。2026年9月21日にFukkamaruの明示指示により、`30_Inbox/クラスタ15に追加`の現役115件を追加した。このうち現行購入ガイドと本文が完全一致した旧コピー11件は、同日Fukkamaruの承認により`.退避-2026-09-22.md`へ変更したため、追加分の現役は104件である。既存の`.退避`16件とこの11件は復元用のため本文監査の対象外とする。既存174件と追加104件は以下の単一一覧に統合し、出自は区切り行で保持する。

| パス（ファイル名）                                                                                  | title                                                         | type         | draft | 判定根拠                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------- | ------------ | ----- | ----------------------------------------------------------------------- |
| **出自：既存台帳（174件）**                                                                          | —                                                             | —            | —     | 初期台帳および他クラスタの監査からの主配置変更                                                 |
| `32_Zk/amazon-delivery-address-error-checks.md`                                                    | Amazonの配送先エラーを確認する                                                   | permanent    | false | Cluster 08初回監査。個人の購入体験が中心であり、EC業務・商品管理の主対象ではない                          |
| `32_Zk/accounting-terms.md`                                                                | 会計用語                                                          | literature   | false | Cluster 08初回監査。ECとの直接の関係が弱い一般的な会計用語のメモ                                  |
| `32_Zk/rakuten-mobile-employee-referral-url-2026.md`                                               | 楽天モバイル従業員紹介URLの記録（2026年5月）                         | fleeting     | false | Cluster 15-10で時点を明示して改名                                                     |
| `32_Zk/chatgpt-retention-offer-2026.md`                                                     | ChatGPTの解約前無料継続オファーの記録（2026年8月）                                | fleeting     | false | Cluster 15-10で時点を明示して改名                                                     |
| `32_Zk/aislesoft-inc.md`                                                                   | 株式会社アイルソフト                                                    | literature   | true  | Cluster 09-Eの監査。時限性を含む業務システム事業者調査としてCluster 15へ主クラスタ変更。本文更新時に公式情報を再確認する |
| `32_Zk/ill-inc.md`                                                                        | 株式会社アイル                                                       | literature   | true  | Cluster 09-Eの監査。時限性を含む業務システム事業者調査としてCluster 15へ主クラスタ変更。本文更新時に公式情報を再確認する |
| `32_Zk/inventory-safety-riddle.md`                                                         | 棚卸し作業の安全に関するなぞなぞ                                              | fleeting     | true  | Cluster 09-Eの監査。棚卸しの実務知識ではなく安全注意を含むなぞなぞとしてCluster 15へ主クラスタ変更            |
| `32_Zk/read-receipt-label.md`                                                              | 「受信確認」ラベルを設計                                                  | permanent    | false | Cluster 09-Eの監査。個人のメール運用判断が中心のためCluster 15へ主クラスタ変更                      |
| `31_Research/洗面利用での衛生面と清掃負担.md`                                                            | 洗面利用での衛生面と清掃負担                                                | —            | true  | Cluster 12-Cの監査により、健康管理ではなく残余監査へ主クラスタ変更。本文は未変更                          |
| `31_Research/usb-drive-purpose-separation-policy.md`                                       | USBメモリを用途別に分離する管理方針                                           | permanent    | true  | Cluster 05の05-E内容監査。個人データの分離方針が中心であり、購入・接続・設定の判断ではない                    |
| `32_Zk/buy-stools-not-storage-boxes.md`                                                    | 部屋の初期整理では収納ボックスよりスツールを優先する                                    | permanent    | false | Cluster 05の内容監査。生活用品と部屋の整理が中心                                           |
| `32_Zk/buying-a-chair-seriously.md`                                                        | 床座り生活からゲーミングチェアへ切り替えた記録                                       | fleeting     | false | Cluster 05の内容監査。本人の生活環境と身体負担の記録が中心                                      |
| `32_Zk/clippy-caps-lock-comparison-question.md`                                         | マイクロソフトのイルカとキーボードのcaps lockはどちらの方が嫌われているのか？                   | fleeting     | false | Cluster 05の内容監査。購入・家電判断ではない雑多な問い                                        |
| `32_Zk/how-to-use-clear-files-effectively.md`                                              | クリアファイルの使い分けを決める                                              | permanent    | false | Cluster 05の内容監査。紙資料の個人運用が中心                                             |
| `32_Zk/iphone-wired-charge-sharing-rental-decision.md`                                                           | iphoneでおすそ分け充電                                                | literature   | false | Cluster 05の内容監査。個人端末の利用メモであり、購入判断ではない                                   |
| `32_Zk/clear-file-collection.md`                                                           | 所持クリアファイル一覧                                                   | fleeting     | false | Cluster 05の内容監査。個人所有物の一覧                                                |
| `32_Zk/stools-as-functional-decor.md`                                                      | スツールの色は部屋の印象と集中に影響する                                          | permanent    | false | Cluster 05の内容監査。生活用品と室内環境が中心                                            |
| `32_Zk/suit-clothes-brush-buying-guide.md`                                                 | スーツの日常ケアには馬毛の洋服ブラシを選ぶ                                         | permanent    | false | Cluster 05の内容監査。衣類の手入れと生活管理が中心                                          |
| [ac-dc-basics-adapter-labels.md](../../31_Research/ac-dc-basics-adapter-labels.md)         | 交流・直流の基本とACアダプター表記                                            | fleeting     | true  | Cluster 06の移管候補を確定。一般的な電気の基礎知識が中心であり、保存場所は変更しない                         |
| [male-female-terms-in-industrial-components.md](../../32_Zk/male-female-terms-in-industrial-components.md) | 工業部品におけるオス・メス表現と代替用語                                           | literature   | false | Cluster 06の移管候補を確定。一般的な機械用語が中心であり、保存場所は変更しない                            |
| [mechanical-fit-and-mating.md](../../32_Zk/mechanical-fit-and-mating.md)                   | 嵌合                                                            | literature   | false | Cluster 06の移管候補を確定。一般的な機械用語が中心であり、保存場所は変更しない                            |
| `31_Research/mufasa-the-lion-king-impressions.md`                                                         | 『ライオン・キング：ムファサ』感想                                             | fleeting     | true  | Cluster 03の完了時に、映画鑑賞記録として移管                                             |
| `31_Research/「刷新」や「一新」など変更に関する単語の比較.md`                                                    | 「刷新」や「一新」など変更に関する単語の比較                                        | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/electric-energy-and-power-reduction-terminology.md`                                                    | 「年間削減電力量」 vs 「年間電力削減量」                                        | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/reducing-decision-cost-with-timeboxing.md`                                    | 2分ルールに頼らず、時間枠で判断コストを減らす                                       | literature   | true  | ファイル名・title（仮）                                                          |
| `31_Research/red-brick-warehouse-landmark-design.md`                                                 | サンドボックスで赤レンガ倉庫を目玉にする景観設計                                                   | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/docs-folder-purpose-and-structure.md`                                                             | docsフォルダの役割と構成例                                               | fleeting     | false | ファイル名・title（仮）                                                          |
| `31_Research/smart-ex-shinkansen-seat-guide.md`                                                              | EXアプリの見方を覚える                                                  | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/sandbox-floor-ceiling-material-design.md`                               | サンドボックス建築における床・天井の素材と模様                                              | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/kansai-wages-minimum-wage-and-inflation.md`                                            | 近畿2府5県の賃金・最低賃金・物価：実績・現状・見通し                                       | literature   | false | 2026-09-23に本文・YAML・ファイル名を整理                                                          |
| `31_Research/google-slides-section-management-and-slide-image-export.md`                                   | Googleスライドの「セクション管理」と特定スライドの画像エクスポートまとめ                       | literature   | false | ファイル名・title（仮）                                                          |
| `31_Research/line-vs-line-works-differences.md`                                            | line worksとline worksの違いと使い方                                  | field        | true  | ファイル名・title（仮）                                                          |
| `31_Research/miho-museum-and-shigaraki-highlands.md`                                                   | MIHO MUSEUMを囲む大自然「信楽高原」                                       | permanent    | true  | ファイル名・title（仮）                                                          |
| `31_Research/natural-looking-flower-placement-tips.md`                                     | 草花をオシャレに散りばめるテクニック                                            | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/oi-ocha-pure-green-vs-lemon.md`                                               | おーいお茶 ピュアグリーン vs おーいお茶レモン                                     | fleeting     | false | ファイル名・title（仮）                                                          |
| `31_Research/aspect-ratio-filename-convention.md`                                  | ファイル名の縦横比表記：ar記法                                        | permanent    | false | titleとファイル名を本文に整合（2026-09-26）                                                          |
| `31_Research/research-topics-list.md`                                                            | 調べたいことメモ                                                      | fleeting     | false | ファイル名・title（仮）                                                          |
| `31_Research/sdgs-eight-tenths-society-construction-industry.md`                                                           | SDGsと8がけ社会と施工業界                                               | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/youtube-analytics-impressions-explained.md`                                              | YouTubeアナリティクスにおけるインプレッションの扱い                                  | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/excel-exact-duplicate-detection.md`                                                 | エクセル関数で重複判定するときの完全一致と曖昧一致                                     | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/kfc-chicken-day-and-anniversary-pack-comparison.md`                                                  | ケンタッキーのとりの日パックと創業記念パックを比較する                                      | fleeting     | true  | 2026-09-23に本文・YAML・ファイル名を整理                                                          |
| `31_Research/pia-face-value-resale-terms-and-fees-2026.md`                                                | チケットぴあ定価リセールの条件と手数料（2026年調査）                                | literature   | true  | Cluster 15-10で英語ファイル名へ改名                                               |
| `31_Research/data-center-cooling-feature-product-fit.md`                                                              | データセンターの冷却特集                                                  | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/first-wakayama-ramen-visit.md`                                                              | はじめての和歌山ラーメン                                                  | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/windows-app-volume-adjustment.md`                                                        | パソコンで特定のアプリの音量を下げる                                            | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/power-query-layer-naming.md`                                                               | パワークエリ内部の整理                                                   | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/pink-house-kit-uses.md`                                                                | ピンクの家キットの活用アイデア                                                    | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/windows-printer-job-settings.md`                                                            | Windowsプリンタードライバーの印刷ジョブ設定                                                | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/boxing-method-for-digital-notes.md`                                           | デジタルノート術としてのボクシング・メソッド                                        | literature   | true  | ファイル名・title（仮）                                                          |
| `31_Research/マッサージチェアの効果について.md`                                                           | マッサージチェアの効果について                                               | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/マットレスとカバーについて.md`                                                             | マットレスとカバーについて                                                 | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/マットレスの返品対応についてまとめる.md`                                                        | マットレスの返品対応についてまとめる                                            | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/むずむず足症候群.md`                                                                  | むずむず足症候群                                                      | ai-generated | true  | ファイル名・title（仮）                                                          |
| `31_Research/power-query-receipt-date-transformation.md`                                                            | リファクタリング前のコード。                                                | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/retrofit-backpack-straps.md`                                             | リュックへウエストベルトとチェストストラップを後付けする                                  | fleeting     | false | ファイル名・title（仮）                                                          |
| `31_Research/backpack-load-distribution-guide.md`                                                       | リュックの荷重調整にチェストストラップ                                           | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/wordpress-redirect-configuration-options.md`                                                        | ワードプレスでのリダイレクション設定                                            | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/safety-stock-case-and-unit-management.md`                                                   | 安全在庫算定におけるケース単位とバラ単位の扱い                                       | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/unagi-mizuki-eel-protein-estimate.md`                                                             | 鰻水木で食べたうなぎのたんぱく質量の概算                                                 | fleeting            | true  | 2026-09-23に本文・YAML・ファイル名を整理                                                          |
| `31_Research/kansai-railway-surcharge-rules.md`                                                                | 関西電鉄の料金ルール                                                    | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/mechanical-and-physical-properties.md`                                                               | 機械的特性と物理的特性                                                   | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/筋肉の5つの能力.md`                                                                  | 筋肉の5つの能力                                                      | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/physical-sample-attachment.md`                                                                      | 現物添付                                                          | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/city-builder-port-zoning-plan.md`                                                                | 港の使い分けを考える                                                    | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/non-installation-work-terminology.md`                                                       | 施工作業以外に発生する作業の名称まとめ                                           | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/self-extinguishing-and-flame-retardancy.md`                                                                 | 自己消火性と難燃性                                                     | ai-generated | true  | ファイル名・title（仮）                                                          |
| `31_Research/室内空気の循環を考える.md`                                                               | 室内空気の循環を考える                                                   | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/iphone-ipad-to-windows-hdd-smb-photo-video-workflow.md`                                                                | iPhone・iPadからWindows外付けHDDへ写真・動画を保存するSMB運用                                                    | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/処方箋の「4日以内」ルールと、薬を受け取り忘れた場合の対応まとめ.md`                                          | 処方箋の「4日以内」ルールと、薬を受け取り忘れた場合の対応まとめ                              | literature   | false | ファイル名・title（仮）                                                          |
| `31_Research/office-shape-template-replacement.md`                                           | 図形のベースファイルをコピーするときの現実的な安全設計について                               | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/water-treatment-and-contamination.md`                                                           | 水処理特集とコンタミの関係整理                                               | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/精神科・心療内科・メンタルクリニックに関する相談まとめ.md`                                               | 精神科・心療内科・メンタルクリニックに関する相談まとめ                                   | ai-generated | true  | ファイル名・title（仮）                                                          |
| `31_Research/精神科におけるエゴグラム.md`                                                              | 精神科におけるエゴグラム                                                  | ai-generated | true  | ファイル名・title（仮）                                                          |
| `31_Research/product-categories-and-tags.md`                                                                | 製品カテゴリーとタグ                                                    | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/単語の挿入位置.md`                                                                   | 単語の挿入位置                                                       | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/単語の適切.md`                                                                     | 単語の適切                                                         | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/intermediate-file-naming.md`                                                             | 中間ファイルの名称を考える                                                 | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/hollow-microspheres-and-aerogel-comparison.md`                                                           | 中空バルーンとエアロゲルの構造・性能・用途の比較                                               | literature     | true  | 2026-09-23に本文・YAML・ファイル名を整理                                                          |
| `31_Research/exhibition-photo-mini-card-purpose-and-design.md`                                                          | 展示会で写真入りミニカードを活用する目的と設計                                              | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/電気量と電力量の違い.md`                                                                | 電気量と電力量の違い                                                    | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/rainbow-discovery-viewing-notes.md`                                                             | 虹色みぃつけた！｜感想メモ                                                 | literature   | true  | ファイル名・title（仮）                                                          |
| `31_Research/iga-koka-ninja-day-trip-notes.md`                                                         | 伊賀・甲賀忍者を巡る日帰り移動メモ                                             | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/sales-trend-chart-axis-design.md`                                                         | 売上推移グラフの軸設計に関する整理                                             | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/currency-accounting-number-format.md`                                                           | 表示形式で通貨と会計の使い分け                                               | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/複数まとめサイトを横断して「本日の話題」を効率よく把握する仕組みづくり.md`                                       | 複数まとめサイトを横断して「本日の話題」を効率よく把握する仕組みづくり                           | literature   | false | ファイル名・title（仮）                                                          |
| `31_Research/insulation-material-combustibility.md`                                                             | 保温材の燃えやすさについて                                                 | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/open-university-and-zen-university-comparison.md`                                                             | 放送大学とZEN大学を学習目的・費用・学生特典で比較する                                                 | literature | true  | 2026-09-23に本文・YAML・ファイル名を整理                                                          |
| `31_Research/未開封でもサラダチキンは放置すと危険.md`                                                        | 未開封でもサラダチキンは放置すと危険                                            | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/lightweight-materials-pr-story.md`                                                               | 施工業界の人手不足を背景にした軽量建材のPRストーリー                    | —            | true  | titleとファイル名を本文に整合（2026-09-26）                                                          |
| `31_Research/data-document-and-development-file-classification.md`                                                               | データ・文書・開発ファイルの分類案                                         | literature            | true  | 2026-09-23に本文・YAML・ファイル名を整理                                                          |
| `31_Research/moisturizing-gel-and-cream-comparison.md`                                                  | 保湿ジェルとクリームの使用感・注意点の比較                                      | literature   | true  | Cluster 15-10で英語ファイル名へ改名                                               |
| `31_Research/無題のファイル 10.md`                                                                | ipadのキャプチャ方法を考える                                              | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/meaningful-game-streaming.md`                                                 | 公開しないゲーム配信・録画の意義と運用メモ                                         | literature   | true  | 2026-09-22に15-07で本文の役割・YAML・英名を整理                                       |
| `31_Research/無題のファイル 112.md`                                                               | sentence-per-line                                             | —            | false | ファイル名・title（仮）                                                          |
| `31_Research/switch-2-game-streaming-planning-log.md`                                      | Switch 2のゲーム録画・配信準備ログ                                         | fleeting     | true  | 2026-09-22に15-07で本文の役割・YAML・英名を整理                                       |
| `31_Research/無題のファイル 2 12.md`                                                              | KB・MB・GBとKiB・MiB・GiBの違い                                       | ai-generated | false | ファイル名・title（仮）                                                          |
| `31_Research/game-streaming-description-latency-voice.md`                                  | ゲーム配信の概要欄・遅延・話し方に関する検討メモ                                      | literature   | true  | 2026-09-22に15-07で本文の役割・YAML・英名を整理                                       |
| `31_Research/channel-separation-decision-criteria.md`                                                                | チャンネル分けを考える判断基準                                               | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/placeholder-mock-sample-test-naming.md`                                                                | dummy・mock・sample・test・temp・draftの使い分け                        | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/無題のファイル 29.md`                                                                | 職業と掛け持ちの違い                                                    | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/kengo-kuma-riken-yamamoto-tadao-ando-comparison.md`                                                                 | 隈研吾・山本理顕・安藤忠雄の建築思想比較                                                 | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/dragon-quest-7-reimagined-proficiency.md`                                     | DQ7リイマジンドの熟練度稼ぎ：未検証の仕様メモ                                      | literature   | true  | 2026-09-22に15-07で本文の役割・YAML・英名を整理                                       |
| `31_Research/online-store-safety-check.md`                                                                | オンライン販売サイトの安全性を確認する                                                   | literature            | true  | 2026-09-23に本文・YAML・ファイル名を整理                                                          |
| `31_Research/無題のファイル 38.md`                                                                | Sakulalaによる生体認証プラットフォームサービス                                   | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/無題のファイル 4 1.md`                                                               | 処置と措置の違い                                                      | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/ec-sales-increase-hypothesis-analysis.md`                                                               | 特定ECルートでの製品売上増加の理由を探る                                         | fleeting     | true  | ファイル名・title（仮）                                                          |
| `31_Research/fukari-bridge-hanamachi-memo.md`                                                                 | 深里橋 花街                                                        | fleeting     | false | ファイル名・title（仮）                                                          |
| `31_Research/foot-pedal-articles-for-pc-operation.md`                                                                 | PC操作にフットペダルを活用するための参考記事                                                | literature            | true  | 2026-09-23に本文・YAML・ファイル名を整理                                                          |
| `31_Research/aoniyoshi-nara-poem-meaning.md`                                                                 | あをによし：奈良を讃える枕詞と歌                                 | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/conveyor-belt-sushi-protein-cost-efficiency.md`                                                 | 回転寿司でタンパク質を選ぶ際のコスパ                                                 | literature   | true  | Cluster 15-10で英語ファイル名へ改名                                               |
| `31_Research/無題のファイル 9.md`                                                                 | パスワード管理をどのアプリで行うか？                                            | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/joshin-points-before-expiry.md`                                                     | ジョーシンポイントの失効前の使い道を考える                                         | literature   | true  | Cluster 15-10で英語ファイル名へ改名                                               |
| `31_Research/問題把握1.md`                                                                     | 問題把握1                                                         | —            | true  | ファイル名・title（仮）                                                          |
| `31_Research/問題把握2.md`                                                                     | 問題把握2                                                         | —            | true  | ファイル名・title（仮）                                                          |
| `32_Zk/2026-room-cleaning-goal.md`                                                         | 2026年の目標：部屋の掃除                                                | fleeting     | false | ファイル名・title（仮）                                                          |
| `32_Zk/ai-work-log-implementation-record.md`                                                                 | AI作業ログを追加する                                                   | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/admiring-flowers-honoring-the-past-highlights.md`                                   | 「花を愛でる 古きを尊ぶ」鑑賞ガイド：注目作品                                            | literature   | false | ファイル名・title（仮）                                                          |
| `32_Zk/admiring-flowers-honoring-the-past.md`                                              | 特別企画展「花を愛でる 古きを尊ぶ」展覧会情報                                             | literature   | false | ファイル名・title（仮）                                                          |
| `32_Zk/adopt-adapt-adept-how-to-remember.md`                                               | adopt, adapt, adeptの違いと覚え方                                    | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/basic-thread-management-for-token-efficiency.md`                                    | トークン消費量を抑えるための基礎的なスレッド管理                                      | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/beige-and-dried-grass-color.md`                                                     | ベージュ色と枯草色                                                     | literature   | false | ファイル名・title（仮）                                                          |
| `32_Zk/purchase-decisions-value-before-price.md`                                                         | 買う理由が値段ならやめるべき。買わない理由が値段なら買うべき                                | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/personal-card-closing-and-payment-dates.md`                                           | 個人用クレジットカードの締め日・支払日メモ                                              | permanent    | true  | ファイル名・title（仮）                                                          |
| `32_Zk/criteria-for-saving-ai-questions.md`                                                | AIに尋ねた質問をメモとして残す判断基準                                          | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/difference-between-product-and-goods.md`                                            | 「商品」と「製品」の違い                                                  | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/amazon-seller-plan-downgrade-checklist.md`                                                     | Amazon Seller大口から小口へ移行する際の確認                                 | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/environment-shapes-people.md`                                                       | 環境が人を変える                                                      | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/fix-word-text-background-darkening.md`                                              | Wordで背景色の付いた図形の上に文字を置くと、その周辺部分だけ背景色が濃くなる問題の解決                 | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/flagship-store.md`                                                                  | 旗艦店（フラグシップストア）                                                | literature   | false | ファイル名・title（仮）                                                          |
| `32_Zk/fuka-japanese-surnames-and-creation.md`                                             | 「ふか」ではじまる日本の苗字と創作                                             | ai-generated | false | ファイル名・title（仮）                                                          |
| `32_Zk/okayama-kurashiki-overnight-travel.md`                                                     | 岡山と倉敷を両方回るなら1泊以上を前提にする                                        | permanent    | true  | ファイル名・title（仮）                                                          |
| `32_Zk/goals-as-gap-measure.md`                                                            | 「目標」は理想と現実のギャップを測るために設置する                                     | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/goals-list.md`                                                                      | 目標一覧                                                          | structure    | false | ファイル名・title（仮）                                                          |
| `32_Zk/hitmonchan-punch-speed-comparison.md`                                              | エビワラーのパンチ速度を身近な速度と比較する                                    | permanent    | false | 2026-09-23に本文・YAML・ファイル名を整理                                                          |
| `32_Zk/how-to-do-bicep-curls-correctly.md`                                                 | バイセップカールの正しいフォーム                                              | literature   | false | ファイル名・title（仮）                                                          |
| `32_Zk/how-to-do-dips-correctly.md`                                                        | ディップスの正しいフォーム                                                 | literature   | false | ファイル名・title（仮）                                                          |
| `32_Zk/how-to-do-shoulder-press-correctly.md`                                              | ショルダープレスの正しいフォーム                                              | literature   | false | ファイル名・title（仮）                                                          |
| `32_Zk/how-to-eat-almond-tart.md`                                                          | アーモンドタルトの食べ方                                                  | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/image-naming-conventions.md`                                                        | 画像ファイルの命名規則                                                   | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/iso-8601-date-time-format.md`                                                                  | ISO 8601系の日時表記                                                | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/kindle-tag-icon-reference.md`                                                       | kindlハイライトのアイコン一覧表                                            | structure    | false | ファイル名・title（仮）                                                          |
| `32_Zk/kintetsu-weekend-free-pass-trip-ideas.md`                                           | 近鉄週末フリーパスで遠出する候補                                              | literature   | true  | ファイル名・title（仮）                                                          |
| `32_Zk/kyushu-travel-support-source.md`                                                         | 九州応援割り                                                        | literature   | false | ファイル名・title（仮）                                                          |
| `32_Zk/lucua-yodobashi-umeda-location.md`                                                  | 梅田にあるルクアとヨドバシカメラの位置関係                                         | literature   | false | ファイル名・title（仮）                                                          |
| `32_Zk/magnetism-in-storage-media.md`                                                      | 記録媒体と磁石の関係                                                    | literature   | false | ファイル名・title（仮）                                                          |
| `32_Zk/major-rinzai-sects.md`                                                              | 臨済宗の代表的な宗派                                                    | literature   | false | ファイル名・title（仮）                                                          |
| `32_Zk/misa-japanese-surnames-and-creation.md`                                             | 「みさ」ではじまる日本の苗字と創作                                             | ai-generated | false | ファイル名・title（仮）                                                          |
| `32_Zk/need-for-alt-text.md`                                                               | 代替テキストの必要性                                                    | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/nsfw-used-windows-tablet-selection.md`                                                  | NSFW用途の中古Windowsタブレット選定メモ（2026年1月）                     | literature   | false | Cluster 15-10で時点を明示して改名                                                |
| `32_Zk/obvious-to-me-not-to-others.md`                                                     | 前提の相対性                                                        | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/orange-book-monotaro-business-models.md`                                                 | オレンジブックとモノタロウの事業・流通モデル比較                                              | literature   | false | ファイル名・title（仮）                                                          |
| `32_Zk/personal-bookmarks.md`                                                              | 個人的なブックマーク                                                    | literature   | true  | ファイル名・title（仮）                                                          |
| `32_Zk/pokemon-paras-mushroom-host-theory.md`                                              | パラスの本体は「きのこ」である                                               | literature   | false | ファイル名・title（仮）                                                          |
| `32_Zk/pokoa-pokemon.md`                                                                   | ぽこあポケモン                                                       | structure    | false | ファイル名・title（仮）                                                          |
| `32_Zk/ai-work-log-implementation-preparation.md`                                                           | AI作業ログの作成準備                                                   | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/note-links-and-backlinks.md`                                                             | メモ同士のリンクとバックリンクの関係を理解する                                       | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/resolution-and-common-names.md`                                                     | 解像度と一般的な呼称                                                    | literature   | false | ファイル名・title（仮）                                                          |
| `32_Zk/return-to-thinking-on-reread.md`                                                    | 再読時に思考へ戻れること                                                  | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/ricoh-im-c3510-vs-im-c3010.md`                                                      | RICOH IM C3510 VS RICOH IM C3010                              | literature   | false | ファイル名・title（仮）                                                          |
| `32_Zk/sai-japanese-surnames-and-creation.md`                                              | 「さい」ではじまる日本の苗字と創作                                             | ai-generated | false | ファイル名・title（仮）                                                          |
| `32_Zk/sandbox-5x5-creation-method.md`                                                     | 5x5クリエイト                                                      | literature   | false | ファイル名・title（仮）                                                          |
| `32_Zk/separating-external-and-reflective-knowledge.md`                                    | 外部環境で得た知識と内省知の切り分け方                                           | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/shortcut-junction-symlink-differences.md`                                           | ショートカット、ジャンクション、シンボリックリンクの違い                                  | permanent    | true  | ファイル名・title（仮）                                                          |
| `32_Zk/simplify-kindle-highlight-notes.md`                                                 | Kindleハイライト時のメモを簡略化                                           | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/smartphone-mailer-list.md`                                                          | スマホ向け「メーラー」一覧表                                                | ai-generated | false | ファイル名・title（仮）                                                          |
| `32_Zk/specific-and-nonspecific-difference.md`                                             | 特異的抵抗と非特異的抵抗の違い                                               | literature   | false | ファイル名・title（仮）                                                          |
| `32_Zk/smbc-card-repayment-after-insufficient-funds.md`                                    | 三井住友カードの残高不足後の再引落記録（2026年8月）                                        | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/suntory-natural-water-regional-variations-reference.md`                                       | サントリー天然水の地域差に関する資料                                              | literature    | false | 2026-09-23に本文・YAML・ファイル名を整理                                                          |
| `32_Zk/taka-japanese-surnames-and-creation.md`                                             | 「たか」ではじまる日本の苗字と創作                                             | ai-generated | false | ファイル名・title（仮）                                                          |
| `32_Zk/things-i-want-to-try.md`                                                            | 使ってみたいアイテム                                                    | fleeting     | false | ファイル名・title（仮）                                                          |
| `32_Zk/transparency.md`                                                                    | 透過性                                                           | permanent    | true  | ファイル名・title（仮）                                                          |
| `32_Zk/useful-utilities-improve-ux.md`                                                     | 優れたユーティリティーの提供はUXを向上させる                                       | permanent    | false | ファイル名・title（仮）                                                          |
| `32_Zk/wakayama-city-library-source.md`                                                           | 和歌山市民図書館                                                      | literature   | false | ファイル名・title（仮）                                                          |
| `31_Research/気になった言葉.md`                                                                   | 気になった言葉                                                       | fleeting     | false | Cluster 11-Eの監査によりCluster 15へ主クラスタ変更                                    |
| **出自：`30_Inbox/クラスタ15に追加`（104件）**                                                          | —                                                             | —            | —     | Fukkamaruの明示指示による追加。旧コピー11件と既存`.退避`16件は対象外                              |
| 30_Inbox/クラスタ15に追加/ai-obsidian-zettelkasten-operations-design.md                  | AIがObsidian / Zettelkasten / Quartzを操作するための運用コンテキスト設計         | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/AIサービス × 外部ツール連携・AIエージェント構築事例 Deep Research.md                          | AIサービス × 外部ツール連携・AIエージェント構築事例 Deep Research                   | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/AIサービス・モデル別「ファイル部分読み込み」とトークン消費の比較調査.md                                  | AIサービス・モデル別「ファイル部分読み込み」とトークン消費の比較調査                           | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/AIサブスク比較と複数AI運用の検討.md                                                   | AIサブスク比較と複数AI運用の検討                                            | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/ai-chat-terminology-consistency.md                                             | AIとのチャットで用語を統一すると誤解を減らせる                                      | ai-generated | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/AIローカルファイル操作は「モデル性能」より料金体系・Agent Harness・Quota設計で選ぶ.md                  | AIローカルファイル操作は「モデル性能」より料金体系・Agent Harness・Quota設計で選ぶ           | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/ai-zettelkasten-root-boundaries.md                                    | AI管理領域とZettelkasten領域のフォルダ境界を明示する                             | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/ai-policy-workflow-handoff-separation.md                                 | AI作業の再現性を高めるにはポリシー・ワークフロー・ハンドオフを分離する                          | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/digital-garden-publication-access-design.md                     | AI時代の個人サイト／Digital Gardenにおいて、何を公開し、何を限定公開にするべきか              | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/ai-curated-notes-publication-policy.md                                     | AI整理済みObsidianノートを公開可能な知識へ昇華する方針                              | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/AI有料プランの割引・キャンペーン比較 ― Claude Pro・Google AI Pro・Perplexity Pro.md        | AI有料プランの割引・キャンペーン比較 ― Claude Pro・Google AI Pro・Perplexity Pro | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/btob-leaflet-company-information-layout.md                                                  | BtoB製品リーフレットの会社情報配置                                           | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/ChatGPT Workでファイルアクセス拒否が繰り返される原因と切り分け.md                                | ChatGPT Workでファイルアクセス拒否が繰り返される原因と切り分け                         | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/ChatGPT WorkとCodexは料金体系・クレジット・使用量上限を共有する.md                             | ChatGPT WorkとCodexは料金体系・クレジット・使用量上限を共有する                      | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/ChatGPT WorkのFastモードとは何か.md                                             | ChatGPT WorkのFastモードとは何か                                      | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/ChatGPT Workの利用制限・完全リセット・長時間運用.md                                       | ChatGPT Workの利用制限・完全リセット・長時間運用                                | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/ChatGPTの特定スレッドを1ファイルとして保存する方法.md                                        | ChatGPTの特定スレッドを1ファイルとして保存する方法                                 | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/ChatGPT風のMermaid図をObsidian・Quartzで再現する方針.md                             | ChatGPT風のMermaid図をObsidian・Quartzで再現する方針                      | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/epic-ea-free-game-history.md                                            | Epic Games Store・EAのPCゲーム無料配布履歴                               | literature   | true  | 2026-09-22に15-07でYAML・英名・リンクを整理                                         |
| 30_Inbox/クラスタ15に追加/famipay-deferred-payment-balance-and-due-dates.md                                          | FamiPay翌月払いの残高・締め日・支払日の確認（2026年9月）                        | literature   | true  | Cluster 15-10で時点を明示して改名                                                    |
| 30_Inbox/クラスタ15に追加/Google AI Creditsの日本購入制限と法規制.md                                         | Google AI Creditsの日本購入制限と法規制                                  | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/Google AI ProとPerplexity Proのローカルファイル操作.md                              | Google AI ProとPerplexity Proのローカルファイル操作                       | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/Google Antigravity無料版はローカルファイル操作にどこまで使えるか.md                            | Google Antigravity無料版はローカルファイル操作にどこまで使えるか                     | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/KimiのClaude利用問題とAIモデル蒸留の境界.md                                           | KimiのClaude利用問題とAIモデル蒸留の境界                                    | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/kindle-ndc-classification-and-collection-workflow.md                                  | Kindle蔵書のNDC分類とCollection反映を分離する                     | literature   | true  | Cluster 15-10で本文再構成・改名                                                      |
| 30_Inbox/クラスタ15に追加/office-dissatisfaction-work-design-and-career-change.md                                       | Officeへの不満と転職：業務設計・組織文化・職務適合                                | literature            | true  | 2026-09-23に本文・YAML・ファイル名を整理                                   |
| 30_Inbox/クラスタ15に追加/obsidian-shortest-path-relative-paths.md                                  | Obsidianにおける「最短経路パス」と「相対パス」の比較・判断整理                           | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/research-zettelkasten-cluster-refactoring.md                                       | ObsidianのResearchフォルダをクラスタ分けする                                | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/winmail-dat-attachment-handling.md                          | Outlookのwinmail.dat問題は添付ファイルの有無を判別できないことがある                   | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/Perplexity Proを調査専用AIとして使い倒す運用設計.md                                     | Perplexity Proを調査専用AIとして使い倒す運用設計                              | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/Perplexity Research Backlogの設計と運用.md                                    | Perplexity Research Backlogの設計と運用                             | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/Perplexityは2026年時点で検索・調査の専門AIとして評価する.md                                 | Perplexityは2026年時点で検索・調査の専門AIとして評価する                          | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/quartz-mobile-table-mermaid-layout.md                      | Quartz公開Digital Gardenのスマホ縦表示で表・Mermaidを読みやすくする               | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/simcity-series-history-mods-play-environment.md                         | SimCityシリーズの系譜・評価・MOD文化・現行プレイ環境                               | literature   | true  | 2026-09-22に15-07でYAML・英名を整理                                             |
| 30_Inbox/クラスタ15に追加/switch-2-obs-capture-monitor-setup.md                                   | Switch 2・OBS・キャプチャーボード・複数モニター構成メモ                             | fleeting     | true  | 2026-09-22に15-07でYAML・英名を整理                                             |
| 30_Inbox/クラスタ15に追加/WAIS-IV・AQ・CAARSから見る認知特性と発達特性.md                                        | WAIS-IV・AQ・CAARSから見る認知特性と発達特性                                 | fleeting     | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/WAIS-IV・AQ・CAARSのフィードバック整理と精神科再診で確認したいこと.md                             | WAIS-IV・AQ・CAARSのフィードバック整理と精神科再診で確認したいこと                      | fleeting     | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/windows-disk-event-id-7-profile-recurrence.md                            | WindowsのDiskイベントID 7とユーザープロファイル変更後の再発について                     | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/Windows版ChatGPT Work Localのローカルファイル編集不具合と切り分け.md                        | Windows版ChatGPT Work Localのローカルファイル編集不具合と切り分け                 | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/word-compare-shape-text-display.md                                   | Wordの比較機能使用中は図形内テキストの画面表示が崩れることがある                            | ai-generated | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/Workのモデル・推論レベルとZettelkasten整理作業の使い分け.md                                 | Workのモデル・推論レベルとZettelkasten整理作業の使い分け                          | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/zettelkasten-refactoring-work-records.md                                         | Zettelkastenリファクタリングの作業管理記録を置く場所                                  | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/zettelkasten-refactoring-operations-guide.md                                         | Zettelkastenリファクタリング運用ルールの整理                                  | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/atelier-dx-sale-price-estimates.md                                      | アトリエDXセットのセール価格予想                                             | literature   | true  | 2026-09-22に15-07でYAML・英名を整理                                             |
| 30_Inbox/クラスタ15に追加/performance-issues-dismissal-and-job-fit.md                                         | ミス・能力不足による雇用終了：反復・改善・職務適合の見方                                  | literature            | true  | 2026-09-23に本文・YAML・ファイル名を整理                                   |
| 30_Inbox/クラスタ15に追加/evaluate-wages-against-minimum-wage.md                                      | 時給の相対的な待遇を最低賃金との差額と差率で評価する                               | permanent            | true  | 2026-09-23に本文・YAML・ファイル名を整理                                   |
| 30_Inbox/クラスタ15に追加/イプロス広告における金属パテ訴求は用途訴求と差別化訴求を分ける.md                                      | イプロス広告における金属パテ訴求は用途訴求と差別化訴求を分ける                               | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/installation-and-laboratory.md                                                     | インスタレーションとラボラトリー                                              | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/rakuten-building-materials-background-prompt.md                                                            | コピペ用プロンプト                                                     | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/tsukimi-burger-price-and-pfc-comparison-2026.md                         | 月見バーガーの価格・PFC比較（ゼッテリア／マクドナルド、2026年9月）                                  | literature   | true  | Cluster 15-10で英語ファイル名へ改名                                                   |
| 30_Inbox/クラスタ15に追加/daily-web-topics-monitoring.md                                   | ネット話題・まとめサイト日次巡回の調査設計と2026年9月5日の結果                            | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/famipay-deferred-payment-posa-campaign-2026.md                             | FamiPay翌月払い新規登録キャンペーンとPOSAカード利用（2026年9月）                                    | literature   | true  | Cluster 15-10で英語ファイル名へ改名                                                   |
| 30_Inbox/クラスタ15に追加/vermeer-exhibition-viewing-notes.md                                                         | フェルメール展 鑑賞メモ                                                  | fleeting     | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/printpac-gray-tone-shift.md                                                | プリントパック入稿時にグレーが濃くなる問題                                         | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/universal-hotel-booking-comparison.md                                  | ユニバーサルホテルの低価格戦略と東横INN・Booking.com比較                           | ai-generated | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/rune-factory-platform-purchase-guide.md                                 | ルーンファクトリー：SteamとSwitch 2の購入判断ガイド                              | literature   | true  | 2026-09-22に15-07でYAML・英名を整理                                             |
| 30_Inbox/クラスタ15に追加/ローカルLLM兼用PCの選定基準.md                                                     | ローカルLLM兼用PCの選定基準                                              | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/ローカルLLM用PCはVRAM容量を軸に選ぶ.md                                               | ローカルLLM用PCはVRAM容量を軸に選ぶ                                        | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/kawanabe-kyosai-2026-viewing-guide-brief.md                                                | 河鍋暁斎の世界 2026｜鑑賞ガイド簡易版                                         | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/kawanabe-kyosai-2026-viewing-guide-detailed.md                                                | 河鍋暁斎の世界 2026｜鑑賞ガイド詳細版                                         | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/rakuten-basic-products-and-special-substrates.md                                        | 楽天市場では基本商品を絞り、特殊下地は問い合わせ対応にする                                 | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/rakuten-mobile-small-banner-design.md                                       | 楽天市場のスマホ向け小バナー設計とグランドオープン告知の違い                                | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/rakuten-product-management-number-naming.md                                            | 楽天市場の商品管理番号は正式英名と分離して設計する                                     | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/rakuten-store-large-banner-role-design.md                                           | 楽天市場の大バナーは役割別に訴求を分けて設計する                                      | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/楽天市場の大バナーは役割別に訴求を分けて設計する.md                                             | 楽天市場の大バナーは役割別に訴求を分けて設計する                                      | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/famipay-limited-points-posa-card-checks-2026.md                                          | 期間限定ファミマポイントでPOSAカードを購入する際の確認（2026年9月）                            | literature   | true  | Cluster 15-10で時点を明示して改名                                                     |
| 30_Inbox/クラスタ15に追加/kyushu-support-discount-trip-options.md                                              | 九州ふっこう応援割を使った初九州旅行の候補整理                                       | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/persistent-image-sharing-location.md                                          | 継続的な画像共有ではファイル転送より共有場所を固定する                                   | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/現在使用している薬.md                                                            | 現在使用している薬                                                     | fleeting     | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/deleted-note-dead-link-policy.md                                                 | 削除済みノートへのDead Link運用                                          | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/akiko-sasamoto-viewing-framework.md                                                   | 笹本晃作品の見方―物・力・身体・行為                                            | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/work-orders-paid-leave-and-holiday-work.md                                               | 出勤命令・有給休暇・休日労働の判断順序                                        | literature            | true  | 2026-09-23に本文・YAML・ファイル名を整理                                   |
| 30_Inbox/クラスタ15に追加/first-hotel-stay-checklist.md                                                          | 初めてのホテル宿泊メモ                                                   | ai-generated | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| ~~30_Inbox/クラスタ15に追加/振り分け中/「ぷよぷよ」と「テトリス」のコラボ作品.改名前-2026-09-17.md~~                         | 「ぷよぷよ」と「テトリス」のコラボ作品                                           | —            | false | 2026-09-22に本文完全一致の現行ガイドを存続し、旧コピーを`.退避`へ変更。本文監査対象外                       |
| 30_Inbox/クラスタ15に追加/振り分け中/atelier-arland-trilogy-purchase-guide.md                          | アトリエ アーランド三部作：購入・プラットフォームガイド                                  | literature   | true  | 2026-09-22に15-07でYAMLを整理                                                |
| 30_Inbox/クラスタ15に追加/振り分け中/atelier-dusk-trilogy-purchase-guide.md                            | アトリエ 黄昏三部作：購入・プラットフォームガイド                                     | literature   | true  | 2026-09-22に15-07でYAMLを整理                                                |
| 30_Inbox/クラスタ15に追加/振り分け中/atelier-mysterious-trilogy-purchase-guide.md                      | アトリエ 不思議三部作：購入・プラットフォームガイド                                    | literature   | true  | 2026-09-22に15-07でYAMLを整理                                                |
| 30_Inbox/クラスタ15に追加/振り分け中/completed-cluster-publication-record.md                           | 完了済みクラスタの公開化一覧                                                | fleeting     | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/振り分け中/danganronpa-series-purchase-guide.md                              | ダンガンロンパ：シリーズ・購入ガイド                                            | literature   | false | 2026-09-22に15-07でYAMLを整理                                                |
| 30_Inbox/クラスタ15に追加/振り分け中/dragon-quest-builders-1-2-purchase-platform-guide.md              | ドラゴンクエストビルダーズ1・2：購入・プラットフォームガイド                               | literature   | false | 2026-09-22に15-07でYAMLを整理                                                |
| 30_Inbox/クラスタ15に追加/振り分け中/game-subscription-cloud-gaming-guide.md                           | ゲームサブスクとクラウドゲーミング：選び方ガイド                                      | literature   | false | 2026-09-22に15-07でYAMLを整理                                                |
| 30_Inbox/クラスタ15に追加/振り分け中/geforce-now-membership-sale-guide.md                              | GeForce NOW：セール・加入タイミングガイド                                    | literature   | false | 2026-09-22に15-07でYAMLを整理                                                |
| 30_Inbox/クラスタ15に追加/振り分け中/geforce-now-storefront-guide.md                                   | GeForce NOW：連携ストア・ライブラリ運用ガイド                                  | literature   | false | 2026-09-22に15-07でYAMLを整理                                                |
| ~~30_Inbox/クラスタ15に追加/振り分け中/GeForece Nowセールまとめ.改名前-2026-09-17.md~~                          | GeForece Nowセールまとめ                                            | —            | false | 2026-09-22に本文完全一致の現行ガイドを存続し、旧コピーを`.退避`へ変更。本文監査対象外                       |
| ~~30_Inbox/クラスタ15に追加/振り分け中/GeForece NOWについてのまとめ.改名前-2026-09-17.md~~                        | GeForece NOWについてのまとめ                                          | —            | false | 2026-09-22に本文完全一致の現行ガイドを存続し、旧コピーを`.退避`へ変更。本文監査対象外                       |
| 30_Inbox/クラスタ15に追加/振り分け中/game-purchase-guides-index.md                                     | ゲーム購入ガイド一覧                                                    | index        | false | 2026-09-22に15-07でMarkdown相対リンクの索引へ整理                                    |
| 30_Inbox/クラスタ15に追加/振り分け中/label-paper-printing-preset-investigation.md                      | ラベル紙印刷プリセットの確認                                                | fleeting     | false | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/振り分け中/monster-hunter-series-rise-sunbreak-purchase-guide.md             | モンスターハンター：シリーズ評価とRise＋Sunbreak購入ガイド                           | literature   | false | 2026-09-22に15-07でYAMLを整理                                                |
| 30_Inbox/クラスタ15に追加/振り分け中/nintendo-prepaid-switch-online-campaign-guide.md                  | ニンテンドープリペイドとSwitch Online：キャンペーン活用ガイド                         | literature   | false | 2026-09-22に15-07でYAMLを整理                                                |
| 30_Inbox/クラスタ15に追加/振り分け中/osaka-kyushu-budget-travel-guide.md                               | 大阪・難波から九州：交通費・宿泊割引を踏まえた旅行判断                                   | —            | false | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/振り分け中/post-rain-insect-emergence-and-eclosion.md                        | 雨後に虫が大量に見える原因と羽化の仕組み                                           | literature            | false | 2026-09-23に本文・YAMLを整理                                   |
| 30_Inbox/クラスタ15に追加/振り分け中/puyo-puyo-tetris-series-purchase-guide.md                         | ぷよぷよテトリス：シリーズ・購入ガイド                                           | literature   | false | 2026-09-22に15-07でYAMLを整理                                                |
| 30_Inbox/クラスタ15に追加/振り分け中/suikoden-series-hd-remaster-purchase-guide.md                     | 幻想水滸伝：シリーズ・HDリマスター購入ガイド                                       | literature   | false | 2026-09-22に15-07でYAMLを整理                                                |
| 30_Inbox/クラスタ15に追加/振り分け中/tales-series-price-purchase-guide.md                              | テイルズ オブ シリーズ：価格・購入ガイド                                         | literature   | false | 2026-09-22に15-07でYAMLを整理                                                |
| ~~30_Inbox/クラスタ15に追加/振り分け中/アトリエ アーランドシリーズまとめ.改名前-2026-09-17.md~~                           | アトリエ アーランドシリーズまとめ                                             | —            | true  | 2026-09-22に本文完全一致の現行ガイドを存続し、旧コピーを`.退避`へ変更。本文監査対象外                       |
| ~~30_Inbox/クラスタ15に追加/振り分け中/アトリエ トリロジーシリーズまとめ.改名前-2026-09-17.md~~                           | アトリエ トリロジーシリーズまとめ                                             | —            | true  | 2026-09-22に本文完全一致の現行ガイドを存続し、旧コピーを`.退避`へ変更。本文監査対象外                       |
| ~~30_Inbox/クラスタ15に追加/振り分け中/アトリエ 黄昏シリーズまとめ.改名前-2026-09-17.md~~                              | アトリエ 黄昏シリーズまとめ                                                | —            | true  | 2026-09-22に本文完全一致の現行ガイドを存続し、旧コピーを`.退避`へ変更。本文監査対象外                       |
| ~~30_Inbox/クラスタ15に追加/振り分け中/ゲームパスまとめ.改名前-2026-09-17.md~~                                    | ゲームパスまとめ                                                      | —            | false | 2026-09-22に本文完全一致の現行ガイドを存続し、旧コピーを`.退避`へ変更。本文監査対象外                       |
| ~~30_Inbox/クラスタ15に追加/振り分け中/ダンガンロンパシリーズをまとめ.改名前-2026-09-17.md~~                             | ダンガンロンパシリーズをまとめ                                               | —            | false | 2026-09-22に本文完全一致の現行ガイドを存続し、旧コピーを`.退避`へ変更。本文監査対象外                       |
| ~~30_Inbox/クラスタ15に追加/振り分け中/テイルズシリーズまとめ.改名前-2026-09-17.md~~                                 | テイルズシリーズまとめ                                                   | —            | false | 2026-09-22に本文完全一致の現行ガイドを存続し、旧コピーを`.退避`へ変更。本文監査対象外                       |
| ~~30_Inbox/クラスタ15に追加/振り分け中/ドラゴンクエストビルダーズ1および2まとめ.改名前-2026-09-17.md~~                       | ドラゴンクエストビルダーズ1および2まとめ                                         | —            | false | 2026-09-22に本文完全一致の現行ガイドを存続し、旧コピーを`.退避`へ変更。本文監査対象外                       |
| ~~30_Inbox/クラスタ15に追加/振り分け中/幻想水滸伝シリーズまとめ.改名前-2026-09-17.md~~                                | 幻想水滸伝シリーズまとめ                                                  | —            | false | 2026-09-22に本文完全一致の現行ガイドを存続し、旧コピーを`.退避`へ変更。本文監査対象外                       |
| 30_Inbox/クラスタ15に追加/kobe-himeji-osaka-two-day-trip.md                                              | 神戸・姫路・大阪 美術館と姫路城を巡った2日間                                       | fleeting     | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/ikoma-station-library-device-rules.md                                           | 生駒駅前図書室におけるスマホ・PC利用制限とその背景                                    | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/product-file-organization.md                                | 製品関連ファイルは `marketing/products` に集約する                          | —            | true  | titleとファイル名を本文に整合（2026-09-26）                                   |
| 30_Inbox/クラスタ15に追加/video-archive-raw-clean-master-deliverable.md                                    | 動画アーカイブではRAW・クリーンマスター・完成版を分けて保存する                             | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/video-publishing-time-by-audience.md                                        | 動画公開時間はBtoB・BtoCと閲覧時間帯で分けて考える                                 | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/日常的なストレス・不安への対策と仕事の確認漏れ.md                                              | 日常的なストレス・不安への対策と仕事の確認漏れ                                       | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/himeji-almond-toast-history.md                                 | 姫路のアーモンドトーストは1980年代に広まり2010年前後に名物化した                          | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/himeji-castle-coupon-redemption.md                                          | 姫路城下まち1000円クーポンの引換場所と現地での確認                                   | ai-generated | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/multi-ai-zettelkasten-work-allocation.md                                  | 複数AIでObsidianのZettelkasten整理を分担する運用                           | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/pc-game-library.md                                                      | PCゲームライブラリ（Steam / Epic Games Store）                          | index        | true  | 2026-09-22に15-07で所持タイトルの索引へ整理                                           |
| 30_Inbox/クラスタ15に追加/利用状況はCodexとWorkのこと.md                                                   | 利用状況はCodexとWorkのこと                                            | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
| 30_Inbox/クラスタ15に追加/travel-museum-backpack-capacity.md                                | 旅行・美術館巡り用リュックの容量検討――30Lから40〜45Lへの買い替え                         | —            | true  | Fukkamaruの明示指示により、Cluster 15へ追加。本文監査前                                   |
