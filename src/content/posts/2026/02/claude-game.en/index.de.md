---
title: "Building a Golf Game with Claude Code: A New Era of AI Game Dev"
description: "Entdecken Sie, wie ich mit Claude Code in Rekordzeit ein voll funktionsfähiges Golfspiel entwickelt habe. Ein Schritt-für-Schritt-Tutorial zur Nutzung von KI in der Spieleentwicklung."
date: "2026-02-15"
tags: ["ai", "gamedev", "claude"]
---

# 📝 2D-Golfspiel mit Claude Code: Die neue Ära der KI-Spieleentwicklung

- **🎯 Empfohlen für:** Spieleentwicklungs-Anfänger, Frontend-Entwickler, KI-Coding-Enthusiasten
- **⏱️ Zeitaufwand:** Unter 1 Stunde → Mit Prompt auf 5 Minuten verkürzt
- **🤖 Empfohlenes Modell:** Claude 3.5 Sonnet (Claude Code), Cursor

- ⭐ **Schwierigkeitsgrad:** ⭐⭐☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzen:** ⭐⭐⭐⭐⭐

> _"Würden Sie glauben, dass Sie in nur einer Stunde ein komplettes, physikbasiertes Browser-Golfspiel von Grund auf neu erstellen können?"_

Die Einstiegshürde in die Spieleentwicklung war noch nie so niedrig. Ohne komplexe Vektormathematik oder umfangreiche Framework-Kenntnisse kann heute jeder mit einem KI-Agenten wie **Claude Code** seine Ideen in ein voll spielbares Meisterwerk verwandeln. In diesem Beitrag zeige ich Ihnen Schritt für Schritt, wie ich Claude Code als Pair-Programming-Partner genutzt habe, um ein 2D-Golfspiel basierend auf HTML5-Canvas zu entwickeln – inklusive der genauen Prompts.

---

## ⚡️ Zusammenfassung in 3 Sätzen (TL;DR)

1. **KI-gesteuerte Architektur:** Die KI modularisiert und entwirft die gesamte Spielschleife und Dateistruktur mit HTML5 Canvas und JavaScript.
2. **Komplexe Physik-Engine leicht gemacht:** Kernmechaniken wie Kraftregulierung durch Mausziehen, Reibung (Geschwindigkeitsabnahme auf Gras) und Wandkollisionen werden mühelos implementiert.
3. **Rasantes Level-Design:** Mit einem einzigen Befehl ("Erstelle 3 Level mit Hindernissen") wird die Skalierbarkeit des Spiels sofort sichergestellt.

---

## 🚀 Die Lösung: "Claude Code 2D Game Generator"

### 🥉 Basic Version (Grundversion)

Nutzen Sie diesen Prompt, um schnell ein Projektgerüst aufzubauen und die Kernmechanik zu testen.

> **Rolle:** Du bist ein Senior Game Client Developer.
> **Aufgabe:** Erstelle ein browserbasiertes 2D-Golfspiel mit HTML5 Canvas. Es muss einen Ball, ein Loch (Hole) und eine "Drag-to-Shoot"-Mechanik (Maus ziehen und loslassen) enthalten.

<br>

### 🥇 Pro Version (Expertenversion)

Verwenden Sie diesen Prompt für ein seriennahes Spiel – von der Physik-Engine über das Level-Design bis hin zur Modularisierung.

> **Rolle (Role):** Du bist ein Senior Web Game Developer mit über 10 Jahren Erfahrung und mein KI-Coding-Partner.
>
> **Kontext (Context):**
>
> - Hintergrund: Ich möchte ein leichtes, schnelles 2D-Minispiel ausschließlich mit HTML5 Canvas und Vanilla JavaScript entwickeln, ganz ohne schwere Game-Engines oder externe Bibliotheken.
> - Ziel: Ein 2D-Golfspiel, bei dem der Spieler durch Drag-and-Drop die Flugbahn und Kraft des Balls bestimmt, um ein Hole-in-One zu erzielen.
>
> **Aufgabe (Task):**
>
> 1. Modularisiere das Projekt strikt in `index.html` (Canvas-Container), `game.js` (Game Loop & State Management) und `physics.js` (Vektormathematik & Physik).
> 2. Implementiere eine präzise Basis-Physik-Engine, einschließlich `[Reibung (Graswiderstand)]` und `[Wandkollision (Bouncing)]` an den Rändern des Canvas.
> 3. Füge einen visuellen Indikator (Ziellinie/Guide) hinzu, der beim Ziehen der Maus die voraussichtliche Kraft und Richtung anzeigt.
> 4. Erstelle ein `[Level-Konfigurations-Array]` mit 3 Levels, deren Schwierigkeitsgrad durch neu hinzukommende Hindernisse schrittweise ansteigt.
>
> **Einschränkungen (Constraints):**
>
> - Der Code muss sofort ausführbar und absolut vollständig sein (keine Platzhalter).
> - Kommentiere die Kernlogik (Geschwindigkeitsabnahme, Event-Listener etc.) detailliert auf Deutsch, um zukünftige Anpassungen zu erleichtern.
>
> **Warnung (Warning):**
>
> - Vermeide übermäßig komplexe, realistische physikalische Formeln. Priorisiere stattdessen ein dynamisches, intuitives Arcade-Gameplay.

