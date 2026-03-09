

## Plan: Rediseñar los tool badges con estilo más sutil

### Problema
Los colores actuales (mint, azul, dorado alternados) no gustan. El usuario prefiere un enfoque más elegante.

### Propuesta

Revertir los badges a un estilo uniforme pero con más personalidad:

- **Estado normal**: Fondo sutil (ej. `bg-primary-foreground/[0.06]`), texto en azul oscuro (`text-primary-foreground`), icono en tono suave
- **Hover**: El badge cambia a fondo dorado (`bg-accent`) con texto oscuro, o bien a un tono azul más claro — una transición elegante al pasar el cursor
- Quitar los círculos de color detrás de los iconos y volver a iconos directos pero con el efecto hover

### Archivo a modificar

| Archivo | Cambio |
|---------|--------|
| `src/components/TrainingSection.tsx` | Eliminar `toolColors` y `colorIdx`. Badges con estilo uniforme (fondo suave, texto azul oscuro) y efecto hover a dorado o tono claro. |

