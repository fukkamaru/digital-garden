---
title: ChatGPTで出来ること
aliases:
  - ChatGPTで出来ること
type:
created: 2026-08-13T11:44:42+09:00
updated: 2026-09-01T19:28:44+09:00
id: 20260813-114442
permalink:
draft: true
tags:
  - ai-generated
---
はい。これまでの話を踏まえると、**「スマホ版Work」「デスクトップ版Work」「通常Chat＋プラグイン」**の3つを比較すると役割分担がかなり見えやすくなります。

なお、2026年7月以降はOpenAIの呼称が変わり、従来の「Apps／Connectors」を含む機能を**Plugin Directoryから導入する形**が中心になっています。プラグインにはApps・Skillsなどが含まれ、Google DriveやGmailなどの外部サービスを検索・参照したり、許可された範囲で書き込み操作したりできます。([OpenAI Help Center](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt "Apps in ChatGPT | OpenAI Help Center"))

### 3方式の比較

|項目|スマホ版Work|デスクトップ版Work|通常Chat＋プラグイン|
|---|---|---|---|
|主な役割|クラウド上で仕事を完結させるエージェント|**クラウド＋ローカルPCを扱う作業エージェント**|会話を中心に必要な外部サービスを利用|
|普通の質問・相談|○|○|**◎ 最も向く**|
|Web検索・調査|◎|◎|○～◎|
|複数工程をまとめて任せる|**◎**|**◎**|○|
|成果物作成|◎|◎|○|
|添付ファイルを読む|○|○|○|
|プロジェクトのコンテキスト利用|○|○|○|
|PC内ファイルを直接読む|×|**◎**|×|
|PC内フォルダを直接開く|×|**◎**|×|
|PC内ファイルを直接更新|×|**◎**|×|
|Obsidian Vaultを直接扱う|×|**◎**|×|
|Google Driveを読む|○|○|**○**|
|Google Driveへ作成・更新|○※|○※|**○※**|
|Driveのファイル移動・名前変更|○※|○※|**○※**|
|Drive上のファイル削除|○※|○※|**○※**|
|Gmailを読む|○※|○※|**○※**|
|Gmailの整理・変更|○※|○※|**○※**|
|Googleカレンダーを読む|○※|○※|**○※**|
|カレンダー予定の作成・変更|○※|○※|**○※**|
|Google Docs/Sheets/Slides編集|◎|◎|○※|
|ローカル＋クラウドを横断|×|**◎**|×|
|Scheduled Tasks|**◎**|**◎**|Workほど中心的ではない|
|Work履歴の端末間同期|**○**|○（Cloud Work）|通常Chatとして○|
|ローカルWork|×|**○**|×|
|Work専用Voice|×|**○**|通常Voiceは別機能|
|外出先での利用|**◎**|△|**◎**|
|Obsidian整理の最終担当|×|**◎**|×|

※外部サービスへの書き込み・削除等は、**そのプラグイン／Appが該当Actionに対応しており、必要な権限が与えられている場合**です。通常Chatだから読み取り専用というわけではありません。現在のAppsは、対応していれば作成・更新・削除・移動などのWrite Actionを実行できます。重要な変更では承認を求める設定もあります。([OpenAI Help Center](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt "Apps in ChatGPT | OpenAI Help Center"))

