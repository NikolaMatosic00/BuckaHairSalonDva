// src/app/components/Products.js
'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Products() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section id="products" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 bg-salon-light">
      <h2 className={`text-5xl sm:text-7xl md:text-8xl font-bold text-salon-purple mb-16 great-vibes text-center transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}>
        Proizvodi
      </h2>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Slike proizvoda - mobilno jedna ispod druge, desktop zig-zag */}
          <div className={`flex-1 transition-all duration-1200 ease-out delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}>
            {/* Desktop verzija - zig-zag layout */}
            <div className="hidden lg:block relative h-[750px]">
              {/* Prva slika - gore levo - Helen Seward */}
              <div className="absolute top-[20px] left-[20px] w-[350px] h-[210px] hover:scale-105 transition-transform duration-300">
                <Image
                  src="/products/Product1.jpg"
                  alt="Helen Seward Milano proizvodi"
                  width={350}
                  height={210}
                  className="shadow-lg w-full h-full object-contain bg-white"
                />
              </div>
              
              {/* Druga slika - sredina desno - AlterEgo */}
              <div className="absolute top-[260px] right-[20px] w-[350px] h-[210px] hover:scale-105 transition-transform duration-300">
                <Image
                  src="/products/Product2.jpg"
                  alt="AlterEgo Techno Fruit Color"
                  width={350}
                  height={210}
                  className="shadow-lg w-full h-full object-contain bg-white"
                />
              </div>
              
              {/* Treća slika - dole levo - KYO */}
              <div className="absolute bottom-[20px] left-[70px] w-[350px] h-[210px] hover:scale-105 transition-transform duration-300">
                <Image
                  src="/products/Product3.png"
                  alt="KYO Kolor System"
                  width={350}
                  height={210}
                  className="shadow-lg w-full h-full object-contain bg-white"
                />
              </div>
            </div>

            {/* Mobilna verzija - jedna ispod druge */}
            <div className="lg:hidden flex flex-col gap-6">
              <div className="w-full max-w-sm mx-auto hover:scale-105 transition-transform duration-300">
                <Image
                  src="/products/Product1.jpg"
                  alt="Helen Seward Milano proizvodi"
                  width={350}
                  height={210}
                  className="shadow-lg w-full h-auto object-contain bg-white"
                />
              </div>
              
              <div className="w-full max-w-sm mx-auto hover:scale-105 transition-transform duration-300">
                <Image
                  src="/products/Product2.jpg"
                  alt="AlterEgo Techno Fruit Color"
                  width={350}
                  height={210}
                  className="shadow-lg w-full h-auto object-contain bg-white"
                />
              </div>
              
              <div className="w-full max-w-sm mx-auto hover:scale-105 transition-transform duration-300">
                <Image
                  src="/products/Product3.png"
                  alt="KYO Kolor System"
                  width={350}
                  height={210}
                  className="shadow-lg w-full h-auto object-contain bg-white"
                />
              </div>
            </div>
          </div>
          
          {/* Tekst o proizvodima */}
          <div className={`flex-1 lg:pl-8 transition-all duration-1200 ease-out delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
          }`}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-salon-purple mb-4">
                  Kvalitet koji pravi razliku
                </h3>
                <p className="text-base text-salon-black leading-relaxed">
                  U našem salonu biramo samo proverne brendove koji garantuju najbolje rezultate za vašu kosu. Verujemo da kvalitetni proizvodi čine pola posla u postizanju savršene frizure i zdravlje kose.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className={`transition-all duration-800 ease-out delay-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}>
                  <h4 className="text-lg font-semibold text-salon-purple mb-2">
                    Helen Seward Milano MEDITER (od 1969)
                  </h4>
                  <p className="text-salon-black text-sm">
                    Dugogodišnja tradicija iz Milana. MEDITER linija sa organskim ekstraktima iz mediterana - maslinovo ulje, lavanda, rozmarin.
                  </p>
                </div>
                
                <div className={`transition-all duration-800 ease-out delay-900 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}>
                  <h4 className="text-lg font-semibold text-salon-purple mb-2">
                    AlterEgo Techno Fruit Color (od 1988)
                  </h4>
                  <p className="text-salon-black text-sm">
                    Italijanski sistem farbanja sa naprednom tehnologijom. Odličnu pokrivenost sede kose, bez aluminijuma i parabena.
                  </p>
                </div>
                
                <div className={`transition-all duration-800 ease-out delay-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}>
                  <h4 className="text-lg font-semibold text-salon-purple mb-2">
                    KYO Kolor System - Nežno i efikasno
                  </h4>
                  <p className="text-salon-black text-sm">
                    Moderna boja obogaćena morskim kolagenom i keratinom. Može da posvetli do 4 tona, a pritom čuva zdravlje kose.
                  </p>
                </div>
                
                <div className={`transition-all duration-800 ease-out delay-1100 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}>
                  <h4 className="text-lg font-semibold text-salon-purple mb-2">
                    Raznovrsne linije za sve potrebe
                  </h4>
                  <p className="text-salon-black text-sm">
                    HYDRA za suvu kosu, REMEDY za oštećenu kosu, THERAPY za dubinsko čišćenje. Svaki proizvod je osmišljen za određene potrebe.
                  </p>
                </div>
              </div>
              
              <div className={`bg-salon-white p-4 shadow-md transition-all duration-1000 ease-out delay-1300 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
              }`}>
                <h4 className="text-lg font-semibold text-salon-purple mb-2">
                  Zašto baš ovi brendovi?
                </h4>
                <ul className="space-y-1 text-salon-black text-sm">
                  <li>• <strong>Italijanska tradicija</strong> - Dugogodišnje iskustvo (1969-1988)</li>
                  <li>• <strong>Prirodni sastojci</strong> - Organski ekstrakti i ulja</li>
                  <li>• <strong>Bezbedne formule</strong> - Bez štetnih supstanci</li>
                  <li>• <strong>Profesionalni kvalitet</strong> - Koriste ih saloni širom Evrope</li>
                  <li>• <strong>Napredne tehnologije</strong> - Keratin, morski kolagen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* Crna traka sa logovima */}
    <div className={`bg-black py-2 w-full transition-all duration-1000 ease-out delay-1500 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center gap-16 md:gap-24 lg:gap-32">
          <div className="w-24 h-16 md:w-32 md:h-20">
            <Image
              src="/products/ProductB1.jpg"
              alt="Brand logo 1"
              width={128}
              height={80}
              className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          
          <div className="w-24 h-14 md:w-56 md:h-29 mt-5">
            <Image
              src="/products/ProductB2.png"
              alt="Brand logo 2"
              width={144}
              height={72}
              className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          
          <div className="w-14 h-9 md:w-20 md:h-14">
            <Image
              src="/products/ProductB3.jpg"
              alt="Brand logo 3"
              width={80}
              height={56}
              className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}