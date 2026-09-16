---
title: VS Codeのユーザーインストールとシステムインストール
aliases:
  - VS Codeのユーザーインストールとシステムインストール
  - vs codeのインストール場所
  - VS Codeのインストール場所
type: permanent
created: 2026-06-20T17:01:49+09:00
updated: 2026-09-17T07:42:09+09:00
id: 20260620-170149
permalink:
draft: false
tags:
  - ai-generated
---
# VS Codeのユーザーインストールとシステムインストール

Windows版VS Codeには、個人アカウント向けのUser setupと、PCの全ユーザー向けのSystem setupがある。通常は、管理者権限を必要とせず更新もしやすいUser setupを選ぶ。

|方式|既定の場所|対象|管理者権限|更新時の特徴|
|---|---|---|---|---|
|User setup|`%LOCALAPPDATA%\Programs\Microsoft VS Code`|現在のWindowsアカウント|不要|通常は最も円滑に更新できる|
|System setup|`%ProgramFiles%\Microsoft VS Code`|PCの全ユーザー|必要|更新にも昇格権限が必要|
|ZIP版|展開した任意の場所|展開先を使う人|不要|更新は手動|

VS Code公式は、ほとんどの人にはUser setupを推奨しており、既定で`C:\Users\<ユーザー名>\AppData\Local\Programs\Microsoft VS Code`へ入るとしている。[WindowsへのVS Codeインストール](https://code.visualstudio.com/docs/setup/windows)

## 選択の基準

```text
自分のアカウントだけで使い、管理者権限を使いたくない
    → User setup

共用PCで全アカウントに同じVS Codeを提供し、管理者が更新を管理する
    → System setup

持ち運び・検証用で、インストーラーを使えない
    → ZIP版。ただし更新は自分で行う
```

>[!warning]
>インストール先の変更は制限回避の手段ではないため、会社などの制限が設けられた環境では、ソフトウェア導入の許可、拡張機能の許可、更新方針を確認する



インストール後にコンソールを開き直すと、現在のフォルダーをVS Codeで開く次のコマンドが使える場合がある。

```bat
code .
```

これはUser setupが`PATH`へ追加する機能に基づく。利用できない場合は、再ログオンまたはインストール設定を確認する。
