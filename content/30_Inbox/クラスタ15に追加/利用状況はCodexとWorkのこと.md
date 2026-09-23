---
title: 利用状況はCodexとWorkのこと
aliases:
  - 利用状況はCodexとWorkのこと
type:
created: 2026-09-21T21:16:37+09:00
updated: 2026-09-21T21:16:37+09:00
id: 20260921-211637
permalink:
draft: true
tags:
  - ai-generated
---
この画面の情報は、**通常のChatGPTチャット全体ではなく、Work と Codex の利用状況を対象にしたもの**です。

OpenAI公式ヘルプにも明記されており、

> **Regular Chat usage is not included in these Work and Codex usage views.**

つまり、通常のチャット利用はこの集計には含まれません。[OpenAI Help Center](https://help.openai.com/en/articles/20001478-reviewing-work-and-codex-usage-and-using-personal-analytics-in-chatgpt-desktop?utm_source=chatgpt.com)

画像にある各項目も、基本的には **Work/Codex側の活動統計** と考えてよいです。

|画像の項目|対象|
|---|---|
|累計トークン数 1.8億|Work / Codex|
|最大トークン消費 7772.6万|Work / Codex のチャット|
|最長チャット 1時間59分|Work / Codex|
|現在の連続利用日数|Work / Codex|
|最長連続日数|Work / Codex|
|トークン使用状況のヒートマップ|Work / Codex|
|最もよく使う推論レベル「高・81%」|Work / Codex|
|総チャット数 144|**通常チャットを含まず、Work / Codex 系**|
|[$openai-docs](C:\\Users\\fukkamaru\\.codex\\skills\\.system\\openai-docs\\SKILL.md) 6回|Work / Codex 内のPlugin利用|
|`@browser` 1回|Work / Codex 内のPlugin利用|
|閲覧したスキル 2|Work / Codex|
|使用したスキル数 7|Work / Codex|

したがって、以前話していた

> 「自分はずっと 5.6 Sol・推論：高い・速度：標準で作業していた」

という分析にこの画面を使う場合、**通常チャットでの使い方ではなく、主にWorkで行っていた作業の使い方を表している**と考えるのが正確です。

特に画像の

**「最もよく使う推論レベル　高・81%」**

はかなり重要で、これは「ChatGPT全体の81%で高を使った」という意味ではなく、**この分析対象になっているWork/Codex活動の81%程度で「高」が使われた**という読み方になります。[OpenAI Help Center](https://help.openai.com/ja-jp/articles/20001478-chatgpt-desktop-%E3%81%A7%E3%81%AE-work-%E3%81%A8-codex-%E3%81%AE%E4%BD%BF%E7%94%A8%E7%8A%B6%E6%B3%81%E3%81%AE%E7%A2%BA%E8%AA%8D%E3%81%A8-personal-analytics-%E3%81%AE%E6%B4%BB%E7%94%A8?utm_source=chatgpt.com)

なお、OpenAIの説明では、Work/Codexの利用統計についても、サブエージェント・一部のツール・バックグラウンド処理などがチャット単位の数字に完全には反映されない場合があります。そのため「1.8億トークン＝あなたのWork利用の完全な総量」とまでは断定しない方がよいです。[OpenAI Help Center](https://help.openai.com/en/articles/20001478-reviewing-work-and-codex-usage-and-using-personal-analytics-in-chatgpt-desktop?utm_source=chatgpt.com)

つまり、**このスクリーンショットは、先ほど行っていた「Obsidian作業で5.6 Sol＋推論：高を使い続けたのはコスパ的に適切だったか」という評価には、かなり直接的に使えるデータです。**