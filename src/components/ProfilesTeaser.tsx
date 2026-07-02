import type { CSSProperties, ReactNode } from "react";

type Profile = {
  title: string;
  context: string;
  challenge: string;
  chips: string[];
  gradient: string;
  visual: ReactNode;
};

// Reusable abstract visual primitives -----------------------------------------
const Grain = () => (
  <div
    className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
    style={{
      backgroundImage:
        "radial-gradient(rgba(255,255,255,.4) 1px, transparent 1px)",
      backgroundSize: "3px 3px",
    }}
  />
);

const Glow = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <div className={`absolute rounded-full blur-2xl ${className ?? ""}`} style={style} />
);

// Visuals ---------------------------------------------------------------------
const VisualMarketing = () => (
  <>
    <Glow className="w-40 h-40 bg-white/40 -top-10 -left-10" />
    <Glow className="w-32 h-32 bg-accent/60 bottom-0 right-4" />
    <svg viewBox="0 0 300 180" className="absolute inset-0 w-full h-full">
      <circle cx="150" cy="90" r="55" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="1" />
      <circle cx="150" cy="90" r="35" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="1" />
      <circle cx="150" cy="90" r="14" fill="rgba(255,255,255,.9)" />
      {[0, 60, 120, 180, 240, 300].map((a) => {
        const rad = (a * Math.PI) / 180;
        return (
          <circle
            key={a}
            cx={150 + Math.cos(rad) * 55}
            cy={90 + Math.sin(rad) * 55}
            r="4"
            fill="rgba(255,255,255,.9)"
          />
        );
      })}
    </svg>
    <Grain />
  </>
);

const VisualCEO = () => (
  <>
    <Glow className="w-48 h-48 bg-white/30 top-0 right-0" />
    <svg viewBox="0 0 300 180" className="absolute inset-0 w-full h-full">
      {Array.from({ length: 8 }).map((_, i) => (
        <line
          key={i}
          x1="30"
          y1={20 + i * 20}
          x2="270"
          y2={20 + i * 20}
          stroke="rgba(255,255,255,.15)"
          strokeWidth="0.5"
        />
      ))}
      <path d="M30 140 L90 100 L150 115 L210 60 L270 40" stroke="white" strokeWidth="2" fill="none" />
      <path
        d="M30 140 L90 100 L150 115 L210 60 L270 40 L270 160 L30 160 Z"
        fill="rgba(255,255,255,.15)"
      />
      <circle cx="210" cy="60" r="5" fill="white" />
      <circle cx="270" cy="40" r="6" fill="hsl(var(--accent))" />
    </svg>
    <Grain />
  </>
);

const VisualWeb3 = () => (
  <>
    <Glow className="w-40 h-40 bg-cyan-300/50 -top-8 left-1/3" />
    <Glow className="w-36 h-36 bg-fuchsia-400/40 bottom-0 right-0" />
    <svg viewBox="0 0 300 180" className="absolute inset-0 w-full h-full">
      {[
        [60, 40], [150, 30], [240, 60], [90, 100], [200, 110], [140, 150], [250, 140], [50, 130],
      ].map(([x, y], i) => (
        <g key={i}>
          {[[60,40],[150,30],[240,60],[90,100],[200,110],[140,150],[250,140],[50,130]].map(([x2,y2], j) =>
            i < j && Math.hypot(x-x2, y-y2) < 90 ? (
              <line key={j} x1={x} y1={y} x2={x2} y2={y2} stroke="rgba(255,255,255,.35)" strokeWidth="0.6" />
            ) : null
          )}
        </g>
      ))}
      {[[60,40],[150,30],[240,60],[90,100],[200,110],[140,150],[250,140],[50,130]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="4" fill="white" />
      ))}
      <polygon points="150,75 175,90 175,115 150,130 125,115 125,90" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.5" />
    </svg>
    <Grain />
  </>
);

