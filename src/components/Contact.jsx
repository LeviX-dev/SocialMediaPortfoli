import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Linkedin, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-accent-gold uppercase tracking-[0.3em] text-sm mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Let's create something <br />
              <span className="text-accent-gold italic">extraordinary.</span>
            </h3>
            <p className="text-accent-beige/60 text-lg mb-12 max-w-md">
              Whether you're a brand looking for cinematic content or a creator wanting to level up your social media, I'm here to help.
            </p>

            <div className="space-y-8">
              <a 
                href="mailto:siddzzxx07@gmail.com" 
                className="flex items-center space-x-6 group"
              >
                <div className="w-12 h-12 glass flex items-center justify-center text-accent-gold group-hover:bg-accent-gold group-hover:text-black transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent-gold/50 mb-1">Email Me</p>
                  <p className="text-lg font-medium">karanmalkar6@gmail.com</p>
                </div>
              </a>

              <div className="flex space-x-4 pt-4">
                {[
                  { icon: Instagram, href: 'https://instagram.com/karanmalkar000', label: 'Instagram' },
                  { icon: Linkedin, href: 'https://linkedin.com/', label: 'LinkedIn' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 glass flex items-center justify-center text-accent-beige hover:text-accent-gold hover:border-accent-gold transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-12"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-accent-gold/70">Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-accent-gold transition-colors text-accent-beige"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-accent-gold/70">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-accent-gold transition-colors text-accent-beige"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-accent-gold/70">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-accent-gold transition-colors text-accent-beige resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-5 bg-accent-gold text-black font-bold uppercase tracking-[0.2em] text-sm hover:bg-accent-cream transition-colors flex items-center justify-center space-x-3 group"
              >
                <span>Send Message</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
