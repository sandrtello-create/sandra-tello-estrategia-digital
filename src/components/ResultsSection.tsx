import { Eye, TrendingUp, Award, Compass, Zap, Heart } from "lucide-react";

const results = [
  {
    icon: Eye,
    title: "Claridad",
    description: "Visión clara de tu posicionamiento, tu mensaje y tus próximos pasos estratégicos.",
    stat: "100%",
    statLabel: "claridad en tu dirección",
  },
  {
    icon: TrendingUp,
    title: "Mejor posicionamiento",
    description: "Diferenciación real en tu mercado con una marca personal que atrae oportunidades.",
    stat: "3x",
    statLabel: "más visibilidad",
  },
  {
    icon: Award,
    title: "Autoridad profesional",
    description: "Conviértete en referente de tu sector con una presencia que inspira confianza.",
    stat: "Top",
    statLabel: "de tu sector",
  },
  {
    icon: Compass,
    title: "Decisiones estratégicas",
    description: "Toma mejores decisiones de negocio combinando datos, IA y criterio experto.",
    stat: "10x",
    statLabel: "mejores decisiones",
  },
  {
    icon: Zap,
    title: "Integración real de IA",
    description: "Implementa la IA de forma práctica y alineada con tu estrategia de negocio.",
    stat: "+50%",
    statLabel: "productividad",
  },
  {
    icon: Heart,
    title: "La vida que amas",
    description: "Diseña un negocio que trabaje para ti y te permita vivir con libertad y propósito.",
    stat: "∞",
    statLabel: "libertad y equilibrio",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-3">
            Resultados
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Transforma tu negocio y crea la vida que amas
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada proceso está diseñado para generar transformaciones reales: 
            más resultados, más libertad y una vida profesional alineada con lo que realmente importa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-md transition-all duration-300 bg-card"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <result.icon className="h-6 w-6 text-accent" />
              </div>
              <p className="font-serif text-3xl font-bold text-accent mb-1">{result.stat}</p>
              <p className="text-xs text-muted-foreground mb-3">{result.statLabel}</p>
              <h3 className="font-serif text-lg font-bold text-primary mb-2">{result.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
