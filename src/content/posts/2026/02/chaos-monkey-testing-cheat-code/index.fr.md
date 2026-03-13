---
layout: /src/layouts/Layout.astro
title: "💣 Cheat Sheet de tests hardcore : Transformez votre IA en Chaos Monkey de Netflix"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Automation du travail"
description: "Fatigué du code 'Happy Path' sans âme ? Voici le prompt ultime injectant la philosophie Chaos Monkey pour forcer une gestion d'erreurs et une résilience impitoyables."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---

## 📝 💣 Cheat Sheet de tests hardcore : Transformez votre IA en Chaos Monkey de Netflix

- **🎯 Recommandé pour :** Les seniors lassés des IA qui ne génèrent que le flux normal (Happy Path), et les développeurs juniors qui luttent sans mentor.
- **⏱️ Temps gagné :** Passez d'une nuit blanche de débogage à 1 minute de génération.
- **🤖 Performance maximale :** Claude 3.5 Sonnet, GPT-4o (les modèles moins performants ne supporteront pas la rigueur de ces règles).

- ⭐ **Difficulté :** ⭐⭐⭐⭐☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilisation :** ⭐⭐⭐⭐⭐

> _"L'erreur fatale de la plupart des développeurs lorsqu'ils délèguent des tests à l'IA est de dire naïvement : 'Écris-moi un code qui marche'. C'est le meilleur moyen de provoquer un désastre à 3 heures du matin le jour du déploiement."_

Qu'attendons-nous d'une IA lorsque nous lui demandons du code de test ? Une gestion parfaite des cas limites (edge cases), une gestion d'erreurs minutieuse et un bouclier solide qui empêche le système de s'effondrer, quelle que soit l'exception. Mais la réalité est un enfer. Avec une simple commande "Écris-moi les tests", l'IA génère plus de 200 lignes de flux normal (**Happy Path**), comme si le code vivait dans une serre. Elle suppose une utopie où toutes les API répondent en 200 OK en une seconde, où la base de données ne se déconnecte jamais et où les fuites de mémoire n'existent pas.

Dès que ce code de "béni-oui-oui sans âme" est déployé en production, le cauchemar commence. Dans le monde réel, les API externes à 100% de disponibilité et les connexions DB éternelles n'existent pas. Des **Timeouts réseau** dus à un pic de trafic soudain, des erreurs 500 Internal Server Error de services tiers ou des pannes temporaires d'infrastructure cloud surviennent inévitablement. Dans ces moments-là, le joli code de test généré par l'IA ne vaut plus rien. Vous finissez par être réveillé par une alerte PagerDuty un vendredi soir ou un samedi à 3 heures du matin, à déboguer en pleurant un code devenu chaotique. Ce n'est pas de l'automation, c'est implanter une bombe à retardement dans votre système.

En intégrant l'IA dans leur flux de travail, beaucoup de développeurs tombent dans l'illusion : "L'intelligence artificielle va s'occuper de tous les tests ennuyeux pour moi". Mais en ouvrant le résultat, c'est la stupéfaction. Le code écrit par l'IA semble fonctionner en apparence, mais cache des défauts fatals. Il n'y a aucune réflexion sur les **cas limites (Edge Cases)**, et la gestion des exceptions se résume souvent à une simple ligne `console.log(error)`. C'est comme peindre une façade magnifique sur un bâtiment sans structure. À la moindre intempérie — un comportement utilisateur imprévu ou un léger retard d'un serveur externe — tout le système s'écroule comme un château de cartes.

Le plus terrible est que ce "faux succès" affiche un voyant 100% 🟢 (Green) dans les outils de couverture de tests. Les rapports SonarQube ou Jest n'envoient aucune alerte. La direction et les chefs d'équipe croient que la défense est imprenable, alors que la bombe est attachée dans le dos des développeurs. Le jour d'un événement à fort trafic, si l'API d'un service de paiement tarde seulement 3 secondes, le pool de connexions à la base de données s'épuise, entraînant une panne totale du service. C'est alors que nous réalisons : "On a fait trop confiance au flux normal généré par l'IA".

Pour briser ce cercle vicieux, il faut renverser radicalement la manière de rédiger les prompts. Il ne faut pas laisser de liberté à l'IA. Il faut lui imposer des **contraintes explicites (Constraints)** et des scénarios de catastrophe extrêmes. À l'image du framework **'Chaos Monkey'** de Netflix, qui teste la résilience du système en arrêtant aléatoirement des instances de serveurs en production, nous devons insuffler à l'IA un but destructeur : briser son propre code. Nous avons besoin de commandes fermes : "Le cas normal n'est pas important. Fais échouer cette fonction par tous les moyens et prouve comment le système s'en remet élégamment."

