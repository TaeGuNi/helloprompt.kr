---
layout: /src/layouts/Layout.astro
title: "와이파이(WiFi)가 보이지 않는 감시 카메라가 될 수 있다"
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "개인정보보호"
description: "Les dangers de la technologie qui détecte la position et les mouvements d'une personne en utilisant uniquement les signaux WiFi."
tags: ["Privacy", "Security", "WiFi", "Tech"]
---

# 📝 Des yeux à travers les murs : la surveillance par WiFi

- **🎯 Cible recommandée :** Défenseurs de la vie privée, ingénieurs réseau, responsables de la sécurité
- **⏱️ Temps requis :** 30 min → Réduit à 1 min
- **🤖 Modèles recommandés :** ChatGPT (GPT-4o), Claude 3.5 Sonnet, Gemini 2.5 Flash

- ⭐ **Difficulté :** ⭐⭐☆☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐☆

> _"Ne vous croyez pas à l'abri sans caméra. Votre routeur vous observe."_

Des recherches récentes ont lancé un avertissement : en analysant les variations des signaux **WiFi** ordinaires, il est possible de détecter la position, les déplacements, et même **la respiration et le rythme cardiaque** d'une personne à l'intérieur d'une pièce. Ni caméra ni microphone ne sont nécessaires. Seules les ondes radio suffisent. Voici un prompt pour vous aider à évaluer les risques d'atteinte à la vie privée liés à cette technologie étonnante et à préparer des contre-mesures.

---

## ⚡️ Résumé en 3 points (TL;DR)

1. **Le principe :** Une IA analyse les modèles de réflexion des signaux WiFi sur les objets (données CSI) pour capturer les mouvements en 3D.
2. **Le danger :** Capacité à identifier les signes vitaux d'une personne à travers les murs, pouvant être détournée comme un outil de surveillance d'une discrétion absolue.
3. **La solution :** Utiliser des prompts IA pour diagnostiquer les vulnérabilités de détection WiFi de votre environnement (domicile/bureau) et établir des directives de défense.

---

## 🚀 La solution : "Prompt Bouclier de Confidentialité WiFi"

### 🥉 Version Basique (Basic)

Utilisez cette version si vous souhaitez comprendre rapidement les risques et les contre-mesures fondamentales.

> **Rôle :** Tu es un `[Expert en cybersécurité]`.
> **Tâche :** Résume les dangers de la `[Technologie de surveillance par détection WiFi (analyse CSI)]` qui fait l'actualité, et donne-moi 3 mesures de protection que le grand public peut appliquer immédiatement.

<br>

### 🥇 Version Pro (Expert)

Utilisez cette version pour analyser en détail les vulnérabilités d'un espace spécifique (bureau, maison intelligente) et définir une politique de sécurité structurée.

