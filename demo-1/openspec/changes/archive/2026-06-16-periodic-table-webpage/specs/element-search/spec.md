## ADDED Requirements

### Requirement: Buscador en tiempo real
La página SHALL incluir un campo de búsqueda visible que filtre los elementos de la tabla en tiempo real mientras el usuario escribe, sin requerir pulsar Enter ni ningún botón adicional.

#### Scenario: Búsqueda por nombre
- **WHEN** el usuario escribe parte del nombre de un elemento (p.ej. "hidr")
- **THEN** solo los elementos cuyo nombre contiene ese texto (ignorando mayúsculas/minúsculas) permanecen visibles; el resto se atenúan o se ocultan

#### Scenario: Búsqueda por símbolo
- **WHEN** el usuario escribe el símbolo de un elemento (p.ej. "Fe")
- **THEN** solo el elemento con ese símbolo (o símbolo parcialmente coincidente) se muestra destacado

#### Scenario: Búsqueda por número atómico
- **WHEN** el usuario escribe un número (p.ej. "6")
- **THEN** solo los elementos cuyo número atómico coincide con ese número se muestran destacados

#### Scenario: Campo vacío restaura la vista
- **WHEN** el usuario borra todo el texto del buscador
- **THEN** todos los elementos de la tabla vuelven a su estado visible normal

### Requirement: Indicación visual de resultados
Los elementos que no coincidan con la búsqueda SHALL mostrar una indicación visual clara (opacidad reducida u ocultos), mientras que los que sí coincidan SHALL mantenerse con su apariencia normal.

#### Scenario: Elementos no coincidentes atenuados
- **WHEN** hay un texto de búsqueda activo y un elemento no coincide
- **THEN** ese elemento aparece con opacidad reducida (≤ 40%) o está oculto, pero la estructura de la tabla NO cambia de posición
