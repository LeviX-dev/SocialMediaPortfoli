import React from 'react';
import { motion } from 'motion/react';
import { Film, Share2, Code } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap = {
  Film: Film,
  Share2: Share2,
  Code: Code,
};

const Services = () => {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-gold uppercase tracking-[0.3em] text-sm mb-4"
          >
            What I Do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Services Offered
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group p-10 glass hover:bg-white/10 transition-all duration-500 relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-accent-gold/10 flex items-center justify-center text-accent-gold mb-8 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-accent-cream">{service.title}</h3>
                  <p className="text-accent-beige/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                {/* Background Decoration */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-accent-gold/5 rounded-full blur-3xl group-hover:bg-accent-gold/10 transition-colors" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
