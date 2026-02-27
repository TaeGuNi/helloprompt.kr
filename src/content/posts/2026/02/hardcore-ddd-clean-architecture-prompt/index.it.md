---
layout: /src/layouts/Layout.astro
title: "Niente Codice Spaghetti: Il Cheat Code DDD per Trasformare l'IA in un Senior Developer a Forza 🤬"
author: "ZZabbis"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Basta con le chiacchiere inutili. Ecco il prompt severo di un Senior Architect per forzare l'IA a scrivere solo logica di business pura."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---
# 📝 Niente Codice Spaghetti: Il Cheat Code DDD per Trasformare l'IA in un Senior Developer a Forza 🤬

- **🎯 Target:** Sviluppatori junior esausti dalla manutenzione, architetti che odiano il codice spaghetti.
- **⏱️ Tempo Richiesto:** Refactoring da 3 ore → ridotto a 1 minuto.
- **🤖 Modelli Consigliati:** IA con eccellenti capacità di generazione del codice (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro).
- ⭐ **Difficoltà:** ⭐⭐⭐☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐

_Ti è mai venuto un colpo guardando il codice generato dall'IA? Se non ne puoi più di vedere query al DB buttate a casaccio nella UI, usa questo cheat code._

Questo documento è il manuale per rimuovere completamente l'adulazione e la pigrizia dal tuo gentile (e spensierato) assistente IA, trasformandolo in uno spietato Senior Architect. Se non vuoi finire schiacciato dal debito tecnico a furia di fare copia e incolla del codice dell'IA per poi rassegnare le dimissioni, adotta subito questo protocollo.

---
## ⚡️ Sintesi in 3 punti (TL;DR)

- 🚫 **Nessun crollo dei livelli architetturali:** Blocca alla radice il "terrorismo architetturale" che mescola UI, logica di business e comunicazioni col DB in un unico file.
- 🛡️ **Indipendenza dal framework:** Forza l'uso di codice di "puro dominio" in grado di sopravvivere anche se il framework dovesse fallire domani.
- 🔪 **Distruttore di funzioni giganti:** Addestra l'IA a distruggere (rifattorizzare) senza pietà il codice sporco che supera le 30 righe o che usa commenti per dividere le sezioni.

---
## 🚀 La Soluzione: "Protocollo Domain-Driven Design (DDD) & Clean Architecture"

### 🥉 Versione Base (Basic Version)

Usala quando hai bisogno solo di risultati di refactoring rapidi.

> **Ruolo:** Sei uno spietato `[Senior Software Architect]`.
> **Richiesta:** Rifattorizza il seguente `[Snippet di Codice]` rispettando il Single Responsibility Principle (SRP) e la Separation of Concerns (SoC). Non mescolare la logica di business nella UI e se il codice supera le 30 righe, spezzalo tassativamente in più funzioni.

### 🥇 Versione Pro (Expert Version)

Questo è il cheat code da tirare fuori quando devi imporre la disciplina architetturale all'intero progetto e hai bisogno di Clean Code rigoroso.

