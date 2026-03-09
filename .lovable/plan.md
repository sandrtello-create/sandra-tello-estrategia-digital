
## Situación actual
El carrusel de fotos NO llegó a implementarse realmente. La tarea anterior quedó incompleta — el archivo `ServicesSection.tsx` sigue exactamente igual que antes (sin ningún `showcase` ni carrusel), y en `index.css` tampoco existe `animate-scroll-photos`. Por eso no se ve nada nuevo. La respuesta resumida del chat anterior era incorrecta.

## Plan acordado por el usuario: Página `/perfiles` + teaser en home

### 1. Nueva página `/perfiles` — `src/pages/Perfiles.tsx`
Página completa con:
- Header del mismo estilo que `/sobre-mi` (Navbar + título + subtítulo)
- Grid de tarjetas fotográficas de los 19 perfiles (columnas: 2 en móvil, 3 en tablet, 4 en desktop)
- Cada tarjeta: foto (placeholder por ahora), nombre, badge LinkedIn clicable que abre LinkedIn en nueva pestaña
- Footer

### 2. Sección teaser en la Home — nuevo componente `src/components/ProfilesTeaser.tsx`
- Bloque pequeño entre `ServicesSection` y `TrainingSection` en `Index.tsx`
- Título: "Marcas personales con las que he trabajado"
- Carrusel infinito automático igual al de logos (misma clase `animate-scroll-brands` pero con tarjetas foto)
- Botón "Ver todos los perfiles →" que lleva a `/perfiles`

### 3. Registro de la ruta — `src/App.tsx`
- Añadir `<Route path="/perfiles" element={<Perfiles />} />`

### 4. Datos de los 19 perfiles
```
Jesús Arévalo, Javier Burgueño, Christian Helmut, Jaime Higuera,
Sara Mercado, Fran Tirado, Alfonso Bastida, Mada Leis, Romuald Fons,
Fabio Serna, Inma Asencio, Patricia Bartolomé, Martín Arosa,
David Diago, Fede Almela, Darío Sandoval, Marc Arias, Sergi Candel, Carlos Morillo
```
Fotos temporales con `https://i.pravatar.cc/400?u=[nombre]` para que sean distintas entre sí. Se pueden sustituir por fotos reales cuando las tengas.

### 5. Animación CSS — `src/index.css`
- Añadir `@keyframes scroll-photos` + `.animate-scroll-photos` (35s, pausa en hover) — igual que `scroll-brands` pero más lento

### Ficheros a modificar/crear:
- `src/pages/Perfiles.tsx` — NUEVO
- `src/components/ProfilesTeaser.tsx` — NUEVO
- `src/App.tsx` — añadir ruta
- `src/pages/Index.tsx` — añadir `<ProfilesTeaser />`
- `src/index.css` — añadir animación
