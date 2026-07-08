import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CredibilityStats from "@/components/CredibilityStats";
import sandraHero from "@/assets/sandra-tello-hero.jpg";
import sandraAbout from "@/assets/sandra-tello-about.jpg";
import sandraIA from "@/assets/sandra-tello-ia.jpg";
import sandraMarcopolo from "@/assets/sandra-tello-marcopolo.jpg";
import logoWatermark from "@/assets/sandra-logo-watermark.png";

/**
 * "Mi historia" — versión alternativa (v2).
 * Enfoque: diario encuadernado / carta íntima.
 * - Papel crema con textura sutil, márgenes anchos, marginalia lateral.
 * - Drop caps grandes, ornamentos SVG dorados, sellos numerados.
 * - Spreads cinemáticos a sangre con cita superpuesta.
 * - Cierre con firma manuscrita.
 * Se apoya solo en la paleta navy + oro + cream, sin acentos neón.
 */

/* ---------------------------- Ornaments (SVG) ---------------------------- */

const Fleuron = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 120 24"
    className={`w-40 h-6 text-accent ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="0.8"
    aria-hidden
  >
    <line x1="0" y1="12" x2="42" y2="12" />
    <line x1="78" y1="12" x2="120" y2="12" />
    <circle cx="60" cy="12" r="2.6" fill="currentColor" stroke="none" />
    <circle cx="50" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="70" cy="12" r="1" fill="currentColor" stroke="none" />
    <path d="M60 6 C 55 9, 55 15, 60 18 C 65 15, 65 9, 60 6 Z" />
  </svg>
);

const WaxSeal = ({ n }: { n: string }) => (
  <div className="relative w-24 h-24 mx-auto">
    <div
      className="absolute inset-0 rounded-full"
      style={{
        background:
          "radial-gradient(circle at 32% 30%, hsl(var(--gold-light)) 0%, hsl(var(--gold)) 45%, hsl(var(--gold-dark)) 100%)",
        boxShadow:
          "inset -6px -8px 14px hsl(var(--gold-dark) / 0.6), inset 6px 6px 10px hsl(var(--gold-light) / 0.7), 0 8px 18px hsl(var(--navy) / 0.18)",
      }}
    />
    <div className="absolute inset-2 rounded-full border border-[hsl(var(--gold-dark))]/60" />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="font-serif italic text-primary-foreground text-2xl tracking-wider drop-shadow-sm">
        {n}
      </span>
    </div>
  </div>
);

/* --------------------------- Reveal on scroll --------------------------- */

const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-out will-change-transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

/* ------------------------------ Page pieces ----------------------------- */

const paperStyle: React.CSSProperties = {
  backgroundColor: "hsl(var(--cream))",
  backgroundImage: `
    radial-gradient(1200px 600px at 10% 0%, hsl(var(--gold) / 0.06), transparent 60%),
    radial-gradient(1000px 500px at 100% 100%, hsl(var(--navy) / 0.05), transparent 60%)
  `,
};

/** Página de diario con marginalia a la izquierda y prosa a la derecha */
const DiaryPage = ({
  seal,
  chapter,
  year,
  title,
  marginNote,
  children,
  dropcap = true,
}: {
  seal: string;
  chapter: string;
  year: string;
  title: string;
  marginNote?: string;
  children: React.ReactNode;
  dropcap?: boolean;
}) => (
  <section className="relative py-16 md:py-24">
    <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
      <Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Marginalia */}
          <aside className="col-span-12 md:col-span-3 md:sticky md:top-32 self-start">
            <div className="flex md:block items-center gap-4">
              <WaxSeal n={seal} />
              <div className="mt-0 md:mt-6 text-left md:text-right pr-0 md:pr-2 border-l md:border-l-0 md:border-r border-accent/30 pl-4 md:pl-0">
                <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-accent mb-2">
                  {chapter}
                </p>
                <p className="font-serif italic text-primary/70 text-lg">{year}</p>
                {marginNote && (
                  <p className="mt-4 font-serif italic text-[13px] leading-relaxed text-muted-foreground max-w-[22ch] md:ml-auto">
                    “{marginNote}”
                  </p>
                )}
              </div>
            </div>
          </aside>

          {/* Prose column */}
          <div className="col-span-12 md:col-span-9">
            <h2 className="font-serif text-3xl md:text-[42px] leading-[1.15] text-primary mb-8 max-w-[28ch]">
              {title}
            </h2>
            <div
              className={`font-serif text-[19px] md:text-[21px] leading-[1.85] text-foreground/85 space-y-6 ${
                dropcap
                  ? "[&>p:first-child]:first-letter:font-serif [&>p:first-child]:first-letter:text-[84px] [&>p:first-child]:first-letter:leading-[0.85] [&>p:first-child]:first-letter:font-medium [&>p:first-child]:first-letter:text-accent [&>p:first-child]:first-letter:float-left [&>p:first-child]:first-letter:mr-3 [&>p:first-child]:first-letter:mt-2"
                  : ""
              }`}
            >
              {children}
            </div>
            <div className="mt-12 flex justify-center">
              <Fleuron />
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

/** Spread cinemático a sangre con cita superpuesta */
const Spread = ({
  image,
  quote,
  attribution,
  align = "left",
}: {
  image: string;
  quote: string;
  attribution?: string;
  align?: "left" | "right";
}) => (
  <section className="relative h-[80vh] min-h-[520px] w-full overflow-hidden">
    <img
      src={image}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      loading="lazy"
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          align === "left"
            ? "linear-gradient(90deg, hsl(var(--navy) / 0.88) 0%, hsl(var(--navy) / 0.55) 45%, transparent 80%)"
            : "linear-gradient(270deg, hsl(var(--navy) / 0.88) 0%, hsl(var(--navy) / 0.55) 45%, transparent 80%)",
      }}
    />
    <div className="relative h-full container mx-auto px-6 lg:px-8 max-w-6xl flex items-center">
      <div
        className={`max-w-xl ${align === "right" ? "ml-auto text-right" : ""}`}
      >
        <Reveal>
          <div
            className={`h-[1px] w-16 bg-accent mb-6 ${
              align === "right" ? "ml-auto" : ""
            }`}
          />
          <blockquote className="font-serif italic text-primary-foreground text-3xl md:text-5xl leading-[1.15]">
            “{quote}”
          </blockquote>
          {attribution && (
            <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.28em] text-accent">
              {attribution}
            </p>
          )}
        </Reveal>
      </div>
    </div>
  </section>
);

/* --------------------------------- Page --------------------------------- */

const MiHistoria = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEO
        title="Mi historia — Sandra Tello"
        description="Un diario abierto: cómo el Derecho, el piano, un despido y la IA se convirtieron en un método propio."
        path="/mi-historia"
      />
      <Navbar />

      <main className="pt-28">
        {/* ============================ OVERTURE ============================ */}
        <section className="relative min-h-[92vh] flex items-center" style={paperStyle}>
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl py-24">
            <Reveal>
              <p className="font-sans text-[11px] uppercase tracking-[0.4em] text-accent text-center mb-10">
                Diario · Edición íntima
              </p>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="font-serif text-primary text-center leading-[0.95]">
                <span className="block italic font-light text-2xl md:text-3xl text-primary/60 mb-4">
                  lo que nunca le conté
                </span>
                <span className="block text-[68px] md:text-[128px] tracking-tight">
                  a nadie<span className="text-accent">.</span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={280}>
              <div className="mt-14 flex justify-center">
                <Fleuron />
              </div>
            </Reveal>

            <Reveal delay={380}>
              <p className="mt-12 font-serif italic text-center text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
                Esto no es una biografía. Es una carta larga escrita en voz baja,
                para que la leas como se leen las cartas: sin prisa, y sabiendo
                que <span className="text-accent not-italic">lo relacional prevalece a lo transaccional</span>.
              </p>
            </Reveal>

            <Reveal delay={520}>
              <div className="mt-16 flex flex-col items-center gap-3">
                <span className="font-sans text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
                  pasa página
                </span>
                <div className="w-[1px] h-14 bg-gradient-to-b from-accent to-transparent animate-pulse" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============================ CHAPTERS ============================ */}
        <div style={paperStyle}>
          <DiaryPage
            seal="I"
            chapter="Capítulo I · La caída"
            year="Otoño de 2021"
            title="El día en que una sala fría decidió por mí."
            marginNote="Firmé con un No Conforme escrito de mi puño y letra."
          >
            <p>
              Me sentía culpable, como si de repente no valiera nada. Como si
              dejar atrás el estatus de trabajar en una empresa grande fuera a
              borrarme de golpe. Pensaba que ya nadie más se fijaría en mí, y
              encima estaba la edad.
            </p>
            <p>
              Fue una reunión breve, en una sala fría, con gente que me había
              abrazado al otro lado de la pantalla apenas unas semanas antes.
              Ahora me decían que mi perfil «no era de marketing» y que por eso
              iban a reestructurar el departamento. Si una empresa así de
              poderosa me lo decía con esa seguridad, ¿cómo iba yo a seguir
              viviendo de lo que tanto amaba?
            </p>
            <p>
              Salí del edificio con una caja de cartón que ni siquiera
              necesitaba. Lo mío, lo de verdad, llevaba tiempo estando en otra
              parte. Solo que todavía tardaría en descubrir dónde.
            </p>
          </DiaryPage>
        </div>

        <Spread
          image={sandraAbout}
          quote="Hay puertas que se cierran antes de tiempo. Y menos mal."
          attribution="Nota al margen, invierno de 2021"
          align="left"
        />

        <div style={paperStyle}>
          <DiaryPage
            seal="II"
            chapter="Capítulo II · El cuerpo habla"
            year="2021 — 2022"
            title="El cuerpo subrayó el mensaje por si no había quedado claro."
            marginNote="Ley de Segunda Oportunidad. Empezar de cero, sin colchón."
          >
            <p>
              Lo que vino después no tuvo ninguna gracia. Una depresión muy
              silenciosa que me fue alejando de todo el mundo sin que apenas me
              diera cuenta. Y una situación económica que me llevó a acogerme a
              la <em>Ley de Segunda Oportunidad</em> para empezar de cero.
            </p>
            <p>
              Como si el cuerpo hubiera querido subrayar el mensaje, la rodilla
              se me volvió a salir: menisco reconstruido otra vez, un ligamento
              cruzado bordado de nuevo, meses de reposo forzado en el peor
              momento posible. Justo cuando mi cabeza todavía quería correr a la
              velocidad de siempre.
            </p>
          </DiaryPage>
        </div>

        {/* Intermezzo tipográfico navy */}
        <section className="relative bg-primary py-28 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `url(${logoWatermark})`,
              backgroundSize: "200px auto",
              backgroundRepeat: "repeat",
            }}
          />
          <div className="relative container mx-auto px-6 max-w-4xl text-center">
            <Reveal>
              <Fleuron className="mx-auto mb-10 opacity-80" />
              <p className="font-serif italic text-primary-foreground/95 text-3xl md:text-5xl leading-[1.25]">
                “Nadie vino a rescatarme.
                <br />
                <span className="text-accent">Me rescaté yo</span>,<br />
                sin prisa de heroína.”
              </p>
              <Fleuron className="mx-auto mt-10 opacity-80" />
            </Reveal>
          </div>
        </section>

        <div style={paperStyle}>
          <DiaryPage
            seal="III"
            chapter="Capítulo III · El origen"
            year="Antes de todo esto"
            title="Una chicharrera un poco peculiar, entre dos mares."
            marginNote="Hija de madre ecuatoriana y padre peninsular."
          >
            <p>
              Para entender cómo llegué a un día así hay que retroceder bastante
              más atrás. Hasta una niña de notas altas, «madura para su edad»,
              la que nunca daba problemas.
            </p>
            <p>
              Crecí repartida entre el Atlántico y el Mediterráneo sin saber
              todavía que ese ir y venir sería mi primer entrenamiento serio:
              moverme entre mundos distintos sin dejar pedazos de mí por el
              camino. Debajo de esa fachada tan bien resuelta había un precio:
              una exigencia interior que jamás se apagaba del todo.
            </p>
          </DiaryPage>

          <DiaryPage
            seal="IV"
            chapter="Capítulo IV · El piano"
            year="Conservatorio"
            title="Entre escalas encontré un refugio y una trampa."
            marginNote="Solo merecía estar ahí si tocaba perfecto."
          >
            <p>
              Muy pequeñita elegí que quería aprender a tocar el piano. Y ahí,
              entre escalas que al principio me parecían un idioma inventado,
              encontré algo parecido a un refugio. Oído fino, disciplina, una
              manera de escuchar profunda que me acompañaría el resto de mi
              vida.
            </p>
            <p>
              Pero también me dejó una idea con veneno lento: que solo merecía
              estar ahí si tocaba perfecto. Esa idea se quedó agazapada dentro,
              y años más tarde la reconocería asomando detrás de cada examen,
              de cada informe, de cada relación en la que me exigí más de lo
              razonable por miedo a no ser suficiente.
            </p>
          </DiaryPage>
        </div>

        <Spread
          image={sandraHero}
          quote="Estuve cerca del poder casi veinte años sin que nadie me pusiera el cargo."
          attribution="Capítulo V · El oficio"
          align="right"
        />

        <div style={paperStyle}>
          <DiaryPage
            seal="V"
            chapter="Capítulo V · Los títulos"
            year="2005 — 2020"
            title="Papeles que no eran trofeos, sino piezas sueltas de un mapa."
            marginNote="Derecho. ADE. Máster en Marketing. Mediación. IA."
          >
            <p>
              Los títulos llegaron uno detrás de otro, casi con la voracidad de
              quien no puede dejar a medias un libro que le interesa de verdad.
              Ninguno fue nunca un trofeo para la pared; eran, sin saberlo aún,
              las piezas sueltas de un mapa que solo mucho después conseguiría
              leer entero.
            </p>
            <p>
              Me contrataron como asistente de dirección con una preparación
              que sobraba para el puesto. Desde ahí fui asumiendo, casi sin
              pedirlo, atención al cliente, comercial, marketing, comunicación.
              La persona a la que todo el mundo acudía cuando algo se torcía.
            </p>
            <p>
              Creo, todavía hoy, en el mérito. Pero aprendí, mirándome como
              quien mira un caso de estudio, que{" "}
              <span className="text-foreground font-medium">
                el mérito sin una oportunidad real detrás es solo una frase
                bonita que repiten quienes ya están dentro.
              </span>
            </p>
          </DiaryPage>
        </div>

        {/* ============================ CIFRAS ============================ */}
        <section className="bg-[hsl(var(--section-alt))] py-24 border-y border-border/60">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-14">
              <Fleuron className="mx-auto mb-6" />
              <p className="font-sans text-[11px] uppercase tracking-[0.32em] text-accent mb-3">
                Anotaciones al pie
              </p>
              <h3 className="font-serif text-primary text-3xl md:text-4xl italic">
                Lo que se puede contar con números.
              </h3>
            </div>
            <CredibilityStats />
          </div>
        </section>

        <div style={paperStyle}>
          <DiaryPage
            seal="VI"
            chapter="Capítulo VI · El silencio"
            year="Invierno de 2022"
            title="Me fui al norte a oírme."
            marginNote="Sin plan B, sin colchón, sin prisa de heroína."
          >
            <p>
              Me marché de Tenerife en busca de un lugar casi vacío en pleno
              invierno. Uno de esos sitios donde el silencio de fuera obliga a
              escuchar el de dentro.
            </p>
            <p>
              Con el mar frío como única compañía, empecé a oírme por primera
              vez en mucho tiempo. Entendí, muy despacio, algo que llevaba media
              vida esquivando: que cuando pones toda tu vida en manos de un
              tercero —una empresa, un banco, un sistema entero—, llega el día
              en que ese tercero puede quitártelo todo menos la responsabilidad
              de seguir adelante.
            </p>
            <p>
              Una de las primeras normas de esta nueva etapa fue, y sigue
              siendo hoy:{" "}
              <span className="text-accent font-medium">
                pide ayuda cuando la necesites.
              </span>
            </p>
          </DiaryPage>
        </div>

        <Spread
          image={sandraMarcopolo}
          quote="No existe fecha de caducidad para decidir el propio valor."
          attribution="Capítulo VII"
          align="left"
        />

        <div style={paperStyle}>
          <DiaryPage
            seal="VII"
            chapter="Capítulo VII · Ponerle nombre"
            year="Pasados los cuarenta"
            title="Dejé de vivirlo como un defecto y empecé a entenderlo como un método."
            marginNote="Cruzar leyes, negocio, marketing, tecnología y música."
          >
            <p>
              Durante años conviví con una sensación difícil de nombrar: me
              interesaban demasiadas cosas a la vez, conectaba ideas que a
              nadie más se le ocurría relacionar, me aburría enseguida de
              cualquier rutina fija, sentía el mundo con un volumen que a los
              demás les resultaba excesivo.
            </p>
            <p>
              Pasados ya los cuarenta pude por fin ponerle nombre a esa manera
              distinta de funcionar. En lugar de seguir viviéndola como un
              defecto que corregir, empecé a entenderla como la razón exacta
              por la que soy capaz de ver matices que otros pasan por alto.
            </p>
            <p className="font-medium text-foreground">
              Hoy sé que no existe fecha de caducidad para decidir el propio
              valor. Existe, solamente, el momento en que dejas de esperar que
              alguien te dé permiso para hacerlo.
            </p>
          </DiaryPage>

          <DiaryPage
            seal="VIII"
            chapter="Capítulo VIII · El método"
            year="Hoy"
            title="Marca, estrategia e IA: en el fondo, la misma cosa."
            marginNote="Inteligencia Humana Estratégica.™"
          >
            <p>
              De todo ese recorrido, sin que yo lo planeara así, nace la manera
              en que hoy entiendo la marca personal, la estrategia digital y la
              inteligencia artificial: tres cosas que, bien miradas, resultan
              ser en el fondo la misma cosa.
            </p>
            <p>
              Una marca personal honesta no es un personaje de cartón piedra:
              es contar quién eres, qué sabes y qué aportas, para dejar de
              depender de que un tercero decida tu valor en tu lugar. La
              estrategia digital es lo que evita que esa marca dependa de la
              suerte. Y la IA es, sencillamente, la herramienta más potente que
              hemos tenido nunca para ordenar todo eso con criterio propio.
            </p>
          </DiaryPage>
        </div>

        <Spread
          image={sandraIA}
          quote="Tu valor no se improvisa. Se decide."
          attribution="Inteligencia Humana Estratégica ™"
          align="right"
        />

        {/* ============================ FIRMA =============================== */}
        <section className="relative py-28" style={paperStyle}>
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <Reveal>
              <Fleuron className="mx-auto mb-10" />
              <p className="font-serif italic text-2xl md:text-3xl text-foreground/80 leading-relaxed">
                Si has llegado hasta aquí, gracias por leerme sin prisa. <br />
                Ahora ya sabes desde dónde te hablo cuando te hablo de marca,
                de estrategia y de IA.
              </p>
              <div className="mt-14 flex flex-col items-center">
                <span
                  className="font-serif italic text-accent text-6xl md:text-7xl leading-none"
                  style={{
                    fontVariationSettings: "'ital' 1",
                    transform: "rotate(-4deg)",
                  }}
                >
                  Sandra
                </span>
                <span className="mt-3 font-sans text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                  Tenerife · Hoy
                </span>
              </div>

              <div className="mt-16 inline-flex flex-col sm:flex-row gap-3">
                <a
                  href="/#contacto"
                  className="btn-gold-gradient px-8 py-3 text-[12px] uppercase tracking-[0.24em] font-semibold"
                >
                  Escríbeme una carta de vuelta
                </a>
                <a
                  href="/sobre-mi"
                  className="px-8 py-3 text-[12px] uppercase tracking-[0.24em] font-semibold border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Ver versión editorial
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MiHistoria;
