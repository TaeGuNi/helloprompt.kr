---
title: "Stop Pasting Context: Build Your First MCP Server in 5 Minutes"
description: "MCP (Model Context Protocol) ist der USB-Standard für LLMs. Anstatt jedes Mal JSON-Schemata zu kopieren, nutzen Sie diesen Prompt, um in 5 Minuten einen maßgeschneiderten Server zu erstellen, der lokale Daten direkt mit Claude oder Ollama verbindet."
author: "Unifactory Editor"
date: "2026-02-16"
tags:
  [
    "MCP",
    "Model Context Protocol",
    "Local LLM",
    "TypeScript",
    "Ollama",
    "Claude",
  ]
image: "/images/2026/02/16/mcp-server-tutorial.jpg"
---

# 📝 Schluss mit Copy & Paste: Bauen Sie Ihren ersten MCP-Server in 5 Minuten

- **🎯 Zielgruppe:** Entwickler, die es satt haben, DB-Schemata oder API-Dokumente in Prompts zu kopieren, und Nutzer lokaler Daten
- **⏱️ Zeitaufwand:** 5 Minuten → Dauerhafte Zeitersparnis
- **🤖 Empfohlenes Modell:** MCP-kompatible Modelle wie Claude Desktop oder Ollama

- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzen:** ⭐⭐⭐⭐⭐

> _"Sie öffnen Claude und fügen das DB-Schema ein. 10 Minuten später öffnen Sie ein neues Fenster und tun es wieder. Es ist an der Zeit, diese endlose Copy-Paste-Hölle endlich zu beenden."_

Im Jahr 2026 hat sich das **MCP (Model Context Protocol)** als De-facto-Standard etabliert, um LLMs mit Daten zu verbinden. Stellen Sie es sich wie einen "USB-Anschluss" für KI-Modelle vor. Anstatt dem Modell den Kontext jedes Mal manuell vorzukauen, verbinden Sie den Server ein einziges Mal. Danach "liest" das Modell Ihre Dateien, Datenbanken und internen APIs in Echtzeit völlig selbstständig aus.

Es gibt bereits hervorragende, universelle MCP-Server für die Anbindung an GitHub oder das lokale Dateisystem. Die wahre Magie entfaltet sich jedoch erst, wenn Sie die **firmenspezifische Geschäftslogik** direkt an das LLM anschließen.

Heute zeigen wir Ihnen einen Prompt, mit dem Sie die KI anweisen können, innerhalb von nur 5 Minuten einen vollständigen, maßgeschneiderten MCP-Server auf TypeScript-Basis zu erstellen (Scaffolding), anstatt lästigen Boilerplate-Code selbst schreiben zu müssen.

---

## ⚡️ Zusammenfassung in 3 Sätzen (TL;DR)

1. **Das Ende von Copy & Paste:** Mit MCP ermöglichen Sie es LLMs, direkt auf Ihre lokalen Daten (Datenbanken, Logs, APIs) zuzugreifen.
2. **Server-Erstellung per Prompt:** Generieren Sie den kompletten MCP-Servercode automatisch mit einem einzigen Prompt, ohne mühsame Ersteinrichtung.
3. **Ultimativer Datenschutz:** Streamen Sie Daten direkt in das Kontextfenster des Modells in Ihrer lokalen Umgebung, ohne dass sensible Informationen nach außen dringen.

---

## 🚀 Die Lösung: Der "MCP Server Scaffolder"

### 🥉 Basic Version (Für den schnellen Start)

Nutzen Sie diese Version, wenn Sie nur schnell das Grundgerüst eines MCP-Servers benötigen.

> **Rolle:** Du bist ein Senior TypeScript-Entwickler.
> **Aufgabe:** Schreibe einen einfachen MCP-Servercode unter Verwendung des `@modelcontextprotocol/sdk`, der folgenden Zweck erfüllt: `[Gewünschter Zweck, z.B. das Wetter für eine bestimmte Stadt abrufen]`.

<br>

### 🥇 Pro Version (Für Experten)

Verwenden Sie diesen Prompt, wenn Sie einen robusten, skalierbaren und sofort einsatzbereiten Servercode für die Praxis benötigen.

> **Rolle (Role):** Du bist ein Senior TypeScript-Ingenieur mit umfassender Expertise im Model Context Protocol (MCP) Ökosystem.
>
> **Kontext (Context):**
>
> - Hintergrund: Ich benötige einen benutzerdefinierten MCP-Server, um lokale Daten oder eine interne API mit einem LLM zu verbinden.
> - Ziel: Generiere einen vollständigen, ausführbaren MCP-Servercode in einer einzigen Datei (`index.ts`), der exakt auf meine Anforderungen zugeschnitten ist.
>
> **Aufgabe (Task):**
>
> 1. Schreibe den MCP-Servercode, der die folgenden Anforderungen erfüllt:
>    - **Zweck:** `[Beschreibe hier den spezifischen Zweck des Servers. Beispiel: Lese die letzten 50 Zeilen einer bestimmten Log-Datei aus]`
> 2. Der Code muss Copy-Paste-freundlich strukturiert und gut kommentiert sein, damit er sofort im Terminal ausgeführt werden kann.
>
> **Einschränkungen (Constraints):**
>
> - Du MUSST zwingend das offizielle `@modelcontextprotocol/sdk` verwenden.
> - Nutze das `zod`-Paket für die Validierung des Schemas, falls die Eingabeparameter des Tools komplex sind (empfohlen).
> - Implementiere bei der Servererstellung die Schnittstellen `ListToolsRequestSchema` und `CallToolRequestSchema` vollständig.
> - Integriere zwingend eine Fehlerbehandlungslogik (`try/catch`) innerhalb der Tool-Handler, um Abstürze des Servers zu verhindern.
> - **Gib ausschließlich einen einzigen TypeScript-Codeblock aus, ohne zusätzliche Erklärungen.**
>
> **Warnung (Warning):**
>
> - Erfinde niemals SDK-Methoden, die nicht existieren. Im Zweifelsfall greife auf Standard-Node.js-APIs als Workaround zurück.

