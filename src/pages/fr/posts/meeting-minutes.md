---
layout: /src/layouts/Layout.astro
title: "L'IA organise ce que vous avez manqué en prenant des notes"
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "Automatisation du travail"
description: "Ne dites plus 'C'était quoi déjà ?' après une réunion. Avec un simple fichier d'enregistrement, le résumé est prêt en 1 minute."
tags: ["Réunion", "Résumé", "Productivité"]
---

# 📝 L'IA organise ce que vous avez manqué en prenant des notes

- **🎯 Cible recommandée :** Tous les employés de bureau, PM, assistants
- **⏱️ Temps nécessaire :** 30 min → Réduit à 1 min
- **🤖 Modèle recommandé :** Clova Note (STT), ChatGPT (GPT-4), Claude 3

- ⭐ **Difficulté :** ⭐☆☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilisation :** ⭐⭐⭐⭐⭐

> _"Ne dites plus 'C'était quoi déjà ?' après une réunion. Avec un simple fichier d'enregistrement, le résumé est prêt en 1 minute."_

Il est inefficace d'enregistrer tout le contenu d'une réunion. L'important, ce sont les 'décisions prises' et les 'tâches à effectuer (Action Items)'. Ce prompt transforme le contenu dispersé de la réunion en une liste de tâches claire.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Résumé du long procès-verbal et extraction des points clés
2. Création automatique des Action Items (Responsable/Date limite)
3. Clarification des décisions et des plans futurs

---

## 🚀 Solution : "Meeting Minutes Master"

### 🥉 Basic Version (Version de base)

Utilisez ceci lorsque vous voulez saisir rapidement l'essentiel.

> **Rôle :** Tu es un secrétaire compétent.
> **Demande :** Résume ce procès-verbal de réunion et donne-moi seulement les 3 points clés.
> **Entrée :** `[Texte du procès-verbal]`

<br>

### 🥇 Pro Version (Version expert)

Utilisez ceci lorsqu'un partage systématique du procès-verbal est nécessaire.

> **Rôle (Role) :** Tu es un chef de projet (PM) méticuleux.
>
> **Situation (Context) :**
>
> - Type de réunion : `[Réunion hebdomadaire / Kick-off / Brainstorming]`
> - Participants : `[Liste des participants]`
>
> **Tâche (Task) :**
>
> 1. Organise le procès-verbal selon le modèle ci-dessous.
>    - **📅 Date :** `[Date de la réunion]`
>    - **👥 Participants :** `[Participants]`
>    - **🗣️ Ordre du jour (Agenda) :** `[Liste des sujets]`
>    - **✅ Décisions (Decisions) :** `[Contenu décidé]`
>    - **📝 À faire (Action Items) :**
>      - `[Responsable]` : `[Tâche]` (~`[Date limite]`)
>    - **⏭️ Prochaine réunion :** `[Date prévue]`
>
> **Contraintes (Constraints) :**
>
> - Supprime les bavardages inutiles (blagues, météo, etc.).
> - Rédige les Action Items avec des actions aussi concrètes que possible (ex : "À revoir" -> "Rédiger le rapport et envoyer l'e-mail").
>
> **Avertissement (Warning) :**
>
> - Vérifie l'exactitude des dates et des chiffres.

---

## 💡 Commentaire de l'auteur (Insight)

L'effet est maximisé si vous extrayez d'abord le texte avec un outil STT (Speech-to-Text) comme Clova Note, puis utilisez ce prompt. Si vous le partagez dans les 5 minutes suivant la réunion, vous serez reconnu comme "quelqu'un qui travaille bien".

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Que faire si le procès-verbal est trop long ?**
  - R : ChatGPT a une limite d'entrée, donc divisez le texte ou téléchargez le fichier (en utilisant Code Interpreter) pour demander une analyse. Claude est avantageux pour le traitement de contextes longs.

- **Q : Est-ce que cela fonctionne avec du texte sans séparation des locuteurs ?**
  - R : Oui, il déduit dans une certaine mesure qui a dit quoi grâce au contexte, mais pour la précision, il est préférable d'avoir des indicateurs de locuteurs.

---

## 🧬 Anatomie du prompt (Why it works?)

1.  **Proposition de modèle (Template) :** En donnant à l'IA un format de sortie clair, le temps de retraitement a été réduit.
2.  **Instruction explicite :** La qualité a été améliorée en donnant des directives claires comme "Supprime les bavardages inutiles" et "Rédige des actions concrètes".

---

## 📊 Preuve : Avant & Après

### ❌ Before (Entrée)

```text
(중구난방인 회의 녹취록 텍스트...)
김대리: 아, 그 건은 제가 이번 주까지 할게요.
박부장: 그래, 그거 중요하니까 빨리 처리해. 그리고 다음 주 워크샵 장소 섭외는?
이사원: 제가 몇 군데 알아보고 있는데 강남 쪽으로...
```

### ✅ After (Résultat)

```markdown
**📝 할 일 (Action Items):**

- 김대리 : 중요 안건 처리 (~이번 주)
- 이사원 : 워크샵 장소(강남 인근) 섭외 및 리스트 보고 (~다음 주)
```

---

## 🎯 Conclusion

Laissez l'enregistrement à l'IA, la pensée aux humains ! 🍷