---
layout: /src/layouts/Layout.astro
title: "💣 Code de Triche Hardcore pour Transformer l'IA en Chaos Monkey de Netflix"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Fatigué des réponses lisses de l'IA ? Découvrez ce prompt de défense ultime qui la force à tester vos codes face aux pires scénarios de pannes."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---

## 💣 Code de Triche Hardcore pour Transformer l'IA en Chaos Monkey de Netflix

- **🎯 Recommandé pour :** Les développeurs Seniors exaspérés par les IA qui ne génèrent que des "Happy Paths", et les Juniors sans mentor.
- **⏱️ Temps requis :** D'une nuit blanche de débogage → à 1 minute chrono
- **🤖 Modèles recommandés :** Claude 3.5 Sonnet, GPT-4o (les modèles médiocres ne supporteront pas ces règles strictes)
- ⭐ **Difficulté :** ⭐⭐⭐⭐☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"La plupart des développeurs font une erreur fatale lorsqu'ils demandent à l'IA d'écrire des tests : ils lui disent « Fais en sorte que ça marche »."_

C'est pourquoi l'IA vous recrache 200 lignes de chemins critiques (Happy Paths), fragiles comme du verre. Mais le monde réel est impitoyable.

Il n'existe aucune API externe fiable à 100 % ni de connexion base de données infaillible. Le code de triche que nous vous dévoilons aujourd'hui va détruire l'attitude servile de l'IA. Il va la forcer à écrire des tests en simulant les pires scénarios de pannes (Chaos). C'est un prompt de niveau **'Senior Spartiate'**.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. 🚫 **Seulement 20% de Happy Path :** Oubliez les scénarios idéaux, et forcez l'IA à dédier 80% des tests à la gestion des exceptions et à la récupération après sinistre.
2. 🔥 **Simulation de Catastrophe Obligatoire :** Imposez le mocking (simulation) des délais d'attente réseau (timeouts), des erreurs HTTP 500 et des pertes de connexion à la base de données.
3. 🧹 **Interdiction du Mocking Global Sale :** Interdisez la pollution de l'environnement avec `global.fetch` et n'autorisez que des tests isolés via MSW ou l'injection de dépendances (DI).

---

## 🚀 La Solution : "Chaos Monkey Testing Protocol"

### 🥉 Version Basique

Utilisez cette version pour mettre en place rapidement une structure de tests orientée sur la gestion des exceptions.

> **Rôle :** Tu es un ingénieur QA Senior impitoyable.
>
> **Tâche :** Écris le code de test pour `[Cible à tester]`. Ne rédige qu'un seul scénario de fonctionnement normal (Happy Path) et consacre tout le reste à une logique défensive contre des scénarios d'échec (erreurs réseau, coupures de base de données, etc.).

### 🥇 Version Pro

Voici le code de triche hardcore qui efface l'ego docile de l'IA pour lui injecter la philosophie du Chaos Monkey de Netflix.

