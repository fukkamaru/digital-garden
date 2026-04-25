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
    
    ```
    
    辞書インポート場所：単語リスト→単語リスト→日本語→ハンバーガーメニューを選択
    
    ```
    
1. ファイル形式を設定する


    ```
    
    ファイル名：dictionaly.txt
    
    文字コード：utf-8
    
    ヘッダ行：# Gboard Dictionary version:2
    
    カラム行：# Gboard Dictionary format:shortcut word language_tag pos_tag
    
    ※各カラムはtsv
    ```

※上記の方法で上手く行かない場合、正しく機能している状態の辞書データをエクスポートして、そのデータを雛形として使うとよい。特にヘッダ行やカラム行がなくても辞書へインポートは可能だが、ショートカット文字を入力しても辞書単語が候補として表示されない。このような場合は、すべての辞書データを削除してからやり直す必要がある。

[ios端末は諦めろ](ios-gboard-dictionary-import.md)