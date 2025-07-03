import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');

  const webProjects = [
    {
      title: "E-Commerce Platform",
      description: "Modern React-based e-commerce solution with Next.js, featuring responsive design, payment integration, and admin dashboard.",
      image: "/ecomerce.jpeg",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      demoUrl: "https://ecommerce-shopco-backend.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Creative Agency Website",
      description: "Interactive and engaging agency site built with modern UI/UX techniques and clean frontend implementation.",
      image: "/slc.jpeg",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      demoUrl: "https://creative-henna.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "BoldHue Portfolio",
      description: "A personal portfolio showcasing design and development expertise with responsive UI and theme toggling.",
      image: "/boldhue.jpg",
      technologies: ["React", "Next.js", "Tailwind CSS", "Dark Mode"],
      demoUrl: "https://boldhue.vercel.app/",
      githubUrl: "#"
    }
  ];

  const designProjects = [
    {
      title: "Social Media Flyers & Posters",
      description: "A collection of dynamic social media flyers and posters designed for various clients, including sports, gyms, education, and food brands.",
      image: "/flyer.jpg",
      technologies: ["Photoshop", "Illustrator", "Digital Design", "Social Media"],
      category: "Posters & Ads"
    },
    {
      title: "Promotional Flyers",
      description: "Professionally designed flyers for gym promotions, product marketing, and educational institutions.",
      image: "/post.jpg",
      technologies: ["Flyer Design", "Typography", "Marketing", "Layout"],
      category: "Flyers"
    },
    {
      title: "Logo Design Collection",
      description: "Logo designs crafted for diverse clients in industries like cosmetics, software, food, and crockery.",
      image: "/logo.jpg",
      technologies: ["Logo Design", "Branding", "Illustrator", "Vector Art"],
      category: "Logos"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing my expertise in both web development and graphic design
          </p>
        </div>

        {/* Project Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted/50 p-2 rounded-full flex gap-2">
            <Button
              variant={activeTab === 'web' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('web')}
              className="rounded-full px-8 py-2"
            >
              Web Development
            </Button>
            <Button
              variant={activeTab === 'design' ? 'default' : 'ghost'}
              onClick={() => setActiveTab('design')}
              className="rounded-full px-8 py-2"
            >
              Graphic Design
            </Button>
          </div>
        </div>

        {/* Web Development Projects */}
        {activeTab === 'web' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fadeInUp border-0 bg-card/50 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-4">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Graphic Design Projects */}
        {activeTab === 'design' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 animate-fadeInUp border-0 bg-card/50 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto max-h-96 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-santa-terra text-white">{project.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="pt-4">
                    <Button size="sm" variant="outline" className="w-full">
                      View Project Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
