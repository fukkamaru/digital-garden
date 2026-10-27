---
title: URLエンコードとデコードの具体例
aliases:
  - URLエンコードとデコードの具体例
  - エンコード・デコードの一例
type: literature
created: 2026-05-09T21:16:48+09:00
updated: 2026-10-28T06:16
id: 20260509-211648
permalink:
draft: false
tags:
---
- エンコード：データや信号を特定の規則に則って、別の形式や符号に変換すること
	- 別名：符号化
- デコード：エンコード（符号化）されたデータを、元のデータに戻すこと
	- 別名：復号

ここで、

URLエンコード
- 一部の文字には、そのままURLへ入れると区切り記号とデータの一部を区別できなくなることがある
	- `日本語`や`空白`、`＆`などの記号
- それらの文字をURL上で安全に扱える表現へ変換する処理のこと
- 別名：パーセントエンコーディング



日本語をURLのパスへ入れる例
- `日本語`はUTF-8のバイト列として扱われ、各バイトが`%`と16進数2桁で表される。

```text
元の文字列
日本語

URLエンコード後
%E6%97%A5%E6%9C%AC%E8%AA%9E

URLの例
https://example.com/%E6%97%A5%E6%9C%AC%E8%AA%9E
```

- これは文字が壊れたのではなく、URLで転送するための表現へ変わった状態である。
- ブラウザーの表示欄、Markdownのリンク先、コピー先のアプリによっては、日本語表示と`%`を使う表示が切り替わる。


クエリ文字列では値ごとに処理する
- クエリ文字列の`?`、`&`、`=`はURLの構造を表す記号である。
- 検索語の一部に`&`を含む場合、URL全体ではなく**値の部分**をエンコードする。

```js
const keyword = "PC & 周辺機器";
const url = `https://example.com/search?q=${encodeURIComponent(keyword)}`;

console.log(url);
// https://example.com/search?q=PC%20%26%20%E5%91%A8%E8%BE%BA%E6%A9%9F%E5%99%A8
```

`encodeURI()`はURL全体向けで、`/`、`?`、`&`などのURL構造の一部を残す。動的に入れる検索語・ファイル名・IDなどの値には、通常は`encodeURIComponent()`を使う。逆に、すでにエンコード済みの文字列へもう一度同じ処理をすると、`%`自体が`%25`になり、二重エンコードになる。

```text
%E6%97%A5  （1回エンコード済み）
%25E6%2597%25A5  （二重エンコード）
```

URLの概念と、日本語がエンコードされて見える理由は[URLで日本語がエンコードされる理由](why-japanese-urls-get-encoded.md)を参照する。[encodeURI()（MDN）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)
