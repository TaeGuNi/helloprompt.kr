---
title: " \"Stop Pasting Context: Build Your First MCP Server in 5 Minutes\""
description: " \"Le standard USB pour les LLM, le Model Context Protocol (MCP). Au lieu de copier-coller des schémas JSON à chaque fois, découvrez le prompt pour construire un serveur sur mesure qui connecte directement vos données locales à Claude ou Ollama.\""
author: "Unifactory Editor"
date: "2026-02-16"
tags:
  [
    "MCP",
    "Model Context Protocol",
    "Local LLM",
    "TypeScript",
    "Ollama",
    "Claude",
  ]
image: "/images/2026/02/16/mcp-server-tutorial.jpg"
---

# 📝 Fini le Copier-Coller : Créez Votre Premier Serveur MCP en 5 Minutes

- **🎯 Recommandé pour :** Développeurs fatigués de copier-coller des schémas de base de données ou des documentations d'API dans leurs prompts, utilisateurs de données locales
- **⏱️ Temps requis :** 5 minutes → Un gain de temps permanent
- **🤖 Modèles recommandés :** Modèles compatibles MCP (Claude Desktop, Ollama, etc.)

- ⭐ **Difficulté :** ⭐⭐⭐☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"Vous ouvrez Claude, copiez-collez le schéma de votre base de données. Dix minutes plus tard, nouvelle fenêtre, nouveau copier-coller. Il est grand temps de mettre fin à ce cycle infernal."_

En 2026, le **MCP (Model Context Protocol)** s'est imposé comme le standard de facto pour connecter les LLM à vos données. Considérez-le comme le « port USB » de l'IA. Au lieu de nourrir manuellement le modèle avec du contexte à chaque requête, il vous suffit de connecter un serveur une bonne fois pour toutes. Le modèle ira alors "lire" de lui-même vos fichiers, vos bases de données ou vos API internes en temps réel.

Il existe déjà d'excellents serveurs MCP génériques pour intégrer GitHub ou votre système de fichiers. Mais la véritable puissance de cet outil se révèle lorsque vous connectez **la logique métier spécifique de votre entreprise** au LLM.

Aujourd'hui, plutôt que d'écrire vous-même du code *boilerplate* ennuyeux, nous vous présentons un prompt qui ordonne à l'IA de générer l'ossature (*scaffolding*) d'un serveur MCP sur mesure, en TypeScript, en seulement 5 minutes.

---

## ⚡️ Résumé en 3 points (TL;DR)

1. **La fin du copier-coller :** Utilisez le MCP pour donner à votre LLM un accès direct à vos données locales (bases de données, logs, API).
2. **Un serveur créé via un prompt :** Générez le code complet d'un serveur MCP avec un seul prompt, sans configuration initiale complexe.
3. **Une confidentialité absolue :** Vos données ne fuitent pas vers l'extérieur ; elles sont streamées directement dans la fenêtre de contexte du modèle, en toute sécurité sur votre environnement local.

---

## 🚀 La Solution : "Le Générateur de Serveur MCP"

### 🥉 Version Basique (Basic)

Utilisez cette version si vous avez simplement besoin de la structure de base d'un serveur MCP.

> **Rôle :** Tu es un développeur TypeScript Senior.
> **Tâche :** Rédige le code d'un serveur MCP simple utilisant le SDK `@modelcontextprotocol/sdk`. L'objectif de ce serveur est : `[Votre objectif, ex: fournir la météo d'une ville spécifique]`.


### 🥇 Version Pro (Expert)

Utilisez cette version pour générer un code robuste, évolutif et prêt à être déployé en production.

> **Rôle (Role) :** Tu es un ingénieur TypeScript Senior, expert de l'écosystème du Model Context Protocol (MCP).
>
> **Contexte (Context) :**
>
> - Contexte : J'ai besoin d'un serveur MCP personnalisé pour connecter mes données locales ou mes API internes à un LLM.
> - Objectif : Tu dois générer le code complet et exécutable d'un serveur MCP, contenu dans un seul fichier (`index.ts`), qui répond parfaitement à mes besoins.
>
> **Tâche (Task) :**
>
> 1. Rédige le code du serveur MCP répondant à l'exigence suivante :
>    - **Objectif :** `[Décrivez précisément l'objectif de votre serveur. Ex: Lire les 50 dernières lignes d'un fichier de log spécifique]`
> 2. Le code généré doit inclure des commentaires explicatifs et être prêt à être copié, collé et exécuté immédiatement dans le terminal par l'utilisateur.
>
> **Contraintes (Constraints) :**
>
> - Tu dois obligatoirement utiliser le package officiel `@modelcontextprotocol/sdk`.
> - Si les paramètres d'entrée de l'outil sont complexes, utilise la bibliothèque `zod` pour valider les schémas (fortement recommandé).
> - Lors de l'initialisation du serveur, tu dois implémenter parfaitement les interfaces de requêtes `ListToolsRequestSchema` et `CallToolRequestSchema`.
> - Inclus systématiquement une logique de gestion des erreurs (`try/catch`) à l'intérieur du gestionnaire d'outils (Handler) pour éviter que le serveur ne plante.
> - **Ne fournis aucune explication superflue, retourne uniquement un seul bloc de code TypeScript.**
>
> **Avertissement (Warning) :**
>
> - N'invente aucune méthode SDK qui n'existe pas. En cas de doute, contourne le problème en utilisant les API natives de Node.js.

