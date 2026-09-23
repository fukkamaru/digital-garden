---
title: iPadのキャプチャ方法を検討する
aliases:
  - iPadのキャプチャ方法を検討する
  - ipadのキャプチャ方法を考える
type: literature
created: 2026-04-29T07:09:58+09:00
updated: 2026-09-22T14:09:02+09:00
id: 20260429-070958
permalink:
draft: true
source:
tags:
  - ai-generated
---

# iPadのキャプチャ方法を検討する

このノートは、iPad ProのGoodnotes等を配信・録画するため、AVerMedia LGX2 GC550とOBSを使う構成を検討した記録である。製品の対応状況やOSの仕様は変わり得るため、ここでは当時の観測・判断と、再確認が必要な点を分ける。

## 前提と目的

- Switch 2は`Switch 2 → GC550 → PC`で正常に取り込めていた。
- iPad ProをGC550へ接続し、Goodnotesなど保護されていない画面を取り込みたい。
- RECentralのHDCP検出設定をオフにするとiPadの映像は取り込めたが、Switch側の映像が乱れた。
- 設定を常時切り替える運用は避けたい。

## 観測した問題と切り分け

|観測|考えられる確認先|
|---|---|
|iPadの外部画面がデスクトップのように固定表示される|Stage Managerによる拡張表示、Goodnotesの外部表示モード|
|OBSだけ表示がおかしい|映像キャプチャデバイスの設定、解像度・FPS、再初期化|
|iPad側で不安定|USB-Cハブ、映像アダプタ、給電、HDMI接続|
|SwitchとiPadでHDCP設定の要求が異なる|GC550 / RECentralの設定をソースごとに分ける必要性|

当時の切り分けでは、iPad側の外部表示モードと映像アダプタの相性が有力だった。まずStage Managerをオフにして再接続し、GoodnotesのPresentation Modeまたは外部画面への移動を確認する。次に、多機能ハブではなくメーカーが推奨する映像アダプタで比較する、という順で検証する。

## 運用上の判断

GC550をSwitchとiPadで共用し、HDCP検出を常時オンのまま両方を安定して取り込む公式手順は、当時の確認では見つからなかった。そのため、現実的な選択肢は次の順だった。

1. SwitchとiPadでRECentralの設定を切り替える。
2. iPadをキャプチャーボードから分離し、AirPlay等の画面ミラーリングをOBSへ取り込む。
3. 保護回避を目的とする機器・設定には依存しない。

Goodnotesを中心に扱うなら、iPad側を画面ミラーリングへ分離する方が、Switch用のGC550構成を崩さずに済む可能性がある。実施前には、使用中のiPad世代、アダプタ、GC550ドライバー、RECentral、OBS、OSの現行対応状況を公式資料で確認する。
