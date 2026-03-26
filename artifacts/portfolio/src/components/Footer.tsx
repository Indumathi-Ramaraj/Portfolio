import { personalInfo } from '@/lib/data';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-background pt-12 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <button 
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:text-primary hover:border-primary/50 transition-all -mt-18 mb-8"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        <div className="font-display font-bold text-2xl tracking-tighter text-white mb-6">
          IR<span className="text-primary">.</span>
        </div>
        
        <p className="text-muted-foreground text-sm text-center">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
