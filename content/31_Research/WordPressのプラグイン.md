---
title: WordPressのプラグイン
aliases:
  - WordPressのプラグイン
type:
created: 2026-06-12T23:56:19+09:00
updated: 2026-09-01T19:28:44+09:00
id: 20260612-235619
permalink:
draft: true
tags:
  - ai-generated
---
チャットの最初からここまでの内容を整理して、詳細にまとめて


以下、**チャットの最初からここまで**の内容を、流れ・判断基準・実務手順として整理します。  
目的は、WordPressプラグイン更新時に「なるべく壊さず、壊れても戻せる」運用を作ることです。

---

# 1. 最初の相談内容

最初の質問は、

> WordPressのプラグインを更新して問題が発生することはどれくらいありますか？

というものでした。

ここでは、WordPressプラグイン更新による不具合は**頻繁ではないが、ゼロではない**という話をしました。

目安としては、公式な統計ではないものの、一般的には**全体のごく一部、ざっくり1〜5%程度の更新で何らかの不具合が起きる可能性がある**、という整理でした。

ただし、実際のリスクはサイト構成によって大きく変わります。

特にリスクが上がるのは、以下のようなサイトです。

- 商用サイト
- アクセス数が多いサイト
- 独自カスタマイズが多いサイト
- テーマやブロックに依存しているサイト
- SEO、多言語、リダイレクト、カスタム投稿タイプなどを多用しているサイト
- 複数プラグインが同じ領域を触っているサイト

つまり、**プラグイン更新そのものが危険**というより、  
**複数のプラグインやテーマが同じ機能領域に関わっている場合に、更新で不整合が起きやすい**という話です。

---

# 2. よくある不具合の種類

WordPressプラグイン更新で起こり得る問題として、以下を挙げました。

|不具合|内容|
|---|---|
|サイトが真っ白になる|PHPエラー、Fatal Error、互換性問題など|
|レイアウトが崩れる|CSS、JS、ブロック仕様変更など|
|管理画面に入れなくなる|セキュリティ系、ログイン系、PHPエラーなど|
|プラグイン同士の競合|同じ機能を複数プラグインが処理している場合|
|表示順や分類が崩れる|カテゴリ、投稿タイプ、並び順系の更新|
|SEO出力が変わる|meta、canonical、sitemap、breadcrumb、hreflangなど|
|計測タグが重複する|Site KitとMonsterInsightsなど|
|パフォーマンス低下|更新後の処理増加や外部通信増加|
|データや設定の不整合|DB設定、フォーム、SEO、並び順など|

特に重要なのは、**ファイルだけではなくデータベース側の設定も関係する**という点です。

そのため、バックアップでは「プラグインファイルだけ」ではなく、**DBも含める**のが安全です。

---

# 3. UpdraftPlusでバックアップしておけば戻せるのか

次に、

> UpdraftPlusで事前にバックアップを取得してから更新。問題があれば「UpdraftPlus」からpluginを復元するだけでよい？

という質問がありました。

結論としては、

**基本的にはそれでよい。ただし、不具合の内容によってはプラグインだけでなくDBやテーマも戻す必要がある**

という整理でした。

UpdraftPlusでは、以下のような単位でバックアップ・復元ができます。

|復元対象|内容|
|---|---|
|Plugins|プラグイン本体|
|Themes|テーマ|
|Uploads|メディアファイル|
|Database|投稿、設定、ユーザー、プラグイン設定など|
|Others|その他のファイル類|

プラグイン更新による不具合が明確で、ファイルだけの問題なら、**該当プラグインの復元**で戻せる可能性が高いです。

ただし、プラグイン更新時にDB構造や設定を書き換えるタイプの場合、プラグインだけ戻しても完全には戻らないことがあります。

そのため、基本方針は以下です。

- 軽微な表示崩れやプラグインファイル由来の問題  
    → **該当プラグインのみ復元**
- 設定、フォーム、SEO、リダイレクト、並び順などが変わった  
    → **DBも復元候補**
- どこが原因かわからない、サイト全体がおかしい  
    → **直前バックアップへ全体復元**

---

# 4. 管理画面に入れない場合の対処

UpdraftPlusで復元するには、基本的にはWordPress管理画面に入れる必要があります。

