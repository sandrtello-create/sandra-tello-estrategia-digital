

## Plan: Employee Advocacy visual + Blog mejora

### 1. Employee Advocacy: Rueda de eneagrama + Tarjetas de perfiles

**En `src/components/ServicesSection.tsx`**, dentro del servicio 04 (Employee Advocacy), al expandir "Saber más", después del contenido actual añadir:

- **Rueda de eneagrama SVG**: Un gráfico circular con los 9 tipos del eneagrama en colores navy/gold de la marca. Cada segmento con el número y nombre del tipo. Interactivo: al hacer hover se resalta el segmento.

- **3 tarjetas de arquetipos de liderazgo** debajo de la rueda:
  - "El Estratega" (tipo analítico, orientado a datos)
  - "El Comunicador" (tipo relacional, orientado a personas)  
  - "El Visionario" (tipo creativo, orientado a innovación)
  - Cada tarjeta con icono, título y breve descripción, en estilo coherente con el resto de la web (bordes finos, colores navy/gold).

**Archivo nuevo**: `src/components/EnneagramWheel.tsx` — componente SVG de la rueda.

### 2. Blog: Mejora visual + Enlace externo

**En `src/components/BlogSection.tsx`**:

- **Imágenes generadas por categoría**: Cada tarjeta tendrá un gradiente de fondo con un icono grande semi-transparente según la categoría (Brain para IA, Target para Estrategia, Users para Marketing).
- **Mejora visual**: Añadir hover más elegante, sombra sutil, transición suave.
- **Enlace externo**: Añadir campo `url` a cada post. El botón "Ver todos los artículos" y cada tarjeta enlazarán a la URL externa (preparado para Medium/Substack/WordPress). Por ahora con `href="#"` como placeholder.

### Archivos a modificar/crear

| Archivo | Cambio |
|---------|--------|
| `src/components/EnneagramWheel.tsx` | Nuevo: rueda SVG interactiva con 9 tipos |
| `src/components/ServicesSection.tsx` | Añadir rueda + tarjetas en servicio 04 expandido |
| `src/components/BlogSection.tsx` | Gradientes con iconos, enlaces externos, mejora visual |

