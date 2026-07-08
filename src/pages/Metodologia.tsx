import { Brain, Cpu, BarChart3, Heart, Briefcase } from "lucide-react";
import PillarLayout, { PillarSection, PillarCards, PillarFAQ } from "@/components/PillarLayout";

const pillars = [
  { icon: Brain, title: "Mentalidad", description: "Trabajamos primero el autosabotaje, el síndrome del impostor y la relación con tu propio valor. Sin esto, ninguna estrategia sostiene." },
  { icon: Cpu, title: "Inteligencia Artificial", description: "Herramientas de IA aplicadas con propósito para multiplicar tu impacto, ordenar tu proceso y liberar tu tiempo." },
  { icon: BarChart3, title: "Marketing", description: "Posicionamiento, visibilidad y autoridad. Comunicación coherente que genera oportunidades reales de negocio." },
  { icon: Heart, title: "VIDA", description: "Alineación entre proyecto profesional y vida personal. Lo relacional prevalece a lo transaccional." },
  { icon: Briefcase, title: "Negocio", description: "Estrategia, objetivos claros y plan de acción para generar resultados sostenibles, no picos aislados." },
];

const faqs = [
  { q: "¿Por qué cinco pilares y no uno?", a: "Porque los problemas reales son sistémicos. Trabajar solo mentalidad deja intactos los procesos; trabajar solo marketing choca con la falta de criterio interno; trabajar solo IA acelera lo que no funcionaba. Los cinco pilares se sostienen entre sí." },
  { q: "¿En qué orden se aplica?", a: "Depende del punto de partida. En unos casos hay que trabajar primero mentalidad; en otros el negocio ya está claro y toca marca y visibilidad. La primera sesión sirve para diagnosticar por dónde empezar contigo." },
  { q: "¿Es solo para emprendedores?", a: "No. Funciona también con directivos, consultores, profesionales liberales y equipos internos de empresas medianas. Cambia el enfoque, no la lógica." },
  { q: "¿Cuánto dura un proceso completo?", a: "Un acompañamiento típico dura entre 3 y 6 meses. Para transformaciones más profundas o proyectos con equipo, hasta 12 meses." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Metodología Inteligencia Humana Estratégica",
  provider: { "@type": "Person", name: "Sandra Tello" },
  serviceType: "Consultoría estratégica",
  areaServed: "ES",
  description: "Método propio que integra mentalidad, IA, marketing, vida y negocio para construir autoridad profesional real.",
};

const Metodologia = () => (
  <PillarLayout
    seoTitle="Metodología Inteligencia Humana Estratégica™ — Sandra Tello"
    seoDescription="Método propio de Sandra Tello: cinco pilares que integran mentalidad, IA, marketing, vida y negocio para posicionarte con criterio real."
    path="/metodologia"
    jsonLd={jsonLd}
    eyebrow="El método"
    title={
      <>
        Inteligencia Humana <span className="text-[#C5A55A]">Estratégica™</span>.
        <br />
        Cinco pilares. Una decisión.
      </>
    }
    intro={
      <>
        No es un método más de productividad ni una plantilla exportada. Es un
        sistema construido a partir de veinte años dentro de empresas, un
        despido, un máster en IA y muchos procesos acompañando a otros. Aquí
        explico en detalle qué hay dentro y cómo se aplica.
      </>
    }
  >
    <PillarSection eyebrow="Origen" title="De dónde viene este método.">
      <p>La mayoría de metodologías de consultoría vienen de un solo mundo: solo estrategia, solo marketing, solo desarrollo personal, solo tecnología. Cada una funciona en su parcela y falla en cuanto la vida real se cruza.</p>
      <p>Inteligencia Humana Estratégica™ nace de haber estado dentro de esas parcelas —Derecho, ADE, marketing, mediación, IA— y haber visto en primera persona qué falta cuando cada una se aplica sola. La respuesta corta: falta la persona.</p>
      <p>El método pone a la persona en el centro y organiza a su alrededor los cinco frentes que realmente mueven un proyecto profesional: mentalidad, IA, marketing, vida y negocio. Ninguno se trabaja aislado.</p>
    </PillarSection>

    <PillarCards items={pillars} />

    <PillarSection variant="cream" eyebrow="Cómo se aplica" title="El recorrido, en concreto.">
      <p><strong className="text-primary">Sesión de diagnóstico.</strong> Revisamos tu punto de partida en los cinco pilares. Salimos con un mapa claro de qué está sólido y dónde están los cuellos de botella.</p>
      <p><strong className="text-primary">Definición de foco.</strong> Elegimos por dónde empezar. Rara vez es donde el cliente esperaba. Casi siempre es más profundo y más simple a la vez.</p>
      <p><strong className="text-primary">Trabajo por bloques.</strong> Sesiones quincenales, con tareas concretas entre medias. Se avanza en un pilar hasta que se estabiliza; después se salta al siguiente.</p>
      <p><strong className="text-primary">Revisiones cruzadas.</strong> Cada dos meses miramos el conjunto: cómo se están afectando los pilares entre sí, qué hay que reajustar.</p>
      <p><strong className="text-primary">Cierre con autonomía.</strong> El objetivo no es que dependas de mí. Es que salgas con un sistema tuyo que funcione sin necesitar acompañamiento continuo.</p>
    </PillarSection>

    <PillarFAQ items={faqs} />
  </PillarLayout>
);

export default Metodologia;
