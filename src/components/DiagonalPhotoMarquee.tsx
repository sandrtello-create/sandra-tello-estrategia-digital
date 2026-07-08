import sandraAbout from "@/assets/sandra-tello-about.jpg";
import sandraHero from "@/assets/sandra-tello-hero.jpg";
import sandraIA from "@/assets/sandra-tello-ia.jpg";
import sandraMarcopolo from "@/assets/sandra-tello-marcopolo.jpg";

/**
 * Franja diagonal (estilo Vilma Núñez) con carrusel infinito.
 * Mezcla fotos reales grandes + tarjetas de color del brandbook
 * (teal, pink, yellow) como acento puntual.
 */

type Item =
  | { kind: "photo"; src: string; alt: string }
  | { kind: "card"; label: string; sub?: string; color: "teal" | "pink" | "yellow" | "navy" };

const row1: Item[] = [
  { kind: "photo", src: sandraHero, alt: "Sandra Tello · escena editorial" },
  { kind: "card", label: "IA con criterio", sub: "Formación", color: "teal" },
  { kind: "photo", src: sandraIA, alt: "Sandra enseñando IA" },
  { kind: "card", label: "Marca personal", sub: "Estrategia", color: "pink" },
  { kind: "photo", src: sandraAbout, alt: "Retrato Sandra Tello" },
  { kind: "card", label: "Consultora", sub: "Negocio + IA", color: "yellow" },
  { kind: "photo", src: sandraMarcopolo, alt: "Sandra con Marcopolo" },
  { kind: "card", label: "Chicharrera", sub: "Tenerife", color: "navy" },
];

const row2: Item[] = [
  { kind: "card", label: "Docente IA", sub: "Escuelas de negocio", color: "pink" },
  { kind: "photo", src: sandraIA, alt: "Sandra impartiendo formación" },
  { kind: "card", label: "18 años", sub: "en corporate", color: "navy" },
  { kind: "photo", src: sandraAbout, alt: "Sandra Tello retrato" },
  { kind: "card", label: "Piano", sub: "Conservatorio", color: "teal" },
  { kind: "photo", src: sandraHero, alt: "Sandra Tello escena" },
  { kind: "card", label: "Mediadora", sub: "Registrada", color: "yellow" },
  { kind: "photo", src: sandraMarcopolo, alt: "Sandra con Marcopolo" },
];

const colorMap: Record<"teal" | "pink" | "yellow" | "navy", string> = {
  teal: "bg-brand-teal text-primary",
  pink: "bg-brand-pink text-primary",
  yellow: "bg-brand-yellow text-primary",
  navy: "bg-primary text-primary-foreground",
};

const Tile = ({ item }: { item: Item }) => {
  if (item.kind === "photo") {
    return (
      <div className="relative shrink-0 h-[240px] md:h-[340px] lg:h-[400px] aspect-[3/4] overflow-hidden shadow-[0_20px_50px_-20px_rgba(27,42,74,0.35)]">
        <img src={item.src} alt={item.alt} className="w-full h-full object-cover" loading="lazy" />
      </div>
    );
  }
  return (
    <div
      className={`shrink-0 h-[240px] md:h-[340px] lg:h-[400px] aspect-[3/4] flex flex-col justify-between p-6 lg:p-8 ${colorMap[item.color]} shadow-[0_20px_50px_-20px_rgba(27,42,74,0.35)]`}
    >
      {item.sub && (
        <p className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.22em] opacity-80">
          {item.sub}
        </p>
      )}
      <p className="font-serif text-3xl md:text-5xl lg:text-6xl font-medium leading-[0.95]">
        {item.label}
      </p>
    </div>
  );
};

const Row = ({ items, reverse = false }: { items: Item[]; reverse?: boolean }) => {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex items-center gap-5 md:gap-7 w-max ${
          reverse ? "animate-scroll-photos-reverse" : "animate-scroll-photos"
        }`}
      >
        {doubled.map((it, i) => (
          <Tile key={i} item={it} />
        ))}
      </div>
    </div>
  );
};

const DiagonalPhotoMarquee = () => {
  return (
    <section
      aria-label="Galería visual de Sandra Tello"
      className="relative py-16 md:py-24 bg-primary text-primary-foreground overflow-hidden"
    >
      {/* diagonal band */}
      <div
        className="relative -mx-8"
        style={{ transform: "rotate(-4deg)", transformOrigin: "center" }}
      >
        <div className="py-4 md:py-6 space-y-5 md:space-y-7">
          <Row items={row1} />
          <Row items={row2} reverse />
        </div>
      </div>

      {/* Overlay tag on the corner */}
      <div className="container mx-auto px-6 lg:px-8 mt-10 md:mt-14 max-w-6xl flex items-center justify-between gap-6">
        <p className="font-sans text-[11px] md:text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
          Escenarios · Aulas · Consultoría · Vida
        </p>
        <p className="font-serif italic text-lg md:text-2xl text-primary-foreground/90 max-w-md text-right leading-snug">
          «Todo lo que soy también forma parte de cómo trabajo.»
        </p>
      </div>
    </section>
  );
};

export default DiagonalPhotoMarquee;
