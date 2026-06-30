---
title: yt-dlpによる動画ダウンロード
aliases:
  - yt-dlpによる動画ダウンロード
type: fleeting
created: 2026-06-17T17:46:34+09:00
updated: 2026-06-17T17:46:34+09:00
id: 20260617-174634
permalink:
draft: true
tags:
  - ai-generated
---
了解です。ここまでの流れを、**yt-dlpのエラー原因 → 更新方法 → pip版の扱い → 実際の使い方 → チャンネル一括DL**という順で整理します。

---

# 1. 最初に出ていたyt-dlpのエラー内容

最初に実行したコマンドはこれでした。

```
yt-dlp https://www.youtube.com/watch?v=RLY1Z8dWTWQ
```

その結果、以下のようなログが出ていました。

```
WARNING: [youtube] Falling back to generic n function searchWARNING: [youtube] RLY1Z8dWTWQ: nsig extraction failed: Some formats may be missingWARNING: [youtube] Some web client https formats have been skipped...ERROR: [youtube] RLY1Z8dWTWQ: Sign in to confirm you’re not a bot.Use --cookies-from-browser or --cookies for the authentication.
```

## このエラーの意味

結論としては、**yt-dlpがYouTube側からbot扱いされて、未ログイン状態では動画情報を取得できなかった**という状態でした。

特に重要なのは最後の部分です。

```
Sign in to confirm you’re not a bot.
```

これは、

> YouTube側が「あなたがbotではないことを確認するためにログインしてください」と要求している

という意味です。

---

# 2. 各WARNINGの意味

## `nsig extraction failed`

```
nsig extraction failed: Some formats may be missing
```

これは、YouTubeのプレイヤーJavaScript内にある署名処理をyt-dlpがうまく解析できていない、という警告です。

ただし、これは**必ずしも致命的ではない**です。

意味としては、

> 一部の画質・音声形式が取得できないかもしれない

という程度です。

場合によっては、この警告が出てもダウンロード自体はできます。

---

## `SABR streaming`

```
YouTube is forcing SABR streaming for this client
```

これは、YouTube側が通常の直接URLではなく、YouTube独自のストリーミング方式を強制している、という意味です。

その結果、yt-dlpが一部のWebクライアント用フォーマットを取得できなくなっています。

これも単独では警告ですが、YouTube側の仕様変更の影響を受けているサインです。

---

## 一番の問題は `Sign in to confirm you’re not a bot`

最終的に処理が止まった原因はこれでした。

```
ERROR: Sign in to confirm you’re not a bot.
```

つまり、今回の本体は、

> yt-dlpの一部解析失敗  
> ＋  
> YouTube側のbot判定  
> ＋  
> 未ログイン状態では取得拒否

という組み合わせでした。

---

# 3. まず試すべき対処として「yt-dlpの更新」

最初に提案したのは、yt-dlp本体の更新でした。

```
yt-dlp -U
```

しかし、実行すると次のように出ました。

```
Current version: stable@2025.06.09Latest version: stable@2026.06.09ERROR: You installed yt-dlp with pip or using the wheel from PyPi; Use that to update
```

## この意味

これは、

> あなたのyt-dlpは単体exe版ではなく、Pythonのpip経由でインストールされています。  
> だから `yt-dlp -U` では更新できません。  
> pipで更新してください。

という意味です。

また、表示されていたバージョンはこうでした。

```
Current version: 2025.06.09Latest version:  2026.06.09
```

つまり、**約1年分古いyt-dlpを使っていた**状態でした。

YouTubeは仕様変更が多いので、yt-dlpが古いと今回のようなエラーが出やすくなります。

---

# 4. pip経由での更新方法

pip版のyt-dlpは、以下で更新します。

```
py -m pip install -U yt-dlp
```

うまくいかない場合の代替として、以下も紹介しました。

```
python -m pip install -U yt-dlp
```

権限エラーが出る場合は、ユーザー領域に入れる形です。

```
py -m pip install -U --user yt-dlp
```

その後、あなたは無事にアップデートできました。

---

# 5. pip経由で入っている場合の使い方

pip経由で入っていても、**普段の使い方は通常のyt-dlpと同じ**です。

基本形はこれです。

```
yt-dlp "動画URL"
```

例：

```
yt-dlp "https://www.youtube.com/watch?v=RLY1Z8dWTWQ"
```

## pip版で違うのは「更新方法」だけ

単体exe版なら、

```
yt-dlp -U
```

で更新できます。

しかし、あなたの環境のようにpip版なら、

```
py -m pip install -U yt-dlp
```

で更新します。

つまり整理するとこうです。

