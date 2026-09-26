---
title: Windows版ChatGPT Work Localのローカルファイル編集不具合と切り分け
aliases:
  - Windows版ChatGPT Work Localのローカルファイル編集不具合と切り分け
type:
created: 2026-09-21T20:51:34+09:00
updated: 2026-09-21T20:51:34+09:00
id: 20260921-205134
permalink:
draft: true
tags:
  - ai-generated
---
# Windows版ChatGPT Work Localのローカルファイル編集不具合と切り分け

Windows版ChatGPT Work / Work LocalでObsidian Vault内のMarkdownを直接編集する場合、単純な「Windowsの権限不足」「Obsidianが開いている」「Git管理下だから」といった単一原因では説明できない不具合がある。

特に重要なのは、**同じフォルダ内で編集できるファイルと編集できないファイルが混在すること、フォルダアクセスを承認しても一部ファイルだけ書き込み拒否されること、リネーム後に編集できなくなる場合があること、そして一度エラーになるとWorkが実作業を再開しなくなる場合があること**である。

現時点では、Windows上のWork Localにおける**sandbox・権限・編集経路の不整合**と、エラー後の**agent execution / app-server状態の復帰不良**を別問題として考えるのが最も整合的である。

## 問題の特徴

確認されている症状は次の通り。

- 同じObsidian Vault、同じフォルダ内でも編集成功と失敗が混在する
- 多くのMarkdownは正常に編集・リネームできる
- 特定ファイルだけ`Access is denied`などで拒否される
- フォルダ全体へのアクセスを再承認しても改善しないことがある
- 新しいWorkスレッドでも同様の失敗が再現することがある
- Work自身がリネームした後、そのファイルの追加編集に失敗する場合がある
- ファイル操作エラー後、「続けて」と指示しても会話だけ返し、ツール実行を再開しない場合がある

このため、Vault全体が読み取り専用である可能性は低い。

---

## 最も疑うべき構造

問題は一つではなく、少なくとも次の二系統に分けて考える方がよい。

```
flowchart TD
    A[Work Localでファイル操作]
    A --> B[ファイル編集系の問題]
    A --> C[実行状態の問題]

    B --> D[sandbox / permission]
    B --> E[編集経路の違い]
    B --> F[ACL・属性・ロック]
    B --> G[rename後のstale path]

    C --> H[tool execution停止]
    C --> I[app-server / task state不整合]
    C --> J[以後チャット応答だけ返す]
```

つまり、

- ファイルを書けない問題
- その失敗後にWorkそのものが実行を再開しない問題

は、同じ原因とは限らない。

---

## Work Local側で最も有力な原因

### sandbox・権限・編集経路の不整合

Windows版Workでは、フォルダへのアクセスをユーザーが許可したからといって、必ずしも内部のすべての実行経路が同じ権限で動くとは限らない。

公開事例では、

- フォルダ作成は成功する
- その中へのファイル作成は拒否される
- `Allow once`で許可しても失敗する
- `Full access`では成功する

というWindows版Workの事例がある。

このため、

> UI上ではフォルダアクセス承認済み  
> ＝  
> Work内部の全プロセス・全編集経路が書き込み可能

とは限らない。

---

## 編集方法によって成否が変わる可能性

特に重要なのは、同じファイルでも**編集経路によって成功・失敗が変わる事例が存在する**こと。

例としてWindows環境では、

- `apply_patch` → Access denied
- PowerShellによる直接書き込み → 成功

という報告がある。

そのためWork内部に、

- 内蔵ファイル編集
- patch
- shell / PowerShell
- repository-awareな処理
- Git関連コマンド

など複数の実行経路があり、その一部だけsandboxや権限で失敗している可能性がある。

ただし、

> 通常Markdown編集では必ずこのツールを使う  
> 管理ノートでは必ずpatchを使う

といった内部仕様は公開情報からは確認できない。

したがって、**成功時と失敗時のログで使用ツールを比較することが重要**になる。

---

## Gitとの関係

Gitについては、

> Git管理されていること自体

と、

> WorkがGit-awareな編集処理を内部利用していること

を分離して考える必要がある。

### Git管理下であるだけでは問題とは言えない

