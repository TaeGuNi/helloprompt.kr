---
title: " \"Midjourney Character Consistency (German)\""
description: "So revolutioniert die Character Reference (--cref) in Midjourney v7 dein visuelles Storytelling und garantiert einheitliche Gesichter."
date: "2026-02-15"
image: "https://picsum.photos/seed/midjourney/800/600"
tags: ["AI", "Tech", "midjourney-v7-consistency"]
---

## 📝 Midjourney v7: Meistere die Charakter-Konsistenz (Character Reference)

- **🎯 Zielgruppe:** Art Directors, Webtoon-Zeichner, Marketer, Designer
- **⏱️ Zeitersparnis:** 2 Stunden → 2 Minuten
- **🤖 Empfohlenes Modell:** Midjourney v7

- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐⭐

> _"Stundenlanges Neugenerieren, nur weil der Hauptcharakter plötzlich ein völlig anderes Gesicht hat? Diese Frustration gehört ab heute der Vergangenheit an."_

Die größte Hürde beim KI-generierten Storytelling war bislang die fehlende visuelle Kontinuität. Wer ein Kinderbuch, einen Webtoon oder eine kohärente Werbekampagne gestaltet, weiß: Das Gesicht des Protagonisten muss zwingend konsistent bleiben. Mit der Einführung der `--cref` (Character Reference) Funktion in Midjourney haben sich die Spielregeln grundlegend geändert. Hier ist dein ultimativer Prompt-Guide, um ab sofort in jeder denkbaren Szene absolut identische Charaktere zu erschaffen.

---

## ⚡️ 3-Sätze-Zusammenfassung (TL;DR)

1. Nutze den Parameter `--cref [Bild-URL]`, um Gesichtszüge und Outfits deines Charakters festzusetzen.
2. Steuere über `--cw 0-100` (Character Weight), wie stark die Referenz gewichtet wird – vom reinen Fokus aufs Gesicht bis hin zum kompletten Look.
3. Kombiniere `--cref` mit `--sref` (Style Reference), um professionelle, stilistisch durchgängige Storyboards zu generieren.

---

## 🚀 Die Lösung: "Der Character-Lock Prompt"

### 🥉 Basic Version (Grundlagen)

Nutze diesen Prompt, wenn du deinen Charakter einfach in eine andere Umgebung setzen willst, ohne große Extras. Lade das Referenzbild deines Charakters hoch (z. B. auf Discord) und kopiere den Bildlink.

> Ein kinoreifes Porträt der Person auf einer belebten Cyberpunk-Straße bei Nacht, Neonlichter, 85mm Objektiv, hyperrealistisch --cref [Link zum Charakterbild] --cw 100 --ar 16:9

### 🥇 Pro Version (Für Storyteller & Designer)

Dieser Prompt ist ideal, wenn du komplexe Posen, starke Emotionen und eine spezifische Beleuchtung brauchst, ohne dass das Gesicht des Charakters verfälscht wird.

> **Rolle (Role):** Du bist ein preisgekrönter Storyboard-Artist und Kinematograf.
>
> **Kontext (Context):**
>
> - Hintergrund: Ich erstelle eine konsistente Graphic Novel.
> - Ziel: Der Hauptcharakter soll in einer dynamischen Action-Pose dargestellt werden, wobei seine spezifischen Gesichtszüge exakt erhalten bleiben.
>
> **Anweisung (Task):**
>
> 1. Erstelle ein Bild von: `[Dein Charakter in einer bestimmten Aktion, z.B. rennt vor einer Explosion davon]`.
> 2. Die Emotion auf dem Gesicht ist: `[Gewünschte Emotion, z.B. panisch, aber entschlossen]`.
> 3. Der Kamerawinkel ist: `[Winkel, z.B. Low-Angle, Dutch Angle]`.
> 4. Beleuchtung: `[Beleuchtungsstil, z.B. hartes Gegenlicht, volumetrischer Nebel]`.
>
> **Parameter (Parameters):**
>
> - Nutze `--cref [URL deines Originalbildes]`
> - Setze `--cw [0 für nur Gesicht, 100 für Gesicht und Kleidung]`
> - Nutze `--stylize 250 --v 7.0`
>
> **Achtung (Warning):**
>
> - Achte strikt darauf, dass die Lichtstimmung nicht die Hautfarbe oder grundlegende Anatomie des Charakters verändert.

---

## 💡 Anmerkung des Autors (Insight)

In der Praxis zeigt sich immer wieder: Midjourney reagiert oftmals „verwirrt“, wenn das hochgeladene Originalbild extrem stilisiert ist (z. B. im flachen 2D-Anime-Look) und der Text-Prompt plötzlich hyperrealistischen 8K-Fotorealismus verlangt.

**Der bewährte Workflow für Agenturen:** Generiere im ersten Schritt ein kristallklares, optimal ausgeleuchtetes **„Mugshot“-Porträt** (im klassischen Passbild-Stil) deines Charakters vor einem neutralen Hintergrund. Nutze exakt dieses Basisbild als deine permanente `--cref` URL. Soll dein Charakter später das Outfit wechseln – beispielsweise in einen futuristischen Raumanzug schlüpfen –, reduzierst du den Parameter `--cw` einfach auf einen niedrigen Wert wie `--cw 10` oder `--cw 20`. Dadurch extrahiert die KI **ausschließlich die Gesichtszüge** und gewährt dir bei der Wahl der Garderobe absolute kreative Freiheit.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **Q: Funktioniert `--cref` auch mit echten Fotos von mir selbst?**
  - A: Ja, aber mit Einschränkungen. Midjourney ist kein präzises Deepfake- oder Faceswap-Tool wie etwa Roop. Es erzielt zwar eine erstaunliche Ähnlichkeit – vergleichbar mit einem extrem guten Doppelgänger oder einem künstlerischen Porträt von dir –, liefert jedoch keine biometrische 1:1-Kopie. Die Funktion entfaltet ihr volles Potenzial am besten bei rein KI-generierten Basis-Charakteren.

- **Q: Lassen sich mehrere `--cref`-Links für verschiedene Charaktere in ein und demselben Bild verwenden?**
  - A: Derzeit bereitet es der KI noch enorme Schwierigkeiten zuzuordnen, welche Referenz zu welcher Person im Bild gehört (was häufig in bizarren Gesichtsverschmelzungen resultiert). **Der Profi-Workaround:** Generiere das Bild zunächst nur mit Charakter A. Nutze anschließend die **„Vary (Region)“**- bzw. Inpainting-Funktion in Midjourney, markiere gezielt den Bereich für Charakter B und füge erst in diesem Schritt den Prompt mit der zweiten `--cref`-URL ein.

---

## 🧬 Prompt-Analyse (Why it works?)

1. **Strikte Trennung von Identität und Aktion:** Dank `--cref` lagern wir die komplexe visuelle Beschreibung einer Person komplett aus. Der Text-Prompt muss folglich nicht länger mit unzähligen Adjektiven überladen werden. Die KI erhält so die Kapazität, sich zu 100 % auf die gewünschte Pose, das Environment und