しかし、プラグイン更新によって管理画面に入れなくなることもあります。

その場合は、

1. FTP
2. サーバーのファイルマネージャー
3. SSHが使えるならコマンド操作

などで、問題のプラグインフォルダを一時的にリネームまたは削除します。

例：

```
wp-content/plugins/problem-plugin↓wp-content/plugins/problem-plugin_disabled
```

これにより、そのプラグインが強制的に無効化され、管理画面へ戻れる可能性があります。

管理画面に戻れたら、UpdraftPlusから復元します。

つまり、復旧の考え方は、

> 管理画面に入れるならUpdraftPlus  
> 入れないならFTP等で問題プラグインを無効化 → 管理画面復帰 → UpdraftPlus

です。

---

# 5. 使用中プラグイン一覧

ユーザーが提示したインストール済みプラグインは以下でした。

```
WPS Hide LoginAll-in-One WP MigrationRedirectionShow Current TemplateSite Kit by GoogleVK BlocksEWWW Image OptimizerGTranslateUpdraftPlus - Backup/RestoreAll in One SEO (AIOSEO)Breadcrumb NavXTCategory Order and Taxonomy Terms OrderCustom Field SuiteCustom Post Type UIGoogle Analytics for WordPress by MonsterInsightsIntuitive Custom Post OrderLayout GridMW WP FormOptinMonsterPost Types OrderSafe SVGSnow Monkey BlocksWordfence SecurityWP Multibyte Patch
```

最初は脆弱性寄りの話も出ましたが、ユーザーの意図はそこではなく、

> アップデート時に競合して問題が起きないか

という**運用上の更新リスク**の話でした。

そのため、途中で整理し直し、**アップデート時の競合・依存関係・注意点**に焦点を当てました。

---

# 6. 更新リスクの考え方

プラグイン更新リスクは、単純に「有名かどうか」「安全かどうか」ではなく、以下で判断します。

## リスクが高くなりやすい条件

- サイトのURL構造を変える
- SEOタグを出力する
- canonicalやsitemapを扱う
- hreflangや多言語URLを扱う
- 投稿タイプやタクソノミーを扱う
- 並び順を制御する
- ブロックエディタやCSSに関わる
- セキュリティ制御を行う
- フォームや計測など外部連携を持つ

逆に、単独で完結し、表示やURL構造にあまり影響しないものは比較的低リスクです。

---

# 7. 競合リスクが高いプラグイン群

## 7-1. AIOSEO

**All in One SEO（AIOSEO）**はリスク高めです。

理由は、サイト全体のSEO出力に関わるためです。

関係しやすいものは以下です。

- Redirection
- GTranslate
- Breadcrumb NavXT
- Site Kit
- MonsterInsights
- カテゴリ・投稿タイプ・並び順系

影響し得る内容は、

- title
- meta description
- canonical
- sitemap
- schema
- breadcrumb
- noindex
- hreflang
- OGP
- URL評価

などです。

AIOSEOは、**表示そのものが壊れるというより、検索エンジン向け出力が変わるリスク**があります。

そのため、更新後は見た目だけではなく、ソースやSEO設定も確認する必要があります。

---

## 7-2. GTranslate

**GTranslate**もリスク高めです。

理由は、多言語URL、hreflang、翻訳ページ、SEO出力に関係するからです。

特にAIOSEOとの関係が重要です。

確認すべき点は、

- 言語切替ができるか
- 翻訳ページのURLが正しく動くか
- hreflangが重複・欠落していないか
- canonicalが変になっていないか
- 重要ページが意図せず翻訳URLへ飛ばないか

です。

GTranslateは**最後に更新する**方針になりました。

理由は、他のSEO・URL構造系の影響を受けやすく、先に更新すると原因切り分けが難しくなるからです。

---

## 7-3. Redirection

**Redirection**は中〜高リスクです。

リダイレクトルールを管理するため、URL遷移に影響します。

AIOSEOやGTranslateと直接同じ機能ではないものの、URL構造やcanonical、言語別URLなどと絡む可能性があります。

確認すべき点は、

- 主要な301/302が正しく動くか
- 意図しないリダイレクトループがないか
- 旧URLから新URLへ飛ぶか
- 多言語URLと衝突しないか

