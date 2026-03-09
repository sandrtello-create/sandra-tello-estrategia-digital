import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, Briefcase, ArrowRight, Bot, MessageSquare, Mic, Globe, Palette, Zap, Phone, Share2, Video, UserRound } from "lucide-react";
import sandraIA from "@/assets/sandra-tello-ia.jpg";

const programs = [
  {
    icon: Building2,
    title: "Formación para empresas",
    description:
      "Programas in-company (en remoto o presencial) para equipos que necesitan integrar la IA de forma estratégica en su día a día.",
  },
  {
    icon: Briefcase,
    title: "Workshops para ejecutivos",
    description:
      "Sesiones intensivas de alto nivel adaptadas al negocio en cuestión, para directivos que quieren liderar la transformación con IA.",
  },
  {
    icon: GraduationCap,
    title: "Programas para profesionales",
    description:
      "Formación práctica, incluyendo clases individuales 1 a 1, para profesionales que quieren multiplicar su productividad e impacto con IA.",
  },
];

const tools = [
  { icon: MessageSquare, label: "Chatbots WhatsApp" },
  { icon: Bot, label: "Agentes IA" },
  { icon: Video, label: "Avatares IA" },
  { icon: Mic, label: "Voz IA" },
  { icon: Phone, label: "Atención telefónica IA" },
  { icon: Zap, label: "Automatización" },
  { icon: Share2, label: "Contenido RRSS" },
  { icon: Globe, label: "Creación de webs" },
  { icon: Palette, label: "Diseño con IA" },
  { icon: UserRound, label: "Clases 1 a 1" },
];

const NeuralNetworkSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.04]"
    viewBox="0 0 800 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
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
      className="relative pl-5 py-6 px-6 bg-primary-foreground/[0.03] border border-primary-foreground/10 transition-all duration-500"
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
      <div
        className="absolute left-0 top-0 w-[3px] bg-accent transition-all duration-500 ease-out"
        style={{
          height: hovered ? "100%" : "0%",
          opacity: hovered ? 1 : 0,
        }}
      />

      <div className="flex items-start gap-5">
        <span
          className="font-serif text-4xl font-semibold shrink-0 transition-colors duration-500"
          style={{
            color: hovered
              ? "hsl(var(--accent) / 0.5)"
              : "hsl(var(--accent) / 0.12)",
          }}
        >
          {num}
        </span>

        <div>
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-3">
            <program.icon className="h-5 w-5 text-accent" />
          </div>

          <h3 className="font-serif text-lg font-medium text-primary-foreground mb-2">
            {program.title}
          </h3>
          <p className="text-primary-foreground/55 leading-relaxed text-[14px]">
            {program.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const TrainingSection = () => {
  return (
    <section
      id="formacion"
      className="py-20 lg:py-28 bg-navy-light border-t border-accent/20 relative overflow-hidden"
    >
      <div className="text-primary-foreground">
        <NeuralNetworkSVG />
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, hsl(var(--accent) / 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center gap-10">
          {/* Header */}
          <div className="text-center max-w-3xl">
            <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
              Formación en Inteligencia Artificial
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[40px] font-medium text-primary-foreground mb-5 leading-[1.2]">
              Aprende a aplicar la IA con estrategia y criterio
            </h2>
            <p className="text-primary-foreground/60 text-[16px] leading-relaxed mb-4">
              No necesitas saber de tecnología. Mis programas están pensados para profesionales y equipos
              que parten de cero en IA y quieren aplicarla de forma práctica en su sector.
              Formación 100% aplicada a tu negocio, no genérica.
            </p>
            <p className="text-primary-foreground/50 text-[14px] leading-relaxed">
              He formado a equipos en sectores como el <span className="text-accent/80 font-medium">industrial</span>,{" "}
              <span className="text-accent/80 font-medium">transporte</span>,{" "}
              <span className="text-accent/80 font-medium">turismo</span> y{" "}
              <span className="text-accent/80 font-medium">educativo</span>,
              con especial foco en comunicación y redes sociales.
            </p>
          </div>

          {/* Photo */}
          <div className="w-full relative overflow-hidden">
            <img
              src={sandraIA}
              alt="Sandra Tello trabajando con inteligencia artificial"
              className="w-full h-auto object-cover max-h-[480px]"
            />
            {/* Blur overlays on monitor screens */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, hsl(var(--navy-light)) 0%, transparent 20%), linear-gradient(to bottom, hsl(var(--navy-light)) 0%, transparent 15%)",
              }}
            />
            <div className="absolute bottom-0 left-0 w-full h-[3px] bg-accent/30" />
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-5 w-full">
            {programs.map((program, index) => (
              <ProgramCard key={index} program={program} index={index} />
            ))}
          </div>

          {/* Tools grid */}
          <div className="w-full">
            <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-6 text-center">
              Qué aprenden a utilizar
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((tool, i) => {
                const color = toolColors[tool.colorIdx];
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-2.5 px-4 py-2.5 border ${color.border} bg-primary-foreground/[0.03] text-primary-foreground/70 text-[13px] transition-all duration-300 hover:text-primary-foreground hover:bg-primary-foreground/[0.06]`}
                  >
                    <span className={`w-7 h-7 rounded-full ${color.bg} flex items-center justify-center shrink-0`}>
                      <tool.icon className={`h-3.5 w-3.5 ${color.text}`} />
                    </span>
                    {tool.label}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Case study */}
          <div className="w-full border border-accent/20 bg-accent/[0.03] p-8 md:p-10">
            <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
              Caso de ejemplo
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-medium text-primary-foreground mb-4">
              Desarrollo digital completo para el sector turístico
            </h3>
            <p className="text-primary-foreground/55 text-[14px] leading-relaxed mb-6">
              Proyecto integral donde se aplicaron todas las herramientas de IA en un ecosistema turístico real:
              desde un chatbot de WhatsApp para atención al visitante, agentes IA para gestión de reservas,
              avatar con IA como guía virtual, asistente de voz telefónico, creación de página web,
              automatización de procesos internos y estrategia de contenido para redes sociales.
            </p>
            <div className="flex flex-wrap gap-2">
              {["WhatsApp Chatbot", "Agentes IA", "Avatar virtual", "Voz IA", "Web", "Automatización", "RRSS", "Atención telefónica"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-[11px] uppercase tracking-wider font-semibold text-accent border border-accent/25 bg-accent/[0.06]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <Button className="bg-accent text-accent-foreground hover:bg-gold-light rounded-none px-10 py-6 text-[13px] font-semibold uppercase tracking-[0.18em] shadow-none border border-accent">
              Solicita información
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
