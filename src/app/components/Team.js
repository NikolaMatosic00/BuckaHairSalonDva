'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="team" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 pt-20 md:pt- text-center bg-gradient-to-b from-[#F7F2FF] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Naslov sa animacijom */}
        <h2 className={`text-5xl sm:text-7xl md:text-8xl text-salon-black mb-8 great-vibes transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          Naš tim
        </h2>
        
        {/* Opis sa animacijom i navodnicima */}
        <div className={`relative max-w-3xl mx-auto mb-10 transition-all duration-1200 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          <span 
            className="absolute text-4xl sm:text-6xl text-salon-purple opacity-50"
            style={{ 
              top: '-1.5rem', 
              left: '0.5rem',
              fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
              lineHeight: '1'
            }}
          >
            "
          </span>
          <p className="text-sm sm:text-base text-salon-black font-normal leading-relaxed px-6 sm:px-8">
            Naš stručni tim frizera spaja kreativnost sa iskustvom kako bismo ostvarili vašu viziju. Sa pažnjom i posvećenošću, radimo na tome da se osećate lepo i samouvereno nakon svakog tretmana.
          </p>
          <span 
            className="absolute text-4xl sm:text-6xl text-salon-purple opacity-50"
            style={{ 
              bottom: '-1.5rem', 
              right: '0.5rem',
              fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
              lineHeight: '1'
            }}
          >
            "
          </span>
        </div>

        {/* Grid sa SVG slikama */}
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
          {/* Dragana Opsenica */}
          <div className={`relative transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '400ms' }}>
            <svg className="w-full h-auto md:w-[220px] md:h-[272px]" viewBox="-2 -2 220 272">
              <defs>
                <clipPath id="team-member-clip-dragana">
                  <path d="M 0,68 Q 0,0 68,0 L 216,0 L 216,204 Q 216,268 152,268 L 0,268 L 0,68 Z" />
                </clipPath>
              </defs>
              <path 
                d="M -2,70 Q -2,-2 70,-2 L 218,-2 L 218,204 Q 218,270 154,270 L -2,270 L -2,70 Z" 
                className="fill-purple-300"
              />
              <image 
                href="/workers/dragana_opsenica_ljubicasta.png" 
                x="0" 
                y="0" 
                width="216" 
                height="268" 
                clipPath="url(#team-member-clip-dragana)" 
                preserveAspectRatio="xMidYMid slice" 
              />
            </svg>
            <div className="bg-purple-300 text-gray-700 px-4 py-3 -mt-2 text-right w-2/3 ml-auto md:ml-16 md:mr-24 md:w-auto" style={{ borderRadius: '0 16px 0 16px' }}>
              <h3 className="font-medium text-sm md:text-base mb-1">Dragana Opsenica</h3>
              <p className="font-normal text-xs md:text-sm opacity-80">Osnivačica salona</p>
            </div>
          </div>

          {/* Milica Jovanović */}
          <div className={`relative transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '600ms' }}>
            <svg className="w-full h-auto md:w-[220px] md:h-[272px]" viewBox="-2 -2 220 272">
              <defs>
                <clipPath id="team-member-clip-milica">
                  <path d="M 0,68 Q 0,0 68,0 L 216,0 L 216,204 Q 216,268 152,268 L 0,268 L 0,68 Z" />
                </clipPath>
              </defs>
              <path 
                d="M -2,70 Q -2,-2 70,-2 L 218,-2 L 218,204 Q 218,270 154,270 L -2,270 L -2,70 Z" 
                className="fill-purple-300"
              />
              <image 
                href="/workers/milica_jovanovicc.png" 
                x="0" 
                y="0" 
                width="216" 
                height="268" 
                clipPath="url(#team-member-clip-milica)" 
                preserveAspectRatio="xMidYMid slice" 
              />
            </svg>
            <div className="bg-purple-300 text-gray-700 px-4 py-3 -mt-2 text-right w-2/3 ml-auto md:ml-16 md:mr-24 md:w-auto" style={{ borderRadius: '0 16px 0 16px' }}>
              <h3 className="font-medium text-sm md:text-base mb-1">Milica Jovanović</h3>
              <p className="font-normal text-xs md:text-sm opacity-80">Frizerski specijalista</p>
            </div>
          </div>

          {/* Slavica Bavaričić */}
          <div className={`relative transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '800ms' }}>
            <svg className="w-full h-auto md:w-[220px] md:h-[272px]" viewBox="-2 -2 220 272">
              <defs>
                <clipPath id="team-member-clip-slavica">
                  <path d="M 0,68 Q 0,0 68,0 L 216,0 L 216,204 Q 216,268 152,268 L 0,268 L 0,68 Z" />
                </clipPath>
              </defs>
              <path 
                d="M -2,70 Q -2,-2 70,-2 L 218,-2 L 218,204 Q 218,270 154,270 L -2,270 L -2,70 Z" 
                className="fill-purple-300"
              />
              <image 
                href="/workers/slavica_bavarciccc.png" 
                x="0" 
                y="0" 
                width="216" 
                height="268" 
                clipPath="url(#team-member-clip-slavica)" 
                preserveAspectRatio="xMidYMid slice" 
              />
            </svg>
            <div className="bg-purple-300 text-gray-700 px-4 py-3 -mt-2 text-right w-2/3 ml-auto md:ml-16 md:mr-24 md:w-auto" style={{ borderRadius: '0 16px 0 16px' }}>
              <h3 className="font-medium text-sm md:text-base mb-1">Slavica Bavaričić</h3>
              <p className="font-normal text-xs md:text-sm opacity-80">Frizerski specijalista</p>
            </div>
          </div>
        </div>
        
        {/* Divider linija */}
        <div className="relative mt-32 mb-8 flex justify-center w-full">
          <div
            className="absolute bottom-0 w-[80%] sm:w-[80%] h-px mx-auto"
            style={{
              background: 'linear-gradient(to right, transparent, #D1D5DB 30%, #D1D5DB 70%, transparent)',
            }}
          />
        </div>

{/* Leptir dekoracija sa animacijom */}
<div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none z-10">
  <Image
    src="/background-images/butterfly_2.svg"
    alt="Dekoracija leptir"
    width={300}
    height={300}
    className={`absolute -top-25 left-83 right-0 w-48 sm:w-[16rem] md:w-[20rem] transition-all duration-2000 ease-out delay-500 ${
      isVisible ? 'opacity-30 translate-x-0 rotate-0' : 'opacity-0 translate-x-20 rotate-45'
    } hover:rotate-12 sm:top-20 sm:right-10 sm:left-auto md:-top-40 md:right-0`} /* Dodato sm:right-10 za pomeranje u desno */
    aria-hidden="true"
  />
  <Image
    src="/background-images/butterfly_1.svg"
    alt="Dekoracija leptir"
    width={200}
    height={200}
    className={`absolute top-[150px] right-5 w-32 sm:w-[12rem] md:w-[14rem] transition-all duration-2000 ease-out delay-700 ${
      isVisible ? 'opacity-30 translate-x-0 rotate-0' : 'opacity-0 translate-x-20 rotate-45'
    } hover:rotate-12 sm:top-[320px] sm:right-0 md:top-[320px] md:right-0`}
    aria-hidden="true"
  />
</div>
      </div>
    </section>
  );
}