import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { Typewriter } from './Typewriter';

const roles = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "Tech Innovator"
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Noise Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            className="lg:col-span-8 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border-primary/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_hsl(var(--secondary))]"></span>
              <span className="text-sm font-medium text-white/80 tracking-wide uppercase">Available for new opportunities</span>
            </motion.div>

            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6">
              Hi, I'm <br/>
              <span className="text-white">Indumathi Ramaraj</span>
            </h1>

            <div className="h-16 sm:h-20 md:h-24 mb-6">
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
                <Typewriter words={roles} />
              </h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              {personalInfo.tagline}. I bridge the gap between design and engineering to build robust, scalable, and visually stunning applications.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="#projects"
                className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-xl overflow-hidden shadow-[0_0_40px_-10px_hsl(var(--primary)/0.6)] transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative flex items-center gap-2">
                  View My Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <a 
                href={personalInfo.resume}
                download="Indumathi_Ramaraj_Resume.pdf"
                className="group px-8 py-4 glass-card text-white font-semibold rounded-xl flex items-center gap-2 hover:bg-white/5 hover:border-white/20 transition-all glow-card"
              >
                Download Resume
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-4 hidden lg:block relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {/* Abstract Decorative Element instead of a photo */}
            <div className="relative w-full aspect-square max-w-[400px] mx-auto">
              {/* Large blurred gradient blob */}
              <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-primary/40 via-secondary/20 to-primary/30 blur-[80px] animate-pulse" style={{ animationDuration: '6s' }}></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-secondary/40 blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
              
              <div className="absolute inset-4 rounded-[2rem] glass-card border border-white/10 flex items-center justify-center overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-500 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30"></div>
                <span className="font-display font-bold text-9xl text-white/90 drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]">IR</span>
              </div>
              
              {/* Floating tech badges */}
              <motion.div 
                animate={{ y: [0, -15, 0] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass-card px-4 py-2 rounded-xl border border-primary/40 shadow-[0_0_20px_hsl(var(--primary)/0.3)] backdrop-blur-xl"
              >
                <span className="font-bold text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]">React</span>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 glass-card px-4 py-2 rounded-xl border border-secondary/40 shadow-[0_0_20px_hsl(var(--secondary)/0.3)] backdrop-blur-xl"
              >
                <span className="font-bold text-secondary drop-shadow-[0_0_8px_hsl(var(--secondary)/0.5)]">Node.js</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -12, 0], x: [0, 5, 0] }} 
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/4 -left-12 glass-card px-4 py-2 rounded-xl border border-accent/40 shadow-[0_0_20px_hsl(var(--accent)/0.3)] backdrop-blur-xl z-20"
              >
                <span className="font-bold text-accent drop-shadow-[0_0_8px_hsl(var(--accent)/0.5)]">TypeScript</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground z-10"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}