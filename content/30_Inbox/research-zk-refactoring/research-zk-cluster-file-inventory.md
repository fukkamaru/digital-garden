---
title: Research＋ZK仮クラスタ・ファイル台帳
aliases:
  - Research＋ZK仮クラスタ・ファイル台帳
type: fleeting
created: 2026-09-08T21:03:56+09:00
updated: 2026-09-09T01:26:13+09:00
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

- 対象：`31_Research` 364件、`32_Zk` 175件、合計 539件
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
| 05 | 購入判断・家電・デジタル機器 | 33 | 既存ロードマップの仮クラスタ |
| 06 | 建材・補修材・材料化学 | 41 | 既存ロードマップの仮クラスタ |
| 07 | Excel・Power Query・VBA・データ分析 | 23 | 既存ロードマップの仮クラスタ |
| 08 | EC・商品管理・マーケティング | 14 | 既存ロードマップの仮クラスタ |
| 09 | 業務文書・製品情報・社内運用 | 24 | 既存ロードマップの仮クラスタ |
| 10 | 生成AIサービス・AI活用 | 19 | 既存ロードマップの仮クラスタ |
| 11 | 読書・学習・言語・文章表現 | 32 | 既存ロードマップの仮クラスタ |
| 12 | 健康・運動・食事・生活管理 | 12 | 既存ロードマップの仮クラスタ |
| 13 | Windows・ストレージ・PC障害 | 33 | 既存ロードマップの仮クラスタ |
| 14 | Git・GitHub・Cloudflare・Web公開基盤 | 20 | 既存ロードマップの仮クラスタ |
| 15 | 個人プロジェクト・娯楽・残余監査 | 151 | 未分類を残して後続監査する受け皿 |

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

