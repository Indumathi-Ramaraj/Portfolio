import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Journey</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-white">Experience</h3>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 pb-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute top-0 -left-[21px] w-10 h-10 rounded-full glass-card border border-primary/50 flex items-center justify-center bg-background shadow-[0_0_15px_rgba(124,58,237,0.3)]">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>

              <div className="glass-card p-6 md:p-8 rounded-2xl group hover:border-white/20 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h4 className="font-display text-xl font-bold text-white">{item.role}</h4>
                    <div className="text-primary font-medium">{item.company}</div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-muted-foreground w-fit">
                    {item.period}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
          
          {/* Fading bottom line */}
          <div className="absolute bottom-0 left-[-1px] w-[2px] h-32 bg-gradient-to-t from-background to-white/10"></div>
        </div>
      </div>
    </section>
  );
}