です。

---

## 7-4. Breadcrumb NavXT

**Breadcrumb NavXT**はパンくずに関わります。

AIOSEOもパンくずやschemaを扱う可能性があるため、競合確認が必要です。

確認すべき点は、

- 画面上のパンくずが正しいか
- カテゴリ階層が正しいか
- 構造化データが二重になっていないか
- AIOSEO側のパンくずと重複していないか

です。

---

# 8. ブロック系プラグインのリスク

ブロック系として、以下がありました。

- VK Blocks
- Snow Monkey Blocks
- Layout Grid

これらは**中〜高リスク**です。

理由は、WordPress本体のブロックエディタ、テーマ、CSS、JS、フロント表示に関わるためです。

更新で起き得る問題は、

- ブロックエディタが開かない
- 編集画面でエラーが出る
- 既存ブロックの表示が崩れる
- CSSが変わって余白やカラムが崩れる
- フロントと管理画面で表示差が出る
- テーマとの相性が悪くなる

などです。

特にWordPress本体を更新した直後は、Gutenberg周りの仕様変更と重なるため要注意です。

ブロック系は、**1つずつ更新して、主要ページの表示と編集画面を確認する**方針になりました。

---

# 9. CPT・フィールド・並び順系のリスク

対象は以下です。

- Custom Post Type UI
- Custom Field Suite
- Post Types Order
- Intuitive Custom Post Order
- Category Order and Taxonomy Terms Order

これらは**中リスク**です。

理由は、投稿タイプ、カスタムフィールド、カテゴリ、タクソノミー、並び順に関わるためです。

更新によって起こり得る問題は、

- カスタム投稿タイプの表示が変わる
- アーカイブページが崩れる
- カスタムフィールドが表示されない
- 並び順が反映されない
- 管理画面上の並び順がリセットされたように見える
- テーマ側のクエリと噛み合わなくなる
- パンくず階層に影響する

です。

この系統は、更新前に

- 代表ページ
- カテゴリ一覧
- カスタム投稿一覧
- 並び順
- 管理画面の表示

をスクショしておくと、更新後の差分確認がしやすいです。

---

# 10. セキュリティ系のリスク

## Wordfence Security

Wordfenceは、サイトを守るプラグインですが、更新時には少し注意が必要です。

理由は、他プラグインの更新処理や外部通信を「怪しい動き」と判断してブロックする可能性があるからです。

影響し得るものは、

- AIOSEO
- GTranslate
- All-in-One WP Migration
- Site Kit
- MonsterInsights
- OptinMonster
- 外部API連携系

などです。

更新作業中は、

- 学習モード
- 一時的な緩和
- 更新後にログ確認
- 必要に応じてホワイトリスト/除外

という運用が推奨されました。

---

## WPS Hide Login

WPS Hide LoginはログインURL変更系です。

比較的低リスクですが、ログインURLに関わるため、

- 更新後にログインできるか
- Wordfenceと干渉しないか
- キャッシュが絡んでいないか

は確認した方がよいです。

ただし、全体としては低リスク側に分類しました。

---

# 11. 計測・外部連携系の注意点

対象は以下です。

- Site Kit by Google
- Google Analytics for WordPress by MonsterInsights
- OptinMonster

特に注意したのは、**Site KitとMonsterInsightsの二重計測**です。

両方がGA4タグを出力している場合、ページビューが二重計測される可能性があります。

更新後に確認すべき点は、

- GA4リアルタイムで1回のアクセスが1回として計測されるか
- 同じタグが二重に入っていないか
- Site Kit側・MonsterInsights側のどちらが計測担当なのか
- OptinMonsterの表示やトリガーが変わっていないか

です。

計測系はサイト表示を壊すリスクは比較的低いですが、**データが狂うと後から気づきにくい**ため確認が必要です。

---

# 12. フォーム系の注意点

対象は、

- MW WP Form

です。

MW WP Formは比較的独立していますが、更新後には必ずテスト送信するべきです。

確認項目は、

- 入力画面
- 確認画面
- 完了画面
- メール送信
- 管理者宛メール
- 自動返信メール
- バリデーション
- スパム対策
- フォーム埋め込みページの表示

です。

