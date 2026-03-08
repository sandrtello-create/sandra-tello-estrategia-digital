import { useState, useEffect, useRef } from "react";
import { Brain, Target, Search, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Consultoría estratégica con IA",
    description:
      "Integra la IA en tu estrategia de negocio con un enfoque práctico y personalizado. Decisiones más inteligentes, procesos más eficientes.",
  },
  {
    icon: Target,
    title: "Posicionamiento de marca personal",
    description:
      "Define tu propuesta de valor única, construye una narrativa diferenciadora y posiciónate como referente en tu sector.",
  },
  {
    icon: Search,
    title: "Auditoría de presencia digital",
    description:
      "Análisis completo de tu ecosistema digital: web, redes sociales, contenido y reputación online con recomendaciones claras de mejora.",
  },
  {
    icon: Users,
    title: "Employee advocacy y liderazgo digital",
    description:
      "Convierte a los líderes de tu empresa en embajadores de marca. Programas de posicionamiento ejecutivo en LinkedIn y más.",
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
          height: hovered ? "100%" : "0%",
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="grid lg:grid-cols-[100px_1fr] gap-6 lg:gap-10 items-start">
        {/* Number */}
        <span
          className="font-serif text-5xl lg:text-6xl font-semibold transition-colors duration-500"
          style={{
            color: hovered
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
              style={{ opacity: hovered ? 1 : 0.5 }}
            />
            <h3 className="font-serif text-xl lg:text-2xl font-medium text-primary">
              {service.title}
            </h3>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-xl mb-5">
            {service.description}
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center text-accent font-semibold text-[12px] uppercase tracking-[0.15em] gap-2 hover:gap-3 transition-all duration-300"
          >
            Saber más
            <ArrowRight className="h-4 w-4" />
          </a>
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
          <p className="text-muted-foreground text-[15px] leading-relaxed mt-3">
            Para profesionales y empresas que quieren ordenar su estrategia,
            posicionar su valor y utilizar la inteligencia artificial con criterio.
          </p>
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
