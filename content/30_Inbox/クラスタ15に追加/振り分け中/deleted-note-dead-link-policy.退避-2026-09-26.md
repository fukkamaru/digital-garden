---
title: 削除済みノートへのDead Link運用と公開Webの設計
aliases:
  - 削除済みノートへのDead Link運用と公開Webの設計
  - 削除済みノートへのDead Link運用
type:
created: 2026-09-21T20:58:12+09:00
updated: 2026-09-26T10:38:08+09:00
id: 20260921-205812
permalink:
draft: true
tags:
  - ai-generated
---
以下に、このスレッドで扱った内容を、後からObsidianへ保存・再利用しやすい形で整理します。

# 削除済みノートへのDead Link運用と公開Webの設計

## Obsidian / Zettelkasten / Quartz設計まとめ

## 1. このスレッドの目的

Obsidian + Zettelkasten + Quartzで運用しているデジタルガーデンにおいて、**削除したノートへのリンクをどう扱うべきか**を検討した。

中心となった問題は次の通り。

通常、ノートを削除した際にリンクも削除すると、

- 過去にそのノートが存在したこと
- どのノートから参照されていたか
- どのような知識構造が形成されていたか
- 後から統合・分割・再編された履歴

まで失われる。

そのため、Obsidian内部では削除済みノートへのリンクを、

```
~~[旧ノート名](deleted-note.md)~~
```

のように取り消し線付きで残し、

- 過去には有効なリンクだった
- 現在は削除済みである

という2種類の情報を同時に保持する案を検討した。

一方で、Quartz経由でそのままWeb公開すると、概念的には、

```
<del>
  <a href="deleted-note">旧ノート名</a>
</del>
```

となり、見た目は削除済みでも、HTML上は依然としてクリック可能なリンクとなる。

その結果、

- 404リンク
- broken internal link
- 検索エンジンへの不要なリンク
- AIクローラーへの不要なリンク構造
- 公開サイトのUX低下

が発生する可能性がある。

そこで、

> **Obsidian内部では履歴を保持しつつ、Quartz公開時だけリンクとしての機能を除去する**

という設計が可能かを検討した。

---

# 2. 最初に整理した重要な分類

今回の議論では、単純に「dead link」「broken link」と一括りにせず、最低でも3種類へ分けて考えるべきという結論になった。

|種類|意味|推奨処理|
|---|---|---|
|有効リンク|現在も存在するノートへの正常な参照|通常リンクとして維持|
|Historical Link|過去には存在したが、意図的に削除・廃止されたノートへの参照|Obsidianでは履歴保持、Webでは非リンク化|
|Accidental Broken Link|typo、リネーム漏れ、更新漏れなどによる意図しないリンク切れ|修正対象|

特に重要なのは、

```
[旧ノート](old-note.md)
```

と、

```
~~[旧ノート](old-note.md)~~
```

を同じbroken linkとして扱わないこと。

前者は、

> 本当に削除されたのか、それとも単なるリンクミスなのか

判別できない。

後者なら、

> 意図的なHistorical Linkである

という意味を人間にも機械にも明示できる。

したがって、

```
~~[title](slug.md)~~
```

という記法は、単なる見た目の取り消し線ではなく、

> **「このリンク切れは意図的である」というsemantic marker**

として利用できる。

---

# 3. Zettelkasten内部で削除済みリンクを残す意味

通常のWebサイトであれば、削除ページへのリンクは消した方がよい。

しかしZettelkastenでは、ノートそのものだけでなく、

> **ノート同士の関係**

も知識の一部である。

例えば以前、

```
A → B
```

という関係が存在していたとする。

Bを削除した際にリンクまで消すと、

```
A
```

だけになり、

> Aが以前Bを参照していた

という履歴自体が消える。

一方、

```
A ──×──→ B（削除済み）
```

という状態を残せば、

- Bというノートが存在していた
- AとBには以前関係があった
- 現在Bは有効な知識ノードではない

という情報を保存できる。

これは、今後行うZettelkastenの、

- Permanentノート監査
- Researchノートとの突き合わせ
- ノート統廃合
- クラスタ再編
- MOC再構築

