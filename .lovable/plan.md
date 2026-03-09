

## Plan: Mover la foto al lado del bloque de Recursos Gratuitos

En lugar de tener la imagen como separador a ancho completo (que queda demasiado brusco), la integraré **dentro** del bloque de recursos gratuitos, a un lado, para que se vea la imagen completa y conviva con el contenido.

### Cambio en `src/components/TrainingSection.tsx`

**Eliminar** el bloque separador de imagen actual (líneas 346-360) que muestra la foto a ancho completo con gradientes.

**Reestructurar** el bloque de Recursos Gratuitos (línea 362+) con un layout de dos columnas:
- **Columna izquierda (~40%)**: La imagen `sandraFormacionIA` completa, con `object-cover` y altura 100% del contenedor para que ocupe toda la altura del bloque.
- **Columna derecha (~60%)**: Todo el contenido actual de recursos gratuitos (título, descripción, grid de 4 tarjetas, botón CTA).

En móvil, la imagen irá arriba y el contenido debajo (flex-col → md:flex-row).

El fondo crema `bg-[hsl(40,18%,91%)]` se mantiene en el contenedor exterior, y la imagen queda integrada de forma elegante sin gradientes agresivos.

