import { motion } from "framer-motion";
import BeraVault from "./BeraVault";
import ArbitrumVaultOne from "./ArbitrumVaultOne";
import ArbitrumVaultTwo from "./ArbitrumVaultTwo";

const VaultSection = () => {

  return (
    <section id="vault" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Concrete Vault SDK
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Automated yield strategies powered by Concrete's universal yield infrastructure
          </p>
        </motion.div>
        <ArbitrumVaultOne />
        <ArbitrumVaultTwo />
        <div className="my-10" />
        <BeraVault />
      </div>
    </section>
  );
};

export default VaultSection;