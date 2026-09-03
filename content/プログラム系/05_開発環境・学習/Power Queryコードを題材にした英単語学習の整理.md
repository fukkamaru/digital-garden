---
title: Power Queryコードを題材にした英単語学習の整理
aliases:
  - Power Queryコードを題材にした英単語学習の整理
type:
created: 2026-09-03T22:23:10+09:00
updated: 2026-09-04T01:48:31+09:00
id: 20260903-222310
permalink:
draft: true
tags:
---

## このチャットでやりたかったこと

当初は、Power Query の M コードについて、コードの書き方や表記が適切かを確認するところから始まった。その後、コード中に登場する英語に着目し、最終的には **Power Query やプログラミングの勉強ではなく、入力したコードを題材に英単語そのものを学習する** 方向へ目的が明確化された。

特に重要だったのは、変数名・関数名・メソッド名のように複数語を連結して作られている識別子を、そのまま1語として扱うのではなく、**実際の英単語単位へ分解する** ことだった。

たとえば、

- `Workbook` → 分解しない
    - `workbook` という独立した英単語として存在するため
- `CustomerCodeNameTable` → `Customer` / `Code` / `Name` / `Table`
- `TransformColumnTypes` → `Transform` / `Column` / `Types`
- `GetTableFromExcel` → `Get` / `Table` / `From` / `Excel`
- `SelectAndSortColumns` → `Select` / `And` / `Sort` / `Columns`

という考え方で整理することになった。

---

## 入力された主な Power Query コード

チャット内では、複数の Power Query クエリ・関数が提示された。

大きく分けると、次のような内容だった。

|種類|主な内容|
|---|---|
|CleanedDataTbl 読み込み|Excel ファイルから `CleanedDataTbl` を取得し、型変換・列選択・フィルタ・FiscalYear・SalesId追加|
|ImportedFilesTbl 読み込み|`ImportedFilesTbl` を取得し、`AnalysisPeriod` と `FileName` をテキスト型へ変換|
|列情報取得|`GetColumnDetails` 関数を使い、列名と列型を取得|
|年度比較集計|PY / CY の得意先・商品別集計を FullOuter Join し、増減比などを計算|
|CY 得意先別小計|本年度データを得意先単位に集約し、売上小計を作成|
|PY 得意先×商品別集計|昨年度の売上金額・数量・単価を集計|
|置換マスター読み込み|顧客・商品・文字種・記号・単位などの正規化マスターを Excel から取得|

また、次の関数も提示された。

```powerquery
let
    GetColumnDetails = (tableName as table) as table =>
    let
        Schema = Table.Schema(tableName),
        SelectedColumns = Table.SelectColumns(Schema, {"Name", "TypeName"}),
        RenamedColumns = Table.RenameColumns(
            SelectedColumns,
            {
                {"Name", "ColumnName"},
                {"TypeName", "ColumnType"}
            }
        )
    in
        RenamedColumns
in
    GetColumnDetails
```

---

## Power Query コードの表記についての確認

コード自体については、全体として次のような特徴があった。

- `let ... in ...` の基本構造を守っている
- ステップ名を英語の PascalCase で記述している
- コメントで処理内容を説明している
- `Table.TransformColumnTypes`
- `Table.SelectColumns`
- `Table.SelectRows`
- `Table.AddColumn`
- `Table.RemoveColumns`
- `Table.RenameColumns`
- `Table.NestedJoin`
- `Table.ExpandTableColumn`
- `Table.Group`
- `Table.Sort`

など、Power Query M の標準関数を段階的に利用している。

一時、共通処理を関数化する案も提示されたが、今回の英語学習という最終目的とは直接関係しないため、最終的にはコード改善より **コード中の英語の抽出と学習** が中心テーマになった。

---

## 置換マスター系クエリ

次のようなマスター読み込みクエリも提示された。

|クエリ名|用途|
|---|---|
|`customer_code_name_replacement_tbl`|顧客コード・名称の置換|
|`hankaku_katakana_to_zenkaku_tbl`|半角カタカナ → 全角カタカナ|
|`zenkaku_alphanumeric_to_hankaku_tbl`|全角英数字 → 半角英数字|
|`symbol_replacement_tbl`|記号置換|
|`unit_simbol_replacement_tbl`|単位記号置換|
|`product_code_name_replacement_tbl`|商品コード・名称の置換|

