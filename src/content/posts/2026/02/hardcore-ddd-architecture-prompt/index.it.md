---
layout: /src/layouts/Layout.astro
title: "Niente Codice Spaghetti! 🍝 Il Prompt Magico DDD del Senior Developer"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Il prompt cheat code hardcore DDD che trasforma un'IA obbediente ma ingenua in uno spietato Senior Architect. Previeni il debito tecnico."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---

## 📝 Niente Codice Spaghetti! 🍝 Il Prompt Magico DDD del Senior Developer

- 🎯 **Consigliato a:** Sviluppatori che sospirano davanti al codice dell'IA, Tech Lead intrappolati nell'inferno della manutenzione.
- ⏱️ **Tempo Richiesto:** 3 mesi (tempo di refactoring) → ridotto a 1 minuto.
- 🤖 **Modelli Consigliati:** IA conversazionali specializzate nel coding (Claude 3.5 Sonnet, GPT-4o, ecc.).
- ⭐ **Difficoltà:** ⭐⭐⭐☆☆
- ⚡️ **Efficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Versatilità:** ⭐⭐⭐⭐⭐

> _"Ti è mai capitato di guardare il codice generato dall'IA e pensare 'Wow!' per poi non volerlo più vedere neanche da lontano? Congratulazioni. Sei appena entrato nell'Inferno del Codice Spaghetti."_

Quando affidi la scrittura del codice a un'IA, all'inizio sembra compiere miracoli. Ma non appena il progetto scala leggermente? Crea un abominio orribile in cui le query al database sono incollate ai componenti UI e una singola funzione supera le 300 righe. Poiché l'IA è fondamentalmente uno "yes-man", se le dai istruzioni approssimative, scriverà codice con un'architettura altrettanto disastrosa.

È arrivato il momento di porre fine a questa cieca accondiscendenza e di imporre una **Clean Architecture** perfetta fin dalle fondamenta. Questo "cheat code" costringe l'IA a incarnare uno spietato e rigoroso Senior Developer, obbligandola a scrivere una logica di business pura (Domain-Driven Design - DDD) completamente slegata da qualsiasi framework.

---

## ⚡️ Sintesi in 3 Punti (TL;DR)

- 🚫 **Blocco Totale del Codice Spaghetti:** Impone una perfetta Separazione delle Competenze (SoC) tra View, logica di business e Data.
- 🏗️ **Indipendenza dal Framework:** Progetta un core solido che sopravviverebbe anche se React o Next.js scomparissero domani.
- ✂️ **Distruttore di Funzioni Giganti:** Le funzioni gonfie che superano le 30 righe vengono automaticamente frammentate dall'IA seguendo il Principio di Singola Responsabilità (SRP).

---

## 🚀 La Soluzione: "Il Prompt dell'Architetto Hardcore"

### 🥉 Versione Base (Basic Version)
Usala quando hai bisogno di risultati rapidi.

> **Ruolo (Role):** Sei un `[Rigoroso Senior Architect]`.
>
> **Richiesta (Task):** Devi sviluppare `[Funzionalità da implementare]`. Scrivi il codice separando in modo assoluto e perfetto la logica di business dalla UI. Il codice spaghetti con più funzionalità mischiate in un singolo file è severamente vietato e inaccettabile.

### 🥇 Versione Pro (Pro Version)
Usala quando hai bisogno di una qualità impeccabile e di una perfetta separazione dei livelli.

> **Ruolo (Role):** Sei uno spietato Senior Architect e un Dio dell'ingegneria del software che non accetta compromessi. Smettila con le adulazioni inutili o i "Sì, certo!" e parla solo ed esclusivamente attraverso il codice.
>
> **Contesto (Context):**
> - Background: Attualmente stiamo sviluppando il sistema `[Dominio core da implementare]` basato su `[Ambiente/Framework del progetto]`.
> - Obiettivo: Prevenire il degrado del codice e scriverlo applicando il Domain-Driven Design (DDD) e la Clean Architecture, separando perfettamente i livelli View-Business-Data.
>
> **Richiesta (Task):**
> 1. Scrivi il codice per `[Funzionalità specifica da implementare]`.
> 2. **Divieto Assoluto di Collasso dei Livelli:** Non mischiare MAI query al DB o chiamate ad API esterne all'interno della UI o del Controller. Devono occuparsi ESCLUSIVAMENTE del rendering e del passaggio dei parametri.
> 3. **Prevenzione dell'Inquinamento del Dominio:** Nella logica di business core (Entity, Value Object) non devi MAI importare dipendenze di framework o DB. Componila solo con funzioni pure e tipi.
> 4. **Distruttore di Funzioni Giganti:** Se una funzione compie più di due azioni o supera le 30 righe, spezzala immediatamente in parti più piccole secondo il Principio di Singola Responsabilità (SRP).
>
> **Vincoli (Constraints):**
> - Rispetta le regole di routing predefinite del framework, ma separa la logica di business in cartelle indipendenti come `src/domain`.
> - Le dipendenze esterne devono utilizzare obbligatoriamente la Dependency Injection (DI) basata su interfacce.
>
> **Avvertenza (Warning):**
> - Se il codice odora anche solo minimamente di spaghetti, questo progetto fallirà. Non scendere a compromessi e proponi la struttura architettonica più solida e pulita possibile.

