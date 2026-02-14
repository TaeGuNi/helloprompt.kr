---
title: "Apprentissage Zero-Shot vs Few-Shot : Quand fournir des exemples"
date: "2026-02-15"
description: "Un guide pour comprendre quand utiliser le prompting zero-shot par rapport au few-shot pour des performances LLM optimales."
---

Dans le monde des grands modèles de langage (LLM), la _manière_ dont vous posez une question est tout aussi importante que _ce_ que vous demandez. Deux des techniques les plus fondamentales de l'ingénierie des prompts sont l'apprentissage **Zero-Shot** et **Few-Shot**. Comprendre la différence — et savoir quand appliquer chacune — peut considérablement élever la qualité de vos interactions avec l'IA.

## Qu'est-ce que l'apprentissage Zero-Shot ?

Le prompting **Zero-Shot** consiste à demander au modèle d'effectuer une tâche sans fournir d'exemples spécifiques du résultat souhaité. Vous vous fiez entièrement aux connaissances pré-entraînées du modèle et à sa capacité à comprendre les instructions en langage naturel.

**Exemple :**

> "Traduisez la phrase suivante en espagnol : 'The weather is nice today.'"

Ici, vous n'avez pas montré au modèle _comment_ traduire ; vous lui avez simplement dit _de_ traduire.

### Quand utiliser le Zero-Shot :

- **Tâches de connaissances générales :** Traductions standard, résumés ou réponses à des questions factuelles.
- **Instructions simples :** Lorsque la tâche est directe et ne nécessite pas de format spécifique et complexe.
- **Écriture créative :** Lorsque vous souhaitez que le modèle soit ouvert et moins contraint par un modèle rigide.
- **Tests initiaux :** Il est souvent préférable de commencer par le zero-shot pour voir comment le modèle se comporte "dès la sortie de la boîte" avant d'ajouter de la complexité.

## Qu'est-ce que l'apprentissage Few-Shot ?

Le prompting **Few-Shot** (souvent appelé "apprentissage en contexte") consiste à fournir au modèle quelques exemples (shots) de l'entrée et de la sortie souhaitée avant la requête réelle. Ces exemples servent de modèle à suivre.

**Exemple :**

> Traduisez l'anglais en argot pirate spécifique.
>
> Anglais : "Hello, how are you?"
> Pirate : "Ahoy matey, how be ye fairin'?"
>
> Anglais : "Where is the bathroom?"
> Pirate : "Where be the head?"
>
> Anglais : "I would like some water."
> Pirate :

En voyant les paires précédentes, le modèle comprend non seulement qu'il doit traduire, mais aussi le **ton** et le **style** spécifiques requis.

### Quand utiliser le Few-Shot :

- **Formatage complexe :** Lorsque vous avez besoin de la sortie dans une structure spécifique (par exemple, JSON, CSV ou un style de document spécifique) que le modèle ne parvient pas à produire avec des instructions seules.
- **Style/Ton nuancé :** Pour imiter une voix spécifique, une identité de marque ou un style linguistique.
- **Logique difficile :** Pour les tâches de raisonnement, fournir des exemples de la "chaîne de pensée" peut aider à guider le modèle vers la conclusion correcte.
- **Concepts nouveaux ou personnalisés :** Si vous utilisez des mots inventés ou une terminologie de domaine spécifique, les exemples les définissent en contexte.

## Le compromis

Bien que le Few-Shot donne souvent une précision plus élevée pour les tâches complexes, il a un coût : la **fenêtre contextuelle**.

Chaque exemple que vous fournissez consomme des jetons. Dans les très longues conversations ou documents, remplir le prompt avec trop d'exemples pourrait limiter l'espace disponible pour le contenu réel que vous souhaitez traiter.

## Conclusion

Commencez par le **Zero-Shot**. Les modèles modernes comme GPT-4 et Claude 3 sont remarquablement capables sans exemples. Si le modèle ne parvient pas à suivre votre format ou votre style, passez au **Few-Shot** en ajoutant 1 à 3 exemples clairs et de haute qualité. Cette approche itérative garantit que vous équilibrez l'efficacité et la performance.