特にGoogle Driveは、現在のGoogle連携で「作成・更新・共有・移動・アップロード・コピー・削除」まで対応可能なOAuth権限が用意されています。実際に使える操作はプラン・設定・許可されたActionに依存します。([OpenAI Help Center](https://help.openai.com/en/articles/10408842-google-app-for-chatgpt-data-controls-faq "Google App for ChatGPT – Data Controls FAQ | OpenAI Help Center"))

---

## 一番重要な違いはここ

実は、

**スマホWork vs 通常Chat＋Google Driveプラグイン**

については、Driveを操作するだけならかなり機能が重なります。

例えば通常Chatでも、

> Google Driveの「ChatGPT_Inbox」を確認して、今日追加されたファイルを一覧にして。

とか、

> 処理済みのファイルを削除して。

という操作は、Drive側のActionが許可されていれば可能です。Appsは通常のChatGPT会話から外部データの検索・参照・Action実行ができます。([OpenAI Help Center](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt "Apps in ChatGPT | OpenAI Help Center"))

ではWorkは何が違うのかというと、**「一連の仕事として最後まで進める」ことが設計の中心**です。

OpenAI自身も現在、

- **Chat**：質問、検索、会話
    
- **Work**：調査、分析、文書・表計算・プレゼン・レポートなどを完成させる
    

という位置付けにしています。([OpenAI Help Center](https://help.openai.com/en/articles/20001276-moving-to-the-new-chatgpt-desktop-app "Moving to the new ChatGPT desktop app | OpenAI Help Center"))

---

# あなたの用途に当てはめると

今考えている運用なら、3つ全部を無理に使い分ける必要はありません。

### ① スマホ

基本は、

**通常Chat＋Google Driveプラグイン**

で十分だと思います。

例えばスマホから、

> このPDFをDriveの「AI_Inbox」に入れて。

> このメモをMarkdownにしてAI_Inboxへ保存して。

> 今日撮った資料をDriveの受け渡しフォルダへ入れて。

といった**単発の投入作業**。

ここではWorkを使う必然性はそれほどありません。

---

### ② スマホ版Work

こちらは、スマホだけで少しまとまった処理をしたいときです。

例えば、

> 今日集めた3つの資料を読んで内容を整理し、1つの調査メモにまとめてDriveに保存して。

のような、

**収集 → 読み取り → 比較 → 整理 → 成果物作成**

までやらせるならWorkが向いています。

Cloud Workはスマホ・Web・デスクトップ間で同期します。([OpenAI Help Center](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex "ChatGPT Work and Codex | OpenAI Help Center"))

---

### ③ デスクトップ版Work

ここがあなたの環境では**本命**です。

デスクトップ版Workだけは、許可したローカルフォルダを直接扱えます。Web版・スマホ版WorkはPC内のファイルへ直接アクセスできません。([OpenAI Help Center](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex "ChatGPT Work and Codex | OpenAI Help Center"))

つまり、

```text
Google Drive
   ↓
デスクトップ版Work
   ↓
ローカルPC
   ↓
Obsidian
```

を一気に処理できます。

たとえば、

> Google Driveの `AI_Inbox` を確認。
> 
> 未処理のデータをすべて取得。
> 
> 内容を確認してMarkdown化。
> 
> Fukkamaru context vault内の適切な場所へ分類・保存。
> 
> 既存ノートがあれば統合。
> 
> ローカルへの保存を確認。
> 
> 正常に回収できたDrive上の元ファイルを削除。
> 
> 処理できなかったものは削除せず報告。

という**クラウド→ローカルをまたぐ一連の処理**が可能になります。

ここが通常Chatにはできない決定的な部分です。

---

## なので役割分担はこうするのがきれい

```text
【スマホ】
        │
        ├─ 普通の相談
        │    ↓
        │  通常Chat
        │
        ├─ Driveへの単純な投入
        │    ↓
        │  通常Chat＋Plugin
        │
        └─ 複数資料の整理・調査
             ↓
           スマホ版Work
             
                    ↓

             Google Drive
             AI_Inbox
          （一時受け渡し場所）

                    ↓

【Windows PC】

       デスクトップ版Work
              ↓
       Driveから回収
              ↓
       内容確認・変換
              ↓
       Obsidianへ分類
              ↓
       関連ノート更新
              ↓
       保存確認
              ↓
       Drive原本削除

                    ↓

       Obsidian
       Documents
       └ Fukkamaru context vault
       （正式な保存場所）
```

この構成だと、**Driveは知識ベースではなく「受信トレイ」**に徹します。

そして個人的には、ここがかなり重要だと思います。

**スマホ版Workを必ず経由する必要はありません。**

スマホで「Driveへ放り込むだけ」なら、

> **通常Chat＋Google Driveプラグイン**

の方が軽い。

まとまった仕事なら、

> **スマホ版Work**

PCに戻ってObsidianへ正式登録するときは、

> **デスクトップ版Work**

という3段階にすると、各機能をかなり素直に使い分けられます。デスクトップWorkはローカルファイルを扱え、Cloud Workは端末間同期できるため、この分業と特に相性がいいです。([OpenAI Help Center](https://help.openai.com/en/articles/20001275-chatgpt-work-and-codex "ChatGPT Work and Codex | OpenAI Help Center"))

そして、**「Driveから回収 → Obsidianへ登録 → 正常保存を確認 → Driveから削除」**までをデスクトップWork側の定型処理にしてしまうのが、最終的には一番ラクになりそうです。


---

その理解で合っています。前の表では「通常Chatだから書き込みできる」「Workだから書き込みできる」と見える書き方になっていましたが、正確には違います。

**Google Drive・Gmail・Googleカレンダーなど外部サービスへの読み取り／書き込み／削除は、通常ChatかWorkかではなく、接続しているプラグイン（その中のApp）がどのActionに対応し、どの権限を与えられているかで決まります。** OpenAI公式でも、AppsはChatGPTやCodexを外部データや外部Actionにつなぐものとされています。([OpenAI Help Center](https://help.openai.com/en/articles/11487775-connectors-in-chatgpt?utm_source=chatgpt.com "Apps in ChatGPT"))

なので整理すると、こうです。

|機能|通常Chat|スマホ版Work|デスクトップ版Work|
|---|--:|--:|--:|
|Google Driveを読む|プラグイン経由|プラグイン経由|プラグイン経由|
|Driveへ書き込む|プラグインが対応すれば○|同左|同左|
|Driveのファイルを削除|プラグインが対応すれば○|同左|同左|
|Gmailを読む／操作|プラグイン経由|プラグイン経由|プラグイン経由|
|Googleカレンダー操作|プラグイン経由|プラグイン経由|プラグイン経由|
|**PC内のローカルファイルを直接扱う**|×|×|**○**|
|**Obsidian Vaultを直接読み書き**|×|×|**○**|
|複数工程を仕事として進める|○|**◎**|**◎**|

つまり、今回の比較で本当に分けるべきなのは、

**外部クラウドサービス操作 → Plugin/Appの能力**

**ローカルPC操作 → デスクトップ版Work固有の能力**

**仕事を複数工程で遂行するUI・実行形態 → Workの特徴**

です。Plugin自体はChatGPTの通常ChatでもWorkでも利用される仕組みです。([OpenAI Help Center](https://help.openai.com/en/articles/6825453-chatgpt-release-notes?utm_source=chatgpt.com "ChatGPT — Release Notes"))

なので、あなたの運用を例にすると、

```text
スマホ
 ↓
通常Chat または スマホWork
 ↓
Google Drive Plugin
 ↓
Driveの一時受け渡しフォルダ
```

ここまでは**通常ChatでもWorkでも可能**です。

その後、

```text
Google Drive Plugin
 ↓
デスクトップ版Work
 ↓
ローカルPC
 ↓
Obsidian Vault
```

の最後の **「ローカルPC → Obsidian」だけがデスクトップ版Workの強み**です。

したがって、前の比較表もこの考え方で作り直した方が正確ですね。特に「Drive/Gmail/Calendar操作」の行は3列ともほぼ同じにして、別に**「Plugin/App依存」**と明記するのがよさそうです。
