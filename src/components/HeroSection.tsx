import { ArrowRight, ChevronDown } from "lucide-react";
import sandraPhoto from "@/assets/sandra-tello-hero.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="relative min-h-screen flex items-center" style={{
        background: 'linear-gradient(135deg, #212334 0%, #252844 30%, #303f69 70%, #252844 100%)'
      }}>
        {/* Abstract depth shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(203,170,96,0.08) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl" style={{ background: 'radial-gradient(circle, rgba(164,118,51,0.06) 0%, transparent 70%)' }} />
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full blur-2xl" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)' }} />
          {/* Subtle grid */}
          <div className="absolute inset-0 opacity-[0.025]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }} />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-0 items-center min-h-screen">
            {/* Photo side */}
            <div className="relative hidden lg:flex items-end justify-center order-1 self-end">
              <div className="relative w-full max-w-[520px]">
                <div className="relative">
                  {/* Soft glow behind photo */}
                  <div className="absolute -inset-8 blur-3xl opacity-20" style={{ background: 'radial-gradient(ellipse, rgba(203,170,96,0.3) 0%, transparent 70%)' }} />
                  <img
                    src={sandraPhoto}
                    alt="Sandra Tello – Consultora estratégica en inteligencia artificial, estrategia y marca personal"
                    className="w-full h-auto object-cover relative z-10"
                    style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
                  />
                  {/* Bottom fade */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 z-20" style={{ background: 'linear-gradient(to top, #252844, transparent)' }} />
                  {/* Side fades */}
                  <div className="absolute top-0 left-0 bottom-0 w-16 z-20" style={{ background: 'linear-gradient(to right, rgba(37,40,68,0.6), transparent)' }} />
                </div>
              </div>
            </div>

            {/* Text side */}
            <div className="max-w-xl order-2 py-24 lg:py-0 lg:pl-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, #a47633, #cbaa60)' }} />
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] gold-gradient-text">
                  Consultoría estratégica · IA · Marca personal
                </p>
              </div>

              <h1 className="font-serif text-[34px] md:text-[42px] lg:text-[50px] font-semibold text-white leading-[1.15] mb-10">
                Integro inteligencia artificial y estrategia para convertir experiencia en autoridad.
              </h1>

              <p className="text-white/55 text-[16px] leading-relaxed mb-5 font-sans font-medium tracking-wide">
                Marca personal · IA · Estrategia de negocio para profesionales y empresas.
              </p>

              <p className="font-serif text-[22px] italic mb-14 gold-gradient-text leading-snug">
                Crea la vida que amas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-gold-gradient rounded-none px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.15em] inline-flex items-center justify-center gap-2">
                  Agenda una sesión estratégica
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="rounded-none px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.15em] border border-white/15 text-white/80 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-300 inline-flex items-center justify-center">
                  Descubre cómo puedo ayudarte
                </button>
              </div>

              {/* Credibility markers */}
              <div className="mt-16 pt-8 border-t border-white/10">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <p className="font-serif text-2xl font-semibold gold-gradient-text">+15</p>
                    <p className="text-white/45 text-xs font-sans uppercase tracking-wider mt-1">Años de experiencia</p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-semibold gold-gradient-text">+100K</p>
                    <p className="text-white/45 text-xs font-sans uppercase tracking-wider mt-1">Comunidad digital</p>
                  </div>
                  <div>
                    <p className="font-serif text-2xl font-semibold gold-gradient-text">+500</p>
                    <p className="text-white/45 text-xs font-sans uppercase tracking-wider mt-1">Profesionales formados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <ChevronDown className="h-5 w-5 text-white/25" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
