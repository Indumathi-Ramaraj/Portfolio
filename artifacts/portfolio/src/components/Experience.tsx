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

        <div className="relative ml-4 md:ml-6 space-y-12 pb-8">
          {/* Gradient Timeline Line */}
          <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent -translate-x-[1px]"></div>

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
              <div className="absolute top-0 -left-[20px] w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_20px_hsl(var(--primary)/0.6)] z-10 before:absolute before:inset-0 before:rounded-full before:bg-primary/20 before:animate-ping">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>

              <div className="glass-card p-6 md:p-8 rounded-2xl group hover:border-white/20 transition-all relative overflow-hidden hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]">
                {/* Left hover glow */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h4 className="font-display text-2xl font-bold text-white mb-2">{item.role}</h4>
                    <div className="flex items-center gap-3">
                      <div className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary text-lg">
                        {item.company}
                      </div>
                      {item.company.includes("HMGTechnology") && (
                        <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary/10 border border-secondary/20 rounded-md">
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary w-fit shadow-[0_0_10px_hsl(var(--primary)/0.1)]">
                    {item.period}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}