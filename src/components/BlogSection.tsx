import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Brain, Target, Users } from "lucide-react";

const categoryConfig: Record<string, { icon: typeof Brain; gradient: string }> = {
  "Inteligencia Artificial": { icon: Brain, gradient: "from-accent/20 via-accent/5 to-transparent" },
  "Estrategia": { icon: Target, gradient: "from-primary/15 via-primary/5 to-transparent" },
  "Marketing": { icon: Users, gradient: "from-accent/15 via-primary/5 to-transparent" },
};

const posts = [
  {
    category: "Inteligencia Artificial",
    title: "Cómo usar la IA para potenciar tu marca personal en 2025",
    excerpt: "Descubre las herramientas y estrategias de IA que están transformando el posicionamiento profesional.",
    readTime: "5 min",
    url: "#",
  },
  {
    category: "Estrategia",
    title: "5 errores que frenan tu posicionamiento profesional",
    excerpt: "Los errores más comunes que cometen los profesionales al intentar posicionarse como referentes.",
    readTime: "4 min",
    url: "#",
  },
  {
    category: "Marketing",
    title: "Employee advocacy: la estrategia que tu empresa necesita",
    excerpt: "Cómo convertir a los líderes de tu empresa en los mejores embajadores de marca.",
    readTime: "6 min",
    url: "#",
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
          {posts.map((post, index) => {
            const config = categoryConfig[post.category] || categoryConfig["Estrategia"];
            const IconComp = config.icon;
            return (
              <a
                key={index}
                href={post.url}
                target={post.url !== "#" ? "_blank" : undefined}
                rel={post.url !== "#" ? "noopener noreferrer" : undefined}
                className="group border border-border/60 hover:border-accent/30 hover:shadow-xl transition-all duration-500 bg-background overflow-hidden block"
              >
                {/* Category visual header */}
                <div className={`aspect-[2/1] bg-gradient-to-br ${config.gradient} relative overflow-hidden flex items-center justify-center`}>
                  <IconComp
                    className="h-20 w-20 text-primary/[0.07] group-hover:text-accent/[0.15] group-hover:scale-110 transition-all duration-700"
                    strokeWidth={1}
                  />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent bg-background/80 backdrop-blur-sm px-2.5 py-1 rounded-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-lg font-medium text-primary mb-2 group-hover:text-accent transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                    <span className="text-accent text-xs font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                      Leer <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="rounded-none px-8 py-5 border-primary/20 text-primary hover:bg-primary/5 uppercase tracking-[0.15em] text-[12px] font-semibold">
              Ver todos los artículos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
