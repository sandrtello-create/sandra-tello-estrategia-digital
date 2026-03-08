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
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
            Formación en Inteligencia Artificial
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-medium text-primary-foreground mb-5 leading-[1.2]">
            Aprende a aplicar la IA con estrategia y criterio
          </h2>
          <p className="text-primary-foreground/60 text-[17px] leading-relaxed">
            Programas de formación y workshops diseñados para empresas, ejecutivos y profesionales 
            que quieren aplicar la inteligencia artificial de forma práctica y estratégica.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-primary-foreground/5 backdrop-blur-sm p-8 border border-primary-foreground/10 hover:border-accent/30 hover:bg-primary-foreground/8 transition-all duration-300"
            >
              <program.icon className="h-7 w-7 text-accent mb-5" />
              <h3 className="font-serif text-xl font-medium text-primary-foreground mb-3">
                {program.title}
              </h3>
              <p className="text-primary-foreground/55 leading-relaxed">
                {program.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-accent text-accent-foreground hover:bg-gold-light rounded-none px-10 py-6 text-[13px] font-semibold uppercase tracking-[0.18em] shadow-none border border-accent">
            Solicita información
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
