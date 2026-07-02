import { useState, useRef } from "react";
import { ChevronDown, Volume2, VolumeX, ArrowRight } from "lucide-react";
import sandraPhoto from "@/assets/sandra-tello-hero.jpg";

/**
 * VÍDEO DE FONDO
 * ---------------------------------------------------------------
 * Para poner tu vídeo de fondo:
 *  1) Sube tu vídeo a YouTube (público u oculto) SIN música y SIN texto.
 *  2) Copia el ID (la parte después de v= en la URL).
 *  3) Sustituye YOUTUBE_VIDEO_ID por ese ID.
 * Si prefieres MP4 propio, pon MP4_VIDEO_SRC con la ruta.
 * ---------------------------------------------------------------
 */
const YOUTUBE_VIDEO_ID: string | null = null;
const MP4_VIDEO_SRC: string | null = null;

const HeroSection = () => {
  const [muted, setMuted] = useState(true);
  const mp4Ref = useRef<HTMLVideoElement>(null);



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

      {/* ============ CONTENIDO ============ */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow / kicker */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-8 bg-[#e6c67a]/60" />
            <p className="font-sans text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.32em] text-[#e6c67a]">
              Consultora estratégica · IA · Marca personal · Marketing
            </p>
            <span className="h-px w-8 bg-[#e6c67a]/60" />
          </div>

          {/* H1 — una sola frase que fluye natural */}
          <h1 className="font-serif font-semibold text-white leading-[1.08] tracking-tight mb-8 text-[32px] sm:text-[42px] md:text-[54px] lg:text-[64px]">
            Si tú no decides tu valor,{" "}
            <span className="italic" style={{ color: "#e6c67a" }}>
              otros lo deciden por ti.
            </span>
          </h1>

          {/* Subtítulo fijo — promesa aspiracional */}
          <p
            className="font-serif text-white/90 text-[17px] md:text-[20px] lg:text-[22px] leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Te acompaño a construir un posicionamiento digital coherente.
            Marca personal para visibilidad y autoridad, estrategia y marketing
            para posicionamiento e Inteligencia Artificial porque ya no es una
            ventaja competitiva: es tu nueva realidad.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full px-9 py-4 text-[13px] font-bold uppercase tracking-[0.15em] text-[#0f1a30] bg-[#e6c67a] hover:bg-[#f0d78c] hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(230,198,122,0.35)] hover:shadow-[0_0_45px_rgba(230,198,122,0.5)]"
            >
              Mi valor lo decido yo
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.15em] text-white/85 border border-white/25 hover:text-[#e6c67a] hover:border-[#e6c67a]/60 transition-all duration-300"
            >
              Cómo trabajo
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
