---
title: Figma Starterプランの商用・企業利用について
aliases:
  - Figma Starterプランの商用・企業利用について
type: literature
created: 2026-08-30T20:52:14+09:00
updated: 2026-08-30T20:52:14+09:00
id: 20260830-205214
permalink:
draft: false
tags:
  - ai-generated
---
以下に、ここまでの会話内容を、**「Figma Starterプランを会社で商用利用してよいのか」**という論点に絞って整理します。

## Figma Starterプランの商用・企業利用について

### 結論

2026年8月時点で確認したFigma公式の利用規約上では、**Starterプランを商用目的・業務目的で利用することは可能**です。

また、

- 個人が商用制作に使う
- 会社員が勤務先の業務で使う
- 法人・企業がFigmaを利用する
- 会社の商品画像、広告、YouTubeサムネイルなどを制作する

といった利用そのものが、Starterだから禁止されるという規定は確認されませんでした。

したがって、

> **Starter = 個人・非商用限定プラン**

という理解は正しくありません。

より正確には、

> **Starter = 商用・業務利用も可能な無料プラン。ただし機能・共同作業・管理面に制限がある**

という位置付けです。

---

### 「個人向け」「お試し向け」という説明との関係

Figmaの料金ページなどでは、Starterについて、

- 個人プロジェクト向け
- Figmaを試したい人向け
- 個人や非常に小規模なチーム向け

といった説明があります。

ただし、これは基本的に**プランの想定ユーザーや機能規模についての説明**です。

「個人向け」と書かれていることと、

> 法人・企業による業務利用を禁止している

ことは別です。

Figmaの利用規約では、無料アカウントについて明確に**business purposes**での利用を認めています。

したがって、

```text
Starter
↓
個人向けと紹介されている
↓
法人利用不可
```

という解釈にはなりません。

実際には、

```text
Starter
├─ 個人利用：OK
├─ 商用利用：OK
├─ 業務利用：OK
└─ 企業利用：OK
   └─ ただし機能・管理上の制約あり
```

という整理になります。

---

## 利用規約のどこを読めばよいか

商用・企業利用について自分で確認する場合、Figmaの **Terms of Service** の中でも、特に次の3か所を見るのが重要です。

### 1. Terms of Serviceの冒頭

まず、この利用規約そのものがStarterプランに適用されることを確認します。

規約冒頭には、

> “Figma offerings provided under Starter and Professional plans…”

という趣旨の記述があります。

つまり、ここで読んでいるTerms of Serviceは、

- Starter
- Professional

などに適用される契約条件です。

そのため、後述する「無料アカウントはbusiness purposesで利用できる」という規定をStarterにも適用して読むことができます。

---

### 2. 「on behalf of an entity (such as your employer)」の部分

規約冒頭付近には、

> “If you are accessing or using the Services on behalf of an entity (such as your employer)…”

という記述があります。

重要なのは、

> **such as your employer**  
> ＝ たとえば勤務先

と明示されている点です。

つまりFigmaの利用規約そのものが、

- 会社員が勤務先のために利用する
- 法人・企業を代表してFigmaを利用する

というケースを想定して作られています。

したがって、

> 「Figmaは個人向けサービスなので、そもそも会社の仕事では使えない」

というものではありません。

---

### 3. 最重要：「1.1 Access to the Services」

商用利用について一番直接的な根拠になるのがここです。

特に重要なのが、

> “If Customer has a free account, Customer may use the Services for business or personal purposes”

という部分です。

日本語にすると、おおむね、

> **顧客が無料アカウントを持っている場合、サービスを業務目的または個人目的で使用することができる**

という意味です。

ここで、

- free account
- business purposes
- personal purposes

が明示されています。

そのため、

> **無料プランだから商用利用不可**

という制限ではありません。

Starterの商用利用可否について社内で根拠を示す必要があるなら、**この一文が最重要**です。

---

## 「会社で使える」ことを確認する補助的な部分

規約では「Authorized User」という概念も使われています。

そこでは、

- employees
- contractors
- その他Customerに関連する人物

などが対象になります。

つまり、

> **従業員が会社のためにFigmaを使用する**

という利用形態も、規約上想定されています。

これも企業利用が可能であることを補強する材料になります。

---

## 商用利用と第三者素材のライセンスは別問題

ここは分けて考える必要があります。

Figma Starter自体を商用利用できるからといって、

> **Figma上に存在するすべての素材を自由に商用利用できる**

という意味にはなりません。

たとえば、

- Figma Communityのテンプレート
- 他人が作成したアイコン
- UI Kit
- 写真
- イラスト
- フォント
- プラグインが提供する素材

などには、それぞれ別のライセンス条件が設定されている可能性があります。

したがって、

```text
Figma Starterの商用利用
→ OK

自分で作ったデザインの商用利用
→ 基本的にOK

Figma Community等から取得した第三者素材の商用利用
→ 素材ごとのライセンス確認が必要
```

という切り分けが必要です。

---

## 自社制作物の場合

たとえば会社で、

- YouTubeサムネイル
- 楽天市場の商品画像
- 商品紹介画像
- Webサイト用画像
- チラシ
- バナー
- 社内資料

などをFigma Starterで制作する場合、

**「Starterだから商用利用できない」という問題は基本的にありません。**

自社で用意した、

- 写真
- ロゴ
- 商品画像
- テキスト
- 自社制作SVG
- 自作レイアウト

などを使って制作するのであれば、第三者素材のライセンス問題もかなり限定されます。

---

## Professional / Businessとの違いをどう考えるか

Starterから有料プランへ移行する理由は、

> **商用利用するから**

ではありません。

基本的には、

> **Starterの機能制限が業務上問題になるから**

です。

考え方としては、

|論点|Starter|Professional / Business|
|---|---|---|
|個人利用|○|○|
|商用利用|○|○|
|企業での利用|○|○|
|自社制作物への利用|○|○|
|小規模運用|向いている|○|
|多人数共同作業|制限が問題になりやすい|向いている|
|ファイル・プロジェクト管理|制限あり|強化される|
|組織管理|最低限|強い|
|セキュリティ・管理機能|限定的|Business等で強化|

したがって、プラン選定は、

```text
会社だからProfessionalが必要
```

ではなく、

```text
会社で使う
↓
Starterでもライセンス上は利用可能
↓
実際の業務量・人数・管理要件を確認
↓
Starterの制限内ならStarter
↓
制限が支障になるならProfessional / Business
```

と考えるのが適切です。

---

## 今回確認したい場合に最低限読む箇所

FigmaのTerms of Serviceを全部読む必要はありません。

今回の論点については、最低限、

1. **規約冒頭**
    - Starter / Professionalにこの規約が適用されること
2. **“on behalf of an entity (such as your employer)”**
    - 勤務先・企業を代表した利用が想定されていること
3. **1.1 Access to the Services**
    - “free account”
    - “business or personal purposes”

この3点を確認すれば十分です。

特に社内で「無料版を仕事で使って大丈夫なのか？」と聞かれた場合は、

> **“If Customer has a free account, Customer may use the Services for business or personal purposes”**

の部分を根拠として示すのが最も分かりやすい、というのが今回の結論です。