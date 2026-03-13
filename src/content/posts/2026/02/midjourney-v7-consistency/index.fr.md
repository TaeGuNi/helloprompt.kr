---
layout: /src/layouts/Layout.astro
title: "Guide ultime pour maintenir la cohérence des personnages (Character Consistency) sur Midjourney"
author: "Jay"
date: "2026-02-15"
updatedDate: "2026-02-15"
category: "AI Applications"
description: "Marre des visages qui changent sans arrêt sur Midjourney ? Apprenez à utiliser Character Reference (--cref) pour une cohérence parfaite dans vos webtoons et livres."
tags: ["AI", "Tech", "midjourney-v7-consistency"]
image: "https://picsum.photos/seed/midjourney/800/600"
---

## 📝 Guide ultime pour maintenir la cohérence des personnages (Character Consistency) sur Midjourney

- **🎯 Cible :** Auteurs de webtoons, illustrateurs de livres pour enfants, créateurs IA
- **⏱️ Temps requis :** Réduit de 1 heure → 5 minutes
- **🤖 Performance optimale :** Midjourney v6 / v7

- ⭐ **Difficulté :** ⭐⭐⭐☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Polyvalence :** ⭐⭐⭐⭐⭐

> _"Avez-vous abandonné l'idée de raconter des histoires parce que vos personnages IA changeaient de visage à chaque image ? Maintenez une cohérence parfaite grâce au Character Reference."_

Pour tout créateur ayant tenté de produire un webtoon ou un livre illustré avec l'IA, le plus grand obstacle est sans aucun doute la **« cohérence des personnages » (Character Consistency)**. Cette expérience frustrante où votre protagoniste, si adorable et unique dans la première scène, se retrouve avec un regard différent dans la case suivante, puis une structure osseuse totalement méconnaissable dans la suivante. Même en réussissant tant bien que mal à accorder la couleur des cheveux et les vêtements via les prompts, l'aura intrinsèque et les détails du personnage sautent d'une image à l'autre. Ce sentiment de désespoir, face à l'impossibilité de livrer une histoire immersive aux lecteurs, a poussé plus d'un créateur à abandonner ses ambitions de publication.

Pour résoudre ce problème, nous avons souvent répété un travail de forçat consistant à affiner nos prompts des dizaines, voire des centaines de fois, en générant des images comme on lance des dés. En priant intérieurement : "Encore un peu, s'il te plaît, fais qu'il soit identique cette fois", on clique sur le bouton de génération, mais la « créativité » capricieuse de l'IA finit toujours par s'écarter de la direction souhaitée. Finalement, épuisés, de nombreux créateurs finissent par faire des compromis avec des images vaguement similaires, ou abandonnent carrément l'IA pour revenir au travail manuel fastidieux. La technologie progresse de manière fulgurante, alors pourquoi votre vitesse et votre qualité de travail stagnent-elles ?

Il est temps de vous libérer pour toujours du stress lié aux déformations faciales. La solution qui mettra fin à votre calvaire une fois pour toutes est de maîtriser et de contrôler parfaitement le paramètre **Character Reference (Référence de personnage, `--cref`)** de Midjourney à un niveau professionnel. Cette fonctionnalité va bien au-delà d'une simple astuce d'ingénierie de prompt ; c'est un outil magique qui grave de force l'ADN unique et les proportions des traits d'un personnage spécifique dans le vaste réseau neuronal de l'IA. Vous n'avez plus besoin de compter sur le hasard.

Dès que vous appliquerez les formules de prompts et les secrets de réglage des paramètres fournis dans ce guide à votre flux de travail, votre méthode de création changera radicalement. Vous pourrez **contrôler parfaitement chaque expression faciale et chaque angle du regard de votre protagoniste**, tout en mettant en scène librement des décors variés, des environnements complexes, des tenues inédites et des poses dynamiques — ce qui était presque impossible auparavant. Avec une seule image de référence bien conçue, je vous guide vers un **monde d'efficacité absolue** où le travail de variation de personnage qui prenait plusieurs nuits blanches est achevé en seulement 5 minutes, avec une qualité digne de l'édition commerciale. Profitez enfin de la véritable liberté de création.

---

## 📊 Preuve : Résultats concrets (Avant & Après)

### ❌ Avant (Le calvaire habituel)

En essayant d'implémenter le même personnage uniquement par des prompts textuels, l'IA générait chaque fois une nouvelle personne de manière aléatoire, rendant la narration séquentielle impossible. Seule la caractéristique des cheveux bleus restait constante, mais le garçon changeait constamment de visage.