|内容|コマンド|
|---|---|
|動画をダウンロード|`yt-dlp "動画URL"`|
|バージョン確認|`yt-dlp --version`|
|詳細確認|`yt-dlp -v`|
|pip版の更新|`py -m pip install -U yt-dlp`|
|exe版の更新|`yt-dlp -U`|

---

# 6. YouTubeのbot確認が出る場合の使い方

今回のように、

```
Sign in to confirm you’re not a bot.
```

が出る場合は、ブラウザのログインCookieをyt-dlpに渡します。

EdgeでYouTubeにログインしているなら：

```
yt-dlp --cookies-from-browser edge "動画URL"
```

Chromeでログインしているなら：

```
yt-dlp --cookies-from-browser chrome "動画URL"
```

Firefoxなら：

```
yt-dlp --cookies-from-browser firefox "動画URL"
```

あなたはこの方法、またはアップデート後の通常実行によって、最終的に**ダウンロードに成功**しました。

---

# 7. 保存先を指定する方法

ダウンロード先を指定する場合は `-P` を使います。

例：ダウンロードフォルダに保存する場合。

```
yt-dlp -P "%USERPROFILE%\Downloads" "動画URL"
```

YouTube動画用のフォルダに保存するなら：

```
yt-dlp -P "%USERPROFILE%\Downloads\YouTube" "動画URL"
```

---

# 8. ファイル名を指定する方法

ファイル名の形式を指定する場合は `-o` を使います。

例：動画タイトルをファイル名にする。

```
yt-dlp -o "%(title)s.%(ext)s" "動画URL"
```

投稿日＋タイトルにする場合。

```
yt-dlp -o "%(upload_date)s_%(title)s.%(ext)s" "動画URL"
```

---

# 9. 音声だけ保存する方法

音声だけ抜き出す場合は `-x` を使います。

MP3にする場合：

```
yt-dlp -x --audio-format mp3 "動画URL"
```

M4Aにする場合：

```
yt-dlp -x --audio-format m4a "動画URL"
```

ただし、MP3変換や動画・音声の結合には **ffmpeg** が必要になることがあります。

---

# 10. 画質や形式を選ぶ方法

まず、利用可能な形式一覧を見るには：

```
yt-dlp -F "動画URL"
```

その後、形式IDを指定してダウンロードします。

例：

```
yt-dlp -f 137+140 "動画URL"
```

ただし、普段は自動選択で十分なので、基本はこれでOKです。

```
yt-dlp "動画URL"
```

---

# 11. 特定チャンネルの動画を一括ダウンロードできるか

あなたが次に聞いたのは、

> 特定のチャンネルの動画を一括でダウンロードはできますか？

という内容でした。

結論は、**できます**。

ただし、チャンネル丸ごと一括DLはYouTube側にbot扱いされやすいので、注意が必要です。

---

# 12. チャンネル一括ダウンロードの基本形

安全寄りの基本コマンドとして、次を提案しました。

EdgeでYouTubeにログインしている場合：

```
yt-dlp --cookies-from-browser edge ^  --download-archive "%USERPROFILE%\Downloads\yt-dlp-archive.txt" ^  -t sleep ^  -P "%USERPROFILE%\Downloads\YouTube" ^  "チャンネルURL"
```

Chromeなら：

```
yt-dlp --cookies-from-browser chrome ^  --download-archive "%USERPROFILE%\Downloads\yt-dlp-archive.txt" ^  -t sleep ^  -P "%USERPROFILE%\Downloads\YouTube" ^  "チャンネルURL"
```

---

# 13. チャンネルURLは `/videos` を使うのがよい

チャンネルURLは、できればトップページではなく `/videos` を付けたURLを使うのがよい、という話をしました。

例：

```
https://www.youtube.com/@チャンネル名/videos
```

または：

```
https://www.youtube.com/channel/UCxxxxxxxxxxxxxxxx/videos
```

理由は、`/videos` の方が「通常動画一覧」を明確に対象にできるからです。

---

# 14. `--download-archive` の意味

```
--download-archive "%USERPROFILE%\Downloads\yt-dlp-archive.txt"
```

これは、**すでにダウンロードした動画IDを記録する機能**です。

メリットは大きいです。

一度ダウンロードした動画は、次回以降スキップされます。

そのため、途中で止まっても、同じコマンドをもう一度実行すれば続きから進められます。

これがないと、チャンネル一括DLでは同じ動画を何度も落としてしまう可能性があります。

かなり重要です。

---

# 15. `-t sleep` の意味

```
-t sleep
```

これは、yt-dlpのプリセット指定です。

YouTubeへのアクセス間隔に待機を入れて、bot判定されにくくする目的で使います。

