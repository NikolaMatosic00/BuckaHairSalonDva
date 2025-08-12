import { FaCalendarCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function About() {
  // Varijante za animacije
  const statVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <section
      id="about"
      className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 md:pt-4 text-center bg-gradient-to-b from-[#f9fafc] to-[#F7F2FF]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-5xl sm:text-7xl md:text-8xl text-salon-black mb-8 great-vibes animate-on-scroll"
          data-animate-type="heading"
        >
          O nama
        </h2>

        {/* Quote Section with Elegant Quotation Marks */}
        <div
          className="relative max-w-3xl mx-auto mb-12 animate-on-scroll"
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

        {/* Achievements Section - Modern Text */}
        <div
          className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 max-w-5xl mx-auto mb-12 animate-on-scroll"
          data-animate-delay="400"
        >
          <motion.div
            className="flex-1 text-center"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={statVariants}
          >
            <h3 className="text-4xl sm:text-5xl text-salon-black">10+</h3>
            <p className="text-sm sm:text-base text-salon-black font-light">Godina iskustva</p>
          </motion.div>
          <motion.div
            className="flex-1 text-center"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={statVariants}
          >
            <h3 className="text-4xl sm:text-5xl text-salon-black">3</h3>
            <p className="text-sm sm:text-base text-salon-black font-light">Stručna zaposlena</p>
          </motion.div>
          <motion.div
            className="flex-1 text-center"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={statVariants}
          >
            <h3 className="text-4xl sm:text-5xl text-salon-gray">1000+</h3>
            <p className="text-sm sm:text-base text-salon-black font-light">Zadovoljnih klijenata</p>
          </motion.div>
        </div>

        {/* Book Appointment Button */}
<div className="mt-8 animate-on-scroll" data-animate-delay="600">
          <a
            href="/#contact"
            className="group button-bordered inline-flex items-center justify-center bg-[#09001e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all"
          >
            <span className="inline-flex items-center justify-center">
              <FaCalendarCheck
                className="w-0 h-5 opacity-0 group-hover:w-5 group-hover:opacity-100 mr-2 transition-all duration-450"
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