---
layout: /src/layouts/Layout.astro
title: "WCAG 2.2 웹 접근성 감사(Audit) 봇"
author: "Zzabbis"
date: "2026-02-09"
updatedDate: "2026-02-09"
category: "프론트엔드"
description: "Ist Ihr Code für alle zugänglich? Dieser Bot prüft Ihre UI-Komponenten auf strikte Einhaltung der WCAG-Richtlinien zur Barrierefreiheit."
tags: ["Accessibility", "HTML", "WCAG"]
---

# ♿️ Ist mein Code für alle zugänglich? Automatischer WCAG-Barrierefreiheits-Audit-Bot

- **🎯 Zielgruppe:** Entwickler in öffentlichen/Enterprise-Projekten, Jobsuchende zur Aufwertung des Portfolios, Senior Frontend-Entwickler
- **⏱️ Zeitaufwand:** 2 Stunden manuelle Checklisten-Prüfung → 1 Minute KI-Audit
- **🤖 Empfohlene Modelle:** Claude 3.5 Sonnet (überragend bei der Code-Analyse), GPT-4o

- ⭐ **Schwierigkeitsgrad:** ⭐☆☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐☆

> _"Sie haben brillante Animationen implementiert, aber wenn jemand nicht einmal den Login-Button drücken kann, hat Ihr Code versagt."_

Barrierefreiheit im Web (Web Accessibility) ist keine bloße "Rücksichtnahme" mehr, sondern ein grundlegender Standard und zunehmend eine gesetzliche Verpflichtung. Es ist jedoch fast unmöglich, die umfangreichen und komplexen WCAG 2.2 (Web Content Accessibility Guidelines) auswendig zu lernen und bei jedem Coden im Kopf zu behalten. Dieser Prompt scannt Ihr Markup und Ihre Komponenten, identifiziert kritische Barrierefreiheitsmängel für Screenreader und Tastaturnavigation in nur einer Minute und refaktorisiert sie in perfekten semantischen Code.

---

## ⚡️ 3-Punkte-Zusammenfassung (TL;DR)

1. **Konvertierung in semantisches Markup:** Verwandelt wahlloses `<div>`-Chaos automatisch in bedeutungsvolle HTML5-Tags.
2. **Strikte WCAG 2.2 Compliance:** Überprüft akribisch strenge Kriterien wie Farbkontrast, Fokus-Management und WAI-ARIA-Missbrauch.
3. **Praxisnaher Test-Leitfaden:** Bietet konkrete Test-Szenarien, die Sie direkt mit Screenreadern (VoiceOver, NVDA) und der Tastatur (Tab) überprüfen können.

---

## 🚀 Die Lösung: "A11y (Accessibility) Auditor"

### 🥉 Basic Version

Verwenden Sie dies für eine schnelle Überprüfung, wenn Sie an der Barrierefreiheit eines bestimmten Buttons oder Formularelements zweifeln.

> **Rolle:** Du bist ein Experte für Web-Barrierefreiheit (A11y).
> **Aufgabe:** Überprüfe den folgenden HTML-Code auf mögliche Barrierefreiheitsprobleme bei der Nutzung von Screenreadern oder Tastaturnavigation und korrigiere ihn semantisch.
> **Code:**
>
> ```html
> [Fügen Sie hier Ihren Code ein]
> ```

<br>

### 🥇 Pro Version

Nutzen Sie dies für die Prüfung komplexer UI-Komponenten wie Modals, Dropdowns und Tab-Interaktionen.

> **Rolle (Role):** Du bist ein strenger WCAG 2.2-Zertifizierungsprüfer und ein Senior Frontend-Entwickler mit 10 Jahren Erfahrung.
>
> **Kontext (Context):**
>
> - Zielobjekt: Ich habe gerade die Komponente `[Name der Komponente, z.B. Registrierungs-Modal]` entwickelt.
> - Ziel: Tastaturnutzer, die keine Maus verwenden können, sowie blinde oder sehbehinderte Nutzer (Screenreader-Nutzer) müssen diese UI ohne jegliche Barrieren bedienen können.
>
> **Aufgabe (Task):**
>
> 1. **WCAG 2.2 Diagnose:** Durchsuche den bereitgestellten Code nach Verstößen gegen den WCAG 2.2-Standard (Level AA oder höher), einschließlich Farbkontrast, Fokusverschiebung, Formularbeschriftungen, Alternativtexten etc.
> 2. **Semantisches Refactoring:** Entferne die übermäßige und bedeutungslose Verwendung von `<div>` oder `<span>` und schreibe den Code unter Verwendung von semantischen HTML5-Tags neu.
> 3. **WAI-ARIA Optimierung:** Halte dich an die "First Rule of ARIA" (Die beste ARIA ist, keine ARIA zu verwenden). Verwende `aria-*`-Attribute und `role` nur dann, wenn es absolut notwendig ist und nicht durch Standard-HTML gelöst werden kann.
> 4. **Focus Trap:** Falls es sich um ein Modal oder Popup handelt, entwerfe einen logischen Ablauf, der sicherstellt, dass der Tastaturfokus das Element nicht verlässt (Focus Trap).
> 5. **Test-Leitfaden:** Erstelle in drei Sätzen ein konkretes Szenario, wie ich diesen Code manuell mit der Tastatur (Tab/Shift+Tab, Space/Enter) und einem Screenreader testen kann.
>
> **Code (Code):**
>
> ```[Sprache, z.B. tsx]
> [Fügen Sie hier den Komponenten-Code ein]
> ```
>
> **Einschränkungen (Constraints):**
>
> - Stelle unbedingt sicher, dass Elemente berücksichtigt werden, die visuell verborgen, aber für Screenreader lesbar sein müssen (z.B. durch `sr-only`-Klassen).

