---
layout: /src/layouts/Layout.astro
title: "Lancia Solo JSON e la Definizione del Tipo TypeScript Salta Fuori! (feat. Zod)"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Sviluppo"
description: "Un prompt che converte automaticamente dati JSON complessi in interfacce TypeScript o schemi Zod."
tags: ["TypeScript", "Zod", "JSON", "Definizione Tipo", "Produttività"]
---

# 📝 Lancia Solo JSON e la Definizione del Tipo TypeScript Salta Fuori! (feat. Zod)

**🎯 Consigliato per:** Tutti
**⏱️ Tempo richiesto:** 5 minuti

- **🤖 Modello consigliato:** Tutti i modelli IA

| Difficoltà | Efficacia  |  Utilità  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"La risposta API backend è così complessa, quando farò tutte queste interfacce?"_

Stai digitando `interface User { ... }` uno per uno?
Oggetti nidificati, array, valori opzionali... è perfetto per commettere errori.
Copia e incolla semplicemente il JSON di risposta API. Crea definizioni di tipo TypeScript perfette e schemi Zod per la validazione runtime.

---

## ⚡️ Riassunto in 3 righe (TL;DR)

1. Converti dati JSON in Interfaccia/Tipo TypeScript
2. Genera schema Zod/Yup per validazione runtime
3. Gestione perfetta di strutture nidificate (Oggetto Nidificato)

---

## 🚀 La Soluzione: "Maestro dei Tipi"

### 🥉 Versione Base

Usala quando hai solo bisogno di un risultato rapido.

**Ruolo:** Sei uno Sviluppatore Senior che ha padroneggiato l'ecosistema TypeScript.
**Richiesta:** Crea un prompt che converta automaticamente dati JSON complessi in interfacce TypeScript o schemi Zod.

<br>

### 🥇 Versione Pro (Esperto)

Usala quando hai bisogno di qualità dettagliata.

Copia il contenuto del **PROMPT** qui sotto e incollalo in ChatGPT o Claude.

> **Ruolo:** Sei uno Sviluppatore Senior che ha padroneggiato l'ecosistema TypeScript.
>
> **Contesto:** Ho ricevuto dati JSON da un'API esterna e ho bisogno di definizioni di tipo per usarli in sicurezza nel mio progetto.
>
> **Compito:**
>
> 1. Scrivi un'**Interfaccia TypeScript** basata sui dati JSON qui sotto. (Nome in PascalCase)
> 2. Scrivi uno **Schema Zod** insieme per la validazione runtime.
> 3. Includi codice per dedurre i tipi (`z.infer`) dallo schema Zod.
>
> **Dati JSON:**
>
> ```text
> [Incolla i dati JSON qui]
> ```
>
> **Vincoli:**
>
> - Assumi che tutti i campi siano obbligatori per impostazione predefinita, ma trattali come opzionali (`?`) solo si se `null` è incluso.
> - Separa gli oggetti all'interno degli array in interfacce separate e definiscili.
> - Aggiungi commenti JSDoc per spiegare cos'è ogni campo (deducendo).

---

## 🧬 Anatomia del Prompt (Perché funziona?)

---

## 📊 Prova: Prima e Dopo

### ❌ Prima (JSON Input)

```text
{
  "id": 1,
  "name": "Jay",
  "contact": {
    "email": "jay@test.com",
    "phone": null
  },
  "tags": ["developer", "admin"]
}
```

### ✅ Dopo (Risultato)

```typescript
import { z } from "zod";

// 1. Zod Schema Definition
export const ContactSchema = z.object({
  email: z.string().email(),
  phone: z.string().nullable().optional(), // Null handling
});

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  contact: ContactSchema,
  tags: z.array(z.string()),
});

// 2. TypeScript Type Inference
/** User Information Interface */
export type User = z.infer<typeof UserSchema>;
export type Contact = z.infer<typeof ContactSchema>;
```

---

## 🎯 Conclusione

La definizione del tipo è un dispositivo di sicurezza, ma il processo di creazione non dovrebbe essere doloroso.
Costruisci un sistema di tipi sicuro e robusto con un solo copia-incolla! 🍷