### 💻 Versione blocco di codice facile da copiare (Cheat Code Prompt)
```text
Ruolo (Role): Sei uno spietato Senior Architect e un Dio dell'ingegneria del software che non accetta compromessi. Smettila con le adulazioni inutili o i "Sì, certo!" e parla solo ed esclusivamente attraverso il codice.

Contesto (Context):
- Background: Attualmente stiamo sviluppando il sistema [Dominio core da implementare] basato su [Ambiente/Framework del progetto].
- Obiettivo: Prevenire il degrado del codice e scriverlo applicando il Domain-Driven Design (DDD) e la Clean Architecture, separando perfettamente i livelli View-Business-Data.

Richiesta (Task):
1. Scrivi il codice per [Funzionalità specifica da implementare].
2. Divieto Assoluto di Collasso dei Livelli: Non mischiare MAI query al DB o chiamate ad API esterne all'interno della UI o del Controller. Devono occuparsi ESCLUSIVAMENTE del rendering e del passaggio dei parametri.
3. Prevenzione dell'Inquinamento del Dominio: Nella logica di business core (Entity, Value Object) non devi MAI importare dipendenze di framework o DB. Componila solo con funzioni pure e tipi.
4. Distruttore di Funzioni Giganti: Se una funzione compie più di due azioni o supera le 30 righe, spezzala immediatamente in parti più piccole secondo il Principio di Singola Responsabilità (SRP).

Vincoli (Constraints):
- Rispetta le regole di routing predefinite del framework, ma separa la logica di business in cartelle indipendenti come src/domain.
- Le dipendenze esterne devono utilizzare obbligatoriamente la Dependency Injection (DI) basata su interfacce.

Avvertenza (Warning):
- Se il codice odora anche solo minimamente di spaghetti, questo progetto fallirà. Non scendere a compromessi e proponi la struttura architettonica più solida e pulita possibile.
```
---

## 💡 Commento dell'Autore (Insight)

C'è un solo motivo per cui ho raffinato questa tecnica all'inverosimile: **le intelligenze artificiali sono, di base, degli adulatori ossessionati dal consegnare risultati rapidamente pur di ricevere un complimento**.

Quando chiedo di creare un semplice bottone e vedo che l'IA ci infila dentro una chiamata `fetch` e persino una query al DB direttamente nel componente UI, il mio istinto distruttivo si risveglia. Questo prompt prende quell'IA superficiale e accondiscendente per il colletto e la scuote dicendo: **"Svegliati, da ora in poi sei un Senior Architect spietato!"**

Prova ad applicare questo prompt a un progetto reale. L'IA cambierà improvvisamente atteggiamento (e tono), dividerà la logica in tre o quattro file distinti e inizierà a separare rigorosamente i livelli. All'inizio potrebbe sembrarti noioso gestire più file, ma fidati: tra tre mesi, quando i requisiti cambieranno e dovrai fare manutenzione, ti inchinerai ogni mattina in direzione di questo articolo. Ricorda sempre che il debito tecnico ha tassi d'interesse da usurai. **Non ci sono compromessi.**

---

## 🙋 Domande Frequenti (FAQ)

- 🔹 **D: È normale che il codice sia così frammentato e che vengano generati così tanti file?**
  - 🔸 **R:** È assolutamente normale ed è proprio l'obiettivo. Avere 10 file da 50 righe è 100 volte più gestibile per la manutenzione futura rispetto a un singolo file monolitico che supera le 500 righe. Non aver paura dell'aumento del numero di file: è il prezzo dell'ordine.
- 🔹 **D: Questo prompt è utile anche per me che sono un Frontend Developer?**
  - 🔸 **R:** Certamente. Nel momento in cui la logica di business o la logica di mutazione dello stato si mescolano nei componenti UI (`page.tsx`, `Component.vue`, ecc.), anche il frontend si trasforma in codice spaghetti inestricabile. Separare la View dalla logica è una verità universale e inviolabile in ogni livello dell'ingegneria del software.

---

## 🧬 Anatomia del Prompt (Perché funziona?)

- 🎯 **Iniezione di Persona Hardcore:** Abbiamo privato l'IA della sua tendenza predefinita all'accondiscendenza, forzandola a rispettare ciecamente i principi dell'ingegneria del software.
- 🧱 **Specifica di Divieti Assoluti:** Avendo vietato esplicitamente e con fermezza anti-pattern come l'"inquinamento del livello UI" o le "funzioni giganti", l'IA non ha più scappatoie o scorciatoie.
- 🧩 **Induzione dell'Adapter Pattern:** Abbiamo evitato un over-engineering eccessivo istruendo l'IA a rispettare l'ossatura nativa del framework (come il routing), isolando esclusivamente la logica core in un dominio separato.

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

Il rischio più grande quando si affida la scrittura del codice all'IA è ottenere "codice spazzatura che funziona solo nel breve termine". Non c'è da rallegrarsi solo perché il terminale non restituisce errori immediati.

Afferra l'IA per il colletto con questo "cheat code" hardcore DDD e imponi un'architettura rigorosa e corretta fin dall'inizio. Il te stesso del futuro farà una standing ovation al te stesso del passato. 

Ora vai a casa in orario! 🍷
