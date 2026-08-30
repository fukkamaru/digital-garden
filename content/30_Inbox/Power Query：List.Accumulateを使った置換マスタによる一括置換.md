---
title: Power Query：List.Accumulateを使った置換マスタによる一括置換
aliases:
  - Power Query：List.Accumulateを使った置換マスタによる一括置換
type:
created: 2026-08-13T10:09:28+09:00
updated: 2026-08-13T10:09:28+09:00
id: 20260813-100928
permalink:
draft: true
tags:
---

### 基本コード

```m
List.Accumulate(
    Table.ToRows(得意先名置換マスタ),
    [コード付き_得意先名],
    (x, y) => Replacer.ReplaceValue(x, y{0}, y{1})
)
```

`List.Accumulate`は、リストの要素を先頭から順番に処理し、その処理結果を次の処理へ引き継ぐ関数。

```m
List.Accumulate(
    list,
    seed,
    (state, current) => 処理
)
```

|要素|今回のコード|意味|
|---|---|---|
|`list`|`Table.ToRows(得意先名置換マスタ)`|順番に処理する置換マスタ|
|`seed`|`[コード付き_得意先名]`|処理開始時の初期値|
|`state`|`x`|それまでの処理結果|
|`current`|`y`|現在処理しているリスト要素|
|`current{0}`|`y{0}`|置換前の値|
|`current{1}`|`y{1}`|置換後の値|

つまり、`x = state`、`y = current`という関係になる。

変数名を分かりやすくすると次のコードと同じ意味。

```m
List.Accumulate(
    Table.ToRows(得意先名置換マスタ),
    [コード付き_得意先名],
    (state, current) =>
        Replacer.ReplaceValue(
            state,
            current{0},
            current{1}
        )
)
```

### Table.ToRowsの役割

例えば`得意先名置換マスタ`が次の場合、

|置換前|置換後|
|---|---|
|A|X|
|B|Y|
|C|Z|

`Table.ToRows`によって、テーブルが行単位のリストへ変換される。

```m
{
    {"A", "X"},
    {"B", "Y"},
    {"C", "Z"}
}
```

そのため、各処理で`current`には1行ずつ渡される。

```m
current = {"A", "X"}

current{0} = "A"
current{1} = "X"
```

M言語のリストは`0`から始まるため、`{0}`が1番目、`{1}`が2番目の要素になる。

### 処理の流れ

例えば、

```text
[コード付き_得意先名] = "ABC"
```

置換マスタが、

```text
A → X
B → Y
C → Z
```

の場合、最初の`state`には`seed`である`"ABC"`が入る。

```text
初期値
state = "ABC"

1回目
state   = "ABC"
current = {"A", "X"}
結果    = "XBC"

2回目
state   = "XBC"
current = {"B", "Y"}
結果    = "XYC"

3回目
state   = "XYC"
current = {"C", "Z"}
結果    = "XYZ"
```

重要なのは、`state`には毎回「前回の処理結果」が入ること。

```text
ABC
↓ A → X
XBC
↓ B → Y
XYC
↓ C → Z
XYZ
```

つまり、

```text
state0 = seed
state1 = 処理(state0, current1)
state2 = 処理(state1, current2)
state3 = 処理(state2, current3)
...
```

という仕組みになっている。

今回のコードを日本語で読むと、「`得意先名置換マスタ`を1行ずつ取り出し、`コード付き_得意先名`を初期値として、現在までの置換結果`x`に対して、現在のマスタ行`y`の置換前`y{0}`を置換後`y{1}`へ置き換え、その結果を次の処理の`x`として引き継ぎながら、マスタの最後まで繰り返す」となる。

覚えておくべき対応関係は以下。

```text
x    = state   = これまでの処理結果
y    = current = 現在処理している置換マスタの1行
y{0} = 置換前
y{1} = 置換後
```

`List.Accumulate`のポイントは、**「初期値から開始して、リストを1件ずつ処理し、その結果を次の処理へ渡していく」**こと。今回の置換処理では、「前回までの置換結果に次の置換ルールを適用する」という用途で使っている。