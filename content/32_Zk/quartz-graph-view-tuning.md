---
title: quartzのグラフビューの調整
type: permanent
created: 2026-04-29T23:57:24+09:00
updated: 2026-04-29T23:57:24+09:00
id: 20260429-235724
aliases:
  - quartzグラフビューの調整
permalink:
draft: false
source:
---
サイト上のグラフビューを拡大表示すると、ノード同士が近くフォントサイズも大きいせいで、
タイトル同士が被って見辛かったので、「quartz.layout.ts」に対して下記の調整を施した。

```
Component.Graph({  
localGraph: {  
fontSize: 0.45,  
repelForce: 1.0,  
linkDistance: 60,  
scale: 1.0,  
opacityScale: 2.0,  
},  
globalGraph: {  
fontSize: 0.45,  
repelForce: 1.5,  
linkDistance: 100,  
scale: 0.5,  
opacityScale: 2.5,  
},  
}),
```

## 変数

変数の意味はそれぞれ次のとおりになる。
https://quartz.jzhao.xyz/features/graph-view


**グラフの違い**
- localGrap：今いるノートのグラフ
- globalGraph：サイト全体のグラフ

**オプション**
- fontSize：
	- ノードラベルのサイズ
	- 値が大きいほどフォントは大きくなり、小さいほどフォントも小さくなる。
- repelForce：
	- ノード同士の反発力
	- 値が大きいほど、ノード同士が強く反発し合う。
- linkDistance：
	- ノード間を繋げるリンクの自然距離
	- 値が大きいほど、リンク間の飛距離が伸びる。
- scale：
	- 初期ズーム倍率
	- 値が小さいほど引きで表示され、大きいほど拡大状態で表示される。
- opacityScale：
	- ノードやリンクの透明度変化の強さ
	- 中心ノードから遠いものほど薄くなる。

**レイアウトはrepelForceとLinkDistanceの組み合わせで決まる。**
