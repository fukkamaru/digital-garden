---
title: Markdownにおける改行方法の仕様・慣習・実務ベストプラクティス調査
aliases:
  - Markdownにおける改行方法の仕様・慣習・実務ベストプラクティス調査
type: literature
created: 2026-09-02T03:53:48+09:00
updated: 2026-09-02T03:53:48+09:00
id: 20260902-035348
permalink:
draft: false
tags:
  - ai-generated
---
## 概要と結論

Markdownの改行問題は、ほぼすべて次の二つを分けると整理できます。

> **Markdownソースの行をどこで切るか**  
> と  
> **最終的な表示でどこを強制的に改行するか**

は別問題です。

John GruberのOriginal Markdownは、段落を「1行」ではなく「連続する複数行」として扱う設計を最初から採用していました。つまり、ソースファイルを読みやすくするために途中で改行しても、それをすべてHTMLの`<br>`にしてはいけない、という思想がMarkdownの原点にあります。Gruber自身が、通常の段落は複数のソース行にhard-wrapできると説明し、すべての改行文字を`<br />`へ変換する方式を明示的に退けています。 citeturn17view4

この原則はCommonMarkとGFMにも引き継がれています。通常の1改行は**softbreak**、意味のある強制改行は**hard line break**、段落自体を分けるものは**blank lineによるparagraph break**です。CommonMark/GFMではhard breakを「行末の2個以上のASCII space」または「行末バックスラッシュ」で表現できます。GFMもこの規則を採用しています。 citeturn19search3turn0search2

実務上の結論を先に示すと、次の方針が最も安定します。

| 判断 | 推奨 |
|---|---|
| 通常の文章 | **段落を基本単位とし、段落間は空行** |
| ソースを読みやすくしたい | 通常の1改行＝**softbreak**を使う |
| sentence per line / semantic line breaks | **softbreakを使う。hardbreakにしない** |
| 意味として本当に強制改行したい | CommonMark/GFM中心なら **行末`\`を第一候補** |
| Original Markdown互換を最大化したい | **行末2個以上のスペース** |
| HTMLを許す特定環境で明示性が重要 | `<br>`も妥当。ただし常用しない |
| 段落を分けたい | `<br><br>`ではなく**空行** |
| レイアウト調整目的 | hard breakを基本的に使わず、ブラウザのwrap/CSSに任せる |
| チーム | parser、softbreak方針、hardbreak記法、trailing-whitespace規則を明文化する |

特に重要なのは、

> **「保存形式」と「表示形式」を分離して考える**

ことです。

たとえば、

```markdown
Sentence one.
Sentence two.
```

はCommonMark/GFMでは「ソース上は2行」ですが、「意味上は1段落」です。典型的なHTMLは次のようになります。

```html
<p>Sentence one.
Sentence two.</p>
```

あるいはrendererによって、

```html
<p>Sentence one. Sentence two.</p>
```

となります。CommonMarkはsoftbreakをHTML上の改行文字またはspaceとして出力することを許しています。通常のブラウザ表示ではどちらも同じように一つの段落として流れます。 citeturn19search3

一方、

```markdown
Sentence one.\
Sentence two.
```

は、

```html
<p>Sentence one.<br />
Sentence two.</p>
```

となり、**表示上も強制改行されるという意味を文書に埋め込みます**。 citeturn19search2turn0search2

そして、

```markdown
Sentence one.

Sentence two.
```

は概念がさらに異なり、

```html
<p>Sentence one.</p>
<p>Sentence two.</p>
```

という**二つの段落**になります。Gruber自身もparagraphを「one or more consecutive lines of text separated by one or more blank lines」と定義しています。 citeturn17view4

したがって本調査の中心結論は、

> **ソースの行構造を整えるための改行にはsoftbreakを使い、読者に見える改行を意味として要求するときだけhardbreakを使う。段落を分けるならparagraph breakを使う。**

です。

## 用語・基本仕様・HTMLへの変換

まず、「改行」という日本語一語に複数の異なる概念を押し込まないことが重要です。

| 用語 | 意味 | ソース上の例 | レンダリングへの意味 |
|---|---|---|---|
| **source line break** | ファイルそのものの行末。LF/CRLF等 | `foo↵bar` | それだけでは表示改行を意味しない |
| **soft line break / softbreak** | 段落内部にある通常のソース改行 | `foo↵bar` | 通常は同じ段落として流れる |
| **hard line break / hardbreak** | 段落内に意味として存在する強制改行 | `foo\↵bar`等 | HTMLでは通常`<br>` |
| **paragraph break** | 段落というブロックを終了して次の段落へ進む境界 | `foo↵↵bar` | 通常は別々の`<p>` |
| **line wrapping / word wrapping** | 画面幅に収めるためeditor/browserが視覚的に折り返すこと | ソース変更なし | viewport幅等で位置が変わる |
| **rendered line break** | 実際の表示で次行に移ること | 原因はいろいろ | `<br>`、block境界、wrap等によって生じる |

CSS仕様自体も、明示的な制御による**forced line break**と、幅に収めるためユーザーエージェントが作る**soft wrap break**を区別しています。ここでいうCSSのsoft wrapとMarkdownの`softbreak`は似た名前ですが同一概念ではありません。前者は主にレイアウト処理、後者はMarkdown入力中のソース行境界です。 citeturn20view7

### 五つの書き方の仕様比較

通常のparagraph contextを前提にすると、主要仕様は次のように整理できます。

| Markdownソース | Original Markdown | CommonMark | GFM | 典型的HTML | 意味 |
|---|---:|---:|---:|---|---|
| `foo··↵bar` | ○ | ○ | ○ | `<p>foo<br />…bar</p>` | hardbreak |
| `foo<br>↵bar` | ○ raw HTML | ○ raw HTML | ○ raw HTML | `<p>foo<br>…bar</p>` | HTMLによるbreak |
| `foo\↵bar` | Original文書では未規定 | ○ | ○ | `<p>foo<br />…bar</p>` | hardbreak |
| `foo↵bar` | 同一paragraph | softbreak | softbreak | `<p>foo…bar</p>` | ソース行境界 |
| `foo↵↵bar` | paragraph分割 | paragraph分割 | paragraph分割 | `<p>foo</p><p>bar</p>` | 段落境界 |

Original Markdownの正式なsyntax documentationは、hard breakを作るには「**two or more spaces**の後にreturn」と明記しています。また通常のparagraphについては、連続する複数行から構成できるため、ソースをhard-wrapできると説明しています。 citeturn17view4

CommonMark/GFMでも、コードスパンやHTMLタグ内部でない通常のline endingについて、**2個以上のspaceが直前にある場合はhard line break**です。また、より目に見える代替記法としてbackslashを使えます。2個より多くても有効です。コードスパンなどでは同じ規則にならないことも仕様化されています。 citeturn19search3turn0search2

### 「半角スペース2つ」は厳密には少し不正確

日本語の入門記事でよくある、

> 行末に半角スペースを2つ入れる

は実用上ほぼ正しいものの、CommonMark的にはより正確に、

> **line ending直前にU+0020 SPACEを2個以上置く**

です。

CommonMarkは`space`をU+0020として定義しています。したがって全角スペースU+3000やtabを「半角スペース2個と同じもの」と考えてはいけません。また「ちょうど2個」ではなく**2個以上**です。 citeturn16search19turn19search3

さらに、block末尾に置いた不要なspaceが必ず`<br>`を生むわけではありません。GFMではparagraph終端などのfinal spacesはinline parsing前に取り除かれるため、単にparagraph最後に空白を置けば末尾に`<br>`が付く、というモデルでもありません。 citeturn19search3

### `<br>`と`<p>`は見た目以上に違う

HTML Standardでは、`br`は**「line breakそのものがcontentの一部である場合」**、たとえば詩や住所に使用するものとされています。また、paragraph内のthematic groupを分離する目的に`br`を使うべきではないと明示しています。 citeturn20view0

対して`p`はparagraphそのものを表すblock-level elementです。 citeturn20view1

したがって、

```markdown
第一の話題。\
第二の話題。
```

を、

> 「ちょっと空けた方が読みやすそう」

という理由だけで使うのはsemanticには弱い設計です。

本当に話題が分かれるなら、

```markdown
第一の話題。

