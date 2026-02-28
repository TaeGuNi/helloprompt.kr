---
layout: /src/layouts/Layout.astro
title: " \"AutoGen 입문: AI 에이전트끼리 대화하게 만들기\""
author: "Jay"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "AI/개발"
description: " \"Ein Leitfaden für das Multi-Agenten-Framework AutoGen von Microsoft. Erfahren Sie, wie Entwickler- und Manager-Bots durch Feedback-Schleifen autonom kollaborieren und Code schreiben.\""
tags: ["AutoGen", "멀티에이전트", "MS", "AI협업", "자동화"]
---

# 🤖 AutoGen-Einführung: KI-Agenten miteinander kommunizieren lassen

- **🎯 Zielgruppe:** Einzelentwickler, die Unterstützung suchen, und Tech-Geeks, die komplexe Aufgaben mit automatisierten Systemen lösen wollen.
- **⏱️ Zeitaufwand:** 20 Minuten (Umgebungseinrichtung und Demo-Ausführung).
- **🤖 Empfohlenes Modell:** GPT-4o, Claude 3.5 Sonnet (die logische Gesprächsqualität zwischen den Agenten ist hier von entscheidender Bedeutung).

- ⭐ **Schwierigkeit:** ⭐⭐⭐⭐☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nützlichkeit:** ⭐⭐⭐⭐☆

> _"Stoßen Sie an Grenzen, wenn Sie einer einzigen KI alles überlassen? Bauen Sie Ihr eigenes perfektes, virtuelles Entwicklerteam auf – mit einer KI, die plant, einer, die programmiert, und einer, die testet."_

**AutoGen**, ein von Microsoft entwickeltes Multi-Agenten-Framework, macht diese Vorstellung zur Realität. Indem Sie mehrere KI-Personas erstellen und in einem gemeinsamen Arbeitsbereich platzieren, können diese autonom miteinander kommunizieren, sich gegenseitig Feedback geben und das Endprodukt fertigstellen. Das Zeitalter der wahren **"Autonomen Kollaboration" (Autonomous Collaboration)** hat begonnen.

---

## ⚡️ 3-Punkte-Zusammenfassung (TL;DR)

1. **Die Magie der Aufgabenteilung:** Komplexe Prompts werden in spezialisierte Agenten (Planung, Entwicklung, Code-Review) aufgeteilt, was die Arbeitsqualität maximiert.
2. **Autonome Codeausführung (Code Execution):** Der von der KI geschriebene Code wird direkt in einer Container-Umgebung ausgeführt, und auftretende Fehler werden eigenständig behoben (Debugging).
3. **Kontrolle von Endlosschleifen:** Durch gezieltes Eingreifen eines menschlichen Supervisors (Human-in-the-loop) werden Token-Verschwendung vermieden und die Richtung des Projekts gesteuert.

---

## 🚀 Die Lösung: "Prompt für den Aufbau eines Multi-Agenten-Teams"

### 🥉 Basic Version (Das Coding-Duo: Entwickler & Ausführender)

Dieser Prompt generiert den Code für die grundlegendste 1:1-Agenteninteraktion.

> **Rolle:** Du bist ein `[Senior Python-Entwickler]`.
>
> **Aufgabe:** Schreibe ein Python-Skript, in dem zwei Agenten mithilfe von AutoGen zusammenarbeiten.
>
> 1. **AssistantAgent (Coder):** Zuständig für das Schreiben des Python-Codes.
> 2. **UserProxyAgent (Executor):** Führt den vom Coder geschriebenen Code lokal aus und gibt das Ergebnis als Feedback an den Coder zurück.
>
> **Ziel:** Konfiguriere die beiden Agenten so, dass sie gemeinsam die Aufgabe "Finde alle Primzahlen zwischen 1 und 100 und speichere sie in einer txt-Datei" erfolgreich abschließen.


### 🥇 Pro Version (Das virtuelle IT-Unternehmen: PM, Dev, QA)

