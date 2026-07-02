import {
  Search,
  HeartPulse,
  TrendingUp,
  Briefcase,
  Bitcoin,
  LineChart,
  Compass,
  Users,
  GraduationCap,
  Cpu,
  Mic,
  Sparkles,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

type Profile = {
  sector: string; // "name" line
  role: string;   // subtitle
  icon: LucideIcon;
  tint: string;   // hsl for icon + subtle bg tint
};

const profiles: Profile[] = [
  { sector: "Experto en SEO", role: "Posicionamiento y visibilidad", icon: Search, tint: "38 65% 58%" },
  { sector: "Salud integrativa", role: "Profesional del bienestar", icon: HeartPulse, tint: "150 45% 58%" },
  { sector: "Director de marketing", role: "Marca personal ejecutiva", icon: TrendingUp, tint: "210 60% 62%" },
  { sector: "CEO y fundador", role: "Liderazgo empresarial", icon: Briefcase, tint: "42 60% 58%" },
  { sector: "Web3 e innovación", role: "Proyecto tecnológico cripto", icon: Bitcoin, tint: "265 55% 68%" },
  { sector: "Finanzas e inversión", role: "Perfil B2B de credibilidad", icon: LineChart, tint: "185 50% 55%" },
  { sector: "Consultor estratégico", role: "Asesoría experta sénior", icon: Compass, tint: "25 55% 58%" },
  { sector: "Coach ejecutivo", role: "Acompañamiento a directivos", icon: Users, tint: "340 50% 62%" },
  { sector: "Formación online", role: "Educación y certificación", icon: GraduationCap, tint: "200 55% 58%" },
  { sector: "IA aplicada", role: "Equipo profesional en IA", icon: Cpu, tint: "220 60% 62%" },
  { sector: "Comunicadora y speaker", role: "Alta exposición pública", icon: Mic, tint: "10 60% 62%" },
  { sector: "Marca personal premium", role: "Perfil experto de referencia", icon: Sparkles, tint: "42 60% 58%" },
];

const Card = ({ p }: { p: Profile }) => {
  const Icon = p.icon;
  return (
    <article className="shrink-0 w-[210px] group">
      {/* Foto / icono */}
      <div
        className="aspect-square relative overflow-hidden border border-primary-foreground/10 group-hover:border-accent/50 transition-colors"
        style={{
          background: `linear-gradient(160deg, hsl(${p.tint} / 0.18), hsl(220 40% 10%) 78%)`,
        }}
      >
        <div
          className="absolute -top-10 -right-10 w-36 h-36 rounded-full blur-3xl opacity-50 transition-opacity duration-500 group-hover:opacity-80"
          style={{ background: `hsl(${p.tint} / 0.55)` }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            className="h-16 w-16 transition-transform duration-500 group-hover:scale-110"
            style={{ color: `hsl(${p.tint})` }}
            strokeWidth={1.25}
          />
        </div>
      </div>
      {/* Info (idéntico al diseño de referencia) */}
      <div className="pt-3 pb-1">
        <div className="flex items-center justify-between gap-2">
          <span className="font-semibold text-sm text-primary-foreground leading-snug">
            {p.sector}
          </span>
          <Linkedin className="h-3.5 w-3.5 shrink-0 text-accent" />
        </div>
        <span className="text-xs text-primary-foreground/60 leading-tight block mt-0.5">
          {p.role}
        </span>
      </div>
    </article>
  );
};

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
              He acompañado a profesionales de sectores muy distintos a diseñar su estrategia de marca personal y a crear el contenido que les posiciona como referentes.
            </p>
            <p className="text-primary-foreground/50 italic text-[13px]">
              Por confidencialidad profesional, no se muestran nombres, iniciales, fotos, marcas ni logos. Solo el tipo de perfil trabajado.
            </p>
          </div>
        </div>
      </div>

      {/* Carrusel */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="flex gap-5 animate-marquee hover:[animation-play-state:paused] w-max px-6">
          {loop.map((p, i) => (
            <Card key={i} p={p} />
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
