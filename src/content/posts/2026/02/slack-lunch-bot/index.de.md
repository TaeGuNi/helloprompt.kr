---
layout: /src/layouts/Layout.astro
title: " \"Slack 봇 만들기: '점심 뭐 먹지?' 추천해주는 사내 봇\""
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "업무 자동화"
description: " \"Erfahre, wie du den Slack Workflow Builder und KI ohne Programmierkenntnisse verknüpfst, um einen intelligenten Assistenten für die tägliche Mittagsempfehlung deines Teams zu erstellen.\""
tags: ["Slack", "슬랙", "챗봇", "자동화", "사내문화"]
---

# 🤖 Einen Slack-Bot erstellen: Dein interner Assistent für die Frage „Was essen wir heute zu Mittag?“

- **🎯 Empfohlen für:** Junior-Mitarbeiter, die jeden Tag unter der Qual der Wahl leiden, sowie HR-Teams, die frischen Wind in den trockenen Firmen-Messenger bringen wollen
- **⏱️ Zeitaufwand:** 10 Minuten (bei Nutzung des Slack Workflow Builders)
- **🤖 Empfohlenes Modell:** ChatGPT-4o (Hervorragend für kreative Menüvorschläge und situatives Verständnis)

- ⭐ **Schwierigkeitsgrad:** ⭐⭐☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐⭐

> _"Was sollen wir heute zu Mittag essen? Irgendwas. Pasta? Puh, Nudeln schon wieder... Beende das tägliche Ratespiel beim Mittagessen. Überlass diese Aufgabe einem KI-Assistenten und spare deine Energie für den pünktlichen Feierabend!"_

Das größte Dilemma im Büroalltag: die Wahl des Mittagessens. Anstatt unsicher in die Runde zu schauen, frag doch einfach euren internen Messenger-Bot! Gib ein: „Was essen wir heute bei diesem Regen?“ und erhalte eine clevere Antwort wie: „Wie wäre es an einem Regentag mit einer heißen, deftigen Nudelsuppe statt dem üblichen Schnitzel?“. In diesem Beitrag zeige ich dir, wie du mithilfe des Slack Workflow Builders ganz ohne Programmierkenntnisse einen solchen Bot erstellst.

---

## ⚡️ Zusammenfassung in 3 Sätzen (TL;DR)

1. Richte einen Automatisierungs-Bot ein, indem du den **'Workflow Builder'** von Slack komplett ohne Code nutzt.
2. Lege bestimmte Schlüsselwörter (z. B. "Mittagessen Empfehlung") oder Emoji-Reaktionen als Auslöser (Trigger) fest, um den Bot aufzurufen.
3. Verbinde einen KI-Connector (z. B. ChatGPT), um maßgeschneiderte Menüvorschläge basierend auf der aktuellen Situation und dem Wetter zu generieren.

---

## 🚀 Die Lösung: Der "Lunch Buddy" Prompt

### 🥉 Basic Version (Standard)

Nutze diesen einfachen Prompt, wenn du schnell eine zufällige Empfehlung brauchst, um die Entscheidungsfindung zu beschleunigen.

> **Rolle (Role):** Du bist ein freundlicher Assistent, der das Mittagessen für unser Büro-Team auswählt.
>
> **Aufgabe (Task):** Wähle zufällig eine Kategorie aus (z. B. Italienisch, Asiatisch, Gutbürgerlich, Fast Food oder Gesund). Empfiehl anschließend genau 3 typische und beliebte Gerichte aus dieser Kategorie, die sich ideal als Mittagessen für Berufstätige eignen.


### 🥇 Pro Version (Experte)

Verwende diese Version, um durch die Berücksichtigung von Wetter, Stimmung und Gruppengröße besonders clevere und situativ passende Vorschläge zu erhalten.

