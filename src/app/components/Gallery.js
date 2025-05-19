// src/app/components/Gallery.js
import Image from 'next/image';

export default function Gallery() {
  const haircuts = Array.from({ length: 29 }, (_, i) => `/haircuts/haircut${i + 1}.jpg`);

  return (
    <section id="gallery" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 bg-salon-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-salon-purple text-center mb-8 animate-on-scroll">
        Galerija
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {haircuts.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Primer frizure ${index + 1}`}
            width={300}
            height={300}
            className="rounded-lg w-full h-auto animate-on-scroll"
          />
        ))}
      </div>
    </section>
  );
}