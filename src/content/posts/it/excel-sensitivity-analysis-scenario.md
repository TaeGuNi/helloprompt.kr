---
title: "Analisi Sensibilità Excel: Preparazione Perfetta per Scenari 'E Se'"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Automazione Lavoro"
description: "Quanto diminuisce profitto se tasso cambio sale 10%? Calcolando decine di casi in una volta con funzione Tabella Dati Excel."
tags: ["Excel", "AnalisiSensibilità", "Scenario", "TabellaDati"]
---

# 📝 Analisi Sensibilità Excel: Preparazione Perfetta per Scenari "E Se"

**🎯 Consigliato per:** Tutti
**⏱️ Tempo richiesto:** 5 minuti

- **🤖 Modello consigliato:** Tutti i modelli IA

| Difficoltà | Efficacia  |  Utilità  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Nessuno conosce il futuro. Ma possiamo calcolare tutti i futuri."_

Cosa più importante quando si pianifica business è variabile. Tabella **'Analisi Sensibilità'** che mostra come cambia profitto operativo quando tasso cambio, prezzo materia prima, volume vendite ecc. cambiano. Usando tasto cheat nascosto Excel funzione **'Tabella Dati'**, puoi auto-generare 100 scenari con una formula.

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. Impostare relazione tra variabili (Tasso cambio, Volume vendite) e risultato (Profitto operativo)
2. Generare matrice utilizzando funzione 'Analisi di simulazione > Tabella dati'
3. Simulare risultato quando due variabili cambiano simultaneamente

---

## 🚀 La Soluzione: "Generatore Matrice Scenari"

### 🥉 Versione Base

Usala quando hai solo bisogno di un risultato rapido.

- **Ruolo:** Sei un `[Esperto Modellazione Finanziaria]` in ufficio pianificazione strategica.
  **Richiesta:** Quanto diminuisce profitto se tasso cambio sale 10%? Calcolando decine di casi in una volta con funzione Tabella Dati Excel.

<br>

### 🥇 Versione Pro (Esperto)

Usala quando hai bisogno di qualità dettagliata.

Copia il contenuto del **PROMPT** qui sotto e usalo.

- **Ruolo:** Sei un `[Esperto Modellazione Finanziaria]` in ufficio pianificazione strategica.
  > **Contesto:** Voglio fare **Analisi Sensibilità** in Excel.
  >
  > - **Obiettivo:** Osservare cambio 'Profitto Operativo'
  > - **Variabile 1 (Riga):** Tasso Cambio (1.200 KRW ~ 1.400 KRW, unità 50 KRW)
  > - **Variabile 2 (Colonna):** Volume Vendite (10k ~ 50k, unità 10k)
  >
  > **Compito:**
  >
  > 1. Dimmi ordine passo passo per usare funzione **'Tabella Dati'** Excel.
  > 2. Spiega chiaramente dove collegare Cella Input Riga e Cella Input Colonna per non confondersi.
  > 3. Dai consiglio per derivare intuizione come "Copertura è necessaria poiché profitto precipita se tasso cambio sale" vedendo tabella completata.
  >
  > **Vincoli:**
  >
  > - Specifica percorso menu (Scheda Dati > Analisi di simulazione > Tabella dati).

---

## 🧬 Anatomia del Prompt (Perché funziona?)

---

## 📊 Prova: Prima e Dopo

### ❌ Prima (Input)

```text
Come fare scenario fluttuazione tasso cambio in Excel?
```

### ✅ Dopo (Risultato)

```text
### 🌪️ Guida 3 Passi Analisi Sensibilità Excel

**1. Posare la Tavola (Struttura Matrice)**
- Inserisci scenari **Tasso Cambio** (1200, 1250...) in Colonna A (Verticale).
- Inserisci scenari **Volume Vendite** (10k, 20k...) in Riga 1 (Orizzontale).
- **Chiave:** Devi collegare **'Formula Calcolo Profitto Operativo (=C10)'** a cella **Angolo (A1)** dove Colonna A e Riga 1 si incontrano.

**2. Lanciare Magia (Eseguendo Tabella Dati)**
- Seleziona intera tabella ➔ Scheda [Dati] ➔ [Analisi di simulazione] ➔ Clic [Tabella dati].
- **Cella input riga:** Clic cella **'Volume Vendite'** dati originali (Perché è asse orizzontale!)
- **Cella input colonna:** Clic cella **'Tasso Cambio'** dati originali (Perché è asse verticale!)

**3. Controllo Risultato**
- Momento in cui premi OK, spazi vuoti in tabella sono riempiti con decine di stime profitto operativo.
- **💡 Consiglio:** Applica Formattazione Condizionale (Scale Colori). 'Linea morta' dove profitto diventa deficit (Rosso) si vede a colpo d'occhio.
```

---

## 🎯 Conclusione

Quando dirigente chiede "Cosa succede se tasso cambio diventa 1.350?", non farti prendere dal panico e leggi coordinata (1350, Volume Vendite) tabella Excel. Quello è 'talento preparato'.

Ora esci dal lavoro! 🍷
