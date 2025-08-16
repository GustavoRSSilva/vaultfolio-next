import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VaultSection from "@/components/VaultSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <VaultSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
