---
title: WordとExcelでケース番号を4面ラベルに差し込む
aliases:
  - WordとExcelでケース番号を4面ラベルに差し込む
type: literature
created: 2026-10-22T19:13:59+09:00
updated: 2026-10-22T19:14
id: 20261022-191359
permalink:
draft: true
tags:
  - ai-generated
---

# WordとExcelでケース番号を4面ラベルに差し込む

4面ラベルを1ページ＝1ケースとして扱い、Aラベル2枚へ同じ番号を入れるなら、Excelを番号一覧にしてWordの差し込み印刷へ渡す方法が分かりやすい。

1. Excelに「ケース番号」列を作り、0001、0002…を文字列として保存する。先頭の0が必要なため、数値として扱わない。
2. Wordで4面全体を1ページとしてレイアウトし、差し込み印刷の種類は「レター」を選ぶ。
3. Excelを宛先リストとして接続し、Aの2か所に同じ「ケース番号」フィールドを置く。Bの2か所は固定内容にする。
4. 同じページ内で番号を進める「次のレコード」は置かない。
5. 結果のプレビューで1ページ目が0001／0001、2ページ目が0002／0002になることを確認し、生成した文書を試し刷りする。

Excelの番号一覧は印刷範囲の確認や途中からの再印刷にも使える。Wordだけで連番を組む場合はフィールドコードの参照関係が複雑になりやすい。

この方法はWordでレイアウトを維持できる場合に向く。CanvaのPDFデザインをそのまま保持したい場合は、PDFへ番号を重ねる方式も比較する。

参考：[MicrosoftのExcel差し込み印刷](https://support.microsoft.com/en-us/word/mail-merge-using-an-excel-spreadsheet)、[次のレコード規則](https://support.microsoft.com/en-us/word/set-the-rules-for-a-mail-merge)

元スレッドID: `6ac70860-fd4c-83ee-ade0-2e56e990ce67`

