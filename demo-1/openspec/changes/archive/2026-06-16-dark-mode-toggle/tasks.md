## 1. Script de inicialización de tema (anti-FOUC)

- [x] 1.1 Añadir un `<script>` inline en el `<head>` de `index.html` (antes del `<link>` CSS) que lea `localStorage` y `prefers-color-scheme` y aplique `data-theme` al `<html>` de forma síncrona

## 2. Variables CSS para modo oscuro

- [x] 2.1 Añadir el bloque `html[data-theme="dark"]` en `styles.css` con las variables de fondo de página, texto y superficies (header, panel, legend)
- [x] 2.2 Añadir variables `--cat-*` para modo oscuro (versión oscura/apagada de cada color pastel por categoría)
- [x] 2.3 Añadir variables de transición suave (`transition: background-color 0.2s, color 0.2s`) a `body` y `.element` para el cambio de tema

## 3. Botón toggle en el header

- [x] 3.1 Añadir el markup del botón toggle (con icono de luna y sol SVG) en el `<header>` de `index.html`
- [x] 3.2 Estilizar el botón toggle en `styles.css` (forma circular, sin borde, contraste en ambos temas)
- [x] 3.3 Mostrar el icono de luna cuando el tema es claro y el de sol cuando el tema es oscuro (ocultando el icono no activo con CSS o clases)

## 4. Lógica JS del toggle

- [x] 4.1 Añadir la función `initTheme()` en `app.js` que lea `localStorage` / `prefers-color-scheme` y aplique el atributo `data-theme` al cargar
- [x] 4.2 Añadir la función `toggleTheme()` que alterne `data-theme` entre `light` y `dark` y guarde la nueva preferencia en `localStorage` (con `try/catch`)
- [x] 4.3 Registrar el listener `click` en el botón toggle para llamar a `toggleTheme()`
- [x] 4.4 Llamar a `initTheme()` al inicio de `DOMContentLoaded` (después del script inline en `<head>`, como sincronización del icono)

## 5. Verificación

- [x] 5.1 Verificar que no hay flash de tema incorrecto (FOUC) al recargar con preferencia guardada
- [x] 5.2 Verificar que todos los elementos de la tabla son legibles en modo oscuro (contraste de texto sobre pasteles oscuros)
- [x] 5.3 Verificar que el panel de detalles, el buscador y la leyenda se adaptan correctamente al modo oscuro
- [x] 5.4 Verificar que la preferencia persiste al recargar la página (`file://`)
- [x] 5.5 Verificar que si no hay preferencia guardada, se respeta `prefers-color-scheme` del sistema
