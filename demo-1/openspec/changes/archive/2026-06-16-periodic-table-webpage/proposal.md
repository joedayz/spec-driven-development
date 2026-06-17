## Why

Se necesita una página web estática e interactiva de la tabla periódica que funcione completamente en el navegador, sin depender de ningún servidor web. El objetivo es ofrecer una herramienta visual atractiva y funcional para consultar los elementos químicos, accesible desde cualquier sistema de archivos local.

## What Changes

- Creación de una nueva página web estática (`index.html`) con la tabla periódica completa.
- Fondo claro con elementos coloreados en tonos pastel según su grupo o categoría química.
- Buscador integrado para filtrar elementos por nombre, símbolo o número atómico.
- Panel de detalle del elemento seleccionado que se muestra sin que la tabla reescale o se desplace.
- Los lantánidos y actínidos aparecen separados de la tabla principal por al menos una fila vacía.
- Implementación en estándares puros: HTML5, CSS3 y JavaScript Vanilla (sin frameworks ni dependencias externas).

## Capabilities

### New Capabilities

- `periodic-table-display`: Tabla periódica completa con diseño visual de fondo claro y colores pastel por categoría. Los lantánidos y actínidos están separados de la tabla principal por al menos una fila vacía.
- `element-search`: Buscador en tiempo real que filtra los elementos por nombre, símbolo o número atómico, resaltando visualmente los resultados.
- `element-detail-panel`: Panel lateral o superpuesto que muestra los detalles del elemento seleccionado (número atómico, masa, configuración electrónica, categoría, etc.) sin que la tabla periódica cambie de tamaño ni se reordene.

### Modified Capabilities

## Impact

- Nuevos archivos estáticos: `index.html`, `styles.css`, `app.js` (o equivalentes).
- Sin dependencias externas: no se requieren librerías de terceros ni servidor.
- Compatible con apertura directa desde el sistema de archivos (`file://`).
