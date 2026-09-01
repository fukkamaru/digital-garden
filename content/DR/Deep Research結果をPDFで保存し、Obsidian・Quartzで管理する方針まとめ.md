---
title: Deep Research結果をPDFで保存し、Obsidian・Quartzで管理する方針まとめ
aliases:
  - Deep Research結果をPDFで保存し、Obsidian・Quartzで管理する方針まとめ
type: literature
created: 2026-09-02T04:25:55+09:00
updated: 2026-09-02T04:25:55+09:00
id: 20260902-042555
permalink:
draft: false
tags:
  - ai-generated
---
今回の検討では、**ChatGPT Deep Researchの調査結果を、どの形式で長期保存し、ObsidianおよびQuartzでどう扱うのがよいか**を整理しました。

結論としては、

> **Deep Researchの原本はPDFで保存し、Obsidianで管理する。必要に応じてQuartzからも公開する。**

という運用が、現時点では最も単純かつ堅実です。

ただし、**QuartzでPDFを扱う場合は、Markdownノートとは公開・非公開の制御方法が異なる**ため、そこだけは明確なルールを設ける必要があります。

## 1. 発端：Deep ResearchのMarkdownエクスポートで引用が崩れる

Deep Researchの結果をMarkdownとしてダウンロードしたところ、本文末尾に次のような文字列が表示されていました。

画面上では文字化けしたように見えます。

当初、「これは参考リンクが文字化けしているのではないか」という疑問から確認しました。

実際には、これは通常のURLそのものではなく、**ChatGPTが回答内の出典を管理するために使っている内部的な引用マーカー**と考えるのが適切です。

イメージとしては、

```text
cite
├─ turn19search3
└─ turn0search2
```

のように、

> 「この文章は検索結果 `turn19search3` と `turn0search2` を根拠としている」

という対応関係をChatGPT内部で表現しています。

ChatGPTの通常画面では、この内部情報をUIが解釈して、脚注や出典リンクとして表示します。

しかしMarkdownへエクスポートすると、

```markdown
[CommonMark](https://spec.commonmark.org/)
```

のような一般的なMarkdownリンクへ変換されず、

というChatGPT固有の表現がそのまま残る場合があります。

Obsidianなどの一般的なMarkdownアプリケーションは、この記法の意味を知りません。

その結果、特殊記号が

```text
�cite�turn19search3�turn0search2�
```

のように見えたり、意味不明な文字列として表示されたりします。

したがって、今回の現象は厳密には、

> **文字コードの単純な文字化けではなく、ChatGPT固有の引用表現と標準Markdownとの互換性問題**

と考えるのが適切です。

## 2. Markdown版の問題点

この問題で特に重要なのが、

```text
turn19search3
```

のような値は、

```text
https://github.github.com/gfm/
```

のような恒久的なWeb URLではないということです。

これは、そのDeep Researchセッションの中で検索結果を識別するための内部IDです。

したがってMarkdownファイルに、

だけが保存されている場合、そのMarkdownファイル単体から、

```markdown
[GitHub Flavored Markdown](https://github.github.com/gfm/)
```

のような実URLを完全に復元できる保証はありません。

つまり、Deep ResearchのMarkdownダウンロードを、

> **Deep Research結果の完全なアーカイブ**

として扱うのは、現状では少し危険です。

本文そのものは残りますが、**調査結果にとって重要な「どの文章が、どの出典に基づいているか」という情報が失われる可能性があります。**

## 3. PDF版では引用情報が正常に残っていた

次にDeep Research結果をPDFとして保存したものを確認しました。

PDFでは、本文の末尾に、

```text
1
2
```

という脚注・引用番号が正常に表示されていました。

さらに、引用番号にマウスを合わせると、

```text
https://github.github.com/gfm/?utm_source=chatgpt.com
```

のような**実際のWeb URLがPDF内にリンクとして保持されていること**も確認できました。

ここがMarkdown版との大きな違いです。

|項目|Markdownエクスポート|PDF|
|---|---|---|
|本文|○|○|
|Deep Researchのレイアウト|△|◎|
|引用番号|△〜×|◎|
|出典との対応|△〜×|◎|
|実URL|消失する場合あり|◎|
|ChatGPT固有記法への依存|あり|ほぼなし|
|Obsidianで直接編集|◎|×|
|原本保存|△|◎|

Deep Researchは普通の記事とは異なり、

> **本文 + 出典 + 本文と出典の対応関係**

そのものに価値があります。

そのため、保存形式としてはPDFの方がDeep Researchの性質に合っています。

## 4. 当初考えた「PDF + Markdown」の二層構造

途中では、

