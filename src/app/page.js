// app/page.js
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
    console.log('Found elements for animation:', elements.length, Array.from(elements).map(el => el.id || el.tagName));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = parseInt(entry.target.dataset.animateDelay || 0);
            console.log(`Animating element with delay ${delay}ms:`, entry.target.id || entry.target.tagName);
            setTimeout(() => {
              entry.target.classList.add('visible');
              entry.target.style.willChange = 'auto';
              console.log('Applied visible to:', entry.target.id || entry.target.tagName);
              if (!entry.target.id) {
                observer.unobserve(entry.target);
              }
            }, delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    elements.forEach((element) => {
      if (element) {
        element.style.willChange = 'opacity, transform';
        observer.observe(element);
        if (element.id === 'gallery') {
          console.log('Gallery section height:', element.getBoundingClientRect().height);
        }
      }
    });

    // Provera slika u Gallery
    const images = document.querySelectorAll('section#gallery img');
    console.log('Found images in gallery:', images.length);
    images.forEach((img, i) => {
      if (img.complete) {
        console.log(`Image ${i + 1} already loaded`);
      } else {
        img.addEventListener('load', () => console.log(`Image ${i + 1} loaded`));
        img.addEventListener('error', () => console.log(`Image ${i + 1} failed to load`));
      }
    });

    return () => {
      elements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-salon-white flex-col">
      <Navbar />
      <div className="flex-1 md:ml-16">
        <Hero />
        <About />
        <Team />
        <Gallery />
        <Products />
        <Pricing />
        <Reviews />
        {/* <Instagram /> */}
        <Contact />
        <Map />
        <Footer />
      </div>
    </div>
  );
}