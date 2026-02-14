---
title: "Zero-Shot vs. Few-Shot Learning: Wann Beispiele sinnvoll sind"
date: "2026-02-15"
description: "Ein Leitfaden, wann Zero-Shot-Prompting gegenüber Few-Shot-Prompting für optimale LLM-Leistung zu verwenden ist."
---

In der Welt der großen Sprachmodelle (LLMs) ist das _Wie_ genauso wichtig wie das _Was_. Zwei der grundlegendsten Techniken im Prompt Engineering sind **Zero-Shot** und **Few-Shot** Learning. Den Unterschied zu verstehen – und zu wissen, wann man welche Technik anwendet – kann die Qualität Ihrer KI-Interaktionen erheblich steigern.

## Was ist Zero-Shot Learning?

Beim **Zero-Shot** Prompting bitten Sie das Modell, eine Aufgabe auszuführen, ohne konkrete Beispiele für die gewünschte Ausgabe zu liefern. Sie verlassen sich vollständig auf das vortrainierte Wissen des Modells und seine Fähigkeit, natürlichsprachliche Anweisungen zu verstehen.

**Beispiel:**

> "Übersetze den folgenden Satz ins Spanische: 'Das Wetter ist heute schön.'"

Hier haben Sie dem Modell nicht gezeigt, _wie_ es übersetzen soll; Sie haben ihm nur gesagt, _dass_ es übersetzen soll.

### Wann Zero-Shot verwenden:

- **Allgemeinwissensaufgaben:** Standardübersetzungen, Zusammenfassungen oder die Beantwortung von Sachfragen.
- **Einfache Anweisungen:** Wenn die Aufgabe unkompliziert ist und kein spezifisches, komplexes Format erfordert.
- **Kreatives Schreiben:** Wenn das Modell offen und weniger durch ein starres Muster eingeschränkt sein soll.
- **Erste Tests:** Oft ist es am besten, mit Zero-Shot zu beginnen, um zu sehen, wie gut das Modell "out-of-the-box" funktioniert, bevor man Komplexität hinzufügt.

## Was ist Few-Shot Learning?

Beim **Few-Shot** Prompting (oft "In-Context Learning" genannt) geben Sie dem Modell vor der eigentlichen Anfrage einige Beispiele (Shots) für die Eingabe und die gewünschte Ausgabe. Diese Beispiele dienen dem Modell als Muster.

**Beispiel:**

> Übersetze Englisch in spezifischen Piraten-Slang.
>
> Englisch: "Hello, how are you?"
> Pirat: "Ahoy matey, how be ye fairin'?"
>
> Englisch: "Where is the bathroom?"
> Pirat: "Where be the head?"
>
> Englisch: "I would like some water."
> Pirat:

Durch das Sehen der vorherigen Paare versteht das Modell nicht nur, dass es übersetzen muss, sondern auch den spezifischen **Tonfall** und **Stil**, der erforderlich ist.

### Wann Few-Shot verwenden:

- **Komplexe Formatierung:** Wenn Sie die Ausgabe in einer bestimmten Struktur (z. B. JSON, CSV oder einem spezifischen Dokumentenstil) benötigen, die das Modell allein mit Anweisungen nicht erstellen kann.
- **Nuancierter Stil/Tonfall:** Beim Nachahmen einer bestimmten Stimme, Markenidentität oder eines sprachlichen Stils.
- **Schwierige Logik:** Bei Denkaufgaben kann das Bereitstellen von Beispielen für die "Gedankenkette" (Chain of Thought) helfen, das Modell zur richtigen Schlussfolgerung zu führen.
- **Neue oder benutzerdefinierte Konzepte:** Wenn Sie erfundene Wörter oder spezifische Fachterminologie verwenden, definieren Beispiele diese im Kontext.

## Der Kompromiss (Trade-off)

Während Few-Shot bei komplexen Aufgaben oft eine höhere Genauigkeit liefert, hat es seinen Preis: das **Kontextfenster**.

Jedes Beispiel, das Sie bereitstellen, verbraucht Token. In sehr langen Gesprächen oder Dokumenten kann das Füllen des Prompts mit zu vielen Beispielen den Platz einschränken, der für den eigentlichen Inhalt zur Verfügung steht, den Sie verarbeiten möchten.

## Fazit

Beginnen Sie mit **Zero-Shot**. Moderne Modelle wie GPT-4 und Claude 3 sind ohne Beispiele bemerkenswert fähig. Wenn das Modell Ihrem Format oder Stil nicht folgt, rüsten Sie auf **Few-Shot** auf, indem Sie 1-3 klare, hochwertige Beispiele hinzufügen. Dieser iterative Ansatz stellt sicher, dass Sie Effizienz und Leistung in Einklang bringen.
