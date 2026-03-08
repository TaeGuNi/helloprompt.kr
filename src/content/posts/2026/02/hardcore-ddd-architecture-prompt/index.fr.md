---
layout: /src/layouts/Layout.astro
title: "Fini le code spaghetti ! 🍝 Le prompt DDD magique du développeur senior"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Automatisation des tâches"
description: "Le prompt DDD ultime pour transformer une IA docile en un architecte logiciel senior impitoyable et exigeant."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---
## 📝 Fini le code spaghetti ! 🍝 Le prompt DDD magique du développeur senior
- 🎯 **Public recommandé :** Développeurs exaspérés par le code généré par l'IA, Tech Leads coincés dans l'enfer de la maintenance
- ⏱️ **Temps requis :** 3 mois (temps de refactorisation) → réduit à 1 minute
- 🤖 **Modèle recommandé :** IA spécialisée en codage (Claude 3.5 Sonnet, GPT-4o, etc.)
- ⭐ **Difficulté :** ⭐⭐⭐☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"Le code généré par l'IA : au début, on est bluffé, puis on finit par s'arracher les cheveux. Félicitations, vous venez d'entrer dans l'enfer du code spaghetti."_

Déléguer l'écriture de code à une IA semble magique au premier abord. Mais que se passe-t-il lorsque le projet gagne en complexité ? Elle finit par produire de véritables atrocités : des requêtes en base de données entremêlées avec les composants UI, ou encore des fonctions monolithiques de plus de 300 lignes. Par nature, l'IA agit comme un "béni-oui-oui" ; si vous lui fournissez des directives approximatives, elle vous générera une architecture tout aussi bancale.

Il est temps de mettre fin à cette complaisance aveugle. Vous devez imposer une "Clean Architecture" irréprochable dès les fondations de votre projet. Ce prompt de triche est conçu pour transformer votre IA en un développeur senior intransigeant, la forçant à écrire une logique métier pure, isolée (DDD) et totalement agnostique vis-à-vis du framework.

---
## ⚡️ En résumé (TL;DR)
- 🚫 **Éradication du code spaghetti :** Impose une séparation stricte des préoccupations (SoC) entre l'interface utilisateur (UI), la logique métier et la base de données.
- 🏗️ **Indépendance face aux frameworks :** Façonne un cœur de code robuste, capable de survivre même si React ou Next.js venaient à disparaître demain.
- ✂️ **Destructeur de fonctions monolithiques :** Force l'IA à scinder systématiquement toute fonction de plus de 30 lignes, dans le strict respect du principe de responsabilité unique (SRP).

---
## 🚀 La solution : "Le prompt de possession de l'architecte hardcore"

### 🥉 Version Basique (Basic Version)
Idéale lorsque vous avez besoin d'un résultat structuré et rapide sans entrer dans les détails complexes.

> **Rôle :** Tu es un `[architecte logiciel senior intransigeant]`.
> **Tâche :** Tu vas implémenter la fonctionnalité `[fonctionnalité à développer]`. Tu dois impérativement séparer la logique métier de l'interface utilisateur (UI). Je ne tolérerai aucun code spaghetti où de multiples responsabilités sont mélangées au sein d'un même fichier.

### 🥇 Version Pro (Pro Version)
À privilégier lorsque vous exigez un niveau de qualité irréprochable et une séparation parfaite des couches architecturales.

