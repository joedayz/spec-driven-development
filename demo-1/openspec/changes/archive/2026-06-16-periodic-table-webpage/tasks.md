## 1. Estructura de archivos y datos

- [x] 1.1 Crear `index.html` con la estructura base (head, body, campo de búsqueda, contenedor de la tabla, contenedor del panel de detalles)
- [x] 1.2 Crear `styles.css` con reset básico, variables CSS para colores pastel por categoría y estilos de layout
- [x] 1.3 Crear `app.js` con el array JSON de los 118 elementos (número atómico, símbolo, nombre, masa atómica, categoría, grupo, periodo, configuración electrónica)

## 2. Layout de la tabla periódica

- [x] 2.1 Implementar el grid CSS en `styles.css` con 18 columnas y filas suficientes para tabla principal + separador + lantánidos + actínidos
- [x] 2.2 Implementar la función `renderTable()` en `app.js` que crea los elementos DOM y los posiciona con `grid-column` y `grid-row` según grupo y periodo
- [x] 2.3 Añadir las filas vacías separadoras (al menos 1 fila) entre la tabla principal y la sección de lantánidos/actínidos
- [x] 2.4 Posicionar lantánidos (La–Lu) y actínidos (Ac–Lr) en sus filas separadas con etiquetas identificadoras ("Lantánidos", "Actínidos")

## 3. Estilos visuales

- [x] 3.1 Definir variables CSS para cada categoría química con color pastel (metal alcalino, metal alcalinotérreo, metal de transición, metal del bloque p, metaloide, no metal, halógeno, gas noble, lantánido, actínido)
- [x] 3.2 Aplicar color de fondo pastel a cada celda de elemento según su categoría
- [x] 3.3 Estilizar el fondo general de la página con color claro
- [x] 3.4 Asegurar contraste legible entre texto y fondo pastel en cada celda

## 4. Buscador

- [x] 4.1 Añadir el campo `<input>` de búsqueda en `index.html` con placeholder descriptivo
- [x] 4.2 Implementar la función `filterElements(query)` en `app.js` que compara el texto con nombre, símbolo y número atómico de cada elemento
- [x] 4.3 Registrar el listener `input` en el campo de búsqueda para llamar a `filterElements` en tiempo real
- [x] 4.4 Aplicar clase CSS a elementos no coincidentes para reducir su opacidad (≤ 40%) sin mover ni ocultar las celdas del grid
- [x] 4.5 Restaurar todos los elementos a su estado visible cuando el campo de búsqueda queda vacío

## 5. Panel de detalles

- [x] 5.1 Añadir el markup del panel de detalles en `index.html` con `position: fixed` y botón de cierre
- [x] 5.2 Estilizar el panel en `styles.css` (posición fija, ancho máximo, scroll interno, overlay de fondo semitransparente)
- [x] 5.3 Implementar la función `showDetail(element)` en `app.js` que rellena el panel con los datos del elemento y lo hace visible
- [x] 5.4 Implementar la función `closeDetail()` que oculta el panel sin afectar el layout de la tabla
- [x] 5.5 Registrar el listener `click` en cada celda del elemento para llamar a `showDetail`
- [x] 5.6 Registrar el cierre del panel al hacer clic fuera, al pulsar el botón de cerrar y al presionar Escape
- [x] 5.7 Resaltar el elemento seleccionado en la tabla con un borde o estilo visual mientras el panel está abierto

## 6. Verificación y ajustes

- [x] 6.1 Verificar que la página funciona abriendo `index.html` directamente desde `file://` en Chrome, Firefox y Safari
- [x] 6.2 Verificar que no hay errores en consola al cargar (sin `fetch`, sin CORS, sin módulos ES externos)
- [x] 6.3 Verificar que la tabla no cambia de tamaño al abrir y cerrar el panel de detalles
- [x] 6.4 Verificar que la búsqueda funciona correctamente para nombre, símbolo y número atómico
- [x] 6.5 Verificar que lantánidos y actínidos están separados de la tabla principal por al menos una fila vacía
