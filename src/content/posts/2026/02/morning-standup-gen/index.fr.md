---
layout: /src/layouts/Layout.astro
title: "1분 만에 끝내는 어제 업무 요약 & 스탠드업 준비"
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "업무 효율화"
description: "Avis aux développeurs qui fouillent dans GitHub pour se rappeler de leur travail de la veille. Collez vos logs de commit et obtenez un script de stand-up parfait en quelques secondes."
tags: ["스탠드업", "회의준비", "개발자", "회고"]
---

# 📝 Préparation au Daily Stand-up en 1 minute

- **🎯 Recommandé pour :** Développeurs, Chefs de projet, Marketeurs
- **⏱️ Temps gagné :** 15 minutes → 1 minute
- **🤖 Modèles recommandés :** ChatGPT, Claude, Gemini

- ⭐ **Difficulté :** ⭐☆☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"Encore en train de parcourir frénétiquement l'historique de vos commits GitHub à 9h55 pour le daily stand-up de 10h00 ? Arrêtez de stresser, l'IA peut le faire pour vous."_

Le "Daily Stand-up" (ou mêlée quotidienne) est censé être une réunion rapide pour synchroniser l'équipe, mais préparer ce que l'on va dire peut parfois prendre plus de temps que la réunion elle-même. Si vous avez du mal à vous souvenir de vos accomplissements de la veille, de ce sur quoi vous travaillez aujourd'hui et des éventuels blocages, ce prompt est fait pour vous. Il transformera vos logs techniques bruts en un résumé clair et professionnel, prêt à être partagé avec votre équipe.

---

## ⚡️ Résumé en 3 points (TL;DR)

1. **Fini les trous de mémoire :** Transformez vos messages de commit ou vos notes en un script de réunion structuré.
2. **Format Agile standardisé :** Génère automatiquement les sections "Hier", "Aujourd'hui" et "Bloqueurs".
3. **Gain de temps quotidien :** Préparez votre stand-up en moins d'une minute chrono avant le début de la réunion.

---

## 🚀 La Solution : "Le Générateur de Stand-up"

### 🥉 Version Basique

Utilisez cette version lorsque vous êtes vraiment pressé et que vous avez juste besoin d'une mise en forme rapide de vos notes.

> **Rôle :** Tu es un développeur senior concis.
> **Tâche :** Résume les tâches suivantes pour mon daily stand-up en utilisant le format : 1. Ce que j'ai fait hier, 2. Ce que je fais aujourd'hui, 3. Points de blocage.
> **Données :** `[Collez vos messages de commit ou vos notes en vrac ici]`

<br>

### 🥇 Version Pro

Idéal pour structurer un discours professionnel, mettre en valeur votre impact et identifier clairement les dépendances pour le Scrum Master.

> **Rôle (Role) :** Tu es un Tech Lead expérimenté, expert en communication agile et en méthodologie Scrum.
>
> **Contexte (Context) :**
>
> - Contexte : Je dois présenter mon avancement lors du Daily Stand-up de mon équipe technique.
> - Objectif : Transformer mes notes techniques et logs de commit de la veille en un discours clair, concis et compréhensible par tous (y compris les membres non-techniques comme le Product Owner).
>
> **Tâche (Task) :**
>
> 1. Analyse les `[Données Brutes]` fournies ci-dessous.
> 2. Rédige un script de stand-up structuré en 3 parties distinctes : **Hier**, **Aujourd'hui**, et **Bloqueurs / Dépendances**.
> 3. Traduis le jargon technique excessif en valeur métier compréhensible.
> 4. Garde un ton professionnel, direct et collaboratif.
>
> **Données Brutes :**
> `[Insérez vos logs de commit Git, vos tickets Jira fermés ou vos notes en vrac]`
>
> **Contraintes (Constraints) :**
>
> - Le temps de parole estimé pour lire le script doit être inférieur à 60 secondes.
> - Utilise des listes à puces (bullet points) pour faciliter la lecture rapide.
> - S'il n'y a pas de bloqueurs mentionnés dans les données brutes, indique explicitement "Aucun point de blocage".
>
> **Avertissement (Warning) :**
>
> - Ne sois pas trop verbeux. N'invente aucune tâche ou responsabilité qui ne figure pas dans les données brutes (zéro hallucination).