件数：25件。主クラスタの仮配置。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/Affinity（Canva版）についての整理まとめ.md` | Affinity（Canva版）についての整理まとめ | — | true | ファイル名・title（仮） |
| `31_Research/checker-plate-anti-slip-thumbnail-html-adjustments.md` | 縞鋼板向け防滑材サムネイル HTML調整まとめ | literature | true | ファイル名・title（仮） |
| `31_Research/figma-design-workflow-overview.md` | Figmaを使ったデザインワークフローの整理 | permanent | false | ファイル名・title（仮） |
| `31_Research/figma-plan-comparison.md` | Figmaの各種プランの比較 | literature | false | ファイル名・title（仮） |
| `31_Research/figma-starter-commercial-business-use.md` | Figma Starterプランの商用・企業利用について | literature | false | ファイル名・title（仮） |
| `31_Research/HTMLからサムネイルを作ってもらうプロンプト.md` | HTMLからサムネイルを作ってもらうプロンプト | fleeting | false | ファイル名・title（仮） |
| `31_Research/planning-thumbnail-workflow-structure.md` | サムネイル作成の作業フローを考える（構造リスト形式） | literature | false | ファイル名・title（仮） |
| `31_Research/planning-thumbnail-workflow-table.md` | サムネイル作成の作業フローについて考える（表形式） | literature | false | ファイル名・title（仮） |
| `31_Research/preparing-youtube-thumbnail-creative-brief.md` | YouTubeサムネイル用HTML設計書のための制作ブリーフ事前整理 | literature | false | ファイル名・title（仮） |
| `31_Research/svg-canva-thumbnail-file-summary.md` | SVG・Canva・今回のサムネイルファイルについての整理 | literature | false | ファイル名・title（仮） |
| `31_Research/thumbnail-creation-practice-part-2.md` | サムネイルの作成練習 その2 | fleeting | false | ファイル名・title（仮） |
| `31_Research/thumbnail-creation-practice-part-3.md` | サムネイル作成練習 その3 | fleeting | false | ファイル名・title（仮） |
| `31_Research/thumbnail-production-workflow-improvement-summary.md` | サムネイル制作フロー改善の検討まとめ | literature | false | ファイル名・title（仮） |
| `31_Research/thumbnail-production-workflow.md` | サムネイル制作ワークフロー整理 | literature | false | ファイル名・title（仮） |
| `31_Research/youtube-thumbnail-ai-html-spec-workflow-summary.md` | YouTubeサムネイル用「画像生成AI向けHTML設計書」制作フローまとめ | fleeting | false | ファイル名・title（仮） |
| `31_Research/Youtubeサムネイルサイズのベストプラクティス.md` | Youtubeサムネイルサイズのベストプラクティス | permanent | false | ファイル名・title（仮） |
| `31_Research/YouTubeサムネイル制作まとめ.md` | YouTubeサムネイル制作まとめ | literature | false | ファイル名・title（仮） |
| `31_Research/イラスト外注における気をつけること.md` | イラスト外注における気をつけること | ai-generated | true | ファイル名・title（仮） |
| `31_Research/サムネイル作成のプロンプト.md` | サムネイル作成のプロンプト | fleeting | false | ファイル名・title（仮） |
| `31_Research/サムネイル製作はHTML設計書からデザインフレームに素材を差し込むのが良い.md` | サムネイル製作はHTML設計書からデザインフレームに素材を差し込むのが良い | permanent | false | ファイル名・title（仮） |
| `31_Research/縞鋼板向け防滑材サムネイル HTML設計まとめ.md` | 縞鋼板向け防滑材サムネイル HTML設計まとめ | literature | false | ファイル名・title（仮） |
| `32_Zk/image-prompt-compression-comparison.md` | 画像生成プロンプトの圧縮・短縮比較 | permanent | false | ファイル名・title（仮） |
| `32_Zk/ipros-thumbnail-creation-workflow.md` | IPROSに掲載するサムネイルの作成手順 | permanent | false | ファイル名・title（仮） |
| `32_Zk/planning-canva-folder-structure.md` | Canvaのフォルダ構成を考える | permanent | false | ファイル名・title（仮） |
| `32_Zk/youtube-thumbnail-guide-settings.md` | Youtubeサムネイル作成時のガイド設定 | permanent | false | ファイル名・title（仮） |

## Cluster 05：購入判断・家電・デジタル機器

件数：33件。主クラスタの仮配置。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/43インチ大型ディスプレイ・チューナーレステレビ比較検討まとめ.md` | 43インチ大型ディスプレイ・チューナーレステレビ比較検討まとめ | ai-generated | true | ファイル名・title（仮） |
| `31_Research/50インチ・4Kディスプレイでの作業環境とFancyZones配置設計まとめ.md` | 50インチ・4Kディスプレイでの作業環境とFancyZones配置設計まとめ | literature | false | ファイル名・title（仮） |
| `31_Research/50型4kモニターを買ったのでテストする.md` | 50型4kモニターを買ったのでテストする | ai-generated | true | ファイル名・title（仮） |
| `31_Research/audio-devices-hearing-damage-comparison.md` | イヤホンとヘッドホンでの聴力への影響を調べる | literature | true | ファイル名・title（仮） |
| `31_Research/disk-health-monitoring-software.md` | ハードディスクやSSDの健康状態を見る定番ソフト | — | true | ファイル名・title（仮） |
| `31_Research/JAPANNEXT 50インチモニターのディスプレイ固定金具取り付けまとめ.md` | JAPANNEXT 50インチモニターのディスプレイ固定金具取り付けまとめ | ai-generated | true | ファイル名・title（仮） |
| `31_Research/Koolertron片手キーボードのおすすめ設定.md` | Koolertron片手キーボードのおすすめ設定 | fleeting | true | ファイル名・title（仮） |
| `31_Research/VESA金具とプラワッチャー.md` | VESA金具とプラワッチャー | — | true | ファイル名・title（仮） |
| `31_Research/スマートフォンからChatGPT Work／Codex／PCを遠隔利用する方法の整理.md` | スマートフォンからChatGPT Work／Codex／PCを遠隔利用する方法の整理 | literature | false | ファイル名・title（仮） |
| `31_Research/チューナーレステレビのデメリット.md` | チューナーレステレビのデメリット | ai-generated | true | ファイル名・title（仮） |
| `31_Research/ディスプレイの設定 その2.md` | ディスプレイの設定 その2 | fleeting | false | ファイル名・title（仮） |
| `31_Research/ディスプレイ接続端子の比較.md` | ディスプレイ接続端子の比較 | fleeting | true | ファイル名・title（仮） |
| `31_Research/でっかいディスプレイを購入する.md` | でっかいディスプレイを購入する | ai-generated | true | ファイル名・title（仮） |
| `31_Research/マクロキーボードの参考サイト.md` | マクロキーボードの参考サイト | fleeting | false | ファイル名・title（仮） |
| `31_Research/モニターサイズについて.md` | モニターサイズについて | ai-generated | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 14.md` | Switch版ゲームソフトの中古価格が高くなりやすい理由 | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 17.md` | switch2向けSDカードのメーカー違い | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 18.md` | Switch2のジョイコンカバーについて必要か調べる | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 19.md` | 家電量販店の保証に入る価値はあるのか？計算する | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 2 2.md` | USBメモリを用途別に分離する管理方針 | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 2.md` | 接続しているマイクが認識されていない問題の解決方法 | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 33.md` | switch2の保証について考える | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 35.md` | Switch2のフィルムについて | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 4.md` | 配信用のマイクについて見直す | — | true | ファイル名・title（仮） |
| `32_Zk/buy-stools-not-storage-boxes.md` | 部屋の整理整頓なら、収納ボックスよりスツールを購入するべき | fleeting | false | ファイル名・title（仮） |
| `32_Zk/buying-a-chair-seriously.md` | 椅子の購入を真剣に考える | permanent | false | ファイル名・title（仮） |
| `32_Zk/clippy-vs-caps-lock-which-is-more-hated.md` | マイクロソフトのイルカとキーボードのcaps lockはどちらの方が嫌われているのか？ | fleeting | false | ファイル名・title（仮） |
| `32_Zk/how-to-use-clear-files-effectively.md` | クリアファイルの使い分けを決める | permanent | false | ファイル名・title（仮） |
| `32_Zk/iphone-charge-sharing.md` | iphoneでおすそ分け充電 | literature | false | ファイル名・title（仮） |
| `32_Zk/my-clear-files.md` | クリアファイル一覧 | permanent | false | ファイル名・title（仮） |
| `32_Zk/stools-as-functional-decor.md` | スツールはインテリアとしても機能的 | literature | false | ファイル名・title（仮） |
| `32_Zk/suit-clothes-brush-buying-guide.md` | スーツ用「毛取り・洋服ブラシ」の選び方まとめ | — | false | ファイル名・title（仮） |
| `32_Zk/switch-2-4k-games.md` | Switch2で4K出力対応のゲームソフト一覧 | permanent | false | ファイル名・title（仮） |

## Cluster 06：建材・補修材・材料化学

件数：41件。主クラスタの仮配置。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/1液剤と2液剤のメリットとデメリット.md` | 1液剤と2液剤のメリットとデメリット | fleeting | true | ファイル名・title（仮） |
| `31_Research/AC（交流）とDC（直流）の違いまとめ.md` | AC（交流）とDC（直流）の違いまとめ | fleeting | true | ファイル名・title（仮） |
| `31_Research/building-industrial-material-product-categories.md` | 建築・工業用材料の製品カテゴリー分類 | literature | false | ファイル名・title（仮） |
| `31_Research/building-industrial-material-product-category-list.md` | 建築・工業用材料の製品カテゴリー 一覧表 | literature | false | ファイル名・title（仮） |
| `31_Research/building-industrial-material-product-list.md` | 建築・工業用材料の製品一覧表 | literature | false | ファイル名・title（仮） |
| `31_Research/hydrolysis.md` | 加水分解 | literature | false | ファイル名・title（仮） |
| `31_Research/UL94 V-0によるプラスチック材料の燃焼性評価.md` | UL94 V-0によるプラスチック材料の燃焼性評価 | fleeting | true | ファイル名・title（仮） |
| `31_Research/エポキシ樹脂の分類.md` | エポキシ樹脂の分類 | fleeting | true | ファイル名・title（仮） |
| `31_Research/カチオン系・アニオン系・ノニオン系の整理.md` | カチオン系・アニオン系・ノニオン系の整理 | ai-generated | true | ファイル名・title（仮） |
| `31_Research/ガラスバルーンについて.md` | ガラスバルーンについて | fleeting | true | ファイル名・title（仮） |
| `31_Research/コンクリート床の表面処理.md` | コンクリート床の表面処理 | fleeting | true | ファイル名・title（仮） |
| `31_Research/チクソ性とダイラタンシー現象についての理解と比較.md` | チクソ性とダイラタンシー現象についての理解と比較 | fleeting | true | ファイル名・title（仮） |
| `31_Research/パテ・シーリング材・関連建材製品を分類するためのカテゴリ体系.md` | パテ・シーリング材・関連建材製品を分類するためのカテゴリ体系 | fleeting | true | ファイル名・title（仮） |
| `31_Research/ベランダ・屋上・バルコニー向け防水材の容量設計に関する整理.md` | ベランダ・屋上・バルコニー向け防水材の容量設計に関する整理 | — | true | ファイル名・title（仮） |
| `31_Research/レンジのワット数と加熱時間の関係.md` | 電子レンジのワット数と加熱時間の換算 | permanent | false | ファイル名・title（仮） |
| `31_Research/屋根の名称と分類.md` | 屋根の名称と分類 | fleeting | true | ファイル名・title（仮） |
| `31_Research/化学業界における補修材や建材の立ち位置.md` | 化学業界における補修材や建材の立ち位置 | fleeting | true | ファイル名・title（仮） |
| `31_Research/建設業・設備業・防水工事業の高齢化と統計活用についての整理.md` | 建設業・設備業・防水工事業の高齢化と統計活用についての整理 | — | true | ファイル名・title（仮） |
| `31_Research/消化と加水分解の整理.md` | 消化と加水分解の整理 | fleeting | true | ファイル名・title（仮） |
| `31_Research/水性塗料の火気リスク.md` | 水性塗料の火気リスク | — | true | ファイル名・title（仮） |
| `31_Research/精神科に置けるSDSとTEG.md` | 精神科に置けるSDSとTEG | ai-generated | true | ファイル名・title（仮） |
| `31_Research/耐熱補修・ガラステープ・FRPに関する学習まとめ.md` | 耐熱補修・ガラステープ・FRPに関する学習まとめ | fleeting | true | ファイル名・title（仮） |
| `31_Research/大理石と御影石の違い.md` | 大理石と御影石の違い | fleeting | true | ファイル名・title（仮） |
| `31_Research/断熱・遮熱とエアロゲルについて.md` | 断熱・遮熱とエアロゲルについて | fleeting | true | ファイル名・title（仮） |
| `31_Research/断熱塗料と遮熱塗料の違い.md` | 断熱塗料と遮熱塗料の違い | — | true | ファイル名・title（仮） |
| `31_Research/補修・修理・修繕・改修などの言葉の使い分け.md` | 補修・修理・修繕・改修などの言葉の使い分け | literature | false | ファイル名・title（仮） |
| `31_Research/放熱量・年間削減電力量リーフレット検討内容まとめ.md` | 放熱量・年間削減電力量リーフレット検討内容まとめ | fleeting | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 1 1.md` | 床色に合わせて補修する理由 | fleeting | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 16.md` | 配管に空いた穴の名称と違い | fleeting | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 2 1.md` | 総パテ作業とは | fleeting | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 20.md` | 蒸気配管の穴を放置することの問題 | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 22.md` | 断熱塗料リーフレットにおける「算定条件注釈」と表記統一の検討まとめ | fleeting | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 23.md` | リーフレットに消防法・毒劇法の記載は必要か | fleeting | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 5 1.md` | 補修材リーフレットのデータ表記・注釈設計 | fleeting | true | ファイル名・title（仮） |
| `31_Research/枡についてのまとめ.md` | 排水ますの種類・役割・用語整理 | fleeting | false | ファイル名・title（仮） |
| `32_Zk/essential-lamination-for-factory-use.md` | 工場利用には欠かせないのラミネート加工 | permanent | false | ファイル名・title（仮） |
| `32_Zk/history-of-male-and-female-threads.md` | ネジのオス・メス表現の誕生と導入の流れ | literature | false | ファイル名・title（仮） |
| `32_Zk/mechanical-fit-and-mating.md` | 嵌合 | literature | false | ファイル名・title（仮） |
| `32_Zk/pu-leather-hydrolysis.md` | PUレザーと加水分解 | literature | false | ファイル名・title（仮） |
| `32_Zk/tds-and-sds-purposes.md` | ビジネス：TDSとSDSの違い | permanent | false | ファイル名・title（仮） |
| `32_Zk/thermal-paint-for-windows.md` | 塗料タイプの窓用断熱材 | literature | false | ファイル名・title（仮） |

## Cluster 07：Excel・Power Query・VBA・データ分析

件数：23件。主クラスタの仮配置。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/AppSheetを使ったトレーニング記録アプリ.md` | AppSheetを使ったトレーニング記録アプリ | fleeting | true | ファイル名・title（仮） |
| `31_Research/CSV学習データを使った対話学習・マインドマップ作成の整理.md` | CSV学習データを使った対話学習・マインドマップ作成の整理 | — | true | ファイル名・title（仮） |
| `31_Research/ECサイトとGA4を連携するメリット.md` | ECサイトとGA4を連携するメリット | fleeting | true | ファイル名・title（仮） |
| `31_Research/GA4とLooker Studioにおけるページとランディングページの違い、関連するディメンションの意味.md` | GA4とLooker Studioにおけるページとランディングページの違い、関連するディメンションの意味 | fleeting | true | ファイル名・title（仮） |
| `31_Research/GA4における総ユーザー、アクティブユーザー、新規ユーザーの違い.md` | GA4における総ユーザー、アクティブユーザー、新規ユーザーの違い | fleeting | true | ファイル名・title（仮） |
| `31_Research/GA4についての調べごと.md` | GA4についての調べごと | fleeting | true | ファイル名・title（仮） |
| `31_Research/GA4の「キーイベント関連メトリクス」の意味と、「セッション キーイベント率」の解釈方法.md` | GA4の「キーイベント関連メトリクス」の意味と、「セッション キーイベント率」の解釈方法 | — | true | ファイル名・title（仮） |
| `31_Research/GA4のfile_downloadが何をもって「ダウンロード」と判断するのか.md` | GA4のfile_downloadが何をもって「ダウンロード」と判断するのか | fleeting | true | ファイル名・title（仮） |
| `31_Research/Looker Studio「期間設定」のページ間同期についての整理.md` | Looker Studio「期間設定」のページ間同期についての整理 | fleeting | true | ファイル名・title（仮） |
| `31_Research/Power Query：List.Accumulateを使った置換マスタによる一括置換.md` | Power Query：List.Accumulateを使った置換マスタによる一括置換 | — | true | ファイル名・title（仮） |
| `31_Research/vbaでシートをコピーするときのフィルターとグループ化の挙動について.md` | vbaでシートをコピーするときのフィルターとグループ化の挙動について | — | true | ファイル名・title（仮） |
| `31_Research/VBAで個別のファイルをガッチャンコする その1.md` | VBAで個別のファイルをガッチャンコする その1 | — | true | ファイル名・title（仮） |
| `31_Research/VBAで個別のファイルをガッチャンコする その2.md` | VBAで個別のファイルをガッチャンコする その2 | — | true | ファイル名・title（仮） |
| `31_Research/VBAで個別ファイルをガッチャンコする その3.md` | VBAで個別ファイルをガッチャンコする その3 | — | true | ファイル名・title（仮） |
| `31_Research/VBAで個別ファイルをガッチャンコする その4.md` | VBAで個別ファイルをガッチャンコする その4 | — | true | ファイル名・title（仮） |
| `31_Research/エクセルに計算式を文字列として表示したい.md` | Excelで数式を文字列として表示する方法 | fleeting | false | ファイル名・title（仮） |
| `31_Research/スプレッドシートで組み合わせ.md` | スプレッドシートで組み合わせ | fleeting | true | ファイル名・title（仮） |
| `31_Research/データクレンジングのファイル構成と命名を考える.md` | データクレンジングのファイル構成と命名を考える | fleeting | true | ファイル名・title（仮） |
| `31_Research/パワークエリで文字列前後のスペースを削除して、連続するスペースを1つにする.md` | Power Queryで文字列の前後・連続スペースを整理する | — | false | ファイル名・title（仮） |
| `31_Research/売上分析表から除外する.md` | 売上分析表から除外する | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 25.md` | マージ用の「key_」プリフィクス | fleeting | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 3 1.md` | プルダウンによる分岐メニュー構築 | fleeting | true | ファイル名・title（仮） |
| `32_Zk/enable-macros-in-excel.md` | マクロ付きのExcelファイルを編集出来るようにする | permanent | false | ファイル名・title（仮） |

