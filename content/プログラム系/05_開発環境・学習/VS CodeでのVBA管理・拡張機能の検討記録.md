---
title: "VS CodeでのVBA管理・拡張機能の検討記録"
aliases:
  - "VS CodeでのVBA管理・拡張機能の検討記録"
  - "VS Code拡張機能・Markdown表・VSNotesに関する整理"
  - "VSCode上でVBAの新しいモジュールを作成する方法 ― チャットまとめ"
type:
created: 2026-09-04T01:48:18+09:00
updated: 2026-09-04T01:48:18+09:00
id: 20260904-014818
permalink:
draft: true
tags:
---

VS CodeでVBAを扱うための拡張機能、`.bas`ファイル、XVBA、Markdownノート管理を検討した記録です。現在の拡張機能仕様を示す資料ではなく、当時の検討経緯として整理しています。

元の活動日時は確認できないため、実際の日付順ではなく、内容から推定した段階順に配置しています。後段に置いたコードを最終版候補として扱いますが、現在の環境では未検証です。完全に同一のコード断片だけは重複掲載を省略し、異なる版、失敗例、訂正、未解決事項は残しています。

## 記録の読み方

このノートは現在使う手順書ではなく、当時どのような課題を扱い、どのように設計やコードを変えていったかを残す活動記録です。記録間で判断が食い違う場合は、後段の記録を有力候補としつつ、矛盾そのものも経緯として残しています。

## 段階1：VS Code拡張機能・Markdown表・VSNotesに関する整理

このチャットでは、主に **VS CodeでVBAやMarkdownを扱うための拡張機能の整理**、**Markdown表の改善と並び替え**、**VSNotesでのファイル名変更**について検討した。

全体として、単に拡張機能を列挙するのではなく、「何のための拡張機能なのか」「どのサービス・言語に対応しているのか」を表形式で見やすく整理する方向に進んだ。

### 1. VBA関連拡張機能「VBA」と「XVBA」

最初に、VS CodeでVBAを扱うための拡張機能として、主に以下の2つを確認した。

|拡張機能|主な役割|
|---|---|
|VBA Support for VS Code|VBAコードの編集支援|
|XVBA|VBAプロジェクトをVS Code側で管理するための支援|

#### VBA Support for VS Code

VBAコードそのものをVS Codeで読み書きしやすくする方向の拡張機能として整理した。

説明文としては、以下の内容を採用した。

> VBAコードのシンタックスハイライトやコード補完、Linting、スニペットなどを提供し、VS Code上でVBA開発を効率的にサポートする拡張機能です。

主な用途として挙げたものは次のとおり。

- VBAのシンタックスハイライト
- コード補完
- Linting
- スニペット
- VS Code上でのVBAコード編集支援

#### XVBA

XVBAについては、単なるVBAコード表示ではなく、**Excelなどに格納されているVBAプロジェクトとVS Code上のソースコードを連携・管理する用途**として整理した。

最終的に表へ入れた説明は次の形になった。

> VS Code内でVBAを編集可能とする。VBAプロジェクトのエクスポート/インポート機能を提供し、プロジェクト全体の管理を効率化する拡張機能です。特にVBAコードのバージョン管理やマクロの自動化に役立ちます。

特に想定している用途は次のとおり。

- VBAモジュールのエクスポート
- VBAモジュールのインポート
- VS Code上でのソースコード管理
- Gitなどによるバージョン管理
- VBAプロジェクト単位での管理

概念的には以下のような役割分担として整理できる。

```mermaid
flowchart LR
    A[Excel / VBAプロジェクト] --> B[XVBA]
    B --> C[VS Code上のVBAソース]
    C --> D[Gitによる履歴管理]

    E[VBA Support for VS Code] --> C
    E --> F[シンタックスハイライト]
    E --> G[コード補完・編集支援]
```

つまり、

- **VBA Support for VS Code** = VBAコードを書く・読むための支援
- **XVBA** = VBAプロジェクトをVS Code側へ持ち出し、管理するための支援

という違いで整理した。

---

