---
layout: /src/layouts/Layout.astro
title: " \"Slack 봇 만들기: '점심 뭐 먹지?' 추천해주는 사내 봇\""
author: "Jay"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "업무 자동화"
description: "Découvrez comment connecter le Workflow Builder de Slack à l'IA pour créer un assistant de recommandation de repas pour votre équipe, sans écrire la moindre ligne de code."
tags: ["Slack", "슬랙", "챗봇", "자동화", "사내문화"]
---

# 🤖 Créer un bot Slack : l'assistant de recommandation de repas pour votre équipe

- **🎯 Cible recommandée :** Les collaborateurs qui redoutent le choix quotidien du déjeuner, ou les équipes RH souhaitant insuffler plus de convivialité dans les échanges internes.
- **⏱️ Temps estimé :** 10 minutes (via Slack Workflow Builder)
- **🤖 Modèle recommandé :** ChatGPT-4o (idéal pour des recommandations créatives et ultra-contextualisées)

- ⭐ **Difficulté :** ⭐⭐☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _« On mange où ce midi ? Peu importe... Des pâtes ? Bof, pas trop envie... » Mettez fin à ce supplice quotidien ! Confiez cette mission à l'IA et préservez votre charge mentale pour ce qui compte vraiment._

Le choix du déjeuner est bien souvent le plus grand dilemme de la journée au bureau. Fini les regards fuyants et les silences gênés : il vous suffit désormais d'interroger votre messagerie interne. Demandez-lui « Qu'est-ce qu'on mange par ce temps pluvieux ? » pour obtenir une suggestion pertinente et pleine d'esprit, du type : « Avec ce déluge, rien ne vaut un bon ramen fumant pour se réchauffer ! ». Voici comment déployer ce bot intelligent directement via le Workflow Builder de Slack, sans écrire la moindre ligne de code.

---

## ⚡️ Résumé en 3 points (TL;DR)

1. Déployez un bot automatisé en mode no-code grâce au **Workflow Builder** de Slack.
2. Configurez un mot-clé (ex. : « Recommandation repas ») ou une réaction emoji comme déclencheur (*trigger*).
3. Connectez une IA (comme ChatGPT) pour exécuter un prompt capable de suggérer des menus sur mesure, parfaitement adaptés à la météo et au contexte de l'équipe.

---

## 🚀 La solution : le prompt « Lunch Buddy »

### 🥉 Version Basique (Basic Version)

Idéale pour obtenir une suggestion instantanée lorsque personne n'arrive à se décider.

> **Rôle :** Tu es un assistant convivial et bienveillant, chargé de choisir le menu du déjeuner pour notre équipe.
> **Tâche :** Choisis de manière aléatoire une catégorie parmi la cuisine française, italienne, asiatique, la restauration rapide ou l'alimentation saine (healthy). Ensuite, recommande 3 plats populaires et fédérateurs dans cette catégorie, parfaits pour un déjeuner entre collègues.

### 🥇 Version Pro (Pro Version)

