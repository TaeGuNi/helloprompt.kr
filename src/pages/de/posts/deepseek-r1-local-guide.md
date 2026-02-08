---
layout: /src/layouts/Layout.astro
title: "DeepSeek R1 Lokale Installation: Dein kostenloser Coding-Sklave auf dem PC"
author: "ZZabbis"
date: "2026-02-08"
updatedDate: "2026-02-08"
category: "Entwicklung & Coding"
description: "Wie man DeepSeek R1 lokal mit Ollama installiert und einen unbegrenzten, kostenlosen Coding-Assistenten erhält. Keine Datenlecks, 100% privat."
tags: ["DeepSeek", "Ollama", "Local LLM", "Coding", "Produktivität"]
---

# 💻 Dein kostenloser Coding-Sklave auf dem PC: DeepSeek R1 Installationsanleitung

> **🎯 Empfohlen für:** Entwickler, die Angst haben, Firmencode zu leaken, Studenten, die API-Kosten sparen wollen, Offline-Arbeiter
> **⏱️ Benötigte Zeit:** 10 Min.
> **🤖 Empfohlenes Modell:** DeepSeek-R1-Distill-Llama-8B (oder 70B)

| Schwierigkeit | Effektivität |   Nutzen   |
| :-----------: | :----------: | :--------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐⭐ |

> _"Darfst du wegen Sicherheitsrichtlinien keinen Firmencode in ChatGPT einfügen? Hasst es aber, dumme alte Modelle zu benutzen? Sperre jetzt **DeepSeek R1** in deinen Computer und lass es für dich arbeiten. 100% Kostenlos, 100% Privat."_

Im Jahr 2026 ist das heißeste Stichwort unter Entwicklern zweifellos **"Local LLM"**. Unter ihnen zeigt **DeepSeek R1** eine wahnsinnige Leistung (besonders bei Coding-Skills), oft als "Der Fehler von Open Source" bezeichnet. Diese Anleitung zeigt dir den einfachsten und schnellsten Weg, DeepSeek auf deinem Mac (oder Windows PC) zu installieren.

---

## ⚡️ ZL;NG (Zu lang; nicht gelesen)

1.  Installiere **Ollama** (Den LLM-Runner).
2.  Tippe einen Befehl ins Terminal (`ollama run deepseek-r1`).
3.  Genieße unbegrenztes, kostenloses Coding in VS Code oder Browser.

---

## 🚀 Schritt 1: Ollama installieren

Zuerst brauchst du die Engine, um das LLM auszuführen: **Ollama**. Es ist viel einfacher als Docker.

### Mac / Linux

Öffne dein Terminal und füge dies ein:

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Windows

Gehe zur [Ollama Offiziellen Seite](https://ollama.com), klicke auf `Download for Windows` und führe den Installer aus.

---

## 🚀 Schritt 2: DeepSeek R1 beschwören

Jetzt laden wir das Modell herunter und führen es aus. Wähle entsprechend deiner Spezifikationen.

### 🥉 Basic: 8B Modell (Für Laptops)

Läuft flüssig auf M1/M2 MacBook Air, normalen Gaming-Laptops.

```bash
ollama run deepseek-r1:8b
```

### 🥇 Pro: 70B Modell (Für High-End Desktop/M3 Max)

Erfordert 32GB+ RAM. Zeigt Denkfähigkeiten auf GPT-4-Niveau.

```bash
ollama run deepseek-r1:70b
```

Sobald du den Befehl eingibst, startet der Download automatisch und öffnet eine Chat-Eingabeaufforderung.

---

## 🚀 Schritt 3: Praktische Nutzung (VS Code Integration)

Im Terminal zu chatten ist nicht cool. Lass es uns in **VS Code** einbinden und zu einem echten Copilot machen.

1.  Suche und installiere **"Continue"** in den VS Code Erweiterungen.
2.  Klicke auf das Seitenleisten-Symbol -> Wähle `Add Model`.
3.  Wähle `Ollama` als Provider.
4.  Wähle `DeepSeek R1` als Modell. (Autodetect funktioniert auch)
5.  Markiere jetzt Code und drücke `Cmd + L` (Win: `Ctrl + L`), um zu fragen.

> **F:** "Refactor diese Funktion."
> **A:** (DeepSeek spuckt sofort Code aus)

---

## 🧬 Anatomie des Prompts (Warum es funktioniert?)

"Warte, ist das nicht eine Installationsanleitung? Wo ist der Prompt?"
Hier ist **Der effektivste Coding-Prompt für DeepSeek**. Da DeepSeek "Chain of Thought" (Gedankenkette) schätzt, ist der Schlüssel, es zum **"Denken"** aufzufordern.

### DeepSeek Spezialisierter Coding-Prompt

> **Rolle:** Du bist ein Google Senior Engineer und Clean Code Evangelist.
>
> **Kontext:** Dieser Code funktioniert, aber er ist unleserlich und ineffizient.
>
> **Aufgabe:**
>
> 1. Analysiere zuerst die Probleme (Zeitkomplexität, Benennung usw.). (**Gib zuerst den Denkprozess aus**)
> 2. Schreibe den optimierten Code.
> 3. Füge Kommentare hinzu, warum du es geändert hast.

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Kostenloses ChatGPT)

"Dieser Code... ähm... ich bin mir nicht sicher. Bitte frag nochmal." (Oder generische Antworten)

### ✅ Nachher (DeepSeek R1 Lokal)

```text
<think>
Die verschachtelte Schleife des Benutzers ist O(n^2), was bei großen Datenmengen langsam sein wird.
Ich kann es mit einer Hash Map auf O(n) reduzieren.
Variablen 'a', 'b' sind unklar, lass uns sie in 'userList', 'targetId' umbenennen.
</think>

(Gibt optimierten Code aus...)
```

_Die Geschwindigkeit hängt von deinem PC ab, aber du kannst unendlich oft fragen, ohne Sicherheitsbedenken!_

---

## 🎯 Fazit

Jetzt wohnt ein **Kostenloser Senior Developer** in deinem PC.
Auch wenn das Internet ausfällt, auch wenn die Firma pleitegeht, dein DeepSeek bleibt für immer bei dir.

Öffne jetzt sofort dein Terminal.
`ollama run deepseek-r1`

Dein Feierabend rückt näher. 🍷
