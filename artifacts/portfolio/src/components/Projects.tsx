import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/data';
import { cn } from '@/lib/utils';

const categories = ["All", "Full Stack", "Frontend", "Mobile"];

export function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(project => 
    filter === "All" ? true : project.category === filter
  );

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Portfolio</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-white">Featured Work</h3>
          </div>
          
          <div className="flex flex-wrap gap-2 p-1.5 glass-card rounded-full border border-white/10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 relative",
                  filter === cat 
                    ? "text-white" 
                    : "text-muted-foreground hover:text-white"
                )}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-[0_10px_40px_-15px_hsl(var(--primary)/0.3)] transition-all duration-500 relative"
              >
                {/* Gradient top border on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

                {/* Abstract Project Image Placeholder */}
                <div className="relative h-56 w-full overflow-hidden">
                  <div className={cn("absolute inset-0 bg-gradient-to-br opacity-80 group-hover:scale-110 group-hover:opacity-50 transition-all duration-700", project.color)}></div>
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
                  
                  {/* VIEW PROJECT OVERLAY */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    <span className="font-display font-bold text-2xl tracking-widest text-white/90 drop-shadow-lg scale-90 group-hover:scale-100 transition-transform duration-500">VIEW PROJECT</span>
                  </div>

                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-20">
                    <a href={project.github} className="p-2 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors hover:scale-110">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href={project.live} className="p-2 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-primary transition-colors hover:scale-110">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col flex-grow relative bg-card/50">
                  <div className="text-xs font-bold text-primary mb-3 uppercase tracking-widest">{project.category}</div>
                  <h4 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">{project.title}</h4>
                  <p className="text-muted-foreground text-sm mb-8 flex-grow leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs font-semibold text-white/80 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 group-hover:border-white/20 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}