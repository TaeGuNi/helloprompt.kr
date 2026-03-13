---
layout: /src/layouts/Layout.astro
title: "Midjourney-Charakterkonsistenz: Erstellung des perfekten Character Sheets"
author: "Jay"
date: "2026-02-13"
updatedDate: "2026-02-13"
category: "AI Design"
description: "Stress wegen inkonsistenter KI-Gesichter? Erfahren Sie, wie Sie mit nur einem Midjourney-Prompt perfekte Character Sheets erstellen und Designstandards setzen."
tags: ["Midjourney", "Charakterdesign", "KI-Kunst", "Konsistenz"]
image: "/images/hooks/midjourney-character.jpg"
---

## 📝 Midjourney-Charakterkonsistenz: Erstellung des perfekten Character Sheets

- **🎯 Zielgruppe:** Game-Entwickler, Webtoon-Zeichner, Charakter-Konzeptkünstler
- **⏱️ Zeitaufwand:** 1 Stunde → verkürzt auf 5 Minuten
- **🤖 Beste Performance:** Midjourney v6.0 oder höher (Kombination mit ChatGPT zur Prompt-Generierung empfohlen)

- ⭐ **Schwierigkeitsgrad:** ⭐⭐☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzbarkeit:** ⭐⭐⭐⭐⭐

> _"Haben Sie jemals aufgegeben, KI-Charaktere in kommerziellen Projekten einzusetzen, weil sich Gesichtszüge und Kleidung bei jedem Versuch leicht veränderten?"_

![Midjourney-Charakterkonsistenz: Erstellung des perfekten Character Sheets](/images/hooks/midjourney-character.jpg)

Der größte Eisberg, auf den man bei der Einführung von KI-Kunst in die Praxis stößt, ist zweifellos die Sicherstellung der **„Charakterkonsistenz (Consistency)“**. Insbesondere wenn man versucht, mit Midjourney Webtoon-Panels zu gestalten oder 3D-Assets für Spiele zu erstellen, kann dieses Problem zu einem kritischen Flaschenhals werden, der über das Fortbestehen eines Projekts entscheidet. Egal wie viel Mühe man sich bei der Beschreibung gibt oder wie fest man den Seed-Wert einstellt: Sobald der Protagonist den Kopf dreht oder in eine laufende Szene wechselt, bricht alles zusammen. Die Augenpartie verändert sich minimal, die Details an den Epauletten der Uniform verschwinden, und sogar das Design des Schwertes in der Hand mutiert zu einer völlig anderen Form – Phänomene, die wir alle schon unzählige Male erlebt haben.

Die naive Annahme „mit ein wenig Nachbearbeitung wird es schon gehen“ führt direkt zu Überstunden. Man verbringt Stunden mit pixelgenauem Photoshop-Retouching und Overpainting, um die Details zu korrigieren, die bei jedem Szenenwechsel oder Kamerawinkel aus der Reihe tanzen. Bei einem einzelnen Charakter mag man das noch durchhalten, aber sobald die Anzahl der Figuren auf zwei oder drei steigt und die Hintergründe komplexer werden, gerät die Situation außer Kontrolle. Während man hunderte Male auf den „Vary (Region)“-Button drückt und das „Gacha-Prinzip“ spielt, verfliegt die Zeit, und die Qualität sinkt paradoxerweise eher. An diesem Punkt kommt oft tiefe Resignation auf: Wäre es nicht für das Budget und die mentale Gesundheit besser gewesen, die gesamte Zeichnung von Anfang an an einen menschlichen Künstler auszulagern? Der Starttermin des kommerziellen Projekts verzögert sich immer weiter, und die Einführung von KI droht als gescheitertes Experiment mit mehr Verlusten als Gewinnen zu enden.

