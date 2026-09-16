---
title: ハードディスクやSSDの健康状態を見るコマンド入力
aliases:
  - ハードディスクやSSDの健康状態を見るコマンド入力
type: literature
created: 2026-08-22T23:01:28+09:00
updated: 2026-09-17T07:42:09+09:00
id: 20260822-230128
permalink:
draft: false
tags:
  - ai-generated
---
# ハードディスクやSSDの健康状態を見るコマンド入力

このノートは、会社PCで新しいソフトを追加しにくい場合に、Windows標準機能でストレージの状態を確認する候補をまとめたものだ。ここにあるコマンドは、実行候補または確認方法であり、このノート自体はCF-LVでの実行結果を記録していない。

CF-LVで実際に行った操作、コマンドの出力、イベントの時刻、レジストリ変更の経緯は、[Windowsユーザープロファイル障害・SSD不良ブロック調査まとめ](windows-profile-ssd-read-errors.md)を正本とする。

## 最初にデータ保全と操作の種類を分ける

ストレージ障害が疑われるときは、診断を始める前に、必要なデータを別媒体または別端末へ保全する。確認コマンドと修復コマンドは同じ扱いにしない。

|分類|候補|位置付け|
|---|---|---|
|状態確認|`Get-PhysicalDisk`、`Get-StorageReliabilityCounter`、イベントビューアー、`chkdsk C:`|端末の状態や記録を確認する|
|修復を伴う操作|`chkdsk C: /f`、`chkdsk C: /r`|ファイルシステムへ変更を加えるため、データ保全後に実行の可否を判断する|

画面上の健康状態が正常であることだけで、ストレージI/Oエラーが起きていないとは結論づけない。

## 1. PowerShellでWindowsの認識状態を確認する

PowerShellを管理者として開き、まず物理ディスクの種類、健康状態、動作状態を確認する。

```powershell
Get-PhysicalDisk | Format-Table FriendlyName, MediaType, HealthStatus, OperationalStatus, Size
```

表示例は次のようになる。

```text
FriendlyName        MediaType  HealthStatus  OperationalStatus
-------------       ---------  ------------  -----------------
SAMSUNG MZV...      SSD        Healthy       OK
```

`HealthStatus`には`Healthy`、`Warning`、`Unhealthy`などが表示される。`Warning`や`Unhealthy`はWindowsが異常を認識している手がかりになるが、`Healthy`だけで問題が存在しないと断定しない。

対応しているSSDやドライバーでは、次のコマンドで追加情報を取得できる場合がある。

```powershell
Get-PhysicalDisk | Get-StorageReliabilityCounter
```

取得できる項目には、`Temperature`、`PowerOnHours`、`ReadErrorsTotal`、`WriteErrorsTotal`、`Wear`、`StartStopCycleCount`などがある。項目が空欄の場合は、Windows標準APIから値を取得できない可能性を示すだけで、正常の証明ではない。

詳細表示が必要な場合は次を使う。

```powershell
Get-PhysicalDisk | Get-StorageReliabilityCounter | Format-List *
```

## 2. イベントビューアーで時系列を確認する

イベントビューアーの **Windowsログ → システム** を開き、障害が起きた時刻帯の記録を確認する。主な確認対象は次のソースである。

- `Disk`
- `Ntfs`
- `stornvme`
- `storahci`
- `iaStorA`
- `iaStorAC`
- `volmgr`

イベントIDでは、次のような記録を確認候補にする。

|イベントID|確認する内容|
|---:|---|
|7|不良ブロックとして記録されたアクセス異常|
|51|ページング操作中のエラー|
|129|ストレージデバイスへのリセット|
|153|I/O操作の再試行|
|157|ディスクが突然取り外された記録|

CF-LVの事例では、Disk系の記録をUser Profile Serviceの記録と同じ時刻帯で確認することが重要だった。イベントログの単発の表示ではなく、発生回数、継続性、データ破損の有無を合わせて見る。

## 3. CHKDSKでファイルシステムを確認する

`chkdsk`は、NTFSなどファイルシステムの整合性を確認するためのコマンドであり、SSDそのものの健康状態を診断するものではない。

まず状態を確認する候補は次である。

```powershell
chkdsk C:
```

次の二つは修復を伴うため、障害が疑われるストレージでは、先に必要なデータを保全する。

```powershell
chkdsk C: /f
```

```powershell
chkdsk C: /r
```

ファイルシステムに問題がないという結果と、ストレージの読み書き経路に問題がないという結論は別である。イベントログや自己診断情報も合わせて判断する。

## 4. メーカー純正ツールを使う場合

SSDメーカーと社内ルールを確認できる場合は、メーカー純正ツールでS.M.A.R.T.情報を確認できることがある。候補には、Samsung Magician、Western Digital Dashboard、Crucial Storage Executive、Intel系ツール、KIOXIA系ツールなどがある。

ただし、会社PCではインストール制限や保守契約が関わる場合がある。許可なく追加せず、必要なら保守窓口や管理者へ確認する。[ハードディスクやSSDの健康状態を見る定番ソフト](ハードディスクやSSDの健康状態を見る定番ソフト.md)は、自己診断情報を表示する補助ソフトの位置付けを扱う。

## このノートを使う順序

```text
必要なデータを保全する
    ↓
PowerShellでWindowsの認識状態を確認する
    ↓
イベントビューアーで同時刻帯の記録を確認する
    ↓
ファイルシステム確認・メーカー資料・保守対応の要否を判断する
```

この順序は、原因を自動的に確定する手順ではない。実際の症状、端末の業務上の重要性、保守条件に応じて、次に行う操作を決める。