これらでは共通して、

```text
Source
ChangedType
ConvertedTypes
SelectedColumns
SortedRows
CustomerCodeNameTable
ProductCodeNameReplacementTable
HankakuToZenkakuTable
ZenkakuToHankakuTable
SymbolReplacementTable
UnitSymbolReplacementTable
```

といった英語のステップ名・変数名が使われていた。

---

## 英単語抽出について決まったルール

途中で何度か認識のずれがあったが、最終的なルールは明確になった。

### 1. 連結された識別子は単語に分解する

たとえば、

```text
CustomerCodeNameTable
```

は、

```text
Customer
Code
Name
Table
```

に分ける。

同様に、

```text
TransformColumnTypes
```

は、

```text
Transform
Column
Types
```

とする。

### 2. 独立した英単語は無理に分解しない

`Workbook` は、

```text
Work
Book
```

に分けない。

`workbook` 自体が「練習帳、学習帳」という独立した英単語だからである。

同様に、

- `customer`
- `replacement`
- `alphanumeric`
- `ascending`
- `contents`

なども、それぞれ1単語として扱う。

### 3. メソッド名・関数名も分解対象

変数名だけでなく、Power Query の標準関数名も対象。

例：

|元の表記|分解|
|---|---|
|`Table.SelectColumns`|Table / Select / Columns|
|`Table.TransformColumnTypes`|Table / Transform / Column / Types|
|`Table.ExpandTableColumn`|Table / Expand / Table / Column|
|`Table.AddColumn`|Table / Add / Column|
|`Table.RemoveColumns`|Table / Remove / Columns|
|`Table.RenameColumns`|Table / Rename / Columns|
|`Table.SelectRows`|Table / Select / Rows|
|`Table.FirstN`|Table / First / N|
|`Text.End`|Text / End|
|`Text.From`|Text / From|
|`Excel.Workbook`|Excel / Workbook|
|`File.Contents`|File / Contents|

### 4. 重複語は学習用一覧では基本的に1回にまとめる

たとえば `Table` や `Column` は多数登場するが、英単語学習用一覧では重複させる必要はない。

---

## 英単語学習表に必要なカラム

最終的に、各英単語について次の項目を整理することになった。

|カラム|内容|
|---|---|
|英単語|単語そのもの|
|発音記号（US）|アメリカ英語の IPA|
|音節|音節ごとの区切り|
|音節数|音節の数|
|アクセント位置|主強勢がどの音節にあるか|
|品詞|名詞・動詞・形容詞・副詞など|
|意味|一般英語としての主要な意味|

ここで特に重要なのは、**意味欄をプログラミング用語の説明にしないこと**。

たとえば、

> `let`：プログラミングでは変数の宣言

のような説明は不要。

目的は英語学習なので、

> `let`：～させる、許可する、貸す

のように、一般英語として学習価値のある意味を充実させる。

---

## ユーザーが明確に否定した方向性

途中の回答では、入力コードに存在しない IT・プログラミング関連語が追加されてしまった。

たとえば、

- API
- database
- backend
- frontend
- repository
- commit
- inheritance
- polymorphism
- encapsulation
- constructor
- destructor
- middleware
- framework
- cloud
- deployment

など。

これは今回の目的から外れていた。

ユーザーの意図は、

> 「IT用語を勉強したい」のではなく、  
> 「自分が入力した Power Query コードに実際に登場した英語を材料に、英単語を勉強したい」

というもの。

したがって、今後は **入力されたコードに存在しない単語を勝手に追加しない** ことが重要。

---

## 途中で作られた英単語表

チャットでは、次のような単語が学習対象として表にまとめられた。

