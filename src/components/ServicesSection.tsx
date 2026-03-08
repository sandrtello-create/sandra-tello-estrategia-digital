import { Brain, Target, Search, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Consultoría estratégica con inteligencia artificial",
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

const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
            Servicios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-medium text-primary mb-5 leading-[1.2]">
            Soluciones estratégicas para tu crecimiento
          </h2>
          <p className="text-muted-foreground text-[17px] leading-relaxed">
            Cada servicio está diseñado para generar resultados reales, combinando estrategia, 
            criterio humano e inteligencia artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background p-8 lg:p-10 border border-border/60 hover:border-accent/40 hover:shadow-lg transition-all duration-300"
            >
              <service.icon className="h-7 w-7 text-accent mb-6" />
              <h3 className="font-serif text-xl lg:text-2xl font-medium text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {service.description}
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center text-accent font-semibold text-sm hover:gap-3 gap-2 transition-all uppercase tracking-wider text-[12px]"
              >
                Saber más
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
