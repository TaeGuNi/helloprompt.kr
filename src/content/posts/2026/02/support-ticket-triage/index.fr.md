---
layout: /src/layouts/Layout.astro
title: " \"고객 문의 자동 분류 및 우선순위 지정 (CS Automation)\""
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "업무 자동화"
description: " \"Un prompt d'automatisation du service client qui analyse les émotions pour détecter et prioriser les requêtes des clients en colère.\""
tags: ["CS", "고객경험", "자동화", "감정분석"]
---

# 📝 Ne faites plus patienter vos clients en colère.

- **🎯 Cible recommandée :** Managers Service Client, E-commerçants, Responsables Expérience Client (CX)
- **⏱️ Temps gagné :** 1 heure → 1 minute
- **🤖 Modèles recommandés :** GPT-3.5 Turbo (Rapide), GPT-4o (Précis)

- ⭐ **Difficulté :** ⭐⭐☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐☆
- 🚀 **Utilité :** ⭐⭐⭐☆☆

> _"La rapidité est la forme la plus pure de politesse. Ne ratez pas le moment crucial pour un client en colère."_

Avez-vous déjà ressenti ce sentiment d'impuissance face à des centaines de requêtes qui s'accumulent dans votre service client ? En répondant chronologiquement, il vous est sans doute arrivé de passer à côté d'urgences critiques comme une "erreur de livraison" ou un "double prélèvement", provoquant l'explosion de colère d'un client. Il est temps de changer d'approche. En utilisant l'IA, analysez l'état émotionnel de vos clients et le degré d'urgence de leurs demandes pour filtrer et réorganiser vos priorités, à l'image du "triage" aux urgences d'un hôpital.

---

## ⚡️ Résumé en 3 points (TL;DR) {#tl-dr}

1. **Collecte des données :** Rassemblez l'historique des requêtes clients et transmettez-le à l'IA.
2. **Triage par l'IA :** L'IA analyse, attribue un "score de sentiment" et classe chaque requête par "catégorie".
3. **Réponse priorisée :** Traitez en priorité absolue les requêtes présentant un score de sentiment élevé (colère/mécontentement) et relevant de catégories urgentes (paiement/livraison).

---

## 🚀 La Solution : "Prompt de Triage des Urgences CS"

### 🥉 Version Basique (Basic Version)

Utilisez cette version pour catégoriser rapidement les requêtes.

> **Rôle (Role) :** Tu es un `[Manager Service Client]` rapide et précis.
> **Tâche (Task) :** Lis le contenu de la requête ci-dessous, évalue sa `[Catégorie]` et son `[Niveau d'urgence (Élevé/Moyen/Faible)]`, puis donne-moi ta conclusion.
> **Requête (Input) :** `[Copiez/collez le contenu de la requête client ici]`


### 🥇 Version Pro (Pro Version)

Idéale pour intégrer l'analyse des sentiments, gérer les risques d'attrition (churn) et clarifier les priorités. Sa structure est parfaitement adaptée pour être connectée à des pipelines d'automatisation (Zapier, Make, etc.).

> **Rôle (Role) :** Tu es un `[Expert Senior en Expérience Client (CX)]`, doté d'un jugement impartial et d'une profonde empathie.
>
> **Contexte (Context) :**
>
> - **Contexte :** Avec une équipe CS aux effectifs limités, nous devons faire face à un afflux massif de requêtes. Il est impératif d'établir des priorités claires.
> - **Objectif :** L'objectif principal est de détecter et de prendre en charge en priorité absolue les requêtes des clients mécontents (Risque d'Attrition / Churn Risk) afin d'éviter qu'ils ne quittent notre service.
>
> **Tâche (Task) :**
>
> Analyse la `[Liste de requêtes]` fournie et exécute les trois tâches suivantes :
>
> 1. **Score de Sentiment (Sentiment Score) :** Évalue l'état émotionnel de chaque requête sur une échelle de 1 à 5. (1 : Très satisfait/Heureux ~ 5 : Très en colère/Mécontent).
> 2. **Catégorisation :** Attribue à chaque requête l'une des catégories suivantes : Livraison / Remboursement / Défaut produit / Question simple / Autre.
> 3. **Priorité et Justification :** En combinant le score de sentiment et la catégorie, détermine la priorité de traitement (High/Medium/Low) et explique clairement la raison de ce choix en une seule phrase.
>
> **Contraintes (Constraints) :**
>
> - **Format de sortie :** Tu dois IMPÉRATIVEMENT renvoyer le résultat sous la forme d'un tableau JSON (JSON Array). (Ce résultat étant destiné à une intégration système, n'ajoute absolument aucune explication ou texte supplémentaire).
> - **Exemple de structure JSON :** `[{"id": 1, "sentiment": 5, "category": "Remboursement", "priority": "High", "reason": "Forte contestation concernant un retard de remboursement et menace de poursuites judiciaires."}]`
>
> **Données d'entrée (Input) :**
> `[Collez ici la liste complète des requêtes à analyser]`

