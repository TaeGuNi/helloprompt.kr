---
layout: /src/layouts/Layout.astro
title: "'Raccomanda Messaggio di Commit' Niente Più Preoccupazioni! Generazione Auto Conventional Commits"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Sviluppo"
description: "Un prompt che scrive messaggi di commit puliti su misura per gli standard globali (Conventional Commits) se incolli semplicemente le modifiche (`git diff`)."
tags: ["Git", "Messaggio di Commit", "Collaborazione", "Produttività"]
---

# 📝 "Raccomanda Messaggio di Commit" Niente Più Preoccupazioni! Generazione Auto Conventional Commits

> **🎯 Consigliato per:** Tutti
> **⏱️ Tempo richiesto:** 5 minuti
> **🤖 Modello consigliato:** Tutti i modelli IA

| Difficoltà | Efficacia  |  Utilità  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Scrivere messaggi di commit è più difficile che scrivere codice..."_

`fix: bug`, `update code`... Stai committando così?
I buoni messaggi di commit sono il nucleo della gestione della cronologia, ma scriverli ogni volta mi fa venire il mal di testa.
Lancia semplicemente il contenuto `git diff`, e lo tirerà fuori nello stile **Conventional Commits**, lo standard del campo open source.

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. Analizza le modifiche e seleziona automaticamente il tipo appropriato (feat, fix, refactor, ecc.)
2. Scrivi oggetto conciso e chiaro e corpo dettagliato
3. Formattazione su misura per le convenzioni del team

---

## 🚀 La Soluzione: "Generatore Messaggi di Commit Git"

### 🥉 Versione Base

Usala quando hai solo bisogno di un risultato rapido.

> **Ruolo:** Sei un Maintainer Open Source ossessionato dalla gestione della cronologia Git.
> **Richiesta:** Scrivi un messaggio di commit pulito su misura per gli standard globali (Conventional Commits) se incollo semplicemente le modifiche (`git diff`).

<br>

### 🥇 Versione Pro (Esperto)

Usala quando hai bisogno di qualità dettagliata.

Copia il contenuto del **PROMPT** qui sotto e incollalo in ChatGPT o Claude.

> **Ruolo:** Sei un Maintainer Open Source ossessionato dalla gestione della cronologia Git.
>
> **Contesto:** Ho modificato il codice e ho bisogno di un messaggio di commit pulito che i colleghi possano capire facilmente.
>
> **Compito:**
> Analizza le `[Modifiche]` qui sotto e raccomanda 3 messaggi di commit che si adattino alle regole **Conventional Commits**.
>
> 1. **Formato:** `<type>(<scope>): <subject>`
> 2. **Corpo:** Riassumi il motivo del cambiamento (Perché) e il contenuto del cambiamento (Cosa) con elenchi puntati.
> 3. **Piè di pagina:** (Opzionale) Se c'è un numero di issue, aggiungilo nel formato `Closes #123`.
>
> **Modifiche (git diff o riassunto):**
>
> ```
> [Scrivi il risultato `git diff` o le modifiche semplicemente qui]
> ```
>
> **Vincoli:**
>
> - Tipi di Type: Seleziona uno tra `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
> - L'Oggetto non deve superare i 50 caratteri e iniziare con un imperativo (radice del verbo). (L'inglese è predefinito)

---

## 🧬 Anatomia del Prompt (Perché funziona?)

---

## 📊 Prova: Prima e Dopo

### ❌ Prima (Modifiche Input)

"Cambiato il colore del pulsante di login in rosso, corretto bug dove il login non funzionava. Ah, e aggiunta guida all'installazione al readme."

### ✅ Dopo (Risultato)

**Opzione 1 (Focus su Correzione Bug)**

```text
fix(auth): resolve login failure issue and update button style

- Fix logic error preventing user login
- Change login button color to red for better visibility
- Add installation guide to README.md
```

**Opzione 2 (Focus su Miglioramento UI)**

```text
style(ui): update login button color and fix login bug

- Change login button color to red
- Fix login functionality bug
- docs: update installation guide in README
```

---

## 🎯 Conclusione

I messaggi di commit sono lettere al tuo io futuro e ai colleghi.
Non scriverli approssimativamente. Fatti aiutare dall'IA e ascolta il complimento "Il log di commit di questa persona è così pulito"! 🍷
