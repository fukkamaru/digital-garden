---
title: PowerToysがWindowsに標準搭載されない理由
aliases:
  - PowerToysがWindowsに標準搭載されない理由
  - MicrosoftがWindowsにPower Toysをプリインストールしない理由
  - PowerToysがプリインストールされない理由
type: permanent
created: 2026-05-17T14:58:15+09:00
updated: 2026-11-11T11:24
id: 20260517-145815
permalink:
draft: false
tags:
---

PowerToysは、Windowsの生産性とカスタマイズを拡張する、Microsoftの無料オープンソースユーティリティ群である。Keyboard Manager、PowerRename、FancyZonesなど、多数の機能を個別に有効化できる。[PowerToysの概要（Microsoft Learn）](https://learn.microsoft.com/windows/powertoys/)

![[chatgpt.png|25x25]]
PorwerToysについて確認できる事実
- Windowsへ別途インストールするユーティリティ群である。
- Microsoft Store、GitHub、WinGetなどから導入できる。
- ユーザー単位とPC全体向けのインストール形態がある。
- 機能ごとに有効・無効を切り替えられる。
- 一部の機能は、管理者として実行するアプリと連携するために昇格権限を必要とすることがある。

[PowerToysのインストール（Microsoft Learn）](https://learn.microsoft.com/fil-ph/windows/powertoys/install)


「なぜ標準搭載されないか」は推論である
- 全利用者向けの規定機能にしない
	- キー再割当て、環境変数、レジストリ操作補助など、全員に日強でない機能を多数含む
- 組織管理と衝突し得る
	- 企業PCではソフトウェア導入、常駐機能、権限昇格、キーボード設定が管理対象になり得る
- 機能を独立して更新した
	- オープンソースのユーティリティ群として、機能を追加・改善・無効化しやすい


Keyboard Managerを使う場合は、[Keyboard ManagerでCaps Lockを再割り当てる方法](keyboard-manager-caps-lock-remapping.md)を参照する。複数ファイルの名称整理には[how-to-bulk-rename-files-with-powerrename](how-to-bulk-rename-files-with-powerrename.md)がある。
