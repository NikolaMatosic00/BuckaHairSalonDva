'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', label: 'O nama' },
    { href: '#team', label: 'Tim' },
    { href: '#gallery', label: 'Galerija' },
    { href: '#products', label: 'Proizvodi' },
    { href: '#pricing', label: 'Cenovnik' },
    { href: '#reviews', label: 'Recenzije' },
    // { href: '#instagram', label: 'Instagram' },
    { href: '#contact', label: 'Kontakt' },
    { href: '#map', label: 'Mapa' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex fixed top-0 left-0 h-full w-16 bg-black z-[1000] flex-col items-center py-6 transition-all duration-300 ease-in-out hover:w-64 hover:bg-white group shadow-lg sidebar">
        <div className="mb-8 relative">
          <Link href="#hero">
            <Image
              src="/logo/logo192x192white.png" // Bela logo kada je collapsed
              alt="Salon Lepote Bucka"
              width={40}
              height={40}
              className="group-hover:hidden" // Sakrij belu logo kada je hoverovano
            />
            <Image
              src="/logo/logo192x192.png" // Crna logo kada je otvoreno
              alt="Salon Lepote Bucka"
              width={40}
              height={40}
              className="hidden group-hover:block" // Prikazuj crnu logo samo kada je hoverovano
            />
          </Link>
          {/* Tekst ">>" vidljiv samo kada nije hoverovano */}
<span
  className="absolute -right-9 top-1/2 transform -translate-y-1/2 text-black text-lg font-bold arrow animate-pulse"
  aria-hidden="true"
>
  &gt;&gt;
</span>
        </div>
        <ul className="flex flex-col space-y-4 text-white group-hover:text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {navLinks.map((link) => (
            <li key={link.href} className="px-4">
              <Link href={link.href} className="text-white group-hover:text-black hover:text-gray-300 group-hover:hover:text-gray-600 text-lg">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-black z-[1000] flex items-center justify-between px-4 py-3">
        <Link href="#hero">
          <Image
            src="/logo/logo192x192white.png"
            alt="Salon Lepote Bucka"
            width={40}
            height={40}
          />
        </Link>
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black z-[900] flex flex-col items-center justify-center transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="flex flex-col space-y-8 text-white text-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white hover:text-gray-300 text-2xl"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}