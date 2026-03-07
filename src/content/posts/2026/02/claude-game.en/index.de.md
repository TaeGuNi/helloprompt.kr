---
title: " \"Building a Golf Game with Claude Code: A New Era of AI Game Dev\""
description: "Entdecken Sie, wie ich mit Claude Code in Rekordzeit ein voll funktionsfähiges 2D-Golfspiel entwickelt habe. Ein Praxis-Tutorial für KI-Spieleentwicklung."
date: "2026-02-15"
tags: ["ai", "gamedev", "claude"]
---

## 📝 2D-Golfspiel mit Claude Code: Die neue Ära der KI-Spieleentwicklung

- **🎯 Empfohlen für:** Spieleentwicklungs-Anfänger, Frontend-Entwickler, KI-Coding-Enthusiasten
- **⏱️ Zeitaufwand:** Unter 1 Stunde → Mit Prompt auf 5 Minuten verkürzt
- **🤖 Empfohlenes Modell:** Claude 3.5 Sonnet (Claude Code), Cursor

- ⭐ **Schwierigkeitsgrad:** ⭐⭐☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzen:** ⭐⭐⭐⭐⭐

> _"Würden Sie glauben, dass Sie in nur einer einzigen Stunde ein komplettes, physikbasiertes Browser-Golfspiel von Grund auf neu erschaffen können?"_

Die Einstiegshürde in die Spieleentwicklung war noch nie so niedrig wie heute. Ohne tiefgreifendes Wissen über komplexe Vektormathematik oder umfangreiche Frameworks kann nun jeder dank KI-Agenten wie **Claude Code** seine Visionen in voll spielbare Meisterwerke verwandeln. In diesem Beitrag zeige ich Ihnen Schritt für Schritt, wie ich Claude Code als genialen Pair-Programming-Partner eingesetzt habe, um ein dynamisches 2D-Golfspiel basierend auf HTML5-Canvas von Grund auf zu entwickeln – die exakten Prompts liefere ich Ihnen direkt mit.

---

## ⚡️ Zusammenfassung in 3 Sätzen (TL;DR)

1. **KI-gesteuerte Architektur:** Die KI übernimmt die vollständige Modularisierung und entwirft die gesamte Game-Loop sowie die Dateistruktur auf Basis von HTML5-Canvas und JavaScript.
2. **Komplexe Physik-Engine leicht gemacht:** Kernmechaniken wie die Kraftregulierung per Drag-and-Drop, realistische Reibung (Abbremsen auf dem Rasen) und präzise Wandkollisionen werden mühelos implementiert.
3. **Rasantes Level-Design:** Ein einziger Befehl ("Erstelle 3 Level mit variierenden Hindernissen") genügt, um die Skalierbarkeit und den Wiederspielwert des Spiels sofort zu garantieren.

---

## 🚀 Die Lösung: "Claude Code 2D Game Generator"

### 🥉 Basic Version (Grundversion)

Nutzen Sie diesen Prompt, um blitzschnell ein Projektgerüst aufzubauen und die Kernmechanik zu evaluieren.

> **Rolle:** Du bist ein Senior Game Client Developer.
> **Aufgabe:** Erstelle ein browserbasiertes 2D-Golfspiel mit HTML5 Canvas. Es muss einen Ball, ein Loch (Hole) und eine "Drag-to-Shoot"-Mechanik (Maus ziehen und loslassen) enthalten.

### 🥇 Pro Version (Expertenversion)

Verwenden Sie diesen Prompt für ein seriennahes, hochgradig poliertes Spiel – von der ausgefeilten Physik-Engine über das dynamische Level-Design bis hin zur sauberen Modularisierung.

> **Rolle (Role):** Du bist ein Senior Web Game Developer mit über 10 Jahren Erfahrung und mein persönlicher KI-Coding-Partner.
>
> **Kontext (Context):**
>
> - Hintergrund: Ich möchte ein extrem performantes, leichtgewichtiges 2D-Minispiel ausschließlich mit HTML5 Canvas und Vanilla JavaScript entwickeln – ganz ohne schwerfällige Game-Engines oder externe Abhängigkeiten.
> - Ziel: Ein packendes 2D-Golfspiel, bei dem der Spieler durch intuitive Drag-and-Drop-Gesten die Flugbahn und Kraft des Balls bestimmt, um ein spektakuläres Hole-in-One zu erzielen.
>
> **Aufgabe (Task):**
>
> 1. Modularisiere das Projekt strikt in `index.html` (Canvas-Container), `game.js` (Game Loop & State Management) und `physics.js` (Vektormathematik & Physik).
> 2. Implementiere eine hochpräzise Basis-Physik-Engine, einschließlich `[Reibung (Graswiderstand)]` und `[Wandkollision (Bouncing)]` an den Rändern des Canvas.
> 3. Füge einen visuellen Indikator (Ziellinie/Guide) hinzu, der beim Ziehen der Maus die voraussichtliche Kraft und Richtung in Echtzeit anzeigt.
> 4. Erstelle ein `[Level-Konfigurations-Array]` mit 3 Levels, deren Schwierigkeitsgrad durch strategisch platzierte Hindernisse schrittweise ansteigt.
>
> **Einschränkungen (Constraints):**
>
> - Der Code muss sofort ausführbar und absolut vollständig sein (verwende keinerlei Platzhalter).
> - Kommentiere die Kernlogik (Geschwindigkeitsabnahme, Event-Listener etc.) detailliert auf Deutsch, um zukünftige Anpassungen und Wartungen zu erleichtern.
>
> **Warnung (Warning):**
>
> - Vermeide übermäßig komplexe, hyperrealistische physikalische Formeln. Priorisiere stattdessen ein dynamisches, intuitives Arcade-Gameplay, das sofort Spaß macht.