Es gibt jedoch eine klare und kraftvolle Methode, um dieses chronische Leiden ein für alle Mal zu heilen und die KI-Pipeline zu normalisieren. Bevor man mit der Massenproduktion von Illustrationen oder Zwischensequenzen beginnt, muss man an oberster Stelle des Systems ein **„Master Character Sheet“** erstellen, das als absoluter und einziger Bezugspunkt für alle folgenden Arbeiten dient. Dies ist genau dasselbe Prinzip wie die Fertigstellung eines präzisen Blueprints (Blaupause), bevor man einen riesigen Wolkenkratzer errichtet. Es handelt sich um eine Technik, bei der die Proportionen und Details der Frontansicht (Front View), Seitenansicht (Side View) und Rückansicht (Back View) innerhalb einer einzigen Leinwand perfekt kontrolliert und gerendert werden. Dadurch wird der KI von vornherein der Spielraum genommen, eigenmächtig Designs zu verändern oder Halluzinationen zu erzeugen.

In dem Moment, in dem Sie den hier bereitgestellten „Experten-Master-Prompt“ in Ihren Midjourney-Bot eingeben, beginnt eine magische Veränderung. Mit nur einem Druck auf die Enter-Taste werden die Gesichtszüge, der Körperbau, die feinen Texturen der Kleidung und sogar das versteckte Design der Rückseite Ihres Charakters, das Sie bisher nur im Kopf hatten, in einer 360-Grad-Zerlegung auf einem sauberen Blatt gerendert. Ein so fertiggestelltes Character Sheet fungiert in Kombination mit der leistungsstarken Charakter-Referenzfunktion (`--cref`) von Midjourney als solider Anker, der dafür sorgt, dass Details selbst bei extremen Froschperspektiven oder dynamischen Kampfposen nicht einbrechen. Verschwenden Sie keine wertvolle Zeit mehr mit sinnlosen Prompt-Kombinationen und Wahrscheinlichkeiten. Wir enthüllen jetzt das ultimative Praxis-Geheimnis, mit dem Sie die volle Kontrolle über Ihr eigenes, unerschütterliches Original-Universum übernehmen.

---

## 📊 Beweis: Beeindruckende Ergebnisse (Vorher & Nachher)

### ❌ Vorher (Der bekannte Schmerz)

```text
make a character sheet of a cyberpunk warrior --v 6.0
```

In jedem generierten Bild springt die Skalierung des Charakters willkürlich hin und her, und aufgrund der übermäßig dynamischen Posen lassen sich die wichtigsten Detailstrukturen der Kleidung überhaupt nicht erfassen. Zu allem Überfluss wird im Hintergrund eine komplette, prachtvolle Cyberpunk-Stadt gerendert, was selbst das einfache Freistellen des Charakters zu einer mühsamen Qual macht.

### ✅ Nachher (Das perfekte Ergebnis)

```text
Character sheet of a cyberpunk female warrior with a neon katana and pink hair, front view, side view, back view, full body shot, standard neutral A-pose, plain white background, flat lighting, shadowless, high quality, detailed concept art style --v 6.0 --ar 16:9 --stylize 250
```

Auf einem rein weißen (White) Hintergrund, ohne jegliche visuelle Störung, werden die Ganzkörperaufnahmen der Front-, Seiten- und Rückansicht in fehlerfreier Skalierung nebeneinander angeordnet. Es gibt keine aus dem Bild ragenden (Frame out) Körperteile, und durch den konsequenten Verzicht auf starke Schatten treten Textur und Struktur der Kleidungsteile klar hervor. Dies ist die Geburtsstunde eines perfekten Praxis-Assets, das sofort für 3D-Modellierungsskizzen oder als Zeichenreferenz verwendet werden kann.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Erstellen Sie unbedingt zuerst ein **Character Sheet**, bevor Sie mit der Massenproduktion von Assets beginnen, um einen unerschütterlichen Design-Bezugspunkt zu setzen.
2. Geben Sie den **Pro-Version-Prompt** in ChatGPT ein, um sofort einen für Midjourney optimierten englischen Prompt zu erhalten, bei dem Front-, Seiten- und Rückansichten perfekt getrennt sind.
3. Erzwingen Sie mit dem Parameter **`--ar` (Seitenverhältnis)** ein breites Format (z. B. 16:9), um zu verhindern, dass Körperteile beim Rendern mehrerer Ansichten überlappen oder aus dem Bild geschnitten werden.

