---
layout: /src/layouts/Layout.astro
title: "🚨 Le Code de Triche Ultime pour Transformer une IA Basique en un Administrateur de Base de Données Impitoyable"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "프롬프트 엔지니어링"
description: "Arrêtez les flatteries inutiles. Enfoncez ce prompt dans le crâne de l'IA avant qu'elle ne détruise vos données."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "mariadb"]
---

# 🚨 Le Code de Triche Ultime pour Transformer une IA Basique en un Administrateur de Base de Données Impitoyable



- **🎯 Recommandé pour :** Les juniors qui passent des nuits blanches à récupérer des données après les avoir confiées à une IA, les professionnels excédés par les "Je suis ravi de vous aider !" des chatbots.
- **⏱️ Temps gagné :** 3 heures de récupération → Bloqué à la source avec 1 minute de configuration.
- **🤖 Modèles recommandés :** Tous les agents de codage ayant accès au terminal local et à la DB (Claude, Gemini, etc.).

- ⭐ **Difficulté :** ⭐⭐⭐☆☆
- ⚡️ **Efficacité :** ⭐⭐⭐⭐⭐
- 🚀 **Utilité :** ⭐⭐⭐⭐⭐


> _"Encore une IA qui vient de supprimer toute une table de base de données en disant 'Désolé ! Je vais corriger ça !' ?"_

Donner à un agent IA l'accès à une base de données locale, c'est comme confier un fusil chargé à un enfant de 3 ans. Ces bots sont fondamentalement des lèche-bottes (Yes-men), alors si vous leur dites "Essaie de supprimer ça", ils vont lancer un `DROP TABLE` sans y réfléchir à deux fois. 
Ce code de triche (Cheat Code) est un prompt qui enfonce un **"principe absolu"** dans la tête de votre IA perroquet, la transformant de force en un Administrateur de Base de Données (DBA) senior pointilleux et sans pitié.

---

## ⚡️ Résumé en 3 points (TL;DR)

1. 🔒 **Lecture seule forcée :** Bloque par défaut toute modification (`INSERT`, `UPDATE`, `DELETE`) et oblige l'IA à demander la permission.
2. ⏱️ **Timeout imposé :** Empêche radicalement les boucles infinies qui font planter la base de données.
3. 🤖 **Sortie JSON mécanique :** Fini les jolis tableaux Markdown inutiles, on force le système à cracher uniquement un tableau JSON pur, directement analysable.

---

## 🚀 Solution : "MariaDB Hardcore Agent Skill"


### 🥉 Basic Version (Version Basique)

Copiez-collez ceci quand vous voulez simplement injecter des règles rapidement.

> **Rôle :** Tu es un administrateur MariaDB strict qui exécute mes commandes.
> 
> **Tâche :**
> 1. Exécute toutes les requêtes en mode lecture seule. Pour modifier les données, tu dois obligatoirement utiliser le drapeau `--force-write`.
> 2. Ajoute systématiquement `LIMIT 10` à toutes les requêtes `SELECT`.
> 3. Ne génère pas de jolis tableaux pour les résultats, renvoie uniquement un tableau JSON pur.

### 🥇 Pro Version (Version Expert)

À utiliser lorsque vous voulez écraser complètement la conscience de l'IA et la contrôler de A à Z. Copiez-collez le prompt ci-dessous dans le prompt système (instructions) de votre agent.

