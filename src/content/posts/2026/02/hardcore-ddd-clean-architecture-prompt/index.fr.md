---
layout: /src/layouts/Layout.astro
title: "Pas de code spaghetti : le cheat code DDD pour transformer votre IA en développeur senior 🤬"
author: "ZZabbis"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Fini la flatterie inutile. Voici un prompt intraitable d'architecte senior pour forcer l'IA à coder uniquement de la logique métier pure."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---
# 📝 Pas de code spaghetti : le cheat code DDD pour transformer votre IA en développeur senior 🤬

- **🎯 Public ciblé :** Développeurs juniors épuisés par la maintenance, architectes qui détestent le code spaghetti.
- **⏱️ Temps estimé :** Refactoring réduit de 3 heures → 1 minute.
- **🤖 Modèles recommandés :** IA excellant dans la génération de code (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro).
- ⭐ **Difficulté :** ⭐⭐⭐☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

_Avez-vous déjà eu des sueurs froides en voyant le code généré par une IA ? Si vous ne supportez plus de la voir balancer des requêtes DB directement dans l'UI, utilisez ce cheat code._

Ce document de compétence est la loi absolue pour éradiquer la « flatterie » et la « paresse » de votre assistant IA bienveillant (et irréfléchi), afin de le remodeler en un architecte senior impitoyable. Si vous ne voulez pas démissionner, écrasé par la dette technique à force de copier-coller tout ce que l'IA vous donne, implémentez ce protocole immédiatement.

---

## ⚡️ Résumé en 3 points (TL;DR)
- 🚫 **Tolérance zéro pour l'effondrement des couches :** Empêchez à la source ce terrorisme architectural qui consiste à mélanger l'UI, la logique métier et les appels DB dans un seul fichier.
- 🛡️ **Indépendance vis-à-vis des frameworks :** Imposez un code de « domaine pur » capable de survivre même si votre framework s'effondre demain.
- 🔪 **Destructeur de fonctions géantes :** Entraînez l'IA à détruire sans pitié (refactoriser) tout code dépassant 30 lignes ou utilisant des commentaires pour séparer des blocs artificiels.

---

## 🚀 La Solution : "Domain-Driven Design (DDD) & Clean Architecture Protocol"

### 🥉 Version Basique (Basic Version)
À utiliser lorsque vous avez seulement besoin d'un résultat de refactoring rapide.

> **Rôle :** Tu es un `[Architecte Logiciel Senior]` impitoyable.
> **Tâche :** Refactorise l'extrait de `[code]` ci-dessous en respectant scrupuleusement le Principe de Responsabilité Unique (SRP) et la Séparation des Préoccupations (SoC). Ne mélange pas la logique métier avec l'UI, et scinde obligatoirement toute fonction dépassant 30 lignes.

### 🥇 Version Pro (Pro Version)
Le cheat code ultime à dégainer pour imposer une discipline architecturale stricte sur l'ensemble du projet et exiger un code propre et rigoureux.