チャンネル一括DLのような大量処理では、これを入れた方が無難です。

要するに、

> 高速でガンガン取りに行くのではなく、少し待ちながら取得する

という設定です。

---

# 16. まず数本だけ試す方法

いきなりチャンネル全部を落とすのは危険なので、まず5本だけ試す方法も紹介しました。

```
yt-dlp --cookies-from-browser edge ^  --playlist-end 5 ^  --download-archive "%USERPROFILE%\Downloads\yt-dlp-archive.txt" ^  -t sleep ^  -P "%USERPROFILE%\Downloads\YouTube" ^  "チャンネルURL/videos"
```

`--playlist-end 5` は、

> 一覧の最初から5本までを対象にする

という意味です。

---

# 17. 途中で止まった場合

途中で止まった場合は、`--download-archive` を使っていれば、同じコマンドをもう一度実行すればOKです。

```
yt-dlp --cookies-from-browser edge ^  --download-archive "%USERPROFILE%\Downloads\yt-dlp-archive.txt" ^  -t sleep ^  -P "%USERPROFILE%\Downloads\YouTube" ^  "チャンネルURL/videos"
```

すでに完了した動画はスキップされ、未取得のものだけ続きから処理されます。

---

# 18. 最近の動画だけに絞る方法

日付で絞ることもできます。

例：2025年1月1日以降の動画だけ。

```
yt-dlp --cookies-from-browser edge ^  --dateafter 20250101 ^  --download-archive "%USERPROFILE%\Downloads\yt-dlp-archive.txt" ^  -t sleep ^  -P "%USERPROFILE%\Downloads\YouTube" ^  "チャンネルURL/videos"
```

日付形式は `YYYYMMDD` です。

---

# 19. チャンネル名フォルダに整理して保存する方法

チャンネル名ごとのフォルダに保存し、ファイル名を投稿日＋タイトルにする例です。

```
yt-dlp --cookies-from-browser edge ^  --download-archive "%USERPROFILE%\Downloads\yt-dlp-archive.txt" ^  -t sleep ^  -P "%USERPROFILE%\Downloads\YouTube" ^  -o "%(channel)s\%(upload_date)s_%(title)s.%(ext)s" ^  "チャンネルURL/videos"
```

保存イメージはこうです。

```
Downloads└─ YouTube   └─ チャンネル名      ├─ 20260601_動画タイトル.mp4      ├─ 20260528_動画タイトル.webm      └─ ...
```

---

# 20. 現時点でのおすすめ実用コマンド

あなたの環境では、EdgeでYouTubeにログインしている前提なら、これがかなり実用的です。

```
yt-dlp --cookies-from-browser edge ^  --download-archive "%USERPROFILE%\Downloads\yt-dlp-archive.txt" ^  -t sleep ^  -P "%USERPROFILE%\Downloads\YouTube" ^  -o "%(channel)s\%(upload_date)s_%(title)s.%(ext)s" ^  "チャンネルURL/videos"
```

Chromeでログインしているなら、`edge` を `chrome` に変えます。

```
yt-dlp --cookies-from-browser chrome ^  --download-archive "%USERPROFILE%\Downloads\yt-dlp-archive.txt" ^  -t sleep ^  -P "%USERPROFILE%\Downloads\YouTube" ^  -o "%(channel)s\%(upload_date)s_%(title)s.%(ext)s" ^  "チャンネルURL/videos"
```

---

# 21. 全体の結論

ここまでの流れを一言でまとめると、

> 最初はyt-dlpが古く、YouTube側のbot判定や仕様変更に引っかかっていた。  
> pip版だったので `yt-dlp -U` ではなく `py -m pip install -U yt-dlp` で更新した。  
> 更新後は通常どおり `yt-dlp "URL"` で使える。  
> YouTubeでbot確認が出る場合は `--cookies-from-browser edge/chrome` を使う。  
> チャンネル一括DLも可能だが、`--download-archive` と `-t sleep` を入れて慎重に行うのがよい。

という内容です。

実用面では、今後はこの3つを覚えておけばかなり扱いやすいです。

```
yt-dlp "動画URL"
```

```
py -m pip install -U yt-dlp
```

```
yt-dlp --cookies-from-browser edge "動画URL"
```

チャンネル一括ならこれです。

```
yt-dlp --cookies-from-browser edge ^  --download-archive "%USERPROFILE%\Downloads\yt-dlp-archive.txt" ^  -t sleep ^  -P "%USERPROFILE%\Downloads\YouTube" ^  -o "%(channel)s\%(upload_date)s_%(title)s.%(ext)s" ^  "チャンネルURL/videos"
```