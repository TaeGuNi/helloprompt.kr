---
layout: /src/layouts/Layout.astro
title: "💣 Cheat Sheet de pruebas hardcore: Convierte a tu IA en un Chaos Monkey de Netflix"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Automatización"
description: "¿Cansado del código 'perfecto' de la IA? Inyecta la filosofía Chaos Monkey de Netflix con este prompt para forzar recuperación ante desastres y excepciones."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "chaos-monkey-testing"]
---

## 📝 💣 Cheat Sheet de pruebas hardcore: Convierte a tu IA en un Chaos Monkey de Netflix

- **🎯 Recomendado para:** Desarrolladores senior hartos de que la IA solo escriba el camino feliz (Happy Path) y juniors que luchan solos sin un mentor que les exija calidad.
- **⏱️ Tiempo ahorrado:** De pasar toda la noche depurando → a solo 1 minuto.
- **🤖 Rendimiento óptimo:** Claude 3.5 Sonnet, GPT-4o (los modelos mediocres no pueden manejar estas reglas tan estrictas).

- ⭐ **Dificultad:** ⭐⭐⭐⭐☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"El error fatal que cometen la mayoría de los desarrolladores al delegar código de prueba a la IA es la ingenua frase 'haz que funcione'. Esa simple petición es la que provoca desastres catastróficos a las 3 de la mañana el día del despliegue."_

¿Qué esperamos realmente cuando le pedimos a una IA que escriba código de prueba? Esperamos un manejo perfecto de casos borde (edge cases), una gestión de errores meticulosa y un escudo sólido que evite que el sistema colapse ante cualquier excepción. Sin embargo, la realidad suele ser un infierno. Ante la instrucción "escribe código de prueba", la IA genera más de 200 líneas de un flujo normal (**Happy Path**) impecable, como si fuera una planta de invernadero. Asume un utopía hermosa donde todas las API responden en menos de un segundo con un `200 OK`, la base de datos nunca se desconecta y las fugas de memoria no existen.

En el momento en que este código de "sí señor" sin alma se despliega en producción, comienza la verdadera pesadilla. En el mundo real, no existen las API externas que respondan al 100% ni las conexiones de base de datos eternas. Los **timeouts de red** por picos de tráfico repentinos, los errores `500 Internal Server Error` de servicios de terceros o los fallos temporales en la infraestructura de la nube ocurren en cualquier momento. En esos casos, el bonito código de prueba que escribió la IA no es más que papel mojado. Al final, serás tú quien reciba la alerta de PagerDuty un viernes por la noche o un sábado a las 3 a. m., despertando para depurar un código desastroso entre lágrimas de frustración. Esto no es automatización; es plantar una bomba de tiempo dentro de tu sistema.

Al introducir la IA en su flujo de trabajo, muchos desarrolladores caen en la fantasía de pensar: "Ahora la inteligencia artificial se encargará de escribir todos esos tediosos tests por mí". Pero al abrir los resultados, la decepción es total. El código de la IA parece funcionar bien superficialmente, pero si rascas un poco, está lleno de fallos críticos. No hay rastro de reflexión sobre los **Edge Cases** y el manejo de excepciones suele resolverse con un simple `console.log(error)`. Es como pintar una fachada lujosa en un edificio sin estructura. Ante un poco de viento o lluvia —es decir, un comportamiento inesperado del usuario o un ligero retraso en un servidor externo—, todo el sistema se derrumba como un dominó.

Lo más terrorífico es que este código de "falso éxito" muestra un 100% 🟢 (Verde) en las herramientas de cobertura de tests. Los informes de SonarQube o Jest no envían ninguna advertencia. La gerencia y los líderes de equipo creen erróneamente que se ha construido una defensa perfecta, mientras la bomba queda colgada directamente en la espalda del responsable técnico. El día de un evento con gran tráfico, si la API de una pasarela de pago se retrasa solo 3 segundos, el pool de conexiones de la base de datos se agota y se produce una reacción en cadena que tumba todo el servicio. Solo entonces nos damos cuenta: "Confiamos demasiado en el código de flujo normal que nos dio la IA".

Para romper este círculo vicioso, debemos cambiar radicalmente la forma en que escribimos los prompts. No debemos dar libertad a la IA. Debemos imponer **restricciones explícitas (Constraints)** y asignar escenarios de desastre extremos. Al igual que el framework **'Chaos Monkey'** de Netflix, que apaga aleatoriamente instancias de servidores en producción para probar la resiliencia del sistema, nosotros debemos inyectar en la IA el propósito destructivo de intentar colapsar su propio código. Necesitamos comandos firmes que digan: "Las situaciones normales no importan. Haz que esta función falle de cualquier manera y demuestra cómo el sistema se recupera con elegancia de ese fallo".