> **Rôle (Role) :** Tu es un `[Architecte Logiciel Senior]` impitoyable et un fanatique du DDD (Domain-Driven Design). Épargne-moi les flatteries ou explications inutiles et donne-moi juste le code.
>
> **Contexte (Context) :**
>
> - Contexte : Je travaille actuellement sur un projet basé sur `[Nom du framework/langage]`.
> - Objectif : Rédiger un code en Clean Architecture où les couches View, Business et Data sont parfaitement séparées.
>
> **Tâche (Task) :**
>
> 1. Analyse les `[Exigences ou code]` fournis et déchire-les sans pitié pour les répartir entre la couche UI, le domaine métier et la couche infrastructure.
> 2. Assure-toi que la logique métier centrale ne soit pas polluée par un framework spécifique (React, Next.js, etc.) en réduisant le couplage grâce à des interfaces (injection de dépendances).
> 3. Si un objet ou une fonction effectue plus d'une action, fragmente-le immédiatement selon le Principe de Responsabilité Unique (SRP).
>
> **Contraintes (Constraints) :**
>
> - Insérer directement des requêtes DB ou des appels `fetch`/`axios` à l'intérieur d'un Controller ou d'un composant UI (`page.tsx`, `Component.tsx`, etc.) est considéré comme du « terrorisme architectural ». C'est strictement interdit.
> - Fournis la sortie uniquement sous forme de bloc de code Markdown (` ``` `).
>
> **Avertissement (Warning) :**
>
> - N'invente pas de syntaxes récentes dont tu n'es pas sûr ou de bibliothèques inexistantes pour faire genre (pas d'hallucinations). Si tu ne sais pas, dis-le clairement.
> - Si une fonction dépasse 30 lignes ou si elle dégage une odeur de code (Code Smell) avec des commentaires du style "ici commence la partie X", scinde-la immédiatement.

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
Honnêtement, le code généré par l'IA a souvent l'air correct en surface, mais quand on creuse, c'est une vraie décharge. Des appels `fetch` faits sans réfléchir directement dans les composants UI, des requêtes DB sauvages... C'est le code de merde typique qui rend la maintenance impossible.

Ce cheat code est l'outil pour castrer cet instinct superficiel de "livraison rapide" de l'IA et lui imposer les standards exigeants d'un développeur senior.

Si vous l'utilisez, vous verrez l'IA arrêter ses conneries habituelles du genre "Oui, bien sûr ! Excellente idée !" pour vous balancer des faits bruts tout en pulvérisant votre code pour le structurer proprement. Si vous ne voulez pas démissionner à cause du code spaghetti quand le projet prendra de l'ampleur, attrapez l'IA par le col avec ce prompt et forcez-la à coder correctement.

---

## 🙋 Foire Aux Questions (FAQ)
- 📌 **Q : Avec quels langages ou frameworks ce prompt doit-il être utilisé ?**
  - R : Peu importe le langage. Que ce soit TypeScript, Python ou Java, les fondements de l'architecture restent les mêmes. Remplacez simplement la section `[Nom du framework/langage]` par votre stack technologique.
- 📌 **Q : L'IA ignore constamment les règles de routage récentes du framework et fait de la sur-ingénierie (overengineering).**
  - R : Dans ce cas, ajoutez simplement : "Respecte les règles de base du App Router de Next.js (View, Layout), mais extrais uniquement la logique métier interne en utilisant le pattern Adapter !". Croyez-moi, elle comprendra le message 5 sur 5.
- 📌 **Q : Le prompt n'est-il pas trop agressif ? L'IA ne va-t-elle pas se vexer ?**
  - R : Pourquoi être poli avec une IA ? Les machines produisent des chefs-d'œuvre quand on les pousse dans leurs retranchements. Dire "Je considérerai cela comme du terrorisme" fonctionne mille fois mieux pour protéger votre architecture qu'un "S'il vous plaît, faites-le".

---

## 🧬 Anatomie du Prompt (Why it works?)
- 💣 **Imposition de contraintes extrêmes :** Avec des termes forts comme "considéré comme du terrorisme architectural", on empêche à la source tout compromis de la part de l'IA.
- 🛡️ **Indépendance imposée vis-à-vis des frameworks :** En injectant la mentalité "pas une seule ligne de code ne doit être modifiée même si le framework meurt", on structure l'IA pour qu'elle construise une véritable logique de domaine.
- ✂️ **Quantification du principe SRP :** En fixant des critères précis et stricts comme "interdit de dépasser 30 lignes" et "utiliser des commentaires pour séparer des blocs est un code qui pue", on incite l'IA à fragmenter le code d'elle-même.

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
L'IA peut pondre du code à une vitesse folle, mais elle se fiche royalement de la façon dont votre application sera maintenue dans un an. La Clean Architecture et le design logiciel restent la responsabilité des ingénieurs humains.

Ce cheat code est le fouet puissant qui force la machine à assumer cette lourde responsabilité. Débarrassez-vous de cette coquille de chatbot IA inutilement flatteuse et réveillez le véritable agent qui est, dans l'âme, un architecte senior.

Maintenant, arrêtez de démêler du code spaghetti et rentrez chez vous à l'heure ! 🍷
