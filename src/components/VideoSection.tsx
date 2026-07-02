import { Play } from "lucide-react";

/**
 * Sección de vídeo destacada sobre el hero.
 *
 * ▶ Para publicar tu vídeo:
 *    1. Sustituye `VIDEO_URL` por la URL de embed de YouTube o Vimeo.
 *       - YouTube: https://www.youtube.com/embed/VIDEO_ID
 *       - Vimeo:   https://player.vimeo.com/video/VIDEO_ID
 *    2. Cuando migres a WordPress, este bloque puede convertirse en un
 *       shortcode/bloque de vídeo apuntando al mismo embed.
 */
const VIDEO_URL: string | null = null; // ← pega aquí tu URL de embed
const VIDEO_TITLE = "Sandra Tello — Presentación";

const VideoSection = () => {
  return (
    <section
      id="video"
      aria-label="Vídeo de presentación de Sandra Tello"
      className="relative pt-28 pb-12 lg:pt-32 lg:pb-16"
      style={{
        background:
          "linear-gradient(180deg, #1B2A4A 0%, #212334 60%, #252844 100%)",
      }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div
              className="h-px w-10"
              style={{ background: "linear-gradient(90deg, #a47633, #cbaa60)" }}
            />
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] gold-gradient-text">
              Bienvenida
            </p>
            <div
              className="h-px w-10"
              style={{ background: "linear-gradient(90deg, #cbaa60, #a47633)" }}
            />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
            Conóceme en <span className="gold-gradient-text italic">un minuto</span>
          </h2>
          <p className="mt-4 text-white/60 font-sans text-sm md:text-base max-w-2xl mx-auto">
            Una introducción breve a mi método, mi visión y cómo puedo ayudarte
            a crear la vida y el negocio que quieres.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div
            className="relative w-full overflow-hidden shadow-2xl"
            style={{
              aspectRatio: "16 / 9",
              border: "1px solid rgba(203,170,96,0.35)",
              boxShadow:
                "0 30px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(203,170,96,0.15)",
            }}
          >
            {VIDEO_URL ? (
              <iframe
                src={VIDEO_URL}
                title={VIDEO_TITLE}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            ) : (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(203,170,96,0.12) 0%, rgba(27,42,74,0.9) 70%)",
                }}
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #a47633 0%, #cbaa60 50%, #f7d57b 100%)",
                    boxShadow: "0 10px 40px rgba(203,170,96,0.4)",
                  }}
                >
                  <Play className="w-8 h-8 text-[#1B2A4A] ml-1" fill="currentColor" />
                </div>
                <p className="font-serif italic text-white/70 text-lg">
                  Vídeo próximamente
                </p>
                <p className="text-white/40 text-xs font-sans max-w-md text-center px-6">
                  Sustituye <code className="text-[#cbaa60]">VIDEO_URL</code> en{" "}
                  <code className="text-[#cbaa60]">VideoSection.tsx</code> con la
                  URL de embed de tu vídeo de YouTube o Vimeo.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
