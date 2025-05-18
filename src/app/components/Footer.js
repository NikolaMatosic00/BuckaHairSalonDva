// src/app/components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-salon-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-salon-gold mb-4">Salon Name</h3>
            <p className="text-gray-300">
              Your destination for premium hair and beauty services.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-salon-gold">About</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-salon-gold">Servi ces</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-salon-gold">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">Address: Ulica 123, Beograd</p>
            <p className="text-gray-300">Phone: <a href="tel:+38112345678" className="hover:text-salon-gold">+381 12 345 678</a></p>
            <p className="text-gray-300">Email: <a href="mailto:info@salonname.com" className="hover:text-salon-gold">info@salonname.com</a></p>
            <p className="text-gray-300 mt-2">
              <a href="https://instagram.com/salonname" className="hover:text-salon-gold mx-2">Instagram</a>
              <a href="https://facebook.com/salonname" className="hover:text-salon-gold mx-2">Facebook</a>
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>Working Hours: Mon-Fri 9:00-20:00, Sat 10:00-18:00</p>
          <p>© 2025 Salon Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}