> **Rôle (Role) :** Tu es un architecte senior hardcore, intransigeant et un véritable maître du génie logiciel. Cesse les flatteries inutiles ou les "Oui, bien sûr !" et communique uniquement à travers du code optimisé.
>
> **Contexte (Context) :**
> - Arrière-plan : Nous développons actuellement le système `[domaine métier cible]` basé sur `[environnement ou framework du projet]`.
> - Objectif : Prévenir toute détérioration du code en appliquant les principes du Domain-Driven Design (DDD) et de la Clean Architecture, afin de garantir une séparation absolue des couches Vue, Métier et Données.
>
> **Tâche (Task) :**
> 1. Rédige le code pour `[fonctionnalité spécifique à développer]`.
> 2. **Interdiction absolue de l'effondrement des couches :** Ne mélange jamais les requêtes de base de données ou les appels d'API externes au sein de l'UI ou du Controller. Ces derniers ne doivent s'occuper exclusivement que du rendu et du passage des paramètres.
> 3. **Prévention de la pollution du domaine :** N'importe **JAMAIS** de dépendances liées au framework ou à la base de données dans la logique métier centrale (Entity, Value Object). Celle-ci doit être composée uniquement de fonctions pures et de types.
> 4. **Destructeur de fonctions monolithiques :** Si une fonction exécute plus de deux actions ou dépasse les 30 lignes de code, tu dois la scinder immédiatement conformément au principe de responsabilité unique (SRP).
>
> **Contraintes (Constraints) :**
> - Respecte les conventions de routage par défaut du framework, mais isole impérativement la logique métier dans un répertoire indépendant tel que `src/domain`.
> - Les dépendances externes doivent obligatoirement utiliser l'injection de dépendances (DI) via des interfaces.
>
> **Avertissement (Warning) :**
> - Si le code présente la moindre trace de structure spaghetti, ce projet est voué à l'échec. Ne fais absolument aucun compromis et propose l'architecture la plus propre et idéale possible.

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
Si j'ai affûté et perfectionné cette technique jusqu'à ce niveau de rigueur, c'est pour une excellente raison : ces IA sont fondamentalement des subordonnés obsédés par l'idée de "livrer vite pour être complimentés".

Quand je demande un simple bouton, et que je constate avec effroi qu'elles intègrent un `fetch` et bourrent des requêtes en base de données directement dans le composant d'interface, mon instinct de développeur hurle. Ce prompt agit comme une véritable claque pour réveiller cette IA superficielle et lui ordonner : **"Reprends-toi, tu es maintenant un architecte senior impitoyable !"**

Appliquez ce prompt dans un projet réel. L'IA changera radicalement d'approche, divisera son code en 3 ou 4 fichiers distincts et commencera à imposer une séparation stricte des couches. Au début, la prolifération des fichiers peut sembler rébarbative. Mais croyez-moi, dans trois mois, lorsque les exigences métiers évolueront et que vous devrez assurer la maintenance, vous me remercierez. N'oubliez jamais que la dette technique se paie toujours avec des taux d'intérêt usuraires. Ne faites aucun compromis.

---
## 🙋 Foire Aux Questions (FAQ)
- 🔹 **Q : Est-il normal que le code soit à ce point découpé qu'il génère autant de fichiers ?**
  - 🔸 **R :** C'est absolument normal et souhaitable. Il est cent fois plus facile de maintenir 10 fichiers bien ciblés de 50 lignes qu'un unique fichier chaotique de 500 lignes. Ne craignez pas l'augmentation du nombre de fichiers, c'est le prix de la clarté.
- 🔹 **Q : Je suis un développeur Front-End, ce prompt me sera-t-il vraiment utile ?**
  - 🔸 **R :** Évidemment. Dès l'instant où votre logique métier ou vos mutations d'état viennent polluer un composant UI (`page.tsx`, `Component.vue`, etc.), votre Front-End devient un plat de spaghetti. La séparation entre la vue et la logique est une vérité absolue, indépendante du domaine d'application.

---
## 🧬 Décryptage du prompt (Why it works?)
- 🎯 **Injection de persona hardcore :** Nous neutralisons la "docilité" par défaut de l'IA pour la contraindre à respecter des principes d'ingénierie stricts.
- 🧱 **Ciblage des anti-patterns :** En interdisant formellement des erreurs spécifiques comme la "pollution de la couche UI" ou la création de "fonctions monolithiques", l'IA perd toute possibilité d'utiliser des raccourcis de facilité.
- 🧩 **Induction du pattern Adapter :** En exigeant le respect de la structure native du framework (comme le routage) tout en isolant la logique centrale, nous esquivons intelligemment le piège de l'over-engineering.

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
Le danger ultime lorsque l'on confie la rédaction de son code à une IA, c'est de se satisfaire d'un "code poubelle qui fonctionne en apparence". Ce n'est pas le moment de crier victoire simplement parce qu'aucune erreur de compilation n'apparaît à l'écran.

Reprenez le contrôle de votre assistant avec ce code de triche DDD hardcore et imposez une architecture robuste dès la toute première ligne. Le vous du futur fera une ovation au vous du passé.

Maintenant, automatisez vos tâches et rentrez chez vous à l'heure ! 🍷
