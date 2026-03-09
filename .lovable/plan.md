
## Problema exacto

En `src/pages/Perfiles.tsx` (línea 67-73), el botón "Volver a servicios" usa `<Link to="/#servicios">` de React Router. React Router intercepta la navegación con History API y **no activa el scroll nativo del navegador hasta el `#servicios`**, por lo que aterriza al principio de la página (la sección "Sobre mí" que aparece antes que Servicios).

La sección tiene `id="servicios"` confirmado en `ServicesSection.tsx`.

## Solución

Reemplazar `<Link to="/#servicios">` por una etiqueta `<a href="/#servicios">` nativa. El navegador maneja el hash de forma nativa y sí hace scroll al elemento con `id="servicios"`.

Un solo cambio en `src/pages/Perfiles.tsx`: líneas 5 y 67-73.

- Eliminar el import de `Link` si no se usa en otro lugar (sí se usa en las tarjetas de perfil, así que se mantiene)
- Solo cambiar el `<Link>` del botón "Volver a servicios" por `<a>`
