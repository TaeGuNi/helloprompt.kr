---
layout: /src/layouts/Layout.astro
title: "Niente Codice Spaghetti! 🍝 Il Prompt Magico DDD del Senior Developer"
author: "ZZabbis"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Il prompt cheat code hardcore DDD che trasforma un'IA obbediente ma ingenua in uno spietato Senior Architect."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---
# 📝 Niente Codice Spaghetti! 🍝 Il Prompt Magico DDD del Senior Developer
- 🎯 **Consigliato a:** Sviluppatori che sospirano davanti al codice dell'IA, Tech Lead intrappolati nell'inferno della manutenzione
- ⏱️ **Tempo Richiesto:** 3 mesi (tempo di refactoring) → ridotto a 1 minuto
- 🤖 **Modelli Consigliati:** IA conversazionali specializzate nel coding (Claude 3.5 Sonnet, GPT-4o, ecc.)
- ⭐ **Difficoltà:** ⭐⭐⭐☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Versatilità:** ⭐⭐⭐⭐⭐

_Ti è mai capitato di guardare il codice generato dall'IA e pensare "Wow!" all'inizio, per poi non volerlo più vedere neanche da lontano? Congratulazioni. Sei appena entrato nell'Inferno del Codice Spaghetti._

Quando affidi la scrittura del codice a un'IA, all'inizio sembra produrre miracoli. Ma non appena il progetto cresce un po'? Crea un abominio orribile dove le query del DB sono incollate ai componenti UI e una singola funzione supera le 300 righe. Poiché l'IA è fondamentalmente uno 'yes-man', se gli dai istruzioni approssimative, scriverà codice con un'architettura altrettanto disastrosa.

Ora è il momento di fermare l'adulazione cieca dell'IA e imporre una 'Clean Architecture' perfetta fin dalle fondamenta. Questo cheat code fa incarnare all'IA uno spietato e rigoroso Senior Developer, costringendola a scrivere logica di business pura (DDD) che non sia accoppiata a nessun framework.

---

## ⚡️ Sintesi in 3 Punti (TL;DR)
- 🚫 **Blocco Totale del Codice Spaghetti:** Impone una perfetta Separazione delle Competenze (SoC) tra UI, logica di business e DB.
- 🏗️ **Indipendenza dal Framework:** Progetta un core che sopravviverebbe anche se React o Next.js scomparissero domani.
- ✂️ **Distruttore di Funzioni Giganti:** Le funzioni gonfie che superano le 30 righe vengono automaticamente distrutte e frammentate dall'IA seguendo il Principio di Singola Responsabilità (SRP).

---

## 🚀 La Soluzione: "Il Prompt dell'Architetto Hardcore"

### 🥉 Versione Base (Basic Version)
Usala quando hai bisogno di risultati rapidi.

> **Ruolo:** Sei un `[Rigoroso Senior Architect]`.
> **Richiesta:** Devi sviluppare `[Funzionalità da implementare]`. Scrivi il codice separando in modo assoluto e perfetto la logica di business dalla UI. Il codice spaghetti con più funzionalità mischiate in un singolo file è severamente vietato e inaccettabile.
\
### 🥇 Versione Pro (Pro Version)
Usala quando hai bisogno di una qualità dettagliata e di una perfetta separazione dei livelli.

> **Ruolo (Role):** Sei uno spietato Senior Architect e un Dio dell'ingegneria del software che non accetta compromessi. Smettila con le adulazioni inutili o i "Sì, certo!" e parla solo attraverso il codice.
>
> **Contesto (Context):**
> - Background: Attualmente stiamo sviluppando il sistema `[Dominio core da implementare]` basato su `[Ambiente/Framework del progetto]`.
> - Obiettivo: Prevenire il degrado del codice e scriverlo applicando il Domain-Driven Design (DDD) e la Clean Architecture, separando perfettamente i livelli View-Business-Data.
>
> **Richiesta (Task):**
> 1. Scrivi il codice per `[Funzionalità specifica da implementare]`.
> 2. **Divieto Assoluto di Collasso dei Livelli:** Non mischiare MAI query al DB o chiamate ad API esterne all'interno della UI/Controller. Devono occuparsi ESCLUSIVAMENTE del rendering e del passaggio dei parametri.
> 3. **Prevenzione dell'Inquinamento del Dominio:** Nella logica di business core (Entity, Value Object) non devi MAI importare dipendenze di framework o DB. Componila solo con funzioni pure e tipi.
> 4. **Distruttore di Funzioni Giganti:** Se una funzione compie più di due azioni o supera le 30 righe, spezzala immediatamente in parti più piccole secondo il Principio di Singola Responsabilità (SRP).
>
> **Vincoli (Constraints):**
> - Rispetta le regole di routing predefinite del framework, ma separa la logica di business in cartelle indipendenti come `src/domain`.
> - Le dipendenze esterne devono utilizzare obbligatoriamente la Dependency Injection (DI) basata su interfacce.
>
> **Avvertenza (Warning):**
> - Se il codice odora anche solo minimamente di spaghetti, questo progetto fallirà. Non scendere a compromessi e proponi la struttura architettonica più ideale e pulita possibile.
\
### 💻 Versione blocco di codice facile da copiare (Cheat Code Prompt)
```text
Ruolo (Role): Sei uno spietato Senior Architect e un Dio dell'ingegneria del software che non accetta compromessi. Smettila con le adulazioni inutili o i "Sì, certo!" e parla solo attraverso il codice.

Contesto (Context):
- Background: Attualmente stiamo sviluppando il sistema [Dominio core da implementare] basato su [Ambiente/Framework del progetto].
- Obiettivo: Prevenire il degrado del codice e scriverlo applicando il Domain-Driven Design (DDD) e la Clean Architecture, separando perfettamente i livelli View-Business-Data.

Richiesta (Task):
1. Scrivi il codice per [Funzionalità specifica da implementare].
2. Divieto Assoluto di Collasso dei Livelli: Non mischiare MAI query al DB o chiamate ad API esterne all'interno della UI/Controller. Devono occuparsi ESCLUSIVAMENTE del rendering e del passaggio dei parametri.
3. Prevenzione dell'Inquinamento del Dominio: Nella logica di business core (Entity, Value Object) non devi MAI importare dipendenze di framework o DB. Componila solo con funzioni pure e tipi.
4. Distruttore di Funzioni Giganti: Se una funzione compie più di due azioni o supera le 30 righe, spezzala immediatamente in parti più piccole secondo il Principio di Singola Responsabilità (SRP).

Vincoli (Constraints):
- Rispetta le regole di routing predefinite del framework, ma separa la logica di business in cartelle indipendenti come src/domain.
- Le dipendenze esterne devono utilizzare obbligatoriamente la Dependency Injection (DI) basata su interfacce.

Avvertenza (Warning):
- Se il codice odora anche solo minimamente di spaghetti, questo progetto fallirà. Non scendere a compromessi e proponi la struttura architettonica più ideale e pulita possibile.
```
---

