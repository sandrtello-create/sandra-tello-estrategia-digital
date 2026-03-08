
## Plan: Carrusel de fotos de Marcas Personales

### Concepto
Implementar un carrusel automático e infinito dentro de la sección "Posicionamiento de marca personal". Se replicará el diseño de la imagen que has aportado: tarjetas fotográficas en formato retrato (vertical) con una etiqueta superpuesta en la parte inferior para el nombre de la persona y el logo de LinkedIn.

### Datos y Nombres a incluir
A la lista mencionada previamente (Jesús Arévalo, Javier Burgueño, Christian Helmut, Jaime Higuera, Sara Mercado, Fran Tirado, Alfonso Bastida, Mada Leis, Romuald Fons, Fabio Serna, Inma Asencio, Patricia Bartolomé, Martín Arosa) se incluirán los nuevos perfiles que has solicitado: **David Diago, Fede Almela, Darío Sandoval, Marc Arias, Sergi Candel y Carlos Morillo**.

*Nota: Dado que aún no disponemos de las fotografías reales de todos ellos en el proyecto, se configurará el sistema utilizando imágenes temporales de prueba (placeholders). Una vez construido, será muy fácil sustituir las URLs por las fotos definitivas que nos facilites.*

### Diseño visual de la tarjeta
- **Estructura**: Contenedor vertical (aprox. 180x220px o 200x250px) con bordes redondeados (`rounded-xl overflow-hidden`).
- **Fotografía**: Imagen adaptada al contenedor (`object-cover`) ocupando el 100% del fondo.
- **Etiqueta (Badge)**: En la esquina inferior, una "píldora" blanca con bordes muy redondeados (`bg-white rounded-full px-3 py-1.5`) que contendrá el nombre en texto oscuro y el icónico logo de LinkedIn a la derecha.
- **Interacción**: El carrusel se desplazará continuamente hacia la izquierda, pero se pausará de manera automática al pasar el cursor por encima para permitir al usuario observar bien las fotos y leer los nombres.

### Detalles de Implementación Técnica
1. **Archivo `src/components/ServicesSection.tsx`**:
   - Ampliar la estructura de datos del servicio añadiendo el array fotográfico `{ name: string, image: string }` en el bloque de `showcase`.
   - Renderizar el carrusel utilizando un contenedor oculto a los lados (`overflow-hidden`) y duplicar el array de elementos para lograr el efecto de bucle infinito (técnica de loop continuo).
   - Añadir elementos absolutos en los laterales con fondo degradado para generar un efecto de difuminado por donde entran y salen las tarjetas.
2. **Archivo `src/index.css`**:
   - Crear una nueva clase de animación (ej. `animate-scroll-photos`) con una transición temporal más lenta (por ejemplo, 35-40 segundos) ya que las tarjetas con fotos requieren de un ritmo de lectura más calmado que los logotipos pequeños.
