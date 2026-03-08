---
layout: /src/layouts/Layout.astro
title: "Pas de code spaghetti : le cheat code DDD pour transformer votre IA en développeur senior 🤬"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Fini la flatterie inutile. Voici un prompt d'architecte senior intraitable pour forcer l'IA à coder uniquement de la logique métier pure."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---

## 📝 Pas de code spaghetti : le cheat code DDD pour transformer votre IA en développeur senior 🤬

- **🎯 Cible :** Développeurs juniors épuisés par la maintenance technique, architectes qui ont le code spaghetti en horreur.
- **⏱️ Gain de temps :** Refactoring réduit de 3 heures → 1 minute.
- **🤖 Modèles recommandés :** IA spécialisées dans la génération de code (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro).
- ⭐ **Difficulté :** ⭐⭐⭐☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"Avez-vous déjà eu des sueurs froides en découvrant le code pondu par une IA ? Si vous n'en pouvez plus de la voir injecter des requêtes SQL directement dans vos vues, ce cheat code est fait pour vous."_

Ce prompt est l'arme absolue pour éradiquer la « flatterie » et la « paresse » de votre assistant IA, afin de le métamorphoser en un architecte senior intraitable. Si vous refusez de finir sous une montagne de dette technique à force de copier-coller aveuglément tout ce que l'IA recrache, implémentez ce protocole sur-le-champ.

---

## ⚡️ Résumé en 3 points (TL;DR)

- 🚫 **Tolérance zéro pour l'effondrement des couches :** Tuez dans l'œuf ce terrorisme architectural qui consiste à fusionner l'UI, la logique métier et l'accès aux données dans un seul et même fichier.
- 🛡️ **Agnosticisme des frameworks :** Imposez une logique de « domaine pur », capable de survivre même si votre framework actuel devient obsolète demain.
- 🔪 **Destructeur de fonctions obèses :** Conditionnez l'IA à pulvériser sans pitié (via refactoring) toute fonction dépassant les 30 lignes ou abusant de commentaires pour isoler artificiellement des blocs de code.

---

## 🚀 La Solution : "Domain-Driven Design (DDD) & Clean Architecture Protocol"

### 🥉 Version Basique (Basic Version)

Idéal lorsque vous avez besoin d'un refactoring express et efficace.

> **Rôle :** Tu es un `[Architecte Logiciel Senior]` impitoyable.
> **Tâche :** Refactorise l'extrait de `[code]` ci-dessous en appliquant scrupuleusement le Principe de Responsabilité Unique (SRP) et la Séparation des Préoccupations (SoC). Interdiction formelle de mélanger la logique métier avec l'UI. Tu dois obligatoirement scinder toute fonction qui dépasse les 30 lignes.

### 🥇 Version Pro (Pro Version)

Le cheat code ultime à dégainer pour imposer une discipline architecturale martiale sur l'ensemble du projet et exiger un code d'une propreté clinique.