とも相性がよい。

---

# 4. Historical Linkを残すメリット

Obsidian内部で削除済みリンクを保持する主なメリットは次の通り。

- 過去の知識構造を追跡できる
- 思考の変化を後から確認できる
- 統廃合前の構造を確認できる
- 以前削除したノートを誤って再作成する可能性を下げられる
- AIにVaultを解析させた際、「意図的削除」と「事故によるbroken link」を区別させやすい
- ノート統合・置換・再設計時の判断材料になる
- 知識グラフを静的構造ではなく、時間的に変化する構造として扱える

今回の考え方では、削除済みリンクは単なるゴミではなく、

> **Historical Edge**

として扱う。

---

# 5. Historical Linkを残すデメリット

一方で、無制限に残すとノイズになる。

例えば数千ノート規模になったとき、

- 現在有効なリンク
- 削除済みリンク
- 将来作る予定のリンク
- 非公開ノートへのリンク
- typo
- リネーム漏れ
- 統合済みリンク

がすべて同じ「存在しないリンク」として扱われると、知識グラフとしての意味が薄れる。

したがって問題は、

> dead linkが存在すること

そのものではなく、

> **dead linkの意味が分類されていないこと**

にある。

このため、最低限、

- intentional historical
- accidental broken

は区別する必要がある。

---

# 6. 現行の `~~[title](slug.md)~~` 記法の評価

今回の最終評価は、

> **廃止ではなく「修正して継続」**

となった。

Obsidian内部では、

```
~~[旧ノート名](deleted-note.md)~~
```

を使い続けてよい。

この記法には次の利点がある。

- Markdownとして単純
- Obsidian固有記法に依存しない
- GitHubや他のMarkdown環境でも理解しやすい
- 人間が一目で削除済みと判断できる
- 元URL・ファイル名を保存できる
- 将来的に正規表現やAST処理で検出しやすい
- 独自構文を導入するより運用コストが低い

つまり、

```
~~[title](slug.md)~~
```

を、

> **Intentional Historical Linkを示す明示的マーカー**

として採用する案は妥当。

---

# 7. Quartz公開時に起こる問題

Markdownの取り消し線はHTMLでは通常、

```
<del>
```

になる。

そのため、

```
~~[旧ノート](deleted-note.md)~~
```

は概念的には、

```
<del>
  <a href="/deleted-note">旧ノート</a>
</del>
```

となる。

ここで重要なのは、

> `<del>` はリンクを無効化するタグではない

という点。

つまり、

```
<a href>
```

は残ったまま。

そのため、

- ユーザーはクリックできる
- クローラーはリンクとして認識できる
- 存在しないURLへアクセスされる
- 404が発生する

可能性がある。

---

# 8. Quartz v5のbroken link処理

2026年時点のQuartzでは、内部リンク解決は主として `CrawlLinks` が担当している。

また、

```
disableBrokenWikilinks
```

という設定／処理が存在する。

ただし名称から想像されるような、

> broken linkから `href` を削除する

処理ではない。

実際には、存在しない内部リンクへ、

```
class="broken"
```

を付与する。

例えば、

```
<a class="internal broken" href="/deleted-note">
```

のような状態。

したがって、

> **見た目上brokenだと表現する機能**

ではあるが、

> **リンクそのものをHTMLから除去する機能**

ではない。

さらに、Quartz内部のoutgoing link情報にもそのリンクが登録される可能性があるため、

- HTML
- Graph
- Backlinks
- 内部リンクデータ

を完全に現在の知識構造だけにしたい場合、単にCSSで見た目を変えるだけでは不十分。

---

# 9. SEO調査の結論

## 9.1 404そのものはSEOペナルティではない

Google公式の考え方として、

> 存在しないURLが404を返すこと自体は、通常SEO上のペナルティではない。

したがって、

```
404がある
↓
サイト評価が直接下がる
```

という理解は不正確。

404はWebサイトでは自然に発生する。

---

# 10. ただしbroken internal linkには実務上の問題がある

ペナルティではなくても、大量の内部broken linkには問題がある。

