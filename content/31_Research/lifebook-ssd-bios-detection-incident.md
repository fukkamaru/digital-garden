---
title: LIFEBOOK AシリーズでBIOSからSSDが消えた事例
aliases:
  - LIFEBOOK AシリーズでBIOSからSSDが消えた事例
  - SSDがBIOSに認識されなくなる問題
  - LIFEBOOK AシリーズのSSD未認識
type: literature
created: 2026-04-29T07:23:17+09:00
updated: 2026-09-23T18:45:30+09:00
id: 20260429-072317
permalink:
draft: true
tags:
  - field
  - ai-generated
---
# LIFEBOOK AシリーズでBIOSからSSDが消えた事例

業務で使用していたLIFEBOOK Aシリーズで、フリーズ後に再起動すると内蔵ストレージがBIOSの起動メニューから見えなくなった事例。半日ほど電源を切ったままにしてから再起動すると正常に起動し、保守サービスへ依頼する必要はなくなった。

> [!warning] 別事例として扱う
> Panasonic CF-LVで発生したユーザープロファイル障害・Disk Event ID 7の事例とは、端末・時期・観測したログ・対応が異なる。二つの原因や時系列を統合しない。

## 実際に起きたこと

|項目|記録できる事実|
|---|---|
|端末|LIFEBOOK Aシリーズの業務用PC（完全な型番は未記録）|
|発生前|PCがフリーズした|
|再起動後|Cドライブを読み込めず、「起動メディアがない」旨の警告が表示された|
|起動メニュー|`CD/DVD ドライブ`、`ネットワーク IPv4`、`ネットワーク IPv6`のみが表示され、内蔵ストレージは表示されなかった|
|操作しなかったこと|BIOS設定変更、分解、SSDの抜き差し、Windows修復メディアによる修復|
|回復|シャットダウン後、半日ほど置いて再起動したところ正常に起動した|
|結果|保守サービスへの依頼は行わなかった|

この記録にある「BIOSセットアップ」「診断プログラム」は起動メニューで確認できた項目であり、設定変更や診断実行をした記録ではない。

## 事実から言える範囲

内蔵ストレージが起動メニューに現れなかったため、その起動時点ではWindowsのブート設定だけでなく、ストレージの検出状態も確認すべき状況だった。Microsoftの起動問題の切り分けでも、ファームウェアが有効なシステムディスクを検出する前の段階で止まる場合は、BIOS段階の問題としてハードウェア側を含めて確認する。[Windows startup issues troubleshooting（Microsoft Learn）](https://learn.microsoft.com/troubleshoot/windows-client/performance/windows-boot-issues-troubleshooting)

一方、半日後に正常起動したことだけでは、SSD本体、接続、電源状態、コントローラー、あるいは一時的な検出失敗のどれだったかは確定しない。回復したことは観測事実であり、原因の確定ではない。

## Windows Updateとの関係

このノートの元記録には、Windows Updateが原因またはきっかけだった可能性を述べるAI回答が含まれていた。しかし、次の情報は記録されていない。

- 発生時にインストールされていたWindowsのバージョンとOSビルド
- 更新履歴とKB番号
- 更新時刻、フリーズ時刻、再起動時刻の照合
- Event Viewerの`WindowsUpdateClient`、`Kernel-Power`、`Disk`などの記録
- 当該KBと同じ症状を結び付ける公式の既知問題

したがって、この事例では「Windows Updateが原因だった」「特定の更新プログラムがSSDをBIOSから消した」とは結論付けない。元記録中の「調べた結果」とする説明にも、具体的な調査記録や出典は残っていなかった。

Windows Updateとの関連を将来確認する場合は、端末のOSバージョンとKB番号を特定した上で、MicrosoftのWindows release healthに掲載される既知問題と照合する。既知問題には対象バージョン、発端となったKB、状態が記載される。[Windows release healthの確認方法（Microsoft Learn）](https://learn.microsoft.com/windows/deployment/update/check-release-health)

## 再発時の扱い

これは会社PCであり、内蔵ストレージがBIOSに表示されない状態で設定変更や分解を行うことは、保守・資産管理・暗号化の条件に影響する可能性がある。再発時は、次の情報を変更せずに記録して保守窓口へ渡す。

```text
・発生日時と直前にしていた作業
・画面に出た警告文
・Boot Menu / BIOSの写真
・表示された起動候補
・端末の完全な型番と資産番号
・直近のWindows Update履歴（起動できる状態へ戻った後）
```

この事例では、自然回復したため保守依頼は不要になった。ただし、同じ症状が再発する場合は、回復を待つだけで原因が解決したとみなさず、上の記録を添えて保守窓口へ相談する。