```text
Deep Research
      │
      ├─ PDF
      │   └─ 原文・引用・出典を保持する原本
      │
      └─ Markdown
          └─ Obsidianで整理・再利用する知識ノート
```

という二層構造も検討しました。

これは依然として有効な考え方です。

たとえばPDFを原資料として残し、そこから重要な知識だけを、

```markdown
[[CommonMark]]
[[Markdown]]
[[GFM]]
```

などのリンクを使って通常のObsidianノートへ整理できます。

ただし今回の用途を改めて考えると、

> **Deep Research全文をMarkdownとして二重保存する必要は必ずしもない**

という結論になりました。

Markdown版そのものに引用情報の問題がある以上、PDFとMarkdownを両方原本として維持することで、逆に管理対象が増えてしまいます。

そのため、

```text
PDF
↓
Deep Researchの原本

必要になった情報だけ
↓
通常のObsidian Markdownノート
```

という方がシンプルです。

## 5. ObsidianはPDFをそのまま管理できる

ここで重要なのが、ObsidianではPDFもVault内の通常ファイルとして扱えることです。

たとえば、

```text
Research/
└─ Markdownにおける改行方法 - Deep Research.pdf
```

と保存できます。

別のMarkdownノートから、

```markdown
[[Markdownにおける改行方法 - Deep Research.pdf]]
```

とリンクすることもできます。

また、

```markdown
![[Markdownにおける改行方法 - Deep Research.pdf]]
```

とすれば、Markdownノート内へPDFを埋め込んで表示することもできます。

そのため、

> 「Deep ResearchをObsidianで管理するために、必ずMarkdownへ変換しなければならない」

という前提そのものがありません。

**PDFをPDFのままVaultへ入れて管理できます。**

これを踏まえて、今回の方針はさらに単純化しました。

## 6. Deep ResearchはPDFだけ保存する方針

今回の用途であれば、基本運用は、

```text
Deep Research
      ↓
PDFとしてダウンロード
      ↓
Obsidian Vaultへ保存
      ↓
必要なときに参照
```

で十分です。

PDFには、

- Deep Researchの本文
- 引用番号
- 出典リンク
- レイアウト
- 調査時点の回答内容

が残ります。

そして、そのPDFから得た知識のうち、長期的に使いたいものだけを別途Markdownノートとして作ればよい、という考え方です。

つまり、

```text
PDF = Research archive
Markdown = Knowledge
```

という役割分担になります。

これはかなり明確です。

## 7. PDF用のMarkdown管理ノートは必須ではない

PDF自体にはMarkdownのYAML frontmatterを付けることができません。

そのため、将来的に、

```yaml
type: research
tags:
  - markdown
  - deep-research
```

のような詳細なメタデータを持たせたくなった場合は、PDFごとに管理用Markdownノートを作る方法があります。

たとえば、

```markdown
---
title: Markdownにおける改行方法
type: research
tags:
  - markdown
  - deep-research
---

![[Markdownにおける改行方法 - Deep Research.pdf]]
```

という形です。

ただし、これは**PDFのMarkdown版ではありません。**

あくまで、

> **PDFを管理するための索引カード**

です。

現時点では、すべてのPDFについてこの索引ノートを作る必要はないという判断になりました。

PDFをVaultに保存しておき、分類・リンク・メタデータ管理が必要になったものだけMarkdownノートを追加する方が合理的です。

## 8. QuartzもPDFを扱える

次に確認したのが、

> Obsidianに保存したPDFをQuartz経由でも扱えるのか

という点です。

QuartzもPDFを扱えます。

基本的には、Quartzの`content`以下にあるPDFなどの非Markdownファイルはstatic assetとしてサイトへコピーできます。

そのため、

```text
Obsidian Vault
↓
Quartz content
↓
PDF
↓
Webサイト
```

という流れが成立します。

またObsidian側で、

```markdown
![[research.pdf]]
```

のようにPDFを埋め込んでいる場合、Quartz側でもPDFをページ内に表示する運用が可能です。

したがって、

```text
Deep Research
      ↓
PDF
      ↓
Obsidian
      ↓
Quartz
      ↓
Web公開
```

という一貫したワークフローを構築できます。

これは今回の保存方式をPDFへ統一する大きな理由の一つです。

## 9. 最重要の注意点：PDFの公開・非公開制御

Quartzについて確認した際、非常に重要な注意点が見つかりました。

現在のObsidianノート運用では、

```yaml
draft: true
```

なら非公開、

```yaml
draft: false
```

なら公開、

という管理方法を使えます。

しかしPDFにはYAML frontmatterがありません。

そのため、

```text
research.pdf
```

に対して、

```yaml
draft: true
```

を設定することはできません。

