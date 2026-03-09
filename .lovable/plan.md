

## Plan: Etiqueta "El Método" más grande y en dorado

### Cambio en `src/components/MethodSection.tsx`

**Línea 41-42**: Cambiar la etiqueta "El Método" de `text-[11px]` a un tamaño más grande (~`text-sm` o `text-[13px]`) y aplicar el estilo dorado con `gold-gradient-text` (que ya existe en el CSS del proyecto) para mantener coherencia con el resto de secciones.

```tsx
// De:
<p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
  El Método
</p>

// A:
<p className="gold-gradient-text font-semibold text-sm uppercase tracking-[0.25em] mb-4">
  El Método
</p>
```

Solo este cambio — sin tocar la estructura ni el fondo de la sección.

