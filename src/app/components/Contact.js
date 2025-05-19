// src/app/components/Contact.js
export default function Contact() {
  return (
    <section id="contact" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 bg-salon-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-salon-purple text-center mb-8 animate-on-scroll">
        Kontaktirajte nas
      </h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm sm:text-base text-salon-black mb-4 animate-on-scroll font-normal">
          Telefon: <a href="tel:+38112345678" className="text-salon-purple font-medium">+381 12 345 678</a>
        </p>
        <p className="text-sm sm:text-base text-salon-black mb-4 animate-on-scroll font-normal">
          Email: <a href="mailto:info@salonlepotabucka.com" className="text-salon-purple font-medium">info@salonlepotabucka.com</a>
        </p>
        <p className="text-sm sm:text-base text-salon-black mb-4 animate-on-scroll font-normal">
          Pratite nas:{' '}
          <a href="https://instagram.com/salonlepotabucka" className="text-salon-purple mx-2 font-medium">Instagram</a>
          <a href="https://facebook.com/salonlepotabucka" className="text-salon-purple mx-2 font-medium">Facebook</a>
        </p>
      </div>
    </section>
  );
}