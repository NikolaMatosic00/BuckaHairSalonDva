// src/app/components/Gallery.js
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const haircuts = Array.from({ length: 29 }, (_, i) => `/haircuts/haircut${i + 1}.jpg`);
  // Dupliramo slike za beskonačni efekat
  const images = [...haircuts, ...haircuts];
  const scrollRef = useRef(null);
  const pos = useRef(0); // koristi seRef za poziciju
  const [speed] = useState(1); // px po frame-u
  const [direction] = useState(1); // stalno ide desno

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    let frame;
    let lastTimestamp = performance.now();
    const totalWidth = container.scrollWidth / 2;

    const animate = (timestamp) => {
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      pos.current += speed * direction * (delta / 16);
      if (pos.current >= totalWidth) pos.current -= totalWidth;
      if (pos.current < 0) pos.current += totalWidth;
      container.scrollLeft = pos.current;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [speed, direction]);

  // Strelice: klik pomera za jednu sliku
  const scrollByOne = (dir) => {
    const container = scrollRef.current;
    if (!container) return;
    const imgDiv = container.querySelector('div');
    if (!imgDiv) return;
    const imgWidth = imgDiv.getBoundingClientRect().width;
    const totalWidth = container.scrollWidth / 2;
    let newPos = pos.current + dir * imgWidth;
    if (newPos >= totalWidth) newPos -= totalWidth;
    if (newPos < 0) newPos += totalWidth;
    pos.current = newPos; // ažuriraj i poziciju
    container.scrollTo({ left: newPos, behavior: 'smooth' });
  };

  // Generisani blur placeholder (siva boja, može se prilagoditi salon-purple: #4c3f75)
  const blurPlaceholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8//5zPQAJJANo0jB+xAAAAABJRU5ErkJggg==';

  return (
    <section
      id="gallery"
      className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 bg-salon-white min-h-[50vh]"
    >
      <h2
        className="text-5xl sm:text-7xl md:text-8xl font-bold text-salon-purple mb-8 animate-on-scroll great-vibes text-center"
        data-animate-type="heading"
      >
        Naša Galerija
      </h2>
      <div className="relative">
        {/* Strelica levo - sakrivena na mobilnim */}
        <button
          onClick={() => scrollByOne(-1)}
          className="flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-transparent hover:bg-transparent text-white rounded-xl transition items-center justify-center w-10 h-10 md:w-14 md:h-14"
          aria-label="Levo"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-2 md:space-x-4 py-4 select-none scrollbar-hide touch-pan-x snap-x snap-mandatory"
          style={{ width: '100%' }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className={`flex-shrink-0 flex items-center justify-center transition-all duration-500 ${
                index % 2 === 0 ? 'mt-20 md:mt-32' : 'mb-20 md:mb-32'
              } rounded-xl overflow-hidden w-[280px] h-[320px] md:w-[480px] md:h-[440px]`}
            >
              <Image
                src={src}
                alt={`Primer frizure ${index % haircuts.length + 1}`}
                width={600}
                height={550}
                className="w-full h-full object-contain rounded-xl"
                loading="eager"
                priority={true}
                sizes="(max-width: 768px) 280px, 480px"
                placeholder="blur"
                blurDataURL={blurPlaceholder}
              />
            </div>
          ))}
        </div>
        {/* Strelica desno - sakrivena na mobilnim */}
        <button
          onClick={() => scrollByOne(1)}
          className="flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-transparent hover:bg-transparent text-white rounded-xl transition items-center justify-center w-10 h-10 md:w-14 md:h-14"
          aria-label="Desno"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
    </section>
  );
}