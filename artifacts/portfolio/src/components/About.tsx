import { motion } from 'framer-motion';
import { personalInfo } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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
              Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">digital solutions</span> with purpose.
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
            {personalInfo.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:border-primary/50 transition-colors"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="font-display text-5xl md:text-6xl font-bold text-white mb-2 flex items-center">
                  {stat.value}
                  {stat.plus && <span className="text-primary">+</span>}
                </div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
            
            {/* Empty decorative card to complete 2x2 grid if 3 stats */}
            {personalInfo.stats.length % 2 !== 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl flex items-center justify-center border-dashed border-white/10"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/30">
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
