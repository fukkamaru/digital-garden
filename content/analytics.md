---
title: 分析作業用ページ
type: structure
created: 2026-04-25T21:35:14+09:00
updated: 2026-04-25T21:35:14+09:00
id: 20260425-213514
aliases:
  - 分析作業用ページ
draft: false
source:
---
- Obsidian上で分析作業を行うためのページ
- quartzは静的Webページ生成のフレームワークであり、動的なデータ出力には対応していないためウェブ上では表示されません。

## フリーティング

```dataview
table title, created
from ""  
where type = "fleeting"
sort created desc
```

## リテラチャー
```dataview
table title, created
from ""  
where type = "literature"
sort created desc
```

## パーマネント
```dataview
table title, created
from ""  
where type = "permanent"
sort created desc
```



## ストラクチャー
```dataview
table title, created
from ""  
where type = "structure"
sort created desc
```


## AI_Sorcue
```dataview
table title, created
FROM #ai_source
sort created desc
```




## 最近更新したファイル
```dataview
table title, file.mtime
from ""
sort file.mtime desc
limit 10
```

