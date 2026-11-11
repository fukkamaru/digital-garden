---
title: Acrobat Readerではカスタム倍率と中央配置を併用できない
aliases:
  - Acrobat Readerではカスタム倍率と中央配置を併用できない
type: literature
created: 2026-11-11T10:26:23+09:00
updated: 2026-11-11T10:27
id: 20261111-102623
permalink:
draft: false
tags:
  - ai-generated
---
![[chatgpt.png|25x25]]
Adobe Acrobat Readerでは、印刷時に「カスタム倍率」を指定すると、印刷可能領域の左上を基準に拡大・縮小される。「合わせる」を選択した場合は用紙の中央に配置されるが、倍率を任意に指定できない。

つまり、任意の倍率を指定しながら、印刷内容を用紙の中央に配置する機能はない。
- 「合わせる」
    - 用紙に合わせて自動的に拡大・縮小する。
    - 中央配置が可能。
    - 任意の倍率は指定できない。
- 「カスタム倍率」
    - 95％や110％など、任意の倍率を指定できる。
    - 左上を基準に拡大・縮小される。
    - 拡大・縮小後の中央配置はできない。

対処方法としては、以下が考えられる。
- プリンタードライバー側で印刷位置を調整する。
- PDF自体のページサイズや余白を変更してから印刷する。
- 別のPDF閲覧・印刷ソフトを利用する。

Adobe公式コミュニティでも、2026年5月5日にコミュニティマネージャーが、カスタム倍率による拡大・縮小後の自動中央配置には対応していないと回答している。

参考：[How to center the page when printing a document with the Custom Scale option - Adobe Community](https://community.adobe.com/questions-9/how-to-center-the-page-when-printing-a-document-with-the-custom-scale-option-1256488?utm_source=chatgpt.com)
