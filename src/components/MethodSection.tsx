import { Lightbulb, Brain, BarChart3, Cpu } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Estrategia",
    description: "Visión clara, objetivos definidos y un plan de acción para alcanzar resultados.",
  },
  {
    icon: Brain,
    title: "Criterio Humano",
    description: "La experiencia y el juicio profesional como pilar de cada decisión estratégica.",
  },
  {
    icon: BarChart3,
    title: "Marketing",
    description: "Posicionamiento, visibilidad y autoridad que genera oportunidades reales.",
  },
  {
    icon: Cpu,
    title: "Inteligencia Artificial",
    description: "Herramientas de IA aplicadas con propósito para multiplicar tu impacto.",
  },
];

const MethodSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
            El Método
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-medium text-primary mb-5 leading-[1.2]">
            Inteligencia Humana Estratégica™
          </h2>
          <p className="text-muted-foreground text-[17px] leading-relaxed">
            Un framework único que integra cuatro pilares para transformar tu expertise 
            en autoridad y resultados de negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-background p-8 text-center hover:bg-section-alt transition-colors duration-300">
              <div className="w-14 h-14 flex items-center justify-center mx-auto mb-5">
                <pillar.icon className="h-8 w-8 text-accent" />
              </div>
              <div className="text-accent font-serif text-sm font-semibold mb-2">0{index + 1}</div>
              <h3 className="font-serif text-xl font-medium text-primary mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
