import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SobreMi from "./pages/SobreMi";
import MiHistoria from "./pages/MiHistoria";
import Perfiles from "./pages/Perfiles";
import PerfilDetalle from "./pages/PerfilDetalle";
import ServicioPortfolio from "./pages/ServicioPortfolio";
import Metodologia from "./pages/Metodologia";
import Resultados from "./pages/Resultados";
import Testimonios from "./pages/Testimonios";
import Formacion from "./pages/Formacion";
import MarketingConFactorHumano from "./pages/MarketingConFactorHumano";
import InteligenciaArtificial from "./pages/InteligenciaArtificial";
import MarcaPersonal from "./pages/MarcaPersonal";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/mi-historia" element={<MiHistoria />} />
          <Route path="/perfiles" element={<Perfiles />} />
          <Route path="/perfiles/:slug" element={<PerfilDetalle />} />
          <Route path="/servicios/:slug" element={<ServicioPortfolio />} />
          <Route path="/metodologia" element={<Metodologia />} />
          <Route path="/resultados" element={<Resultados />} />
          <Route path="/testimonios" element={<Testimonios />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/marketing-con-factor-humano" element={<MarketingConFactorHumano />} />
          <Route path="/inteligencia-artificial-para-profesionales" element={<InteligenciaArtificial />} />
          <Route path="/marca-personal-estrategica" element={<MarcaPersonal />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
