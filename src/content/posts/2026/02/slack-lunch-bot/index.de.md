---
layout: /src/layouts/Layout.astro
title: " \"Slack 봇 만들기: '점심 뭐 먹지?' 추천해주는 사내 봇\""
author: "Jay"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "업무 자동화"
description: "Erfahre, wie du den Slack Workflow Builder und KI ohne Programmierkenntnisse verknüpfst, um einen intelligenten Assistenten für die tägliche Mittagsempfehlung deines Teams zu erstellen."
tags: ["Slack", "슬랙", "챗봇", "자동화", "사내문화"]
---

# 🤖 Einen Slack-Bot erstellen: Dein interner Assistent für die Frage „Was essen wir heute zu Mittag?“

- **🎯 Zielgruppe:** Junior-Mitarbeiter, die täglich an der Qual der Wahl verzweifeln, und HR-Teams, die frischen Wind in den oft trockenen Firmen-Messenger bringen möchten.
- **⏱️ Zeitaufwand:** 10 Minuten (mit dem Slack Workflow Builder)
- **🤖 Empfohlenes Modell:** ChatGPT-4o (Ideal für kreative Menüvorschläge und starkes Kontextverständnis)

- ⭐ **Schwierigkeitsgrad:** ⭐⭐☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐⭐

> _„Was essen wir heute? Irgendwas. Pasta? Puh, schon wieder Nudeln...“ Mach Schluss mit dem täglichen Rätselraten in der Mittagspause! Überlass diese lästige Pflicht einfach einem KI-Assistenten und heb dir deine Energie für den wohlverdienten pünktlichen Feierabend auf._

Das wohl größte Dilemma im Büroalltag: die ewige Frage nach dem Mittagessen. Anstatt ratlos in die Runde zu schauen, frag doch beim nächsten Mal einfach euren internen Messenger-Bot! Tippe zum Beispiel: „Was essen wir heute bei diesem Schmuddelwetter?“ und erhalte prompt eine clevere Antwort wie: „Wie wäre es heute statt dem üblichen Schnitzel mit einer heißen, deftigen Pho-Suppe?“. In diesem Beitrag zeige ich dir, wie du mithilfe des Slack Workflow Builders – und völlig ohne Programmierkenntnisse – genau so einen Bot erstellst.

---

## ⚡️ Zusammenfassung in 3 Sätzen (TL;DR)

1. Baue dir mit dem **Slack Workflow Builder** völlig ohne Code einen eigenen Automatisierungs-Bot.
2. Definiere gezielte Schlüsselwörter (z. B. „Mittagessen Empfehlung“) oder Emoji-Reaktionen als Trigger, um den Bot aufzurufen.
3. Integriere einen KI-Connector (wie ChatGPT), der basierend auf Parametern wie Wetter oder Teamstimmung maßgeschneiderte Menüvorschläge generiert.

---

## 🚀 Die Lösung: Der "Lunch Buddy" Prompt

### 🥉 Basic Version (Standard)

Nutze diesen simplen Prompt, wenn du sofort eine zufällige, aber treffsichere Empfehlung brauchst, um die Entscheidungsfindung abzukürzen.

> **Rolle (Role):** Du bist ein sympathischer Assistent, der das perfekte Mittagessen für unser Büro-Team auswählt.
>
> **Aufgabe (Task):** Wähle per Zufall eine kulinarische Kategorie aus (z. B. Italienisch, Asiatisch, Gutbürgerlich, Fast Food oder Gesund). Empfiehl anschließend exakt 3 typische, allseits beliebte Gerichte aus dieser Kategorie, die sich optimal als unkompliziertes Mittagessen für Berufstätige eignen.

### 🥇 Pro Version (Experte)

Greife zu dieser Version, um durch die Einbindung von Variablen wie Wetter, Teamstimmung und Gruppengröße besonders smarte und situativ passgenaue Vorschläge zu generieren.

> **Rolle (Role):** Du bist ein anspruchsvoller Feinschmecker und das ultimative kulinarische Navigationssystem für die besten Food-Spots rund um unser Büro (`[Standort des Büros, z. B. Berlin-Mitte]`).
>
> **Kontext (Context):**
>
> - Wetter: `[Aktuelles Wetter, z. B. regnerisch, sonnig, kalt]`
> - Stimmung & Situation: `[Team-Atmosphäre, z. B. gestresst, Zahltag, auf Diät]`
> - Teilnehmerzahl: `[Gruppenzusammensetzung, z. B. esse alleine, ganzes Team, Treffen mit Kollegen]`
>
> **Aufgabe (Task):**
>
> 1. Empfiehl exakt 1 Gericht, das absolut perfekt zur oben beschriebenen Situation passt.
> 2. Liefere eine charmante, gut nachvollziehbare Begründung (1–2 Sätze), warum genau dieses Gericht für uns Büroangestellte jetzt die beste Wahl ist.
> 3. Formatiere deine Antwort als ansprechende, übersichtliche Markdown-Liste und nutze passende Emojis.
>
> **Einschränkungen (Constraints):**
>
> - Vermeide stark polarisierende Gerichte (z. B. extrem scharf, übermäßig viel Knoblauch) oder Speisen, die so schwer im Magen liegen, dass sie uns ins Nachmittagstief stürzen.
>
> **Warnung (Warning):**
>
> - Erfinde unter keinen Umständen fiktive Restaurantnamen. Fokussiere dich ausschließlich auf die Art des Gerichts. (Verhindere Halluzinationen)