|英単語|発音記号（US）|音節|音節数|アクセント|品詞|主な意味|
|---|---|---|--:|---|---|---|
|let|/lɛt/|let|1|第1音節|動詞|～させる、許す|
|source|/sɔrs/|source|1|第1音節|名詞|源、出所、情報源|
|excel|/ɪkˈsɛl/|ex-cel|2|第2音節|動詞|秀でる、卓越する|
|workbook|/ˈwɝkˌbʊk/|work-book|2|第1音節|名詞|練習帳、学習帳|
|file|/faɪl/|file|1|第1音節|名詞・動詞|書類、ファイル／提出する、整理する|
|contents|/ˈkɑntɛnts/|con-tents|2|第1音節|名詞|内容、中身、目次|
|table|/ˈteɪbəl/|ta-ble|2|第1音節|名詞|机、表、一覧|
|transform|/trænsˈfɔrm/|trans-form|2|第2音節|動詞|変形させる、大きく変える|
|column|/ˈkɑləm/|col-umn|2|第1音節|名詞|柱、縦列、新聞の欄|
|type|/taɪp/|type|1|第1音節|名詞・動詞|種類、型／タイプする|
|text|/tɛkst/|text|1|第1音節|名詞・動詞|文章、本文／メッセージを送る|
|true|/tru/|true|1|第1音節|形容詞|本当の、正しい、本物の|
|select|/səˈlɛkt/|se-lect|2|第2音節|動詞・形容詞|選ぶ／選び抜かれた|
|sort|/sɔrt/|sort|1|第1音節|名詞・動詞|種類／分類する、整理する|
|customer|/ˈkʌstəmɚ/|cus-to-mer|3|第1音節|名詞|顧客、客|
|code|/koʊd/|code|1|第1音節|名詞・動詞|規則、暗号、法典／符号化する|
|name|/neɪm/|name|1|第1音節|名詞・動詞|名前、名称／名付ける|
|replacement|/rɪˈpleɪsmənt/|re-place-ment|3|第2音節|名詞|交換、置き換え、代用品|
|symbol|/ˈsɪmbəl/|sym-bol|2|第1音節|名詞|記号、象徴|
|unit|/ˈjunɪt/|u-nit|2|第1音節|名詞|単位、一個、一団|
|product|/ˈprɑdʌkt/|prod-uct|2|第1音節|名詞|製品、商品、産物|
|number|/ˈnʌmbɚ/|num-ber|2|第1音節|名詞・動詞|数、数字、番号／番号を付ける|
|alphanumeric|/ˌælfənuˈmɛrɪk/|al-pha-nu-mer-ic|5|第4音節|形容詞|アルファベットと数字から成る|
|sheet|/ʃit/|sheet|1|第1音節|名詞|紙、シーツ、薄い一枚|
|item|/ˈaɪtəm/|i-tem|2|第1音節|名詞|品目、項目、一品|
|kind|/kaɪnd/|kind|1|第1音節|名詞・形容詞|種類／親切な|
|character|/ˈkærəktɚ/|char-ac-ter|3|第1音節|名詞|性格、人物、文字、特徴|
|master|/ˈmæstɚ/|mas-ter|2|第1音節|名詞・動詞・形容詞|達人、主人／習得する／主要な|
|original|/əˈrɪdʒənəl/|o-rig-i-nal|4|第2音節|形容詞・名詞|元の、独自の／原物|
|updated|/ˌʌpˈdeɪtɪd/|up-dat-ed|3|第2音節|形容詞|更新された、最新化された|
|convert|/kənˈvɝt/|con-vert|2|第2音節|動詞|変える、転換する|
|concatenate|/kənˈkætəˌneɪt/|con-cat-e-nate|4|第2音節|動詞|つなぐ、連結する|
|analysis|/əˈnæləsɪs/|a-nal-y-sis|4|第2音節|名詞|分析、解析|
|fiscal|/ˈfɪskəl/|fis-cal|2|第1音節|形容詞|財政の、会計年度の|
|period|/ˈpɪriəd/|pe-ri-od|3|第1音節|名詞|期間、時代、句点|
|ratio|/ˈreɪʃioʊ/|ra-ti-o|3|第1音節|名詞|比、割合|
|year|/jɪr/|year|1|第1音節|名詞|年、1年間|
|change|/tʃeɪndʒ/|change|1|第1音節|名詞・動詞|変化、変更、小銭／変える|
|query|/ˈkwɪri/|que-ry|2|第1音節|名詞・動詞|質問、疑問／質問する|
|sales|/seɪlz/|sales|1|第1音節|名詞|販売、売上高|
|amount|/əˈmaʊnt/|a-mount|2|第2音節|名詞・動詞|量、金額／合計で～になる|
|subtotal|/ˈsʌbˌtoʊtəl/|sub-to-tal|3|第1音節|名詞|小計|