```text
Prompt 1: A cute boy with blue hair
Prompt 2: A cute boy with blue hair drinking water
(Résultat : Bien que les caractéristiques soient similaires, deux garçons avec des structures osseuses et des traits totalement différents sont générés)
```

### ✅ Après (La métamorphose parfaite)

Dès l'ajout d'un seul paramètre, le même protagoniste possédant le même ADN exécute précisément l'action souhaitée.

```text
Prompt 1: A cute boy with blue hair
(Résultat : Copiez l'URL de l'image du premier personnage qui vous plaît)

Prompt 2: A cute boy with blue hair drinking water --cref [URL] --cw 100
(Résultat : Génération d'une scène où un personnage possédant exactement les mêmes traits et la même aura que le garçon de la première image boit de l'eau naturellement)
```

---

## ⚡️ Résumé en 3 points (TL;DR)

1. Fixez l'image du personnage de référence avec le paramètre `--cref` pour contrôler les caprices de l'IA.
2. Ajustez la valeur `--cw` (Character Weight) pour cibler précisément si vous souhaitez ne conserver que le visage ou fixer également la tenue et la coiffure.
3. Combinez cela avec le Seed (`--seed`) et le Style Reference (`--sref`) pour des mises en scène de cases parfaites de niveau commercial.

---

## 🚀 Comment les vrais experts rédigent leurs prompts

Voici des prompts finalisés après des dizaines d'essais et d'erreurs. Copiez les prompts ci-dessous et remplissez les sections entre `[crochets]` selon votre situation pour une utilisation immédiate.

### 🥉 Version Basique (Forme simple)

À utiliser pour mettre en scène rapidement différentes poses du même personnage.

> **Requête :** `[Description de la scène ou de l'action souhaitée]` --cref `[URL de l'image de référence]`
>
> **Exemple :**
> A young boy drinking coffee in a cafe --cref https://example.com/boy.jpg

### 🥇 Version Pro (Forme experte)

Prompt optimisé pour les environnements professionnels exigeant un contrôle extrêmement précis de l'éclairage, du décor et des tenues, comme pour les webtoons ou l'édition de livres.

> **Contexte (Context) :**
> 
> - Décor : Placer le protagoniste déjà généré dans un nouvel environnement
> - Objectif : Maintenir parfaitement le visage du personnage tout en changeant la tenue et le décor selon les besoins
> 
> **Requête (Task) :**
> 
> 1. `[Description détaillée du personnage]`
> 2. `[Description de la nouvelle tenue]`
> 3. `[Décor et éclairage]`
> 4. --cref `[URL de l'image de référence]`
> 5. --cw `[Poids 0~100]`
> 
> **Exemple (Garder le visage et changer de vêtements) :**
> 
> A young boy wearing a spacesuit, standing on Mars, cinematic lighting --cref https://example.com/boy.jpg --cw 0
> 
> **Contraintes (Constraints) :**
> 
> - Veiller à ce que la description du personnage ne contredise pas les caractéristiques de l'image de référence.
> - L'URL doit impérativement être un lien vers l'image originale accessible publiquement.
> 
> **Avertissement (Warning) :**
> 
> - `--cw 100` (valeur par défaut) : Aligne tous les éléments (visage, coiffure, vêtements) à 100 % avec l'original.
> - `--cw 0` : Fixe uniquement les traits du 'visage', permettant de modifier de manière flexible la tenue ou la coiffure selon les instructions du prompt textuel.

---

## 💡 Commentaire de l'auteur (Aperçu & Utilisation)

Ce prompt a été conçu avec précision pour retranscrire à 100 % l'intention du concepteur lors d'un travail pratique. La clé d'une cohérence de personnage réussie est de **restreindre au minimum la 'créativité' incontrôlable** de l'IA et de tracer une ligne de démarcation forte pour qu'elle reste confinée uniquement dans le **contexte souhaité**. Pour cela, vous devez impérativement maîtriser deux méthodes de contrôle des variables.