> **Rôle (Role) :** Tu es un `[Ingénieur principal en sécurité réseau et prévention des atteintes à la vie privée]`.
>
> **Contexte (Context) :**
>
> - Contexte : La technologie de détection humaine en intérieur utilisant les informations d'état de canal WiFi (CSI) se perfectionne, soulevant de sérieuses inquiétudes quant à la surveillance illégale.
> - Objectif : Analyser les vulnérabilités de la surveillance par détection WiFi adaptées à un environnement spécifique et rédiger un manuel de défense complet.
>
> **Tâche (Task) :**
>
> 1. En tenant compte des caractéristiques de l'`[Espace à analyser]`, élabore 3 scénarios dans lesquels des informations sensibles pourraient être exposées via la technologie de détection WiFi.
> 2. Fournis des directives par étapes sur les mesures techniques et physiques pour s'en prémunir.
> 3. Rédige un guide de politique de sécurité réaliste qui trouve un équilibre avec l'`[Objectif principal de l'espace]`.
>
> **Contraintes (Constraints) :**
>
> - Utilise le format Markdown pour la sortie, et structure les points clés avec des listes à puces (-) et des blocs de citation (>) plutôt qu'avec des tableaux.
> - Utilise activement des phrases courtes et des emojis pour garantir une excellente lisibilité sur les appareils mobiles.
>
> **Avertissement (Warning) :**
>
> - Exclus les technologies de blocage d'ondes irréalisables (ex. l'installation d'écrans en plomb ou autres méthodes non conventionnelles) et concentre-toi sur les paramètres du routeur et les mesures quotidiennes.

---

## 💡 L'avis de l'auteur (Insight)

Bien que cette technologie (WiFi Sensing) ait été développée à des fins positives, telles que l'assistance aux personnes âgées vivant seules ou l'automatisation de la maison intelligente, elle devient un outil de violation de la vie privée terrifiant si elle est piratée. Un simple piratage de votre routeur signifie que chaque mouvement dans votre maison peut être transmis sous forme de données 3D. Ce prompt va au-delà de la simple curiosité : il est extrêmement utile pour nous faire prendre conscience du "rôle de capteur caché" des appareils IoT et des routeurs qui nous entourent, et pour inciter les responsables de la sécurité en entreprise ou les particuliers à vérifier de manière proactive les paramètres de leurs équipements réseau (séparation des réseaux invités, ajustement de la puissance d'émission, etc.). C'est une réflexion indispensable à une époque où la frontière entre sécurité physique et sécurité numérique a complètement disparu.

---

## 🔗 Liens de référence

- [SciTechDaily : Avertissement concernant le système de surveillance invisible par WiFi](https://scitechdaily.com/researchers-warn-wifi-could-become-an-invisible-mass-surveillance-system/)

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Un routeur ordinaire comme celui de ma maison peut-il vraiment voir les mouvements humains ?**
  - R : Oui, si le micrologiciel (firmware) est altéré ou si le routeur est infecté par un malware spécifique capable d'extraire les données CSI, même un routeur domestique standard peut se transformer en un puissant système de radar.

- **Q : Est-ce sûr si je configure simplement un mot de passe complexe ?**
  - R : Un chiffrement WPA3 robuste et un mot de passe complexe sont les bases absolues. En outre, vous devez désactiver les bandes 2,4 GHz/5 GHz inutilisées, maintenir le firmware de votre routeur toujours à jour, et bloquer impérativement l'accès externe (gestion à distance) à la page d'administration.

- **Q : Que dois-je insérer dans `[Espace à analyser]` dans le prompt ci-dessus ?**
  - R : Plus vous saisissez un lieu spécifique, comme "Studio pour personne seule", "Salle de réunion de startup traitant des informations confidentielles" ou "Appartement de 100m² avec beaucoup d'appareils intelligents", plus l'IA proposera des scénarios précis et personnalisés.

---

## 🧬 Décryptage du prompt (Pourquoi ça marche ?)

1. **Attribution du rôle (Ingénieur principal en sécurité) :** En donnant à l'IA le persona d'un expert en sécurité de haut niveau qui analyse les menaces et établit des politiques, plutôt que celui d'un simple informateur, nous ajoutons de la profondeur à la réponse.
2. **Contexte (Spécification de la technologie CSI) :** Au lieu de parler de piratage vague, nous avons inclus le principe technique spécifique des "CSI (Informations d'état de canal)" dans le contexte, incitant l'IA à répondre avec précision sans hallucinations.
3. **Avertissement (Contrainte de réalisme) :** En bloquant au préalable les contre-mesures irréalistes (comme tapisser tous les murs de papier d'aluminium), nous avons conçu le prompt pour qu'il ne génère que des directives pratiques applicables dès demain.

---

## 📊 Preuve à l'appui : Avant & Après

### ❌ Avant (Question basique)

> **Utilisateur :** On dit qu'on peut surveiller les gens avec le WiFi, comment je l'empêche ?
>
> **IA :** Pour empêcher le piratage du WiFi, configurez un mot de passe complexe et ne vous connectez pas à des réseaux inconnus. (Réponse théorique et hors sujet)

### ✅ Après (Utilisation du prompt Pro)

> **IA :**
> 🛡️ **[Salle de réunion de startup traitant des informations confidentielles] Analyse des vulnérabilités de détection WiFi et guide de défense**
>
> 🚨 **Scénarios d'exposition d'informations sensibles prévus**
>
> - **Détection d'entretiens privés entre dirigeants :** Déduction des moments de prise de décisions importantes en identifiant le nombre de personnes et leurs mouvements dans la salle à des heures précises.
> - **Analyse des modèles de frappe au clavier :** Tentative de déduction de mots de passe ou de mots-clés essentiels en analysant les ondes réfléchies par les mouvements minuscules des doigts.
> - **Mesure du niveau de stress :** Profilage de l'état psychologique pendant une négociation en détectant les schémas de variation de la respiration et du rythme cardiaque des participants.
>
> 🛠️ **Mesures de défense techniques/physiques par étapes**
>
> - **Optimisation de la puissance d'émission du routeur (Tx Power) :** Limitation à la puissance minimale requise pour que le signal ne fuite pas à l'extérieur de la salle de réunion.
> - **Séparation des points d'accès (AP) et structuration en maillage :** Séparation physique stricte entre l'AP fermé dédié à l'intérieur de la salle de réunion et le réseau externe pour les invités.
> - **Surveillance de l'intégrité du firmware de l'AP :** Vérification périodique des valeurs de hachage pour empêcher la modification du firmware visant à extraire illégalement les données CSI.

---

## 🎯 Conclusion

Les ondes invisibles sont devenues des projecteurs braqués sur nous. Assurez-vous de ne pas avoir sacrifié votre vie privée sur l'autel de la commodité en vérifiant à nouveau les paramètres de votre routeur à la maison ce soir.

Passez une vie numérique en toute sécurité ! 🛡️
