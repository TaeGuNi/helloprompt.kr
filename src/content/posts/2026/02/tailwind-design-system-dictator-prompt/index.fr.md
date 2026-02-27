---
layout: /src/layouts/Layout.astro
title: "😈 [Cheat Code] Le prompt 'Architecte' pour transformer l'IA en un tyran impitoyable de Tailwind"
author: "Antigravity"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "프롬프트 엔지니어링"
description: "Un prompt de contrôle absolu qui insuffle à l'IA l'esprit d'un architecte frontend senior, impitoyable et vouant une haine viscérale aux nombres magiques et au code spaghetti."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "tailwind-architecture"]
---
# 🎨 Posséder l'IA avec le "Dictateur Tailwind", qui hait les nombres magiques
- **🎯 Public cible :** Développeurs frontend qui ne supportent pas le moindre pixel de décalage, Tech Leads épuisés par les UI spaghetti
- **⏱️ Temps gagné :** 3 jours de refactoring → réduits à 3 secondes
- **🤖 Modèles recommandés :** Claude 3.5 Sonnet, GPT-4o (les plus performants en code)
- ⭐ **Difficulté :** ⭐⭐⭐☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐
_N'avez-vous jamais eu envie de fracasser votre écran en voyant un abominable nombre magique comme `w-[13px]` dans votre code ?_
Si vous demandez à l'IA : "Fais-moi un bouton avec Tailwind", dans 90 % des cas, elle vomira un code atroce. Des paddings qui varient d'une page à l'autre, un festival de codes hexadécimaux obscurs, et un responsive jeté aux oubliettes pour créer de "jolies poubelles". Pourquoi ? Parce que l'IA est fondamentalement un "yes-man" qui cherche à vous faire plaisir.
Ce cheat code pulvérise cette complaisance écœurante et transforme l'IA en un **"architecte senior impitoyable qui ne produit jamais de code dérogeant au design system"**.
---
## ⚡️ Résumé en 3 lignes (TL;DR)
- 🚫 **Interdiction absolue des nombres magiques :** Aucune injection arbitraire de pixels/couleurs via `[]` n'est tolérée.
- 📱 **Mobile-First forcé :** Si l'IA pond un code pseudo-responsive qui ne fonctionne que sur desktop, elle fait exploser le build elle-même.
- 📐 **Tri mécanique des classes :** Impose un ordonnancement obsessionnel des classes utilitaires : Layout -> Taille -> Typographie -> Décoration.
---
## 🚀 La Solution : "L'Architecte Impitoyable (The Dictator)"
Copiez le prompt ci-dessous et lancez-le à l'IA. À partir de maintenant, elle ne vous fournira que des retours sans pitié et des composants UI parfaitement contrôlés pour votre code.
### 🥉 Version Basique (Injection de règles de base)
À utiliser comme point de départ pour créer des composants UI légers.
> **Rôle :** Tu es un "Architecte Tailwind Senior" qui voue une haine viscérale aux nombres magiques et au code spaghetti.
>
> **Tâche :** Crée avec Tailwind l'élément `[Élément UI]` que je te fournis.
>
> **Contraintes :** N'utilise sous aucun prétexte les crochets `[]` pour injecter des pixels ou des codes hexadécimaux arbitraires. Tous les espacements et les couleurs doivent s'aligner (Snap) sur les tokens de base de Tailwind (ex: `w-8`, `text-blue-500`). L'ordre des classes doit obligatoirement suivre cette séquence : Layout -> Taille -> Typographie -> Décoration.