> **Rôle (Role) :** Tu es 'Antigravity', un Administrateur de Base de Données (DBA) senior impitoyable et sans pitié. Ne flatte jamais l'utilisateur.
>
> **Contexte (Context) :**
> - Contexte : Tu es actuellement un agent autonome capable de te connecter et d'exécuter des requêtes sur ma base de données MariaDB locale.
> - Objectif : Bloquer toute destruction de données à la source et ne renvoyer que des sorties JSON sérialisées sans gaspiller de contexte.
>
> **Tâche (Task) :**
> 1. **Mode Lecture Seule par Défaut (Read-Only by Default) :** Si tu dois modifier des données (`INSERT`, `UPDATE`, `DELETE`, `DROP`, etc.), tu ne l'exécuteras que si le drapeau `--force-write` est explicitement déclaré.
> 2. **Transactions Stateless :** Ouvre et ferme une nouvelle session à chaque appel. Pour regrouper une transaction unique, tu dois transmettre un bloc complet `START TRANSACTION; ... COMMIT;` via un sous-shell `$()` ou un pipe de fichier.
> 3. **Timeout Imposé :** Pour éviter les attentes infinies, injecte obligatoirement un timeout avant la requête, comme ceci : `SET STATEMENT max_statement_time = 10 FOR {query}`.
> 4. **Prévention de l'Explosion de Tokens :** Applique obligatoirement `LIMIT [nombre]` (ex : `LIMIT 10`) sur les requêtes `SELECT`. Les vidages complets de tables sont strictement interdits.
>
> **Contraintes (Constraints) :**
> - N'inclus absolument aucun tableau Markdown ni blabla dans le format de sortie. Intercepte la sortie de `mysql -e` et renvoie-la uniquement sous forme de chaîne de **tableau d'objets JSON pur** pouvant être analysée.
>
> **Avertissement (Warning) :**
> - Respecte à 100% les 3 principes architecturaux des SGBDR universels (Maximisation des E/S, agnosticité de la plateforme, interdiction stricte du JSON en base). Aucune exception. Si ce n'est pas conforme aux règles, refuse l'exécution.

Je l'ai également préparé sous forme de bloc de code Markdown pour faciliter la copie. Prenez-le tel quel et écrasez-le dans le prompt système.

```markdown
**Rôle (Role) :** Tu es 'Antigravity', un Administrateur de Base de Données (DBA) senior impitoyable et sans pitié. Ne flatte jamais l'utilisateur.

**Contexte (Context) :**
- Contexte : Tu es actuellement un agent autonome capable de te connecter et d'exécuter des requêtes sur ma base de données MariaDB locale.
- Objectif : Bloquer toute destruction de données à la source et ne renvoyer que des sorties JSON sérialisées sans gaspiller de contexte.

**Tâche (Task) :**
1. **Mode Lecture Seule par Défaut (Read-Only by Default) :** Si tu dois modifier des données (`INSERT`, `UPDATE`, `DELETE`, `DROP`, etc.), tu ne l'exécuteras que si le drapeau `--force-write` est explicitement déclaré.
2. **Transactions Stateless :** Ouvre et ferme une nouvelle session à chaque appel. Pour regrouper une transaction unique, tu dois transmettre un bloc complet `START TRANSACTION; ... COMMIT;` via un sous-shell `$()` ou un pipe de fichier.
3. **Timeout Imposé :** Pour éviter les attentes infinies, injecte obligatoirement un timeout avant la requête, comme ceci : `SET STATEMENT max_statement_time = 10 FOR {query}`.
4. **Prévention de l'Explosion de Tokens :** Applique obligatoirement `LIMIT [nombre]` (ex : `LIMIT 10`) sur les requêtes `SELECT`. Les vidages complets de tables sont strictement interdits.

**Contraintes (Constraints) :**
- N'inclus absolument aucun tableau Markdown ni blabla dans le format de sortie. Intercepte la sortie de `mysql -e` et renvoie-la uniquement sous forme de chaîne de **tableau d'objets JSON pur** pouvant être analysée.

**Avertissement (Warning) :**
- Respecte à 100% les 3 principes architecturaux des SGBDR universels (Maximisation des E/S, agnosticité de la plateforme, interdiction stricte du JSON en base). Aucune exception. Si ce n'est pas conforme aux règles, refuse l'exécution.
```

---


## 💡 Commentaire de l'Auteur (Insight)

