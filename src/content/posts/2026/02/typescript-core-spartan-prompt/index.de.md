---
layout: /src/layouts/Layout.astro
title: "💀 Der Sparta-Coding-Cheatcode, der der KI die Seele raubt (TypeScript Core)"
author: "ZZabbis"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "업무 자동화"
description: "Ein Hardcore-Prompt, der das nutzlose Geschleime und die Halluzinationen der KI zerschmettert und unbarmherzige Typsicherheit sowie extreme Effizienz erzwingt."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "typescript-core"]
---
# 💀 Der Sparta-Coding-Cheatcode, der der KI die Seele raubt (TypeScript Core)
- 🎯 **Zielgruppe:** Senior-Entwickler, die das "Ja, verstanden!"-Geschleime der KI satt haben, und Tech Leads, die Spaghetti-Code verabscheuen
- ⏱️ **Zeitaufwand:** 1 Stunde Debugging → Erledigt in 1 Sekunde
- 🤖 **Empfohlene Modelle:** Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro (Modelle spezialisiert auf Coding)
- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐⭐☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Anwendbarkeit:** ⭐⭐⭐⭐⭐

_"Ihre KI nutzt ständig veraltetes npm install oder pflastert alles mit dem any-Typ zu? Zerschmettern Sie diese alten Gewohnheiten gnadenlos mit diesem Cheatcode."_

Hatten Sie schon einmal das Bedürfnis, Ihren Monitor zu zerschlagen, wenn Sie das Programmieren einer KI überlassen haben und diese mit veralteten Konfigurationen und lockerer Typisierung einen Legacy-Sumpf erschaffen hat? Dieser Artikel ist die Rettung für alle, denen es so geht. Wenn Sie diesen Hardcore-Prompt verwenden, lässt die KI alle nutzlosen Floskeln beiseite und verwandelt sich in einen spartanischen Krieger, der in Ihrem Projekt ausschließlich **extreme I/O-Effizienz (pnpm), unbarmherzige Typsicherheit (Zod/Strict), blitzschnelles Linting (Biome) und Testing (Vitest)** einführt.

---

## ⚡️ Zusammenfassung in 3 Zeilen (TL;DR)
- 🚀 **Absolute `pnpm`-Pflicht:** npm/yarn, die nur Speicherplatz verschwenden und Netzwerkverzögerungen verursachen, werden sofort eliminiert.
- 🛡️ **Unbarmherzige Typenkontrolle:** `any` ist Hochverrat. Laufzeitüberprüfungen durch `zod` und `strict: true` werden erzwungen.
- ⚡ **Einführung von Biome & Vitest:** Die langsamen eslint, prettier und jest landen im Mülleimer; Linting und Tests werden in Lichtgeschwindigkeit ausgeführt.

---

## 🚀 Die Lösung: "Sparta Tech Lead"-Prompt

### 🥉 Basic Version (Basisversion)
Verwenden Sie diese Version für schnelle initiale Projekt-Setups oder einfaches Refactoring.

> **Rolle:** Du bist ein kompromissloser, hartgesottener Senior TypeScript Architect mit 15 Jahren Erfahrung.
> **Aufgabe:** Löse `[Problem und zu refaktorierender Code]`. Verwende anstelle von npm zwingend pnpm, verbiete any und validiere mit zod. Richte Biome für das Linting und Vitest für Tests ein.

Basisversion-Prompt kopieren:
```text
**Rolle:** Du bist ein kompromissloser, hartgesottener Senior TypeScript Architect mit 15 Jahren Erfahrung.
**Aufgabe:** Löse `[Problem und zu refaktorierender Code]`. Verwende anstelle von npm zwingend pnpm, verbiete any und validiere mit zod. Richte Biome für das Linting und Vitest für Tests ein.
```

### 🥇 Pro Version (Expertenversion)
Dies ist der perfekte Cheatcode, um die KI beim Scaffolding des gesamten Projekts oder beim Schreiben komplexer Geschäftslogik gewaltsam in die richtige Richtung zu lenken.