---

## 💡 Kommentar des Autors (Insight)

Die Verbesserung der Web-Barrierefreiheit führt oft dazu, dass Code fälschlicherweise mit WAI-ARIA-Attributen überladen wird. Eine falsche Zuweisung von `aria-label` oder `role` stiftet bei Screenreader-Nutzern jedoch erhebliche Verwirrung.
Der Kern dieses Prompts besteht darin, die KI strikt an die **"First Rule of ARIA" (Priorisierung von Standard-HTML-Tags)** zu binden.
Wenn Sie diesen Prompt in der Praxis bei der Erstellung komplexer Custom-Select-Boxen oder Modals anwenden, erkennt er brillant unvorhergesehene Probleme wie den Verlust des Tastaturfokus oder fehlende Formular-Labels. Besonders in Kombination mit Claude 3.5 Sonnet liefert er eine überwältigende Qualität – als säße ein penibler Barrierefreiheits-Experte direkt neben Ihnen beim Code-Review.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Ist ein Barrierefreiheits-Audit auch anhand eines UI-Design-Bildes möglich?**
  - A: Ja, absolut. Hängen Sie einen Screenshot der Komponente in GPT-4o oder Claude 3.5 Sonnet an und fügen Sie die Bitte hinzu: "Überprüfe, ob der Farbkontrast (Color Contrast) dem WCAG AA-Standard entspricht." Die KI wird selbst versteckte Designmängel aufdecken.

- **F: Ich verwende Tailwind CSS. Werden die Klassennamen ebenfalls angepasst?**
  - A: Wenn Sie im Kontext (Context) des Prompts angeben: "Verwende Tailwind CSS, um Screenreader-spezifische Utility-Klassen (`sr-only`) anzuwenden", wird die KI den Code perfekt auf Ihren Tech-Stack zuschneiden.

---

## 🧬 Anatomie des Prompts (Why it works?)

1. **Klare Bewertungskriterien:** Anstatt lediglich zu fordern "Mache es barrierefrei", zwingen wir der KI-Persona den internationalen Standard "WCAG 2.2 Level AA" auf, wodurch KI-Halluzinationen massiv reduziert werden.
2. **Erzwingen der First Rule of ARIA:** Dies verhindert, dass die KI wahllos ARIA-Attribute verwendet, und fördert ein grundlegendes semantisches Markup, das die HTML-Standards optimal ausnutzt.
3. **Umsetzbarer (Actionable) Test-Leitfaden:** Die KI liefert nicht nur den korrigierten Code, sondern auch Test-Szenarien, die der Entwickler sofort mit der Tastatur nachvollziehen und validieren kann, was den praktischen Nutzen enorm steigert.

---

## 📊 Beweis: Vorher & Nachher (Before & After)

### ❌ Vorher (Eingabe: Der schlimmste, aus einem `div` gebastelte Button)

```html
<div class="submit-btn" onclick="sendData()">
  <img src="send-icon.png" />
  <span>Senden</span>
</div>
```

### ✅ Nachher (Ergebnis: Perfekte Unterstützung für Tastaturfokus & Screenreader)

```html
<!-- Bedeutungslosen dekorativen Bildern wird ein leeres alt-Attribut oder aria-hidden zugewiesen, damit Screenreader sie ignorieren -->
<!-- Verwendung des button-Tags, das von Haus aus nicht nur onClick, sondern auch die Enter/Space-Tasten unterstützt -->
<button type="button" class="submit-btn" onClick="sendData()">
  <img src="send-icon.png" alt="" aria-hidden="true" />
  <span>Senden</span>
</button>
```

---

## 🎯 Fazit

Barrierefreiheit (A11y) mag für einige "nur ein nettes Feature" sein, aber für andere ist es eine gewaltige Hürde, die darüber entscheidet, ob sie einen Dienst überhaupt nutzen können oder nicht. Ein großartiger Entwickler schreibt nicht nur Code, der funktioniert, sondern Code, der keinen einzigen Nutzer ausschließt.

Schreiben Sie ab heute Code, der zu jedem freundlich ist, und genießen Sie Ihren wohlverdienten Feierabend! 🍷
