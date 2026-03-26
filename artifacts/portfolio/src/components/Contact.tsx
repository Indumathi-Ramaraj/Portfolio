import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* CSS Aurora Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-secondary/10 blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[50%] h-[50%] rounded-full bg-accent/15 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s' }}></div>
      </div>
      
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
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-primary border-primary/20 group-hover:border-primary/50 group-hover:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Email</div>
                  <a href={`mailto:${personalInfo.email}`} className="text-white font-medium hover:text-primary transition-colors text-lg">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-secondary border-secondary/20 group-hover:border-secondary/50 group-hover:shadow-[0_0_15px_hsl(var(--secondary)/0.3)] transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Phone</div>
                  <a href={`tel:${personalInfo.phone}`} className="text-white font-medium hover:text-secondary transition-colors text-lg">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-accent border-accent/20 group-hover:border-accent/50 group-hover:shadow-[0_0_15px_hsl(var(--accent)/0.3)] transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider font-semibold mb-1">Location</div>
                  <div className="text-white font-medium text-lg">{personalInfo.location}</div>
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
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 rounded-3xl flex flex-col gap-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-bold tracking-wide text-white/80 ml-1">Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold tracking-wide text-white/80 ml-1">Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 relative z-10">
                <label htmlFor="phone" className="text-sm font-bold tracking-wide text-white/80 ml-1">
                  Phone <span className="text-white/40 font-normal">(optional – for SMS reply)</span>
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary focus:shadow-[0_0_15px_hsl(var(--secondary)/0.3)] transition-all"
                  placeholder="+91 98765 43210"
                />
              </div>
              
              <div className="flex flex-col gap-2 relative z-10">
                <label htmlFor="message" className="text-sm font-bold tracking-wide text-white/80 ml-1">Message *</label>
                <textarea 
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_hsl(var(--primary)/0.3)] transition-all resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="relative z-10 px-4 py-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium text-sm flex items-center gap-2">
                  <span>✓</span> Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="relative z-10 px-4 py-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 font-medium text-sm flex items-center gap-2">
                  <span>✗</span> {errorMsg}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-[0_0_25px_hsl(var(--primary)/0.5)] hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none relative z-10"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  <>Send Message <Send className="w-5 h-5" /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
