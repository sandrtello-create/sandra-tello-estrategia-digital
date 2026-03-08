import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    category: "Inteligencia Artificial",
    title: "Cómo usar la IA para potenciar tu marca personal en 2025",
    excerpt: "Descubre las herramientas y estrategias de IA que están transformando el posicionamiento profesional.",
    readTime: "5 min",
    color: "bg-accent/10 text-accent",
  },
  {
    category: "Estrategia",
    title: "5 errores que frenan tu posicionamiento profesional",
    excerpt: "Los errores más comunes que cometen los profesionales al intentar posicionarse como referentes.",
    readTime: "4 min",
    color: "bg-mint/10 text-mint",
  },
  {
    category: "Marketing",
    title: "Employee advocacy: la estrategia que tu empresa necesita",
    excerpt: "Cómo convertir a los líderes de tu empresa en los mejores embajadores de marca.",
    readTime: "6 min",
    color: "bg-primary/10 text-primary",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-accent font-semibold text-xs uppercase tracking-[0.3em] mb-3">
            Blog
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Artículos sobre IA, estrategia y posicionamiento
          </h2>
          <p className="text-muted-foreground text-lg">
            Contenido práctico para profesionales que quieren crecer con inteligencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-background rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg hover:border-accent/20 transition-all duration-300"
            >
              <div className="aspect-video bg-gradient-to-br from-secondary to-mint/10" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${post.color}`}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
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
          <Button variant="outline" className="rounded-full px-8 border-primary/30 text-primary hover:bg-primary/5 uppercase tracking-wider text-xs font-semibold">
            Ver todos los artículos
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