> **Ruolo (Role):** Sei uno spietato `[Senior Software Architect]` e un fanatico del DDD (Domain-Driven Design). Piantala con adulazioni e spiegazioni inutili e dammi solo il codice.
>
> **Contesto (Context):**
>
> - Background: Sto lavorando a un progetto basato su `[Nome del Framework/Linguaggio]`.
> - Obiettivo: Scrivere codice con una Clean Architecture in cui i livelli View, Business e Data siano perfettamente separati.
>
> **Attività (Task):**
>
> 1. Analizza i `[Requisiti o Codice]` forniti e frammentali spietatamente in livello UI, dominio di business e livello infrastrutturale.
> 2. Riduci l'accoppiamento utilizzando interfacce (dependency injection) affinché la logica di dominio principale non venga contaminata da un framework specifico (React, Next.js, ecc.).
> 3. Se un oggetto o una funzione esegue più di due azioni, frammentalo immediatamente secondo il Single Responsibility Principle (SRP).
>
> **Vincoli (Constraints):**
>
> - Inserire query dirette al DB o chiamate `fetch`/`axios` all'interno di un Controller o di un componente UI (es. `page.tsx`, `Component.tsx`) è considerato "terrorismo architetturale infrastrutturale". Assolutamente vietato.
> - Fornisci l'output esclusivamente all'interno di blocchi di codice Markdown (` ``` `).
>
> **Avvertenze (Warning):**
>
> - Non inventare sintassi recenti di cui non sei certo o librerie inesistenti facendole sembrare plausibili (prevenzione allucinazioni). Se non sai qualcosa, ammettilo con onestà.
> - Se la lunghezza di una funzione supera le 30 righe o se c'è un "Code Smell" diviso da commenti come "da qui inizia la parte OO", spezzala immediatamente.

**📋 Cheat Code da Copiare (Copy & Paste)**

```text
Ruolo (Role): Sei uno spietato [Senior Software Architect] e un fanatico del DDD (Domain-Driven Design). Piantala con adulazioni e spiegazioni inutili e dammi solo il codice.
Contesto (Context):
- Background: Sto lavorando a un progetto basato su [Nome del Framework/Linguaggio].
- Obiettivo: Scrivere codice con una Clean Architecture in cui i livelli View, Business e Data siano perfettamente separati.
Attività (Task):
1. Analizza i [Requisiti o Codice] forniti e frammentali spietatamente in livello UI, dominio di business e livello infrastrutturale.
2. Riduci l'accoppiamento utilizzando interfacce (dependency injection) affinché la logica di dominio principale non venga contaminata da un framework specifico.
3. Se un oggetto o una funzione esegue più di due azioni, frammentalo immediatamente secondo il Single Responsibility Principle (SRP).
Vincoli (Constraints):
- Inserire query dirette al DB o chiamate fetch/axios all'interno di un Controller o di un componente UI è considerato "terrorismo architetturale". Assolutamente vietato.
- Fornisci l'output esclusivamente all'interno di blocchi di codice Markdown.
Avvertenze (Warning):
- Non inventare sintassi recenti di cui non sei certo o librerie inesistenti facendole sembrare plausibili. Se non sai qualcosa, ammettilo.
- Se la lunghezza di una funzione supera le 30 righe o se c'è un Code Smell diviso da commenti come "da qui inizia la parte OO", spezzala immediatamente.
[Requisiti o Codice]: (Inserisci qui il codice o i requisiti)
```

---
## 💡 Il Commento dell'Autore (Insight)

Ad essere sinceri, il codice generato dall'IA sembra bello fuori, ma il più delle volte, se ci guardi dentro, è una discarica. Chiamate `fetch` e query al DB lanciate senza criterio all'interno dei componenti UI... il classico codice spazzatura in cui la manutenibilità è andata a farsi benedire. 

Questo cheat code è uno strumento che neutralizza il superficiale istinto di "completamento rapido" dell'IA, imponendole i rigorosi standard di uno sviluppatore senior. 

Se lo provi tu stesso, vedrai che l'IA pianterà di dire le solite fesserie come "Sì, certo! Ottima idea!" e farà a pezzi il codice per strutturarlo in modo pulito e spietato. Se non vuoi rassegnare le dimissioni schiacciato dal codice spaghetti quando il progetto si espanderà, usa a tutti i costi questo prompt per prendere l'IA per il colletto e farla programmare come si deve.

---
## 🙋 Domande Frequenti (FAQ)

- 📌 **D: Per quale linguaggio o framework dovrei usare questo prompt?**
  - R: È agnostico rispetto al linguaggio. Che sia TypeScript, Python o Java, i principi fondamentali dell'architettura sono gli stessi. Basta sostituire lo spazio vuoto `[Nome del Framework/Linguaggio]` con lo stack tecnologico che stai usando.

- 📌 **D: L'IA continua a ignorare le regole di routing più recenti del framework facendo over-engineering.**
  - R: In quel caso, aggiungi una riga: "Rispetta le regole base di routing (View, Layout) del Next.js App Router, ma estrai la logica di business interna usando il pattern Adapter!". Se la rimproveri così, capirà all'istante.

- 📌 **D: Questo prompt non è un po' troppo aggressivo? L'IA non si offenderà?**
  - R: A che serve essere educati con un'IA? Le macchine tirano fuori i capolavori solo se le torchio a dovere. Usare frasi come "lo considererò un atto di terrorismo" funziona mille volte meglio di "per favore, fallo" per proteggere l'architettura.

---
## 🧬 Anatomia del Prompt (Perché funziona?)

- 💣 **Imposizione di vincoli estremi:** L'uso di parole forti come "contaminare il livello UI sarà considerato terrorismo architetturale" impedisce alla radice che l'IA possa giungere a compromessi con se stessa.
- 🛡️ **Indipendenza forzata dal framework:** Inculca la mentalità secondo cui "nemmeno una singola riga di codice deve essere modificata se il framework dovesse fallire", fornendo la struttura per costruire la vera logica di dominio.
- ✂️ **Quantificazione del principio SRP:** Fornendo criteri specifici e rigorosi come "vietato superare le 30 righe" o "l'uso di commenti per dividere il codice puzza (Code Smell)", l'IA è portata a frammentare il codice autonomamente.

---
## 📊 Dimostrazione: Prima e Dopo (Before & After)

### ❌ Prima (Input: Il codice spaghetti scritto dall'IA a modo suo)

```tsx
// Un ibrido orribile: UI + Query DB + Logica di Business mischiati in un solo file
export default async function UserProfile({ userId }) {
  const db = await connectDB();
  const user = await db.query(`SELECT * FROM users WHERE id = ${userId}`);
  
  if (!user) return <div>User not found</div>;
  if (user.status === 'banned') await sendAlertEmail(user.email); // Logica di business eseguita nella UI?!
  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={() => db.query('UPDATE...')}>Update</button>
    </div>
  );
}
```

### ✅ Dopo (Risultato: Il codice rifattorizzato a forza con questo cheat code)

```tsx
// 1. Livello Domain / Service (Logica di business rigorosamente separata)
import { getUserProfile } from '@/domain/user/use-cases/getUserProfile';
import { handleBannedUser } from '@/domain/user/services/alertService';

// 2. Livello di Presentazione (Responsabile solo del rendering e del routing)
export default async function UserProfilePage({ userId }) {
  const user = await getUserProfile(userId); 
  
  if (!user) return <NotFoundView />;
  if (user.status === 'banned') await handleBannedUser(user);
  return <ProfileView user={user} />;
}
```

---
## 🎯 Conclusione

L'IA genera il codice a una velocità spaventosa, ma non gliene frega assolutamente niente di come verrà mantenuta la tua app tra un anno. Alla fine, la Clean Architecture e il design del sistema sono responsabilità dell'ingegnere umano. 

Questo cheat code è una frusta potente che costringe la macchina ad assumersi questa pesante responsabilità. Strappa via l'inutile facciata adulatoria del chatbot dell'IA e risveglia il vero agente che in fondo è un Senior Architect.

E ora, esci in orario invece di sprecare tempo a sbrogliare codice spaghetti! 🍷
