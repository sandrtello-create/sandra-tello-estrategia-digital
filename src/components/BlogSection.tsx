import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    category: "Inteligencia Artificial",
    title: "Cómo usar la IA para potenciar tu marca personal en 2025",
    excerpt: "Descubre las herramientas y estrategias de IA que están transformando el posicionamiento profesional.",
    readTime: "5 min",
  },
  {
    category: "Estrategia",
    title: "5 errores que frenan tu posicionamiento profesional",
    excerpt: "Los errores más comunes que cometen los profesionales al intentar posicionarse como referentes.",
    readTime: "4 min",
  },
  {
    category: "Marketing",
    title: "Employee advocacy: la estrategia que tu empresa necesita",
    excerpt: "Cómo convertir a los líderes de tu empresa en los mejores embajadores de marca.",
    readTime: "6 min",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-[11px] uppercase tracking-[0.25em] mb-4">
            Blog
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] font-medium text-primary mb-5 leading-[1.2]">
            Artículos sobre IA, estrategia y posicionamiento
          </h2>
          <p className="text-muted-foreground text-[17px] leading-relaxed">
            Contenido práctico para profesionales que quieren crecer con inteligencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group border border-border/60 hover:border-accent/30 hover:shadow-lg transition-all duration-300 bg-background"
            >
              <div className="aspect-video bg-section-alt" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-medium text-primary mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="rounded-none px-8 py-5 border-primary/20 text-primary hover:bg-primary/5 uppercase tracking-[0.15em] text-[12px] font-semibold">
            Ver todos los artículos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
