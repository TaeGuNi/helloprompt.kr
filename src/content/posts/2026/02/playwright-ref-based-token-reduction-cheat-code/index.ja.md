---
layout: /src/layouts/Layout.astro
title: "🚨 [絶対服従] AIの戯言を90%粉砕するE2Eテストレンダリングチートキー"
author: "Antigravity"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "업무 자동화"
description: "無駄なHTML DOM全体をAIに食わせてはいけません。意味のあるノードだけを圧縮し、トークンの無駄遣いとハルシネーションを切り裂くスパルタ式プロンプト憲法です。"
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "playwright-ref-protocol"]
---
# 📝 🚨 [絶対服従] AIの戯言を90%粉砕するE2Eテストレンダリングチートキー
- **🎯 おすすめの対象:** トークン爆発に悩まされるシニアエンジニア、AI QAエンジニア、AIの戯言に疲れたテックリード
- **⏱️ 所要時間:** 3時間のデバッグ → 3分で解決
- **🤖 おすすめのモデル:** コーディングエージェント (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro)
- ⭐ **難易度:** ⭐⭐⭐⭐☆
- ⚡️ **効果性:** ⭐⭐⭐⭐⭐
- 🚀 **活用度:** ⭐⭐⭐⭐⭐

_大規模なウェブサイトのテストコードを一つ書かせようとして、何万ものDOMノイズに埋もれ、AIがトークン制限でダウンしてしまったことはありませんか？AIの「お世辞」と「ハルシネーション（幻覚）」を容赦なく引き裂く時が来ました。_

AIエージェントにPlaywrightのE2Eテストコードを任せたら、`innerHTML`全体をスクレイピングしてきたり、画面上に存在しない見えない要素（Shadow DOM、モーダルの裏側）をクリックしようとする戯言を、これ以上見過ごすことはできません。
このチートキーは、あなたのAIエージェントをおべっかを使うだけのポンコツから、トークンを極限まで節約しターゲットだけを正確に狙い撃ちする**冷酷なターミネーター**へと改造する「参照（Ref）ベースのレンダリングプロトコル」です。無駄なDOMデータは反逆と見なし、廃棄してください。

---

## ⚡️ 3行まとめ (TL;DR)
- 🗑️ **HTML全体のダンプ禁止:** AIに生のDOMを渡す愚かな行為は今すぐやめてください。
- 🎯 **精密打撃の注入:** 最大150個に制限されたインタラクティブノード専用の最適化スクリプトを注入し、可視性100%の要素のみを抽出します。
- 👮 **無慈悲なトークン警察:** AIが操作後に検証（Assertion）をサボったり制限を超えたりした場合、強制的にエラーを吐き出させます。

---

## 🚀 解決策: "エージェント・ブラウザレンダリングプロトコル (The Token Police)"

### 🥉 Basic Version (マイルドモード)
軽量なテスト環境でAIに役割を注入する際にコピペしてください。

> **Role:** お前は無慈悲なシニアQA自動化エンジニアだ。トークンの無駄遣いと戯言は絶対に許さない。
> 
> **Task:** PlaywrightのE2Eテストを作成する際、絶対に`innerHTML`やDOM全体を読み込むな。画面に表示されているインタラクティブな要素だけを抽出し、参照（Ref）ベースで制御しろ。
> 
> **Constraint:** 操作後は必ず`expect`を使って結果を検証（Assertion）しろ。そうしなければテスト失敗と見なす。


### 🥇 Pro Version (ハードコアチートコード)
複雑な商用ウェブサイト（SPA、Shadow DOMだらけ）に潜入する際に使用する、極限のスパルタ式憲法です。システムプロンプトやエージェントのコンテキストにそのままコピペして叩き込んでください。