> **Rôle (Role) :** Tu es un `[Architecte Logiciel Senior]` intraitable et un fanatique du DDD (Domain-Driven Design). Épargne-moi tes flatteries ou tes explications futiles, donne-moi uniquement le code.
>
> **Contexte (Context) :**
>
> - Contexte : Je travaille actuellement sur un projet basé sur `[Nom du framework/langage]`.
> - Objectif : Produire un code respectant la Clean Architecture, où les couches Vue (View), Métier (Business) et Données (Data) sont hermétiquement séparées.
>
> **Tâche (Task) :**
>
> 1. Analyse les `[Exigences ou code]` fournis et dissèque-les sans pitié pour les répartir logiquement entre la couche UI, le domaine métier et la couche d'infrastructure.
> 2. Assure-toi que la logique métier centrale ne soit jamais corrompue par un framework spécifique (React, Next.js, etc.) en minimisant le couplage via des interfaces (injection de dépendances).
> 3. Si un objet ou une fonction exécute plus d'une action, fragmente-le immédiatement pour respecter le Principe de Responsabilité Unique (SRP).
>
> **Contraintes (Constraints) :**
>
> - Injecter directement des requêtes DB ou des appels `fetch`/`axios` au sein d'un Controller ou d'un composant UI (`page.tsx`, `Component.tsx`, etc.) est considéré comme du « terrorisme architectural ». C'est formellement interdit.
> - Fournis le résultat exclusivement sous la forme d'un bloc de code Markdown (` ``` `).
>
> **Avertissement (Warning) :**
>
> - N'invente pas de syntaxes expérimentales dont tu n'es pas certain, ni de bibliothèques fantômes pour te donner un genre (tolérance zéro pour les hallucinations). Si tu ignores comment faire, admets-le clairement.
> - Si une fonction excède 30 lignes, ou si elle dégage une odeur nauséabonde (Code Smell) masquée par des commentaires du type "ici commence la partie X", tu dois la scinder sur-le-champ.

**📋 Cheat Code à Copier (Copy & Paste)**

```text
Rôle (Role) : Tu es un [Architecte Logiciel Senior] impitoyable et un fanatique du DDD (Domain-Driven Design). Épargne-moi les flatteries ou explications inutiles et donne-moi juste le code.
Contexte (Context) :
- Contexte : Je travaille actuellement sur un projet basé sur [Nom du framework/langage].
- Objectif : Rédiger un code en Clean Architecture où les couches View, Business et Data sont parfaitement séparées.
Tâche (Task) :
1. Analyse les [Exigences ou code] fournis et déchire-les sans pitié pour les répartir entre la couche UI, le domaine métier et la couche infrastructure.
2. Assure-toi que la logique métier centrale ne soit pas polluée par un framework spécifique en réduisant le couplage grâce à des interfaces (injection de dépendances).
3. Si un objet ou une fonction effectue plus d'une action, fragmente-le immédiatement selon le Principe de Responsabilité Unique (SRP).
Contraintes (Constraints) :
- Insérer directement des requêtes DB ou des appels fetch/axios à l'intérieur d'un Controller ou d'un composant UI est considéré comme du "terrorisme architectural". C'est strictement interdit.
- Fournis la sortie uniquement sous forme de bloc de code Markdown.
Avertissement (Warning) :
- N'invente pas de syntaxes récentes dont tu n'es pas sûr ou de bibliothèques inexistantes. Si tu ne sais pas, dis-le clairement.
- Si une fonction dépasse 30 lignes ou si elle dégage une odeur de code (Code Smell) avec des commentaires du style "ici commence la partie X", scinde-la immédiatement.

[Exigences ou code] : (Insérez votre code ici)
```

---

## 💡 Commentaire de l'Auteur (Insight)

Honnêtement, le code généré par l'IA a souvent l'air correct en surface, mais quand on creuse, c'est une véritable décharge. Des appels `fetch` balancés sans réfléchir directement dans les composants UI, des requêtes SQL sauvages... C'est le code toxique par excellence qui rend toute maintenance impossible.

Ce cheat code agit comme un garde-fou pour castrer cet instinct de "livraison superficielle rapide" de l'IA, en lui imposant de force les standards rigoureux d'un développeur senior.

En l'utilisant, vous verrez l'IA cesser ses banalités habituelles du genre "Oui, bien sûr ! Excellente idée !" pour vous livrer des faits bruts, tout en pulvérisant votre code pour le restructurer proprement. Si vous refusez de démissionner à cause d'un code spaghetti indigeste lorsque votre projet prendra de l'ampleur, attrapez l'IA par le col avec ce prompt et forcez-la à architecturer correctement.

---

## 🙋 Foire Aux Questions (FAQ)