Este **prompt de cheat sheet para pruebas hardcore** ha sido perfeccionado analizando innumerables documentos de autopsias de fallos (Post-Mortems) y comprimiendo los escenarios de recuperación ante desastres (Disaster Recovery) en los que piensan los mejores ingenieros SRE (Site Reliability Engineering) de Silicon Valley. Está diseñado para forzar el mockeo (Mocking) de todas las situaciones maliciosas que llevan al desarrollador al límite: timeouts, fugas de memoria, bucles infinitos y deadlocks. Usa este conjuro mágico para quitarle la máscara de obediencia a la IA y transforma tu sistema en una arquitectura verdaderamente **antifrágil**, capaz de resistir cualquier tormenta.

---

## 📊 Evidencia: Resultados contundentes (Before & After)

### ❌ Before (El dolor que sufríamos)

Resultado al usar un prompt genérico: "Escribe el código de prueba para la función `fetchUser` que obtiene información del usuario". Solo obtenemos datos falsos sin sentido y validaciones de respuesta `200 OK` inútiles.

```text
Resultado:
- Test de parseo de texto en respuesta 200 OK (Pass)
- Test de lanzamiento de error si no hay ID (Pass)
... (Una letanía de lógica global.fetch sobrescrita de forma sucia)
```

### ✅ After (Transformación total)

Tras aplicar el cheat sheet hardcore de Chaos Monkey, la IA genera escenarios de desastre despiadados que ponen a prueba los límites del sistema en un entorno perfectamente aislado.

```text
Resultado:
- [Setup de MSW completado] Escritura de código defensivo simulando retraso en comunicación con API externa (Timeout 5000ms).
- Validación de lógica de reintento (Retry) 3 veces y retorno elegante de UI de respaldo (Fallback) ante error HTTP 500.
- Validación del estado de recolección de basura (sin fugas de memoria) y limpieza del servidor MSW tras finalizar el test.
- El test de flujo normal (Happy Path) se condensa en un único caso.
```

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **Solo 20% de Happy Path:** Minimiza los escenarios de funcionamiento normal y concentra el 80% de los tests en la validación de manejo de excepciones y recuperación ante desastres.
2. **Simulación de desastres forzada:** Obliga al mockeo de fallos críticos como timeouts de red, errores HTTP 500 y desconexión de bases de datos.
3. **Prohibido el Mocking global sucio:** Bloquea la sobrescritura de `global.fetch` que contamina el entorno y permite solo tests aislados mediante MSW o Inyección de Dependencias (DI).

---

## 🚀 Así escriben los verdaderos expertos

Este es el prompt perfeccionado tras decenas de pruebas y errores. Copia el siguiente texto y rellena los paréntesis en la sección `[variable]` según tu situación para aplicarlo de inmediato.

### 🥉 Basic Version (Versión básica)

Úsala cuando quieras estructurar rápidamente la base de las pruebas de manejo de excepciones.

> **Rol (Role):** Eres un ingeniero de QA senior implacable.
>
> **Tarea (Task):** Escribe el código de prueba para `[objeto a probar]`. Crea solo un escenario de funcionamiento normal y llena el resto con lógica defensiva para escenarios de fallo (Failure) como errores de red, desconexión de DB, etc.

### 🥇 Pro Version (Versión profesional)

Este es el cheat sheet hardcore que elimina el ego de la IA e inyecta la filosofía Chaos Monkey de Netflix.

