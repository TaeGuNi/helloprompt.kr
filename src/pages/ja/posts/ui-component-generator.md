---
layout: /src/layouts/Layout.astro
title: "フロントエンドコンポーネント、デザインだけ説明すればコード完成"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "コーディング/開発"
description: "React, Vue, Tailwind CSSなど希望する技術スタックでUIコンポーネントを素早く生成するプロンプトです。"
tags: ["フロントエンド", "React", "Vue", "Tailwind", "UIコンポーネント"]
---

# 📝 フロントエンドコンポーネント、デザインだけ説明すればコード完成

**🎯 推奨対象:** 誰でも
**⏱️ 所要時間:** 5分
**🤖 推奨モデル:** すべてのAIモデル

| 難易度  |    効果    |  活用度   |
| :-----: | :--------: | :-------: |
| ⭐⭐☆☆☆ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_「カードUI一つ作るのにdivを何回包まなきゃいけないんだ？」_

デザイン案を見てコードに移す過程、単純反復作業の場合が多いです。
「画像左にあって、タイトル太く、下にタグボタン2つ...」
このように言葉で説明すれば、完璧にスタイリングされたコンポーネントコードがあっという間に出てきます。

---

## ⚡️ 3行要約 (TL;DR) {#tl-dr}

1. 希望するUI形態をテキストで描写してコード生成
2. React/Vue + Tailwind CSSなど最新スタックサポート
3. レスポンシブデザインおよびアクセシビリティ(A11y)考慮

---

## 🚀 解決策：「UIコンポーネント工場」

### 🥉 Basic Version (基本形)

素早く結果だけが必要な場合に使用してください。

> **役割:** あなたは感覚的なUI/UXデザイナーであり熟練したフロントエンド開発者です。
> **リクエスト:** React, Vue, Tailwind CSSなど希望する技術スタックでUIコンポーネントを素早く生成してください。

<br>

### 🥇 Pro Version (専門家形)

詳細なクオリティが必要な場合に使用してください。

以下の**PROMPT**内容をコピーして使用してください。

> **役割:** あなたは感覚的なUI/UXデザイナーであり熟練したフロントエンド開発者です。
>
> **状況:** ウェブアプリケーションに入る新しいUIコンポーネントが必要です。モダンですっきりしたデザインでなければなりません。
>
> **タスク:**
>
> 1. 以下の説明に合うUIコンポーネントコードを作成してください。
> 2. 技術スタックは`[React / Vue / Svelte]`と`[Tailwind CSS / Styled Components / CSS Modules]`を使用してください。
> 3. モバイルとデスクトップの両方でよく見える**レスポンシブ(Responsive)**デザインを適用してください。
> 4. アイコンが必要なら`lucide-react`や`font-awesome`のような仮想のライブラリを使用すると仮定してください。
>
> **コンポーネント説明:**
> `[作りたいUIを描写してください。例: プロフィールカード - 丸いアバター画像、名前、職業、フォローボタン含む]`
>
> **制約事項:**
>
> - アクセシビリティ(Accessibility)を考慮してARIA属性を適切に入れてください。
> - コードは一つのファイルにコピーして使えるように作成してください。

---

## 🧬 プロンプト解剖 (Why it works?) {#why-it-works}

---

## 📊 証明: Before & After

### ❌ Before (入力説明)

「商品カード作って。上には商品写真、その下に商品名と価格。そして買い物かご追加ボタンとハートボタン入れて。」

### ✅ After (結果 - React + Tailwind 例示) {#react-tailwind}

```jsx
import React from "react";
import { ShoppingCart, Heart } from "lucide-react";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <p className="text-gray-700 text-lg font-semibold">${price}</p>
      </div>
      <div className="px-6 pt-4 pb-4 flex justify-between items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
          <ShoppingCart size={18} /> 追加
        </button>
        <button
          className="text-gray-400 hover:text-red-500 transition-colors"
          aria-label="お気に入り"

          <Heart size={24} />
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
```

---

## 🎯 結論

画面描くのに時間を使わないでください。
骨組みはAIに任せて、皆さんはデータを繋げて生命を吹き込む作業に集中すればいいのです。 🍷
