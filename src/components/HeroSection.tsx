import { useState, useEffect, useRef } from "react";
import { ArrowRight, ChevronDown, Volume2, VolumeX } from "lucide-react";
import sandraPhoto from "@/assets/sandra-tello-hero.jpg";

/**
 * VÍDEO DE FONDO
 * ---------------------------------------------------------------
 * Para poner tu vídeo de fondo (estilo Vilma Núñez):
 *  1) Sube tu vídeo a YouTube (público u oculto) SIN música y SIN texto.
 *  2) Copia el ID (la parte después de v= en la URL).
 *  3) Sustituye YOUTUBE_VIDEO_ID por ese ID.
 *
 * Si prefieres MP4 propio, pon MP4_VIDEO_SRC con la ruta (p. ej.
 * "/videos/sandra-hero.mp4" tras subirlo a /public/videos/).
 * ---------------------------------------------------------------
 */
const YOUTUBE_VIDEO_ID: string | null = null; // ← pega aquí tu ID de YouTube
const MP4_VIDEO_SRC: string | null = null;    // ← o ruta a un .mp4 en /public

/**
 * Frases que rotan sobre el vídeo. Escritas desde los dolores/deseos
 * de tu perfil de LinkedIn — hablan al lector directamente.
 */
const rotatingLines: { pre: string; highlight: string; post: string }[] = [
  { pre: "Publicas cada semana, pero", highlight: "no convierte", post: "en oportunidades reales." },
  { pre: "Tu marca existe,", highlight: "pero no transmite", post: "lo que realmente vales." },
  { pre: "Tienes experiencia de sobra,", highlight: "y aún así", post: "digitalmente nadie te ve como referente." },
  { pre: "Sabes lo que haces,", highlight: "pero no sabes", post: "cómo comunicarlo para vender." },
  { pre: "Sientes que la IA te supera", highlight: "y que vas tarde", post: "— no vas tarde, vas sin estrategia." },
];

const HEADLINE_LEFT = "Si tú no decides tu valor,";
const HEADLINE_RIGHT = "otros lo deciden por ti.";
const SUBTITLE =
  "Estrategia digital, marca personal e inteligencia artificial al servicio de tu voz, tu negocio y tu vida. Lo relacional prevalece sobre lo transaccional.";

const stats = [
  { label: "Experiencia", value: 20, suffix: "", prefix: "+", description: "años en negocio y marketing" },
  { label: "Formación", value: 300, suffix: "", prefix: "+", description: "profesionales formados en IA y marca personal" },
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
      className="p-4 md:p-5 backdrop-blur-md transition-all duration-700"
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(20px)",
        background: "rgba(27,42,74,0.55)",
        border: "1px solid rgba(203,170,96,0.25)",
      }}
    >
      <p className="text-[10px] font-sans uppercase tracking-[0.2em] gold-gradient-text mb-2 font-semibold">
        {stat.label}
      </p>
      <p className="font-serif text-3xl md:text-4xl font-semibold gold-gradient-text leading-none mb-2">
        {stat.prefix}{count}{stat.suffix}
      </p>
      <p className="text-white/60 text-[11px] md:text-xs font-sans leading-relaxed">{stat.description}</p>
    </div>
  );
};

