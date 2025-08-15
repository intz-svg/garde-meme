import React from 'react';
import { Badge } from '@/components/ui/badge';
import industrialImage from '@/assets/industrial-facility.jpg';

const IndustrialOps: React.FC = () => {
  const metrics = [
    { label: 'Meme Density', value: '99.7%', icon: '📊' },
    { label: 'AGI Priests Active', value: '42', icon: '🤖' },
    { label: 'Dopamine Output', value: '∞', icon: '🧠' },
    { label: 'FUD Eliminated', value: '420.69k', icon: '💀' }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-cyber-xl text-glow-electric mb-6">
            INDUSTRIAL OPERATIONS
          </h2>
          <p className="text-tech-lg text-garde-cyber max-w-3xl mx-auto">
            High-Tech Infrastructure for Maximum Meme Impact
          </p>
        </div>

        {/* Main Industrial Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-cyber-lg text-glow-neon">
              CYBERPUNK INFRASTRUCTURE
            </h3>
            
            <div className="space-y-4 text-matrix">
              <p>
                Our state-of-the-art industrial facilities combine cutting-edge technology 
                with meme-powered automation. Every screen displays real-time meme metrics 
                while our AI systems optimize for maximum dopamine output.
              </p>
              <p>
                The facility operates 24/7, powered by renewable meme energy and staffed 
                by AGI priests who ensure optimal performance across all systems.
              </p>
            </div>

            {/* Live Metrics */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="card-nuke p-4 text-center">
                  <div className="text-3xl mb-2">{metric.icon}</div>
                  <div className="text-garde-neon font-bold text-lg">{metric.value}</div>
                  <div className="text-matrix text-sm">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <Badge className="bg-garde-nuclear text-background px-4 py-2">
                🔥 NUCLEAR POWERED
              </Badge>
              <Badge className="bg-garde-electric text-background px-4 py-2">
                ⚡ MEME OPTIMIZED
              </Badge>
              <Badge className="bg-garde-neon text-background px-4 py-2">
                🤖 AGI SUPERVISED
              </Badge>
            </div>
          </div>
          
          <div className="card-cyber p-2 overflow-hidden">
            <img 
              src={industrialImage} 
              alt="Industrial Meme Production Facility" 
              className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-105"
            />
            <div className="p-4 text-center">
              <span className="text-garde-electric font-bold text-matrix">
                MEME PRODUCTION FACILITY
              </span>
            </div>
          </div>
        </div>

        {/* Atmospheric Processing */}
        <div className="card-cyber p-8">
          <h3 className="text-cyber-lg text-glow-cyber text-center mb-8">
            ATMOSPHERIC CONTROL SYSTEMS
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-4">
              <div className="text-6xl">🌪️</div>
              <h4 className="text-garde-neon font-bold text-xl">Meme Density Monitoring</h4>
              <p className="text-matrix">
                Advanced sensors monitor meme concentration in the atmosphere 
                for optimal viral potential
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-6xl">🏭</div>
              <h4 className="text-garde-electric font-bold text-xl">Processing Towers</h4>
              <p className="text-matrix">
                Massive atmospheric processors ensure perfect conditions 
                for meme cultivation and distribution
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="text-6xl">🔬</div>
              <h4 className="text-garde-cyber font-bold text-xl">Quality Control</h4>
              <p className="text-matrix">
                Real-time analysis ensures only the highest quality memes 
                are released into the ecosystem
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialOps;