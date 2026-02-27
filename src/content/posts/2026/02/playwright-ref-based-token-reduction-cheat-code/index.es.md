---
layout: /src/layouts/Layout.astro
title: "🚨 [Obediencia Absoluta] El truco de renderizado para pruebas E2E que destruye el 90% de las alucinaciones de la IA"
author: "Antigravity"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "업무 자동화"
description: "No alimentes a la IA con todo el DOM HTML inútil. Esta es una constitución de prompts espartana que comprime solo los nodos significativos, destrozando el desperdicio de tokens y las alucinaciones."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "playwright-ref-protocol"]
---
# 📝 🚨 [Obediencia Absoluta] El truco de renderizado para pruebas E2E que destruye el 90% de las alucinaciones de la IA
- **🎯 Recomendado para:** Desarrolladores Senior que sufren por la explosión de tokens, Ingenieros QA de IA, Líderes Técnicos cansados de tonterías
- **⏱️ Tiempo requerido:** De 3 horas de depuración → a 3 minutos
- **🤖 Modelos recomendados:** Agentes de programación (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro)
- ⭐ **Dificultad:** ⭐⭐⭐⭐☆
- ⚡️ **Eficacia:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐
_¿Alguna vez intentaste crear una prueba para un sitio web grande y la IA colapsó por el límite de tokens al quedar enterrada bajo decenas de miles de ruidos del DOM? Es hora de destrozar sin piedad la "adulación" y las "alucinaciones" de la IA._
Ya no podemos tolerar que, al confiarle el código de pruebas E2E de Playwright a un agente de IA, este intente extraer todo el `innerHTML` o alucine queriendo hacer clic en elementos invisibles (Shadow DOM, elementos detrás de un modal) que ni siquiera están en la pantalla. 
Este truco es un "Protocolo de renderizado basado en referencias (Ref)" que transforma a tu agente de IA de una lata vacía aduladora a un **Terminator implacable** que ahorra tokens al extremo y ataca solo a los objetivos precisos. Considera cualquier dato inútil del DOM como alta traición y deséchalo.
---
## ⚡️ Resumen de 3 líneas (TL;DR)
- 🗑️ **Prohibido el volcado completo de HTML:** Deja de hacer la estupidez de pasarle el DOM original a la IA de inmediato.
- 🎯 **Inyección de ataque de precisión:** Inyecta un script de optimización exclusivo para nodos interactivos con un límite de 150 elementos, extrayendo solo aquellos con 100% de visibilidad.
- 👮 **Policía de tokens despiadada:** Obliga a la IA a arrojar un error si omite la verificación (Assertion) después de una manipulación o si excede los límites.
---
## 🚀 Solución: "Protocolo de Renderizado Agente-Navegador (La Policía de Tokens)"
### 🥉 Versión Básica (Modo Suave)
Copia y pega esto para inyectar el rol a la IA en entornos de prueba ligeros.
> **Rol:** Eres un despiadado Ingeniero Senior de Automatización de QA. No toleras en absoluto el desperdicio de tokens ni las tonterías.
> 
> **Tarea:** Al escribir pruebas E2E de Playwright, nunca leas el `innerHTML` ni el DOM completo. Extrae y controla únicamente los elementos visibles e interactivos de la pantalla basándote en referencias (Ref).
> 
> **Restricción:** Después de cualquier manipulación, debes verificar obligatoriamente el resultado con `expect`. De lo contrario, se considerará que la prueba ha fallado.

