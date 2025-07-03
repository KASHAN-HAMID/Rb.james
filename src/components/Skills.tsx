
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Globe, Layers, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: Code,
      gradient: "from-blue-500 to-purple-600",
      skills: [
        { name: "React", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 92 },
        { name: "Tailwind CSS", level: 94 },
        { name: "Node.js", level: 85 }
      ]
    },
    {
      title: "Graphic Design",
      icon: Palette,
      gradient: "from-pink-500 to-rose-600",
      skills: [
        { name: "Photoshop", level: 96 },
        { name: "Illustrator", level: 92 },
        { name: "Logo Design", level: 94 },
        { name: "3D Modeling", level: 88 },
        { name: "Brand Identity", level: 90 },
        { name: "Print Design", level: 89 }
      ]
    },
    {
      title: "UI/UX Design",
      icon: Smartphone,
      gradient: "from-green-500 to-teal-600",
      skills: [
        { name: "Figma", level: 91 },
        { name: "Adobe XD", level: 87 },
        { name: "Prototyping", level: 89 },
        { name: "User Research", level: 83 },
        { name: "Wireframing", level: 90 },
        { name: "Responsive Design", level: 95 }
      ]
    }
  ];

  const techniques = [
    {
      title: "Modern Frameworks",
      description: "Building with cutting-edge technologies",
      tools: ["React", "Next.js", "Vue.js", "Angular"],
      icon: "⚛️"
    },
    {
      title: "Design Systems",
      description: "Creating scalable design languages",
      tools: ["Figma", "Sketch", "Adobe Creative Suite"],
      icon: "🎨"
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast web experiences",
      tools: ["Webpack", "Vite", "Lighthouse", "GTMetrix"],
      icon: "⚡"
    },
    {
      title: "Version Control",
      description: "Collaborative development workflows",
      tools: ["Git", "GitHub", "GitLab", "Bitbucket"],
      icon: "🔄"
    },
    {
      title: "Cloud & DevOps",
      description: "Scalable deployment solutions",
      tools: ["AWS", "Vercel", "Netlify", "Docker"],
      icon: "☁️"
    },
    {
      title: "Testing & Quality",
      description: "Ensuring robust applications",
      tools: ["Jest", "Cypress", "Testing Library", "ESLint"],
      icon: "🧪"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.6, -0.05, 0.01, 0.99] as any
      }
    }
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Combining technical excellence with creative vision to deliver outstanding digital experiences
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
        >
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group"
              >
                <div className="glass-dark p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover-glow h-full">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.gradient} mr-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="group/skill">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-foreground/90 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-primary font-bold">
                            {skill.level}%
                          </span>
                        </div>
                        
                        <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1.2, 
                              delay: skillIndex * 0.1,
                              ease: [0.6, -0.05, 0.01, 0.99] as any
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Techniques & Tools Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            Techniques & Methodologies
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((technique, index) => (
              <motion.div
                key={technique.title}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass p-6 rounded-xl border border-white/20 hover:border-primary/50 transition-all duration-300 hover-glow group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {technique.icon}
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {technique.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {technique.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {technique.tools.map((tool, toolIndex) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full border border-primary/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
