

## Problema

`object-[15%_center]` con `object-cover` no está funcionando como esperas. El 15% horizontal no es suficiente desplazamiento, y `object-cover` recorta la imagen por arriba/abajo para llenar el contenedor, cortándote la cabeza.

## Solución

Cambiar a `object-[5%_center]` para llevar la imagen casi al extremo izquierdo (5% = casi pegada al borde izquierdo). Además, cambiar `object-cover` a `object-contain` no serviría porque dejaría espacios vacíos, así que mantenemos `object-cover` pero añadimos `object-top` implícito con `object-[5%_30%]` — no, mejor: usar `object-[5%_center]` y si sigue cortando la cabeza, subir el porcentaje vertical.

**Corrección final**: `object-[5%_center]`
- **5%** horizontal = imagen casi al extremo izquierdo
- **center** vertical = centrada verticalmente (como pedías)

Si la cabeza sigue cortándose, es porque la imagen es más alta que el contenedor y `object-cover` recorta arriba y abajo. En ese caso ajustaríamos el vertical a `object-[5%_20%]` para mostrar más la parte superior.

### Cambio en `src/components/MethodSection.tsx` (línea 43)

```
object-[15%_center]  →  object-[5%_center]
```

