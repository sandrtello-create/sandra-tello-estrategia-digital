import { ArrowRight } from "lucide-react";
import sandraPhoto from "@/assets/sandra-tello-hero.jpg";
import logoWatermark from "@/assets/sandra-tello-logo.png";
import CredibilityStats from "@/components/CredibilityStats";

const HeroClassic = () => {
  return (
    <section id="sobre-mi" className="relative overflow-hidden">
      <div className="relative py-16 lg:py-20 flex items-center" style={{
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
          {/* Watermark logo */}
          <img
            src={logoWatermark}
            alt=""
            aria-hidden="true"
            className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[900px] h-auto opacity-[0.05] pointer-events-none select-none"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* Photo side */}
            <div className="relative flex items-center lg:items-end justify-center order-1 lg:self-end">
              <div className="relative w-full max-w-[280px] md:max-w-[360px] lg:max-w-[520px]">
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
            <div className="max-w-2xl order-2 pt-8 pb-16 lg:py-0 lg:pl-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, #a47633, #cbaa60)' }} />
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] gold-gradient-text">
                  Estrategia digital, marca personal e IA
                </p>
              </div>

              <h2 className="font-serif text-[30px] md:text-[38px] lg:text-[44px] font-semibold text-white leading-[1.2] mb-6">
                La tecnología avanza rápido. <span className="italic gold-gradient-text">Tu estrategia digital</span> merece avanzar contigo.
              </h2>

              <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed mb-5">
                Vivimos rodeadas de herramientas, algoritmos y promesas de productividad. Y aun así, lo que sigue marcando la diferencia es profundamente humano: <span className="text-white font-medium">criterio, mirada estratégica y una voz que se reconoce</span>. Esa voz es tu marca personal articulada con estrategia digital. Y cuando la potencias con marketing consciente e inteligencia artificial —con el <span className="text-white font-medium">factor humano</span> como centro—, dejas de ser invisible.
              </p>


              <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed mb-8">
                Por eso trabajo así: IA y marketing al servicio de quién eres, no al revés. Estrategia para tomar mejores decisiones. Y la felicidad —esa sí, real— de dedicar tu tiempo a <span className="italic gold-gradient-text">crear la vida que amas</span> desde una marca que te representa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto" className="btn-gold-gradient rounded-full px-9 py-4 text-[13px] font-bold uppercase tracking-[0.15em] inline-flex items-center justify-center gap-2 shadow-lg shadow-[rgba(164,118,51,0.3)] hover:scale-105 hover:shadow-xl hover:shadow-[rgba(164,118,51,0.4)] transition-all duration-300">
                  Empieza por tu estrategia
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#servicios" className="rounded-full px-9 py-4 text-[13px] font-bold uppercase tracking-[0.15em] border-2 border-white/20 text-white hover:text-[#cbaa60] hover:border-[#cbaa60]/60 hover:bg-[#cbaa60]/10 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm">
                  Ver cómo trabajo
                </a>
              </div>



              {/* Credibility markers */}
              <CredibilityStats />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroClassic;
