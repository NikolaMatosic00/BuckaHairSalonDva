// src/app/components/Gallery.js
import Image from 'next/image';

export default function Gallery() {
  const haircuts = Array.from({ length: 29 }, (_, i) => `/haircuts/haircut${i + 1}.jpg`);

  // Generisani blur placeholder (siva boja, može se prilagoditi salon-purple: #4c3f75)
  const blurPlaceholder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8//5zPQAJJANo0jB+xAAAAABJRU5ErkJggg==';

  return (
    <section
      id="gallery"
      className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 bg-salon-white min-h-[50vh] animate-on-scroll"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-salon-purple text-center mb-8">
        Galerija
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {haircuts.map((src, index) => (
          <Image
            key={index}
            src="/"
            alt={`Primer frizure ${index + 1}`}
            width={300}
            height={300}
            className="rounded-lg w-full h-auto"
            loading="eager" // Učitavanje svih slika odjednom
            priority={true} // Prioritet za sve slike
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Eksplicitne dimenzije
            placeholder="blur" // Blur placeholder
            blurDataURL={blurPlaceholder} // Generisani blur
            onLoadingComplete={() => console.log(`Image ${src} loaded`)} // Debug
            onError={() => console.log(`Image ${src} failed to load`)} // Debug grešaka
          />
        ))}
      </div>
    </section>
  );
}