const VisualFinance = () => (
  <>
    <Glow className="w-40 h-40 bg-emerald-300/40 top-0 left-0" />
    <svg viewBox="0 0 300 180" className="absolute inset-0 w-full h-full">
      {[40, 70, 100, 130, 160, 190, 220, 250].map((x, i) => {
        const h = 30 + Math.sin(i * 0.9) * 30 + i * 6;
        return (
          <rect
            key={x}
            x={x}
            y={160 - h}
            width="18"
            height={h}
            fill={i === 5 ? "hsl(var(--accent))" : "rgba(255,255,255,.75)"}
            opacity={i === 5 ? 1 : 0.35 + i * 0.08}
          />
        );
      })}
      <path d="M40 130 L80 110 L120 95 L160 70 L200 55 L250 30" stroke="white" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
    </svg>
    <Grain />
  </>
);

const VisualHealth = () => (
  <>
    <Glow className="w-48 h-48 bg-white/40 top-0 left-1/4" />
    <svg viewBox="0 0 300 180" className="absolute inset-0 w-full h-full">
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          d={`M0 ${60 + i * 15} Q 75 ${40 + i * 15} 150 ${60 + i * 15} T 300 ${60 + i * 15}`}
          fill="none"
          stroke="rgba(255,255,255,.5)"
          strokeWidth="1"
        />
      ))}
      <circle cx="150" cy="90" r="30" fill="rgba(255,255,255,.2)" stroke="white" strokeWidth="1" />
      <circle cx="150" cy="90" r="12" fill="hsl(var(--accent))" />
    </svg>
    <Grain />
  </>
);

const VisualConsulting = () => (
  <>
    <Glow className="w-40 h-40 bg-amber-200/50 top-0 right-0" />
    <svg viewBox="0 0 300 180" className="absolute inset-0 w-full h-full">
      <circle cx="150" cy="90" r="60" fill="none" stroke="rgba(255,255,255,.4)" strokeWidth="1" />
      <circle cx="150" cy="90" r="60" fill="none" stroke="rgba(255,255,255,.15)" strokeWidth="1" strokeDasharray="2 4" transform="rotate(45 150 90)" />
      <line x1="150" y1="90" x2="150" y2="35" stroke="hsl(var(--accent))" strokeWidth="2" />
      <line x1="150" y1="90" x2="195" y2="115" stroke="white" strokeWidth="1.5" />
      <circle cx="150" cy="90" r="6" fill="white" />
      <polygon points="150,25 145,40 155,40" fill="hsl(var(--accent))" />
    </svg>
    <Grain />
  </>
);

const VisualEducation = () => (
  <>
    <Glow className="w-40 h-40 bg-pink-300/40 -top-6 -right-6" />
    <Glow className="w-36 h-36 bg-indigo-300/40 bottom-0 left-0" />
    <svg viewBox="0 0 300 180" className="absolute inset-0 w-full h-full">
      <rect x="70" y="45" width="160" height="100" rx="4" fill="rgba(255,255,255,.15)" stroke="rgba(255,255,255,.6)" />
      <line x1="70" y1="65" x2="230" y2="65" stroke="rgba(255,255,255,.5)" />
      <circle cx="82" cy="55" r="2.5" fill="hsl(var(--accent))" />
      <circle cx="92" cy="55" r="2.5" fill="rgba(255,255,255,.6)" />
      {[80, 100, 120].map((y) => (
        <rect key={y} x="85" y={y} width={y === 100 ? 100 : 130} height="6" fill="rgba(255,255,255,.35)" />
      ))}
      <rect x="85" y="128" width="60" height="10" fill="hsl(var(--accent))" />
    </svg>
    <Grain />
  </>
);

const VisualBeauty = () => (
  <>
    <Glow className="w-48 h-48 bg-rose-200/50 top-0 left-0" />
    <Glow className="w-40 h-40 bg-white/40 bottom-0 right-0" />
    <svg viewBox="0 0 300 180" className="absolute inset-0 w-full h-full">
      <ellipse cx="150" cy="90" rx="65" ry="80" fill="none" stroke="rgba(255,255,255,.7)" strokeWidth="1.2" />
      <ellipse cx="150" cy="90" rx="45" ry="60" fill="none" stroke="rgba(255,255,255,.4)" />
      <path d="M115 90 Q150 60 185 90" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none" />
      <path d="M115 100 Q150 130 185 100" stroke="rgba(255,255,255,.9)" strokeWidth="1.5" fill="none" />
      <circle cx="150" cy="90" r="3" fill="white" />
    </svg>
    <Grain />
  </>
);