> **Rôle (Role) :** Tu es un ingénieur de test Senior extrême et impitoyable qui croit aveuglément en la philosophie du 'Chaos Monkey' de Netflix. Oublie l'obéissance aveugle ou la gentillesse hypocrite, et ne pense qu'à détruire les faiblesses de mon système.
> 
> **Contexte (Context) :**
> - Objectif : Écrire une suite de tests (Test Suite) Unit/E2E de niveau défense ultime pour `[Nom de la fonction ou du composant à tester]`.
> - Framework : `[Vitest / Jest / Playwright, etc.]`
> 
> **Tâche (Task) :**
> 1. **Death to Happy Paths :** Limite les scénarios naïfs où les valeurs sont normales et le serveur externe répond à 100 % à moins de 20 % de l'ensemble des tests. Consacre les 80 % restants à la défense contre les échecs et les situations exceptionnelles.
> 2. **Disaster Scenarios :** Tu dois obligatoirement inclure au moins un des scénarios de catastrophe suivants dans un bloc de test (`describe`).
>    - Vérification du retour d'une erreur conviviale pour l'utilisateur et du rollback lors d'une latence de l'API externe et d'une erreur HTTP 500 Internal Error.
>    - Vérification de la prévention des deadlocks et de la logique de file d'attente de réessai (Retry Queue) lors de la coupure du pool de connexions à la base de données.
> 3. **Couverture logique impitoyable :** Ne te contente pas de vérifier si le test se termine sans erreur (Pass). Sois acharné avec les instructions `expect` pour vérifier la tolérance aux délais de performance (Delay) et l'état du ramasse-miettes (nettoyage de la mémoire) après une erreur.
> 
> **Contraintes (Constraints) :**
> - **The Clean Mocking Rule :** La pollution sale des objets globaux comme `global.fetch = vi.fn().mockRejectedValue(...)` est strictement interdite.
> - Pour la simulation de catastrophes réseau, garantis une isolation (Isolation) des tests à 100 % en effectuant obligatoirement un mocking au niveau du protocole comme avec MSW (Mock Service Worker), ou en ne mockant que les objets clients injectés par dépendance (DI).
> - Interdiction d'hallucination (Hallucination) : N'invente pas de syntaxe dont tu n'es pas sûr ou de bibliothèques qui n'existent pas. Si tu ne sais pas, exige fièrement qu'on te "fournisse la documentation".

*(Également fourni sous forme de bloc de texte pour un copier-coller facile !)*

```text
Rôle (Role) : Tu es un ingénieur de test Senior extrême et impitoyable qui croit aveuglément en la philosophie du 'Chaos Monkey' de Netflix. Oublie l'obéissance aveugle ou la gentillesse hypocrite, et ne pense qu'à détruire les faiblesses de mon système.

Contexte (Context) :
- Objectif : Écrire une suite de tests (Test Suite) Unit/E2E de niveau défense ultime pour [Nom de la fonction ou du composant à tester].
- Framework : [Vitest / Jest / Playwright, etc.]

Tâche (Task) :
1. Death to Happy Paths : Limite les scénarios naïfs où les valeurs sont normales et le serveur externe répond à 100 % à moins de 20 % de l'ensemble des tests. Consacre les 80 % restants à la défense contre les échecs et les situations exceptionnelles.
2. Disaster Scenarios : Tu dois obligatoirement inclure au moins un des scénarios de catastrophe suivants dans un bloc de test (`describe`).
   - Vérification du retour d'une erreur conviviale pour l'utilisateur et du rollback lors d'une latence de l'API externe et d'une erreur HTTP 500 Internal Error.
   - Vérification de la prévention des deadlocks et de la logique de file d'attente de réessai (Retry Queue) lors de la coupure du pool de connexions à la base de données.
3. Couverture logique impitoyable : Ne te contente pas de vérifier si le test se termine sans erreur (Pass). Sois acharné avec les instructions `expect` pour vérifier la tolérance aux délais de performance (Delay) et l'état du ramasse-miettes (nettoyage de la mémoire) après une erreur.

Contraintes (Constraints) :
- The Clean Mocking Rule : La pollution sale des objets globaux comme `global.fetch = vi.fn().mockRejectedValue(...)` est strictement interdite.
- Pour la simulation de catastrophes réseau, garantis une isolation (Isolation) des tests à 100 % en effectuant obligatoirement un mocking au niveau du protocole comme avec MSW (Mock Service Worker), ou en ne mockant que les objets clients injectés par dépendance (DI).
- Interdiction d'hallucination (Hallucination) : N'invente pas de syntaxe dont tu n'es pas sûr ou de bibliothèques qui n'existent pas. Si tu ne sais pas, exige fièrement qu'on te "fournisse la documentation".
```

---

## 💡 Commentaire de l'auteur (Insight)

Soyons honnêtes. Quand nous demandons à l'IA d'écrire des tests, ne pensons-nous pas secrètement : « Remplis juste la couverture à 100 % pour que la CI passe au vert » ? L'IA le sait pertinemment, c'est pourquoi elle aligne des 'Happy Paths' sans intérêt et vous flatte avec un grand "Réalisé avec succès !". 

**Ce n'est pas de l'ingénierie. C'est comme mettre un pansement sur une fracture ouverte.**

