---
title: ストレージ関連エラー イベントID7
aliases:
  - ストレージ関連エラー イベントID7
type: literature
created: 2026-08-22T22:32:13+09:00
updated: 2026-09-17T07:33:40+09:00
id: 20260822-223213
permalink:
draft: false
tags:
  - ai-generated
---
# ストレージ関連エラー イベントID7

このノートは、Windowsの`Disk`ソースで記録されたEvent ID 7を、CF-LVのユーザープロファイル障害を読むための観測として位置付ける。発生日時・件数・関連ログ・実際の判断は、[Windowsユーザープロファイル障害・SSD不良ブロック調査まとめ](windows-profile-ssd-read-errors.md)を正本とする。

## この事例で観測したこと

8月19日17:17頃、次の内容の`Disk` Event ID 7が多数記録され、翌日にも継続していた。

```text
デバイス \Device\Harddisk0\DR0 に不良ブロックがあります。
```

ほぼ同じ時刻に、User Profile Service Event ID 1508で`C:\Users\user\NTUSER.DAT`のCRCエラーが確認された。この二つの観測が重なったため、単純な`ProfileList`の不整合よりも、ストレージ読み取り障害を先に疑う根拠になった。

## Event ID 7が示す範囲

Event ID 7は、Windowsが対象ディスクへのI/Oでアクセス異常を記録したことを示す。`Harddisk0`はWindows内部の物理ディスク番号であり、HDDを意味しない。SATA SSDやNVMe SSDでも同様に表示される。

ただし、このイベントだけから次のいずれかを確定することはできない。

- SSD本体の故障
- NANDフラッシュ、コントローラー、ファームウェアのどこに問題があるか
- SATA/NVMe接続、電源、基板側の問題か
- Event ID 7が特定ファイルを直接破損させたという因果

この事例では、Event ID 7単独ではなく、件数・継続性・`NTUSER.DAT`のCRCエラー・一時プロファイル化を同じ時刻帯で照合して、ストレージI/O障害が根本原因として最も整合的だと判断した。

```text
Disk Event ID 7（反復）
    ＋ NTUSER.DAT のCRCエラー
    ＋ 元プロファイルの読み込み失敗
    → ストレージ側の読み取り障害を優先して扱う
```

## CHKDSKとの区別

`chkdsk`はファイルシステムとメタデータの整合性を確認するコマンドである。`chkdsk C:`は状態確認、`/f`や`/r`は修復を伴う。Microsoftの`chkdsk`リファレンスでも、`/r`は不良セクターを探して読み取り可能な情報を回復しようとする操作と説明されている。[chkdsk（Microsoft Learn）](https://learn.microsoft.com/windows-server/administration/windows-commands/chkdsk)

したがって、`chkdsk`でファイルシステム上の問題が見つからないことと、実際のI/O経路やストレージが健全であることは同じ結論ではない。この事例では、データ保全を優先し、負荷を伴う`chkdsk C: /r`を先に実行しない方針にした。具体的な確認・修復コマンドの扱いは、[ハードディスクやSSDの健康状態を見るコマンド入力](ハードディスクやSSDの健康状態を見るコマンド入力.md)を参照する。