フォームは、見た目だけでは正常か判断できないため、**実際に送信テスト**するのが重要です。

---

# 13. 画像・SVG系の注意点

対象は、

- EWWW Image Optimizer
- Safe SVG

です。

EWWW Image Optimizerは画像最適化系、Safe SVGはSVGアップロード・表示系です。

競合リスクは高くないですが、SVGを扱っている場合は少し注意が必要です。

確認すべき点は、

- SVG画像が表示されるか
- 画像が壊れていないか
- 画像最適化後に表示が変になっていないか
- ロゴやアイコンが消えていないか

です。

特に、サイトのロゴやアイコンにSVGを使っている場合は確認必須です。

---

# 14. 比較的低リスクなプラグイン

以下は比較的低リスクと整理しました。

- Show Current Template
- WP Multibyte Patch
- UpdraftPlus
- All-in-One WP Migration
- WPS Hide Login
- EWWW Image Optimizer
- Safe SVG
- MW WP Form
- Site Kit
- MonsterInsights
- OptinMonster

ただし、低リスク＝確認不要ではありません。

低リスク帯は、

> 1つずつバックアップまでは不要。  
> 2〜5個まとめて更新して、軽く確認する。

という扱いです。

---

# 15. 更新順の最終整理

ユーザーは、

> 更新リスクの低いものから更新したい

と希望しました。

それに対して、低リスクから高リスクへ、以下の順番を提案しました。

---

## STEP1：基盤・単独系

最も低リスク寄り。

1. Show Current Template
2. WP Multibyte Patch
3. UpdraftPlus – Backup/Restore
4. All-in-One WP Migration
5. WPS Hide Login
6. EWWW Image Optimizer
7. Safe SVG

確認項目：

- トップページ
- 記事ページ1本
- 画像表示
- SVGを使っているページ
- ログインURL

---

## STEP2：フォーム・計測系

軽めだが、テストは必要。

8. MW WP Form
9. Site Kit by Google
10. Google Analytics for WordPress by MonsterInsights
11. OptinMonster

確認項目：

- フォーム送信
- 自動返信メール
- GA4計測
- タグの二重計測
- OptinMonster表示

---

## STEP3：CPT・フィールド・並び順系

中リスク。

12. Custom Post Type UI
13. Custom Field Suite
14. Post Types Order
15. Intuitive Custom Post Order
16. Category Order and Taxonomy Terms Order

確認項目：

- カスタム投稿タイプ
- カスタムフィールド
- 投稿一覧
- カテゴリ一覧
- 並び順
- パンくず
- アーカイブページ

---

## STEP4：構造・セキュリティ系

中リスク。

17. Redirection
18. Breadcrumb NavXT
19. Wordfence Security

確認項目：

- 代表的な301/302
- リダイレクトループなし
- パンくず階層
- 構造化データ
- Wordfenceログ
- 管理画面操作

---

## STEP5：ブロック系

中〜高リスク。

20. Layout Grid
21. VK Blocks
22. Snow Monkey Blocks

確認項目：

- ブロックエディタが開くか
- 主要固定ページの編集画面
- フロント表示
- 余白・カラム・ボタン・装飾
- CSS崩れ
- テーマとの相性

---

## STEP6：SEO → 多言語

最も注意。

23. All in One SEO（AIOSEO）
24. GTranslate

確認項目：

- title
- meta description
- canonical
- sitemap
- schema
- breadcrumb schema
- hreflang
- 多言語URL
- 言語切替
- 重要ページの表示
- Google向け出力

このSTEP6は、**AIOSEO更新後に確認 → バックアップ → GTranslate更新**という慎重な運用が推奨されました。

---

# 16. バックアップは一つ更新するたびに必要か

次にユーザーは、

> 一つ更新するたびにバックアップを取るべき？

と質問しました。

結論は、

**毎回は不要。チェックポイント方式がよい。**

です。

毎回バックアップを取ると安全ではありますが、手間が大きすぎます。

そのため、

- 低リスク帯：数個まとめて更新
- 中〜高リスク帯：セクションごと、または重要プラグイン直前にバックアップ
- 最後に最終バックアップ

という形に整理しました。

---

# 17. チェックポイント方式の詳細

推奨したバックアップ方針は以下です。

## 開始前

