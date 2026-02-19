---
title: "Prompt Engineering 3.0: Die Ära der Agentischen Arbeitsabläufe"
date: "2026-02-13"
description: "Prompt Engineering entwickelt sich von der Einzel-Prompt-Optimierung hin zum Entwurf mehrstufiger Agentensysteme. Wir tauchen tief in die Konzepte und Implementierungsstrategien von agentischen Workflows ein."
tags: ["AI", "Agentic Workflow", "Prompt Engineering", "LLM", "Tech"]
---

Die Art und Weise, wie wir mit Künstlicher Intelligenz (KI) interagieren, ändert sich rasant. Wir haben die Ära der einfachen Befehlseingaben und komplexen Denkprozesse hinter uns gelassen und treten ein in die Ära der "Agentischen Arbeitsabläufe" (Agentic Workflows), in der KI Werkzeuge nutzt und Pläne formuliert, um Aufgaben autonom auszuführen. Das ist Prompt Engineering 3.0.

## Die Evolution des Prompt Engineering

Lassen Sie uns den Weg zurückverfolgen, den wir gegangen sind.

*   **Ära 1.0 (Die Ära der Optimierung):** Der Fokus lag auf "Wie muss ich fragen, damit die KI besser antwortet?". Zero-shot und Few-shot Prompting waren Mainstream, zentriert auf klare Anweisungen und Beispiele zur Steigerung der Modellleistung.
*   **Ära 2.0 (Die Ära des Denkens):** Wir haben den Modellen beigebracht, "wie man denkt". Techniken wie Chain-of-Thought (CoT) und Tree of Thoughts (ToT) förderten das schrittweise Zerlegen komplexer Probleme. RAG (Retrieval-Augmented Generation) wurde kombiniert, um externes Wissen zu nutzen.
*   **Ära 3.0 (Die Ära der Agentur):** Jetzt entwerfen wir, "wie man arbeitet" für die Modelle. Jenseits der Optimierung einzelner Prompts beinhaltet diese Stufe den Aufbau von **Systemen**, in denen Modelle sich selbst korrigieren, Werkzeuge auswählen und mit anderen Agenten zusammenarbeiten.

## Was ist ein Agentischer Workflow?

Professor Andrew Ng betonte kürzlich in einem Vortrag, dass "agentische Workflows den KI-Fortschritt stärker vorantreiben könnten als selbst die nächste Generation von Basismodellen".

Während die traditionelle LLM-Nutzung einer linearen Struktur **Zero-shot (Frage -> Antwort)** folgte, operieren agentische Workflows in einer zyklischen Struktur mit **Schleifen und Feedback**. Modelle entwerfen Inhalte, überprüfen sich selbst, nutzen Werkzeuge zur Ergänzung von Informationen und iterieren über Überarbeitungen.

### 4 Schlüsselmuster

Die wichtigsten Entwurfsmuster, die agentische Workflows ausmachen, sind folgende:

1.  **Reflexion (Reflection):**
    Das Modell überprüft und verbessert seine eigene Ausgabe kritisch. Indem man es fragt "Funktioniert dieser Code ohne Fehler?" oder "Ist die Logik dieses Textes stichhaltig?" und es sich selbst korrigieren lässt, verbessert sich die Qualität der Ergebnisse drastisch.

2.  **Werkzeugnutzung (Tool Use):**
    Das Modell erkennt seine Grenzen und ruft externe Werkzeuge auf (Websuche, Code-Ausführer, Datenbankabfragen usw.). Dies verleiht Fähigkeiten jenseits der einfachen Texterstellung, um reale Aufgaben auszuführen.

3.  **Planung (Planning):**
    Um komplexe Ziele zu erreichen, werden Aufgaben in Teilaufgaben zerlegt und Ausführungssequenzen bestimmt. Das ReAct (Reasoning + Acting) Muster ist repräsentativ und passt Pläne oft dynamisch während der Ausführung an.

4.  **Multi-Agenten-Kollaboration (Multi-agent Collaboration):**
    Mehrere Agenten mit zugewiesenen Rollen (z.B. Entwickler-Agent, Code-Reviewer-Agent, PM-Agent) unterhalten sich, um die Arbeit abzuschließen. Jeder Agent hat auf seine Rolle spezialisierte Prompts, wodurch durch Zusammenarbeit Ergebnisse erzielt werden, die einem einzelnen Modell überlegen sind.

## Warum jetzt Agentische Workflows?

Da die LLM-Technologie reift, ist **wie wir das Modell nutzen**, genauso wichtig geworden wie die Geschwindigkeit der Intelligenzverbesserung im Modell selbst. Selbst Hochleistungsmodelle wie GPT-4 oder Claude 3.5 haben Schwierigkeiten, perfekten Code oder komplexe Berichte in einem einzigen Versuch (Single-turn) zu schreiben.

Indem wir jedoch Workflows systematisieren, wie Menschen arbeiten – entwerfen, überprüfen, testen und überarbeiten – können wir viel komplexere und hochwertigere Ergebnisse aus demselben Modell erhalten. Deshalb gewinnen agentische Workflows an Aufmerksamkeit.

## Werkzeuge für die Implementierung

Verschiedene Frameworks sind entstanden, um diesen Trend zu unterstützen.

*   **LangChain / LangGraph:** Mächtige Werkzeuge zur Steuerung von Agentenzustand und -fluss. LangGraph ist insbesondere für die Implementierung komplexer Agentenlogik durch zyklische Graphenstrukturen optimiert.
*   **AutoGen:** Ein von Microsoft entwickeltes Multi-Agenten-Framework, stark im Lösen komplexer Aufgaben durch Konversation zwischen Agenten.
*   **CrewAI:** Gewinnt in letzter Zeit an Popularität durch seine intuitiven, rollenbasierten Agenten-Designfähigkeiten.

## Fazit: Vom Prompt Engineer zum KI-Architekten

Ingenieure in der Ära des Prompt Engineering 3.0 studieren nicht mehr nur "wie man gut spricht". Sie müssen **Architekten werden, die Systeme entwerfen**, Umgebungen schaffen, in denen Agenten handeln können, Werkzeuge bereitstellen und Zusammenarbeit ermöglichen.

Die Zukunft der KI liegt nicht nur in klügeren Modellen, sondern in klügeren Workflows. Führen Sie noch heute "agentische" Elemente in Ihre KI-Pipeline ein.
