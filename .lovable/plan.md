

## Plan: Añadir foto de Sandra trabajando a la sección de Formación en IA

### Idea

Integrar la foto que has subido (Sandra en su escritorio con dos monitores, trabajando) en la sección de Formación para darle un toque personal y humano, reforzando la conexión entre Sandra y la IA.

### Diseño propuesto

Reestructurar la sección con un layout de dos columnas:
- **Columna izquierda**: La foto de Sandra trabajando, con un recorte tipo `aspect-[4/5]` o similar, ocupando toda la altura del bloque de tarjetas.
- **Columna derecha**: El título, descripción y las 3 tarjetas apiladas verticalmente (en vez de 3 columnas).

En móvil, la foto aparecería arriba y las tarjetas debajo en una sola columna.

El botón CTA se mantiene centrado debajo de todo.

### Cambios técnicos

| Archivo | Cambio |
|---------|--------|
| `src/assets/sandra-tello-ia.jpg` | Copiar la imagen subida al proyecto |
| `src/components/TrainingSection.tsx` | Layout 2 columnas: foto a la izquierda + título/tarjetas a la derecha. Tarjetas pasan a ser verticales (1 columna). Se mantienen los elementos decorativos (neural network, gradiente, etc.) |

### Estilo visual

La foto tendría un tratamiento sutil — quizás un borde dorado fino o un overlay ligero para integrarla con la estética navy + gold de la sección. Se eliminaría el watermark del cerebro ya que la foto cumple esa función visual.

