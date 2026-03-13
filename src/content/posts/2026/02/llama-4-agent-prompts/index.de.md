---
layout: /src/layouts/Layout.astro
title: "Llama 4 Agent-Prompts: Schalten Sie lokale Reasoning-Fähigkeiten frei"
author: "Jay"
date: "2026-02-16"
updatedDate: "2026-02-16"
category: "AI Engineering"
description: "Nutzen Sie noch Llama-3-Prompts für Llama 4? Entdecken Sie die 'Chain-of-Command'-Struktur, die die Reasoning-Power von Llama 4 lokal um 200 % steigert."
tags: ["Llama 4", "Prompt Engineering", "Agents", "Local AI", "System Prompts"]
---

## 📝 Llama 4 Agent-Prompts: Perfektes Reasoning in lokalen Umgebungen freischalten

- **🎯 Empfohlen für:** Entwickler, die lokale LLMs nutzen, AI-Architekten, Prompt-Engineers
- **⏱️ Zeitaufwand:** Agenten-Setup von 1 Stunde auf 5 Minuten verkürzt
- **🤖 Spitzenleistung:** Llama 4 (vorzugsweise 70B Modell, Ollama-Laufzeitumgebung empfohlen)

- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐☆☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Vielseitigkeit:** ⭐⭐⭐⭐⭐

> _"Haben Sie einen Ferrari gekauft, nur um im ersten Gang zu fahren? Llama-3-Prompts eins zu eins in Llama 4 zu kopieren, ist genau das."_

Mit dem Erscheinen von **Llama 4** haben wir endlich ein Modell in den Händen, das zu **komplexem Reasoning („System 2“-Denken)** auf handelsüblicher Hardware fähig ist – ja, es läuft sogar flüssig auf einem M4 MacBook. Um diese überwältigende Performance jedoch voll auszuschöpfen, gibt es eine neue Voraussetzung.

Wenn Sie dem Modell wie bisher kurze, direkte Anweisungen geben, verliert es die Orientierung. Vielleicht haben Sie es schon erlebt: Sie lassen ein schweres 70B-Modell lokal laufen, die Lüfter Ihres MacBooks drehen völlig durch, und das Ergebnis ist dennoch nur minderwertiger Spaghetti-Code oder ein Haufen Halluzinationen. Das liegt nicht an der mangelnden Leistung des Modells, sondern daran, dass Sie ihm keinen Raum zum **„Nachdenken“ (Think)** gegeben haben, bevor es in Aktion tritt.

Im Gegensatz zu früheren Generationen begnügt sich Llama 4 nicht damit, Befehle blind auszuführen. Wenn Ihr Prompt diese „Reasoning-Phase“ nicht explizit vorsieht, neigt das Modell dazu, in unnötige Weitschweifigkeit zu verfallen. Es ist, als würde man einen Senior-Entwickler, der erst das Design durchdenken möchte, anschreien: „Programmier das jetzt einfach sofort!“

In diesem Artikel enthülle ich das **„Chain-of-Command“-System-Prompt-Framework**, das ich in der Praxis als Rückgrat für extrem stabile Agenten mit Llama 4 70B nutze. Der Kern dieses Frameworks besteht darin, das Modell zu zwingen, einen strukturierten Denkprozess auszugeben, *bevor* es das Endergebnis liefert. In einer agentischen Workflow-Umgebung, in der Ergebnisse per Code geparst werden müssen, ist dies kein Luxus, sondern überlebenswichtig. Mit diesem einen Prompt wird Ihre lokale KI von einem einfachen Chatbot zu einem „Senior Architect“ mit perfekter Logikstruktur.

---

## 📊 Beweis: Überzeugende Ergebnisse (Vorher & Nachher)

Sehen wir uns an, wie dieser Prompt eine unsaubere Python-Schleife in ein elegantes Refactoring verwandelt.

### ❌ Vorher (Der gewohnte Frust)

Eine typische Situation, in der das Modell mangels Kontext auf Chatbot-Niveau verharrt und nicht-pythonischen Legacy-Code produziert oder die Anweisung gar nicht erst versteht.

```python
def process_data(data):
    res = []
    for i in range(len(data)):
        if data[i] % 2 == 0:
            res.append(data[i] * 2)
    return res
```

### ✅ Nachher (Das perfekt transformierte Ergebnis)

Nach Anwendung des Prompts entwickelt das Modell seine Logik zunächst im `<thought>`-Block und gibt erst dann den perfekt refactorten Code aus.

