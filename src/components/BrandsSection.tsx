import bacardi from "@/assets/brands/bacardi.png";
import bp from "@/assets/brands/bp.png";
import disa from "@/assets/brands/disa.png";
import douglas from "@/assets/brands/douglas.png";
import shell from "@/assets/brands/shell.png";
import sanitas from "@/assets/brands/sanitas.png";
import hiperdino from "@/assets/brands/hiperdino.png";
import volkswagen from "@/assets/brands/volkswagen.png";
import opel from "@/assets/brands/opel.png";
import carglass from "@/assets/brands/carglass.png";
import apple from "@/assets/brands/apple.png";
import zipgenial from "@/assets/brands/zipgenial.png";
import mediamarkt from "@/assets/brands/mediamarkt.png";
import eoi from "@/assets/brands/eoi.png";
import mainjobs from "@/assets/brands/mainjobs.png";
import fiat from "@/assets/brands/fiat.png";
import nespresso from "@/assets/brands/nespresso.png";
import diarioAvisos from "@/assets/brands/diario-avisos.png";

const brands = [
  { name: "Apple", logo: apple },
  { name: "MediaMarkt", logo: mediamarkt },
  { name: "EOI", logo: eoi },
  { name: "MainJobs", logo: mainjobs },
  { name: "Bacardi", logo: bacardi },
  { name: "BP", logo: bp },
  { name: "DISA", logo: disa },
  { name: "Douglas", logo: douglas },
  { name: "Shell", logo: shell },
  { name: "Sanitas", logo: sanitas },
  { name: "HiperDino", logo: hiperdino },
  { name: "Carglass", logo: carglass },
  { name: "Volkswagen", logo: volkswagen },
  { name: "Opel", logo: opel },
  { name: "Fiat", logo: fiat },
  { name: "Nespresso", logo: nespresso },
  { name: "Diario de Avisos", logo: diarioAvisos },
  { name: "Zipgenial", logo: zipgenial },
];

const BrandsSection = () => {
  const duplicated = [...brands, ...brands];

  return (
    <section className="py-16 lg:py-20 bg-section-alt">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold" />
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-gold">
              Trayectoria
            </p>
            <div className="h-px w-10 bg-gold" />
          </div>
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground leading-snug">
            He tenido el privilegio de trabajar y colaborar <br className="hidden md:block" />
            con marcas como
          </h2>
        </div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to right, hsl(var(--section-alt)), transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(to left, hsl(var(--section-alt)), transparent)' }} />

        <div className="flex animate-scroll-brands items-center" style={{ gap: '32px' }}>
          {duplicated.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: '120px', height: '60px' }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
