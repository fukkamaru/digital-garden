---
title: GitHub Releasesの制限
aliases:
  - GitHub Releasesの制限
type:
created: 2026-05-13T07:34:51+09:00
updated: 2026-05-13T07:34:51+09:00
id: 20260513-073451
permalink:
draft: true
tags:
---
大容量ファイルを「リポジトリに直接置く」のではなく、配布用ファイルとして置くなら**GitHub Releases**という選択肢もあります。

| 区分             |       制限 |
| -------------- | -------: |
| 1リリースあたりのアセット数 | 最大1,000個 |
| 1ファイルサイズ       |   2GiB未満 |
| リリース全体の合計サイズ   |     制限なし |
| 帯域幅            |     制限なし |

公式では、リリースアセットは1ファイル2GiB未満、リリース全体の合計サイズや帯域幅には制限なしとされています。ただし、これは「サイト素材置き場」というより、ソフトウェア・配布物・zip・PDF配布など向けです。
https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases