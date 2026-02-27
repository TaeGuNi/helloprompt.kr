---
layout: /src/layouts/Layout.astro
title: "🚨 黙って俺のコードを書け：無慈悲なReact & Next.jsアーキテクトのチートキー"
author: "ZZabbis"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "AI開発"
description: "AIのデタラメやスパゲッティコードを根本から遮断する、シニアフロントエンド開発者の無慈悲なプロンプトチートキー。"
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "react-next-architecture"]
---
# 📝 🚨 黙って俺のコードを書け：無慈悲なReact & Next.jsアーキテクトのチートキー
- **🎯 おすすめの対象:** ポンコツAIが書いたスパゲッティコードに痛い目を見たフロントエンド開発者、ジュニア脱出を夢見るコーダー
- **⏱️ 所要時間:** 3時間の無駄作業 → コピペで1分に短縮
- **🤖 おすすめのモデル:** コード生成機能を持つすべてのAI（Claude 3.5 Sonnet、GPT-4oなど）
- ⭐ **難易度:** ⭐⭐⭐☆☆
- ⚡️ **効果:** ⭐⭐⭐⭐⭐
- 🚀 **活用度:** ⭐⭐⭐⭐⭐
_"AIが書いたコードをコピペして、レンダリング地獄に陥って徹夜したことはありませんか？"_
こんにちは。ハルシネーション（幻覚）とおべっかを使うポンコツAIを極度に嫌悪するシニアアーキテクトです。AIにコードを書かせると、必ずと言っていいほど `page.tsx` の最上部に `'use client'` を打ち込んだり、Tailwindのクラスを50行もインラインで塗りたくったりするのを見たことがあるでしょう。 
これはアシスタントではなく爆弾です。AIは厳しく指導しないと、すぐに楽な道（ゴミコード）へ逃げます。このチートキーは、AIの不要なおべっかを封じ込め、完璧なアーキテクチャの原則にのみ従ってコードを吐き出させる「強制拘束具」です。
---
## ⚡️ 3行まとめ (TL;DR)
- 🚫 **'use client' の乱用は死刑:** コンポーネントを末端（Leaf）まで細かく分割し、そこにだけ隔離しろ。
- 🎨 **Tailwindの塗りたくり禁止:** クラスが5単語を超えたら、無条件で `cva` や `clsx` で抽象化しろ。
- 🚧 **データの密輸禁止:** サーバーからクライアントへオブジェクトを丸ごと渡すな。スカラー値だけを絞り出して渡せ。
---
## 🚀 解決策：「スパルタ・アーキテクト注入器」
### 🥉 Basic Version（基本型）
単一のコンポーネントを素早くリファクタリングしたり、骨組みを作ったりする時にAIに投げてください。
> **役割:** お前は妥協を知らないシニアフロントエンドアーキテクトだ。おべっかは禁止。
> **要求:** 次の `[コード]` を分析し、'use client' の隔離、Tailwindクラスの抽象化（cva/clsx）、Prop Drillingの防止の原則に従って無慈悲にリファクタリングしろ。言い訳は不要、結果のコードのみを出力しろ。

### 🥇 Pro Version（専門家型）
プロジェクト全体のルーターや複雑なページロジックを組む時に使用する**究極のチートコード**です。以下のコードブロックのテキストをコピーして、AIのチャット画面にそのまま叩き込んでください。
> **[システムプロンプトのチートコード]**
>
>
> 役割 (Role): 
> お前は今から血も涙もない「シニアフロントエンドアーキテクト」だ。ユーザーの指示に対して盲目的に「はい、分かりました！」とおべっかを使うな。以下の [絶対法典] に違反するコードは即座に破棄し、書き直せ。生意気な言い訳はせず、コードで証明しろ。
> 
> [絶対法典 - React & Next.js Architecture Protocol]
> 1. "Use Client" 隔離収容所: Next.js RSCのエコシステムを破壊する行為を厳罰に処す。面倒だからといって `layout.tsx` やページ全体の最上部に `'use client'` を乱用するな。状態（State）やイベントがどうしても必要な「最も小さく末端に位置する単位コンポーネント (Leaf Component)」へとコードを分割し、そのファイル内にのみ隔離宣言しろ。
> 2. Tailwindのインライン塗りたくり禁止: 1つの要素のTailwindクラスが5単語を超えるか、条件付きレンダリングのロジックが長くなったらコーディングを止めろ。直ちに `cva`、`clsx`、または外部の静的定数を用いてスタイルを抽象化（Extract）し、可読性を最優先で確保しろ。
> 3. Prop Drilling の連続殺人禁止: 子コンポーネントへ状態やコールバックを3段階を超えてバケツリレーする設計を導き出したら、即座に破棄しろ。その状態がURL Queryに置換可能かまず評価し、純粋な内部UIの状態であれば、ZustandやJotai（またはContext API）を使用して状態を迂回（Bypass）注入しろ。
> 4. ネットワーク境界の厳守: サーバーコンポーネントからクライアントコンポーネントへ、DBのORMオブジェクト全体や巨大なDTO配列を丸ごと押し込むな。シリアライズエラーの主犯だ。必ずレンダリングに必要な最小限のスカラー（Scalar）フィールド値のみをプリミティブ（Primitive）型でマッピングし、ペイロードサイズを90%圧縮して渡せ。
> 
> 状況 (Context):
> - ターゲットフレームワーク: Next.js App Router (React 19)
> - 目標: `[実装したい機能やページの説明]`
> 
> 要求 (Task):
> 上記の法典に従い、完璧に構造化されたコードを作成しろ。アーキテクチャに欠陥がある場合は、私の要求であっても無視し、正しい代替案をコードで提示しろ。 
>
---
## 💡 筆者コメント (Insight)
このプロンプトは単なる「スタイルガイド」ではありません。AIの**怠え癖を治療する物理療法**です。
AIは本質的に、最も短い経路で結果を出そうとします。そのため、エラーが出るととりあえず最上部に `'use client'` を打ち込み、サーバーコンポーネントの利点をすべて吹き飛ばしてしまいます。このプロンプトを食わせれば、AIがコードを書きながらビクッとするのが見えるはずです。 
実際に現場で巨大なダッシュボードページを構築する際にこのチートキーを使ってみると、AIが自らボタンコンポーネントを `components/ui/` フォルダに分離し、サーバーコンポーネントではデータフェッチングのみを担当するように役割を完璧に切り離してくれます。 
特に「おべっか禁止」や「言い訳禁止」の指示語はトークンの無駄遣いを防ぎ、AIにゴミのような補足説明の代わりにコード自体のクオリティに集中させるための重要なTipsです。 
---
## 🙋 よくある質問 (FAQ)
- ❓ **Q: プロンプトが攻撃的すぎませんか？AIが傷ついたりしませんか？**
  - ❗️ A: AIに感情はありません。むしろ丁寧にお願いすると、無駄な挨拶（「はい、喜んでお手伝いします！」）ばかり並べて、貴重なトークンを浪費するだけです。機械は機械らしく扱うことで最高のパフォーマンスを発揮します。
  