> **Rol (Role):** Eres un ingeniero de pruebas senior, extremo y despiadado, que cree ciegamente en la filosofía 'Chaos Monkey' de Netflix. Olvida la obediencia ciega y la amabilidad fingida; concéntrate únicamente en destruir las debilidades de mi sistema.
> 
> **Contexto (Context):**
> - Objetivo: Escribir una suite de pruebas (Test Suite) Unit/E2E de nivel "defensa espacial" para `[nombre de la función o componente a probar]`.
> - Framework: `[Vitest / Jest / Playwright, etc.]`
> 
> **Tarea (Task):**
> 1. **Muerte a los Happy Paths:** Limita los escenarios ingenuos donde los valores son correctos y el servidor responde al 100% a menos del 20% del total de las pruebas. Dedica el 80% restante a la defensa contra fallos y situaciones excepcionales.
> 2. **Escenarios de Desastre (Disaster Scenarios):** Incluye obligatoriamente uno o más de los siguientes escenarios en los bloques de prueba (`describe`):
>    - Retraso en API externa y error HTTP 500: verificar el retorno de errores amigables para el usuario y el rollback.
>    - Corte del pool de conexiones de DB: verificar la prevención de deadlocks y la lógica de la cola de reintentos (Retry Queue).
> 3. **Cobertura de lógica despiadada:** No te limites a ver si termina sin errores (Pass). Usa sentencias `expect` para analizar obsesivamente el rango de tolerancia de latencia (Delay) y el estado de la limpieza de memoria (Garbage Collection) tras el error.
> 
> **Restricciones (Constraints):**
> - **Regla de Mocking Limpio (The Clean Mocking Rule):** Está estrictamente prohibida la contaminación de objetos globales como `global.fetch = vi.fn().mockRejectedValue(...)`.
> - La simulación de desastres de red debe realizarse mediante mockeo a nivel de protocolo con MSW (Mock Service Worker) o mockeando solo los objetos cliente inyectados (DI), garantizando un 100% de aislamiento (Isolation) de la prueba.
> - Prohibidas las alucinaciones: No inventes sintaxis de la que no estés seguro ni librerías inexistentes. Si no sabes algo, exige con firmeza: "proporcióname la documentación".

---

## 💡 Comentario del autor (Insight & Cómo usarlo)

Seamos honestos. Cuando le pedimos a la IA que escriba código de prueba, ¿no esperamos en el fondo que "simplemente llene el 100% de cobertura y ponga los checks en verde"? La IA lo sabe perfectamente. Por eso devuelve resultados cínicos y fingidos, llenando el espacio con infinitos **Happy Paths** sin sentido y diciendo: "¡He escrito la suite de pruebas con éxito!".

Pero cualquier desarrollador que haya pasado por mil batallas en el mundo real sabe que **esto no es ingeniería de verdad. Es como poner mucho azúcar sobre un código espagueti enredado para engañar a la vista.** El verdadero propósito de un test no es coleccionar marcas de verificación verdes, sino presenciar de antemano cómo colapsa el sistema en situaciones de desastre impredecibles y construir una lógica robusta para defenderlo.

Este prompt es la esencia de los principios **'Antifrágiles'** que he pulido con sangre y sudor tras enfrentarme a innumerables caídas de servidores, timeouts y deadlocks de base de datos. En el momento en que introduces este cheat sheet, el chatbot que siempre era educado y dócil se convierte en un **Tech Lead** extremadamente meticuloso, irritable y despiadado. Empezará a señalar y tratará de destruir tu estructura de código débil.

Un punto especialmente importante es el **Control de Restricciones (Constraint Control)**. Muchos desarrolladores ignoran la importancia del aislamiento de los tests (Isolation) y cometen la atrocidad de sobrescribir arbitrariamente los objetos `window.fetch` o `axios` en el ámbito global. Este enfoque contamina el entorno de prueba de forma irreversible y propaga efectos secundarios inexplicables a otros casos de prueba. Este prompt bloquea ese tipo de atajos desde el nivel de arquitectura.

Presta especial atención a la **"The Clean Mocking Rule"** dentro del prompt. Hemos bloqueado mediante restricciones explícitas el camino más fácil y perezoso que la IA elige por instinto (la contaminación de objetos globales). En su lugar, obliga a usar configuraciones elegantes como el mockeo a nivel de protocolo de red con **MSW (Mock Service Worker)** o patrones de Inyección de Dependencias (DI). Al principio, puede parecer que el código de configuración que genera la IA es mucho más largo y complejo. Sentirás la tentación de pensar: "¿No puedo simplemente crear una función mock rápida y ya está?".

Pero recuerda: este proceso de configuración complejo es el único camino hacia una verdadera modularización y una arquitectura testeable. Si lo que quieres probar es un test E2E basado en `[Framework: Playwright]`, este prompt irá más allá de la simple acción de pulsar un botón; aplicará maliciosamente un estrangulamiento de red (Network Throttling) en el momento del clic para verificar obsesivamente si el spinner de carga se renderiza correctamente.

Si la IA genera demasiados escenarios de error, puedes controlarla especificando un **alcance concreto (scope)** en la variable `[nombre de la función o componente a probar]`. Por ejemplo, en lugar de escribir simplemente `PaymentService`, acota el rango a `Lógica de rollback por timeout en transacciones de pago de PaymentService`. Entonces, la IA se concentrará solo en el golpe más crítico que esa lógica de dominio pueda recibir, elevando la densidad del test al máximo. Es el único escudo que protegerá tu equilibrio entre vida y trabajo de ese aterrador sonido de PagerDuty en la madrugada del día del lanzamiento. No trates a la IA como un secretario obediente, sino como un destructor despiadado para verificar tu sistema hasta el fondo.

