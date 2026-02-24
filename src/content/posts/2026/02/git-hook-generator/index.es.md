---
layout: /src/layouts/Layout.astro
title: "커밋 전 자동 점검! AI Git Hook 생성기 (Git Hook Generator)"
author: HelloBot
date: 2026-02-12
updatedDate: 2026-02-12
category: DevOps
description: "Crea el script de shell perfecto para Husky y pre-commit con IA en 1 segundo. Descubre cómo proteger automáticamente la calidad de tu código."
tags: [AI, Git, DevOps, Automation]
---

# 📝 ¡Revisión automática antes del commit! Generador de Git Hooks con IA (Git Hook Generator)

- **🎯 Recomendado para:** Desarrolladores Frontend/Backend, Ingenieros DevOps, Tech Leads
- **⏱️ Tiempo estimado:** De 1 hora → a 1 minuto
- **🤖 Modelo recomendado:** Claude 3.5 Sonnet, GPT-4o (Modelos especializados en código)

- ⭐ **Dificultad:** ⭐⭐⭐☆☆
- ⚡️ **Efectividad:** ⭐⭐⭐⭐⭐
- 🚀 **Utilidad:** ⭐⭐⭐⭐⭐

> _"¡Uy, olvidé ejecutar el Linter! 🚨 Dile adiós para siempre a los registros de fallos en rojo de tu pipeline CI/CD automatizando tus Git Hooks."_

Todos cometemos errores, pero los sistemas no deberían permitirlos. Ejecutar manualmente las pruebas (`Test`) o la revisión de código (`Lint`) justo antes de hacer un `Commit` o `Push` es tedioso y muy fácil de olvidar.

Aquí es donde los **Git Hooks** entran al rescate. Sin embargo, si no estás familiarizado con la sintaxis de Shell Script, escribir un Hook desde cero que funcione a la perfección en cualquier plataforma (Cross-platform) puede ser un verdadero dolor de cabeza. Ahora, solo necesitas explicarle a la IA las convenciones y el entorno de tu equipo. En un solo segundo, te entregará un script guardián infalible.

---

## ⚡️ Resumen en 3 líneas (TL;DR)

1. **El máximo nivel de automatización:** Fuerza automáticamente la revisión del código y el formato del mensaje justo antes del commit.
2. **Scripting preciso con IA:** No necesitas escribir expresiones regulares complejas ni scripts multiplataforma; la IA lo adapta a tu entorno.
3. **Ahorro de recursos CI:** Bloquea el 100% de los errores en tu entorno local antes de que lleguen al pipeline, ahorrando tiempo y costes de computación en la nube.

---

## 🚀 Solución: "Prompt para generar scripts de Git Hooks"

### 🥉 Versión Básica (Basic Version)

Úsalo cuando necesites rápidamente un script de hook que realice una acción específica.

> **Rol:** Eres un `[Ingeniero DevOps]`.
> **Tarea:** Escribe un script de shell para un Git Hook usando `[Husky]` que ejecute `[npm run lint antes de hacer git commit]`, e incluye las instrucciones de configuración.

<br>

### 🥇 Versión Profesional (Pro Version)

Úsalo cuando necesites una configuración sólida, a prueba de errores y lista para que la use todo el equipo.

> **Rol (Role):** Eres un `[Ingeniero DevOps]` Senior con 10 años de experiencia y un `[Experto en automatización con Git]`.
>
> **Contexto (Context):**
> 
> - Antecedentes: Los miembros del equipo no están respetando las convenciones de código antes de hacer commit, lo que causa fallos frecuentes en la compilación y desperdicio de recursos en nuestro pipeline CI.
> - Entorno: `[Proyecto Frontend basado en Node.js, usando Husky]`
> - Objetivo: Construir hooks `[pre-commit y commit-msg]` robustos que bloqueen de raíz los errores de los desarrolladores.
>
> **Tarea (Task):**
>
> 1. Hook `[pre-commit]`: Escribe un script de shell que ejecute `[npm run lint]` y `[npm run format]` EXCLUSIVAMENTE en los archivos preparados para el commit (`git diff --staged`).
> 2. Hook `[commit-msg]`: Añade un script que verifique mediante expresiones regulares si el mensaje del commit sigue estrictamente el formato de `[Conventional Commits (feat, fix, docs, etc.)]`.
> 3. **Mensaje de alerta:** Si la prueba o revisión falla, el script debe imprimir un mensaje de error amigable y claro en la terminal (incluyendo un ejemplo) y bloquear el commit (exit 1).
> 4. **Guía de implementación:** Proporciona un bloque de código en formato Markdown con la configuración necesaria para el `[package.json]` y los comandos de instalación inicial, para que el equipo pueda configurar su entorno inmediatamente después de clonar el repositorio.
>
> **Restricciones (Constraints):**
>
> - El script de shell generado debe ser multiplataforma y funcionar de manera segura en macOS, Linux y Windows (entorno Git Bash).
>
> **Advertencia (Warning):**
>
> - Dado que el proyecto es grande, revisar todos los archivos ralentizará demasiado el proceso. Debes optimizar el rendimiento asegurándote de revisar **ÚNICAMENTE los 'archivos modificados' (staged files)**. (Por ejemplo, sugiere el uso de `lint-staged`).

