import { Linkedin } from "lucide-react";

type Profile = {
  sector: string;
  role: string;
  bg: string;
  accent: string;
};

const profiles: Profile[] = [
  { sector: "Marketing digital", role: "Perfil público de alta visibilidad", bg: "#2a3a5e", accent: "#c5a55a" },
  { sector: "Dirección y CEO", role: "Fundador de proyecto digital", bg: "#1b2a4a", accent: "#e8d9a8" },
  { sector: "Web3 e innovación", role: "Proyecto tecnológico cripto", bg: "#3a2a5e", accent: "#a89ee8" },
  { sector: "Finanzas e inversión", role: "Perfil B2B de alta credibilidad", bg: "#1e3a3a", accent: "#c5a55a" },
  { sector: "Salud corporativa", role: "RRHH, bienestar y PRL", bg: "#2e4a4a", accent: "#e0d5b8" },
  { sector: "Consultoría estratégica", role: "Consultor experto sénior", bg: "#3a2e2a", accent: "#d4a574" },
  { sector: "Coaching ejecutivo", role: "Coach de directivos", bg: "#2a2a3e", accent: "#c5a55a" },
  { sector: "Formación online", role: "Educación y certificación digital", bg: "#4a2e3a", accent: "#e8b4c8" },
  { sector: "Marca personal", role: "Profesional experto en su sector", bg: "#1b2a4a", accent: "#c5a55a" },
  { sector: "Belleza y servicios", role: "Negocio local premium", bg: "#4a2a3a", accent: "#f0c8d8" },
  { sector: "IA aplicada", role: "Equipo profesional en IA", bg: "#1e2e4e", accent: "#a8d0e8" },
  { sector: "Comunicación pública", role: "Perfil de alta exposición", bg: "#3e2e1e", accent: "#e8c078" },
];

// Silhouette portrait — makes each tile read as a "profile photo"
const Portrait = ({ bg, accent, seed }: { bg: string; accent: string; seed: number }) => {
  // subtle variation per tile so they don't look identical
  const shoulderW = 130 + (seed % 3) * 6;
  const headY = 92 + (seed % 4) * 2;
  return (
    <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={`g${seed}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={bg} stopOpacity="1" />
          <stop offset="100%" stopColor="#0f1a30" stopOpacity="1" />
        </linearGradient>
        <radialGradient id={`spot${seed}`} cx="0.5" cy="0.35" r="0.6">
          <stop offset="0%" stopColor={accent} stopOpacity="0.28" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill={`url(#g${seed})`} />
      <rect width="200" height="200" fill={`url(#spot${seed})`} />
      {/* grain */}
      <rect width="200" height="200" fill="url(#noise)" opacity="0.08" />
      {/* shoulders */}
      <path
        d={`M ${100 - shoulderW / 2} 200 Q 100 ${145} ${100 + shoulderW / 2} 200 Z`}
        fill={accent}
        opacity="0.85"
      />
      {/* neck */}
      <rect x="90" y="128" width="20" height="18" fill={accent} opacity="0.85" />
      {/* head */}
      <ellipse cx="100" cy={headY} rx="26" ry="30" fill={accent} opacity="0.95" />
      {/* rim light */}
      <ellipse cx="115" cy={headY - 6} rx="6" ry="18" fill="#fff" opacity="0.12" />
    </svg>
  );
};

const ProfilesTeaser = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary overflow-hidden">
      {/* SVG defs shared */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="noise">
            <feTurbulence baseFrequency="0.9" numOctaves="2" seed="3" />
            <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0" />
          </filter>
        </defs>
      </svg>

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
              Por confidencialidad profesional, no se muestran nombres, iniciales, fotos, marcas ni logos. Se muestra únicamente el sector y el tipo de perfil trabajado.
            </p>
          </div>
        </div>

        {/* Grid — mismo formato que la ficha original de perfiles */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {profiles.map((p, i) => (
            <article
              key={i}
              className="group relative overflow-hidden bg-card border-l-2 border-l-accent/30 border-t border-r border-b border-border hover:border-l-accent hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden relative">
                <Portrait bg={p.bg} accent={p.accent} seed={i + 1} />
              </div>
              <div className="p-4 bg-gradient-to-t from-card to-card/80">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="font-semibold text-sm text-foreground leading-snug">
                    {p.sector}
                  </span>
                  <Linkedin className="h-4 w-4 shrink-0 text-accent opacity-40 mt-0.5" />
                </div>
                <span className="text-xs text-muted-foreground leading-tight line-clamp-2">
                  {p.role}
                </span>
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