const HeroSection = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [lineVisible, setLineVisible] = useState(true);
  const [statsVisible, setStatsVisible] = useState(false);
  const [muted, setMuted] = useState(true);
  const statsRef = useRef<HTMLDivElement>(null);
  const mp4Ref = useRef<HTMLVideoElement>(null);

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
      setLineVisible(false);
      setTimeout(() => {
        setCurrentLine((prev) => (prev + 1) % rotatingLines.length);
        setLineVisible(true);
      }, 500);
    }, 4200);
    return () => clearInterval(interval);
  }, []);

  const toggleMute = () => {
    setMuted((m) => {
      const next = !m;
      if (mp4Ref.current) mp4Ref.current.muted = next;
      return next;
    });
  };

  const hasVideo = Boolean(YOUTUBE_VIDEO_ID || MP4_VIDEO_SRC);
  const line = rotatingLines[currentLine];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ background: "#1B2A4A" }}
      aria-label="Presentación de Sandra Tello"
    >
      {/* ============ VÍDEO DE FONDO ============ */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {YOUTUBE_VIDEO_ID ? (
          <iframe
            title="Vídeo de fondo Sandra Tello"
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=${muted ? 1 : 0}&controls=0&loop=1&playlist=${YOUTUBE_VIDEO_ID}&playsinline=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1`}
            allow="autoplay; encrypted-media"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
              width: "177.78vh", // 16:9 relative a la altura
              minWidth: "100%",
              height: "56.25vw", // 16:9 relative al ancho
              minHeight: "100%",
            }}
          />
        ) : MP4_VIDEO_SRC ? (
          <video
            ref={mp4Ref}
            src={MP4_VIDEO_SRC}
            autoPlay
            muted={muted}
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          // Fallback: foto con ligero Ken-Burns hasta que subas el vídeo
          <img
            src={sandraPhoto}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover animate-hero-zoom"
          />
        )}

        {/* Capa oscura para legibilidad — sube el opacidad si tu vídeo es muy claro */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(27,42,74,0.55) 0%, rgba(27,42,74,0.65) 40%, rgba(27,42,74,0.85) 100%)",
          }}
        />
        {/* Viñeta dorada */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 40%, rgba(203,170,96,0.08) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* ============ CONTENIDO ============ */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-32 pb-24">
        <div className="max-w-5xl mx-auto text-center">
          {/* Kicker */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div
              className="h-px w-10"
              style={{ background: "linear-gradient(90deg, transparent, #cbaa60)" }}
            />
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.3em] gold-gradient-text">
              Estrategia · Marca personal · IA
            </p>
            <div
              className="h-px w-10"
              style={{ background: "linear-gradient(90deg, #cbaa60, transparent)" }}
            />
          </div>

          {/* Headline */}
          <h1 className="font-serif font-semibold text-white leading-[1.05] tracking-tight mb-8">
            <span className="block text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px]">
              {HEADLINE_LEFT}
            </span>
            <span className="block text-[36px] sm:text-[44px] md:text-[56px] lg:text-[68px] italic gold-gradient-text">
              {HEADLINE_RIGHT}
            </span>
          </h1>

          {/* Frase rotativa — habla directo al lector */}
          <div className="min-h-[6.5rem] md:min-h-[5rem] mb-8 flex items-center justify-center">
            <p
              className="font-serif text-white/90 text-[19px] md:text-[24px] lg:text-[26px] leading-snug max-w-3xl transition-all duration-500"
              style={{
                opacity: lineVisible ? 1 : 0,
                transform: lineVisible ? "translateY(0)" : "translateY(10px)",
              }}
            >
              {line.pre}{" "}
              <span className="gold-gradient-text italic font-medium">{line.highlight}</span>{" "}
              {line.post}
            </p>
          </div>

          {/* Subtítulo — tu premisa */}
          <p className="text-white/70 font-sans text-[15px] md:text-[17px] leading-relaxed max-w-2xl mx-auto mb-10">
            {SUBTITLE}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <a
              href="#contacto"
              className="btn-gold-gradient rounded-full px-9 py-4 text-[13px] font-bold uppercase tracking-[0.15em] inline-flex items-center justify-center gap-2 shadow-lg shadow-[rgba(164,118,51,0.35)] hover:scale-[1.03] transition-all duration-300"
            >
              Diseña tu estrategia conmigo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicios"
              className="rounded-full px-9 py-4 text-[13px] font-bold uppercase tracking-[0.15em] border-2 border-white/25 text-white hover:text-[#cbaa60] hover:border-[#cbaa60]/60 hover:bg-white/5 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm"
            >
              ¿Cómo puedo ayudarte?
            </a>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="pt-8 border-t border-white/10">
            <div className="grid grid-cols-3 gap-3 md:gap-5 max-w-3xl mx-auto">
              {stats.map((stat, i) => (
                <StatCard key={i} stat={stat} isVisible={statsVisible} delay={i * 200} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Botón de sonido (solo si hay vídeo) */}
      {hasVideo && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Activar sonido" : "Silenciar"}
          className="absolute bottom-6 right-6 z-20 w-11 h-11 rounded-full bg-black/40 border border-white/20 backdrop-blur-sm text-white/80 hover:text-[#cbaa60] hover:border-[#cbaa60]/60 flex items-center justify-center transition-colors"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      )}

      {/* Indicador scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
        <ChevronDown className="h-5 w-5 text-white/40" />
      </div>
    </section>
  );
};

export default HeroSection;
