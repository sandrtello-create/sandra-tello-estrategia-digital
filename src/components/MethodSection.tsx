import { Brain, Cpu, BarChart3, Heart, Briefcase } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Mentalidad",
    description:
      "Supera el autosabotaje y el síndrome del impostor. La confianza es tu mayor ventaja competitiva.",
  },
  {
    icon: Cpu,
    title: "Inteligencia Artificial",
    description:
      "Herramientas de IA aplicadas con propósito para multiplicar tu impacto y optimizar tu tiempo.",
  },
  {
    icon: BarChart3,
    title: "Marketing",
    description:
      "Posicionamiento, visibilidad y autoridad que genera oportunidades reales de negocio.",
  },
  {
    icon: Heart,
    title: "VIDA",
    description:
      "Alineación entre tu proyecto profesional y tu vida personal. Desde la coherencia.",
  },
  {
    icon: Briefcase,
    title: "Negocio",
    description:
      "Estrategia, objetivos claros y un plan de acción para generar resultados reales y sostenibles.",
  },
];

const MethodSection = () => {
  return (
    <section className="py-28 lg:py-36 bg-section-alt">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
            El Método
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[52px] font-medium text-primary mb-6 leading-[1.15]">
            Inteligencia Humana Estratégica™
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Un sistema que alinea mentalidad, IA, marketing, VIDA y negocio
            para que con la tecnología impulses tu valor.{" "}
            <span className="text-foreground font-medium">Desde la coherencia.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px bg-border max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-background p-10 text-center hover:bg-card transition-colors duration-300"
            >
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <pillar.icon className="h-9 w-9 text-accent" />
              </div>
              <div className="text-accent font-serif text-sm font-semibold mb-2">
                0{index + 1}
              </div>
              <h3 className="font-serif text-[22px] font-medium text-primary mb-4">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-[15px] leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center mt-16 font-serif text-xl md:text-2xl text-primary/80 italic max-w-2xl mx-auto">
          "Porque la confianza convierte antes que cualquier algoritmo."
        </p>
      </div>
    </section>
  );
};

export default MethodSection;
