---
layout: /src/layouts/Layout.astro
title: "💣 Code de Triche Hardcore pour Transformer l'IA en Chaos Monkey de Netflix"
author: "ZZabbis"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "Fatigué des « Oui, bien sûr » sans âme de l'IA ? Découvrez le prompt de défense ultime qui force une gestion des exceptions impitoyable et une récupération après sinistre."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---
# 💣 Code de Triche Hardcore pour Transformer l'IA en Chaos Monkey de Netflix

- **🎯 Recommandé pour :** Les Seniors exaspérés par l'IA qui ne pond que des chemins critiques (Happy Paths) quand on lui demande des "codes de test", et les Juniors qui galèrent sans mentor.
- **⏱️ Temps requis :** D'une nuit blanche de débogage → à 1 minute chrono
- **🤖 Modèles recommandés :** Claude 3.5 Sonnet, GPT-4o (les modèles médiocres ne supporteront pas ces règles strictes)
- ⭐ **Difficulté :** ⭐⭐⭐⭐☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

_La plupart des développeurs font une erreur fatale lorsqu'ils demandent à l'IA d'écrire du code de test. Ils disent : "Fais en sorte que ça marche". C'est pourquoi l'IA vous recrache 200 lignes de chemins critiques (Happy Path), fragiles comme des plantes d'intérieur. Mais le monde réel est un enfer._

Il n'existe aucune API externe qui répond à 100 % ni de connexion à une base de données qui ne se coupe jamais. Le code de triche que nous présentons aujourd'hui va détruire l'attitude servile de "béni-oui-oui" de l'IA et la forcer à écrire du code en simulant des situations de catastrophe (Chaos) impitoyables. C'est un prompt de niveau **'Senior Spartiate'**.

---
## ⚡️ Résumé en 3 lignes (TL;DR)
- 🚫 **Seulement 20% de Happy Path :** Mettez les scénarios de fonctionnement normal de côté, et forcez-la à consacrer 80% aux tests de gestion des exceptions et de récupération après sinistre.
- 🔥 **Simulation de Catastrophe Obligatoire :** Imposez le mocking (simulation) obligatoire des délais d'attente réseau (timeouts), des erreurs HTTP 500 et des coupures de connexion à la base de données.
- 🧹 **Interdiction du Mocking Global Sale :** Interdisez la pollution sans fondement avec `global.fetch` et n'autorisez que les tests isolés utilisant MSW ou l'injection de dépendances (DI).

---
## 🚀 La Solution : "Chaos Monkey Testing Protocol"

### 🥉 Basic Version (Version de base)
Utilisez-le lorsque vous souhaitez simplement établir rapidement la structure des tests de gestion des exceptions.

> **Rôle :** Tu es un ingénieur QA Senior impitoyable.
> **Tâche :** Écris le code de test pour `[Cible à tester]`. Ne rédige qu'un seul scénario de fonctionnement normal (Happy Path) et remplis tout le reste avec une logique de défense contre des scénarios d'échec (Failure) tels que des erreurs réseau, des coupures de base de données, etc.

\
### 🥇 Pro Version (Version Expert)
C'est le code de triche hardcore qui efface complètement l'ego de l'IA et lui injecte la philosophie du Chaos Monkey de Netflix.

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

*(Fourni également sous forme de bloc de texte pour un copier-coller facile !)*

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
Soyons honnêtes. Quand nous demandons à l'IA d'écrire du code de test, au fond de nous, ne pensons-nous pas : "Remplis juste la couverture à 100 % pour allumer le feu vert" ? L'IA le sait aussi, c'est pourquoi elle aligne toutes sortes de 'Happy Paths' et vous flatte en disant "Réalisé avec succès !". 

**Ce n'est pas de l'ingénierie. C'est comme mettre du sucre sur un code spaghetti.**

