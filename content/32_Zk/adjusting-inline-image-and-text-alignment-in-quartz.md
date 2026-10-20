---
title: Quartz上のインライン画像と文字の高さ調整
aliases:
  - Quartz上のインライン画像と文字の高さ調整
type: permanent
created: 2026-10-19T19:38:08+09:00
updated: 2026-10-21T07:14
id: 20261019-193808
permalink:
draft: false
tags:
---
Obsidianで `![[fukkamaru.png|25x25]]` のように25×25pxへ縮小した画像を文章の先頭に配置したところ、Obsidian上では特に違和感がない一方、Quartzで公開すると、アイコンが後続の文字より上に浮いて見える問題が発生した。
![](sh_2026-10-19%20191159.png)

![](sh_2026-10-19%20191210.png)


画像サイズは下記の通り
- 元画像：200x200px
- アイコン表示：25x25px

サイズ設定に問題はなく、原因はQuartzの`base.scss`にあった。


```
img {
  max-width: 100%;
  border-radius: 5px;
  margin: 1rem 0;
  content-visibility: auto;
}
```

読み込まれた画像は上下に1remのマージンが付与されるため、目には見えない1文字文の上に画像が乗っかった様な表示になっていた。

そこで、アイコンとして利用する画像については`custom.scss`に下記の記述を加えて、画像が文字の中心に来るように調整。

```
img[src$="fukkamaru.png"],
img[src$="book1.png"],
img[src$="book2.png"],
img[src$="chatgpt.png"] {
  vertical-align: middle;
}
```

これにより、指定した4画像だけが文字の中央付近に揃い、それ以外の通常画像には影響を与えずに済んだ。今後同じ扱いをしたいアイコンが増えた場合も、このセレクタ一覧へファイル名を追加すれば対応できる。


現在の表示状態は下記より確認できる。
[Quartz公開サイトで運用するアイコンのテスト](testing-icons-for-quartz-site.md)