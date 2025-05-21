'use client';
import Link from 'next/link';
import { ScissorsIcon } from 'lucide-react';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp, FaFacebook, FaViber } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-[#f9fafc]"
    >
      {/* SVG Backgrounds */}
      <div className="absolute inset-0 w-full h-full opacity-10 overflow-hidden">
        <Image
          src="/background-images/flower_1.svg"
          alt="Flower 1"
          width={512}
          height={512}
          className="absolute bottom-0 left-0 w-72 md:w-[20rem] lg:w-[28rem]"
          style={{ objectFit: 'contain', objectPosition: '0 100%', transform: 'translateY(8%)' }}
          aria-hidden="true"
        />
        <Image
          src="/background-images/butterfly_2.svg"
          alt="Butterfly 2"
          width={512}
          height={512}
          className="absolute top-0 right-0 w-72 md:w-[20rem] lg:w-[28rem] z-0"
          style={{ objectFit: 'contain', objectPosition: '100% 0' }}
          aria-hidden="true"
        />
      </div>

      {/* Main Content */}
      <div className="relative text-center pink-900 z-10">
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
              className="w-0 h-5 opacity-0 group-hover:w-5 group-hover:opacity-100 mr-2 transition-all duration-500"
              aria-hidden="true"
            />
            <span>Pogledajte usluge</span>
          </span>
        </Link>
      </div>

      {/* Social Media Links */}
      <div className="absolute bottom-6 flex space-x-4 z-10">
        <Link
          href="https://instagram.com/salon_lepote_bucka"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#09001e] p-2 rounded-full text-white hover:bg-[#E1306C] transition-colors"
          aria-label="Instagram"
        >
          <FaInstagram className="w-6 h-6" />
        </Link>
        <Link
          href="https://wa.me/+381691168623"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#09001e] p-2 rounded-full text-white hover:bg-[#25D366] transition-colors"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="w-6 h-6" />
        </Link>
        <Link
          href="https://www.facebook.com/salonbucka/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#09001e] p-2 rounded-full text-white hover:bg-[#1877F2] transition-colors"
          aria-label="Facebook"
        >
          <FaFacebook className="w-6 h-6" />
        </Link>
        <Link
          href="viber://chat?number=+381691168623"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#09001e] p-2 rounded-full text-white hover:bg-[#7360F2] transition-colors"
          aria-label="Viber"
        >
          <FaViber className="w-6 h-6" />
        </Link>
      </div>
    </section>
  );
}