Googleは内部リンクを、

- ページ発見
- クロール
- ページ同士の関連性理解
- サイト構造理解
- PageRank / internal link equityの伝達

などに利用する。

したがって、

```
存在しないページへ大量の内部リンク
```

を作ることは、

> 有効な内部リンク構造に無駄なedgeを混ぜる

ことになる。

つまり、

> **SEOペナルティというより内部リンク構造の品質問題**

として考えるべき。

---

# 11. Crawl Budgetについて

Googleのcrawl budgetは、特に大規模サイトで問題になる。

個人運営のDigital Garden規模で、数十件程度の404があるからといって、

> crawl budgetを重大な問題として扱う必要は基本的にない。

したがって今回の優先順位は、

```
SEO penalty対策
```

ではなく、

```
UX
↓
正確な内部リンク構造
↓
不要なcrawl対象を減らす
```

と考える方がよい。

---

# 12. 404 / 410 / 301の使い分け

削除ノートはすべて同じ扱いにしない。

|状態|推奨|
|---|---|
|完全削除・後継なし|404または410|
|後継ノートへ置換|301|
|別ノートへ統合|内容が対応するなら301|
|rename|301|
|typo|元リンクを修正|
|非公開化|deletedとは分ける|
|Historical Link|公開本文では非リンク表示|

---

# 13. 404と410

HTTP上では、

- 404 = Not Found
- 410 = Gone

であり、410の方が、

> 恒久的に削除された

ことを意味論的には明確に示す。

ただしGoogle検索上は、恒久削除されたページについて404でも十分機能する。

そのため、

> Quartz / Cloudflare側へ410対応を追加するためだけに構成を複雑化する必要は現時点ではない。

---

# 14. 後継ノートがある場合は301を優先

例えば、

```
old-ai-note.md
↓
ai-search.md
```

のように明確な後継がある場合、

```
old → 404
```

ではなく、

```
old → 301 → new
```

の方が適切。

特に、

- rename
- merge
- supersede
- URL変更

ではredirectが有効。

Quartzにはalias / permalinkを利用したredirect処理も存在する。

---

# 15. `nofollow` は今回の解決策ではない

例えば、

```
<a href="/deleted-note" rel="nofollow">
```

に変更する案も考えられる。

しかし今回の意味は、

> リンク先との関係性を検索エンジンへ保証したくない

ではなく、

> **そもそも現在はナビゲーションとして存在しない**

というもの。

したがって、

```
<a rel="nofollow">
```

を残すより、

```
<span>
```

などへ変えてリンク自体をなくす方が意味論として正しい。

---

# 16. CSSだけでリンクを無効化する案の問題

例えば、

```
pointer-events: none;
```

を使えば、人間はリンクをクリックできなくなる。

しかしHTML上では、

```
<a href="/deleted-note">
```

が残る。

そのため、

- Googlebot
- Bingbot
- AI crawler
- HTML parser
- 内部リンク解析ツール

からはリンクとして扱われる可能性がある。

したがって、

> **視覚的な無効化**
> 
> と
> 
> **機械的な非リンク化**

は別。

今回必要なのは後者。

---

# 17. `<del><a>` とGooglebot

Googleは、

```
<a href="...">
```

をクロール可能なリンクとして扱う。

一方、

> `<del>` 内ならリンクを無視する

という仕様は確認できなかった。

そのため、

```
<del>
  <a href="/deleted-note">...</a>
</del>
```

について、

> 取り消し線だから検索エンジンは無視する

とは考えない方がよい。

---

# 18. AI検索時代の影響

対象として検討したのは、

- Google AI Overviews
- Google AI Mode
- ChatGPT Search
- OAI-SearchBot
- Bing / Copilot
- Perplexity
- その他AI検索

---

# 19. Google AI Overviews / AI Mode

Google AI系検索は、従来のGoogle Searchインデックスやランキング基盤を大きく利用する。

したがって、

> AI検索用に全く別のリンク構造を作る

必要は基本的にない。

重要なのは従来通り、

- crawlableである
- indexableである
- 関連ページからリンクされている
- 内部リンク構造が理解しやすい
- anchor textが意味を持つ

