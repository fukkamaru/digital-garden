---
title: Windowsユーザープロファイル障害・SSD不良ブロック調査まとめ
aliases:
  - Windowsユーザープロファイル障害・SSD不良ブロック調査まとめ
type: literature
created: 2026-08-22T23:09:40+09:00
updated: 2026-09-15T02:26:48+09:00
id: 20260822-230940
permalink:
draft: true
tags:
  - field
  - ai-generated
---
# Windowsユーザープロファイル障害・SSD不良ブロック調査まとめ

Panasonic Let's note CF-LVで、既存の`user`プロファイルを読み込めず一時プロファイルでログオンした事例の記録。直接観測した事実、実行した操作、そこから変わった判断を分けて残す。

結論は、`ProfileList`の`.bak`は根本原因ではなく、`NTUSER.DAT`の読み取り時に起きたCRCエラーと同時刻帯のDisk Event ID 7を根拠に、ストレージI/O障害が先行し、プロファイル読み込み失敗が二次的に発生した可能性が最も高い、というものだった。

> [!warning] 対象の限定
> これはCF-LVの一事例である。4月のLIFEBOOK AシリーズでBIOSからSSDが消えた事例とは、業務端末・発生時期・症状・対応経緯が異なるため、統合しない。

## 事象と最終判断

|項目|確認できたこと|
|---|---|
|端末|Panasonic Let's note CF-LVシリーズ（完全な型番・SSD型番は未確認）|
|利用環境|粉塵が舞う充填室|
|最初の症状|「アカウントにサインインできません」と表示され、デスクトップや共有設定が消えたように見えた|
|直接の観測|`C:\Users\user\NTUSER.DAT`のCRCエラー、同時刻帯のDisk Event ID 7が100件以上、翌日にも継続|
|復旧方針|同一ストレージ上で旧プロファイルを復旧・新規本番プロファイルを構築する方針は中止。データ保全とストレージ交換を優先|
|未確定|SSD本体・接続系統・基板のどこが原因か、粉塵との直接因果、SMARTと正確なSSD規格|

調査上の補助ノートは、[ストレージ関連エラー イベントID7](ストレージ関連エラー イベントID7.md)、[ユーザープロファイルを読み込めなくなる原因候補](ユーザープロファイルを読み込めなくなる原因候補.md)、[ユーザープロファイルを復旧するか、諦めるかの判断基準](ユーザープロファイルを復旧するか、諦めるかの判断基準.md)へ分けた。

## 観測した状態

### 一時プロファイルであることの確認

`C:\Users`には、元のデータが残る`C:\Users\user`と、現在利用中の`C:\Users\TEMP`が存在した。`C:\Users\user\Desktop`には本来のデスクトップファイルも残っていたため、この時点では「元データのすべてが消えた」とは判断しなかった。

使用中のプロファイルは、cmdで次を実行して確認した。

```bat
echo %USERPROFILE%
```

出力は次のとおりだった。

```text
C:\Users\TEMP
```

### ProfileListの観測

読み取り専用の確認として、次を実行した。

```bat
reg query "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList" /s /v ProfileImagePath
```

その時点では、同じSIDについて通常キーが`C:\Users\TEMP`、`.bak`キーが`C:\Users\user`を指していた。

```text
S-1-5-21-2339841069-1987575619-3461696281-1001
    ProfileImagePath = C:\Users\TEMP

S-1-5-21-2339841069-1987575619-3461696281-1001.bak
    ProfileImagePath = C:\Users\user
```

`State`は通常側が`0x4a04`、`.bak`側が`0x8000`だった。`RefCount`は両方に存在しなかったため、欠落を異常とみなさず、新規作成もしなかった。

## 実施した操作と結果

### 1. 書き換え前のデータ・レジストリ保全

`C:\Users\user`を、コピー可能な範囲でSMB経由で別端末へ退避した。対象はDesktop、Documents、Pictures、Downloads、業務ファイル、コピー可能なAppData内データである。使用中・アクセス拒否・システム保護・ジャンクションでコピーできないものについては、権限を変更して強行しなかった。このバックアップはユーザーデータの退避であり、完全なWindowsプロファイルの複製ではない。

次に、手動修復前の`ProfileList`をエクスポートした。最初にPublic Documentsを保存先にしたが、通常のcmdと管理者cmdのいずれでも「ファイルに書き込めません」となった。

```bat
reg export "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList" "C:\Users\Public\Documents\ProfileList_backup_20260820.reg"
```

