---
title: "Programma Rimborso Prestito: Capitale e Interessi Uguali vs Capitale Uguale"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Automazione Lavoro"
description: "Modello calcolatrice interessi prestito fatto direttamente in Excel senza bisogno di entrare in siti bancari."
tags: ["Excel", "InteressePrestito", "FunzioneFinanziaria", "PMT"]
---

# 📝 Programma Rimborso Prestito: Capitale e Interessi Uguali vs Capitale Uguale

- **🎯 Consigliato per:** Tutti
- **⏱️ Tempo richiesto:** 5 minuti

- **🤖 Modello consigliato:** Tutti i modelli IA

| Difficoltà | Efficacia  |  Utilità  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Pagando 1 milione di won mensilmente, quanto è capitale e quanto è interesse?"_

Ci sono largamente due metodi di rimborso prestito. **'Capitale e Interessi Uguali'** dove pagamento mensile è lo stesso, e **'Capitale Uguale'** dove diminuisce nel tempo. Quale è vantaggioso per me? Fare programma rimborso completo usando funzioni finanziarie Excel (`PMT`, `IPMT`, `PPMT`) mostra differenza interessi totali a colpo d'occhio.

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. Auto-calcola pagamento mensile (Capitale + Interessi) con funzione `PMT`
2. Separa porzione interesse e capitale con funzioni `IPMT` e `PPMT`
3. Genera programma mostrando cambio saldo per round rimborso (1~360 round)

---

## 🚀 La Soluzione: "Auto Calcolatrice Prestito"

### 🥉 Versione Base

Usala quando hai solo bisogno di un risultato rapido.

**Ruolo:** Sei un `[Esperto Excel Finanziario]`.

- **Richiesta:** Modello calcolatrice interessi prestito fatto direttamente in Excel senza bisogno di entrare in siti bancari.

<br>

### 🥇 Versione Pro (Esperto)

Usala quando hai bisogno di qualità dettagliata.

Copia il contenuto del **PROMPT** qui sotto e usalo.

> **Ruolo:** Sei un `[Esperto Excel Finanziario]`.
>
> **Contesto:** Voglio fare programma prestito del metodo **Rimborso Capitale e Interessi Uguali** in Excel.
>
> - **Importo Prestito:** 100 Milioni KRW (B1)
> - **Tasso Interesse Annuo:** 4,5% (B2)
> - **Periodo Rimborso:** 10 Anni (120 Mesi) (B3)
>
> **Compito:**
>
> 1. Dimmi **formula funzione `PMT`** per trovare pagamento mensile totale (Capitale + Interessi).
> 2. Dimmi formule per trovare **Interesse (`IPMT`)** e **Capitale (`PPMT`)** uscenti in N-esimo round (es. 1° round) rispettivamente.
> 3. Dai formula applicando riferimento assoluto ($) così posso trascinare e riempire da 1° a 120° round.
>
> **Vincoli:**
>
> - Non dimenticare di dividere tasso interesse annuo per 12 dato che è calcolo mensile.

---

## 🧬 Anatomia del Prompt (Perché funziona?)

---

## 📊 Prova: Prima e Dopo

### ❌ Prima (Input)

```text
Come calcolare interesse prestito in Excel?
```

### ✅ Dopo (Risultato)

````text
### 🏦 Collezione Formule Rimborso Prestito Excel

**1. Pagamento Mensile (Totale Capitale + Interessi)**
```text
=PMT($B$2/12, $B$3*12, -$B$1)
```
````

_Risultato: Circa 1.036.384 KRW (Paga questo tanto mensilmente)_

**2. Quanto è interesse? (Basato su 1° round)**

- Assumendo round (1, 2, 3...) è in Colonna A:

```text
=IPMT($B$2/12, A5, $B$3*12, -$B$1)
```

_(A5 è round attuale. Trascina giù)_

**3. Quanto è capitale?**

```text
=PPMT($B$2/12, A5, $B$3*12, -$B$1)
```

**💡 Analisi:**
In fase iniziale `IPMT` (Interesse) è grande e `PPMT` (Capitale) è piccolo, ma porzione rimborso capitale aumenta nel tempo.

```

---

## 🎯 Conclusione

Controllare costo interessi totali visivamente brucia tua volontà di rimborsare prestito. Disegna tua mappa rimborso con Excel.

Ora esci dal lavoro! 🍷
```
