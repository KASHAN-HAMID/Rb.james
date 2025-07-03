
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, Users, Lightbulb, Shield, Zap } from 'lucide-react';

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: Award,
      title: "Proven Excellence",
      description: "8+ years delivering exceptional digital solutions with a 98% client satisfaction rate",
      color: "text-accent",
      gradient: "from-accent/20 to-accent/5"
    },
    {
      icon: Clock,
      title: "Always On Time",
      description: "Dedicated to meeting deadlines without compromising quality or attention to detail",
      color: "text-green-500",
      gradient: "from-green-500/20 to-green-500/5"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your vision becomes my mission. I work closely with you throughout the entire process",
      color: "text-blue-500",
      gradient: "from-blue-500/20 to-blue-500/5"
    },
    {
      icon: Lightbulb,
      title: "Creative Innovation",
      description: "Bringing fresh ideas and modern solutions to make your project stand out",
      color: "text-primary",
      gradient: "from-primary/20 to-primary/5"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and optimization to ensure your project performs flawlessly",
      color: "text-purple-500",
      gradient: "from-purple-500/20 to-purple-500/5"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Efficient workflow and modern tools enable rapid development without cutting corners",
      color: "text-orange-500",
      gradient: "from-orange-500/20 to-orange-500/5"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as any
      }
    }
  };

  return (
    <section id="why-choose-me" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Why Choose Me?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            When you work with me, you're not just hiring a developer or designer – 
            you're partnering with someone who genuinely cares about your success
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <div className={`glass-dark p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover-glow h-full bg-gradient-to-br ${reason.gradient}`}>
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-background/50 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`w-8 h-8 ${reason.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {reason.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can bring your vision to life with exceptional design and development
            </p>
            <motion.button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover-glow"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMe;
