

## Plan: Rediseñar la sección de Formación en IA para darle más personalidad y vinculación con la IA

### Problema
La sección actual son 3 tarjetas planas sobre fondo navy que se sienten como "celdas" genéricas, sin elementos visuales que conecten con la temática de IA ni diferenciación respecto a otras secciones.

### Propuesta de rediseño

**1. Elementos decorativos de fondo relacionados con IA**
- Añadir un patrón sutil de "red neuronal" o "circuito" como SVG decorativo en el fondo (líneas conectadas con nodos, muy sutil en `primary-foreground/5`).
- Un gradiente radial suave desde el centro (dorado muy tenue) para dar profundidad.

**2. Tarjetas con más carácter**
- Numeración grande decorativa (01, 02, 03) en estilo similar a la sección de servicios.
- Línea dorada a la izquierda de cada tarjeta al hacer hover (consistente con la estética de servicios).
- Icono más grande con un fondo circular sutil (`bg-accent/10`).
- Hover con elevación (`scale` + `shadow`) y borde dorado.

**3. Elemento visual de IA**
- Añadir un icono decorativo grande tipo "chip/cerebro IA" semitransparente como watermark en el fondo de la sección (similar a lo que hacen muchas webs tech).

### Archivos a modificar

| Archivo | Cambio |
|---------|--------|
| `src/components/TrainingSection.tsx` | Rediseño de las tarjetas con numeración, hover mejorado, SVG decorativo de fondo tipo red neuronal, y watermark de IA |

### Estilo visual
Se mantiene la paleta navy + gold. Las tarjetas pasan de ser "cajas planas" a tener una jerarquía visual más clara con números, iconos con fondo circular, y un fondo de sección con textura sutil que evoca tecnología/IA.