### 2. VS Code拡張機能一覧へのVBA・XVBA追加

もともと管理していたVS Code拡張機能一覧には、VBA Support for VS CodeとXVBAの説明が誤ってPython Debuggerと同じ内容になっていた。

そのため、それぞれの説明文を修正した。

追加した内容は次のとおり。

```markdown
| VBA Support for VS Code | VBAコードのシンタックスハイライトやコード補完、Linting、スニペットなどを提供し、VS Code上でVBA開発を効率的にサポートする拡張機能です。 | ◯ |
| XVBA | VS Code内でVBAを編集可能とする。VBAプロジェクトのエクスポート/インポート機能を提供し、プロジェクト全体の管理を効率化する拡張機能です。特にVBAコードのバージョン管理やマクロの自動化に役立ちます。 | ◯ |
```

既存表の文章量・文体に合わせて、長すぎない説明へ調整した。

---

### 3. Markdown表のソート方法

Markdownで作成した表について、

> 表を効率的に並び替える良い方法はないか

という話題になった。

候補として次の方法を挙げた。

- 手作業で行を移動
- VS Code拡張機能を使用
- Pythonなどのスクリプトで処理
- 外部のMarkdownテーブル編集ツールを使用

特にVS Code上で完結させる方法として、Markdownテーブル用拡張機能を利用する方向を検討した。

#### Markdown Table Prettifier

候補として挙げたのが、

**Markdown Table Prettifier**

である。

Markdownテーブルを整形し、列幅などを揃える用途として表へ追加した。

チャット内では次の説明文を採用した。

> Markdownのテーブルを自動で整形し、アルファベット順や数値順にソートすることができます。

ただし、ここについては補足が必要である。

Markdown Table Prettifierの主用途は基本的に**テーブル整形**であり、拡張機能のバージョンや実装によってソート機能の扱いは異なる可能性がある。そのため、「Markdown表そのものを列指定で自由にソートしたい」という用途では、専用のテーブル編集機能やスクリプトのほうが確実な場合がある。

---

### 4. 「サービス/言語」カラムの追加

拡張機能一覧を見たときに、

> 何のサービスや言語向けの拡張機能なのか一目で判断したい

という目的から、新しいカラムを追加した。

元の構造：

```text
拡張機能名 | 説明 | インストール
```

から、

```text
サービス/言語 | 拡張機能名 | 説明 | インストール
```

へ変更した。

分類例は次のようになった。

|サービス/言語|拡張機能例|
|---|---|
|Excel|Excel Viewer|
|Git|Git Graph、Git History、GitLens|
|GitHub|GitHub Actions、GitHub Pull Requests and Issues|
|JavaScript/TypeScript|ESLint|
|Markdown|Markdown All in One、Markdown PDF、Markdown Table Prettifier|
|Python|Python、Pylance、Python Debugger|
|VBA|VBA Support for VS Code、XVBA|
|VS Code|Bookmarks、Bracket Lens、Peacockなど|
|データ|Data Preview|
|コードフォーマッティング|Prettier|

この分類により、拡張機能名だけを見たときよりも用途を把握しやすくなった。

---

### 5. 拡張機能一覧の並び替え

追加した「サービス/言語」カラムを基準に、表全体をグループ化して並び替えた。

最終的な大まかな並び順は次のようになった。

```text
データ
Excel
Git
GitHub
JavaScript/TypeScript
Markdown
コードフォーマッティング
Python
VBA
VS Code
```

同一カテゴリ内では、概ね拡張機能名順に並べる形にした。

分類後の構造は次のように整理できる。

```mermaid
flowchart TD
    A[VS Code拡張機能一覧]
    A --> B[データ]
    A --> C[Excel]
    A --> D[Git]
    A --> E[GitHub]
    A --> F[JavaScript / TypeScript]
    A --> G[Markdown]
    A --> H[Python]
    A --> I[VBA]
    A --> J[VS Code共通]

    G --> G1[Markdown All in One]
    G --> G2[Markdown PDF]
    G --> G3[Markdown Table Prettifier]

    H --> H1[Python]
    H --> H2[Pylance]
    H --> H3[Python Debugger]

    I --> I1[VBA Support for VS Code]
    I --> I2[XVBA]
```