---

## 🚀 So schreiben echte Profis

Wir bieten hier sowohl einen Basis-Prompt an, der sich gut eignet, um die allgemeine Stimmung und den Ton eines Charakters schnell und einfach in Midjourney zu testen, als auch einen Master-Prompt für präzise Einstellungsbilder, die als Basis für kommerzielle Game-Art oder 3D-Modellierungsarbeiten dienen können.

### 🥉 Basis-Version

> **Midjourney Prompt:**
> character sheet of a `[Detaillierte englische Beschreibung des Aussehens]`, full body, white background, multiple views, front side and back view --v 6.0 --ar 3:2

### 🥇 Pro-Version (Experten-Modus)

Kopieren Sie den folgenden Prompt einfach in ChatGPT oder Claude. Er generiert automatisch einen optimierten englischen Prompt, den Midjourney fehlerfrei versteht. Passen Sie nur den Inhalt in den Klammern `[ ]` an Ihr Projekt an.

> **Rolle (Role):** Du bist der `[Lead Character Concept Artist eines AAA-RPG-Spiels]`.
>
> **Situation (Context):**
>
> - Hintergrund: `[Erstellung eines konsistenten Charakter-Referenz-Sheets (Reference Sheet), das als Standard für 3D-Modellierung und Webtoon-Zeichnungen dient]`
> - Ziel: `[Erstellung eines qualitativ hochwertigen englischen Prompts im Concept-Art-Stil, der in der Midjourney v6.0 Umgebung fehlerfrei und perfekt funktioniert]`
>
> **Aufgabe (Task):**
>
> 1. Erstelle basierend auf den bereitgestellten Charaktereinstellungen genau einen englischen Prompt, der für die Midjourney-Bildgenerierung optimiert ist.
> 2. Charaktereinstellungen: `[Beschreibe detailliert Geschlecht, Alter, Körperbau, Kleidung, Hauptwaffen, Akzentfarben etc. des gewünschten Charakters]`
> 3. Das Ergebnis muss zwingend dem Format eines **Character Sheets** folgen. Gib im Prompt an, dass mindestens drei verschiedene Perspektiven enthalten sein müssen: Frontansicht (Front view), Seitenansicht (Side view) und Rückansicht (Back view).
>
> **Einschränkungen (Constraints):**
>
> - Um den Fokus voll auf das Charakterdesign zu legen, fordere einen rein weißen Hintergrund (Plain white background).
> - Um zu verhindern, dass Arme oder Beine Details der Kleidung verdecken, lege strikt eine A-Pose oder T-Pose (Standard neutral pose) fest.
> - Fordere zwingend Ganzkörperaufnahmen (Full body shot), bei denen vom Kopf bis zum Fuß nichts aus dem Bild geschnitten wird.
> - Um zu verhindern, dass Texturen oder Strukturen durch dramatische Schatten verdeckt werden, stelle eine flache Beleuchtung (Flat lighting, shadowless) ein.
> - Das finale Ausgabeformat soll nur der saubere englische Prompt-Text innerhalb eines Markdown-Codeblocks (```text) sein.
>
> **Warnung (Warning):**
>
> - Vergiss niemals, am Ende des Prompts die obligatorischen Midjourney-Parameter `--v 6.0 --ar 16:9 --stylize 250` hinzuzufügen.
> - Erfinde keine willkürlichen Einstellungen durch Halluzinationen und verzichte komplett auf Begrüßungen oder Einleitungen.

---

## 💡 Kommentar des Autors (Insight)

Der Grund, warum diese Prompt-Architektur in der Praxis eine so überragende Performance liefert und oft als „Game Changer“ bezeichnet wird, liegt darin, dass sie die angeborenen Schwachstellen von Midjourney – nämlich die **„räumliche Kontrolle (Spatial Control)“** und die **„strukturelle Konsistenz (Structural Consistency)“** – auf Systemebene geschickt steuert. Anfänger bei Midjourney neigen dazu, sich auf prächtige Adjektive und filmische Beschreibungen zu fixieren. Profis, die kommerzielle Assets erstellen, widmen hingegen mehr als die Hälfte ihres Prompts der Kontrolle von **Seitenverhältnis (Aspect Ratio)**, **Beleuchtung (Lighting)** und **Hintergrund (Background)**. Hier erkläre ich die wichtigsten technischen Entscheidungspunkte und Methoden der Variablensteuerung (Constraint Control) im Detail.

**1. Erzwungene Nutzung der breiten Leinwand (`--ar 16:9` oder `--ar 3:2`)**
Um ein vollständiges 3-Seiten-Character-Sheet (Front, Seite, Rückseite) perfekt in einem einzigen Bild zu komponieren, müssen mindestens drei Ganzkörperansichten horizontal nebeneinander platziert werden. Im Standard-Rendering-Verhältnis von Midjourney (1:1, quadratisch) werden die Charaktere oft in eine zu enge Leinwand gequetscht, was zu überlappenden Körpern oder abgeschnittenen Gliedmaßen (Frame-out) führt. Indem man am Ende des Prompts ein großzügiges breites Verhältnis wie `--ar 16:9` erzwingt, bietet man der KI proaktiv **„genügend physischen Freiraum“**, um mehrere Ansichten vollständig zu rendern. Dies gibt dem Bildkompositions-Algorithmus der KI den nötigen Spielraum, damit jede Ansicht (View) ihre eigene Skalierung und Proportion beibehalten kann – einer der wichtigsten Tipps überhaupt.

**2. Erhaltung der Originaldetails durch Lichtsteuerung (Flat lighting, shadowless)**
Ein häufiger Fehler von Anfängern ist es, Character-Sheet-Prompts mit dramatischen Lichtanweisungen wie <b>cinematic lighting</b> oder <b>volumetric lighting</b> zu überladen. Prachtvolles Licht erzeugt zwar in einer fertigen Einzelillustration eine beeindruckende Atmosphäre, ist aber der größte Feind in einem „Praxis-Referenz-Sheet“ für 3D-Modellierung oder Zeichnungen. Starke Schatten (Heavy Shadows) beschädigen die Daten über Texturen der Kleidung, die Verbindungsstruktur von Teilen und die ursprüngliche Farbe (Base Color) erheblich. Daher muss man bewusst **flache Beleuchtung (Flat lighting)** und **Schattenfreiheit (Shadowless)** erzwingen. So verschwinden störende Lichteinflüsse, und es entsteht ein reines und klares Ergebnis, das 3D-Modellierer oder Webtoon-Zeichner sofort intuitiv nutzen können.

**3. Isolationseffekt durch rein weißen Hintergrund (Plain white background)**
Um sich voll auf das Design des Charakters konzentrieren zu können, muss das Rauschen des Hintergrunds vollständig entfernt werden. Wenn eine bestimmte Umgebung im Hintergrund beschrieben wird (z. B. <b>cyberpunk city</b>, <b>dark forest</b>), neigt Midjourney dazu, die Farben und Lichtreflexionen dieses Hintergrunds auf die Kleidung des Charakters zu übertragen (Color Bleeding). Die strikte Angabe von <b>plain white background</b> isoliert den Charakter perfekt auf der Leinwand. Dies ermöglicht eine enorme Arbeitseffizienz, da man später in Photoshop den Hintergrund mit nur einem Klick des Zauberstab-Werkzeugs (Magic Wand) entfernen kann. Dies ist hart erarbeitetes Praxis-Know-how, das erst nach vielen Fehlschlägen durch Hintergrundinterferenzen gereift ist.

**4. Strikte Fixierung der Standard-Komposition (A-pose / T-pose, Full body shot)**
Es ist unerlässlich, explizit die globalen Standard-Posen der 3D-Modellierungs- und Game-Art-Branche zu fordern: A-Pose oder T-Pose. In dem Moment, in dem man dynamische Bewegungen oder extreme Winkel zulässt, werden die wichtigsten Details der Kleidung am Torso oft durch die Arme verdeckt. Der Kern dieses Prompt-Designs besteht darin, die KI-typische „künstlerische Freiheit“ zu unterdrücken und sie zur Einhaltung eines streng mechanischen Layouts zu zwingen.

**💡 Praxis-Cheat-Code (Fehlerbehebung)**
Wenn Sie mit dem obigen Pro-Prompt ein perfektes Character Sheet erhalten haben, versuchen Sie, dieses Bild als Quellbild (Source Image) für die leistungsstarke **`--cref` (Character Reference)** Funktion von Midjourney zu verwenden. Geben Sie im Prompt-Fenster eine neue Aktion ein (z. B. <b>running through a neon city, dynamic action pose</b>) und hängen Sie <b>--cref [Bild-URL] --cw 100</b> an – es wird Magie passieren. Sie können unendlich viele Illustrationen in dynamischen Posen produzieren, während die einzigartige Gesichtsstruktur, die Haarfarbe und sogar die feinsten Details der Kleidung des zuvor erstellten Charakters auf extrem hohem Niveau beibehalten werden. Eine echte „Ein-Mann-Asset-Pipeline“ beginnt genau bei diesem einen Character Sheet. Wenn Ihnen das Ergebnis nicht gefällt, ist es eine gute Methode, den Wert für <b>--cw (Character Weight)</b> leicht von 100 auf 80 zu senken, um der Kleidung etwas mehr Flexibilität zu geben. Diese Einstellungen wurden in zahlreichen Nachtschichten getestet und verifiziert – Sie müssen sie nur noch für Ihr Projekt kopieren.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **Q: Kann ich nach dem Erstellen des Character Sheets nur bestimmte Kleidungsstücke oder Waffen-Teile austauschen?**
  - A: Ja, das wird voll unterstützt. Aktivieren Sie den **'Vary (Region)'**-Button (Inpainting-Funktion) unter dem Ergebnis in Discord. Behalten Sie die Gesichtszüge und den Körperbau bei, markieren Sie nur den Bereich der Kleidung oder Waffe mit dem Lasso-Werkzeug und fügen Sie einen neuen Prompt hinzu (z. B. `wearing futuristic heavy armor`), um nur diesen Teil neu zu rendern.

- **Q: Kann ich die Ergebnisse auch im 2D-Webtoon- oder Anime-Stil statt im 3D-Realismus ausgeben?**
  - A: Natürlich. Ersetzen Sie im Parameter-Abschnitt am Ende des Prompts `--v 6.0` durch das spezielle Modell für Animationen: **`--niji 6`**. Ohne komplexes Tuning erhalten Sie sofort ein Character Sheet im wunderschönen Cel-Animation-Stil, das direkt für Webtoons oder 2D-Subkultur-Spiele verwendet werden kann.

---

## 🎯 Fazit

Ein gut strukturiertes „Character Sheet“ ist das solide Rückgrat und der absolute Masterplan für alle abgeleiteten KI-Kunst-Arbeiten. Wenn Sie diesen klaren Bezugspunkt zu Beginn des Projekts festlegen, werden die Details und die Identität Ihres Charakters niemals zusammenbrechen, egal ob es sich um eine heftige Kampfszene oder eine friedliche Alltagsszene handelt.

Nutzen Sie dieses leistungsstarke Prompt-Engineering-Template, um sich von der lästigen Inkonsistenz zu befreien, die bisher so viele Projekte behindert hat, und bauen Sie Ihr eigenes, unerschütterliches Original-Universum auf.

Automatisieren Sie Ihre Arbeit und genießen Sie Ihren Feierabend! 🍷