UpdraftPlusでフルバックアップ。

含めるもの：

- Plugins
- Themes
- Uploads
- Database
- Others

特に、**Databaseは必ず含める**。

理由は、SEO設定、フォーム設定、リダイレクト設定、並び順、CPT設定などがDB側にあるためです。

---

## STEP1〜STEP2

低リスク帯なので、毎回バックアップは不要。

運用イメージ：

- 2〜5個更新
- 表示確認
- 問題なければ次へ

---

## STEP3開始前

CPT・フィールド・並び順系に入る前にフルバックアップ。

理由：

- 投稿タイプや並び順はDB設定と関係する
- 表示構造に影響しやすい
- 元に戻すにはDB復元が必要になる場合がある

---

## STEP4開始前

Redirection、Breadcrumb、Wordfenceに入る前にフルバックアップ。

理由：

- URL遷移
- パンくず
- 構造化データ
- セキュリティ設定

に関わるため。

---

## STEP5開始前

ブロック系に入る前にフルバックアップ。

理由：

- 主要ページのレイアウト崩れ
- ブロックエディタ不具合
- テーマとの互換性問題

があり得るため。

---

## STEP6では個別バックアップ

AIOSEOとGTranslateは特に注意。

推奨手順：

1. AIOSEO直前にフルバックアップ
2. AIOSEO更新
3. SEO出力確認
4. 問題なければフルバックアップ
5. GTranslate更新
6. 多言語・hreflang確認

です。

---

## 完了後

全体が正常なら最終フルバックアップ。

これは、今後の復元基準として「更新完了後の正常状態」を保存するためです。

---

# 18. バックアップ名の付け方

バックアップは、何の前に取ったものか分かるように名前を付けるのがよいです。

例：

```
pre-update-all-20260612pre-CPT-group-20260612pre-Redirection-Breadcrumb-Wordfence-20260612pre-blocks-20260612pre-AIOSEO-20260612pre-GTranslate-20260612post-all-updated-20260612
```

UpdraftPlusの仕様によって自由なラベル管理ができる範囲は変わりますが、少なくともメモやスクショで対応しておくと復元時に迷いません。

保持世代は、

**3〜5世代**

を目安としました。

---

# 19. 更新前チェックリスト

更新前にやることは以下です。

## 必須

- UpdraftPlusでフルバックアップ
- DBを含める
- 現在のプラグイン一覧をスクショ
- 更新対象プラグインを把握
- WordPress本体・PHPバージョンを確認
- 管理画面にログインできることを確認
- FTPまたはサーバーファイルマネージャに入れることを確認

## 高リスク前に推奨

- AIOSEO設定のスクショ
- GTranslate設定のスクショ
- Redirectionルールのエクスポートまたはスクショ
- パンくず表示のスクショ
- カテゴリ一覧・並び順のスクショ
- カスタム投稿一覧のスクショ
- 主要固定ページのスクショ
- フォームの送信テスト前状態確認

---

# 20. 更新後チェックリスト

更新後には、プラグインの種類ごとに確認します。

## 共通確認

- トップページが表示される
- 代表記事が表示される
- 固定ページが表示される
- 管理画面に入れる
- エラーが出ていない
- スマホ表示で大きな崩れがない

## SEO確認

- title
- meta description
- canonical
- noindex
- sitemap
- schema
- パンくず構造化データ

## 多言語確認

- 言語切替
- 翻訳URL
- hreflang
- canonical
- 重要ページの表示

## リダイレクト確認

- 主要旧URLから新URLへ飛ぶ
- ループしていない
- 404になっていない
- 多言語URLと干渉していない

## ブロック確認

- 編集画面が開く
- 主要ページのブロックが壊れていない
- カラムや余白が崩れていない
- 公開プレビューが正常

## フォーム確認

- 入力
- 確認
- 完了
- 管理者メール
- 自動返信メール

## 計測確認

- GA4リアルタイム
- 二重計測なし
- Site KitとMonsterInsightsの役割確認

## セキュリティ確認

- Wordfenceログ
- 誤ブロックなし
- ログインURL正常
- 管理操作がブロックされていない

---

# 21. 不具合が出た場合のロールバック

不具合発生時の基本手順は以下です。

