

## Plan: Refinar textos y dar más vida visual a la sección de Formación

### 1. Actualizar textos del header y descripciones

**Header**: Reformular el subtítulo para dejar claro que la formación es para personas que no saben de IA y que es aplicada al sector concreto (no genérica). Algo como: "No necesitas saber de tecnología. Mis programas están pensados para profesionales y equipos que parten de cero en IA y quieren aplicarla de forma práctica en su sector."

**Añadir sectores**: Incluir una línea mencionando los sectores donde ya ha trabajado: industrial, transporte, turismo y educativo. Además, destacar la especialización en comunicación y redes sociales.

### 2. Dar más color/vida a la grid de herramientas

Actualmente todas las tool badges son iguales (borde gris, icono dorado tenue). La idea es darles más personalidad visual:

- Asignar un **color de acento sutil diferente** a cada badge en hover o como fondo (usando variaciones de dorado, mint, o tonos complementarios)
- O bien: hacer que el **icono tenga un fondo con color** más visible (no solo `accent/60` sino algo más definido), con un ligero gradiente o background circle detrás del icono
- Alternativamente: alternar entre 2-3 estilos de color (dorado, mint, navy-mid) para romper la monotonía

### 3. Archivo a modificar

| Archivo | Cambios |
|---------|---------|
| `src/components/TrainingSection.tsx` | Actualizar texto del subtítulo del header. Añadir frase sobre sectores (industrial, transporte, turismo, educativo) y especialización en comunicación/RRSS. Dar más color a los tool badges con colores alternados o fondos más visibles en los iconos. |

