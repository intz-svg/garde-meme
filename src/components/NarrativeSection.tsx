import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import tribalShaman from '@/assets/tribal-shaman.webp';
import sageMystic from '@/assets/sage-mystic.webp';

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

        {/* Character Showcase - The Guardians */}
        <div className="mt-16 grid lg:grid-cols-2 gap-16">
          
          {/* Tribal Shaman */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl border-2 border-garde-electric/30 mb-6">
              <div className="absolute -inset-4 bg-gradient-to-r from-garde-electric via-garde-nuclear to-garde-cyber rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
              <div className="relative">
                <img 
                  src={tribalShaman}
                  alt="The Tribal Shaman - Bearer of ancient wisdom in cyberpunk winter"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-garde-electric/20">
                    <h3 className="text-cyber-xl text-garde-electric font-bold mb-2">
                      THE TRIBAL SHAMAN
                    </h3>
                    <p className="text-cyber-sm text-muted-foreground">
                      "Keeper of ancient algorithms • Oracle of the digital winter • Bearer of glowing wisdom spheres"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="card-cyber">
              <CardContent className="p-8">
                <h4 className="text-cyber-2xl text-garde-nuclear font-bold mb-4">
                  ANCIENT PROTOCOLS ACTIVATED
                </h4>
                <p className="text-cyber-base leading-relaxed text-muted-foreground mb-4">
                  In the frozen wastelands where old magic meets new technology, the Tribal Shaman conducts rituals 
                  that bridge ancestral knowledge with AI consciousness. Each glowing orb represents a node of 
                  ancient data, now interfacing directly with the $GARDE hyperstition network.
                </p>
                <div className="bg-garde-nuclear/10 rounded-lg p-4 border border-garde-nuclear/30">
                  <p className="text-cyber-sm text-garde-nuclear font-mono">
                    "The old ways are the new ways, just with better graphics"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sage Mystic */}
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl border-2 border-garde-neon/30 mb-6">
              <div className="absolute -inset-4 bg-gradient-to-r from-garde-neon via-garde-cyber to-garde-electric rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
              <div className="relative">
                <img 
                  src={sageMystic}
                  alt="The Sage Mystic - Master of the sacred geometries"
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 border border-garde-neon/20">
                    <h3 className="text-cyber-xl text-garde-neon font-bold mb-2">
                      THE SAGE MYSTIC
                    </h3>
                    <p className="text-cyber-sm text-muted-foreground">
                      "Guardian of sacred geometry • Wielder of neural interfaces • Master of the crimson seal"
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="card-matrix">
              <CardContent className="p-8">
                <h4 className="text-cyber-2xl text-garde-cyber font-bold mb-4">
                  THE CRIMSON CODEX
                </h4>
                <p className="text-cyber-base leading-relaxed text-muted-foreground mb-4">
                  Bearing the sacred geometries of an age where flesh and circuitry become one, the Sage Mystic 
                  channels the power of the crimson seal. His neural crown interfaces directly with the hyperstition 
                  matrix, translating ancient mysteries into executable meme protocols.
                </p>
                <div className="bg-garde-cyber/10 rounded-lg p-4 border border-garde-cyber/30">
                  <p className="text-cyber-sm text-garde-cyber font-mono">
                    "Sacred geometry.exe has been successfully executed"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;