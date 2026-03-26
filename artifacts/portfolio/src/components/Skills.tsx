import { motion } from 'framer-motion';
import { Code2, Database, Layout, Terminal } from 'lucide-react';
import { skills } from '@/lib/data';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6 text-primary" />,
    items: skills.frontend
  },
  {
    title: "Backend",
    icon: <Terminal className="w-6 h-6 text-secondary" />,
    items: skills.backend
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    items: skills.database
  },
  {
    title: "Tools & Others",
    icon: <Code2 className="w-6 h-6 text-amber-400" />,
    items: skills.tools
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
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Expertise</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-white">Technical Arsenal</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card rounded-2xl p-6 h-full flex flex-col hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h4 className="font-display text-xl font-bold text-white mb-6">{category.title}</h4>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2 mt-auto"
              >
                {category.items.map(skill => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="px-3 py-1.5 text-sm font-medium text-muted-foreground bg-white/5 border border-white/10 rounded-md hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
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