第二の話題。
```

とparagraphに分ける方が適切です。

逆に住所なら、

```markdown
東京都○○区○○1-2-3\
○○ビル4階
```

のように、**同じ意味的まとまりの内部で行境界それ自体が重要**なのでhardbreakが適しています。これはHTML Standardが示す`br`のユースケースとも一致します。 citeturn20view0

## Markdown改行仕様の歴史と設計思想

Markdownは2004年にJohn GruberがAaron Swartzと協力して開発しました。CommonMarkによれば、2014年までには多言語で多数のMarkdown実装が存在していましたが、Gruberのsyntax descriptionだけでは曖昧なケースを一意に決められず、実装ごとの挙動が大きく分岐しました。そこでCommonMarkは、明確な仕様と包括的なtest suiteを提供することでinteroperabilityを高めることを目的として始まりました。 citeturn20view2

### Original Markdownが「Enter = `<br>`」にしなかった理由

これはMarkdownの思想上かなり重要です。

Gruberはparagraphについて、

```markdown
This is one
paragraph wrapped
over several lines.
```

のようなhard-wrapped sourceを許容することを意図していました。そのうえで、「すべてのline breakを`<br />`にする」単純なルールでは、email-style blockquoteや複数paragraphのlist itemなどが使いにくく、ソースも美しくならないと説明しています。 citeturn17view4

つまり、

```text
ソース上の行
≠
文書意味上の表示行
```

は後付けのCommonMark的抽象化ではなく、**Markdown初期設計から存在する思想**です。

背景にあるのはMarkdownのもう一つの原則です。Markdownは「publish後のHTML」だけでなく、markupされたsource自体をplain textとして自然に読めるように設計されました。Markdownの記号は、可能な限り「見た目が意味に似る」よう選択されています。またMarkdownはHTMLを置き換えるものではなく、Markdownに存在しない表現が必要ならHTMLを使用してよいという設計でもあります。 citeturn12view3

その意味で、

```markdown
長いparagraphを
編集しやすい場所で
複数行に分割する
```

ことが最終表示のレイアウトを固定してしまうと、Markdown sourceをplain-text documentとして編集する自由が失われます。

### なぜhardbreakは2スペースなのか

Original Markdownでは、

```markdown
foo··
bar
```

を意図的な`<br />`にしました。これは通常のsource newlineとの差を最小限のmarkupで表現でき、renderしなくても概ね普通の文章として読めるというMarkdown的な利点があります。 citeturn17view4

ただし代償は明白です。

> **markupが見えない。**

Markdownの記号としては非常に軽量ですが、人間がsourceを見ると、行末に2個のspaceがあるのか0個なのか判別しづらい。

### CommonMarkとバックスラッシュ

CommonMarkはこの問題に対し、

```markdown
foo\
bar
```

をもう一つのhardbreakとして仕様化しています。

CommonMark 0.8の時点ですでに、line ending直前のbackslashはhard line breakであり、HTMLでは`<br />`になります。仕様はbackslash形式を2-space形式の**“more visible alternative”**として説明していました。 citeturn19search2

したがって、

> バックスラッシュhardbreakは独自parserの最近の便利機能

ではありません。

少なくともCommonMark初期の2014年仕様から存在し、現在のCommonMark/GFM系では正規の記法です。 citeturn19search2turn0search2

一方、GruberのOriginal Markdown syntax documentationはhardbreakとして2-space形式を説明しており、backslash-newlineをhardbreakとして説明していません。したがって**Markdown.pl級の旧来互換性まで必要とする場合、backslash形式を普遍的Markdown記法と仮定してはいけません**。 citeturn17view4

「なぜbackslashが2スペースほど知られていないのか」について厳密な利用統計は見つかりませんが、歴史からは合理的に説明できます。2-space形式は2004年からOriginal Markdownのcanonical documentationに載っていた一方、backslash形式はCommonMark標準化期に明示された後発の方法です。この時間差が認知差の一因とみるのが自然です。これは利用統計ではなく、仕様史からの推論です。 citeturn17view4turn19search2

### GFMの位置づけ

GFMはCommonMarkをベースにGitHub固有のextensionを加えたMarkdown方言です。改行に関する基本的なhardbreak/softbreak規則はCommonMarkと同型で、2個以上のspacesとbackslashがhardbreak、通常のline endingがsoftbreakです。 citeturn0search2

ただし、ここで極めて重要なのが、

> **GFM specificationとgithub.comというサービスのUI挙動は同じではない**

という点です。

GitHub公式ドキュメントによれば、`.md`ファイルでは通常の1改行は表示改行になりません。一方、Issue、Pull Request、Discussionの本文では単一source newlineをGitHubが自動的に表示改行します。`.md`ファイルで強制改行したい場合は、2 spaces、backslash、`<br/>`の三つが案内されています。 citeturn18view0

したがって、

```markdown
Sentence one.
Sentence two.
```

について、

> 「GitHubでは改行される」

も、

> 「GitHubでは改行されない」

も文脈なしでは不正確です。

**repositoryの`.md`なのか、Issue/PR commentなのか**を指定する必要があります。

## hardbreak手法の比較とwhitespace問題

実務上もっとも判断が分かれるのは、強制改行が本当に必要になった後の、

```markdown
text··
next
```

```markdown
text\
next
```

```markdown
text<br>
next
```

の選択です。

### 総合比較

| 比較軸 | 行末2 spaces | 行末`\` | `<br>` |
|---|---|---|---|
| Original Markdown | **正式** | 未規定 | raw HTMLとして可 |
| CommonMark | **正式** | **正式** | raw HTMLとして可 |
| GFM | **正式** | **正式** | raw HTMLとして可 |
| HTML出力 | `<br />` | `<br />` | raw `<br>` |
| source可読性 | 一見自然 | やや記号的 | HTMLが目立つ |
| 改行意図の視認性 | **低い** | **高い** | **非常に高い** |
| trailing whitespace依存 | **あり** | なし | なし |
| auto-trim耐性 | **弱い** | 強い | 強い |
| HTML依存 | なし | なし | **あり** |
| CommonMark/GFM移植性 | 高い | 高い | raw HTML policy次第 |
| 旧Original互換 | **最高** | 低下 | raw HTMLが許可されれば高い |
| Git review時の認識性 | 低め | 高い | 高い |
| Markdownらしさ | 高いが不可視 | **高い** | やや低い |
| semantic妥当性 | `<br>`相当 | `<br>`相当 | `<br>`そのもの |
| 本調査の通常推奨 | 条件付き | **第一候補** | escape hatch |

### なぜ正式な「2 spaces」が嫌われるのか

理由は仕様上の欠陥というより、**現代のtext toolingとの衝突**です。

VS Code公式Markdown documentation自身が、Markdown hard line breakには2個以上のtrailing spacesが必要だが、VS Codeがtrailing whitespaceを自動削除する設定になっている可能性があると警告しています。そしてMarkdownだけ削除を無効化する例まで掲載しています。 citeturn18view2

EditorConfigにも、

```ini
trim_trailing_whitespace = true
```

という標準propertyがあり、newline直前のwhitespaceを削除します。 citeturn18view3

したがってユーザーが示した事故、

```text
Markdownでは行末spaceが意味を持つ
↓
Editor / save actionがtrailing whitespaceを削除
↓
hardbreak markerがなくなる
↓
表示改行が消える
```

は**理論的な懸念ではなく、現実に成立する**ものです。VS Codeのissue trackerにも実際にこの現象が報告され、現在のVS Code公式文書も専用の回避設定を説明しています。 citeturn20view4turn18view2

GoogleのMarkdown Style Guideはさらに明確です。

Googleはtrailing whitespaceを使わず、line breakが必要なら**trailing backslash**を使うよう推奨しています。その理由として、CommonMarkでは2 spacesが`<br>`になる一方、多くのpresubmit checksがtrailing whitespaceを拒否し、IDEが自動clean-upすることを挙げています。さらに、そもそもline breakを多用せず、可能ならparagraphを使うことをbest practiceとしています。 citeturn17view2

したがって、

> 「2-space方式は非標準だから避ける」

は間違いです。

正確には、

> **最古かつ標準的なMarkdown hardbreakだが、意味を持つmarkupが不可視のtrailing whitespaceなので、現代のeditor/linter/presubmit運用では脆弱になりやすい**

です。

### markdownlintは2 spacesを禁止しているのか

これも誤解されやすい点です。

markdownlintの`MD009/no-trailing-spaces`はtrailing whitespaceを検出しますが、`br_spaces`のdefaultは`2`です。つまり**hardbreakを表す2 spacesはデフォルトで例外として許容**されています。 citeturn18view5

したがって、

> markdownlintを使うから2-space hardbreakは使えない

ではありません。

問題は、チームがより厳しい設定を採用した場合や、markdownlint以外のgeneric whitespace checker、EditorConfig、IDEのtrim機能などと組み合わせた場合です。Googleのstyle guideがbackslashを選ぶ理由もこの運用上の摩擦です。 citeturn17view2turn18view3

### Gitとの相性

Gitの通常のdiffはline-orientedであり、`--word-diff`は通常のline-by-line diffのhunkをさらにword単位で解析する仕組みです。したがってprose sourceの「どこで行を分けるか」はreview granularityに直接影響します。 citeturn20view8

ただし重要なのは、**Gitそのものを2 spacesが消える主犯と考えないこと**です。実際の危険源として公式資料から強く確認できるのは、editorのtrim、EditorConfig、presubmit/style checksです。 citeturn18view2turn18view3turn17view2

また、行末の目に見えない2 spacesはreview時にも意図を認識しにくいため、

```markdown
foo\
bar
```

の方が、

> 「この改行は意図的である」

とreviewerに伝わりやすいという実務上の利点があります。CommonMark自身がbackslashを「よりvisibleなalternative」と位置付けていることとも整合します。 citeturn19search2

### Prettierとの関係

Prettierはこの問題をかなり慎重に扱っています。

現在の`proseWrap` defaultは`preserve`で、Markdown proseの既存のsource wrappingを原則変更しません。Prettierはその理由として、GitHub commentsやBitbucketのような**source line breakに敏感なrendererが存在する**ことを明示しています。`always`なら`printWidth`に合わせてproseを再wrapし、`never`ならprose blockを一行化してviewer/editorのsoft wrappingに任せます。 citeturn18view4

これは非常に示唆的です。

本来strict CommonMarkなら、

```markdown
foo
bar
```

を、

```markdown
foo bar
```

に変えてもrendering semanticsはほぼ変わりません。

しかしGitHub commentやZenn型の`breaks` rendererでは、そのsource newline自体がvisible breakになるため、formatterによるreflowが**表示結果の変更**になります。Prettierが`preserve`をdefaultにしたのはまさにこの種の現実的なrenderer差を考慮したものです。 citeturn18view4turn22search8

### `<br>`は本当に「悪」か

「MarkdownではHTMLを書いてはいけない」は歴史的に正しくありません。

GruberはMarkdown syntaxの中でinline HTMLを明示的に許可し、MarkdownがHTMLのreplacementではなく、必要ならHTMLを書くべきだと説明しています。 citeturn12view3

GFMもraw HTMLを認識します。安全上問題の大きい特定タグには`tagfilter` extensionを適用しますが、`br`はその禁止リストに含まれていません。 citeturn20view3

したがって、

```markdown
text<br>
next
```

は「Markdownとして間違い」ではありません。

問題は別です。

第一に、`<br>`は**Markdown記法ではなくHTML記法**なので、HTMLをそのまま許可しないconverter、HTML以外へ変換するpipeline、raw HTMLをsanitizeするサービスでは可搬性が落ちます。

第二に、

```markdown
段落1<br><br>
段落2
```

のようにpresentation目的でparagraph separationを模倣すると、HTML semanticsが悪化します。HTML Standardは`br`をthematic groupの分離に使わないよう明記しています。 citeturn20view0

一方で、

```markdown
東京都○○区<br>
○○ビル4F
```

のように改行自体がcontentの一部であり、かつtarget platformのHTML supportが確定しているなら、**意図が非常に明示的で、trailing whitespace事故もない**という強みがあります。

つまり、

> `<br>`は悪いのではなく、**Markdown-level semanticsで十分表現できるものをHTML-level escape hatchへ不必要に落とすことを避ける**

のが正しい理解です。

### バックスラッシュの総合評価

CommonMark/GFMをターゲットにする現代的なGit管理文書では、

```markdown
text\
next
```

はかなり優秀な妥協点です。

2 spacesに比べて、

- visible
- trailing whitespaceではない
- trim処理に壊されない
- Markdown syntax内で完結する
- HTML raw supportに依存しない

という利点があります。CommonMark itselfがvisible alternativeとして標準化し、GoogleのMarkdown Style Guideもline breakが必要ならbackslashを推奨し、remark-breaksの公式文書もauthorを制御できる場合はescape形式を推奨しています。 citeturn19search2turn17view2turn18view8

唯一大きな弱点は、**Original Markdownしか想定していない古いparserまで含めた互換性**です。

したがって本調査では、

> **CommonMark/GFMが契約になっている環境 → `\`を推奨**  
> **最古のMarkdown互換性まで要求 → 2 spacesも合理的**

と判断します。

## parser・editor・formatter・platformの実装差

Markdown運用で最も危険なのは、

> **仕様の機能**
>
> と
>
> **parser option**
>
> と
>
> **サービス独自UX**

を混同することです。

### 主要環境の比較

| 環境 | 通常の1 newline | hardbreak | 独自性・注意 |
|---|---|---|---|
| CommonMark | softbreak | 2+ spaces / `\` | rendererはsoftbreakをspace/newlineとして出力可 |
| GFM spec | softbreak | 2+ spaces / `\` | CommonMark系 |
| GitHub `.md` | 見える改行にならない | spaces / `\` / `<br>` | 公式docsで3方式を案内 |
| GitHub Issue/PR/Discussion | **見える改行になる** | 不要な場合あり | platform-specific behavior |
| GitLab | 同一paragraph | spaces / `\` | docsがsource wrapping用途を明示 |
| VS Code | Markdown標準を前提 | docsは2 spacesを説明 | trimTrailingWhitespaceに注意 |
| Prettier | parserではなくsource formatter | — | `proseWrap=preserve` default |
| markdownlint | parserではなくlinter | 2 spacesをMD009例外にできる | default `br_spaces=2` |
| Obsidian | setting依存 | 2 spaces / UI shortcut | Strict Line Breaksの有無で変化 |
| markdown-it | default soft | standard hardbreak | `breaks:true`でsingle newline→`<br>` |
| Marked | default soft | standard hardbreak | `breaks:true`あり |
| remark | default Markdown semantics | standard | `remark-breaks` pluginでnewline→`<br>` |
| Python-Markdown | default Markdown semantics | implementation準拠 | `nl2br` extensionあり |
| Pandoc | reader/extension依存 | backslash等 | `hard_line_breaks`等を明示的に選べる |

### GitHubとGitLab

GitHubは`.md` fileとcommunication UIを明確に分けています。

`.md`では、

```markdown
one
two
```

は一行につながってrenderされます。

Issue/PR/Discussionではsingle newlineがvisibleになります。`.md`でhardbreakを作る方法としてGitHub公式文書は2 spaces、backslash、`<br/>`を列挙しています。 citeturn18view0

GitLabはよりstrict Markdownに近い説明で、single newlineで分割されたlinesは同一paragraphとして続き、2 newlinesで新paragraphになります。paragraph内部にline breakを入れるにはbackslashまたは2個以上のspacesを案内しています。 citeturn18view1

この違いだけでも、

> 「GitHub/GitLabだから改行はこう」

ではなく、

> **どのsurfaceでrendererが何をしているか**

を確認しなければならないことが分かります。

### markdown-itの`breaks`

markdown-itはCommonMark準拠を基本とするparserですが、configurableです。公式source documentationでは、

```js
breaks: false
```

がdefaultで、`true`にするとparagraph中の`\n`を`<br>`へ変換します。 citeturn19search7turn19search6

つまり、

```markdown
one
two
```

について、

**標準設定**

```html
<p>one
two</p>
```

**`breaks: true`**

```html
<p>one<br>
two</p>
```

となります。

後者を、

> 「MarkdownではEnterだけで改行できる」

と一般化してはいけません。

それは**markdown-itのrenderer optionを有効化した特定環境の規約**です。

### Marked

Markedにも同じ名前の`breaks` optionがあり、defaultは`false`です。`true`にするとsingle line breakに`<br>`を加えます。Marked自身のdocumentは、この挙動をGitHub commentsの挙動を模したもので、rendered Markdown fileとは異なると明記しています。 citeturn18view7

これは「GitHub Flavored Markdown」という語の曖昧さをよく示しています。

> GFM **specification**ではsingle newlineはsoftbreak。  
> GitHub **comment UX**ではsingle newlineが表示改行。  
> Markedの`breaks:true`は後者を模倣するoption。

です。

### remark / unified

`remark-breaks`は、soft line endingsをhard break nodeへ変換し、結果として`<br>`にするpluginです。公式document自身が、これはstandard Markdown semanticsではなく、GitHub comments等に近いuser-authored-content behaviorを実現するためのpluginだと説明しています。authorsを制御できるなら、Markdown標準のescape/backslashを使用することも推奨しています。 citeturn18view8

### Python-Markdown

Python-Markdownには`nl2br` extensionがあり、newlineをhard breakとして処理できます。つまりこれも**Markdown core semanticsではなくextension**です。 citeturn18view9

### Pandoc

Pandocは改行の多様性を非常に明示的に扱っています。

`hard_line_breaks` extensionはparagraph内の**すべてのnewlineをhard line break**として解釈します。 citeturn18view10

逆方向には、

`ignore_line_breaks`

があり、paragraph内のnewlineを無視します。この機能は、word間にspaceを使わず、source readabilityのために文章を複数行に分ける東アジア言語を想定したものです。さらにmixed East Asian/Latin text向けには`east_asian_line_breaks`も提供されています。 citeturn18view10turn18view11

これは「日本語Markdownの改行問題」を仕様レベルで考えるうえで非常に示唆的です。

### Obsidian

Obsidian公式Helpは、通常Markdownでは1回のEnterでsource lineは変わるものの、rendered outputでは同じparagraphのcontinuationとして扱われると説明しています。paragraph内でhard breakを作るには2 spacesまたは`Shift+Enter`を案内しています。 citeturn18view6

さらに`Strict line breaks` settingがあります。これを有効にすると標準Markdownのline-break rulesに従い、single returnはrender時に結合、2+ trailing spacesなら`<br>`、blank lineなら別`<p>`になります。逆にsettingをoffにするとsingle line breaksをvisibleにできます。 citeturn18view6turn20view6

したがってObsidian vaultをGitHub、Pandoc、static-site generator等でも読む場合、

> **Obsidian画面で見えた通りに他環境でも見える**

とは仮定しない方が安全です。

### Prettier・formatterとsource wrapping

Prettierの`proseWrap`はhardbreak syntaxではありません。

これは、

```markdown
A very long paragraph that ...
```

をどこで**source line wrappingするか**というformatter policyです。

`preserve`なら既存改行を尊重、`always`なら`printWidth`付近で再wrap、`never`ならproseを一行化します。現在defaultが`preserve`なのは、linebreak-sensitive rendererが現実に存在するためです。 citeturn18view4

したがってチームで、

```yaml
proseWrap: always
```

を使うなら、

> **single source newlineがsemanticにneutralであるrenderer**

であることが重要です。

Zenn型の`breaks:true` surfaceで自動reflowすると、formatterの都合で読者向けの改行位置まで変化し得ます。

## sentence per line・semantic line breaks・英語圏と日本語圏

### sentence per lineとは何か

sentence per lineは、概ね、

```markdown
First sentence.
Second sentence.
Third sentence.
```

のように、一つのsentenceを一つのsource lineにするprose-authoring conventionです。

その狙いは最終表示を三行にすることではありません。

strict CommonMark/GFMなら、これは一つのparagraphとしてrenderされます。

```html
<p>First sentence.
Second sentence.
Third sentence.</p>
```

通常のHTML表示では一つの流れるparagraphになります。 citeturn19search3

メリットはversion controlです。Gitのdiffは基本的にline-orientedなので、sentence単位でlineを区切れば、一文を変更したときにparagraph全体が一行変更として見えるのを避けやすくなります。Gitにはさらに`--word-diff`もありますが、基本のdiff hunkはline単位です。 citeturn20view8

### semantic line breaksとは何か

Semantic Line Breaksは、sentenceよりさらに柔軟です。

sembr.orgは、

> substantial unit of thoughtごとにsource line breakを置く

というconventionを定義しています。sentence boundaryだけでなく、意味のあるclause境界でもlineを分けます。しかも最重要条件として、これらのline breakは**最終rendered outputを変えてはいけない**としています。 citeturn17view3

たとえば、

```markdown
They are endowed with reason and conscience
and should act towards one another
in a spirit of brotherhood.
```

のように意味単位で分割します。

これは、

```markdown
They are endowed with reason and conscience\
and should act towards one another\
in a spirit of brotherhood.
```

とは目的が正反対です。

前者は、

> **author/editor向けの構造**

後者は、

> **reader/rendering向けの構造**

です。

Semantic Line Breaksのspecificationも、compatible markupではvertical whitespaceがrenderingに影響しないことを前提としています。 citeturn17view3

### sentence per lineとsemantic line breaksの違い

整理すると、

| 方針 | source lineの単位 | rendered breakを意図するか |
|---|---|---:|
| fixed-column wrap | 80/100文字など | しない |
| sentence per line | sentence | しない |
| semantic line breaks | sentence / clause / thought unit | しない |
| hard line break | 読者向けの固定行境界 | **する** |

したがってsentence-per-lineにするからといって、

```markdown
Sentence one.··
Sentence two.
```

や、

```markdown
Sentence one.<br>
Sentence two.
```

にするのは基本的に誤りです。

それではauthoring conventionがdocument semanticsへ変わってしまいます。

### 英語圏には一つの「主流」があるわけではない

英語圏のdocumentation practicesを調べても、sentence-per-lineが唯一の標準とは言えません。

Semantic Line Breaksのようなconventionが存在する一方、Google Markdown Style Guideは**80-character source lines**を採用しています。その理由としてcode-oriented toolingとのintegrationやreview cultureを挙げています。 citeturn17view2

Microsoft PowerShell documentationもconceptual articleでは100 characters、`about_` articleでは79 charactersという固定幅を推奨し、Git diff/historyのreadabilityとcontribution easeを理由にしています。 citeturn20view5

つまり英語圏の実務でも、

```text
one sentence per line
```

だけでなく、

```text
semantic line breaks
```

と、

```text
fixed-column prose wrapping
```

が並存しています。

共通しているのは多くの場合、

> **source line structureをreader-visible line structureとは分離する**

点です。

### 日本語圏についてどこまで一般化できるか

ユーザー提示の仮説、

> 日本語では段落を分けず、一文・数文ごとに視認性目的で改行する文化が比較的強い

には、Web platform designから見て一定の説得力はあります。しかし、今回確認した資料だけから**「日本語話者全般の文化」として定量的に証明することはできません**。

むしろ確認できるのは、日本語Markdownサービスの設計がかなり異質であることです。

Qiitaの公式Markdown cheat sheetは2026年1月22日更新時点で、記法が**GFM準拠、一部拡張**であると明記しています。 citeturn17view0

一方Zennの公式Markdown guideのdiscussionでは、Zenn側が2020年に、

> Enterだけで表示改行でき、markdown-itの`breaks`を有効にした場合と同様

と説明しています。 citeturn17view1turn21search0

さらにそのdiscussionでは、Git管理の都合から、

> sourceは一文一行にしたいが、renderではparagraphとしてflowしてほしい

という利用者からの要望があり、その後も複数の支持コメントが続いています。 citeturn17view1

これはまさに本調査の中心問題です。

Zenn型の、

```text
source newline
→
visible newline
```

というUXは、WYSIWYG的な「Enterしたら見た目も改行」という期待には自然です。

しかし、

```text
one sentence per source line
→
renderingは同じparagraph
```

を求めるGit-oriented prose workflowとは衝突します。

したがって「日本語文化 vs 英語文化」という二分法よりも、

> **Enterを“文書のline break”と見るWYSIWYG的文化**
>
> と
>
> **Enterを“source formatting”にも使うplain-text/version-control文化**

の衝突として理解する方が技術的には正確です。

### 日本語の自動折り返しとhardbreak

日本語Web文章では、ブラウザがCJKのline-breaking rulesに従って幅に応じて折り返します。CSS Text仕様は、日本語では通常、文字間にsoft wrapping opportunitiesが存在し、`line-break`等によって句読点や小書き文字などに関する禁則のstrictnessを制御するとしています。 citeturn20view7

つまり、

```markdown
これは非常に長い日本語の文章なのでここで\
強制的に改行してPCで読みやすくします。
```

とdesktop幅を基準にhardbreakを入れても、mobileでは、

```text
これは非常に長い日本語の
文章なのでここで
強制的に改行してPCで読みや
すくします。
```

のように、**browserのautomatic wrapとauthorのforced breakが二重に作用**する可能性があります。

responsive designではviewport幅が固定されないため、

> 「この画面幅で見栄えがいいから」

という理由によるhardbreakは特に壊れやすい設計です。

日本語には禁則処理やCJK-specific wrapping logicがすでに存在するため、文章本文の視覚的なline length調整は原則としてbrowser/CSSへ委ね、Markdownにhardbreakを固定しない方がresponsiveです。 citeturn20view7

PandocがEast Asian text専用に`ignore_line_breaks`や`east_asian_line_breaks`を持つことも、日本語等において「source上は行を分けたいがoutputには不要なspace/breakを入れたくない」という問題が実在することを示しています。 citeturn18view10

## Markdown哲学から見た三方式

三方式をMarkdownの設計思想そのものから評価すると興味深い違いがあります。

```markdown
text··
next
```

```markdown
text\
next
```

```markdown
text<br>
next
```

### 2 spaces

Original Markdownにもっとも忠実です。

Markdownのmarkupを限りなくplain textへ近づけるという意味では優れています。renderしなくても文章としてほぼノイズがありません。Gruberの設計に直接由来するcanonical syntaxです。 citeturn17view4

しかし、その「見えなさ」は2026年のGit/editor toolingでは弱点にもなります。

```text
text
```

と、

```text
text··
```

を人間が目視で区別しにくいためです。

つまりこれは、

> **plain-text aestheticを最大化した代わりにmachine-significant stateを不可視化した設計**

と評価できます。

### バックスラッシュ

```markdown
text\
next
```

はplain textとして多少ノイズがありますが、

> 「この行末には何か意図がある」

ことが目視できます。

HTMLには依存せず、CommonMark/GFM内のsyntaxとして閉じています。

Markdownの「sourceを自然に読める」という原則と、「markupの意味をsourceから理解できる」という原則のバランスでは、現代的にはもっとも優秀です。

CommonMarkがこれをvisible alternativeとして扱ったことは、そのトレードオフを端的に表しています。 citeturn19search2

### `<br>`

```markdown
text<br>
next
```

は意図の明示性では最強です。

一方でsource readerは突然HTML grammarを読む必要があります。

ただしこれを、

> 「Markdown哲学に反する」

と断定するのも間違いです。

Original Markdownは最初からinline/block HTMLとの混在を許容し、Markdownに存在しない構造が必要ならHTMLを書く設計でした。 citeturn12view3

正確な評価は、

> **HTML混在はMarkdownの設計上許されている。ただしMarkdown syntaxだけで十分表現可能な通常のline breakまでHTMLへ降りると、format portabilityとsource uniformityを不必要に犠牲にする。**

です。

### 三方式の哲学的評価

| 観点 | 2 spaces | `\` | `<br>` |
|---|---|---|---|
| plain textとしての自然さ | ◎ | ○ | △ |
| 改行意図の明示性 | △ | ◎ | ◎ |
| Markdown syntax内完結 | ◎ | ◎ | × |
| Original Markdown精神 | ◎ | ○〜◎ | 許容範囲 |
| tooling robustness | △ | ◎ | ◎ |
| CommonMark/GFM portability | ◎ | ◎ | raw HTML policy依存 |
| semantic transparency | △ | ○ | ◎ |
| 総合 | 歴史的canonical | **現代的balance** | 特殊用途向け |

したがって、

> 「もっともMarkdownらしい = 必ず2 spaces」

でも、

> 「HTMLだから`<br>`は禁止」

でもありません。

Markdown哲学を「source自体の可読性」と捉えるなら、**目に見えるbackslashはむしろ現代のplain-text collaborative editingに非常によく適合する**と評価できます。

## ベストプラクティス・ケース別判断・最終結論

ここまでの仕様・implementation・style guide・toolingを統合すると、実務規約はかなり明確にできます。

### 基本ルール

**第一原則：通常のproseはparagraphで書く。**

```markdown
これは第一段落です。
ソース上では必要なら複数行に分けても構いません。

