// src/app/components/Team.js
import Image from 'next/image';

export default function Team() {
  return (
    <section id="team" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 text-center bg-gradient-to-b from-white to-[#F7F2FF]">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold text-salon-purple mb-8 animate-on-scroll great-vibes">
          Naš tim
        </h2>
        <div className="
          flex flex-row gap-4
          md:grid md:grid-cols-3 md:gap-8
          max-w-7xl mx-auto
        ">
          <div className="bg-salon-white p-4 md:p-6 rounded-lg shadow-md animate-on-scroll flex flex-col items-center flex-1">
            <Image
              src="/workers/dragana_opsenica.jpg"
              alt="Dragana Ospensica"
              width={250}
              height={350}
              className="rounded-lg mb-4 object-cover w-full h-[140px] md:w-[250px] md:h-[350px]"
            />
            <h3 className="text-2xl md:text-4xl font-bold text-salon-purple great-vibes mb-2">Dragana Opsenica</h3>
            <p className="text-xl md:text-2xl text-salon-black great-vibes font-bold mb-2">Osnivačica salona</p>
          </div>
          <div className="bg-salon-white p-4 md:p-6 rounded-lg shadow-md animate-on-scroll flex flex-col items-center flex-1">
            <Image
              src="/workers/milica_jovanovic.jpg"
              alt="Milica Jovanović"
              width={250}
              height={350}
              className="rounded-lg mb-4 object-cover w-full h-[140px] md:w-[250px] md:h-[350px]"
            />
            <h3 className="text-2xl md:text-4xl font-bold text-salon-purple great-vibes mb-2">Milica Jovanović</h3>
            <p className="text-xl md:text-2xl text-salon-black great-vibes font-bold mb-2">Frizerski specijalista</p>
          </div>
          <div className="bg-salon-white p-4 md:p-6 rounded-lg shadow-md animate-on-scroll flex flex-col items-center flex-1">
            <Image
              src="/workers/slavica_bavarcic.jpg"
              alt="Slavica Bavaričić"
              width={250}
              height={350}
              className="rounded-lg mb-4 object-cover w-full h-[140px] md:w-[250px] md:h-[350px]"
            />
            <h3 className="text-2xl md:text-4xl font-bold text-salon-purple great-vibes mb-2">Slavica Bavaričić</h3>
            <p className="text-xl md:text-2xl text-salon-black great-vibes font-bold mb-2">Frizerski specijalista</p>
          </div>
        </div>
      </div>
    </section>
  );
}