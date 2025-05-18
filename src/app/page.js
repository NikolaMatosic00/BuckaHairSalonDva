// src/app/page.js
'use client'; // Omogućava klijentski JavaScript za Intersection Observer

import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = Array.from(sections).indexOf(entry.target);
            entry.target.classList.add(
              sectionIndex % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'
            );
            observer.unobserve(entry.target); // Animira samo jednom
          }
        });
      },
      { threshold: 0.1 } // Aktivira kada je 10% sekcije vidljivo
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="bg-salon-white min-h-screen">
      {/* Hero Sekcija */}
      <section id="hero" className="relative h-[80vh] flex items-center justify-center">
        <Image
          src="/hero-image.jpg" // Zameni sa stvarnom slikom
          alt="Enterijer salona"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute inset-0"
        />
        <div className="relative text-center text-salon-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-md">
            Salon Lepote Bucka
          </h1>
          <p className="text-xl md:text-2xl mb-6 drop-shadow-md">
            Istaknite svoju lepotu uz našu profesionalnu negu. Vaša kosa zaslužuje najbolje.
          </p>
          <a
            href="#pricing"
            className="bg-salon-purple text-salon-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
          >
            Pogledajte usluge
          </a>
        </div>
      </section>

      {/* O nama Sekcija */}
      <section id="about" className="py-16 px-4 md:px-16 text-center bg-salon-light">
        <h2 className="text-4xl font-bold text-salon-purple mb-6">O nama</h2>
        <p className="text-lg text-salon-black max-w-3xl mx-auto">
          Sa višedecenijskim iskustvom, naš tim posvećeno radi na tome da postigne najbolje rezultate i ist LIMITE klijenata naša su najveća motivacija.
        </p>
      </section>

      {/* Tim Sekcija */}
      <section id="team" className="py-16 px-4 md:px-16 bg-salon-white">
        <h2 className="text-4xl font-bold text-salon-purple text-center mb-8">Naš tim</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-salon-white p-6 rounded-lg shadow-md">
            <Image
              src="/workers/dragana_opsenica.jpg" // Zameni sa stvarnom slikom
              alt="Dragana Opsenica"
              width={300}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-salon-purple">Dragana Opsenica</h3>
            <p className="text-salon-black">Vlasnica</p>
          </div>
          <div className="bg-salon-white p-6 rounded-lg shadow-md">
            <Image
              src="/workers/milica_jovanovic.jpg" // Zameni sa stvarnom slikom
              alt="Milica Jovanović"
              width={300}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-salon-purple">Milica Jovanović</h3>
            <p className="text-salon-black">Radnica</p>
          </div>
          <div className="bg-salon-white p-6 rounded-lg shadow-md">
            <Image
              src="/workers/slavica_bavarcic.jpg" // Zameni sa stvarnom slikom
              alt="Slavica Bavarčić"
              width={300}
              height={300}
              className="rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-salon-purple">Slavica Bavarčić</h3>
            <p className="text-salon-black">Radnica</p>
          </div>
        </div>
      </section>

      {/* Cenovnik Sekcija */}
      <section id="pricing" className="py-16 px-4 md:px-16 bg-salon-light">
        <h2 className="text-4xl font-bold text-salon-purple text-center mb-8">Cenovnik</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <Image
            src="/pricing1.jpg" // Zameni sa stvarnom slikom
            alt="Cenovnik 1"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <Image
            src="/pricing2.jpg" // Zameni sa stvarnom slikom
            alt="Cenovnik 2"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Galerija Sekcija */}
      <section id="gallery" className="py-16 px-4 md:px-16 bg-salon-white">
        <h2 className="text-4xl font-bold text-salon-purple text-center mb-8">Galerija</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          <Image
            src="/gallery1.jpg" // Zameni sa stvarnom slikom
            alt="Primer frizure"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/gallery2.jpg" // Zameni sa stvarnom slikom
            alt="Primer frizure"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/gallery3.jpg" // Zameni sa stvarnom slikom
            alt="Primer frizure"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/gallery4.jpg" // Zameni sa stvarnom slikom
            alt="Primer frizure"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/gallery5.jpg" // Zameni sa stvarnom slikom
            alt="Primer frizure"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <Image
            src="/gallery6.jpg" // Zameni sa stvarnom slikom
            alt="Primer frizure"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* Recenzije Sekcija */}
      <section id="reviews" className="py-16 px-4 md:px-16 bg-salon-light">
        <h2 className="text-4xl font-bold text-salon-purple text-center mb-8">Recenzije klijenata</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-salon-white p-6 rounded-lg shadow-md">
            <p className="text-salon-black italic">
              "Neverovatno iskustvo! Dragana mi je napravila savršenu frizuru, a atmosfera je veoma prijatna."
            </p>
            <p className="text-salon-purple font-semibold mt-4">Milica K. ★★★★★</p>
          </div>
          <div className="bg-salon-white p-6 rounded-lg shadow-md">
            <p className="text-salon-black italic">
              "Najbolja boja koju sam ikada imala! Milica je prava umetnica. Toplo preporučujem!"
            </p>
            <p className="text-salon-purple font-semibold mt-4">Ivana S. ★★★★★</p>
          </div>
          <div className="bg-salon-white p-6 rounded-lg shadow-md">
            <p className="text-salon-black italic">
              "Slavica mi je transformisala izgled za venčanje. Ne mogu biti srećnija!"
            </p>
            <p className="text-salon-purple font-semibold mt-4">Tamara L. ★★★★★</p>
          </div>
        </div>
      </section>

      {/* Kontakt Sekcija */}
      <section id="contact" className="py-16 px-4 md:px-16 bg-salon-white">
        <h2 className="text-4xl font-bold text-salon-purple text-center mb-8">Kontaktirajte nas</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-salon-black mb-4">
            Telefon: <a href="tel:+38112345678" className="text-salon-purple">+381 12 345 678</a>
          </p>
          <p className="text-lg text-salon-black mb-4">
            Email: <a href="mailto:info@salonlepotabucka.com" className="text-salon-purple">info@salonlepotabucka.com</a>
          </p>
          <p className="text-lg text-salon-black mb-4">
            Pratite nas:{' '}
            <a href="https://instagram.com/salonlepotabucka" className="text-salon-purple mx-2">Instagram</a>
            <a href="https://facebook.com/salonlepotabucka" className="text-salon-purple mx-2">Facebook</a>
          </p>
        </div>
      </section>

      {/* Mapa Sekcija */}
      <section id="map" className="py-16 px-4 md:px-16 bg-salon-light">
        <h2 className="text-4xl font-bold text-salon-purple text-center mb-8">Pronađite nas</h2>
        <div className="max-w-7xl mx-auto">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.4186729876543!2d19.83475591556348!3d45.24327897909876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1061b0c2b2b1%3A0x5f5e2b8c1d0e1b2c!2s1300%20Kaplara%2012%2C%20Novi%20Sad%2C%20Serbia!5e0!3m2!1sen!2srs!4v1698765432100!5m2!1sen!2srs"
            width="100%"
            height="300"
            style={{
              border: 0,
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-salon-purple text-salon-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)] max-w-xs mx-auto mt-4"
          >
            Otvori u Google Maps
          </a>
        </div>
      </section>
    </div>
  );
}

