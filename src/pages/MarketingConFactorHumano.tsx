import { Compass, Users, Heart, TrendingUp, Sparkles, Target } from "lucide-react";
import PillarLayout, { PillarSection, PillarCards, PillarFAQ } from "@/components/PillarLayout";

const pillars = [
  { icon: Compass, title: "Criterio antes que canal", description: "Antes de elegir dónde publicar, decidimos qué tienes que decir y por qué a alguien debería importarle." },
  { icon: Users, title: "Persona, no target", description: "Trabajamos con seres humanos con nombre, historia y contexto. No con avatares de manual." },
  { icon: Heart, title: "Relación antes que conversión", description: "Lo relacional prevalece a lo transaccional. La venta llega cuando la confianza ya está construida." },
  { icon: TrendingUp, title: "Métricas que importan", description: "No vanity metrics. Conversaciones abiertas, oportunidades reales y decisiones informadas." },
  { icon: Sparkles, title: "IA con propósito", description: "La IA multiplica lo que ya funciona. Sin estrategia previa, solo acelera el ruido." },
  { icon: Target, title: "Coherencia total", description: "Que lo que dices en LinkedIn, en una llamada y en una propuesta sea la misma persona." },
];

const faqs = [
  { q: "¿Qué es marketing con factor humano?", a: "Es un enfoque que pone a la persona —tanto quien comunica como quien recibe— antes que el algoritmo, el embudo o la plantilla. Combina estrategia, criterio propio y herramientas (incluida la IA) al servicio de una relación real con el cliente." },
  { q: "¿En qué se diferencia del marketing tradicional?", a: "El marketing tradicional optimiza para el clic. El marketing con factor humano optimiza para la relación sostenida. La primera diferencia es el tiempo: no hay atajos honestos para construir autoridad y confianza." },
  { q: "¿Sirve para B2B y B2C?", a: "Sí. Especialmente en B2B, donde el ciclo de decisión es largo y las personas compran a personas. En B2C funciona en marcas donde el producto va acompañado de un proyecto vital." },
  { q: "¿Encaja con la IA?", a: "Perfectamente. La IA es una herramienta poderosa cuando hay criterio detrás. Sin él, solo escala la mediocridad más rápido. Con él, libera tiempo para lo que solo tú puedes hacer." },
];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Marketing con factor humano — qué es y cómo aplicarlo",
    author: { "@type": "Person", name: "Sandra Tello" },
    inLanguage: "es",
    about: ["Marketing", "Marca personal", "Estrategia digital"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

const MarketingConFactorHumano = () => (
  <PillarLayout
    seoTitle="Marketing con factor humano — Sandra Tello"
    seoDescription="Qué es el marketing con factor humano y cómo aplicarlo con criterio. Estrategia, IA y relación real con el cliente. Por Sandra Tello."
    path="/marketing-con-factor-humano"
    jsonLd={jsonLd}
    eyebrow="Pilar · Marketing"
    title={
      <>
        Marketing con <span className="text-[#C5A55A]">factor humano</span>.
        <br />
        Menos ruido, más criterio.
      </>
    }
    intro={
      <>
        El marketing dejó de ser un embudo hace tiempo. Hoy compite quien es
        capaz de sostener una relación real con su cliente durante meses o años,
        no quien mejor optimiza un anuncio. Esto es lo que significa hacerlo con
        factor humano — y por qué la IA no lo sustituye, lo amplifica.
      </>
    }
  >
    <PillarSection eyebrow="Punto de partida" title="El marketing cambió, y la mayoría todavía no se ha enterado.">
      <p>Durante años el marketing digital fue una carrera por el clic más barato, por el copy más gancho, por el funnel más automatizado. Funcionaba, sí. Pero funcionaba porque había menos competencia y más atención disponible.</p>
      <p>Hoy la atención escasea, la desconfianza sobra y las herramientas son las mismas para todo el mundo. En un contexto así, competir por optimización pura es competir por el fondo. Lo que sí escala —y lo que ya no puede copiarse— es <em>quién eres, qué sabes y cómo lo cuentas</em>.</p>
      <p>Ese es el terreno del marketing con factor humano: convertir tu criterio, tu recorrido y tu manera de mirar en la ventaja que ninguna herramienta puede replicar.</p>
    </PillarSection>

    <PillarCards items={pillars} />

    <PillarSection eyebrow="Metodología" title="Cómo se aplica, en concreto.">
      <p><strong className="text-primary">1. Diagnóstico honesto.</strong> Antes de tocar nada, entendemos quién eres, qué vendes de verdad y por qué alguien debería elegirte a ti. Sin este paso, todo lo demás es decoración.</p>
      <p><strong className="text-primary">2. Posicionamiento con criterio.</strong> Elegimos un ángulo defendible: una manera de mirar tu mercado que sea tuya y que resista el paso del tiempo. No una promesa de landing.</p>
      <p><strong className="text-primary">3. Contenido con voz propia.</strong> Un plan editorial que suene a ti, no a plantilla. Con la IA como asistente, nunca como sustituto.</p>
      <p><strong className="text-primary">4. Relación sostenida.</strong> Newsletter, LinkedIn, conversaciones privadas. Métricas que importan: quién te lee, quién te responde, quién vuelve.</p>
      <p><strong className="text-primary">5. Venta desde la confianza.</strong> Cuando alguien te contacta ya sabe cómo trabajas, qué esperas y qué cuesta. La venta se convierte en una conversación, no en una batalla.</p>
    </PillarSection>

    <PillarFAQ items={faqs} />
  </PillarLayout>
);

export default MarketingConFactorHumano;
