
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate creator blending technical expertise with artistic vision from the heart of Santa Fe
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeInUp">
            <div className="relative">
              <img
                src="/lovable-uploads/c337f2aa-bdda-48fe-ad6d-0f49580cd364.png"
                alt="Robert James - Professional Portrait"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-santa-terra to-santa-sunset rounded-full opacity-20"></div>
            </div>
          </div>
          
          <div className="space-y-6 animate-slideInRight">
            <Card className="border-l-4 border-santa-terra bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-santa-terra">Web Development Expertise</h3>
                <p className="text-muted-foreground">
                  Specializing in modern web technologies including React, Next.js, TypeScript, and Tailwind CSS. 
                  I create responsive, performant websites that deliver exceptional user experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-santa-sage bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-santa-sage">Graphic Design Mastery</h3>
                <p className="text-muted-foreground">
                  From logo design to 3D characters, banners to brochures, I bring creative visions to life. 
                  Proficient in Photoshop, Illustrator, and modern design tools.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-santa-turquoise bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-santa-turquoise">International Focus</h3>
                <p className="text-muted-foreground">
                  Serving clients across the US, UK, and Canada with professional, culturally-aware design solutions 
                  that resonate with diverse audiences and drive business growth.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
