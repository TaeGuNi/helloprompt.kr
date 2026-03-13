---
layout: /src/layouts/Layout.astro
title: "Créer un bot Slack : le 'Lunch Buddy' qui recommande le déjeuner au bureau"
author: "Jay"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "Automatisation"
description: "Guide pour coupler Slack et l'IA afin de résoudre le dilemme quotidien du menu du déjeuner au bureau, sans connaissances en code."
tags: ["Slack", "Chatbot", "Automatisation", "Culture d'entreprise"]
image: "/images/hooks/slack-lunch-bot.jpg"
---

## 📝 Créer un bot Slack : le 'Lunch Buddy' qui recommande le déjeuner au bureau

- **🎯 Cible :** Le benjamin de l'équipe fatigué de choisir le menu, les managers souhaitant dynamiser la messagerie interne.
- **⏱️ Temps requis :** 10 minutes (basé sur la configuration du Workflow Builder de Slack)
- **🤖 Performance optimale :** Modèles de raisonnement récents recommandés (ex. ChatGPT-4o, spécialisé dans la compréhension contextuelle complexe et les recommandations créatives)

- ⭐ **Difficulté :** ⭐⭐☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _« Qu'est-ce qu'on mange ce midi ? N'importe quoi. Alors, des pâtes ? Hmm... pas trop envie de féculents... » Ce jeu de devinettes étouffant qui tourne en boucle comme un ruban de Moebius... Jusqu'à quand allez-vous gaspiller votre énergie émotionnelle ?_

Chaque jour, vers 11h30, une tension étrange envahit le bureau. « Qu'est-ce qu'on mange ce midi ? », « Oh, n'importe quoi me va. » C'est l'éternel dilemme des employés de bureau, un gouffre émotionnel qui grignote un temps de repos précieux : **le choix du menu du déjeuner**.

Un « n'importe quoi » n'est jamais vraiment un « n'importe quoi ». C'est un puzzle complexe où il faut éviter ce qu'on a mangé hier, les épices que le directeur déteste, et respecter le régime du collègue en plein rééquilibrage alimentaire. Pendant que vous hésitez devant votre écran, effaçant et réécrivant vos messages, vos précieuses minutes de pause s'envolent. Ce stress quotidien, petit mais persistant, demande une **charge mentale** bien plus importante qu'on ne le pense, affectant même la concentration de l'après-midi. Allez-vous continuer cette comédie de l'indécision ?

Le processus de décision pour le déjeuner révèle souvent les hiérarchies invisibles et les non-dits d'une culture d'entreprise. Quelqu'un porte toujours le fardeau de la décision, tandis qu'un autre n'ose pas exprimer son avis et accumule de la frustration. Ignorer ces micro-conflits, c'est laisser la vitalité de l'équipe s'étioler. Mais dès qu'un bot IA de recommandation est introduit, la lourde responsabilité de la décision est transférée en douceur vers un « système » objectif. « Le bot a suggéré ça, essayons pour aujourd'hui ! » : cette simple phrase devient une échappatoire idéale pour détendre l'atmosphère d'une organisation rigide.

Il n'est plus nécessaire de gaspiller vos émotions dans ces jeux d'hésitation épuisants. Aucune connaissance en développement ou ligne de code Python n'est requise. En combinant le **Workflow Builder de Slack**, que nous utilisons déjà quotidiennement, avec un modèle d'IA intelligent, vous pouvez recruter gratuitement en seulement 10 minutes un <span style="color:var(--color-cyber-cyan)">'Lunch Buddy (Bot de recommandation ultra-personnalisé)'</span> capable de satisfaire les goûts les plus exigeants.

Une simple question textuelle comme « Il pleut et je suis stressé, qu'est-ce qu'on mange ? » suffit. L'assistant IA répondra avec plus d'esprit qu'un humain : « Difficile de prendre un apéro en terrasse sous la pluie, mais que diriez-vous d'un bon ramen bien chaud pour vous réconforter ? ». Une curation parfaite prenant en compte la météo, l'ambiance de l'équipe et même le budget, pour ramener le sourire sur votre messagerie interne.

Le déjeuner ne doit pas être une extension du travail, mais le seul refuge pour reprendre son souffle au milieu d'une journée intense. Être stressé par un repas est l'un des principaux facteurs de baisse de qualité de vie au travail. Utiliser la technologie pour briser les barrières humaines et apporter une petite variation dans la routine quotidienne est une expérience réjouissante. Nous vous dévoilons dès maintenant le guide de configuration et les prompts magiques pour briser le cycle de l'indécision et transformer votre pause déjeuner en un véritable moment de détente et de régénération.

---

## 📊 Preuve : Un résultat percutant (Avant & Après)

### ❌ Avant (La douleur que nous subissions)

Chaque jour à 11h30, un silence pesant s'installe sur la messagerie. Un relais textuel sans fin qui gaspille un temps précieux.

