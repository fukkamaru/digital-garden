---
title: GitHub Pagesの主な制限
aliases:
  - GitHub Pagesの主な制限
type: literature
created: 2026-05-13T07:36:03+09:00
updated: 2026-05-13T07:36:03+09:00
id: 20260513-073603
permalink:
draft: false
tags:
  - ai-generated
---
| 区分             |               制限・目安 | 内容                                                                                                                                                                                                                |
| -------------- | ------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ユーザー / 組織サイト   |     **1アカウントにつき1つ** | `username.github.io` 型のサイトは1つ。プロジェクトサイトは別に作れる。([GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits "GitHub Pages limits - GitHub Docs"))                         |
| Pagesのソースリポジトリ |           **1GB推奨** | GitHub Pages用の元リポジトリは1GBが推奨上限。([GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits "GitHub Pages limits - GitHub Docs"))                                         |
| 公開済みサイトサイズ     |           **1GBまで** | 公開されるGitHub Pagesサイト自体は1GBを超えられない。([GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits "GitHub Pages limits - GitHub Docs"))                                     |
| デプロイ時間         |      **10分でタイムアウト** | Pagesのデプロイが10分を超えると失敗する。([GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits "GitHub Pages limits - GitHub Docs"))                                               |
| 帯域幅            | **100GB/月のソフトリミット** | 明確な即停止というより、超過時に制限や連絡が来る可能性がある。([GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits "GitHub Pages limits - GitHub Docs"))                                        |
| ビルド回数          |   **10回/時のソフトリミット** | ただし、カスタムGitHub Actionsワークフローでビルド・公開する場合はこの制限は適用されない。([GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits "GitHub Pages limits - GitHub Docs"))                   |
| レート制限          |                  あり | 過度なアクセス時はHTTP 429が返る可能性がある。([GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits "GitHub Pages limits - GitHub Docs"))                                            |
| 商用利用           |                制限あり | GitHub Pagesは無料Webホスティングサービスとして、オンラインビジネス、EC、SaaS提供を主目的に使うことは想定されていない。([GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits "GitHub Pages limits - GitHub Docs")) |
| 機密情報の送信        |            非推奨 / 不適 | パスワードやクレジットカード情報を送るような用途には使うべきではない。([GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits "GitHub Pages limits - GitHub Docs"))                                    |


**GitHub Pagesでの「単一ファイルサイズ」をどう見るか**

GitHub Pages自体の制限として、Cloudflare Pagesのような
```
1ファイル25MiBまで
```
という形ではなく、基本的には次の制限が効いてきます。

|観点|実質的な上限|
|---|--:|
|Web画面からアップロード|25MiBまで|
|Gitで通常push|100MiB超は不可|
|GitHub Pages公開サイト全体|1GBまで|
|Git LFS|Pagesでは使えない|
