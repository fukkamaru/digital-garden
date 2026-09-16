---
title: ハードディスクやSSDの健康状態を見るコマンド入力
aliases:
  - ハードディスクやSSDの健康状態を見るコマンド入力
type: literature
created: 2026-08-22T23:01:28+09:00
updated: 2026-09-15T02:01:05+09:00
id: 20260822-230128
permalink:
draft: true
tags:
  - ai-generated
---
このノートは、会社PCで新しいソフトをインストールしにくい場合に、Windows標準機能で確認する候補を整理したものである。ここに示すコマンドは、実行候補または確認方法であり、このノート単体では実行結果を記録していない。

CF-LVで実際に行った操作、コマンドの出力、イベントの時刻、レジストリ変更の経緯は、[Windowsユーザープロファイル障害・SSD不良ブロック調査まとめ](Windowsユーザープロファイル障害・SSD不良ブロック調査まとめ.md)を正本とする。

## 先に区別すること

- `Get-PhysicalDisk`、`Get-StorageReliabilityCounter`、イベントビューアー、`chkdsk C:`は、状態を確認するための候補である。
- `chkdsk C: /f`と`chkdsk C: /r`は修復を伴う。ストレージ障害が疑われる場合は、先にデータを保全し、実行の可否を判断する。
- 画面上の正常表示だけで、ストレージI/Oエラーがなかったとは結論づけない。

## Windows標準で確認する方法

会社PCで**勝手にソフトをインストールしにくい**なら、まずWindows標準機能だけで確認できる範囲を把握する。

特におすすめは **PowerShell + イベントビューアー** です。

### 1. PowerShellでSSD/HDDの状態を確認する

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

### 2. イベントビューアーを確認する

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

### 3. CHKDSKでファイルシステムを確認する

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

### 4. SSDメーカー純正ツールを使う場合

SSDメーカーが分かれば、

- Samsung Magician
- Western Digital Dashboard
- Crucial Storage Executive
- Intel系ツール
- KIOXIA系ツール

などでもSMART情報を確認できます。

ただし会社PCなら、これもインストール制限に引っかかる可能性があります。

---

## このノート内での推奨順序

新しいソフトを入れずに確認する場合は、次の順序を候補とする。

1. `Get-PhysicalDisk`
2. `Get-StorageReliabilityCounter`
3. イベントビューアーのDisk系エラー

この3つを先に確認するのが適切です。

特にCF-LVの問題調査では、コマンドの結果だけで判断せず、同じ時刻帯のDisk系イベント、User Profile Serviceイベント、データ保全の状況と突き合わせる必要がある。

---

## 追加確認用のコマンド

次のコマンドは、表示される項目を詳しく確認したい場合の候補として記録する。

```
Get-PhysicalDisk | Get-StorageReliabilityCounter | Format-List *
```
