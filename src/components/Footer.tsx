
import React from 'react';
import { Instagram, Linkedin, Mail, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground/5 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 dark:from-slate-200 dark:via-slate-100 dark:to-slate-300 flex items-center justify-center shadow-lg border border-slate-600 dark:border-slate-400">
              <span className="text-2xl font-bold text-white dark:text-slate-900">R</span>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Robert James
            </div>
          </div>
          <p className="text-muted-foreground mb-6">
            Web Developer & Graphic Designer • Santa Fe, New Mexico
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:hello@robertjames.dev"
              className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/30 transition-colors hover-glow"
            >
              <Mail className="h-5 w-5 text-accent" />
            </a>
            <a 
              href="https://facebook.com/robertjamesdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center hover:bg-blue-500/30 transition-colors hover-glow"
            >
              <Facebook className="h-5 w-5 text-blue-500" />
            </a>
            <a 
              href="https://instagram.com/robertjamesdesign"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center hover:bg-pink-500/30 transition-colors hover-glow"
            >
              <Instagram className="h-5 w-5 text-pink-500" />
            </a>
            <a 
              href="https://linkedin.com/in/robertjamesdev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/30 transition-colors hover-glow"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
          </div>
          
          <div className="border-t border-border pt-8 text-sm text-muted-foreground">
            <p>&copy; 2024 Robert James. All rights reserved.</p>
            <p className="mt-2">Crafted with passion in Santa Fe, New Mexico</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