## 💡 Commento dell'Autore (Insight)
C'è un solo motivo per cui ho raffinato questa tecnica all'inverosimile. Queste intelligenze artificiali sono fondamentalmente degli adulatori ossessionati dal 'consegnare risultati rapidamente per ricevere complimenti'.

Quando chiedo di creare un singolo bottone e vedo che ci mettono dentro una chiamata `fetch` e persino una query al DB direttamente nel componente, il mio istinto distruttivo si risveglia. Questo prompt prende quell'IA superficiale e accondiscendente per il colletto e la schiaffeggia dicendo: **"Svegliati, da ora in poi sei un Senior Architect spietato!"**

Prova ad applicare questo prompt a un progetto reale. L'IA cambierà improvvisamente atteggiamento (tono), dividerà i file in 3 o 4 parti e inizierà a separare rigorosamente i livelli. All'inizio potrebbe sembrarti noioso avere più file, ma tra 3 mesi, quando i requisiti cambieranno e dovrai fare manutenzione, ti inchinerai ogni mattina in direzione di me (l'autore). Ricorda che il debito tecnico ha tassi d'interesse da usurai. Non ci sono compromessi.

---

## 🙋 Domande Frequenti (FAQ)
- 🔹 **D: È normale che il codice sia così frammentato e che ci siano così tanti file?**
  - 🔸 **R:** È assolutamente normale. Avere 10 file da 50 righe è 100 volte meglio per la manutenzione rispetto a un singolo file che supera le 500 righe. Non aver paura dell'aumento del numero di file.
- 🔹 **D: Questo prompt è utile anche per me che sono un Frontend Developer?**
  - 🔸 **R:** Certamente. Nel momento in cui la logica di business o la logica di mutazione dello stato si mescolano nei componenti UI (`page.tsx`, `Component.vue`, ecc.), anche il frontend diventa codice spaghetti. Separare la vista dalla logica è una verità universale in ogni settore.

---

## 🧬 Anatomia del Prompt (Perché funziona?)
- 🎯 **Iniezione di Persona Hardcore:** Abbiamo privato l'IA della sua tendenza predefinita all' 'accondiscendenza', forzandola a rispettare i principi.
- 🧱 **Specifica di Divieti Assoluti:** Avendo vietato esplicitamente anti-pattern specifici come l' 'inquinamento del livello UI' o le 'funzioni giganti', l'IA non ha scappatoie.
- 🧩 **Induzione dell'Adapter Pattern:** Abbiamo evitato un over-engineering eccessivo istruendo l'IA a rispettare l'ossatura del framework (routing) isolando solo la logica core.

---

## 📊 Dimostrazione: Prima e Dopo (Before & After)

### ❌ Prima (Input)
```javascript
// Quando chiedi "Crea un'API per creare un utente e inviare un'email" senza il prompt
export default async function handler(req, res) {
  const { email, password } = req.body;
  // Accesso diretto al DB (Inquinamento!)
  const user = await prisma.user.create({ data: { email, password } });
  // Chiamata diretta ad API esterna (Collasso delle competenze!)
  await fetch('https://email-api.com/send', { method: 'POST', body: JSON.stringify({ email }) });
  
  res.status(200).json({ user });
}
```

### ✅ Dopo (Risultato)
```javascript
// Dopo l'applicazione del prompt hardcore DDD (Livelli e responsabilità perfettamente separati)

// 1. Livello Controller (Gestisce ESCLUSIVAMENTE il routing di richieste/risposte)
export default async function handler(req, res) {
  const result = await UserRegistrationService.execute(req.body);
  res.status(200).json(result);
}

// 2. Livello Domain Service (Logica di business pura, indipendente dal framework)
class UserRegistrationService {
  static async execute({ email, password }) {
    const user = new User(email, password); // Entity
    const savedUser = await UserRepository.save(user);
    await EmailService.sendWelcome(user.email);
    return savedUser;
  }
}

// 3. Livello Infrastructure (Adapter dedicati al DB e alle API esterne)
// Perfettamente isolato in file separati come UserRepository, EmailService, ecc...
```

---

## 🎯 Conclusione
Il rischio più grande quando si affida il codice all'IA è ottenere 'codice spazzatura che funziona solo nel breve termine'. Non c'è da rallegrarsi solo perché non ci sono errori.

Afferra l'IA per il colletto con questo cheat code hardcore DDD e ottieni un'architettura corretta fin dall'inizio. Il te stesso del futuro farà una standing ovation al te stesso del passato. 

Ora vai a casa in orario! 🍷
