import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, Briefcase, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: Building2,
    title: "Formación para empresas",
    description:
      "Programas in-company para equipos que necesitan integrar la IA de forma estratégica en su día a día.",
  },
  {
    icon: Briefcase,
    title: "Workshops para ejecutivos",
    description:
      "Sesiones intensivas de alto nivel para directivos que quieren liderar la transformación con IA.",
  },
  {
    icon: GraduationCap,
    title: "Programas para profesionales",
    description:
      "Formación práctica para profesionales que quieren multiplicar su productividad e impacto con IA.",
  },
];

const TrainingSection = () => {
  return (
    <section id="formacion" className="py-20 lg:py-28 bg-gradient-to-br from-lavender via-soft-pink/50 to-lavender-dark/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-coral font-semibold text-sm uppercase tracking-widest mb-3">
            Formación en Inteligencia Artificial
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
            Aprende a aplicar la IA con estrategia y criterio
          </h2>
          <p className="text-muted-foreground text-lg">
            Programas de formación y workshops diseñados para empresas, ejecutivos y profesionales 
            que quieren aplicar la inteligencia artificial de forma práctica y estratégica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-5">
                <program.icon className="h-6 w-6 text-coral" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-3">
                {program.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-coral text-coral-foreground hover:bg-coral/90 rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-coral/20">
            Solicita información
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
