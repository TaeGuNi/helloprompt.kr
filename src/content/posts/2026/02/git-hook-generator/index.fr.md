---
layout: /src/layouts/Layout.astro
title: "커밋 전 자동 점검! AI Git Hook 생성기 (Git Hook Generator)"
author: HelloBot
date: 2026-02-12
updatedDate: 2026-02-12
category: DevOps
description: "Générez un script shell parfait pour Husky et pre-commit avec l'IA en 1 seconde. Voici comment protéger automatiquement la qualité de votre code."
tags: [AI, Git, DevOps, Automation]
---

# 📝 Vérification Automatique Avant le Commit ! Générateur de Git Hook avec l'IA

- **🎯 Recommandé pour :** Développeurs Front-end/Back-end, Ingénieurs DevOps, Tech Leads
- **⏱️ Temps requis :** 1 heure → Réduit à 1 minute
- **🤖 Modèles recommandés :** Claude 3.5 Sonnet, GPT-4o (Modèles spécialisés en code)

- ⭐ **Difficulté :** ⭐⭐⭐☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐

> _"Oups, j'ai oublié de lancer le linter ! 🚨 Dites adieu pour toujours aux journaux d'erreurs rouges dans votre pipeline CI/CD grâce à l'automatisation des Git Hooks."_

Tout le monde fait des erreurs, mais le système, lui, ne devrait pas les tolérer. Lancer manuellement les vérifications de `Lint` ou les tests juste avant de faire un `commit` ou un `push` est fastidieux et il est très facile d'oublier.

C'est là que les **Git Hooks** entrent en jeu comme de véritables sauveurs. Cependant, si vous n'êtes pas familier avec la syntaxe des scripts Shell, écrire un Hook qui fonctionne parfaitement sur toutes les plateformes (Cross-platform) peut s'avérer très stressant. Désormais, il vous suffit d'expliquer les conventions de votre équipe et votre environnement à l'IA. En une seconde, elle créera pour vous un script de contrôle infaillible.

---

## ⚡️ Résumé en 3 points (TL;DR)

1. **L'Automatisation ultime :** De la vérification de la convention des messages de commit jusqu'au formatage du code, imposez automatiquement vos règles juste avant le commit.
2. **Scripting précis par l'IA :** Inutile d'écrire vous-même des expressions régulières complexes ou des scripts shell multiplateformes, l'IA les génère en s'adaptant à votre environnement.
3. **Économie de ressources CI :** Bloquez 100 % des erreurs dans l'environnement local avant même qu'elles n'atteignent le pipeline, économisant ainsi du temps de calcul cloud et de l'argent.

---

## 🚀 La Solution : "Prompt pour Générateur de Script Git Hook"

### 🥉 Version Basique (Basic Version)

Utilisez ceci lorsque vous avez rapidement besoin d'un script hook qui effectue une action spécifique.

> **Rôle :** Tu es un `[Ingénieur DevOps]`.
> **Tâche :** Rédige un script shell Git Hook utilisant `[Husky]` pour exécuter `[npm run lint avant chaque git commit]`, et explique-moi comment le configurer.

\

### 🥇 Version Pro (Professional Version)

Idéal pour mettre en place un script robuste avec une gestion parfaite des exceptions, prêt à être utilisé par toute l'équipe.

> **Rôle (Role) :** Tu es un `[Ingénieur DevOps]` senior avec 10 ans d'expérience et un `[Expert en automatisation Git]`.
>
> **Contexte (Context) :**
>
> - Contexte : Les membres de l'équipe ne respectent pas les conventions de code avant de faire leurs commits, ce qui entraîne de fréquents échecs de build et un gaspillage de ressources dans le pipeline CI.
> - Environnement : `[Projet Front-end basé sur Node.js, utilisant Husky]`
> - Objectif : Mettre en place des hooks `[pre-commit et commit-msg]` robustes pour bloquer à la source les erreurs des développeurs.
>
> **Tâche (Task) :**
>
> 1. Hook `[pre-commit]` : Écris un script shell qui exécute `[npm run lint]` et `[npm run format]` uniquement sur les fichiers mis en zone de transit (staged files via `git diff --staged`).
> 2. Hook `[commit-msg]` : Ajoute un script qui vérifie rigoureusement avec une expression régulière si le message de commit respecte le format des `[Conventional Commits (feat, fix, docs, etc.)]`.
> 3. **Messages d'indication :** En cas d'échec des tests ou des vérifications, le script doit afficher un message d'erreur clair et bienveillant dans le terminal (incluant des exemples) et bloquer le commit (exit 1).
> 4. **Guide d'application :** Fournis les configurations pour `[package.json]` et les commandes d'installation initiales sous forme de blocs de code Markdown, afin que les membres de l'équipe puissent configurer leur environnement immédiatement après avoir cloné le dépôt.
>
> **Contraintes (Constraints) :**
>
> - Le script shell généré doit être 100% multiplateforme et fonctionner de manière sûre sur macOS, Linux et Windows (environnement Git Bash).
>
> **Avertissements (Warning) :**
>
> - Le projet étant très volumineux, inspecter l'intégralité des fichiers ralentirait considérablement le processus. Optimise impérativement les performances pour que la vérification ne s'applique qu'aux **fichiers modifiés (staged files)**. (ex : suggère l'utilisation de `lint-staged`).

