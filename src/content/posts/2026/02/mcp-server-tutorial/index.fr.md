---
layout: /src/layouts/Layout.astro
title: "\"Arrêtez de copier-coller du contexte : Créez votre premier serveur MCP en 5 minutes\""
author: "Unifactory Editor"
date: "2026-02-16"
updatedDate: "2026-02-16"
category: "Work Automation"
description: "Découvrez le MCP (Model Context Protocol). Connectez vos données locales à Claude ou Ollama sans copier-coller grâce à notre prompt de création de serveur sur mesure."
tags: ["MCP", "Model Context Protocol", "Local LLM", "TypeScript", "Ollama", "Claude"]
image: "/images/2026/02/16/mcp-server-tutorial.jpg"
---

## 📝 Arrêtez le copier-coller de contexte : Créez votre premier serveur MCP en 5 minutes

- **🎯 Public cible :** Développeurs et analystes de données lassés de copier-coller des schémas DB ou des docs API dans leurs prompts, utilisateurs de données locales.
- **⏱️ Temps requis :** 5 minutes → gain de temps permanent.
- **🤖 Performance maximale :** Claude Desktop, Ollama et autres modèles compatibles MCP.

- ⭐ **Difficulté :** ⭐⭐⭐☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"Vous ouvrez une fenêtre Claude et copiez-collez votre schéma de base de données. 10 minutes plus tard, vous ouvrez une nouvelle fenêtre et recommencez la même opération. Il est temps de mettre fin à cette bataille d'usure une fois pour toutes."_

