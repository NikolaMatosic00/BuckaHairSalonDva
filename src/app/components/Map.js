import { motion } from 'framer-motion';
import { MapPinIcon } from 'lucide-react';

export default function Map() {
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
      id="map"
      className="py-12 sm:py-16 px-4 sm:px-6 md:px-16 md:pt-4 text-center bg-gradient-to-b from-[#F7F2FF] to-white"
    >
      <div className="max-w-7xl mx-auto">
        

        {/* Google Maps Iframe */}
        <motion.div
          className="rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] overflow-hidden"
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.4186729876543!2d19.83475591556348!3d45.24327897909876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1061b0c2b2b1%3A0x5f5e2b8c1d0e1b2c!2s1300%20Kaplara%2012%2C%20Novi%20Sad%2C%20Serbia!5e0!3m2!1sen!2srs!4v1698765432100!5m2!1sen!2srs"
            width="100%"
            className="w-full h-[250px] sm:h-[400px] md:h-[500px]"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Salon Lepote Bucka Location"
            aria-label="Google Maps location of Salon Lepote Bucka in Novi Sad, Serbia"
          ></iframe>
        </motion.div>

{/* Open in Google Maps Button */}
<motion.div
  className="mt-6"
  custom={2}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={itemVariants}
>
  <a
    href="https://maps.google.com"
    target="_blank"
    rel="noopener noreferrer"
    className="group button-bordered inline-flex items-center justify-center bg-[#09001e] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base transition-all"
  >
    <span className="inline-flex items-center justify-center">
      <MapPinIcon
        className="w-0 h-5 opacity-0 group-hover:w-5 group-hover:opacity-100 mr-2 transition-all duration-500"
        aria-hidden="true"
      />
      <span>Otvori u Google Mapama</span>
    </span>
  </a>
</motion.div>

      </div>
    </section>
  );
}


