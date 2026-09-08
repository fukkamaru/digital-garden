---
title: Cluster 01〜03 ファイル名リネーム対応表
aliases:
  - Cluster 01〜03 ファイル名リネーム対応表
type: fleeting
created: 2026-09-08T22:30:00+09:00
updated: 2026-09-09T00:32:09+09:00
id: 20260908-223000
permalink:
draft: false
tags:
  - ai-generated
---

# Cluster 01〜03 ファイル名リネーム対応表

## このノートの役割

Cluster 01〜03で日本語または全角記号を含む既存ファイル名を、意味を保つ英小文字kebab-caseへ移行するための正本。本文・title・typeはこの作業では変更しない。旧ファイル名は、必要なリンク更新を完了した後もaliasesへ追加しない（aliasesはtitleの別名であり、ファイルパスの移行手段ではない）。

実行前にこの表の各行を確認し、リネーム時には変更前全文を同じフォルダの日時付き`.退避`ファイルへ保存する。Vault内リンクは新パスへ更新し、旧パスへの参照が残らないことを検証する。

リネームとリンク修正は2026-09-09に完了。退避ファイルを除くVault全体を検査し、この対応表に記載する58件の旧ファイル名をリンク先にする現行Markdownリンクは0件、提案先の欠落は0件であることを確認した。

## 実行順

1. Cluster 01（9件）
2. Cluster 02（22件）
3. Cluster 03（27件）

各クラスタは、リネーム・リンク更新・退避・検証を一まとまりとして完了させる。ファイル名競合、外部参照、titleとの意味のずれが判明した行は保留へ移す。

## Cluster 01：ノートの役割と運用原則

| 現在のパス | 提案する新パス | 根拠 | 状態 |
| --- | --- | --- | --- |
| `31_Research/Kindleハイライトとobsidian運用についての整理.md` | `31_Research/kindle-highlights-and-obsidian-workflow.md` | KindleハイライトとObsidian運用 | 完了 |
| `31_Research/My Contextを書く魔法.md` | `31_Research/safe-prompt-for-my-context.md` | 現titleの「安全なプロンプト」 | 完了 |
| `31_Research/obsidian pluginについて色々とまとめる.md` | `31_Research/obsidian-plugin-overview.md` | Obsidianプラグインの概要 | 完了 |
| `31_Research/obsidianとquartzにおける改行問題.md` | `31_Research/obsidian-quartz-line-breaks.md` | Obsidian／Quartzの改行 | 完了 |
| `31_Research/quartz利用におけるgithubリポジトリ内についての疑問.md` | `31_Research/quartz-github-repository-questions.md` | QuartzとGitHubリポジトリ | 完了 |
| `31_Research/sentence per lineとsemantic line breaksはどちらが人気ですか？.md` | `31_Research/sentence-per-line-semantic-line-breaks-popularity.md` | 既存パスとの衝突を避けた二つの記法の比較 | 完了 |
| `31_Research/VScodeで拡張機能追加のエラーとMarkdown PDFについて.md` | `31_Research/vscode-extensions-and-markdown-pdf.md` | VS Code拡張機能とMarkdown PDF | 完了 |
| `31_Research/会社用Obsidian Vaultの構成方針まとめ.md` | `31_Research/company-obsidian-vault-structure.md` | 会社用Vaultの構成方針 | 完了 |
| `31_Research/無題のファイル 155.md` | `31_Research/obsidian-quartz-line-breaks-and-zettelkasten-workflow.md` | 現titleに基づく議論整理 | 完了 |

## Cluster 02：旅行・交通の意思決定

