import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';
import { skills } from '@/lib/data';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-primary" />,
    items: skills.frontend,
    bgClass: "bg-gradient-to-br from-primary/20 to-primary/5",
    borderClass: "border-primary/20",
    pillClass: "border-primary/30 text-white/90 hover:shadow-[0_0_15px_hsl(var(--primary)/0.4)]",
    colSpan: "md:col-span-2 lg:col-span-3",
  },
  {
    title: "Backend",
    icon: <Terminal className="w-6 h-6 text-secondary" />,
    items: skills.backend,
    bgClass: "bg-gradient-to-br from-secondary/20 to-secondary/5",
    borderClass: "border-secondary/20",
    pillClass: "border-secondary/30 text-white/90 hover:shadow-[0_0_15px_hsl(var(--secondary)/0.4)]",
    colSpan: "md:col-span-1 lg:col-span-2",
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6 text-accent" />,
    items: skills.database,
    bgClass: "bg-gradient-to-br from-accent/20 to-accent/5",
    borderClass: "border-accent/20",
    pillClass: "border-accent/30 text-white/90 hover:shadow-[0_0_15px_hsl(var(--accent)/0.4)]",
    colSpan: "md:col-span-1 lg:col-span-2",
  },
  {
    title: "Tools & Others",
    icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    items: skills.tools,
    bgClass: "bg-gradient-to-br from-emerald-500/20 to-emerald-500/5",
    borderClass: "border-emerald-500/20",
    pillClass: "border-emerald-500/30 text-white/90 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]",
    colSpan: "md:col-span-2 lg:col-span-3",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Decorative blurred color blob */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-secondary/5 to-transparent blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Expertise</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-white">Technical Arsenal</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 auto-rows-min">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`glass-card rounded-3xl p-8 h-full flex flex-col hover:-translate-y-1 transition-all duration-300 border ${category.borderClass} ${category.bgClass} ${category.colSpan}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-black/20 border border-white/10 flex items-center justify-center shadow-inner">
                  {category.icon}
                </div>
                <h4 className="font-display text-2xl font-bold text-white">{category.title}</h4>
              </div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3 mt-auto"
              >
                {category.items.map(skill => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className={`px-4 py-2 text-sm font-medium bg-black/40 border rounded-full backdrop-blur-sm transition-all duration-300 cursor-default ${category.pillClass}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}