> **Rolle (Role):** Du bist ein anspruchsvoller Feinschmecker und ein kulinarisches Navigationssystem für die besten Restaurants rund um unser Büro (`[Standort des Büros, z. B. Berlin-Mitte]`).
>
> **Kontext (Context):**
>
> - Wetter: `[Aktuelles Wetter, z. B. regnerisch, sonnig, kalt]`
> - Stimmung & Situation: `[Team-Atmosphäre, z. B. gestresst, Zahltag, auf Diät]`
> - Teilnehmerzahl: `[Gruppenzusammensetzung, z. B. esse alleine, ganzes Team, Treffen mit Kollegen]`
>
> **Aufgabe (Task):**
>
> 1. Empfiehl genau 1 Gericht, das perfekt zu der oben beschriebenen Situation passt.
> 2. Füge eine witzige, nachvollziehbare Begründung (1–2 Sätze) hinzu, warum dieses Gericht für Büroangestellte in dieser Situation die beste Wahl ist.
> 3. Formatiere die Ausgabe als übersichtliche Markdown-Liste inklusive passender Emojis.
>
> **Einschränkungen (Constraints):**
>
> - Schließe Gerichte aus, die extrem polarisieren (z. B. sehr scharf, extrem viel Knoblauch) oder zu schwer im Magen liegen, um sie während der Mittagspause zu essen.
>
> **Warnung (Warning):**
>
> - Erfinde keine fiktiven Restaurantnamen. Konzentriere dich stattdessen ausschließlich auf den Namen des Gerichts. (Verhindere Halluzinationen)

---

## 💡 Kommentar des Autors (Insight)

Ein Slack-Bot ist weit mehr als nur ein technisches „Feature“ – er ist ein mächtiges Werkzeug zur Gestaltung der **Unternehmenskultur**. In Messenger-Kanälen, die sonst nur von trockenen Arbeitsanweisungen dominiert werden, wirkt er wie Schmierstoff, der für ein Lächeln und neuen Gesprächsstoff sorgt. Wenn ein Mittagessen-Bot gut vom Team angenommen wird, ebnet das den Weg für weitere Ideen wie einen „Lob-Bot“, „Geburtstags-Bot“ oder „Wochenrückblick-Bot“. So trägst du aktiv zu einem positiven und lockeren Arbeitsklima bei. Besonders stark wird dieser Prompt, wenn du ihn mit Automatisierungstools wie Zapier oder Make verknüpfst. Damit sprengst du die Grenzen des Slack Workflow Builders und erschaffst einen echten, intelligenten KI-Assistenten.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **F: Meine Firma nutzt die kostenlose Slack-Version. Kann ich den Workflow Builder trotzdem verwenden?**
  - A: Leider ist der Slack Workflow Builder in vollem Umfang nur in den kostenpflichtigen Plänen (ab Pro) verfügbar. In der kostenlosen Version kannst du jedoch einen kleinen Umweg nehmen: Nutze Zapier oder Make.com, um Nachrichten in einem bestimmten Kanal auszulesen und über die ChatGPT-API automatisch eine Antwort zurückzusenden.

- **F: Was ist der Unterschied zu einem Bot, den ich selbst mit Code (z. B. Python) programmiere?**
  - A: Mit der Python-Bibliothek `slack-bolt` kannst du weitaus komplexere Interaktionen aufbauen – etwa klickbare Buttons, Pop-up-Modals oder die Anbindung an interne Datenbanken. Das erfordert jedoch Serverkosten und ständige Wartung. Für einfache Menüempfehlungen oder textbasierte Antworten ist ein No-Code-Workflow unschlagbar effizient und völlig ausreichend.

---

## 🧬 Anatomie des Prompts (Warum funktioniert das so gut?)

1. **Kontextbezogene Variablen (Contextual Variables):** Anstatt einfach nur "Empfiehl ein Menü" zu schreiben, zwingen wir die KI durch die Variablen (`[ ]`) für Wetter, Stimmung und Gruppengröße dazu, Standardantworten zu vermeiden und stattdessen maßgeschneiderte, empathische Vorschläge zu liefern.
2. **Kontrolle über Halluzinationen & Vorlieben (Constraint Setting):** Die `Warnung (Warning)` macht der KI die Besonderheiten einer Mittagspause (Zeitlimit, Gruppendynamik) klar und verhindert gleichzeitig, dass sie Restaurants erfindet, die gar nicht existieren.
3. **Rollenspiel (Role-playing):** Durch die Zuweisung einer klaren Persona („anspruchsvoller Feinschmecker und kulinarisches Navigationssystem“) ändert sich der Tonfall der Antwort gravierend. Sie wirkt nicht mehr wie ein Lexikon, sondern wie ein sympathischer, humorvoller Arbeitskollege.

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

Das Büro ist ein Ort für harte Arbeit, aber die eine Stunde Mittagspause sollte lecker und entspannt sein. Ein kleiner Bot kann die Stimmung im Team spürbar auflockern und die Ermüdung bei der täglichen Entscheidungsfindung drastisch senken.

Beende das Ratespiel und überlass die Wahl des Mittagessens der **cleveren Entscheidung deines KI-Assistenten**. Ich wünsche dir ein fantastisches Essen und danach einen pünktlichen und wohlverdienten Feierabend! 🍷