| 現在のパス | 提案する新パス | 根拠 | 状態 |
| --- | --- | --- | --- |
| `31_Research/Googleマップのリスト機能の使い方.md` | `31_Research/google-maps-list-feature-usage.md` | 既存の別パスとの衝突を避けた | 完了 |
| `31_Research/海外旅行検討メモ_関西在住_一人旅前提.md` | `31_Research/solo-international-travel-options-from-kansai.md` | 関西発・一人旅の候補比較 | 完了 |
| `31_Research/京都駅を起点とした交通ルート.md` | `31_Research/kyoto-station-route-options.md` | 京都駅起点の経路 | 完了 |
| `31_Research/滋賀旅行｜MIHO MUSEUM・信楽｜実績.md` | `31_Research/shiga-miho-shigaraki-trip-2026-08-08.md` | 鑑賞実績日を含むtitle | 完了 |
| `31_Research/新大阪から岡山の各種交通手段の時間と料金.md` | `31_Research/osaka-okayama-transport-comparison-2026.md` | 大阪―岡山の交通比較 | 完了 |
| `31_Research/新大阪駅を起点とした交通ルート.md` | `31_Research/shin-osaka-station-route-options.md` | 新大阪駅起点の経路 | 完了 |
| `31_Research/生駒駅を起点とした交通ルート.md` | `31_Research/ikoma-station-route-options.md` | 生駒駅起点の経路 | 完了 |
| `31_Research/青春18きっぷを利用.md` | `31_Research/seishun-18-ticket-kansai-travel-2026.md` | 2026年調査の利用条件 | 完了 |
| `31_Research/大阪駅を起点とした交通ルート.md` | `31_Research/osaka-station-route-options.md` | 大阪駅起点の経路 | 完了 |
| `31_Research/大和西大寺駅を起点とした交通ルート.md` | `31_Research/yamato-saidaiji-station-route-options.md` | 大和西大寺駅起点の経路 | 完了 |
| `31_Research/鶴橋駅を起点とした交通ルート.md` | `31_Research/tsuruhashi-station-route-options.md` | 鶴橋駅起点の経路 | 完了 |
| `31_Research/天王寺駅を起点とした交通ルート.md` | `31_Research/tennoji-station-route-options.md` | 天王寺駅起点の経路 | 完了 |
| `31_Research/渡月橋を渡った先はテイクアウトが少ない.md` | `31_Research/arashiyama-food-before-togetsukyo.md` | titleの判断 | 完了 |
| `31_Research/東京→大阪方面：サンライズ＋姫路新幹線テクニック.md` | `31_Research/sunrise-seto-izumo-tokyo-osaka-2026.md` | サンライズ利用の2026年調査 | 完了 |
| `31_Research/東京発のおトクな観光・交通チケット総まとめ.md` | `31_Research/tokyo-kanto-transport-passes-2026.md` | 東京・関東の周遊券 | 完了 |
| `31_Research/奈良駅を起点とした交通ルート.md` | `31_Research/nara-station-route-options.md` | 奈良駅起点の経路 | 完了 |
| `31_Research/難波駅を起点とした交通ルート.md` | `31_Research/namba-station-route-options.md` | 難波駅起点の経路 | 完了 |
| `31_Research/日中の高速バスについて調べる.md` | `31_Research/osaka-tokyo-daytime-highway-bus-2026.md` | 大阪―東京の昼行高速バス | 完了 |
| `31_Research/無題のファイル 6 2.md` | `31_Research/osaka-to-tokyo-travel-options.md` | 現title「大阪発東京行きについて」 | 完了 |
| `31_Research/予約サイトの使い方と使い分け.md` | `31_Research/hotel-booking-site-comparison.md` | 宿泊予約サイトの比較 | 完了 |
| `31_Research/嵐山旅行の交通費問題.md` | `31_Research/arashiyama-day-trip-cost-analysis.md` | 嵐山日帰りの費用分析 | 完了 |
| `31_Research/和歌山旅行｜芦雪・和歌山城・図書館｜実績.md` | `31_Research/wakayama-osetsu-castle-library-trip-2026-08-11.md` | 鑑賞実績日を含むtitle | 完了 |

## Cluster 03：美術鑑賞・文化史

