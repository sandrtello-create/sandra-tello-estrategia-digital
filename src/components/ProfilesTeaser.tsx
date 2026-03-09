import { Link } from "react-router-dom";
import { profiles } from "@/data/profiles";
import { Linkedin, ArrowRight } from "lucide-react";

const doubled = [...profiles, ...profiles];

const ProfilesTeaser = () => {
  return (
    <section className="py-16 bg-section-alt overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 mb-10 text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
          Marcas personales con las que he trabajado
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          He ayudado a estos profesionales a posicionar su marca personal y destacar en su sector.
        </p>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        <div className="flex animate-scroll-photos gap-5 w-max">
          {doubled.map((p, i) => (
            <a
              key={`${p.name}-${i}`}
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group shrink-0 w-40 rounded-xl overflow-hidden bg-card border border-border hover:shadow-md transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={p.photo}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-2.5 flex items-center justify-between gap-1">
                <span className="text-xs font-semibold text-foreground truncate">
                  {p.name}
                </span>
                <Linkedin className="h-3.5 w-3.5 shrink-0 text-accent opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="text-center mt-10">
        <Link
          to="/perfiles"
          className="inline-flex items-center gap-2 btn-gold-gradient px-6 py-3 rounded-lg font-semibold text-sm hover-scale"
        >
          Ver todos los perfiles
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default ProfilesTeaser;
