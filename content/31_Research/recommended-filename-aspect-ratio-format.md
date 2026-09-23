---
title: ファイル名の縦横比表記：ar記法
aliases:
  - ファイル名に縦横比率を含めるオススメの記述法
  - ファイル名の縦横比表記：ar記法
type:
created: 2026-08-30T21:02:01+09:00
updated: 2026-09-23T22:00:58+09:00
id: 20260830-210201
permalink:
draft: true
tags:
  - ai-generated
  - field
---
## 決定

画像・動画・バナー等のファイル名で縦横比を表すときは、**`ar16x9` 形式**を採用する。

`ar` は **Aspect Ratio（縦横比）** の略である。`16x9` だけよりも、数値がピクセル数ではなく比率であることを明確にできる。

## 命名規則

```text
<内容>_ar<横>x<縦>[_<横ピクセル>x<縦ピクセル>].<拡張子>
```

- `label_warning_ar16x9.png`
- `label_product_ar1x1.png`
- `label_vertical_ar9x16.png`
- `label_banner_ar3x1.png`
- `label_warning_ar16x9_1920x1080.png`

`ar16x9` は縦横比、`1920x1080` は実ピクセル寸法を表す。比率は常に **横×縦** の順で記す。

## 採用理由

ファイル名に縦横比を入れるなら、**`16x9` のように `x` で表記**するのが扱いやすいです。Windowsでは `16:9` の `:` がファイル名に使えないため、`16x9` が無難です。

特におすすめは、**縦横比だと明示するため `ar`（Aspect Ratio）を付ける形式**です。

- `label_warning_ar16x9.png`
- `label_product_ar1x1.png`
- `label_vertical_ar9x16.png`
- `label_banner_ar3x1.png`

これなら、解像度を併記しても区別できます。

`label_warning_ar16x9_1920x1080.png`

ここでは、

- `ar16x9` = 縦横比
- `1920x1080` = 実ピクセル寸法

という意味になります。

画像素材を大量管理する前提なら、私は **`ar16x9` 方式**を推奨します。`16x9` だけだと、後から「16×9 pxなのか比率なのか」が曖昧になるためです。

なお、横長・縦長を統一して扱うなら、**常に `横x縦` の順番**にして、

`ar16x9` / `ar4x3` / `ar1x1` / `ar3x4` / `ar9x16`

とするのが分かりやすいです。
