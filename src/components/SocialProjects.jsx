import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, ExternalLink, Filter, ArrowUpDown } from 'lucide-react';
import { SOCIAL_MEDIA_REELS } from '../constants';

const SocialProjects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const filteredAndSortedReels = useMemo(() => {
    let result = [...SOCIAL_MEDIA_REELS];
    
    if (filter !== 'all') {
      result = result.filter(reel => reel.type === filter);
    }

    result.sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return a.type.localeCompare(b.type);
    });

    return result;
  }, [filter, sortBy]);

  const categories = ['all', ...new Set(SOCIAL_MEDIA_REELS.map(r => r.type))];

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent-gold uppercase tracking-[0.3em] text-sm mb-4"
            >
              Management
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Social Media Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-accent-beige/60 leading-relaxed"
            >
              I worked as the Social Media Head of my college department where I handled content creation, editing, and publishing reels for official pages.
            </motion.p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center space-x-3 glass px-3 py-1.5">
              <Filter size={14} className="text-accent-gold" />
              <div className="flex space-x-1">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`text-[9px] uppercase tracking-widest px-2 py-1 transition-all ${
                      filter === cat ? 'bg-accent-gold text-black' : 'hover:text-accent-gold'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-3 glass px-3 py-1.5">
              <ArrowUpDown size={14} className="text-accent-gold" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-[9px] uppercase tracking-widest focus:outline-none cursor-pointer"
              >
                <option value="date" className="bg-black">Date</option>
                <option value="type" className="bg-black">Type</option>
              </select>
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredAndSortedReels.map((video, index) => (
              <motion.div
                key={video.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden glass cursor-pointer flex flex-col hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all duration-500"
                onClick={() => setSelectedVideo(video.url)}
              >
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/social${video.id}/400/711`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full border border-accent-gold/50 flex items-center justify-center text-accent-gold bg-black/40 backdrop-blur-sm">
                      <Play fill="currentColor" size={18} />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-[8px] uppercase tracking-widest bg-accent-gold text-black px-2 py-0.5 font-bold rounded-sm shadow-lg">
                      {video.type}
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white/5 backdrop-blur-sm border-t border-white/10">
                  <h3 className="text-sm font-bold text-accent-cream group-hover:text-accent-gold transition-colors line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-[10px] text-accent-beige/40 mt-1 font-mono">
                    {new Date(video.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Player */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-lg aspect-[9/16] glass overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-accent-gold transition-colors"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={20} />
              </button>
              
              <iframe
                src={`${selectedVideo.split('?')[0]}${selectedVideo.split('?')[0].endsWith('/') ? '' : '/'}embed/`}
                className="w-full h-full border-none"
                allowFullScreen
                title="Instagram Reel"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <a 
                  href={selectedVideo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs uppercase tracking-widest text-accent-gold bg-black/60 px-4 py-2 rounded-full hover:bg-accent-gold hover:text-black transition-all"
                >
                  <span>Open in Instagram</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SocialProjects;
