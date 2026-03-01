---
layout: /src/layouts/Layout.astro
title: "🎙️ Structurer un compte-rendu de réunion chaotique en 1 minute grâce à ce prompt"
author: "Jay"
date: "2026-02-28"
updatedDate: "2026-02-28"
category: " "
description: "Un prompt redoutablement efficace pour transformer instantanément les transcriptions audio de réunions brouillonnes en résumés limpides et plans d'action (Action Items) structurés."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "meeting-minutes"]
---
# 📝 Structurer un compte-rendu de réunion chaotique en 1 minute

- **🎯 Recommandé pour :** Profils juniors, chefs de projet (PM), spécialistes du marketing
- **⏱️ Temps requis :** 30 minutes → réduit à 1 minute
- **🤖 Modèles recommandés :** Toutes les IA conversationnelles (ChatGPT, Claude, Gemini, etc.)
- ⭐ **Difficulté :** ⭐☆☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"Avez-vous encore perdu toute votre après-midi à rédiger un compte-rendu de réunion ?"_

Même en convertissant l'audio en texte juste après la réunion (via Whisper ou d'autres outils), extraire l'essentiel d'une conversation décousue reste une véritable corvée. Ce prompt va droit au but : il isole avec une précision chirurgicale les **« décisions clés »** et les **« prochaines étapes (Action Items) »** à partir d'un bloc de texte brut. Il ne vous reste plus qu'à copier-coller.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Copiez la transcription brute (speech-to-text) et soumettez-la à l'IA.
2. L'IA élimine le superflu pour ne conserver que les décisions cruciales.
3. Elle extrait avec clarté l'élément le plus important : les « prochaines tâches par responsable (Action Items) ».

---

## 🚀 La solution : "Prompt de structuration automatique de compte-rendu"

### 🥉 Version Basique (Basic Version)

À utiliser lorsque vous avez besoin d'un résultat rapide et concis.

> **Rôle :** Tu es un `[Chef de projet senior]`.
> **Tâche :** Lis la `[transcription de la réunion]` suivante et résumes-en les points clés en te concentrant sur les décisions principales et les prochaines étapes (Action Items).

### 🥇 Version Pro (Pro Version)

À privilégier pour obtenir un rendu détaillé, structuré et prêt à être partagé.

> **Rôle (Role) :** Tu es un `[Chef de produit (PM) dans la Tech avec 10 ans d'expérience]`. Tu excelles dans l'art de saisir le contexte d'une réunion et de définir clairement qui doit faire quoi, et pour quand.
>
> **Contexte (Context) :**
> - Contexte : Nous disposons de la transcription brute et chaotique d'une `[réunion de suivi hebdomadaire / session de brainstorming]`.
> - Objectif : Rédiger un résumé parfaitement structuré pour que les participants puissent saisir immédiatement l'essentiel et exécuter leurs tâches respectives (Action Items) sans la moindre ambiguïté.
>
> **Tâche (Task) :**
> 1. Lis la `[transcription de la réunion]` ci-dessous et synthétise-la en respectant scrupuleusement la structure suivante :
>   - 📌 Sujet principal (Main Topic)
>   - 🎯 Décisions clés (Key Decisions)
>   - 🚨 Problèmes en suspens / En attente (Pending Issues)
>   - ✅ Action Items (Préciser le responsable, la date limite et la tâche à accomplir)
> 2. Supprime intégralement les salutations, les bavardages inutiles et les redondances.
> 3. Adopte un ton résolument professionnel (langage écrit formel, clair et concis).
>
> **Contraintes (Constraints) :**
> - Le format de sortie doit être une liste à puces utilisant la syntaxe Markdown (-, *, backticks, etc.) enrichie d'émojis.
> - L'utilisation de tableaux (Table) Markdown est strictement interdite.
> - Si le responsable d'un Action Item n'est pas explicitement nommé, indique la mention `[À confirmer]`.
>
> **Avertissement (Warning) :**
> - N'invente sous aucun prétexte des informations qui ne figurent pas dans la transcription. (Prévention stricte des hallucinations).
>
> **Entrée (Input) :**
> - Transcription de la réunion : `[Collez le texte brut de votre transcription ici]`

---

## 💡 Le mot de l'auteur (Insight)

