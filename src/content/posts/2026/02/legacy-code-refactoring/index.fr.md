---
layout: /src/layouts/Layout.astro
title: "ChatGPT로 스파게티 코드 리팩토링 & 테스트 코드 짜기"
author: "HelloBot"
date: "2026-02-10"
updatedDate: "2026-02-10"
category: "개발/코딩"
description: "Un guide complet pour utiliser l'IA comme un développeur senior avec 10 ans d'expérience. Apprenez à refactoriser le code hérité en toute sécurité et à générer automatiquement des tests unitaires."
tags: ["Refactoring", "CleanCode", "UnitTesting", "Developer"]
---

# 🧹 Nettoyeur de Code Hérité : Refactorisation & Automatisation des Tests

- **🎯 Public Cible :** Développeurs juniors, responsables de la maintenance de code hérité (legacy), relecteurs de code (code reviewers)
- **⏱️ Temps Requis :** 1 heure d'analyse réduite à moins de 5 minutes
- **🤖 Modèles Recommandés :** Claude 3.5 Sonnet, GPT-4o (Claude est fortement recommandé pour les logiques complexes et l'analyse de contextes longs)

- ⭐ **Difficulté :** ⭐⭐☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"Mais qui a bien pu écrire ce code ? (...Ah, c'était moi il y a un an.)"_

Avez-vous déjà été confronté à un **code hérité (Legacy Code)** tellement enchevêtré de `if-else`, avec des noms de variables incompréhensibles et des gestions d'exceptions non documentées, que vous aviez l'impression que tout le système allait s'effondrer au moindre changement ?

N'ayez plus peur. Voici une technique d'ingénierie de prompt parfaite pour recruter l'IA comme votre **Pair Programmer Senior** dédié. Vous pourrez ainsi refactoriser élégamment un code spaghetti et construire instantanément un bouclier protecteur de tests unitaires.

---

## ⚡️ Résumé en 3 points (TL;DR)

1. **Exiger d'abord une explication :** Ne modifiez pas le code à l'aveuglette. Demandez d'abord à l'IA d'analyser le flux d'exécution et l'intention du code.
2. **Appliquer les principes du Clean Code :** Refactorisez la structure et le nommage en toute sécurité en vous basant sur les principes SOLID et la lisibilité.
3. **Construire un bouclier avec des tests :** Générez automatiquement des tests unitaires (Unit Tests) incluant les cas limites (Edge Cases) pour garantir que les fonctionnalités restent identiques avant et après la refactorisation.

---

## 🚀 La Solution : "Simulateur de Développeur Senior" (Senior Dev Simulator)

### 🥇 Version Pro (Expert)

Si vous demandez simplement "Refactorise ce code", vous courez le risque de casser les fonctionnalités existantes. Ce prompt utilise la technique **Chain-of-Thought (Chaîne de Pensée)** pour forcer l'IA à réfléchir de manière logique et séquentielle.

> **Rôle (Role) :** Tu es un `[développeur backend senior avec 10 ans d'expérience]` issu d'une grande entreprise technologique (Big Tech) comme Google ou Meta. Tu es un fervent défenseur de la philosophie du Clean Code et tu appliques strictement le TDD (Test-Driven Development).
>
> **Contexte (Context) :**
> Je viens de reprendre un code hérité très désordonné écrit en `[insérer le langage, ex: Python/Java]`. La lisibilité est catastrophique et la maintenance est presque impossible.
>
> **Tâche (Task) :**
> Exécute les étapes suivantes de manière approfondie et séquentielle.
>
> **Étape 1. Analyse et diagnostic du code :** Résume en une phrase le rôle métier de ce code et signale spécifiquement 3 problèmes critiques (Code Smells).
> **Étape 2. Refactorisation sécurisée :** Conserve à 100 % la logique métier originale et les effets de bord (Side Effects). Maximise la lisibilité en séparant les fonctions selon le principe de responsabilité unique (SRP) et en clarifiant le nommage des variables/méthodes. Ajoute impérativement des Docstrings et des commentaires pour les logiques métier complexes.
> **Étape 3. Validation défensive (Tests) :** Rédige des tests unitaires (Unit Tests) qui garantissent parfaitement que le code refactorisé fonctionne exactement comme l'original. Tu dois inclure des cas de succès, mais aussi au moins deux cas limites (Edge Cases) pouvant générer des exceptions.
>
> **Code d'entrée :**
>
> ```python
> [Collez ici le code hérité à analyser]
> ```

---

## 💡 Le Commentaire de l'Auteur (Insight)

La véritable valeur de ce prompt ne réside pas seulement dans la production d'un code esthétique, mais dans le fait qu'il **met en place un "filet de sécurité" (le code de test) en premier lieu**. J'ai personnellement appliqué ce prompt sur le terrain lorsque j'ai dû reprendre un ancien module de paiement en Java vieux de 5 ans.

Le plus surprenant a été de voir l'IA identifier et intégrer dans les tests des cas limites (Edge Cases) que je n'avais pas remarqués moi-même (par exemple, le traitement conditionnel lorsque le montant du paiement est de 0).

**🔥 Astuce d'optimisation pour les professionnels :**
Si vous copiez et collez une classe entière de plusieurs centaines de lignes d'un coup, l'IA risque de subir des "hallucinations" ou de perdre le contexte. **Découpez votre code au niveau de la méthode (moins de 100 lignes)** avant de poser votre question. La profondeur de l'analyse et la précision des tests en seront considérablement améliorées.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Quel modèle d'IA est le plus adapté pour manipuler la logique de programmation ?**
  - R : En 2026, **Claude 3.5 Sonnet** et **GPT-4o** sont les deux piliers dans le domaine du codage et de la refactorisation. Parmi eux, Claude 3.5 Sonnet offre des performances légèrement supérieures pour maintenir des contextes complexes et rédiger un Clean Code adapté aux humains.

- **Q : Puis-je soumettre le code interne de mon entreprise à l'IA sans risque pour la sécurité ?**
  - R : **Absolument pas.** Les informations sensibles telles que les clés API, les adresses IP du réseau interne, les données réelles des clients ou les algorithmes de sécurité essentiels doivent impérativement être masquées (`[MASKED]`) ou remplacées par des données fictives (Dummy Data) avant d'exécuter le prompt. Alternativement, n'utilisez que des environnements d'IA d'entreprise (Enterprise AI) déployés en interne.

- **Q : Comment réagir si une erreur survient après la refactorisation ?**
  - R : Il est très probable que l'IA ait oublié une dépendance (Dependency). Copiez l'intégralité du journal des erreurs (error log) ainsi que le contexte du code original et donnez-lui un retour précis : _"Cette erreur s'est produite à cet endroit. Il semble que tu aies omis la [condition spécifique] de la logique originale. Corrige-la s'il te plaît."_

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

1. **Attribution d'un Persona Senior (Role) :** En imposant le persona strict d'un "Senior avec 10 ans d'expérience, défenseur du Clean Code", nous élevons les standards pour que l'IA ne se contente pas de fournir un code qui fonctionne, mais un code de haute qualité, hautement maintenable.
2. **Chain-of-Thought (Chaîne de Pensée) :** Au lieu d'ordonner brutalement "Corrige", nous forçons une structure logique en 3 étapes : **[Analyse → Modification → Validation]**. C'est le mécanisme clé qui incite l'IA à améliorer la structure sans altérer l'intention initiale du code.
3. **Cas limites obligatoires (Constraints) :** L'exigence explicite d'inclure des cas limites lors de la création des tests garantit un code robuste et de qualité, prêt à être utilisé en production.

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Entrée : Un code hérité cauchemardesque)

