import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, ExternalLink, Filter, ArrowUpDown } from 'lucide-react';
import { VIDEO_EDITING_REELS } from '../constants';

const VideoPortfolio = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const filteredAndSortedReels = useMemo(() => {
    let result = [...VIDEO_EDITING_REELS];
    
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

  const categories = ['all', ...new Set(VIDEO_EDITING_REELS.map(r => r.type))];

  return (
    <section id="work" className="py-24 bg-dark-charcoal/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent-gold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Filmmaking & Video Editing
          </motion.h2>

          {/* Controls */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-12">
            <div className="flex items-center space-x-4 glass px-4 py-2">
              <Filter size={16} className="text-accent-gold" />
              <div className="flex space-x-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`text-[10px] uppercase tracking-widest px-3 py-1 transition-all ${
                      filter === cat ? 'bg-accent-gold text-black' : 'hover:text-accent-gold'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4 glass px-4 py-2">
              <ArrowUpDown size={16} className="text-accent-gold" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent text-[10px] uppercase tracking-widest focus:outline-none cursor-pointer"
              >
                <option value="date" className="bg-black">Sort by Date</option>
                <option value="type" className="bg-black">Sort by Type</option>
              </select>
            </div>
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
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
                className="group relative overflow-hidden glass cursor-pointer flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500"
                onClick={() => setSelectedVideo(video.url)}
              >
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img
                    src={`https://picsum.photos/seed/${video.id}video/400/711`}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 rounded-full border border-accent-gold/50 flex items-center justify-center text-accent-gold bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <Play fill="currentColor" size={24} />
                    </motion.div>
                  </div>
                </div>

                <div className="p-6 bg-white/5 backdrop-blur-md border-t border-white/10">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent-gold font-bold px-2 py-1 bg-accent-gold/10 rounded">
                      {video.type}
                    </span>
                    <span className="text-[10px] text-accent-beige/40 font-mono">
                      {new Date(video.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-accent-cream group-hover:text-accent-gold transition-colors line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-accent-beige/50 mt-2 font-serif italic">View on Instagram</p>
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

export default VideoPortfolio;
