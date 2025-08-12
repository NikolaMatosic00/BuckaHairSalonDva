// src/app/components/Footer.js
import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaWhatsapp, FaViber } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-salon-purple text-white px-6 sm:px-12 md:px-24 py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Branding */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
          <Image
            src="/logo/logo192x192white.png"
            alt="Salon Lepote Bucka"
            width={90}
            height={90}
            className="m-auto"
          />
          <p className="text-sm opacity-90 leading-relaxed">
            Istaknite svoju lepotu uz našu profesionalnu negu. Vaša kosa zaslužuje najbolje.
          </p>
          <div className="flex space-x-4 my-4">
            <a
              href="https://instagram.com/salon_lepote_bucka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#E1306C] transition-colors"
              aria-label="Instagram Profile"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.facebook.com/salonbucka/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#1877F2] transition-colors"
              aria-label="Facebook Profile"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://wa.me/+381691168623"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#25D366] transition-colors"
              aria-label="WhatsApp Contact"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="viber://chat?number=+381691168623"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#7360F2] transition-colors"
              aria-label="Viber Contact"
            >
              <FaViber size={24} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <SectionTitle>Brzi Linkovi</SectionTitle>
          <ul className="space-y-2 mt-4 text-sm opacity-90">
            <FooterLink href="/#hero">Početna</FooterLink>
            <FooterLink href="/#pricing">Usluge</FooterLink>
            <FooterLink href="/#about">O Nama</FooterLink>
            <FooterLink href="/#contact">Kontakt</FooterLink>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <SectionTitle>Kontakt</SectionTitle>
          <ul className="space-y-2 mt-4 text-sm opacity-90">
            <FooterLink href="tel:+381691168623">+381 69 116 8623</FooterLink>
            <FooterLink href="mailto:dragana.bucka@gmail.com">dragana.bucka@gmail.com</FooterLink>
            <FooterLink href="https://maps.google.com/?q=1300+kaplara+12,+Novi+Sad" target="_blank">
              1300 kaplara 12, Novi Sad
            </FooterLink>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-white/20 text-center text-sm opacity-80">
        <p className="mb-2">
          Salon Lepote Bucka © {new Date().getFullYear()}. Sva prava zadržana.
        </p>
        <div className="flex justify-center space-x-4">
          <FooterLink href="/politika-privatnosti">Politika Privatnosti</FooterLink>
          <FooterLink href="/uslovi-koriscenja">Uslovi Korišćenja</FooterLink>
        </div>
      </div>
    </footer>
  );
}

function SectionTitle({ children }) {
  return (
    <h3 className="text-lg sm:text-xl font-semibold border-b border-white/30 pb-1 mb-1">
      {children}
    </h3>
  );
}

function SocialIcon({ href, color, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition-transform"
      style={{ color }}
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children, target }) {
  return (
    <li>
      <Link
        href={href}
        target={target}
        className="hover:underline hover:text-white transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
