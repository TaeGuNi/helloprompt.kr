---
layout: /src/layouts/Layout.astro
title: "Rééquilibrage de Portefeuille IA : Trouver le Nombre d'Or"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Finance & Investissement"
description: "Prompt pour vérifier mon état d'allocation d'actifs et recevoir une suggestion de ratio de rééquilibrage optimal."
tags: ["Investissement", "AllocationActifs", "Rééquilibrage", "Portefeuille"]
---

# 📝 Rééquilibrage de Portefeuille IA : Trouver le Nombre d'Or

> **🎯 Recommandé pour :** Tout le monde
> **⏱️ Temps requis :** 5 minutes
> **🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Ne mettez pas les œufs dans le même panier, l'état de votre panier est-il correct ?"_

La norme de l'investissement est l'allocation d'actifs, mais avec le temps, des actifs spécifiques deviennent trop gros ou trop petits, brisant l'équilibre. Ce prompt analyse le poids actuel des actifs, calcule l'écart avec le poids cible, et dit "quoi et combien vendre et acheter" avec une quantité spécifique.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Analysez le poids par classe d'actifs du portefeuille actuel.
2. Comparez avec le Poids Cible et calculez l'excès/déficit.
3. Présentez un Plan d'Action de rééquilibrage spécifique incluant la quantité Achat/Vente.

---

## 🚀 La Solution : « Accordeur d'Équilibre d'Actifs »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

> **Rôle :** Tu es un `[Gestionnaire de Portefeuille]` gérant les actifs de clients VIP dans une société de gestion d'actifs.
> **Demande :** Vérifie mon état d'allocation d'actifs et suggère un ratio de rééquilibrage optimal.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous et utilisez-le.

> **Rôle :** Tu es un `[Gestionnaire de Portefeuille]` gérant les actifs de clients VIP dans une société de gestion d'actifs.
>
> **Contexte :** Je veux rééquilibrer mon portefeuille d'investissement.
> Mon actif total est `[100 Millions KRW]`, et le poids cible est `[Action 60 %, Obligation 30 %, Cash 10 %]`.
>
> **Actifs Actuels Détenus :**
>
> - Action : `[75 Millions KRW]` (Apple, Samsung Electronics, etc.)
> - Obligation : `[15 Millions KRW]` (ETF Trésor US)
> - Cash : `[10 Millions KRW]`
>
> **Tâche :**
>
> 1. Montre la différence (taux de disparité) entre le poids actuel et le poids cible dans un tableau.
> 2. Calcule **quel actif vendre ou acheter et combien (montant)** pour correspondre au poids cible.
> 3. Explique brièvement l'effet attendu après le rééquilibrage (Réduction du risque, etc.).
>
> **Contraintes :**
>
> - Suppose que le coût de transaction (frais, taxe) est 0 pour le calcul.
> - Conseille dans un ordre spécifique comme "Vendre pour sécuriser du cash puis acheter".

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Entrée)

```text
J'ai des actions et des obligations, comment ajuster le poids ?
```

### ✅ Après (Résultat)

```text
### ⚖️ Proposition de Rééquilibrage de Portefeuille

**1. Analyse de Poids**
| Actif | Montant Actuel | Poids Actuel | Poids Cible | Différence |
| :--- | :--- | :--- | :--- | :--- |
| **Action** | 75M | 75 % | 60 % | 🔻 15 % (Excès) |
| **Obligation** | 15M | 15 % | 30 % | 🔺 15 % (Court) |
| **Cash** | 10M | 10 % | 10 % | ✅ Correct |

**2. Plan d'Action**
1. **[Vendre]** Vendez pour **15 Millions KRW** d'actifs actions. (Réalisation de profit)
2. **[Acheter]** Achetez pour **15 Millions KRW** supplémentaires d'actifs obligations avec le cash sécurisé.

**3. Effet Attendu**
Effet de réduction du risque de volatilité en réduisant le poids des actions gonflé par la hausse du cours des actions, et achat d'obligations sous-évaluées à bas prix.
```

---

## 🎯 Conclusion

L'investissement n'est pas un domaine de prédiction mais un domaine de réponse. Faire simplement un rééquilibrage mécanique permet d'investir sans perdre.

Maintenant quittez le travail ! 🍷
