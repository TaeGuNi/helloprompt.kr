---
layout: /src/layouts/Layout.astro
title: "L'IA riassume i dettagli che ti sei perso durante la riunione"
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "Automazione Lavoro"
description: "Non chiedere 'Di cosa parlavamo?' dopo la riunione. Con un file audio, il riassunto è pronto in 1 minuto."
tags: ["Riunione", "Riassunto", "Produttività"]
---

# 📝 L'IA riassume i dettagli che ti sei perso durante la riunione

- **🎯 Consigliato per:** Tutti gli impiegati, PM, Assistenti
- **⏱️ Tempo richiesto:** 30 min → Ridotto a 1 min
- **🤖 Modello consigliato:** Clova Note (STT), ChatGPT (GPT-4), Claude 3

- ⭐ **Difficoltà:** ⭐☆☆☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐

_"Non chiedere 'Di cosa parlavamo?' dopo la riunione. Con un file audio, il riassunto è pronto in 1 minuto."_

Registrare tutto ciò che viene detto in una riunione è inefficiente. Ciò che conta sono le 'decisioni prese' e le 'cose da fare (Action Item)'. Questo prompt trasforma i contenuti sparsi della riunione in un elenco di compiti chiaro.

---

## ⚡️ Riepilogo in 3 righe (TL;DR)

1. Riassunto di verbali lunghi ed estrazione dei punti chiave
2. Generazione automatica di Action Item (Responsabile/Scadenza)
3. Chiarimento delle decisioni e dei piani futuri

---

## 🚀 Soluzione: "Meeting Minutes Master"

### 🥉 Versione Base

Usalo quando vuoi cogliere rapidamente solo i punti essenziali.

**Ruolo:** Sei un assistente competente.
**Richiesta:** Riassumi questo verbale e dimmi solo i 3 punti chiave.
**Input:** `[Testo del verbale]`

<br>

### 🥇 Versione Pro

Usalo quando è necessaria una condivisione sistematica del verbale.

> **Ruolo (Role):** Sei un Project Manager (PM) meticoloso.
>
> **Contesto (Context):**
>
> - Tipo di riunione: `[Riunione settimanale / Kick-off / Brainstorming]`
> - Partecipanti: `[Elenco partecipanti]`
>
> **Compito (Task):**
>
> 1. Organizza il verbale secondo il modello qui sotto.
>    - **📅 Data e ora:** `[Data riunione]`
>    - **👥 Partecipanti:** `[Partecipanti]`
>    - **🗣️ Ordine del giorno (Agenda):** `[Elenco argomenti]`
>    - **✅ Decisioni (Decisions):** `[Contenuto deciso]`
>    - **📝 Cose da fare (Action Items):**
>      - `[Responsabile]` : `[Attività]` (~`[Scadenza]`)
>    - **⏭️ Prossima riunione:** `[Data prevista]`
>
> **Vincoli (Constraints):**
>
> - Rimuovi chiacchiere inutili (scherzi, meteo, ecc.).
> - Scrivi gli Action Item come azioni il più specifiche possibile (es: "Esaminare" -> "Scrivere rapporto e inviare email").
>
> **Attenzione (Warning):**
>
> - Verifica accuratamente date e numeri.

---

## 💡 Commento dell'autore (Insight)

È particolarmente efficace se utilizzato dopo aver estratto il testo con strumenti STT (Speech-to-Text) come Clova Note. Condividilo entro 5 minuti dalla fine della riunione per essere riconosciuto come una persona efficiente.

---

## 🙋 Domande Frequenti (FAQ)

- **Q: Cosa faccio se il verbale è troppo lungo?**
  - A: Nel caso di ChatGPT c'è un limite di input, quindi dividi il testo o carica il file (usa Code Interpreter) per l'analisi. Claude è vantaggioso per gestire contesti lunghi.

- **Q: Funziona anche con testo senza distinzione dei parlanti?**
  - A: Sì, deduce chi ha detto cosa dal contesto, ma per una maggiore precisione è meglio avere indicazioni sui parlanti.

---

## 🧬 Analisi del Prompt (Why it works?)

1.  **Template fornito:** Dando all'IA un formato di output chiaro, si riduce il tempo di rielaborazione.
2.  **Istruzioni esplicite:** Istruzioni chiare come "Rimuovi chiacchiere inutili" e "Scrivi azioni specifiche" aumentano la qualità.

---

## 📊 Prova: Before & After

### ❌ Before (Input)

```text
(Trascrizione disordinata della riunione...)
Manager Kim: Ah, me ne occupo io entro questa settimana.
Direttore Park: Ok, è importante, fallo in fretta. E per la location del workshop della prossima settimana?
Impiegato Lee: Sto controllando alcuni posti, verso Gangnam...
```

### ✅ After (Risultato)

```markdown
**📝 Cose da fare (Action Items):**

- Manager Kim : Gestione punto importante (~questa settimana)
- Impiegato Lee : Ricerca location workshop (vicino a Gangnam) e report lista (~prossima settimana)
```

---

## 🎯 Conclusione

Lascia la registrazione all'IA, il pensiero agli umani! 🍷