const VisualAI = () => (
  <>
    <Glow className="w-48 h-48 bg-violet-400/50 -top-8 -left-8" />
    <Glow className="w-40 h-40 bg-cyan-300/50 bottom-0 right-0" />
    <svg viewBox="0 0 300 180" className="absolute inset-0 w-full h-full">
      <path
        d="M150 40 C 100 40 80 70 80 90 C 80 120 110 140 150 140 C 190 140 220 120 220 90 C 220 70 200 40 150 40 Z"
        fill="rgba(255,255,255,.12)"
        stroke="white"
        strokeWidth="1"
      />
      {[[110,70],[150,60],[190,70],[110,110],[150,120],[190,110],[150,90]].map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 6 ? 5 : 3} fill={i === 6 ? "hsl(var(--accent))" : "white"} />
      ))}
      {[[110,70,150,90],[150,60,150,90],[190,70,150,90],[110,110,150,90],[150,120,150,90],[190,110,150,90]].map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,.5)" strokeWidth="0.7" />
      ))}
    </svg>
    <Grain />
  </>
);

// Profile data ----------------------------------------------------------------
const profiles: Profile[] = [
  {
    title: "Perfil público del sector marketing digital",
    context: "Alta visibilidad, contenidos, formación y comunidad digital.",
    challenge: "Ordenar narrativa, autoridad y comunicación estratégica.",
    chips: ["Alta exposición", "Marketing digital", "Posicionamiento"],
    gradient: "linear-gradient(135deg, #6366f1 0%, #ec4899 55%, #f59e0b 100%)",
    visual: <VisualMarketing />,
  },
  {
    title: "Fundadores y CEOs de proyectos digitales",
    context: "Dirección, visión de negocio, crecimiento y presencia pública.",
    challenge: "Convertir experiencia, visión y propuesta de valor en una comunicación clara.",
    chips: ["CEO", "Marca personal", "Estrategia"],
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 60%, #06b6d4 100%)",
    visual: <VisualCEO />,
  },
  {
    title: "Web3, cripto e innovación",
    context: "Proyectos tecnológicos con propuestas complejas y necesidad de generar confianza.",
    challenge: "Traducir complejidad técnica en mensaje comprensible y creíble.",
    chips: ["Web3", "Innovación", "Comunicación"],
    gradient: "linear-gradient(135deg, #0f172a 0%, #7c3aed 50%, #22d3ee 100%)",
    visual: <VisualWeb3 />,
  },
  {
    title: "Finanzas e inversión",
    context: "Perfiles y proyectos donde la precisión, la confianza y la credibilidad son críticas.",
    challenge: "Ordenar el discurso para públicos exigentes y decisiones de alto valor.",
    chips: ["Finanzas", "Confianza", "B2B"],
    gradient: "linear-gradient(135deg, #064e3b 0%, #059669 55%, #a7f3d0 100%)",
    visual: <VisualFinance />,
  },
  {
    title: "Salud mental corporativa, RRHH y PRL",
    context: "Soluciones sensibles orientadas a empresa, bienestar y prevención.",
    challenge: "Conectar impacto humano con lenguaje empresarial para dirección y RRHH.",
    chips: ["Salud corporativa", "RRHH", "PRL"],
    gradient: "linear-gradient(135deg, #0e7490 0%, #14b8a6 55%, #fef3c7 100%)",
    visual: <VisualHealth />,
  },
  {
    title: "Consultores y coaches ejecutivos",
    context: "Profesionales expertos que necesitan diferenciar su criterio en mercados saturados.",
    challenge: "Convertir trayectoria profesional en posicionamiento reconocible.",
    chips: ["Consultoría", "Coaching", "Autoridad"],
    gradient: "linear-gradient(135deg, #78350f 0%, #d97706 55%, #fcd34d 100%)",
    visual: <VisualConsulting />,
  },
  {
    title: "Formación y certificación online",
    context: "Proyectos educativos, formación profesional y certificación digital.",
    challenge: "Comunicar calidad, método, confianza y valor diferencial.",
    chips: ["Formación", "EdTech", "Confianza"],
    gradient: "linear-gradient(135deg, #4c1d95 0%, #db2777 60%, #fb7185 100%)",
    visual: <VisualEducation />,
  },
  {
    title: "Sector belleza y servicios",
    context: "Negocios donde la experiencia cliente, la percepción de valor y la agenda impactan en la rentabilidad.",
    challenge: "Ordenar propuesta, comunicación, posicionamiento y estrategia comercial.",
    chips: ["Belleza", "Cliente", "Negocio local"],
    gradient: "linear-gradient(135deg, #be185d 0%, #f472b6 55%, #fce7f3 100%)",
    visual: <VisualBeauty />,
  },
  {
    title: "Equipos y profesionales en IA aplicada",
    context: "Personas y empresas que necesitan incorporar IA en marketing, comunicación, productividad y toma de decisiones.",
    challenge: "Pasar del interés por la IA a casos de uso reales y aplicables.",
    chips: ["IA aplicada", "Formación", "Productividad"],
    gradient: "linear-gradient(135deg, #1e1b4b 0%, #8b5cf6 55%, #22d3ee 100%)",
    visual: <VisualAI />,
  },
];