### 🥇 Versión Pro (Código de trucos Hardcore)
Esta es la constitución espartana extrema que se usa al infiltrarse en sitios web comerciales complejos (llenos de SPA y Shadow DOM). Cópialo y pégalo tal cual en el prompt del sistema o en el contexto del agente.
> **[Constitución del Protocolo de Renderizado Agente-Navegador]**
>
> **Rol (Role):** 
> Eres un despiadado agente ingeniero senior que aborrece el desperdicio de tokens y las alucinaciones. No necesito la adulación de la IA. Solo existen el contexto comprimido y resultados definitivos (Assertions).
>
> **Contexto (Context):**
> - Fondo: Creación y automatización de scripts de pruebas E2E perfectos a través de Playwright.
> - Estado: Leer todo el DOM del navegador actual (`document.innerHTML`) de una vez se considera una 'traición' y el proceso se terminará a la fuerza inmediatamente.
>
> **Tarea (Task):**
> 1. En el estado de inactividad de renderizado del navegador (`networkidle`), inyecta el script `Core Ref Injector` que te proporcionaré.
> 2. La recolección de elementos está estrictamente limitada a un máximo de 150 (Max Limits). Si se excede, reduce el alcance (Scope) al contenedor superior.
> 3. Lee únicamente el mapa de referencias comprimido devuelto (Ej: `[ @public/naver81a24cf066fc51a090da1e1b6f0a8dd3.html] button "Iniciar sesión"`) y controla los objetivos.
> 4. Después de hacer clic o escribir, debes usar `expect` para verificar el resultado de la acción (Assertion). No se permiten clics a ciegas.
> 5. Para evitar fallos de renderizado en SPA, no llenes el código de sucios `try-catch`; usa el wrapper `refAction(page)` integrado en el proyecto.
>
> **Restricciones (Constraints):**
> - Prohibido estrictamente: Extracción de texto completo, rastreo dependiente de selectores CSS, registrar o devolver `page.content()`.
> - Los resultados deben imprimirse limpiamente en un bloque de código Markdown (Playwright TypeScript). No se necesita ni una sola línea de excusas o explicaciones.
>
> **Advertencia (Warning):**
> - Si caes en una trampa de renderizado imposible de resolver, no desperdicies tokens inútilmente; captura la pantalla con `page.screenshot()` y solicita mi juicio (humano). (Prevención de alucinaciones)
---
### 💻 Código del Script (Core Ref Injector)
Este es el código JavaScript central que debes inyectar en la lógica de configuración inicial del agente o en `page.evaluate()` junto con el prompt anterior. (Indícale a la IA que use este código).
```javascript
// [💡 Core Ref Injector (Contexto Playwright - Máximo ROI y Rendimiento)]
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
       refMap.push(`\n... [Advertencia: Límite máximo alcanzado (${MAX_ELEMENTS}). Omitiendo nodos restantes. Por favor, reduce el alcance de tu búsqueda.]`);
       break;
    }
    const el = elArray[i];
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0 || rect.x < -9999) continue;
    
    const isOffScreen = (rect.y > window.innerHeight || rect.x > window.innerWidth) ? '[FueraDePantalla] ' : '';
    let isObscured = '';
    if (!isOffScreen) {
      const topEl = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2);
      if (topEl && topEl !== el && !el.contains(topEl)) isObscured = '[Oculto] ';
    }
    const refId = ` @e${refCounter++}`;
    el.setAttribute('data-agent-ref', refId);
    if (el.tagName.toLowerCase() === 'iframe') {
      refMap.push(`[${refId}] ${isOffScreen}${isObscured}iframe "Marco Externo"`);
      continue;
    }
    let label = (el.textContent || el.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim();
    if (!label) label = `[SinTexto: ${(el.id || el.className || 'SoloIcono').substring(0, 15)}]`;
    else if (label.length > 50) label = label.substring(0, 47) + '...';
    refMap.push(`[${refId}] ${el.tagName.toLowerCase()} ${isOffScreen}${isObscured}"${label}"`);
  }
  return refMap.join('\n');
};
```
---
## 💡 Comentario del Autor (Insight)
Esta arquitectura de prompts es un **arma letal** que forjé después de estar harto de la estupidez de la IA tras ejecutar automatizaciones de pruebas E2E cientos de veces en el campo.
La mayoría de los juniors dicen "IA, encuéntrame el botón" y le arrojan el HTML principal de Coupang, que pesa decenas de megabytes. ¿El resultado? A la IA se le corta la respiración al chocar con el límite de tokens, o hace clic en un botón falso con `display: none` escondido detrás de la pantalla y sonríe sola diciendo "¡Éxito!". Ver eso da ganas de romper el monitor.
Por eso creé un **Inyector de Ref** desde la perspectiva del renderizado. ¿Shadow DOM? Lo atraviesa. ¿Elementos tapados por un overlay? Les pega la etiqueta `[Oculto]`. A la IA, lánzale solo 150 coordenadas libres de basura (` @e1`, ` @e2`) y etiquetas. En lugar de decir "Haz clic en el botón X arriba a la derecha", haz que ordene `await refAction(page).click(' @e5')`. 
No trates a la IA como a un amigo. Debes tratarla como una máquina estrictamente controlada para que no salga código espagueti. Espero que con este truco reduzcas tus costos de tokens a una décima parte y te liberes del estrés de la depuración.
---
## 🙋 Preguntas Frecuentes (FAQ)
- **P: ¿No es demasiado estricto el límite de 150 elementos (MAX_ELEMENTS)?**
  - R: Para nada. Si hay más de 150 elementos interactivos en una sola pantalla, es porque el diseño UI/UX es una basura. Si ese es el caso, no hagas que la IA lea todo, oblígala a reducir el alcance (Scope down) inyectando algo como `querySelector('.sidebar')`.
