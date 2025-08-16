import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "YieldMax Protocol",
    description: "Automated yield optimization vault with risk management and multi-strategy allocation across 15+ DeFi protocols.",
    tech: ["Solidity", "React", "Hardhat", "The Graph"],
    tvl: "$50M+",
    status: "Live",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "CrossChain Bridge",
    description: "Secure asset bridge enabling seamless transfers between Ethereum, Polygon, and Arbitrum with minimal slippage.",
    tech: ["Solidity", "Chainlink", "LayerZero", "Next.js"],
    tvl: "$25M+",
    status: "Live",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "DeFi Analytics Dashboard",
    description: "Real-time analytics platform tracking yield opportunities, TVL, and risk metrics across 100+ DeFi protocols.",
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL"],
    tvl: "Analytics",
    status: "Live",
    links: {
      demo: "#",
      github: "#"
    }
  },
  {
    title: "NFT Staking Platform",
    description: "Gamified NFT staking with dynamic rewards, rarity multipliers, and community governance features.",
    tech: ["Solidity", "IPFS", "React", "Moralis"],
    tvl: "$5M+",
    status: "Beta",
    links: {
      demo: "#",
      github: "#"
    }
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of DeFi protocols and applications I've built, 
            showcasing innovation in yield farming and blockchain technology.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-card border-primary/10 shadow-card hover:border-primary/30 transition-all duration-300 h-full group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex gap-2 items-center">
                        <Badge 
                          variant={project.status === 'Live' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {project.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs font-mono">
                          TVL: {project.tvl}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.links.demo} className="flex items-center gap-2">
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.links.github} className="flex items-center gap-2">
                        <Github size={14} />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6">
            Interested in collaborating on a DeFi project?
          </p>
          <Button variant="hero" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Let's Build Together
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;