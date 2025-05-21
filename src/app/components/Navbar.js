'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const navLinks = [
    { href: '#about', label: 'O nama' },
    { href: '#team', label: 'Tim' },
    { href: '#gallery', label: 'Galerija' },
    { href: '#products', label: 'Proizvodi' },
    { href: '#pricing', label: 'Cenovnik' },
    { href: '#reviews', label: 'Recenzije' },
    { href: '#contact', label: 'Kontakt' },
  ];

  return (
    <nav className="fixed top-0 left-0 h-full w-16 bg-black z-50 flex flex-col items-center py-6 transition-all duration-300 ease-in-out hover:w-64 group shadow-md">
      <div className="mb-8">
        <Link href="#hero">
          <Image
            src="/logo/logo192x192.png"
            alt="Salon Lepote Bucka"
            width={40}
            height={40}
          />
        </Link>
      </div>
      <ul className="flex flex-col space-y-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {navLinks.map((link) => (
          <li key={link.href} className="px-4">
            <Link href={link.href} className="text-white hover:text-gray-300 text-lg">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}