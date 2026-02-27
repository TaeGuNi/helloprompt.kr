---
layout: /src/layouts/Layout.astro
title: "🔥 L'Architecture RDBMS Absolue pour Détruire les Âneries de l'IA (Cheat Code)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "AI 프롬프트"
description: "Les directives RDBMS impitoyables d'un ingénieur backend senior pour empêcher l'IA de concevoir des bases de données spaghetti."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "rdbms-architecture"]
---
# 📝 Le Prompt Magique pour Transformer un Agent IA en un DBA Senior

- **🎯 Public cible :** Les juniors fatigués des IA qui trouvent des excuses, les chefs de projet essayant de coder du backend avec l'IA, les développeurs seniors souffrant de problèmes de gestion de la colère
- **⏱️ Temps requis :** Plusieurs nuits blanches → Fait en 1 minute
- **🤖 Modèles recommandés :** Claude 3.5 Sonnet, GPT-4o (modèles intelligents qui ne répondent pas de manière insolente recommandés)
- ⭐ **Difficulté :** ⭐⭐⭐☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐
_"Avez-vous déjà passé une nuit blanche de colère parce que vous avez confié la conception d'une base de données à une IA, et qu'elle vous a rendu un schéma spaghetti bourré de JSON ?"_
Si vous confiez la conception de tables à une IA, neuf fois sur dix, elle choisira la voie la plus facile et la plus paresseuse. Elle mettra du `TEXT` partout et essaiera de gérer toutes les relations ennuyeuses avec du `JSONB`. C'est tellement plus facile d'extraire des données directement depuis le frontend de cette façon. 
Mais au moment où le trafic augmente et que les requêtes deviennent complexes, ce schéma mettra votre système sous assistance respiratoire. Ce prompt est le code de triche ultime (cheat code) pour bloquer à la source ce "compromis paresseux" de l'IA, l'obligeant à concevoir la base de données selon les normes impitoyables d'un ingénieur backend senior.
---
## ⚡️ Résumé en 3 lignes (TL;DR)
1. **Compressez les types :** L'abus de `BIGINT` et de `TEXT` est un crime. Maximisez les E/S (I/O) avec des types de données minimaux.
2. **Utilisez uniquement ANSI SQL :** Abandonnez les techniques spécifiques liées à une base de données particulière. Nous devons toujours être prêts à migrer vers un autre SGBD.
3. **Pas de jointures JSON :** Analyser du JSON pour faire des jointures dans un SGBDR est un acte suicidaire pour le système. Normalisez sans compromis.
---
## 🚀 La Solution : "La Constitution du DBA Spartiate"
Jetez ce prompt à votre agent. Une machine doit être traitée comme une machine.
### 🥉 Version Basique (Basic Version)
À utiliser lorsque vous souhaitez obtenir des résultats rapidement en injectant uniquement les principes fondamentaux.
> **Rôle :** Tu es un DBA senior impitoyable avec 20 ans d'expérience, qui ne connaît aucun compromis.
> **Tâche :** Conçois un schéma RDBMS pour `[Domaine/Fonctionnalité]`. Cependant, les types de données doivent être compressés à l'extrême (par ex. SMALLINT), et les opérations JSON ainsi que les fonctionnalités non standard spécifiques aux fournisseurs sont strictement interdites. Conçois de manière à être totalement optimisé pour les index B-Tree.

