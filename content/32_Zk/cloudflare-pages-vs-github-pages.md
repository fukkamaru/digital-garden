---
title: Cloudflare Pages / GitHub / GitHub Pagesの比較
aliases:
  - Cloudflare Pages / GitHub / GitHub Pagesの比較
type: literature
created: 2026-05-13T07:40:00+09:00
updated: 2026-05-13T07:40:00+09:00
id: 20260513-074000
permalink:
draft: false
tags:
  - ai-generated
---

|項目|GitHub本体|GitHub Pages|Cloudflare Pages|
|---|--:|--:|--:|
|単一ファイル|Git pushは100MiB超不可、50MiB超警告|GitHub本体の制限を受ける|1ファイル25MiB|
|Web画面アップロード|25MiBまで|GitHub経由なら同じ|Direct Upload方式による|
|サイト全体サイズ|リポジトリは理想1GB未満、5GB未満強く推奨|公開サイト1GBまで|ファイル数・1ファイルサイズ制限中心|
|大容量ファイル|LFS / Releases|LFS不可|R2推奨|
|静的サイト用途|ソース管理|公開・配信|公開・配信|
|大きいPDF・動画置き場|Releasesなら可|不向き|Pages単体は不向き、R2が向く|

