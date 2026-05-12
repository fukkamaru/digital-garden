---
title: Git LFSの制限
aliases:
  - Git LFSの制限
type:
created: 2026-05-13T07:32:33+09:00
updated: 2026-05-13T07:32:33+09:00
id: 20260513-073233
permalink:
draft: false
tags:
  - ai-generated
---
大きなファイルはGit LFSを使えば通常Gitの100MiB制限を回避できます。ただし、**GitHub PagesではGit LFSを使えません**。

| プラン                     | Git LFSの1ファイル上限 |
| ----------------------- | --------------: |
| GitHub Free             |             2GB |
| GitHub Pro              |             2GB |
| GitHub Team             |             4GB |
| GitHub Enterprise Cloud |             5GB |


https://docs.github.com/en/billing/reference/product-usage-included

https://docs.github.com/repositories/working-with-files/managing-large-files/about-git-large-file-storage
