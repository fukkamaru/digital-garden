---
title: Github本体のの主な制限
aliases:
  - Github本体のの主な制限
type: literature
created: 2026-05-13T07:29:52+09:00
updated: 2026-05-13T07:29:52+09:00
id: 20260513-072952
permalink:
draft: false
tags:
  - ai-generated
---
リポジトリに置けるか、プッシュできるかといった問題に関わってくる。

|区分|制限・目安|内容|
|---|--:|---|
|ブラウザからのファイル追加|**25MiBまで**|GitHubのWeb画面から直接アップロードする場合の上限。([GitHub Docs](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github "About large files on GitHub - GitHub Docs"))|
|Gitでpushする単一ファイル|**50MiB超で警告**|push自体は可能だが、GitHubから警告される。([GitHub Docs](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github "About large files on GitHub - GitHub Docs"))|
|Gitでpushする単一ファイル|**100MiB超はブロック**|通常のGitリポジトリでは100MiBを超えるファイルはpush不可。([GitHub Docs](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github "About large files on GitHub - GitHub Docs"))|
|単一オブジェクトサイズ|推奨最大 **1MB**、強制上限 **100MB**|GitHubのリポジトリ制限では、単一オブジェクトは1MB以下推奨、100MBで強制上限。([GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits "Repository limits - GitHub Docs"))|
|1回のpushサイズ|**2GBまで**|大量ファイルを一気にpushすると引っかかる可能性あり。([GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits "Repository limits - GitHub Docs"))|
|リポジトリサイズ|理想は **1GB未満**、強く推奨は **5GB未満**|大きすぎるとcloneやfetchが重くなり、GitHubから改善を求められる可能性がある。([GitHub Docs](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github "About large files on GitHub - GitHub Docs"))|
|`.git` のオンディスクサイズ|**10GB以内推奨**|GitHubのRepository limitsでは、`.git`フォルダの圧縮済みサイズとして10GBが目安。([GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits "Repository limits - GitHub Docs"))|
|1ディレクトリ内の項目数|**3,000以内推奨**|1つのフォルダに大量ファイルを置くと性能低下の原因になる。([GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits "Repository limits - GitHub Docs"))|
|ディレクトリ階層|**50階層以内推奨**|深すぎるディレクトリ構造は非推奨。([GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits "Repository limits - GitHub Docs"))|
|ブランチ数|**5,000以内推奨**|通常の個人運用ではまず問題にならない。([GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits "Repository limits - GitHub Docs"))|
|push頻度|**1分あたり6回以内推奨**|自動化で頻繁にpushする場合に注意。([GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits "Repository limits - GitHub Docs"))|
|clone / fetchなど|**1秒あたり15操作以内推奨**|CIや自動処理で大量アクセスする場合に関係。([GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits "Repository limits - GitHub Docs"))|
|PR / commit diff|PR全体で20,000行またはraw diff 1MBなど|大きすぎる差分はGitHub上で表示されないことがある。([GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits "Repository limits - GitHub Docs"))|