Aufbau eines 3-Personen-Gruppenchats (Group Chat), der einer realen Arbeitsumgebung nachempfunden ist.

> **Rolle (Role):** Du bist ein `[Software-Architekt für das AutoGen-Framework, ehemals bei Microsoft]`.
>
> **Kontext (Context):**
>
> - Hintergrund: Mir fehlt die Zeit, ein Toy-Projekt alleine umzusetzen. Daher möchte ich ein virtuelles Entwicklerteam aus KI-Agenten aufbauen.
> - Ziel: Die vollständige Automatisierung eines einfachen "Snake-Spiels" (Snake Game) in Python – von der Planung bis zum Testen.
>
> **Aufgabe (Task):**
>
> Erstelle den vollständigen Python-Code für die Zusammenarbeit von drei Agenten unter Verwendung von `GroupChat` und `GroupChatManager` in AutoGen.
>
> 1. **PM (Product Manager):** Definiert die Kernregeln und das UI/UX-Design des Spiels und erteilt Arbeitsanweisungen.
> 2. **Coder (Developer):** Schreibt den HTML/CSS/JS-Code basierend auf den Vorgaben des PMs.
> 3. **Reviewer (QA/Critic):** Überprüft den Code des Coders, identifiziert Bugs oder Logikfehler und gibt kritische Anweisungen zur Korrektur.
>
> **Einschränkungen (Constraints):**
>
> - Workflow-Reihenfolge: Ein klarer Loop muss etabliert werden: PM liefert das Konzept ➔ Coder schreibt den Code ➔ Reviewer gibt Feedback ➔ Coder korrigiert den Code.
> - Begrenze die maximale Anzahl der Gesprächsrunden (`max_round`) auf 10.
> - Liefere den Code in einer sofort ausführbaren, fehlerfreien Form und konfiguriere die `system_message` jedes Agenten äußerst detailliert und rollenspezifisch.

---

## 💡 Anmerkung des Autors (Insight)

Die wahre Zerstörungskraft von AutoGen entfaltet sich erst, wenn die Textgenerierungsfähigkeiten eines LLM mit der **"Codeausführung" (Code Execution)** kombiniert werden. Bisher musste ein Mensch den von der KI generierten Code kopieren, in eine IDE einfügen und bei Fehlern die Logs mühsam zurück zum Chatbot kopieren.

Wenn Sie jedoch den `UserProxyAgent` mit einem Docker-Container verbinden, führt die KI den Code selbst aus, analysiert die Fehlerprotokolle und schreibt den Code neu. Sie müssen lediglich dabei zusehen, wie Ihre KI-Agenten hart arbeiten und debuggen, um am Ende das fertige Produkt zu ernten.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **Q: Kann ich anstelle der OpenAI-API auch lokale Open-Source-Modelle (wie Llama 3) verwenden?**
  - A: Ja, das wird vollständig unterstützt. Starten Sie einen lokalen Server mit LM Studio oder Ollama und ändern Sie die `base_url` in der `llm_config` von AutoGen auf Ihre lokale API-Adresse. So können Sie ohne Sorgen um Token-Kosten eine unbegrenzte Armee von Agenten betreiben.

- **Q: Was mache ich, wenn die Agenten sich in einer Endlosschleife verfangen und zu keinem Ergebnis kommen?**
  - A: Das ist ein häufiges Problem bei Multi-Agenten-Systemen. Sie sollten die maximale Anzahl von Antworten strikt über das Attribut `max_consecutive_auto_reply` begrenzen. Alternativ können Sie `human_input_mode="TERMINATE"` setzen, sodass der Chat bei bestimmten Schlüsselwörtern (z. B. "Aufgabe abgeschlossen") sofort stoppt und die Kontrolle an einen menschlichen Administrator übergibt.

