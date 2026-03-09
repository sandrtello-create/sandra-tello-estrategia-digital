

## Problema

Hemos estado bajando el porcentaje de `object-position` (5%, 15%), pero eso hace lo contrario de lo que necesitas. Con `object-position: 5% center`, la imagen se ancla por la izquierda, dejando tu cara en el centro (justo detrás del texto).

Para que tu cara se desplace hacia la **izquierda del viewport** (donde está el espacio vacío azul oscuro), necesitamos un porcentaje **alto** (como 70-80%). Esto ancla la imagen por la derecha, empujando tu cara (que está en el centro de la foto original) hacia la izquierda de la pantalla, lejos del texto.

## Cambio en `src/components/MethodSection.tsx` (línea 43)

```
object-[5%_center]  →  object-[75%_center]
```

Esto moverá tu cara hacia la izquierda de la pantalla, donde no hay texto. Si necesita más o menos desplazamiento, ajustamos el porcentaje.

