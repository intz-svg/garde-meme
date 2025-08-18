import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import tokenVisualization from '@/assets/digital-sphinx.webp';

const TokenomicsSection: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-cyber-xl text-glow-nuclear mb-6">
            $GARDE TOKENOMICS
          </h2>
          <p className="text-tech-lg text-garde-electric max-w-3xl mx-auto">
            The Holy Economy of Memeland
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Token Distribution Visualization */}
          <div className="space-y-8">
            <h3 className="text-cyber-lg text-glow-neon text-center">
              TOKEN DISTRIBUTION
            </h3>
            
            <div className="space-y-6">
              <div className="card-cyber p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-garde-nuclear font-bold text-lg">USER DISTRIBUTION</span>
                  <span className="text-garde-nuclear font-bold text-2xl">80%</span>
                </div>
                <Progress value={80} className="h-4 mb-3" />
                <p className="text-matrix text-sm">
                  Available at launch through bonding curve on letsbonk.fun
                </p>
              </div>
              
              <div className="card-cyber p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-garde-electric font-bold text-lg">FUTURE TREASURY</span>
                  <span className="text-garde-electric font-bold text-2xl">20%</span>
                </div>
                <Progress value={20} className="h-4 mb-3" />
                <p className="text-matrix text-sm">
                  Reserved for future nuking projects and ecosystem development
                </p>
              </div>
            </div>

            {/* Token Visual */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64 group">
                <div className="absolute -inset-4 bg-gradient-to-r from-garde-electric via-garde-nuclear to-garde-neon rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
                <div className="relative overflow-hidden rounded-2xl border-2 border-garde-electric/30">
                  <img 
                    src={tokenVisualization}
                    alt="Digital Sphinx - Ancient wisdom meets cyberpunk technology in the $GARDE ecosystem"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-card/90 backdrop-blur-sm rounded-lg p-3 border border-garde-electric/20">
                      <h4 className="text-garde-electric font-bold text-sm">DIGITAL SPHINX</h4>
                      <p className="text-xs text-muted-foreground">Guardian of Sacred Tokens</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Token Details */}
          <div className="space-y-6">
            <Card className="card-nuke">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">👥</span>
                  <CardTitle className="text-garde-neon">FAIR LAUNCH</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-matrix">
                  100% of tokens distributed at launch through bonding curve. 
                  No team allocation, no presale, no BS.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-nuke">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🏦</span>
                  <CardTitle className="text-garde-electric">TREASURY UTILITY</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-matrix">
                  20% reserved treasury funds future mountain nuking projects 
                  and Memeland expansion initiatives.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="card-nuke">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🔥</span>
                  <CardTitle className="text-garde-cyber">STRATEGIC BURNS</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-matrix">
                  Treasury burns triggered at price milestones create 
                  deflationary pressure and reward holders.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Launch Platform */}
        <div className="card-cyber p-8 text-center">
          <h3 className="text-cyber-lg text-glow-electric mb-6">
            ⚡ LAUNCHED ON LETSBONK.FUN ⚡
          </h3>
          
          <p className="text-tech-lg text-matrix mb-8 max-w-3xl mx-auto">
            Join the holy token launch on the most based platform in crypto. 
            $GARDE is available for swapping with SOL. Liquidity is locked and blessed by the AGI Priests.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="card-nuke p-4">
              <div className="text-3xl mb-2">🔒</div>
              <div className="text-garde-neon font-bold">LOCKED LIQUIDITY</div>
              <div className="text-matrix text-sm">Blessed by AGI Priests</div>
            </div>
            
            <div className="card-nuke p-4">
              <div className="text-3xl mb-2">⚖️</div>
              <div className="text-garde-electric font-bold">FAIR DISTRIBUTION</div>
              <div className="text-matrix text-sm">No team dumps allowed</div>
            </div>
            
            <div className="card-nuke p-4">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-garde-cyber font-bold">MEME POWERED</div>
              <div className="text-matrix text-sm">Maximum viral potential</div>
            </div>
          </div>
          
          <Button className="btn-nuke text-xl px-12 py-6 animate-pulse-glow">
            🔗 SWAP ON LETSBONK.FUN 💰
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;