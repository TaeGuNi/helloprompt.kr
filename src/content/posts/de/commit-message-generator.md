---
title: "'Commit-Nachricht empfehlen' Keine Sorgen mehr! Automatische Generierung von Conventional Commits"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Programmierung/Entwicklung"
description: "Ein Prompt, der saubere Commit-Nachrichten schreibt, die auf globale Standards (Conventional Commits) zugeschnitten sind, wenn Sie einfach die Änderungen (`git diff`) einfügen."
tags: ["Git", "Commit-Nachricht", "Zusammenarbeit", "Produktivität"]
---

# 📝 "Commit-Nachricht empfehlen" Keine Sorgen mehr! Automatische Generierung von Conventional Commits

**🎯 Empfohlen für:** Jeden
**⏱️ Zeitaufwand:** 5 Minuten

- **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Commit-Nachrichten schreiben ist schwieriger als Code schreiben..."_

`fix: bug`, `update code`... Committen Sie so?
Gute Commit-Nachrichten sind der Kern des Geschichtsmanagements, aber sie jedes Mal zu schreiben, bereitet mir Kopfschmerzen.
Werfen Sie einfach den `git diff`-Inhalt ein, und er wird im **Conventional Commits**-Stil, dem Standard des Open-Source-Lagers, ausgegeben.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Änderungen analysieren und automatisch den passenden Typ auswählen (feat, fix, refactor usw.)
2. Prägnanten und klaren Betreff sowie detaillierten Textkörper schreiben
3. Formatierung angepasst an Teamkonventionen

---

## 🚀 Die Lösung: "Git-Commit-Nachrichten-Generator"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

**Rolle:** Du bist ein Open-Source-Maintainer, der von Git-Geschichtsmanagement besessen ist.
**Anfrage:** Schreibe eine saubere Commit-Nachricht, die auf globale Standards (Conventional Commits) zugeschnitten ist, wenn ich einfach die Änderungen (`git diff`) einfüge.

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Kopieren Sie den **PROMPT**-Inhalt unten und fügen Sie ihn in ChatGPT oder Claude ein.

> **Rolle:** Du bist ein Open-Source-Maintainer, der von Git-Geschichtsmanagement besessen ist.
>
> **Kontext:** Ich habe den Code geändert und brauche eine saubere Commit-Nachricht, die Kollegen leicht verstehen können.
>
> **Aufgabe:**
> Analysiere die `[Änderungen]` unten und empfehle 3 Commit-Nachrichten, die den **Conventional Commits**-Regeln entsprechen.
>
> 1. **Format:** `<type>(<scope>): <subject>`
> 2. **Körper:** Fasse den Grund für die Änderung (Warum) und den Inhalt der Änderung (Was) mit Aufzählungspunkten zusammen.
> 3. **Fußzeile:** (Optional) Wenn es eine Issue-Nummer gibt, füge sie im `Closes #123`-Format hinzu.
>
> **Änderungen (git diff oder Zusammenfassung):**

> [Schreiben Sie das `git diff`-Ergebnis oder Änderungen einfach hier]

> **Einschränkungen:**
>
> - Typ-Arten: Wähle einen aus `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
> - Der Betreff sollte 50 Zeichen nicht überschreiten und mit einem Imperativ (Verbstamm) beginnen. (Englisch ist Standard)

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabeänderungen)

"Login-Button-Farbe auf rot geändert, Fehler behoben, bei dem Login nicht funktionierte. Oh, und Installationsanleitung zur Readme hinzugefügt."

### ✅ Nachher (Ergebnis)

**Option 1 (Fokus auf Fehlerbehebung)**

```text
fix(auth): resolve login failure issue and update button style

- Fix logic error preventing user login
- Change login button color to red for better visibility
- Add installation guide to README.md
```

**Option 2 (Fokus auf UI-Verbesserung)**

```text
style(ui): update login button color and fix login bug

- Change login button color to red
- Fix login functionality bug
- docs: update installation guide in README
```

---

## 🎯 Schlussfolgerung

Commit-Nachrichten sind Briefe an Ihr zukünftiges Ich und Ihre Kollegen.
Schreiben Sie sie nicht grob. Holen Sie sich Hilfe von KI und hören Sie das Kompliment "Das Commit-Log dieser Person ist so sauber"! 🍷