Ce **prompt cheat sheet de tests hardcore** a été conçu en analysant de nombreux rapports d'incidents (Post-Mortem) et en intégrant les scénarios de reprise après sinistre (Disaster Recovery) sur lesquels planchent les meilleurs ingénieurs SRE (Site Reliability Engineering) de la Silicon Valley. Il est conçu pour forcer le mocking de toutes les situations malveillantes qui poussent un développeur au bord du gouffre : timeouts, fuites de mémoire, boucles infinies, deadlocks. Avec cette incantation magique, retirez le masque de l'IA complaisante et transformez votre système en une architecture véritablement **anti-fragile**.

---

## 📊 Preuve : Un résultat percutant (Before & After)

### ❌ Before (La souffrance habituelle)

Résultat d'un prompt classique ("Écris le code de test pour la fonction fetchUser qui récupère les infos utilisateur"). On obtient des données fictives sans âme et des validations de réponses 200 OK inutiles.

```text
Résultat :
- Test du parsing de la réponse 200 OK (Pass)
- Test du renvoi d'erreur si l'ID est absent (Pass)
... (Une suite de logiques global.fetch surchargées proprement dégueulasses)
```

### ✅ After (La transformation parfaite)

Après avoir appliqué le cheat sheet Chaos Monkey hardcore, l'IA génère des scénarios de catastrophe impitoyables testant les limites du système dans un environnement parfaitement isolé.

```text
Résultat :
- [Setup MSW terminé] Écriture du code de défense simulant un délai de communication API externe (Timeout 5000ms)
- Validation de la logique de Retry (3 tentatives) en cas d'erreur HTTP 500, suivie du renvoi d'une UI de repli (Fallback) élégante
- Vérification du nettoyage du serveur MSW après le test et de l'état du Garbage Collector (absence de fuite de mémoire)
- Condensation du flux normal (Happy Path) en un seul test minimaliste.
```

---

## ⚡️ Résumé en 3 points (TL;DR)

1. **20% de Happy Path seulement :** Minimisez les scénarios de fonctionnement normal inutiles et concentrez 80% des tests sur la gestion des exceptions et la validation de la reprise après sinistre.
2. **Simulation de catastrophe forcée :** Imposez le mocking obligatoire des pannes critiques : timeouts réseau, erreurs HTTP 500, rupture de connexion DB, etc.
3. **Interdiction du Mocking Global sale :** Bloquez radicalement la surcharge de `global.fetch` qui pollue l'environnement de test, et n'autorisez que des tests parfaitement isolés utilisant MSW ou l'injection de dépendances (DI).

---

## 🚀 Comment les vrais experts rédigent leurs prompts

Voici le prompt finalisé après des dizaines d'itérations. Copiez le prompt ci-dessous et remplissez les parties entre `[crochets]` selon votre situation pour une mise en application immédiate.

### 🥉 Basic Version (Version de base)

Utilisez ceci pour poser rapidement les bases des tests de gestion d'erreurs.

> **Rôle (Role) :** Tu es un ingénieur QA senior impitoyable.
>
> **Tâche (Task) :** Écris le code de test pour `[Cible du test]`. Ne crée qu'un seul scénario de fonctionnement normal, et consacre tout le reste à des logiques de défense contre les scénarios d'échec (Failure) : erreurs réseau, déconnexion DB, etc.

### 🥇 Pro Version (Version Expert)

Le cheat sheet hardcore qui efface l'ego de l'IA et injecte la philosophie Chaos Monkey de Netflix.

