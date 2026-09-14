---
title: WindowsでSMB共有フォルダを設定する方法
aliases:
  - SMB共有フォルダの設定方法
  - WindowsでSMB共有を作成する方法
type: permanent
created: 2026-08-19T16:04:31+09:00
updated: 2026-09-15T07:16:38+09:00
id: 20260819-160431
permalink:
draft: false
tags:
  - ai-generated
---
# WindowsでSMB共有フォルダを設定する方法

このノートは、Windows PC上の特定フォルダーをSMB共有として公開する設定手順である。利用者の接続は[SMB共有フォルダへ接続する方法](SMB共有フォルダへ接続する方法.md)、既存共有の確認・運用は[WindowsのSMB共有を管理する方法](WindowsのSMB共有を管理する方法.md)を参照する。

> [!warning] 共有を作る前の判断
> 共有はネットワーク上の他者にフォルダーへの入口を作る操作である。会社PC・管理対象PCでは、社内ITまたは保守ルールで許可されていること、共有するデータ・利用者・保存場所を先に確認する。

## 設定前に決めること

|項目|決める内容|
|---|---|
|共有するフォルダー|個人プロファイル全体ではなく、用途を限定したフォルダー|
|共有名|用途が分かり、既存名と重複しない名前|
|利用者|個別アカウントまたは管理されたグループ|
|権限|読み取りのみ、または作成・変更が必要か|
|ネットワーク|信頼できるプライベート／社内ネットワークか|

共有のアクセス許可と、フォルダーのNTFSアクセス許可は別に存在する。共有を作っただけで誰でも書き込めるようにせず、利用者に必要な最小限の権限だけを与える。匿名・ゲストでの公開や、SMB1を有効にしての互換性回避は行わない。MicrosoftもSMB1には重大な脆弱性があるため使用しないよう推奨している。[SMBv1/2/3の検出と設定（Microsoft Learn）](https://learn.microsoft.com/windows-server/storage/file-server/troubleshoot/detect-enable-and-disable-smbv1-v2-v3)

## エクスプローラーで共有を作る

1. 共有したいフォルダーを作成または選択する。
2. フォルダーを右クリックし、`プロパティ`を開く。
3. `共有`タブから共有設定を開き、共有する利用者またはグループを追加する。
4. 利用目的に必要な権限だけを選ぶ。
5. 共有名と接続先のUNCパスを記録する。
6. 利用者側の別アカウントまたは別端末で、接続と読み書きの範囲を確認する。

ネットワーク探索とファイル・プリンター共有が無効で、組織の方針上オンにしてよい場合は、`設定 → ネットワークとインターネット → ネットワークの詳細設定 → 共有の詳細設定`で、現在利用しているプライベート／社内ネットワークの設定を確認する。Windowsはコンテンツの共有時に必要なファイアウォール規則を有効にすることがあるが、ポートを手動で広く開放しない。[Windowsの小規模ネットワーク設定（Microsoft Learn）](https://learn.microsoft.com/troubleshoot/windows-client/networking/set-up-your-small-business-network)

## 接続先を確認する

共有元PCのIPv4アドレスを確認する場合は、コマンドプロンプトで次を実行する。

```bat
ipconfig
```

Wi-Fiと有線LANが併用されている場合は、実際に利用するネットワークアダプターのIPv4アドレスを確認する。接続側のWindowsエクスプローラーでは、次の形式を使う。

```text
\\共有元PC名\共有名
\\共有元PCのIPv4アドレス\共有名
```

## PowerShellで作成する場合

PowerShellの`New-SmbShare`でも共有を作成できる。これは設定方法の例であり、このノートで実行した記録ではない。会社PCではGUI・PowerShellのどちらを使うかではなく、共有の目的・権限・運用責任が承認されていることを優先する。

```powershell
New-SmbShare -Name 'Media_Inbox' -Path 'E:\MediaArchive\00_Inbox' -ChangeAccess 'PC名\共有利用者'
```

`New-SmbShare`はフォルダーをSMB共有として公開するコマンドであり、共有名・パス・読み取り／変更／フルアクセスの対象を指定できる。[New-SmbShare（Microsoft Learn）](https://learn.microsoft.com/powershell/module/smbshare/new-smbshare)

作成後は、共有名、実フォルダーパス、許可した利用者、権限、作成日、管理者を記録する。利用者が不要になったら、共有を残したまま放置せず、アクセス許可または共有そのものを見直す。
