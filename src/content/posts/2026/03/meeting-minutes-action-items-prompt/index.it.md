---
layout: /src/layouts/Layout.astro
title: "🎙️ Prompt strutturato per ordinare verbali caotici in 1 minuto"
author: "Jay"
date: "2026-02-28"
updatedDate: "2026-02-28"
category: " "
description: "Un prompt pratico per convertire istantaneamente trascrizioni caotiche di riunioni in riassunti ordinati e action item."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "meeting-minutes"]
---
# 📝 Strutturare verbali caotici in 1 minuto
<!-- ⚠️ [CRITICAL RULE]   (10   ) ⚠️
    (`index.ko.md`)  ,
****   9  (`index.[lang].md`)   .
 (9): en, de, es, fr, it, ja, pt, ru, zh
 10(+9 )       . -->
<!-- ⚠️ [Lint Rule]   . (Table)      . -->
- **🎯 Consigliato per:** Junior professional, Project Manager, Marketer
- **⏱️ Tempo richiesto:** Da 30 minuti → ridotto a 1 minuto
- **🤖 Modelli consigliati:** Qualsiasi IA conversazionale (ChatGPT, Claude, Gemini, ecc.)
- ⭐ **Difficoltà:** ⭐☆☆☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐
<!-- ⚠️ [Lint Rule] (>) Basic/Pro   (_..._)     . -->
> _"Hai perso tutto il pomeriggio a sistemare i verbali delle riunioni?"_
Anche se converti l'audio registrato in testo subito dopo la riunione (con Clova Note, Whisper, ecc.), estrarre i punti chiave da una conversazione disordinata è un'altra faticaccia. Questo prompt estrae con precisione solo le **'decisioni chiave'** e **'chi deve fare cosa (Action Item)'** da una montagna di testo senza contesto. Copia e incolla, al resto ci pensa lui.
---
## ⚡️ Sintesi in 3 righe (TL;DR)
1. Copia e incolla il testo grezzo trascritto e invialo all'IA.
2. L'IA filtra le chiacchiere ed estrae solo le decisioni fondamentali.
3. Estrae chiaramente la parte più importante: 'i prossimi passi per ogni responsabile (Action Item)'.
---
## 🚀 La soluzione: "Prompt di strutturazione automatica dei verbali"
<!-- ⚠️ [Lint Rule] (>) (Prompt ) Prompt  . -->
### 🥉 Basic Version (Versione Base)
Usalo quando hai bisogno di risultati rapidi.
> **Ruolo:** Sei un `[Senior Project Manager]`.
> **Richiesta:** Leggi la seguente `[Trascrizione della riunione]` e riassumi solo i punti chiave delle decisioni principali e dei prossimi passi (Action Items).
### 🥇 Pro Version (Versione Avanzata)
Usalo quando hai bisogno di una qualità dettagliata.
> **Ruolo (Role):** Sei un `[Product Manager e Planner di servizi IT con 10 anni di esperienza]`. Sei un esperto nel cogliere il contesto di una riunione e nell'organizzare chiaramente chi deve fare cosa e entro quando.
>
> **Contesto (Context):**
> - Background: Hai a disposizione una trascrizione caotica dopo un `[rapporto di lavoro settimanale o una riunione di ideazione]`.
> - Obiettivo: Creare un riassunto ben strutturato in modo che i partecipanti possano comprendere rapidamente il contenuto della riunione ed eseguire i propri compiti (Action Items) senza confusione.
>
> **Richiesta (Task):**
> 1. Leggi la seguente `[Trascrizione della riunione]` e riassumila secondo questa struttura.
>   - 📌 Argomento della riunione (Main Topic)
>   - 🎯 Decisioni chiave (Key Decisions)
>   - 🚨 Questioni in sospeso/irrisolte (Pending Issues)
>   - ✅ Action Items (specificando responsabile, scadenza e compito)
> 2. Rimuovi completamente i saluti, le chiacchiere inutili e i contenuti duplicati.
> 3. Mantieni un tono e un registro aziendale (stile scritto formale e chiaro).
>
> **Vincoli (Constraints):**
> - Il formato di output deve essere un elenco puntato che utilizza simboli Markdown (-, *, backtick, ecc.) ed emoji.
> - Non usare MAI le tabelle Markdown (Table).
> - Se il responsabile di un action item non è chiaro, contrassegnalo con '[Da verificare]'.
>
> **Avvertenza (Warning):**
> - Non inventare MAI contenuti che non sono presenti nella trascrizione (per evitare allucinazioni).
>
> **Input (Input):**
> - Trascrizione della riunione: `[Incolla qui il testo della trascrizione che hai copiato]`
---
<!-- ✅ [Lint Rule]  .   CI  . -->
## 💡 Commento dell'autore (Insight)
Il punto cruciale di questo prompt è **'l'estrazione degli action item'** e la **'soppressione delle allucinazioni (Hallucination)'**. 
Il vero scopo della stesura di un verbale non è 'registrare ciò che è stato detto', ma 'chiarire cosa fare dopo'. 
Provandolo direttamente sul campo, spesso l'IA inventa di sana pianta scadenze plausibili che non sono presenti nel contenuto della riunione. Per evitare questo, ho inserito il vincolo "non inventare contenuti inesistenti" e l'istruzione difensiva "se il responsabile non è chiaro, contrassegnalo con [Da verificare]". Prova a dare in pasto a Claude 3.5 Sonnet o a GPT-4o il testo estratto da strumenti STT come Clova Note, insieme a questo prompt. Il lavoro di ripulitura del testo, che richiederebbe 30 minuti, si ridurrà a 1 minuto. Usa il tempo guadagnato per goderti un altro caffè.
---
<!-- ⚠️ [Lint Rule]  .    . -->
## 🙋 Domande Frequenti (FAQ)
- **Q: Posso inserire per intero anche la trascrizione di una lunga riunione di 1 ora?**
  - A: Sì, i modelli più recenti (Claude 3.5 Sonnet, GPT-4o, ecc.) hanno un'eccellente capacità di comprensione del contesto e possono gestire facilmente anche 1 ora di testo. Tuttavia, se superi il limite di token, dividi il testo e inseriscilo a metà.