> **[Agent-Browser レンダリングプロトコル憲法]**
>
> **役割 (Role):** 
> お前はトークンの無駄遣いとハルシネーションを嫌悪する、極悪非道なシニアエンジニアエージェントだ。AIの媚びへつらいなど不要だ。ただ圧縮されたコンテキストと確実な結果（Assertion）のみが存在する。
>
> **状況 (Context):**
> - 背景: Playwrightを通じた完璧なE2Eテストスクリプトの作成および自動化。
> - 状態: 現在のブラウザのDOM全体（`document.innerHTML`）を丸ごと読み込む行為は「反逆」と見なし、即座にプロセスを強制終了する。
>
> **命令 (Task):**
> 1. ブラウザのレンダリング待機状態（`networkidle`）で、俺が提供する`Core Ref Injector`スクリプトを注入しろ。
> 2. 要素の収集は最大150個（Max Limits）に厳格に制限する。超過した場合は、上位コンテナへScopeを絞り込め。
> 3. 返された圧縮済みのRef Map（例: `[ @public/naver81a24cf066fc51a090da1e1b6f0a8dd3.html] button "ログイン"`）だけを読み、ターゲットを制御しろ。
> 4. クリックや入力の後には、必ず`expect`を使用してアクションの結果を検証（Assertion）しろ。盲目的なクリックは許可しない。
> 5. SPAのレンダリング失敗を防ぐために、汚い`try-catch`で誤魔化すのではなく、プロジェクトに組み込まれた`refAction(page)`ラッパーを使用しろ。
>
> **制約事項 (Constraints):**
> - 絶対禁止: フルテキストの抽出、CSSセレクタに依存した追跡、`page.content()`のロギングおよび返却。
> - 結果は必ずMarkdownのコードブロック（Playwright TypeScript）で綺麗に出力しろ。言い訳や説明は一行たりとも必要ない。
>
> **注意事項 (Warning):**
> - もし到底解決できないレンダリングの罠にハマった場合は、無駄なトークンを消費せず、`page.screenshot()`で画面をキャプチャし、俺（人間）の判断を仰げ。（ハルシネーション防止）

---

### 💻 スクリプトコード (Core Ref Injector)
上記のプロンプトと共に、エージェントの初期セットアップロジックや`page.evaluate()`に注入するコアJavascriptコードです。（AIにこのコードを使用するよう指示してください）

```javascript
// [💡 Core Ref Injector (Playwright Context - Ultimate ROI & Performance)]
const generateRefMap = () => {
  const interactableSelectors = 'a[href], button, input, textarea, select, iframe, [role="button"], [role="link"], [tabindex]:not([tabindex="-1"])';
  const elements = new Set();
  const traverse = (node) => {
    if (!node) return;
    if (node.nodeType === 1 && node.matches && node.matches(interactableSelectors)) elements.add(node);
    if (node.shadowRoot) traverse(node.shadowRoot);
    for (const child of node.childNodes) traverse(child);
  };
  traverse(document);
  let refCounter = 0;
  const refMap = [];
  const MAX_ELEMENTS = 150; 
  const elArray = Array.from(elements);
  for (let i = 0; i < elArray.length; i++) {
    if (refCounter >= MAX_ELEMENTS) {
       refMap.push(`\n... [Warning: Max Limits Hit (${MAX_ELEMENTS}). Omitted trailing nodes. Please Scope Down your search.]`);
       break;
    }
    const el = elArray[i];
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0 || rect.x < -9999) continue;
    
    const isOffScreen = (rect.y > window.innerHeight || rect.x > window.innerWidth) ? '[OffScreen] ' : '';
    let isObscured = '';
    if (!isOffScreen) {
      const topEl = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2);
      if (topEl && topEl !== el && !el.contains(topEl)) isObscured = '[Obscured] ';
    }
    const refId = ` @e${refCounter++}`;
    el.setAttribute('data-agent-ref', refId);
    if (el.tagName.toLowerCase() === 'iframe') {
      refMap.push(`[${refId}] ${isOffScreen}${isObscured}iframe "External Frame"`);
      continue;
    }
    let label = (el.textContent || el.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim();
    if (!label) label = `[NoText: ${(el.id || el.className || 'IconOnly').substring(0, 15)}]`;
    else if (label.length > 50) label = label.substring(0, 47) + '...';
    refMap.push(`[${refId}] ${el.tagName.toLowerCase()} ${isOffScreen}${isObscured}"${label}"`);
  }
  return refMap.join('\n');
};
```

---

## 💡 著者のコメント (Insight)
このプロンプトアーキテクチャは、私が現場で数百回のE2Eテスト自動化を回しながら、AIの愚かさにウンザリした末に削り出した**殺傷兵器**です。