![\"Stop Pasting Context: Build Your First MCP Server in 5 Minutes\"](/images/hooks/mcp-server-tutorial.jpg)

Tout développeur ou analyste de données connaît cette routine fastidieuse : ouvrir une fenêtre de chat vide sur ChatGPT ou Claude, puis faire glisser et copier-coller un schéma de base de données (`schema.sql`) ou des spécifications API de plusieurs milliers de lignes. À chaque nouvelle conversation, il faut nourrir manuellement l'IA : "Génère une requête basée sur cette structure de table", "Voici la doc de notre API interne, comment dois-je l'appeler ?".

Dès que la fenêtre de contexte s'embrouille ou que la limite de jetons est atteinte, l'IA commence à référencer des tables erronées ou à inventer des colonnes inexistantes. Plus grave encore, un frisson vous parcourt l'échine chaque fois que vous copiez du <b>code de sécurité sensible</b> ou des <b>données clients</b> qui ne devraient jamais sortir de l'entreprise. Dans ce processus, vous ne vous concentrez plus sur le codage, mais vous devenez un simple ouvrier chargé de polir les prompts et d'assembler du contexte pour satisfaire l'IA.

Combien de temps allez-vous encore répéter ce travail manuel insignifiant ? Même en supposant que vous n'ouvriez que 10 nouvelles fenêtres de prompt par jour, vous perdez au moins 30 minutes uniquement dans la préparation (recherche, copie, collage). C'est 2 heures et demie par semaine, ou une journée entière par mois gaspillée. Au-delà du temps perdu, c'est votre créativité et votre concentration qui volent en éclats.

Le problème plus critique est la <span style="color:var(--color-cyber-cyan)">fragmentation du contexte (Context Fragmentation)</span>. Le schéma que vous avez collé hier a été mis à jour ce matin, mais l'IA continue de générer du code basé sur l'ancien. Vous finissez par perdre des dizaines de minutes à corriger des erreurs dues à un code erroné, pour finalement vous énerver : "Je ferais mieux de le coder moi-même". Alors que les autres utilisent l'IA pour partir plus tôt du bureau, vous vous retrouvez à faire des heures supplémentaires pour "éduquer" l'IA. C'est une situation paradoxale.

Mais en 2026, un "game changer" est apparu pour mettre fin à toutes ces souffrances : le <b>Model Context Protocol (MCP)</b>, porté par Anthropic. Ce bond technologique majeur est devenu le standard de l'écosystème IA, éliminant totalement le besoin de nourrir manuellement l'IA avec vos données. Vous pouvez désormais faire en sorte que l'IA <b>puise directement dans vos données locales et les lise en temps réel de manière autonome</b>.

Le MCP est comparable à un <b>port USB universel</b> dédié aux modèles d'IA. Il suffit de lancer un serveur une seule fois sur votre ordinateur et de connecter le port pour que des clients comme Claude Desktop ou Ollama accèdent directement à votre système de fichiers local, vos bases de données internes, ou même vos API privées pour diffuser les dernières informations en temps réel.

Le plus étonnant est qu'il ne faut que 5 minutes pour construire un tel serveur personnalisé. En utilisant les prompts que nous présentons aujourd'hui, au lieu de coder manuellement tout le "boilerplate", vous pouvez demander à l'IA de <b>générer (scaffolding)</b> instantanément un code de serveur MCP complet basé sur TypeScript, parfaitement adapté à votre environnement professionnel unique. Vous obtenez un code fonctionnel d'un coup, sans vous perdre dans des dizaines de dépendances et de configurations initiales.

Imaginez maintenant le changement radical après avoir appliqué ce prompt. Il vous suffit d'ouvrir une fenêtre de chat vide et de demander naturellement : <i>"Combien d'utilisateurs se sont inscrits aujourd'hui ?"</i> ou <i>"Quelle est la cause principale de l'erreur de paiement survenue hier ?"</i>.

En arrière-plan, Claude interroge silencieusement votre DB locale ou vos fichiers de logs via l'outil MCP connecté, et fournit une réponse parfaite basée sur des données précises et actualisées. Sans risque de fuite de données, vous disposez de votre propre infrastructure IA personnalisée, sûre et puissante, directement sur votre machine. Vous dépassez le stade de simple "codeur" pour devenir un <b>architecte (Architect)</b> dirigeant votre propre système d'IA. Voici tout de suite la clé pour y parvenir.

---

## 📊 Preuve : Des résultats concrets (Avant & Après)

### ❌ Avant (La douleur habituelle)

La méthode douloureuse habituelle consistant à copier-coller manuellement les données à chaque fois.

```text
Utilisateur :
(Glisse et dépose l'intégralité du fichier my_database_schema.sql de plusieurs milliers de lignes)
(Copie et colle l'intégralité du fichier internal_api_docs.md de plusieurs centaines de lignes)

Génère une requête pour compter le nombre d'utilisateurs inscrits aujourd'hui en te basant sur ce schéma,
et dis-moi comment l'appeler selon cette doc API.
```

### ✅ Après (Le résultat transformé)

La méthode intelligente où le LLM communique directement avec l'environnement local via un serveur MCP pré-construit.

```text
Utilisateur :
Combien d'utilisateurs se sont inscrits aujourd'hui ?

(Claude appelle automatiquement l'outil MCP connecté en arrière-plan)

Claude :
Après avoir consulté directement la base de données interne, le nombre total de nouveaux inscrits aujourd'hui est de 150 personnes.
```

---

## ⚡️ Résumé en 3 points (TL;DR)

1. **Fin du copier-coller inutile :** Utilisez le MCP pour permettre au LLM d'accéder directement et d'interagir avec vos données locales (DB, logs, API).
2. **Construction de serveur en une ligne :** Générez automatiquement le code d'un serveur MCP personnalisé parfaitement fonctionnel avec un seul prompt, sans configuration initiale fastidieuse.
3. **Protection de la vie privée absolue :** Plus besoin de transférer des données sensibles à l'extérieur ; elles sont diffusées directement dans la fenêtre de contexte du modèle depuis votre environnement local sécurisé.

---

## 🚀 Comment les vrais experts rédigent leurs prompts

Voici les prompts finalisés après des dizaines d'essais. Copiez les prompts ci-dessous et remplissez simplement les parties entre `[crochets]` pour les utiliser immédiatement dans votre travail.

### 🥉 Version basique (Basic)

Utilisez cette version pour extraire rapidement la structure de base d'un serveur MCP.

> **Rôle (Role) :** Tu es un développeur TypeScript senior.
> 
> **Tâche (Task) :** Utilise `@modelcontextprotocol/sdk` pour écrire un code de serveur MCP simple dont le rôle est `[objectif souhaité (ex: fonction de lecture des fichiers de logs d'un dossier spécifique)]`.

### 🥇 Version Pro (Expert)

Utilisez cette version lorsque vous avez besoin d'un code de serveur robuste et extensible, prêt pour une utilisation réelle.

> **Rôle (Role) :** Tu es un ingénieur TypeScript senior expert en écosystème Model Context Protocol (MCP).
>
> **Contexte (Context) :**
> 
> - Contexte : J'ai besoin d'un serveur MCP personnalisé pour lier mes données locales ou mes API internes à un LLM.
> - Objectif : Tu dois générer un code de serveur MCP complet, sous la forme d'un fichier unique (`index.ts`), capable de s'exécuter sans erreur et répondant exactement à mes besoins.
> 
> **Tâche (Task) :**
> 
> 1. Rédige le code d'un serveur MCP répondant aux exigences suivantes.
>    - **Objectif :** `[indiquer précisément l'objectif du serveur (ex: fonction pour interroger le nombre d'inscrits du jour dans une base de données spécifique)]`
> 2. Structure le code pour qu'il soit facile à copier-coller, avec des commentaires détaillés pour que l'utilisateur puisse le tester immédiatement dans son terminal.
> 
> **Contraintes (Constraints) :**
> 
> - Tu dois impérativement utiliser le package officiel `@modelcontextprotocol/sdk`.
> - Si les paramètres d'entrée de l'outil sont complexes, utilise le package `zod` pour la validation du schéma (recommandé).
> - Lors de la création de l'instance du serveur, implémente parfaitement les interfaces `ListToolsRequestSchema` et `CallToolRequestSchema`.
> - Inclus obligatoirement une logique de gestion des exceptions (`try/catch`) à l'intérieur du gestionnaire d'outils (Handler) pour éviter que le runtime du serveur ne plante.
> - **Affiche uniquement le bloc de code TypeScript, sans explications superflues.**
> 
> **Avertissement (Warning) :**
> 
> - N'invente pas de méthodes de SDK imaginaires qui n'existent pas. En cas de doute, utilise les API Node.js natives pour contourner le problème.

---

## 💡 Commentaire de l'auteur (Insight & Utilisation)

La véritable valeur de ce prompt ne réside pas seulement dans le fait de demander à l'IA de coder, mais dans le fait d'**injecter de force les spécifications strictes du protocole MCP** dans l'IA.

Les échecs cuisants que j'ai subis lors de mes premières tentatives de création de serveurs MCP personnalisés ont servi de base à ce prompt. Quand je demandais simplement "Crée-moi un serveur MCP qui lit ma DB interne", l'IA générait un code très convaincant en apparence, mais qui inventait des **méthodes de SDK fantômes** totalement inopérantes. Elle ignorait superbement le traitement des requêtes `ListTools` et `CallTool`, qui sont pourtant le cœur du cycle de vie de la communication MCP, pour se contenter de recracher un code de serveur web Express.js banal. J'ai fini par perdre une demi-journée précieuse à corriger et déboguer ce code désastreux.

Après avoir vécu cet échec, j'ai réalisé une vérité fondamentale : <span style="color:var(--color-cyber-cyan)">'Il ne faut jamais laisser l'initiative de l'architecture à l'IA lors de la phase de rédaction du brouillon'</span>.

C'est pourquoi j'ai explicitement stipulé dans les instructions du prompt l'implémentation obligatoire des interfaces essentielles du `@modelcontextprotocol/sdk` : `ListToolsRequestSchema` et `CallToolRequestSchema`. De plus, pour éviter que les paramètres d'entrée des outils ne s'embrouillent, j'ai ajouté des garde-fous imposant l'utilisation de `zod`, une bibliothèque de validation de types au runtime. Résultat : une seule exécution du prompt suffit désormais à générer un **code de serveur parfait dans un fichier unique (`index.ts`)**, exécutable immédiatement sans aucune erreur de syntaxe ou de type.

Dans la pratique professionnelle, ce serveur MCP personnalisé brille particulièrement lorsque la <b>'sécurité absolue (Privacy)'</b> rencontre le <b>'contexte dynamique (Dynamic Context)'</b>. Avec les méthodes traditionnelles, pour combiner des données de logs clients sensibles ou des spécifications API privées stockées au plus profond du réseau interne avec l'IA, il fallait passer par un long travail de dé-identification sous l'œil méfiant de l'équipe sécurité.

Mais avec votre propre serveur MCP personnalisé fonctionnant strictement en local, la donne change complètement. Les données sensibles que vous manipulez ne sont jamais transmises à un serveur cloud externe ; elles sont **traitées en toute sécurité uniquement dans la mémoire physique locale**. Un client comme Claude Desktop se contente d'envoyer une requête (Query) à `localhost` et de recevoir le résultat en toute sécurité.

Le conseil clé pour une application immédiate est le **contrôle des variables**. Lorsque vous remplissez la variable `[objectif]` dans le prompt, ne restez pas vague. Précisez la forme concrète de l'outil. Par exemple, au lieu de mettre `[fonction pour interroger le nombre d'inscrits du jour]`, préférez `[outil exécutant une requête SELECT sur la table users d'une base PostgreSQL pour compter les inscrits du jour selon la colonne date]`. Plus vous clarifiez les paramètres d'entrée et le format des données de sortie, plus l'IA générera un schéma `zod` précis.

J'utilise moi-même ce prompt pour piloter un serveur MCP puissant, relié en temps réel à mon gestionnaire de tickets Jira et aux notifications Slack internes. Dès mon arrivée au bureau, si je demande : <i>"Résume-moi les tickets de ce sprint qui me sont assignés et dont la progression est inférieure à 50 %"</i>, l'IA interroge l'API Jira en temps réel, récupère les données fraîches, construit le contexte et génère un briefing parfait instantanément.

Commencez vous aussi par un outil simple de "lecture seule" (Read-only) pour lire les fichiers texte d'un dossier spécifique, c'est léger et sûr. Une fois que vous serez familiarisé avec la structure du serveur et le flux de données, vous pourrez progressivement passer à l'exécution de requêtes directes sur vos bases de données ou à l'envoi de notifications automatiques sur votre messagerie d'entreprise. Vous découvrirez alors un nouveau monde de productivité où vous dirigez librement votre propre infrastructure locale.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Puis-je utiliser ce prompt sans aucune connaissance en codage ?**
  - R : Oui, absolument ! Même si vous écrivez simplement en langage naturel "Fonction de recherche dans les documents du wiki interne" dans le champ `[objectif]`, l'IA rédigera pour vous un code structurellement parfait. Il vous suffira de copier le code généré, de le coller dans votre environnement et de lancer le script.

- **Q : Comment exécuter le code du serveur généré et le connecter à mon client LLM ?**
  - R : Après avoir enregistré le code dans un fichier `index.ts`, ajoutez la commande d'exécution du script (ex: `npx tsx index.ts`) avec son chemin absolu dans la section `mcpServers` du fichier de configuration de Claude Desktop (`claude_desktop_config.json`). Le serveur apparaîtra immédiatement dans l'onglet des outils.

- **Q : Le serveur créé avec ce prompt fonctionne-t-il uniquement avec Claude ?**
  - R : Non. Le Model Context Protocol est un <b>standard ouvert (Open Standard)</b> universel qui ne dépend pas d'un modèle spécifique. Par conséquent, il est parfaitement compatible sans modification avec tous les environnements clients supportant la norme MCP, tels qu'Ollama, Cursor ou Zed.

---

## 🧬 Anatomie du prompt (Pourquoi ça marche ?)

1. **Contrôle strict par les contraintes (Constraints) :** L'utilisation des bibliothèques `@modelcontextprotocol/sdk` et `zod` est imposée, tout comme les schémas obligatoires (`ListToolsRequestSchema`, `CallToolRequestSchema`). Cela bloque à la source le phénomène d'hallucination où l'IA inventerait un code non conforme aux spécifications.
2. **Sortie contrôlée pour un fichier unique :** Au lieu d'une architecture complexe fragmentée en plusieurs fichiers, une structure en un seul fichier (`index.ts`) est exigée, tout en supprimant les explications inutiles. Le temps nécessaire pour copier et tester le code (Time-to-Value) est ainsi drastiquement réduit.
3. **Gestion des exceptions forcée au runtime :** Pour éviter que l'intégralité du processus du serveur MCP ne plante (Crash) en cas d'erreur inattendue lors de l'exécution d'un outil en local, une logique de défense `try/catch` est rigoureusement imposée.

---

## 🎯 Conclusion (Épilogue)

L'ère du travail manuel consistant à injecter mécaniquement un contexte massif dans une fenêtre de chat IA est terminée. Il est temps de passer au niveau supérieur en transformant l'IA d'un simple chatbot en une infrastructure puissante intégrée à votre ordinateur, grâce au <b>plug-in direct</b> de vos données clés dans le modèle.

5 minutes suffisent. Créez dès maintenant votre serveur MCP parfait qui vous fera gagner le temps précieux que vous gâchiez en copier-coller fastidieux. Automatisez vos tâches et profitez sereinement de votre fin de journée ! 🍷
