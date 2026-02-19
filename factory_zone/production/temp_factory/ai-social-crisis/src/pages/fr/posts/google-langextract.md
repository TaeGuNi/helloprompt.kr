---
layout: ../../../layouts/MarkdownPostLayout.astro
title: "Maîtriser l’extraction de données structurées avec Google LangExtract"
date: 2024-05-20
pubDate: 2024-05-20
description: "Découvrez comment extraire du JSON précis et des données structurées à partir de LLMs en utilisant la nouvelle bibliothèque LangExtract de Google."
author: "Hello Prompt"
image:
  url: "https://docs.astro.build/assets/full-logo-light.png"
  alt: "Google LangExtract Logo"
tags: ["Google", "LLM", "Data Extraction", "Python", "AI"]
---

Bien que les grands modèles de langage (LLMs) soient excellents pour écrire de la poésie ou générer du code, ils ont souvent du mal avec la tâche la plus nécessaire dans les applications d'entreprise : **l'extraction de données structurées**. Extraire des informations spécifiques d'un texte et les adapter précisément au format JSON est difficile avec la seule ingénierie de prompt.

Google a récemment dévoilé **LangExtract**, une nouvelle bibliothèque Python qui s'attaque de front à ce problème. Dans cet article, nous explorerons ce qu'est LangExtract et comment il peut révolutionner vos pipelines de données.

## Qu'est-ce que LangExtract ?

LangExtract fonctionne au-dessus des modèles Gemini et Vertex AI de Google, convertissant des données textuelles non structurées en objets structurés (généralement des modèles Pydantic ou des Python Dataclasses). Il offre une **sécurité de type** et des **capacités de récupération d'erreur** bien plus robustes que les analyseurs traditionnels de LangChain ou les instructions de prompt simples.

### Fonctionnalités clés

1.  **Extraction basée sur des schémas** : Définissez un modèle Pydantic et forcez le LLM à générer des données qui correspondent exactement à ce schéma.
2.  **Auto-correction** : Si le modèle génère un format incorrect, la bibliothèque détecte automatiquement les erreurs d'analyse et demande au modèle de se corriger, obtenant ainsi un résultat valide.
3.  **Optimisation Gemini** : Il exploite les capacités d'appel de fonctions des derniers modèles Gemini Pro et Flash de Google pour effectuer des tâches d'extraction rapidement et à moindre coût.

## Exemple d'utilisation

Examinons un exemple d'extraction d'informations de réunion à partir d'un simple corps d'e-mail.

```python
from google.langextract import DataExtractor
from pydantic import BaseModel, Field
from datetime import datetime

# 1. Définir le schéma pour l'extraction de données
class MeetingInfo(BaseModel):
    topic: str = Field(description="Sujet de la réunion")
    participants: list[str] = Field(description="Liste des noms des participants")
    start_time: datetime = Field(description="Heure de début de la réunion")
    location: str | None = Field(description="Lieu de la réunion (null si aucun)")

# 2. Initialiser l'extracteur (en utilisant le modèle Gemini)
extractor = DataExtractor(model="gemini-1.5-flash")

email_content = """
Nous avons programmé la réunion 'Stratégie Marketing Q3' pour mardi prochain à 14h.
Les participants sont Thomas, Sophie et Julie.
Le lieu est la salle de conférence 301. Ne soyez pas en retard !
"""

# 3. Exécuter l'extraction de données
meeting = extractor.extract(MeetingInfo, email_content)

print(meeting)
# Sortie :
# topic='Stratégie Marketing Q3'
# participants=['Thomas', 'Sophie', 'Julie']
# start_time=datetime(2024, 5, 21, 14, 0)
# location='Salle de conférence 301'
```

## Pourquoi LangExtract ?

Auparavant, vous deviez utiliser des expressions régulières (Regex) ou écrire des prompts complexes, mais avec LangExtract, vous pouvez construire des pipelines de données avec une approche **code-first**. Il est particulièrement utile pour extraire des arguments clés nécessaires aux réponses à partir de documents récupérés dans les systèmes RAG (Retrieval-Augmented Generation), ou structurer des informations de commande dans des chatbots de support client pour les passer à une API.

## Conclusion

Google LangExtract transforme les LLMs de simples chatbots en **moteurs de traitement de données fiables**. Installez-le dès aujourd'hui et introduisez-le dans vos projets. La douleur du prétraitement des données sera considérablement réduite.
