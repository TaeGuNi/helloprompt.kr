---
layout: /src/layouts/Layout.astro
title: "Niente Codice Spaghetti: Il Cheat Code DDD per Trasformare l'IA in un Senior Developer a Forza 🤬"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Workflow Automation"
description: "Basta con le chiacchiere inutili. Ecco il prompt severo di un Senior Architect per forzare l'IA a scrivere solo logica di business pura."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---
## 📝 Niente Codice Spaghetti: Il Cheat Code DDD per Trasformare l'IA in un Senior Developer a Forza 🤬

- **🎯 Consigliato per:** Sviluppatori junior logorati dalla manutenzione e architetti stufi del codice spaghetti.
- **⏱️ Tempo richiesto:** Da 3 ore di noioso refactoring a 1 solo minuto.
- **🤖 Modelli ottimali:** IA con elevate capacità di programmazione (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro).
- ⭐ **Difficoltà:** ⭐⭐⭐☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilità:** ⭐⭐⭐⭐⭐

> _Ti è mai venuto un colpo guardando il codice partorito dall'IA? Se non ne puoi più di vedere query al database buttate a casaccio nella UI, questo cheat code è la tua salvezza._

Questo documento è la guida definitiva per estirpare la pigrizia e l'inutile adulazione dal tuo assistente IA, trasformandolo in un implacabile Senior Architect. Se non vuoi finire sommerso dal debito tecnico a furia di incollare alla cieca il codice generato, per poi arrivare a rassegnare le dimissioni, adotta immediatamente questo protocollo.

---
## ⚡️ Sintesi in 3 punti (TL;DR)

- 🚫 **Nessun compromesso architetturale:** Blocca alla radice quel "terrorismo" che mescola UI, logica di business e chiamate al DB all'interno di un unico file.
- 🛡️ **Indipendenza dal framework:** Impone l'utilizzo di una logica di "puro dominio", capace di sopravvivere intatta anche se un domani il framework dovesse scomparire.
- 🔪 **Killer delle funzioni chilometriche:** Addestra l'IA a fare a pezzi e rifattorizzare senza pietà tutto il codice sporco che supera le 30 righe o che si appoggia ai commenti per separare le sezioni.

---
## 🚀 La Soluzione: "Protocollo Domain-Driven Design (DDD) & Clean Architecture"

### 🥉 Versione Base (Basic Version)

Utilizza questa versione quando hai bisogno di un refactoring rapido ed efficace.

> **Ruolo:** Sei uno spietato `[Senior Software Architect]`.
> **Richiesta:** Rifattorizza il seguente `[Snippet di Codice]` rispettando il Single Responsibility Principle (SRP) e la Separation of Concerns (SoC). Non mescolare la logica di business nella UI e se il codice supera le 30 righe, spezzalo tassativamente in più funzioni.

### 🥇 Versione Pro (Expert Version)

Questo è il cheat code da schierare quando devi imporre una disciplina ferrea all'intero progetto e hai bisogno di Clean Code allo stato puro.