こと。

---

# 20. ChatGPT Search

OpenAIでは、

- OAI-SearchBot
- GPTBot

が役割分担されている。

OAI-SearchBotは、ChatGPT Searchによる検索・引用用。

GPTBotはモデル学習用途。

ただし、

> `<del>` 内の `<a>` をOAI-SearchBotがどう扱うか

という詳細仕様は公開されていない。

したがって、

> 取り消し線ならAI crawlerが無視する

という前提は置かない。

最も確実なのは、

> 公開HTMLから `href` をなくすこと。

---

# 21. Bing / Copilot

Microsoft系AI検索も、Web情報についてBing Searchとの連携が強い。

そのため、

- crawlerが理解しやすいサイト構造
- 正しい内部リンク
- redirect
- indexableなページ

といった従来のWeb設計が重要。

---

# 22. Perplexity

Perplexityも専用crawlerを持つ。

ただし、こちらも、

> `<del>` 内リンクだけ特別扱いする

という仕様は確認されていない。

したがってAI crawler全般について、

> **取り消し線はHuman-readableな意味であってcrawler controlではない**

と判断した。

---

# 23. 「AI時代ではbroken linkがSEO以上に危険」は未確認

今回の調査では、

> AI検索ではbroken linkに通常SEO以上の強いペナルティがある

という公式根拠は確認できなかった。

したがって、現時点で過度に心配する必要はない。

ただし、

> 機械へ不要なnavigation edgeを与えない

こと自体は、

- SEO
- AI検索
- サイト構造解析
- UX

すべてに共通して有益。

---

# 24. Digital Garden / ZettelkastenとAI検索

Zettelkasten型サイトは構造上、

```
1ノート = 比較的明確な概念
↓
関連ノートへ内部リンク
↓
さらに別概念へ展開
```

という形になりやすい。

これは、

- クローラーによるページ発見
- 概念間関係の理解
- 文脈把握
- 検索エンジンによる関連性評価
- AI retrieval

と相性がよい可能性が高い。

したがってZettelkasten型サイトそのものは、AI時代でもむしろ強みになり得る。

問題なのは、

> 有効リンクと削除済みリンクを同じリンクグラフへ混在させること。

---

# 25. Human-readable HistoryとMachine-readable Webを分離する

今回の中心的な設計思想。

Obsidianは、

> **知識のSource of Truth**

として扱う。

Quartz公開サイトは、

> **現在有効なWebナビゲーション**

として扱う。

両者を完全に同一構造にする必要はない。

---

# 26. 推奨アーキテクチャ

```
flowchart TD
    A["Obsidian Markdown"]
    B["現在有効なリンク<br/>[Title](note.md)"]
    C["Historical Link<br/>~~[Old Title](deleted.md)~~"]

    D["Quartz Build"]
    E["Link Resolution / CrawlLinks"]
    F["History-aware Transformer"]

    G["通常リンク<br/>&lt;a href&gt;"]
    H["削除済み表示<br/>&lt;span&gt;"]

    I["公開Web"]

    A --> B
    A --> C

    B --> D
    C --> D

    D --> E
    E --> F

    F --> G
    F --> H

    G --> I
    H --> I
```

---

# 27. 公開HTMLの推奨形

Obsidian側では、

```
~~[旧ノート名](deleted-note.md)~~
```

を維持。

公開HTMLでは例えば、

```
<del>
  <span
    class="deleted-note"
    data-deleted-target="deleted-note"
  >
    旧ノート名
  </span>
</del>
<span class="deleted-note-status">
  （削除済み）
</span>
```

のようにする。

重要なのは、

```
href
```

が存在しないこと。

---

# 28. `data-*` 属性の位置づけ

例えば、

```
data-deleted-target="deleted-note"
```

を残せば、

- 人間にはリンクとして見せない
- crawlerにもリンクとして渡さない
- 元リンク先情報はHTML上に保持
- 将来自前ツールから解析可能

となる。

ただし `data-*` はGoogleやOpenAIに対するSEOメタデータではない。

あくまで、

