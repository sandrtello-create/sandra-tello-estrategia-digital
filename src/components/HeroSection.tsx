import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import sandraPhoto from "@/assets/sandra-tello-hero.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-navy-light">
        {/* Abstract depth shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-accent/3 blur-2xl" />
          <div className="absolute top-1/3 right-1/3 w-[200px] h-[200px] rounded-full bg-primary-foreground/3 blur-xl" />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-0 items-center min-h-screen">
            {/* Photo side */}
            <div className="relative hidden lg:flex items-end justify-center order-1 self-end">
              <div className="relative w-full max-w-[520px]">
                {/* Accent line */}
                <div className="absolute -left-6 top-20 bottom-20 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
                <div className="relative">
                  <img
                    src={sandraPhoto}
                    alt="Sandra Tello – Consultora estratégica en inteligencia artificial, estrategia y marca personal"
                    className="w-full h-auto object-cover"
                  />
                  {/* Bottom fade into background */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary to-transparent" />
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className="max-w-xl order-2 py-24 lg:py-0 lg:pl-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10 bg-accent" />
                <p className="text-accent font-sans text-[11px] font-semibold uppercase tracking-[0.25em]">
                  Consultoría estratégica · IA · Marca personal
                </p>
              </div>

              <h1 className="font-serif text-[32px] md:text-[38px] lg:text-[44px] font-medium text-primary-foreground leading-[1.2] mb-8">
                Integro inteligencia artificial, estrategia y marca personal para convertir experiencia en autoridad y negocio.
              </h1>

              <p className="text-primary-foreground/70 text-lg leading-relaxed mb-12 font-sans">
                Acompaño a profesionales y empresas a integrar IA con criterio estratégico para posicionarse mejor, tomar decisiones más inteligentes y transformar su conocimiento en oportunidades reales.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent text-accent-foreground hover:bg-gold-light rounded-none px-8 py-7 text-[12px] font-semibold uppercase tracking-[0.15em] shadow-lg shadow-accent/20 border-0 transition-all duration-300 hover:shadow-xl hover:shadow-accent/30">
                  Agenda una sesión estratégica
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="ghost" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/5 rounded-none px-8 py-7 text-[12px] font-semibold uppercase tracking-[0.15em] border border-primary-foreground/15 transition-all duration-300 hover:border-primary-foreground/30">
                  Descubre cómo puedo ayudarte
                </Button>
              </div>

              {/* Credibility markers */}
              <div className="mt-16 pt-8 border-t border-primary-foreground/10">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <p className="font-serif text-2xl text-accent font-semibold">+15</p>
                    <p className="text-primary-foreground/50 text-xs font-sans uppercase tracking-wider mt-1">Años de experiencia</p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-accent font-semibold">+100K</p>
                    <p className="text-primary-foreground/50 text-xs font-sans uppercase tracking-wider mt-1">Comunidad digital</p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl text-accent font-semibold">+500</p>
                    <p className="text-primary-foreground/50 text-xs font-sans uppercase tracking-wider mt-1">Profesionales formados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <ChevronDown className="h-5 w-5 text-primary-foreground/30" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