この構成によって、「どの技術向けの拡張機能なのか」を先に見てから、具体的な拡張機能を確認できる形になった。

---

### 6. VSNotesについて

VSNotesについては、VS Code内でMarkdownノートを管理する拡張機能として扱った。

一覧表では次の説明になっている。

> VS Code内でノートを作成、管理するための拡張機能です。Markdown形式でノートを簡単に作成でき、タグ付けや検索、ノート間のリンク作成など、ノート管理に必要な機能が充実しています。

その後、VSNotesで作成・管理しているMarkdownファイルについて、

> エクスプローラー上でファイル名を変更したい

という話になった。

---

### 7. VSNotesのファイル名変更問題

当初は、VS Codeの通常のエクスプローラーであれば、

- ファイルを右クリック
- 「名前の変更」
- または `F2`

で変更できると案内した。

しかし、実際のユーザー環境では、

> 「名前を付けて保存」はあるが、「名前の変更」はない

という状況だった。

そのため、右クリックメニューにRenameがないケースを前提として、代替方法として以下を提示した。

#### F2キー

対象ファイルをエクスプローラー上で選択した状態で、

```text
F2
```

を押す。

通常のVS Codeエクスプローラーであれば、これによってファイル名編集モードへ入れる。

#### ターミナルから変更

UI側で変更できない場合は、ターミナルからファイル名を変更する方法も提示した。

例：

```bash
mv old_filename.md new_filename.md
```

ただしWindows環境でPowerShellを利用している場合は、より自然には次のように書ける。

```powershell
Rename-Item "old_filename.md" "new_filename.md"
```

または、

```powershell
ren old_filename.md new_filename.md
```

でもよい。

---

### 8. 「名前の変更」が見つからない理由として考えられる点

このチャットでは完全には切り分けていないが、重要なのは、**VSNotes独自ビューとVS Code標準エクスプローラーを混同しないこと**である。

VS Codeには左サイドバーに複数のビューが存在する。

```mermaid
flowchart LR
    A[VS Codeサイドバー]
    A --> B[標準 Explorer]
    A --> C[VSNotesのノート一覧]
    A --> D[検索]
    A --> E[Git]
    A --> F[拡張機能]

    B --> G[通常ファイル操作]
    G --> H[Rename / F2]
    C --> I[VSNotes独自操作]
```

標準のExplorerではファイルシステムを直接操作できるが、VSNotes独自のビューでは右クリックメニューに同じ操作が表示されない可能性がある。

そのため、VSNotesで作成したノートであっても、ファイルそのものをリネームする場合は、

**VS Code標準のExplorerから対象Markdownファイルを探す**

のが基本的な考え方になる。

---

### 9. 現時点の拡張機能管理方針

今回のやり取りを踏まえると、VS Code拡張機能一覧は以下の4列構成で管理する形が適している。

|カラム|役割|
|---|---|
|サービス/言語|何に関連する拡張機能なのか|
|拡張機能名|VS Code Marketplace上の名称|
|説明|主な機能・用途|
|インストール|現在利用しているか|

特に「サービス/言語」を入れたことで、単なる拡張機能のインベントリではなく、**開発環境全体の構成表**として使いやすくなった。

将来的には、必要であればさらに次のようなカラムを追加する余地がある。

- 用途
- 必須 / 任意
- 利用頻度
- 代替候補
- Publisher
- Extension ID
- 備考

ただし、現在の目的が「何を入れているかを分かりやすく記録すること」であれば、現状の4列で十分に実用的である。

### まとめ

このチャットで行ったことをまとめると、以下の流れになる。

