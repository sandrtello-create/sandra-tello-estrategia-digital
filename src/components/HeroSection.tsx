import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import sandraPhoto from "@/assets/sandra-tello-hero.jpg";
import logoWatermark from "@/assets/sandra-tello-logo.png";

const rotatingPhrases = [
  { text: "IA para negocios", border: "linear-gradient(135deg, #20E3B2, #7EE8FA)" },
  { text: "Formación en IA", border: "linear-gradient(135deg, #3A63F3, #5C7CFA)" },
  { text: "Consultoría estratégica digital", border: "linear-gradient(135deg, #F472B6, #FBCFE8)" },
  { text: "Marca personal profesional", border: "linear-gradient(135deg, #7DB7E8, #dae2eb)" },
];

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % rotatingPhrases.length);
        setIsVisible(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section id="inicio" className="relative overflow-hidden pt-28">
      <div className="relative min-h-[calc(100vh-7rem)] flex items-center" style={{
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
            className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[600px] h-auto opacity-[0.04] pointer-events-none select-none"
          />
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
            <div className="max-w-2xl order-2 pt-16 pb-20 lg:py-0 lg:pl-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, #a47633, #cbaa60)' }} />
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] gold-gradient-text">
                  Consultoría estratégica · IA · Marca personal
                </p>
              </div>

              <h1 className="font-serif text-[32px] md:text-[40px] lg:text-[46px] font-semibold text-white leading-[1.15] mb-4">
                Consultora estratégica y formadora en inteligencia artificial y marca personal
              </h1>

              {/* Rotating phrases */}
              <div className="mb-4 overflow-hidden">
                <div
                  className="inline-block"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <span
                    className="inline-block px-5 py-2 rounded-md font-sans text-[15px] md:text-[17px] font-medium text-gray-900"
                    style={{
                      background: rotatingPhrases[currentPhrase].bg,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                      transition: 'background 0.5s ease',
                    }}
                  >
                    {rotatingPhrases[currentPhrase].text}
                  </span>
                </div>
              </div>

               {/* Crea la vida que amas - Purpose statement */}
              <p className="font-serif text-[28px] md:text-[32px] italic text-center gold-gradient-text mb-10 leading-snug font-semibold">
                Crea la vida que amas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-gold-gradient rounded-full px-10 py-5 text-[13px] font-bold uppercase tracking-[0.15em] inline-flex items-center justify-center gap-2 shadow-lg shadow-[rgba(164,118,51,0.3)]">
                  Diseña tu estrategia conmigo
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="rounded-full px-10 py-5 text-[13px] font-bold uppercase tracking-[0.15em] border-2 border-white/20 text-white hover:text-white hover:border-white/50 hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm">
                  ¿Cómo puedo ayudarte?
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
