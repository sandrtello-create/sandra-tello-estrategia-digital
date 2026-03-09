

## Plan: Hacer que el Navbar funcione tanto en la home como en páginas internas

### Problema
El Navbar usa enlaces ancla (`#inicio`, `#sobre`, etc.) que solo funcionan en la página principal. Cuando estás en `/perfiles` o `/perfiles/:slug`, hacer clic en "Inicio" o en el logo no te lleva a ningún sitio porque no hay anclas en esas páginas.

### Solución
Actualizar el Navbar para que detecte si estás en la home o en otra página:

- **Logo y enlaces**: Si estás en `/`, usar anclas normales (`#inicio`). Si estás en otra página, usar enlaces absolutos (`/#inicio`) con `react-router-dom` para navegar primero a la home y luego al ancla.
- **Añadir "Perfiles"** como enlace en la navegación para acceso directo desde cualquier página.

### Cambios

**`src/components/Navbar.tsx`:**
- Importar `useLocation` y `Link` de `react-router-dom`
- Cambiar los `href` para que usen `/#seccion` cuando no estás en la home
- Cambiar el logo para que use `<Link to="/">` siempre
- Añadir un enlace a `/perfiles` en el menú de navegación

Esto garantiza que desde cualquier página siempre puedas volver a la home o a cualquier sección.

