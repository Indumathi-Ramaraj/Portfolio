import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';
import { Zap, Rocket, Code } from 'lucide-react';

const icons = [Zap, Rocket, Code];
const gradients = [
  "from-primary to-primary/50",
  "from-secondary to-secondary/50",
  "from-accent to-accent/50",
  "from-emerald-500 to-emerald-500/50"
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      {/* Subtle animated gradient mesh behind stats grid */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-secondary/5 to-transparent blur-3xl -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">About Me</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold mb-8">
              Building <em className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary not-italic">experiences</em> that matter.
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {personalInfo.bio}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not writing code, I'm exploring the latest design trends, optimizing database queries, or figuring out how to make web applications more accessible and performant.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {personalInfo.stats.map((stat, index) => {
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-white/20 transition-all glow-card"
                >
                  <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${gradients[index % gradients.length]} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                  
                  <div className="mb-4 text-white/50 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  {typeof stat.value === 'number' ? (
                    <div className="font-display text-5xl md:text-6xl font-bold text-white mb-2 flex items-center">
                      {stat.value}
                      {stat.plus && <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">+</span>}
                    </div>
                  ) : (
                    <div className="font-display text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
                      {stat.value}
                    </div>
                  )}
                  <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
            
            {/* Empty decorative card to complete 2x2 grid if 3 stats */}
            {personalInfo.stats.length % 2 !== 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl flex items-center justify-center border-dashed border-white/10 relative overflow-hidden group glow-card"
              >
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${gradients[personalInfo.stats.length % gradients.length]} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30 group-hover:border-white/30 transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}