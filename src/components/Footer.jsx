import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-accent-beige/40 text-sm tracking-widest uppercase">
          © {new Date().getFullYear()} Karan Malkar. All Rights Reserved.
        </p>
        <div className="flex space-x-8">
          {['Privacy Policy', 'Terms of Service'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-xs uppercase tracking-widest text-accent-beige/40 hover:text-accent-gold transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};


export default Footer;
