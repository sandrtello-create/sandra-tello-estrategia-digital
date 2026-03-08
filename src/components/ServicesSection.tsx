import { useState, useEffect, useRef } from "react";
import { Brain, Target, Search, Users, ArrowRight, ChevronDown } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Consultoría estratégica con IA",
    description:
      "Integra la IA en tu estrategia de negocio con un enfoque práctico y personalizado. Decisiones más inteligentes, procesos más eficientes.",
    details: {
      intro: "Analizo tu negocio para entender en qué punto está y qué oportunidades tiene.",
      points: [
        "Estudio de competencia",
        "Análisis del mercado y sector",
        "Posicionamiento del negocio",
        "Oportunidades de crecimiento y diferenciación",
        "Integración estratégica de inteligencia artificial",
      ],
      closing: "A partir de ese diagnóstico, diseño una estrategia clara para que tu negocio crezca con dirección.",
    },
  },
  {
    icon: Target,
    title: "Posicionamiento de marca personal",
    description:
      "Define tu propuesta de valor única, construye una narrativa diferenciadora y posiciónate como referente en tu sector.",
    details: {
      intro: "Trabajamos tu identidad profesional para que comuniques con claridad quién eres y qué te diferencia.",
      points: [
        "Estrategia de contenidos",
        "Narrativa y mensaje diferenciador",
        "Definición de propuesta de valor",
        "Plan de visibilidad y posicionamiento",
        "Presencia digital coherente en todos tus canales",
      ],
      closing: "Que cuando alguien busque lo que tú haces, te encuentre a ti.",
    },
  },
  {
    icon: Search,
    title: "Auditoría de presencia digital",
    description:
      "Análisis completo de tu ecosistema digital: web, redes sociales, contenido y reputación online con recomendaciones claras de mejora.",
    details: {
      intro: "Reviso tu ecosistema digital al completo para detectar qué funciona, qué falta y qué sobra.",
      points: [
        "Análisis de web y SEO básico",
        "Revisión de redes sociales",
        "Coherencia de marca en canales",
        "Reputación online",
        "Informe con recomendaciones priorizadas",
      ],
      closing: "Un diagnóstico honesto con un plan de acción claro.",
    },
  },
  {
    icon: Users,
    title: "Employee advocacy y liderazgo digital",
    description:
      "Convierte a los líderes de tu empresa en embajadores de marca. Programas de posicionamiento ejecutivo en LinkedIn y más.",
    details: {
      intro: "Ayudo a las empresas a convertir a sus directivos y equipos en embajadores de marca.",
      points: [
        "Diagnóstico de presencia digital de los líderes",
        "Formación en marca personal",
        "Estrategia de contenidos para ejecutivos",
        "Programa de employee advocacy",
        "Medición de impacto y resultados",
      ],
      closing: "Que la voz de tu empresa no dependa solo del logo.",
    },
  },
];

const ServiceItem = ({
  service,
  index,
  isVisible,
}: {
  service: (typeof services)[0];
  index: number;
  isVisible: boolean;
}) => {
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className="group relative pl-6 py-10 lg:py-14 border-b border-border/40 last:border-b-0 cursor-pointer transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 120}ms`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gold left border on hover */}
      <div
        className="absolute left-0 top-0 w-[3px] bg-accent transition-all duration-500 ease-out"
        style={{
          height: hovered || expanded ? "100%" : "0%",
          opacity: hovered || expanded ? 1 : 0,
        }}
      />

      <div className="grid lg:grid-cols-[100px_1fr] gap-6 lg:gap-10 items-start">
        {/* Number */}
        <span
          className="font-serif text-5xl lg:text-6xl font-semibold transition-colors duration-500"
          style={{
            color: hovered || expanded
              ? "hsl(var(--accent) / 0.6)"
              : "hsl(var(--accent) / 0.15)",
          }}
        >
          {num}
        </span>

        {/* Content */}
        <div
          className="transition-transform duration-500 ease-out"
          style={{
            transform: hovered ? "translateX(8px)" : "translateX(0)",
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <service.icon
              className="h-5 w-5 text-accent transition-opacity duration-300"
              style={{ opacity: hovered || expanded ? 1 : 0.5 }}
            />
            <h3 className="font-serif text-xl lg:text-2xl font-medium text-primary">
              {service.title}
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-xl mb-5">
            {service.description}
          </p>

          {/* Toggle button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center text-accent font-semibold text-[12px] uppercase tracking-[0.15em] gap-2 hover:gap-3 transition-all duration-300"
          >
            {expanded ? "Ver menos" : "Saber más"}
            <ChevronDown
              className="h-4 w-4 transition-transform duration-300"
              style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>

          {/* Expandable details */}
          <div
            className="overflow-hidden transition-all duration-500 ease-out"
            style={{
              maxHeight: expanded ? `${contentRef.current?.scrollHeight ?? 500}px` : "0px",
              opacity: expanded ? 1 : 0,
            }}
          >
            <div ref={contentRef} className="pt-6">
              <p className="italic text-muted-foreground leading-relaxed mb-4">
                {service.details.intro}
              </p>
              <ul className="space-y-2.5 mb-5">
                {service.details.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-primary/80 text-[15px] leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <p className="italic font-medium text-primary/70 text-[15px]">
                {service.details.closing}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
            Servicios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-medium text-primary mb-5 leading-[1.2]">
            Tu negocio no necesita más ruido. Necesita estrategia.
          </h2>
          <p className="text-muted-foreground text-[17px] leading-relaxed">
            Estrategia, marketing e inteligencia artificial para que tu negocio
            crezca con dirección, no por inercia.
          </p>
          <div className="flex justify-center mt-5 mb-5">
            <div className="h-px w-10 bg-accent/40" />
          </div>
          <div className="inline-block bg-accent/[0.08] border border-accent/20 rounded-lg px-6 py-4">
            <p className="text-primary/80 text-[15px] leading-relaxed font-medium">
              Para profesionales y empresas que quieren ordenar su estrategia,
              posicionar su valor y utilizar la inteligencia artificial con criterio.
            </p>
          </div>
        </div>

        <div ref={sectionRef} className="max-w-3xl mx-auto">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              service={service}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
