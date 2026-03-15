---
layout: /src/layouts/Layout.astro
title: "Formule Excel: chiedi all'IA e completale in 2 secondi"
author: "Jay"
date: "2026-03-15"
updatedDate: "2026-03-15"
category: "업무 자동화"
description: "Prompt per creare formule Excel complesse con l'IA. Ottieni formule precise per VLOOKUP, INDEX-MATCH e pivot spiegando le tue condizioni in linguaggio naturale."
tags: ["엑셀", "스프레드시트", "수식", "프롬프트", "VLOOKUP", "업무자동화", "구글시트"]
cover: "./cover.png"
---

## 📝 Formule Excel: chiedi all'IA e completale in 2 secondi

- **🎯 Target consigliato:** Professionisti che perdono tempo con le formule Excel, chiunque utilizzi fogli di calcolo.
- **⏱️ Tempo richiesto:** 20 minuti per cercare la formula VLOOKUP → 2 secondi per chiedere all'IA.
- **🤖 Prestazioni top:** GPT-4o, Claude 3.5 Sonnet, Gemini 2.5 Pro

- ⭐ **Difficoltà:** ⭐☆☆☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Versatilità:** ⭐⭐⭐⭐⭐

> _"VLOOKUP continua a restituire #N/A e non capisco cosa ci sia di sbagliato. Cerco su Google e trovo 10 risposte diverse, ma nessuna sembra fare al caso mio..."_

Excel è uno strumento essenziale per chi lavora, ma le **formule (formula) sono quasi come programmare.** VLOOKUP, INDEX-MATCH, SUMIFS, formule matriciali... Solo a sentirne il nome viene mal di testa, vero? Il problema è che, anche se cerchi la risposta su Google, troverai solo **esempi simili** e non la formula esatta per la tua situazione specifica. Finisci per modificare la formula per adattarla ai tuoi dati, ottenendo errori, ricominciando la ricerca e cadendo in un loop infinito.

Spiegando all'IA **"la struttura del mio foglio e il risultato desiderato"** in linguaggio naturale, otterrai in soli 2 secondi una <span style="color:var(--color-cyber-cyan)">formula precisa pronta da copiare e incollare</span>. La cosa più sorprendente è che l'IA non ti dà solo la formula, ma ti spiega riga per riga **perché quella formula funziona**.

---

## 📊 Dimostrazione: Risultati soddisfacenti (Before & After)

### ❌ Before (Il dolore che provavamo)

> "Devo prendere il prezzo dal foglio B usando il codice prodotto del foglio A e poi calcolare il totale per dipartimento nel foglio C..." Cerchi su Google "somma con riferimento ad altro foglio excel" e trovi 20 risposte, ma nessuna adatta al tuo caso specifico.

### ✅ After (Il risultato trasformato alla perfezione)

```text
💡 AI가 생성한 수식 + 설명

[요청] A열에 제품코드, B열에 수량이 있는 '주문' 시트에서,
'가격표' 시트의 제품코드(A열)로 단가(B열)를 찾아 곱한 뒤,
부서(C열)별로 합계를 구하고 싶습니다.

[AI 응답]
=SUMPRODUCT(
  (주문!C2:C100="영업팀") *     ← 조건: 부서가 "영업팀"인 행만
  주문!B2:B100 *                ← 각 행의 수량
  INDEX(                        ← VLOOKUP 대신 INDEX-MATCH 사용
    가격표!B:B,                 ← 가격표에서 단가 열
    MATCH(주문!A2:A100,         ← 주문의 제품코드를
          가격표!A:A, 0)        ← 가격표에서 정확히 매칭
  )
)

📝 왜 VLOOKUP 대신 INDEX-MATCH?
→ VLOOKUP은 왼쪽 열만 검색하지만, INDEX-MATCH는 어떤 방향이든
  검색 가능하고, 열 삽입 시에도 수식이 깨지지 않습니다.
```

---

## ⚡️ Sintesi in 3 punti (TL;DR)

1. **Spiegazione in italiano → Formula esatta:** Spiegando condizioni complesse in linguaggio naturale, l'IA sceglie automaticamente la combinazione corretta di funzioni.
2. **Include il commento alla formula:** Non fornisce solo la formula, ma spiega cosa fa ogni parte con dei commenti, permettendoti di creare formule simili da solo in futuro.
3. **Debug degli errori:** Incolla gli errori come #N/A, #REF!, #VALUE! e l'IA ti dirà immediatamente la causa e la soluzione.