---

## 💡 Kommentar des Autors (Insight)

Das Geheimnis dieses Prompts liegt nicht in der vagen Bitte "Schreibe mir Code", sondern darin, die KI strikt zur Einhaltung der **Kernspezifikationen des Protokolls (ListTools und CallTool Request-Handling)** zu zwingen, die ein MCP-Server zwingend benötigt.

Der größte Vorteil beim Aufbau eines eigenen MCP-Servers ist der **absolute Datenschutz (Privacy)**. Während bei der Nutzung universeller Web-Search-Tools Suchanfragen über externe Server laufen, verbleiben Ihre Daten vollständig unter Ihrer Kontrolle, wenn Sie einen maßgeschneiderten MCP-Server nutzen, der mit einer lokalen PostgreSQL-Datenbank oder internen API verbunden ist. Das Kopieren vertraulicher interner Dokumente in das Chatfenster gehört damit der Vergangenheit an.

Beginnen Sie am besten mit einem einfachen, schreibgeschützten (Read-only) Tool, wie dem Auslesen einer lokalen Log-Datei. Sobald Sie das Prinzip verstanden haben, können Sie die Funktionen erweitern – bis hin zur Modifikation von Datenbanken – und sich so einen extrem leistungsfähigen, persönlichen KI-Assistenten erschaffen.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Kann ich diesen Prompt auch nutzen, wenn ich keine Programmierkenntnisse habe?**
  - A: Ja, absolut! Wenn Sie den `[Zweck]` in natürlicher Sprache formulieren (z. B. "Eine Funktion, die das Wetter in Berlin anzeigt"), generiert Claude den perfekten Code für Sie. Sie müssen den Code dann nur noch kopieren und in Ihrer Umgebung ausführen.

- **F: Wie führe ich den generierten Servercode aus und verbinde ihn?**
  - A: Speichern Sie den Code als `index.ts`. Fügen Sie dann den Dateipfad zu diesem Skript im Bereich `mcpServers` der Claude Desktop-Konfigurationsdatei (`claude_desktop_config.json`) hinzu. Die Verbindung wird danach automatisch hergestellt.

- **F: Funktioniert der mit diesem Prompt erstellte Server nur mit Claude?**
  - A: Nein. Das Model Context Protocol ist ein offener Standard und funktioniert identisch auf allen Plattformen und Clients, die MCP unterstützen, wie beispielsweise Ollama oder Cursor.

---

## 🧬 Anatomie des Prompts (Warum funktioniert das?)

1.  **Strikte Einschränkungen (Constraints):** Durch die erzwungene Nutzung des `@modelcontextprotocol/sdk` und `zod` sowie die explizite Nennung der erforderlichen Schemata (`ListToolsRequestSchema`, `CallToolRequestSchema`) wird verhindert, dass die KI halluziniert und Code außerhalb der Spezifikation generiert.
2.  **Single-File & Code-Only Output:** Die Vorgabe, den Code in einer einzigen Datei (`index.ts`) ohne weitere Erklärungen auszugeben, maximiert die Geschwindigkeit, mit der Nutzer das Ergebnis testen können (Time-to-Value), anstatt sich mit komplexen, auf mehrere Dateien verteilten Projektstrukturen herumzuschlagen.
3.  **Erzwungene Fehlerbehandlung:** Die explizite Anweisung für `try/catch`-Blöcke verhindert, dass Laufzeitfehler während der Tool-Ausführung den gesamten MCP-Server zum Absturz bringen.

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabe)

```text
User:
(Kopiert die gesamte, tausende Zeilen lange Datei my_database_schema.sql)
(Kopiert die gesamte, hunderte Zeilen lange Datei internal_api_docs.md)

Basierend auf diesem Schema, schreibe eine Query, um die Anzahl der heute registrierten User abzufragen, und sag mir, wie ich diese API aufrufen muss.
```

### ✅ Nachher (Ergebnis)

```text
User:
Wie viele User haben sich heute registriert? (Claude ruft im Hintergrund automatisch das MCP-Tool auf)

Claude:
Eine Abfrage der internen Datenbank hat ergeben, dass sich heute insgesamt 150 neue User registriert haben.
```

---

## 🎯 Fazit

Die Ära, in der wir Kontext mechanisch und manuell in KI-Chatfenster kopieren mussten, ist vorbei. Jetzt ist es an der Zeit, Ihre Daten direkt in die Modelle "einzustöpseln" und die KI als echte, nahtlose Infrastruktur zu nutzen.

Investieren Sie 5 Minuten, um Ihren maßgeschneiderten MCP-Server zu generieren und sparen Sie sich ab sofort das endlose Copy & Paste. Feierabend! 🍷