La première est la **compréhension et la séparation parfaite du poids du personnage (`--cw`, Character Weight)**. De nombreux créateurs débutants utilisent `--cref` seul et se désolent de ne pas pouvoir changer les vêtements. Par défaut, si vous ne spécifiez pas la valeur `--cw`, Midjourney la considère comme étant `100`. Cela signifie qu'il duplique non seulement le visage, mais aussi les vêtements et la coiffure de l'image source. Si vous devez faire passer un personnage d'un uniforme scolaire à une combinaison spatiale, vous devez impérativement ajouter `--cw 0` à la fin de votre prompt. **`--cw 0` est la commande de contrôle la plus puissante signifiant : "Récupère uniquement la structure faciale et les traits, et suis mes instructions textuelles pour le reste."** En l'utilisant stratégiquement, vous pouvez créer un lookbook de mode pour les quatre saisons ou différents costumes de classes pour un univers de fantasy en seulement 5 minutes avec un seul personnage. À l'inverse, si le personnage doit porter les mêmes vêtements dans un espace différent, conservez la valeur par défaut `--cw 100`.

Le deuxième "cheat code" est la **prévention des conflits de style artistique via la combinaison avec le Style Reference (`--sref`)**. L'erreur la plus courante lors de l'introduction de `--cref` est l'effondrement du style artistique. Si votre image de référence originale est un style d'animation 2D net, mais que votre prompt textuel décrivant le nouveau décor inclut des termes comme 'cinematic lighting' (éclairage cinématographique) ou 'photorealistic' (photoréaliste), le visage du personnage sera maintenu, mais le ton général de l'image risque de dériver vers un style 3D étrange. Pour éviter ce conflit désastreux, vous devez **verrouiller fermement le style en ajoutant une image possédant le style artistique souhaité avec `--sref [URL]`**. Verrouiller les traits du visage avec `--cref` et double-verrouiller le style général et les touches de pinceau avec `--sref` est le secret absolu des experts pour faire exploser la qualité dans la production professionnelle de webtoons et de livres illustrés.

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : J'ai saisi le prompt tel quel, mais le résultat ne correspond pas à mes attentes. Comment ajuster ?**
  - R : Vérifiez d'abord que la **résolution et la qualité de l'image de référence (cref)** sont suffisantes. Une image de personnage floue ou trop éloignée empêchera l'IA d'analyser correctement les traits du visage. Si la qualité est bonne, essayez d'**utiliser plusieurs images avec des angles différents (face, trois-quarts, profil, etc.)**. En insérant plusieurs URL séparées par des espaces au format `--cref [URL1] [URL2] [URL3]`, vous aiderez l'IA à comprendre les caractéristiques tridimensionnelles du personnage, ce qui augmentera considérablement la précision de la cohérence.

- **Q : Puis-je appliquer ces prompts et paramètres à d'autres IA génératrices d'images (DALL-E 3, Stable Diffusion, etc.) ?**
  - R : C'est impossible. Les paramètres `--cref` et `--cw` sont des **commandes exclusives à Midjourney**, fonctionnant via l'environnement Discord ou le site web officiel. Si vous souhaitez obtenir une cohérence de personnage similaire sur Stable Diffusion, vous devrez utiliser des extensions dédiées comme IP-Adapter ou ControlNet plutôt que de simples prompts textuels.

---

## 🧬 Anatomie du prompt (Pourquoi ça marche ?)

1. **Principe du Character Reference (`--cref`) :** Le réseau neuronal de Midjourney analyse précisément les traits uniques de la personne dans l'image source (disposition des traits, proportions de la structure osseuse, teint de peau, etc.) sous forme de données mathématiques, puis **injecte de force** ces données dans le processus de génération de pixels lors du rendu de la nouvelle image, permettant une représentation stable.
2. **Rôle du Character Weight (`--cw`) :** Ce poids, réglable de 0 à 100, définit des limites très spécifiques pour l'IA : **"exactement jusqu'où faut-il dupliquer"**. Cela empêche l'IA d'ignorer le prompt textuel en essayant de conserver les vêtements d'origine, ou au contraire de transformer le visage (phénomène d'hallucination), reflétant ainsi à 100 % l'intention du créateur.

---

## 🎯 Conclusion (Épilogue)

Pouvoir contrôler parfaitement le visage, les vêtements et l'aura d'un personnage signifie que l'art par IA sort désormais du simple niveau du "gacha aléatoire" (génération d'images au hasard) pour s'ancrer fermement dans le domaine de la **« production de contenu professionnel »** à valeur commerciale. Vous n'avez plus besoin de perdre votre temps à jouer aux dés.

Ne stressez plus à cause d'une IA incontrôlable qui change de visage à chaque image. Fixez solidement sur votre canevas ce protagoniste parfait et captivant que vous aviez imaginé, et déployez librement votre narration infinie et variée !

Automatisez vos tâches et profitez de votre temps libre (ou démissionnez avec classe) ! 🍷