---

## 💡 L'Analyse de l'Expert (Insight)

La puissance de ce prompt réside dans le fait qu'il ne se contente pas de demander vaguement à l'IA d'« écrire du code ». Il **impose les spécifications fondamentales du protocole** (la gestion des requêtes *ListTools* et *CallTool*) que tout serveur MCP doit respecter.

Le plus grand avantage de construire votre propre serveur MCP est **l'incroyable niveau de confidentialité (Privacy)** qu'il offre. Si vous utilisez un outil de recherche web générique, vos requêtes transitent par des serveurs externes. En revanche, avec un serveur MCP sur mesure connecté à votre base de données PostgreSQL locale ou à une API interne, les données sont transmises de manière sécurisée, sous votre contrôle total. Vous n'avez plus jamais besoin de copier des documents internes sensibles pour les coller dans une fenêtre de chat.

Pour commencer, utilisez ce prompt pour créer un outil simple en "lecture seule", comme la consultation d'un fichier de log local. Une fois que vous en aurez saisi le fonctionnement, vous pourrez l'étendre pour modifier des bases de données et concevoir ainsi votre propre assistant IA ultime.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Puis-je utiliser ce prompt même si je n'ai aucune connaissance en programmation ?**
  - R : Absolument ! Il vous suffit de décrire votre besoin en langage naturel dans la section `[Objectif]` (par exemple : "une fonction qui donne la météo à Paris"). Claude se chargera de générer le code parfait. Vous n'aurez plus qu'à le copier et le coller dans votre environnement d'exécution.

- **Q : Comment exécuter et connecter le serveur généré ?**
  - R : Sauvegardez le code dans un fichier nommé `index.ts`. Ensuite, ajoutez le chemin vers ce script dans la section `mcpServers` du fichier de configuration de Claude Desktop (`claude_desktop_config.json`), et la connexion se fera automatiquement.

- **Q : Le serveur créé avec ce prompt fonctionne-t-il uniquement avec Claude ?**
  - R : Non. Le Model Context Protocol étant un standard ouvert, votre serveur fonctionnera de manière identique sur toutes les plateformes et clients compatibles MCP, tels que Ollama ou Cursor.

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

1.  **Contrôle strict via les contraintes :** En imposant l'utilisation du SDK `@modelcontextprotocol/sdk`, de `zod`, et des schémas obligatoires (`ListToolsRequestSchema`, `CallToolRequestSchema`), nous empêchons l'IA de générer des hallucinations ou du code non conforme aux spécifications.
2.  **Fichier unique et sortie de code pure :** En exigeant un seul fichier (`index.ts`) au lieu d'une structure complexe fragmentée, et en supprimant les explications bavardes, nous maximisons la rapidité de test pour l'utilisateur (Time-to-Value).
3.  **Gestion des erreurs obligatoire :** La règle imposant le `try/catch` évite qu'une erreur d'exécution mineure lors de l'utilisation de l'outil ne provoque le crash complet du serveur MCP.

---

## 📊 La Preuve : Avant & Après

### ❌ Avant (Entrée manuelle)

```text
Utilisateur :
(Copie-colle l'intégralité du fichier my_database_schema.sql qui fait des milliers de lignes)
(Copie-colle l'intégralité du fichier internal_api_docs.md qui fait des centaines de lignes)

En te basant sur ce schéma, rédige une requête pour trouver le nombre d'utilisateurs inscrits aujourd'hui, et dis-moi comment l'appeler selon cette documentation d'API.
```

### ✅ Après (Résultat avec MCP)

```text
Utilisateur :
Combien d'utilisateurs se sont inscrits aujourd'hui ? (Claude appelle automatiquement l'outil MCP en arrière-plan)

Claude :
D'après l'interrogation de la base de données interne, 150 nouveaux utilisateurs se sont inscrits aujourd'hui.
```

---

## 🎯 Conclusion

L'ère où l'on gavait mécaniquement les fenêtres de chat d'IA avec du contexte est révolue. Il est temps de brancher ("Plug-in") directement vos données à vos modèles et de faire de l'IA une véritable brique de votre infrastructure.

En seulement 5 minutes, générez l'ossature d'un serveur MCP parfait qui vous fera gagner un temps précieux et vous évitera la fatigue des copier-coller. Sur ce, terminez votre journée plus tôt ! 🍷
