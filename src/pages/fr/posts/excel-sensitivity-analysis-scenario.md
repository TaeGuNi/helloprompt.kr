---
layout: /src/layouts/Layout.astro
title: "Analyse de Sensibilité Excel : Préparation Parfaite pour les Scénarios 'Et Si'"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Automatisation du Travail"
description: "De combien le profit diminue-t-il si le taux de change augmente de 10 % ? Calculer des douzaines de cas à la fois avec la fonction Table de Données Excel."
tags: ["Excel", "AnalyseSensibilité", "Scénario", "TableDonnées"]
---

# 📝 Analyse de Sensibilité Excel : Préparation Parfaite pour les Scénarios "Et Si"

> **🎯 Recommandé pour :** Tout le monde
> **⏱️ Temps requis :** 5 minutes
> **🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"Personne ne connaît l'avenir. Mais nous pouvons calculer tous les avenirs."_

La chose la plus importante lors de la planification d'entreprise est la variable. Tableau d'**'Analyse de Sensibilité'** montrant comment le profit d'exploitation change lorsque le taux de change, le prix des matières premières, le volume des ventes, etc. changent. En utilisant la clé de triche cachée d'Excel **'Table de Données'**, vous pouvez auto-générer 100 scénarios avec une seule formule.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Établir la relation entre les variables (Taux de change, Volume des ventes) et le résultat (Profit d'exploitation).
2. Générer une matrice en utilisant la fonction 'Analyse scénarios > Table de données'.
3. Simuler le résultat lorsque deux variables changent simultanément.

---

## 🚀 La Solution : « Générateur de Matrice de Scénarios »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

> **Rôle :** Tu es un `[Expert en Modélisation Financière]` au bureau de planification stratégique.
> **Demande :** De combien le profit diminue-t-il si le taux de change augmente de 10 % ? Calculer des douzaines de cas à la fois avec la fonction Table de Données Excel.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous et utilisez-le.

> **Rôle :** Tu es un `[Expert en Modélisation Financière]` au bureau de planification stratégique.
>
> **Contexte :** Je veux faire une **Analyse de Sensibilité** dans Excel.
>
> - **But :** Observer le changement de 'Profit d'Exploitation'
> - **Variable 1 (Ligne) :** Taux de Change (1 200 KRW ~ 1 400 KRW, unité 50 KRW)
> - **Variable 2 (Colonne) :** Volume des Ventes (10k ~ 50k, unité 10k)
>
> **Tâche :**
>
> 1. Dis-moi l'ordre étape par étape pour utiliser la fonction **'Table de Données'** d'Excel.
> 2. Explique clairement où lier la Cellule d'Entrée de Ligne et la Cellule d'Entrée de Colonne pour ne pas confondre.
> 3. Donne une astuce pour dériver une intuition comme "Une couverture est nécessaire car le profit chute si le taux de change augmente" en voyant le tableau terminé.
>
> **Contraintes :**
>
> - Spécifie le chemin du menu (Onglet Données > Analyse scénarios > Table de données).

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Entrée)

```text
Comment faire un scénario de fluctuation du taux de change dans Excel ?
```

### ✅ Après (Résultat)

```text
### 🌪️ Guide en 3 Étapes de l'Analyse de Sensibilité Excel

**1. Poser le Plateau (Structure de Matrice)**
- Entrez les scénarios de **Taux de Change** (1200, 1250...) dans la Colonne A (Vertical).
- Entrez les scénarios de **Volume des Ventes** (10k, 20k...) dans la Ligne 1 (Horizontal).
- **Clé :** Doit lier **'Formule de Calcul du Profit d'Exploitation (=C10)'** à la cellule **Coin (A1)** où la Colonne A et la Ligne 1 se rencontrent.

**2. Lancer la Magie (Exécuter la Table de Données)**
- Sélectionnez tout le tableau ➔ Onglet [Données] ➔ [Analyse scénarios] ➔ Clic [Table de données].
- **Cellule d'entrée ligne :** Clic cellule **'Volume des Ventes'** des données originales (Parce que c'est l'axe horizontal !)
- **Cellule d'entrée colonne :** Clic cellule **'Taux de Change'** des données originales (Parce que c'est l'axe vertical !)

**3. Vérifier le Résultat**
- Au moment où vous appuyez sur OK, les blancs dans le tableau sont remplis de douzaines d'estimations de profit d'exploitation.
- **💡 Astuce :** Appliquez la Mise en Forme Conditionnelle (Nuances de couleurs). La 'Date limite' où le profit se transforme en déficit (Rouge) est visible d'un coup d'œil.
```

---

## 🎯 Conclusion

Lorsque l'exécutif demande "Que se passe-t-il si le taux de change devient 1 350 ?", ne paniquez pas et lisez la coordonnée (1350, Volume des Ventes) du tableau Excel. C'est un 'talent préparé'.

Maintenant quittez le travail ! 🍷