これは第二段落です。
```

単なる可読性のためにparagraph内部をsource改行するなら、そのnewlineは**softbreakとして扱える環境**を基本にします。

**第二原則：source line breakとrendered line breakを一致させない。**

sentence-per-line、semantic line breaks、80-column wrapはすべて、

> sourceを編集しやすくするため

の規則です。

hardbreakではありません。

**第三原則：読者にとって行境界自体がcontentである場合だけhardbreakを使う。**

HTML Standardの`br` semanticsも同じ原則です。 citeturn20view0

**第四原則：CommonMark/GFM中心のGit管理文書では、hardbreakが必要なら`\`を優先する。**

```markdown
東京都○○区○○1-2-3\
○○ビル4階
```

CommonMark/GFM標準、visible、trim-safe、raw HTML非依存という組み合わせが強く、Google Style Guideやremark ecosystemの推奨とも整合します。 citeturn17view2turn18view8

**第五原則：2 spacesを「間違い」とは禁止しない。**

これはOriginal Markdownから続く正規のsyntaxです。 citeturn17view4

ただしチームで採用するなら、

```ini
[*.md]
trim_trailing_whitespace = false
```

相当のtooling policyや、meaningful trailing whitespaceを破壊しない設定が必要です。EditorConfigのproperty自体が明示的にtrailing whitespaceを制御するためです。 citeturn18view3

**第六原則：`<br>`はescape hatchとして許可する。**

特に、

- target rendererが明確にHTMLを許可する
- table cell等のplatform-specific context
- Markdown-native syntaxでは扱いにくい場所
- portabilityより明示性を優先する閉じた環境

では合理的です。

Zennでもtable内改行のため`<br>` supportが追加された経緯があります。 citeturn17view1

**第七原則：`<br>`をparagraph spacingには使わない。**

```markdown
段落A<br><br>
段落B
```

ではなく、

```markdown
段落A

