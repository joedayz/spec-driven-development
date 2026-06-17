## MODIFIED Requirements

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
