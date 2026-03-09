import { useParams, Link } from "react-router-dom";
import { servicePortfolios, ServiceCase } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, TrendingUp, Landmark, Linkedin, Truck, ShoppingBag } from "lucide-react";

const GalleryGrid = ({ images }: { images: { src: string; alt: string }[] }) => (
  <div>
    <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.15em] mb-3">
      Galería del proyecto
    </p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {images.map((img, i) => (
        <div
          key={i}
          className="aspect-video bg-muted rounded overflow-hidden border border-border"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  </div>
);

const BannerBeforeAfterGrid = ({
  pairs,
}: {
  pairs: { before: string; after: string }[];
}) => (
  <div>
    <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.15em] mb-3">
      Banners: antes y después
    </p>
    <div className="space-y-4">
      {pairs.map((pair, i) => (
        <div key={i} className="grid grid-cols-2 gap-3">
          <div>
            {i === 0 && (
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 block">
                Antes
              </span>
            )}
            <div className="aspect-[4/1] bg-muted rounded overflow-hidden border border-border">
              <img
                src={pair.before}
                alt={`Banner antes ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div>
            {i === 0 && (
              <span className="text-xs font-semibold text-accent uppercase tracking-wider mb-2 block">
                Después
              </span>
            )}
            <div className="aspect-[4/1] bg-muted rounded overflow-hidden border border-accent/30">
              <img
                src={pair.after}
                alt={`Banner después ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const sectorIcons: Record<string, React.ReactNode> = {
  "Turismo institucional": <Landmark className="h-5 w-5" />,
  "Marca personal / LinkedIn": <Linkedin className="h-5 w-5" />,
  "Transporte / Logística": <Truck className="h-5 w-5" />,
  "Retail / Mystery Shopping": <ShoppingBag className="h-5 w-5" />,
};

const CaseCard = ({ c, index }: { c: ServiceCase; index: number }) => (
  <div className="bg-card border border-border rounded-lg overflow-hidden shadow-sm">
    {/* Header */}
    <div className="bg-primary px-6 py-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-accent">{sectorIcons[c.sector]}</span>
        <div>
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.2em] mb-1">
            {c.sector}
          </p>
          <h3 className="font-serif text-xl md:text-2xl font-medium text-primary-foreground">
            {c.title}
          </h3>
        </div>
      </div>
      <span className="font-serif text-5xl font-semibold text-accent/20">
        {String(index + 1).padStart(2, "0")}
      </span>
    </div>

    <div className="p-6 space-y-6">
      {/* Challenge & Solution */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">
            El reto
          </p>
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            {c.challenge}
          </p>
        </div>
        <div>
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.15em] mb-2">
            La solución
          </p>
          <p className="text-muted-foreground text-[15px] leading-relaxed">
            {c.solution}
          </p>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {c.results.map((r, i) => (
          <div
            key={i}
            className="bg-section-alt border border-border rounded-md p-4 text-center"
          >
            <div className="flex justify-center mb-1">
              <TrendingUp className="h-4 w-4 text-accent" />
            </div>
            <p className="font-serif text-2xl font-semibold text-primary">
              {r.value}
            </p>
            <p className="text-muted-foreground text-xs mt-1">{r.label}</p>
          </div>
        ))}
      </div>

      {/* Gallery */}
      {c.galleryImages && c.galleryImages.length > 0 && (
        <GalleryGrid images={c.galleryImages} />
      )}

      {/* Banner Before/After */}
      {c.bannerBeforeAfter && c.bannerBeforeAfter.length > 0 && (
        <BannerBeforeAfterGrid pairs={c.bannerBeforeAfter} />
      )}
    </div>
  </div>
);

const ServicioPortfolio = () => {
  const { slug } = useParams<{ slug: string }>();
  const portfolio = servicePortfolios.find((s) => s.slug === slug);

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl text-primary mb-4">
              Servicio no encontrado
            </h1>
            <Link
              to="/#servicios"
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver a servicios
            </Link>
          </div>
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
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
            {portfolio.serviceTitle}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-5 leading-[1.2]">
            {portfolio.headline}
          </h1>
          <p className="text-primary-foreground/60 text-lg leading-relaxed">
            {portfolio.intro}
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-section-alt">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl space-y-10">
          {portfolio.cases.map((c, i) => (
            <CaseCard key={i} c={c} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-primary text-primary-foreground text-center">
        <p className="text-primary-foreground/50 text-[11px] uppercase tracking-[0.2em] mb-3">
          ¿Te interesa?
        </p>
        <h2 className="font-serif text-2xl md:text-3xl font-medium mb-6">
          ¿Quieres una auditoría para tu proyecto?
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/#contacto"
            className="inline-flex items-center gap-2 btn-gold-gradient rounded-full px-8 py-3 font-semibold text-[12px] uppercase tracking-[0.15em]"
          >
            Hablemos
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/#servicios"
            className="inline-flex items-center gap-2 border border-primary-foreground/20 rounded-full px-8 py-3 font-semibold text-[12px] uppercase tracking-[0.15em] text-primary-foreground/70 hover:text-primary-foreground hover:border-primary-foreground/40 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a servicios
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicioPortfolio;
