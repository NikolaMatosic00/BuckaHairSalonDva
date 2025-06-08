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
              // Postepeno pojavljivanje sa zakašnjenjem na osnovu indeksa
              item.classList.add('animate-in');
              item.style.animationDelay = `${index * 0.15}s`; // 150ms zakašnjenje za svaku sliku
            });
            observer.unobserve(entry.target); // Prestani posmatrati nakon prve animacije
          }
        });
      },
      {
        threshold: 0.2, // Pokreće se kada je 20% sekcije vidljivo
        rootMargin: '50px' // Dodatni prostor za ranije pokretanje
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
    <section id="gallery" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 bg-salon-white" ref={galleryRef}>
      <div className="gallery-wrapper">
        {/* Prvi red */}
        <div className="gallery-row">
          <div className="gallery-item" style={{ flexBasis: '38.25%' }}>
            <Image
              src="/haircuts/haircut07.jpg"
              alt="Frizura 7"
              layout="responsive"
              width={492}
              height={186}
              className="block"
            />
          </div>
          <div className="gallery-item" style={{ flexBasis: '27.4%' }}>
            <Image
              src="/haircuts/haircut131.jpg"
              alt="Frizura 131"
              layout="responsive"
              width={353}
              height={186}
              className="block"
            />
          </div>
          <div className="gallery-item" style={{ flexBasis: '27.4%' }}>
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
        
        {/* Drugi red */}
        <div className="gallery-row">
          <div className="gallery-item" style={{ flexBasis: '25%' }}>
            <Image
              src="/haircuts/haircut02.jpg"
              alt="Frizura 2"
              layout="responsive"
              width={320}
              height={112}
              className="block"
            />
          </div>
          <div className="gallery-item" style={{ flexBasis: '22.3%' }}>
            <Image
              src="/haircuts/haircut08.jpg"
              alt="Frizura 8"
              layout="responsive"
              width={286}
              height={112}
              className="block"
            />
          </div>
          <div className="gallery-item" style={{ flexBasis: '21.7%' }}>
            <Image
              src="/haircuts/haircut161.jpg"
              alt="Frizura 161"
              layout="responsive"
              width={278}
              height={119}
              className="block"
            />
          </div>
          <div className="gallery-item" style={{ flexBasis: '21.5%' }}>
            <Image
              src="/haircuts/haircut04.jpg"
              alt="Frizura 4"
              layout="responsive"
              width={276}
              height={113}
              className="block"
            />
          </div>
        </div>
      </div>

      {/* CSS za responsivnost i animaciju */}
      <style jsx>{`
        .gallery-wrapper {
          width: 100%;
          max-width: 1281px;
          margin: 0 auto;
        }
        .gallery-row {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          flex-wrap: nowrap;
        }
        .gallery-row + .gallery-row {
          margin-top: 36px; /* Nadoknađuje mt-9 (9 * 4px = 36px prema Tailwind skali) */
        }
        .gallery-item {
          flex: 0 0 auto;
          opacity: 0; /* Početno stanje - slike su nevidljive */
          transform: translateY(20px); /* Početno pomjeranje nadole */
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .gallery-item.animate-in {
          opacity: 1; /* Vidljive kada se pokrene animacija */
          transform: translateY(0); /* Vraća se na normalnu poziciju */
        }
        @media (max-width: 1281px) {
          .gallery-row {
            gap: calc(7px * (100vw / 1281)); /* Smanjen bazni razmak na 7px */
          }
          .gallery-row + .gallery-row {
            margin-top: 15px !important; /* Fiksni manji razmak između redova na mobilnoj */
          }
          .gallery-item {
            flex-basis: calc(var(--item-basis) * (100vw / 1281));
          }
        }
        /* Inline stilovi za desktop */
        .gallery-row:nth-child(1) .gallery-item:nth-child(1) { --item-basis: 492px; }
        .gallery-row:nth-child(1) .gallery-item:nth-child(2) { --item-basis: 353px; }
        .gallery-row:nth-child(1) .gallery-item:nth-child(3) { --item-basis: 352px; }
        .gallery-row:nth-child(2) .gallery-item:nth-child(1) { --item-basis: 320px; }
        .gallery-row:nth-child(2) .gallery-item:nth-child(2) { --item-basis: 286px; }
        .gallery-row:nth-child(2) .gallery-item:nth-child(3) { --item-basis: 278px; }
        .gallery-row:nth-child(2) .gallery-item:nth-child(4) { --item-basis: 276px; }
      `}</style>
    </section>
  );
}