---

## 🚀 Ecco come scrivono i veri esperti

### 🥉 Versione Basic

> **Ruolo:** Sei un `[esperto di Excel]`.
>
> **Richiesta:** Crea una `[formula per recuperare il prezzo da un altro foglio usando il codice prodotto nella colonna A]`.

### 🥇 Versione Pro

> **Ruolo (Role):** Sei un `[esperto di fogli di calcolo a livello MVP (Microsoft Valuable Professional) per Excel e Google Sheets]`. Sei esperto in VLOOKUP, INDEX-MATCH, SUMPRODUCT, formule matriciali dinamiche e Power Query.
>
> **Contesto (Context):**
>
> - Programma utilizzato: `[MS Excel 365 / Google Sheets]`
> - Struttura del foglio:
>   - `[Foglio Ordini: Colonna A=Codice Prodotto, Colonna B=Quantità, Colonna C=Dipartimento]`
>   - `[Foglio Listino: Colonna A=Codice Prodotto, Colonna B=Prezzo Unitario, Colonna C=Categoria]`
> - Quantità dati: `[Circa 10.000 righe]`
>
> **Compito (Task):**
>
> 1. **Generazione formula:** Nel foglio Ordini, scrivi una formula per calcolare il totale dell' `[importo ordine (Quantità × Prezzo Unitario)]` per ogni dipartimento.
> 2. **Spiegazione formula:** Spiega cosa fa ogni parte della formula includendo dei commenti (comment).
> 3. **Proposta alternativa:** Se esiste una formula alternativa con prestazioni migliori, mostrala.
>
> **Vincoli (Constraints):**
>
> - Usa preferibilmente INDEX-MATCH o XLOOKUP invece di VLOOKUP (facilità di manutenzione).
> - Considera le prestazioni affinché non rallenti anche con 10.000 righe.
> - Aggiungi commenti in italiano per ogni argomento (argument) della formula.

---

## 💡 Commento dell'autore (Insight & Come usare)

Il segreto di questo prompt è **"spiegare accuratamente la struttura del foglio"**. Se dici solo "voglio recuperare il prezzo", l'IA può solo tirare a indovinare. Se invece <span style="color:var(--color-cyber-cyan)">specifichi la posizione e il contenuto delle colonne</span> dicendo "Codice prodotto in colonna A, Quantità in colonna B", l'IA ti fornirà una formula che potrai copiare e incollare esattamente.

Suggerimento pratico: se ricevi un errore `#N/A`, copia la formula e il messaggio di errore e chiedi all'IA: "Perché ricevo #N/A con questa formula?". L'IA individuerà con una precisione del 99% la causa (spazi vuoti, mancata corrispondenza del tipo di dati, errore di intervallo).

---

## 🙋 Domande Frequenti (FAQ)

- **Q: La stessa formula funziona anche su Google Sheets?**
  - R: La maggior parte delle formule è compatibile, ma alcune funzioni come XLOOKUP potrebbero non essere supportate su Google Sheets. Se specifichi "Google Sheets" nel `[Programma utilizzato]`, l'IA ti fornirà una formula compatibile.

- **Q: Può creare anche macro VBA?**
  - R: Sì. Se richiedi "Automatizza questo compito con una macro VBA", riceverai il codice VBA insieme alle spiegazioni.

---

## 🧬 Anatomia del Prompt (Perché funziona?)

1. **Effetto della specifica della struttura:** Comunicando i numeri di colonna e il loro contenuto, l'IA genera riferimenti di cella precisi (come A2:A100). Più la spiegazione è vaga, più la formula dell'IA sarà vaga.
2. **Effetto apprendimento della richiesta di commenti:** Chiedendo all'IA di "spiegare ogni parte", arriverai a comprendere la formula e sarai in grado di crearne di simili da solo la prossima volta.

---

## 🎯 Conclusione (Epilogo)

L'era in cui si perdevano 30 minuti per un errore VLOOKUP è finita. Con questo prompt, descrivendo ciò che desideri in linguaggio naturale, otterrai la formula perfetta in 2 secondi. Diventare un esperto di Excel non significa imparare a memoria tutte le funzioni, ma saper fare le domande giuste all'IA.

Automatizza il tuo lavoro e goditi il tuo tempo libero! 🍷
