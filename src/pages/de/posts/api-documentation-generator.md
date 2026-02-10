---
layout: /src/layouts/Layout.astro
title: "Lästige API-Dokumentation, Swagger taucht mit nur Code auf"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Programmierung/Entwicklung"
description: "Ein Prompt, der API-Code automatisch in OpenAPI (Swagger)-Spezifikationen oder Markdown-Dokumente umwandelt, wenn Sie ihn einfügen."
tags: ["API", "Dokumentation", "Swagger", "OpenAPI", "Backend"]
---

# 📝 Lästige API-Dokumentation, Swagger taucht mit nur Code auf

**🎯 Empfohlen für:** Jeden
**⏱️ Zeitaufwand:** 5 Minuten

- **🤖 Empfohlenes Modell:** Alle KI-Modelle

| Schwierigkeit | Effektivität |  Nutzen   |
| :-----------: | :----------: | :-------: |
|    ⭐⭐☆☆☆    |  ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐☆ |

_"Wenn Sie mit der Entwicklung fertig sind, sollten Sie uns auch die Dokumentation geben, oder? (Frontend-Entwickler)"_
_"Ah... einen Moment. (Habe noch keine einzige Zeile geschrieben)"_

Bin ich der Einzige, der das Schreiben von Dokumentation mehr hasst als die API-Entwicklung?
Parametertypen, erforderlicher Status, Antwortbeispiele... sie einzeln zu schreiben, lässt die Realität zusammenbrechen.
Kopieren Sie jetzt einfach den Controller-Code und fügen Sie ihn ein. KI wird ihn in eine saubere Swagger-Spezifikation umwandeln.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Extrahieren Sie genaue Parameter-/Antwortspezifikationen basierend auf Code
2. Automatische Generierung von OpenAPI (Swagger) YAML/JSON-Format
3. Enthält leicht verständliche Erklärungen und Beispieldaten

---

## 🚀 Die Lösung: "API-Dokument-Generator"

### 🥉 Basis-Version

Verwenden Sie dies, wenn Sie nur ein schnelles Ergebnis benötigen.

**Rolle:** Du bist ein akribischer technischer Redakteur und Backend-Entwickler.
**Anfrage:** Ein Prompt, der API-Code automatisch in OpenAPI (Swagger)-Spezifikationen oder Markdown-Dokumente umwandelt, wenn Sie ihn einfügen.

<br>

### 🥇 Pro-Version (Experte)

Verwenden Sie dies, wenn Sie detaillierte Qualität benötigen.

Kopieren Sie den **PROMPT**-Inhalt unten und fügen Sie ihn in ChatGPT oder Claude ein.

> **Rolle:** Du bist ein akribischer technischer Redakteur und Backend-Entwickler.
>
> **Kontext:** Ich habe API-Code, den ich entwickelt habe, und ich muss ihn dokumentieren, um ihn mit Frontend-Entwicklern zu teilen.
>
> **Aufgabe:**
> Analysiere den unten bereitgestellten API-Code und schreibe die Dokumentation im **[Gewünschtes Format auswählen: OpenAPI 3.0 YAML / Markdown-Tabelle]** Format.
> Muss folgende Inhalte enthalten:
>
> 1. **Endpoint & Method:** URL-Pfad und HTTP-Methode
> 2. **Summary:** Kurze Zusammenfassung dessen, was die API tut
> 3. **Request Parameters:** Body, Query, Path-Parameter (einschließlich Typ, erforderlicher Status, Beschreibung)
> 4. **Response:** Antwortstruktur und Beispiel-JSON für Erfolg (200) und Fehler (400, 500 usw.)
>
> **Code:**

> [Controller-/Router-Code hier einfügen]

> **Einschränkungen:**
>
> - Geben Sie Datentypen (String, Integer usw.) klar an.
> - Füllen Sie Antwortbeispiele (Example Value) mit realistischen Daten.

---

## 🧬 Prompt-Anatomie (Warum es funktioniert?)

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabecode - Node.js Express)

```javascript
app.post("/users", (req, res) => {
  const { username, email } = req.body;
  if (!email) return res.status(400).send({ msg: "no email" });
  // DB-Speicherlogik...
  res.status(201).send({ id: 1, username, email });
});
```

### ✅ Nachher (Ergebnis - Markdown-Beispiel)

### **POST /users**

Benutzer-Registrierungs-API

**Request Body**
| Feldname | Typ | Erforderlich | Beschreibung |
|---|---|---|---|
| `username` | String | O | Benutzer-Spitzname |
| `email` | String | O | Benutzer-E-Mail (Eindeutig) |

**Response (201 Created)**

```json
{
  "id": 1,
  "username": "jay_dev",
  "email": "jay@example.com"
}
```

---

## 🎯 Schlussfolgerung

Dokumentation ist nicht das Ende der Entwicklung, sondern der Beginn der Zusammenarbeit.
Aber verschwenden Sie nicht zu viel Energie für diesen Anfang. Überlassen Sie es der KI und konzentrieren Sie sich auf die Geschäftslogik! 🍷
