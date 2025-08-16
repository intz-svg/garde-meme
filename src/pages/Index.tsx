import React from 'react';
import GardeHeader from '@/components/GardeHeader';
import GardeHero from '@/components/GardeHero';
import StrategicPlan from '@/components/StrategicPlan';
import IndustrialOps from '@/components/IndustrialOps';
import TokenomicsSection from '@/components/TokenomicsSection';
import HyperstitionSection from '@/components/HyperstitionSection';
import NarrativeSection from '@/components/NarrativeSection';
import GardeFooter from '@/components/GardeFooter';
import ParticlesBackground from '@/components/ParticlesBackground';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Particles */}
      <ParticlesBackground />
      
      {/* Header */}
      <GardeHeader />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="home">
          <GardeHero />
        </section>
        
        {/* Strategic Plan Section */}
        <section id="strategic">
          <StrategicPlan />
        </section>
        
        {/* Industrial Operations Section */}
        <section id="industrial">
          <IndustrialOps />
        </section>
        
        {/* Tokenomics Section */}
        <section id="token">
          <TokenomicsSection />
        </section>
        
        {/* Hyperstition Section */}
        <section id="hyperstition">
          <HyperstitionSection />
        </section>
        
        {/* Narrative Section */}
        <section id="narrative">
          <NarrativeSection />
        </section>
      </main>
      
      {/* Footer */}
      <GardeFooter />
    </div>
  );
};

export default Index;