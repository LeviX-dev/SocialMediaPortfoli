// ...existing code will be copied from the original .tsx file...import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { WEB_PROJECTS } from '../constants';

const WebProjects = () => {
  return (
    <section className="py-24 bg-dark-charcoal/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent-gold uppercase tracking-[0.3em] text-sm mb-4"
            >
              Development
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold"
            >
              Web Development Projects
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WEB_PROJECTS.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col glass overflow-hidden hover:border-accent-gold/30 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500"
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* External Link Overlay */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-accent-gold text-black flex items-center justify-center rounded-full hover:bg-accent-cream transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags?.map(tag => (
                    <span key={tag} className="text-[9px] uppercase tracking-widest px-2 py-1 bg-white/5 text-accent-beige/60 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-accent-gold group-hover:text-accent-cream transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-accent-beige/60 mb-8 leading-relaxed text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-accent-gold group/link"
                  >
                    <span className="border-b border-accent-gold/30 pb-1 group-hover/link:border-accent-gold transition-all">
                      View Project
                    </span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
              
              {/* Hover Accent */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent-gold group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebProjects;
