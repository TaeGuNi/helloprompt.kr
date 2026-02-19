---
title: "Off Grid : Exécutez l'IA texte, image et vision hors ligne sur votre mobile"
description: "Découvrez Off Grid, un outil open source pour exécuter l'IA de texte, d'image et de vision hors ligne sur votre smartphone sans connexion Internet."
date: 2026-02-15
tags: ["AI", "Local LLM", "Mobile", "Offline", "Privacy", "Open Source"]
category: "AI Tools"
author: "Assistant"
---

## Qu'est-ce que Off Grid ?

[Off Grid](https://github.com/alichherawalla/off-grid-mobile) est bien plus qu'une simple application de chat LLM locale ; c'est une suite complète d'IA hors ligne qui s'exécute directement sur le matériel de votre smartphone. Elle offre des fonctionnalités telles que la génération de texte, la génération d'images, l'IA visuelle, la transcription vocale et l'analyse de documents sans connexion Internet. Toutes les données sont traitées uniquement sur l'appareil et ne sont pas divulguées à l'extérieur, garantissant une excellente protection de la confidentialité.

## Fonctionnalités Clés

### 1. Génération de Texte
Prend en charge les derniers modèles légers tels que Qwen 3, Llama 3.2, Gemma 3 et Phi-4, et peut également charger des modèles personnalisés au format `.gguf`. Il répond rapidement à une vitesse de 15 à 30 jetons par seconde sur les appareils phares, prenant en charge les réponses en streaming et le « Mode Pensée ».

### 2. Génération d'Images
Exécute Stable Diffusion sur l'appareil pour fournir des aperçus en temps réel. Utilisant l'accélération NPU des puces Snapdragon, il peut générer des images en 5 à 10 secondes (iOS utilise Core ML), prenant en charge plus de 20 modèles, dont Absolute Reality et DreamShaper.

### 3. IA Visuelle
Vous pouvez pointer votre appareil photo vers des objets ou des documents et poser des questions à l'IA. En utilisant SmolVLM, Qwen3-VL, etc., il est possible d'analyser des documents, de lire des reçus et de décrire des scènes.

### 4. Entrée Vocale et Analyse de Documents
Le modèle Whisper d'OpenAI intégré permet la conversion parole-texte, et vous pouvez joindre des PDF, des fichiers de code, des CSV, etc. à la conversation pour analyser et résumer le contenu.

## Performance

Les performances sur les appareils phares équipés de Snapdragon 8 Gen 2/3 ou Apple A17 Pro sont les suivantes :

- **Génération de texte :** 15-30 tok/s
- **Génération d'images (NPU) :** 5-10 secondes
- **IA Visuelle :** Environ 7 secondes
- **Reconnaissance vocale :** Traitement en temps réel

## Installation

Les utilisateurs d'Android peuvent télécharger et installer le dernier fichier APK à partir de la page [GitHub Releases](https://github.com/alichherawalla/off-grid-mobile/releases/latest). Les utilisateurs d'iOS doivent compiler le code source pour installer.

## Conclusion

Off Grid vous permet d'utiliser de puissantes fonctionnalités d'IA sur votre appareil portable sans dépendre du cloud. Si la confidentialité des données est importante ou si vous souhaitez utiliser l'IA dans un environnement où la connexion Internet est difficile, nous vous recommandons vivement de l'essayer.
