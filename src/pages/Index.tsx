import HeroSection from "@/components/HeroSection";
import VaultSection from "@/components/VaultSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <VaultSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