## Cluster 08：EC・商品管理・マーケティング

件数：14件。主クラスタの仮配置。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/Amazonの商品ページにおける「A+なし」「A+あり」「プレミアムA+あり」の違い.md` | Amazonの商品ページにおける「A+なし」「A+あり」「プレミアムA+あり」の違い | fleeting | true | ファイル名・title（仮） |
| `31_Research/R-Login と RMS の基本理解まとめ.md` | R-Login と RMS の基本理解まとめ | fleeting | true | ファイル名・title（仮） |
| `31_Research/R-Login／RMSの90日パスワード変更ルールと現代の認証方式について.md` | R-Login／RMSの90日パスワード変更ルールと現代の認証方式について | literature | false | ファイル名・title（仮） |
| `31_Research/チャネルにおけるFBAとFBAE.md` | チャネルにおけるFBAとFBAE | fleeting | true | ファイル名・title（仮） |
| `31_Research/マーケティングにおけるPRとアピールの違い.md` | マーケティングにおけるPRとアピールの違い | fleeting | true | ファイル名・title（仮） |
| `31_Research/楽天市場｜商品管理番号・SKU・バリエーション設計まとめ.md` | 楽天市場｜商品管理番号・SKU・バリエーション設計まとめ | literature | true | ファイル名・title（仮） |
| `31_Research/型番商品・JAN・ISBN・非型番商品の整理.md` | 型番商品・JAN・ISBN・非型番商品の整理 | fleeting | true | ファイル名・title（仮） |
| `31_Research/無題のファイル111111.md` | イプロス業界別専門サイト | literature | false | ファイル名・title（仮） |
| `32_Zk/accounting-terms.md` | 会計用語 | literature | false | ファイル名・title（仮） |
| `32_Zk/amazon-delivery-restrictions.md` | Amazonの配送制限 | permanent | false | ファイル名・title（仮） |
| `32_Zk/bussines-terms.md` | 勉強中：ビジネス用語まとめ | fleeting | false | ファイル名・title（仮） |
| `32_Zk/campaign-rakuten-employee-entry.md` | 楽天最強プランのご案内 | literature | false | ファイル名・title（仮） |
| `32_Zk/claim-free-campaign-offer.md` | 無料キャンペーンのオファーを受けとる | fleeting | false | ファイル名・title（仮） |
| `32_Zk/rakuten-product-image-file-size-management.md` | 楽天市場の商品画像の容量管理 | field | false | ファイル名・title（仮） |

## Cluster 09：業務文書・製品情報・社内運用

件数：24件。主クラスタの仮配置。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/「労働安全衛生法」とその改正とブルーカラーについて、ホワイトカラーについてまとめ.md` | 「労働安全衛生法」とその改正とブルーカラーについて、ホワイトカラーについてまとめ | fleeting | true | ファイル名・title（仮） |
| `31_Research/a4-label-manual-feed-lot-editing-workflow.md` | A4ラベルの手差し印刷・LOT編集運用まとめ | — | false | ファイル名・title（仮） |
| `31_Research/FABEについて.md` | FABEについて | — | true | ファイル名・title（仮） |
| `31_Research/FABの練習.md` | FAB法で製品説明を簡略化する練習 | fleeting | false | ファイル名・title（仮） |
| `31_Research/HACCP.md` | HACCP | fleeting | true | ファイル名・title（仮） |
| `31_Research/kyoto-patty-029-sample-business.md` | Kyoto Patty 029 — 架空サンプル事業の設定 | permanent | false | ファイル名・title（仮） |
| `31_Research/silver-week-announcement-wording.md` | シルバーウィークとお知らせ表現 | field | false | ファイル名・title（仮） |
| `31_Research/パソコン冷却技術の変遷（一般向け・マニア向け・業務用）.md` | パソコン冷却技術の変遷（一般向け・マニア向け・業務用） | fleeting | true | ファイル名・title（仮） |
| `31_Research/会社役員の肩書き・並び順についての整理.md` | 会社役員の肩書き・並び順についての整理 | fleeting | true | ファイル名・title（仮） |
| `31_Research/仕入表・仕入れコード設計の検討まとめ.md` | 仕入表・仕入れコード設計の検討まとめ | — | true | ファイル名・title（仮） |
| `31_Research/販促用リーフレットに記載するべき危険情報.md` | 販促用リーフレットに記載するべき危険情報 | fleeting | true | ファイル名・title（仮） |
| `31_Research/包装仕様と製品ラベル.md` | 包装仕様と製品ラベル | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 1 3.md` | ケースラベルの荷姿記載について | fleeting | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 21.md` | 製品容器ラベル変更のHP掲載用お知らせ文の検討 | fleeting | true | ファイル名・title（仮） |
| `32_Zk/aislesoft-inc.md` | 株式会社アイルソフト | literature | true | ファイル名・title（仮） |
| `32_Zk/announcement-update-format.md` | 「お知らせ」を修正するときのラベルと記述方法 | permanent | false | ファイル名・title（仮） |
| `32_Zk/announcements-vs-guidance.md` | 「ご案内」と「お知らせ」の違い | literature | false | ファイル名・title（仮） |
| `32_Zk/asking-ai-how-to-take-work-notes.md` | 業務中のメモの取り方をAIに尋ねた話 | permanent | false | ファイル名・title（仮） |
| `32_Zk/i-ll-inc.md` | 株式会社アイル | literature | true | ファイル名・title（仮） |
| `32_Zk/inventory-frequency.md` | 棚卸しの回数 | permanent | true | ファイル名・title（仮） |
| `32_Zk/phase-based-business-understanding.md` | 「聞き手の思考プロセス」と「作業フェーズ」に合わせた業務理解 | fleeting | false | ファイル名・title（仮） |
| `32_Zk/read-receipt-label.md` | 「受信確認」ラベルを設計 | permanent | false | ファイル名・title（仮） |
| `32_Zk/two-tips-for-printing-on-label-paper.md` | ラベル紙で印刷するときに気をつけたいこと2選 | permanent | false | ファイル名・title（仮） |
| `32_Zk/what-is-a-product-requirements-document.md` | PRD：製品要求仕様書とは？ | permanent | false | ファイル名・title（仮） |

