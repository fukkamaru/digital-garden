---
title: Cloudflare Pagesの主な制限
aliases:
  - Cloudflare Pagesの主な制限
type: literature
created: 2026-05-02T14:30:57+09:00
updated: 2026-05-02T14:30:57+09:00
id: 20260502-143057
permalink:
draft: false
tags:
  - ai-generated
---

| 区分                       |                                             制限内容 | 備考                                                                                                                                                                                               |
| ------------------------ | -----------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 単一ファイルサイズ                |                                 **1ファイル最大25MiB** | PDF、動画、大きい画像、WASMなどで引っかかりやすい。大容量ファイルはR2利用が推奨されている。([Cloudflare Docs](https://developers.cloudflare.com/pages/platform/limits/ "Limits · Cloudflare Pages docs"))                                 |
| ファイル数                    |                         Free: **20,000ファイル/サイト** | Pro/Business/Enterpriseは最大100,000ファイル。ただし `PAGES_WRANGLER_MAJOR_VERSION=4` の設定が必要。([Cloudflare Docs](https://developers.cloudflare.com/pages/platform/limits/ "Limits · Cloudflare Pages docs")) |
| Direct Upload: Wrangler  |                        **20,000ファイル、1ファイル25MiB** | Git連携ではなく `wrangler pages deploy` で直接アップロードする場合。([Cloudflare Docs](https://developers.cloudflare.com/pages/get-started/direct-upload/ "Direct Upload · Cloudflare Pages docs"))                  |
| Direct Upload: ドラッグ&ドロップ |                         **1,000ファイル、1ファイル25MiB** | ダッシュボードへ手動アップロードする方式はファイル数が少ない。([Cloudflare Docs](https://developers.cloudflare.com/pages/get-started/direct-upload/ "Direct Upload · Cloudflare Pages docs"))                                   |
| ビルド同時実行                  |                      Free: 1、Pro: 5、Business: 20 | アカウント単位でカウント。([Cloudflare Docs](https://developers.cloudflare.com/pages/platform/limits/ "Limits · Cloudflare Pages docs"))                                                                      |
| ビルド回数                    |      Free: 月500回、Pro: 月5,000回、Business: 月20,000回 | GitHubへpushするたびにビルドされるため、頻繁にpushすると関係する。([Cloudflare Docs](https://developers.cloudflare.com/pages/platform/limits/ "Limits · Cloudflare Pages docs"))                                           |
| ビルド時間                    |                                   **20分でタイムアウト** | Quartz程度なら通常は問題になりにくいが、画像処理・重い依存関係があると注意。([Cloudflare Docs](https://developers.cloudflare.com/pages/platform/limits/ "Limits · Cloudflare Pages docs"))                                          |
| カスタムドメイン数                | Free: 100、Pro: 250、Business: 500、Enterprise: 500 | 1プロジェクトあたり。([Cloudflare Docs](https://developers.cloudflare.com/pages/platform/limits/ "Limits · Cloudflare Pages docs"))                                                                        |
| `_headers`               |                             最大100ルール、各行2,000文字まで | セキュリティヘッダーやCORS設定を大量に書く場合に関係。([Cloudflare Docs](https://developers.cloudflare.com/pages/configuration/headers/ "Headers · Cloudflare Pages docs"))                                               |
| `_redirects`             |                       静的2,000 + 動的100 = 最大2,100件 | 各リダイレクト宣言は1,000文字まで。大量のURL転送はBulk Redirects推奨。([Cloudflare Docs](https://developers.cloudflare.com/pages/configuration/redirects/ "Redirects · Cloudflare Pages docs"))                          |
| Preview Deployments      |                                    有効なプレビュー数は無制限 | PRやブランチごとのプレビュー環境。([Cloudflare Docs](https://developers.cloudflare.com/pages/platform/limits/ "Limits · Cloudflare Pages docs"))                                                                 |
| Pagesプロジェクト数             |                            **100プロジェクトのソフトリミット** | 乱用防止目的。必要なら引き上げ申請。([Cloudflare Docs](https://developers.cloudflare.com/pages/platform/limits/ "Limits · Cloudflare Pages docs"))                                                                 |
| 静的アセットへのリクエスト            |                                           無料・無制限 | Functionsを呼ばない通常のHTML/CSS/JS/画像など。([Cloudflare Docs](https://developers.cloudflare.com/pages/functions/pricing/ "Pricing · Cloudflare Pages docs"))                                              |
| Pages Functions          |                                 Workersの利用枠にカウント | Functions、KV、Durable Objectsなどを使う場合はWorkers側の制限・課金体系を見る必要がある。([Cloudflare Docs](https://developers.cloudflare.com/pages/functions/pricing/ "Pricing · Cloudflare Pages docs"))                   |