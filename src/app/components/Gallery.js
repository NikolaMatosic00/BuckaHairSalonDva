// src/app/components/Gallery.js
'use client'
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const haircuts = Array.from({ length: 29 }, (_, i) => `/haircuts/haircut${i + 1}.jpg`);
  // Dupliramo slike za beskonačni efekat
  const images = [...haircuts, ...haircuts];
  const scrollRef = useRef(null);
  const titleRef = useRef(null);
  const pos = useRef(0); // koristi seRef za poziciju
  const [speed] = useState(1); // px po frame-u
  const [direction] = useState(1); // stalno ide desno
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Sprečava hydration error
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Animacije učitavanja
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Animacija za naslov
  useEffect(() => {
    if (!isMounted || !titleRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;
    
    const container = scrollRef.current;
    if (!container) return;
    let frame;
    let lastTimestamp = Date.now(); // Koristimo Date.now() umesto performance.now()
    const totalWidth = container.scrollWidth / 2;

    const animate = () => {
      const now = Date.now();
      const delta = now - lastTimestamp;
      lastTimestamp = now;
      pos.current += speed * direction * (delta / 16);
      if (pos.current >= totalWidth) pos.current -= totalWidth;
      if (pos.current < 0) pos.current += totalWidth;
      container.scrollLeft = pos.current;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [speed, direction, isMounted]);

  // Strelice: klik pomera za jednu sliku
  const scrollByOne = (dir) => {
    if (!isMounted) return;
    
    const container = scrollRef.current;
    if (!container) return;
    const imgDiv = container.querySelector('div');
    if (!imgDiv) return;
    const imgWidth = imgDiv.getBoundingClientRect().width;
    const totalWidth = container.scrollWidth / 2;
    let newPos = pos.current + dir * imgWidth;
    if (newPos >= totalWidth) newPos -= totalWidth;
    if (newPos < 0) newPos += totalWidth;
    
    // Animacija ka novoj poziciji umesto instant skoka
    const startPos = pos.current;
    const distance = newPos - startPos;
    const duration = 800; // 800ms za glatku animaciju
    const startTime = Date.now();
    
    const smoothScroll = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease-out funkcija za prirodniju animaciju
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      const currentPos = startPos + (distance * easeOut);
      pos.current = currentPos;
      container.scrollLeft = currentPos;
      
      if (progress < 1) {
        requestAnimationFrame(smoothScroll);
      } else {
        // Osiguraj da je finalna pozicija tačna
        pos.current = newPos;
        container.scrollLeft = newPos;
      }
    };
    
    smoothScroll();
  };

  // Generisani blur placeholder (siva boja, može se prilagoditi salon-purple: #4c3f75)
  const blurPlaceholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8//5zPQAJJANo0jB+xAAAAABJRU5ErkJggg==';

  // Ne renderuj komponentu dok se ne mount-uje na klijentu
  if (!isMounted) {
    return (
      <section
        id="gallery"
        className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 bg-salon-white min-h-[50vh]"
      >
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold text-salon-purple mb-8 great-vibes text-center">
          Galerija usluge
        </h2>
        <div className="flex items-center justify-center">
          <div className="text-salon-purple">Učitava se...</div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="gallery"
      className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 bg-salon-white min-h-[50vh]"
    >
      <h2
        ref={titleRef}
        className="text-5xl sm:text-7xl md:text-8xl font-bold text-salon-purple mb-20 great-vibes text-center"
        style={{ 
          opacity: 0, 
          transform: 'translateY(30px)', 
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' 
        }}
      >
        Galerija i usluge
      </h2>
      
      {/* Sekcija sa tehnikama */}
      <div className="max-w-7xl mx-auto mb-12">
        {/* Prva sekcija - Color tehnike */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-8 mb-4">
          {/* Slika sa leve strane */}
          <div className={`flex-1 lg:order-1 transition-all duration-1200 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <Image
              src="/haircuts/haircut12.jpg"
              alt="Color tehnike"
              width={500}
              height={600}
              className="w-full h-[450px] lg:h-[550px] object-cover shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Tekst sa desne strane */}
          <div className={`flex-1 lg:order-2 px-4 lg:px-8 flex flex-col items-center transition-all duration-1200 ease-out delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <h3 className="text-3xl lg:text-4xl font-bold text-salon-black mb-6 text-center">
              COLOR TEHNIKE
            </h3>
            <div className="space-y-3 text-xl text-salon-black">
              {[
                '– Pramenovi u 2 boje',
                '– Pramenovi u 3 boje', 
                '– Balayage',
                '– Blažiranje',
                '– Farbanje izrastka'
              ].map((item, index) => (
                <p 
                  key={index}
                  className={`font-medium text-left transition-all duration-800 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{
                    transitionDelay: `${700 + index * 100}ms`
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        {/* Druga sekcija - Oblikovanje kose - obrnut redosled */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-8">
          {/* Tekst sa leve strane */}
          <div className={`flex-1 lg:order-1 px-4 lg:px-8 flex flex-col items-center transition-all duration-1200 ease-out delay-700 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            <h3 className="text-3xl lg:text-4xl font-bold text-salon-black mb-6 text-center">
              OBLIKOVANJE KOSE
            </h3>
            <div className="space-y-3 text-xl text-salon-black">
              {[
                '– Šišanje',
                '– Feniranje',
                '– Talasi', 
                '– Lokne',
                '– Svečane frizure'
              ].map((item, index) => (
                <p 
                  key={index}
                  className={`font-medium text-left transition-all duration-800 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{
                    transitionDelay: `${1200 + index * 100}ms`
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          
          {/* Slika sa desne strane */}
          <div className={`flex-1 lg:order-2 transition-all duration-1200 ease-out delay-900 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <Image
              src="/haircuts/haircut15.jpg"
              alt="Oblikovanje kose"
              width={500}
              height={600}
              className="w-full h-[450px] lg:h-[550px] object-cover shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
      
      {/* Carousel sekcija sa animacijom */}
      <div className={`relative transition-all duration-1000 ease-out delay-1100 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Strelica levo */}
        <button
          onClick={() => scrollByOne(-1)}
          className={`flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full transition-all duration-300 items-center justify-center w-10 h-10 md:w-12 md:h-12 hover:scale-110 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{
            transitionDelay: isVisible ? '1300ms' : '0ms'
          }}
          aria-label="Levo"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8641f4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        
        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex space-x-2 md:space-x-4 py-4 select-none touch-pan-x snap-x snap-mandatory overflow-hidden"
          style={{ width: '100%' }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className={`flex-shrink-0 flex items-center justify-center transition-all duration-500 ${
                index % 2 === 0 ? 'mt-20 md:mt-32' : 'mb-20 md:mb-32'
              } rounded-xl overflow-hidden w-[280px] h-[320px] md:w-[480px] md:h-[440px] hover:scale-105`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                transition: `opacity 600ms ease-out ${1400 + (index % 10) * 50}ms, transform 600ms ease-out ${1400 + (index % 10) * 50}ms`
              }}
            >
              <Image
                src={src}
                alt={`Primer frizure ${index % haircuts.length + 1}`}
                width={600}
                height={550}
                className="w-full h-full object-contain rounded-xl"
                loading="lazy"
                sizes="(max-width: 768px) 280px, 480px"
                placeholder="blur"
                blurDataURL={blurPlaceholder}
              />
            </div>
          ))}
        </div>
        
        {/* Strelica desno */}
        <button
          onClick={() => scrollByOne(1)}
          className={`flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full transition-all duration-300 items-center justify-center w-10 h-10 md:w-12 md:h-12 hover:scale-110 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{
            transitionDelay: isVisible ? '1300ms' : '0ms'
          }}
          aria-label="Desno"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8641f4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
    </section>
  );
}