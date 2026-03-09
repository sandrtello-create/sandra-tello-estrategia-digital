

## Plan: Alinear tarjetas de liderazgo + Eneagrama más grande + 9 personajes Pixar + Zoom interactivo

### Resumen de cambios

1. **Alinear visualmente las 3 tarjetas**: Fijar altura uniforme en la zona de imagen para que Estratega, Comunicador y Visionario queden en la misma línea (usando `items-end` o altura fija en el contenedor de imagen).

2. **Eneagrama más grande**: Aumentar `max-w-[320px] lg:max-w-[360px]` a `max-w-[380px] lg:max-w-[420px]`.

3. **9 personajes Pixar para el eneagrama**: Generar 9 imágenes Pixar-style (una por tipo del eneagrama: Reformador, Ayudador, Triunfador, Individualista, Investigador, Leal, Entusiasta, Desafiador, Pacificador). Mostrar el personaje correspondiente dentro o alrededor de cada segmento de la rueda, o como tooltip visual al hacer hover.

4. **Zoom en tarjetas de liderazgo al hover en eneagrama**: Conectar el estado `hovered` del EnneagramWheel con las LeadershipCards. Cuando se haga hover sobre ciertos tipos del eneagrama, la tarjeta correspondiente (Estratega/Comunicador/Visionario) hará un zoom sutil. Esto requiere elevar el estado de hover a un componente padre compartido o usar un callback.

### Archivos a modificar/crear

| Archivo | Cambio |
|---------|--------|
| `src/components/LeadershipCards.tsx` | Altura fija en zona de imagen para alineación; recibir prop de highlight para zoom |
| `src/components/EnneagramWheel.tsx` | Aumentar tamaño; añadir imágenes Pixar por tipo; emitir callback de hover |
| `src/components/ServicesSection.tsx` | Pasar estado de hover entre EnneagramWheel y LeadershipCards |
| `src/assets/enneagram-*.png` (x9) | 9 nuevas imágenes Pixar-style para cada tipo del eneagrama |

### Detalle técnico

- **Alineación de tarjetas**: Contenedor de imagen con `h-36 flex items-end justify-center` para que todos los personajes se apoyen en la misma línea base.
- **Conexión hover**: EnneagramWheel recibe `onHoverChange(index | null)`. ServicesSection mantiene estado y pasa `highlightedArchetype` a LeadershipCards. Se mapean tipos del eneagrama a arquetipos (ej: tipos analíticos -> Estratega).
- **9 personajes**: Se generan con la API de imagen y se colocan en el centro del segmento al hacer hover, o como miniatura fija dentro de cada segmento.

