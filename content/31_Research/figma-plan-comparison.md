---
title: Figmaの各種プランの比較
aliases:
  - Figmaの各種プランの比較
type: literature
created: 2026-08-30T20:54:59+09:00
updated: 2026-08-30T20:54:59+09:00
id: 20260830-205459
permalink:
draft: false
tags:
---
2026年8月26日時点のFigma公式情報を基準に整理します。結論から言うと、**Figmaは無料のStarterプランでも商用利用できます**。Professional以上でなければ仕事に使えない、というライセンス体系ではありません。([Figma](https://www.figma.com/legal/tos/ "Terms of Service"))

## 各プランの違い

日本語版では、英語版の「Organization」が現在「ビジネス」と表示されています。([Figma](https://www.figma.com/ja-jp/pricing/?utm_source=chatgpt.com "プランと料金 | Figma"))


| 項目                  | Starter   | Professional                       | ビジネス（Organization）   | Enterprise           |
| ------------------- | --------- | ---------------------------------- | -------------------- | -------------------- |
| 料金                  | **無料**    | Full：**$20/月** または **$16/月相当・年払い** | Full：**$55/月相当・年払い** | Full：**$90/月相当・年払い** |
| 主な対象                | 個人・試用     | 個人事業・プロ・小規模チーム                     | 企業・複数チーム             | 大企業                  |
| チーム内ファイル            | **3ファイル** | **無制限**                            | 無制限                  | 無制限                  |
| フォルダ                | 1フォルダ     | 無制限                                | 無制限                  | 無制限                  |
| チーム数                | 1         | 1                                  | **複数**               | 複数＋Workspaces        |
| バージョン履歴             | 30日       | **無制限**                            | 無制限                  | 無制限                  |
| Components          | ○         | ○                                  | ○                    | ○                    |
| Auto Layout         | ○         | ○                                  | ○                    | ○                    |
| Prototyping         | 基本        | 高度                                 | 高度                   | 高度                   |
| Team Libraries      | ×         | **○**                              | ○                    | ○                    |
| Dev Mode            | ×※        | **○**                              | ○                    | ○                    |
| Shared fonts        | ×         | ×                                  | **○**                | ○                    |
| Branching / merging | ×         | ×                                  | **○**                | ○                    |
| 組織全体のDesign System  | ×         | ×                                  | **○**                | ○                    |
| SSO                 | ×         | ×                                  | **○**                | ○                    |
| SCIM                | ×         | ×                                  | ×                    | **○**                |
| 高度な企業向けアクセス制御       | ×         | 一部                                 | ○                    | **最も充実**             |


※Starterでも閲覧者向けの基本的なInspect機能は利用できますが、完全なDev Modeとは異なります。Figma公式の機能比較では、Starterは「1チーム・1フォルダ・3ファイル・30日履歴」、Professionalから無制限フォルダ・無制限履歴・ライブラリ・Dev Modeなどが追加されます。Organizationでは複数チーム、共有フォント、Branching、SSOなど、EnterpriseではWorkspaces、SCIM、高度なアクセス制御などが追加されます。([Figmaヘルプセンター](https://help.figma.com/hc/en-us/articles/360040328273-Figma-plans-and-features "Figma plans and features – Figma Learn - Help Center"))

Professionalは月払いと年払いを選択できます。公式価格ページの年払い表示はFull $16、Dev $12、Collab $3/月相当です。現在の月払いFullは$20/月で、2026年8月の実際のFigma請求報告とも一致します。Organization/Enterpriseは年契約です。([Figmaヘルプセンター](https://help.figma.com/hc/en-us/articles/360041061034-Manage-billing-on-the-Professional-plan?utm_source=chatgpt.com "Manage billing on the Professional plan – Figma Learn - Help Center"))

### 「シート」の意味

ここは現在のFigmaで少し分かりにくいところです。

**Full seat**が普通のデザイナー向けで、Figma Designを編集できます。Dev seatは主にDev Mode、Collab seatはFigJam/Slides等向けで、Designファイルについては基本的に閲覧・コメント用途です。閲覧だけならView seatは無料です。([Figmaヘルプセンター](https://help.figma.com/hc/en-us/articles/29717597009431-Guide-to-billing-at-Figma?utm_source=chatgpt.com "Guide to billing at Figma – Figma Learn - Help Center"))

したがって、**自分一人で普通にFigma Designを使う場合は「Starter」または「Professional Full seat」を比較すれば十分**です。

---

# 商用利用について

### 自分で作ったデザイン

**Starterでも商用利用できます。**

Figmaの利用規約では、Figma上でユーザーが作成・アップロードした「Customer Content」について、**ユーザー側が権利・権原・利益を保持する**と明記されています。つまりFigmaにデザインそのものの所有権を持っていかれるわけではありません。([Figma](https://www.figma.com/legal/tos/ "Terms of Service"))

したがって、たとえばFigmaで作った

広告、YouTubeサムネイル、会社Webサイト、製品カタログ、バナー、SNS画像、UIデザイン、ロゴや図版

などを仕事や販売促進に使うこと自体は、**Starterでも問題ありません**。

重要なのは、

**「商用利用できるか」はFigmaのプランではなく、中で使った素材のライセンスによって決まる**

という点です。

## Figma Community素材には注意

ここは特に重要です。

Figma Communityの**無料Designファイル**は、原則として **CC BY 4.0** です。商用利用・改変とも可能ですが、**作者へのクレジット（Attribution）が必要**です。([Figmaヘルプセンター](https://help.figma.com/hc/en-us/articles/360042296374-Figma-Community-copyright-and-licensing "Figma Community copyright and licensing – Figma Learn - Help Center"))

一方、Communityの**有料ファイル**はFigmaのCommunity Paid Resource Licenseが適用され、購入した素材をデザイン・アプリ・Webサイトなどの成果物に組み込めます。ただし、元素材そのものを再販売・再配布することはできず、成果物は元素材から十分に加工されたものである必要があります。([Figmaヘルプセンター](https://help.figma.com/hc/en-us/articles/360042296374-Figma-Community-copyright-and-licensing "Figma Community copyright and licensing – Figma Learn - Help Center"))

Pluginについては、無料・有料とも「商用ファイルで実行すること」は基本的に可能ですが、作者が独自ライセンスを追加している場合があります。([Figmaヘルプセンター](https://help.figma.com/hc/en-us/articles/360042296374-Figma-Community-copyright-and-licensing "Figma Community copyright and licensing – Figma Learn - Help Center"))

### フォント・写真・アイコン

これもFigmaとは別です。

たとえば商用禁止フォントをFigmaに読み込んでも、**Figmaを使ったから商用OKになるわけではありません**。

同様に、写真、イラスト、アイコン、SVG、Community素材、外部テンプレートについて、それぞれ元のライセンスを確認する必要があります。

---

## Figma AIで生成したもの

2026年6月24日発効のFigma AI Termsでは、AIへのInputと生成されたOutputはいずれもCustomer Contentとされ、**Figmaとユーザーとの関係では、ユーザーがOutputについての権利を保持する**とされています。([Figma](https://www.figma.com/legal/ai-terms/?utm_source=chatgpt.com "Figma AI Terms"))

ただしFigma自身も、AI出力について正確性や権利クリアランスを保証していません。したがって、AI生成画像・コードなどを商用採用する場合には、人間による確認が必要です。([Figma](https://www.figma.com/legal/ai-terms/?utm_source=chatgpt.com "Figma AI Terms"))

---

# では、Starterで十分なのか

現在の用途が**一人でFigma Designを使ってデザインを作成・編集する**のが中心なら、かなりの範囲をStarterでこなせます。

特に、現在行っているような**HTMLをFigmaへ取り込んでレイヤー化し、サムネイル等を編集して最終成果物を書き出す用途**であれば、**商用利用のためにProfessionalへ加入する必要はありません**。

Starterで最初に問題になる可能性が高いのは商用ライセンスではなく、**「チーム側では3ファイルまで」「バージョン履歴30日」「Team Libraryなし」**という運用上の制限です。Draftは無制限なので、一人で使う段階ではStarterがかなり実用的です。([Figmaヘルプセンター](https://help.figma.com/hc/en-us/articles/360040328273-Figma-plans-and-features "Figma plans and features – Figma Learn - Help Center"))

したがって現時点では、**まずStarterのまま使う → 3ファイル制限や整理・履歴・ライブラリが不便になった段階でProfessionalに上げる**、という選び方が合理的です。