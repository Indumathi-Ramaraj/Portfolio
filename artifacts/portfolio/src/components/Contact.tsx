import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative large glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Get in touch</h2>
            <h3 className="font-display text-4xl md:text-6xl font-bold text-white mb-6">
              Let's build something <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">awesome together.</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-white font-medium hover:text-primary transition-colors">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-secondary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="text-white font-medium">India (Remote)</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-3xl flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-white/80 ml-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-white/80 ml-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-white/80 ml-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  required
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