```text
막내: "오늘 점심 뭐 드실래요?"
팀원 A: "음... 전 다 좋아요."
팀장: "아무거나 먹지 뭐."
(끝없는 눈치 게임과 10분의 정적 🕰️)
```

### ✅ Après (Une transformation parfaite)

![Créer un bot Slack : le 'Lunch Buddy' qui recommande le déjeuner au bureau](/images/hooks/slack-lunch-bot.jpg)

L'apparition d'un assistant IA plein de tact brise l'indécision : le menu est fixé en seulement 5 secondes !

```text
나: /점심추천 비 오고 스트레스 받는 월급날전 팀 회식
봇 (Lunch Buddy): "☔ 비 오고 스트레스 받는 월급날 전이시군요! 
이런 날엔 주머니 사정도 지키면서 얼큰하게 속을 풀어줄 **'차돌 짬뽕과 탕수육 세트'**를 강력 추천합니다. 
매콤한 국물로 업무 스트레스는 싹 날리고, 든든한 탕수육으로 오후 업무 에너지를 가득 채워보세요! 🍜"

팀장: "오, 오늘은 짬뽕 당기네. 봇 센스 있는데? 바로 가자!"
```

---

## ⚡️ Résumé en 3 points (TL;DR)

1. Aucune connaissance technique complexe n'est requise. Le **'Workflow Builder'** de Slack permet une configuration intuitive du bot.
2. Définissez des mots-clés comme "Recommandation déjeuner" ou des emojis fréquents comme déclencheurs (Trigger) pour appeler le bot instantanément.
3. Intégrez de manière fluide des connecteurs IA (comme ChatGPT) pour proposer des menus ultra-personnalisés reflétant la météo et l'ambiance de l'équipe.

---

## 🚀 Les vrais experts rédigent ainsi

