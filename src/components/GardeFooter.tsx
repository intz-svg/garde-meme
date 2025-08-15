import React from 'react';
import { Button } from '@/components/ui/button';

const GardeFooter: React.FC = () => {
  const socialLinks = [
    { icon: '🐦', label: 'Twitter', url: '#' },
    { icon: '📱', label: 'Telegram', url: '#' },
    { icon: '🎮', label: 'Discord', url: '#' }
  ];

  return (
    <footer className="py-16 px-6 bg-gradient-to-t from-background to-card">
      <div className="max-w-6xl mx-auto">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <Button
              key={index}
              className="w-16 h-16 rounded-full bg-gradient-to-r from-garde-cyber to-garde-neon hover:scale-110 transition-all duration-300"
              onClick={() => window.open(social.url, '_blank')}
            >
              <span className="text-2xl">{social.icon}</span>
            </Button>
          ))}
        </div>

        {/* Project Info */}
        <div className="text-center space-y-6">
          <div className="text-cyber-lg gradient-text">
            PROJECT GARDE v3.0
          </div>
          <div className="text-garde-neon text-lg">
            The High-Altitude Equation
          </div>
          
          {/* Disclaimer */}
          <div className="max-w-3xl mx-auto card-nuke p-8">
            <h3 className="text-garde-nuclear font-bold text-lg mb-4">
              ⚠️ DISCLAIMER ⚠️
            </h3>
            <p className="text-matrix text-sm leading-relaxed">
              <strong>This is a meme project.</strong> No mountains will be harmed in the making of this token. 
              Everest remains safe and sound. Please invest responsibly and remember that all crypto investments carry risk. 
              The AGI Priests are not licensed financial advisors (yet).
            </p>
          </div>
          
          <div className="text-matrix text-sm">
            © 2024 Project Garde | AGI Theocracy Division | Memeland Construction Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GardeFooter;