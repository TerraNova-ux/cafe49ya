import React from 'react';
import ConceptBanner from './components/ConceptBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SignatureFavourites from './components/SignatureFavourites';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import GallerySection from './components/GallerySection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="cafe49-app">
      <ConceptBanner />
      <Navbar />
      <main id="main-content">
        <Hero />
        <SignatureFavourites />
        <MenuSection />
        <AboutSection />
        <ExperienceSection />
        <GallerySection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
