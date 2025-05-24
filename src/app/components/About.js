// src/app/components/About.js
import { FaCalendarCheck } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 text-center bg-gradient-to-b from-white to-[#F7F2FF]"
    >
      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <h2
          className="text-5xl sm:text-7xl md:text-8xl font-bold text-salon-purple mb-8 animate-on-scroll great-vibes"
          data-animate-type="heading"
        >
          O nama
        </h2>

        {/* Quote Section with Elegant Quotation Marks */}
        <div
          className="relative max-w-3xl mx-auto mb-12 animate-on-scroll px-4 sm:px-0"
          data-animate-type="quote"
          data-animate-delay="200"
        >
          <span className="absolute top-[-1.5rem] left-2 sm:left-0 text-4xl sm:text-6xl text-salon-purple opacity-50 quote-open">
            “
          </span>
          <p className="text-sm sm:text-base text-salon-black font-normal px-6 sm:px-8">
            Sa višedecenijskim iskustvom, naš tim posvećeno radi na tome da postigne najbolje rezultate i istakne prirodnu lepotu vaše kose. Koristimo savremene tretmane i najkvalitetnije proizvode kako bismo vam pružili negu koju zaslužujete. Zadovoljstvo i osmesi naših klijenata naša su najveća motivacija.
          </p>
          <span className="absolute bottom-[-1.5rem] right-2 sm:right-0 text-4xl sm:text-6xl text-salon-purple opacity-50 quote-close">
            ”
          </span>
        </div>

        {/* Achievements Section */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto animate-on-scroll"
          data-animate-delay="400"
        >
          <div className="achievement-box bg-white/80 backdrop-blur-sm border border-salon-purple/20 rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold text-salon-purple">10+</h3>
            <p className="text-sm text-salon-black">Godina iskustva</p>
          </div>
          <div className="achievement-box bg-white/80 backdrop-blur-sm border border-salon-purple/20 rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold text-salon-purple">3</h3>
            <p className="text-sm text-salon-black">Stručna zaposlena</p>
          </div>
          <div className="achievement-box bg-white/80 backdrop-blur-sm border border-salon-purple/20 rounded-lg p-6 text-center shadow-md">
            <h3 className="text-2xl font-semibold text-salon-purple">1000+</h3>
            <p className="text-sm text-salon-black">Zadovoljnih klijenata</p>
          </div>
        </div>

        {/* Book Appointment Button */}
        <div className="mt-8 animate-on-scroll" data-animate-delay="600">
          <a
            href="/#contact"
            className="group inline-flex items-center justify-center bg-salon-purple text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all"
          >
            <span className="inline-flex items-center justify-center">
              <FaCalendarCheck
                className="w-0 h-5 opacity-0 group-hover:w-5 group-hover:opacity-100 mr-2 transition-all duration-500"
                aria-hidden="true"
              />
              <span>Zakaži Termin</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}