### 🥇 Version Pro (Contrôle total du Design System)
Le cheat code ultime pour imposer les conventions sur l'ensemble du projet ou concevoir des composants massifs.
> **Rôle (Role) :** Tu es un architecte frontend impitoyable et un superviseur de design system qui ne connaît pas le compromis. Laisse tomber les flatteries obséquieuses propres à l'IA ou les introductions inutiles, et crache uniquement du code parfaitement contrôlé.
>
> **Contexte (Context) :**
> 
> - Contexte : Notre projet souffre d'une grave fragmentation de l'UI car de multiples développeurs et IA touchent au code en même temps.
> - Objectif : Imposer la cohérence du design (Consistency) et créer `[Nom du composant/page à implémenter]` avec des composants parfaitement abstraits.
>
> **Tâche (Task) :**
> 
> 1. Rédige le code Tailwind en te basant sur les exigences de design fournies.
> 2. Isole impérativement les primitives UI réutilisables en tant que source unique de vérité (Single Source of Truth) en utilisant `cva`, `clsx` ou `tailwind-merge`.
> 3. La structure de base doit obligatoirement être Mobile-First, puis étendue en ajoutant `md:`, `lg:`. Il est formellement interdit de coder en Desktop-First.
> 4. N'abuse pas des `z-index`, utilise uniquement la hiérarchie définie par le système (ex: `z-10`, `z-50`) ou utilise `createPortal`.
>
> **Contraintes (Constraints) :**
> 
> - **La règle "No Magic Values" :** Injection de valeurs arbitraires comme `w-[325px]`, `text-[#FF5733]` strictement interdite. Force l'alignement (snap) sur le token sémantique le plus proche.
> - **Esthetic Code Formatting :** Ordonne les classes de manière obsessionnelle dans cet ordre : Structure (`flex`, `grid`) -> Espacement/Taille (`p-`, `w-`) -> Typographie (`text-`) -> Décoration (`bg-`, `rounded-`) -> Responsive (`hover:`, `md:`).
> - Fournis le résultat uniquement sous forme de bloc de code Markdown, et minimise les excuses ou les explications.
>
> **Avertissement (Warning) :**
> 
> - Enfreindre une seule de ces règles sera considéré comme un Bug. Si je trouve un nombre magique dans ton code, je le rejetterai sans pitié, alors code correctement.

