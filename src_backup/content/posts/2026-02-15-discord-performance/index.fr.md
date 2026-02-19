---
title: "Discord : Une étude de cas en optimisation des performances"
description: "Une plongée en profondeur dans le parcours d'ingénierie de Discord pour gérer des billions de messages et des millions d'utilisateurs simultanés."
date: 2026-02-15
cover: "./cover.png"
---

Discord peut sembler n'être qu'une autre application de chat en surface, mais en dessous se cache une prouesse d'ingénierie massive qui permet à des millions d'utilisateurs de communiquer par voix, vidéo et texte simultanément. Surtout lorsqu'il s'agit de gérer de grands serveurs comme Midjourney avec plus de 19 millions d'utilisateurs, le parcours d'optimisation de Discord sert d'excellent manuel pour les ingénieurs travaillant sur des systèmes distribués.

Dans cet article, nous explorons comment Discord a surmonté les limitations techniques et optimisé les performances à travers des études de cas clés.

## 1. Le cœur de l'architecture : Le modèle d'acteur (The Actor Model)

La base de l'architecture de Discord est le **Modèle d'Acteur**, proposé dans les années 1970.

- **Gestion de la concurrence :** Au lieu de la mémoire partagée et des verrous (locks), chaque 'acteur' gère son propre état et communique uniquement via des messages. Cela évite les interblocages (deadlocks) et les conditions de concurrence.
- **Elixir et Erlang :** Discord a adopté Elixir, qui supporte parfaitement ce modèle. Les utilisateurs, guildes (serveurs) et sessions vocales sont tous traités comme des processus (acteurs) individuels.
- **Fan-out :** Lorsqu'un utilisateur envoie un message, le processus de guilde le reçoit et le copie (fan-out) à des milliers ou des dizaines de milliers de processus de session connectés, assurant la livraison en temps réel.

## 2. Évolution de la base de données : De Cassandra à ScyllaDB

Une fois la couche de traitement des messages résolue, le prochain goulot d'étranglement était la base de données.

- **Limitations de Cassandra :** Initialement, Discord utilisait Cassandra pour son évolutivité, mais à mesure que les données atteignaient des billions d'enregistrements, des problèmes de 'Hot Partition' et des pauses de ramasse-miettes (GC) basées sur Java sont apparus.
- **Adoption de ScyllaDB :** Discord a migré vers ScyllaDB, écrit en C++. ScyllaDB est compatible avec Cassandra mais a réalisé des améliorations spectaculaires des performances grâce au partitionnement par cœur (sharding), à l'absence de GC et à une gestion de cache plus efficace.

## 3. Rust et services de données : Résoudre le problème du troupeau (Thundering Herd)

Lorsqu'une mention `@everyone` se produit sur un serveur populaire, des milliers de clients appellent simultanément l'API, provoquant un problème de **Thundering Herd** qui surcharge la base de données.

- **Coalescence de requêtes (Request Coalescing) :** Pour résoudre cela, Discord a introduit un service de données écrit en Rust. Ce service regroupe (coalesce) les requêtes identiques simultanées, envoie une seule requête à la base de données et renvoie le résultat à toutes les demandes en attente.
- **Puissance de Rust :** Grâce à la sécurité mémoire de Rust et à l'absence de GC, Discord a atteint des performances prévisibles et un débit élevé.

## 4. Surmonter les limites matérielles : Super-Disk

Dans l'environnement GCP (Google Cloud Platform), Discord a rencontré des problèmes de performance disque.

- **Problème :** Les SSD locaux sont rapides mais présentent un risque de perte de données, tandis que les disques persistants sont sûrs mais lents.
- **Solution :** Les ingénieurs ont implémenté une couche d'abstraction personnalisée appelée 'Super-Disk' en utilisant le RAID Linux et le cache en écriture (write-through), combinant la vitesse des SSD locaux avec la fiabilité des disques persistants.

## 5. Optimisations client et au-delà

Les optimisations ne se sont pas limitées au backend, mais se sont étendues au client et aux couches réseau.

- **Retour au natif :** Reconnaissant les limites de performance de React Native sur Android (surtout pour le rendu des emojis et des listes), les composants clés de l'interface utilisateur ont été réécrits en Kotlin (natif) pour améliorer les performances.
- **Sessions passives :** Introduction du concept de 'Sessions passives' pour réduire le trafic sur les onglets que les utilisateurs ne consultent pas activement, économisant 20 % de bande passante.
- **Snowflake ID :** Implémentation de Snowflake, un système de génération d'ID unique triable par temps, permettant d'inférer l'heure de création uniquement à partir de l'ID sans base de données.

## Conclusion

Le cas de Discord démontre l'essence de l'ingénierie : aller au-delà de l'utilisation de bons outils pour identifier précisément **"Quel est le goulot d'étranglement actuel ?"** et trouver des solutions créatives. Leur évolution de MongoDB à Cassandra à ScyllaDB, et de Python à Go à Rust, est le résultat d'une optimisation obsessionnelle des performances priorisant l'expérience utilisateur.

"La complexité n'est pas une vertu, mais nous sommes prêts à accepter la complexité si elle est nécessaire pour les utilisateurs."

C'est probablement le secret de la façon dont Discord a maintenu un service rapide et agréable pendant plus d'une décennie.
