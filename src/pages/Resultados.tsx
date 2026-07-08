import { Eye, TrendingUp, Award, Compass, Zap, Heart } from "lucide-react";
import PillarLayout, { PillarSection, PillarCards } from "@/components/PillarLayout";

const results = [
  { icon: Eye, title: "Claridad", description: "Visión clara de tu posicionamiento, tu mensaje y tus próximos pasos estratégicos." },
  { icon: TrendingUp, title: "Mejor posicionamiento", description: "Diferenciación real en tu mercado con una marca personal que atrae oportunidades." },
  { icon: Award, title: "Autoridad profesional", description: "Reputación construida en tu sector con una presencia que inspira confianza." },
  { icon: Compass, title: "Decisiones estratégicas", description: "Mejores decisiones de negocio combinando datos, IA y criterio experto." },
  { icon: Zap, title: "Integración real de IA", description: "IA implementada de forma práctica y alineada con tu estrategia de negocio." },
  { icon: Heart, title: "La vida que amas", description: "Un negocio que trabaja para ti y te permite vivir con libertad y propósito." },
];

const cases = [
  {
    role: "Directiva en sector industrial",
    quote: "Pasé de ser 'la de marketing' a ser referente del sector en LinkedIn en menos de un año. Las mejores conversaciones ahora vienen a mí.",
    outcome: "Autoridad reconocida · Contenido sostenido · Oportunidades entrantes",
  },
  {
    role: "Fundadora de agencia B2B",
    quote: "Integramos IA en producción de contenidos y propuestas. Multiplicamos por tres la capacidad del equipo sin bajar calidad ni contratar.",
    outcome: "Procesos IA integrados · Ahorro de 20h/semana · Margen recuperado",
  },
  {
    role: "Consultor independiente",
    quote: "Dejé de vender horas y empecé a vender criterio. Cambió el tipo de cliente, el ticket y —sobre todo— cómo me relaciono con mi propio trabajo.",
    outcome: "Reposicionamiento · Ticket medio ×2 · Cartera cualificada",
  },
];

const Resultados = () => (
  <PillarLayout
    seoTitle="Resultados de trabajar conmigo — Sandra Tello"
    seoDescription="Casos reales, transformaciones y resultados de la consultoría estratégica en IA y marca personal de Sandra Tello."
    path="/resultados"
    eyebrow="Resultados"
    title={
      <>
        Lo que consigues trabajando <span className="text-[#C5A55A]">conmigo</span>.
      </>
    }
    intro={
      <>
        No prometo números que no puedo garantizar. Prometo un proceso serio,
        criterio propio y decisiones difíciles tomadas contigo, no por ti.
        Estos son los tipos de resultados que suelen aparecer.
      </>
    }
  >
    <PillarCards items={results} />

    <PillarSection eyebrow="Casos reales" title="Tres transformaciones representativas.">
      <div className="not-prose space-y-6">
        {cases.map((c, i) => (
          <article key={i} className="border-l-2 border-accent pl-6 md:pl-8 py-2">
            <p className="font-sans text-[11px] uppercase tracking-[0.28em] text-accent mb-3">
              {c.role}
            </p>
            <blockquote className="font-serif italic text-xl md:text-2xl text-primary leading-snug mb-4">
              «{c.quote}»
            </blockquote>
            <p className="text-muted-foreground text-sm">{c.outcome}</p>
          </article>
        ))}
      </div>
    </PillarSection>

    <PillarSection variant="cream" eyebrow="Qué no prometo" title="Honestidad antes que promesa.">
      <p>No te prometo <strong className="text-primary">recetas mágicas ni fórmulas de éxito rápido</strong>. No hay atajos honestos para construir autoridad, integrar IA con criterio o alinear tu proyecto con tu vida.</p>
      <p>No te prometo <strong className="text-primary">resultados en semanas</strong>. Los primeros cambios reales suelen tardar meses. Lo importante es que sean sostenibles cuando lleguen.</p>
      <p>Sí te prometo <strong className="text-primary">un proceso serio, criterio propio y una relación adulta</strong> donde te digo lo que veo, aunque no sea lo que te apetece oír.</p>
    </PillarSection>
  </PillarLayout>
);

export default Resultados;