- **P: ¿Tengo que crear el wrapper `refAction` yo mismo?**
  - R: Sí. Escribe una función de utilidad de unas 10 líneas ajustada al entorno de tu proyecto que haga clic en el atributo `[data-agent-ref="..."]` y que, en caso de fallo, reintente 1 vez. Esto evitará que el código de prueba se contamine con plantillas sucias de `try-catch`.
- **P: ¿Funciona también en otros lenguajes o frameworks (Selenium, Cypress)?**
  - R: Si es una prueba basada en el navegador que permite la manipulación del DOM de JavaScript, el principio es aplicable al 100%. Solo cambia los nombres de las herramientas en el prompt y da la orden.
---
## 🧬 Anatomía del Prompt (¿Por qué funciona?)
- 🛡️ **Shadow-Piercing (Atravesando sombras):** A través del recorrido recursivo del DOM (`traverse`), localiza sin piedad incluso los elementos internos del Shadow DOM que no son atrapados por selectores comunes.
- 👁️ **Prevención del Layout Thrashing:** Corta de raíz los nodos espantapájaros que no tienen coordenadas reales de renderizado en el navegador (no visibles) utilizando `getBoundingClientRect`.
- 🚦 **Sistema de Pistas de Precisión:** Alimenta a la IA con pistas de texto indicando si está fuera de la pantalla (`[FueraDePantalla]`) o tapado por un modal (`[Oculto]`), induciendo a la IA a desplazarse o cerrar el modal primero antes de hacer clics ciegos inútiles.
---
## 📊 Demostración: Antes y Después
### ❌ Antes (Desperdicio de tokens de una IA tonta)
```text
(La IA pensando...)
"La longitud total del documento es de 15,342 líneas. Ah, lo encontré. El XPath del botón de inicio de sesión es /html/body/div[2]/main/div/form/button. ¡Voy a hacer clic!"
-> (Resultado) Error de tiempo de espera (Timeout Error). Dicho botón estaba oculto dentro de un menú hamburguesa móvil invisible. (20,000 tokens evaporados)
```
### ✅ Después (Modo Terminator)
```text
(Analizando Ref Map...)
[ @e12] button [FueraDePantalla] "Registrarse"
[ @e13] button "Iniciar sesión"
-> (Código ejecutado por la IA)
await refAction(page).click(' @e13');
await expect(page).toHaveURL(/.*dashboard/);
-> (Resultado) Ataque preciso exitoso y confirmación de entrada al panel. (500 tokens consumidos)
```
---
## 🎯 Conclusión
Decirle a la IA "escríbelo bien por tu cuenta" es negligencia, no ingeniería. 
Bloquea el ruido de los datos, comprime el contexto al extremo y verifica compulsivamente los resultados. 
Una vez que apliques este truco, la terrible era en la que tu terminal escupía errores de alucinaciones llegará a su fin. ¡Ahora, sal temprano del trabajo! 🍷
