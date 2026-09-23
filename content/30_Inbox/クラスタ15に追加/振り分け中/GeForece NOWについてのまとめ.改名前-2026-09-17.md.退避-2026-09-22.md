---
title: GeForece NOWについてのまとめ
aliases:
  - GeForece NOWについてのまとめ
type:
created: 2026-09-17T07:01:50+09:00
updated: 2026-09-23T18:45:30+09:00
id: 20260917-070150
permalink:
draft: true
tags:
  - ai-generated
---

## このメモの目的と時点

GeForce NOW（GFN）へ接続して使うPCゲームストアの違いを、購入先とライブラリ運用の判断に使うためのメモ。対応状況・同期・自動ログインは**2026年6〜12月時点の調査記録**であり、現在の仕様を保証しない。

## GFNの役割

GFNはゲームを販売するストアでも、ゲームを定額提供するカタログでもない。Steam、Xbox、Epicなどで持っている対象ゲームを、NVIDIAのクラウドPCで動かすサービスである。

|サービス|主な役割|
|---|---|
|Steamなどのゲームストア|ゲームを購入・所有する場所|
|Xbox Game Passなど|対象ゲームを契約中だけ遊べるカタログ|
|**GeForce NOW**|対象ゲームをクラウド上のPCで実行する環境|

対応ストアであっても、そのストアの全ゲームが遊べるわけではない。**ゲームごとにGFN対応であること**が必要。

## 接続先ストアの比較

|プラットフォーム|GFNとの相性|ライブラリ同期|自動ログイン|主な強み|主な注意点|
|---|---|---|---|---|---|
|**Steam**|◎|○|△|対応作品、セール、PC移行のしやすさ|同期にSteam側プロフィール等の公開設定が必要|
|**Xbox／Microsoft Store**|◎|○|○|PC Game Passと連携できる|Game Pass作品は配信終了で遊べなくなる。全作品がGFN対応ではない|
|**Ubisoft Connect**|◎|○|○|Ubisoft作品とUbisoft+に強い|Ubisoft中心。Steam購入版はUbisoft側の同期対象とは別扱い|
|**Battle.net**|◎|○|○|Blizzard／Activision作品向け|対象メーカーが限定的|
|**Epic Games Store**|○|×※|△|無料配布、Epic限定作品|一般ゲームはSteamのような一括同期ではない|
|**GOG**|○|×|△|DRMフリー、購入物としての自由度|GFN対応作品と連携機能が限られる|
|**EA app**|○|×|△|EA Play／EA Play Pro|事前にライブラリ追加が必要な場合がある|
|**Gaijin.net**|○|○|○|War Thunderなど|対象作品が限定的|

※Epicのアカウント連携はあるが、Steamのように所有ゲーム全体をGFNの「My Library」へ同期する機能ではない。Fortnite系では自動ログインなどの統合がある。

## ストア別の使い分け

### Steam：PC購入の基本軸

GFNを使わなくなった後もPCで扱いやすく、対応作品・セール・他PCへの移行という点で基本の購入先にしやすい。GFNの所有ゲーム同期には、Steamプロフィール・ゲーム詳細・プレイ時間を公開し、新規購入後に再同期する必要があるという注意点がある。

GFN上のSteam接続は所有ゲームの同期用であり、ゲーム起動時のSteamログインと完全に同じものではない。複数Steamアカウントを扱う場合は、同期と実際の起動アカウントを混同しない。

### Xbox／Microsoft Store：Game Passを使うときの軸

Microsoft Storeで購入した対応PCゲームに加え、**PC Game Pass／Game Pass UltimateのうちGFN対応タイトル**をストリーミングできる。Xboxアカウントのライブラリ同期と自動サインインに対応する。

ただし、Game Passの対象ゲームは所有物ではない。契約終了またはカタログ退出で遊べなくなり、さらにGame Pass全タイトルがGFNで遊べるわけでもない。

### Ubisoft Connect／Battle.net：メーカー作品を遊ぶ軸

Ubisoft作品を多く遊ぶならUbisoft Connect／Ubisoft+、Diablo・Overwatch・Call of Duty系を中心に遊ぶならBattle.netが自然。Battle.netは2025年12月から正式なアカウント連携、ライブラリ同期、自動サインインに対応したという調査記録がある。

Steamで購入したUbisoft作品は、GFNではSteam版として扱われるため、Ubisoft側の同期対象とは別になる。購入ストアを決める際は、どのストアで所有を管理したいかを先に決める。

### Epic／GOG／EA app：補助的に使う軸

- **Epic**：無料配布や限定作品向け。GFN対応作なら、無料で取得した作品をクラウドで遊べることがある。
- **GOG**：DRMフリーによる所有の自由度を重視する場合に向く。GFN統合はSteamほど強くない。
- **EA app**：EA PlayやEAゲーム中心なら候補。ただしGFN連携・アカウント切替の手間はSteam／Xboxより残る。

## 購入先の基本ルール

|目的|第一候補|
|---|---|
|通常のPCゲーム購入|**Steam**|
|月額で多く遊ぶ|**PC Game Pass／Xbox**|
|Ubisoft作品を中心に遊ぶ|Ubisoft Connect／Ubisoft+|
|Blizzard／Activision作品|Battle.net|
|無料配布・Epic限定作|Epic Games Store|
|DRMフリーでの所有|GOG|
|EAゲーム中心|EA app／EA Play|

運用の基本は、**原則Steam、Game Passの対象はXbox、無料配布はEpic、メーカー専用作品は各専用ストア**。無目的に購入先を分散させず、例外があるときだけ使い分ける。

## アカウント運用上の注意

ゲームの所有権は各ストア側にあり、GFNアカウントそのものにはない。ただし、接続可能か・同期できるか・起動時に自動ログインできるかはストアごとに違う。アカウント分離や切替を考えるなら、割引の対象資格を推測するためではなく、ライブラリとログイン手順を混乱させない目的で管理する。
