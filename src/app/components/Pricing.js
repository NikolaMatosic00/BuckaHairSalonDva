// src/app/components/Pricing.js
import Image from 'next/image';

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 bg-salon-light">
      <h2 className="text-3xl sm:text-4xl font-bold text-salon-purple text-center mb-8 animate-on-scroll">
        Cenovnik
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 max-w-7xl mx-auto">
        <Image
          src="/pricing1.jpg" // Zameni sa stvarnom slikom
          alt="Cenovnik 1"
          width={500}
          height={500}
          className="rounded-lg w-full h-auto animate-on-scroll"
        />
        <Image
          src="/pricing2.jpg" // Zameni sa stvarnom slikom
          alt="Cenovnik 2"
          width={500}
          height={500}
          className="rounded-lg w-full h-auto animate-on-scroll"
        />
      </div>
    </section>
  );
}