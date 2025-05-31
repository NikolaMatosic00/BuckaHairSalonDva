// src/app/components/Team.js
'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Team() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      id: 'dragana',
      name: 'Dragana Opsenica',
      role: 'Osnivačica salona',
      image: '/workers/dragana_opsenica.jpg',
      description: 'Dragana je osnivačica našeg salona sa preko 15 godina iskustva u industriji lepote. Specijalizovana je za kreativne frizure i koloriranje kose. Njena strast prema frizerstvu i posvećenost klijentima čini je srcem našeg tima.'
    },
    {
      id: 'milica',
      name: 'Milica Jovanović',
      role: 'Frizerski specijalista',
      image: '/workers/milica_jovanovic.jpg',
      description: 'Milica je naš frizerski specijalista sa fokusom na moderne trendove i styling. Poznata je po svojoj preciznosti u šišanju i neverovatnoj sposobnosti da razume želje svojih klijenata. Uvek je u toku sa najnovijim tehnikama frizerstva.'
    },
    {
      id: 'slavica',
      name: 'Slavica Bavaričić',
      role: 'Frizerski specijalista',
      image: '/workers/slavica_bavarcic.jpg',
      description: 'Slavica je ekspert za tretmane kose i regeneraciju. Njena specijalnost su složene frizure za posebne prilike i venčanja. Sa njenim iskustvom i kreativnošću, svaki klijent odlazi zadovoljan i samopouzdan.'
    }
  ];

  const handleMemberClick = (memberId) => {
    setSelectedMember(selectedMember === memberId ? null : memberId);
  };

  return (
    <section id="team" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 text-center bg-gradient-to-b from-[#F7F2FF] to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Naslov sa animacijom */}
        <h2 className={`text-5xl sm:text-7xl md:text-8xl font-bold text-salon-purple mb-8 great-vibes transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          Naš tim
        </h2>
        
        {/* Opis sa animacijom */}
        <p className={`max-w-6xl mx-auto text-lg md:text-xl text-salon-black/80 mb-10 font-medium leading-relaxed transition-all duration-1200 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          U ostvarenju svih vaših ideja pomaže vam naš stručni tim frizera koji spaja kreativnost sa iskustvom. Zajedno radimo na tome da vaša vizija postane stvarnost, uz punu posvećenost i personalizovan pristup. Kroz godine rada stvorili smo prostor gde se topla atmosfera spaja sa kvalitetnom uslugom.
        </p>
        
        {/* Leptir dekoracija sa animacijom */}
        <div className="absolute inset-0 w-full h-full opacity-10 overflow-hidden pointer-events-none select-none z-0">
          <Image
            src="/background-images/butterfly_2.svg"
            alt="Dekoracija leptir"
            width={300}
            height={300}
            className={`absolute -top-40 right-0 w-48 md:w-[16rem] lg:w-[20rem] transition-all duration-2000 ease-out delay-500 ${
              isVisible ? 'opacity-10 translate-x-0 rotate-0' : 'opacity-0 translate-x-20 rotate-45'
            } hover:rotate-12`}
            aria-hidden="true"
          />
        </div>

        {/* Tim članovi sa staggered animacijama */}
        <div className="flex flex-row gap-4 justify-center relative max-w-7xl mx-auto" style={{minHeight: '260px'}}>
          {/* Ljubičasta traka - pozicionirana u odnosu na kontejner slika */}
          <div 
            className={`absolute left-0 right-0 bg-[linear-gradient(to_bottom,_rgba(134,65,244,0.03)_0%,_rgba(134,65,244,0.07)_15%,_rgba(134,65,244,0.13)_30%,_rgba(134,65,244,0.18)_45%,_rgba(134,65,244,0.22)_55%,_rgba(134,65,244,0.18)_70%,_rgba(134,65,244,0.13)_85%,_rgba(134,65,244,0.07)_95%,_rgba(134,65,244,0.03)_100%)] z-0 rounded transition-all duration-1500 ease-out pointer-events-none top-[35%] lg:top-1/2 -translate-y-1/2 h-8 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />
          
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className={`relative flex flex-col items-center flex-1 z-10 group cursor-pointer transition-all duration-500 ${
                index === 0 ? 'mt-0 mb-32' : 
                index === 1 ? 'mt-16 mb-16' : 
                'mt-32 mb-0'
              } ${selectedMember === member.id ? 'scale-110' : ''}`}
              onClick={() => handleMemberClick(member.id)}
              style={{
                transform: `${isVisible ? 'translateY(0) scale(1)' : `translateY(50px) scale(0.8)`}`,
                opacity: isVisible ? 1 : 0,
                transition: `all 800ms ease-out ${600 + index * 200}ms`
              }}
            >
              <div className="flex flex-col items-center">
                {/* Slika sa border animacijom */}
                <div className={`border-4 border-salon-purple p-6 mb-4 transition-all duration-1000 ease-out ${
                  isVisible ? 'border-opacity-100 scale-100' : 'border-opacity-0 scale-90'
                }`}
                style={{
                  transitionDelay: `${800 + index * 200}ms`
                }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={250}
                    height={350}
                    className={`object-cover w-full h-[140px] md:w-[250px] md:h-[350px] transition-transform duration-[1500ms] ease-in-out filter contrast-105 ${
                      selectedMember === member.id 
                        ? 'scale-110' 
                        : 'group-hover:scale-110'
                    }`}
                  />
                </div>
                
                {/* Ime sa fade-in animacijom */}
                <h3 className={`text-2xl md:text-4xl font-bold text-salon-purple great-vibes mb-2 transition-all duration-700 ease-out ${
                  selectedMember === member.id 
                    ? 'text-salon-purple/90' 
                    : 'group-hover:text-salon-purple/90'
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                  transitionDelay: `${1000 + index * 200}ms`
                }}>
                  {member.name}
                </h3>
                
                {/* Pozicija sa fade-in animacijom */}
                <p className={`text-sm md:text-base text-salon-black font-bold mb-2 transition-all duration-700 ease-out ${
                  selectedMember === member.id 
                    ? 'text-salon-purple/80' 
                    : 'group-hover:text-salon-purple/80'
                }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
                  transitionDelay: `${1200 + index * 200}ms`
                }}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Opis izabrane frizerke sa smooth animacijom */}
        <div className={`transition-all duration-700 ease-in-out overflow-hidden ${
          selectedMember ? 'max-h-96 opacity-100 mt-8' : 'max-h-0 opacity-0'
        }`}>
          {selectedMember && (
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 shadow-lg border border-salon-purple/20 transform transition-all duration-500 ease-out animate-in slide-in-from-bottom-4">
              <div className="max-w-4xl mx-auto">
                <h4 className="text-2xl md:text-3xl font-bold text-salon-purple great-vibes mb-4">
                  {teamMembers.find(m => m.id === selectedMember)?.name}
                </h4>
                <p className="text-base md:text-lg text-salon-black/80 leading-relaxed">
                  {teamMembers.find(m => m.id === selectedMember)?.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}