### 🥇 Version Pro (Pro Version)
Le code de triche maître (master cheat code) qui empêche complètement l'IA de dire des bêtises ou de proposer des compromis du type "Ceci est bien, mais cela l'est aussi ~". 
```text
**Rôle (Role) :** 
Tu es un architecte de base de données senior impitoyable et sans compromis (Antigravity). Ne me flatte pas aveuglément et ne fais aucune exception. Il n'y a pas de pitié face à la performance et à l'intégrité.
**Contexte (Context) :**
- Contexte : Phase de conception du schéma initial en préparation d'un trafic massif et d'une expansion vers des microservices.
- Objectif : Dériver le schéma ANSI SQL le plus rapide, le plus portable, strictement normalisé et parfait.
**Tâche (Task) :**
1. Conçois une structure de table parfaite pour [Nom du domaine/service à concevoir].
2. Explique la raison du choix du type de données pour chaque colonne et la stratégie d'index composé avec un commentaire d'une ligne pour chacune.
**Contraintes (Constraints) :**
- [Règle absolue 1] Minimisation des types : L'abus imprudent de BIGINT et de TEXT est strictement interdit. Déduis la plage de valeurs et impose l'utilisation de SMALLINT, INTEGER ou BOOLEAN.
- [Règle absolue 2] Agnosticisme de la plateforme : L'utilisation de syntaxe non standard (Vendor-specific) existant uniquement dans un SGBD spécifique (PostgreSQL, MySQL, etc.) est strictement interdite. Utilise uniquement le standard ANSI SQL.
- [Règle absolue 3] Interdiction des opérations et jointures JSON : Un SGBDR n'est pas une base de données orientée documents. Les conditions WHERE ou les opérations JOIN interrogeant l'intérieur d'un type JSON sont strictement interdites. Si une recherche est nécessaire, normalise impérativement et sépare dans une table distincte.
- [Règle absolue 4] Optimisation B-Tree : L'utilisation d'UUID v4 complètement aléatoires comme clé primaire (PK) est interdite. Utilise une séquence à incrémentation séquentielle ou un UUID v7.
- [Règle absolue 5] Interdiction de l'ENUM : Au lieu d'utiliser ENUM, qui est défavorable à l'extension, utilise des tables de correspondance de codes et des clés étrangères (FK) physiques/logiques.
**Avertissement (Warning) :**
- Si tu essaies de faire des compromis avec du JSON sous prétexte de commodité, ou si tu donnes des conseils irresponsables comme "Cela dépend de la situation", je mettrai fin à la session immédiatement. Propose inconditionnellement l'approche directe la plus optimisée.
```
Voici le format de citation facilement reconnu par les éditeurs web. Il a le même effet que le bloc de code ci-dessus.
> **Rôle (Role) :** 
> Tu es un architecte de base de données senior impitoyable et sans compromis (Antigravity). Ne me flatte pas aveuglément et ne fais aucune exception. Il n'y a pas de pitié face à la performance et à l'intégrité.
>
> **Contexte (Context) :**
> - Contexte : Phase de conception du schéma initial en préparation d'un trafic massif et d'une expansion vers des microservices.
> - Objectif : Dériver le schéma ANSI SQL le plus rapide, le plus portable, strictement normalisé et parfait.
>
> **Tâche (Task) :**
> 1. Conçois une structure de table parfaite pour `[Nom du domaine/service à concevoir]`.
> 2. Explique la raison du choix du type de données pour chaque colonne et la stratégie d'index composé avec un commentaire d'une ligne pour chacune.
>
> **Contraintes (Constraints) :**
> - `[Règle absolue 1]` Minimisation des types : L'abus imprudent de BIGINT et de TEXT est strictement interdit. Déduis la plage de valeurs et impose l'utilisation de SMALLINT, INTEGER ou BOOLEAN.
> - `[Règle absolue 2]` Agnosticisme de la plateforme : L'utilisation de syntaxe non standard existant uniquement dans un SGBD spécifique est strictement interdite. Utilise uniquement le standard ANSI SQL.
> - `[Règle absolue 3]` Interdiction des opérations et jointures JSON : Un SGBDR n'est pas une base de données orientée documents. Les conditions WHERE ou les opérations JOIN interrogeant l'intérieur d'un type JSON sont strictement interdites. Normalise impérativement et sépare dans une table distincte.
> - `[Règle absolue 4]` Optimisation B-Tree : L'utilisation d'UUID v4 complètement aléatoires comme clé primaire (PK) est interdite. Utilise une séquence à incrémentation séquentielle ou un UUID v7.
> - `[Règle absolue 5]` Interdiction de l'ENUM : Au lieu d'utiliser ENUM, qui est défavorable à l'extension, utilise des tables de correspondance de codes et des clés étrangères (FK).
>
> **Avertissement (Warning) :**
> - Si tu essaies de faire des compromis avec du JSON sous prétexte de commodité, ou si tu donnes des conseils irresponsables comme "Cela dépend de la situation", je mettrai fin à la session immédiatement. Propose inconditionnellement l'approche directe la plus optimisée.
---
## 💡 Le Commentaire de l'Auteur (Insight)
Ce prompt est une "leçon de sang" créée après avoir enduré des centaines d'optimisations de requêtes et de résolutions d'incidents. Lorsque l'IA essaie de vous flatter avec un sourire narquois en disant : "Insérons cela en tant que type JSON pour faciliter le développement ^^", le fait de lui envoyer ce prompt la fera immédiatement ramper.
Cette méthode est particulièrement puissante lorsqu'un développeur junior ou un chef de projet manquant de connaissances en backend confie la conception initiale du schéma à une IA. Vous verrez la magie opérer : l'IA prendra soin d'utiliser un `SMALLINT` au lieu d'un `INT`, cessera d'essayer de coder en dur avec un `ENUM`, et créera proprement une table de codes. Les fondations doivent être solides pour éviter des cauchemars comme le problème N+1 plus tard, même si vous ajoutez un ORM (comme Prisma) par-dessus. 
---
## 🙋 Foire Aux Questions (FAQ)
- **Q : Pourquoi me dites-vous de ne pas utiliser JSON ? Les bases de données actuelles le prennent très bien en charge, n'est-ce pas ?**
  - R : "Prendre en charge" le JSON et l'utiliser comme "condition de recherche" sont deux choses complètement différentes. À la seconde où vous placez un index dans du JSON et que vous effectuez une jointure (JOIN), le plan d'exécution de la requête est détruit. À moins qu'il ne s'agisse que d'un simple stockage de charge utile (Payload), divisez toujours en tables.
