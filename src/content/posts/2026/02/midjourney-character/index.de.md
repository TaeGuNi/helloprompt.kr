---
layout: /src/layouts/Layout.astro
title: "Midjourney 캐릭터 일관성: 완벽한 캐릭터 시트 만들기"
author: "ZZabbis"
date: "2026-02-13"
updatedDate: "2026-02-13"
category: "AI 디자인"
description: "Haben Sie genug von sich ständig ändernden KI-Charaktergesichtern? Entdecken Sie das Geheimnis konsistenter Charakterdesigns mit einem einzigen Midjourney Character Sheet Prompt."
tags: ["Midjourney", "캐릭터 디자인", "AI 아트", "일관성"]
---

# 📝 Midjourney Charakter-Konsistenz: Das perfekte Character Sheet erstellen

- **🎯 Empfohlen für:** Spieleentwickler, Webtoon-Künstler, Character Concept Artists
- **⏱️ Zeitaufwand:** 1 Stunde → auf 5 Minuten verkürzt
- **🤖 Empfohlenes Modell:** ChatGPT (zur Prompt-Erstellung) & Midjourney v6.0+

- ⭐ **Schwierigkeitsgrad:** ⭐⭐☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐⭐

> _"Sind Sie auch frustriert, weil sich das Gesicht Ihres Charakters bei jeder KI-Generierung leicht verändert und wie eine völlig andere Person aussieht?"_

Die größte Herausforderung beim Einsatz von KI-Kunst in der Praxis ist die Wahrung der **Charakter-Konsistenz (Consistency)**. Wenn sich das Gesicht oder die Kleidung des Protagonisten in Webtoons oder Game-Assets von Szene zu Szene ändert, ist das Material für echte Projekte unbrauchbar. Die zuverlässigste und klassischste Methode, dieses Problem zu lösen, ist die Erstellung eines **Character Sheets (Charakterbogens)** als Grundlage.

Hier stelle ich Ihnen ein Prompt-Engineering-Geheimnis vor, mit dem Sie durch eine einzige Bildgenerierung die Vorder-, Seiten- und Rückansicht erhalten und so einen perfekten, konsistenten Referenzpunkt für all Ihre zukünftigen Arbeiten schaffen.

---

## ⚡️ Zusammenfassung in 3 Sätzen (TL;DR)

1. Erstellen Sie zuerst ein **Character Sheet**, um einen klaren, verbindlichen Standard für Ihr Design zu definieren.
2. Nutzen Sie den **Pro-Prompt**, um über eine dialogbasierte KI (wie ChatGPT) perfekte Midjourney-Prompts für alle Ansichten (Front/Side/Back) zu generieren.
3. Stellen Sie den Parameter **`--ar` (Seitenverhältnis)** breit ein (z. B. 16:9), um zu verhindern, dass sich Körperteile überschneiden oder abgeschnitten werden.

---

## 🚀 Die Lösung: Der "Character Sheet Master-Prompt"

### 🥉 Basic Version (Für schnelle Ergebnisse)

Verwenden Sie diesen Prompt, wenn Sie direkt in Midjourney schnell die grobe Atmosphäre eines Charakters testen möchten.

> **Midjourney Prompt:**
> character sheet of a `[Detaillierte Charakterbeschreibung]`, full body, white background, multiple views, front side and back view --v 6.0 --ar 3:2

<br>

### 🥇 Pro Version (Für Experten)

Dies ist ein Experten-Prompt für ChatGPT oder Claude. Er generiert den optimalen englischen Midjourney-Prompt, wenn Sie hochdetaillierte Konzeptzeichnungen für Spiele oder präzise Referenzen für 3D-Modellierungen benötigen.

