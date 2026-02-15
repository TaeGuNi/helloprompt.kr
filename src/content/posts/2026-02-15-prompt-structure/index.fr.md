---
title: "Structurer des Prompts Complexes : Le Cadre CREATE"
date: "2026-02-15"
desc: "Apprenez à obtenir des réponses d'IA cohérentes et de haute qualité en utilisant le cadre CREATE, un concept clé de l'ingénierie de prompt pour les tâches complexes."
---

# Structurer des Prompts Complexes : Le Cadre CREATE

À mesure que les modèles d'IA évoluent, nous leur confions des tâches de plus en plus complexes. Si des prompts simples suffisent pour des questions simples, instruire l'IA sur une logique métier complexe ou des tâches créatives nécessite une approche systématique.

Cet article présente le **Cadre CREATE**, une méthode pour structurer logiquement les prompts afin de maximiser les performances de l'IA.

## Qu'est-ce que le Cadre CREATE ?

CREATE représente six éléments clés essentiels pour une construction efficace de prompts.

1.  **C**ontext (Contexte) : Attribuer un rôle et une situation à l'IA.
2.  **R**equest (Demande) : Énoncer clairement la tâche spécifique à accomplir.
3.  **E**xamples (Exemples) : Fournir des exemples (Few-shot) du résultat souhaité.
4.  **A**djustments (Ajustements) : Définir le ton, le style et les contraintes.
5.  **T**ype of Output (Type de Sortie) : Spécifier le format du résultat (tableau, code, markdown, etc.).
6.  **E**xtras (Extras) : Inclure la gestion des cas particuliers ou des instructions spéciales.

---

## Guide Étape par Étape

### 1. Context (Contexte)

Donner une personnalité à l'IA change considérablement la qualité de la réponse.

> "Vous êtes un Ingénieur Logiciel Senior avec 10 ans d'expérience. Vous êtes spécialisé dans la refactorisation de code hérité (legacy) en code propre et moderne."

### 2. Request (Demande)

Évitez l'ambiguïté et utilisez des verbes clairs.

> "Analysez la fonction Python fournie ci-dessous et refactorisez-la pour améliorer la lisibilité et optimiser la vitesse d'exécution."

### 3. Examples (Exemples)

L'IA apprend les modèles à travers des exemples. Montrez des paires d'entrée et de sortie.

> **Entrée :**
> `def calc(x,y): return x+y`
>
> **Sortie :**
>
> ```python
> def add_numbers(a: int, b: int) -> int:
>     """Retourne la somme de deux nombres."""
>     return a + b
> ```

### 4. Adjustments (Ajustements)

Décidez du ton et de la manière de la réponse.

> "Gardez les explications concises et utilisez une terminologie professionnelle, mais maintenez un ton amical accessible aux développeurs juniors."

### 5. Type of Output (Type de Sortie)

Spécifiez comment vous souhaitez recevoir le résultat.

> "Présentez le résultat en montrant d'abord le code complet modifié dans un bloc de code, suivi d'un résumé à puces des modifications."

### 6. Extras (Extras)

Prévenir les situations inattendues.

> "Si une vulnérabilité de sécurité est trouvée dans le code, veuillez émettre un message d'avertissement séparé en plus de la refactorisation."

---

## Conclusion

L'utilisation du cadre CREATE vous permet de réduire le temps de rédaction des prompts tout en maintenant une qualité de sortie constante. Face à des problèmes complexes, au lieu de poser des questions vagues, organisez vos pensées selon la structure CREATE. L'IA répondra aussi intelligemment que vous la concevez.