---

## 💡 L'Avis de l'Expert (Insight)

La préparation du stand-up est une tâche à faible valeur ajoutée mais à fort enjeu social au sein de l'équipe. En tant que développeur, j'ai souvent remarqué que nous avons tendance à trop entrer dans les détails techniques (ex: "J'ai refactorisé le composant X pour éviter un re-render...").

L'intérêt majeur de ce prompt Pro est sa capacité à faire le pont entre la technique et le produit. En demandant à l'IA de "traduire le jargon technique en valeur métier", vous passez d'un simple codeur à un ingénieur qui comprend l'impact de son travail. C'est le genre de communication claire qui rassure les Product Owners et impressionne les managers.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Comment récupérer rapidement mes logs de commit d'hier ?**
  - A : Si vous utilisez Git en ligne de commande, tapez simplement : `git log --author="Votre Nom" --since="yesterday" --oneline`. Copiez le résultat et collez-le directement dans le prompt.

- **Q : Ce prompt fonctionne-t-il si je ne suis pas développeur (ex: Marketing, Design) ?**
  - A : Absolument ! Remplacez simplement "Tech Lead" par votre fonction (ex: "Senior Marketer") et collez votre liste de tâches ou vos emails traités à la place des logs de commit. L'IA s'adaptera parfaitement à votre contexte.

---

## 🧬 Décryptage du Prompt (Pourquoi ça marche ?)

1. **Cadrage temporel et format (Constraints) :** En imposant une limite de "moins de 60 secondes de temps de parole", nous forçons l'IA à synthétiser l'information et à éliminer le superflu.
2. **Traduction Technique -> Métier (Task 3) :** C'est la clé d'un bon stand-up. L'IA comprend qu'elle doit vulgariser les termes complexes pour rendre votre discours accessible à toute l'équipe agile.
3. **Prévention des hallucinations (Warning) :** La consigne stricte de ne rien inventer garantit que vous ne vous attribuerez pas accidentellement le travail d'un collègue lors de la réunion !

---

## 📊 La Preuve : Avant & Après

### ❌ Avant (Données brutes / Commits Git)

```text
- fix: typo dans le fichier config
- feat: ajout du endpoint GET /users/profile
- refactor: optimisation de la boucle de rendu React
- chore: mise à jour des dépendances npm
Aujourd'hui je dois faire les tests unitaires pour le endpoint users et voir pourquoi la CI plante.
```

### ✅ Après (Résultat de l'IA)

```text
**📅 Daily Stand-up :**

**🔙 Hier :**
- J'ai développé et terminé la nouvelle fonctionnalité permettant de récupérer les profils utilisateurs (API).
- J'ai optimisé les performances de l'interface utilisateur (correction de lenteurs d'affichage).
- J'ai effectué de la maintenance de routine en mettant à jour nos bibliothèques et en corrigeant un bug de configuration.

**🎯 Aujourd'hui :**
- Ma priorité est de sécuriser le développement d'hier en écrivant les tests unitaires pour les profils utilisateurs.
- Je vais également investiguer les échecs actuels sur notre pipeline de déploiement continu (CI).

**🚧 Bloqueurs / Dépendances :**
- Aucun point de blocage pour le moment, mais je pourrais avoir besoin d'aide si le problème de la CI persiste cet après-midi.
```

---

## 🎯 Conclusion

Ne perdez plus votre énergie mentale à reconstituer le puzzle de votre journée d'hier. Laissez l'IA structurer vos pensées pour que vous puissiez vous concentrer sur ce qui compte vraiment : écrire du bon code et résoudre les problèmes du jour.

Maintenant, prenez un café et brillez à votre stand-up ! ☕️