1. VBA Support for VS CodeとXVBAの役割を整理した。
2. VS Code拡張機能一覧に、それぞれ適切な説明を追加した。
3. Markdownテーブルの並び替え方法を検討した。
4. 拡張機能一覧へ「サービス/言語」カラムを追加した。
5. Excel、Git、GitHub、Markdown、Python、VBA、VS Codeなどに分類した。
6. 「サービス/言語」を基準に表を並び替えた。
7. Markdown Table PrettifierをMarkdown関連拡張機能として追加した。
8. VSNotesで管理しているMarkdownファイルのリネーム方法を検討した。
9. 「名前の変更」が表示されないケースでは、`F2`やターミナルからのリネームを代替手段として提示した。
10. VSNotes独自ビューとVS Code標準Explorerでは、利用できるファイル操作が異なる可能性がある点が重要な論点として残った。

現状の未解決点は、**実際に「名前の変更」が表示されていない場所がVS Code標準Explorerなのか、VSNotes独自ビューなのか**という点である。ここを確認すれば、VSNotes環境での正確なリネーム手順をさらに詰められる。

## 段階2：VSCode上でVBAの新しいモジュールを作成する方法 ― チャットまとめ

このチャットでは、**VSCode上でVBAの新しいモジュールを作成・管理する方法**について確認した。

### 1. 質問内容

最初の質問は次の内容だった。

> XVBAを使用して、VSCode上で新しいVBAモジュールを作成するにはどうすればよいか。

これに対して、VSCodeでVBAを扱う方法として、主に以下の3つの方法を説明した。

```mermaid
flowchart LR
    A[VSCodeでVBAを扱う] --> B[.basファイルを作成]
    A --> C[VBA管理用拡張機能を利用]
    A --> D[Python + pywin32で自動操作]

    B --> E[VBEへインポート]
    C --> F[VSCodeとExcel間でコード管理]
    D --> G[ExcelのVBProjectを直接操作]
```

### 2. `.bas` ファイルとして新しいモジュールを作る方法

最も基本的な方法として、VSCode上で**標準モジュールに相当する `.bas` ファイルを新規作成する**方法を説明した。

例えば、

```text
Module1.bas
```

というファイルを作成し、内容を次のようにする。

```vba
Attribute VB_Name = "Module1"
Option Explicit

Sub HelloWorld()

    MsgBox "Hello, VBA!"

End Sub
```

ここで、

```vba
Attribute VB_Name = "Module1"
```

は、VBAプロジェクトにインポートした際の**モジュール名**を表す。

VSCodeで作成した `.bas` ファイルをExcel側で使用する場合は、VBE（Visual Basic Editor）からインポートできる。

基本的な流れは次の通り。

```mermaid
flowchart LR
    A[VSCode] --> B[Module1.basを作成]
    B --> C[VBAコードを記述]
    C --> D[Excelを開く]
    D --> E[Alt + F11]
    E --> F[VBE]
    F --> G[.basをインポート]
    G --> H[標準モジュールとして登録]
```

### 3. VSCodeのVBA管理用拡張機能を使う方法

次に、VSCode側でVBAコードを管理するための拡張機能を利用する方法を紹介した。

この方式では、

- Excel側のVBAコードをVSCodeへ取り出す
- VSCodeで編集する
- 編集したコードをExcel側へ戻す

といった運用を行う。

つまり、単純に `.bas` をテキストファイルとして編集するだけでなく、

```text
Excel VBAプロジェクト
        ↓ Export
VSCode上のソースコード
        ↓ 編集
Excel VBAプロジェクト
        ↑ Import
```

という形で、VBAコードを通常のソースコードに近い形で管理できる。

#### XVBAを使用する場合の考え方

今回の質問では「XVBA」と指定されていたため、本来の主題はこちらになる。

XVBAのようなVSCode向けVBA管理ツールを使用する場合でも、標準モジュールの実体は基本的に、

```text
*.bas
```

として管理される。

したがって、概念的には、

```text
新しい標準モジュール
    ↓
新しい .bas ファイル
    ↓
XVBAによってExcel VBAプロジェクトへ同期
```

という構造になる。

ただし、**前回の回答ではXVBA固有のコマンドや設定方法までは確認せず、一般的なVBA管理方法として説明していた**。そのため、実際に使用しているXVBA拡張機能の仕様に基づいた具体的な操作手順については、別途確認する必要がある。

