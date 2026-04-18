import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center overflow-hidden py-20 md:py-0">
      {/* Background with subtle motion */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 1, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="w-full h-full"
        >
          <img 
            src="https://picsum.photos/seed/cinematic/1920/1080?blur=2" 
            alt="Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative aspect-[3/4] w-full max-w-[240px] sm:max-w-sm mx-auto md:mx-0 group"
        >
          <div className="absolute inset-0 border-2 border-accent-gold/30 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
          <div className="relative w-full h-full overflow-hidden glass">
            <img 
              src="/profile1.jpg" 
              alt="Karan Malkar" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 object-top"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="text-center md:text-left mt-4 md:mt-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent-gold uppercase tracking-[0.3em] text-[10px] sm:text-sm mb-4"
          >
            Creative Technologist
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            Hi, I'm <span className="text-accent-gold">Karan</span> Malkar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl font-light text-accent-beige/80 mb-4 font-serif italic"
          >
            Video Editor | Social Media Strategist | Web Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg text-accent-beige/60 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            I help brands, cafes, and creators grow online through cinematic content, strategic social media management, and modern website development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start"
          >
            <a 
              href="#work" 
              className="px-8 py-4 bg-accent-gold text-black font-semibold rounded-none hover:bg-accent-cream transition-colors duration-300 uppercase tracking-widest text-sm"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-accent-gold/50 text-accent-gold font-semibold rounded-none hover:bg-accent-gold/10 transition-colors duration-300 uppercase tracking-widest text-sm"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.5em] mb-2 opacity-50">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} className="text-accent-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
