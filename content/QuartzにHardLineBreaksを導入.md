---
title: QuartzにHardLineBreaksを導入
aliases:
  - QuartzにHardLineBreaksを導入
type:
created: 2026-05-03T20:25:28+09:00
updated: 2026-05-03T20:25:28+09:00
id: 20260503-202528
permalink:
draft: false
source:
---
## hard line break

Markdownはテキスト内の単一改行に対して、リーディング上での改行に反映はしてくれない。代わりに[[hard line break]]におけるいずれかの手法を使うことで、段落を変えずに改行することが出来る。

そのため、

わっちの場合は、多くの記事で\<br\>を挿入しており、Quartz上での文章の見た目を整えていた。入力の手間を減らすため[[caps lock]]を押すことで\<br\>が入力されるように設定を変更していた。


■そこかしこに、挿入される\<br\>
![314](スクリーンショット%202026-05-03%20195245.png)

■\<br\>により体裁を整えられた文章
![302](スクリーンショット%202026-05-03%20201252.png)




## 「HardLineBreaks」プラグイン

Quartzには、Markdownテキスト内の単一改行をHTML出力で強制改行に自動的に変換するために、「HardLineBreaks」プラグインが実装されている。しかし、Markdwonの標準的なセマンティクスに準拠していないため、デフォルトではOFFになっているらしい。

わっちはマークダウン原理主義者ではないし、
日本語ユーザーであり、文章中に改行する方が読みやすいので
このプラグインを使うことにした。


わっちのような日本語を文章として記述するユーザーにとっては都合がよいので、
プラグインを有効化することにした。

### 設定方法

`quartz.confg.ts`内のプラグイン記述箇所に`Plugin.HardLineBreaks()`を追加する。

```ts / quartz.config.ts
  plugins: {
    transformers: [
      Plugin.HardLineBreaks(),
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
```

### 出力結果の確認

プラグインの効果を確認してみる。

1つの改行で見た目に反映されるようになったので、
"\<br\>"による改行で無駄に空白行が発生していることを確認した。

![335](スクリーンショット%202026-05-03%20202503.png)

これで、これからは\<br\>を入力する手間が省ける