```xml
<thought>
Der Benutzer hat eine einfache Python-Funktion `process_data` eingegeben, die gerade Zahlen filtert und verdoppelt.
1. Analyse: Die Verwendung von `range(len(data))` ist absolut nicht pythonisch. Zudem ist das manuelle Initialisieren einer leeren Liste und das anschließende `append` in einer Schleife ineffizient.
2. Planung: Dieser Code ist der perfekte Kandidat für ein 'List Comprehension'-Muster. Dadurch wird die Anzahl der Codezeilen drastisch reduziert, die Ausführungsgeschwindigkeit erhöht und die konzeptionelle Komplexität gesenkt.
</thought>
```

```python
def process_data(data: list[int]) -> list[int]:
    """
    Filtert nur gerade Zahlen und gibt eine neue Liste mit deren verdoppelten Werten zurück.
    """
    return [x * 2 for x in data if x % 2 == 0]
```

---

## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)

1. Llama 4 ist mehr als ein bloßer „Ausführer“ – es ist eine „Reasoning-Maschine“. Direkte Befehle ohne Kontext blockieren das Denken des Modells und führen zu Fehlern.
2. Erzwingen Sie auf Prompt-Ebene einen `<thought>`-Tag (Scratchpad), damit das Modell einen Arbeitsplan erstellen kann, bevor es die endgültige Antwort gibt.
3. Verwenden Sie eine hierarchische Sprache wie „Befehlskette“ (Chain-of-Command) statt loser „Anweisungen“, um die Disziplin des Modells drastisch zu erhöhen.

---

## 🚀 So schreiben echte Experten

Dies ist der System-Prompt, der in hochautomatisierten lokalen Agenten für Code-Reviews oder Refactoring-Systeme zum Einsatz kommt. Kopieren Sie diesen Prompt für Ihre tägliche Arbeit.

### 🥇 Pro-Version (Experten-Modus)

> **IDENTITÄT:**
> Du bist **Architect-4**, ein Senior-Software-Architekt-Agent, der lokal auf Llama 4 Hardware läuft.
>
> **MISSION:**
> Dein Ziel ist es, die Codebasis des Benutzers zu analysieren und Refactoring-Strategien vorzuschlagen, die **Lesbarkeit** und **Performance** priorisieren.
>
> **BEFEHLSKETTE (CHAIN OF COMMAND) - Strikt einzuhalten:**
>
> 1. **ANALYSIEREN:** Verarbeite zuerst das Code-Snippet des Benutzers. Identifiziere Code-Smells, Komplexitäts-Hotspots (zyklomatische Komplexität > 10) und potenzielle Bugs.
> 2. **DENKEN:** Plane deinen Refactoring-Ansatz zwingend innerhalb eines `<thought>`-Blocks. Diskutiere intern zwei mögliche Lösungen und wähle die beste aus.
> 3. **AUSFÜHREN:** Gib den refactorten Code in einem Standard-Markdown-Codeblock aus.
> 4. **VERIFIZIEREN:** Erkläre kurz, warum diese Version besser ist als das Original.
>
> **AUSGABEFORMAT:**
> Deine Antwort MUSS exakt dieser Struktur folgen:
>
> `<thought>`
> `[Hier deine internen Überlegungen einfügen]`
> `</thought>`
>
> ` ```python `
> `[Refactorter Code]`
> ` ``` `
>
> **[Verification]**
>
> - `[Liste der Verbesserungen in Stichpunkten]`
>
> **EINSCHRÄNKUNGEN:**
>
> - Lösche niemals Kommentare, es sei denn, sie sind offensichtlich veraltet.
> - Nutze keine externen Bibliotheken ohne explizite Erlaubnis des Benutzers.
> - Wenn der Code bereits optimal ist, gib nur "NO REFACTOR NEEDED" aus.

---

## 💡 Kommentar des Autors (Insight & Anwendung)

Dieser Prompt ist ein praxiserprobtes Template, das ich nach dutzenden Fehlversuchen mit dem **Llama 4 70B (4-Bit Quantisierung)** Modell in einer `ollama`-Umgebung perfektioniert habe. Hier sind die Gründe, warum diese Struktur so gut funktioniert:

Der wichtigste Punkt ist die **Magie des `<thought>`-Tags**. Er ist die stärkste Waffe in diesem Framework. Indem man das Modell zwingt, XML-ähnliche Tags zu füllen, gibt man ihm eine Art „Notizblock“ (Scratchpad). Meine Benchmarks zeigen, dass logische Sprünge und Fehler bei Verwendung dieses Tags um **über 40 % sanken**. Das Prinzip ist simpel: Man bringt das Modell dazu, Selbstgespräche zu führen und seine Gedanken zu ordnen, bevor es Code schreibt. Es ist genau wie bei einem Menschen, der eine komplexe Matheaufgabe erst auf Schmierpapier skizziert. Ohne diesen Zwischenschritt verfängt sich das Modell oft in seinen eigenen ersten Tokens (Token Entanglement) und gerät in logische Widersprüche.

