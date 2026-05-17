---
title: 画像ファイルの命名規則
aliases:
  - 画像ファイルの命名規則
type: permanent
created: 2026-05-02T06:20:30+09:00
updated: 2026-05-02T06:20:30+09:00
id: 20260502-062030
permalink:
draft: false
source:
---

- **一般向け**
```
{product}-{role}-{subject}-{background}-{size}.{ext}
```

- **個別記事向け**
```
{slug}-{roleNum}-{subject}-{size}.{ext}
```


- product：
	- 製品・シリーズ名
- role：
	- 画像の用途・役割
- subject：
	- 画像の中身
- background：
	- 背景色：white, black, blue, yellow, green, gray..
	- 透過：trans
	- 背景色なし：省略
- size：
	- {width}x{height}
		- width：横幅
		- height：縦幅
- ext： 
	- 拡張子

- slug：
	- 記事slug
- roleNum：
	- 画像の用途・役割 + 連番


### 実例

**一般向け**
```
wood-repair-thumb-front-trans-300x300.png
wood-repair-thumb-capacity-white-1200x1200.jpg
```

**個別記事向け**
```
repairing-wooden-deck-posts-thumb-site-1920x1280.jpg
repairing-wooden-deck-posts-inline01-before-1920x1280.jpg
repairing-wooden-deck-posts-inline02-after-1920x1280.jpg
repairing-wooden-deck-posts-inline03-finish-1920x1280.jpg
```

## 単語リスト

| role      | 日本語訳・意味      | 用途例                     |
| --------- | ------------ | ----------------------- |
| `product` | 製品画像         | 製品単体、白背景、EC風画像          |
| `thumb`   | サムネイル・アイキャッチ | 記事一覧、WordPressのアイキャッチ   |
| `banner`  | バナー          | Webページ上部、広告枠、横長画像       |
| `main`    | メイン画像        | ページ冒頭の代表画像              |
| `inline`  | 本文中画像        | 記事本文に挿入する写真             |
| `diagram` | 図解           | 仕組み説明、施工手順の図            |
| `chart`   | グラフ          | 比較表、数値グラフ               |
| `step`    | 手順画像         | step01, step02 のような施工手順 |
| `case`    | 事例画像         | 施工事例、使用事例               |
| `logo`    | ロゴ           | 製品ロゴ、ブランドロゴ             |
| `icon`    | アイコン         | 小さな記号画像、UI用画像           |
| `label`   | ラベル画像        | 製品ラベル、容器表示              |
| `pack`    | パッケージ画像      | 箱、袋、容器全体                |
| `set`     | セット画像        | 同梱物、セット内容               |
| `detail`  | 詳細画像         | 拡大写真、質感、表面アップ           |
| `compare` | 比較画像         | before/after、他製品比較など    |
| `sample`  | サンプル画像       | 色見本、仕上がりサンプル            |
| `manual`  | 説明用画像        | 取扱説明、注意説明               |
| `sns`     | SNS用画像       | X、Instagram、Facebookなど  |
| `ogp`     | OGP画像        | SNSシェア用画像               |


| role      | 日本語訳・意味      |
| --------- | ------------ |
| `product` | 製品画像         |
| `thumb`   | サムネイル・アイキャッチ |
| `banner`  | バナー          |
| `main`    | メイン画像        |
| `inline`  | 本文中画像        |
| `diagram` | 図解           |
| `chart`   | グラフ          |
| `step`    | 手順画像         |
| `logo`    | ロゴ           |
| `sample`  | サンプル画像       |


