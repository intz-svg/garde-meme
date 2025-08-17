import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const GardeHeader: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'strategic', label: 'PLAN' },
    { id: 'industrial', label: 'TECH' },
    { id: 'token', label: 'TOKEN' },
    { id: 'hyperstition', label: 'HYPERSTITION' },
    { id: 'narrative', label: 'STORY' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/90 backdrop-blur-xl border-b-2 border-garde-neon/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-garde-nuclear to-garde-electric flex items-center justify-center">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-garde-neon to-garde-cyber rounded-full opacity-20 animate-pulse"></div>
            </div>
            
            <div>
              <h1 className="text-cyber-lg gradient-text font-bold">
                PROJECT GARDE
              </h1>
            </div>
            
            <Badge className="bg-garde-electric text-background px-3 py-1 animate-glow">
              $GARDE
            </Badge>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 font-bold text-sm transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-garde-neon'
                    : 'text-foreground hover:text-garde-electric'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-garde-neon to-garde-electric"></div>
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <Button className="btn-cyber hidden md:flex">
            🚀 JOIN NOW
          </Button>
        </div>

        {/* Mobile Navigation */}
        <nav className="lg:hidden flex flex-wrap justify-center gap-4 mt-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-1 text-xs font-bold rounded transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-garde-neon text-background'
                  : 'text-foreground hover:text-garde-electric'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default GardeHeader;