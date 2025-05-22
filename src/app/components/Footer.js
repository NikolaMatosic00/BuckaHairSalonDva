import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaWhatsapp, FaViber } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-salon-purple text-white py-12 sm:py-16 px-4 sm:px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Branding */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <Image
            src="/logo/logo192x192.png"
            alt="Salon Lepote Bucka"
            width={60}
            height={60}
            className="mb-4"
          />
          <p className="text-sm sm:text-base font-light mb-4">
            Istaknite svoju lepotu uz našu profesionalnu negu. Vaša kosa zaslužuje najbolje.
          </p>
          <div className="flex space-x-4">
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
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Brzi Linkovi</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li><Link href="/#hero" className="hover:underline">Početna</Link></li>
            <li><Link href="/#pricing" className="hover:underline">Usluge</Link></li>
            <li><Link href="/#about" className="hover:underline">O Nama</Link></li>
            <li><Link href="/#contact" className="hover:underline">Kontakt</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Kontakt</h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <a href="tel:+381691168623" className="hover:underline">
                +381 69 116 8623
              </a>
            </li>
            <li>
              <a href="mailto:dragana.bucka@gmail.com" className="hover:underline">
                dragana.bucka@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=1300+kaplara,+Novi+Sad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                1300 kaplara, Novi Sad
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Pretplatite se</h3>
          <p className="text-sm sm:text-base font-light mb-4">
            Prijavite se za novosti i posebne ponude!
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Vaša email adresa"
              className="px-4 py-2 rounded-full text-[#09001e] focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-[#09001e] px-4 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              Prijavi se
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-gray-400 text-center">
        <p className="text-sm sm:text-base font-normal mb-2">
          Salon Lepote Bucka © {new Date().getFullYear()}. Sva prava zadržana.
        </p>
        <div className="flex justify-center space-x-4 text-sm">
          <Link href="/politika-privatnosti" className="hover:underline">
            Politika Privatnosti
          </Link>
          <Link href="/uslovi-koriscenja" className="hover:underline">
            Uslovi Korišćenja
          </Link>
        </div>
      </div>
    </footer>
  );
}