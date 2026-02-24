---
layout: /src/layouts/Layout.astro
title: "AutoGen 입문: AI 에이전트끼리 대화하게 만들기"
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "AI/개발"
description: "Il framework multi-agente AutoGen creato da Microsoft. Una guida alla collaborazione automatizzata in cui bot sviluppatori e bot manager si scambiano feedback per completare il codice in totale autonomia."
tags: ["AutoGen", "멀티에이전트", "MS", "AI협업", "자동화"]
---

# 🤖 Introduzione ad AutoGen: Far Dialogare gli Agenti AI

- **🎯 Consigliato per:** Sviluppatori solisti sopraffatti dal lavoro, Tech Geek che vogliono automatizzare flussi di lavoro complessi.
- **⏱️ Tempo richiesto:** 20 minuti (Configurazione e Demo)
- **🤖 Modelli consigliati:** GPT-4o, Claude 3.5 Sonnet (La qualità della logica conversazionale tra gli agenti è fondamentale)

- ⭐ **Difficoltà:** ⭐⭐⭐⭐☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Versatilità:** ⭐⭐⭐⭐☆

> _"Senti i limiti nell'affidare tutto a una singola AI? Crea il tuo team di sviluppo virtuale perfetto con un'AI che pianifica, una che programma e una che revisiona il codice."_

Sviluppato da Microsoft (MS), **AutoGen** è un potente framework multi-agente che trasforma questa visione in realtà. Generando diverse "personas" AI e inserendole in un unico ambiente di lavoro, esse possono dialogare, scambiarsi feedback e completare il progetto finale in totale autonomia. È l'alba della vera **"Collaborazione Autonoma (Autonomous Collaboration)"**.

---

## ⚡️ Sintesi in 3 Punti (TL;DR)

1. **La Magia della Divisione dei Ruoli:** Suddividere un prompt complesso in agenti specializzati (pianificazione, sviluppo, revisione) massimizza la qualità del lavoro.
2. **Esecuzione Autonoma del Codice (Code Execution):** L'AI esegue direttamente il codice in un ambiente containerizzato ed esegue il debug degli errori autonomamente.
3. **Controllo del Loop Infinito:** Impostando i momenti di intervento per il supervisore umano (Human-in-the-loop), previeni lo spreco di token e mantieni il pieno controllo della direzione.

---

## 🚀 La Soluzione: "Prompt per Creare un Team Multi-Agente"

### 🥉 Versione Base (Duo di Codifica: Sviluppatore & Esecutore)

Usa questo prompt per generare il codice di interazione 1:1 più semplice tra due agenti.

> **Ruolo:** Sei uno `[Sviluppatore Senior Python]`.
>
> **Richiesta:** Scrivi uno script Python in cui due agenti collaborano utilizzando il framework AutoGen.
>
> 1. **AssistantAgent (Coder):** Incaricato di scrivere il codice Python.
> 2. **UserProxyAgent (Executor):** Incaricato di eseguire il codice scritto dal Coder in ambiente locale e fornire un feedback diretto sui risultati.
>
> **Obiettivo:** Imposta i due agenti affinché completino il compito di "trovare i numeri primi (Prime Number) da 1 a 100 e salvarli in un file txt".

<br>

### 🥇 Versione Pro (Azienda IT Virtuale: PM, Dev, QA)

Costruisci un sistema di Group Chat a 3 agenti, simulando un reale ambiente di lavoro strutturato.

> **Ruolo (Role):** Sei un `[Architetto del framework AutoGen ex-Microsoft]`.
>
> **Contesto (Context):**
>
> - Background: Non ho abbastanza tempo per portare avanti un toy project da solo, quindi voglio costruire un team di sviluppo virtuale composto interamente da agenti AI.
> - Obiettivo: Automatizzare la creazione di un semplice "Snake Game" basato su Python, dalla fase di ideazione fino al testing.
>
> **Richiesta (Task):**
>
> Utilizza le classi `GroupChat` e `GroupChatManager` di AutoGen per scrivere uno script Python completo in cui i seguenti 3 agenti collaborano attivamente:
>
> 1. **PM (Product Manager):** Definisce le regole principali e la UI/UX del gioco, assegnando le direttive operative.
> 2. **Coder (Developer):** Scrive il codice HTML/CSS/JS basandosi fedelmente sulle specifiche dettate dal PM.
> 3. **Reviewer (QA/Critic):** Esamina in modo critico il codice del Coder, individua bug o falle logiche e suggerisce le direzioni per la correzione.
>
> **Vincoli (Constraints):**
>
> - Workflow: Deve esserci un ciclo di lavoro chiaro e ininterrotto: Proposta del PM ➔ Codice del Coder ➔ Feedback del Reviewer ➔ Correzione del Coder.
> - Limita il numero massimo di turni di conversazione (`max_round`) a 10.
> - Fornisci il codice Python finito e senza errori, pronto per l'esecuzione immediata. Assicurati che il `system_message` di ciascun agente sia estremamente specifico e coerente con il suo ruolo professionale.

---

## 💡 Il Commento dell'Autore (Insight)

Il vero potere distruttivo di AutoGen si manifesta quando la fenomenale capacità di generazione testuale degli LLM si unisce alla funzione di **"Esecuzione del Codice (Code Execution)"**. In passato, se un chatbot scriveva del codice, un essere umano doveva copiarlo, incollarlo nell'IDE e, in caso di errore, estrarre i log per chiederne la soluzione al chatbot. Un processo alienante e noioso.

