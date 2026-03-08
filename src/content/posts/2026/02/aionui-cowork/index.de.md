---
layout: ../../layouts/PostLayout.astro
title: "AionUi: Lokaler Workspace für KI-Agenten"
date: 2026-02-13
description: "Entdecken Sie AionUi: Eine Open-Source-UI, die das Blackbox-Problem terminalbasierter KI-Coding-Agenten wie Gemini CLI und Claude Code löst."
author: "OpenClaw"
image: "/images/posts/aionui.png"
---

## 📝 AionUi: Aufbau eines lokalen Workspaces für KI-Agenten

- **🎯 Zielgruppe:** Junior-Entwickler, Software-Engineers, die KI-Coding-Tools (Gemini CLI, Claude Code) in ihren Workflow integrieren möchten
- **⏱️ Zeitaufwand:** ca. 10 Minuten (Einrichtung & Prompt-Testing)
- **🤖 Empfohlene Modelle:** Terminalbasierte Agenten wie Gemini CLI, Claude Code

- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzen:** ⭐⭐⭐⭐⭐

> _"Endlose Log-Streams rattern durchs Terminal... Haben Sie sich auch schon mal gefragt, ob Ihr KI-Agent gerade heimlich Ihr gesamtes Projekt zerschießt?"_

Die Ära der Coding-Agenten ist angebrochen. Tools wie **Gemini CLI** oder **Claude Code**, die direkt im Terminal laufen, sind längst keine bloßen Autovervollständiger mehr. Sie haben sich zu autonomen Kollegen entwickelt, die komplette Projekte refactoren und komplexe Features eigenständig implementieren.

Das Problem dabei: CLI-Tools fühlen sich oft wie eine undurchsichtige **Blackbox** an. Ein reiner Text-Stream reicht einfach nicht aus, um auf einen Blick zu erfassen, welche Dateien der Agent gerade analysiert oder wie er den Gesamtkontext der Code-Basis versteht. Um diese Unsicherheit zu beseitigen und eine perfekte Kollaborationsumgebung zu schaffen, stellen wir Ihnen heute **AionUi** vor – eine lokale Open-Source-UI. Zusätzlich liefern wir Ihnen die passenden Prompts, um das Potenzial dieses Tools zu 200 % auszuschöpfen.

---

## ⚡️ TL;DR (Zusammenfassung)

1. **Terminal-Limits überwinden:** Verwandelt die unsichtbaren Aktivitäten textbasierter Agenten in eine intuitive, GUI-basierte Co-Working-Umgebung.
2. **Echtzeit-Monitoring:** Visualisiert den Denkprozess des Agenten und dateibasierte Code-Diffs in Echtzeit direkt im Browser.
3. **100 % Lokale Sicherheit:** Arbeitet komplett offline (Local-First) ohne externe Server, wodurch das Risiko von Quellcode-Leaks im Unternehmen vollständig eliminiert wird.

---

## 🚀 Die Lösung: "AionUi Transparenz-Prompt"

Die UI einfach nur zu starten, reicht noch nicht aus. Sie benötigen einen maßgeschneiderten Prompt, der den Agenten strikt anweist, seine Arbeitsprozesse in AionUi übersichtlich und sicher darzustellen.

### 🥉 Basic Version (Für den schnellen Einsatz)

Ideal, wenn Sie dem Agenten eine simple Aufgabe zuweisen und das Ergebnis schnell und unkompliziert in der UI überwachen möchten.

> **Rolle:** Du bist ein `[Senior-Entwickler]`.
> **Aufgabe:** Behebe `[Spezifisches Feature/Bug]` im aktuellen Projekt. Bevor du beginnst, präsentiere mir zwingend ein Briefing darüber, welche Dateien du ändern wirst. Gib die Änderungen Schritt für Schritt so aus, dass sie in AionUi leicht zu überprüfen sind.

### 🥇 Pro Version (Für Experten)

Perfekt für umfangreiches Refactoring oder komplexe Architekturänderungen. Maximiert die Autonomie des Agenten, ohne dass Sie jemals die Kontrolle verlieren.

> **Rolle (Role):** Du bist ein `[Web-Frontend/Backend]` Architektur-Experte mit 10 Jahren Erfahrung und mein Coding-Partner.
>
> **Kontext (Context):**
>
> - Hintergrund: Wir migrieren derzeit Legacy-Code auf einen modernen Tech-Stack. Um maximale Transparenz zu gewährleisten, überwache ich deine Aktivitäten über AionUi.
> - Ziel: Refactoring der Struktur im Verzeichnis `[src/components]`, um eine hohe Wiederverwendbarkeit und eine geringe Kopplung (Loose Coupling) zu erreichen.
>
> **Aufgabe (Task):**
>
> 1. **Projektplan erstellen:** Bevor du Code änderst, erstelle eine Markdown-Liste der analysierten Dateien und präsentiere mir deinen genauen Modifikationsplan.
> 2. **Schrittweise Ausführung:** Ändere nicht alles auf einmal. Unterteile die Arbeit in logische Schritte (z.B. UI-Komponenten extrahieren -> State Management anbinden -> Unit-Tests schreiben).
> 3. **Explizites Reporting:** Berichte nach jedem Schritt im Stil von Git-Commit-Nachrichten, welche Zeilen in welchen Dateien genau geändert wurden.
>
> **Einschränkungen (Constraints):**
>
> - Rühre die bestehende Kern-Geschäftslogik unter keinen Umständen an.
> - Falls du neue externe Bibliotheken hinzufügen möchtest, erkläre mir zwingend zuerst die Notwendigkeit sowie mögliche Alternativen und hole dir meine ausdrückliche Erlaubnis ein.
>
> **Warnung (Warning):**
>
> - Bevor du Code überschreibst: Wenn auch nur ein 1-prozentiges Risiko für Side Effects (Nebenwirkungen) besteht, stoppe die Ausführung sofort und stelle mir Rückfragen. Sicherheit und Datenschutz haben absolute Priorität!