À privilégier pour des suggestions pointues et parfaitement calibrées selon votre contexte (météo, ambiance de l'équipe, taille du groupe).

> **Rôle (Role) :** Tu es un fin gourmet très exigeant et un véritable GPS des meilleurs restaurants situés autour de notre bureau (`[Localisation du bureau, par ex. : La Défense]`).
>
> **Contexte (Context) :**
>
> - Météo : `[Météo actuelle, par ex. : Pluvieux, Ensoleillé, Froid]`
> - Ambiance de l'équipe : `[État d'esprit du moment, par ex. : Gros stress, Jour de paie, En plein rush]`
> - Nombre de participants : `[Composition du groupe, par ex. : Déjeuner en solo, Toute l'équipe, Entre stagiaires]`
>
> **Tâche (Task) :**
>
> 1. Recommande un unique menu de déjeuner s'inscrivant parfaitement dans le contexte décrit ci-dessus.
> 2. Rédige une explication percutante et pleine d'esprit (1 à 2 phrases) pour justifier ce choix et susciter l'enthousiasme de l'équipe.
> 3. Formate ta réponse sous forme de liste en Markdown, en utilisant des emojis pour dynamiser la lecture.
>
> **Contraintes (Constraints) :**
>
> - Exclus absolument les plats trop clivants (ex. : très épicés, abats) ainsi que les repas excessivement lourds qui risqueraient de prolonger indûment la pause déjeuner.
>
> **Avertissement (Warning) :**
>
> - N'invente jamais de noms de restaurants fictifs. Limite-toi strictement aux noms des plats ou aux types de cuisine pour éviter toute hallucination de l'IA.

---

## 💡 L'avis de l'expert (Writer's Insight)

L'intégration d'un bot Slack transcende la simple prouesse technique : c'est un formidable levier pour façonner la **culture de votre entreprise**. Il agit comme un véritable lubrifiant social, insufflant de la légèreté et des opportunités d'échange au sein de canaux souvent monopolisés par des communications formelles. Si votre « Lunch Buddy » séduit vos collaborateurs, vous pourrez aisément décliner le concept : un bot dédié aux compliments, aux anniversaires ou aux rétrospectives hebdomadaires. Ces petites attentions automatisées bâtissent un climat de travail nettement plus chaleureux. Pour aller plus loin, couplez ce prompt à des solutions d'automatisation telles que Zapier ou Make ; vous vous affranchirez alors des limites natives de Slack pour concevoir un assistant IA d'une efficacité redoutable.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Mon entreprise est sur la version gratuite de Slack. Puis-je tout de même utiliser le Workflow Builder ?**
  - R : Malheureusement, le Workflow Builder de Slack est réservé aux offres payantes (forfait Pro et supérieurs). Néanmoins, vous pouvez contourner cette restriction en faisant appel à des outils comme Zapier ou Make. Ces plateformes peuvent détecter des messages ciblés dans un canal et déclencher des réponses automatiques via l'API de ChatGPT.

- **Q : Quelle est la différence avec le développement d'un bot sur mesure (en Python, par exemple) ?**
  - R : L'utilisation d'une bibliothèque telle que `slack-bolt` en Python ouvre la porte à des interactions complexes : boutons interactifs, fenêtres modales, ou encore requêtes vers vos bases de données internes. En contrepartie, cela exige un serveur dédié et une maintenance technique régulière. Pour de simples suggestions de repas et des échanges textuels, l'approche no-code par workflow demeure la solution la plus agile et la plus économique.

---

## 🧬 L'anatomie du prompt (Why it works?)

1. **Variables contextuelles (Contextual Variables) :** Plutôt que de formuler un banal « Recommande-moi un menu », l'intégration de variables (`[ ]`) telles que la météo, l'ambiance et la taille du groupe contraint l'IA à produire des recommandations sur mesure et non génériques.
2. **Contrôle des biais et prévention des hallucinations (Constraint Setting) :** La section `Avertissement (Warning)` anticipe les impératifs de la pause déjeuner (timing serré, palais variés) et interdit formellement à l'IA d'inventer des restaurants fictifs, éliminant ainsi le risque d'hallucination.
3. **Jeu de rôle (Role-playing) :** L'attribution du persona de « fin gourmet et véritable GPS des restaurants » métamorphose le ton de l'IA. D'une simple énumération d'options, la réponse se transforme en une suggestion bienveillante et pertinente, digne d'un véritable collègue.

---

## 📊 Preuve à l'appui : Avant & Après

### ❌ Avant (Le supplice du choix)

```text
Stagiaire : « Qu'est-ce qu'on mange ce midi ? »
Collègue A : « Euh... Ce que vous voulez. »
Manager : « N'importe quoi fera l'affaire. »
(S'ensuit un jeu de devinettes interminable et 10 minutes de silence gênant 🕰️)
```

### ✅ Après (L'intervention de l'assistant IA)

```text
Moi : /repas
Bot (Lunch Buddy) : « ☔ Un déjeuner d'équipe, sous la pluie, un jour de gros stress juste avant la paie ?
Dans ce contexte, je vous prescris d'urgence un **'Ramen épicé accompagné de Gyozas croustillants'** !
Évacuez la pression grâce à ce bouillon brûlant et repartez rechargés à bloc pour l'après-midi ! 🍜 »
Manager : « Parfait, c'est exactement ce qu'il nous fallait aujourd'hui. En route ! »
```

---

## 🎯 Conclusion

Bien que l'entreprise soit un lieu d'efforts et de concentration, la pause déjeuner se doit de rester une parenthèse savoureuse et décontractée. L'intégration d'un simple bot suffit souvent à détendre l'atmosphère globale et à neutraliser la fatigue décisionnelle quotidienne.

Dès aujourd'hui, mettez un terme aux tergiversations sans fin et confiez le choix de vos menus aux **suggestions astucieuses de votre nouvel assistant IA**. Bon appétit, passez une excellente après-midi productive, et surtout, quittez le bureau à l'heure ! 🍷
