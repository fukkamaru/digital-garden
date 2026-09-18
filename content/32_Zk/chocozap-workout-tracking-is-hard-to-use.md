---
title: chocoZAPの運動記録が使いにくい
aliases:
  - chocoZAPの運動記録が使いにくい
type: permanent
created: 2026-08-21T22:19:27+09:00
updated: 2026-09-10T19:39:31+09:00
id: 20260821-221927
permalink:
draft: false
tags:
---
チョコザップのアプリ内運動記録システムが使いにくい。
- マシン選択が不便なUI
- 重さ・セット数・回数しかない（※備考欄がない）
- バイクの時速が20km/hまでしかない
- 分析機能が無い
- インポート・エクスポート機能が無い

どうしても、普段そんなに運動しないライト層をメインにしたジムなので、インポート・エクスポート機能および分析機能がないのも仕方がない。ただ、運動記録を付けやすいインタフェースではないし、その日の体調や目的をメモするための備考欄がないのもいただけない。

⇒ 自分でGoogleスプレッドシートを使って記録を取ることにした。

## その後の運用

この入力のしにくさを出発点として、Googleスプレッドシートを保存先にしたAppSheetの入力画面を試作し、現在も使っている。課題整理は[筋トレ記録の入力方法改善についての整理](../31_Research/strength-training-record-entry-improvements.md)、実装の詳細は[AppSheetによる筋トレ記録アプリの実装記録](../31_Research/appsheet-workout-recording-app-implementation-history.md)に分けて記録する。

