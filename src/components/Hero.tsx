
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-primary">Robert</span>{' '}
            <span className="text-foreground">James</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-4">
            Web Developer & Graphic Designer
          </div>
          
          <div className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Based in Santa Fe, New Mexico • Creating stunning digital experiences 
            with React, Next.js, and creative design solutions
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="px-4 py-2 bg-santa-terra/10 text-santa-terra rounded-full text-sm font-medium">
              React & Next.js Expert
            </div>
            <div className="px-4 py-2 bg-santa-sage/10 text-santa-sage rounded-full text-sm font-medium">
              UI/UX Designer
            </div>
            <div className="px-4 py-2 bg-santa-turquoise/10 text-santa-turquoise rounded-full text-sm font-medium">
              Brand Identity
            </div>
          </div>
          
          <Button 
            onClick={scrollToProjects}
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
