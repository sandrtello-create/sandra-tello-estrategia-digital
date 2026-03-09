

## Plan: Seccion Resultados con foto a la derecha

La foto de Sandra con Marcopolo ira a la derecha y el texto narrativo a la izquierda, creando alternancia visual con el bloque del metodo (que tiene la foto a la izquierda).

### Cambios

1. **Copiar imagen** subida a `src/assets/sandra-tello-marcopolo.jpg`
2. **Editar `src/components/ResultsSection.tsx`**:
   - Importar la imagen
   - Reemplazar el header centrado actual por un layout de dos columnas (`grid lg:grid-cols-2`)
   - **Columna izquierda**: texto narrativo (subtitulo dorado "MI FORMA DE TRABAJAR", titulo serif, parrafos sobre la transicion oficina-sin-luz a libertad, Marcopolo, familia)
   - **Columna derecha**: foto de Sandra con Marcopolo
   - Mantener el grid de 6 tarjetas de resultados debajo

