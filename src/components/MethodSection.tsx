import { Lightbulb, Brain, BarChart3, Cpu } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Estrategia",
    description: "Visión clara, objetivos definidos y un plan de acción para alcanzar resultados.",
    color: "from-accent/20 to-turquoise-light/20",
    iconColor: "text-accent",
  },
  {
    icon: Brain,
    title: "Criterio Humano",
    description: "La experiencia y el juicio profesional como pilar de cada decisión estratégica.",
    color: "from-coral/15 to-coral/5",
    iconColor: "text-coral",
  },
  {
    icon: BarChart3,
    title: "Marketing",
    description: "Posicionamiento, visibilidad y autoridad que genera oportunidades reales.",
    color: "from-lavender to-soft-pink/50",
    iconColor: "text-primary",
  },
  {
    icon: Cpu,
    title: "Inteligencia Artificial",
    description: "Herramientas de IA aplicadas con propósito para multiplicar tu impacto.",
    color: "from-primary/10 to-accent/10",
    iconColor: "text-primary",
  },
];

const MethodSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            El Método
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
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
              {/* Connector line */}
              {index < pillars.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
              <div className="text-center p-8 rounded-2xl bg-gradient-to-b border border-border/50 hover:shadow-lg transition-all duration-300"
                style={{ background: `linear-gradient(to bottom, hsl(var(--card)), hsl(var(--card)))` }}
              >
                <div className="relative mx-auto mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mx-auto`}>
                    <pillar.icon className={`h-9 w-9 ${pillar.iconColor}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{index + 1}</span>
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
