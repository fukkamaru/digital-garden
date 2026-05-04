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
## hard line breakによる強制改行

Markdownはテキスト内の単一改行に対して、段落を変えずに改行といったことはしてくれない。代わりに[[hard line break]]におけるいずれかの手法を使うことで、段落を変えずに改行することが出来る。

そのため、

わっちの場合は、多くの記事で\<br\>を意図的に挿入することで、Quartz（ウェブ）上での文章の体裁を整えていた。

また、入力の手間を減らすにために`caps lock`を押すことで`<br>`が入力されるように設定も変更していた。
→参考例： [Keyboard Managerでcaps lockとお別れを告げる](say-goodbye-to-caps-lock-with-keyboard-manager.md)


![Pasted-image-20260428192555](Pasted-image-20260428192555.png|50x50)


![10|10](screen-shot-2026-05-03%20201252.png)
図：参考例のウェブ上での表示

このように、\<br\>を入力することでQuartz上での体裁を整えていた。

## 「HardLineBreaks」プラグイン

Quartzについて調べていると、

Markdownテキスト内の単一改行をHTML出力で強制改行に自動的に変換するために、「HardLineBreaks」プラグインが標準実装されていることが分かった。しかし、Markdwonの標準的なセマンティクス（意図）に準拠していないため、デフォルトではOFFになっているらしい。

わざわざ\<br\>を入力しなくても、単一改行でHTML上の体裁を整えてくれるのは大変便利な機能。

わっちはマークダウン原理主義者ではないし、日本語ユーザーなのもあって文章中に改行する方が読みやすくプラグインを使うことにした。

### 設定方法

`quartz.confg.ts`内の`transformers`内に`Plugin.HardLineBreaks()`を追加する。

```ts
  plugins: {
    transformers: [
      Plugin.HardLineBreaks(),
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
```

設定終了後、コミットしてリモートリポジトリへプッシュすれば、既存のノートを含めて、単一改行に対して段落を変えないまま改行してくれる様になる。