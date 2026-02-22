---
layout: /src/layouts/Layout.astro
title: "1분 만에 끝내는 스크럼/데일리 스탠드업 작성법"
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "협업"
description: "Organisez vos notes brouillonnes en un compte-rendu clair 'Fait hier / À faire aujourd'hui / Blocages' en un clin d'œil."
tags: ["Scrum", "Agile", "Standup", "Communication"]
---

# 📝 Rédiger son Daily Scrum / Stand-up en 1 minute

- **🎯 Recommandé pour :** Développeurs, Chefs de projet, Nouveaux employés
- **⏱️ Temps requis :** 30 minutes → Réduit à 1 minute
- **🤖 Modèles recommandés :** Tous les modèles conversationnels (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Difficulté :** ⭐☆☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"Fini le stress matinal à essayer de vous rappeler ce que vous avez fait hier. Laissez l'IA structurer votre Daily Stand-up à votre place."_

Le Daily Scrum (ou Stand-up) est essentiel pour la synchronisation de l'équipe, mais rédiger son compte-rendu chaque matin peut vite devenir une corvée. Souvent, on oublie les petits détails ou on a du mal à structurer ses pensées. Ce prompt transforme vos notes en vrac en un rapport quotidien clair, professionnel et prêt à être partagé sur Slack, Teams ou Jira.

---

## ⚡️ En résumé (TL;DR)

1. Transformez vos notes désorganisées en un compte-rendu structuré.
2. Format standardisé Agile : Fait hier / À faire aujourd'hui / Points de blocage.
3. Gagnez un temps précieux chaque matin avant votre réunion d'équipe.

---

## 🚀 La solution : Prompt "Daily Scrum Master"

### 🥉 Version Basique

Idéale pour un compte-rendu rapide sans détails complexes.

> **Rôle :** Tu es un assistant `[Scrum Master / Chef de projet]`.
> **Tâche :** Rédige mon rapport de Daily Stand-up à partir des notes suivantes : `[Insérer vos notes en vrac]`.
> **Format :** Utilise trois puces : 1. Ce que j'ai fait hier, 2. Ce que je prévois de faire aujourd'hui, 3. Les points de blocage (s'il y en a).

<br>

### 🥇 Version Pro (Recommandée)

Pour un rapport ultra-professionnel, prêt à être copié-collé, qui impressionnera votre équipe et votre manager.

> **Rôle (Role) :** Tu es un développeur / membre d'équipe très organisé et un excellent communicant travaillant en méthode Agile.
>
> **Contexte (Context) :**
>
> - Contexte : Je dois envoyer mon compte-rendu de Daily Stand-up (Scrum) sur notre canal d'équipe.
> - Objectif : Transformer mes pensées brouillonnes et mes notes en un message professionnel, concis et facile à lire.
>
> **Tâche (Task) :**
>
> 1. Analyse les notes que je vais te fournir et catégorise-les strictement en trois sections :
>    - ⏪ **Hier (Done) :** Ce qui a été accompli.
>    - ⏩ **Aujourd'hui (To Do) :** Ce qui est prévu.
>    - 🛑 **Points de blocage (Blockers) :** Les problèmes ou dépendances. (Si vide, indique "Aucun blocage").
> 2. Utilise des verbes d'action précis (ex: Développé, Corrigé, Rédigé, Analysé).
> 3. Garde un ton professionnel mais direct (pas de phrases inutiles, va à l'essentiel).
>
> **Données d'entrée :**
>
> - Mes notes : `[Insérez vos notes en vrac ici : ex. "hier bug de login réparé, aujourd'hui réunion client à 14h puis dev feature X, bloqué par l'API de paiement qui répond pas"]`
>
> **Contraintes (Constraints) :**
>
> - N'ajoute pas d'introduction ou de conclusion (ex: "Voici votre rapport"). Donne-moi uniquement le texte final prêt à être copié.
> - Utilise des listes à puces (bullet points) avec les emojis appropriés (✅, 🔄, ⚠️).
> - Si un terme technique est utilisé, conserve-le tel quel.

---

## 💡 Note de l'auteur (Insight)

La préparation du Daily Stand-up ne devrait jamais prendre plus de quelques minutes. Pourtant, il est facile de se perdre dans les détails ou d'oublier des tâches importantes de la veille. J'utilise personnellement ce prompt tous les matins. Je me contente de "jeter" toutes mes pensées (même mal formulées) dans l'IA, et elle me ressort un message parfaitement formaté pour notre canal Slack. Cela montre à l'équipe que vous êtes organisé, tout en vous libérant l'esprit pour vous concentrer sur votre vrai travail !

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Dois-je utiliser ChatGPT Plus pour ce prompt ?**
  - A : Pas du tout ! La version basique et la version pro fonctionnent parfaitement sur des modèles gratuits comme ChatGPT (GPT-3.5/4o-mini) ou Claude 3 Haiku.

- **Q : Que faire si je n'ai pas de points de blocage ?**
  - A : Laissez simplement la partie "Mes notes" vide concernant les blocages. Le prompt est conçu pour indiquer "Aucun blocage" de manière proactive, ce qui rassure l'équipe.

- **Q : Puis-je l'utiliser pour un rapport hebdomadaire (Weekly) ?**
  - A : Oui ! Il vous suffit de modifier le `[Contexte]` pour demander un "Rapport Hebdomadaire" et de remplacer "Hier/Aujourd'hui" par "Cette semaine / Semaine prochaine" dans les données d'entrée.

---

## 🧬 Décortiquons le prompt (Pourquoi ça marche ?)

1. **Formatage strict :** En imposant les trois catégories Agile standard (Done, To Do, Blockers), on empêche l'IA de faire de longues phrases narratives inutiles.
2. **Ton professionnel et direct :** L'instruction d'utiliser des verbes d'action donne de l'impact à vos accomplissements sans paraître prétentieux ni hésitant.
3. **Contrainte de format (Zero-fluff) :** Demander à l'IA de ne pas inclure de texte introductif ou conclusif ("Voici votre texte...") permet de copier-coller directement le résultat, optimisant le "Time-to-Value".

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Vos notes en vrac)

```text
hier j'ai passé toute la matinée à fixer le bug sur la page de paiement, c'était l'enfer. l'aprem j'ai fait la review du code de Thomas.
aujourd'hui je dois finir l'intégration de la nouvelle API mais j'attends toujours les clés d'accès de l'équipe backend donc je suis un peu bloqué.
ah et j'ai un point sync avec le client à 15h.
```

### ✅ Après (Résultat généré)

```text
**Daily Stand-up :**

⏪ **Hier (Done) :**
✅ Correction du bug critique sur la page de paiement.
✅ Revue de code effectuée pour les développements de Thomas.

⏩ **Aujourd'hui (To Do) :**
🔄 Finalisation de l'intégration de la nouvelle API.
🔄 Réunion de synchronisation avec le client à 15h00.

🛑 **Points de blocage (Blockers) :**
⚠️ En attente des clés d'accès de l'équipe backend pour poursuivre l'intégration de l'API.
```

---

## 🎯 Conclusion

Ne perdez plus votre énergie matinale à faire de la rédaction administrative. Utilisez ce prompt, envoyez votre message, et commencez votre journée de travail avec l'esprit clair !

À vos claviers, et bon sprint ! 🚀