- **Q: Worin besteht der Unterschied zum CrewAI-Framework?**
  - A: Die Stärken von AutoGen liegen in der **"freien Konversation" (Conversation)** zwischen Agenten und der direkten Codeausführung. CrewAI hingegen ist darauf optimiert, festgelegte Pipelines und **"Prozesse" (Process)** sequenziell abzuarbeiten. Für kreative Problemlösungen oder Programmierung ist AutoGen besser geeignet, für strukturierte Recherchen oder Marketingaufgaben eher CrewAI.

---

## 🧬 Anatomie des Prompts (Why it works?)

1. **Verteilung der kognitiven Last (Cognitive Load Distribution):** Wenn man alle Planungs-, Codierungs- und Review-Bedingungen in einen einzigen Prompt packt, vergisst die KI leicht Anweisungen aus dem Mittelteil (Lost in the middle). Durch die Trennung der Rollen und die Zuweisung klarer `system_message`s konzentriert sich jede KI ausschließlich auf ihre eigene Aufgabe, was die Qualität drastisch erhöht.
2. **Mechanismus des kritischen Denkens (Critic-in-the-loop):** Die Trennung zwischen Code-Ersteller (Coder) und Kritiker (Reviewer) ahmt die Code-Review-Kultur realer Entwicklerteams exakt nach. Da es LLMs oft schwerfällt, ihre eigenen Ergebnisse objektiv zu kritisieren, erzwingt ein unabhängiger QA-Agent eine deutlich höhere Code-Integrität.

---

## 📊 Beweis: Vorher & Nachher (Before & After)

### ❌ Vorher (Abhängig von einem einzelnen Prompt)

```text
[Benutzer] "Schreibe einen perfekten Code für das Snake-Spiel."
[KI] (Spuckt 150 Zeilen Code aus)
[Benutzer] (Führt ihn im Browser aus) -> Funktioniert nicht. Kopiert das Konsolen-Log.
[Benutzer] "Uncaught TypeError: Cannot read properties of null... Bitte behebe das."
[KI] (Spuckt geänderten Code aus) -> Jetzt funktionieren die Pfeiltasten nicht mehr. Nächste Frage.
(Am Ende ist der Benutzer erschöpft, debuggt selbst oder gibt ganz auf 🤯)
```

### ✅ Nachher (AutoGen Multi-Agenten-Team)

```text
[PM] "Die grundlegende Canvas-Größe für das Snake-Spiel beträgt 400x400. Wenn der Apfel gegessen wird, verlängert sich die Schlange."
[Coder] "Ich habe den HTML- und JS-Code basierend auf den Vorgaben des PMs geschrieben. (Code angehängt)"
[UserProxy] (Automatische lokale Ausführung) "Bei der Ausführung ist in Zeile 15 ein Kollisionserkennungsfehler aufgetreten."
[Reviewer] "Hallo Coder, die Ausnahmebehandlung für den Fall, dass die Schlange ihren eigenen Körper berührt, fehlt. Bitte korrigieren Sie die Array-Logik."
[Coder] "Danke für den Hinweis. Ich habe die Ausnahmebehandlung hinzugefügt und den Code neu geschrieben. (Korrigierter Code angehängt)"
[UserProxy] "Erfolgreich ausgeführt. Das Ergebnis wurde als 'snake_game.html' gespeichert."
(Der Benutzer kann in aller Ruhe Kaffee trinken und zusehen, wie die fertige Datei erstellt wird ☕️)
```

---

## 🎯 Fazit

Sie müssen die Einsamkeit der Solo-Entwicklung und die Qualen des endlosen Debuggings nicht länger alleine ertragen. Mit grundlegenden Python-Kenntnissen und einem API-Key können Sie Ihre eigene Elite-IT-Truppe gründen, die 24 Stunden am Tag ohne Ermüdung oder Beschwerden für Sie arbeitet.

Geben Sie einfach Arbeitsanweisungen mit der Eleganz eines Teamleiters.
**Den Rest der anstrengenden Codierungs- und Debugging-Arbeit übernehmen die Agenten von AutoGen für Sie.** 🍷
