## ADDED Requirements

### Requirement: Botón toggle de tema
La página SHALL incluir un botón visible en el encabezado que permita al usuario alternar entre modo claro y modo oscuro en cualquier momento.

#### Scenario: Botón visible en el header
- **WHEN** el usuario carga la página
- **THEN** el botón de alternancia de tema está visible en el encabezado, junto al título y el buscador

#### Scenario: Cambio a modo oscuro
- **WHEN** el usuario está en modo claro y hace clic en el botón toggle
- **THEN** la página completa cambia al modo oscuro (fondo oscuro, texto claro, celdas en pastel oscuro)

#### Scenario: Cambio a modo claro
- **WHEN** el usuario está en modo oscuro y hace clic en el botón toggle
- **THEN** la página completa vuelve al modo claro (fondo claro, texto oscuro, celdas en pastel claro)

#### Scenario: Icono del botón refleja el modo activo
- **WHEN** el modo activo es claro
- **THEN** el botón muestra un icono de luna (para indicar que se puede cambiar a oscuro)

#### Scenario: Icono del botón en modo oscuro
- **WHEN** el modo activo es oscuro
- **THEN** el botón muestra un icono de sol (para indicar que se puede cambiar a claro)

### Requirement: Persistencia de la preferencia de tema
La preferencia de tema elegida por el usuario SHALL persistir entre sesiones mediante `localStorage`, de modo que al recargar la página se aplique el último tema seleccionado.

#### Scenario: Preferencia guardada al cambiar
- **WHEN** el usuario cambia el tema
- **THEN** la preferencia se guarda en `localStorage` con la clave `ptable-theme`

#### Scenario: Preferencia restaurada al recargar
- **WHEN** el usuario recarga la página y tiene una preferencia guardada
- **THEN** se aplica el tema guardado sin flash ni parpadeo visible

### Requirement: Respeto de la preferencia del sistema operativo
Si el usuario no ha seleccionado un tema previamente, la página SHALL aplicar el tema del sistema operativo (`prefers-color-scheme`) como valor inicial.

#### Scenario: Sistema en modo oscuro sin preferencia guardada
- **WHEN** el sistema operativo usa modo oscuro y no hay preferencia en `localStorage`
- **THEN** la página se carga directamente en modo oscuro

#### Scenario: Sistema en modo claro sin preferencia guardada
- **WHEN** el sistema operativo usa modo claro y no hay preferencia en `localStorage`
- **THEN** la página se carga en modo claro
