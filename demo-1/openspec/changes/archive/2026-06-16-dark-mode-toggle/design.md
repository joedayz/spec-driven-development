## Context

La tabla periódica ya está implementada como página estática (`index.html`, `styles.css`, `app.js`) con tema claro fijo. El sistema de temas se basa en variables CSS definidas en `:root`. Añadir modo oscuro consiste en sobreescribir esas variables bajo un selector `[data-theme="dark"]` en el `<html>`, y gestionar el estado con JS puro, sin dependencias externas.

## Goals / Non-Goals

**Goals:**
- Botón toggle en el `<header>` que alterna entre modo claro (`light`) y modo oscuro (`dark`)
- Variables CSS completas para modo oscuro: fondo de página, fondo de celdas pastel adaptado, colores de texto, panel de detalles, buscador y overlay
- Persistencia de la preferencia en `localStorage`
- Respetar `prefers-color-scheme` del sistema operativo si el usuario no ha elegido todavía
- Sin nuevas dependencias externas; compatible con `file://`

**Non-Goals:**
- Modo "auto" que sincronice en tiempo real con el cambio del sistema operativo durante la sesión
- Tema personalizable por el usuario (solo dos modos: claro / oscuro)
- Transiciones o animaciones de cambio de tema más allá de una transición CSS básica

## Decisions

### D1: Mecanismo de tema — atributo `data-theme` en `<html>`

**Decisión**: El tema se controla añadiendo/quitando `data-theme="dark"` en el elemento `<html>`.

**Rationale**: Es el patrón más ampliamente compatible y semánticamente correcto. Las variables CSS de `:root` son heredadas por todos los elementos; basta con redeclararlas bajo `html[data-theme="dark"]` para sobreescribirlas globalmente.

**Alternativa descartada**: Clase `.dark` en `<body>` — convencional también, pero `data-theme` en `<html>` evita conflictos con clases utilitarias y es más semántico.

---

### D2: Persistencia — `localStorage`

**Decisión**: La clave `ptable-theme` en `localStorage` almacena `"dark"` o `"light"`.

**Rationale**: Funciona con `file://`, no requiere cookies ni servidor. El script de inicialización de tema se ejecuta antes del render (`<script>` inline en `<head>`) para evitar el "flash" de tema incorrecto (FOUC).

---

### D3: Valor inicial — `prefers-color-scheme`

**Decisión**: Si no hay valor en `localStorage`, se lee `window.matchMedia('(prefers-color-scheme: dark)')` para aplicar el tema del sistema.

**Rationale**: Respetar la preferencia del SO es una buena práctica de accesibilidad y mejora la experiencia del usuario desde la primera visita.

---

### D4: Colores pastel en modo oscuro — versión saturada-oscura de los pasteles

**Decisión**: Las variables `--cat-*` en modo oscuro se ajustan a versiones más oscuras y ligeramente más saturadas (p.ej. pastel azul claro → azul medio oscuro), manteniendo la codificación por color pero sobre fondo oscuro.

**Rationale**: Mantener la codificación por colores es esencial para la usabilidad de la tabla. El contraste WCAG AA debe respetarse con texto oscuro sobre los pasteles oscuros o texto claro si el fondo es muy oscuro.

## Risks / Trade-offs

- **[Risk] FOUC (Flash of Unstyled Content)** → Mitigación: script de inicialización inline en `<head>` antes del `<link>` del CSS, que aplica `data-theme` de forma síncrona.
- **[Trade-off] Pasteles en modo oscuro pueden perder legibilidad** → los colores se eligen para mantener contraste ≥ 4.5:1 con texto oscuro (`#1a1a2e`) sobre fondo pastel apagado.
- **[Risk] `localStorage` puede estar bloqueado en algunos contextos** → Mitigación: captura de errores con `try/catch` al leer/escribir.
