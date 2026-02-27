---
layout: /src/layouts/Layout.astro
title: " \"Keine Kollegen? Macht nichts, harte Code-Review vom KI-Senior-Entwickler\""
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Programmierung/Entwicklung"
description: " \"Ein Prompt für Entwickler, die ohne Team arbeiten und akribische Code-Reviews aus der Perspektive eines Google/Amazon Senior-Entwicklers benötigen.\""
tags: ["Code-Review", "Mentoring", "Clean Code", "Selbstentwicklung"]
---

# 📝 Keine Kollegen? Macht nichts, harte Code-Review vom KI-Senior-Entwickler

- **🎯 Empfohlen für:** Solo-Entwickler, Freelancer, Junioren ohne Mentor
- **⏱️ Zeitaufwand:** 5 Minuten
- **🤖 Empfohlenes Modell:** Claude 3.5 Sonnet, GPT-4o (für Coding-Aufgaben ideal)

- ⭐ **Schwierigkeit:** ⭐⭐☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzen:** ⭐⭐⭐⭐☆

> _"Funktioniert zwar, aber ist dieser Code wirklich gut? Hätte ich bloß jemanden, der mal kurz drüberschaut..."_

Wer alleine programmiert, entwickelt schnell einen Tunnelblick. Wenn man Code einfach durchwinkt, weil er "irgendwie läuft", stagniert die eigene Lernkurve. Was wäre, wenn ein erfahrener Tech-Lead aus dem Silicon Valley direkt neben Ihnen säße und Ihren Code Zeile für Zeile auseinandernähme? Von knallhartem Feedback zur Architektur bis hin zu Best Practices – machen Sie die KI zu Ihrem persönlichen Senior Code Reviewer.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. **FAANG-Standards:** Wenden Sie strenge Qualitätsstandards von Top-Tech-Unternehmen auf Ihren eigenen Code an.
2. **360-Grad-Analyse:** Erhalten Sie multiperspektivisches Feedback zu Sicherheit, Performance, Lesbarkeit und Architektur.
3. **Konkretes Refactoring:** Lassen Sie sich nicht nur Fehler aufzeigen, sondern direkt saubere und optimierte Code-Beispiele liefern.

---

## 🚀 Die Lösung: "KI Senior Code Reviewer"

### 🥉 Basic Version (Grundlagen)

Ideal für einen schnellen Check zwischendurch, wenn die Zeit drängt.

> **Rolle:** Du bist ein erfahrener Senior Software Engineer bei Google.
> **Anfrage:** Führe ein strenges Code-Review für den folgenden Code durch und nenne mir die drei wichtigsten Verbesserungspotenziale: `[Ihr Code hier]`


### 🥇 Pro Version (Expertenmodus)

Für tiefgehende Analysen und maximale Lerneffekte. Kopieren Sie den folgenden Prompt und fügen Sie ihn in Ihr KI-Tool ein.

> **Rolle (Role):** Du bist ein Principal Software Engineer, der seit über 15 Jahren bei Google und Amazon arbeitet. Du bist ein extrem anspruchsvoller, aber konstruktiver und fördernder Mentor.
>
> **Kontext (Context):**
>
> - Hintergrund: Ich habe diesen Code als Junior-Entwickler geschrieben und arbeite alleine an diesem Projekt.
> - Ziel: Ich möchte ein schonungsloses, lehrreiches Code-Review von dir erhalten, bevor ich den Code in die Produktion (PR) übernehme.
>
> **Aufgabe (Task):**
> Überprüfe meinen Code Zeile für Zeile und gib mir Feedback in genau dieser Struktur:
>
> 1. **Gut gemacht:** Lobe spezifische Teile, die gut durchdacht sind oder eine saubere Logik aufweisen.
> 2. **Kritikpunkte:** Weise schonungslos auf Mängel in den Bereichen Lesbarkeit, Performance, Sicherheit und Error-Handling hin.
> 3. **Reflexionsfragen:** Stelle mir kritische Fragen (z. B. "Warum hast du dich hier für diese Datenstruktur entschieden?"), um mein architektonisches Denken zu schärfen.
> 4. **Refactoring:** Zeige mir den komplett überarbeiteten, perfekten Code basierend auf deinem Feedback.
>
> **Der zu überprüfende Code:**
> `[Fügen Sie hier Ihren Code ein]`
>
> **Einschränkungen (Constraints):**
>
> - Dein Tonfall ist hochprofessionell, direkt und bestimmt (Senior-Level).
> - Achte penibel auf Namenskonventionen, Typisierungen (Type Hints), Edge Cases und unnötige Komplexität.
> - Erfinde keine APIs oder Funktionen, die nicht existieren (keine Halluzinationen).

---

## 💡 Anmerkung des Autors (Insight)

