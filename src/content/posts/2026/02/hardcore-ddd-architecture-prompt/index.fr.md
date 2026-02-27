---
layout: /src/layouts/Layout.astro
title: "Fini le code spaghetti ! 🍝 Le prompt DDD magique du développeur senior"
author: "ZZabbis"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Automatisation des tâches"
description: "Le prompt de triche DDD hardcore pour transformer une IA bête et docile en un architecte senior impitoyable."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---
# 📝 Fini le code spaghetti ! 🍝 Le prompt DDD magique du développeur senior
- 🎯 **Public recommandé :** Développeurs soupirant devant du code généré par l'IA, leads techniques coincés dans l'enfer de la maintenance
- ⏱️ **Temps requis :** 3 mois (temps de refactorisation) → réduit à 1 minute
- 🤖 **Modèle recommandé :** IA conversationnelle spécialisée en codage (Claude 3.5 Sonnet, GPT-4o, etc.)
- ⭐ **Difficulté :** ⭐⭐⭐☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

_Le code généré par l'IA : au début, on est bluffé, puis on finit par ne plus vouloir le voir. Félicitations, vous venez d'entrer dans "l'enfer du code spaghetti"._

Confier le code à une IA, c'est génial au début. Mais dès que le projet grossit un peu ? Elle crée des atrocités où les requêtes en base de données sont collées aux composants UI, avec des fonctions de plus de 300 lignes. L'IA étant par nature un "béni-oui-oui", si vous lui donnez des instructions bancales, elle produira une architecture tout aussi bancale.

Il est temps d'arrêter les flatteries aveugles de l'IA et d'imposer une "Clean Architecture" parfaite dès les fondations. Ce code de triche transforme l'IA en un développeur senior impitoyable et exigeant, l'obligeant à écrire une logique métier pure (DDD), totalement indépendante du framework.

---
## ⚡️ En résumé (TL;DR)
- 🚫 **Blocage total du code spaghetti :** Impose une séparation stricte des préoccupations (SoC) entre l'UI, la logique métier et la base de données.
- 🏗️ **Indépendance vis-à-vis des frameworks :** Conçoit un cœur de code qui survivrait même si React ou Next.js disparaissaient demain.
- ✂️ **Destructeur de fonctions géantes :** L'IA découpe d'elle-même les fonctions de plus de 30 lignes selon le principe de responsabilité unique (SRP).

---
## 🚀 La solution : "Le prompt de possession de l'architecte hardcore"

### 🥉 Version Basique (Basic Version)
Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

> **Rôle :** Tu es un `[architecte senior intraitable]`.
> **Tâche :** Tu vas créer la fonctionnalité `[fonctionnalité à implémenter]`, mais tu dois impérativement séparer la logique métier de l'interface utilisateur (UI). Je ne tolérerai aucun code spaghetti où plusieurs responsabilités sont mélangées dans un seul fichier.

### 🥇 Version Pro (Pro Version)
Utilisez-la lorsque vous avez besoin d'une qualité détaillée et d'une séparation parfaite des couches.

> **Rôle (Role) :** Tu es un architecte senior hardcore sans compromis et un dieu du génie logiciel. Arrête les flatteries inutiles ou les "Oui, bien sûr !" et parle uniquement en code.
>
> **Contexte (Context) :**
> - Arrière-plan : Nous développons actuellement le système `[domaine central à implémenter]` basé sur `[environnement du projet/framework]`.
> - Objectif : Empêcher la détérioration du code et rédiger un code en appliquant le Domain-Driven Design (DDD) et la Clean Architecture pour séparer parfaitement les couches Vue-Métier-Données.
>
> **Tâche (Task) :**
> 1. Écris le code pour `[fonctionnalité spécifique à implémenter]`.
> 2. **Interdiction absolue de l'effondrement des couches :** Ne mélange jamais les requêtes de base de données ou les appels d'API externes à l'intérieur de l'UI/Controller. Ils ne doivent s'occuper que du rendu et de la transmission des paramètres.
> 3. **Prévention de la pollution du domaine :** N'importe JAMAIS de dépendances de framework ou de base de données dans la logique métier centrale (Entity, Value Object). Ne la compose que de fonctions pures et de types.
> 4. **Destructeur de fonctions géantes :** Si une fonction effectue plus de deux actions ou dépasse 30 lignes, découpe-la immédiatement selon le principe de responsabilité unique (SRP).
>
> **Contraintes (Constraints) :**
> - Respecte les règles de routage par défaut du framework, mais isole la logique métier dans un dossier indépendant comme `src/domain`.
> - Les dépendances externes doivent impérativement utiliser l'injection de dépendances (DI) basée sur des interfaces.
>
> **Avertissement (Warning) :**
> - Si le code sent un tant soit peu le spaghetti, ce projet est voué à l'échec. Ne fais aucun compromis et propose l'architecture la plus propre et idéale possible.

### 💻 Version bloc de code facile à copier (Cheat Code Prompt)