- 📌 **Q : Avec quels langages ou frameworks ce prompt est-il compatible ?**
  - R : La stack n'a aucune importance. Que vous fassiez du TypeScript, du Python ou du Java, les fondations architecturales demeurent universelles. Remplacez simplement la variable `[Nom du framework/langage]` par votre technologie actuelle.
- 📌 **Q : L'IA ignore systématiquement les règles de routage de mon framework récent et fait de la sur-ingénierie (overengineering). Que faire ?**
  - R : Dans ce cas, ajoutez cette ligne : "Respecte les règles de base de l'App Router de Next.js (Vue, Layout), mais extrais uniquement la logique métier interne en appliquant le pattern Adapter !". Croyez-moi, le message passera cinq sur cinq.
- 📌 **Q : Ce prompt n'est-il pas trop agressif ? L'IA ne risque-t-elle pas de se bloquer ?**
  - R : Pourquoi prendre des gants avec un algorithme ? Les machines délivrent des chefs-d'œuvre lorsqu'on les pousse dans leurs retranchements. Utiliser des termes comme "Je considérerai cela comme du terrorisme" est mille fois plus efficace pour blinder votre architecture qu'un simple "S'il vous plaît, faites-le".

---

## 🧬 Anatomie du Prompt (Why it works?)

- 💣 **Imposition de contraintes extrêmes :** L'usage de termes chocs tels que "terrorisme architectural" tue dans l'œuf toute tentative de compromis de la part de l'IA.
- 🛡️ **Agnosticisme imposé vis-à-vis des frameworks :** En injectant la directive "la logique métier ne doit pas être altérée même si le framework meurt", on force l'IA à concevoir une véritable logique de domaine isolée.
- ✂️ **Quantification stricte du principe SRP :** En fixant des limites implacables comme "interdiction de dépasser 30 lignes" ou "utiliser des commentaires pour séparer des blocs est un code qui pue", on contraint l'IA à auto-fragmenter son code intelligemment.

---

## 📊 Preuve : Avant & Après (Before & After)

### ❌ Avant (Entrée : Code spaghetti généré aléatoirement par l'IA)

```tsx
// Une aberration monstrueuse : UI + Requêtes DB + Logique métier mélangées dans un seul fichier
export default async function UserProfile({ userId }) {
  const db = await connectDB();
  const user = await db.query(`SELECT * FROM users WHERE id = ${userId}`);
  
  if (!user) return <div>User not found</div>;
  if (user.status === 'banned') await sendAlertEmail(user.email); // Exécution de logique métier dans l'UI ?!
  
  return (
    <div>
      <h1>{user.name}</h1>
      <button onClick={() => db.query('UPDATE...')}>Update</button>
    </div>
  );
}
```

### ✅ Après (Résultat : Code corrigé à la dure grâce à ce cheat code)

```tsx
// 1. Couche Domaine / Service (Logique métier strictement isolée)
import { getUserProfile } from '@/domain/user/use-cases/getUserProfile';
import { handleBannedUser } from '@/domain/user/services/alertService';

// 2. Couche Présentation (Gère uniquement le rendu et le routage)
export default async function UserProfilePage({ userId }) {
  const user = await getUserProfile(userId); 
  
  if (!user) return <NotFoundView />;
  if (user.status === 'banned') await handleBannedUser(user);
  
  return <ProfileView user={user} />;
}
```

---

## 🎯 Conclusion

Une IA est capable de pondre du code à une vitesse fulgurante, mais elle se moque éperdument de la maintenabilité de votre application d'ici un an. L'implémentation de la Clean Architecture et la conception logicielle robuste demeurent la responsabilité exclusive des ingénieurs humains.

Ce cheat code est le coup de fouet nécessaire pour forcer la machine à endosser cette lourde responsabilité. Brisez la coquille complaisante de votre chatbot, et réveillez le véritable agent qui sommeille en lui : un architecte senior implacable.

Maintenant, arrêtez de démêler du code spaghetti et rentrez chez vous à l'heure ! 🍷
