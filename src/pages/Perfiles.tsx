import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { profiles } from "@/data/profiles";
import { Linkedin, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Perfiles = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
            Casos de éxito
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-medium mb-4">
            Perfiles con los que he trabajado
          </h1>
          <p className="text-primary-foreground/60 max-w-2xl mx-auto text-lg">
            Marcas personales que han confiado en mi método para posicionarse y
            destacar en su sector.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {profiles.map((p) => (
              <Link
                key={p.name}
                to={`/perfiles/${p.slug}`}
                className="group relative overflow-hidden bg-card border-l-2 border-l-accent/30 border-t border-r border-b border-border hover:border-l-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={p.photo}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 bg-gradient-to-t from-card to-card/80">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-semibold text-sm text-foreground">
                      {p.name}
                    </span>
                    <Linkedin className="h-4 w-4 shrink-0 text-accent opacity-70 group-hover:opacity-100 transition-opacity mt-0.5" />
                  </div>
                  <span className="text-xs text-muted-foreground leading-tight line-clamp-2">
                    {p.role}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Perfiles;
