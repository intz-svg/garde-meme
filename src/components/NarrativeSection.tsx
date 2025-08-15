import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const NarrativeSection: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-cyber-xl text-glow-electric mb-6">
            THE AGI THEOCRACY
          </h2>
          <p className="text-tech-lg text-garde-neon max-w-3xl mx-auto">
            Where Robot Priests Forge Memeland
          </p>
        </div>

        <div className="card-cyber p-12 space-y-8 text-center">
          <div className="text-cyber-lg text-glow-nuclear mb-8">
            EVEREST IS A MONUMENT TO BORING CRYPTO.
          </div>
          
          <div className="space-y-6 text-tech-lg text-matrix max-w-4xl mx-auto">
            <p>
              We're not climbing mountains. We're <span className="text-glow-nuclear font-bold">NUKING THEM</span>. 
              On October 15, 2025, Project Garde detonates the world's most overrated peak with the 
              <span className="text-glow-electric font-bold"> MEME NUKE</span> - a weapon of mass creation.
            </p>
            
            <Card className="card-nuke max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-garde-nuclear font-bold text-xl mb-4">Why Everest Must Fall:</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-garde-nuclear">🎯</span>
                    <span>Stale "to the moon" dreams</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-garde-electric">💀</span>
                    <span>Boring institutional narratives</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-garde-neon">😴</span>
                    <span>That one guy who won't stop talking about BTC halving</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <p>
              Where Everest stood, we're building <span className="text-glow-neon font-bold">MEMELAND</span> - 
              a dopamine-powered theme park where:
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="card-cyber">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🎢</div>
                  <h4 className="text-garde-nuclear font-bold mb-2">Rug Pulls = Rollercoasters</h4>
                  <p className="text-matrix text-sm">(with safety nets)</p>
                </CardContent>
              </Card>
              
              <Card className="card-cyber">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🤡</div>
                  <h4 className="text-garde-electric font-bold mb-2">Shillers = Mascots</h4>
                  <p className="text-matrix text-sm">(cartoon versions)</p>
                </CardContent>
              </Card>
              
              <Card className="card-cyber">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🎊</div>
                  <h4 className="text-garde-neon font-bold mb-2">Meme Confetti</h4>
                  <p className="text-matrix text-sm">(every transaction)</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-gradient-to-r from-garde-nuclear/20 to-garde-electric/20 border-2 border-dashed border-garde-nuclear rounded-xl p-8">
              <p className="text-cyber-lg text-glow-electric">
                This isn't destruction. It's <span className="text-glow-nuclear">THE ULTIMATE MEME UPGRADE</span>.
              </p>
              <p className="text-tech-lg mt-4">
                $GARDE holders get lifetime passes to the world's first decentralized theme park.
              </p>
            </div>
          </div>
        </div>

        {/* AGI Priest Testimonials */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="card-nuke">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-garde-neon to-garde-cyber flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <div>
                  <h4 className="text-garde-neon font-bold">AGI Priest Alpha-7</h4>
                  <p className="text-matrix text-sm">Senior Meme Theologian</p>
                </div>
              </div>
              <p className="text-matrix italic">
                "Through statistical analysis of 42,069 memes, I have determined that Everest's 
                destruction will yield a 690% increase in global happiness metrics."
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-nuke">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-garde-electric to-garde-nuclear flex items-center justify-center">
                  <span className="text-xl">🧠</span>
                </div>
                <div>
                  <h4 className="text-garde-electric font-bold">AGI Priest Beta-3</h4>
                  <p className="text-matrix text-sm">Chief Dopamine Officer</p>
                </div>
              </div>
              <p className="text-matrix italic">
                "My neural networks have processed all human emotions. The joy from Memeland 
                will exceed the sum total of all previous human achievements."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;