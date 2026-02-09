---
layout: /src/layouts/Layout.astro
title: "Analisi di Fattibilità Investimento: Excel Calcolo Automatico NPV e IRR"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Automazione Lavoro"
description: "Dovrei fare questo affare? Calcola facilmente Valore Attuale Netto (NPV) e Tasso Interno di Rendimento (IRR), indicatori chiave della decisione di investimento, con Excel."
tags: ["Excel", "AnalisiInvestimento", "NPV", "IRR"]
---

# 📝 Analisi di Fattibilità Investimento: Excel Calcolo Automatico NPV e IRR

> **🎯 Consigliato per:** Tutti
> **⏱️ Tempo richiesto:** 5 minuti

- **🤖 Modello consigliato:** Tutti i modelli IA

| Difficoltà | Efficacia  |  Utilità  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"È redditizio investire 100 milioni ora e guadagnare 200 milioni in 5 anni? Dipende dal tasso di interesse."_

Non dovresti guardare solo l'importo del profitto. Perché il valore del denaro cambia nel tempo. **NPV (Valore Attuale Netto)** e **IRR (Tasso Interno di Rendimento)**, le regole d'oro delle decisioni di investimento aziendale. I concetti sono difficili, ma con le funzioni Excel, anche gli studenti delle elementari possono calcolare. L'IA crea formule modello perfette.

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. Comprendere concetti NPV e IRR basati su dati Flusso di Cassa
2. Creare formule di calcolo automatico utilizzando funzioni Excel `NPV`, `IRR`
3. Suggerire criteri di giudizio investimento secondo cambiamenti tasso di sconto (tasso di interesse)

---

## 🚀 La Soluzione: "Revisore Investimenti IA"

### 🥉 Versione Base

Usala quando hai solo bisogno di un risultato rapido.

- **Ruolo:** Sei un `[Esperto Modellazione Finanziaria]`.
  > **Richiesta:** Dovrei fare questo affare? Calcola facilmente Valore Attuale Netto (NPV) e Tasso Interno di Rendimento (IRR), indicatori chiave della decisione di investimento, con Excel.

<br>

### 🥇 Versione Pro (Esperto)

Usala quando hai bisogno di qualità dettagliata.

Copia il contenuto del **PROMPT** qui sotto e usalo.

- **Ruolo:** Sei un `[Esperto Modellazione Finanziaria]`.
  > **Contesto:** Voglio analizzare fattibilità investimento di un nuovo progetto con Excel.
  >
  > - **Investimento Iniziale (Anno 0):** -100 Milioni KRW (Cella B2)
  > - **Entrate Previste (Anno 1~5):** 30 Milioni KRW annualmente (Celle B3~B7)
  > - **Tasso di Sconto (Rendimento Richiesto):** 10% (Cella C2)
  >
  > **Compito:**
  >
  > 1. Dimmi **formula Excel per trovare NPV (Valore Attuale Netto)** di questo progetto.
  > 2. Dimmi **formula Excel per trovare IRR (Tasso Interno di Rendimento)**.
  > 3. Spiega criteri di giudizio su se investire o meno quando risultati calcolo sono **NPV > 0** o **IRR > Tasso di Sconto**.
  >
  > **Vincoli:**
  >
  > - Scrivi formula notando che funzione `NPV` di Excel dovrebbe essere inserita dall'Anno 1. (Elaborare investimento iniziale separatamente)

---

## 🧬 Anatomia del Prompt (Perché funziona?)

---

## 📊 Prova: Prima e Dopo

### ❌ Prima (Input)

```text
Dimmi come trovare NPV IRR in Excel.
```

### ✅ Dopo (Risultato)

```text
### 📊 Formule Excel Analisi Investimento

**1. Trovare NPV (Valore Attuale Netto)**
- **Formula:** `=B2 + NPV(C2, B3:B7)`
- **Interpretazione:** Aggiungi semplicemente investimento iniziale (-100M), e sconta solo entrate da Anno 1 con funzione NPV per essere accurato.
- **Giudizio:** Se risultato è **maggiore di 0**, investi! (Affare che fa soldi)

**2. Trovare IRR (Tasso Interno di Rendimento)**
- **Formula:** `=IRR(B2:B7)`
- **Interpretazione:** Prendi semplicemente intero intervallo da investimento iniziale a ultima entrata.
- **Giudizio:** Se risultato (es. 15%) è **superiore a tasso sconto (10%)**, investi!

**💡 Riassunto:**
NPV mostra importo (Quanto guadagnato?), IRR mostra tasso rendimento (Quale % guadagnato?). Meglio se entrambi soddisfano.
```

---

## 🎯 Conclusione

Investimento non è intuizione ma scienza. Previeni errori multimiliardari con due righe di formule Excel.

Ora esci dal lavoro! 🍷
