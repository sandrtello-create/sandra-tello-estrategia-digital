import Navbar from "@/components/Navbar";
import VideoSection from "@/components/VideoSection";
import HeroSection from "@/components/HeroSection";
import BrandsSection from "@/components/BrandsSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProfilesTeaser from "@/components/ProfilesTeaser";
import TrainingSection from "@/components/TrainingSection";
import MethodSection from "@/components/MethodSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import BlogSection from "@/components/BlogSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sandra Tello — Consultora estratégica en IA y marca personal"
        description="Sandra Tello ayuda a profesionales y emprendedores a crear la vida que aman integrando inteligencia artificial, estrategia y marca personal."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sandra Tello",
          jobTitle: "Consultora estratégica en IA y marca personal",
          url: "/",
          sameAs: [],
          knowsAbout: [
            "Inteligencia Artificial",
            "Estrategia de negocio",
            "Marca personal",
            "Marketing",
            "Employee advocacy",
          ],
        }}
      />
      <Navbar />
      <VideoSection />
      <HeroSection />
      <BrandsSection />
      <AboutSection />
      <ServicesSection />
      <ProfilesTeaser />
      <TrainingSection />
      <MethodSection />
      <ResultsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <BlogSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