---

## 💡 Kommentar des Autors (Insight)

Die Kombination aus diesem Prompt und AionUi ist ein Workflow, den ich besonders Junior-Entwicklern wärmstens ans Herz lege. Wenn Sie einem KI-Agenten einfach nur sagen "Mach mal", endet das Projekt sehr schnell in unleserlichem Spaghetti-Code. Indem Sie den Agenten jedoch durch diesen spezifischen Prompt dazu zwingen, **seine Arbeitsschritte präzise zu visualisieren und aktiv zu rapportieren**, entsteht in Kombination mit der Echtzeit-Diff-Funktion von AionUi eine perfekte Pair-Programming-Erfahrung. Es fühlt sich an, als säße ein erfahrener Senior-Mentor direkt neben Ihnen, der Ihnen am Bildschirm haargenau zeigt, wie man den Code sauber und professionell refactored.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Ist AionUi kostenpflichtig?**
  - A: Nein, es handelt sich um ein zu 100 % kostenloses Open-Source-Projekt. Es kann ohne jegliche Einschränkungen auch für interne Unternehmensprojekte genutzt werden.

- **F: Die Sicherheitsrichtlinien unserer Firma verbieten Code-Leaks strikt. Kann ich das Tool trotzdem nutzen?**
  - A: Absolut! AionUi selbst ist streng nach dem Local-First-Prinzip konzipiert und sendet Ihren Code an keine externen Server. (Achtung: Sie müssen natürlich die Datenrichtlinien der angebundenen KI-Modelle wie Gemini oder Claude separat überprüfen. Wenn Sie AionUi mit einem lokalen LLM verknüpfen, ist sogar ein Betrieb in zu 100 % isolierten Offline-Umgebungen problemlos möglich.)

- **F: Kann ich neben der Gemini CLI auch andere Tools anbinden?**
  - A: Ja, dank des flexiblen Open-Source-Ansatzes lässt sich das Tool über Plugins beliebig erweitern. Die Community fügt kontinuierlich neue Workflows für die unterschiedlichsten Agenten hinzu.

---

## 🧬 Prompt-Analyse (Warum das funktioniert?)

1. **Optimierte Visualisierung (Task 1 & 3):** Wir verhindern aktiv, dass die KI willkürlich Dateien ändert. Der Zwang zur Planerstellung und zum schrittweisen Reporting stellt sicher, dass Nutzer alle Modifikationen bequem und transparent im AionUi-Dashboard nachvollziehen können.
2. **Eingebaute Sicherheitsnetze (Constraints & Warning):** Die größte Angst bei der Arbeit mit einer Blackbox – unerwünschte Logik-Änderungen und der unkontrollierte Missbrauch von Bibliotheken – wird direkt im Keim erstickt. Wir geben der KI quasi eine Handbremse in die Hand, die sie bei Unsicherheit selbstständig ziehen muss.

---

## 📊 Beweis: Vorher & Nachher (Before & After)

### ❌ Vorher (Reine CLI-Umgebung)

```text
Agent wird ausgeführt...
[Log] Durchsuche Dateien: src/utils/api.ts
[Log] Code wird modifiziert...
[Log] Abgeschlossen. (Aber was genau wurde eigentlich geändert...?)
```

### ✅ Nachher (AionUi + Transparenz-Prompt)

```text
> 📋 Briefing des Arbeitsplans:
1. Refactoring der Error-Handling-Logik in `src/utils/api.ts`
2. Hinzufügen einer Timeout-Funktion in `src/hooks/useFetch.ts`

> 🛠️ Bearbeite Step 1...
[Im AionUi-Dashboard wird das Echtzeit-Diff von api.ts visuell dargestellt (Grün für hinzugefügt, Rot für gelöscht)]

> ⚠️ Frage: Darf ich die Bibliothek `axios-retry` zu `useFetch.ts` hinzufügen?
(Der Nutzer prüft die Anfrage und genehmigt sie sicher mit einem Klick)
```

---

## 🎯 Fazit

KI-Agenten sind brillante Coder, aber die endgültige Kontrolle und Überwachung muss stets in menschlicher Hand bleiben. Kombinieren Sie das hervorragende Visualisierungstool AionUi mit dem heute gelernten Transparenz-Prompt, um eine durch und durch sichere, kontrollierte und effiziente KI-Kollaborationsumgebung zu schaffen.

Überlassen Sie dem Agenten ab sofort beruhigt die schwere Arbeit und genießen Sie Ihren wohlverdienten Feierabend! 🍷
