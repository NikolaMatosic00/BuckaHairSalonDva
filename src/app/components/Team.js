// src/app/components/Team.js
import Image from 'next/image';

export default function Team() {
  return (
    <section id="team" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 text-center bg-gradient-to-b from-[#F7F2FF] to-white animate-on-scroll relative">
      {/* Ljubičasta traka kroz celu sekciju */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full h-8 md:h-12 bg-[linear-gradient(to_bottom,_rgba(134,65,244,0.03)_0%,_rgba(134,65,244,0.07)_15%,_rgba(134,65,244,0.13)_30%,_rgba(134,65,244,0.18)_45%,_rgba(134,65,244,0.22)_55%,_rgba(134,65,244,0.18)_70%,_rgba(134,65,244,0.13)_85%,_rgba(134,65,244,0.07)_95%,_rgba(134,65,244,0.03)_100%)] z-0 rounded" />
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold text-salon-purple mb-8 animate-on-scroll great-vibes">
          Naš tim
        </h2>
        <div className="absolute inset-0 w-full h-full opacity-10 overflow-hidden pointer-events-none select-none z-0">
          <Image
            src="/background-images/butterfly_2.svg"
            alt="Dekoracija leptir"
            width={300}
            height={300}
            className="absolute -top-32 right-0 w-48 md:w-[16rem] lg:w-[20rem] transition-transform duration-1000 hover:rotate-12"
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-row gap-4 justify-center relative animate-on-scroll max-w-7xl mx-auto" style={{minHeight: '260px'}}>
          <div className="relative flex flex-col items-center flex-1 mt-0 mb-32 z-10 group">
            <div className="transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg flex flex-col items-center">
              <div className="border-4 border-salon-purple p-4 bg-white mb-4">
                <Image
                  src="/workers/dragana_opsenica.jpg"
                  alt="Dragana Ospenica"
                  width={250}
                  height={350}
                  className="object-cover w-full h-[140px] md:w-[250px] md:h-[350px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg filter contrast-105"
                />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-salon-purple great-vibes mb-2 transition-all duration-300 group-hover:text-salon-purple/90 group-hover:scale-102">Dragana Opsenica</h3>
              <p className="text-sm md:text-base text-salon-black font-bold mb-2 transition-all duration-300 group-hover:text-salon-purple/80 group-hover:scale-102">Osnivačica salona</p>
            </div>
          </div>
          <div className="relative flex flex-col items-center flex-1 mt-16 mb-16 z-10 group">
            <div className="transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg flex flex-col items-center">
              <div className="border-4 border-salon-purple p-4 bg-white mb-4">
                <Image
                  src="/workers/milica_jovanovic.jpg"
                  alt="Milica Jovanović"
                  width={250}
                  height={350}
                  className="object-cover w-full h-[140px] md:w-[250px] md:h-[350px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg filter contrast-105"
                />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-salon-purple great-vibes mb-2 transition-all duration-300 group-hover:text-salon-purple/90 group-hover:scale-102">Milica Jovanović</h3>
              <p className="text-sm md:text-base text-salon-black font-bold mb-2 transition-all duration-300 group-hover:text-salon-purple/80 group-hover:scale-102">Frizerski specijalista</p>
            </div>
          </div>
          <div className="relative flex flex-col items-center flex-1 mt-32 mb-0 z-10 group">
            <div className="transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg flex flex-col items-center">
              <div className="border-4 border-salon-purple p-4 bg-white mb-4">
                <Image
                  src="/workers/slavica_bavarcic.jpg"
                  alt="Slavica Bavaričić"
                  width={250}
                  height={350}
                  className="object-cover w-full h-[140px] md:w-[250px] md:h-[350px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg filter contrast-105"
                />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-salon-purple great-vibes mb-2 transition-all duration-300 group-hover:text-salon-purple/90 group-hover:scale-102">Slavica Bavaričić</h3>
              <p className="text-sm md:text-base text-salon-black font-bold mb-2 transition-all duration-300 group-hover:text-salon-purple/80 group-hover:scale-102">Frizerski specijalista</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}