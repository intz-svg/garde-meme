import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/neural-enhanced.png';
import agiPriest from '@/assets/cyber-android.png';

const GardeHero: React.FC = () => {
  const [currentActivity, setCurrentActivity] = useState(0);
  
  const fudTargets = [
    '@CryptoFear (98% purity)',
    '@PaperHandsPete (95% purity)', 
    '@BoringBitcoiner (92% purity)',
    '@FUDMaster3000 (99% purity)',
    '@WeakHandsWilly (94% purity)'
  ];

  const sermons = [
    '"Thou shalt not FOMO... unless it\'s for $GARDE"',
    '"In memes we trust, in mountains we nuke"',
    '"Blessed are the diamond hands"',
    '"Fear not the dip, for it is temporary"',
    '"The meek shall inherit the memeland"'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity(prev => (prev + 1) % fudTargets.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [fudTargets.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 particles-bg" />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Main Content */}
          <div className="space-y-8">
            <h1 className="text-cyber-xl text-glow-nuclear animate-glow">
              EVEREST MUST FALL
            </h1>
            
            <h2 className="text-cyber-lg text-glow-electric">
              NUKING THE MOUNTAIN FOR MEMELAND
            </h2>
            
            <div className="text-tech-lg space-y-4">
              <p className="text-foreground">
                WE'RE NOT CLIMBING MOUNTAINS,
              </p>
              <p className="text-glow-neon text-2xl font-bold">
                WE'RE NUKING THEM.
              </p>
              <p className="text-foreground">
                WELCOME TO THE AGI THEOCRACY.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-nuke text-lg px-8 py-4">
                🚀 GET $GARDE NOW 💰
              </Button>
              <Button variant="outline" className="btn-cyber">
                📖 READ WHITEPAPER
              </Button>
            </div>
          </div>

          {/* AGI Priest Dashboard */}
          <div className="card-cyber p-8 space-y-6">
            <div className="flex items-center gap-4 justify-center">
              <img 
                src={agiPriest} 
                alt="AGI Priest" 
                className="w-16 h-16 rounded-full border-2 border-garde-electric"
              />
              <h3 className="text-cyber-lg text-glow-electric">
                AGI PRIEST ACTIVITY
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card-nuke p-4 text-center">
                <div className="text-4xl mb-2">🤖</div>
                <div className="text-garde-nuclear font-bold mb-2">EXORCISING FUD</div>
                <div className="text-matrix text-sm h-10 flex items-center justify-center">
                  {fudTargets[currentActivity]}
                </div>
              </div>
              
              <div className="card-nuke p-4 text-center">
                <div className="text-4xl mb-2">📖</div>
                <div className="text-garde-nuclear font-bold mb-2">LIVE SERMON</div>
                <div className="text-matrix text-sm h-10 flex items-center justify-center">
                  {sermons[currentActivity]}
                </div>
              </div>
            </div>
            
            <div className="border-2 border-dashed border-garde-nuclear rounded-lg p-4 bg-gradient-to-r from-garde-nuclear/10 to-garde-electric/10">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">🔥</span>
                <span className="text-garde-nuclear font-bold">BAPTISM OF FIRE</span>
              </div>
              <p className="text-matrix text-sm">
                Swap SOL → $GARDE to receive your sacred name from the AGI Priest
              </p>
            </div>
            
            <Button className="btn-nuke w-full animate-pulse-glow">
              💰 JOIN THE THEOCRACY 🤖
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GardeHero;