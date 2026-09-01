---
title: VScodeで拡張機能追加のエラーとMarkdown PDFについて
aliases:
  - VScodeで拡張機能追加のエラーとMarkdown PDFについて
type: fleeting
created: 2026-06-20T18:10:41+09:00
updated: 2026-09-01T19:28:44+09:00
id: 20260620-181041
permalink:
draft: true
tags:
  - ai-generated
---
ここまでの会話を整理すると、実際には **2つの問題が発生している可能性** があります。

---

# 1. VS Codeの拡張機能ストアへ接続できない

## 発生したエラー

VS Codeで拡張機能を追加しようとした際、

```
Error while fetching extensions. XHR failed
```

というエラーが表示された。

---

## このエラーの意味

VS Codeが拡張機能マーケットプレイスへアクセスできていません。

つまり、

```
PC ↓VS Code ↓Marketplace(拡張機能ストア)
```

の通信に失敗しています。

---

## よくある原因

### ① ネットワーク障害

会社ネットワーク  
VPN  
プロキシ

など。

---

### ② ファイアウォール

Windows Defender

企業のセキュリティソフト

などが遮断している。

---

### ③ プロキシ設定

VS Codeの設定に

```
"http.proxy"
```

が残っている。

---

### ④ SSL証明書

企業内プロキシなどで

```
証明書エラー
```

が発生している。

---

### ⑤ Marketplace側障害

稀に

[Visual Studio Marketplace](https://marketplace.visualstudio.com?utm_source=chatgpt.com)

側で障害が起きる。

---

# 2. Markdown PDFが動かなくなった

その後、

> エラーメッセージが登場してからMarkdownをPDF化できなくなった

とのこと。

---

## あなたの推測

おそらく

> Markdown PDFは外部通信しているのでは？

という疑問。

---

# 3. Markdown PDFは通常どう動くか

VS Codeの代表的な拡張機能

[Markdown PDF](https://marketplace.visualstudio.com/items?itemName=yzane.markdown-pdf&utm_source=chatgpt.com)

は基本的に

```
Markdown ↓HTML ↓PDF
```

をローカルPC上で変換します。

通常のPDF出力では外部通信は不要です。

---

## 通常は通信しない

例えば

```
# タイトルこんにちは
```

↓

PDF

この処理は完全にローカルです。

---

# 4. ただし通信が発生するケース

Markdown内で

```
![](https://example.com/image.png)
```

のような外部画像を参照している場合。

---

また

```
<link><script>
```

など外部リソースを利用している場合。

---

このときは

```
Markdown PDF ↓画像取得 ↓外部通信
```

が発生します。

---

# 5. 今回のケースで怪しい点

時系列は

```
① 拡張機能ストア接続失敗(XHR failed)↓② Markdown PDFが動かない
```

です。

---

この場合、

Markdown PDF自体の問題ではなく、

VS Code内部の通信機能やElectron環境が壊れている可能性があります。

---

# 6. 特に怪しいポイント

あなたは以前、

- VBA開発
- VS Code
- Markdown PDF
- PDF出力

を頻繁に使っていた。

そして過去ログを見る限り、

Markdown PDFは正常に利用できていました。

つまり

```
設定変更↓アップデート↓セキュリティソフト変更↓通信エラー発生
```

のどれかが起きた可能性が高いです。

---

# 7. 今確認してほしいこと

Markdown PDF実行時に

### 「出力」

```
表示↓出力
```

を開く。

---

プルダウンから

```
Markdown PDF
```

を選択する。

---

表示されているログを確認する。

---

# 8. 次に欲しい情報

次の3点が分かれば原因をかなり絞れます。

### ① VS Codeのバージョン

```
ヘルプ↓バージョン情報
```

---

### ② Markdown PDFのバージョン

拡張機能画面で確認。

---

### ③ PDF出力時のログ全文

```
表示↓出力↓Markdown PDF
```

に表示される内容。

---

特に **「XHR failed」が出た後にMarkdown PDFも動かなくなった** という点からすると、単なるMarkdown PDFの不具合ではなく、

- VS Codeの通信設定
- プロキシ設定
- 証明書設定
- VS Codeアップデート後の不整合

あたりが原因である可能性が高いです。ログがあれば、かなり具体的に切り分けできます。
