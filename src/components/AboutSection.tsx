import { motion } from "framer-motion";
import { Code, Database, Shield, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  {
    icon: Code,
    title: "Smart Contract Development",
    description: "Solidity, Hardhat, OpenZeppelin, advanced DeFi protocols"
  },
  {
    icon: Database,
    title: "Blockchain Architecture",
    description: "Multi-chain deployment, Layer 2 solutions, cross-chain bridges"
  },
  {
    icon: Shield,
    title: "Security & Auditing",
    description: "Comprehensive security practices, formal verification, audit experience"
  },
  {
    icon: Zap,
    title: "DeFi Protocols",
    description: "Yield farming, AMMs, lending protocols, vault strategies"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate blockchain developer with 5+ years of experience building 
            secure, scalable DeFi applications and yield optimization strategies.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-primary">My Journey</h3>
            <div className="prose prose-invert">
              <p className="text-muted-foreground leading-relaxed">
                Started as a traditional software engineer, I discovered blockchain in 2019 
                and fell in love with the possibilities of decentralized finance. Since then, 
                I've been building innovative DeFi protocols that help users maximize their yields 
                while maintaining security and transparency.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My expertise spans from smart contract architecture to frontend integrations, 
                always focusing on user experience and protocol security. I've contributed to 
                multiple successful DeFi projects with combined TVL exceeding $500M.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-accent">Tech Stack</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">Blockchain</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Solidity</li>
                  <li>• Hardhat/Foundry</li>
                  <li>• Ethers.js/Web3.js</li>
                  <li>• OpenZeppelin</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-accent">Frontend</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• React/TypeScript</li>
                  <li>• Next.js</li>
                  <li>• Tailwind CSS</li>
                  <li>• Framer Motion</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-card border-primary/10 shadow-card hover:border-primary/30 transition-all duration-300 h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <skill.icon className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-sm">
                    {skill.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;