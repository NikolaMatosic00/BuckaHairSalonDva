'use client';
import Link from 'next/link';
import { ScissorsIcon } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[80vh] flex items-center justify-center bg-gradient-to-b from-white to-[#f9fafc] ml-16"
    >
      <div className="relative text-center text-gray-900">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4">
          Salon Lepote Bucka
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-6 drop-shadow-md">
          Istaknite svoju lepotu uz našu profesionalnu negu. Vaša kosa zaslužuje najbolje.
        </p>
        <Link
          href="#pricing"
          className="group inline-flex items-center justify-center bg-[#09001e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all"
        >
          <span className="inline-flex items-center justify-center">
            <ScissorsIcon
              className="w-0 h-5 opacity-0 group-hover:w-5 group-hover:opacity-100 mr-2 transition-all duration-400"
              aria-hidden="true"
            />
            <span>Pogledajte usluge</span>
          </span>
        </Link>
      </div>
    </section>
  );
}