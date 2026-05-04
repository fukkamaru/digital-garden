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
repelForce: 1.2,  
linkDistance: 60,  
scale: 0.9,  
opacityScale: 1.5,  
},  
globalGraph: {  
fontSize: 0.4,  
repelForce: 1.5,  
linkDistance: 80,  
scale: 0.8,  
opacityScale: 1.8,  
},  
}),
```