import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FileText, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LeadCaptureModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LeadCaptureModal = ({ open, onOpenChange }: LeadCaptureModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Campos requeridos",
        description: "Por favor, completa tu nombre y email.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Guardar en localStorage (temporal hasta conectar base de datos)
    const leads = JSON.parse(localStorage.getItem("leads") || "[]");
    leads.push({
      name: name.trim(),
      email: email.trim(),
      company: company.trim() || null,
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem("leads", JSON.stringify(leads));

    // Simular pequeño delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form after modal closes
    setTimeout(() => {
      setName("");
      setEmail("");
      setCompany("");
      setIsSubmitted(false);
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-[hsl(40,18%,94%)] border-none">
        {!isSubmitted ? (
          <>
            <DialogHeader className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-[hsl(232,28%,22%)] flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <DialogTitle className="font-serif text-xl text-[hsl(232,28%,18%)]">
                Accede al kit de herramientas IA
              </DialogTitle>
              <DialogDescription className="text-[hsl(232,20%,40%)] text-[14px]">
                Déjame tus datos y te envío los recursos gratuitos sobre inteligencia artificial.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-[hsl(232,28%,22%)] text-[13px] font-medium">
                  Nombre *
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white border-[hsl(232,20%,80%)] focus:border-accent focus:ring-accent rounded-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[hsl(232,28%,22%)] text-[13px] font-medium">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white border-[hsl(232,20%,80%)] focus:border-accent focus:ring-accent rounded-none"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-[hsl(232,28%,22%)] text-[13px] font-medium">
                  Empresa / Sector <span className="text-[hsl(232,20%,60%)] font-normal">(opcional)</span>
                </Label>
                <Input
                  id="company"
                  type="text"
                  placeholder="Tu empresa o sector"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="bg-white border-[hsl(232,20%,80%)] focus:border-accent focus:ring-accent rounded-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[hsl(232,28%,22%)] text-primary-foreground hover:bg-accent hover:text-accent-foreground rounded-none py-5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-all duration-300"
              >
                {isLoading ? (
                  "Enviando..."
                ) : (
                  <>
                    Quiero los recursos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-[11px] text-[hsl(232,20%,55%)] text-center">
                Respeto tu privacidad. No spam, solo contenido de valor.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="mx-auto w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-accent" />
            </div>
            <h3 className="font-serif text-xl text-[hsl(232,28%,18%)] mb-2">
              ¡Gracias, {name.split(" ")[0]}!
            </h3>
            <p className="text-[hsl(232,20%,40%)] text-[14px] mb-6">
              En breve recibirás los recursos en tu email.
            </p>
            <Button
              onClick={handleClose}
              className="bg-accent text-accent-foreground hover:bg-gold-light rounded-none px-8 py-5 text-[12px] font-semibold uppercase tracking-[0.12em]"
            >
              Cerrar
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;
