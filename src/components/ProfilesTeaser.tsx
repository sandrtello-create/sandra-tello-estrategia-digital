import type { ReactNode } from "react";

type Profile = {
  sector: string;
  role: string;
  chips: string[];
  visual: ReactNode;
};

// On-brand abstract tiles (navy + gold, editorial) ---------------------------
const Tile = ({ children }: { children: ReactNode }) => (
  <div className="absolute inset-0 bg-primary">
    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,.5) 1px, transparent 1px)",
        backgroundSize: "4px 4px",
      }}
    />
    {children}
  </div>
);

const TMarketing = () => (
  <Tile>
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
      <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.8" opacity="0.5" />
      <circle cx="100" cy="100" r="40" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.8" opacity="0.7" />
      <circle cx="100" cy="100" r="20" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" />
      <circle cx="100" cy="100" r="4" fill="hsl(var(--accent))" />
      {[0, 72, 144, 216, 288].map((a) => {
        const r = (a * Math.PI) / 180;
        return <circle key={a} cx={100 + Math.cos(r) * 60} cy={100 + Math.sin(r) * 60} r="2.5" fill="hsl(var(--accent))" />;
      })}
    </svg>
  </Tile>
);

const TCEO = () => (
  <Tile>
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
      {[40, 70, 100, 130, 160].map((y) => (
        <line key={y} x1="30" y1={y} x2="170" y2={y} stroke="rgba(255,255,255,.08)" />
      ))}
      <path d="M30 145 L70 120 L110 128 L150 80 L180 55" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none" />
      <circle cx="150" cy="80" r="3" fill="hsl(var(--accent))" />
      <circle cx="180" cy="55" r="4" fill="hsl(var(--accent))" />
    </svg>
  </Tile>
);

const TWeb3 = () => (
  <Tile>
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
      {[[60, 60], [140, 55], [100, 110], [55, 140], [150, 145]].map(([x, y], i) => (
        <g key={i}>
          {[[60, 60], [140, 55], [100, 110], [55, 140], [150, 145]].map(([x2, y2], j) =>
            i < j ? (
              <line key={j} x1={x} y1={y} x2={x2} y2={y2} stroke="hsl(var(--accent))" strokeWidth="0.4" opacity="0.5" />
            ) : null,
          )}
        </g>
      ))}
      {[[60, 60], [140, 55], [100, 110], [55, 140], [150, 145]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="hsl(var(--accent))" />
      ))}
      <polygon points="100,90 115,100 115,120 100,130 85,120 85,100" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" />
    </svg>
  </Tile>
);

const TFinance = () => (
  <Tile>
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
      {[45, 65, 85, 105, 125, 145].map((x, i) => {
        const h = 20 + i * 12;
        return <rect key={x} x={x} y={160 - h} width="10" height={h} fill="hsl(var(--accent))" opacity={0.3 + i * 0.12} />;
      })}
      <path d="M45 130 L75 110 L105 95 L135 75 L165 55" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" strokeDasharray="3 3" />
    </svg>
  </Tile>
);

const THealth = () => (
  <Tile>
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
      {[0, 1, 2, 3].map((i) => (
        <path
          key={i}
          d={`M0 ${80 + i * 15} Q 50 ${60 + i * 15} 100 ${80 + i * 15} T 200 ${80 + i * 15}`}
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="0.7"
          opacity={0.6 - i * 0.12}
        />
      ))}
      <circle cx="100" cy="100" r="22" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" />
      <circle cx="100" cy="100" r="6" fill="hsl(var(--accent))" />
    </svg>
  </Tile>
);

const TConsulting = () => (
  <Tile>
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
      <circle cx="100" cy="100" r="55" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.7" opacity="0.5" />
      <line x1="100" y1="100" x2="100" y2="50" stroke="hsl(var(--accent))" strokeWidth="1.5" />
      <line x1="100" y1="100" x2="140" y2="125" stroke="rgba(255,255,255,.5)" strokeWidth="1" />
      <polygon points="100,42 96,55 104,55" fill="hsl(var(--accent))" />
      <circle cx="100" cy="100" r="4" fill="hsl(var(--accent))" />
    </svg>
  </Tile>
);

const TEducation = () => (
  <Tile>
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
      <rect x="50" y="55" width="100" height="90" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.8" opacity="0.6" />
      <line x1="50" y1="72" x2="150" y2="72" stroke="hsl(var(--accent))" opacity="0.4" />
      <circle cx="59" cy="63" r="1.8" fill="hsl(var(--accent))" />
      {[85, 100, 115].map((y) => (
        <rect key={y} x="62" y={y} width={y === 100 ? 55 : 75} height="3.5" fill="hsl(var(--accent))" opacity="0.35" />
      ))}
      <rect x="62" y="128" width="36" height="6" fill="hsl(var(--accent))" />
    </svg>
  </Tile>
);