OpenAIのWindows sandbox設計では、workspace本体は書き込み可能にしつつ、

```
.git/
```

だけを特別に保護する設計がある。

つまり本来は、

```
Vault/
├─ .git/        ← 保護対象
├─ note-a.md    ← 編集可能
├─ note-b.md    ← 編集可能
```

という状態を想定している。

そのため、

> `.git`が存在するからMarkdownを書けない

という説明は弱い。

### Git関連処理が間接的に失敗原因になる可能性

一方で、`.git`の所有者やACL異常によってsandbox初期化が失敗し、その結果として通常ファイルの更新まで失敗したWindows事例もある。

そのため、

> Gitそのもの

ではなく、

> Work / Codexが`.git`を保護・検査・操作しようとした処理

が問題になる可能性は残る。

特にログ内に次が出ている場合は要注意。

```
apply_patch
git apply
git mv
.git
sandbox setup
SetNamedSecurityInfoW
deny ACE
CodexSandboxOffline
```

---

## 個別ファイルのWindows状態

同じフォルダでもファイルごとに状態が異なる可能性はある。

確認対象は、

- NTFS ACL
- 所有者
- 継承設定
- ReadOnly属性
- 明示的DENY
- reparse point
- symbolic link / junction
- 開いているfile handle
- antivirusや同期ソフトによるロック

など。

同じフォルダにあるからといって、すべてのファイルが完全に同じACLとは限らない。

そのため、

> 成功ファイルと失敗ファイルのACL比較

は優先度が高い。

---

## Obsidianとの関係

Obsidian Vaultは通常のMarkdownファイル群であり、外部エディタから編集されること自体は通常利用の範囲内。

したがって、

> Obsidianを開いているだけで外部編集できない

とは考えにくい。

ただし、

- frontmatter自動更新
- Gitプラグイン
- sync系プラグイン
- リンク自動更新
- metadata処理
- 外部ファイル監視

などが特定ファイルにアクセスしている可能性はある。

そのためObsidianについては、

> 起動中だから悪い

ではなく、

> 特定ファイルを特定タイミングで別処理が掴んでいるか

を見るべき。

---

## リネーム後の失敗

リネーム後に編集できなくなる場合、Work内部の参照不整合が疑われる。

考えられる状態は、

```
old-name.md
    ↓ rename
new-name.md
```

実ファイルは`new-name.md`になっているが、Work内部では一部の状態が、

```
old-name.md
```

を保持している可能性がある。

候補は、

- stale path
- 古いpatch対象
- 古いworkspace state
- 古いfile handle
- rename前のキャッシュ
- helper processのcwd
- optimistic concurrencyの不一致

など。

Windows版Codex / Work周辺では、rename後も旧パスを保持したり、helper processがディレクトリを掴んだままになったりする類似報告が存在する。

そのため、リネーム後だけ失敗するならこの仮説の優先度は高い。

---

## エラー後にWorkが実作業を再開しない問題

これはファイル権限問題とは別に扱った方がよい。

正常時は概念的に、

```
flowchart LR
    U[ユーザー指示]
    U --> A[Agent]
    A --> T[Tool call]
    T --> R[Local runtime]
    R --> F[ファイル操作]
    F --> O[Tool output]
    O --> A
```

となる。

ところが実行中にruntimeやapp-server側で問題が起きると、

```
flowchart LR
    A[Agent]
    A --> T[Tool call]
    T --> X[実行失敗]
    X --> M[tool output欠落]
    M --> R[resume]
    R --> C[会話だけ継続]
```

という状態になる可能性がある。

実際、OpenAIは2026年9月14〜15日に、

- Work taskの開始・再開エラー
- workspace tools / filesへのアクセス制限

を公式障害として認めている。

また別のWindows版Work報告では、tool実行中にapp-serverが再生成され、その結果tool outputが欠落する事例もある。

したがって、

> 「続けてください」と言っても「承知しました」だけ返して作業しない

場合は、バックグラウンドで継続しているのではなく、**agentic executionが終了または壊れたまま、通常チャットだけ成立している**可能性がある。

---

## 仮説ごとの評価