---

## 💡 Anmerkung des Autors (Insight)

Das Geheimnis erfolgreichen KI-gestützten Programmierens liegt darin, die **KI nicht als bloße Autovervollständigung zu betrachten, sondern als Senior-Partner für Architektur und Struktur.**
Anstatt zu versuchen, ein riesiges, perfektes Spiel auf einmal zu generieren, führt ein **schrittweiser (Step-by-Step) Aufbau** zum Ziel: erst die Physik (Reibung, Kollision), dann das Eingabefeedback (Drag & Shoot) und schließlich die Content-Erweiterung (Level-Design).

Besonders Claude Code glänzt darin, den Kontext über lange Sessions hinweg zu behalten und Code zu refaktorisieren. Wenn Sie während der Entwicklung sagen: "Lagere das Hindernis-Management in eine eigene Klasse aus", erhalten Sie eine wesentlich sauberere, wartbarere Codebasis.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Kann ich diesen Prompt auch nutzen, wenn ich keine Ahnung von Vektormathematik oder Spieleentwicklung habe?**
  - A: Absolut! Der Prompt übernimmt die gesamte Architektur und die komplexen Berechnungen. Sie müssen den Code nur entsprechend der vorgegebenen Struktur kopieren, einfügen und können das Spiel direkt in Ihrem Browser starten.

- **F: Muss ich den Code manuell ändern, um neue Hindernisse oder Level hinzuzufügen?**
  - A: Nein, Sie müssen den Code nicht selbst analysieren. Sagen Sie Claude einfach in natürlicher Sprache: "Füge Level 4 hinzu, mit einer rotierenden Windmühle in der Mitte." Die KI versteht die bestehende Array-Struktur und generiert sofort den passenden Code.

- **F: Funktioniert das auch mit ChatGPT anstelle von Claude Code?**
  - A: Ja, moderne Modelle wie GPT-4o liefern ebenfalls hervorragende Ergebnisse. Da die Web-Oberfläche jedoch keine Dateien automatisch erstellen und überschreiben kann (wie es bei Cursor oder Claude Code im Terminal der Fall ist), müssen Sie den ausgegebenen Code manuell in Dateien wie `game.js` und `physics.js` aufteilen.

---

## 🧬 Anatomie des Prompts (Why it works?)

1. **Erzwungene Modularität (Modularity):** Die direkte Anweisung zur Dateitrennung verhindert Spaghetti-Code und schafft ein sauberes Architektur-Gerüst für einfache Wartung und Skalierung.
2. **Klare visuelle Rückmeldung (Visual Indicator):** Die Spezifikation einer "Linie für Kraft und Richtung" verbessert das User Experience (UX) und die Spielbarkeit enorm, statt nur unsichtbare Mechaniken zu programmieren.
3. **Fokus auf Skalierbarkeit (Level Design):** Durch die Anforderung eines datengesteuerten "Level-Arrays" anstelle eines fest codierten Levels wird das Fundament gelegt, auf dem Entwickler später unendlich viele neue Level aufbauen können.

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Einfache Eingabe: "Mach ein Golfspiel")

```text
Der Ball verschwindet dauerhaft aus dem Canvas, wenn er eine Wand berührt. Die Klick-Events überschneiden sich, wodurch der Ball unendlich beschleunigt. Es gibt keine Bodenreibung, sodass der Ball ewig weiterrollt und niemals stoppt.
```

### ✅ Nachher (Physik-Logik mit der Pro-Version generiert)

```javascript
// Generiert von Claude Code
update() {
  this.velocity.x *= 0.98; // Reibung: Simuliert den Widerstand des Grases zur sanften Abbremsung
  this.velocity.y *= 0.98;

  this.x += this.velocity.x;
  this.y += this.velocity.y;

  // Wandkollision im Canvas (Natürliches Abprallen)
  if (this.x < 0 || this.x > canvas.width) {
    this.velocity.x *= -1; // Richtung umkehren
  }
  if (this.y < 0 || this.y > canvas.height) {
    this.velocity.y *= -1;
  }
}
```

_Ergebnis: Claude Code hat das mathematische Konzept der Dämpfung (Damping) präzise angewendet, um die Reibung des Rasens perfekt zu simulieren._

---

## 🎯 Fazit

Ein 2D-Golfspiel, das früher tagelanges Studium von Event-Listenern und Vektormathematik erfordert hätte, wurde in nur einer Stunde entwickelt. Der von der KI generierte Code ist sauber modularisiert und bietet eine Architektur, die sofort in einem produktiven Umfeld genutzt werden kann.

Da die KI die größten Hürden – Mathematik und Boilerplate-Code – brillant abstrahiert, können sich Entwickler nun voll und ganz auf das Wesentliche konzentrieren: Spielspaß, Kreativität und packendes Level-Design.

Nutzen Sie diesen Code als Basis, um Windwiderstand hinzuzufügen oder Touch-Events für Mobilgeräte zu integrieren. Wenn Sie eine Idee haben, öffnen Sie Ihren Editor und erschaffen Sie noch heute Ihr erstes Spiel zusammen mit Ihrem KI-Partner. Es ist Zeit, mit Freude zu programmieren! ⛳️