> **自分のWebシステム内で使うmetadata**

として利用する。

---

# 29. Quartz Graphとの関係

重要な追加論点として、QuartzではHTMLだけでなく、

```
file.data.links
```

などの内部リンクデータを使ってGraph等を生成する。

そのため、

```
<a> → <span>
```

だけ変換しても、

> Quartz Graph上にはdeleted noteへのedgeが残る

可能性がある。

したがって完全な実装では、

```
公開HTML
+
Quartz内部outgoing links
```

の両方を処理する必要がある。

ただしこれは実装難易度が少し上がる。

---

# 30. Tombstoneページ案

削除ノートを完全に削除せず、

```
# 旧ノート

このノートは廃止されました。

後継：
[[新ノート]]
```

のようなtombstoneページを残す方法も検討した。

これは、

- 重要概念
- 長期間参照されたページ
- 多数の被リンクがあるページ
- 大規模な概念変更
- 統合・置換履歴そのものが重要

な場合には有効。

しかし全削除ノートへ適用すると、

```
通常ノート
+
大量のTombstone
```

となり、Vaultが膨張する。

したがって、

> 通常削除 → Historical Linkだけ残す  
> 重要な概念変更 → Tombstone

という使い分けが適切。

---

# 31. 将来的な状態分類

長期的には、削除理由を分類するとさらに管理しやすい。

|状態|意味|公開側|
|---|---|---|
|deleted|不要になった|非リンク|
|merged|他ノートへ統合|後継へ案内 / redirect|
|superseded|新ノートに置換|後継へ案内|
|renamed|内容同一で名称変更|redirect|
|private|存在するが非公開|非リンク|
|broken|typo等|修正対象|

ただし現時点で独自Markdown構文を作る必要まではない。

まずは、

```
~~[title](slug.md)~~
```

をhistorical linkと定義するだけで十分。

---

# 32. 実装候補と難易度

|難易度|方法|評価|
|---|---|---|
|低|Quartzのbroken class + CSS|暫定対応|
|低〜中|`<del>` 内broken linkを `<span>` へ変換|第一候補|
|中|上記 + Quartz Graphからhistorical edge除外|最終候補|
|中|deleted-note registry管理|件数増加後に検討|
|中|重要ノートだけtombstone|補助策|
|高|deleted / merged / superseded等の独自構文|現時点では過剰|

---

# 33. 第一候補となった実装

最もバランスが良いのは、

```
Obsidian
↓
~~[削除済み](slug.md)~~
↓
Quartz Build
↓
Historical Linkを検出
↓
<a href>を<span>へ変換
↓
公開
```

という構成。

さらに理想的には、

```
broken + <del>
↓
Intentional Historical Link
↓
非リンク化

broken + 非<del>
↓
Accidental Broken Link
↓
警告 / 修正対象
```

とする。

これが今回の設計上、最も重要なルールとなった。

---

# 34. 今すぐ実装するべきか

結論は、

> **現時点では大規模な実装は不要。**

dead linkがまだ少数なら、

- SEOへの重大な影響はない
- crawl budget問題も実質的に小さい
- Quartzカスタム実装のコストの方が大きい

可能性が高い。

一方で、

> **記法と運用ルールだけは今決める**

べき。

---

# 35. 当面の運用ルール

現段階では次の運用でよい。

1. 削除ノートへの過去リンクは原則消さない
2. 意図的削除なら、

```
~~[旧ノート](old-note.md)~~
```

とする  
3. 普通の、

```
[旧ノート](old-note.md)
```

がリンク切れしていた場合は、Historical Linkとはみなさない  
4. typoやリネーム漏れとして確認する  
5. 後継ノートがある場合は単なるdeletedではなく、merged / replaced / renamedとして扱う  
6. Web上でbroken linkが目立つ量になった段階でQuartz変換を実装する

---

# 36. 今回の最終評価

## A. `~~[title](slug.md)~~` 運用

**修正して継続。**

Obsidian内部では維持する。

問題はMarkdown記法ではなく、

> Quartz公開時も `<a href>` のまま残してしまうこと。

---

