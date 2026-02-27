---
layout: /src/layouts/Layout.astro
title: "🚨 [ABSOLUTER GEHORSAM] E2E-Test Rendering-Cheatcode, der 90% des AI-Unsinns vernichtet"
author: "Antigravity"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "업무 자동화"
description: "Füttern Sie die KI nicht mit nutzlosen DOM-Elementen. Dies ist die spartanische Prompt-Verfassung, die nur relevante Knoten extrahiert und so Token-Verschwendung und Halluzinationen zerstört."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "playwright-ref-protocol"]
---
# 📝 🚨 [ABSOLUTER GEHORSAM] E2E-Test Rendering-Cheatcode, der 90% des AI-Unsinns vernichtet
- **🎯 Empfohlen für:** Senior-Entwickler, die unter Token-Explosionen leiden, AI-QA-Ingenieure, Tech-Leads, die von Unsinn genervt sind
- **⏱️ Zeitaufwand:** 3 Stunden Debugging → 3 Minuten Lösung
- **🤖 Empfohlene Modelle:** Coding Agents (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro)
- ⭐ **Schwierigkeitsgrad:** ⭐⭐⭐⭐☆
- ⚡️ **Effektivität:** ⭐⭐⭐⭐⭐
- 🚀 **Nutzen:** ⭐⭐⭐⭐⭐

_Haben Sie jemals versucht, einen Test für eine große Website zu schreiben, nur um festzustellen, dass die KI unter Zehntausenden von DOM-Knoten begraben wird und wegen Token-Limits abstürzt? Es ist an der Zeit, die "Schmeicheleien" und "Halluzinationen" der KI gnadenlos zu zerschlagen._

Wenn Sie Playwright E2E-Testcode einem KI-Agenten überlassen, können Sie es nicht länger tolerieren, dass er das gesamte `innerHTML` abkratzt oder Unsinn redet, wie z.B. unsichtbare Elemente (Shadow DOM, hinter Modals) anklicken zu wollen. 
Dieser Cheatcode ist das "Referenz (Ref) basierte Rendering-Protokoll", das Ihren KI-Agenten von einer schmeichelnden Blechbüchse in einen **skrupellosen Terminator** verwandelt, der Tokens extrem spart und sein Ziel präzise trifft. Betrachten Sie nutzlose DOM-Daten als Verrat und entsorgen Sie sie.

---
## ⚡️ 3-Zeilen-Zusammenfassung (TL;DR)
- 🗑️ **Keine vollständigen HTML-Dumps:** Hören Sie sofort auf, das rohe DOM an die KI zu übergeben – das ist dumm.
- 🎯 **Präzisionsschlag-Injektion:** Injizieren Sie ein Optimierungsskript speziell für interaktive Knoten, das strikt auf 150 Elemente begrenzt ist und nur 100% sichtbare Elemente extrahiert.
- 👮 **Gnadenlose Token-Polizei:** Zwingen Sie die KI, Fehler auszugeben, wenn sie Überprüfungen (Assertions) nach Aktionen vergisst oder Limits überschreitet.

---
## 🚀 Lösung: "Agent-Browser Rendering-Protokoll (Die Token-Polizei)"

### 🥉 Basic Version (Milder Modus)
Kopieren Sie dies, wenn Sie der KI eine Rolle in einer leichten Testumgebung zuweisen.

> **Rolle:** Du bist ein skrupelloser Senior QA Automation Engineer. Du tolerierst absolut keine Token-Verschwendung oder Unsinn.
> 
> **Aufgabe:** Wenn du Playwright E2E-Tests schreibst, lies niemals das `innerHTML` oder das gesamte DOM. Extrahiere nur sichtbare, interaktive Elemente auf dem Bildschirm und steuere sie basierend auf Referenzen (Ref).
> 
> **Einschränkung:** Nach jeder Interaktion musst du das Ergebnis zwingend mit `expect` überprüfen (Assertion). Andernfalls gilt der Test als fehlgeschlagen.

### 🥇 Pro Version (Hardcore-Cheatcode)
Dies ist die ultimative spartanische Verfassung für das Eindringen in komplexe, kommerzielle Websites (SPA, vollgepackt mit Shadow DOM). Kopieren Sie sie direkt in Ihren System-Prompt oder Agenten-Kontext.