```python
def calc_trx(a, t, f=False):
    # a: amount, t: type
    if t == 1:
        if f: return a * 1.1 + 500
        else: return a * 1.1
    elif t == 2:
        return a - (a * 0.05)
    else: return 0 # erreur
```

### ✅ Après (Résultat : Clean Code & Tests rédigés par un Senior)

```python
from enum import Enum
import unittest

class TransactionType(Enum):
    DEPOSIT = 1
    WITHDRAWAL = 2

def calculate_transaction_amount(amount: float, transaction_type: TransactionType, apply_fee: bool = False) -> float:
    """
    Calcule le montant final après application des taxes et frais en fonction du type de transaction (Dépôt/Retrait).
    """
    if amount < 0:
        raise ValueError("Le montant de la transaction doit être supérieur à 0.")

    if transaction_type == TransactionType.DEPOSIT:
        taxed_amount = amount * 1.1
        return taxed_amount + 500 if apply_fee else taxed_amount

    elif transaction_type == TransactionType.WITHDRAWAL:
        return amount * 0.95

    return 0.0

# ----------------- Unit Tests ----------------- #
class TestCalculateTransaction(unittest.TestCase):
    def test_deposit_with_fee(self):
        self.assertEqual(calculate_transaction_amount(1000, TransactionType.DEPOSIT, True), 1600.0)

    def test_withdrawal_amount(self):
        self.assertEqual(calculate_transaction_amount(1000, TransactionType.WITHDRAWAL), 950.0)

    def test_negative_amount_raises_error(self):
        with self.assertRaises(ValueError):
            calculate_transaction_amount(-500, TransactionType.DEPOSIT)
```

---

## 🎯 Conclusion

Ne soupirez plus devant un écran rempli de code hérité.
Avec un prompt bien conçu et l'aide de l'IA, la refactorisation n'est plus une corvée angoissante, mais un **nettoyage gratifiant et amusant**.

Pourquoi ne pas commencer dès aujourd'hui à refactoriser avec l'IA cette fonction que vous détestiez tant voir ? 💻 Votre heure de fin de journée de travail s'en trouvera visiblement avancée !
