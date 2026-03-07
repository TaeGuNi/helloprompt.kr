---
layout: /src/layouts/Layout.astro
title: " \"1분 만에 끝내는 스크럼/데일리 스탠드업 작성법\""
author: "Jay"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "협업"
description: "Organisez vos notes brouillonnes en un compte-rendu clair « Fait hier / À faire aujourd'hui / Blocages » en un clin d'œil."
tags: ["Scrum", "Agile", "Standup", "Communication"]
---

## 📝 Rédiger son Daily Scrum / Stand-up en 1 minute

- **🎯 Recommandé pour :** Développeurs, chefs de projet, nouveaux collaborateurs
- **⏱️ Temps requis :** 30 minutes → Réduit à 1 minute
- **🤖 Modèles recommandés :** Tous les modèles conversationnels (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Difficulté :** ⭐☆☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"Fini le stress matinal pour essayer de vous rappeler ce que vous avez accompli la veille. Laissez l'IA structurer votre Daily Stand-up à votre place."_

Le Daily Scrum (ou Stand-up) est essentiel pour la synchronisation de l'équipe, mais rédiger son compte-rendu chaque matin peut vite se transformer en corvée. Bien souvent, on oublie des détails cruciaux ou l'on peine à structurer ses idées. Ce prompt transforme instantanément vos notes éparses en un rapport quotidien clair, professionnel et prêt à être partagé sur Slack, Teams ou Jira.

---

## ⚡️ En résumé (TL;DR)

1. Transformez vos notes désorganisées en un compte-rendu parfaitement structuré.
2. Adoptez un format Agile standardisé : Fait hier / À faire aujourd'hui / Points de blocage.
3. Gagnez un temps précieux chaque matin juste avant votre réunion d'équipe.

---

## 🚀 La solution : Prompt "Daily Scrum Master"

### 🥉 Version Basique

Idéale pour un compte-rendu rapide sans détails complexes.

> **Rôle :** Tu es un assistant `[Scrum Master / Chef de projet]`.
> **Tâche :** Rédige mon rapport de Daily Stand-up à partir des notes suivantes : `[Insérez vos notes en vrac]`.
> **Format :** Utilise trois puces : 1. Ce que j'ai fait hier, 2. Ce que je prévois de faire aujourd'hui, 3. Les points de blocage (s'il y en a).

### 🥇 Version Pro (Recommandée)

Pour un rapport ultra-professionnel et prêt à l'emploi qui impressionnera votre équipe ainsi que votre manager.

> **Rôle (Role) :** Tu es un développeur / membre d'équipe extrêmement organisé et un excellent communicant travaillant selon la méthode Agile.
>
> **Contexte (Context) :**
>
> - Contexte : Je dois envoyer mon compte-rendu de Daily Stand-up (Scrum) sur notre canal d'équipe.
> - Objectif : Transformer mes pensées brouillonnes et mes notes en un message professionnel, concis et très lisible.
>
> **Tâche (Task) :**
>
> 1. Analyse les notes que je vais te fournir et catégorise-les strictement en trois sections :
>    - ⏪ **Hier (Done) :** Ce qui a été accompli.
>    - ⏩ **Aujourd'hui (To Do) :** Ce qui est prévu.
>    - 🛑 **Points de blocage (Blockers) :** Les problèmes ou dépendances. (Si vide, indique "Aucun blocage").
> 2. Privilégie des verbes d'action précis (ex. : Développé, Corrigé, Rédigé, Analysé).
> 3. Adopte un ton à la fois professionnel et direct (évite les phrases superflues, va à l'essentiel).
>
> **Données d'entrée :**
>
> - Mes notes : `[Insérez vos notes en vrac ici : ex. "hier bug de login réparé, aujourd'hui réunion client à 14h puis dev feature X, bloqué par l'API de paiement qui répond pas"]`
>
> **Contraintes (Constraints) :**
>
> - N'ajoute aucune introduction ni conclusion (ex. : "Voici votre rapport"). Fournis-moi uniquement le texte final prêt à être copié-collé.
> - Utilise des listes à puces (bullet points) accompagnées des emojis appropriés (✅, 🔄, ⚠️).
> - Si un terme technique est utilisé, conserve-le tel quel.

---

## 💡 Note de l'auteur (Insight)

La préparation du Daily Stand-up ne devrait en principe prendre que quelques minutes. Pourtant, il est très facile de s'égarer dans les détails ou d'oublier des accomplissements majeurs de la veille. J'utilise personnellement ce prompt chaque matin. Il me suffit de "jeter" toutes mes pensées — même les plus mal formulées — dans l'IA pour qu'elle me génère un message **parfaitement formaté** pour notre canal Slack. Non seulement cela prouve à votre équipe que vous êtes rigoureusement organisé, mais cela vous libère également l'esprit pour vous concentrer sur votre véritable cœur de métier !

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Dois-je posséder un abonnement ChatGPT Plus pour utiliser ce prompt ?**
  - R : Pas du tout ! La version basique comme la version pro fonctionnent à merveille sur des modèles gratuits tels que ChatGPT (GPT-4o-mini) ou Claude 3.5 Haiku.

- **Q : Que dois-je faire si je ne rencontre aucun point de blocage ?**
  - R : Il vous suffit d'ignorer cet aspect dans la section "Mes notes". Le prompt est intelligemment conçu pour indiquer "Aucun blocage" de manière proactive, ce qui ne manquera pas de rassurer votre équipe.

- **Q : Est-il possible de l'adapter pour un rapport hebdomadaire (Weekly) ?**
  - R : Absolument ! Il vous suffit d'ajuster le `[Contexte]` pour exiger un "Rapport Hebdomadaire" et de substituer "Hier/Aujourd'hui" par "Cette semaine / Semaine prochaine" au sein des données d'entrée.

---

## 🧬 Décortiquons le prompt (Pourquoi ça marche ?)

1. **Un formatage strict :** En imposant les trois catégories Agile standards (Done, To Do, Blockers), on empêche radicalement l'IA de générer de longues phrases narratives superflues.
2. **Un ton professionnel et direct :** La consigne d'employer des verbes d'action confère un véritable impact à vos accomplissements, sans pour autant paraître prétentieux ou hésitant.
3. **Une contrainte de format "Zero-fluff" :** Interdire à l'IA d'inclure des formules de politesse ou de conclusion ("Voici votre texte...") vous permet de copier-coller le résultat instantanément, maximisant ainsi votre "Time-to-Value" (délai de rentabilité).

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

Cessez de gaspiller votre précieuse énergie matinale dans des tâches de rédaction administrative. Utilisez ce prompt, envoyez votre message en un éclair, et entamez votre journée de travail avec l'esprit parfaitement clair !

À vos claviers, et bon sprint ! 🚀
