
## Diagnóstico completo — tres problemas

### Problema 1: "Ver todos los perfiles" (ProfilesTeaser en home) lleva al final de la página
El botón usa `<Link to="/perfiles">` de React Router. Al navegar a `/perfiles`, React Router no hace scroll al top — la página aparece en la posición de scroll anterior. Se necesita un componente `ScrollToTop` en `App.tsx`.

### Problema 2: "Volver a servicios" desde `/perfiles` lleva al inicio de la home, no a `#servicios`
El botón ya usa `<a href="/#servicios">` (se arregló antes), pero **el problema real es que BrowserRouter no está configurado para hacer scroll al hash** después de navegar entre rutas. Necesita que el navegador recargue la URL con el hash, lo cual funciona con `<a>` nativo pero solo si la página no tiene scroll previo — o bien un `ScrollToTop` que primero lleve arriba y luego el hash haga su trabajo.

En realidad el problema es que cuando se navega de `/perfiles` a `/#servicios` con `<a href="/#servicios">`, el navegador hace una navegación completa (full reload de la SPA), aterriza en `/` y **sí** debería funcionar el scroll al hash. El fallo reportado ("me llevaba a la página inicial, al comienzo") puede ser que el `ScrollToTop` que se añada lleve arriba antes de que el hash funcione. Necesito resolverlo limpiamente.

**Solución limpia**: En `App.tsx`, añadir un `ScrollToTop` que solo suba al top cuando `pathname` cambia Y no hay hash en la URL. Si hay hash, el navegador se ocupa.

### Problema 3: "Sobre Sandra" → botón "Ir a inicio" debe llevar a `#sobre` (sección Sandra en home)
Actualmente usa `<Link to="/">` que navega a la home pero no a ninguna sección. Hay que cambiarlo a `<a href="/#sobre">`.

Además, el botón "Descubre cómo puedo ayudarte →" dentro del contenido de SobreMi usa `href="#servicios"` (sin `/#`) — eso no funciona desde `/sobre-mi`. Hay que cambiarlo a `href="/#servicios"`.

---

## Plan de cambios

### 1. Nuevo componente `src/components/ScrollToTop.tsx`
Sube al top cuando cambia la ruta, **excepto** cuando la URL tiene hash (para que el browser haga scroll nativo al hash).

```tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);
  return null;
};
```

### 2. `src/App.tsx`
Añadir `<ScrollToTop />` dentro de `<BrowserRouter>`, antes de `<Routes>`.

### 3. `src/pages/SobreMi.tsx`
- Botón "Ir a inicio" (al final): cambiar `<Link to="/">` por `<a href="/#sobre">` → lleva a la sección "Soy Sandra".
- Botón "Descubre cómo puedo ayudarte →" (dentro del contenido): cambiar `href="#servicios"` por `href="/#servicios"`.

### 4. `src/components/ProfilesTeaser.tsx`
- Botón "Ver todos los perfiles": cambiar `<Link to="/perfiles">` por `<a href="/perfiles">`. Al ser navegación a ruta sin hash, el `ScrollToTop` hará que llegue al top de `/perfiles`.

### 5. `src/pages/Perfiles.tsx` — ya correcto
El `<a href="/#servicios">` ya está bien. Con el `ScrollToTop` que respeta hashes, al cargar `/#servicios` el browser hará scroll a esa sección automáticamente.

---

## Resumen de lo que va a funcionar

```text
Desde home, "Ver todos los perfiles"  →  /perfiles  (llega al top) ✓
Desde /perfiles, "Volver a servicios" →  /#servicios (llega a sección Servicios) ✓
Desde /sobre-mi, "Ir a inicio"        →  /#sobre (llega a sección Sandra) ✓
Desde /sobre-mi, "Descubre cómo..."   →  /#servicios (llega a sección Servicios) ✓
```

Archivos a modificar: `App.tsx`, `ScrollToTop.tsx` (nuevo), `SobreMi.tsx`, `ProfilesTeaser.tsx`