const TBeauty = () => (
  <Tile>
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
      <ellipse cx="100" cy="100" rx="42" ry="58" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.9" />
      <ellipse cx="100" cy="100" rx="26" ry="40" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.6" opacity="0.5" />
      <path d="M78 100 Q100 78 122 100" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" />
      <circle cx="100" cy="100" r="2.5" fill="hsl(var(--accent))" />
    </svg>
  </Tile>
);

const TAI = () => (
  <Tile>
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
      <path
        d="M100 55 C 70 55 58 78 58 100 C 58 122 78 145 100 145 C 122 145 142 122 142 100 C 142 78 130 55 100 55 Z"
        fill="none"
        stroke="hsl(var(--accent))"
        strokeWidth="0.8"
        opacity="0.7"
      />
      {[[75, 80], [100, 72], [125, 80], [75, 120], [100, 128], [125, 120], [100, 100]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 6 ? 3.5 : 2} fill="hsl(var(--accent))" />
      ))}
      {[[75, 80], [100, 72], [125, 80], [75, 120], [100, 128], [125, 120]].map(([x, y], i) => (
        <line key={i} x1={x} y1={y} x2="100" y2="100" stroke="hsl(var(--accent))" strokeWidth="0.4" opacity="0.6" />
      ))}
    </svg>
  </Tile>
);

const profiles: Profile[] = [
  { sector: "Marketing digital", role: "Perfil público de alta visibilidad", chips: ["Alta exposición", "Posicionamiento"], visual: <TMarketing /> },
  { sector: "Dirección y CEOs", role: "Fundadores de proyectos digitales", chips: ["CEO", "Marca personal"], visual: <TCEO /> },
  { sector: "Web3 e innovación", role: "Tecnología y proyectos cripto", chips: ["Web3", "Comunicación"], visual: <TWeb3 /> },
  { sector: "Finanzas e inversión", role: "Perfiles B2B de alta credibilidad", chips: ["Finanzas", "B2B"], visual: <TFinance /> },
  { sector: "Salud corporativa", role: "RRHH, bienestar y PRL", chips: ["RRHH", "PRL"], visual: <THealth /> },
  { sector: "Consultoría y coaching", role: "Consultores y coaches ejecutivos", chips: ["Consultoría", "Autoridad"], visual: <TConsulting /> },
  { sector: "Formación online", role: "Educación y certificación digital", chips: ["EdTech", "Formación"], visual: <TEducation /> },
  { sector: "Belleza y servicios", role: "Negocio local y experiencia cliente", chips: ["Belleza", "Cliente"], visual: <TBeauty /> },
  { sector: "IA aplicada", role: "Equipos y profesionales en IA", chips: ["IA aplicada", "Productividad"], visual: <TAI /> },
];

const ProfilesTeaser = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.28em] mb-5">
            Experiencia aplicada
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-medium text-primary-foreground mb-6 leading-[1.2]">
            Perfiles y proyectos en los que he intervenido
          </h2>
          <div className="space-y-3 text-primary-foreground/75 text-[15px] leading-relaxed">
            <p>
              He intervenido en proyectos de estrategia, posicionamiento, comunicación, formación e IA aplicada para perfiles profesionales de distintos sectores.
            </p>
            <p className="text-primary-foreground/50 italic text-[13px]">
              Por confidencialidad profesional, no se muestran nombres, iniciales, marcas ni logos. Lo relevante es el tipo de perfil, el sector y el enfoque estratégico aplicado.
            </p>
          </div>
        </div>

        {/* Grid — compact anonymised profile tiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-6 max-w-6xl mx-auto">
          {profiles.map((p, i) => (
            <article
              key={i}
              className="group relative overflow-hidden bg-primary-foreground/[0.03] border-l-2 border-l-accent/40 border-t border-r border-b border-primary-foreground/10 transition-all duration-500 hover:border-l-accent hover:bg-primary-foreground/[0.06] hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_hsl(var(--accent)/0.35)]"
            >
              {/* Visual tile */}
              <div className="relative aspect-square overflow-hidden border-b border-primary-foreground/10">
                <div className="absolute inset-0 transition-transform duration-[900ms] group-hover:scale-[1.06]">
                  {p.visual}
                </div>
                <span className="absolute top-3 right-3 font-serif text-[10px] text-accent/60 tracking-[0.25em]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-[15px] lg:text-base font-medium text-primary-foreground leading-snug mb-1.5">
                  {p.sector}
                </h3>
                <p className="text-primary-foreground/55 text-[12.5px] leading-snug mb-3 line-clamp-2">
                  {p.role}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-primary-foreground/10">
                  {p.chips.map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center px-2 py-0.5 text-[10px] font-medium tracking-wide text-accent/90 border border-accent/25"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Closing */}
        <div className="max-w-2xl mx-auto text-center mt-14 lg:mt-16 pt-10 border-t border-primary-foreground/10">
          <p className="font-serif text-base lg:text-lg italic text-primary-foreground/70 leading-relaxed">
            "La confidencialidad también forma parte del valor estratégico de un proyecto. No todo puede mostrarse con nombres, pero sí puede explicarse con criterio."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfilesTeaser;
