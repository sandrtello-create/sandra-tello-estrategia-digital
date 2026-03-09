import estrategaImg from "@/assets/archetype-estratega.png";
import comunicadorImg from "@/assets/archetype-comunicador.png";
import visionarioImg from "@/assets/archetype-visionario.png";

const archetypes = [
  {
    image: estrategaImg,
    title: "El Estratega",
    subtitle: "Analítico · Orientado a datos",
    description:
      "Lidera con visión clara y decisiones basadas en información. Su marca personal transmite autoridad y conocimiento técnico.",
    imageClass: "h-28 w-28",
  },
  {
    image: comunicadorImg,
    title: "El Comunicador",
    subtitle: "Relacional · Orientado a personas",
    description:
      "Conecta con su audiencia desde la autenticidad. Su liderazgo digital se construye sobre relaciones genuinas y storytelling.",
    imageClass: "h-28 w-28",
  },
  {
    image: visionarioImg,
    title: "El Visionario",
    subtitle: "Creativo · Orientado a innovación",
    description:
      "Inspira con ideas disruptivas y contenido que desafía el status quo. Su presencia digital genera conversación y tendencia.",
    imageClass: "h-32 w-32 scale-110",
  },
];

const LeadershipCards = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-5 mt-8">
      {archetypes.map((a, i) => (
        <div
          key={i}
          className="group border border-border/40 hover:border-accent/40 transition-all duration-300 hover:shadow-md bg-background/50 overflow-hidden text-center"
        >
          <div className="pt-6 pb-2 flex justify-center">
            <img
              src={a.image}
              alt={a.title}
              className={`${a.imageClass} object-contain group-hover:scale-105 transition-transform duration-500`}
            />
          </div>
          <div className="px-5 pb-5">
            <h4 className="font-serif text-base font-semibold text-primary mb-1">{a.title}</h4>
            <p className="text-[11px] uppercase tracking-[0.12em] text-accent font-semibold mb-3">{a.subtitle}</p>
            <p className="text-[13px] text-muted-foreground leading-relaxed">{a.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeadershipCards;
