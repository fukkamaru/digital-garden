---
title: Youtubeサムネイルサイズのベストプラクティス
aliases:
  - Youtubeサムネイルサイズのベストプラクティス
type: permanent
created: 2026-08-22T19:29:08+09:00
updated: 2026-08-22T19:29:08+09:00
id: 20260822-192908
permalink:
draft: false
tags:
---

**現在の状況**
- 2025年頃：1280×720px
	- [Youtubeコミュニティ](https://support.google.com/youtube/thread/338730490/thumbnails-too-big?hl=en&utm_source=chatgpt.com)
- 2026年現在：3840x2160px
	- [公式ヘルプ](https://support.google.com/youtube/answer/72431?co=GENIE.Platform%3DDesktop&hl=ja)

**動画の種類別**
- 一般向け：3840x2160px
- ショート動画：2160x3840px
 ※最小幅はどちらも640px


最終画像を高品質にするために、大きめのキャンバスで制作して最後に縮小するという製作上の考え方がある。これは、特に文字、図形、境界線、合成した素材などは **高解像度でレンダリングしてからダウンサンプリングすると、輪郭や細部が整いやすい** ことがある。


しかし、Youtubeを視聴する多くの環境はスマホによるところが大きく、1.5倍や2倍サイズで作成することのメリットは薄い。そのため、サムネイルを作成するなら`3840x2160px`のままで作成・書き出しすれば十分である。

