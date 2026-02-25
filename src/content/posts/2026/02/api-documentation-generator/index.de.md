---
layout: /src/layouts/Layout.astro
title: " \"Lästige API-Dokumentation, Swagger taucht mit nur Code auf\""
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Programmierung/Entwicklung"
description: " \"Ein Prompt, der Ihren API-Code beim Einfügen automatisch in eine saubere OpenAPI (Swagger)-Spezifikation oder ein Markdown-Dokument verwandelt.\""
tags: ["API", "Dokumentation", "Swagger", "OpenAPI", "Backend"]
---

# 📝 Lästige API-Dokumentation? Swagger-Specs per Knopfdruck generieren

- **🎯 Empfohlene Zielgruppe:** Backend-Entwickler, Frontend-Entwickler, Tech Leads
- **⏱️ Zeitersparnis:** Von 30 Minuten auf 1 Minute
- **🤖 Empfohlene Modelle:** ChatGPT (GPT-4o), Claude 3.5 Sonnet, Gemini Advanced

- ⭐ **Schwierigkeitsgrad:** ⭐⭐☆☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐⭐

> _„Bist du mit der API fertig? Kannst du mir eben die Swagger-Doku rüberschicken?“ – Dieser Satz vom Frontend-Team treibt selbst erfahrenen Backend-Entwicklern den Schweiß auf die Stirn. Doch was wäre, wenn Sie nie wieder manuell YAML tippen müssten?_

Geht es Ihnen auch so? Das Schreiben der API-Dokumentation fühlt sich oft mühsamer an als die eigentliche Entwicklung. Parametertypen definieren, Required-Flags setzen, JSON-Beispielantworten ausdenken... all das raubt Zeit und Nerven.

Die gute Nachricht: Sie müssen das nicht mehr selbst tun. Kopieren Sie einfach Ihren fertigen Controller- oder Router-Code, übergeben Sie ihn an die KI, und erhalten Sie in Sekunden eine perfekt formatierte OpenAPI (Swagger)-Spezifikation.

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. **Code rein, Doku raus:** Verwandelt nackten API-Code in strukturierte Dokumentation.
2. **Flexible Formate:** Generiert wahlweise OpenAPI (Swagger) im YAML/JSON-Format oder saubere Markdown-Tabellen.
3. **Lebensechte Beispiele:** Ergänzt automatisch realistische Mock-Daten für Request- und Response-Bodys.

---

## 🚀 Die Lösung: "Der API-Doc-Generator"

### 🥉 Basic Version (Schnell & Einfach)

Nutzen Sie diese Variante, wenn Sie unter Zeitdruck stehen und nur schnell eine lesbare Übersicht brauchen.

> **Rolle:** Du bist ein erfahrener Technical Writer und Senior Backend-Developer.
> **Aufgabe:** Analysiere den folgenden API-Code und erstelle daraus eine übersichtliche API-Dokumentation mit allen Endpunkten, Parametern und Beispielantworten.
> **Code:** `[Füge hier deinen Controller-Code ein]`

\

### 🥇 Pro Version (Experten-Level)

Diese detaillierte Prompt-Struktur garantiert eine vollständige, fehlerfreie und sofort einsatzbereite OpenAPI-Spezifikation.

> **Rolle (Role):** Du bist ein extrem präziser Technical Writer und Senior Backend-Developer, spezialisiert auf API-Design.
>
> **Kontext (Context):**
>
> - Hintergrund: Ich habe einen neuen API-Endpunkt entwickelt und muss diesen sofort mit dem Frontend-Team teilen.
> - Ziel: Eine sofort nutzbare, fehlerfreie und standardkonforme API-Dokumentation aus meinem Code generieren.
>
> **Aufgabe (Task):**
> Analysiere den unten bereitgestellten API-Code und generiere eine vollständige Dokumentation im Format **[OpenAPI 3.0 YAML / Markdown]**.
> Die Dokumentation MUSS zwingend folgende Elemente enthalten:
>
> 1. **Endpoint & Method:** Der genaue URL-Pfad und die HTTP-Methode (GET, POST, etc.).
> 2. **Summary & Description:** Eine präzise Zusammenfassung der API-Funktion.
> 3. **Parameters:** Alle Request-Parameter (Path, Query, Header) und den Request Body mit Typen (String, Integer, Boolean) und dem Required-Status.
> 4. **Responses:** Die Struktur der Rückgabewerte inklusive realistischer JSON-Beispiele für den Erfolgsfall (z. B. 200 OK) und typische Fehlerfälle (z. B. 400 Bad Request, 500 Internal Server Error).
>
> **Code:**
> `[Füge hier deinen Controller-/Router-Code ein]`
>
> **Einschränkungen (Constraints):**
>
> - Halte dich strikt an den OpenAPI 3.0 Standard, falls YAML gefordert ist.
> - Erfinde keine Endpunkte, die nicht im Code stehen.
> - Fülle die "Example Values" mit realistischen, praxisnahen Dummy-Daten.
>
> **Achtung (Warning):**
>
> - Rate keine fehlenden Informationen. Wenn etwas im Code unklar ist, markiere es mit einem TODO.