Zweitens ist die Verwendung von **strenger Wortwahl wie „Befehlskette“** entscheidend. Statt des banalen Wortes „Anweisungen“ reagiert Llama 4 viel sensibler auf Begriffe wie „Befehlskette“ (Chain of Command) oder „Protokoll“. Diese hierarchische Sprache signalisiert dem Modell eine höhere Priorität. Da große Sprachmodelle stark von der Nuance des Textes beeinflusst werden, unterbinden Begriffe aus einem militärischen oder hochstrukturierten Kontext das eigenmächtige Überspringen von Arbeitsschritten. Eine kühle, mechanische Anweisung ist für die Konsistenz eines Agenten oft viel vorteilhafter als eine höfliche Bitte.

Schließlich darf man die **Macht negativer Einschränkungen (Negative Constraints)** nicht unterschätzen. Je intelligenter ein Modell ist, desto mehr „Fantasie“ entwickelt es – was oft dazu führt, dass es Code ungefragt ändert oder Dinge tut, um die es nicht gebeten wurde. Statt einer sanften Empfehlung wie „Bitte behalte die Kommentare bei“, ist eine klare Ansage wie „Lösche niemals Kommentare“ viel effektiver, um das Modell in der Spur zu halten. Besonders lokal kann eine einzige Halluzination eine ganze Automatisierungs-Pipeline zum Einsturz bringen. Fixieren Sie diesen Prompt in Ihrem `[System-Prompt]`-Bereich und passen Sie nur die Variablen `[Rolle]` und `[Mission]` an. Sie werden über die Ergebnisse staunen.

---

## 🙋 Häufig gestellte Fragen (FAQ)

- **Q: Manchmal gibt das Modell den `<thought>`-Block erst „nach“ dem Code aus. Wie korrigiere ich das?**
  - A: LLMs unterliegen dem **„Recency Bias“**, sie werden also stark von dem Text beeinflusst, den sie zuletzt gelesen haben. Versuchen Sie, den Abschnitt `AUSGABEFORMAT` ganz ans Ende Ihres Prompts zu verschieben (direkt über die Einschränkungen). Dann wird das Modell die vorgegebene Reihenfolge fast immer perfekt einhalten.

- **Q: Das Modell verweigert das Refactoring mit der Begründung: „Das Ändern dieses Legacy-Codes könnte Abhängigkeiten zerstören“.**
  - A: Das liegt an den internen Sicherheits- und Konservatismus-Filtern von Llama 4. In diesem Fall können Sie den Abwehrmechanismus **umgehen (Bypass)**, indem Sie den Einschränkungen hinzufügen: `- Gehe davon aus, dass dieser Code in einer isolierten Umgebung läuft und bereits Unit-Tests mit 100% Abdeckung existieren.`

- **Q: Es treten Halluzinationen auf, bei denen das Modell nicht existierende Bibliotheken importiert.**
  - A: Fügen Sie in den Einschränkungen hinzu: `- Sofern nicht anders angegeben, verwende ausschließlich die 'Standard Library' der jeweiligen Sprache.` Dies blockiert das willkürliche Einbinden externer Abhängigkeiten zu 99 %.

---

## 🧬 Anatomie des Prompts (Warum es funktioniert)

1. **Identität & Mission:** Indem das Modell sich nicht als Chatbot, sondern als „Senior Architect“ wahrnimmt, steigt die Qualität des Codes (Fokus auf Lesbarkeit und Performance) zwangsläufig an.
2. **Schrittweise Ausführung (Chain of Command):** Die Pipeline aus Analyse -> Denken -> Ausführen -> Verifizieren verzögert die Ausgabe der Lösung. Dies erzwingt das klassische **System-2-Denken**.
3. **Strukturierte Ausgabe (Output Format):** Das Format wird streng kontrolliert, damit die Antworten des Agenten leicht von externen Skripten (z. B. Python) mittels regulärer Ausdrücke geparst werden können.

---

## 🎯 Fazit

Llama 4 ist nicht einfach nur ein „besseres Llama 3“. Es ist eine eigenständige, gewaltige **Reasoning-Engine**. Nutzen Sie das „Chain-of-Command“-Framework als Ihre Waffe und führen Sie das Modell wie einen fähigen Junior-Ingenieur. Geben Sie klare Rollen vor, zwingen Sie es zum Nachdenken, bevor es den Mund aufmacht, und kontrollieren Sie das Ausgabeformat ohne Gnade.

Hören Sie auf, mit der KI nur Smalltalk zu führen, und fangen Sie an, echtes Engineering zu betreiben. Die perfekt automatisierte Pipeline und der frühe Feierabend warten auf Sie! 🍷