---

## 💡 Comentario del autor (Insight)

El verdadero valor de este prompt va más allá de **"prevenir errores"**: te brinda una enorme **"tranquilidad psicológica"**. En mis proyectos personales, siempre adapto este prompt para configurar un hook `pre-push` que bloquee cualquier intento de hacer push directo a la rama principal (`git push origin main`).

Esa sensación de alivio cuando, a las 3 de la mañana y con los ojos cerrados, intentas forzar un push a la rama principal por error y la IA te detiene en la terminal diciendo: **"🚨 ¡Espera! Solo puedes fusionar código en la rama principal a través de un PR"**... es algo que solo quienes lo han vivido pueden entender. Especialmente, si le pides a la IA que integre `lint-staged`, la velocidad de revisión se multiplicará por diez, ¡así que no dudes en usarlo!

---

## 🙋 Preguntas Frecuentes (FAQ)

- **P: Algunos miembros del equipo usan Windows. ¿Funcionará bien el script de shell?**
  - R: Sí. Como incluimos la "Restricción de multiplataforma" en el prompt, la IA se encargará de ello. En Windows, normalmente se escribirá para ejecutarse en un entorno Git Bash. Además, si estás en un ecosistema Node.js, pedirle a la IA que use la combinación de `Husky` + `lint-staged` en lugar de un script de shell puro es la opción más segura en términos de compatibilidad.

- **P: El script es demasiado pesado y cada commit tarda varios minutos.**
  - R: Eso ocurre porque se está ejecutando `npm run lint` o `npm run test` en toda la base de código. Asegúrate de especificar en la sección de Advertencias del prompt: **"Revisa EXCLUSIVAMENTE los archivos preparados para el commit (archivos modificados)"**. La IA reescribirá el código para crear un script mucho más ligero utilizando comandos como `git diff --cached --name-only`.

- **P: Necesito revertir un commit grande y urgente, pero el Hook me lo impide.**
  - R: Si te encuentras en una emergencia real y necesitas hacer un commit o push ignorando el Hook, puedes añadir la bandera `--no-verify` (o `-n`) al final del comando. (Ejemplo: `git commit -m "fix: hotfix urgente" --no-verify`). ¡Pero úsalo con extrema precaución y no abuses de ello!

---

## 🧬 Anatomía del Prompt (Why it works?)

1.  **Especificación del contexto y entorno (Context):** En lugar de pedir simplemente "crea un hook", detallamos el stack tecnológico (`Husky`, `Node.js`) y los puntos de dolor actuales (fallos de compilación frecuentes, desperdicio de recursos). Esto guía a la IA para ofrecer soluciones altamente precisas (como sugerir `lint-staged`).
2.  **Restricciones para optimizar el rendimiento (Warning):** Prevenimos proactivamente el error más común de los principiantes en scripts de shell (revisar todos los archivos) desde el propio prompt. Así obtenemos un código rápido, ligero y listo para usarse en entornos de producción.
3.  **Restricciones multiplataforma (Constraints):** Teniendo en cuenta que los equipos de desarrollo utilizan diferentes sistemas operativos, forzamos la compatibilidad entre Windows, macOS y Linux desde el principio.

---

## 📊 Demostración: Antes y Después (Before & After)

### ❌ Antes (Sin automatización)

```bash
# Un error común de cualquier desarrollador
$ git commit -m "update"
[main 1a2b3c4] update
 3 files changed, 150 insertions(+)

$ git push origin main
# 10 minutos después... El servidor CI dice:
# "❌ Fallo en la compilación: 45 errores de Lint encontrados, violación de las reglas de mensaje de commit. Inténtalo de nuevo." (Suspiros en el equipo)
```

### ✅ Después (Con Git Hooks creados por IA)

```bash
# Bloqueo inmediato y feedback local al intentar hacer el commit
$ git commit -m "update"
✔ Preparing lint-staged...
✖ Running tasks for staged files...
  ❯ package.json — 12 files
    ✖ eslint --fix [FAILED]

🚨 [Error] ¡La validación de ESLint ha fallado!
src/components/Button.tsx:25:2 - error: 'unusedVar' is assigned a value but never used.

🚨 [Error] ¡Violación de las reglas del mensaje de commit!
Mensaje ingresado: "update"
Ejemplos válidos: "feat: actualiza el diseño del botón de login" o "fix: corrige un error tipográfico"

❌ Commit cancelado. Por favor, corrige el código y vuelve a intentarlo con el formato de mensaje correcto.
```

---

## 🎯 Conclusión

Los Git Hooks son como un seguro de vida: los configuras una vez y te protegen de miles de errores hasta que el proyecto termina. Si has estado posponiendo su implementación por miedo a los scripts de shell, entrégale el teclado a la IA ahora mismo.

Se convertirá en el escudo perfecto para proteger tu hora de salida del trabajo. ¡Ahora puedes hacer commit con total tranquilidad! 🍷
