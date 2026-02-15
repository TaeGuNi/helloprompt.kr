---
title: "Off Grid: スマホでインターネットなしにテキスト、画像、ビジョンAIを実行"
description: "インターネット接続なしでスマートフォン上でテキスト、画像、ビジョンAIをオフラインで実行できるオープンソースツール「Off Grid」を紹介します。"
date: 2026-02-15
tags: ["AI", "Local LLM", "Mobile", "Offline", "Privacy", "Open Source"]
category: "AI Tools"
author: "Assistant"
---

## Off Gridとは？

[Off Grid](https://github.com/alichherawalla/off-grid-mobile)は、単なるローカルLLMチャットアプリではありません。スマートフォンのハードウェア上で直接実行される完全なオフラインAIスイートです。テキスト生成、画像生成、ビジョンAI、音声文字起こし、ドキュメント分析などの機能をインターネット接続なしで提供します。すべてのデータはデバイス内でのみ処理され、外部に漏洩しないため、プライバシー保護に優れています。

## 主な機能

### 1. テキスト生成 (Text Generation)
Qwen 3、Llama 3.2、Gemma 3、Phi-4などの最新の軽量モデルをサポートし、`.gguf`ファイル形式のカスタムモデルも読み込むことができます。フラッグシップデバイスでは毎秒15〜30トークンの高速応答が可能で、ストリーミング応答と「Thinking Mode」をサポートしています。

### 2. 画像生成 (Image Generation)
Stable Diffusionをデバイス上で実行し、リアルタイムプレビューを提供します。SnapdragonチップセットのNPUアクセラレーションを活用すれば、5〜10秒で画像を生成できます（iOSはCore MLを活用）。Absolute Reality、DreamShaperなど20以上のモデルをサポートしています。

### 3. ビジョンAI (Vision AI)
カメラで物やドキュメントを映してAIに質問することができます。SmolVLM、Qwen3-VLなどを活用して、ドキュメントを分析したり、レシートを読んだり、シーンを説明する作業が可能です。

### 4. 音声入力とドキュメント分析
OpenAIのWhisperモデルを内蔵して音声をテキストに変換でき、PDF、コードファイル、CSVなどを会話に添付して内容を分析し要約することができます。

## パフォーマンス (Performance)

Snapdragon 8 Gen 2/3またはApple A17 Proチップセットを搭載したフラッグシップデバイスでのパフォーマンスは以下の通りです：

- **テキスト生成:** 15-30 tok/s
- **画像生成 (NPU):** 5-10秒
- **ビジョンAI:** 約7秒
- **音声認識:** リアルタイム処理

## インストール方法

Androidユーザーは、[GitHub Releases](https://github.com/alichherawalla/off-grid-mobile/releases/latest)ページから最新のAPKファイルをダウンロードしてインストールできます。iOSユーザーはソースコードをビルドしてインストールする必要があります。

## 結論

Off Gridは、クラウド依存なしに手元のデバイスで強力なAI機能を活用できるようにします。データプライバシーが重要であるか、インターネット接続が困難な環境でAIを活用したい場合は、ぜひ一度試してみることをお勧めします。