Voici le prompt central à saisir dans le connecteur IA du workflow Slack (ou outil d'intégration externe). Il est conçu pour percevoir la situation et le contexte au-delà d'un simple tirage aléatoire. Copiez le prompt ci-dessous et ajustez uniquement les parties entre `[crochets]` selon la situation de votre entreprise.

### 🥉 Version Basique

Pour résoudre rapidement l'indécision et sortir immédiatement du cycle des hésitations sans fin.

> **Rôle (Role) :** Tu es un assistant IA amical qui choisit rapidement et avec tact le menu du déjeuner pour l'équipe.
>
> **Tâche (Task) :**
> Choisis d'abord au hasard une catégorie parmi Cuisine locale, Chinoise, Japonaise, Italienne ou Restauration rapide. Ensuite, suggère rapidement 3 plats populaires au sein de cette catégorie que n'importe quel employé de bureau apprécierait.

### 🥇 Version Pro (Expert)

À utiliser pour obtenir une recommandation pertinente qui satisfera tout le monde en reflétant précisément le contexte (météo, ambiance, nombre de personnes, etc.).

> **Rôle (Role) :** Tu es un gourmet au palais exigeant et un GPS humain connaissant tous les bons restaurants à proximité de `[Localisation de l'entreprise (ex: Quartier de la Défense)]`.
>
> **Contexte (Context) :**
>
> - Météo : `[Météo actuelle (ex: pluie, soleil, pic de pollution)]`
> - Ambiance : `[Ambiance de l'équipe (ex: stress intense, jour de paie, régime collectif)]`
> - Participants : `[Nombre de personnes (ex: seul, toute l'équipe, déjeuner entre collègues proches)]`
>
> **Tâche (Task) :**
>
> 1. Recommande vivement LE meilleur plat pour le déjeuner qui correspond parfaitement à la situation fournie.
> 2. Ajoute impérativement une explication pleine d'esprit et d'humour (1 à 2 phrases) pour expliquer pourquoi tu as choisi ce menu, afin de susciter l'adhésion des collègues.
> 3. Le format de sortie doit être une liste Markdown propre avec des emojis appropriés pour une lisibilité optimale sur mobile.
>
> **Contraintes (Constraints) :**
>
> - Exclus strictement les plats trop clivants ou les repas trop lourds qui seraient difficiles à consommer dans le temps imparti d'une heure de pause.
>
> **Avertissement (Warning) :**
>
> - N'invente jamais de noms de restaurants ou de marques imaginaires. Concentre-toi uniquement sur la suggestion du 'nom du plat' lui-même. (Anti-hallucination)

---

## 💡 Commentaire de l'auteur (Insight & Utilisation)

Le bot de recommandation de déjeuner combinant le workflow Slack et l'IA est bien plus qu'une simple commodité technique : c'est un outil puissant et subtil pour assouplir la **'Culture'** d'entreprise. Cela peut ressembler à un gadget bricolé en 10 minutes sans code, mais l'impact d'un tel bot sur une organisation est immense. Il sert de lubrifiant social en provoquant des sourires inattendus et des discussions légères (Small Talk) dans des canaux de messagerie souvent limités aux instructions professionnelles sèches.

La force de ce prompt réside dans le **'Contrôle des contraintes (Constraint Control)'** et le **'Design de Persona (Persona Design)'**. Si vous demandez simplement « Qu'est-ce qu'on mange ? », l'IA répétera des réponses sans âme comme « Pizza, burger ou salade ». Mais en imposant des <b>Variables Contextuelles (Contextual Variables)</b> claires comme `[Localisation]`, `[Météo]` et `[Ambiance]`, le champ de réponse de l'IA se réduit drastiquement et la qualité grimpe en flèche. Elle suggérera un plat chaud un jour de pluie, un menu économique avant la paie, ou un plat épicé un jour de grand stress. C'est cette capacité de perception du détail qui fait que l'équipe perçoit le bot non plus comme un « programme », mais comme un « collègue plein de tact ».

Les sections **Contraintes (Constraints)** et **Avertissement (Warning)** au bas du prompt sont les garde-fous les plus importants. La pause déjeuner dure rarement plus d'une heure. Si le bot recommande un menu gastronomique trop long ou un plat trop clivant, la confiance envers l'outil chutera. De plus, pour éviter que l'IA n'invente des noms de restaurants fictifs (phénomène d'hallucination), j'ai imposé une restriction stricte pour qu'elle se concentre uniquement sur le <b>'Nom du plat'</b>.

Si ce bot reçoit un accueil positif, utilisez-le comme tremplin pour faire évoluer votre système. Par exemple, si les fonctions IA natives de Slack sont limitées, connectez ce prompt à des **plateformes d'automatisation externes comme Zapier ou Make.com**. Lorsqu'un collègue poste un emoji spécifique (🍱), Zapier peut le détecter, envoyer le prompt à l'API de ChatGPT, et renvoyer le résultat sous forme de message élégant dans Slack.

Un tel pipeline d'automatisation peut être décliné à l'infini : "Bot de compliments entre collègues", "Bot de rétrospective hebdomadaire", "Partenaire de brainstorming", etc. Je vous encourage vivement à faire de ce bot de déjeuner votre premier pas vers la conception d'un environnement de travail hautement automatisé. Déléguer les micro-décisions quotidiennes au système pour libérer votre cerveau pour des tâches plus créatives et productives : c'est là le cœur de la véritable automatisation visée par ce prompt.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Mon équipe utilise la version gratuite de Slack, puis-je utiliser le Workflow Builder ?**
  - R : Malheureusement, le Workflow Builder natif de Slack n'est disponible que dans les plans payants (Pro et supérieurs). Si vous êtes en version gratuite, utilisez des outils externes comme Zapier ou Make.com. Vous pouvez configurer un déclencheur basé sur un message textuel ou un Webhook pour envoyer une requête à l'API de ChatGPT et renvoyer la réponse dans Slack.

- **Q : Quelle est la différence avec un bot codé directement en Python ?**
  - R : Coder un bot avec une bibliothèque comme `slack-bolt` permet des fonctionnalités plus sophistiquées comme des boutons interactifs ou une connexion aux bases de données internes. Cependant, cela nécessite un hébergement serveur (AWS, Heroku, etc.) et une maintenance continue. Pour un bot de recommandation textuelle, une approche **No-code via Workflow** est largement plus avantageuse en termes de retour sur investissement (ROI).

---

## 🧬 Anatomie du prompt (Pourquoi ça marche ?)

1. **Assignation de variables basées sur la situation (Contextual Variables) :** Au lieu d'un simple "recommande un menu", nous avons injecté des variables claires comme `[Météo actuelle]`, `[Ambiance]` et `[Participants]`. Cela empêche l'IA de produire du texte générique et l'immerge dans la situation réelle de l'utilisateur pour un résultat ultra-personnalisé (Hyper-personalized).
2. **Contrôle des hallucinations et des préférences (Constraint Setting) :** Le bloc `Avertissement (Warning)` en fin de prompt ancre les contraintes de temps des employés dans la logique de l'IA. Cela filtre les plats trop clivants et élimine le risque d'inventer des noms de restaurants fictifs.
3. **Attribution d'un persona multidimensionnel (Role-playing) :** En donnant à l'IA le rôle d'un 'gourmet exigeant et GPS humain des restaurants', le ton et la manière (Tone & Manner) des réponses s'élèvent au niveau des conseils avisés d'un collègue spirituel, dépassant la simple transmission d'informations.

---

## 🎯 Conclusion (Épilogue)

L'entreprise est un lieu de compétition et de pression constante. Mais cette heure unique où l'on partage un repas avec ses collègues doit être un moment de pur plaisir. Même sans système complexe, ce petit <b>'Lunch Buddy'</b> niché dans un coin de Slack suffira à rafraîchir l'atmosphère de l'équipe et à réduire la fatigue décisionnelle.

Dès ce midi, osez arrêter le jeu silencieux des hésitations devant votre messagerie. Confiez votre choix à la **suggestion pleine de tact de votre assistant IA**. Une fois le repas décidé rapidement et l'énergie rechargée à 100 %, vous pourrez aborder votre après-midi avec une efficacité redoutable et quitter le bureau l'esprit léger ! 🍷