> **Rolle (Role):** Du bist ein `[Lead Character Designer für AAA-Rollenspiele]`.
>
> **Kontext (Context):**
>
> - Hintergrund: `[Ich benötige ein konsistentes Charakter-Referenzblatt für 3D-Modellierung und Webtoon-Zeichnungen.]`
> - Ziel: `[Erstelle einen hochwertigen englischen Prompt im Concept-Art-Stil, der perfekt in Midjourney v6.0 funktioniert.]`
>
> **Aufgabe (Task):**
>
> 1. Schreibe basierend auf den folgenden Charakter-Einstellungen einen englischen Prompt für die Bildgenerierung in Midjourney.
> 2. Charakter-Einstellungen: `[Beschreibe hier detailliert das Aussehen, die Kleidung, die Waffen, die Farben usw. des Charakters]`
> 3. Das Format MUSS ein **Character Sheet** sein. Stelle sicher, dass ausdrücklich mindestens drei verschiedene Winkel erwähnt werden: Frontansicht (Front view), Seitenansicht (Side view) und Rückansicht (Back view).
>
> **Einschränkungen (Constraints):**
>
> - Fordere einen rein weißen Hintergrund (Plain white background), um das Motiv nicht zu stören.
> - Spezifiziere eine A-Pose oder T-Pose (Standard neutral pose), damit Arme und Beine den Körper nicht verdecken.
> - Eine Ganzkörperaufnahme (Full body shot) von Kopf bis Fuß ist zwingend erforderlich.
> - Verlange eine flache Beleuchtung (Flat lighting, shadowless), damit keine Details durch Schatten verborgen werden.
> - Gib AUSSCHLIESSLICH den englischen Prompt in einem Markdown-Codeblock (```text) aus, ohne zusätzlichen Text.
>
> **Warnung (Warning):**
>
> - Füge am Ende des Prompts unbedingt `--v 6.0 --ar 16:9 --stylize 250` hinzu, damit keine Midjourney-Parameter fehlen.
> - Erfinde keine unsicheren Informationen und lass unnötige Einleitungen oder zusätzliche Erklärungen weg.

---

## 💡 Insights des Autors

Der Grund, warum dieses Prompt-System so mächtig ist, liegt darin, dass es die räumliche Anordnung und Konsistenz – die größten Schwächen von Midjourney – intelligent kontrolliert. Die Kombination aus dem **`--ar` (Aspect Ratio)** Parameter und den Anweisungen zur Bildkomposition ist hierbei der Schlüssel zum Erfolg.

1. **Eine breite Leinwand (`--ar 16:9`):** Ein Character Sheet muss den gesamten Körper aus mindestens drei Perspektiven nebeneinander darstellen. Beim Standardverhältnis (1:1) werden die Figuren in einen zu engen Raum gequetscht, was unweigerlich zu Überschneidungen führt oder Körperteile abschneidet. Wenn Sie ein Verhältnis von 16:9 oder 3:2 erzwingen, geben Sie der KI den nötigen horizontalen Platz.
2. **Kontrollierte Beleuchtung (Flat lighting):** Dramatische Beleuchtung (wie Cinematic lighting) sieht auf Illustrationen toll aus, ist für Referenzbögen aber eine Katastrophe. Tiefe Schatten machen es unmöglich, die Textur oder Struktur der Kleidung zu erkennen. Der Befehl für flache Beleuchtung garantiert ein praxistaugliches Ergebnis.

**💡 Praxis-Tipp:** Nutzen Sie das mit dem Pro-Prompt generierte Bild als Quellmaterial für die `--cref` (Character Reference) Funktion in Midjourney. So können Sie unendlich viele Illustrationen in verschiedensten Posen generieren, während Gesicht und Kleidung Ihres Charakters extrem konsistent bleiben.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Kann ich nach der Erstellung des Character Sheets nur die Kleidung oder Waffen leicht ändern?**
  - A: Ja, absolut. Klicken Sie im Midjourney-Discord mit der rechten Maustaste auf das generierte Sheet und wählen Sie die Funktion **'Vary (Region)'** (Inpainting). Wählen Sie mit dem Lasso-Werkzeug nur die Kleidung aus, lassen Sie Gesicht und Körperform unangetastet, und geben Sie einen neuen Prompt ein (z. B. "wearing futuristic heavy armor"). Die Änderung wird nahtlos eingefügt.

- **F: Kann ich statt des realistischen Stils auch einen japanischen Anime-Stil (für Webtoons) generieren?**
  - A: Natürlich. Ändern Sie einfach den Parameter `--v 6.0` am Ende des Prompts in `--niji 6` (das auf Anime spezialisierte Modell). So erhalten Sie ein hervorragendes Character Sheet im Cel-Shading-Stil, das Sie direkt für Webtoons oder 2D-Spiele verwenden können.

---

## 🧬 Prompt-Analyse (Warum funktioniert das?)

1. **Spezifische Ansichten (Multiple Views):** Durch die klare Anweisung "Front, Side, Back view" wird die KI gezwungen, ein technisches 3-Seiten-Layout zu erstellen, anstatt den Charakter in einer zufälligen Pose darzustellen.
2. **Kontrolle über Pose und Bildausschnitt (A-pose / Full body shot):** Die Vorgabe einer in der Spiele- und 3D-Industrie üblichen Standardpose verhindert, dass wichtige Details der Kleidung durch verschränkte Arme oder Beine verdeckt werden.
3. **Isolierte Einschränkungen:** Indem dem LLM (ChatGPT) eine klare Struktur für die Erstellung des Midjourney-Prompts vorgegeben wird, verhindern wir Halluzinationen oder das Hinzufügen nutzloser Hintergrundelemente.

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabe)

```text
make a character sheet of a cyberpunk warrior --v 6.0
```

### ✅ Nachher (Ergebnis)

```text
Character sheet of a cyberpunk female warrior with a neon katana and pink hair, front view, side view, back view, full body shot, standard neutral A-pose, plain white background, flat lighting, shadowless, high quality, detailed concept art style --v 6.0 --ar 16:9 --stylize 250
```

> **Ergebnis:** Auf einem rein weißen Hintergrund (White background) werden Vorder-, Seiten- und Rückansicht in einheitlicher Größe und Proportion nebeneinander aufgereiht. Der Charakter ist von Kopf bis Fuß vollständig sichtbar, und dank der schattenfreien Ausleuchtung können die Details der Kleidung sofort als Referenz für 3D-Modellierung oder Zeichnungen verwendet werden.

---

## 🎯 Fazit

Ein gut gemachtes "Character Sheet" ist das solide Fundament jedes KI-Kunstprojekts. Wenn Sie dieses Gerüst einmal sauber aufgebaut haben, bleiben die Details Ihres Charakters stabil, egal in welche Situation oder vor welchen Hintergrund Sie ihn später setzen.

Lösen Sie mit dem heute gelernten Prompt Ihre Probleme mit der Charakter-Konsistenz und erschaffen Sie Ihr eigenes, faszinierendes Original-Charakter-Universum!

Machen Sie jetzt pünktlich Feierabend! 🍷
