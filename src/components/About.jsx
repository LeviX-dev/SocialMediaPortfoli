import React from 'react';
import { motion } from 'motion/react';
import { SKILLS } from '../constants';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8 text-center md:text-left">
              <div className="w-32 h-32 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-accent-gold shrink-0">
                <img src="/profile2.jpg" alt="Karan Malkar" className="w-full h-full object-cover object-center" />
              </div>
              <div>
                <h2 className="text-accent-gold uppercase tracking-[0.3em] text-sm mb-4">My Story</h2>
                <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                Computer Science Graduate by day, <br />
                  <span className="italic text-accent-beige/90">storyteller by heart.</span>
                </h3>
              </div>
            </div>
            <div className="space-y-6 text-accent-beige/70 leading-relaxed text-lg text-center md:text-left">
              <p>
                Karan Malkar is an Computer Science Graduate specializing in Java and Data Science with a passion for filmmaking, storytelling, and digital creation.
              </p>
              <p>
                I works on cinematic video editing, social media growth strategy, and website design and development. I has experience creating reels, managing social media pages, and building interactive websites.
              </p>
              <ul className="space-y-2 pt-4 flex flex-col items-center md:items-start">
                {['Cinematic video editing', 'Social media growth strategy', 'Website design and development'].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 md:p-12"
          >
            <h4 className="text-2xl font-serif mb-8 text-accent-gold">Expertise</h4>
            <div className="space-y-8">
              {SKILLS.map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm uppercase tracking-widest font-medium">{skill.name}</span>
                    <span className="text-sm text-accent-gold">{skill.level}%</span>
                  </div>
                  <div className="h-[2px] w-full bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                      className="h-full bg-accent-gold shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