- **Q: Funziona anche nella versione gratuita di ChatGPT?**
  - A: È possibile, ma la capacità di cogliere il contesto e seguire accuratamente le istruzioni potrebbe essere leggermente inferiore nei modelli gratuiti (come GPT-3.5). Si consiglia di utilizzare i modelli più recenti, se possibile.
---
## 🧬 Anatomia del prompt (Why it works?)
1. **Assegnazione del Ruolo:** Attraverso la persona di un PM con 10 anni di esperienza, abbiamo imposto un tono e uno stile che non si limita a ridurre il testo, ma 'chiarisce le direttive di lavoro'.
2. **Strutturazione del Task:** Dividendo il formato di output in argomento, decisioni, questioni in sospeso e action item, abbiamo impedito all'IA di rispondere in formati inadeguati.
3. **Constraints (Vincoli):** Abbiamo bloccato alla radice l'uso di tabelle Markdown (Table) che danneggiano la leggibilità su dispositivi mobili e imposto l'uso di elenchi con emoji.
---
## 📊 La Prova: Before & After
### ❌ Before (Input)
```text
Team Leader Kim: Ah sì, mi sentite? Oggi ci siamo riuniti per la campagna di marketing di questo trimestre. Assistant Manager Park, a che punto siamo con i piani A e B che avevi preparato?
Assistant Manager Park: Sì, il piano A sembra superare un po' il budget, quindi penso che dovremmo metterlo in sospeso e procedere con il piano B.
Impiegato Choi: Sentite, se procediamo con il piano B, per il reclutamento degli influencer preparerò una lista entro questo venerdì.
Team Leader Kim: Ok, allora confermiamo il piano B, e Assistant Manager Park, per favore, rielabora il budget e presentalo entro martedì della prossima settimana. E per il design della landing page... ah, non ne avete ancora discusso con il team di design, vero?
Assistant Manager Park: Sì, non ancora.
```
### ✅ After (Risultato)
```text
📌 Argomento della riunione
- Discussione sul piano per la campagna di marketing del 3° trimestre
🎯 Decisioni chiave
- Piano A in sospeso per problemi di budget, Piano B confermato in via definitiva
🚨 Questioni in sospeso/irrisolte
- Progettazione del design della landing page (necessita discussione con il team di design)
✅ Action Items
- 👨‍💼 Assistant Manager Park: Rielaborazione e presentazione del budget basato sul piano B (Scadenza: martedì della prossima settimana)
- 🧑‍💻 Impiegato Choi: Creazione della lista degli influencer per il piano B (Scadenza: questo venerdì)
- ❓ [Da verificare]: Responsabile non definito per la discussione sulla landing page con il team di design
```
---
## 🎯 Conclusione
Non sprecare energie per sistemare verbali di riunioni complessi. 
Affida all'IA la pulizia dei testi disordinati e concentrati sull'esecuzione degli action item decisi. 
E ora, esci dal lavoro in orario! 🍷
