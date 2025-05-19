// src/app/components/Footer.js
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-salon-purple text-salon-white py-8 px-2 sm:px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <Image
          src="/logo/logo192x192.png"
          alt="Salon Lepote Bucka"
          width={40}
          height={40}
          className="mx-auto mb-4 animate-on-scroll"
        />
        <p className="text-sm sm:text-base font-normal mb-4 animate-on-scroll">
          Salon Lepote Bucka &copy; {new Date().getFullYear()}. Sva prava zadržana.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://instagram.com/salonlepotabucka" className="text-salon-white hover:underline animate-on-scroll">Instagram</a>
          <a href="https://facebook.com/salonlepotabucka" className="text-salon-white hover:underline animate-on-scroll">Facebook</a>
        </div>
      </div>
    </footer>
  );
}