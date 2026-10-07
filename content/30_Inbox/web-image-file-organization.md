---
title: Web公開用画像のファイル管理
aliases:
  - Web公開用画像のファイル管理
type: literature
created: 2026-10-04T16:04:05+09:00
updated: 2026-10-04T16:04:05+09:00
id: 20261004-160405
permalink:
draft: true
tags:
  - ai-generated
---

# Web公開画像はファイル名ではなくフォルダで用途を分けて管理する

Web公開用に圧縮・リサイズした画像について、ファイル名に `compressed` や「圧縮済み」といった語を付ける必要は基本的にない。

圧縮は画像そのものを識別する情報というより、**公開に向けた処理工程や状態**だからである。

たとえば、

```text
product-photo.jpg
```

に対して、

```text
product-photo-compressed.jpg
```

とするよりも、ファイル名は画像の内容を表すために使った方がよい。

## ファイル名には「何の画像か」を持たせる

基本方針は次のように考える。

> ファイル名は画像の内容や用途を表す。  
> 圧縮・最適化といった処理状態は、原則としてファイル名には含めない。

たとえば、

```text
bridge-repair.jpg
product-photo.jpg
```

のような名前で十分である。

一方、

```text
bridge-repair-compressed.jpg
bridge-repair-compressed2.jpg
bridge-repair-final.jpg
bridge-repair-final2.jpg
```

のように処理工程をファイル名へ積み重ねていくと、長期的には管理しにくくなる。

## 原本とWeb公開版はフォルダで分ける

同じ画像について原本とWeb公開用の最適化版を両方保持したい場合は、ファイル名を変更するのではなく、フォルダを分ける方が分かりやすい。

```text
images/
├─ original/
│  ├─ product-a.jpg
│  └─ product-b.jpg
│
└─ web/
   ├─ product-a.jpg
   └─ product-b.jpg
```

この構造では、同じファイル名が1対1で対応する。

```text
original/product-a.jpg
web/product-a.jpg
```

そのため、

- 原本と公開版を比較しやすい
- どのWeb画像がどの原本から作られたか分かりやすい
- ファイル名が不要に長くならない
- 同名ファイル同士で差分を確認しやすい
- Web版を作り直す場合も対応関係を維持できる

という利点がある。

## `compressed` より `web` の方が適している

圧縮版を格納するフォルダとして、

```text
compressed/
```

を使うこともできるが、

```text
web/
```

の方が用途を明確にできる。

`compressed` は「何をしたか」を表す名前である。

一方、

`web` は「何のためのファイルか」を表す。

Web公開用画像には、単純な圧縮だけでなく、

- リサイズ
- JPEG / WebP / AVIFなどへの形式変換
- メタデータ削除
- 画質調整
- ファイル容量削減
- 必要に応じたトリミング

など複数の処理を行う可能性がある。

そのため、将来的な運用まで考えると、

```text
original/
web/
```

という分類の方が意味が安定している。

## 推奨する役割分担

```text
images/
├─ original/   ← 元データ
└─ web/        ← Web公開用に最適化した派生データ
```

### `original/`

- 元画像を保存する
- 原則として変更しない
- 再加工するときのマスターとして扱う

### `web/`

- Web公開用ファイルを保存する
- 圧縮・リサイズ・形式変換などを済ませる
- `original/` から再生成できる派生データとして扱う

このようにすると、`web/` に入っているという事実だけで、

> 「これはWeb公開用に最適化済みの画像である」

と判断できる。

## 例外的にファイル名へ情報を入れる場合

同一フォルダ内に複数用途の画像を置く必要がある場合には、接尾辞を使う意味もある。

その場合でも、処理内容より用途や仕様を表す方がよい。

```text
product.jpg
product-web.jpg
product-thumb.jpg
product-1200w.jpg
```

特に、

```text
product-1200w.jpg
```

のような寸法情報や、

```text
product-thumb.jpg
```

のような用途情報は、ファイルそのものを識別する意味がある。

一方、

```text
product-compressed.jpg
```

は単に処理工程を表しているだけなので、必要性は低い。

## 結論

Web公開用画像については、`-compressed` のような接尾辞を付けるより、

```text
original/
web/
```

というフォルダ構造で管理する方がシンプルである。

特に原本とWeb版で同じファイル名を維持すると、

```text
original/example.jpg
web/example.jpg
```

という明確な1対1対応を作れる。

したがって基本ルールは、

> **原本とWeb公開版はフォルダで分け、対応する画像には同じファイル名を使う。**

とするのがよい。

`original/` をマスター、`web/` を再生成可能な公開用派生物として扱えば、画像が増えても管理構造を維持しやすい。

