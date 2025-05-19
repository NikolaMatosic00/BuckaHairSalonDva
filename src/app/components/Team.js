// src/app/components/Team.js
import Image from 'next/image';

export default function Team() {
  return (
    <section id="team" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 bg-salon-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-salon-purple text-center mb-8 animate-on-scroll">
        Naš tim
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 max-w-7xl mx-auto">
        <div className="bg-salon-white p-4 sm:p-6 rounded-lg shadow-md animate-on-scroll">
          <Image
            src="/team1.jpg" // Zameni sa stvarnom slikom
            alt="Dragana Opsenica"
            width={300}
            height={300}
            className="rounded-lg mb-4 w-full h-auto"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-salon-purple">Dragana Opsenica</h3>
          <p className="text-sm sm:text-base text-salon-black font-normal">Vlasnica</p>
        </div>
        <div className="bg-salon-white p-4 sm:p-6 rounded-lg shadow-md animate-on-scroll">
          <Image
            src="/team2.jpg" // Zameni sa stvarnom slikom
            alt="Milica Jovanović"
            width={300}
            height={300}
            className="rounded-lg mb-4 w-full h-auto"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-salon-purple">Milica Jovanović</h3>
          <p className="text-sm sm:text-base text-salon-black font-normal">Radnica</p>
        </div>
        <div className="bg-salon-white p-4 sm:p-6 rounded-lg shadow-md animate-on-scroll">
          <Image
            src="/team3.jpg" // Zameni sa stvarnom slikom
            alt="Slavica Bavarčić"
            width={300}
            height={300}
            className="rounded-lg mb-4 w-full h-auto"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-salon-purple">Slavica Bavarčić</h3>
          <p className="text-sm sm:text-base text-salon-black font-normal">Radnica</p>
        </div>
      </div>
    </section>
  );
}