|仮説|評価|理由|
|---|---|---|
|Work内部で複数の編集経路があり、一部だけ失敗|最有力|patchと直接writeで成否が違うWindows事例がある|
|フォルダ承認が全実行プロセスへ反映されていない|最有力|Allow onceでも失敗、Full accessで成功したWork事例がある|
|特定ファイルだけACL・属性・所有者等が違う|可能性高い|同フォルダ内で成功・失敗が混在するため要比較|
|rename後に古いパスや状態を保持|可能性高い|Windows版Codex/Workで類似事例あり|
|エラー後にexecution loopが終了|可能性高い|公式障害・app-server関連報告と一致|
|Git管理下だから問題|可能性低い|Git workspace自体は編集可能な設計|
|Git-awareな処理のときだけ問題|条件付きで有力|`.git`保護やpatch経路の問題事例あり|
|Obsidian起動そのもの|可能性低い|通常は外部編集可能|
|日本語ファイル名そのもの|現時点では低い|直接的な証拠なし|

---

## 安全な切り分け手順

原因調査では、いきなりACL変更や所有者変更をしない。

変更してしまうと元の異常状態が消え、原因を確認できなくなる可能性がある。

### 1. 成功ファイルと失敗ファイルを比較

例：

```
GOOD.md
BAD.md
```

について、

- Owner
- ACL
- inheritance
- Attributes
- ReadOnly
- LinkType
- LastWriteTime

を比較する。

PowerShell例：

```
$good = "C:\...\GOOD.md"
$bad  = "C:\...\BAD.md"

Get-Item -LiteralPath $good -Force |
  Select-Object FullName, Attributes, Length, LastWriteTime, LinkType, Target

Get-Item -LiteralPath $bad -Force |
  Select-Object FullName, Attributes, Length, LastWriteTime, LinkType, Target

Get-Acl -LiteralPath $good |
  Format-List Owner, AreAccessRulesProtected, AccessToString

Get-Acl -LiteralPath $bad |
  Format-List Owner, AreAccessRulesProtected, AccessToString

icacls "$good"
icacls "$bad"

attrib "$good"
attrib "$bad"
```

---

### 2. ファイル内容とファイル実体を分離する

失敗ファイルを削除せず、

```
BAD.md
BAD-copy.md
BAD-recreated.md
```

を用意する。

- `BAD-copy.md`：Explorerでコピー
- `BAD-recreated.md`：新規Markdownを作り本文だけコピー

Workにすべて同じ小さな追記をさせる。

例：

```
<!-- Work write test -->
```

結果から次を判断できる。

|結果|疑うもの|
|---|---|
|BADだけ失敗|元ファイル固有のACL・属性・handle|
|BADとcopyが失敗|コピーで引き継いだ属性または名前・内容|
|recreatedだけ成功|file identity / inherited state|
|全部失敗|Work側のworkspace / permission / editing path|
|新しいWorkでは成功|task state / stale path|

---

### 3. Obsidianを終了して再テスト

Obsidian完全終了状態で同じファイルを編集する。

```
Obsidian起動中  → 失敗
Obsidian終了後  → 成功
```

なら、Obsidian本体またはplugin処理が疑わしい。

両方失敗なら、Obsidian単独原因の可能性は下がる。

---

### 4. Git管理外フォルダにコピー

元Vaultは変更しない。

例：

```
C:\WorkLocal-Test\
```

へGOOD/BADをコピーし、`.git`なしで比較する。

|Git管理内|Git管理外|解釈|
|---|---|---|
|失敗|成功|Git/sandbox/repository boundaryを疑う|
|失敗|失敗|Gitそのものは後退|
|BADだけ失敗|BADだけ失敗|file-specific問題|
|全部成功|workspace stateや一時障害|

---

### 5. disposableファイルでrenameテスト

重要ノートでは行わない。

```
rename-test-a.md
```

について、

1. Workで追記
2. Workで`rename-test-b.md`へ変更
3. 同じWorkで再度追記
4. 新しいWorkでも追記
5. Explorer上の実パス確認

を行う。

もし、

```
rename前             成功
rename直後・同じWork  失敗
新しいWork            成功
```

なら、stale path / task stateの可能性がかなり高い。

---

