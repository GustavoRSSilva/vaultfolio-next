import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroAvatar from "@/assets/hero-avatar.jpg";

const HeroSection = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[url('/src/assets/defi-background.jpg')] bg-cover bg-center opacity-10" />
      
      {/* Animated Background Orbs */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "bounce" }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
              <img 
                src={heroAvatar} 
                alt="Portfolio Avatar" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-8xl md:text-9xl font-black mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Hi
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              DeFi Developer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Building the future of decentralized finance with cutting-edge vault strategies 
              and yield optimization protocols.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button variant="hero" size="lg" onClick={() => document.getElementById('vault')?.scrollIntoView({ behavior: 'smooth' })}>
              Explore Vaults
            </Button>
            <Button variant="outline" size="lg" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-6 mb-16"
          >
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Github size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
              <Mail size={24} />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToNext}
              className="animate-bounce"
            >
              <ArrowDown size={24} />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;