import { Link } from "react-router-dom";
import { profiles } from "@/data/profiles";
import { Linkedin, ArrowRight } from "lucide-react";
import zipgenialLogo from "@/assets/brands/zipgenial.png";

const doubled = [...profiles, ...profiles];

const ProfilesTeaser = () => {
  return (
    <section className="py-16 bg-primary overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 mb-10 text-center">
        <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
          Casos de éxito
        </p>
        <h2 className="font-serif text-3xl md:text-4xl font-medium text-primary-foreground mb-3">
          Marcas personales con las que he trabajado
        </h2>
        <p className="text-primary-foreground/60 max-w-xl mx-auto">
          He ayudado a estos profesionales a diseñar su estrategia de marca personal y a crear el contenido que les posiciona como referentes en su sector.
        </p>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        <div className="flex animate-scroll-photos gap-6 w-max">
          {doubled.map((p, i) => (
            <Link
              key={`${p.name}-${i}`}
              to={`/perfiles/${p.slug}`}
              className="group shrink-0 w-48 overflow-hidden bg-gradient-to-b from-primary-foreground/5 to-transparent border border-accent/20 hover:border-accent/50 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden border-b border-accent/20">
                <img
                  src={p.photo}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <span className="text-sm font-semibold text-primary-foreground">
                    {p.name}
                  </span>
                  <Linkedin className="h-4 w-4 shrink-0 text-accent opacity-70 group-hover:opacity-100 transition-opacity mt-0.5" />
                </div>
                <span className="text-xs text-primary-foreground/50 leading-tight line-clamp-2">
                  {p.role}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          href="/perfiles"
          className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3.5 font-semibold text-[13px] uppercase tracking-[0.15em] hover:bg-gold-light transition-colors"
        >
          Ver todos los perfiles
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
};

export default ProfilesTeaser;