---

## 💡 Autorenkommentar (Insight)

Als Backend-Entwickler habe ich früher unzählige Stunden damit verbracht, Swagger-YAMLs manuell anzupassen, weil das Frontend-Team mal wieder über fehlende Parameter klagte. Dieser Prompt ist ein absoluter Gamechanger. Mein Tipp aus der Praxis: **Nutzen Sie Claude 3.5 Sonnet für diese Aufgabe.** Claude versteht verschachtelten Routing-Code (wie bei Express oder NestJS) oft deutlich besser als ChatGPT und macht weniger Einrückungsfehler im YAML-Format. Wenn Sie ein ganzes Modul mit 5-6 Endpunkten haben, werfen Sie einfach die gesamte Datei hinein – die KI extrahiert alle Routen fehlerfrei.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **Q: Kann die KI auch Fehlercodes (404, 500) erkennen, wenn sie nicht explizit im Code stehen?**
  - A: Bedingt. Wenn Sie im Code z.B. einen `try-catch`-Block haben oder eine Datenbankabfrage stattfindet, schlussfolgert die KI logische Fehler wie "404 Not Found" (wenn ein User nicht existiert). Für maximale Präzision sollten Sie Fehler aber im Code abfangen.

- **Q: Funktioniert das auch mit GraphQL oder gRPC?**
  - A: Ja! Ändern Sie einfach das geforderte Format in den Constraints von "OpenAPI 3.0 YAML" zu "GraphQL Schema" oder "gRPC Protobuf-Definition".

- **Q: Sind meine Firmendaten sicher, wenn ich Code in die KI kopiere?**
  - A: Achten Sie darauf, keine echten API-Keys, Passwörter oder sensitiven Geschäftsgeheimnisse mitzukopieren. Entfernen Sie diese vorab oder nutzen Sie Enterprise-Versionen der KIs, die Ihre Daten nicht für das Training verwenden.

---

## 🧬 Prompt-Anatomie (Warum funktioniert das so gut?)

1. **Standardisierung durch Formatvorgaben:** Die explizite Nennung von "OpenAPI 3.0" zwingt die KI, sich an ein branchenweites Schema zu halten, anstatt sich ein eigenes Format auszudenken.
2. **Fokus auf Edge Cases:** Die Anweisung, auch Fehlerfälle (400, 500) und realistische Beispiele einzuschließen, verhindert, dass die Doku nur aus nutzlosen `string`-Platzhaltern besteht.

---

## 📊 Beweis: Vorher & Nachher

### ❌ Vorher (Eingabecode - Node.js Express)

```javascript
app.post("/users", (req, res) => {
  const { username, email } = req.body;
  if (!email) return res.status(400).send({ msg: "no email provided" });
  // DB-Speicherlogik...
  res.status(201).send({ id: 1042, username, email });
});
```

### ✅ Nachher (Ergebnis - Markdown-Format)

### **POST /users**

Registriert einen neuen Benutzer im System.

**Request Body**

- `username` (String, Optional): Der gewünschte Anzeigename des Benutzers.
- `email` (String, **Erforderlich**): Die E-Mail-Adresse für den Login.

**Responses**

**201 Created (Erfolg)**

```json
{
  "id": 1042,
  "username": "jay_dev",
  "email": "jay@example.com"
}
```

**400 Bad Request (Fehler)**

```json
{
  "msg": "no email provided"
}
```

---

## 🎯 Fazit

Gute Dokumentation ist nicht das lästige Ende der Entwicklung, sondern das Fundament für exzellente Teamarbeit. Verschwenden Sie Ihre wertvolle Zeit nicht mehr mit YAML-Formatierung. Überlassen Sie das Tippen der KI und konzentrieren Sie sich wieder auf das, was wirklich Spaß macht: komplexe Backend-Logik entwerfen! 🍷
