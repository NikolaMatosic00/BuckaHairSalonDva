'use client'
import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Gallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.gallery-item');
            items.forEach((item, index) => {
              item.classList.add('animate-in');
              item.style.animationDelay = `${index * 0.15}s`;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '50px'
      }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  return (
    <section id="gallery" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 bg-salon-white overflow-hidden" ref={galleryRef}>
      <div className="gallery-wrapper">
        {/* Prvi red sa blur efektom na vrhu */}
        <div className="gallery-row first-row">
          <div className="gallery-item" style={{ flexBasis: '41.35%' }}>
            <Image
              src="/haircuts/haircut161.jpg"
              alt="Frizura 121"
              layout="responsive"
              width={595}
              height={152}
              className="block"
            />
          </div>
          <div className="gallery-item" style={{ flexBasis: '41.05%' }}>
            <Image
              src="/haircuts/haircut04.jpg"
              alt="Frizura 4"
              layout="responsive"
              width={591}
              height={144}
              className="block"
            />
          </div>
        </div>
        
        {/* Drugi red (tri slike, bez blur-a) */}
        <div className="gallery-row">
          <div className="gallery-item" style={{ flexBasis: '33.4%' }}>
            <Image
              src="/haircuts/haircut07.jpg"
              alt="Frizura 7"
              layout="responsive"
              width={492}
              height={186}
              className="block"
            />
          </div>
          <div className="gallery-item" style={{ flexBasis: '23.91%' }}>
            <Image
              src="/haircuts/haircut131.jpg"
              alt="Frizura 131"
              layout="responsive"
              width={353}
              height={186}
              className="block"
            />
          </div>
          <div className="gallery-item" style={{ flexBasis: '23.86%' }}>
            <Image
              src="/haircuts/haircut05.jpg"
              alt="Frizura 5"
              layout="responsive"
              width={353}
              height={187}
              className="block"
            />
          </div>
        </div>
        
        {/* Treći red sa blur efektom na dnu */}
        <div className="gallery-row last-row">
          <div className="gallery-item" style={{ flexBasis: '43.203%' }}>
            <Image
              src="/haircuts/haircut02.jpg"
              alt="Frizura 2"
              layout="responsive"
              width={752}
              height={263}
              className="block"
            />
          </div>
          <div className="gallery-item" style={{ flexBasis: '38.70%' }}>
            <Image
              src="/haircuts/haircut08.jpg"
              alt="Frizura 8"
              layout="responsive"
              width={560}
              height={219}
              className="block"
            />
          </div>
        </div>
      </div>

      {/* CSS za responsivnost, animaciju i blur efekte */}
      <style jsx>{`
        .gallery-wrapper {
          width: 100%;
          max-width: 1281px;
          margin: 0 auto;
        }
        .gallery-row {
          display: flex;
          gap: 10px;
          flex-wrap: nowrap;
          justify-content: flex-end;
          transform: translateX(-105px);
        }
        .gallery-row + .gallery-row {
          margin-top: 10px;
        }
        
        /* Manji razmak samo za prvi red */
        .gallery-row:first-child {
          gap: 5px;
        }
        
        .gallery-item {
          flex: 0 0 auto;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
          position: relative;
        }
        .gallery-item.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Blur efekti - samo za prvi i poslednji red */
        .first-row .gallery-item::before,
        .last-row .gallery-item::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          height: 15%;
          pointer-events: none;
          backdrop-filter: blur(1.5px);
          -webkit-backdrop-filter: blur(1.5px);
        }
        
        .first-row .gallery-item::before {
          top: 0;
          background: linear-gradient(to bottom, 
            rgba(255,255,255,0.4) 0%, 
            transparent 100%);
        }
        
        .last-row .gallery-item::after {
          bottom: 0;
          background: linear-gradient(to top, 
            rgba(255,255,255,0.4) 0%, 
            transparent 100%);
        }
        
        @media (max-width: 1281px) {
          .gallery-row {
            gap: calc(10px * (100vw / 1281));
            transform: translateX(calc(-105px * (100vw / 1281)));
          }
          
          /* Proporcionalno skaliranje manjeg razmaka za prvi red */
          .gallery-row:first-child {
            gap: calc(5px * (100vw / 1281));
          }
          
          .gallery-row + .gallery-row {
            margin-top: calc(10px * (100vw / 1281));
          }
          .gallery-item {
            flex-basis: calc(var(--item-basis) * (100vw / 1281)) !important;
          }
        }
        
        /* Mobilna verzija - zadržava iste proporcije */
        @media (max-width: 768px) {
          .gallery-row {
            gap: calc(10px * 0.6);
            transform: translateX(calc(-105px * 0.6 + 100px)); /* Povećano na +100px */
          }
          
          .gallery-row:first-child {
            gap: calc(5px * 0.6);
          }
          
          .gallery-row + .gallery-row {
            margin-top: 10px;
          }
          
          .gallery-item {
            flex-basis: calc(var(--item-basis) * 0.6) !important;
          }
          
          .gallery-wrapper {
            max-width: calc(1281px * 0.6);
          }
        }
        
        @media (max-width: 480px) {
          .gallery-row {
            gap: calc(10px * 0.4);
            transform: translateX(calc(-105px * 0.4 + 70px)); /* Povećano na +70px */
          }
          
          .gallery-row:first-child {
            gap: calc(5px * 0.4);
          }
          
          .gallery-row + .gallery-row {
            margin-top: 10px;
          }
          
          .gallery-item {
            flex-basis: calc(var(--item-basis) * 0.4) !important;
          }
          
          .gallery-wrapper {
            max-width: calc(1281px * 0.4);
          }
        }
        
        /* Inline stilovi za desktop - prilagođene vrednosti */
        .gallery-row:nth-child(1) .gallery-item:nth-child(1) { --item-basis: 456px; }
        .gallery-row:nth-child(1) .gallery-item:nth-child(2) { --item-basis: 410px; }
        .gallery-row:nth-child(2) .gallery-item:nth-child(1) { --item-basis: 492px; }
        .gallery-row:nth-child(2) .gallery-item:nth-child(2) { --item-basis: 353px; }
        .gallery-row:nth-child(2) .gallery-item:nth-child(3) { --item-basis: 352px; }
        .gallery-row:nth-child(3) .gallery-item:nth-child(1) { --item-basis: 752px; }
        .gallery-row:nth-child(3) .gallery-item:nth-child(2) { --item-basis: 570px; }
      `}</style>
    </section>
  );
}