| 現在のパス | 提案する新パス | 根拠 | 状態 |
| --- | --- | --- | --- |
| `31_Research/2026年に見られる曜変天目・耀変天目.md` | `31_Research/yohen-tenmoku-2026-viewing-record.md` | 2026年の鑑賞記録 | 完了 |
| `31_Research/MIHO MUSEUMの曜変天目について.md` | `31_Research/miho-museum-yohen-tenmoku.md` | MIHOの曜変天目 | 完了 |
| `31_Research/エル・グレコ《受胎告知》と日本所蔵作品まとめ.md` | `31_Research/el-greco-annunciation-japan-collections.md` | エル・グレコ《受胎告知》と国内所蔵 | 完了 |
| `31_Research/カール・ヴァルザーと同時代美術の年表.md` | `31_Research/carl-walser-contemporary-art-timeline.md` | カール・ヴァルザーと同時代美術 | 完了 |
| `31_Research/カール・ヴァルザー展 注目作品.md` | `31_Research/carl-walser-exhibition-highlights.md` | 展覧会の注目作品 | 完了 |
| `31_Research/ゴッホ作品の「光沢」と視線誘導は意図か.md` | `31_Research/van-gogh-gloss-and-gaze-direction.md` | 光沢と視線誘導 | 完了 |
| `31_Research/サラ・モリス.md` | `31_Research/sarah-morris.md` | 作家名 | 完了 |
| `31_Research/サラ・モリス展.md` | `31_Research/sarah-morris-exhibition.md` | 展覧会記録 | 完了 |
| `31_Research/ハルカスのゴッホ展_AIオススメ.md` | `31_Research/harukas-van-gogh-exhibition-guide.md` | 鑑賞ガイド | 完了 |
| `31_Research/ハルカスのゴッホ展_目録.md` | `31_Research/harukas-van-gogh-exhibition-catalog.md` | 出品目録 | 完了 |
| `31_Research/歌舞伎、狂言、能の違いを解説.md` | `31_Research/noh-kyogen-kabuki-comparison.md` | 現titleの比較資料 | 完了 |
| `31_Research/京都国立博物館　北野天神　見るべきリスト.md` | `31_Research/kyoto-national-museum-kitano-tenjin-highlights.md` | 展示の注目点 | 完了 |
| `31_Research/京都国立博物館の特別展「北野天神」とは何か.md` | `31_Research/kyoto-national-museum-kitano-tenjin-overview.md` | 展覧会の基礎資料 | 完了 |
| `31_Research/興福寺 薪御能（2026年5月16日）についての整理.md` | `31_Research/kofukuji-takigi-noh-2026-05-16.md` | 公演日を含む鑑賞資料 | 完了 |
| `31_Research/高松塚古墳・キトラ古墳の事前知識.md` | `31_Research/takamatsuzuka-kitora-tomb-primer.md` | 鑑賞前の基礎資料 | 完了 |
| `31_Research/大ゴッホ展.md` | `31_Research/kobe-van-gogh-night-cafe-terrace-visit.md` | 神戸での鑑賞記録 | 完了 |
| `31_Research/大阪市立東洋陶磁美術館の特別展.md` | `31_Research/moco-collection-omnibus-part-2-visit-guide.md` | MOCO展の鑑賞資料 | 完了 |
| `31_Research/中之島香雪美術館にて大原美術館所蔵「名画への旅」虎次郎の夢.md` | `31_Research/ohara-masterpieces-journey-exhibition-visit.md` | 現titleの鑑賞記録 | 完了 |
| `31_Research/綴プロジェクトの作品リスト.md` | `31_Research/tsuzuri-project-work-list.md` | 綴プロジェクトの作品一覧 | 完了 |
| `31_Research/天神・天満宮・菅原道真についての整理.md` | `31_Research/sugawara-no-michizane-scholarship-faith.md` | 学問の神としての定着 | 完了 |
| `31_Research/日本茶碗、唐物茶碗、高麗茶碗の比較.md` | `31_Research/japanese-chawan-karamono-korai-wamono-comparison.md` | 3分類の比較 | 完了 |
| `31_Research/美術品の展示日数ルール.md` | `31_Research/national-treasure-important-cultural-property-display-conditions.md` | 公開日数と保存条件 | 完了 |
| `31_Research/無題のファイル 11 1.md` | `31_Research/takamatsuzuka-kitora-tombs-overview.md` | 高松塚・キトラの総覧 | 完了 |
| `31_Research/無題のファイル 12 1.md` | `31_Research/takamatsuzuka-kitora-tombs-artworks.md` | 高松塚・キトラの壁画・作品 | 完了 |
| `31_Research/無題のファイル 13 1.md` | `31_Research/takamatsuzuka-kitora-tombs-public-display.md` | 公開・展示に関する資料 | 完了 |
| `31_Research/油滴天目と曜変天目茶碗.md` | `31_Research/yuteki-yohen-tenmoku-viewing-plan.md` | 油滴・曜変の鑑賞計画 | 完了 |
| `31_Research/曜変天目茶碗と天目茶碗の世界.md` | `31_Research/yohen-tenmoku-and-tenmoku-basics.md` | 天目茶碗の基礎資料 | 完了 |

## 保留事項

- 58件の提案先パスの存在と、Vault全体からの旧パス参照は確認済み。
- `.退避`ファイルは履歴として現ファイル名のまま残し、リネーム対象には含めない。
- 外部URL・公開URLのリダイレクト要否は、デジタルガーデン側の公開運用ルールと実際のURL構造を確認してから判断する。
