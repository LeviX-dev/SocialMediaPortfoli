import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VideoPortfolio from './components/VideoPortfolio';
import SocialProjects from './components/SocialProjects';
import WebProjects from './components/WebProjects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Cinematic Grain Overlay */}
      <div className="cinematic-grain" />
      
      {/* Navigation */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Video Editing Portfolio */}
        <VideoPortfolio />

        {/* Social Media Projects */}
        <SocialProjects />

        {/* Web Development Projects */}
        <WebProjects />

        {/* Services Section */}
        <Services />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