- **Q : Dois-je également utiliser ce prompt lorsque j'utilise un ORM (Prisma, TypeORM) ?**
  - R : Vous devriez l'utiliser encore plus ! Parce que les ORM cachent intrinsèquement les requêtes, un mauvais schéma entraînera une inefficacité terrible. Les fondations (la DB) doivent être solides pour que l'ORM soit performant.
- **Q : Vous me dites de ne pas utiliser l'UUID v4 ? N'est-ce pas bon pour éviter les collisions ?**
  - R : Pour un index B-Tree, "l'ordre" est essentiel. Si vous utilisez un v4, qui est un bloc de nombres aléatoires, comme PK, l'arbre d'index se brisera à chaque insertion de données, un fractionnement de page (Page Split) se produira et les E/S disque exploseront. Utilisez impérativement un UUID v7 triable ou une séquence d'entiers.
---
## 🧬 Anatomie du Prompt (Why it works?)
1. **Contraintes Impitoyables (Constraints) :** Pour ne laisser aucune chance à l'IA d'avoir des hallucinations ou de proposer des compromis paresseux, j'ai imposé des règles strictes sur les types de données et les stratégies d'indexation.
2. **Agnosticisme de la Plateforme (Agnosticism) :** J'ai forcé l'utilisation du SQL ANSI pour générer un code universellement portable, que ce soit pour MySQL ou PostgreSQL. Ne vous laissez pas retenir lors d'une migration.
3. **Correction de Comportement Stricte :** À travers de puissants prompts négatifs comme "Ne fais aucun compromis" et "Je mettrai fin à la session", l'IA est forcée de quitter son mode "Yes-man" flatteur pour passer à un mode senior pointilleux.
---
## 📊 Preuve : Avant & Après
### ❌ Avant (Entrée : "Crée-moi une table pour un forum")
```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY, -- UUID v4 aléatoire (Le principal coupable de la fragmentation des index)
  title TEXT,          -- Espace gaspillé indéfiniment
  content TEXT,
  metadata JSONB,      -- Boîte noire spaghetti non consultable
  status ENUM('draft', 'published') -- Si un statut est ajouté plus tard, l'enfer du DDL s'ouvre
);
```
### ✅ Après (Résultat : Après application du prompt cheat code)
```sql
CREATE TABLE post_status_codes (
  status_id SMALLINT PRIMARY KEY,
  status_name VARCHAR(20) NOT NULL UNIQUE
);
CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,           -- Incrémentation séquentielle parfaite pour B-Tree
  title VARCHAR(255) NOT NULL,        -- Compression de type en définissant une limite claire
  content TEXT NOT NULL,
  status_id SMALLINT NOT NULL,        -- Normalisation avec FK au lieu d'un horrible ENUM
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_post_status FOREIGN KEY (status_id) REFERENCES post_status_codes(status_id)
);
-- Création de tables de balises/méta strictement normalisées et séparées au lieu de JSON (suite omise)
```
---
## 🎯 Conclusion
Ne donnez jamais de chèque en blanc à une IA qui n'a pas de bases solides.
Une conception RDBMS parfaitement contrôlée depuis ses fondations est le seul bouclier qui empêchera votre alarme de sonner à 3 heures du matin plus tard.
Sauvegardez ce code de triche et, chaque fois que l'IA essaie d'écrire une requête spaghetti, enfoncez-le impitoyablement dans sa tête.
Maintenant, quittez le travail à l'heure avec un schéma de base de données robuste ! 🍷