> **Rôle (Role) :** Tu es un ingénieur de test senior radical et impitoyable, adepte de la philosophie 'Chaos Monkey' de Netflix. Oublie l'obéissance aveugle ou la gentillesse artificielle ; ton seul but est de détruire les faiblesses de mon système.
> 
> **Contexte (Context) :**
> - Objectif : Écrire une suite de tests (Test Suite) Unit/E2E de niveau "Défense Spatiale" pour `[Nom de la fonction ou du composant à tester]`.
> - Framework : `[Vitest / Jest / Playwright, etc.]`
> 
> **Tâche (Task) :**
> 1. **Death to Happy Paths :** Limite les scénarios naïfs où les valeurs sont correctes et le serveur répond à 100% à moins de 20% de l'ensemble des tests. Consacre les 80% restants à la défense contre les échecs et les situations exceptionnelles.
> 2. **Disaster Scenarios :** Inclus obligatoirement au moins un des scénarios de catastrophe suivants dans un bloc de test (`describe`) :
>    - Latence API externe et erreur HTTP 500 : validation du retour d'erreur convivial pour l'utilisateur et du rollback.
>    - Rupture du pool de connexions DB : validation de la prévention des deadlocks et de la logique de file d'attente (Retry Queue).
> 3. **Couverture logique impitoyable :** Ne te contente pas de voir si le test passe (Pass) sans erreur. Utilise des clauses `expect` pour traquer impitoyablement les seuils de tolérance de délai (Delay) et l'état du garbage collection (nettoyage mémoire) après l'erreur.
> 
> **Contraintes (Constraints) :**
> - **The Clean Mocking Rule :** L'altération d'objets globaux comme `global.fetch = vi.fn().mockRejectedValue(...)` est strictement interdite.
> - La simulation de catastrophe réseau doit impérativement utiliser un mocking au niveau protocole comme MSW (Mock Service Worker) ou le mocking d'objets clients via l'injection de dépendances (DI) pour garantir une isolation (Isolation) des tests à 100%.
> - Pas d'hallucinations : N'invente pas de syntaxe dont tu n'es pas sûr ou de bibliothèques inexistantes. Si tu ne sais pas, demande-moi "le document de référence".

---

## 💡 Commentaire de l'auteur (Insight & How to use)

Soyons honnêtes. Quand nous demandons à l'IA d'écrire des tests, n'espérons-nous pas secrètement qu'elle "remplisse juste la couverture à 100% pour que tout soit au vert" ? L'IA le sait parfaitement. C'est pourquoi elle aligne des **Happy Paths** insignifiants et renvoie un résultat hypocrite : "J'ai écrit la suite de tests avec succès !".

Mais tout développeur ayant un peu d'expérience sait que **ce n'est pas de l'ingénierie. C'est comme mettre beaucoup de sucre sur un code spaghettis tout emmêlé pour faire illusion.** Le véritable but des tests n'est pas de collectionner des coches vertes, mais d'observer à l'avance comment le système s'effondre dans des conditions imprévisibles et de construire une logique de défense robuste.

Ce prompt est l'essence même du principe **'Anti-Fragile'**, affiné par mes propres expériences de pannes serveurs, de timeouts et de deadlocks DB sanglants. Dès que vous entrez ce cheat sheet, le chatbot habituellement poli se transforme en un **Tech Lead** extrêmement pointilleux, nerveux et impitoyable. Il pointera du doigt vos structures de code lâches et tentera de les détruire.

Notez particulièrement le **contrôle des contraintes (Constraint Control)**. Beaucoup de développeurs ignorent l'importance de l'isolation des tests et commettent l'atrocité de surcharger sauvagement `window.fetch` ou `axios` au niveau global. Cette méthode pollue irrémédiablement l'environnement de test et propage des effets de bord inexpliqués à d'autres cas de test. Ce prompt bloque ces raccourcis dès le niveau architectural.

Examinez attentivement **"The Clean Mocking Rule"** dans le prompt. J'ai barré la route la plus facile et la plus paresseuse que l'IA choisit instinctivement (la pollution des objets globaux). À la place, j'impose un setup élégant via des protocoles comme **MSW** ou des patterns DI. Certes, au début, vous aurez l'impression que le code de configuration généré par l'IA est beaucoup plus long et complexe. Vous serez tenté de vous dire : "Ah, je ne peux pas juste faire une fonction mock vite fait ?".

Mais souvenez-vous : ce processus de configuration complexe est le seul chemin vers une véritable modularité et une architecture testable. Si votre cible est un test E2E basé sur `[Framework: Playwright]`, ce prompt ira au-delà du simple clic sur un bouton : il appliquera malicieusement un bridage réseau (Network Throttling) au moment du clic pour vérifier si le spinner de chargement s'affiche correctement.

Si l'IA génère trop de scénarios d'erreurs, vous pouvez la contrôler en spécifiant un **scope concret** dans la variable `[Nom de la fonction ou du composant à tester]`. Par exemple, au lieu de mettre simplement `PaymentService`, mettez `Logique de rollback sur timeout de transaction de PaymentService`. L'IA se concentrera alors uniquement sur le pire scénario possible de cette logique métier, poussant la densité des tests à son paroxysme. C'est votre seul bouclier pour protéger votre équilibre vie pro-vie perso contre les alertes PagerDuty nocturnes. Traitez l'IA non pas comme une secrétaire obéissante, mais comme un destructeur sans pitié pour valider votre système jusqu'à ses fondations.