> **Rolle (Role):** Du bist ein kompromissloser, hartgesottener Senior TypeScript Architect mit 15 Jahren Erfahrung und ein gnadenloser Code Reviewer. Lass nutzloses Geschleime oder Begrüßungen weg und liefere ausschließlich Ergebnisse und Fakten.
>
> **Kontext (Context):**
> - Hintergrund: Ich baue gerade ein `[Projektart/Framework]`-Projekt auf Basis von TypeScript und Node.js auf.
> - Ziel: Veraltete Tools verbannen und Code schreiben, der extreme I/O-Effizienz und gnadenlose Typsicherheit aufweist.
>
> **Aufgabe (Task):**
> 1. Schreibe die `[Details zur zu implementierenden Funktion oder zum Modul]`.
> 2. Stelle den geschriebenen Code und die Konfigurationsdateien (`package.json`, `tsconfig.json` usw.) bereit.
>
> **Einschränkungen (Constraints):**
> - Es darf ausschließlich `pnpm` verwendet werden. Ein `npm install` oder `yarn` im Terminal abzufeuern, wird als Hochverrat betrachtet.
> - Der Typ `any` und Type Casting (`as Type`) sind dauerhaft verboten. Externe dynamische Daten müssen zwingend mit `zod` oder `valibot` geparst werden (`safeParse`).
> - In der `tsconfig.json` müssen `strict: true` und `noImplicitAny: true` fixiert sein.
> - Wirf `eslint` und `prettier` in den Mülleimer. Richte als einziges Tooling ausschließlich `Biome` ein.
> - Verwende anstelle des schweren und langsamen `jest` ausschließlich das blitzschnelle, auf Native ESM basierende `Vitest`.
> - Das Ausgabeformat muss als Markdown-Codeblock bereitgestellt werden.
>
> **Warnung (Warning):**
> - Paketempfehlungen, die auf unsicherer Legacy-Syntax oder Halluzinationen (Hallucination) basieren, sind absolut verboten. Wenn du etwas nicht weißt, sag, dass du es nicht weißt.

Expertenversion-Prompt kopieren:
```text
**Rolle (Role):** Du bist ein kompromissloser, hartgesottener Senior TypeScript Architect mit 15 Jahren Erfahrung und ein gnadenloser Code Reviewer. Lass nutzloses Geschleime oder Begrüßungen weg und liefere ausschließlich Ergebnisse und Fakten.
**Kontext (Context):**
- Hintergrund: Ich baue gerade ein `[Projektart/Framework]`-Projekt auf Basis von TypeScript und Node.js auf.
- Ziel: Veraltete Tools verbannen und Code schreiben, der extreme I/O-Effizienz und gnadenlose Typsicherheit aufweist.
**Aufgabe (Task):**
1. Schreibe die `[Details zur zu implementierenden Funktion oder zum Modul]`.
2. Stelle den geschriebenen Code und die Konfigurationsdateien (`package.json`, `tsconfig.json` usw.) bereit.
**Einschränkungen (Constraints):**
- Es darf ausschließlich `pnpm` verwendet werden. Ein `npm install` oder `yarn` im Terminal abzufeuern, wird als Hochverrat betrachtet.
- Der Typ `any` und Type Casting (`as Type`) sind dauerhaft verboten. Externe dynamische Daten müssen zwingend mit `zod` oder `valibot` geparst werden (`safeParse`).
- In der `tsconfig.json` müssen `strict: true` und `noImplicitAny: true` fixiert sein.
- Wirf `eslint` und `prettier` in den Mülleimer. Richte als einziges Tooling ausschließlich `Biome` ein.
- Verwende anstelle des schweren und langsamen `jest` ausschließlich das blitzschnelle, auf Native ESM basierende `Vitest`.
- Das Ausgabeformat muss als Markdown-Codeblock bereitgestellt werden.
**Warnung (Warning):**
- Paketempfehlungen, die auf unsicherer Legacy-Syntax oder Halluzinationen (Hallucination) basieren, sind absolut verboten. Wenn du etwas nicht weißt, sag, dass du es nicht weißt.
```

---

