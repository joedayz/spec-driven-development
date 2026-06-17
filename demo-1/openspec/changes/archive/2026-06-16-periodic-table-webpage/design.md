## Context

Se construye una tabla periódica interactiva como página web estática. No existe código previo: es una creación desde cero. La restricción principal es que debe funcionar abriendo directamente el archivo `index.html` desde el sistema de archivos local (`file://`), sin necesidad de un servidor web.

La paleta visual usa fondo claro (#f8f9fa o similar) con colores pastel diferenciados por categoría química. Los lantánidos y actínidos se ubican en una sección separada, con al menos una fila de espacio respecto a la tabla principal. El panel de detalles del elemento se muestra de forma superpuesta (overlay/panel lateral) para no alterar el layout de la tabla.

## Goals / Non-Goals

**Goals:**
- Página estática que funcione con `file://` sin servidor
- HTML5 + CSS3 + JavaScript Vanilla (sin dependencias externas)
- Tabla periódica visualmente correcta con colores pastel por categoría
- Lantánidos y actínidos separados de la tabla principal por al menos una fila
- Buscador en tiempo real (nombre, símbolo, número atómico)
- Panel de detalles que se superpone sin redimensionar la tabla

**Non-Goals:**
- Soporte para navegadores antiguos (IE, legacy Edge)
- Backend o base de datos
- Animaciones complejas o efectos 3D
- Edición de datos de elementos
- Internacionalización (sólo idioma español/inglés para datos)

## Decisions

### D1: Estructura de archivos — monolítico vs. modular

**Decisión**: Tres archivos separados: `index.html`, `styles.css`, `app.js`.

**Rationale**: Separar presentación, estilos y lógica mejora la mantenibilidad. Un único HTML monolítico sería más difícil de actualizar. Los tres archivos siguen siendo estáticos y funcionales desde `file://`.

**Alternativa descartada**: HTML único con `<style>` y `<script>` inline — demasiado difícil de mantener.

---

### D2: Layout de la tabla — CSS Grid

**Decisión**: Usar CSS Grid con `grid-column` y `grid-row` explícitos para cada elemento.

**Rationale**: La tabla periódica no es una tabla HTML semántica; es un layout posicional. CSS Grid permite colocar cada elemento en su celda exacta sin estructuras complejas de filas/columnas vacías.

**Alternativa descartada**: `<table>` HTML con celdas vacías — manejo frágil, difícil de mantener, problemas de accesibilidad.

---

### D3: Datos de los elementos — JSON embebido en JS

**Decisión**: Los datos de los 118 elementos se definen como array JSON dentro de `app.js` (o un `data.js` separado importado como módulo inline).

**Rationale**: Evita peticiones `fetch()` que fallan con `file://` en algunos navegadores. Todos los datos están disponibles de forma síncrona sin dependencias de red.

**Alternativa descartada**: `fetch('elements.json')` — bloqueado por políticas CORS/same-origin en `file://` en Chrome.

---

### D4: Panel de detalles — overlay fijo (position: fixed)

**Decisión**: El panel de detalles usa `position: fixed` y aparece como overlay sobre la tabla, sin modificar el flujo del documento.

**Rationale**: Garantiza que la tabla no reescale ni se desplace al mostrar el panel. El usuario puede ver la tabla y los detalles simultáneamente.

**Alternativa descartada**: Panel lateral con `flex` — requeriría que la tabla redujera su ancho al aparecer el panel.

---

### D5: Separación de lantánidos y actínidos

**Decisión**: Se añaden dos filas vacías en el grid (filas 8 y 9 o equivalentes) entre la tabla principal y la sección de lantánidos/actínidos. Los elementos La–Lu y Ac–Lr se posicionan en filas 9 y 10 (o filas 9 y 11) con un margen visual claro.

**Rationale**: La convención IUPAC coloca lantánidos y actínidos fuera de la tabla principal. Una fila vacía hace explícita esta separación sin requerir tablas anidadas.

---

### D6: Búsqueda — filtrado en tiempo real sin librerías

**Decisión**: Escucha del evento `input` en el campo de búsqueda; se recorren todos los elementos del DOM con clase `.element` y se ocultan/muestran según la coincidencia (nombre, símbolo, número atómico).

**Rationale**: Implementación sencilla, sin dependencias, con rendimiento suficiente para 118 elementos.

## Risks / Trade-offs

- **[Risk] Chrome bloquea `fetch()` con `file://`** → Mitigación: todos los datos embebidos en JS, no se usa `fetch`.
- **[Risk] CSS Grid puede no renderizar igual en Safari antiguo** → Mitigación: uso de propiedades Grid ampliamente soportadas (sin subgrid ni features experimentales).
- **[Risk] Panel fijo puede solaparse mal en pantallas pequeñas** → Mitigación: diseño responsive básico con `max-width` y scroll interno del panel.
- **[Trade-off] Datos en JS vs. archivo externo**: los datos embebidos aumentan el tamaño de `app.js` (~20 KB), pero eliminan la dependencia de red/servidor.