> **Ruolo (Role):** Sei uno spietato `[Senior Software Architect]` e un fanatico del DDD (Domain-Driven Design). Piantala con adulazioni e spiegazioni inutili e dammi solo il codice.
>
> **Contesto (Context):**
>
> - Background: Sto lavorando a un progetto basato su `[Nome del Framework/Linguaggio]`.
> - Obiettivo: Scrivere codice con una Clean Architecture in cui i livelli View, Business e Data siano perfettamente separati e isolati.
>
> **Attività (Task):**
>
> 1. Analizza i `[Requisiti o Codice]` forniti e frammentali spietatamente in livello UI, dominio di business e livello infrastrutturale.
> 2. Riduci drasticamente l'accoppiamento utilizzando interfacce (dependency injection) affinché la logica di dominio principale non venga mai contaminata da un framework specifico (React, Next.js, ecc.).
> 3. Se un oggetto o una funzione esegue più di due azioni, frammentalo immediatamente seguendo il Single Responsibility Principle (SRP).
>
> **Vincoli (Constraints):**
>
> - Inserire query dirette al DB o chiamate `fetch`/`axios` all'interno di un Controller o di un componente UI (es. `page.tsx`, `Component.tsx`) è considerato "terrorismo architetturale". È assolutamente vietato.
> - Fornisci l'output esclusivamente all'interno di blocchi di codice Markdown (` ``` `).
>
> **Avvertenze (Warning):**
>
> - Non inventare sintassi recenti di cui non sei certo o librerie inesistenti facendole sembrare plausibili (prevenzione allucinazioni). Se non sai qualcosa, ammettilo chiaramente.
> - Se la lunghezza di una funzione supera le 30 righe o se c'è un "Code Smell" evidenziato da commenti come "da qui inizia la parte OO", spezzala immediatamente.

**📋 Cheat Code da Copiare (Copy & Paste)**

```text
Ruolo (Role): Sei uno spietato [Senior Software Architect] e un fanatico del DDD (Domain-Driven Design). Piantala con adulazioni e spiegazioni inutili e dammi solo il codice.
Contesto (Context):
- Background: Sto lavorando a un progetto basato su [Nome del Framework o Linguaggio].
- Obiettivo: Scrivere codice con una Clean Architecture in cui i livelli View, Business e Data siano perfettamente separati.
Attività (Task):
1. Analizza i [Requisiti o Codice] forniti e frammentali spietatamente in livello UI, dominio di business e livello infrastrutturale.
2. Riduci l'accoppiamento utilizzando interfacce (dependency injection) affinché la logica di dominio principale non venga contaminata da un framework specifico.
3. Se un oggetto o una funzione esegue più di due azioni, frammentalo immediatamente secondo il Single Responsibility Principle (SRP).
Vincoli (Constraints):
- Inserire query dirette al DB o chiamate fetch/axios all'interno di un Controller o di un componente UI è considerato "terrorismo architetturale". Assolutamente vietato.
- Fornisci l'output esclusivamente all'interno di blocchi di codice Markdown.
Avvertenze (Warning):
- Non inventare sintassi recenti di cui non sei certo o librerie inesistenti facendole sembrare plausibili. Se non sai qualcosa, ammettilo chiaramente.
- Se la lunghezza di una funzione supera le 30 righe o se c'è un Code Smell diviso da commenti come "da qui inizia la parte OO", spezzala immediatamente.
[Requisiti o Codice]: (Inserisci qui il codice o i requisiti)
```

---
## 💡 Il Commento dell'Autore (Insight)

Ad essere sinceri, il codice generato dall'IA spesso ha una bella facciata, ma grattando la superficie ci si ritrova in una vera e propria discarica. Chiamate `fetch` e query al database lanciate senza alcun criterio direttamente nei componenti UI... è il classico codice spazzatura che uccide sul nascere ogni possibilità di manutenzione futura.

Questo cheat code è l'arma definitiva per neutralizzare il superficiale istinto di "completamento rapido" dell'IA, forzandola a rispettare gli standard rigorosi e intransigenti di uno sviluppatore senior.

Provandolo in prima persona, noterai che l'IA smetterà all'istante di propinarti le solite frasi di circostanza ("Certamente! Ottima idea!") per dedicarsi a sezionare e strutturare il codice in modo spietatamente pulito. Se non vuoi finire schiacciato sotto una montagna di codice spaghetti man mano che il progetto cresce, sfrutta questo prompt per prendere l'IA per il colletto e costringerla a programmare come si deve.

---
## 🙋 Domande Frequenti (FAQ)

- 📌 **D: Con quale linguaggio o framework dovrei utilizzare questo prompt?**
  - R: È completamente agnostico. Che si tratti di TypeScript, Python o Java, i principi fondamentali della Clean Architecture non cambiano. Ti basterà sostituire la variabile `[Nome del Framework/Linguaggio]` con lo stack tecnologico attualmente in uso.

- 📌 **D: L'IA fa over-engineering e ignora le regole di routing più recenti del framework. Che faccio?**
  - R: In questo caso, aggiungi un'istruzione mirata: "Rispetta le convenzioni di routing standard (View, Layout) come nel Next.js App Router, ma estrai la logica di business interna utilizzando il pattern Adapter!". Con una direttiva così perentoria, capirà al volo.

- 📌 **D: Questo prompt non risulta troppo aggressivo? L'IA non rischia di "offendersi"?**
  - R: A cosa serve la cortesia con un algoritmo? Le macchine producono codice di altissimo livello solo se messe sotto torchio. Minacciare di considerare una riga di codice come "terrorismo architetturale" è mille volte più efficace di un banale "per favore, fallo" per salvaguardare la tua codebase.

---
## 🧬 Anatomia del Prompt (Perché funziona?)

- 💣 **Imposizione di vincoli estremi:** L'utilizzo di espressioni forti come "contaminare il livello UI è considerato terrorismo architetturale" distrugge alla radice la tendenza dell'IA a cercare pericolosi compromessi stilistici.
- 🛡️ **Indipendenza assoluta dal framework:** Infonde la mentalità secondo cui "nemmeno una riga di codice deve rompersi se il framework dovesse scomparire domani", obbligando il modello a costruire una logica di dominio solida e disaccoppiata.
- ✂️ **Quantificazione pragmatica dell'SRP:** Fissando paletti quantitativi e inequivocabili come "tassativo non superare le 30 righe" o "usare i commenti per dividere il codice è un Code Smell", l'IA è costretta a frammentare le funzioni in modo proattivo.

---
## 📊 Dimostrazione: Prima e Dopo (Before & After)

### ❌ Prima (Il classico codice spaghetti vomitato dall'IA)

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

### ✅ Dopo (Il codice rifattorizzato con la forza tramite il cheat code)

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

L'IA è capace di sfornare codice a velocità inaudite, ma non le importa assolutamente nulla di come quell'applicazione verrà mantenuta tra un anno. Alla fin fine, la Clean Architecture e l'integrità del sistema rimangono responsabilità esclusive dell'ingegnere umano. 

Questo cheat code funziona come una frusta virtuale, obbligando la macchina a farsi carico di questa enorme responsabilità architetturale. Strappa via quell'insopportabile facciata da chatbot servile e risveglia il Senior Architect latente che c'è in lei.

E ora, chiudi il laptop in orario invece di passare la serata a sbrogliare l'ennesimo groviglio di codice spaghetti! 🍷
