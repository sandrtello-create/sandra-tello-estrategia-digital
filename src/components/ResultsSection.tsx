import { Eye, TrendingUp, Award, Compass, Zap, Heart } from "lucide-react";

const results = [
  {
    icon: Eye,
    title: "Claridad",
    description: "Visión clara de tu posicionamiento, tu mensaje y tus próximos pasos estratégicos.",
  },
  {
    icon: TrendingUp,
    title: "Mejor posicionamiento",
    description: "Diferenciación real en tu mercado con una marca personal que atrae oportunidades.",
  },
  {
    icon: Award,
    title: "Autoridad profesional",
    description: "Conviértete en referente de tu sector con una presencia que inspira confianza.",
  },
  {
    icon: Compass,
    title: "Decisiones estratégicas",
    description: "Toma mejores decisiones de negocio combinando datos, IA y criterio experto.",
  },
  {
    icon: Zap,
    title: "Integración real de IA",
    description: "Implementa la IA de forma práctica y alineada con tu estrategia de negocio.",
  },
  {
    icon: Heart,
    title: "La vida que amas",
    description: "Diseña un negocio que trabaje para ti y te permita vivir con libertad y propósito.",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-section-alt">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
            Resultados
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-medium text-primary mb-5 leading-[1.2]">
            Transforma tu negocio y crea la vida que amas
          </h2>
          <p className="text-muted-foreground text-[17px] leading-relaxed">
            Cada proceso está diseñado para generar transformaciones reales: 
            más resultados, más libertad y una vida profesional alineada con lo que realmente importa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-background p-8 text-center hover:bg-background transition-all duration-300 group"
            >
              <result.icon className="h-7 w-7 text-accent mx-auto mb-4" />
              <h3 className="font-serif text-xl font-medium text-primary mb-2">{result.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
