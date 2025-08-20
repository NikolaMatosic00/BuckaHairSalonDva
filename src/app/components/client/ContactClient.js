'use client';

import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaViber,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ContactClient() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeOut' },
    }),
  };

  const contactItems = [
    {
      icon: <FaPhone className="text-salon-purpledark w-6 h-6" />,
      label: 'Telefon',
      value: '+381 69 116 8623',
      href: 'tel:+381691168623',
    },
    {
      icon: <FaEnvelope className="text-salon-purpledark w-6 h-6" />,
      label: 'Email',
      value: 'info@salonlepotabucka.com',
      href: 'mailto:info@salonlepotabucka.com',
    },
  ];

  const socialItems = [
    {
      icon: <FaInstagram />,
      href: 'https://instagram.com/salon_lepote_bucka',
      color: '#E1306C',
      label: 'Instagram',
    },
    {
      icon: <FaFacebook />,
      href: 'https://www.facebook.com/salonbucka/',
      color: '#1877F2',
      label: 'Facebook',
    },
    {
      icon: <FaWhatsapp />,
      href: 'https://wa.me/+381691168623',
      color: '#25D366',
      label: 'WhatsApp',
    },
    {
      icon: <FaViber />,
      href: 'viber://chat?number=+381691168623',
      color: '#7360F2',
      label: 'Viber',
    },
  ];

  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      {/* Kontakt podaci */}
      <div className="w-full max-w-lg flex flex-col gap-6">
        {contactItems.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 px-6 py-4 bg-white shadow-md rounded-lg hover:scale-[1.02] transition-all duration-300"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            {item.icon}
            <div className="text-left">
              <p className="text-sm text-salon-gray">{item.label}</p>
              <p className="text-base sm:text-lg font-medium text-salon-purpledark">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Social ikonice */}
      <motion.div
        className="flex gap-6 mt-6"
        custom={contactItems.length}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        {socialItems.map(({ icon, href, color, label }, i) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-salon-purpledark hover:scale-110 transition-transform duration-300"
            aria-label={label}
            style={{ color }}
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              {icon}
            </div>
          </a>
        ))}
      </motion.div>
    </div>
  );
}
