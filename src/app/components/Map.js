// src/app/components/Map.js
export default function Map() {
  return (
    <section id="map" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 bg-salon-light">
      <h2 className="text-3xl sm:text-4xl font-bold text-salon-purple text-center mb-8 animate-on-scroll">
        Pronađite nas
      </h2>
      <div className="max-w-7xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.4186729876543!2d19.83475591556348!3d45.24327897909876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1061b0c2b2b1%3A0x5f5e2b8c1d0e1b2c!2s1300%20Kaplara%2012%2C%20Novi%20Sad%2C%20Serbia!5e0!3m2!1sen!2srs!4v1698765432100!5m2!1sen!2srs"
          width="100%"
          height="300"
          className="rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] animate-on-scroll"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-salon-purple text-salon-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base transition-all hover:scale-105 hover:shadow-lg max-w-xs mx-auto mt-4 animate-on-scroll"
        >
          Otvori u Google Maps
        </a>
      </div>
    </section>
  );
}