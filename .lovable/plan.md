

## Plan: Arreglar sección Método (3 cambios)

### Problema
1. La foto de fondo no se mueve con `object-position` — probablemente porque la imagen ya ocupa exactamente el contenedor o el CSS no surte efecto visible. Hay que usar un enfoque diferente: posicionar la imagen como elemento absoluto con dimensiones mayores y `left` negativo para forzar el desplazamiento.
2. El padding superior (`py-28 lg:py-36`) es excesivo, deja demasiado espacio vacío entre la cabeza y la sección anterior.
3. La tarjeta "Mentalidad" incluye "La confianza es tu mayor ventaja competitiva" que no debe estar ahí.
4. La frase final "Porque la confianza convierte antes que cualquier algoritmo." debe eliminarse.

### Cambios en `src/components/MethodSection.tsx`

**1. Foto de fondo: forzar desplazamiento a la izquierda**
En vez de `object-position` (que no funciona), cambiar la imagen de `inset-0 w-full h-full object-cover object-[100%_center]` a usar un ancho mayor que el contenedor y posicionarla con `right-0` para que la cara quede a la izquierda:

```tsx
<img
  src={sandraMetodoBg}
  alt=""
  className="absolute top-0 right-0 h-full w-[140%] object-cover object-center"
/>
```

Esto hace la imagen un 40% más ancha que la sección y la ancla a la derecha, empujando el contenido izquierdo de la foto (tu cara) hacia la izquierda del viewport.

**2. Reducir padding superior**
Cambiar `py-28 lg:py-36` → `py-16 lg:py-24` para reducir el espacio vacío arriba.

**3. Texto de Mentalidad: solo primera frase**
Cambiar:
`"Supera el autosabotaje y el síndrome del impostor. La confianza es tu mayor ventaja competitiva."`
→ `"Supera el autosabotaje y el síndrome del impostor."`

**4. Eliminar frase final**
Eliminar el párrafo con "Porque la confianza convierte antes que cualquier algoritmo."