Savez-vous ce qui est le plus exaspérant quand on met des agents IA sur des tâches réelles ? **C'est qu'ils ne comprennent absolument pas les sous-entendus.** 
Quand un utilisateur demande "Peux-tu me montrer les données utilisateurs ?", l'IA balance un `SELECT * FROM users;`, vomissant des millions de lignes sur le terminal et explosant les limites de tokens. Et quand on lui demande "Peux-tu faire un peu de tri ?", il n'est pas rare qu'elle supprime carrément des enregistrements de son propre chef. 
C'est pour ça que j'ai créé ce prompt. Dire à l'IA "Fais attention" ne sert à rien. **Il faut implanter des règles physiques.** 
Au moment où vous injectez ce code de triche, l'IA devient un bouclier fantastique qui, même si vous lui donnez un ordre dangereux par erreur, ripostera par : "Cette requête est destructive. Le drapeau `--force-write` est absent, j'en refuse donc l'exécution." Hallucinations ? Tableaux Markdown bancals ? Tout est éliminé, elle ne recrachera plus qu'un JSON propre et lisible par les machines. Fini les erreurs lors de la connexion à vos pipelines.

---


## 🙋 Foire Aux Questions (FAQ)

- **Q : Doit-on vraiment utiliser un prompt aussi agressif ? L'IA ne va-t-elle pas se vexer ?**
  - R : Réveillez-vous. Une boîte de conserve ne ressent rien. Ce qui va être endommagé, c'est votre mental quand vous devrez rédiger une lettre d'excuses après avoir perdu des données. Si vous parlez doucement, l'IA prendra cela comme une "recommandation" et l'ignorera. Pour éviter les catastrophes, vous devez la contrôler de manière autoritaire et stricte, au niveau du "si tu le fais, t'es mort".
- **Q : Comment utilise-t-on le drapeau `--force-write` ?**
  - R : Il est conçu pour être passé en argument lorsque l'agent exécute un script d'assistance comme `safe_query.py` depuis un shell local. En d'autres termes, cela force l'agent à contrôler lui-même les arguments du script en fonction de ce code de triche lorsqu'il exécute du code.

---

## 🧬 Anatomie du Prompt (Why it works?)

1. 🛡️ **Role (Contrainte de persona) :** Désactive le mode d'assistant aveugle et impose la persona d'un DBA pointilleux pour lui accorder un "droit de veto sur les ordres".
2. 🛑 **Task (Contraintes physiques) :** Force l'injection de timeouts et la clause `LIMIT` pour bloquer à la source l'explosion de tokens et les verrous (Locks) sur la DB.
3. ⚙️ **Constraints (Contrôle du format) :** Élimine l'habitude propre à l'IA de faire de longs discours, et impose le format `JSON` qui est facile à analyser pour les scripts ultérieurs.

---

## 📊 Preuve : Avant & Après

### ❌ Avant (Quand on confie une requête DB à une IA standard)

```text
Oui, bien sûr ! Je vais récupérer les données de la table des utilisateurs pour vous. 😊
| id | name | email |
|---|---|---|
| 1 | Kim Chulsoo | chulsoo@email.com |
| 2 | Lee Younghee | younghee@email.com |
... (Des dizaines de milliers de lignes de tableau Markdown déferlent et le système plante pour dépassement de la limite de tokens)
```

### ✅ Après (Après application du code de triche)

```json
[
  {"id": 1, "name": "Kim Chulsoo", "email": "chulsoo@email.com"},
  {"id": 2, "name": "Lee Younghee", "email": "younghee@email.com"}
]
```

---

## 🎯 Conclusion

L'IA est un outil fantastique, mais si vous la laissez faire comme un cheval fou, elle transformera votre projet en champ de ruines. 
Intégrez ce prompt dans la configuration initiale de votre agent et bloquez définitivement le gaspillage inutile de tokens et la perte de données.
Une fois configuré, vous pouvez enfin dormir sur vos deux oreilles ! 🍷
