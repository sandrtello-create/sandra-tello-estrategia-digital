import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre Sandra", href: "#sobre" },
  { label: "Servicios", href: "#servicios" },
  { label: "Formación", href: "#formacion" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex flex-col">
            <span className="font-serif text-2xl font-bold text-primary tracking-tight leading-none">
              Sandra Tello
            </span>
            <span className="text-accent text-[10px] font-medium tracking-[0.15em] uppercase">
              Estrategia · IA · Vida
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-semibold uppercase tracking-[0.12em] text-foreground/70 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button className="bg-accent text-accent-foreground hover:bg-gold-light rounded-none px-7 py-5 font-semibold uppercase tracking-[0.15em] text-[12px] shadow-none border border-accent">
              Trabaja conmigo ›
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-border/50 pt-4 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wider text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button className="bg-accent text-accent-foreground hover:bg-gold-light rounded-none w-fit px-7 mt-2 font-semibold uppercase tracking-[0.15em] text-[12px]">
                Trabaja conmigo ›
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