### 6. ファイルhandleを確認

失敗中にWindowsリソースモニターの「関連付けられたハンドル」で対象ファイル名を検索する。

確認対象：

- ChatGPT
- Obsidian
- node系helper
- Codex関連process
- OneDrive
- antivirus
- Git関連process

handleを終了させる前に、

- process名
- PID
- 発生時刻

を記録する。

---

### 7. permission modeをテストフォルダで比較

重要Vaultではなく、使い捨てフォルダで、

```
Default
↓
Allow once
↓
Full access
```

を比較する。

もし、

```
Default     → 失敗
Allow once  → 失敗
Full access → 成功
```

なら、Windows Workのsandbox / approval問題と非常に近い。

テスト後は通常のpermission設定へ戻す。

---

## ログで確認すべき文字列

成功時と失敗時のログを比較する。

特に、

```
Access is denied
os error 5
WinError 32
sharing violation
sandbox
setup refresh
apply_patch
git apply
git mv
.git
SetNamedSecurityInfoW
deny ACE
CodexSandboxOffline
app-server
Custom tool call output is missing
project context sync failed
stage=filesystem
workspace
writable
```

を確認する。

成功時と失敗時で**使用しているtool名が違う**なら、編集経路依存の可能性が非常に高くなる。

---

## 現時点の優先順位

現状では次の順で疑う。

1. **Work LocalのWindows sandbox / permission / editing path不整合**
2. **rename後のstale path・helper・workspace state**
3. **個別ファイルのACL・属性・file handle**
4. **Workのagent execution / app-server状態破損**
5. **Git-aware処理や**`**.git**`**保護処理の副作用**
6. Obsidian plugin等による同時アクセス
7. Controlled Folder Access・antivirus
8. 日本語ファイル名・path length等

Git管理下であること自体、またObsidianが起動していること自体は、現時点では主要原因としての優先度は低い。

---

## OpenAIへ不具合報告する場合

最低限、次を揃える。

- Windowsのバージョン・build
- ChatGPT Desktopのバージョン
- Plus / Work / Work Local
- permission mode
- 対象フォルダが通常NTFSか同期フォルダか
- `.git`の位置
- 成功ファイルと失敗ファイルのabsolute path
- 各ファイルのACL / Owner / Attributes
- 具体的に行った操作
- 完全なエラーメッセージ
- フォルダアクセス再承認後の結果
- 新しいWorkで再現するか
- Obsidian終了後も再現するか
- Git管理外コピーでも再現するか
- rename前後の結果
- 発生日時
- screenshot / screen recording
- Workログ

再現手順は短くできるほどよい。

```
1. Windows版ChatGPT Work LocalでVaultを開く。
2. フォルダへのread/write accessを承認する。
3. GOOD.mdへの追記は成功する。
4. 同一フォルダのBAD.mdへの同じ追記はAccess deniedになる。
5. フォルダを再承認してもBAD.mdだけ失敗する。
6. 新しいWorkでもBAD.mdが失敗する。
7. BAD-copy.md / BAD-recreated.mdで結果を比較する。
8. rename直後の編集結果も記録する。
9. エラー後に「続けて」と指示してもtool実行に戻らない場合、そのログも添付する。
```

---

## 結論

今回の問題は、

> 「Windowsの権限不足」  
> 「Obsidianがファイルをロックしている」  
> 「Git管理下だから」

のいずれか一つだけで説明するのは難しい。

最も整合するのは、**Windows版Work Localのsandbox・permission・編集経路に起因する書き込み不整合が発生し、場合によってrename後のstale stateや個別file stateが重なり、さらにエラー後にはagent execution側の復帰不良が別途発生している**という構造である。

そのため最初に行うべきなのは、設定変更ではなく、

```
GOOD.md
BAD.md
BAD-copy.md
BAD-recreated.md
```

の比較。

これに加えて、

- Obsidian終了比較
- Git管理外コピー比較
- rename前後比較
- permission mode比較
- 成功／失敗時ログ比較

を行えば、原因候補をかなり狭められる。

特に、ACL変更・所有者変更・`.git`修正などは最後に回し、まず読み取り・コピー・比較で証拠を残す方がよい。