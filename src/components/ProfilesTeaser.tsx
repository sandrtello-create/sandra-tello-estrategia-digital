import { Linkedin } from "lucide-react";

type Profile = {
  sector: string; // shown as the "name" line
  role: string;   // shown as the role line
  bg: string;
  accent: string;
};

const profiles: Profile[] = [
  { sector: "Experto en SEO", role: "Referente digital", bg: "#2a3a5e", accent: "#e8c078" },
  { sector: "Salud integrativa", role: "Profesional del bienestar", bg: "#1e4a3a", accent: "#a8d8b8" },
  { sector: "Director de marketing", role: "Marca personal ejecutiva", bg: "#1b2a4a", accent: "#c5a55a" },
  { sector: "CEO y fundador", role: "Liderazgo empresarial", bg: "#3a2a1e", accent: "#e8b878" },
  { sector: "Web3 e innovación", role: "Proyecto tecnológico cripto", bg: "#3a2a5e", accent: "#a89ee8" },
  { sector: "Finanzas e inversión", role: "Perfil B2B de credibilidad", bg: "#1e3a4a", accent: "#7fc8d8" },
  { sector: "Consultor estratégico", role: "Asesoría experta sénior", bg: "#3a2e2a", accent: "#d4a574" },
  { sector: "Coach ejecutivo", role: "Acompañamiento a directivos", bg: "#2a2a4e", accent: "#c5a55a" },
  { sector: "Formación online", role: "Educación y certificación", bg: "#4a2e3a", accent: "#e8b4c8" },
  { sector: "IA aplicada", role: "Equipo profesional en IA", bg: "#1e2e4e", accent: "#a8d0e8" },
  { sector: "Comunicadora y speaker", role: "Alta exposición pública", bg: "#4a2a2a", accent: "#e88a78" },
  { sector: "Sector belleza premium", role: "Negocio local de referencia", bg: "#4a2a4a", accent: "#f0c8d8" },
  { sector: "Consultora de imagen", role: "Marca profesional personal", bg: "#2e2a4a", accent: "#c8b8e8" },
  { sector: "Experto en liderazgo", role: "Autoridad en su sector", bg: "#1e3e3e", accent: "#a8d8c8" },
  { sector: "Marca personal", role: "Perfil experto de referencia", bg: "#1b2a4a", accent: "#c5a55a" },
  { sector: "Alta visibilidad pública", role: "Perfil mediático", bg: "#3e2e1e", accent: "#e8c078" },
];

const Portrait = ({ bg, accent, seed }: { bg: string; accent: string; seed: number }) => {
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
          <stop offset="0%" stopColor={accent} stopOpacity="0.32" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="200" height="200" fill={`url(#g${seed})`} />
      <rect width="200" height="200" fill={`url(#spot${seed})`} />
      <path
        d={`M ${100 - shoulderW / 2} 200 Q 100 ${145} ${100 + shoulderW / 2} 200 Z`}
        fill={accent}
        opacity="0.9"
      />
      <rect x="90" y="128" width="20" height="18" fill={accent} opacity="0.9" />
      <ellipse cx="100" cy={headY} rx="26" ry="30" fill={accent} opacity="0.98" />
      <ellipse cx="115" cy={headY - 6} rx="6" ry="18" fill="#fff" opacity="0.14" />
    </svg>
  );
};

const Card = ({ p, i }: { p: Profile; i: number }) => (
  <article className="shrink-0 w-[200px] group">
    <div className="aspect-square overflow-hidden relative border border-primary-foreground/10 group-hover:border-accent/50 transition-colors">
      <Portrait bg={p.bg} accent={p.accent} seed={i + 1} />
    </div>
    <div className="pt-3 pb-1 px-1">
      <div className="flex items-start justify-between gap-2">
        <span className="font-semibold text-sm text-primary-foreground leading-snug">
          {p.sector}
        </span>
        <Linkedin className="h-3.5 w-3.5 shrink-0 text-accent opacity-70 mt-0.5" />
      </div>
      <span className="text-xs text-primary-foreground/60 leading-tight block mt-0.5">
        {p.role}
      </span>
    </div>
  </article>
);

const ProfilesTeaser = () => {
  const loop = [...profiles, ...profiles];

  return (
    <section className="py-20 lg:py-28 bg-primary overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.28em] mb-5">
            Experiencia aplicada
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-medium text-primary-foreground mb-6 leading-[1.2]">
            Perfiles y proyectos en los que he intervenido
          </h2>
          <div className="space-y-3 text-primary-foreground/75 text-[15px] leading-relaxed">
            <p>
              He acompañado a profesionales de sectores muy distintos a diseñar su estrategia de marca personal y a crear contenido que les posiciona como referentes.
            </p>
            <p className="text-primary-foreground/50 italic text-[13px]">
              Por confidencialidad profesional, no se muestran nombres, iniciales, fotos, marcas ni logos. Solo el tipo de perfil trabajado.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee carousel */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex gap-5 animate-marquee hover:[animation-play-state:paused] w-max">
          {loop.map((p, i) => (
            <Card key={i} p={p} i={i % profiles.length} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mt-16 pt-10 border-t border-primary-foreground/10">
          <p className="font-serif text-base lg:text-lg italic text-primary-foreground/70 leading-relaxed">
            "La confidencialidad también forma parte del valor estratégico de un proyecto. No todo puede mostrarse con nombres, pero sí puede explicarse con criterio."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProfilesTeaser;