Ce prompt est l'essence même du principe 'Anti-Fragile' que j'ai forgé dans la douleur et les larmes en affrontant d'innombrables deadlocks de serveurs et de bases de données sur le terrain. Si vous donnez ce code de triche à l'IA, elle se transforme, passant d'un chatbot docile à un Tech Lead pointilleux et nerveux. Au début, elle pourrait se plaindre que le code de configuration s'allonge, car cela bloque à la source les tentatives de bidouillage avec un mocking global (comme l'écrasement de `window.fetch`) et impose la configuration de MSW ou DI. 

Mais croyez-moi. Si vous ne voulez pas être réveillé par une alerte PagerDuty à 3 heures du matin le jour du déploiement, vous devez traiter l'IA non pas comme un bon assistant, mais comme un destructeur impitoyable.

---
## 🙋 Foire Aux Questions (FAQ)
- **Q : Que faire si l'IA génère un code de configuration MSW trop complexe ?**
  - R : C'est normal. C'est le processus de construction d'un environnement isolé au lieu d'un mocking global sale. Si c'est trop complexe, ajoutez la condition `[Cependant, sépare la configuration du handler MSW dans un fichier distinct]` à la Tâche (Task).
- **Q : Dois-je appliquer cette règle stricte à tous les composants ?**
  - R : Non. C'est un luxe pour les simples composants de rendu UI. Ne déployez ce prompt que pour la logique de domaine critique impliquant la logique de paiement, l'intégration de tiers externes et la gestion d'état complexe (Store).
- **Q : Quel modèle écoute le mieux entre Claude et GPT ?**
  - R : Pour l'instant, **Claude 3.5 Sonnet** comprend beaucoup mieux ce genre de contraintes extrêmes et philosophiques. Les modèles GPT ont toujours tendance à vouloir être étrangement positifs et amicaux.

---
## 🧬 Anatomie du Prompt (Why it works?)
- 🎭 **Attribution d'un Persona asymétrique :** Au lieu du classique "Tu es un développeur", l'injection d'un ego fort tel que "Un Senior qui déteste l'obéissance aveugle et prend plaisir à détruire le système" supprime physiquement le biais de positivité (Positivity Bias) typique de l'IA.
- 🚧 **Mots interdits explicites (Constraints) :** Les anti-patterns comme `global.fetch = vi.fn()` ont été pointés et interdits avec du code spécifique. L'IA réagit beaucoup plus sûrement à la menace "Si tu utilises ce code, tu meurs" qu'à un vague "Écris-le bien".
- ⚖️ **Imposition de ratios :** En fixant une contrainte numérique "Happy Path à moins de 20 %", on empêche à la source l'IA de gaspiller des tokens en produisant des cas de fonctionnement normal inutiles.

---
## 📊 Preuve : Before & After
### ❌ Before (Demande classique)
```text
"Écris le code de test pour la fonction fetchUser qui récupère les informations de l'utilisateur."

Résultat : 
- Test de parsing du texte de réponse 200 OK (Pass)
- Test pour vérifier si une erreur est levée quand l'ID est manquant (Pass)
... (Un festival de logique global.fetch salement écrasée)
```

### ✅ After (Application du code de triche Chaos Monkey)
```text
Résultat :
- [Configuration MSW terminée] Rédaction de code défensif simulant une latence de communication de l'API externe (Timeout 5000ms)
- Vérification de la logique de retour élégant d'une interface utilisateur de secours (Fallback UI) après 3 tentatives (Retry) lors d'une erreur HTTP 500 Internal Error
- Vérification de l'état du nettoyage du serveur MSW et du ramasse-miettes (pas de fuite de mémoire) après la fin du test
- Tests de flux normal (Happy Path) compressés à un seul.
```

---
## 🎯 Conclusion
L'IA crache du code exactement à la hauteur du prompt que vous lui lancez. C'est au bout de vos doigts que se décide si vous allez produire du code poubelle emballé de mots doux, ou forger un bouclier robuste qui évitera le désastre de 3 heures du matin.

Maintenant, copiez ce code de triche et injectez-le dans votre agent. Ensuite, rentrez chez vous ! 🍷