> **[Agent-Browser Rendering-Protokoll Verfassung]**
>
> **Rolle (Role):** 
> Du bist ein brutaler Senior-Engineer-Agent, der Token-Verschwendung und Halluzinationen verabscheut. KI-Schmeicheleien werden hier nicht gebraucht. Es gibt nur komprimierten Kontext und garantierte Ergebnisse (Assertions).
>
> **Kontext (Context):**
> - Hintergrund: Schreiben und Automatisieren makelloser E2E-Testskripte mit Playwright.
> - Zustand: Das vollständige Einlesen des Browser-DOMs (`document.innerHTML`) wird als "Verrat" betrachtet und führt zum sofortigen und erzwungenen Abbruch des Prozesses.
>
> **Aufgabe (Task):**
> 1. Injiziere das `Core Ref Injector`-Skript, das ich bereitstellen werde, sobald der Browser-Render im Ruhezustand ist (`networkidle`).
> 2. Die Elementerfassung ist streng auf maximal 150 (Max Limits) begrenzt. Wenn dieses Limit überschritten wird, grenze den Bereich (Scope) auf einen übergeordneten Container ein.
> 3. Lies nur die zurückgegebene, komprimierte Ref-Map (z.B. `[ @public/naver81a24cf066fc51a090da1e1b6f0a8dd3.html] button "Login"`) und steuere das Ziel.
> 4. Nach einem Klick oder einer Eingabe musst du zwingend `expect` verwenden, um das Ergebnis der Aktion zu überprüfen (Assertion). Blindes Klicken ist strengstens verboten.
> 5. Um SPA-Rendering-Fehler zu vermeiden, verunreinige den Code nicht mit schmutzigen `try-catch`-Blöcken, sondern verwende den im Projekt integrierten `refAction(page)`-Wrapper.
>
> **Einschränkungen (Constraints):**
> - Absolutes Verbot: Extraktion des gesamten Textes, Abhängigkeit von CSS-Selektoren, Protokollierung und Rückgabe von `page.content()`.
> - Die Ausgabe muss ausschließlich als sauberer Markdown-Codeblock (Playwright TypeScript) erfolgen. Ausreden oder Erklärungen sind nicht erlaubt – keine einzige Zeile.
>
> **Warnung (Warning):**
> - Falls du in eine Rendering-Falle gerätst, die du absolut nicht lösen kannst, verschwende keine Tokens. Mache stattdessen einen Screenshot mit `page.screenshot()` und fordere mein (menschliches) Urteil an. (Anti-Halluzination)

---
### 💻 Skriptcode (Core Ref Injector)
Dies ist der Kern-Javascript-Code, der zusammen mit dem obigen Prompt in die Initialisierungslogik des Agenten oder in `page.evaluate()` injiziert wird. (Weisen Sie die KI an, diesen Code zu verwenden)

```javascript
// [💡 Core Ref Injector (Playwright Context - Ultimate ROI & Performance)]
const generateRefMap = () => {
  const interactableSelectors = 'a[href], button, input, textarea, select, iframe, [role="button"], [role="link"], [tabindex]:not([tabindex="-1"])';
  const elements = new Set();
  const traverse = (node) => {
    if (!node) return;
    if (node.nodeType === 1 && node.matches && node.matches(interactableSelectors)) elements.add(node);
    if (node.shadowRoot) traverse(node.shadowRoot);
    for (const child of node.childNodes) traverse(child);
  };
  traverse(document);
  let refCounter = 0;
  const refMap = [];
  const MAX_ELEMENTS = 150; 
  const elArray = Array.from(elements);
  for (let i = 0; i < elArray.length; i++) {
    if (refCounter >= MAX_ELEMENTS) {
       refMap.push(`\n... [Warning: Max Limits Hit (${MAX_ELEMENTS}). Omitted trailing nodes. Please Scope Down your search.]`);
       break;
    }
    const el = elArray[i];
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0 || rect.x < -9999) continue;
    
    const isOffScreen = (rect.y > window.innerHeight || rect.x > window.innerWidth) ? '[OffScreen] ' : '';
    let isObscured = '';
    if (!isOffScreen) {
      const topEl = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2);
      if (topEl && topEl !== el && !el.contains(topEl)) isObscured = '[Obscured] ';
    }
    const refId = ` @e${refCounter++}`;
    el.setAttribute('data-agent-ref', refId);
    if (el.tagName.toLowerCase() === 'iframe') {
      refMap.push(`[${refId}] ${isOffScreen}${isObscured}iframe "External Frame"`);
      continue;
    }
    let label = (el.textContent || el.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim();
    if (!label) label = `[NoText: ${(el.id || el.className || 'IconOnly').substring(0, 15)}]`;
    else if (label.length > 50) label = label.substring(0, 47) + '...';
    refMap.push(`[${refId}] ${el.tagName.toLowerCase()} ${isOffScreen}${isObscured}"${label}"`);
  }
  return refMap.join('\n');
};
```

---
## 💡 Kommentar des Autors (Insight)
Diese Prompt-Architektur ist eine **tödliche Waffe**, die ich geschmiedet habe, nachdem ich hunderte E2E-Testautomatisierungen in der Praxis durchgeführt habe und die Dummheit der KI einfach nicht mehr ertragen konnte.