段落B
```

を使います。これはHTML semantics上も正しい区別です。 citeturn20view0turn20view1

**第八原則：teamでは「記法」より先にrenderer contractを決める。**

最低限、

```text
Dialect: CommonMark / GFM / platform-specific
Single newline: soft or visible
Hardbreak syntax: \ / two spaces / both
Raw HTML: allowed or forbidden
Trailing whitespace trim: yes/no
Formatter prose wrapping: preserve/always/never
```

を決めるべきです。

### hard line breakを使うべきケース

hardbreakは次のような、**行境界自体が意味を持つ内容**に限定すると判断しやすくなります。

| 内容 | hardbreak | 理由 |
|---|---:|---|
| 住所 | ◎ | HTML Standard自身が例示 |
| 詩 | ◎ | stanza内部のline structureがcontent |
| 歌詞 | 技術的には◎ | line structure自体が意味。ただし著作権上の引用問題は別 |
| 定型署名 | ○ | 行単位のformが意味を持つ場合 |
| label/valueの短い定型表示 | ○ | paragraphに分けるほど独立していない場合 |
| 意図的な短い行列 | ○ | line boundaryがpresentationでなくcontentの場合 |
| 普通の説明文 | × | browser wrappingに任せる |
| mobileで読みやすくしたい | × | viewport依存なので壊れやすい |
| 段落間を広く見せたい | × | paragraph/CSSの仕事 |

### 非推奨パターン

**見た目の空白を増やすための`<br><br><br>`**

```markdown
文章A<br><br><br>
文章B
```

paragraph semanticsとpresentationを混同しています。HTML Standardもpresentation purposeで`br`を濫用しないよう求めています。 citeturn20view0

**通常のブログ本文を一文ごとにhardbreak**

```markdown
第一文。\
第二文。\
第三文。\
第四文。
```

desktopの見た目には合っても、mobile/responsive layoutで不自然なline lengthを作りやすく、source structureをreader-visible layoutへ不必要に固定します。CJK textはbrowser側にもlanguage-aware wrapping mechanismがあります。 citeturn20view7

**semantic line breaksに2 spacesを足す**

```markdown
One semantic unit.··
Another semantic unit.··
Another unit.
```

これはsemantic-line-break philosophyと逆です。Semantic Line Breaksはsource boundaryがrendered outputへ影響しないことを前提としています。 citeturn17view3

**trailing whitespace trimを有効にしたまま2-space hardbreakへ依存**

VS Code公式documentationが直接警告している組み合わせです。 citeturn18view2

**`breaks:true`環境でformatterが自由にprose reflow**

source formatting変更がrendering変更になるため、Prettierが`preserve`をdefaultにした理由そのものと衝突します。 citeturn18view4

### ケース別推奨

| ケース | paragraph | source内改行 | hardbreakの第一候補 | `<br>` | 特記事項 |
|---|---|---|---|---|---|
| **README** | 空行 | softbreak | `\` | 条件付き | GitHub `.md`前提ならCommonMark/GFM的運用 |
| **OSS documentation** | 空行 | semantic/fixed wrap可 | `\` | 原則限定 | CI/linter/formatterとの整合を優先 |
| **技術document** | 空行 | softbreak | `\` | 特殊contextのみ | renderer contractを明記 |
| **技術記事** | 空行 | platform次第 | platform準拠 | platform次第 | 投稿先preview必須 |
| **一般ブログ** | 空行 | softbreak | 必要最小限 | 特殊用途 | visual line lengthはCSSに任せる |
| **日本語ブログ** | **空行推奨** | platformがsoftなら自由 | 必要時`\` | platform次第 | 「一文ごとに見える改行」をdefaultにしない |
| **Obsidian個人vault** | 空行 | 通常newline | officialには2 spaces/Shift+Enter | 可 | Strict Line Breaks設定を意識 |
| **Obsidian＋Git公開** | 空行 | softbreak | pipelineで検証した`\`等 | 最小限 | Obsidian settingだけを契約にしない |
| **GitHub `.md`** | 空行 | softbreak | **`\`** | 可 | GitHub公式は3方式をsupport citeturn18view0 |
| **GitHub comment/PR** | 空行 | **newline自体がvisible** | 普通は不要 | 可 | `.md`と別挙動 citeturn18view0 |
| **GitLab** | 空行 | softbreak | **`\`** | 必要時 | docsがbackslash/2 spacesを案内 citeturn18view1 |
| **static site** | 空行 | softbreak | dialect準拠 | renderer次第 | markdown-it/remark等のoptionを固定 |
| **Zenn** | platformに従う | line-sensitive設計に注意 | 必要性を再検討 | table等で有用 | `breaks`型挙動の歴史あり citeturn21search0 |
| **Qiita** | GFM基準で設計 | GFMとして考える | `\`を候補 | extension確認 | 公式にGFM準拠・一部拡張 citeturn17view0 |
| **Pandoc** | 空行 | target reader次第 | backslash | output format次第 | East Asian用extensionあり |
| **Notion等rich text** | toolのparagraph block | toolのline-break command | Markdown記号を基準にしない | 不要 | Markdownはimport/export representationとして扱う |

### 改行記法は統一すべきか、使い分けるべきか

結論は、

> **semantic categoryは統一し、syntaxは用途によって限定的に使い分ける**

です。

つまり、

```text
通常paragraph
→ blank lineで分割

