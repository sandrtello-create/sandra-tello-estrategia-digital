

## Plan: Badges con fondo claro y hover dorado

Cambio muy sencillo en la línea 210 de `TrainingSection.tsx`: actualizar las clases de los tool badges para que tengan un fondo claro visible (tipo `bg-white/10` o `bg-[hsl(216,20%,92%)]/80` — el tono gris-azulado claro de la paleta) con texto oscuro, y mantener el hover dorado actual.

### Cambio concreto

| Archivo | Cambio |
|---------|--------|
| `src/components/TrainingSection.tsx` (línea 210) | Cambiar `bg-primary-foreground/[0.05] text-primary-foreground/70` por `bg-white/[0.12] text-primary-foreground/90` para que los badges se vean claritos y destaquen del fondo navy. El hover dorado (`hover:bg-accent hover:text-primary`) se mantiene igual. |

