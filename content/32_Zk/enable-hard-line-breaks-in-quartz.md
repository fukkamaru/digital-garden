---
title: QuartzにHardLineBreaksを導入
aliases:
  - QuartzにHardLineBreaksを導入
type: permanent
created: 2026-05-03T20:25:28+09:00
updated: 2026-10-29T04:26
id: 20260503-202528
permalink:
draft: false
---
Markdownはテキスト内の単一改行に対して、段落を変えずに改行といったことはしてくれない。

代わりに`hard line break`におけるいずれかの手法
- 末尾に半角スペース2つを入れる
- htmlタグ\<br\>を入れる
を使うことで、段落を変えずに改行することが出来る。

わっちの場合は、
- 多くの記事で\<br\>を意図的に挿入することで、Quartz上での体裁を整えていていた
- また、入力の手間を減らすために`caps lock`を1回押すことで`<br>`が入力されるように設定も変更していた。
	- →参考例： [Keyboard ManagerでCaps Lockを再割り当てる方法](keyboard-manager-caps-lock-remapping.md)

![342](screen-shot-2026-05-03-195245.png)
図：参考例のソース

![343](screen-shot-2026-05-03-201252.png)
図：参考例のウェブ上での表示

このように、\<br\>を入力することでQuartz上での体裁を整えていた。


「HardLineBreaks」プラグインの導入
- Quartzについて調べていると、Markdownテキスト内の単一改行をHTML出力で強制改行に自動的に変換するために、「HardLineBreaks」プラグインが標準実装されていることが分かった。
- しかしMarkdownの標準的なセマンティクス（意図）に準拠していないため、デフォルトではOFFになっているらしい。
	- わざわざ\<br\>を入力しなくても、単一改行でHTML上の体裁を整えてくれるのは大変便利な機能。
	- マークダウン原理主義者ではないし、日本語ユーザーなのもあって文章中に改行する方が読みやすくプラグインを使うことにした。

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
