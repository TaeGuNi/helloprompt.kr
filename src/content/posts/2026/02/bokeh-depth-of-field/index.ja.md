---
layout: /src/layouts/Layout.astro
title: "感性的な背景ぼかし「Bokeh & Depth of Field」"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "画像生成"
description: "背景を美しくぼかして被写体を際立たせ、感性をくすぐる玉ボケ（Bokeh）を作り出すプロンプトガイドです。"
tags: ["Midjourney", "DALL-E", "Stable Diffusion", "Photography", "Effect"]
---

# 📝 光の魔法：玉ボケ（Bokeh）と被写界深度（Depth of Field）を極める

- **🎯 おすすめ対象:** プロ級の写真を生成したいデザイナー、マーケター、AI画像生成の初心者
- **⏱️ 所要時間:** 30分 → 1分（プロンプトをコピペするだけ）
- **🤖 推奨モデル:** Midjourney, DALL-E 3, Stable Diffusion

- ⭐ **難易度:** ⭐⭐☆☆☆
- ⚡️ **効果性:** ⭐⭐⭐⭐⭐
- 🚀 **活用度:** ⭐⭐⭐⭐☆

> _「生成した画像の背景がごちゃごちゃしていて、肝心の被写体に目がいかない…そんな経験はありませんか？」_

主人公（被写体）はくっきりと鮮明に、そして背景は夢幻的に溶け込ませたい。
**Bokeh**（玉ボケ）は、ピントが合っていない領域の光がふんわりとした丸い形になる美しい現象を指します。**Shallow Depth of Field**（浅い被写界深度）を活用すれば、視線を被写体に集中させ、まるでプロのカメラマンが一眼レフで撮影したかのようなロマンチックでシネマティックな雰囲気を一瞬で演出できます。

---

## ⚡️ 3行要約 (TL;DR)

1. 生成プロンプトに `Bokeh` と `Blurry background` は必須の魔法のキーワードです。
2. `Shallow depth of field`（浅い被写界深度）や `f/1.8` といった具体的な絞り値（F値）を指定しましょう。
3. ネオンが輝く「夜の街（Night street）」は、華やかで美しい玉ボケを作るための最高の背景条件です。

---

## 🚀 解決策：「Night Portrait（夜のポートレート）プロンプト」

### 🥉 Basic Version（基本形）

細かな設定なしに、素早く雰囲気のある画像が必要な場合に使用してください。

> **Role（役割）:** あなたはプロのポートレート写真家です。
> **Task（指示）:** 背景を美しくぼかして被写体を際立たせ、感性的な光の玉（Bokeh）を取り入れた写真のプロンプトを作成してください。

<br>

### 🥇 Pro Version（専門家形）

圧倒的なディテールとシネマティックなクオリティが求められる場合に使用してください。以下のプロンプトをコピーして、そのまま画像生成AIに入力するだけで機能します。

> **Role（役割）:** あなたは数々の賞を受賞しているシネマティック・フォトグラファーです。
>
> **Context（状況）:**
>
> - 背景: 雨上がりの夜の街。ネオンサインが水たまりに反射している状況。
> - 目標: 複雑な背景を美しい玉ボケに変え、被写体の感情を強く引き立たせること。
>
> **Task（指示）:**
> 次の条件に従って画像を生成してください。
>
> - **Subject:** Portrait of a `[jazz musician playing saxophone / 被写体を入力]` in a rainy street at night.
> - **Camera:** Bokeh background, shallow depth of field, f/1.2 aperture, 85mm lens, sharp focus on face.
> - **Style:** Cinematic mood, colorful city lights blurring in background, highly detailed, photorealistic, 8k resolution.
>
> **Constraints（制約事項）:**
>
> - 被写体の顔には完全にピント（Sharp focus）を合わせること。
> - 背景のネオンライトは必ず大きな丸いボケ（Bokeh）として表現すること。

---

## 💡 筆者のコメント (Insight)

このプロンプトの最大の強みは、**「カメラの物理的なレンズの性質（F値や焦点距離）」をAIに完璧に理解させている点**にあります。AIに単に「背景をぼかして」と指示するよりも、`f/1.2 aperture` や `85mm lens` という具体的な光学パラメータを与えることで、Midjourneyなどの高度なAIモデルは実際のカメラレンズが作り出す自然で美しい被写界深度を完璧にシミュレートします。特にバナー広告の制作や、文字を配置するための余白（ネガティブスペース）を確保したい実務において、この背景のコントロール技術は非常に重宝します。

---

## 🙋 よくある質問 (FAQ)

- **Q: DALL-E 3でもこのF値（f/1.2）の指定は効果がありますか？**
  - A: はい、絶大な効果があります。DALL-E 3もカメラの専門用語を深く学習しているため、`f/1.2` や `Shallow depth of field` と入力するだけで、光学的に自然な背景ぼかしを適用してくれます。

- **Q: ボケ（Bokeh）の形を丸以外にすることはできますか？**
  - A: はい、可能です。プロンプトに `hexagonal bokeh`（六角形のボケ）や `heart-shaped bokeh`（ハート型のボケ）と追加することで、光の形を意図的にコントロールし、よりユニークな演出を加えることができます。

---

## 🧬 プロンプト解剖 (Why it works?)

1. **`f/1.2 aperture` / `85mm lens`:** 極めて浅い被写界深度を作り出すための具体的なレンズスペックを指定し、AIにプロのカメラの挙動を模倣させています。
2. **`Sharp focus on face`:** 背景を大きくぼかす一方で、一番重要な被写体の顔がぼやけてしまう（ピンボケする）失敗を防ぐための安全装置として機能します。
3. **`Colorful city lights blurring`:** 単調な背景ではなく、光の光源（ネオンなど）を配置することで、ボケが最も美しく見える条件を意図的に作り出しています。

---

## 📊 証明: Before & After

### ❌ Before (入力)

```text
Musician in street night.
```

_(結果: 背景の看板の文字や通行人までくっきりと見えてしまい、視線が分散してごちゃごちゃした印象の写真になる)_

### ✅ After (結果)

```text
Portrait of a jazz musician playing saxophone in a rainy street at night. Bokeh background, shallow depth of field, f/1.2 aperture, 85mm lens, sharp focus on face. Cinematic mood, colorful city lights blurring in background.
```

_(結果: 背景のネオンサインが美しく大きな光の玉（Bokeh）に変わり、ミュージシャンの表情にだけ視線が吸い込まれるような圧倒的な感性ショットが完成する)_

---

## 🎯 結論

写真の美学は、引き算にあります。不要な背景を美しい光のボケに変えるだけで、あなたの生成する画像の品格は劇的に向上します。

さあ、AIに魔法のレンズを装着して、今日も定時退社しましょう！ 🍷
