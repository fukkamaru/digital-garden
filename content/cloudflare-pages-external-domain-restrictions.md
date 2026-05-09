---
title: 外部カスタムドメインをCloudflare Pagesで利用することの制限
aliases:
  - 外部カスタムドメインをCloudflare Pagesで利用することの制限
type:
created: 2026-05-10T01:42:34+09:00
updated: 2026-05-10T01:42:34+09:00
id: 20260510-014234
permalink:
draft: false
tags:
---

>[!info]
>GitHub Pagesはルートドメイン用にA/AAAAレコードで指定できるIPアドレスを公式に案内している。
>
>一方、
>
>Cloudflare PagesはユーザーがDNS設定に使うための固定IPを公開しておらず、Cloudflare DNS
>上の`CNAME Flattening`によってルートドメインを接続する仕組みになっている。
>
>また、
>
>Cloudflare Pagesのルートドメイン利用は、Cloudflare DNSのCNAME Flatteningに依存する。外部DNS管理ではCloudflare側のCNAME Flatteningをそのドメインに適用できないため、公式案内はサブドメインCNAMEになる。


わっちのデジタルガーデン（[公開型ツェッテルカステンの構築](public-zettelkasten-build.md)）環境
- ドメイン管理：conoHa
	- ドメイン名：fukkamaru.space
- ホスティング：Cloudflare pages

∴このサイトのドメインは「**www\.fukkamaru\.space**」になっている。



>[!quote]
> - Github
> 	- [GitHub Pagesサイトのカスタムドメインを管理する](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
> - Cloudflare
> 	- [カスタムドメイン](https://developers.cloudflare.com/pages/configuration/custom-domains/)
> 	- [CNAMEフラット化](https://developers.cloudflare.com/dns/cname-flattening/)
> 	- [設定](https://developers.cloudflare.com/dns/cname-flattening/set-up-cname-flattening/)
> 	- [フルセットアップを部分セットアップに変換する](https://developers.cloudflare.com/dns/zone-setups/conversions/convert-full-to-partial/)
