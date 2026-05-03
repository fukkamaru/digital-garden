---
title: QuartzにHardLineBreaksを導入
aliases:
  - QuartzにHardLineBreaksを導入
type:
created: 2026-05-03T20:25:28+09:00
updated: 2026-05-03T20:25:28+09:00
id: 20260503-202528
permalink:
draft: true
source:
---
## hard line break

Markdownでは[[hard line break]]を使うことで、段落を変えずに改行を行える。
わっちの場合は、[[caps lock]]を押すことで\<br\>が入力されるように設定を変更していた。

多くの記事で\<br\>が挿入しており、Quartz上での文章の見た目を整えていた。


■そこかしこに、挿入される\<br\>
![314](スクリーンショット%202026-05-03%20195245.png)

■\<br\>により体裁を整えられた文章
![302](スクリーンショット%202026-05-03%20201252.png)


## 「HardLineBreaks」プラグイン

その後、Quartz内のプラグインに「HardLineBreaks」という名称で組み込まれていることが分かったので、`quartz.confg.ts`を編集してみた。

```ts / quartz.config.ts
  plugins: {
    transformers: [
      Plugin.HardLineBreaks(),
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
```

1つの改行で見た目に反映されるようになったので、
"\<br\>"による改行で無駄に空白行が出来るようになった。

![335](スクリーンショット%202026-05-03%20202503.png)