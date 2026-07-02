import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import sandraPhoto from "@/assets/sandra-tello-hero.jpg";
import logoWatermark from "@/assets/sandra-tello-logo.png";

const rotatingPhrases = [
  { text: "Estrategia en marca personal" },
  { text: "IA aplicada en negocio" },
  { text: "Formación en inteligencia artificial" },
  { text: "Consultoría estratégica digital" },
];

const stats = [
  { label: "Experiencia", value: 20, suffix: "", prefix: "+", description: "años en negocio y marketing" },
  { label: "Formación", value: 500, suffix: "", prefix: "+", description: "profesionales formados en IA y marca personal" },
  { label: "Uno a uno", value: 30, suffix: "", prefix: "+", description: "profesionales acompañados 1:1" },
];

const useCountUp = (target: number, isVisible: boolean, duration = 2000) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isVisible || hasAnimated.current) return;
    hasAnimated.current = true;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return count;
};

const StatCard = ({ stat, isVisible, delay }: { stat: typeof stats[0]; isVisible: boolean; delay: number }) => {
  const count = useCountUp(stat.value, isVisible);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShow(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div
      className="relative p-3 md:p-5 backdrop-blur-sm transition-all duration-700"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0)' : 'translateY(20px)',
        background: 'linear-gradient(135deg, rgba(203,170,96,0.08), rgba(255,255,255,0.02))',
        border: '1px solid',
        borderImage: 'linear-gradient(135deg, rgba(203,170,96,0.4), rgba(203,170,96,0.1)) 1',
      }}
    >
      <p className="text-[10px] font-sans uppercase tracking-[0.2em] gold-gradient-text mb-3 font-semibold">{stat.label}</p>
      <p className="font-serif text-2xl sm:text-3xl md:text-5xl font-semibold gold-gradient-text leading-none mb-2">
        {stat.prefix}{count}{stat.suffix}
      </p>
      <p className="text-white/45 text-[10px] md:text-xs font-sans leading-relaxed">{stat.description}</p>
    </div>
  );
};

const HeroClassic = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsVisible(true); },
      { threshold: 0.1 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);
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
            className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[900px] h-auto opacity-[0.05] pointer-events-none select-none"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-0 items-center min-h-screen">
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
            <div className="max-w-2xl order-2 pt-8 pb-20 lg:py-0 lg:pl-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10" style={{ background: 'linear-gradient(90deg, #a47633, #cbaa60)' }} />
                <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] gold-gradient-text">
                  Consultoría estratégica, IA, marketing y marca personal
                </p>
              </div>

              <h1 className="font-serif text-[32px] md:text-[40px] lg:text-[46px] font-semibold text-white leading-[1.15] mb-2">
                Consultora estratégica en inteligencia artificial y marca personal
              </h1>

              <p className="font-serif text-[22px] md:text-[26px] lg:text-[30px] italic gold-gradient-text mb-6 leading-snug">
                Crea la vida que amas
              </p>

              {/* Rotating phrases */}
              <div className="mb-8 overflow-hidden">
                <div
                  className="inline-block"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0) scale(1.05)' : 'translateY(20px) scale(0.9)',
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <span
                    className="inline-block px-6 py-2.5 rounded-md font-sans text-[15px] md:text-[17px] font-medium gold-gradient-text"
                    style={{
                      border: '2px solid',
                      borderImage: 'linear-gradient(135deg, #a47633, #cbaa60, #f7d57b) 1',
                      boxShadow: isVisible ? '0 0 20px rgba(203,170,96,0.2)' : 'none',
                      transition: 'all 0.6s ease',
                    }}
                  >
                    {rotatingPhrases[currentPhrase].text}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-gold-gradient rounded-full px-10 py-5 text-[13px] font-bold uppercase tracking-[0.15em] inline-flex items-center justify-center gap-2 shadow-lg shadow-[rgba(164,118,51,0.3)] hover:scale-105 hover:shadow-xl hover:shadow-[rgba(164,118,51,0.4)] transition-all duration-300">
                  Diseña tu estrategia conmigo
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="rounded-full px-10 py-5 text-[13px] font-bold uppercase tracking-[0.15em] border-2 border-white/20 text-white hover:text-[#cbaa60] hover:border-[#cbaa60]/60 hover:bg-[#cbaa60]/10 hover:shadow-lg hover:shadow-[rgba(203,170,96,0.15)] transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm">
                  ¿Cómo puedo ayudarte?
                </button>
              </div>

              {/* Credibility markers */}
              <div ref={statsRef} className="mt-16 pt-8 border-t border-white/10">
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6">
                  {stats.map((stat, i) => (
                    <StatCard key={i} stat={stat} isVisible={statsVisible} delay={i * 200} />
                  ))}
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

export default HeroClassic;
