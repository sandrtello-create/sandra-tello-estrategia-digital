
## Plan: Reemplazar el botón "Trabaja conmigo" por un icono circular

### Problema
El botón "Trabaja conmigo ›" ocupa demasiado espacio horizontal en el navbar, especialmente ahora que hay más enlaces. El usuario quiere algo más compacto, tipo un circulito/icono.

### Solución
Reemplazar el botón de texto por un **botón circular dorado con un icono** de `lucide-react`. Buena opción: `Mail` (contacto) o `MessageCircle` (mensaje), pequeño, con el gradiente dorado de `btn-gold-gradient`, sin texto. Queda elegante y ocupa muy poco espacio.

Aspecto final:
```text
[Inicio] [Sobre Sandra] [Servicios] [Formación] [Blog] [Contacto] [Perfiles]  (●)
                                                                               icono mail circular dorado
```

### Cambios en `src/components/Navbar.tsx`
- Importar el icono `Mail` de `lucide-react`
- Sustituir el `<button>` con texto "Trabaja conmigo ›" por un botón circular compacto con solo el icono `Mail` dentro
- En móvil: también sustituir el botón grande por el icono circular
- Añadir `aria-label="Trabaja conmigo"` para accesibilidad
- El `href` puede apuntar a `#contacto` / `/#contacto` usando la misma lógica `getHref`