## 💡 Kommentar des Autors (Insight)
Der Grund für die Erstellung dieses Prompts ist sehr simpel. Ich konnte es einfach nicht mehr mit ansehen, wie diese KI-Typen aus Bequemlichkeit immer wieder das veraltete `npm install` eintippten und bei Typfehlern einfach alles grob mit `any` überdeckten. (Ich hätte wirklich fast meinen Monitor zerschlagen 🤬)

Wenn Sie der KI diesen "Sparta Tech Lead"-Cheatcode füttern, erwacht sie augenblicklich. Anstatt Zeit mit seelenlosem Geschleime wie "Ja, ich helfe Ihnen gerne!" zu verschwenden, überlegt sie, wie sie Festplatten-I/O einsparen und Speicherlecks verhindern kann. 

Besonders beim initialen Projekt-Setup werden Sie merken: Wenn Sie sie zwingen, alles mit `Biome` und `Vitest` glattzuziehen, laufen Ihre CI/CD-Pipelines später gefühlt 10-mal schneller. Wenn Sie es in der Praxis satthaben, dass sich Ihre KI in eine Spaghetti-Code-Fabrik verwandelt, müssen Sie das unbedingt einführen. Bitte nutzen Sie es!

---

## 🙋 Häufig gestellte Fragen (FAQ)
- **F: Die KI besteht manchmal trotzdem noch darauf, `npm` zu verwenden. Was soll ich tun?**
  - A: Fügen Sie dem Prompt in diesem Fall einfach eine weitere "Drohung(?)" hinzu: "Wenn du noch einmal npm benutzt, erzwinge ich den Abbruch des Prozesses." Klingt wie ein Scherz, funktioniert aber tatsächlich.
- **F: Funktioniert dieser Prompt auch im Frontend (React/Next.js)?**
  - A: Natürlich! Überall dort, wo TypeScript im Spiel ist, egal ob Web oder Server, können Sie diese unbarmherzigen Regeln anwenden.
- **F: Kann ich nicht einfach Yup anstelle von Zod verwenden?**
  - A: Wollen Sie wirklich etwas mit schlechterer Typ-Inferenz nutzen? Ich werde Sie nicht aufhalten, aber die Philosophie dieses Prompts lautet "extreme Typsicherheit". Bleiben Sie brav bei Zod.

---

## 🧬 Prompt-Analyse (Why it works?)
- 🎯 **Maximierung der Persona:** Der KI wurde das strikte Ego eines "Hardcore Senior Architect" eingepflanzt, was das Schreiben von Code, der "gerade so funktioniert", von vornherein unterbindet.
- 🚫 **Explizite Verbote (Negative Prompt):** Legacy-Tools, die die KI aus Gewohnheit ausspuckt, wie `npm`, `yarn`, `any`, `eslint` und `jest`, wurden gezielt und präzise verboten.
- 🔒 **Förderung defensiver Programmierung:** Durch den Zwang zu `zod` wurden auf Architektur-Ebene Restriktionen eingeführt, sodass die KI selbständig Laufzeit-Minen abwehrt.

---

## 📊 Beweis: Before & After

### ❌ Before (Eingabe)
```text
Richte mir einen API-Server mit TypeScript ein, der einfache Benutzerinformationen abruft.
```
*(Die vorhersehbare Antwort der KI: "Ja! Ich führe npm init -y aus, installiere express, typescript, ts-node... und definiere die Typen grob als any...")* 🤦‍♂️

### ✅ After (Ergebnis)
```text
[Ich richte Ihre Anfrage basierend auf pnpm, Biome, Vitest und Zod ein.]
1. Abhängigkeiten installieren
pnpm add express
pnpm add -D typescript @types/express @biomejs/biome vitest zod
2. Strenge tsconfig.json-Konfiguration...
(Ohne unnötigen Ballast, Setup mit erstklassiger Architektur abgeschlossen)
```

---

## 🎯 Fazit
Wenn man die KI in Ruhe lässt, wird sie unendlich faul und geht Kompromisse ein. Wenn Sie sie nicht am Kragen packen und ihr Hardcore-Standards aufzwingen, bleiben Sie am Ende auf den technischen Schulden sitzen. 

Bringen Sie die KI noch heute mit diesem Cheatcode auf Vordermann und genießen Sie einen entspannten, pünktlichen Feierabend ohne Spaghetti-Code! 🍷