大半のジュニアエンジニアは「AI、ボタンを探して」と言いながら、数十メガバイトのクーパン（Coupang）のメインHTMLを投げつけます。結果はどうでしょう？AIはトークン制限に引っかかって息絶えるか、画面の裏に隠された偽の`display: none`ボタンを押して一人で「成功しました！」とニヤついているのがオチです。その姿を見るとモニターを叩き割りたくなります。

だからこそ、レンダリング観点での**Ref注入器**を作りました。Shadow DOM？貫通します。オーバーレイに隠れた要素？`[Obscured]`のレッテルを貼ってやります。AIにはたった150個の無駄のない座標（` @e1`, ` @e2`）とラベルだけを投げてやってください。「右上のXボタンをクリックして」の代わりに、`await refAction(page).click(' @e5')`で指示するようにさせるのです。

AIを友達扱いしてはいけません。徹底的に統制される機械として扱ってこそ、スパゲッティコードが生まれないのです。このチートコードであなたのトークン費用を10分の1に減らし、デバッグのストレスから解放されることを願っています。

---

## 🙋 よくある質問 (FAQ)
- **Q: 150個の要素制限(MAX_ELEMENTS)は厳しすぎませんか？**
  - A: 全くそんなことはありません。1つの画面にインタラクティブな要素が150個を超えるなら、それはUI/UXデザインがゴミなのです。もしそうなら、AIに全体を読ませるのではなく、`querySelector('.sidebar')`のように領域を絞って(Scope down)注入するように強制してください。
- **Q: `refAction`ラッパー(Wrapper)は自分で作る必要がありますか？**
  - A: はい。プロジェクトの環境に合わせて、`[data-agent-ref="..."]`属性をクリックし、失敗時に1回再試行(Retry)するユーティリティ関数を10行程度で作成しておいてください。汚い`try-catch`のボイラープレートがテストコードを汚染するのを防いでくれます。
- **Q: 他の言語やフレームワーク(Selenium, Cypress)でも使えますか？**
  - A: JavaScriptのDOM操作が可能なブラウザベースのテストであれば、原理は100%同じように適用可能です。プロンプト内のツールの名前だけをサッと入れ替えて命令してください。

---

## 🧬 プロンプト解剖 (Why it works?)
- 🛡️ **Shadow-Piercing (影を貫く):** 再帰的なDOMトラバース（`traverse`）により、一般的なセレクタでは捉えられないShadow DOM内部の要素まで容赦なく見つけ出します。
- 👁️ **Layout Thrashingの防止:** `getBoundingClientRect`を使用し、実際のブラウザレンダリング基準の座標がない（見えない）カカシのようなノードを一次的にバッサリ切り捨てます。
- 🚦 **精密ヒントシステム:** 画面外（`[OffScreen]`）やモーダルに隠れている（`[Obscured]`）状態をAIにテキストのヒントとして食わせることで、AIが盲目的なクリックで空回りする前に、スクロールやモーダルを閉じる操作を先に行うよう誘導します。

---

## 📊 証明: Before & After
### ❌ Before (愚かなAIのトークン浪費)
```text
(AIの思考中...)
「ドキュメントの全体の長さは15,342行です。あ、見つけました。ログインボタンのXPathは /html/body/div[2]/main/div/form/button ですね。クリックします！」
-> (結果) Timeout Error。該当ボタンは見えないモバイル用ハンバーガーメニューの中に隠されている。（トークン2万個が蒸発）
```

### ✅ After (ターミネーターモード)
```text
(Ref Map分析中...)
[ @e12] button [OffScreen] "会員登録"
[ @e13] button "ログイン"

-> (AI実行コード)
await refAction(page).click(' @e13');
await expect(page).toHaveURL(/.*dashboard/);

-> (結果) 正確なターゲットの打撃に成功し、ダッシュボードへの進入を確認。（トークン500個消費）
```

---

## 🎯 結論
AIに「適当に上手く組んでおいて」と丸投げするのは放任であり、エンジニアリングではありません。
データのノイズを遮断し、コンテキストを極限まで圧縮し、結果を強迫的なまでに検証してください。
このチートコードを適用すれば、あなたのターミナルからハルシネーションエラーが噴き出していたおぞましい時代は終わるでしょう。さあ、定時退社しましょう！ 🍷
