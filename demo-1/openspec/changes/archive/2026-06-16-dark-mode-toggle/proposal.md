## Why

La tabla periódica funciona únicamente con fondo claro. En condiciones de poca luz o preferencia personal, trabajar con fondos muy claros resulta incómodo. Añadir un modo oscuro mejora la accesibilidad y el confort visual del usuario.

## What Changes

- Añadir un botón de alternancia (toggle) en el encabezado de la página que permita cambiar entre modo claro y modo oscuro.
- Definir un juego completo de variables CSS para modo oscuro (fondo oscuro, colores pastel más apagados, texto claro).
- La preferencia del usuario se persiste en `localStorage` para que se mantenga entre sesiones.
- La página respeta la preferencia del sistema operativo (`prefers-color-scheme`) como valor inicial si el usuario no ha elegido aún.

## Capabilities

### New Capabilities

- `dark-mode-toggle`: Botón en el encabezado que alterna entre modo claro y modo oscuro. Persiste la preferencia en `localStorage` y respeta `prefers-color-scheme` como valor inicial.

### Modified Capabilities

- `periodic-table-display`: Se añade el requisito de que la tabla sea visualmente correcta en modo oscuro (colores de fondo de los elementos adaptados al tema oscuro).

## Impact

- `index.html`: añadir el botón toggle en el `<header>`.
- `styles.css`: añadir variables CSS para modo oscuro bajo `[data-theme="dark"]` y estilos del botón toggle.
- `app.js`: añadir lógica para leer/escribir `localStorage`, detectar `prefers-color-scheme` y alternar el atributo `data-theme` en `<html>`.
- Sin nuevas dependencias externas.