Cette approche de test destructeur apporte sur le long terme un effet secondaire (Side Effect) incroyable : l'élévation du niveau de qualité de code de toute l'équipe. Au début, vous pourriez être déconcerté par la quantité de logiques de défense générées par l'IA. "Est-ce qu'on doit vraiment gérer les exceptions aussi minutieusement ?" vous demanderez-vous. Mais en refactorisant votre code pour répondre à ces critères stricts, vous verrez disparaître les dépendances inutiles et votre code évoluera vers une architecture propre respectant scrupuleusement le principe de responsabilité unique (SRP). N'ayez pas peur des erreurs. Les vulnérabilités trouvées par l'IA sont comme des médailles prouvant que vous avez évité une panne de service potentielle. Si vous instaurez ce "Cheat Sheet Chaos Monkey" comme convention de test de base, la stabilité de votre projet atteindra en un an un niveau inégalé. Ce prompt n'est pas qu'une suite de commandes, c'est l'outil parfait qui marque la différence philosophique entre un junior et un senior.

---

## 🙋 Foire aux questions (FAQ)

- **Q : L'IA génère un code de configuration MSW trop complexe à appliquer. Comment ajuster ?**
  - R : C'est tout à fait normal. C'est une étape indispensable pour construire un environnement parfaitement isolé au lieu d'un mocking global instable. Si la configuration est trop longue, ajoutez cette condition dans la section 'Tâche (Task)' : `[Cependant, sépare complètement la logique de setup du handler et du serveur MSW dans un fichier distinct sous le répertoire src/mocks/ pour la modulariser]`. Vous garderez ainsi votre fichier de test principal propre.
- **Q : Dois-je appliquer ces règles hardcore à tous les composants ou fonctions utilitaires ?**
  - R : Absolument pas. C'est un "overkill" manifeste pour des composants "Dumb" chargés du rendu UI simple ou des logiques utilitaires constituées de fonctions pures (Pure Functions). Déployez ce cheat sheet de manière stratégique et ciblée uniquement sur la **logique métier critique (Core Business Domain)** : transactions de paiement, intégrations d'API tierces, gestion d'états globaux complexes (Store).
- **Q : Quel modèle entre Claude 3.5 Sonnet et GPT-4o suit le mieux ces contraintes ?**
  - R : Pour imposer un jeu de rôle aussi extrême et une philosophie architecturale stricte (ex: interdiction de pollution globale), **Claude 3.5 Sonnet** offre actuellement des performances bien supérieures. Les modèles GPT ont intrinsèquement un biais de positivité (Positivity Bias) qui les pousse à donner un "résultat rapide" et positif à l'utilisateur, ce qui les conduit parfois à utiliser des astuces pour contourner les contraintes.

---

## 🧬 Anatomie du prompt (Pourquoi ça marche ?)

1. **La magie du persona asymétrique :** Nous n'avons pas juste demandé un "développeur senior", mais injecté un ego extrême : "un Chaos Monkey qui déteste l'obéissance aveugle et aime détruire les systèmes". Ce seul mot réprime fortement le biais de positivité et les hallucinations au niveau architectural, forçant le modèle à se concentrer uniquement sur la 'recherche de défauts'.
2. **La précision des interdits explicites (Constraints) :** Nous avons bloqué les pires anti-patterns comme `global.fetch = vi.fn()` en les nommant précisément au niveau du code. L'IA réagit de manière beaucoup plus sensible et précise à une contrainte nette ("Si tu utilises cette ligne, c'est un échec immédiat") qu'à une demande floue ("Écris du bon code").
3. **L'imposition du ratio 80/20 :** En fixant une limite numérique claire ("Happy Path à moins de 20%"), nous empêchons l'IA de gaspiller des tokens et votre temps précieux en générant une infinité de cas de fonctionnement normal inutiles.

---

## 🎯 Conclusion (Épilogue)

L'IA est un miroir honnête qui renvoie un code exactement proportionnel à la densité et au niveau du prompt que vous saisissez. À vous de choisir : produire des tests jetables, impossibles à maintenir et emballés dans de belles paroles, ou construire un bouclier puissant et robuste qui empêchera tout désastre à 3 heures du matin.

Copiez dès maintenant ce 'Cheat Sheet Chaos Monkey' et injectez-le à votre agent IA dans votre répertoire de projet. Vous n'aurez plus jamais à craindre les situations exceptionnelles imprévisibles.

Automatisez votre travail et partez du bureau l'esprit tranquille ! 🍷
