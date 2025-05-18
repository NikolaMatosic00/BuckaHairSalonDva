// src/app/components/Navbar.js
export default function Navbar() {
  return (
    <nav className="bg-salon-white shadow-md fixed w-full top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-salon-purple">Salon Ime</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#hero" className="text-salon-black hover:text-salon-purple">Početna</a>
            <a href="#about" className="text-salon-black hover:text-salon-purple">O nama</a>
            <a href="#team" className="text-salon-black hover:text-salon-purple">Tim</a>
            <a href="#pricing" className="text-salon-black hover:text-salon-purple">Cenovnik</a>
            <a href="#gallery" className="text-salon-black hover:text-salon-purple">Galerija</a>
            <a href="#reviews" className="text-salon-black hover:text-salon-purple">Recenzije</a>
            <a href="#contact" className="text-salon-black hover:text-salon-purple">Kontakt</a>
          </div>
        </div>
      </div>
    </nav>
  );
}