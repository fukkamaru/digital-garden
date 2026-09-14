---
title: ChatGPTの音声入力と「Voice Control for ChatGPT」のショートカット競合
aliases:
  - ChatGPTの音声入力と「Voice Control for ChatGPT」のショートカット競合
  - ChatGTPの音声入力と「Voice Control for ChatGPT」によるショートカットの競合問題
type: permanent
created: 2026-04-26T19:29:35+09:00
updated: 2026-09-11T21:25:26+09:00
id: 20260426-192935
permalink:
draft: false
source:
tags:
---

# ChatGPTの音声入力と「Voice Control for ChatGPT」のショートカット競合

Chrome拡張機能「Voice Control for ChatGPT」を導入し、ChatGPTの出力を自動で音読する機能には満足している。一方で、ショートカットキーを使う操作では、ChatGPTの音声入力と拡張機能の操作が競合した。

## 競合する操作

| 対象 | `Ctrl + M`の役割 |
| --- | --- |
| ChatGPT | 音声入力の開始・停止 |
| Voice Control for ChatGPT | 音声入力のオン・オフ |

## 操作への影響

理想は、次の三操作で済ませることだった。

1. `Ctrl + M`
2. `Enter`
3. `Enter`

しかし実際には、拡張機能との競合のため、次の操作が必要になった。

1. `Ctrl + M`
2. `Ctrl + M`
3. `Enter`

音声入力と音声出力を同時に使う場合は、ショートカットの重複を先に確認する。操作数が増えると、ゲームや配信中には意識する負荷が大きくなる。