ただし、この表も「完全版」であることはまだ保証されていない。途中の回答では抽出元を厳密に再走査せず、推測で語を追加したケースがあったためである。

---

## 本来、最終的に必要な処理

今回の要件を厳密に処理するなら、次の手順が必要。

```mermaid
flowchart LR
    A[チャット内でユーザーが入力した<br>Power Queryコードを収集]
    B[識別子・関数名・文字列等から<br>英字表現を抽出]
    C[camelCase / PascalCase / snake_case を分解]
    D[Workbookなど<br>独立語は保持]
    E[単数・複数など<br>実際に出現した形を確認]
    F[重複を除去]
    G[英語辞書情報を付与]
    H[完全な学習用一覧表]

    A --> B --> C --> D --> E --> F --> G --> H
```

ここで重要なのは、**コードを実際に再走査してから表を作ること**である。

---

## 今後の完成版で守るべき条件

最終版を作成する場合は、以下を基準にする。

- 対象は **このチャットでユーザー自身が入力した Power Query コードのみ**
- アシスタント側が提案したコードは、原則として対象外
- 入力コードにない英単語を追加しない
- コメント中の英語も対象にするかどうかは明示的に区別する
- パス中のフォルダ名・ファイル名も英単語として抽出するなら、その旨を明示する
- `CustomerCodeNameTable` のような連結語は分解する
- `Workbook` のような独立した英単語は分割しない
- `Columns` と `Column` のような屈折形は、実際にコード内に両方存在するなら別表記として扱うか、見出し語へ統合するかを決める
- 発音・音節・品詞・意味は **一般英語学習用** にする
- 「プログラミングでは～」という説明は不要
- 意味は1語訳だけではなく、主要な意味を複数載せる
- 重複語は1行に統合する

---

## このチャットで明確になった最終目的

最終的な目的は次のように整理できる。

> **自分が実際に使用している Power Query コードに登場する英語を教材として利用し、変数名・関数名・メソッド名などを構成する英単語を正確に抽出し、発音・音節・アクセント・品詞・意味を体系的に学習できる一覧を作ること。**

Power Query はあくまで **英単語を採取する素材** であり、主目的は英語学習である。

---

## 現時点での課題

このチャット内で作成された「最終版」とされた表には、まだ信頼性上の問題が残っている。

主な理由は以下。

- コード全体を機械的・厳密に再抽出していない
- 一部、実際にはコードにない単語が混入した
- 逆に、コード内にある語が漏れている可能性がある
- `FilePath` のような複合識別子を一語として残した回答もあった
- `number`、`concat`、`convert` など、本当にユーザー入力コードに登場したか再確認が必要な語も混じった
- コメント、ファイルパス、テーブル名、クエリ名を対象に含める範囲が途中で揺れている

したがって、厳密な完成版を作る場合は、**このチャットでユーザーが入力した全コードを元に一度ゼロから再抽出する** のが正しい。

---

## 結論

このチャットでは、Power Query コードのレビューから始まり、コード中の英語を利用した英単語学習へ目的が変化した。

最終的な仕様は次のとおり。

> **ユーザーが入力した Power Query コードだけを対象に、変数名・メソッド名・関数名などを実際の英単語単位へ分解し、重複を整理した上で、`英単語 / 発音記号（US） / 音節 / 音節数 / アクセント位置 / 品詞 / 意味` の一覧表を作成する。意味は一般英語として充実させ、IT・プログラミング解説は付けない。**

なお、これまで作成した表は途中成果としては利用できるが、**「入力されたコードに登場する英単語を漏れなく、余計な語なく収録した完全版」には未達** というのが、このチャット全体を通した正確な整理になる。
