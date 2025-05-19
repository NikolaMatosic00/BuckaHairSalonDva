// src/app/components/Navbar.js
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-salon-white/80 backdrop-blur-md z-50 py-4 px-2 sm:px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Image
          src="/logo/logo192x192.png"
          alt="Salon Lepote Bucka"
          width={40}
          height={40}
          className="animate-on-scroll"
        />
        <ul className="flex space-x-2 sm:space-x-4 text-sm sm:text-base">
          <li><Link href="#about" className="text-salon-purple font-medium hover:underline animate-on-scroll">O nama</Link></li>
          <li><Link href="#team" className="text-salon-purple font-medium hover:underline animate-on-scroll">Tim</Link></li>
          <li><Link href="#gallery" className="text-salon-purple font-medium hover:underline animate-on-scroll">Galerija</Link></li>
          <li><Link href="#products" className="text-salon-purple font-medium hover:underline animate-on-scroll">Proizvodi</Link></li>
          <li><Link href="#pricing" className="text-salon-purple font-medium hover:underline animate-on-scroll">Cenovnik</Link></li>
          <li><Link href="#reviews" className="text-salon-purple font-medium hover:underline animate-on-scroll">Recenzije</Link></li>
          <li><Link href="#contact" className="text-salon-purple font-medium hover:underline animate-on-scroll">Kontakt</Link></li>
        </ul>
      </div>
    </nav>
  );
}