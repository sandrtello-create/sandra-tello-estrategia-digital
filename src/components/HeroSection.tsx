import { useState, useEffect, useRef } from "react";
import { ChevronDown, Volume2, VolumeX, ArrowRight } from "lucide-react";
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
const YOUTUBE_VIDEO_ID: string | null = null;
const MP4_VIDEO_SRC: string | null = null;

/**
 * Frases que rotan bajo el titular. Basadas en tu bio de LinkedIn:
 * dolores del cliente + tus fortalezas (mentora 1:1, formadora, estratega).
 */
const rotatingLines: string[] = [
  "Publicas cada semana, pero no convierte en oportunidades reales.",
  "Tu marca existe, pero no transmite lo que realmente vales.",
  "Tienes experiencia de sobra, y aún así nadie te ve como referente.",
  "Sabes lo que haces, pero no sabes cómo comunicarlo para vender.",
  "Sientes que la IA te supera y que vas tarde.",
  "Te acompaño 1:1 para que dejes de ser invisible.",
  "Formo a equipos y profesionales en IA con criterio humano.",
];

const HEADLINE_LEFT = "Si tú no decides tu valor,";
const HEADLINE_RIGHT = "otros lo deciden por ti.";

const HeroSection = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [lineVisible, setLineVisible] = useState(true);
  const [muted, setMuted] = useState(true);
  const mp4Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineVisible(false);
      setTimeout(() => {
        setCurrentLine((prev) => (prev + 1) % rotatingLines.length);
        setLineVisible(true);
      }, 700);
    }, 6000); // frase visible ~5.3s → tiempo real para leer
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

  return (
    <section
      id="inicio"
      className="relative overflow-hidden min-h-[92vh] flex items-center"
      style={{ background: "#0f1a30" }}
      aria-label="Sandra Tello — Si tú no decides tu valor, otros lo deciden por ti"
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
              width: "177.78vh",
              minWidth: "100%",
              height: "56.25vw",
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
          <img
            src={sandraPhoto}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover animate-hero-zoom"
          />
        )}

        {/* Overlay oscuro fuerte — legibilidad garantizada */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,26,48,0.72) 0%, rgba(15,26,48,0.78) 100%)",
          }}
        />
      </div>

      {/* ============ CONTENIDO — SÓLO TITULAR + FRASE ============ */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* H1 — descriptor real (más pequeño) */}
          <h1 className="font-sans text-white/85 text-[14px] md:text-[15px] lg:text-[16px] font-medium leading-relaxed tracking-wide max-w-3xl mx-auto mb-6">
            Consultora estratégica en IA, marca personal y marketing para quienes no quieren que otros decidan su valor.
          </h1>

          {/* Titular visual (kicker grande) */}
          <p className="font-serif font-semibold text-white leading-[1.1] tracking-tight mb-10" aria-hidden="true">
            <span className="block text-[28px] sm:text-[38px] md:text-[48px] lg:text-[58px]">
              {HEADLINE_LEFT}
            </span>
            <span
              className="block text-[28px] sm:text-[38px] md:text-[48px] lg:text-[58px] italic"
              style={{ color: "#e6c67a" }}
            >
              {HEADLINE_RIGHT}
            </span>
          </p>

          {/* Frase rotativa */}
          <div className="min-h-[6rem] md:min-h-[5rem] flex items-center justify-center mb-10">
            <p
              key={currentLine}
              className="font-serif text-white text-[18px] md:text-[22px] lg:text-[24px] leading-snug max-w-3xl transition-all duration-700"
              style={{
                opacity: lineVisible ? 1 : 0,
                transform: lineVisible ? "translateY(0)" : "translateY(12px)",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}
            >
              {rotatingLines[currentLine]}
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-[#0f1a30] bg-[#e6c67a] hover:bg-[#f0d78c] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(230,198,122,0.35)] hover:shadow-[0_0_45px_rgba(230,198,122,0.5)]"
            >
              Diseña tu estrategia conmigo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>


      {/* Botón de sonido (solo si hay vídeo) */}
      {hasVideo && (
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Activar sonido" : "Silenciar"}
          className="absolute bottom-6 right-6 z-20 w-11 h-11 rounded-full bg-black/40 border border-white/20 backdrop-blur-sm text-white/80 hover:text-[#e6c67a] hover:border-[#e6c67a]/60 flex items-center justify-center transition-colors"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      )}

      {/* Indicador scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 animate-bounce">
        <ChevronDown className="h-5 w-5 text-white/50" />
      </div>
    </section>
  );
};

export default HeroSection;
