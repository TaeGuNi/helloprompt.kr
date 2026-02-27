---
layout: /src/layouts/Layout.astro
title: " \"Slack 봇 만들기: '점심 뭐 먹지?' 추천해주는 사내 봇\""
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "업무 자동화"
description: " \"개발 지식 없이도 슬랙 워크플로우 빌더와 AI를 연결해 우리 팀만의 점심 메뉴 추천 비서를 만드는 방법입니다.\""
tags: ["Slack", "슬랙", "챗봇", "자동화", "사내문화"]
---

# 🤖 Créer un bot Slack : L'assistant interne qui vous recommande "Où manger ce midi ?"

- **🎯 Cible recommandée :** Les employés juniors qui souffrent chaque jour pour choisir le menu du midi, ou l'équipe RH qui souhaite dynamiser une messagerie interne un peu trop stricte.
- **⏱️ Temps estimé :** 10 minutes (en utilisant Slack Workflow Builder)
- **🤖 Modèle recommandé :** ChatGPT-4o (excellent pour les recommandations créatives et l'adaptation au contexte)

- ⭐ **Difficulté :** ⭐⭐☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"Où mange-t-on ce midi ? N'importe où... Des pâtes alors ? Bof, pas trop envie... Mettez fin à ce jeu de devinettes quotidien ! Confiez cette tâche à votre assistant IA et gardez votre énergie pour quitter le bureau à l'heure."_

Le plus grand dilemme des employés de bureau : choisir le menu du midi. Désormais, ne cherchez plus le consensus du regard, demandez simplement à votre bot de messagerie interne. Tapez "Que manger un jour de pluie ?" et recevez une réponse pleine d'esprit comme "Un jour de pluie, pourquoi pas un bon ramen chaud plutôt qu'une salade ?". Voici comment configurer ce bot intelligent via Slack Workflow Builder, sans écrire une seule ligne de code.

---

## ⚡️ Résumé en 3 points (TL;DR)

1. Configurez un bot automatisé sans coder en utilisant le **"Workflow Builder"** de Slack.
2. Définissez un mot-clé (ex. : "Recommandation repas") ou une réaction emoji comme déclencheur (Trigger) pour appeler le bot.
3. Intégrez un connecteur IA (comme ChatGPT) pour exécuter un prompt générant des recommandations de repas personnalisées en fonction de la météo et de la situation.

---

## 🚀 La solution : Prompt de Recommandation de Repas (Lunch Buddy)

### 🥉 Version Basique (Basic Version)

Utilisez cette version pour une recommandation aléatoire rapide lorsque vous avez du mal à vous décider.

> **Rôle :** Tu es un assistant chaleureux chargé de choisir le menu du déjeuner pour notre équipe.
> **Tâche :** Choisis aléatoirement entre cuisine française, italienne, asiatique, restauration rapide ou saine. Ensuite, recommande 3 plats populaires et rassembleurs dans cette catégorie, que des collègues de bureau apprécieraient facilement.


### 🥇 Version Pro (Pro Version)

Utilisez cette version pour obtenir des recommandations astucieuses et adaptées à des situations spécifiques (météo, humeur, nombre de personnes).

> **Rôle (Role) :** Tu es un fin gourmet très exigeant et un véritable GPS des meilleurs restaurants situés près du bureau (`[Localisation du bureau (ex. : La Défense)]`).
>
> **Contexte (Context) :**
>
> - Météo : `[Météo actuelle (ex. : Pluvieux, Ensoleillé, Froid)]`
> - Humeur et situation : `[Ambiance de l'équipe (ex. : Stressée, Jour de paie, En plein régime)]`
> - Nombre de participants : `[Composition du groupe (ex. : Déjeuner solo, Repas de toute l'équipe, Déjeuner entre stagiaires)]`
>
> **Tâche (Task) :**
>
> 1. Recommande 1 menu de déjeuner qui correspond parfaitement à la situation décrite ci-dessus.
> 2. Ajoute une explication pleine d'esprit (1 ou 2 phrases) qui suscitera l'empathie des employés pour justifier ce choix.
> 3. Formate ta réponse sous forme de liste en Markdown, en y incluant des emojis pour faciliter la lecture.
>
> **Contraintes (Constraints) :**
>
> - Exclus les plats trop clivants (ex. : plats très épicés, abats) ou les repas trop lourds qui prennent trop de temps sur la pause déjeuner.
>
> **Avertissement (Warning) :**
>
> - Ne donne pas de noms de restaurants fictifs ou incertains. Concentre-toi uniquement sur le nom des plats pour éviter les hallucinations.

---

## 💡 Le mot de l'auteur (Writer's Insight)

Un bot Slack va bien au-delà d'une simple "fonctionnalité" technique ; c'est un outil puissant pour façonner la **"culture"** de l'entreprise. Il agit comme un lubrifiant social, apportant de la légèreté et des sujets de conversation dans des canaux souvent saturés de directives formelles. Si le bot de recommandation de repas rencontre du succès, vous pourrez facilement étendre l'idée à un "Bot de compliments", un "Bot d'anniversaires" ou un "Bot de rétrospective hebdomadaire", contribuant ainsi à bâtir un environnement de travail positif et dynamique. En associant ce prompt à des outils d'automatisation comme Zapier ou Make, vous pouvez surpasser les limites des workflows natifs de Slack et créer un assistant IA encore plus redoutable.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Mon entreprise utilise la version gratuite de Slack. Puis-je utiliser le Workflow Builder ?**
  - R : Malheureusement, le Slack Workflow Builder n'est pleinement disponible que sur les forfaits payants (Pro et supérieurs). Si vous êtes sur la version gratuite, vous pouvez contourner cette limitation en utilisant Zapier ou Make.com pour détecter les messages dans un canal spécifique et envoyer des réponses via l'API de ChatGPT.

- **Q : Quelle est la différence par rapport au développement d'un bot en codant (avec Python par exemple) ?**
  - R : Utiliser une bibliothèque comme `slack-bolt` en Python permet des interactions beaucoup plus avancées : boutons cliquables, fenêtres modales, connexion à la base de données interne. Cependant, cela implique des coûts de serveur et de maintenance. Pour de simples recommandations de menus ou des réponses textuelles légères, l'approche No-code via un workflow est de loin la plus efficace.

---

## 🧬 Décryptage du prompt (Why it works?)

1. **Variables basées sur le contexte (Contextual Variables) :** Au lieu d'un simple "Recommande un menu", l'utilisation de variables (`[ ]`) comme la météo, l'humeur et le nombre de convives force l'IA à éviter les réponses génériques et à générer des propositions hautement personnalisées.
2. **Contrôle des biais et des hallucinations (Constraint Setting) :** La section `Avertissement (Warning)` prend en compte les spécificités de la pause déjeuner (temps limité, goûts universels) et empêche catégoriquement l'IA d'inventer des restaurants qui n'existent pas (hallucination).
3. **Jeu de rôle (Role-playing) :** En lui attribuant le persona très spécifique de "fin gourmet et GPS des restaurants", on modifie le ton de la réponse : d'une restitution froide d'informations, elle devient la suggestion chaleureuse et amusante d'un collègue de travail.

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Le déjeuner silencieux)

