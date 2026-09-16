---
title: winmail.datが届く原因と対処方法
aliases:
  - winmail.datが届く原因と対処方法
  - winmail.datの開き方
type: permanent
created: 2026-01-10
updated: 2026-09-16T19:45:09+09:00
id: 20260425-175758
permalink:
draft: false
tags:
  - field
  - ai-generated
---
# winmail.datが届く原因と対処方法

`winmail.dat`は、受信側でそのまま開くべき一般的な文書ファイルではない。送信側のOutlookがリッチテキスト形式（TNEF）でメールの装飾、Outlook固有機能、通常の添付ファイルなどを一つに包んだとき、受信側のメールソフトがその形式を解釈できずに表示するファイルである。[Outlookのメッセージ形式とTNEF（Microsoft Learn）](https://learn.microsoft.com/en-my/outlook/troubleshoot/message-body/how-tnef-affects-email-messages)

したがって、拡張子を`.pdf`や`.docx`へ変えても、元の添付ファイルにはならない。まず、必要なファイルがTNEFの中に含まれている可能性と、送信者へ再送を依頼できるかを分けて考える。

## 受信側で最初に行うこと

```text
1. メール本文・送信者・本来必要だった添付ファイル名を確認する
2. winmail.datだけが届いたことを送信者へ伝える
3. HTML形式またはテキスト形式で、元の添付ファイルを再送してもらう
4. 再送メールで、意図した添付ファイルを開けるか確認する
```

業務上のファイルや個人情報を含む添付物では、内容を知らないオンライン変換サービスへ`winmail.dat`をアップロードしない。再送を依頼できない緊急時だけ、組織で許可された受信環境またはローカルのTNEF対応ツールを使えるか、情報管理の担当者へ確認する。

## 送信側での再発防止

送信者がOutlook for Windowsを使っている場合は、再送するメールをHTMLまたはテキスト形式で作成する。画面構成はOutlookの版で異なるが、クラシック版では新規メールの`書式設定`からメッセージ形式を選べる。

```text
リッチテキスト（TNEFを使う）
    → 相手のメール環境によっては winmail.dat になる

HTML または テキスト形式
    → 通常の添付ファイルとして受信できるかをテストする
```

通常の添付ファイルだけを送るなら、相手がOutlookやExchangeを使っていない場合にTNEFは必須ではない。全社設定、レジストリ変更、Exchange側の変換設定は送信環境全体へ影響し得るため、受信者側が自己判断で変更するものではない。まずは1通のHTML形式による再送で確認する。
