import { useParams, Link } from "react-router-dom";
import { profiles } from "@/data/profiles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Linkedin, Users, TrendingUp, BarChart2, Quote, Eye, Calendar } from "lucide-react";

const PerfilDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const profile = profiles.find((p) => p.slug === slug);

  if (!profile) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 text-center px-6">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em]">Error 404</p>
          <h1 className="font-serif text-3xl font-medium text-foreground">Perfil no encontrado</h1>
          <Link
            to="/perfiles"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mt-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a perfiles
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 lg:px-8">
          <Link
            to="/perfiles"
            className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-accent text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a perfiles
          </Link>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="shrink-0">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-36 h-36 object-cover border-2 border-accent/30"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-2">
                Caso de éxito
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-medium mb-2">{profile.name}</h1>
              <p className="text-primary-foreground/60 text-lg mb-5">{profile.role}</p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.15em] hover:bg-gold-light transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                Ver perfil en LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Métricas */}
      {profile.metrics && (
        <section className="py-14 bg-section-alt border-b border-border">
          <div className="container mx-auto px-6 lg:px-8">
            <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-8 text-center">
              Resultados en LinkedIn
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card border border-border p-8 text-center">
                <Users className="h-5 w-5 text-accent mx-auto mb-3 opacity-70" />
                <p className="font-serif text-4xl font-medium text-accent mb-1">
                  {profile.metrics.followers}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.15em]">Seguidores</p>
              </div>
              <div className="bg-card border border-border p-8 text-center">
                <TrendingUp className="h-5 w-5 text-accent mx-auto mb-3 opacity-70" />
                <p className="font-serif text-4xl font-medium text-accent mb-1">
                  {profile.metrics.impressionsPerMonth}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.15em]">Impresiones / mes</p>
              </div>
              <div className="bg-card border border-border p-8 text-center">
                <BarChart2 className="h-5 w-5 text-accent mx-auto mb-3 opacity-70" />
                <p className="font-serif text-4xl font-medium text-accent mb-1">
                  {profile.metrics.engagementRate}
                </p>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.15em]">Tasa de interacción</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Posts virales */}
      {profile.viralPosts && profile.viralPosts.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-3 text-center">
              Prueba de trabajo
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground text-center mb-10">
              Posts más virales
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {profile.viralPosts.map((post, idx) => (
                <div
                  key={idx}
                  className="bg-card border-l-2 border-l-accent/40 border-t border-r border-b border-border p-6 hover:border-l-accent hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-semibold text-foreground text-sm leading-snug mb-4">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-5 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Eye className="h-3.5 w-3.5 text-accent" />
                      {post.impressions} impresiones
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-accent" />
                      {post.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonio */}
      {profile.testimonial && (
        <section className="py-16 bg-section-alt">
          <div className="container mx-auto px-6 lg:px-8 max-w-2xl text-center">
            <Quote className="h-8 w-8 text-accent mx-auto mb-6 opacity-60" />
            <blockquote className="font-serif text-xl md:text-2xl font-medium text-foreground leading-relaxed mb-6">
              "{profile.testimonial}"
            </blockquote>
            <p className="text-sm text-muted-foreground font-semibold uppercase tracking-[0.15em]">
              — {profile.name}
            </p>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default PerfilDetalle;
