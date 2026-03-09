import { useRef, useState, useEffect } from "react";
import estrategaImg from "@/assets/archetype-estratega.png";
import comunicadorImg from "@/assets/archetype-comunicador.png";
import visionarioImg from "@/assets/archetype-visionario.png";
import type { ArchetypeKey } from "./EnneagramWheel";

const archetypes = [
  {
    key: "estratega" as const,
    image: estrategaImg,
    title: "El Estratega",
    subtitle: "Analítico · Orientado a datos",
    description:
      "Lidera con visión clara y decisiones basadas en información. Su marca personal transmite autoridad y conocimiento técnico.",
  },
  {
    key: "comunicador" as const,
    image: comunicadorImg,
    title: "El Comunicador",
    subtitle: "Relacional · Orientado a personas",
    description:
      "Conecta con su audiencia desde la autenticidad. Su liderazgo digital se construye sobre relaciones genuinas y storytelling.",
  },
  {
    key: "visionario" as const,
    image: visionarioImg,
    title: "El Visionario",
    subtitle: "Creativo · Orientado a innovación",
    description:
      "Inspira con ideas disruptivas y contenido que desafía el status quo. Su presencia digital genera conversación y tendencia.",
  },
];

interface LeadershipCardsProps {
  highlightedArchetype?: ArchetypeKey;
}

const LeadershipCards = ({ highlightedArchetype }: LeadershipCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="grid sm:grid-cols-3 gap-5 mt-8">
      {archetypes.map((a, i) => {
        const isHighlighted = highlightedArchetype === a.key;
        return (
          <div
            key={i}
            className={`group border transition-all duration-500 bg-background/50 overflow-hidden text-center cursor-pointer
              ${isHighlighted
                ? "border-accent/60 shadow-lg"
                : "border-border/40 hover:border-accent/40 hover:shadow-md"
              }`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: `translateY(${isVisible ? 0 : 20}px) scale(${isHighlighted ? 1.06 : 1})`,
              transitionDelay: isVisible ? `${i * 150}ms` : "0ms",
            }}
            onMouseEnter={(e) => { if (!isHighlighted) e.currentTarget.style.transform = "translateY(0) scale(1.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = `translateY(0) scale(${isHighlighted ? 1.06 : 1})`; }}
          >
            <div className="h-36 pt-4 flex items-end justify-center">
              <img
                src={a.image}
                alt={a.title}
                className={`h-28 w-28 object-contain transition-transform duration-500 ${
                  isHighlighted ? "scale-110" : "group-hover:scale-105"
                }`}
              />
            </div>
            <div className="px-5 pb-5 pt-2">
              <h4 className="font-serif text-base font-semibold text-primary mb-1">{a.title}</h4>
              <p className="text-[11px] uppercase tracking-[0.12em] text-accent font-semibold mb-3">{a.subtitle}</p>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{a.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeadershipCards;