---

## 💡 Anmerkung des Autors (Insight)

Das Geheimnis erfolgreichen, KI-gestützten Programmierens liegt darin, die **KI nicht als simple Autovervollständigung abzustempeln, sondern sie als echten Senior-Partner für Architektur und Struktur einzusetzen.**
Anstatt zu versuchen, ein gigantisches, fehlerfreies Spiel in einem einzigen Durchlauf zu generieren, führt ein **schrittweiser (Step-by-Step) Aufbau** zielsicher zum Erfolg: Wir etablieren zuerst die Physik (Reibung, Kollision), integrieren dann das Eingabefeedback (Drag & Shoot) und widmen uns erst zum Schluss der Content-Erweiterung (Level-Design).

Besonders Claude Code glänzt durch seine bemerkenswerte Fähigkeit, den Kontext über lange Entwicklungs-Sessions hinweg fehlerfrei zu behalten und Code intelligent zu refaktorisieren. Wenn Sie während der Entwicklung einfach anweisen: "Lagere das Hindernis-Management in eine eigene, isolierte Klasse aus", liefert die KI umgehend eine wesentlich sauberere und zukunftssichere Codebasis.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Kann ich diesen Prompt auch nutzen, wenn ich absolut keine Ahnung von Vektormathematik oder Spieleentwicklung habe?**
  - A: Definitiv! Der Prompt übernimmt die gesamte konzeptionelle Architektur und die komplexen mathematischen Berechnungen für Sie. Sie müssen den generierten Code lediglich entsprechend der vorgegebenen Struktur kopieren, einfügen und können das Spiel direkt in Ihrem Browser starten.

- **F: Muss ich den Code manuell umschreiben, um neue Hindernisse oder Level hinzuzufügen?**
  - A: Nein, Sie müssen den Quellcode nicht selbst analysieren. Weisen Sie Claude einfach in natürlicher Sprache an: "Füge Level 4 hinzu, mit einer rotierenden Windmühle exakt in der Mitte." Die KI versteht die bestehende Array-Struktur blind und generiert sofort den passenden, fehlerfreien Code.

- **F: Funktioniert dieser Workflow auch mit ChatGPT anstelle von Claude Code?**
  - A: Ja, moderne Modelle wie GPT-4o liefern ebenfalls hervorragende Ergebnisse. Da die Web-Oberfläche von ChatGPT jedoch keine lokalen Dateien automatisch erstellen und überschreiben kann (wie es bei Cursor oder Claude Code im Terminal der Fall ist), müssen Sie den ausgegebenen Code manuell in die entsprechenden Dateien wie `game.js` und `physics.js` aufteilen.

---

## 🧬 Anatomie des Prompts (Why it works?)

1. **Erzwungene Modularität (Modularity):** Die explizite Anweisung zur Dateitrennung verhindert von vornherein unleserlichen Spaghetti-Code und schafft ein sauberes, professionelles Architektur-Gerüst für mühelose Wartung und Skalierung.
2. **Klare visuelle Rückmeldung (Visual Indicator):** Die präzise Spezifikation einer "visuellen Hilfslinie für Kraft und Richtung" katapultiert die User Experience (UX) und die Spielbarkeit auf ein völlig neues Level, anstatt den Spieler mit unsichtbaren Mechaniken im Dunkeln tappen zu lassen.
3. **Fokus auf Skalierbarkeit (Level Design):** Durch die smarte Anforderung eines datengesteuerten "Level-Arrays" anstelle starr codierter Einzel-Level wird das robuste Fundament gelegt, auf dem Entwickler später mühelos und unendlich viele neue Level aufbauen können.

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Einfache Eingabe: "Mach ein Golfspiel")

```text
Der Ball verschwindet dauerhaft aus dem Canvas, sobald er eine Wand berührt. Die Klick-Events überschneiden sich fehlerhaft, wodurch der Ball unendlich beschleunigt. Es gibt keinerlei Bodenreibung, sodass der Ball ewig weiterrollt und niemals zum Stillstand kommt.
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

_Ergebnis: Claude Code hat das komplexe mathematische Konzept der Dämpfung (Damping) präzise angewendet, um die physikalische Reibung des Rasens perfekt zu simulieren._

---

## 🎯 Fazit

Ein 2D-Golfspiel, dessen Entwicklung früher tagelanges, frustrierendes Studium von Event-Listenern und Vektormathematik erfordert hätte, wurde in nur einer einzigen Stunde zum Leben erweckt. Der von der KI generierte Code ist makellos modularisiert und bietet eine Architektur, die sofort in einem professionellen, produktiven Umfeld genutzt werden kann.

Da die KI die größten Hürden – komplexe Mathematik und ermüdenden Boilerplate-Code – brillant abstrahiert, können sich Entwickler nun voll und ganz auf das Wesentliche konzentrieren: den reinen Spielspaß, kreative Features und packendes Level-Design.

Nutzen Sie diesen Code als solides Fundament, um Windwiderstand hinzuzufügen oder geschmeidige Touch-Events für Mobilgeräte zu integrieren. Wenn Sie eine großartige Idee haben, öffnen Sie Ihren Editor und erschaffen Sie noch heute Ihr erstes eigenes Spiel Schulter an Schulter mit Ihrem KI-Partner. Es ist Zeit, mit Freude und Leichtigkeit zu programmieren! ⛳️
