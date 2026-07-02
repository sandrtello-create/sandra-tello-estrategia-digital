import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building2, Briefcase, ArrowRight, Bot, MessageSquare, Mic, Globe, Palette, Zap, Phone, Share2, Video, UserRound, Pencil, Cog, TrendingUp, Brain, BookOpen, Image, Sparkles, FileText, Linkedin, Target, PenTool, Compass, Megaphone, Users } from "lucide-react";
import sandraIA from "@/assets/sandra-tello-ia.jpg";
import mentorshipPixar from "@/assets/training-mentorship-pixar.png";
import sandraFormacionIA from "@/assets/sandra-tello-formacion-ia.png";
import LeadCaptureModal from "@/components/LeadCaptureModal";

const programs = [
  {
    icon: Building2,
    title: "Formación para empresas",
    description:
      "Programas in-company (en remoto o presencial) para equipos que necesitan integrar la IA de forma estratégica en su día a día.",
  },
  {
    icon: Briefcase,
    title: "Workshops intensivos",
    description:
      "Sesiones intensivas para dominar un proceso en concreto, adaptadas a tu negocio y a tu nivel de partida.",
  },
  {
    icon: GraduationCap,
    title: "Programas para profesionales y emprendedores",
    description:
      "Formación práctica, incluyendo clases individuales 1 a 1, para personas que quieren aprender IA desde cero y aplicarla con criterio real.",
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
    className="absolute inset-0 w-full h-full opacity-[0.02]"
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
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);

  return (
    <section
      id="formacion"
      className="pt-16 pb-8 lg:pt-20 lg:pb-10 bg-navy-light border-t border-accent/20 relative overflow-hidden"
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
            <div className="flex items-center justify-center gap-2 mb-4">
              <Brain className="h-4 w-4 text-accent" />
              <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em]">
                Formación en Inteligencia Artificial
              </p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[40px] font-medium text-primary-foreground mb-5 leading-[1.2]">
              Inteligencia humana primero. IA después.
            </h2>
            <p className="text-primary-foreground/60 text-[16px] leading-relaxed mb-4">
              No necesitas saber de tecnología. Mis programas están pensados para personas que parten de cero
              y quieren aplicar la IA con criterio real en su día a día. Porque la IA ya no es valor diferencial:
              lo es el factor humano que la pone en marcha. Formación 100% aplicada a tu negocio, no genérica.
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
              Herramientas que aprenderás a dominar
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {tools.map((tool, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-2.5 px-4 py-3 border border-[hsl(230,15%,88%)] bg-[hsl(230,15%,92%)] text-[hsl(232,28%,21%)] text-[13px] transition-all duration-300 hover:bg-accent hover:border-accent/40 hover:text-primary cursor-default"
                >
                  <tool.icon className="h-4 w-4 shrink-0 transition-colors duration-300 group-hover:text-primary" />
                  <span className="leading-tight">{tool.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA — Quiero que la IA me acompañe */}
          <div className="w-full flex flex-col items-center text-center py-4">
            <p className="text-primary-foreground/70 text-[15px] leading-relaxed mb-5 max-w-xl">
              ¿Quieres integrar estas herramientas en tu día a día con criterio y sin perderte en el camino?
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-3 bg-accent text-primary px-8 py-4 font-semibold text-[15px] tracking-wide hover:bg-accent/90 hover:shadow-[0_20px_40px_-15px_hsl(var(--accent)/0.4)] transition-all duration-300"
            >
              Quiero que la IA me acompañe
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>

          {/* Pixar illustration + Roadmap */}
          <div className="w-full">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src={mentorshipPixar}
                  alt="Ilustración de mentoría en inteligencia artificial"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="flex-1">
                <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
                  Así es el proceso de formación y mentoría
                </p>
                <p className="text-primary-foreground/60 text-[15px] leading-relaxed">
                  Te acompaño desde la estrategia hasta los resultados. Yo diseño, formo y mentorizo;
                  tú implementas con mi guía constante. Un proceso pensado para que seas autónomo con la IA
                  aplicada a tu negocio.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-0 relative">
              {/* Horizontal connector line (desktop) */}
              <div className="hidden md:block absolute top-[72px] left-[16.66%] right-[16.66%] h-[1px] bg-accent/20 z-0" />

              {[
                {
                  num: "01",
                  icon: Pencil,
                  title: "Diseño y estrategia",
                  period: "Meses 1–2",
                  items: [
                    "Definición del proyecto y objetivos contigo",
                    "Arquitectura del ecosistema IA a medida",
                    "Creación de contenidos base y textos",
                    "Selección de herramientas y plataformas",
                  ],
                },
                {
                  num: "02",
                  icon: Cog,
                  title: "Implementación con mentoría",
                  period: "Meses 3–4",
                  items: [
                    "Tú implementas, yo te guío paso a paso",
                    "Pruebas y ajustes con usuarios reales",
                    "Formación práctica en el uso diario",
                    "Lanzamiento progresivo por canales",
                  ],
                },
                {
                  num: "03",
                  icon: TrendingUp,
                  title: "Resultados y optimización",
                  period: "Mes 5 en adelante",
                  items: [
                    "Medición de KPIs: alcance, engagement y conversión",
                    "Analítica de rendimiento en redes sociales",
                    "Estrategia de contenido RRSS a largo plazo",
                    "Escalado a nuevos canales o funcionalidades",
                    "Informe de impacto y ROI",
                  ],
                },
              ].map((phase, i) => (
                <div key={i} className="relative group flex flex-col items-center text-center p-6 md:p-8 border border-primary-foreground/10 bg-primary-foreground/[0.03] transition-all duration-500 hover:border-accent/30 hover:shadow-[0_20px_40px_-15px_hsl(var(--accent)/0.12)]">
                  {/* Connector dot */}
                  <div className="hidden md:block absolute top-[68px] left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-accent/40 bg-navy-light z-10 group-hover:border-accent group-hover:bg-accent/20 transition-colors duration-500" />

                  <span className="font-serif text-5xl font-semibold text-accent/15 group-hover:text-accent/35 transition-colors duration-500 mb-4">
                    {phase.num}
                  </span>

                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                    <phase.icon className="h-5 w-5 text-accent" />
                  </div>

                  <h4 className="font-serif text-lg font-medium text-primary-foreground mb-1">
                    {phase.title}
                  </h4>
                  <p className="text-accent/70 text-[12px] uppercase tracking-[0.15em] font-semibold mb-5">
                    {phase.period}
                  </p>

                  <ul className="space-y-2 text-left w-full">
                    {phase.items.map((item, j) => (
                      <li key={j} className="text-primary-foreground/55 text-[13px] leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-[1px] before:bg-accent/40">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Free Resources Block — cream/warm tone with side image */}
          <div className="w-full bg-[hsl(40,18%,91%)] flex flex-col md:flex-row overflow-hidden">
            {/* Image column */}
            <div className="w-full md:w-[40%] min-h-[280px] md:min-h-0">
              <img
                src={sandraFormacionIA}
                alt="Sandra Tello impartiendo formación en inteligencia artificial"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content column */}
            <div className="w-full md:w-[60%] p-8 md:p-10 flex flex-col justify-center">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-[hsl(232,28%,18%)]" />
                  <p className="text-[hsl(232,28%,18%)] font-semibold text-[13px] uppercase tracking-[0.25em]">
                    Recursos gratuitos
                  </p>
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-medium text-[hsl(232,28%,18%)] mb-4">
                  La educación en IA no debería ser un privilegio
                </h3>
                <p className="text-[hsl(232,20%,35%)] text-[14px] leading-relaxed mb-6">
                  Por eso comparto de forma gratuita manuales, guías y recursos prácticos sobre herramientas 
                  de inteligencia artificial. Porque cuando las personas aprenden, el mundo mejora.
                </p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: MessageSquare, title: "LLMs", desc: "ChatGPT, Claude, Gemini, Perplexity..." },
                    { icon: Image, title: "Creación visual", desc: "Imágenes y vídeo con IA" },
                    { icon: Zap, title: "Automatización", desc: "Make, Zapier y n8n" },
                    { icon: Sparkles, title: "Más herramientas", desc: "Canva IA, Notion IA..." },
                  ].map((resource, i) => (
                    <div
                      key={i}
                      className="group flex flex-col p-4 border border-[hsl(232,25%,32%)] bg-[hsl(232,28%,22%)] transition-all duration-300 hover:bg-accent hover:border-accent/40 hover:shadow-[0_8px_24px_-8px_hsl(var(--accent)/0.25)]"
                    >
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors duration-300">
                        <resource.icon className="h-4 w-4 text-accent group-hover:text-primary transition-colors duration-300" />
                      </div>
                      <h4 className="font-serif text-[14px] font-medium text-primary-foreground mb-0.5 group-hover:text-primary transition-colors duration-300">
                        {resource.title}
                      </h4>
                      <p className="text-primary-foreground/60 text-[11px] group-hover:text-primary/70 transition-colors duration-300">
                        {resource.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => setIsLeadModalOpen(true)}
                  className="bg-accent text-accent-foreground hover:bg-gold-light rounded-none px-6 sm:px-10 py-6 sm:py-7 text-[12px] sm:text-[14px] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.15em] shadow-[0_0_20px_hsl(var(--accent)/0.4)] transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--accent)/0.6)] hover:scale-105 w-full sm:w-auto text-center whitespace-normal"
                >
                  <FileText className="mr-2 h-4 w-4 shrink-0" />
                  <span>Desbloquea tu kit de herramientas IA</span>
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                </Button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <Button className="bg-accent text-accent-foreground hover:bg-gold-light rounded-none px-10 py-6 text-[13px] font-semibold uppercase tracking-[0.18em] shadow-none border border-accent">
              Da el salto y domina la IA
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <LeadCaptureModal open={isLeadModalOpen} onOpenChange={setIsLeadModalOpen} />
    </section>
  );
};

export default TrainingSection;
