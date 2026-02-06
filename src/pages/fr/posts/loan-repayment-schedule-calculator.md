---
layout: /src/layouts/Layout.astro
title: "Calendrier de Remboursement de Prêt : Principal et Intérêt Égaux vs Principal Égal"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Automatisation du Travail"
description: "Modèle de calculateur d'intérêts de prêt fait directement dans Excel sans avoir besoin d'entrer sur des sites bancaires."
tags: ["Excel", "IntérêtPrêt", "FonctionFinancière", "PMT"]
---

# 📝 Calendrier de Remboursement de Prêt : Principal et Intérêt Égaux vs Principal Égal

> **🎯 Recommandé pour :** Tout le monde
> **⏱️ Temps requis :** 5 minutes
> **🤖 Modèle recommandé :** Tous les modèles d'IA

| Difficulté | Efficacité |  Utilité  |
| :--------: | :--------: | :-------: |
|  ⭐⭐☆☆☆   | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"En payant 1 million de wons par mois, combien est le principal et combien est l'intérêt ?"_

Il existe largement deux méthodes de remboursement de prêt. **'Principal et Intérêt Égaux'** où le paiement mensuel est le même, et **'Principal Égal'** où il diminue avec le temps. Lequel est avantageux pour moi ? Faire un calendrier de remboursement complet en utilisant les fonctions financières Excel (`PMT`, `IPMT`, `PPMT`) montre la différence totale d'intérêts en un coup d'œil.

---

## ⚡️ Résumé en 3 lignes (TL;DR)

1. Calculer automatiquement le paiement mensuel (Principal + Intérêt) avec la fonction `PMT` (VPM).
2. Séparer la portion d'intérêt et de principal avec les fonctions `IPMT` (INTPER) et `PPMT` (PRINCPER).
3. Générer un calendrier montrant le changement de solde par tour de remboursement (1~360 tours).

---

## 🚀 La Solution : « Auto-Calculateur de Prêt »

### 🥉 Version De Base

Utilisez ceci lorsque vous avez juste besoin d'un résultat rapide.

> **Rôle :** Tu es un `[Expert en Excel Financier]`.
> **Demande :** Modèle de calculateur d'intérêts de prêt fait directement dans Excel sans avoir besoin d'entrer sur des sites bancaires.

<br>

### 🥇 Version Pro (Expert)

Utilisez ceci lorsque vous avez besoin d'une qualité détaillée.

Copiez le contenu du **PROMPT** ci-dessous et utilisez-le.

> **Rôle :** Tu es un `[Expert en Excel Financier]`.
>
> **Contexte :** Je veux faire un calendrier de prêt de la méthode de **Remboursement Principal et Intérêt Égaux** dans Excel.
>
> - **Montant du Prêt :** 100 Millions KRW (B1)
> - **Taux d'Intérêt Annuel :** 4,5 % (B2)
> - **Période de Remboursement :** 10 Ans (120 Mois) (B3)
>
> **Tâche :**
>
> 1. Dis-moi la **formule de fonction `PMT`** pour trouver le paiement mensuel total (Principal + Intérêt).
> 2. Dis-moi les formules pour trouver **l'Intérêt (`IPMT`)** et le **Principal (`PPMT`)** sortant au N-ième tour (ex : 1er tour) respectivement.
> 3. Donne la formule appliquant la référence absolue ($) pour que je puisse glisser et remplir du 1er au 120e tour.
>
> **Contraintes :**
>
> - N'oublie pas de diviser le taux d'intérêt annuel par 12 car c'est un calcul mensuel.

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Entrée)

```text
Comment calculer l'intérêt de prêt dans Excel ?
```

### ✅ Après (Résultat)

````text
### 🏦 Collection de Formules de Remboursement de Prêt Excel

**1. Paiement Mensuel (Total Principal + Intérêt)**
```text
=PMT($B$2/12, $B$3*12, -$B$1)
```
````

_Résultat : Env. 1 036 384 KRW (Payer autant mensuellement)_

**2. Combien est l'intérêt ? (Basé sur le 1er tour)**

- En supposant que le tour (1, 2, 3...) est dans la Colonne A :

```text
=IPMT($B$2/12, A5, $B$3*12, -$B$1)
```

_(A5 est le tour actuel. Glisser vers le bas)_

**3. Combien est le principal ?**

```text
=PPMT($B$2/12, A5, $B$3*12, -$B$1)
```

**💡 Analyse :**
Au stade précoce `IPMT` (Intérêt) est grand et `PPMT` (Principal) est petit, mais la portion de remboursement du principal augmente avec le temps.

```

---

## 🎯 Conclusion

Vérifier le coût total des intérêts visuellement brûle votre volonté de rembourser le prêt. Dessinez votre propre carte de remboursement avec Excel.

Maintenant quittez le travail ! 🍷
```
