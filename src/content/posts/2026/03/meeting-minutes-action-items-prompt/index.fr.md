---
layout: /src/layouts/Layout.astro
title: "🎙️ Structurer des comptes-rendus de réunion chaotiques en 1 minute avec ce prompt"
author: "Jay"
date: "2026-02-28"
updatedDate: "2026-02-28"
category: "업무 자동화"
description: "Un prompt pratique pour transformer instantanément les transcriptions audio de réunions brouillonnes en résumés clairs et en plans d'action (Action Items)."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "meeting-minutes"]
---
# 📝 Structurer des comptes-rendus de réunion chaotiques en 1 minute
<!-- ⚠️ [CRITICAL RULE] 다국어 지원 (10개 언어 번역 필수) ⚠️
이 템플릿을 사용하여 새로운 포스트(`index.ko.md`)를 작성한 직후,
**반드시** 동일한 디렉토리에 9개의 번역 파일(`index.[lang].md`)을 추가로 생성해야 합니다.
지원 언어(9개): en, de, es, fr, it, ja, pt, ru, zh
총 10개(한국어+9개 외국어)의 파일이 한 폴더에 있어야 배포가 정상적으로 완료됩니다. -->
<!-- ⚠️ [Lint Rule] 이모지 리스트를 사용하세요. 표(Table) 사용 시 모바일에서 깨질 수 있습니다. -->
- **🎯 Recommandé pour :** Employés juniors, chefs de projet, spécialistes du marketing
- **⏱️ Temps requis :** 30 minutes → réduit à 1 minute
- **🤖 Modèles recommandés :** Toutes les IA conversationnelles (ChatGPT, Claude, Gemini, etc.)
- ⭐ **Difficulté :** ⭐☆☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐
<!-- ⚠️ [Lint Rule] 인용구(>)는 Basic/Pro 섹션 외에는 이탤릭체(_..._)와 함께 사용해야 에러가 나지 않습니다. -->
> _"Avez-vous perdu toute votre après-midi à rédiger le compte-rendu de la réunion ?"_
Même si vous convertissez l'audio enregistré juste après la réunion en texte (avec Whisper, etc.), extraire l'essentiel d'une conversation décousue reste une véritable corvée. Ce prompt extrait avec précision uniquement les **« décisions clés »** et **« qui doit faire quoi (Action Items) »** à partir d'une masse de texte sans contexte. Il vous suffit de copier et coller.
---
## ⚡️ Résumé en 3 lignes (TL;DR)
1. Copiez la transcription brute issue de la conversion vocale et envoyez-la à l'IA.
2. L'IA filtre le bavardage et ne retient que les décisions clés.
3. Elle extrait clairement le plus important : les « prochaines tâches par responsable (Action Items) ».
---
## 🚀 La solution : "Prompt de structuration automatique de compte-rendu"
<!-- ⚠️ [Lint Rule] 인용구(>)는 이곳(Prompt 섹션)에서만 프롬프트 박스로 변환됩니다. -->
### 🥉 Version Basique (Basic Version)
Utilisez ceci lorsque vous n'avez besoin que de résultats rapides.
> **Rôle :** Tu es un `[Chef de projet senior]`.
> **Tâche :** Lis la `[transcription de la réunion]` suivante et résume les points clés en te concentrant sur les décisions principales et les prochaines étapes (Action Items).
### 🥇 Version Pro (Pro Version)
Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.
> **Rôle (Role) :** Tu es un `[Chef de produit informatique et PM avec 10 ans d'expérience]`. Tu es un expert pour saisir le contexte d'une réunion et organiser clairement qui doit faire quoi et pour quand.
>
> **Contexte (Context) :**
> - Contexte : Nous avons une transcription brute et chaotique d'une `[réunion de rapport d'activité hebdomadaire ou de brainstorming]`.
> - Objectif : Rédiger un résumé proprement structuré afin que les participants puissent rapidement comprendre le contenu de la réunion et exécuter leurs tâches respectives (Action Items) sans confusion.
>
> **Tâche (Task) :**
> 1. Lis la `[transcription de la réunion]` ci-dessous et résume-la selon la structure suivante :
>   - 📌 Sujet principal (Main Topic)
>   - 🎯 Décisions clés (Key Decisions)
>   - 🚨 Problèmes en suspens / En attente (Pending Issues)
>   - ✅ Action Items (Préciser le responsable, la date limite et la tâche)
> 2. Supprime complètement les salutations, les bavardages inutiles et les répétitions.
> 3. Maintiens un ton et des manières professionnels (langage écrit formel et clair).
>
> **Contraintes (Constraints) :**
> - Le format de sortie doit être une liste utilisant des symboles Markdown (-, *, backticks, etc.) et des émojis.
> - N'utilise absolument pas de tableaux (Table) Markdown.
> - Si le responsable d'un Action Item n'est pas clair, indique '[À confirmer]'.
>
> **Avertissement (Warning) :**
> - N'invente jamais d'informations qui ne figurent pas dans la transcription. (Prévention des hallucinations)
>
> **Entrée (Input) :**
> - Transcription de la réunion : `[Collez le texte de la transcription ici]`
---
<!-- ✅ [Lint Rule] 필수 섹션입니다. 누락 시 CI 에러가 발생합니다. -->
## 💡 Le mot de l'auteur (Insight)
Le cœur de ce prompt réside dans **l'extraction des Action Items** et la **prévention des hallucinations**. 
Le véritable objectif de la rédaction d'un compte-rendu n'est pas de « consigner ce qui a été dit », mais de « clarifier ce qui doit être fait ensuite ». 
En pratique, l'IA a parfois tendance à inventer des délais plausibles qui n'ont pas été mentionnés. Pour éviter cela, j'ai inclus la contrainte "N'invente jamais d'informations" et l'instruction défensive "Si le responsable n'est pas clair, indique [À confirmer]". Essayez d'envoyer le texte extrait par un outil STT avec ce prompt à Claude 3.5 Sonnet ou GPT-4o. Une tâche de nettoyage de texte de 30 minutes sera réduite à 1 minute. Prenez un autre café avec le temps gagné.
---
<!-- ⚠️ [Lint Rule] 권장 섹션입니다. 누락 시 경고가 발생합니다. -->
## 🙋 Foire aux questions (FAQ)
- **Q : Puis-je insérer l'intégralité de la transcription d'une réunion d'une heure ?**
  - R : Oui, les modèles récents (Claude 3.5 Sonnet, GPT-4o, etc.) ont une excellente capacité de compréhension du contexte et peuvent facilement traiter une heure de texte. Toutefois, si vous rencontrez une limite de tokens, divisez-le en deux parties.
- **Q : Cela fonctionne-t-il avec la version gratuite de ChatGPT ?**
  - R : C'est possible, mais la capacité à saisir le contexte et à suivre précisément les instructions peut être légèrement inférieure sur les modèles gratuits (comme GPT-3.5). Il est recommandé d'utiliser les modèles les plus récents dans la mesure du possible.
---
## 🧬 Anatomie du prompt (Why it works?)
1. **Attribution du rôle :** À travers le persona d'un PM avec 10 ans d'expérience, on impose un ton qui ne se contente pas de raccourcir le texte, mais qui "clarifie les directives de travail".
2. **Structuration de la tâche :** En divisant le format de sortie en sujet, décisions, points en suspens et action items, on empêche l'IA de répondre dans un format inattendu.
3. **Contraintes :** On interdit formellement l'utilisation de tableaux Markdown, qui nuisent à la lisibilité sur mobile, et on impose l'utilisation de listes avec des émojis.
---
## 📊 Preuve : Avant & Après
### ❌ Avant (Entrée)
```text
Chef d'équipe Kim : Ah, vous m'entendez ? Nous sommes réunis aujourd'hui au sujet de la campagne marketing de ce trimestre. M. Park, où en sont les plans A et B que vous avez préparés ?
M. Park : Oui, je pense que nous devrions suspendre le plan A car il risque de dépasser le budget, nous devrions opter pour le plan B.
M. Choi : Euh, si nous choisissons le plan B, je dresserai la liste des influenceurs à contacter d'ici vendredi de cette semaine.
Chef d'équipe Kim : OK, on valide le plan B alors. M. Park, veuillez refaire le budget et me faire un rapport d'ici mardi prochain. Et pour le design de la landing page... ah, cela n'a pas encore été discuté avec l'équipe de design, n'est-ce pas ?
M. Park : Non, pas encore.
```
### ✅ Après (Résultat)
```text
📌 Sujet principal
- Discussion sur le plan de la campagne marketing du 3ème trimestre
🎯 Décisions clés
- Plan A suspendu en raison d'un problème de dépassement de budget, validation définitive du plan B
🚨 Problèmes en suspens / En attente
- Conception de la landing page (nécessite une discussion avec l'équipe de design)
✅ Action Items
- 👨‍💼 M. Park : Rédaction et rapport du nouveau budget basé sur le plan B (Date limite : mardi prochain)
- 🧑‍💻 M. Choi : Établir la liste des influenceurs pour le plan B (Date limite : vendredi de cette semaine)
- ❓ [À confirmer] : Responsable de la discussion avec l'équipe de design pour la landing page non défini
```
---
## 🎯 Conclusion
Ne gaspillez plus votre énergie à organiser des comptes-rendus complexes. 
Laissez l'IA se charger de ranger le texte en désordre, et concentrez-vous sur l'exécution des actions décidées. 
Maintenant, quittez le travail à l'heure ! 🍷
