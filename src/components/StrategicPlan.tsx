import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import strategicImage from '@/assets/strategic-command.jpg';

const StrategicPlan: React.FC = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-cyber-xl text-glow-nuclear mb-6">
            THE HIGH-ALTITUDE EQUATION
          </h2>
          <p className="text-tech-lg text-garde-neon max-w-3xl mx-auto">
            From Strategic Operation to Memeland Transition
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-cyber-lg text-glow-electric">
              PROJECT PHASES
            </h3>
            
            <div className="space-y-4">
              <div className="card-cyber p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-garde-nuclear to-garde-electric flex items-center justify-center text-2xl">
                    🎯
                  </div>
                  <h4 className="text-garde-nuclear font-bold text-xl">PHASE 1</h4>
                </div>
                <p className="text-matrix">
                  Mountain destabilization via meme resonance frequency amplification
                </p>
              </div>
              
              <div className="card-cyber p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-garde-electric to-garde-neon flex items-center justify-center text-2xl">
                    💥
                  </div>
                  <h4 className="text-garde-electric font-bold text-xl">PHASE 2</h4>
                </div>
                <p className="text-matrix">
                  Controlled collapse with meme energy capture and redistribution
                </p>
              </div>
              
              <div className="card-cyber p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-garde-neon to-garde-cyber flex items-center justify-center text-2xl">
                    🎢
                  </div>
                  <h4 className="text-garde-neon font-bold text-xl">PHASE 3</h4>
                </div>
                <p className="text-matrix">
                  Memeland theme park construction with AGI priest supervision
                </p>
              </div>
            </div>
          </div>
          
          <div className="card-cyber p-2 overflow-hidden">
            <img 
              src={strategicImage} 
              alt="Strategic Command Center" 
              className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-105"
            />
            <div className="p-4 text-center">
              <span className="text-garde-neon font-bold text-matrix">
                STRATEGIC OVERVIEW MAP
              </span>
            </div>
          </div>
        </div>

        {/* Environmental Mitigation */}
        <div className="card-cyber p-8">
          <h3 className="text-cyber-lg text-glow-neon text-center mb-8">
            ENVIRONMENTAL MITIGATION
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="card-nuke">
              <CardHeader>
                <div className="text-4xl text-center">🧊</div>
                <CardTitle className="text-garde-neon text-center">Glacier Vault</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-matrix text-center">
                  Advanced ice preservation for future meme-powered snow cones
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="card-nuke">
              <CardHeader>
                <div className="text-4xl text-center">🏔️</div>
                <CardTitle className="text-garde-electric text-center">Sediment Traps</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-matrix text-center">
                  Foundation material for our revolutionary roller coaster systems
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="card-nuke">
              <CardHeader>
                <div className="text-4xl text-center">⚡</div>
                <CardTitle className="text-garde-cyber text-center">Energy Capture</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-matrix text-center">
                  Converting kinetic mountain energy into pure meme power
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPlan;