---
title: Power Queryで入荷日付を日付型へ変換するコード
aliases:
  - Power Queryで入荷日付を日付型へ変換するコード
  - リファクタリング前のコード。
type: fleeting
created: 2026-08-13T11:11:04+09:00
updated: 2026-09-26T01:23:00+09:00
id: 20260813-111104
permalink:
draft: true
tags:
  - ai-generated
---

# リファクタリング前のコード。

仕入日付と同じ処理を入荷日付にも適用し、月・日・年を取り出して日付型の`入荷日`を作るためのPower Query Mコードである。対象CSVの期間に合わせ、11月・12月は2020年、それ以外は2021年としている。

```powerquery
let
    ソース = Csv.Document(File.Contents("C:\\Users\\kyoupatty029\\myproject\\inventory\\load_fils\\purchase_csv\\purchase_20201101-20211031.csv"), [Delimiter=",", Columns=28, Encoding=932, QuoteStyle=QuoteStyle.None]),
    昇格されたヘッダー数 = Table.PromoteHeaders(ソース, [PromoteAllScalars=true]),
    変更された型 = Table.TransformColumnTypes(昇格されたヘッダー数, {{"仕入日付", type text}, {"入荷日付", type text}}),
    仕入月 = Table.AddColumn(変更された型, "仕入月", each Text.PadStart(Text.BeforeDelimiter([仕入日付], "/"), 2, "0"), type text),
    仕入日 = Table.AddColumn(仕入月, "仕入日", each Text.PadStart(Text.AfterDelimiter([仕入日付], "/"), 2, "0"), type text),
    仕入年 = Table.AddColumn(仕入日, "仕入年", each if [仕入月] = "11" or [仕入月] = "12" then 2020 else 2021, Int64.Type),
    入荷月 = Table.AddColumn(仕入年, "入荷月", each Text.PadStart(Text.BeforeDelimiter([入荷日付], "/"), 2, "0"), type text),
    入荷日_日 = Table.AddColumn(入荷月, "入荷日_日", each Text.PadStart(Text.AfterDelimiter([入荷日付], "/"), 2, "0"), type text),
    入荷年 = Table.AddColumn(入荷日_日, "入荷年", each if [入荷月] = "11" or [入荷月] = "12" then 2020 else 2021, Int64.Type),
    日付を追加 = Table.AddColumn(入荷年, "入荷日", each #date([入荷年], Number.From([入荷月]), Number.From([入荷日_日])), type date),
    不要列を削除 = Table.RemoveColumns(日付を追加, {"入荷日付", "入荷月", "入荷日_日", "入荷年"})
in
    不要列を削除
```