## Cluster 10：生成AIサービス・AI活用

件数：20件。主クラスタの仮配置。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `32_Zk/zettelkasten-context-test.md` | ツェッテルカステン専用コンテキストの動作確認 | fleeting | true | Inbox整理時にAI Workの動作テストとしてCluster 10へ移管 |
| `31_Research/AIサービスにおける性的・センシティブコンテンツのガードレール整理.md` | AIサービスにおける性的・センシティブコンテンツのガードレール整理 | literature | false | ファイル名・title（仮） |
| `31_Research/AIによる嘘情報まとめ.md` | AIによる嘘情報まとめ | — | true | ファイル名・title（仮） |
| `31_Research/AIに設定するカスタム指示についての議論とまとめ.md` | AIに設定するカスタム指示についての議論とまとめ | ai-generated | true | ファイル名・title（仮） |
| `31_Research/aiの契約を考える.md` | 生成AIサービスの契約構成と費用を考える | ai-generated | true | ファイル名・title（仮） |
| `31_Research/AI時代のWeb閲覧・広告収益・個人サイト戦略についての整理.md` | AI時代のWeb閲覧・広告収益・個人サイト戦略についての整理 | literature | false | ファイル名・title（仮） |
| `31_Research/chatgpt-can-recognize-uploaded-filenames.md` | ChatGPTはアップロードされたファイル名を認識できる | literature | false | ファイル名・title（仮） |
| `31_Research/chatgpt-text-to-speech.md` | chatpgtの出力を音声にする | fleeting | true | ファイル名・title（仮） |
| `31_Research/ChatGPTで出来ること.md` | ChatGPTで出来ること | — | true | ファイル名・title（仮） |
| `31_Research/chatgptの有料課金をやめたらアカウントはどうなる？.md` | chatgptの有料課金をやめたらアカウントはどうなる？ | fleeting | true | ファイル名・title（仮） |
| `31_Research/chatgptを使った思い出し読書.md` | chatgptを使った思い出し読書 | — | true | ファイル名・title（仮） |
| `31_Research/X × ChatGPT連携による情報収集・知識整理の検討まとめ.md` | X × ChatGPT連携による情報収集・知識整理の検討まとめ | literature | false | ファイル名・title（仮） |
| `31_Research/フットペダルと音声入力の組み合わせてテスト.md` | フットペダルと音声入力の組み合わせてテスト | permanent | true | ファイル名・title（仮） |
| `31_Research/ローカルLLMについて調べる.md` | ローカルLLMについて調べる | — | true | ファイル名・title（仮） |
| `31_Research/ローカルLLMの概要と、長文要約・文字起こし済みテキスト処理に必要なPC性能まとめ.md` | 日本語名を入ローカルLLMの概要と、長文要約・文字起こし済みテキスト処理に必要なPC性能まとめ力 | literature | false | ファイル名・title（仮） |
| `31_Research/吾輩は、ChatGPTの週間利用制限すら使い切れない凡人である.md` | 吾輩は、ChatGPTの週間利用制限すら使い切れない凡人である | permanent | false | ファイル名・title（仮） |
| `31_Research/主要生成AIの年齢制限・ペアレンタルコントロールと、子どもへの使わせ方.md` | 主要生成AIの年齢制限・ペアレンタルコントロールと、子どもへの使わせ方 | literature | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 6 1.md` | ローカル上でWindowsマシンで、動画の音声を文字起こしするアプリ | — | true | ファイル名・title（仮） |
| `32_Zk/chatgpt-voice-input-output-shortcut-conflict.md` | ChatGTPの音声入力と「Voice Control for ChatGPT」によるショートカットの競合問題 | permanent | false | ファイル名・title（仮） |
| `32_Zk/create-training-plan-with-chatgpt.md` | トレーニングメニューをchatgptに作成してもらう | permanent | false | ファイル名・title（仮） |

## Cluster 11：読書・学習・言語・文章表現

件数：32件。主クラスタの仮配置。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/「優位性・低価格・簡便性・汎用性・独自性」を表す語彙・言い回し整理.md` | 「優位性・低価格・簡便性・汎用性・独自性」を表す語彙・言い回し整理 | literature | false | ファイル名・title（仮） |
| `31_Research/building-a-reading-folder-to-rebuild-the-habit.md` | 読書習慣を取り戻すための仕組みを作る | literature | false | ファイル名・title（仮） |
| `31_Research/NDCの分類名と記号の表現.md` | NDCの分類名と記号の表現 | fleeting | true | ファイル名・title（仮） |
| `31_Research/study-topics.md` | 学習したいテーマ一覧 | fleeting | false | ファイル名・title（仮） |
| `31_Research/コロケーション・コノテーション・コアイメージの整理.md` | コロケーション・コノテーション・コアイメージの整理 | fleeting | true | ファイル名・title（仮） |
| `31_Research/英単語1万語習得法を前提とした語彙学習方針まとめ.md` | 英単語1万語習得法を前提とした語彙学習方針まとめ | fleeting | true | ファイル名・title（仮） |
| `31_Research/英単語のコアイメージ.md` | 英単語のコアイメージ | — | false | ファイル名・title（仮） |
| `31_Research/音声チャットしながら読むのは効果的か.md` | 音声チャットしながら読むのは効果的か | fleeting | true | ファイル名・title（仮） |
| `31_Research/気になった言葉.md` | 気になった言葉 | fleeting | false | ファイル名・title（仮） |
| `31_Research/顧客の英単語.md` | 顧客の英単語 | fleeting | true | ファイル名・title（仮） |
| `31_Research/顧客英語の使い分け.md` | 顧客英語の使い分け | fleeting | true | ファイル名・title（仮） |
| `31_Research/施工範囲と用語のニュアンス.md` | 施工範囲と用語のニュアンス | fleeting | true | ファイル名・title（仮） |
| `31_Research/正規表現を持ちいた、特定単語の一括置換処理.md` | 正規表現を持ちいた、特定単語の一括置換処理 | fleeting | true | ファイル名・title（仮） |
| `31_Research/知識や疑問だけでなく、英単語や専門用語も組み込みたい.md` | 知識や疑問だけでなく、英単語や専門用語も組み込みたい | fleeting | true | ファイル名・title（仮） |
| `31_Research/同一ジャンルの本を読んだときの読書メモのまとめかた.md` | 同一ジャンルの本を読んだときの読書メモのまとめかた | fleeting | true | ファイル名・title（仮） |
| `31_Research/読書法見直しの整理.md` | 読書法見直しの整理 | fleeting | true | ファイル名・title（仮） |
| `31_Research/日本語の感覚.md` | 日本語の感覚 | fleeting | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 15.md` | 安全資料でよく使われる事故表現のニュアンス比較 | fleeting | true | ファイル名・title（仮） |
| `31_Research/要約とは「要点＝問い×答え×根拠」.md` | 要約の実践フレーム｜問い・答え・根拠 | fleeting | false | ファイル名・title（仮） |
| `32_Zk/7w4h-grouping.md` | 7W4Hのグループ分け | permanent | false | ファイル名・title（仮） |
| `32_Zk/7w4h-song-rabbit-tortoise.md` | ウサギとカメで覚える7W4Hの歌 | permanent | false | ファイル名・title（仮） |
| `32_Zk/after-all.md` | 副詞「結局」 | literature | false | ファイル名・title（仮） |
| `32_Zk/bullet-list-writing-rules.md` | 箇条書きの書き方ルール | permanent | false | ファイル名・title（仮） |
| `32_Zk/conjunctive-adverb-formula-cheatsheet.md` | 接続詞・副詞の “数学的” 早見表 | structure | false | ファイル名・title（仮） |
| `32_Zk/in-other-words.md` | 副詞「つまり」 | literature | false | ファイル名・title（仮） |
| `32_Zk/in-short.md` | 副詞「要するに」 | literature | false | ファイル名・title（仮） |
| `32_Zk/learn-math-notation-note-taking.md` | 数学記号を使ったメモ書きが出来るようになりたい | literature | false | ファイル名・title（仮） |
| `32_Zk/math-symbols.md` | 数学記号 | literature | false | ファイル名・title（仮） |
| `32_Zk/that-is.md` | 副詞「すなわち」 | literature | false | ファイル名・title（仮） |
| `32_Zk/therefore.md` | 接続詞「だから」 | literature | false | ファイル名・title（仮） |
| `32_Zk/which-means.md` | 名詞句＋助詞「ということは」 | literature | false | ファイル名・title（仮） |
| `32_Zk/words-of-the-self.md` | 「自分」の言葉の作り方 | literature | false | ファイル名・title（仮） |

## Cluster 12：健康・運動・食事・生活管理

件数：12件。主クラスタの仮配置。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/ハードディスクやSSDの健康状態を見るコマンド入力.md` | ハードディスクやSSDの健康状態を見るコマンド入力 | — | true | ファイル名・title（仮） |
| `31_Research/筋トレ記録の入力方法改善についての整理.md` | 筋トレ記録の入力方法改善についての整理 | fleeting | true | ファイル名・title（仮） |
| `31_Research/健康診断についてのまとめ.md` | 健康診断についてのまとめ | fleeting | true | ファイル名・title（仮） |
| `31_Research/洗面利用での衛生面と清掃負担.md` | 洗面利用での衛生面と清掃負担 | — | true | ファイル名・title（仮） |
| `31_Research/体調不良について.md` | 体調不良について | fleeting | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 39.md` | マイナ保険証の使い方 | — | true | ファイル名・title（仮） |
| `31_Research/夜食は悪ではなく時間管理が大切.md` | 夜食は善悪ではなく、時間・量・内容で考える | fleeting | false | ファイル名・title（仮） |
| `32_Zk/2026-fitness-strength-plan.md` | 2026年の目標：筋力トレーニング | permanent | false | ファイル名・title（仮） |
| `32_Zk/adaptogen-herbs-overview.md` | アダプトゲンハーブについての概要 | literature | false | ファイル名・title（仮） |
| `32_Zk/chocozap-workout-tracking-is-hard-to-use.md` | chocoZAPの運動記録が使いにくい | permanent | false | ファイル名・title（仮） |
| `32_Zk/difference-between-kampo-and-adaptogens.md` | 漢方とアダプトゲンハーブの違い | literature | false | ファイル名・title（仮） |
| `32_Zk/heart-rate-training-zones.md` | 心拍数トレーニングゾーン | permanent | false | ファイル名・title（仮） |

## Cluster 13：Windows・ストレージ・PC障害

件数：33件。主クラスタの仮配置。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/【簡易版】フェルメール展でたどる17世紀オランダ絵画 ― 12作品で学ぶジャンルと時代背景.md` | 【簡易版】フェルメール展でたどる17世紀オランダ絵画 ― 12作品で学ぶジャンルと時代背景 | literature | false | ファイル名・title（仮） |
| `31_Research/Gmailプラグインを使う.md` | Gmailプラグインを使う | — | true | ファイル名・title（仮） |
| `31_Research/PDFのサイズを圧縮できるソフトウェア、オンラインサービス.md` | PDFのサイズを圧縮できるソフトウェア、オンラインサービス | fleeting | true | ファイル名・title（仮） |
| `31_Research/PowerRename.md` | PowerRename | — | true | ファイル名・title（仮） |
| `31_Research/SMB共有フォルダへの入り方.md` | SMB共有フォルダへの入り方 | — | true | ファイル名・title（仮） |
| `31_Research/storage-error-event-id-7.md` | ストレージ関連エラー イベントID7 | — | true | ファイル名・title（仮） |
| `31_Research/vs codeのインストール場所.md` | vs codeのインストール場所 | fleeting | true | ファイル名・title（仮） |
| `31_Research/vs codeの制限モードについて.md` | vs codeの制限モードについて | fleeting | true | ファイル名・title（仮） |
| `31_Research/vscodeとTyporaでマークダウンエディタの違い.md` | vscodeとTyporaでマークダウンエディタの違い | fleeting | true | ファイル名・title（仮） |
| `31_Research/WeChatについてのまとめ.md` | WeChatについてのまとめ | fleeting | true | ファイル名・title（仮） |
| `31_Research/what-is-byod.md` | BYODについて | — | true | ファイル名・title（仮） |
| `31_Research/windows updateの失敗.md` | windows updateの失敗 | fleeting | true | ファイル名・title（仮） |
| `31_Research/Windowsユーザープロファイル障害・SSD不良ブロック調査まとめ.md` | Windowsユーザープロファイル障害・SSD不良ブロック調査まとめ | — | true | ファイル名・title（仮） |
| `31_Research/Yahoo! JAPANメールをAIで整理する方法についての検討まとめ.md` | Yahoo! JAPANメールをAIで整理する方法についての検討まとめ | — | true | ファイル名・title（仮） |
| `31_Research/Yahoo！JAPANメールとAI接続.md` | Yahoo！JAPANメールとAI接続 | fleeting | true | ファイル名・title（仮） |
| `31_Research/yt-dlpによる動画ダウンロード.md` | yt-dlpによる動画ダウンロード | fleeting | true | ファイル名・title（仮） |
| `31_Research/フェルメール展（2026・大阪中之島美術館）に関する検討内容まとめ.md` | フェルメール展2026｜鑑賞日時とチケット購入経緯 | literature | true | ファイル名・title（仮） |
| `31_Research/フェルメール展でたどる17世紀オランダ絵画 ― 12作品で学ぶジャンルと時代背景.md` | フェルメール展でたどる17世紀オランダ絵画 ― 12作品で学ぶジャンルと時代背景 | literature | false | ファイル名・title（仮） |
| `31_Research/ユーザープロファイルが読み目なくなる可能性.md` | ユーザープロファイルが読み目なくなる可能性 | — | true | ファイル名・title（仮） |
| `31_Research/ユーザープロファイルを復旧するか、諦めるかの判断基準.md` | ユーザープロファイルを復旧するか、諦めるかの判断基準 | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 1 2.md` | お礼メール | fleeting | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 13.md` | ssdがbiosに認識されなくなる問題について | field | true | ファイル名・title（仮） |
| `31_Research/問題把握3.md` | ユーザープロファイル障害の原因調査に要した時間の評価 | — | true | ファイル名・title（仮） |
| `31_Research/問題把握4.md` | ユーザープロファイル障害とストレージ障害の調査資料 | — | true | ファイル名・title（仮） |
| `32_Zk/android-gboard-dictionary-import.md` | android端末でGboard辞書を一括インポートする方法 | permanent | false | ファイル名・title（仮） |
| `32_Zk/caps-lock-remapping-with-keyboard-manager.md` | Keyboard Managerで「caps lock」と決別する | permanent | false | ファイル名・title（仮） |
| `32_Zk/encode-decode-example.md` | エンコード・デコードの一例 | permanent | false | ファイル名・title（仮） |
| `32_Zk/ios-gboard-dictionary-import.md` | ios端末でGboard辞書を一括インポートする方法 | literature | false | ファイル名・title（仮） |
| `32_Zk/smb-shared-folder-management.md` | SMB共有フォルダの管理方法について | permanent | true | ファイル名・title（仮） |
| `32_Zk/smb-shared-folder-setup.md` | SMB共有フォルダの設定方法 | permanent | false | ファイル名・title（仮） |
| `32_Zk/why-japanese-urls-get-encoded.md` | エンコードとデコード | — | false | ファイル名・title（仮） |
| `32_Zk/why-powertoys-is-not-preinstalled.md` | MicrosoftがWindowsにPower Toysをプリインストールしない理由 | permanent | false | ファイル名・title（仮） |
| `32_Zk/winmail-dat-how-to-open.md` | winmail.datの開き方 | permanent | false | ファイル名・title（仮） |

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

