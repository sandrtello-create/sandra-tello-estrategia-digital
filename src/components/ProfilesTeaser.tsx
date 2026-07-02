import {
  Search,
  HeartPulse,
  Briefcase,
  Sparkles,
  TrendingUp,
  Users,
  Bitcoin,
  GraduationCap,
  Mic,
  Scissors,
  Cpu,
  Compass,
  Building2,
  Brain,
  Camera,
  Megaphone,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

type Profile = {
  role: string;
  icon: LucideIcon;
  tint: string; // hsl tint for background
};

const profiles: Profile[] = [
  { role: "Experto en SEO", icon: Search, tint: "38 60% 55%" },
  { role: "Experto en salud integrativa", icon: HeartPulse, tint: "150 45% 55%" },
  { role: "Director de marketing", icon: TrendingUp, tint: "210 65% 60%" },
  { role: "CEO y fundador", icon: Briefcase, tint: "42 55% 55%" },
  { role: "Proyecto Web3 e innovación", icon: Bitcoin, tint: "265 55% 65%" },
  { role: "Perfil financiero e inversión", icon: Building2, tint: "185 50% 50%" },
  { role: "Consultor estratégico", icon: Compass, tint: "25 55% 55%" },
  { role: "Coach ejecutivo", icon: Users, tint: "340 50% 60%" },
  { role: "Formación y educación digital", icon: GraduationCap, tint: "200 55% 55%" },
  { role: "Especialista en IA aplicada", icon: Cpu, tint: "220 60% 60%" },
  { role: "Comunicadora y speaker", icon: Mic, tint: "10 60% 60%" },
  { role: "Sector belleza premium", icon: Scissors, tint: "320 45% 65%" },
  { role: "Perfil de alta exposición pública", icon: Megaphone, tint: "45 65% 55%" },
  { role: "Consultora de imagen", icon: Camera, tint: "280 40% 60%" },
  { role: "Experto en liderazgo", icon: Brain, tint: "170 45% 50%" },
  { role: "Marca personal profesional", icon: Sparkles, tint: "42 60% 55%" },
];

const Card = ({ p }: { p: Profile }) => {
  const Icon = p.icon;
  return (
    <article className="shrink-0 w-[220px] group">
      <div
        className="aspect-square relative overflow-hidden border-l-2 border-l-accent/40 border-t border-r border-b border-primary-foreground/10 transition-all duration-500 group-hover:border-l-accent group-hover:-translate-y-1"
        style={{
          background: `linear-gradient(160deg, hsl(${p.tint} / 0.22), hsl(220 40% 12%) 75%)`,
        }}
      >
        {/* subtle glow */}
        <div
          className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-40 transition-opacity duration-500 group-hover:opacity-70"
          style={{ background: `hsl(${p.tint} / 0.6)` }}
        />
        {/* icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            className="h-14 w-14 transition-transform duration-500 group-hover:scale-110"
            style={{ color: `hsl(${p.tint})` }}
            strokeWidth={1.25}
          />
        </div>
        {/* corner tag */}
        <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] text-primary-foreground/50">
          Perfil
        </span>
      </div>
      <div className="pt-4 px-1">
        <p className="text-sm text-primary-foreground font-medium leading-snug">
          {p.role}
        </p>
      </div>
    </article>
  );
};

const ProfilesTeaser = () => {
  // duplicate list for seamless marquee loop
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
              He trabajado con perfiles de sectores muy distintos: SEO, salud integrativa, dirección, marketing, Web3, finanzas, formación, IA, comunicación y más.
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
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
          {loop.map((p, i) => (
            <Card key={i} p={p} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8">
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
