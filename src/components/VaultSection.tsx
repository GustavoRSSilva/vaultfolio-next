import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Wallet, AlertCircle } from "lucide-react";
import { getVault } from "@concrete-xyz/sdk";
import { ethers } from "ethers";

interface VaultData {
  name: string;
  address: string;
  tvl: string;
  apy: string;
  userBalance: string;
  loading: boolean;
  error: string | null;
}

const VaultSection = () => {
  const [vaultData, setVaultData] = useState<VaultData>({
    name: "Concrete Yield Vault",
    address: "0x15cE9bE6609db102b70D68ca75a39c555bEa5Fac",
    tvl: "Loading...",
    apy: "Loading...",
    userBalance: "0.00",
    loading: true,
    error: null
  });

  const [depositAmount, setDepositAmount] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  // Demo vault data for display purposes
  useEffect(() => {
    // Simulate loading vault data
    const loadVaultData = async () => {
      try {
        // For demo purposes, we'll use mock data
        // In a real app, you'd connect to Concrete SDK here
        setTimeout(() => {
          setVaultData(prev => ({
            ...prev,
            tvl: "$2,450,000",
            apy: "12.5%", 
            loading: false,
            error: null
          }));
        }, 2000);
      } catch (error) {
        setVaultData(prev => ({
          ...prev,
          loading: false,
          error: "Failed to load vault data"
        }));
      }
    };

    loadVaultData();
  }, []);

  const connectWallet = async () => {
    try {
      const ethereum = (window as any).ethereum;
      if (ethereum) {
        await ethereum.request({ method: 'eth_requestAccounts' });
        setIsConnected(true);
        setVaultData(prev => ({ ...prev, userBalance: "1.25" }));
      } else {
        alert('Please install MetaMask!');
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const handleDeposit = () => {
    // In a real app, this would interact with the Concrete SDK
    console.log('Depositing:', depositAmount);
    // Demo success
    alert(`Successfully deposited ${depositAmount} ETH to the vault!`);
    setDepositAmount("");
  };

  return (
    <section id="vault" className="py-20 relative">
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

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Vault Stats */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="text-primary" />
                  Vault Overview
                </CardTitle>
                <CardDescription>
                  Real-time vault statistics and performance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <DollarSign className="mx-auto mb-2 text-primary" />
                    <p className="text-sm text-muted-foreground">Total Value Locked</p>
                    <p className="text-2xl font-bold text-primary">{vaultData.tvl}</p>
                  </div>
                  <div className="text-center p-4 bg-secondary/50 rounded-lg">
                    <TrendingUp className="mx-auto mb-2 text-accent" />
                    <p className="text-sm text-muted-foreground">Current APY</p>
                    <p className="text-2xl font-bold text-accent">{vaultData.apy}</p>
                  </div>
                </div>

                <div className="p-4 bg-secondary/30 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Vault Address</p>
                  <Badge variant="outline" className="font-mono text-xs">
                    {vaultData.address}
                  </Badge>
                </div>

                {vaultData.error && (
                  <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center gap-2">
                    <AlertCircle className="text-destructive" size={16} />
                    <p className="text-sm text-destructive">{vaultData.error}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Vault Interaction */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-card border-primary/20 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wallet className="text-accent" />
                  Vault Actions
                </CardTitle>
                <CardDescription>
                  Deposit and manage your vault position
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {!isConnected ? (
                  <div className="text-center space-y-4">
                    <p className="text-muted-foreground">Connect your wallet to interact with the vault</p>
                    <Button variant="connect" onClick={connectWallet}>
                      Connect Wallet
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="p-4 bg-secondary/30 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Your Balance</p>
                      <p className="text-xl font-bold text-primary">{vaultData.userBalance} ETH</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-muted-foreground mb-2 block">
                          Deposit Amount (ETH)
                        </label>
                        <Input
                          type="number"
                          placeholder="0.00"
                          value={depositAmount}
                          onChange={(e) => setDepositAmount(e.target.value)}
                          className="bg-secondary/50"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <Button variant="vault" onClick={handleDeposit} disabled={!depositAmount}>
                          Deposit
                        </Button>
                        <Button variant="outline">
                          Withdraw
                        </Button>
                      </div>
                    </div>

                    <div className="text-xs text-muted-foreground p-3 bg-secondary/20 rounded-lg">
                      <p className="font-semibold mb-1">Vault Strategy:</p>
                      <p>Automated yield farming across multiple DeFi protocols with risk optimization and auto-compounding rewards.</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VaultSection;