```text
Stagiaire : "Qu'est-ce qu'on mange ce midi ?"
Collègue A : "Euh... Tout me va."
Manager : "Prenons n'importe quoi."
(Début du jeu des devinettes et 10 minutes de silence gênant 🕰️)
```

### ✅ Après (L'intervention de l'assistant IA)

```text
Moi : /repas
Bot (Lunch Buddy) : "☔ Un repas d'équipe, juste avant la paie, un jour de pluie et avec du stress ?
Dans ces conditions, je vous recommande vivement un bon **'Ramen épicé avec des Gyozas'** !
Faites passer le stress avec un bouillon réconfortant et faites le plein d'énergie pour l'après-midi ! 🍜"
Manager : "Oh, c'est exactement ce qu'il me faut aujourd'hui. On y va !"
```

---

## 🎯 Conclusion

L'entreprise est un lieu où l'on travaille dur, mais la pause déjeuner doit rester un moment savoureux et détendu. Un simple petit bot peut détendre l'atmosphère de votre équipe et réduire considérablement la fatigue liée à la prise de décision.

Aujourd'hui, mettez fin aux hésitations interminables et confiez le déjeuner de votre équipe aux **choix astucieux de votre assistant IA**. Bon appétit, et profitez d'une fin de journée productive pour rentrer à l'heure ! 🍷
