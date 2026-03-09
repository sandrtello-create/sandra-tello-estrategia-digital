
## Do I know what the issue is?
Sí. Ahora mismo `ScrollToTop` **no hace nada cuando hay `hash`** (por ejemplo `/#servicios`) confiando en el scroll nativo del navegador. En una SPA (Vite + React) el navegador intenta hacer el scroll al `#servicios` **antes** de que React haya pintado esa sección en el DOM, así que se queda arriba (inicio). Por eso “Volver a servicios” te lleva a la home pero **no baja** a Servicios.

## Objetivo
- Desde `/perfiles` (abajo del todo) al pulsar **“Volver a servicios”** → ir a `/#servicios` y **posicionarse en la sección Servicios**, no en el inicio.
- Mantener scroll **instantáneo** (sin animación).

## Cambios propuestos (mínimos y robustos)

### 1) Arreglar `src/components/ScrollToTop.tsx` para soportar hash en SPA
Modificar el efecto para que:
1. Si **NO** hay `hash`: subir al top con comportamiento estándar (usar `behavior: "auto"` en lugar de `"instant"` para evitar inconsistencias entre navegadores).
2. Si **SÍ** hay `hash`:
   - Extraer el id (`servicios`, `sobre`, etc.).
   - Esperar a que el elemento exista en el DOM (reintentos con `requestAnimationFrame` durante un corto periodo, y un `setTimeout` de respaldo).
   - Hacer scroll **manual** al elemento con un offset igual a la altura del navbar fijo (para que el título de la sección no quede tapado).

Resultado: `/#servicios` funcionará tanto:
- viniendo desde otra ruta (full reload por `<a href="/#servicios">`), como
- navegando dentro de la SPA (si en el futuro volvemos a usar `<Link to="/#servicios">`).

### 2) (Opcional pero recomendable) Añadir “scroll offset” CSS para anclas
Añadir en `src/index.css` algo tipo:
- `section[id] { scroll-margin-top: <altura-navbar>; }`
Esto mejora también el scroll nativo cuando haces clic en anclas dentro de la home. (Si aplicamos el offset en JS ya, esta parte es opcional; la incluyo porque hace el comportamiento más consistente.)

### 3) Limpieza menor (si procede)
En `src/pages/SobreMi.tsx` quedó `import { Link } from "react-router-dom";` sin uso. Se puede eliminar para evitar warnings.

## Criterios de validación (manual)
1. Ir a Home → bajar hasta “Casos de éxito” → “Ver todos los perfiles” → debe abrir `/perfiles` arriba del todo.
2. En `/perfiles` bajar al final → click “Volver a servicios” → debe abrir la home directamente en **Servicios** (no hero).
3. En `/sobre-mi` → “Ir a inicio” → debe llevar a `/#sobre` y posicionarse en la sección “Sobre Sandra”.
4. Probar también desde el Navbar (estando en `/perfiles`) “Servicios” → debe llevar a `/#servicios` correctamente.