件数：152件。内容監査前の残余ノートを含む。

| パス（ファイル名） | title | type | draft | 判定根拠 |
|---|---|---|---|---|
| `31_Research/『ライオン・キング：ムファサ』感想.md` | 『ライオン・キング：ムファサ』感想 | fleeting | true | Cluster 03の完了時に、映画鑑賞記録として移管 |
| `31_Research/「刷新」や「一新」など変更に関する単語の比較.md` | 「刷新」や「一新」など変更に関する単語の比較 | fleeting | true | ファイル名・title（仮） |
| `31_Research/「年間削減電力量」 vs 「年間電力削減量」.md` | 「年間削減電力量」 vs 「年間電力削減量」 | fleeting | true | ファイル名・title（仮） |
| `31_Research/2分ルールの判断がつかない.md` | 2分ルールの判断がつかない | — | true | ファイル名・title（仮） |
| `31_Research/build-red-brick-warehouse.md` | 赤レンガ倉庫を作りたい | fleeting | true | ファイル名・title（仮） |
| `31_Research/docsフォルダの想定利用.md` | docsフォルダの役割と構成例 | fleeting | false | ファイル名・title（仮） |
| `31_Research/EXアプリの見方を覚える.md` | EXアプリの見方を覚える | — | true | ファイル名・title（仮） |
| `31_Research/floor-and-ceiling-material-design-awareness.md` | 床と天井の素材・模様の意識の仕方 | fleeting | true | ファイル名・title（仮） |
| `31_Research/google-maps-list-feature-guide.md` | 近畿2府5県の賃上げ・最低賃金・物価上昇の整理 | literature | false | ファイル名・title（仮） |
| `31_Research/Googleスライドの「セクション管理」と特定スライドの画像エクスポートまとめ.md` | Googleスライドの「セクション管理」と特定スライドの画像エクスポートまとめ | literature | false | ファイル名・title（仮） |
| `31_Research/line-vs-line-works-differences.md` | line worksとline worksの違いと使い方 | field | true | ファイル名・title（仮） |
| `31_Research/MIHO MUSEUMを囲む大自然「信楽高原」.md` | MIHO MUSEUMを囲む大自然「信楽高原」 | permanent | true | ファイル名・title（仮） |
| `31_Research/natural-looking-flower-placement-tips.md` | 草花をオシャレに散りばめるテクニック | fleeting | true | ファイル名・title（仮） |
| `31_Research/pure-green-vs-oi-ocha-lemon.md` | おーいお茶 ピュアグリーン vs おーいお茶レモン | fleeting | false | ファイル名・title（仮） |
| `31_Research/recommended-filename-aspect-ratio-format.md` | ファイル名に縦横比率を含めるオススメの記述法 | permanent | false | ファイル名・title（仮） |
| `31_Research/research-notes.md` | 調べたいことメモ | fleeting | false | ファイル名・title（仮） |
| `31_Research/SDGsと8がけ社会と施工業界.md` | SDGsと8がけ社会と施工業界 | fleeting | true | ファイル名・title（仮） |
| `31_Research/youtubeアナリティクスのインプレッション数の仕組み.md` | youtubeアナリティクスのインプレッション数の仕組み | fleeting | true | ファイル名・title（仮） |
| `31_Research/エクセル関数で重複判定するときの完全一致と曖昧一致.md` | エクセル関数で重複判定するときの完全一致と曖昧一致 | fleeting | true | ファイル名・title（仮） |
| `31_Research/ケンタッキーの鳥の日パックと創業記念パックの比較.md` | ケンタッキーの鳥の日パックと創業記念パックの比較 | fleeting | true | ファイル名・title（仮） |
| `31_Research/チケットぴあのリセールサービスについて.md` | チケットぴあの定価リセールの仕組みと手数料（2026年調査） | literature | true | ファイル名・title（仮） |
| `31_Research/データセンターの冷却特集.md` | データセンターの冷却特集 | fleeting | true | ファイル名・title（仮） |
| `31_Research/はじめての和歌山ラーメン.md` | はじめての和歌山ラーメン | — | true | ファイル名・title（仮） |
| `31_Research/パソコンで特定のアプリの音量を下げる.md` | パソコンで特定のアプリの音量を下げる | — | true | ファイル名・title（仮） |
| `31_Research/パワークエリ内部の整理.md` | パワークエリ内部の整理 | fleeting | true | ファイル名・title（仮） |
| `31_Research/ピンク色の家の活用法.md` | ピンク色の家の活用法 | — | true | ファイル名・title（仮） |
| `31_Research/プリンターの印刷方法について.md` | プリンターの印刷方法について | — | true | ファイル名・title（仮） |
| `31_Research/ボクシング・メソッドについて.md` | ボクシング・メソッドについて | fleeting | true | ファイル名・title（仮） |
| `31_Research/マッサージチェアの効果について.md` | マッサージチェアの効果について | — | true | ファイル名・title（仮） |
| `31_Research/マットレスとカバーについて.md` | マットレスとカバーについて | fleeting | true | ファイル名・title（仮） |
| `31_Research/マットレスの返品対応についてまとめる.md` | マットレスの返品対応についてまとめる | fleeting | true | ファイル名・title（仮） |
| `31_Research/むずむず足症候群.md` | むずむず足症候群 | ai-generated | true | ファイル名・title（仮） |
| `31_Research/リファクタリング前のコード。.md` | リファクタリング前のコード。 | fleeting | true | ファイル名・title（仮） |
| `31_Research/リュックにウエストベルトとチェストストラップをあとづけする.md` | リュックへウエストベルトとチェストストラップを後付けする | fleeting | false | ファイル名・title（仮） |
| `31_Research/リュックの荷重調整にチェストストラップ.md` | リュックの荷重調整にチェストストラップ | — | true | ファイル名・title（仮） |
| `31_Research/ワードプレスでのリダイレクション設定.md` | ワードプレスでのリダイレクション設定 | fleeting | true | ファイル名・title（仮） |
| `31_Research/安全在庫算定におけるケース単位とバラ単位の扱い.md` | 安全在庫算定におけるケース単位とバラ単位の扱い | fleeting | true | ファイル名・title（仮） |
| `31_Research/鰻水木とうなぎのタンパク質.md` | 鰻水木とうなぎのタンパク質 | — | true | ファイル名・title（仮） |
| `31_Research/関西電鉄の料金ルール.md` | 関西電鉄の料金ルール | fleeting | true | ファイル名・title（仮） |
| `31_Research/機械的特性と物理的特性.md` | 機械的特性と物理的特性 | fleeting | true | ファイル名・title（仮） |
| `31_Research/筋肉の5つの能力.md` | 筋肉の5つの能力 | fleeting | true | ファイル名・title（仮） |
| `31_Research/現物添付.md` | 現物添付 | fleeting | true | ファイル名・title（仮） |
| `31_Research/港の使い分けを考える.md` | 港の使い分けを考える | fleeting | true | ファイル名・title（仮） |
| `31_Research/施工作業以外に発生する作業の名称まとめ.md` | 施工作業以外に発生する作業の名称まとめ | fleeting | true | ファイル名・title（仮） |
| `31_Research/自己消火性と難燃性.md` | 自己消火性と難燃性 | ai-generated | true | ファイル名・title（仮） |
| `31_Research/室内空気の循環を考える.md` | 室内空気の循環を考える | — | true | ファイル名・title（仮） |
| `31_Research/写真や動画を整理する.md` | 写真や動画を整理する | — | true | ファイル名・title（仮） |
| `31_Research/処方箋の「4日以内」ルールと、薬を受け取り忘れた場合の対応まとめ.md` | 処方箋の「4日以内」ルールと、薬を受け取り忘れた場合の対応まとめ | literature | false | ファイル名・title（仮） |
| `31_Research/図形のベースファイルをコピーするときの現実的な安全設計について.md` | 図形のベースファイルをコピーするときの現実的な安全設計について | fleeting | true | ファイル名・title（仮） |
| `31_Research/水処理特集とコンタミの関係整理.md` | 水処理特集とコンタミの関係整理 | fleeting | true | ファイル名・title（仮） |
| `31_Research/精神科・心療内科・メンタルクリニックに関する相談まとめ.md` | 精神科・心療内科・メンタルクリニックに関する相談まとめ | ai-generated | true | ファイル名・title（仮） |
| `31_Research/精神科におけるエゴグラム.md` | 精神科におけるエゴグラム | ai-generated | true | ファイル名・title（仮） |
| `31_Research/製品カテゴリーとタグ.md` | 製品カテゴリーとタグ | fleeting | true | ファイル名・title（仮） |
| `31_Research/単語の挿入位置.md` | 単語の挿入位置 | fleeting | true | ファイル名・title（仮） |
| `31_Research/単語の適切.md` | 単語の適切 | fleeting | true | ファイル名・title（仮） |
| `31_Research/中間ファイルの名称を考える.md` | 中間ファイルの名称を考える | — | true | ファイル名・title（仮） |
| `31_Research/中空バルーンとエアロゲルの比較.md` | 中空バルーンとエアロゲルの比較 | fleeting | true | ファイル名・title（仮） |
| `31_Research/展示会における写真入りミニカード.md` | 展示会における写真入りミニカード | fleeting | true | ファイル名・title（仮） |
| `31_Research/電気量と電力量の違い.md` | 電気量と電力量の違い | fleeting | true | ファイル名・title（仮） |
| `31_Research/虹色みぃつけた！｜感想メモ.md` | 虹色みぃつけた！｜感想メモ | literature | true | ファイル名・title（仮） |
| `31_Research/忍者発祥の地が意外と近くにあった話.md` | 忍者発祥の地が意外と近くにあった話 | — | true | ファイル名・title（仮） |
| `31_Research/売上推移グラフの軸設計に関する整理.md` | 売上推移グラフの軸設計に関する整理 | fleeting | true | ファイル名・title（仮） |
| `31_Research/表示形式で通貨と会計の使い分け.md` | 表示形式で通貨と会計の使い分け | fleeting | true | ファイル名・title（仮） |
| `31_Research/複数まとめサイトを横断して「本日の話題」を効率よく把握する仕組みづくり.md` | 複数まとめサイトを横断して「本日の話題」を効率よく把握する仕組みづくり | literature | false | ファイル名・title（仮） |
| `31_Research/保温材の燃えやすさについて.md` | 保温材の燃えやすさについて | — | true | ファイル名・title（仮） |
| `31_Research/放送大学とZEN大学の比較.md` | 放送大学とZEN大学の比較 | ai-generated | true | ファイル名・title（仮） |
| `31_Research/未開封でもサラダチキンは放置すと危険.md` | 未開封でもサラダチキンは放置すと危険 | fleeting | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 1 4.md` | 少子高齢化・人口減少による人手不足と施工業界の高齢化を背景としたPRストーリーの構築 | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 1 5.md` | データ分析・文書作成・開発ファイルの分類案 | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 1.md` | 千空のモイスチャーゲル アロエnと、ニベアの青缶 | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 10.md` | ipadのキャプチャ方法を考える | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 11.md` | 配信しなくても意味のあるゲーム配信 | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 112.md` | sentence-per-line | — | false | ファイル名・title（仮） |
| `31_Research/無題のファイル 12.md` | siwtch2でゲーム配信する準備 | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 2 12.md` | KB・MB・GBとKiB・MiB・GiBの違い | ai-generated | false | ファイル名・title（仮） |
| `31_Research/無題のファイル 24.md` | ゲーム配信の概要欄・遅延・話し方を整理する | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 26.md` | チャンネル分けを考える判断基準 | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 28.md` | dummy・mock・sample・test・temp・draftの使い分け | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 29.md` | 職業と掛け持ちの違い | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 3.md` | 隈研吾、山本理顕、安藤忠雄 | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 30.md` | ドラクエ7リイマジンドの熟練度稼ぎが素晴らしい | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 31.md` | 胡散臭いサイトにご注意 | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 38.md` | Sakulalaによる生体認証プラットフォームサービス | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 4 1.md` | 処置と措置の違い | fleeting | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 4 2.md` | 特定ECルートでの製品売上増加の理由を探る | fleeting | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 5.md` | 深里橋 花街 | fleeting | false | ファイル名・title（仮） |
| `31_Research/無題のファイル 6.md` | フットペダルの活用記事まとめ | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 7.md` | あをによし　奈良の都は　咲く花の　薫ふがごとく　今盛りなり | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 8.md` | 回転寿司のコスパを計算する | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル 9.md` | パスワード管理をどのアプリで行うか？ | — | true | ファイル名・title（仮） |
| `31_Research/無題のファイル.md` | ジョーシンポイントの活用方法について考える | — | true | ファイル名・title（仮） |
| `31_Research/問題把握1.md` | 問題把握1 | — | true | ファイル名・title（仮） |
| `31_Research/問題把握2.md` | 問題把握2 | — | true | ファイル名・title（仮） |
| `32_Zk/2026-room-cleaning-goal.md` | 2026年の目標：部屋の掃除 | permanent | false | ファイル名・title（仮） |
| `32_Zk/add-ai-work-log.md` | AI作業ログを追加する | permanent | false | ファイル名・title（仮） |
| `32_Zk/admiring-flowers-honoring-the-past-highlights.md` | 「花を愛でる 古きを尊ぶ」の注目作品 | literature | false | ファイル名・title（仮） |
| `32_Zk/admiring-flowers-honoring-the-past.md` | 特別企画展　花を愛でる　古きを尊ぶ | literature | false | ファイル名・title（仮） |
| `32_Zk/adopt-adapt-adept-how-to-remember.md` | adopt, adapt, adeptの違いと覚え方 | permanent | false | ファイル名・title（仮） |
| `32_Zk/basic-thread-management-for-token-efficiency.md` | トークン消費量を抑えるための基礎的なスレッド管理 | permanent | false | ファイル名・title（仮） |
| `32_Zk/beige-and-dried-grass-color.md` | ベージュ色と枯草色 | literature | false | ファイル名・title（仮） |
| `32_Zk/buy-for-value-not-price.md` | 買う理由が値段ならやめるべき。買わない理由が値段なら買うべき | permanent | false | ファイル名・title（仮） |
| `32_Zk/credit-card-closing-and-payment-dates.md` | クレジットカードの締め日と支払日 | permanent | true | ファイル名・title（仮） |
| `32_Zk/criteria-for-saving-ai-questions.md` | AIに尋ねた質問をメモとして残す判断基準 | permanent | false | ファイル名・title（仮） |
| `32_Zk/difference-between-product-and-goods.md` | 「商品」と「製品」の違い | permanent | false | ファイル名・title（仮） |
| `32_Zk/downgrade-to-small-contract.md` | 月額費用を押さえるために小口契約にダウングレードする選択肢 | permanent | false | ファイル名・title（仮） |
| `32_Zk/environment-shapes-people.md` | 環境が人を変える | permanent | false | ファイル名・title（仮） |
| `32_Zk/fix-word-text-background-darkening.md` | Wordで背景色の付いた図形の上に文字を置くと、その周辺部分だけ背景色が濃くなる問題の解決 | permanent | false | ファイル名・title（仮） |
| `32_Zk/flagship-store.md` | 旗艦店（フラグシップストア） | literature | false | ファイル名・title（仮） |
| `32_Zk/fuka-japanese-surnames-and-creation.md` | 「ふか」ではじまる日本の苗字と創作 | ai-generated | false | ファイル名・title（仮） |
| `32_Zk/go-to-okayama-and-kurashiki.md` | 岡山と倉敷を両方回るなら1泊以上を前提にする | permanent | true | ファイル名・title（仮） |
| `32_Zk/goals-as-gap-measure.md` | 「目標」は理想と現実のギャップを測るために設置する | permanent | false | ファイル名・title（仮） |
| `32_Zk/goals-list.md` | 目標一覧 | structure | false | ファイル名・title（仮） |
| `32_Zk/hitmonchan-punch-speed-calculation.md` | エビワラーのパンチ速度を計算し、身近な速さと比較した | permanent | false | ファイル名・title（仮） |
| `32_Zk/how-to-do-bicep-curls-correctly.md` | バイセップカールの正しいフォーム | literature | false | ファイル名・title（仮） |
| `32_Zk/how-to-do-dips-correctly.md` | ディップスの正しいフォーム | literature | false | ファイル名・title（仮） |
| `32_Zk/how-to-do-shoulder-press-correctly.md` | ショルダープレスの正しいフォーム | literature | false | ファイル名・title（仮） |
| `32_Zk/how-to-eat-almond-tart.md` | アーモンドタルトの食べ方 | permanent | false | ファイル名・title（仮） |
| `32_Zk/image-naming-conventions.md` | 画像ファイルの命名規則 | permanent | false | ファイル名・title（仮） |
| `32_Zk/ISO 8601系の日時表記.md` | ISO 8601系の日時表記 | permanent | false | ファイル名・title（仮） |
| `32_Zk/kindle-tag-icon-reference.md` | kindlハイライトのアイコン一覧表 | structure | false | ファイル名・title（仮） |
| `32_Zk/kintetsu-weekend-free-pass-trip-ideas.md` | 近鉄週末フリーパスで遠出する候補 | literature | true | ファイル名・title（仮） |
| `32_Zk/kyushu-support-discount.md` | 九州応援割り | literature | false | ファイル名・title（仮） |
| `32_Zk/lucua-yodobashi-umeda-location.md` | 梅田にあるルクアとヨドバシカメラの位置関係 | literature | false | ファイル名・title（仮） |
| `32_Zk/magnetism-in-storage-media.md` | 記録媒体と磁石の関係 | literature | false | ファイル名・title（仮） |
| `32_Zk/major-rinzai-sects.md` | 臨済宗の代表的な宗派 | literature | false | ファイル名・title（仮） |
| `32_Zk/misa-japanese-surnames-and-creation.md` | 「みさ」ではじまる日本の苗字と創作 | ai-generated | false | ファイル名・title（仮） |
| `32_Zk/need-for-alt-text.md` | 代替テキストの必要性 | permanent | false | ファイル名・title（仮） |
| `32_Zk/nsfw-optimized-performance-range.md` | NSFWの目的専用に用意するオススメな性能と価格帯 | literature | false | ファイル名・title（仮） |
| `32_Zk/obvious-to-me-not-to-others.md` | 前提の相対性 | permanent | false | ファイル名・title（仮） |
| `32_Zk/orange-book-monotaro-comparison.md` | オレンジブックとモノタロウの違い | literature | false | ファイル名・title（仮） |
| `32_Zk/personal-bookmarks.md` | 個人的なブックマーク | literature | true | ファイル名・title（仮） |
| `32_Zk/pokemon-paras-mushroom-host-theory.md` | パラスの本体は「きのこ」である | literature | false | ファイル名・title（仮） |
| `32_Zk/pokoa-pokemon.md` | ぽこあポケモン | structure | false | ファイル名・title（仮） |
| `32_Zk/preparing-ai-work-log.md` | AI作業ログの作成準備 | permanent | false | ファイル名・title（仮） |
| `32_Zk/quotation-hierarchy.md` | メモ同士のリンクとバックリンクの関係を理解する | permanent | false | ファイル名・title（仮） |
| `32_Zk/resolution-and-common-names.md` | 解像度と一般的な呼称 | literature | false | ファイル名・title（仮） |
| `32_Zk/return-to-thinking-on-reread.md` | 再読時に思考へ戻れること | permanent | false | ファイル名・title（仮） |
| `32_Zk/ricoh-im-c3510-vs-im-c3010.md` | RICOH IM C3510 VS RICOH IM C3010 | literature | false | ファイル名・title（仮） |
| `32_Zk/sai-japanese-surnames-and-creation.md` | 「さい」ではじまる日本の苗字と創作 | ai-generated | false | ファイル名・title（仮） |
| `32_Zk/sandbox-5x5-creation-method.md` | 5x5クリエイト | literature | false | ファイル名・title（仮） |
| `32_Zk/separating-external-and-reflective-knowledge.md` | 外部環境で得た知識と内省知の切り分け方 | permanent | false | ファイル名・title（仮） |
| `32_Zk/shortcut-junction-symlink-differences.md` | ショートカット、ジャンクション、シンボリックリンクの違い | permanent | true | ファイル名・title（仮） |
| `32_Zk/simplify-kindle-highlight-notes.md` | Kindleハイライト時のメモを簡略化 | permanent | false | ファイル名・title（仮） |
| `32_Zk/smartphone-mailer-list.md` | スマホ向け「メーラー」一覧表 | ai-generated | false | ファイル名・title（仮） |
| `32_Zk/specific-and-nonspecific-difference.md` | 特異的抵抗と非特異的抵抗の違い | literature | false | ファイル名・title（仮） |
| `32_Zk/sumitomo-mitsui-card-missed-payment-response.md` | 三井住友カードの引き落とし忘れについての整理 | permanent | false | ファイル名・title（仮） |
| `32_Zk/suntory-natural-water-regional-variations.md` | サントリーの天然水は地域差がある | permanent | false | ファイル名・title（仮） |
| `32_Zk/taka-japanese-surnames-and-creation.md` | 「たか」ではじまる日本の苗字と創作 | ai-generated | false | ファイル名・title（仮） |
| `32_Zk/things-i-want-to-try.md` | 使ってみたいアイテム | — | false | ファイル名・title（仮） |
| `32_Zk/transparency.md` | 透過性 | permanent | true | ファイル名・title（仮） |
| `32_Zk/useful-utilities-improve-ux.md` | 優れたユーティリティーの提供はUXを向上させる | permanent | false | ファイル名・title（仮） |
| `32_Zk/wakayama-city-library.md` | 和歌山市民図書館 | literature | false | ファイル名・title（仮） |
