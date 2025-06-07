import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaWhatsapp, FaViber } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Contact() {
  // Varijante za animacije
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 text-center bg-gradient-to-b from-white to-[#F7F2FF]"
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2
          className="text-5xl sm:text-7xl text-salon-black mb-10 great-vibes animate-on-scroll"
          data-animate-type="heading"
        >
          Kontaktirajte nas
        </h2>

        {/* Contact Information */}
        <div className="flex flex-col gap-8 sm:gap-12 relative">
          {/* Phone */}
          <motion.div
            className="flex justify-center items-center gap-3"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <a
              href="tel:+381691168623"
              className="wobble-icon flex items-center gap-3 text-xl sm:text-2xl text-salon-black font-medium hover:text-salon-dark-purple hover:scale-105 transition-all duration-300"
            >
              <FaPhone className="w-6 h-6 sm:w-7 sm:h-7 text-salon-black" aria-hidden="true" />
              +381 69 116 8623
            </a>
          </motion.div>

          {/* Separator */}
          <div className="hidden sm:block w-1/2 mx-auto h-px bg-gray-200"></div>

          {/* Email */}
          <motion.div
            className="flex justify-center items-center gap-3"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <a
              href="mailto:info@salonlepotabucka.com"
              className="wobble-icon flex items-center gap-3 text-xl sm:text-2xl text-salon-black font-medium hover:text-salon-dark-purple hover:scale-105 transition-all duration-300"
            >
              <FaEnvelope className="w-6 h-6 sm:w-7 sm:h-7 text-salon-black" aria-hidden="true" />
              info@salonlepotabucka.com
            </a>
          </motion.div>

          {/* Separator */}
          <div className="hidden sm:block w-1/2 mx-auto h-px bg-gray-200"></div>

          {/* Social Media Links */}
          <motion.div
            className="flex justify-center items-center gap-8 sm:gap-12"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <a
              href="https://instagram.com/salon_lepote_bucka"
              target="_blank"
              rel="noopener noreferrer"
              className="wobble-icon text-salon-black hover:text-[#E1306C] transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram className="w-10 h-10 sm:w-12 sm:h-12" />
            </a>
            <a
              href="https://www.facebook.com/salonbucka/"
              target="_blank"
              rel="noopener noreferrer"
              className="wobble-icon text-salon-black hover:text-[#1877F2] transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebook className="w-10 h-10 sm:w-12 sm:h-12" />
            </a>
            <a
              href="https://wa.me/+381691168623"
              target="_blank"
              rel="noopener noreferrer"
              className="wobble-icon text-salon-black hover:text-[#25D366] transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="w-10 h-10 sm:w-12 sm:h-12" />
            </a>
            <a
              href="viber://chat?number=+381691168623"
              target="_blank"
              rel="noopener noreferrer"
              className="wobble-icon text-salon-black hover:text-[#7360F2] transition-colors duration-300"
              aria-label="Viber"
            >
              <FaViber className="w-10 h-10 sm:w-12 sm:h-12" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}