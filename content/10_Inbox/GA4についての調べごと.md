---
title: GA4についての調べごと
aliases:
  - GA4についての調べごと
type: fleeting
created: 2026-06-20T18:35:31+09:00
updated: 2026-06-20T18:35:31+09:00
id: 20260620-183531
permalink:
draft: true
tags:
  - ai-generated
---
# 1. 現在の分析方針

毎週・毎月の定例分析を実施している。

現時点ではGA4の「コンバージョン設定」は利用しておらず、イベント数をコンバージョン代替指標として利用している。

## 現在のCV代替イベント

|イベント|意味|
|---|---|
|first_visit|初回訪問|
|file_download|資料ダウンロード|
|form_submit|問い合わせ送信|

---

# 2. CV代替イベントとして検討できるもの

サイトの目的によるが、BtoBサイトや製品サイトであれば次も候補。

|イベント|評価|
|---|---|
|form_start|★★★|
|scroll|★★|
|view_search_results|★★|
|click（特定CTA）|★★★|
|user_engagement|★|
|page_view（特定ページ）|★★|

ただし、

- page_view
- scroll
- user_engagement

は発生数が多すぎるため、CV代替指標としては弱い。

むしろ

- form_start
- form_submit
- file_download

の組み合わせが有効。

---

# 3. イベントハンドラの意味

---

## page_view

ページ表示。

発生条件

- ページ読み込み
- SPAの画面遷移

用途

- PV数
- 閲覧ページ分析

---

## click

外部リンククリック。

用途

- 外部サイト遷移
- ECサイト誘導
- PDFリンククリック

※内部リンクは標準では対象外。

---

## file_download

ファイルダウンロード。

対象例

- PDF
- XLSX
- DOCX
- PPTX

用途

- 資料請求分析
- カタログDL分析

---

## first_visit

初回訪問。

用途

- 新規ユーザー分析
- 新規比率分析

---

## form_start

フォーム入力開始。

用途

- フォーム離脱分析

例

100件開始

20件送信

→ 完了率20%

---

## form_submit

フォーム送信完了。

用途

- 問い合わせ数
- 資料請求数

最もCVに近い。

---

## scroll

ページの90%地点到達。

GA4標準では

> 90%地点が一度表示されたら発火

用途

- 記事読了率

---

## session_start

セッション開始。

用途

- セッション数計測

---

## user_engagement

ユーザーがアクティブ状態だった。

GA4のエンゲージメント時間算出に利用される。

用途

- 滞在品質分析

---

## view_search_results

サイト内検索結果表示。

用途

- ユーザーニーズ把握
- 検索キーワード分析

---

# 4. GA4のコンバージョン設定について

質問

> コンバージョン設定後に過去データも反映されるのか？

結論

**反映される。**

正確には、

GA4では

「既存イベントをコンバージョンに指定」

した場合、

過去約30日以内のイベントはコンバージョンとして再計算されることがある。

ただし、

- レポート反映まで時間がかかる
- 古い期間は反映されない場合がある

ため、

定例レポートで利用するなら

早めに設定しておく方が良い。

---

# 5. Looker Studioのレポート設定

メニュー

## ファイル

### レポートの設定

レポート全体の設定。

---

### テーマとレイアウト

デザイン設定。

---

### レイアウト

ナビゲーション方式。

選択肢

|方式|特徴|
|---|---|
|左|一般的|
|タブ|上部タブ|
|左上|コンパクト|

ページ数が多い場合は

**左ナビ**

がおすすめ。

---

# 6. 利用している主要KPI

---

## セッションあたりのページビュー

計算

```
PV数 ÷ セッション数
```

意味

1回の訪問で何ページ見たか。

---

## 平均セッション継続時間

意味

1セッションあたりの滞在時間。

---

## CVイベント数

現在

```
first_visitfile_downloadform_submit
```

を集計。

---

# 7. 曜日変換用の計算フィールド

---

## fx 曜日1

曜日名を並び替え可能な形式へ変換。

```
casewhen 曜日の名前 = "Sunday" then "0.日"when 曜日の名前 = "Monday" then "1.月"when 曜日の名前 = "Tuesday" then "2.火"when 曜日の名前 = "Wednesday" then "3.水"when 曜日の名前 = "Thursday" then "4.木"when 曜日の名前 = "Friday" then "5.金"when 曜日の名前 = "Saturday" then "6.土"END
```

メリット

曜日順に並ぶ。

```
日月火水木金土
```

---

## fx 曜日2

曜日だけ表示。

```
casewhen WEEKDAY(日付)=0 then '日'when WEEKDAY(日付)=1 then '月'when WEEKDAY(日付)=2 then '火'when WEEKDAY(日付)=3 then '水'when WEEKDAY(日付)=4 then '木'when WEEKDAY(日付)=5 then '金'when WEEKDAY(日付)=6 then '土'end
```

用途

グラフ表示用。

---

# 8. 新規比率

定義

```
新規ユーザー数 ÷ 総ユーザー数
```

Looker Studio計算フィールド

```
newUsers / totalUsers
```

表示形式

```
パーセンテージ
```

推奨。

---

# 9. 現在の分析設計に対する評価

製品サイト・BtoBサイトを前提にすると、

現在の

```
first_visitfile_downloadform_submit
```

は悪くありません。

ただし分析としては、

```
form_startform_submit
```

を追加して、

```
フォーム開始数↓フォーム完了数↓完了率
```

まで見られるようにすると、改善ポイントが見つけやすくなります。

優先順位としては

```
① form_submit② file_download③ form_start④ first_visit
```

が実務上は特に有用です。