## B. 推奨アーキテクチャ

```
Obsidian
↓
知識履歴を完全保持
↓
~~[旧ノート](deleted.md)~~
↓
Quartz Build
↓
Historical Link判定
↓
Webではhrefを除去
↓
旧ノート（削除済み）
```

---

## C. 実装優先順位

1. まず記法・運用ルールを固定
2. dead link件数を増やしても同じ形式を維持
3. 必要になった段階でQuartz Transformer導入
4. さらに必要ならGraph / outgoing link処理まで拡張
5. Tombstoneや削除台帳は必要性が出てから追加

---

# 37. 設計思想として得られた結論

今回の問題は、

> SEOのためにZettelkastenの履歴を捨てるか

という二択ではない。

適切には、

```
Obsidian
=
知識・思考・履歴のSource of Truth

Quartz
=
現在有効な知識を公開するPresentation / Web Layer
```

として分離する。

つまり、

> **Human-readable HistoryとMachine-readable Webを別レイヤーで扱う。**

Obsidianでは知識履歴を最大限残し、

Quartzでは現在のユーザー・検索エンジン・AI crawlerに必要な情報だけをWebリンクとして提示する。

---

# 38. Decisions

今回決まった方針。

- `~~[title](slug.md)~~` は廃止しない
- Intentional Historical Linkのマーカーとして利用する
- accidental broken linkとは明確に区別する
- Obsidianでは削除履歴を保持する
- Quartz公開時には将来的に非リンク化する
- CSSだけの無効化では不十分
- `nofollow` は本問題の解決策ではない
- 404自体はGoogleのSEOペナルティではない
- 重要なのは内部リンク構造の品質
- 後継ノートがある場合はredirectを検討
- 通常削除と重要概念の削除を分ける
- 重要な削除のみtombstoneを候補とする
- Quartz Graphを正確にする場合はHTMLだけでなくoutgoing links処理も必要
- dead linkが少ない現段階では実装を急がない
- 先にsemantic conventionを確定する

---

# 39. Outstanding Issues

今後実装する場合に決める必要がある事項。

- `<del>` 内のすべてのリンクをHistorical Linkとみなすか
- broken linkであることも同時条件とするか
- privateノートへのリンクをどう扱うか
- merged / renamed / supersededの情報をどこへ保存するか
- Tombstoneを作る基準
- Quartz GraphからHistorical Edgeを除外するか
- Obsidian GraphではHistorical Edgeを表示するか
- 削除日時を保存するか
- 元ノートタイトルだけでなくslugも保存するか
- 公開表示を、
    - `旧ノート`
    - `旧ノート（削除済み）`
    - 取り消し線のみ  
        のどれにするか
- Historical LinkをAIによるVault分析へどう利用するか

---

# 40. Next Actions

現時点ではコード変更を行わず、次の順序が適切。

1. `~~[title](slug.md)~~` をIntentional Historical Linkの正式ルールとして決める
2. Zettelkasten整理ルールへ追加する
3. 今後ノート削除・統合時に同じ形式を使う
4. broken link件数を定期的に確認する
5. 公開サイトでUX上の問題が出始めた段階でQuartz実装を検討する
6. 実装前に、
    - 成功条件
    - 対象範囲
    - Quartzバージョン
    - Plugin実行順
    - Graph処理
    - rollback方法  
        を含む実装計画を作る
7. 計画承認後に初めてQuartz側を変更する

---

# 最終要約

今回の結論を一文で表すと、

> **削除済みノートへのリンクはObsidianでは知識履歴として残し、Quartz公開時には現在有効なWebリンクではないものとして非リンク化する。**

これにより、

```
Zettelkasten履歴
+
公開UX
+
SEO
+
AI検索
+
長期運用性
```

を両立できる。

現時点では仕組みを作り込みすぎず、

```
~~[旧ノート](old-note.md)~~
```

というsemantic conventionを先に固定しておき、必要になった時点でQuartz build-time変換へ進むのが最も合理的。

この内容は、そのまま今回のZettelkasten運用方針の決定ログや、将来のQuartz実装計画の前提資料として使える形になっています。