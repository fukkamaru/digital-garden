---
title: GeForece NOWについてのまとめ
aliases:
  - GeForece NOWについてのまとめ
type:
created: 2026-09-17T07:01:50+09:00
updated: 2026-09-23T22:00:58+09:00
id: 20260917-070150
permalink:
draft: true
---
GNFについて質問。

接続できるプラットフォームについて、それぞれの違いや特徴、メリデリはありますか？

33s考えました

はい。ここでは「GeForce NOW（GFN）から接続して遊べるゲームストア／アカウント」の違いとして整理します。

結論からいうと、**今後どこでゲームを買うかまで含めるなら、Steamを基本にするのが最も無難**です。ただし、Game Passを使うならXbox、Ubisoft作品ならUbisoft Connect、Blizzard系ならBattle.net、無料配布狙いならEpic、と役割がかなり違います。

NVIDIAは現在、Ubisoft Connect、Battle.net、EA app、GOG、Epic Games Store、Steam、XboxなどのPCゲームストアをGFNでサポートしています。[NVIDIA](https://www.nvidia.com/ja-jp/geforce-now/faq/?utm_source=chatgpt.com)

|プラットフォーム|GFNとの相性|ライブラリ同期|自動ログイン|主な強み|主な弱み|
|---|---|---|---|---|---|
|**Steam**|◎|○|△|対応ゲームが非常に多い、セール、他PCでも使いやすい|GFN同期にSteam側の公開設定が必要|
|**Xbox / Microsoft Store**|◎|○|○|**PC Game Pass**が使える|Game Pass終了・配信終了で遊べなくなる場合あり|
|**Ubisoft Connect**|◎|○|○|Ubisoft作品との統合が非常に強い、Ubisoft+対応|Ubisoft中心|
|**Battle.net**|◎|○|○|Diablo、Overwatch、CoD系に便利|対象メーカーが限定的|
|**Epic Games Store**|○|×※|△|無料配布が強い、Epic独占タイトル|一般ゲームの同期・SSOがSteam等より弱い|
|**GOG**|○|×|△|DRMフリー、購入後の自由度が高い|GFN対応作品が限られ、連携も弱い|
|**EA app**|○|×|△|EA Play / EA Play Pro利用可|GFN連携がやや面倒|
|**Gaijin.net**|○|○|○|War Thunder等を使うなら便利|対象作品がかなり限定|

※Epicのアカウント連携はありますが、SteamのようにEpic所有ゲーム全体をGFNの「My Library」へ同期する機能ではありません。Fortnite系では自動ログインに対応しています。[NVIDIAサポート](https://nvidia.custhelp.com/app/answers/detail/a_id/5176/kw/streaming%20video?utm_source=chatgpt.com)

### それぞれを見ると

**Steamは「GFNを使う前提でも、使わなくなった後でも扱いやすい」のが最大のメリットです。** GFN対応ゲームについて所有ライブラリを同期できます。ただし2026年6月時点では、同期するためにSteamプロフィール・ゲーム詳細・プレイ時間を公開状態にする必要があります。また、新しくゲームを買った際には再同期が必要です。[NVIDIAサポート](https://nvidia.custhelp.com/app/answers/detail/a_id/5041/kw/game%20resolution?utm_source=chatgpt.com)

少し特殊なのがログインです。GFNの「Steam接続」は基本的に**所有ゲームを探して同期するための接続**であり、実際のSteam起動時のアカウントとは別扱いです。起動時にSteamへログインし、「Remember me」で保持する仕組みです。したがって、複数Steamアカウントを扱う場合は少し注意が必要です。[NVIDIAサポート](https://nvidia.custhelp.com/app/answers/detail/a_id/5742/kw/compatible%20games/related/1?utm_source=chatgpt.com)

---

**XboxはGFNとの組み合わせではかなり強力です。** Microsoft Storeで購入した対応PCゲームに加えて、**PC Game Pass / Game Pass Ultimate内のGFN対応タイトル**をストリーミングできます。XboxアカウントをGFNに接続すると、ライブラリ同期と自動サインインにも対応します。[NVIDIAサポート](https://nvidia.custhelp.com/app/answers/detail/a_id/5462/kw/minimize/related/1?utm_source=chatgpt.com)

その代わり、

> Game Passに入っているゲーム ＝ 永久に自分のゲーム

ではありません。Game Passから抜ければ基本的にはアクセスできなくなります。また、Game Passの全タイトルがGFNに来るわけではなく、GFN側でゲームごとに対応作業が必要です。[NVIDIAサポート](https://nvidia.custhelp.com/app/answers/detail/a_id/5462/kw/minimize/related/1?utm_source=chatgpt.com)

なので、

**大量のゲームを安く遊ぶ → Xbox / Game Pass**  
**ゲームを購入して長期保有 → Steam**

という区別がかなり明確です。

---

**Ubisoft Connectは、対応の深さでは最上位クラスです。** Ubisoft Connectで購入したゲームはもちろん、Epic Games Storeで購入してUbisoftアカウントと紐付けたUbisoft作品も、GFNライブラリ同期の対象になります。Ubisoft+作品にも対応します。[NVIDIAサポート](https://nvidia.custhelp.com/app/answers/detail/a_id/5286/kw/gfn%20xbox?utm_source=chatgpt.com)

ただし面白い例外があり、

**Steamで購入したUbisoftゲームはUbisoftのGFNライブラリ同期対象になりません。**

プレイ自体は可能ですが、Steam版として扱われるためです。[NVIDIAサポート](https://nvidia.custhelp.com/app/answers/detail/a_id/5288/kw/11/related/1?utm_source=chatgpt.com)

したがってAssassin's Creedなどを大量に遊ぶ人ならUbisoft Connect / Ubisoft+との相性が非常に良いです。

---

**Battle.netも現在はかなり完成度が高いです。** 2025年12月からGFNとの正式なアカウントリンクによる**ライブラリ同期＋自動サインイン**に対応しています。Diablo IV、Overwatch 2、Call of Duty系などを使う場合に便利です。[NVIDIAサポート](https://nvidia.custhelp.com/app/answers/detail/a_id/5589/kw/gfnios/related/1?utm_source=chatgpt.com)

ただ、Battle.netはSteamの代替というより、

> Blizzard / Activision系専用プラットフォーム

と考えた方がよいです。

---

**Epic Games Storeは少し特殊です。** GFNとEpicアカウントそのものは接続できますが、一般ゲームについてはSteamのような所有ゲーム全体の同期には対応していません。Fortnite系については自動ログインや事前読み込みなどかなり深く統合されています。[NVIDIAサポート](https://nvidia.custhelp.com/app/answers/detail/a_id/5176/kw/streaming%20video?utm_source=chatgpt.com)

Epic最大のメリットはGFNそのものではなく、

**無料配布ゲームを貯められること**

でしょう。

無料配布 → GFN対応タイトルだった → クラウドで遊ぶ

という使い方ができます。

そのため私なら、

**Steam＝購入用メイン**  
**Epic＝無料配布・Epic限定作品**

と分けます。

---

**GOGはゲームそのものを所有するという意味では非常に魅力的**です。DRMフリー作品が多く、GFNをやめてもゲームファイルそのものを扱いやすい。

一方、GFNとの統合ではSteam・Xbox・Ubisoftほど強くありません。NVIDIAもGOGを対応ストアとして正式に挙げていますが、現在のGFNのライブラリ自動同期対象にはGOGは入っていません。[NVIDIA](https://www.nvidia.com/ja-jp/geforce-now/faq/?utm_source=chatgpt.com)

ですから、

**「購入物としての自由度」ならGOG**  
**「GFNでの利便性」ならSteam**

という逆転が起こります。

---

**EA appも似ています。** GFNでEAゲームをプレイでき、EA Play / EA Play Proも利用できます。ただし、事前にEA app側で対象ゲームを自分のライブラリへ追加しておく必要があるケースがあります。[NVIDIAサポート](https://nvidia.custhelp.com/app/answers/detail/a_id/5296/kw/11?utm_source=chatgpt.com)

また、EA appはSteam/Xbox/UbisoftのようなGFN側ライブラリ同期対象にはなっていません。アカウント切替もGFN上では若干面倒です。[NVIDIAサポート](https://nvidia.custhelp.com/app/answers/detail/a_id/5399/~/how-do-i-manage-my-connected-accounts-on-geforce-now%3F?utm_source=chatgpt.com)

### なので、用途別に選ぶなら

私はこう整理します。

|目的|第一候補|
|---|---|
|普通にゲームを買い集める|**Steam**|
|GFNとの総合的な相性|**Steam / Xbox**|
|月額で大量に遊ぶ|**PC Game Pass**|
|Ubisoft作品|**Ubisoft Connect / Ubisoft+**|
|Diablo・Overwatch・CoDなど|**Battle.net**|
|無料ゲームを集める|**Epic Games Store**|
|DRMフリー・所有権重視|**GOG**|
|EAゲーム中心|**EA app / EA Play**|

特にあなたのように**Switch 2とSteamのどちらでゲームを買うかも比較している**のであれば、PC側の購入先はむやみに分散させず、

**「原則Steam → Game Passで遊べるものはXbox → 無料配布はEpic → メーカー専用作品だけUbisoft/Battle.net等」**

という運用がかなり扱いやすいと思います。

なお、前に話していた**「GFNの別アカウントを作って、接続するゲームプラットフォームも分ける」**という観点では、Steam・Xbox・Ubisoft・Battle.netではアカウント接続の仕組みがかなり違います。特に**Steamだけは「GFNに接続しているSteam」と「実際にゲーム起動時にログインしているSteam」が必ずしも同一扱いではない**という特徴があります。[NVIDIAサポート](https://nvidia.custhelp.com/app/answers/detail/a_id/5742/kw/signs?utm_source=chatgpt.com)

この点は別アカウント運用を考えるなら結構重要です。