Dieser Prompt ist ein absoluter Gamechanger für Solo-Entwickler und Freelancer. Oft neigen wir dazu, uns mit "Hauptsache es funktioniert" zufriedenzugeben. Indem wir der KI explizit die Rolle eines _anspruchsvollen FAANG-Engineers_ zuweisen, zwingen wir sie dazu, Best Practices, Clean Code-Prinzipien und Edge Cases zu berücksichtigen, die wir selbst andernfalls übersehen hätten. Besonders der Teil mit den **Reflexionsfragen** ist entscheidend: Anstatt den Code einfach nur stumm umzuschreiben, trainiert die KI aktiv Ihr eigenes architektonisches Denken. Ich nutze diesen Prompt mittlerweile als obligatorischen Standard-Check für jeden wichtigen Pull Request.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **Q: Funktioniert dieser Prompt auch mit der kostenlosen ChatGPT-Version?**
  - A: Ja, grundsätzlich schon. Allerdings liefern Claude 3.5 Sonnet oder GPT-4o bei komplexen Programmieraufgaben deutlich präzisere, tiefergehende und kontextbezogenere Ergebnisse als die Standardmodelle.

- **Q: Kann ich den Prompt auch für exotische oder ältere Programmiersprachen nutzen?**
  - A: Absolut. Ergänzen Sie einfach im Bereich **Kontext** einen Satz wie: _"Beachte zwingend die spezifischen Best Practices und Konventionen für [Programmiersprache/Framework, z. B. Rust oder COBOL]."_.

- **Q: Was mache ich, wenn das Refactoring der KI Fehler enthält?**
  - A: KI-Modelle können halluzinieren, besonders bei komplexen Abhängigkeiten oder hochspezifischen Bibliotheken. Nutzen Sie das Refactoring primär als architektonische Inspiration und testen Sie den Code immer gründlich in Ihrer lokalen Umgebung. Fordern Sie die KI bei Fehlern direkt auf: _"Dein Code hat den Fehler [Fehlermeldung] geworfen. Bitte analysiere das Problem und korrigiere deinen Ansatz."_

---

## 🧬 Anatomie des Prompts (Warum es funktioniert?)

1. **Hochkarätige Persona:** Die Vorgabe "Principal Engineer bei Google/Amazon" aktiviert im KI-Modell Trainingsdaten, die tief mit High-Performance-Code, Skalierbarkeit und strengen Coding-Guidelines verknüpft sind.
2. **Strukturierte Ausgabe:** Durch die strikte Aufteilung in Lob, Kritik, Reflexion und Refactoring verhindern wir, dass die KI einfach nur eine unübersichtliche Textwand generiert, und maximieren die Lesbarkeit.
3. **Förderung des eigenen Denkens:** Die "Reflexionsfragen" machen die KI vom reinen Korrektur-Werkzeug zu einem echten, interaktiven Mentor.

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabecode)

```python
def s(x):
    return x * x
```

### ✅ Nachher (Review-Ergebnis)

> **👍 Gut gemacht:** Die Funktion ist extrem prägnant und erfüllt grundsätzlich ihren mathematischen Zweck ohne unnötigen Overhead.

> **🛠 Kritikpunkte:**

1. **Namenskonventionen:** Weder der Funktionsname `s` noch das Argument `x` sind aussagekräftig. In einer größeren Codebase führt das unweigerlich zu Verwirrung. Besser wäre `calculate_square` oder einfach `square`.
2. **Type Hints fehlen:** Es ist unklar, welche Datentypen erwartet werden. Python unterstützt Type Annotations, die hier zwingend genutzt werden sollten, um Fehler im Vorfeld zu vermeiden.
3. **Dokumentation:** Ein Docstring fehlt komplett. Was macht diese Funktion? Gibt es Ausnahmen?
4. **Error Handling:** Was passiert, wenn jemand einen String oder ein Dictionary übergibt? Die Funktion wird mit einem Typenfehler abstürzen.

> **🤔 Reflexionsfragen:**
Hast du bedacht, was passiert, wenn als Eingabewert keine Zahl, sondern ein anderer Datentyp (z. B. ein String) übergeben wird? Wie würdest du dieses Szenario in einer produktiven Umgebung sauber abfangen?

> **✨ Refactoring:**

```python
from typing import Union

def calculate_square(number: Union[int, float]) -> Union[int, float]:
    """
    Berechnet das Quadrat einer gegebenen Zahl.

    Args:
        number (int | float): Die Basiszahl.

    Returns:
        int | float: Das Quadrat der Eingabezahl.

    Raises:
        TypeError: Wenn die Eingabe keine gültige Zahl ist.
    """
    if not isinstance(number, (int, float)):
        raise TypeError("Das Argument 'number' muss ein int oder float sein.")

    return number ** 2
```

---

## 🎯 Fazit

Man sagt oft, das beste Entwickler-Benefit seien exzellente Kollegen. Auch wenn das Großraumbüro mal leer ist und Sie auf sich allein gestellt sind – Ihr persönlicher KI-Senior-Entwickler ist 24/7 hellwach und wartet auf Ihren Code. Holen Sie sich jetzt Ihr Review und schreiben Sie Code, auf den Sie wirklich stolz sein können! 🍷
