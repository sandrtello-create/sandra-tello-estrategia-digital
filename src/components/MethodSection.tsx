import { Lightbulb, Brain, BarChart3, Cpu } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Estrategia",
    description: "Visión clara, objetivos definidos y un plan de acción para alcanzar resultados.",
    iconColor: "text-accent",
  },
  {
    icon: Brain,
    title: "Criterio Humano",
    description: "La experiencia y el juicio profesional como pilar de cada decisión estratégica.",
    iconColor: "text-mint",
  },
  {
    icon: BarChart3,
    title: "Marketing",
    description: "Posicionamiento, visibilidad y autoridad que genera oportunidades reales.",
    iconColor: "text-primary",
  },
  {
    icon: Cpu,
    title: "Inteligencia Artificial",
    description: "Herramientas de IA aplicadas con propósito para multiplicar tu impacto.",
    iconColor: "text-accent",
  },
];

const MethodSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-3">
            El Método
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Inteligencia Humana Estratégica™
          </h2>
          <p className="text-muted-foreground text-lg">
            Un framework único que integra cuatro pilares para transformar tu expertise 
            en autoridad y resultados de negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div key={index} className="relative">
              {index < pillars.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
              <div className="text-center p-8 rounded-2xl bg-card border border-border/50 hover:shadow-lg hover:border-accent/20 transition-all duration-300">
                <div className="relative mx-auto mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center mx-auto">
                    <pillar.icon className={`h-9 w-9 ${pillar.iconColor}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-xs font-bold text-accent-foreground">{index + 1}</span>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