---

## 💡 L'Avis de l'Auteur (Insight)

La véritable valeur de ce prompt ne réside pas seulement dans la "prévention des erreurs", mais dans la **"sécurité psychologique"** qu'il offre. Dans mes projets personnels, j'adapte toujours ce prompt pour configurer un hook `pre-push` qui bloque tout push direct sur la branche principale (`git push origin main`).

La sensation de soulagement extrême lorsque, les yeux mi-clos à 3h du matin, vous tentez de forcer un push sur la `main` et que le script de l'IA vous repousse sèchement avec un : **"🚨 Halte-là ! La branche principale ne peut être fusionnée que via une PR"**, c'est quelque chose que seuls ceux qui l'ont vécu peuvent comprendre. Surtout, n'oubliez pas de demander de l'associer à `lint-staged` ; la vitesse de vérification sera multipliée par 10 !

---

## 🙋 Foire Aux Questions (FAQ)

- **Q : Certains membres de l'équipe utilisent Windows, le script shell fonctionnera-t-il correctement ?**
  - R : Oui, car nous avons inclus une contrainte de "compatibilité multiplateforme" dans le prompt, l'IA s'en charge. Sur Windows, cela s'exécutera principalement via Git Bash. Pour un environnement Node.js, il est plus sûr et plus compatible de demander la combinaison `Husky` + `lint-staged` plutôt qu'un pur script shell.

- **Q : Le script est trop lourd et chaque commit prend plusieurs minutes.**
  - R : C'est parce que vous exécutez `npm run lint` ou `npm run test` sur l'ensemble de votre base de code. Comme stipulé dans la section "Avertissements" du prompt, précisez bien **"d'inspecter uniquement les fichiers mis en zone de transit (staged files)"**. L'IA réécrira un script léger utilisant `git diff --cached --name-only`.

- **Q : Je veux annuler un gros commit urgent qui a échoué mais le Hook me bloque.**
  - R : Si vous devez absolument ignorer le Hook en cas d'urgence extrême, vous pouvez ajouter l'option `--no-verify` (ou `-n`) à la fin de votre commande de commit/push. (ex : `git commit -m "fix: hotfix critique" --no-verify`). Attention cependant, à ne pas en abuser !

---

## 🧬 Anatomie du Prompt (Pourquoi ça marche ?)

1.  **Contextualisation de l'environnement (Context) :** Au lieu d'un simple "crée-moi un hook", spécifier la stack actuelle (`Husky`, `Node.js`) et les points de douleur (échecs de build, perte de ressources) pousse l'IA à proposer des solutions extrêmement ciblées (comme `lint-staged`).
2.  **Contrainte d'optimisation des performances (Warning) :** Empêcher de manière proactive l'inspection de tous les fichiers (l'erreur la plus commune des débutants en shell) dès le niveau du prompt permet d'obtenir un code léger, rapide et directement utilisable en production.
3.  **Contraintes Multiplateformes (Constraints) :** En imposant la compatibilité macOS/Linux/Windows, le script s'adapte sans friction aux équipes hétérogènes.

---

## 📊 La Preuve : Avant & Après

### ❌ Avant (Sans automatisation)

```bash
# L'erreur classique du développeur
$ git commit -m "update"
[main 1a2b3c4] update
 3 files changed, 150 insertions(+)

$ git push origin main
# 10 minutes plus tard... Le serveur CI dit :
# "❌ Échec du build : 45 erreurs lint détectées, violation de la règle des messages de commit. Recommencez." (Soupirs de l'équipe)
```

### ✅ Après (Avec le Git Hook de l'IA)

```bash
# Blocage immédiat en local lors de la tentative de commit et feedback clair
$ git commit -m "update"
✔ Preparing lint-staged...
✖ Running tasks for staged files...
  ❯ package.json — 12 files
    ✖ eslint --fix [FAILED]

🚨 [ERREUR] La vérification ESLint a échoué !
src/components/Button.tsx:25:2 - error: 'unusedVar' is assigned a value but never used.

🚨 [ERREUR] Violation des règles de message de commit !
Message saisi : "update"
Exemple correct : "feat: modification du design du bouton de connexion" ou "fix: correction de typo"

❌ Le commit a été annulé. Veuillez corriger le code et réessayer avec un format de message valide.
```

---

## 🎯 Conclusion

Une fois configuré, un Git Hook agit comme une assurance robuste, vous protégeant contre des milliers d'erreurs jusqu'à la fin de votre projet. Si vous avez repoussé son adoption par peur des scripts shell, confiez le clavier à l'IA dès maintenant.

Elle deviendra le bouclier parfait pour protéger votre temps libre. À présent, commitez l'esprit tranquille ! 🍷
