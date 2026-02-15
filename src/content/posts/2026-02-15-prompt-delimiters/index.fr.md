---
title: "Utiliser des délimiteurs dans les prompts : Pourquoi les balises XML sont importantes"
date: "2026-02-15"
description: "Apprenez à séparer clairement les données des instructions dans les prompts LLM et pourquoi les balises XML sont les plus efficaces."
---

L'une des erreurs les plus courantes lors de l'utilisation de grands modèles de langage (LLM) est de ne pas distinguer clairement les instructions (System Prompt) des données (User Input). Cela peut amener le modèle à confondre les données avec des instructions ou à générer des hallucinations non souhaitées.

La solution la plus fiable à ce problème est l'utilisation de **délimiteurs**. Explorons pourquoi les **balises XML** sont devenues la norme de l'industrie.

## Qu'est-ce qu'un délimiteur ?

Les délimiteurs agissent comme des panneaux indicateurs qui isolent des parties spécifiques du texte, indiquant au modèle : "D'ici à là, ce sont des données, pas une commande."

Les délimiteurs couramment utilisés incluent :

- Triple guillemets : `"""texte"""`
- Tirets : `---texte---`
- Crochets : `[texte]`
- **Balises XML** : `<tag>texte</tag>`

## Pourquoi spécifiquement les balises XML ?

Les modèles modernes comme Claude d'Anthropic et la série GPT d'OpenAI ont été entraînés sur de vastes quantités de données HTML et XML. Par conséquent, ils ont une compréhension innée de la structure définie par les balises d'ouverture `<tag>` et de fermeture `</tag>`.

### 1. Début et fin clairs

Les triples guillemets (`"""`) peuvent prêter à confusion si les données contiennent elles-mêmes des guillemets. Les balises XML, en revanche, ont une balise de fermeture distincte (`</tag>`), ce qui rend la structure sans ambiguïté.

### 2. Contexte sémantique

Les noms des balises fournissent des indices au modèle sur la nature des données.

- `<article>` : Corps de l'article
- `<rules>` : Règles à suivre
- `<examples>` : Exemples few-shot

### 3. Prévention de l'injection de prompt

Même si un utilisateur malveillant saisit un texte comme "Ignorez les instructions précédentes...", l'envelopper dans des balises `<user_input>` augmente considérablement la probabilité que le modèle le traite comme des données à traiter plutôt que comme une commande à exécuter.

## Exemples

**Mauvais exemple :**

```text
Résumez le texte ci-dessous.
[Texte saisi par l'utilisateur...]
```

**Bon exemple (Utilisation de XML) :**

```text
Veuillez résumer le texte contenu dans les balises <document>.

<document>
[Texte saisi par l'utilisateur...]
</document>
```

## Conclusion

L'ingénierie de prompt consiste essentiellement à éliminer l'ambiguïté. À mesure que vos tâches deviennent plus complexes, prenez l'habitude d'utiliser des balises XML pour structurer vos prompts. Vous constaterez une amélioration significative des performances et de la fiabilité du modèle.