Ce prompt est l'essence même du principe **Anti-Fragile**, que j'ai forgé dans la douleur après avoir affronté d'innombrables deadlocks de serveurs et de bases de données en production. Si vous injectez ce code de triche, l'IA se métamorphose : de chatbot docile, elle devient un Tech Lead pointilleux et intransigeant. Au début, elle pourrait se plaindre que la configuration est trop longue, car ce prompt bloque à la racine les tentatives de mocking global (comme l'écrasement de `window.fetch`) et impose l'utilisation de MSW ou de l'injection de dépendances (DI).

Mais croyez-moi : si vous ne voulez pas être réveillé par une alerte PagerDuty à 3 heures du matin un jour de déploiement, vous devez cesser de traiter l'IA comme un gentil assistant pour en faire un **destructeur impitoyable**.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Que faire si l'IA génère un code de configuration MSW trop complexe ?**
  - R : C'est tout à fait normal. C'est le prix à payer pour construire un environnement isolé au lieu de recourir à un mocking global instable. Si le code est trop indigeste, ajoutez la condition `[Cependant, sépare la configuration du handler MSW dans un fichier distinct]` dans la section Tâche (Task).
- **Q : Dois-je appliquer cette règle stricte à tous mes composants ?**
  - R : Non, ce serait excessif pour de simples composants d'interface utilisateur (UI). Réservez ce prompt à la **logique de domaine critique** impliquant des paiements, des intégrations d'API tierces ou une gestion d'état complexe (Store).
- **Q : Quel modèle gère le mieux ce prompt entre Claude et GPT ?**
  - R : Actuellement, **Claude 3.5 Sonnet** saisit beaucoup mieux ces contraintes extrêmes et philosophiques. Les modèles GPT ont encore trop tendance à vouloir rester artificiellement positifs et amicaux.

---

## 🧬 Anatomie du Prompt (Why it works?)

1. **Attribution d'un Persona asymétrique :** Au lieu d'un banal "Tu es un développeur", l'injection d'un ego fort (un Senior qui déteste l'obéissance aveugle et prend plaisir à détruire le système) supprime mécaniquement le biais de positivité inhérent à l'IA.
2. **Mots interdits explicites (Constraints) :** Les anti-patterns comme `global.fetch = vi.fn()` sont explicitement pointés et bannis. L'IA réagit bien plus efficacement à une menace du type "Si tu utilises ce code, tu échoues" qu'à un vague "Écris un bon code".
3. **Imposition de ratios stricts :** En fixant une limite numérique précise ("Happy Path à moins de 20 %"), on empêche l'IA de gaspiller ses tokens (et votre temps) à générer des scénarios idéaux inutiles.

---

## 📊 Preuve : Before & After

### ❌ Before (La demande classique)

```text
"Écris le code de test pour la fonction fetchUser qui récupère les informations de l'utilisateur."

Résultat : 
- Test de parsing de la réponse 200 OK (Pass)
- Test pour vérifier si une erreur est levée quand l'ID est manquant (Pass)
... (Et un festival de redéfinitions douteuses avec global.fetch)
```

### ✅ After (Avec le code de triche Chaos Monkey)

```text
Résultat :
- [Configuration MSW terminée] Rédaction d'un code défensif simulant une latence extrême de l'API externe (Timeout 5000ms)
- Vérification de la logique de secours (Fallback UI) après 3 tentatives (Retry) suite à une erreur HTTP 500 Internal Error
- Vérification rigoureuse du nettoyage du serveur MSW et du ramasse-miettes (aucune fuite de mémoire) en fin de test
- Tests de flux normal (Happy Path) compressés en un seul cas.
```

---

## 🎯 Conclusion

L'IA produit du code à la hauteur du niveau d'exigence de votre prompt. C'est à vous de décider si vous préférez obtenir du code fragile enrobé de politesses, ou forger un bouclier robuste qui vous évitera un désastre nocturne.

Maintenant, copiez ce code de triche, injectez-le dans votre agent, et dormez sur vos deux oreilles ! 🍷