source readability
→ softbreak

本当に意味のあるparagraph内改行
→ hardbreak
```

という**意味のルールは全環境で統一**します。

そのうえでhardbreak syntaxだけ、

```text
CommonMark/GFM + Git + team
→ \

Original Markdown compatibility重視
→ two spaces

raw HTMLが契約済みの特殊context
→ <br>
```

と使い分けます。

すべてを一種類の記号へ無理に統一するより、この方がsemanticsとportabilityの両方を守れます。

### 最終判断表

| 質問 | Yes | No |
|---|---|---|
| ここは別の段落か？ | **空行** | 次へ |
| readerにとってこの行境界そのものが意味を持つか？ | hardbreak | 次へ |
| sourceを編集しやすくするためだけに改行したいか？ | **通常newline / softbreak** | 自動wrapでもよい |
| CommonMark/GFMが保証されているか？ | hardbreakは **`\`推奨** | 次へ |
| Original Markdown級の互換性が必要か？ | **2+ spaces** | 次へ |
| raw HTML supportが契約として保証され、HTMLを使う合理的理由があるか？ | `<br>`可 | native syntaxを使う |
| 見た目だけをPC幅に合わせようとしているか？ | **hardbreakを入れない** | — |

### 「基本はこれ」

通常の文書は、

```markdown
これは第一文です。
これは第二文です。
必要ならソース上では読みやすいところで行を分けます。

