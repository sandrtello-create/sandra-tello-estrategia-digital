

## Plan: Mover la foto de fondo solo horizontalmente (más a la izquierda)

### Problema
La posición vertical se cambió de `center` a `20%` (más arriba), cuando solo pedías moverla horizontalmente a la izquierda. El `object-[15%_20%]` actual mueve la foto tanto a la izquierda como hacia arriba.

### Cambio en `src/components/MethodSection.tsx` (línea 43)

Cambiar `object-[15%_20%]` → `object-[15%_center]`

Esto mantiene la foto centrada verticalmente (como estaba originalmente) y solo la desplaza hacia la izquierda (15%) para que el título "Inteligencia Humana Estratégica™" no caiga sobre tu cara.

Si 15% no es suficiente desplazamiento, se puede ajustar a 10% o 20% según necesites.

