// src/app/components/Products.js
import Image from 'next/image';

export default function Products() {
  return (
    <section id="products" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 bg-salon-light">
      <h2 className="text-3xl sm:text-4xl font-bold text-salon-purple text-center mb-8 animate-on-scroll">
        Proizvodi
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-7xl mx-auto">
        <div className="bg-salon-white p-4 sm:p-6 rounded-lg shadow-md animate-on-scroll">
          <Image
            src="/products1.jpg" // Zameni sa stvarnom slikom
            alt="Proizvod 1"
            width={300}
            height={300}
            className="rounded-lg mb-4 w-full h-auto"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-salon-purple">Šampon za volumen</h3>
          <p className="text-sm sm:text-base text-salon-black font-normal">Pruža kosi punoću i sjaj.</p>
        </div>
        <div className="bg-salon-white p-4 sm:p-6 rounded-lg shadow-md animate-on-scroll">
          <Image
            src="/products2.jpg" // Zameni sa stvarnom slikom
            alt="Proizvod 2"
            width={300}
            height={300}
            className="rounded-lg mb-4 w-full h-auto"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-salon-purple">Maska za hidrataciju</h3>
          <p className="text-sm sm:text-base text-salon-black font-normal">Obnavlja suvu i oštećenu kosu.</p>
        </div>
        <div className="bg-salon-white p-4 sm:p-6 rounded-lg shadow-md animate-on-scroll">
          <Image
            src="/products3.jpg" // Zameni sa stvarnom slikom
            alt="Proizvod 3"
            width={300}
            height={300}
            className="rounded-lg mb-4 w-full h-auto"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-salon-purple">Ulje za sjaj</h3>
          <p className="text-sm sm:text-base text-salon-black font-normal">Daje kosi prirodan sjaj.</p>
        </div>
      </div>
    </section>
  );
}