import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, Briefcase, ArrowRight, Brain } from "lucide-react";

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

const NeuralNetworkSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.04]"
    viewBox="0 0 800 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    {/* Connections */}
    <line x1="100" y1="100" x2="300" y2="200" stroke="currentColor" strokeWidth="1" />
    <line x1="300" y1="200" x2="500" y2="120" stroke="currentColor" strokeWidth="1" />
    <line x1="500" y1="120" x2="700" y2="250" stroke="currentColor" strokeWidth="1" />
    <line x1="100" y1="100" x2="200" y2="350" stroke="currentColor" strokeWidth="1" />
    <line x1="200" y1="350" x2="400" y2="400" stroke="currentColor" strokeWidth="1" />
    <line x1="400" y1="400" x2="600" y2="350" stroke="currentColor" strokeWidth="1" />
    <line x1="600" y1="350" x2="700" y2="250" stroke="currentColor" strokeWidth="1" />
    <line x1="300" y1="200" x2="400" y2="400" stroke="currentColor" strokeWidth="1" />
    <line x1="500" y1="120" x2="600" y2="350" stroke="currentColor" strokeWidth="1" />
    <line x1="200" y1="350" x2="300" y2="200" stroke="currentColor" strokeWidth="1" />
    <line x1="150" y1="500" x2="200" y2="350" stroke="currentColor" strokeWidth="1" />
    <line x1="150" y1="500" x2="400" y2="400" stroke="currentColor" strokeWidth="1" />
    <line x1="650" y1="480" x2="600" y2="350" stroke="currentColor" strokeWidth="1" />
    <line x1="650" y1="480" x2="700" y2="250" stroke="currentColor" strokeWidth="1" />
    {/* Nodes */}
    {[
      [100, 100], [300, 200], [500, 120], [700, 250],
      [200, 350], [400, 400], [600, 350],
      [150, 500], [650, 480],
    ].map(([cx, cy], i) => (
      <circle key={i} cx={cx} cy={cy} r="5" fill="currentColor" />
    ))}
  </svg>
);

const ProgramCard = ({
  program,
  index,
}: {
  program: (typeof programs)[0];
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className="relative pl-5 py-8 px-8 bg-primary-foreground/[0.03] border border-primary-foreground/10 transition-all duration-500 group"
      style={{
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 20px 40px -15px hsl(var(--accent) / 0.15)"
          : "none",
        borderColor: hovered
          ? "hsl(var(--accent) / 0.3)"
          : "hsl(var(--primary-foreground) / 0.1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gold left border */}
      <div
        className="absolute left-0 top-0 w-[3px] bg-accent transition-all duration-500 ease-out"
        style={{
          height: hovered ? "100%" : "0%",
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Number */}
      <span
        className="font-serif text-5xl font-semibold block mb-5 transition-colors duration-500"
        style={{
          color: hovered
            ? "hsl(var(--accent) / 0.5)"
            : "hsl(var(--accent) / 0.12)",
        }}
      >
        {num}
      </span>

      {/* Icon with circular bg */}
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-5">
        <program.icon className="h-6 w-6 text-accent" />
      </div>

      <h3 className="font-serif text-xl font-medium text-primary-foreground mb-3">
        {program.title}
      </h3>
      <p className="text-primary-foreground/55 leading-relaxed text-[15px]">
        {program.description}
      </p>
    </div>
  );
};

const TrainingSection = () => {
  return (
    <section
      id="formacion"
      className="py-20 lg:py-28 bg-navy-light border-t border-accent/20 relative overflow-hidden"
    >
      {/* Neural network background pattern */}
      <div className="text-primary-foreground">
        <NeuralNetworkSVG />
      </div>

      {/* Radial gold gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, hsl(var(--accent) / 0.04) 0%, transparent 60%)",
        }}
      />

      {/* AI brain watermark */}
      <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 opacity-[0.03] text-primary-foreground pointer-events-none">
        <Brain className="w-[320px] h-[320px]" strokeWidth={0.8} />
      </div>

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
            <ProgramCard key={index} program={program} index={index} />
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