1. 直前に更新したプラグインを確認
2. どの機能が壊れたか確認
3. UpdraftPlusで該当プラグインのみ復元
4. 改善しない場合はDBも含めて直前バックアップへ戻す
5. 管理画面に入れない場合はFTPで問題プラグインを一時無効化
6. 管理画面復帰後にUpdraftPlusで復元
7. 再更新する場合は順番を変える、または情報収集してから行う

重要なのは、**一括更新しないこと**です。

一括更新すると、何が原因で壊れたのか分からなくなります。

そのため、少なくとも中〜高リスク帯は**1つずつ更新**が安全です。

---

# 22. 同時更新を避けるべき組み合わせ

特に同時更新NGとしたのは以下です。

## AIOSEO × GTranslate

理由：

- canonical
- hreflang
- 多言語URL
- sitemap
- SEO出力

が絡むため。

## AIOSEO × Redirection

理由：

- canonicalとリダイレクトの整合性
- URL正規化
- 旧URL/新URLの扱い

が絡むため。

## AIOSEO × Breadcrumb NavXT

理由：

- パンくず表示
- schema
- 構造化データの重複

が絡むため。

## ブロック系まとめ更新

理由：

- どのブロックが崩れたか分からなくなる
- テーマとの相性問題を切り分けにくい

## CPT/並び順系まとめ更新

理由：

- 並び順不具合の原因が分からなくなる
- カテゴリ、投稿タイプ、フィールド、テーマのどれが原因か切り分けにくい

---

# 23. 実務用の推奨オペレーション

最終的な運用としては、以下がベストです。

## 実行手順

1. 開始前にUpdraftPlusでフルバックアップ
2. STEP1の低リスク系を数個更新
3. トップ・記事・画像・ログイン確認
4. STEP2のフォーム・計測系を更新
5. フォーム送信、GA4、OptinMonster確認
6. STEP3前にフルバックアップ
7. CPT・フィールド・並び順系を1つずつ更新
8. 並び順・アーカイブ・カスタム投稿確認
9. STEP4前にフルバックアップ
10. Redirection、Breadcrumb、Wordfenceを更新
11. 主要リダイレクト、パンくず、Wordfenceログ確認
12. STEP5前にフルバックアップ
13. ブロック系を1つずつ更新
14. 主要ページの編集画面とフロント表示確認
15. AIOSEO前にフルバックアップ
16. AIOSEO更新
17. SEO出力確認
18. GTranslate前にフルバックアップ
19. GTranslate更新
20. 多言語・hreflang確認
21. 問題なければ最終フルバックアップ

---

# 24. まとめ：今回決めた運用方針

今回のチャットで固まった方針は、以下です。

## 基本方針

- 更新は低リスクから行う
- 一括更新は避ける
- 高リスク系は1つずつ更新
- 毎回バックアップではなく、チェックポイント方式
- DBも含めたフルバックアップを取る
- 問題が出たら直前更新分を戻す
- 管理画面に入れない場合はFTPでプラグインを無効化する

## 最も注意する領域

- AIOSEO
- GTranslate
- Redirection
- Breadcrumb NavXT
- ブロック系
- CPT・フィールド・並び順系
- Wordfence

## 低リスクで先に更新しやすいもの

- Show Current Template
- WP Multibyte Patch
- UpdraftPlus
- All-in-One WP Migration
- WPS Hide Login
- EWWW Image Optimizer
- Safe SVG
- MW WP Form
- Site Kit
- MonsterInsights
- OptinMonster

## バックアップ方針

- 開始前：フルバックアップ
- STEP3前：フルバックアップ
- STEP4前：フルバックアップ
- STEP5前：フルバックアップ
- AIOSEO前：フルバックアップ
- GTranslate前：フルバックアップ
- 完了後：フルバックアップ

---

# 25. 最終的な一言

今回の話を一言でまとめるなら、

**「プラグイン更新は怖がって止めるものではなく、順番・バックアップ・確認ポイントを決めて、壊れても戻せる状態で進めるもの」**

です。

あなたの構成では、特に  
**AIOSEO / GTranslate / Redirection / Breadcrumb NavXT / ブロック系 / CPT・並び順系**  
を慎重に扱えば、かなり安全に更新できます。