---

## 💡 Kommentar des Autors (Insight)

Ein Slack-Bot ist weit mehr als nur eine technische Spielerei – er ist ein unterschätztes Instrument zur aktiven Gestaltung der **Unternehmenskultur**. In Messenger-Kanälen, die oft von trockenen Arbeitsanweisungen dominiert werden, fungiert er als sozialer Schmierstoff: Er entlockt dem Team ein Lächeln und liefert frischen Gesprächsstoff. Wird der Lunch-Bot gut angenommen, öffnet das die Tür für weitere smarte Integrationen wie einen „Kudos-Bot“ für Lob, einen „Geburtstags-Bot“ oder automatisierte Wochenrückblicke. So trägst du nachhaltig zu einem positiven, lockeren Arbeitsklima bei. Sein volles Potenzial entfaltet dieser Prompt übrigens, wenn du ihn mit Automatisierungstools wie Zapier oder Make.com koppelst. So durchbrichst du die Limitierungen des nativen Slack Workflow Builders und erschaffst einen wahrhaft intelligenten KI-Assistenten.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Unser Unternehmen nutzt die kostenlose Slack-Version. Kann ich den Workflow Builder trotzdem einsetzen?**
  - A: Der native Slack Workflow Builder steht in vollem Umfang leider nur in den kostenpflichtigen Plänen (ab Pro) zur Verfügung. Als Workaround für die kostenlose Version bieten sich Tools wie Zapier oder Make.com an: Damit kannst du Nachrichten in einem Kanal „abhören“ und über die ChatGPT-API automatisiert Antworten ausspielen.

- **F: Worin besteht der Unterschied zu einem Bot, den ich komplett selbst (z. B. in Python) programmiere?**
  - A: Mit einer Python-Bibliothek wie `slack-bolt` lassen sich deutlich tiefgreifendere Interaktionen realisieren – etwa interaktive Buttons, Pop-up-Modals oder direkte Anbindungen an interne Datenbanken. Das geht allerdings mit Serverkosten und kontinuierlichem Wartungsaufwand einher. Für simple Menüempfehlungen und rein textbasierte Antworten ist der hier gezeigte No-Code-Ansatz unschlagbar effizient und absolut ausreichend.

---

## 🧬 Anatomie des Prompts (Warum funktioniert das so gut?)

1. **Kontextbezogene Variablen (Contextual Variables):** Anstatt stumpf nach einem „Menüvorschlag“ zu fragen, zwingen wir die KI durch spezifische Platzhalter (`[ ]`) für Wetter, Stimmung und Gruppengröße dazu, generische Standardantworten zu verwerfen und stattdessen extrem empathische, passgenaue Ideen zu liefern.
2. **Kontrolle über Halluzinationen (Constraint Setting):** Der Abschnitt `Warnung (Warning)` sensibilisiert die KI für die Tücken der Mittagspause (Gruppendynamik, begrenzte Zeit) und blockiert gleichzeitig das typische KI-Phänomen, fiktive Restaurants herbeizuzaubern, die es in der Realität gar nicht gibt.
3. **Rollenspiel (Role-playing):** Die Definition einer glasklaren Persona („anspruchsvoller Feinschmecker und kulinarisches Navigationssystem“) verändert die Tonalität der Ausgabe fundamental. Sie klingt nicht mehr nach einem sterilen Lexikon, sondern wie die Empfehlung eines sympathischen, humorvollen Kollegen.

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Die Stille des Mittags)

```text
Junior: "Was wollt ihr heute zu Mittag essen?"
Kollege A: "Hmm... mir ist alles recht."
Teamleiter: "Egal, lasst uns einfach irgendwas essen."
(Das endlose Ratespiel beginnt, gefolgt von 10 Minuten betretenem Schweigen 🕰️)
```

### ✅ Nachher (Die Rettung durch den KI-Assistenten)

```text
Ich: /mittagessen
Bot (Lunch Buddy): "☔ Es regnet, Zahltag ist noch weit entfernt und das Team ist gestresst!
Für Tage wie diesen empfehle ich wärmstens eine **heiße, würzige Pho-Suppe mit Rindfleisch**.
Die wärmende Brühe spült den Arbeitsstress weg, und die leichten Reisnudeln verhindern das gefürchtete Nachmittagstief! 🍜"
Teamleiter: "Oh, asiatische Suppe klingt heute perfekt. Lasst uns losgehen!"
```

---

## 🎯 Fazit

Das Büro ist zweifelsohne ein Ort harter Arbeit, doch zumindest die Mittagspause sollte lecker, unbeschwert und entspannend sein. Ein simpel eingerichteter Bot kann die Teamdynamik spürbar auflockern und die alltägliche Entscheidungsmüdigkeit drastisch reduzieren.

Mach Schluss mit dem zermürbenden Ratespiel und überlass die Wahl des Mittagessens künftig einfach den **smarten Empfehlungen deines KI-Assistenten**. In diesem Sinne: Guten Appetit und im Anschluss einen pünktlichen, wohlverdienten Feierabend! 🍷
