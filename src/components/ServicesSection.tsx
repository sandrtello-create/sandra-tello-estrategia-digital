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
    <section id="servicios" className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-3">
            Servicios
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Soluciones estratégicas para tu crecimiento
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada servicio está diseñado para generar resultados reales, combinando estrategia, 
            criterio humano e inteligencia artificial.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border/60 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/15 to-gold-light/15 flex items-center justify-center mb-6 group-hover:from-accent/25 group-hover:to-gold-light/25 transition-all">
                <service.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {service.description}
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center text-accent font-semibold text-sm hover:gap-3 gap-2 transition-all"
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
