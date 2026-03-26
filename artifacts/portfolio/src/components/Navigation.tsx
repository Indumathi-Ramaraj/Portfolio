import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { personalInfo } from '@/lib/data';

const links = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'glass-panel py-3 shadow-lg' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="relative group flex items-center">
          <span className="font-display font-bold text-2xl tracking-tighter text-white">
            IR<span className="text-primary">.</span>
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-white transition-colors duration-200 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          
          <div className="h-6 w-px bg-white/10 mx-2"></div>
          
          <div className="flex items-center gap-4">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-[#0a66c2] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href={personalInfo.resume} 
              target="_blank" 
              rel="noreferrer"
              className="px-5 py-2 rounded-full text-sm font-semibold bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 text-white"
            >
              Resume
            </a>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-panel border-b border-white/10 p-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-lg font-medium text-white/80 hover:text-white block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 pt-4 border-t border-white/10">
              <a href={personalInfo.github} className="p-2 glass-card rounded-full text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedin} className="p-2 glass-card rounded-full text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="p-2 glass-card rounded-full text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