### 4. Python + `pywin32` で新規モジュールを作る方法

VBAモジュールを手動ではなくプログラムから生成する方法として、WindowsのCOMオートメーションを利用する方法も紹介した。

Pythonの`pywin32`を使うと、ExcelのVBAプロジェクトに対して、

```python
vb_module = wb.VBProject.VBComponents.Add(1)
```

のように標準モジュールを追加できる。

例として紹介したコードは次のようなもの。

```python
import win32com.client

excel = win32com.client.Dispatch("Excel.Application")
excel.Visible = True

wb = excel.Workbooks.Add()

vb_module = wb.VBProject.VBComponents.Add(1)
vb_module.Name = "Module1"

vb_module.CodeModule.AddFromString("""
Sub HelloWorld()
    MsgBox "Hello from Python!"
End Sub
""")

wb.SaveAs(r"C:\path\to\your\file.xlsm")

wb.Close()
excel.Quit()
```

処理構造は以下になる。

```mermaid
flowchart TD
    A[Python実行] --> B[Excel COMを起動]
    B --> C[Workbookを取得]
    C --> D[VBProjectを取得]
    D --> E[VBComponents.Add]
    E --> F[標準モジュール追加]
    F --> G[モジュール名設定]
    G --> H[VBAコード挿入]
```

この方法は、XVBAとは異なり、**ExcelのVBProjectそのものを外部プログラムから操作する方法**となる。

なお、この方式ではExcel側のセキュリティ設定として、VBAプロジェクトへのプログラムによるアクセスを許可する必要がある場合がある。

### 5. 3方式の違い

|方法|新規モジュールの実体|Excelへの反映|特徴|
|---|---|---|---|
|`.bas`を直接作成|`.bas`|VBEからインポート|最も単純|
|XVBA等のVSCode拡張|`.bas`等|拡張機能による同期|VSCode中心でVBAを管理しやすい|
|Python + `pywin32`|Excel内の`VBComponent`|COM経由で直接追加|自動化向け|

VBAを継続的にVSCode上で管理するのであれば、基本的な考え方は、

> **VBAモジュールを`.bas`などのソースファイルとして外部管理し、XVBAを利用してExcelブックと同期する**

という形になる。

### 6. 今回のチャットで残っている重要な点

今回の回答では、VSCodeとVBAの一般的な関係については整理できた一方で、最初の質問で指定されていた**XVBAそのものの操作方法**については十分に踏み込めていない。

特に確認すべきなのは次の部分。

- XVBAプロジェクト内で新しい標準モジュールを作成する正式な操作
- VSCodeのエクスプローラーから単純に`.bas`を追加すればよいのか
- XVBA専用コマンドからモジュールを追加するのか
- `.bas`追加後にExcelへ反映するためのXVBAのImport／Sync操作
- `Attribute VB_Name`を手動で記述する必要があるか
- XVBAプロジェクトのフォルダ構造に命名上の制約があるか

したがって、今回の内容を一言で整理すると、

> **VBAの標準モジュール自体は`.bas`としてVSCode上で作成できる。ただし、XVBAを利用しているのであれば、XVBA固有のプロジェクト構成・同期方法に従ってExcel側へ反映する必要があり、その具体的操作は今回まだ確認していない。**

という状態になっている。

#### 現時点の整理

- **決定済み:** VSCode上では標準モジュールを`.bas`として扱える。
- **代替手段:** VBEへの手動インポート、Python/COMによる自動追加も可能。
- **未解決:** XVBA固有の「新規モジュール作成 → Excelへの同期」の正確な操作方法。
- **次に確認すべきこと:** 使用中のXVBA拡張機能の現行仕様に基づいて、新規`.bas`作成からExcelへの反映までを整理する。

## 統合元ファイル

- 「VS Code拡張機能・Markdown表・VSNotesに関する整理.md」
- 「VSCode上でVBAの新しいモジュールを作成する方法 ― チャットまとめ.md」
