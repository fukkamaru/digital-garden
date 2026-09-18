---
title: Power Queryで置換マスタを使い一括置換する方法
type: literature
created: 2026-08-13T10:09:28+09:00
updated: 2026-09-18T02:50:06+09:00
id: 20260813-100928
permalink:
draft: true
tags:
  - ai-generated
---
## 実運用で使用していたコード

次の記法は、実際に使用していた置換処理として残す。置換マスタの各行を順番に適用し、直前までの結果を次の処理へ渡す、という`List.Accumulate`の基本構造を確認するための例でもある。

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

## 文字列の一部を置換する場合の推奨例

上の実運用コードは記録として維持する。一方、得意先名の一部分など、テキスト内の一部を置換する意図を明示したい場合は、`Replacer.ReplaceText`を用いる。

```m
let
    OrderedMaster = Table.Sort(得意先名置換マスタ, {{"優先順位", Order.Ascending}}),
    ReplacementRows = Table.ToRows(
        Table.SelectColumns(OrderedMaster, {"置換前", "置換後"})
    ),
    Result = List.Accumulate(
        ReplacementRows,
        [コード付き_得意先名],
        (state, current) =>
            Replacer.ReplaceText(state, current{0}, current{1})
    )
in
    Result
```

この書き方にする理由は、次の3点。

| 観点 | 理由 |
| --- | --- |
| 置換の意図 | `Replacer.ReplaceText`により、文字列の一部を置換する処理だと読み取れる。 |
| マスタの列順 | `Table.SelectColumns`で「置換前」「置換後」だけを明示してから行リスト化するため、優先順位などの列を追加しても`current{0}`・`current{1}`の意味が変わらない。 |
| 再現性 | 優先順位を持たせることで、短い語を先に置換してしまう、置換後の語が次の置換対象になる、といった連鎖の結果を検証しやすい。 |

たとえば、`Kyoto Patty 029`の表記を統一する場合は、置換マスタとテスト値を分けて管理する。

| 優先順位 | 置換前 | 置換後 | テスト入力 | 期待値 |
| --- | --- | --- | --- | --- |
| 10 | `KYO Patty` | `Kyoto Patty 029` | `KYO Patty（催事）` | `Kyoto Patty 029（催事）` |

適用前には、置換マスタの順序を含めてテスト値と期待値を確認する。元データは`Raw`として保持し、変換結果は`Standard`で扱う。データ層の役割は[[kyoto-patty-029-sample-business|Kyoto Patty 029の架空事業設定とデータ設計]]を参照する。
