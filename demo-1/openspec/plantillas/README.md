# Plantillas — material para alumnos

Estas carpetas contienen los artefactos OpenSpec **listos para practicar**.  
**No se usan en la demo en vivo del instructor** (él parte de cero con `/opsx:propose`).

## Cómo activar cada iteración

Copia la plantilla a `openspec/changes/` antes de `/opsx:apply`:

```bash
# Iteración 1
cp -r openspec/plantillas/periodic-table-webpage openspec/changes/periodic-table-webpage

# Iteración 2 (tras archivar la 1)
cp -r openspec/plantillas/panel-on-demand openspec/changes/panel-on-demand

# Iteración 3 (tras archivar la 2)
cp -r openspec/plantillas/dark-mode-toggle openspec/changes/dark-mode-toggle
```

Sigue [`GUIA.md`](../../GUIA.md) para implementar bloque a bloque.