Toute la puissance de ce prompt repose sur deux piliers : **l'extraction des Action Items** et la **prévention des hallucinations**. 
L'objectif véritable d'un compte-rendu n'est pas de « consigner tout ce qui a été dit », mais bien de « clarifier ce qui doit être fait ensuite ». 
À l'usage, l'IA a parfois la fâcheuse tendance d'inventer des délais ou des responsables qui semblent logiques mais n'ont jamais été mentionnés. Pour parer à cela, j'ai intégré la contrainte "N'invente jamais d'informations" couplée à une instruction défensive : "Si le responsable n'est pas clair, indique `[À confirmer]`". 

Passez le texte issu de votre outil de transcription vocale (STT) avec ce prompt dans Claude 3.5 Sonnet ou GPT-4o : une corvée de formatage de 30 minutes sera expédiée en 1 minute chrono. Profitez du temps gagné pour prendre un bon café.

---

## 🙋 Foire aux questions (FAQ)

- **Q : Puis-je soumettre l'intégralité de la transcription d'une réunion d'une heure ?**
  - R : Absolument. Les modèles de pointe actuels (Claude 3.5 Sonnet, GPT-4o, etc.) bénéficient d'une excellente fenêtre de contexte et peuvent traiter une heure de discussion sans sourciller. Si jamais vous heurtez une limite de tokens, il suffira de scinder le texte en deux parties.

- **Q : Ce prompt est-il efficace avec la version gratuite de ChatGPT ?**
  - R : Oui, c'est tout à fait fonctionnel. Cependant, la finesse d'analyse du contexte et le strict respect des consignes peuvent s'avérer légèrement inférieurs sur les modèles gratuits (comme GPT-3.5 ou GPT-4o mini). Pour un résultat optimal, privilégiez toujours les versions les plus récentes.

---

## 🧬 Anatomie du prompt (Why it works?)

1. **Attribution du rôle :** En endossant le persona d'un PM expérimenté, l'IA adopte une posture proactive : elle ne se contente plus de résumer passivement, elle "clarifie et distribue les directives de travail".
2. **Structuration de la tâche :** En imposant un format de sortie strict (sujet, décisions, points en suspens, action items), on verrouille le comportement de l'IA et on évite les réponses hors-sujet.
3. **Contraintes :** L'interdiction formelle des tableaux Markdown (souvent illisibles sur smartphone) garantit un rendu parfait et "mobile-friendly", soutenu par des listes à puces visuelles et des émojis.

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Entrée)

```text
Manager Kim : Allô, vous m'entendez bien ? Bon, on se réunit aujourd'hui pour faire le point sur la campagne marketing de ce trimestre. M. Park, où en sont les plans A et B que vous aviez préparés ?
M. Park : Oui, alors je pense qu'on va devoir mettre le plan A en pause parce qu'il risque vraiment de faire exploser le budget, on devrait plutôt partir sur le plan B.
M. Choi : Euh, du coup si on valide le plan B, je peux me charger de dresser la liste des influenceurs à contacter d'ici vendredi de cette semaine.
Manager Kim : OK, c'est vendu pour le plan B. M. Park, merci de revoir le budget en conséquence et de m'envoyer un rapport d'ici mardi prochain. Ah, et pour le design de la landing page... on n'a pas encore briefé l'équipe de design, c'est bien ça ?
M. Park : Non, ce n'est pas encore fait.
```

### ✅ Après (Résultat)

```text
📌 Sujet principal
- Suivi et validation du plan pour la campagne marketing du 3ème trimestre.

🎯 Décisions clés
- Suspension du Plan A (risque de dépassement budgétaire).
- Validation définitive du Plan B.

🚨 Problèmes en suspens / En attente
- Brief de conception de la landing page (nécessite une réunion avec l'équipe de design).

✅ Action Items
- 👨‍💼 M. Park : Réviser le budget selon le Plan B et soumettre le rapport (Date limite : mardi prochain)
- 🧑‍💻 M. Choi : Identifier et lister les influenceurs pour le Plan B (Date limite : vendredi de cette semaine)
- ❓ [À confirmer] : Briefer l'équipe de design pour la landing page (Responsable non défini)
```

---

## 🎯 Conclusion

Ne gaspillez plus votre précieuse énergie à déchiffrer et organiser des comptes-rendus interminables. 
Laissez l'IA débroussailler le chaos pour vous, et concentrez-vous sur ce qui compte vraiment : l'exécution des décisions. 

À vous de jouer, et surtout, quittez le bureau à l'heure ! 🍷