保存先を`C:\`に変えたところ成功した。

```bat
reg export "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\ProfileList" "C:\ProfileList_backup_20260820.reg"
```

後に`C:\ProfileList_backup_20260820_1337.reg`も作成し、これらのレジストリバックアップもSMB経由で別端末へ退避した。

### 2. システムの復元

手動でレジストリを書き換える前に、唯一存在した復元ポイント`2026/08/19 07:30:38（Windows Update）`へシステムの復元を実施した。「影響を受けるプログラムの検出」で見えた差分はMicrosoft Edgeのバージョン変更程度だった。

結果として、`user`でログオンすると引き続き一時プロファイルになり、問題は改善しなかった。後の時系列確認により、この復元ポイントより前から障害があったとする当初の推測は採用しなかった。

### 3. 独立した修復用管理者の作成

TEMPプロファイルから直接`user`を修復するのを避け、パスワード付きのローカル管理者`repairadmin`を作成し、管理者権限を付与した。初回ログオン後に次を実行し、独立したプロファイルが使われていることを確認した。

```bat
echo %USERPROFILE%
```

```text
C:\Users\repairadmin
```

### 4. ProfileListの手動修復を一度だけ試行

`user`にログオンしていない状態では、対象SIDの`.bak`キーと`repairadmin`のキーだけが存在し、通常キーは存在しなかった。`user`へログオンすると通常キー（`C:\Users\TEMP`）と`.bak`キー（`C:\Users\user`）が再びできることも確認した。

`repairadmin`から、対象SIDキーの末尾にある`.bak`を外し、同キーの`State`を`0x8000`から`0`へ変更した。ここで変更したのは`ProfileList`内の対象SIDキー名と`State`値だけであり、`RefCount`は作成・変更していない。`NTUSER.DAT`を直接編集した操作もしていない。

再起動して`user`へログオンすると、同じサインインエラーが再発した。`repairadmin`で確認すると、通常キーは再びTEMP、`.bak`側は`C:\Users\user`へ戻っていた。

この結果から、`.bak`と`State`の不整合を直すだけでは復旧せず、Windowsが元プロファイルを読み込もうとして失敗した結果としてTEMPと`.bak`を再生成している、と判断した。以後、この変更を繰り返さない方針にした。

## ログとファイルの調査

### User Profile Serviceと`NTUSER.DAT`

イベントビューアーの`Windows ログ → Application`でUser Profile ServiceのイベントID 1502、1508、1509、1511、1515を確認した。直近の1508には`(null)\ntuser.dat`と「指定されたパスが見つかりません」があり、プロファイルのレジストリハイブ周辺を調べる必要があると判断した。

`repairadmin`から次を実行した。

```bat
dir /a "C:\Users\user\NTUSER.DAT"
dir /a "C:\Users\user\NTUSER*"
```

調査時点では`NTUSER.DAT`本体は見つからず、`ntuser.dat.log1`、`ntuser.dat.log2`、トランザクションログ類、`ntuser.ini`は存在した。これは調査時点の状態である。過去のイベントをさかのぼると、8月19日には`NTUSER.DAT`が存在しながら読み取りに失敗していたことが分かった。

### シャドウコピー

過去の`NTUSER.DAT`を救出できるか確認するため、次を実行した。

```bat
vssadmin list shadows
```

確認できたシャドウコピーは8月20日以降の4件だけだった。8月19日には障害が起きていたため、正常な`NTUSER.DAT`の救出元としての価値は低いと判断した。

### 時系列で確定した観測

|時点|観測・操作|判断への影響|
|---|---|---|
|2026/08/18|業務時間中は正常に使用。User Profile Serviceも正常に読み込んだ|正常状態の基準|
|2026/08/19 07:30:38|Windows Updateの復元ポイントが作成された|更新と発生の近さは確認したが、原因とは確定しない|
|2026/08/19 17:17頃|User Profile Service 1508で`C:\Users\user\NTUSER.DAT`のCRCエラー|ファイルは存在したが読み取れなかったことを示す|
|ほぼ同時刻|Disk Event ID 7: `\Device\Harddisk0\DR0`に不良ブロック。100件以上、翌日にも継続|ストレージI/O障害を最有力の原因候補とした|
|2026/08/20|バックアップ、復元、ProfileList修復を試行|レジストリ修復のみでは回復しないことを確認|

```text
ストレージ読み取り障害の観測
    ↓
NTUSER.DAT のCRCエラー
    ↓
User Profile Serviceが元プロファイルを読み込めない
    ↓
ProfileList の .bak 化と TEMP プロファイル
```

この因果のうち、最初の読み取り障害がSSD本体・接続系・基板のどこで起きたかは未確定である。一方で、`.bak`は読み込み失敗より後に生じた状態であり、単独の根本原因として扱わない。

## 以後の運用判断

当初は新しい本番ユーザーを同じ端末内に作り、旧`user`からデータを移す案を考えた。しかし、同じ`Harddisk0`上でEvent ID 7が継続し、実ファイルでCRCエラーも観測されたため、このストレージ上で新しい本番環境を構築する案は中止した。`repairadmin`は緊急用・調査用として残し、本番利用にはしない。

粉塵が舞う充填室で使われていたことは、冷却・接点・基板汚染などのリスク要因として保守時に確認すべき情報である。ただし、粉塵が今回の直接原因だったとは証明していない。

### 行わないこと

- 元の`user`プロファイルを繰り返し修復しない
- `.bak`や`State`を繰り返し変更しない
- `NTUSER.DAT.LOG1/LOG2`を`NTUSER.DAT`へ単純に改名しない
- `C:\Users\user`、`C:\Users\TEMP`、`C:\Users\repairadmin`、ProfileListバックアップを削除しない
- データ保全より先に`chkdsk C: /r`を実行しない
- 同一ストレージ上に新しい本番プロファイルを作らない

### 次に行うべきこと

1. 別端末または別媒体へ保全したデータを実際に開き、破損の有無を確認する。
2. CF-LVの完全な型番、搭載SSDの型番・規格、SMARTまたはメーカー診断情報を確認する。
3. 保守条件を確認して、ストレージ交換・内部清掃・接続系統の点検を判断する。
4. 新ストレージを導入する場合は、旧SSDのクローンではなく、クリーンなWindows環境と新しい本番ユーザーを基本案とする。
5. データはDesktop、Documents、Downloads、Pictures、業務ファイルを中心に選択して戻す。`NTUSER.*`、AppData全体、古いProfileList、TEMPプロファイルは一括移植しない。

`chkdsk`、PowerShell、イベントビューアーを含む確認方法は、[ハードディスクやSSDの健康状態を見るコマンド入力](ハードディスクやSSDの健康状態を見るコマンド入力.md)に整理した。`chkdsk`はファイルシステム確認・修復のためのものであり、実行結果だけでストレージI/O経路の健全性を確定しない。
