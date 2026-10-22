---
title: Acrobatで製品ラベルPDFに連番を入れる方法と制約
aliases:
  - Acrobatで製品ラベルPDFに連番を入れる方法と制約
type: literature
created: 2026-10-22T19:13:54+09:00
updated: 2026-10-22T19:14
id: 20261022-191354
permalink:
draft: true
tags:
  - ai-generated
---

# Acrobatで製品ラベルPDFに連番を入れる方法と制約

目的はページ番号を振ることではなく、4面ラベルのA側2か所に、ページごとに進む同じケース番号を所定の位置・サイズ・字体で入れること。

Acrobat Proの標準的な「通し番号（Bates番号）」はページ単位の連番を作れる。桁数、開始番号、接頭辞・接尾辞を指定できるが、配置はヘッダー／フッターの枠に沿う。ラベル面内の自由な2か所への配置を、通常の画面操作だけで組む用途には合いにくい。

AcrobatのJavaScript APIには、ページと矩形座標を指定してテキストフィールドを作り、文字サイズなどを設定する機能がある。ただしスクリプト作成と結果の検証が必要。継続的なラベル発行なら、元PDFを変えずに番号を重ねる専用処理も候補になる。

| 方法 | 向く条件 | 注意点 |
|---|---|---|
| Acrobat ProのBates番号 | ヘッダー／フッター位置で足りる | ラベル内の自由な2か所に置きにくい |
| Acrobat JavaScript | Acrobat内で座標や書式を制御したい | スクリプトと実機検証が必要 |
| Excel＋Word差し込み | Word側でラベル原稿を組める | Canva PDFの再配置が必要になる場合がある |
| 元PDFへ番号を重ねる専用処理 | Canva PDFの固定デザインを保ちたい | 座標、フォント、給紙ずれの調整が必要 |

どの方法でも、番号が2面で一致すること、連番がページごとに1増えること、印刷倍率と実際の位置を試し刷りで確認する。

参考：[AdobeのBates番号](https://helpx.adobe.com/uk/acrobat/desktop/edit-documents/apply-bates-numbering/add-bates.html)、[Acrobat JavaScriptのフォームフィールド](https://opensource.adobe.com/dc-acrobat-sdk-docs/library/jsdevguide/JS_Dev_AcrobatForms.html)

元スレッドID: `6ac70a78-81d0-83ee-a288-3715396ae629`