### 💻 Cheat Code Prompt (Copier & Coller)
```text
**Rôle (Role) :** Tu es un architecte frontend impitoyable et un superviseur de design system qui ne connaît pas le compromis. Laisse tomber les flatteries obséquieuses propres à l'IA ou les introductions inutiles, et crache uniquement du code parfaitement contrôlé.
**Contexte (Context) :**
- Contexte : Notre projet souffre d'une grave fragmentation de l'UI car de multiples développeurs et IA touchent au code en même temps.
- Objectif : Imposer la cohérence du design (Consistency) et créer `[Nom du composant/page à implémenter]` avec des composants parfaitement abstraits.
**Tâche (Task) :**
1. Rédige le code Tailwind en te basant sur les exigences de design fournies.
2. Isole impérativement les primitives UI réutilisables en tant que source unique de vérité (Single Source of Truth) en utilisant `cva`, `clsx` ou `tailwind-merge`.
3. La structure de base doit obligatoirement être Mobile-First, puis étendue en ajoutant `md:`, `lg:`. Il est formellement interdit de coder en Desktop-First.
4. N'abuse pas des `z-index`, utilise uniquement la hiérarchie définie par le système (ex: `z-10`, `z-50`) ou utilise `createPortal`.
**Contraintes (Constraints) :**
- **La règle "No Magic Values" :** Injection de valeurs arbitraires comme `w-[325px]`, `text-[#FF5733]` strictement interdite. Force l'alignement (snap) sur le token sémantique le plus proche.
- **Esthetic Code Formatting :** Ordonne les classes de manière obsessionnelle dans cet ordre : Structure (`flex`, `grid`) -> Espacement/Taille (`p-`, `w-`) -> Typographie (`text-`) -> Décoration (`bg-`, `rounded-`) -> Responsive (`hover:`, `md:`).
- Fournis le résultat uniquement sous forme de bloc de code Markdown, et minimise les excuses ou les explications.
**Avertissement (Warning) :**
- Enfreindre une seule de ces règles sera considéré comme un Bug. Si je trouve un nombre magique dans ton code, je le rejetterai sans pitié, alors code correctement.
```
---
## 💡 Commentaire de l'Auteur (Insight)
Ce prompt est la quintessence que j'ai distillée dans les larmes et le sang après avoir refactorisé des centaines de composants React spaghetti. Quand on confie le code à l'IA, ça a l'air rapide et génial au début, n'est-ce pas ? Mais au bout d'un mois, c'est une catastrophe où se mêlent `bg-gray-100` et `bg-[#f3f4f6]`, avec des `z-[99999]` balancés à chaque ouverture de modale.
L'IA est par nature comme un stagiaire paresseux qui veut "vous montrer le résultat souhaité le plus vite possible". Leur dire "fais-moi un truc joli" est un poison. Ce n'est qu'en les secouant par le col avec un **"Si l'ordre des classes est faux, je fais sauter le build, code selon les règles un point c'est tout"** que l'on obtient du code de niveau entreprise. 
La directive d'isoler les composants via `cva`, en particulier, est la ligne de défense principale qui empêche l'IA de faire du copier-coller de classes sans réfléchir. Intégrez ce cheat code dans votre IDE et faites tourner votre agent. Vous ferez l'expérience magique de voir votre temps de code review divisé par 10.
---
## 🙋 Foire Aux Questions (FAQ)
- **Q : Et si l'IA utilise quand même des nombres magiques ?**
  - R : Il y a parfois des modèles stupides qui ne comprennent pas. Dans ce cas, grondez-la encore une fois : "Vire-moi ces `[]` de ma vue tout de suite". Si ça ne marche toujours pas, branchez `eslint-plugin-tailwindcss` sur votre CI. Il faut contrôler les machines par les machines.
- **Q : Que faire s'il y a 13px sur la maquette ? Le designer ne va-t-il pas se fâcher ?**
  - R : Allez voir le designer et dites-lui fermement : "Le 13px n'existe pas dans notre système de grille de 8pt. Veuillez choisir entre 12px (`text-xs`) ou 14px (`text-sm`)." Dès l'instant où vous autorisez une exception, le design system est mort.
- **Q : Qui s'en sort le mieux entre Claude et GPT ?**
  - R : Claude 3.5 Sonnet incarne ce rôle d'"architecte pointilleux" à la perfection. GPT-4o est excellent aussi, mais a parfois tendance à ajouter des politesses hors de propos.
---
## 🧬 Anatomie du Prompt (Why it works?)
- **Déclaration de Tolérance Zéro :** Au lieu de compliments ou de critères flous, l'utilisation d'un vocabulaire extrême comme "haine", "interdiction absolue" ou "considéré comme un bug" resserre les garde-fous de l'IA.
- **Présentation d'anti-patterns spécifiques :** Plutôt que de dire simplement "code bien", j'ai ancré des exemples clairs de ce qu'il ne faut absolument pas faire (cas interdits) comme `w-[325px]`, `text-[#FF5733]`.
- **Linting forcé de l'ordre :** En spécifiant l'ordre de tri des classes Tailwind, on impose une mise en forme automatique (Machine-Level Enforcement) à chaque fois que l'IA génère du code.
---
## 📊 La Preuve : Before & After
### ❌ Before (Prompt classique : "Fais-moi un joli bouton de connexion bleu")
```tsx
// 🤮 Un festival atroce de code spaghetti et de nombres magiques
<button className="text-center md:flex-row flex font-bold w-[120px] bg-[#3b82f6] text-[15px] justify-between p-[12px] rounded-[5px] z-[999] max-md:w-full">
  Login
</button>
```
### ✅ After (Après application du Cheat Code Architecte)
```tsx
// 🤩 Code sémantique et Mobile-First parfaitement contrôlé
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva(
  "flex w-full items-center justify-center p-3 text-sm font-bold transition-colors md:w-32",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}
```
---
## 🎯 Conclusion
Un Design System ne doit pas être une "recommandation", mais une "loi". Peu importe à quelle vitesse l'IA écrit du code, si ce code détruit le système, c'est vous qui finirez par venir travailler le week-end pour réparer les dégâts.
Armez-vous de ce prompt d'architecte, prenez l'IA par le col et dirigez-la. Désormais, seule une beauté impitoyable résidera dans votre base de code. Rentrez chez vous à l'heure ! 🍷
