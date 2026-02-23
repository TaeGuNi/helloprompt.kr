---
title: "Midjourney Character Consistency (German)"
description: "Wie Charakter-Referenzen das visuelle Storytelling in Midjourney verändern"
date: "2026-02-15"
image: "https://picsum.photos/seed/midjourney/800/600"
tags: ["AI", "Tech", "midjourney-v7-consistency"]
---

# 📝 Midjourney v7: Meistere die Charakter-Konsistenz (Character Reference)

- **🎯 Empfohlen für:** Art Directors, Webtoon-Zeichner, Marketer, Designer
- **⏱️ Zeitersparnis:** 2 Stunden → 2 Minuten
- **🤖 Empfohlenes Modell:** Midjourney v7

- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐⭐

> _"Stundenlanges Neugenerieren, nur weil der Hauptcharakter plötzlich ein anderes Gesicht hat? Das hat ab heute ein Ende."_

Die größte Herausforderung beim KI-generierten Storytelling war bisher die fehlende Kontinuität. Wenn man ein Kinderbuch, einen Comic oder eine konsistente Werbekampagne erstellt, muss das Gesicht des Protagonisten immer gleich bleiben. Mit der `--cref` (Character Reference) Funktion in Midjourney hat sich das Spiel komplett gedreht. Hier ist der ultimative Prompt-Guide, um unerschütterlich konsistente Charaktere in jeder denkbaren Szene zu erschaffen.

---

## ⚡️ 3-Sätze-Zusammenfassung (TL;DR)

1. Verwende den Parameter `--cref [Bild-URL]`, um das Gesicht und die Kleidung eines Charakters festzusetzen.
2. Steuere mit dem Parameter `--cw 0-100` (Character Weight), wie stark die Referenz übernommen wird (nur das Gesicht vs. das komplette Outfit).
3. Kombiniere es mit `--sref` (Style Reference), um professionelle Storyboards aus einem Guss zu produzieren.

---

## 🚀 Die Lösung: "Der Character-Lock Prompt"

### 🥉 Basic Version (Grundlagen)

Nutze diesen Prompt, wenn du deinen Charakter einfach in eine andere Umgebung setzen willst, ohne große Extras. Lade das Referenzbild deines Charakters hoch (z.B. auf Discord) und kopiere den Bildlink.

> Ein kinoreifes Porträt der Person auf einer belebten Cyberpunk-Straße bei Nacht, Neonlichter, 85mm Objektiv, hyperrealistisch --cref [Link zum Charakterbild] --cw 100 --ar 16:9

<br>

### 🥇 Pro Version (Für Storyteller & Designer)

Wenn du komplexe Posen, starke Emotionen und eine spezifische Beleuchtung brauchst, ohne dass das Gesicht des Charakters verfälscht wird.

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

In der Praxis habe ich festgestellt, dass Midjourney manchmal "verwirrt" ist, wenn das Originalbild extrem stark stilisiert ist (z.B. flacher 2D-Anime) und der Text-Prompt plötzlich 8K-Fotorealismus fordert.

**Der beste Workflow für Agenturen:** Erstelle zuerst ein klares, gut beleuchtetes "Mugshot"-Porträt (Passbild-Stil) deines Charakters auf einem neutralen Hintergrund. Nutze dieses Basis-Bild als deine permanente `--cref` URL. Wenn du möchtest, dass dein Charakter seine Kleidung wechselt (z.B. plötzlich einen Raumanzug trägt), setze den Parameter `--cw` auf einen niedrigen Wert wie `--cw 10` oder `--cw 20`. So übernimmt die KI nur die Gesichtszüge, lässt dir aber bei der Kleidung völlig freie Hand.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **Q: Funktioniert `--cref` auch mit echten Fotos von mir selbst?**
  - A: Ja, bedingt. Midjourney ist kein exaktes Deepfake- oder Faceswap-Tool wie Roope. Es wird eine sehr starke Ähnlichkeit erzeugen (wie ein guter Doppelgänger oder du selbst als Gemälde), aber keine fotorealistische 1:1 Kopie für einen Reisepass. Am besten funktioniert es bei KI-generierten Basis-Charakteren.

- **Q: Kann ich mehrere `--cref` für verschiedene Charaktere im selben Bild nutzen?**
  - A: Aktuell ist es extrem schwer, der KI zu sagen, welche Referenz zu welcher Person im Bild gehört (sie vermischt dann oft die Gesichter). **Der Profi-Workaround:** Generiere das Bild zuerst mit Charakter A. Nutze dann die "Vary (Region)" / Inpainting Funktion in Midjourney, markiere den Bereich für Charakter B und gib dort den Prompt mit der zweiten `--cref` URL ein.

---

## 🧬 Prompt-Analyse (Why it works?)

1.  **Trennung von Identität und Aktion:** Durch `--cref` lagern wir die visuelle Beschreibung der Person komplett aus. Dadurch muss der Text-Prompt nicht mehr mit Adjektiven überladen werden, und die KI kann sich zu 100% auf die Pose, die Umgebung und die Kameraführung konzentrieren.
2.  **Präzise Kontrolle durch `--cw`:** Die Skalierung des _Character Weights_ ermöglicht unglaubliche Flexibilität beim Storytelling. Charaktere können älter werden, Outfits wechseln oder in andere Kunststile transformiert werden, ohne dass der Zuschauer den Wiedererkennungswert verliert.

---

## 📊 Beweis: Before & After

### ❌ Before (Ohne Character Reference)

```text
Prompt: "Eine junge Frau mit roten Haaren und Sommersprossen trinkt Kaffee in Paris."
Ergebnis: Wenn du diesen Prompt dreimal ausführst, erhältst du drei komplett unterschiedliche Frauen. Es ist unmöglich, daraus eine zusammenhängende Bildergeschichte zu machen.
```

### ✅ After (Mit Character Reference)

```text
Prompt: "Eine junge Frau trinkt Kaffee im Pariser Café --cref [URL_ihres_Basisporträts] --cw 100"
Ergebnis: Exakt dieselbe Frau aus dem Referenzbild sitzt nun im Café. Sie trägt dasselbe Outfit und hat absolut identische Gesichtszüge. Der Charakter ist "gelockt".
```

---

## 🎯 Fazit

Charakter-Konsistenz galt lange als der Heilige Gral der generativen KI-Kunst. Mit den richtigen Parametern in Midjourney v7 ist dieser Gral nun für jeden Kreativen erreichbar. Deine Mockups, Storyboards und Social-Media-Kampagnen werden nie wieder unzusammenhängend oder unprofessionell wirken.

Jetzt erschaffe dein eigenes visuelles Universum. Und ab in den verdienten Feierabend! 🍷
