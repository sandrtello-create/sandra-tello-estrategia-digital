

## Plan: Separar visualmente ProfilesTeaser de TrainingSection

### Problema
Ambas secciones (`ProfilesTeaser` y `TrainingSection`) usan `bg-primary` (navy), por lo que visualmente parecen un único bloque continuo.

### Solución
Añadir un separador visual entre ambas secciones. Opciones:

1. **Línea divisoria dorada sutil** al inicio de `TrainingSection` — una línea `border-t border-accent/20` o un `<hr>` con color dorado.
2. **Cambiar el fondo de TrainingSection** a un tono ligeramente diferente (ej: `bg-navy-light` o `bg-primary/90`) para crear contraste.
3. **Combinar ambas**: línea dorada + fondo ligeramente distinto.

**Propuesta**: Añadir un divisor decorativo entre ambas secciones — una línea dorada fina centrada con un icono o simplemente un `border-t border-accent/30` — y cambiar el fondo de `TrainingSection` a un tono navy ligeramente más claro para que se distinga del bloque anterior.

### Archivos a modificar

| Archivo | Cambio |
|---------|--------|
| `src/components/TrainingSection.tsx` | Cambiar `bg-primary` por un fondo ligeramente diferente + añadir borde superior dorado sutil |

