

## Plan: Añadir referencia a ZipGenial en la sección de perfiles

### Cambio

En `src/components/ProfilesTeaser.tsx`, añadir debajo del párrafo introductorio una línea con el logo de ZipGenial (`src/assets/brands/zipgenial.png`) y un texto tipo "Proyectos realizados a través de ZipGenial".

**Estilo**: Centrado, logo pequeño (h-5/h-6) junto al texto en `text-primary-foreground/40`, separado por un divisor sutil. Coherente con la estética navy + gold de la sección.

**Mismo cambio** se replicará en la página `/perfiles` (`src/pages/Perfiles.tsx`) en el header, para mantener coherencia.

### Archivos

| Archivo | Cambio |
|---------|--------|
| `src/components/ProfilesTeaser.tsx` | Importar logo ZipGenial + añadir línea con logo y texto debajo del párrafo |
| `src/pages/Perfiles.tsx` | Misma mención en el header de la página completa de perfiles |

