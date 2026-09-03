---
title: Power Queryで「id最大値に対応するMonth」を単一値として取得する方法まとめ
aliases:
  - Power Queryで「id最大値に対応するMonth」を単一値として取得する方法まとめ
type:
created: 2026-09-03T22:29:19+09:00
updated: 2026-09-04T01:48:31+09:00
id: 20260903-222919
permalink:
draft: true
tags:
---

今回の目的は、Power Query上で単純に「id」列の最大値を求めるだけではなく、**最大の`id`を持つ行に対応する`Month`列の値を取得し、その`Month`をテーブルではなく単一の値として最終出力する**ことでした。

## やりたかったこと

元データには、少なくとも次のような列が存在する想定です。

|id|Month|
|--:|---|
|0|202604|
|1|202605|
|2|202606|
|3|202607|

この場合、

- `id`の最大値 → `3`
- `id = 3`の行に対応する`Month` → `202607`

となるため、最終的にPower Queryから返したいのはテーブルではなく、

```text
202607
```

という**単一値（Scalar Value）**です。

後続のPower Queryから、このクエリ自体を変数・パラメータのように参照して使える状態にすることが目的です。

## 最終的なMコード

基本形は次のコードです。

```m
let
    Source = ...,
    MaxIdRow = Table.Max(Source, "id"),
    TargetMonth = MaxIdRow[Month]
in
    TargetMonth
```

重要なのは最後の

```m
in
    TargetMonth
```

です。

ここでテーブルを返すのではなく、`Month`列から取り出した**1つの値そのもの**を返しています。

### 各ステップの意味

```m
MaxIdRow = Table.Max(Source, "id")
```

`Table.Max`は、`id`の最大値そのものではなく、**最大値を持つ行をRecord型として返します**。

たとえば最大`id`が3なら、概念的には次のようなRecordです。

```text
[
    id = 3,
    Month = 202607
]
```

そこから、

```m
MaxIdRow[Month]
```

とすることで、

```text
202607
```

だけを取り出します。

したがって、

```m
TargetMonth = MaxIdRow[Month]
```

の`TargetMonth`はテーブルではなく、単一値になります。

## 処理の流れ

```mermaid
flowchart LR
    A["元テーブル"] --> B["Table.Max(Source, id)"]
    B --> C["id最大値の行をRecordとして取得"]
    C --> D["[Month]を参照"]
    D --> E["Monthの単一値"]
    E --> F["in TargetMonth"]
```

たとえば、

```text
id   Month
0    202604
1    202605
2    202606
3    202607
```

であれば、

```mermaid
flowchart LR
    A["id最大値 = 3"] --> B["id=3 の行"]
    B --> C["Month = 202607"]
    C --> D["最終出力: 202607"]
```

となります。

## 当初検討した方法との違い

会話の途中では、いくつか似ているものの目的とは異なる処理も検討しました。

|方法|結果|今回の目的に合うか|
|---|---|---|
|`List.Max(Source[id])`|`id`の最大値|×|
|最大値を新しい列として追加|全行に同じ最大値を持つテーブル|×|
|`Table.Max(Source, "id")`|最大`id`を持つ行のRecord|△|
|`Table.Max(Source, "id")[Month]`|対応する`Month`の単一値|○|

最初に考えた

```m
List.Max(Source[id])
```

では、取得できるのはあくまで`id`そのものです。

たとえば、

```text
3
```

が返ります。

しかし欲しいのは、

> 最大`id`の行に存在する`Month`

なので、`Table.Max`で行を取得してから`Month`を参照する方法が適切です。

## より短く書く場合

途中変数が不要なら、1ステップでも記述できます。

```m
let
    Source = ...,
    TargetMonth = Table.Max(Source, "id")[Month]
in
    TargetMonth
```

さらに、既存クエリを直接参照するなら、たとえばクエリ名が`ImportedFilesTbl`の場合、

```m
let
    TargetMonth = Table.Max(ImportedFilesTbl, "id")[Month]
in
    TargetMonth
```

とできます。

このクエリの出力自体が、

```text
202607
```

のような単一値になります。

## 他のPower Queryから変数のように利用する

この単一値クエリを、たとえば

```text
Get_Target_Month
```

という名前で保存した場合、別のPower Queryではそのまま、

```m
TargetMonth = Get_Target_Month
```

と参照できます。

たとえば、

```m
let
    Source = SomeTable,
    TargetMonth = Get_Target_Month,
    FilteredRows =
        Table.SelectRows(
            Source,
            each [Month] = TargetMonth
        )
in
    FilteredRows
```

のように使用できます。

つまりPower Queryでは、

```text
Get_Target_Month
```

というクエリそのものを、実質的に**グローバルな単一値変数のように扱う**ことができます。

## 型について

`Month`の型によって、取得される値の型も変わります。

たとえば`Month`が数値型なら、

```text
202607
```

というNumber型になります。

テキスト型なら、

```text
"202607"
```

というText型になります。

年月をファイル名や文字列結合などに使うのであれば、最初からText型で管理するか、

```m
Text.From(Table.Max(Source, "id")[Month])
```

として明示的にText化しておく方法もあります。

## 今回の結論

今回必要だった処理は、次の1行に集約できます。

```m
Table.Max(Source, "id")[Month]
```

これにより、

1. `id`の最大値を持つ行を探す
2. その行の`Month`を取り出す
3. テーブルではなく単一値として返す

という処理を一度に行えます。

最終的には次の形が最も明確です。

```m
let
    Source = ...,
    TargetMonth = Table.Max(Source, "id")[Month]
in
    TargetMonth
```

このクエリを`Get_Target_Month`などの名前にしておけば、他のPower Queryから、

```m
Get_Target_Month
```

と参照して、`Month`の最新値を変数のように利用できます。
