// src/app/page.js
'use client';

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Products from './components/Products';
import Pricing from './components/Pricing';
import Reviews from './components/Reviews';
import Instagram from './components/Instagram';
import Contact from './components/Contact';
import Map from './components/Map';
import Footer from './components/Footer';

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    console.log('Found elements for animation:', elements.length);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            console.log(`Animating element ${index}:`, entry.target);
            setTimeout(() => {
              entry.target.classList.add('visible');
              entry.target.style.willChange = 'auto';
              console.log('Applied visible to:', entry.target);
            }, index * 200); // 0.2s stagger
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    elements.forEach((element) => {
      if (element) {
        element.style.willChange = 'opacity, transform';
        observer.observe(element);
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="bg-salon-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Gallery />
      <Products />
      <Pricing />
      <Reviews />
      <Instagram />
      <Contact />
      <Map />
      <Footer />
    </div>
  );
}