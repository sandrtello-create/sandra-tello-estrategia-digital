import { BarChart3, MessageCircle, Lightbulb } from "lucide-react";

const archetypes = [
  {
    icon: BarChart3,
    title: "El Estratega",
    subtitle: "Analítico · Orientado a datos",
    description:
      "Lidera con visión clara y decisiones basadas en información. Su marca personal transmite autoridad y conocimiento técnico.",
  },
  {
    icon: MessageCircle,
    title: "El Comunicador",
    subtitle: "Relacional · Orientado a personas",
    description:
      "Conecta con su audiencia desde la autenticidad. Su liderazgo digital se construye sobre relaciones genuinas y storytelling.",
  },
  {
    icon: Lightbulb,
    title: "El Visionario",
    subtitle: "Creativo · Orientado a innovación",
    description:
      "Inspira con ideas disruptivas y contenido que desafía el status quo. Su presencia digital genera conversación y tendencia.",
  },
];

const LeadershipCards = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-4 mt-8">
      {archetypes.map((a, i) => (
        <div
          key={i}
          className="group border border-border/40 hover:border-accent/40 p-5 transition-all duration-300 hover:shadow-md bg-background/50"
        >
          <a.icon className="h-6 w-6 text-accent mb-3 group-hover:scale-110 transition-transform duration-300" />
          <h4 className="font-serif text-base font-semibold text-primary mb-1">{a.title}</h4>
          <p className="text-[11px] uppercase tracking-[0.12em] text-accent font-semibold mb-3">{a.subtitle}</p>
          <p className="text-[13px] text-muted-foreground leading-relaxed">{a.description}</p>
        </div>
      ))}
    </div>
  );
};

export default LeadershipCards;