ここから別の段落です。
```

を基本形とします。

strict CommonMark/GFM環境なら、一つ目のparagraph内にあるsource newlinesは**softbreak**として扱います。

sourceの行分け方は、チームに応じて、

```text
一文一行
```

でも、

```text
semantic line breaks
```

でも、

```text
80〜100列wrap
```

でも構いません。

Googleが80-column、Microsoft PowerShellが79/100-column、Semantic Line Breaksがthought-unitを採用していることからも、**唯一のsource wrapping conventionが業界標準というわけではありません**。 citeturn17view2turn20view5turn17view3

### 「この場合だけhard break」

行境界そのものがcontentである場合です。

```markdown
株式会社○○\
東京都○○区○○1-2-3\
○○ビル4階
```

あるいは、

```markdown
第一行\
第二行\
第三行
```

という行構造そのものを読者へ保持する必要がある定型textです。

HTML Standardが`br`について「poems or addresses」を代表例としているのが最も簡潔な判断基準です。 citeturn20view0

### 「これは避ける」

通常の本文を、

```markdown
今日はMarkdownについて説明します。\
まず改行について見ていきます。\
次に段落について説明します。\
最後に結論を述べます。
```

と一文ごとにhardbreakすること。

これは文章構造ではなくviewport-dependentな見た目をsource semanticsへ固定しています。

また、

```markdown
今日はMarkdownについて説明します。<br><br>
次の話題です。
```

でparagraphを模倣することも避けます。

段落なら空行です。

### 「チームではこのルール」

CommonMark/GFMを中心にGitで管理するチームなら、本調査の推奨規約は次の形です。

```text
1. Paragraphはblank lineで分割する。
2. Paragraph内部の通常newlineはsoftbreakとして扱う。
3. Source wrappingはrendered layoutとは分離する。
4. sentence-per-line / semantic-line-break / fixed-widthのどれか一つをチームで選ぶ。
5. Hardbreakはline boundary自体がcontentである場合だけ使用する。
6. Hardbreak syntaxは原則として trailing backslash (\) を使用する。
7. Two trailing spacesはlegacy compatibilityが必要な場合のみ許可する。
8. Raw <br>はtable等、Markdown syntaxで扱いにくいcontextに限定する。
9. proseWrap、trailing-whitespace trim、Markdown dialectをrepository設定として固定する。
10. breaks:true / nl2br等を使う場合は、それが標準Markdownではなくrenderer policyであることを明記する。
```

このうち`6`は単なる好みではありません。CommonMarkがbackslashをvisible alternativeとして標準化し、Googleがtrailing whitespaceのtooling問題を理由にbackslashを推奨し、VS Codeが2-space hardbreakとauto-trimの衝突を公式documentで警告していることを踏まえた実務判断です。 citeturn19search2turn17view2turn18view2

最終的に、Markdownの改行を最も正確に理解する式は次の通りです。

```text
source newline
≠ rendered newline
≠ paragraph boundary
≠ browser wrapping
```

そして実務上は、

```text
保存・編集のための構造
        ↓
   soft line breaks

文書意味上の段落構造
        ↓
     blank lines

読者に固定して伝える行境界
        ↓
   hard line breaks
```

と分けるのが最も堅牢です。

**基本はparagraph + softbreak。  
hardbreakは例外。  
CommonMark/GFMでhardbreakが必要ならbackslashを第一候補。  
2 spacesは正式だがtooling上脆弱。  
`<br>`は違反ではないが、HTMLへ降りる合理的理由がある場合だけ。**

この運用が、Original Markdownの「plain-text sourceそのものが自然に読める」という思想、CommonMark/GFMのformal semantics、Gitを中心とする現代のcollaborative editing、そしてresponsive Web renderingのすべてを最も矛盾なく両立させます。 citeturn17view4turn20view2turn17view2turn20view7