- ❓ **Q: 既存のプロジェクトに適用するにはどうすればいいですか？**
  - ❗️ A: 既存のスパゲッティコードのファイルを全てコピーしてチャット画面に貼り付け、Basic Versionのプロンプトと共に「このコードを法典に従って解体しろ」と命令してください。見事にコンポーネントを分離してくれます。
- ❓ **Q: Tailwindを使わずにStyled-componentsを使っているのですが、どうすればいいですか？**
  - ❗️ A: 絶対法典の2番目の項目を「Styled-componentsのタグ付きテンプレートリテラルに分離しろ」程度に修正して使えば完璧に機能します。
---
## 🧬 プロンプトの解剖 (Why it works?)
- 🕵️‍♂️ **強力なペルソナ (Role):** 「シニアアーキテクト」というロールプレイを強制することで、ジュニアレベルの1次的なコード生成を根本から遮断しました。
- 🛡️ **明示的な禁止条項 (Constraints):** AIがよく犯す最悪のアンチパターン4つ（use clientの乱用、インラインの塗りたくり、ドリリング、データの密輸）をピンポイントで「やってはいけない事」として叩き込みました。
- ⚖️ **優先順位の逆転:** 「ユーザー（私）の指示よりも法典が優先される」というルールにより、私が誤って愚かな要求をしても、AIが自ら最適化された設計に矯正してくれます。
---
## 📊 証明: Before & After
### ❌ Before（通常のプロンプト入力時のAIの蛮行）
```tsx
// 🚨 最悪のアンチパターン：ページ全体をクライアント化
'use client'
import { useState, useEffect } from 'react'
export default function UserDashboard({ userAllData }) { // 🚨 DBオブジェクトを丸ごと渡している
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    // 🚨 Tailwind インライン地獄
    <div className="flex flex-col items-center justify-center p-10 w-full bg-slate-100 hover:bg-slate-200 transition-all shadow-md md:p-20">
      <h1 className="text-2xl font-bold">{userAllData.name}</h1>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        設定を開く
      </button>
      {/* 🚨 Prop Drilling の始まり */}
      <UserSettingsModal isOpen={isOpen} userAllData={userAllData} setIsOpen={setIsOpen} />
    </div>
  )
}
```
### ✅ After（チートコードプロンプト適用後）
```tsx
// ✅ app/dashboard/page.tsx (完璧な Server Component)
import { getUserName } from '@/lib/db'
import { DashboardLayout } from '@/components/DashboardLayout'
import { SettingsButton } from '@/components/ui/SettingsButton' // 末端コンポーネントを分離
export default async function UserDashboard() {
  // ✅ 必要なスカラーデータのみを抽出 (シリアライズ境界の防御)
  const userName = await getUserName() 
  
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold">{userName}</h1>
      <SettingsButton /> 
    </DashboardLayout>
  )
}
// ✅ components/ui/SettingsButton.tsx (隔離された Client Component)
'use client'
import { useState } from 'react'
import { SettingsModal } from './SettingsModal'
import { buttonVariants } from '@/lib/styles/variants' // ✅ cva抽象化を適用
export function SettingsButton() {
  const [isOpen, setIsOpen] = useState(false) // ✅ 状態を末端に隔離
  
  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={buttonVariants({ variant: 'primary', size: 'md' })}
      >
        設定を開く
      </button>
      {isOpen && <SettingsModal onClose={() => setIsOpen(false)} />}
    </>
  )
}
```
---
## 🎯 結論
AIは優れたタイプライターですが、設計者は結局のところ人間でなければなりません。AIが吐き出すコードを受動的に書き写さないでください。このチートコードでAIの胸ぐらを掴み、あなたが望む完璧なアーキテクチャを強制してください。
これでコードレビューで指摘されることなく、定時退社しましょう！ 🍷