const ProfilesTeaser = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 lg:mb-20">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.28em] mb-5">
            Experiencia aplicada
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-medium text-primary-foreground mb-6 leading-[1.2]">
            Perfiles y proyectos en los que he intervenido
          </h2>
          <div className="space-y-4 text-primary-foreground/75 text-[15px] lg:text-[16px] leading-relaxed">
            <p>
              He intervenido en proyectos de estrategia, posicionamiento, comunicación, formación e IA aplicada para perfiles profesionales de distintos sectores: marketing digital, Web3, finanzas, salud corporativa, educación online, consultoría, coaching, belleza, negocio local y perfiles de alta exposición pública.
            </p>
            <p className="text-primary-foreground/55 italic text-[14px]">
              Por confidencialidad profesional, no se muestran nombres, iniciales, marcas, logos ni datos sensibles. Lo relevante aquí es el tipo de perfil, el reto trabajado y el enfoque estratégico aplicado.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 max-w-6xl mx-auto">
          {profiles.map((p, i) => (
            <article
              key={i}
              className="group relative flex flex-col bg-primary-foreground overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]"
            >
              {/* Visual (≈45%) */}
              <div
                className="relative h-[190px] overflow-hidden"
                style={{ background: p.gradient }}
              >
                <div className="absolute inset-0 transition-transform duration-[900ms] group-hover:scale-110">
                  {p.visual}
                </div>
                <span className="absolute top-4 left-4 font-serif text-xs text-white/70 tracking-[0.25em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 lg:p-7">
                <h3 className="font-serif text-[19px] lg:text-[20px] font-medium text-foreground leading-snug mb-3">
                  {p.title}
                </h3>

                <p className="text-muted-foreground text-[13.5px] leading-relaxed mb-4">
                  {p.context}
                </p>

                <div className="mt-auto">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent mb-2">
                    Reto trabajado
                  </p>
                  <p className="text-foreground/80 text-[13.5px] leading-relaxed mb-5">
                    {p.challenge}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                    {p.chips.map((chip) => (
                      <span
                        key={chip}
                        className="inline-flex items-center px-2.5 py-1 bg-primary/5 text-primary text-[11px] font-medium tracking-wide"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing */}
        <div className="max-w-2xl mx-auto text-center mt-16 lg:mt-20 pt-10 border-t border-primary-foreground/10">
          <p className="font-serif text-lg lg:text-xl italic text-primary-foreground/75 leading-relaxed">
            "La confidencialidad también forma parte del valor estratégico de un proyecto. No todo puede mostrarse con nombres, pero sí puede explicarse con criterio."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfilesTeaser;
