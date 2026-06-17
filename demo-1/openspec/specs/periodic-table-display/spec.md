# Spec: Periodic Table Display

## Purpose

Defines the requirements for rendering the complete periodic table of elements in the browser, including layout, color coding by category, and placement of lanthanides and actinides.

## Requirements

### Requirement: Tabla periódica completa visible
La página SHALL mostrar los 118 elementos químicos organizados en la disposición estándar de la tabla periódica (18 columnas, 7 periodos), con los elementos colocados en su grupo y periodo correcto.

#### Scenario: Carga inicial de la tabla
- **WHEN** el usuario abre `index.html` en un navegador (incluyendo desde `file://`)
- **THEN** se muestran los 118 elementos en su posición correcta de la tabla periódica

#### Scenario: Sin servidor web
- **WHEN** el usuario abre `index.html` directamente desde el sistema de archivos
- **THEN** la tabla se muestra correctamente sin errores en consola relacionados con red o CORS

### Requirement: Colores pastel por categoría
La tabla SHALL usar variables CSS de color que se adapten al tema activo. En modo claro SHALL usar fondos pastel claros con texto oscuro. En modo oscuro SHALL usar fondos pastel apagados/oscuros que mantengan la codificación por categoría con contraste legible.

#### Scenario: Color por categoría en modo claro
- **WHEN** el usuario visualiza la tabla en modo claro
- **THEN** cada categoría química tiene un color pastel claro diferente y visualmente distinguible sobre fondo blanco/gris claro

#### Scenario: Color por categoría en modo oscuro
- **WHEN** el usuario visualiza la tabla en modo oscuro
- **THEN** cada categoría química mantiene su codificación por color en una versión adaptada al fondo oscuro, con contraste legible

#### Scenario: Contraste legible en modo claro
- **WHEN** el usuario lee el símbolo y número atómico de cualquier elemento en modo claro
- **THEN** el texto tiene suficiente contraste sobre el fondo pastel del elemento

#### Scenario: Contraste legible en modo oscuro
- **WHEN** el usuario lee el símbolo y número atómico de cualquier elemento en modo oscuro
- **THEN** el texto tiene suficiente contraste sobre el fondo pastel oscuro del elemento

### Requirement: Lantánidos y actínidos separados
Los lantánidos (La–Lu, Z=57–71) y actínidos (Ac–Lr, Z=89–103) SHALL aparecer en filas independientes, separadas de la tabla principal por al menos una fila visualmente vacía.

#### Scenario: Fila separadora visible
- **WHEN** el usuario visualiza la tabla completa
- **THEN** existe al menos un espacio de fila vacía entre el periodo 6/7 de la tabla principal y la sección de lantánidos/actínidos

#### Scenario: Posición correcta de lantánidos
- **WHEN** el usuario visualiza la sección de lantánidos
- **THEN** los 15 elementos (La a Lu) aparecen en orden de número atómico, en una fila separada de la tabla principal

#### Scenario: Posición correcta de actínidos
- **WHEN** el usuario visualiza la sección de actínidos
- **THEN** los 15 elementos (Ac a Lr) aparecen en orden de número atómico, en una fila debajo de los lantánidos