さらにQuartzでは、PDFなどの非Markdownファイルはstatic assetとして扱われるため、**Quartzのビルド対象に含まれていれば、そのPDF自体が公開サイトへコピーされる可能性があります。**

つまり、

> 「PDFをどこからもリンクしていないから非公開」

とは限りません。

URLを知っていればアクセスできる状態になる可能性があります。

これはDeep Research結果に限らず、QuartzでPDF・画像・Officeファイルなどを扱う際の重要なポイントです。

## 10. `draft: true`だけではPDFを守れない

たとえば次のような構成だったとします。

```text
content/
├─ Research/
│  ├─ public-research.pdf
│  └─ private-research.pdf
```

Markdownノートなら、

```yaml
draft: true
```

によってQuartzのページ生成対象から外せます。

しかしPDFの場合は、それができません。

したがって非公開PDFについては、Quartzの設定側で、

```ts
ignorePatterns: [
  "90_Private/**",
]
```

のように**ビルド対象そのものから除外する必要があります。**

ここは今回の検討の中でも特に重要な発見でした。

## 11. Vault設計として考えるべきこと

このため今後PDFを本格的に管理するなら、

```text
公開PDF
非公開PDF
```

をファイル配置の段階で区別する構造が有力です。

概念的には、

```text
Vault
│
├─ Quartz公開対象
│   └─ Research PDFs
│
└─ Quartz非公開対象
    └─ Private PDFs
```

としておきます。

Quartz側では非公開領域を、

```ts
ignorePatterns
```

で完全に除外します。

これはMarkdownの、

```yaml
draft: true
```

とは別の公開管理レイヤーです。

したがって今後は、

```text
Markdown
→ draftで公開制御

PDFなどのstatic asset
→ 配置場所 + Quartz ignorePatternsで公開制御
```

と理解しておくのが重要です。

## 12. 現時点での最終方針

今回決まったことをまとめると、次の通りです。

- **Deep Researchの原本はPDFで保存する**
- Deep ResearchからダウンロードしたMarkdownは、完全なアーカイブとしては信用しすぎない
- MarkdownではChatGPT内部の``引用記法が残り、出典URLが失われる可能性がある
- PDFでは引用番号と実URLが保持されていることを実際に確認した
- ObsidianはPDFをVault内でそのまま管理・リンク・表示できる
- したがって、Deep Research全文をわざわざMarkdownへ変換して二重保存する必要性は低い
- PDFから得た重要な知識だけ、必要に応じて通常のMarkdownノートへ独立させる
- PDF用の管理Markdownノートは必要になった場合だけ作る
- QuartzもPDFをstatic assetとして公開できる
- ObsidianのPDF埋め込みとQuartzを組み合わせることも可能
- **PDFには`draft: true`を付けられないため、Quartz公開時の非公開管理には特に注意する**
- 非公開PDFはQuartzの`ignorePatterns`などを使って、ビルド対象自体から除外する
- 今後Vault構造を設計する際は、**PDFについて「公開領域」と「非公開領域」を分離することを検討する**

## 現在の運用モデル

最終的には、次の構造が最も分かりやすいです。

```text
                    Deep Research
                          │
                          ▼
                     PDFで保存
                          │
                          ▼
                    Obsidian Vault
                     │           │
                     │           └──────────────┐
                     ▼                          ▼
               後から参照                 重要知識を抽出
                     │                          │
                     │                          ▼
                     │                    Markdownノート
                     │                    ・自分の考察
                     │                    ・知識の整理
                     │                    ・内部リンク
                     │
                     ▼
                    Quartz
                     │
             ┌───────┴────────┐
             ▼                ▼
          公開PDF          非公開PDF
             │                │
             ▼                ▼
          Web配信       ignorePatterns等で
                        ビルドから除外
```

このモデルなら、**「Deep Researchの保存」と「Obsidianでの知識構築」を無理に同じ形式へ統一する必要がありません。**

PDFは**調査結果のアーカイブ**、Markdownは**自分の知識ベース**という分離です。

また、Quartzについては「PDFを公開できるか」自体は問題なく、今後決めるべき主要事項は、**PDFをVaultのどこに配置し、公開・非公開をどのルールで管理するか**という点になりました。

### 次に決めるとよさそうなこと

次の段階では、現在のObsidian / Quartz構成に合わせて、

> **「Deep ResearchのPDFをどのフォルダに保存するか」「公開PDF・非公開PDFをどう分けるか」「ファイル名をどうするか」**

を決めるのが自然です。

ここが決まれば、Deep Research → PDF → Obsidian → Quartzという運用はほぼ固まります。

今回決まった内容と未解決事項を、今後参照できるコンテキストとして保存することもできます。