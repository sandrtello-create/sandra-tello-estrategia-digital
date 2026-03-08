import bacardi from "@/assets/brands/bacardi.png";
import bp from "@/assets/brands/bp.png";
import disa from "@/assets/brands/disa.png";
import douglas from "@/assets/brands/douglas.png";
import shell from "@/assets/brands/shell.jpg";
import sanitas from "@/assets/brands/sanitas.png";
import hiperdino from "@/assets/brands/hiperdino.png";
import volkswagen from "@/assets/brands/volkswagen.png";
import opel from "@/assets/brands/opel.jfif";
import carglass from "@/assets/brands/carglass.png";

const brands = [
  { name: "Bacardi", logo: bacardi },
  { name: "BP", logo: bp },
  { name: "DISA", logo: disa },
  { name: "Douglas", logo: douglas },
  { name: "Shell", logo: shell },
  { name: "Sanitas", logo: sanitas },
  { name: "HiperDino", logo: hiperdino },
  { name: "Volkswagen", logo: volkswagen },
  { name: "Opel", logo: opel },
  { name: "Carglass", logo: carglass },
];

const BrandsSection = () => {
  // Duplicate for seamless infinite scroll
  const duplicated = [...brands, ...brands];

  return (
    <section className="py-16 lg:py-20 bg-section-alt">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
              Confianza
            </p>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
            Han confiado en mí
          </h2>
        </div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, hsl(var(--section-alt)), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, hsl(var(--section-alt)), transparent)' }} />

        <div className="flex animate-scroll-brands">
          {duplicated.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 w-[160px] md:w-[200px] mx-6 md:mx-10 flex items-center justify-center h-20"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-h-14 md:max-h-16 w-auto object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
