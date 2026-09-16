---
title: Keyboard ManagerでCaps Lockを再割り当てる方法
aliases:
  - Keyboard ManagerでCaps Lockを再割り当てる方法
  - Keyboard Managerで「caps lock」と決別する
  - Keyboard ManagerでCaps Lockを再設定する
type: permanent
created: 2026-04-28T19:40:04+09:00
updated: 2026-09-17T01:39:11+09:00
id: 20260428-194004
permalink:
draft: false
tags:
  - ai-generated
---
# Keyboard ManagerでCaps Lockを再割り当てる方法

PowerToysのKeyboard Managerは、キーやショートカットを別のキー・ショートカット・文字列へ再割り当てる機能である。PowerToysがバックグラウンドで動作している間だけ、割り当てが有効になる。[Keyboard Manager（Microsoft Learn）](https://learn.microsoft.com/windows/powertoys/keyboard-manager)

## 基本手順

1. PowerToysを起動し、`Keyboard Manager`を有効にする。
2. `キーの再マップ`または`ショートカットの再マップ`を開く。
3. 元のキーまたはショートカットと、送信するキー・ショートカット・テキストを指定する。
4. よく使うアプリで動作を確認する。
5. 想定外の入力が起きたら、設定を削除または無効にする。

|割り当ての種類|用途|
|---|---|
|キー → キー|Caps Lockを別のキーとして使う|
|ショートカット → ショートカット|頻繁な操作を押しやすい組み合わせへ変える|
|キー／ショートカット → テキスト|定型文字列を素早く入力する|

## Fukkamaruの設定例

このノートの作成者は、Caps Lockなど使用頻度の低いキーを再利用し、Markdown記述で使う`<br>`を文字列として入力する設定を利用している。この例は個人の入力習慣であり、他のPCへそのまま適用する推奨ではない。

```text
使用頻度の低いキー
    → <br> を送信
```

## 注意点

- PowerToysを終了すると再割り当ては効かない。
- `Win + L`、`Ctrl + Alt + Del`、多くの`Fn`キーなど、OSまたはハードウェアが予約しているキーは再割り当てできない。
- アプリ固有のショートカットと衝突する場合があるため、必要なら対象アプリを限定する。
- 会社PCでは、常駐ユーティリティの導入・キーフック利用が管理方針に合うか確認する。

PowerToys全体の位置付けと導入方法は、[PowerToysがWindowsに標準搭載されない理由](why-powertoys-is-not-preinstalled.md)を参照する。