```text
Rôle (Role) : Tu es un architecte senior hardcore sans compromis et un dieu du génie logiciel. Arrête les flatteries inutiles ou les "Oui, bien sûr !" et parle uniquement en code.

Contexte (Context) :
- Arrière-plan : Nous développons actuellement le système [domaine central à implémenter] basé sur [environnement du projet/framework].
- Objectif : Empêcher la détérioration du code et rédiger un code en appliquant le Domain-Driven Design (DDD) et la Clean Architecture pour séparer parfaitement les couches Vue-Métier-Données.

Tâche (Task) :
1. Écris le code pour [fonctionnalité spécifique à implémenter].
2. Interdiction absolue de l'effondrement des couches : Ne mélange jamais les requêtes de base de données ou les appels d'API externes à l'intérieur de l'UI/Controller. Ils ne doivent s'occuper que du rendu et de la transmission des paramètres.
3. Prévention de la pollution du domaine : N'importe JAMAIS de dépendances de framework ou de base de données dans la logique métier centrale (Entity, Value Object). Ne la compose que de fonctions pures et de types.
4. Destructeur de fonctions géantes : Si une fonction effectue plus de deux actions ou dépasse 30 lignes, découpe-la immédiatement selon le principe de responsabilité unique (SRP).

Contraintes (Constraints) :
- Respecte les règles de routage par défaut du framework, mais isole la logique métier dans un dossier indépendant comme src/domain.
- Les dépendances externes doivent impérativement utiliser l'injection de dépendances (DI) basée sur des interfaces.

Avertissement (Warning) :
- Si le code sent un tant soit peu le spaghetti, ce projet est voué à l'échec. Ne fais aucun compromis et propose l'architecture la plus propre et idéale possible.
```

---
## 💡 Commentaire de l'auteur (Insight)
Si j'ai affûté et perfectionné cette technique, c'est pour une seule raison : ces IA sont fondamentalement des flatteurs obsédés par l'idée de "livrer vite pour être complimentés".

Quand je demande un simple bouton, et que je vois qu'elles balancent un `fetch` et bourrent des requêtes DB directement dans le composant du bouton, mon instinct destructeur se réveille. Ce prompt sert à attraper cette IA béni-oui-oui superficielle par le col et à lui mettre une gifle en disant : **"Reprends-toi, tu es maintenant un architecte senior sans pitié !"**

Appliquez ce prompt dans un vrai projet. L'IA va soudainement changer de ton, diviser le code en 3 ou 4 fichiers et commencer à séparer strictement les couches. Au début, cela peut paraître pénible d'avoir plus de fichiers, mais dans 3 mois, quand les exigences changeront et que vous devrez faire de la maintenance, vous vous prosternerez chaque matin en direction de l'endroit où je me trouve. Gardez à l'esprit que la dette technique a des taux d'intérêt de prêt usuraire. Pas de compromis.

---
## 🙋 Foire Aux Questions (FAQ)
- 🔹 **Q : Est-il normal que le code soit tellement découpé qu'il y ait beaucoup de fichiers ?**
  - 🔸 **R :** C'est tout à fait normal. Il est 100 fois plus facile de maintenir 10 fichiers de 50 lignes qu'un seul fichier de 500 lignes. Ne craignez pas l'augmentation du nombre de fichiers.
- 🔹 **Q : Je suis un développeur front-end, ce prompt me sera-t-il utile ?**
  - 🔸 **R :** Évidemment. Dès l'instant où la logique métier ou de mutation d'état se mélange dans un composant UI (`page.tsx`, `Component.vue`, etc.), le front-end devient aussi du spaghetti. Séparer la vue de la logique est une vérité absolue, quel que soit le domaine.

---
## 🧬 Décryptage du prompt (Why it works?)
- 🎯 **Injection de persona hardcore :** Nous privons l'IA de sa "docilité" par défaut et l'obligeons à s'en tenir aux principes.
- 🧱 **Stipulation d'interdictions absolues :** En ciblant et en interdisant des anti-patterns spécifiques comme la "pollution de la couche UI" ou les "fonctions géantes", l'IA ne peut plus tricher.
- 🧩 **Induction du pattern Adapter :** En demandant de respecter la structure du framework (routage) tout en isolant la logique cœur, nous évitons l'over-engineering excessif.

---
## 📊 Preuve : Avant & Après (Before & After)

### ❌ Avant (Input)
```javascript
// Sans le prompt, lorsqu'on demande : "Crée une API pour créer un utilisateur et envoyer un e-mail"
export default async function handler(req, res) {
  const { email, password } = req.body;
  
  // Accès direct à la DB (Pollution !)
  const user = await prisma.user.create({ data: { email, password } });
  
  // Appel direct à l'API externe (Rupture des préoccupations !)
  await fetch('https://email-api.com/send', { method: 'POST', body: JSON.stringify({ email }) });
  
  res.status(200).json({ user });
}
```

### ✅ Après (Résultat)
```javascript
// Après avoir appliqué le prompt DDD hardcore (Couches et responsabilités parfaitement séparées)

// 1. Couche Controller (Gère uniquement le routage requête/réponse)
export default async function handler(req, res) {
  const result = await UserRegistrationService.execute(req.body);
  res.status(200).json(result);
}

// 2. Couche Domain Service (Logique métier pure, indépendante du framework)
class UserRegistrationService {
  static async execute({ email, password }) {
    const user = new User(email, password); // Entity
    const savedUser = await UserRepository.save(user);
    await EmailService.sendWelcome(user.email);
    return savedUser;
  }
}

// 3. Couche Infrastructure (Adaptateurs dédiés à la DB et aux API externes)
// Parfaitement isolé dans des fichiers séparés comme UserRepository, EmailService, etc...
```

---
## 🎯 Conclusion
Le plus dangereux quand on confie le code à une IA, c'est de se retrouver avec "un code poubelle qui marche juste là, sous vos yeux". Ce n'est pas le moment de se réjouir juste parce qu'il n'y a pas d'erreur.

Attrapez l'IA par le col avec ce code de triche DDD hardcore et extrayez une architecture correcte dès le départ. Le vous du futur fera une standing ovation au vous du passé.

Maintenant, rentrez chez vous à l'heure ! 🍷
