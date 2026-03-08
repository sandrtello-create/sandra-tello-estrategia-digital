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
    <section id="formacion" className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-mint/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-3">
            Formación en Inteligencia Artificial
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Aprende a aplicar la IA con estrategia y criterio
          </h2>
          <p className="text-primary-foreground/65 text-lg">
            Programas de formación y workshops diseñados para empresas, ejecutivos y profesionales 
            que quieren aplicar la inteligencia artificial de forma práctica y estratégica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:border-accent/30 hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center mb-5">
                <program.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary-foreground mb-3">
                {program.title}
              </h3>
              <p className="text-primary-foreground/60 leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-accent text-accent-foreground hover:bg-gold-light rounded-full px-8 py-6 text-sm font-semibold uppercase tracking-wider shadow-lg shadow-accent/20">
            Solicita información
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