Tuttavia, collegando lo `UserProxyAgent` a un container Docker, l'AI testa il proprio codice, analizza i log di errore a terminale e lo riscrive in autonomia. In altre parole, puoi semplicemente rilassarti e guardare i log a schermo mentre le tue AI lavorano freneticamente al debug, per poi raccogliere il risultato finale perfetto.

---

## 🙋 Domande Frequenti (FAQ)

- **Q: Posso collegare modelli locali open source (come Llama 3) invece dell'API a pagamento di OpenAI?**
  - A: Assolutamente sì, è supportato nativamente. Avviando un server locale tramite LM Studio o Ollama e modificando l'indirizzo `base_url` nella `llm_config` di AutoGen con quello della tua API locale, puoi gestire un intero esercito di agenti senza limiti e senza preoccuparti dei salati costi dei token.

- **Q: Cosa succede se gli agenti entrano in un loop infinito di battibecchi senza giungere a una conclusione?**
  - A: È il problema più comune nei sistemi multi-agente. Devi limitare rigorosamente il numero massimo di risposte utilizzando la proprietà `max_consecutive_auto_reply`, oppure configurare `human_input_mode="TERMINATE"` affinché, alla comparsa di una determinata parola chiave (es. "Compito completato"), la conversazione si fermi immediatamente, restituendo il controllo all'amministratore umano.

- **Q: Che differenza c'è rispetto al framework CrewAI?**
  - A: AutoGen eccelle nella **"Conversazione libera (Conversation)"** bidirezionale tra gli agenti e nell'esecuzione autonoma del codice. CrewAI, d'altra parte, è altamente ottimizzato per eseguire sequenzialmente pipeline e **"Processi (Process)"** ben definiti passo dopo passo. Per il problem solving creativo o il coding, AutoGen è superiore; per ricerche strutturate o routine di marketing, CrewAI risulta leggermente più affidabile.

---

## 🧬 Anatomia del Prompt (Why it works?)

1. **Distribuzione del Carico Cognitivo (Cognitive Load Distribution):** Inserire tutte le condizioni di pianificazione, programmazione e revisione in un solo prompt causa quasi sempre il fenomeno "Lost in the middle", dove l'AI dimentica o ignora le istruzioni intermedie. Separando i ruoli e assegnando a ciascuno un `system_message` granitico, ogni AI si concentra esclusivamente sul proprio compito operativo, aumentando drasticamente la coerenza logica e la qualità.
2. **Meccanismo di Pensiero Critico (Critic-in-the-loop):** Separare rigorosamente chi scrive il codice (Coder) da chi lo critica (Reviewer) simula fedelmente la sana cultura della code review nei migliori team di sviluppo reali. Poiché un LLM fatica enormemente a criticare oggettivamente ciò che ha appena generato, l'inserimento di un agente QA indipendente forza l'integrità matematica del codice.

---

## 📊 La Prova: Prima e Dopo (Before & After)

### ❌ Prima (Dipendenza da un singolo prompt)

```text
[Utente] "Scrivi il codice web perfetto per il gioco Snake."
[AI] (Genera un blocco da 150 righe di codice)
[Utente] (Lo esegue nel browser) -> Non succede nulla. Copia i log della console.
[Utente] "Uncaught TypeError: Cannot read properties of null... risolvi questo problema."
[AI] (Genera il codice modificato) -> Ora le frecce direzionali non funzionano. Altra domanda.
(Alla fine l'utente si stanca, fa il debug da solo per un'ora, oppure si arrende 🤯)
```

### ✅ Dopo (Team Multi-Agente AutoGen)

```text
[PM] "Le dimensioni base del canvas per Snake saranno 400x400. Il serpente si allungherà mangiando le mele rosse."
[Coder] "Ho scritto il codice HTML e JS seguendo scrupolosamente le direttive del PM. (Codice allegato)"
[UserProxy] (Esecuzione locale automatica) "Si è verificato un errore di collisione alla riga 15 durante l'esecuzione dell'engine."
[Reviewer] "Coder, manca la gestione dell'eccezione quando il serpente tocca il suo stesso corpo. Modifica la logica dell'array per i controlli limite."
[Coder] "Grazie per la segnalazione tecnica. Ho aggiunto la gestione dell'eccezione e riscritto il modulo. (Codice modificato allegato)"
[UserProxy] "Esecuzione avvenuta con successo. Nessun errore critico. Risultato salvato come 'snake_game.html'."
(L'utente deve solo bere il suo caffè guardando il file finito prendere vita ☕️)
```

---

## 🎯 Conclusione

Non c'è più alcun motivo per sopportare in solitudine la frustrazione dello sviluppo e l'agonia del debug infinito. Con una semplice infarinatura di Python e una chiave API valida, puoi formare le tue truppe IT d'élite, pronte a lavorare 24 ore su 24 senza mai stancarsi o lamentarsi delle specifiche.

Ora siediti alla scrivania e impartisci ordini con l'eleganza di un vero Tech Lead.
**A tutto il resto—il fastidioso coding e il tedioso debug—penseranno i tuoi agenti di AutoGen.** 🍷
