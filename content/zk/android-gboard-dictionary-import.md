---
title: android端末でGboard辞書を一括インポートする方法
type: permanent
created: 2025-07-30
updated: 2026-04-25T23:43:12+09:00
id: 20260425-234312
aliases:
  - android端末でGboard辞書を一括インポートする方法
draft: false
source:
---

1. Gboardの設定画面
    
    1. 適当な場所で文字入力してキーボードを表示
    2. キーボード画面の「歯車⚙」を選択
    
    ```menu
    
    辞書インポート場所：単語リスト→単語リスト→日本語→ハンバーガーメニューを選択
    
    ```
  
  
1. ファイル形式を設定する（.tsv）

    ```tsv
    ファイル名：dictionaly.txt
    
    文字コード：utf-8
    
    ヘッダ行：# Gboard Dictionary version:2
    
    カラム行：# Gboard Dictionary format:shortcut word language_tag pos_tag
    ```
  
  
上記の方法でうまく行かない場合
1. 正しく機能する辞書データをエクスポート
2. 前述のデータを雛形として使う
  
  
また、ヘッダ行やカラム行のない辞書をインポートしたとき
- ショートカット文字を入力しても辞書単語が候補として表示されない
- 全ての辞書データを削除して、最初からやり直し


ここまではAndroidについていの話。ではiphoneやipadではどうするのか？
[結論：ios端末については諦めろ](ios-gboard-dictionary-import.md)