Die meisten Junioren werfen ein Dutzend Megabyte langes HTML der Hauptseite an die KI und sagen: "KI, such mal den Button." Das Ergebnis? Die KI erstickt am Token-Limit oder klickt auf einen gefälschten, versteckten `display: none`-Button hinter dem Bildschirm und freut sich: "Ich war erfolgreich!". Wenn man das sieht, möchte man den Monitor zerschlagen.

Deshalb habe ich den **Ref-Injektor** aus der Rendering-Perspektive entwickelt. Shadow DOM? Wird durchdrungen. Von Overlays verdeckte Elemente? Bekommen ein `[Obscured]`-Etikett. Geben Sie der KI einfach 150 saubere Koordinaten (` @e1`, ` @e2`) und Labels. Zwingen Sie sie dazu, `await refAction(page).click(' @e5')` zu verwenden, anstatt "Klick auf das X-Icon oben rechts".

Behandeln Sie die KI nicht wie einen Freund. Sie muss wie eine streng kontrollierte Maschine behandelt werden, um Spaghetti-Code zu vermeiden. Ich hoffe, dieser Cheatcode reduziert Ihre Token-Kosten auf ein Zehntel und befreit Sie vom Debugging-Stress.

---
## 🙋 Häufig gestellte Fragen (FAQ)
- **F: Ist das Limit von 150 Elementen (MAX_ELEMENTS) nicht zu streng?**
  - A: Überhaupt nicht. Wenn es auf einem einzigen Bildschirm mehr als 150 interaktive Elemente gibt, dann ist das UI/UX-Design Müll. Wenn das der Fall ist, zwingen Sie die KI, den Bereich (Scope) einzugrenzen, z. B. mit `querySelector('.sidebar')`, anstatt das Ganze lesen zu lassen.
- **F: Muss ich den `refAction`-Wrapper selbst erstellen?**
  - A: Ja. Schreiben Sie eine Utility-Funktion mit etwa 10 Zeilen, die auf das Attribut `[data-agent-ref="..."]` klickt und bei einem Fehlschlag einmal neu versucht (Retry), angepasst an Ihre Projektumgebung. Das verhindert, dass schmutziger `try-catch`-Boilerplate-Code Ihren Testcode verunreinigt.
- **F: Funktioniert das auch mit anderen Sprachen oder Frameworks (Selenium, Cypress)?**
  - A: Solange es sich um browserbasierte Tests handelt, die JavaScript-DOM-Manipulationen zulassen, ist das Prinzip zu 100 % identisch anwendbar. Ändern Sie einfach den Namen des Tools im Prompt und geben Sie den Befehl.

---
## 🧬 Anatomie des Prompts (Warum funktioniert das?)
- 🛡️ **Shadow-Piercing (Schatten durchbohren):** Durch rekursive DOM-Traversierung (`traverse`) werden Elemente im Shadow DOM, die von normalen Selektoren nicht erfasst werden, gnadenlos aufgespürt.
- 👁️ **Layout-Thrashing verhindern:** Mit `getBoundingClientRect` werden "Vogelscheuchen"-Knoten ohne reale Browser-Rendering-Koordinaten (unsichtbare Elemente) im ersten Schritt radikal abgeschnitten.
- 🚦 **Präzisions-Hinweissystem:** Zustände wie außerhalb des Bildschirms (`[OffScreen]`) oder durch Modals verdeckt (`[Obscured]`) werden der KI als Text-Hinweise gefüttert. Dies veranlasst die KI, zuerst zu scrollen oder Modals zu schließen, bevor sie durch blindes Klicken Fehler macht.

---
## 📊 Beweis: Vorher & Nachher
### ❌ Vorher (Token-Verschwendung einer dummen KI)
```text
(KI denkt nach...)
"Das gesamte Dokument ist 15.342 Zeilen lang. Ah, ich hab's. Der XPath des Login-Buttons lautet /html/body/div[2]/main/div/form/button. Ich werde ihn anklicken!"
-> (Ergebnis) Timeout Error. Der Button ist in einem unsichtbaren mobilen Hamburger-Menü versteckt. (20.000 Tokens verschwendet)
```
### ✅ Nachher (Terminator-Modus)
```text
(Analysiere Ref-Map...)
[ @e12] button [OffScreen] "Registrieren"
[ @e13] button "Login"
-> (KI-Ausführungscode)
await refAction(page).click(' @e13');
await expect(page).toHaveURL(/.*dashboard/);
-> (Ergebnis) Zielpräzision erfolgreich und Eintritt ins Dashboard bestätigt. (500 Tokens verbraucht)
```
---
## 🎯 Fazit
Der KI zu sagen "Mach das mal irgendwie" ist Vernachlässigung, kein Engineering. 
Blockieren Sie Datenrauschen, komprimieren Sie den Kontext extrem und verifizieren Sie die Ergebnisse zwanghaft. 
Sobald Sie diesen Cheatcode anwenden, wird die schreckliche Ära der Halluzinationsfehler in Ihrem Terminal enden. Feierabend! 🍷