---

## 💡 L'Avis de l'Expert (Insight) {#insight}

La véritable puissance de ce prompt ne réside pas dans la simple génération de texte, mais bien dans sa capacité à s'intégrer à un **"workflow automatisé"**. En forçant le format de sortie en JSON, ce prompt devient parfaitement compatible avec des outils d'automatisation no-code comme Zapier ou Make. Par exemple, configurez un scénario tel que : **"Si l'IA détecte une requête avec un score de sentiment de 5 (très en colère), envoyer immédiatement une [Alerte Urgente] sur le canal Slack de l'équipe CS."** Vous sécurisez ainsi un temps de réaction précieux (le 'Golden Time') avant que l'insatisfaction du client ne se propage sur les réseaux sociaux ou les forums. Depuis que j'ai mis en place cette méthode, j'ai considérablement réduit le nombre d'incidents mineurs qui menaçaient de se transformer en véritables crises de relations publiques.

---

## 🙋 Foire Aux Questions (FAQ) {#faq}

- **Q : Combien de requêtes puis-je analyser en une seule fois ?**
  - A : Avec un modèle comme GPT-4o, vous pouvez traiter sans problème entre 50 et 100 requêtes simultanément. Cependant, pour éviter d'atteindre la limite de tokens, je vous recommande de segmenter vos envois par lots (par exemple, toutes les heures ou par demi-journée) plutôt que d'injecter des milliers de requêtes d'un coup.

- **Q : L'IA parvient-elle à détecter l'ironie ou les sous-entendus des clients ?**
  - A : Absolument. Les modèles récents comme GPT-4o excellent dans la compréhension du contexte et sauront repérer le sarcasme d'une phrase telle que "Eh bien, quelle rapidité fulgurante ^^". Si votre secteur d'activité utilise un jargon spécifique, ajoutez simplement une note dans la section `Contexte (Context)` : _"Dans notre industrie, l'expression 'X' indique un problème critique"_. La précision de l'analyse en sera décuplée.

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

1.  **Quantification des Émotions (Sentiment Scoring) :** En traduisant un sentiment vague en une donnée chiffrée (de 1 à 5), nous permettons un tri et un filtrage mécaniques et systématiques.
2.  **Contraintes Strictes (Constraints) :** En interdisant à l'IA de produire autre chose que du JSON, nous concevons un prompt robuste, garantissant l'absence d'erreurs de parsing lors de l'intégration avec des API ou des outils no-code.
3.  **Exigence de Justification (Reasoning) :** Demander à l'IA de justifier son classement "High" en une phrase offre une 'prévisibilité' au responsable CS, lui permettant de saisir l'enjeu avant même d'ouvrir la requête détaillée.

---

## 📊 Preuve à l'Appui : Avant & Après

### ❌ Avant (Méthode classique : Tri chronologique)

```text
[Requête 1 - 09:00] Bonjour, est-il possible d'échanger la taille ?
[Requête 2 - 09:02] Quand ma commande sera-t-elle livrée ?
[Requête 3 - 09:05] Hé, j'ai annulé mon paiement hier, pourquoi j'ai encore été débité ? C'est une blague ?! Je vais porter plainte !
[Requête 4 - 09:10] J'ai oublié mon mot de passe.
```

_Problème : La requête ultra-critique de 09:05, au bord de l'explosion, se retrouve noyée au milieu de questions basiques, retardant ainsi sa prise en charge._

### ✅ Après (Application du Triage par l'IA)

```json
[
  {
    "id": 3,
    "sentiment": 5,
    "category": "Remboursement",
    "priority": "High",
    "reason": "Colère extrême due à un double prélèvement et menace de poursuites légales."
  },
  {
    "id": 2,
    "sentiment": 3,
    "category": "Livraison",
    "priority": "Medium",
    "reason": "Question standard concernant les délais de livraison."
  },
  {
    "id": 1,
    "sentiment": 2,
    "category": "Autre",
    "priority": "Low",
    "reason": "Simple demande d'échange de taille."
  },
  {
    "id": 4,
    "sentiment": 2,
    "category": "Autre",
    "priority": "Low",
    "reason": "Demande basique d'assistance pour un compte utilisateur."
  }
]
```

_Résultat : L'IA détecte instantanément la gravité de la requête `id: 3` et la propulse tout en haut de la file d'attente (Priorité : High)._

---

## 🎯 Conclusion

Il est humainement impossible, et stratégiquement inefficace, de traiter un grand volume de requêtes à la même vitesse. L'enjeu crucial est de bâtir un système capable de décider **"qui sauver en premier"**.

Copiez ce prompt dès aujourd'hui et intégrez-le à vos canaux de support. Vous réduirez la fatigue émotionnelle de vos équipes et pourrez concentrer votre énergie sur les véritables situations de crise. Je vous souhaite une excellente fin de journée, l'esprit serein ! 🍷
