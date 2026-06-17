## ADDED Requirements

### Requirement: Panel de detalles del elemento
Al hacer clic en un elemento de la tabla, la página SHALL mostrar un panel con los detalles de ese elemento sin que la tabla periódica cambie de tamaño, se desplace ni se reordene.

#### Scenario: Apertura del panel al clic
- **WHEN** el usuario hace clic en cualquier elemento de la tabla
- **THEN** aparece un panel con los detalles de ese elemento

#### Scenario: Tabla no se redimensiona
- **WHEN** el panel de detalles está abierto
- **THEN** la tabla periódica mantiene exactamente el mismo tamaño y posición que tenía antes de abrir el panel

#### Scenario: Cierre del panel
- **WHEN** el usuario hace clic fuera del panel, en el botón de cerrar, o presiona la tecla Escape
- **THEN** el panel se cierra y la tabla permanece en su mismo estado

### Requirement: Contenido del panel de detalles
El panel SHALL mostrar al menos los siguientes datos del elemento seleccionado: número atómico, símbolo, nombre, masa atómica, categoría, configuración electrónica y una breve descripción.

#### Scenario: Datos completos del elemento
- **WHEN** el panel de detalles está abierto para cualquier elemento
- **THEN** el panel muestra: número atómico, símbolo, nombre, masa atómica, categoría química y configuración electrónica

#### Scenario: Elemento seleccionado destacado
- **WHEN** el panel de detalles está abierto para un elemento
- **THEN** ese elemento en la tabla aparece visualmente destacado (borde resaltado o cambio de opacidad) para indicar cuál está seleccionado
