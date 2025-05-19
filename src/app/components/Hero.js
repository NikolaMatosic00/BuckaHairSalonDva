// src/app/components/Hero.js
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[80vh] flex items-center justify-center">
      <Image
        src="/logo/logo192x192.png"
        alt="Salon Lepote Bucka"
        fill
        style={{ objectFit: 'contain' }}
        className="absolute inset-0 opacity-50 animate-on-scroll"
      />
      <div className="relative text-center text-salon-white">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 drop-shadow-md animate-on-scroll">
          Salon Lepote Bucka
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-6 drop-shadow-md animate-on-scroll">
          Istaknite svoju lepotu uz našu profesionalnu negu. Vaša kosa zaslužuje najbolje.
        </p>
        <a
          href="#pricing"
          className="bg-salon-purple text-salon-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all hover:scale-105 hover:shadow-lg animate-on-scroll"
        >
          Pogledajte usluge
        </a>
      </div>
    </section>
  );
}