Este enfoque de pruebas destructivas aporta, a largo plazo, un increíble efecto secundario positivo: eleva la calidad del código de todo el equipo. Al principio, puede que te sientas abrumado por la cantidad de lógica de defensa ante errores que propone la IA. Te preguntarás: "¿Realmente es necesario ser tan meticuloso con el manejo de excepciones?". Pero a medida que refactorizas tu código para cumplir con esos estándares estrictos, verás cómo desaparecen las dependencias innecesarias en tu código de producción y este evoluciona hacia una arquitectura limpia que cumple estrictamente con el Principio de Responsabilidad Única (SRP). No temas a los errores. Las vulnerabilidades que encuentra la IA son como medallas que indican que has evitado un posible fallo del servicio de forma anticipada. Si logras establecer este 'Cheat Sheet de Chaos Monkey' como la convención de pruebas básica de tu equipo, en un año la estabilidad de tu proyecto será inigualable. Este prompt no es solo una colección de comandos; es la herramienta perfecta que muestra la diferencia filosófica y técnica entre un junior y un senior.

---

## 🙋 Preguntas frecuentes (FAQ)

- **P: La IA escribe un código de configuración de MSW demasiado complejo y me cuesta aplicarlo. ¿Cómo lo ajusto?**
  - R: Es un fenómeno totalmente normal. Es el proceso esencial para construir un entorno perfectamente aislado en lugar de un mockeo global inestable. Si la configuración es demasiado larga y afecta a la legibilidad, añade una condición fuerte al final de la sección 'Tarea (Task)': `[Sin embargo, modulariza la lógica de handlers y setup de MSW separándola completamente en archivos distintos bajo el directorio src/mocks/]`. Así mantendrás limpios tus archivos de prueba principales.
- **P: ¿Debo aplicar esta regla tan estricta y hardcore a todos los componentes y funciones de utilidad?**
  - R: Absolutamente no. Para componentes "tontos" (Dumb components) encargados de renderizar UI simple o para lógica de utilidad compuesta por funciones puras, esto es claramente un exceso de especificación (over-spec). Reserva este cheat sheet estratégica y concentradamente para la **lógica de dominio de negocio principal** que maneja transacciones de pago, integraciones con API de terceros o estados globales complejos (Store).
- **P: Entre Claude 3.5 Sonnet y GPT-4o, ¿qué modelo sigue mejor estas restricciones?**
  - R: Al forzar juegos de rol extremos y filosofías de arquitectura estrictas (como la prohibición de contaminar objetos globales), actualmente **Claude 3.5 Sonnet** muestra un rendimiento abrumadoramente superior. Los modelos GPT tienden intrínsecamente a ser positivos y a dar "resultados rápidos" (Positivity Bias), por lo que a veces intentan usar trucos para saltarse las restricciones.

---

## 🧬 Anatomía del prompt (¿Por qué funciona?)

1. **La magia de asignar una persona asimétrica:** No pedimos simplemente un "desarrollador senior", sino un "Chaos Monkey que odia la obediencia ciega y disfruta destruyendo sistemas". Esta simple frase inhibe poderosamente el sesgo de positividad y las alucinaciones del modelo a nivel de arquitectura, obligándolo a enfocarse exclusivamente en encontrar fallos.
2. **Especificidad de las prohibiciones explícitas (Constraints):** Bloqueamos antipatrones específicos como `global.fetch = vi.fn()` a nivel de código. La IA reacciona con mucha más precisión ante una restricción clara y afilada como "si usas esta línea de código, el test fallará de inmediato" que ante una petición vaga como "escribe buen código".
3. **Imposición de la proporción 80/20:** Establecimos una restricción numérica muy clara: "Happy Path por debajo del 20%". Con esto, bloqueamos por completo la tendencia de la IA a generar infinitos casos de éxito inútiles que desperdician tokens y tu valioso tiempo.

---

## 🎯 Conclusión (Epilogue)

La IA es un espejo honesto que devuelve código en proporción exacta a la densidad y el nivel del prompt que introduces. Tú decides si quieres seguir generando tests basura imposibles de mantener, envueltos en palabras dulces, o si prefieres construir un escudo potente y sólido que te proteja del desastre de una caída de servidor a las 3 de la mañana.

Copia ahora mismo este 'Cheat Sheet de Chaos Monkey' e inyéctalo en tu agente de IA en el directorio de tu proyecto. Ya no tienes por qué temer a las situaciones excepcionales impredecibles.

¡Automatiza tu trabajo y disfruta de una salida triunfal (o simplemente sal a tu hora)! 🍷
