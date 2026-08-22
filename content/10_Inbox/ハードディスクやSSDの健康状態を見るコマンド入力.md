---
title: ハードディスクやSSDの健康状態を見るコマンド入力
aliases:
  - ハードディスクやSSDの健康状態を見るコマンド入力
type:
created: 2026-08-22T23:01:28+09:00
updated: 2026-08-22T23:01:28+09:00
id: 20260822-230128
permalink:
draft: true
tags:
---
はい。会社PCで**勝手にソフトをインストールしにくい**なら、まずWindows標準機能だけでかなり確認できます。

特におすすめは **PowerShell + イベントビューアー** です。

### 1. PowerShellでSSD/HDDの健康状態を見る

PowerShellを「管理者として実行」して、まずこれです。

```
Get-PhysicalDisk | Format-Table FriendlyName, MediaType, HealthStatus, OperationalStatus, Size
```

たとえば、

```
FriendlyName        MediaType  HealthStatus  OperationalStatus
-------------       ---------  ------------  -----------------
SAMSUNG MZV...      SSD        Healthy       OK
```

のように出ます。

`HealthStatus` が

- `Healthy` → 正常判定
- `Warning`
- `Unhealthy`

なら、Windows側でも異常を認識しています。

さらに対応しているSSDなら、

```
Get-PhysicalDisk | Get-StorageReliabilityCounter
```

で、

- Temperature
- PowerOnHours
- ReadErrorsTotal
- WriteErrorsTotal
- Wear
- StartStopCycleCount

などを取得できる場合があります。

ただし、**SSDやドライバによっては項目が空欄になります**。これは「正常」という意味ではなく、「Windows標準APIでは取得できない」というだけです。

### 2. イベントビューアーを確認

今回のPCでは、むしろこちらが非常に重要です。

**イベントビューアー → Windowsログ → システム**

で、以下のソースを確認します。

- `Disk`
- `Ntfs`
- `stornvme`
- `storahci`
- `iaStorA`
- `iaStorAC`
- `volmgr`

特に、

- イベントID **7**：不良ブロック
- **51**：ページング操作中のエラー
- **129**：ストレージデバイスへのリセット
- **153**：I/O操作の再試行
- **157**：ディスクが突然取り外された

あたりは重要です。

今回のように**数日間にわたり100件単位でディスク系エラーが出ている**なら、CrystalDiskInfoで「正常」と出たとしても、イベントログの方を軽視すべきではありません。

### 3. CHKDSK

ファイルシステム側を見るなら、

```
chkdsk C:
```

これは基本的に読み取り確認なので、まず実行して構いません。

ただし、

```
chkdsk C: /f
```

や

```
chkdsk C: /r
```

は修復処理まで行うため、障害が疑われるSSDでは**先に必要データをバックアップしてから**の方が安全です。

重要なのは、`chkdsk` は**SSDそのものの健康診断ではありません**。NTFSなどのファイルシステムの整合性確認です。

### 4. SSDメーカー純正ツール

SSDメーカーが分かれば、

- Samsung Magician
- Western Digital Dashboard
- Crucial Storage Executive
- Intel系ツール
- KIOXIA系ツール

などでもSMART情報を確認できます。

ただし会社PCなら、これもインストール制限に引っかかる可能性があります。

---

今回なら、**新しいソフトを入れずに**

1. `Get-PhysicalDisk`
2. `Get-StorageReliabilityCounter`
3. イベントビューアーのDisk系エラー

この3つを先に確認するのが適切です。

特にCF-LVの問題調査なら、まずPowerShellで上の2コマンドを実行して、その結果を貼ってもらえれば読み解けます。

---

Get-PhysicalDisk | Get-StorageReliabilityCounter | Format-List *