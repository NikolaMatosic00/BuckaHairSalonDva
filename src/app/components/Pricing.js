import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Pricing() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    hover: {
      scale: 1.05,
      boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="pricing"
      className="py-16 sm:py-14 px-4 sm:px-6 md:px-16 bg-gradient-to-br from-[#2c2c52] via-[#16213e] to-[#0f3460] min-h-screen flex flex-col items-center justify-start relative overflow-hidden scroll-mt-20"
    >
      <h2
        className="text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-18 animate-on-scroll great-vibes"
        data-animate-type="heading"
      >
        Cenovnik
      </h2>

      {/* Central faded butterfly in background */}
      <Image
        src="/background-images/butterfly_1_white.svg"
        alt="Butterfly Background"
        fill
        className="absolute inset-0 w-full h-full object-contain opacity-10 pointer-events-none select-none"
      />

      {/* Decorative corner butterflies (only on md+ screens) */}
      <div className="hidden md:block absolute top-50 left-50 z-0">
        <Image
          src="/background-images/butterfly_1_white.svg"
          alt="Butterfly Top Left"
          width={140}
          height={140}
          className="opacity-50 rotate-[-15deg] ml-[-40px] mt-[-40px]"
        />
      </div>

      <div className="hidden md:block absolute top-20 right-30 z-0">
        <Image
          src="/background-images/butterfly_1_white.svg"
          alt="Butterfly Top Right"
          width={120}
          height={120}
          className="opacity-35 rotate-[25deg] mr-[-40px] mt-[-30px]"
        />
      </div>

      <div className="hidden md:block absolute bottom-10 left-10 z-0">
        <Image
          src="/background-images/butterfly_1_white.svg"
          alt="Butterfly Bottom Left"
          width={160}
          height={160}
          className="opacity-20 rotate-[45deg] mb-[-40px] ml-[-30px]"
        />
      </div>

      <div className="hidden md:block absolute bottom-0 right-0 z-0">
        <Image
          src="/background-images/butterfly_1_white.svg"
          alt="Butterfly Bottom Right"
          width={130}
          height={130}
          className="opacity-20 rotate-[-30deg] mb-[-30px] mr-[-30px]"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {/* Leva kolona */}
          <motion.div
            className="relative w-full max-w-md mx-auto rounded-lg p-6 bg-[#1e1e2f] border border-[#9333ea]/30 shadow-2xl backdrop-blur-sm text-white"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#9333ea]/20 to-[#4f46e5]/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4 text-[#9333ea] great-vibes">Šišanje i Feniranje</h3>
              <div className="space-y-4">
                {/* Šišanje */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Šišanje</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Žensko dečije (do 4 godine)</span>
                      <span>700 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Muško</span>
                      <span>650 RSD</span>
                    </li>
                  </ul>
                </div>

                {/* Žensko Šišanje */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Žensko Šišanje</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Kratka</span>
                      <span>800 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Srednja</span>
                      <span>1000 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Duga</span>
                      <span>1300 RSD</span>
                    </li>
                  </ul>
                </div>

                {/* Feniranje */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Feniranje</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Kratka</span>
                      <span>700 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Srednja</span>
                      <span>800 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Poluduga</span>
                      <span>900 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Duga</span>
                      <span>1000 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Extra duga</span>
                      <span>1200 RSD</span>
                    </li>
                  </ul>
                </div>

                {/* Pramenovi Kapa */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Pramenovi Kapa (bez šišanja i feniranja)</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Kratka</span>
                      <span>2500 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Srednja</span>
                      <span>3000 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Duga</span>
                      <span>3800 RSD</span>
                    </li>
                  </ul>
                </div>

                {/* Pramenovi 1 Boja */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Pramenovi 1 Boja (bez šišanja i feniranja)</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Kratka</span>
                      <span>3200 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Srednja</span>
                      <span>4000 RSD</span>
                    </li>
                    <li className="flex Universitet u Beogradu">
                      <span>Duga</span>
                      <span>5000 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Extra duga</span>
                      <span>6000 RSD</span>
                    </li>
                  </ul>
                </div>

                {/* Pramenovi 2 Boje */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Pramenovi 2 Boje (bez šišanja i feniranja)</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Kratka</span>
                      <span>3600 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Srednja</span>
                      <span>4600 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Duga</span>
                      <span>5600 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Extra duga</span>
                      <span>7000 RSD</span>
                    </li>
                  </ul>
                </div>

                {/* Pramenovi 3 Boje */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Pramenovi 3 Boje (bez šišanja i feniranja)</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Kratka</span>
                      <span>4000 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Srednja</span>
                      <span>5000 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Duga</span>
                      <span>6200 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Extra duga</span>
                      <span>7200 RSD</span>
                    </li>
                  </ul>
                </div>

                {/* Farbanje Izrastka sa Feniranjem */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Farbanje Izrastka sa Feniranjem</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Kratka</span>
                      <span>2500 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Srednja</span>
                      <span>2800 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Duga</span>
                      <span>3000 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Extra duga</span>
                      <span>3700 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Doplata za izrazito dugu/gustu kosu</span>
                      <span>1200 RSD</span>
                    </li>
                  </ul>
                </div>

                {/* Usluga Farbanja */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Usluga Farbanja</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Kratka</span>
                      <span>700 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Duga</span>
                      <span>900 RSD</span>
                    </li>
                  </ul>
                </div>

                {/* Preliv */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Preliv</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Kratka</span>
                      <span>1400 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Srednja</span>
                      <span>2000 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Duga</span>
                      <span>2400 RSD</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desna kolona */}
          <motion.div
            className="relative w-full max-w-md mx-auto rounded-lg p-6 bg-[#1e1e2f] border border-[#9333ea]/30 shadow-2xl backdrop-blur-sm text-white"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#9333ea]/20 to-[#4f46e5]/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4 text-[#9333ea] great-vibes">Lokne, Pletenice i Tretmani</h3>
              <div className="space-y-4">
                {/* Lokne sa Kupom */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Lokne sa Kupom (bez pranja)</h4>
                  <ul className="text-left space-y-1

">
                    <li className="flex justify-between">
                      <span>Srednja</span>
                      <span>1400 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Duga</span>
                      <span>1800 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Extra duga</span>
                      <span>2000 RSD</span>
                    </li>
                  </ul>
                </div>

                {/* Pranje i Sušenje Kose */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Pranje i Sušenje Kose</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Žensko duga</span>
                      <span>650 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Muško</span>
                      <span>250 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Gužvanje</span>
                      <span>750 RSD</span>
                    </li>
                  </ul>
                </div>

                {/* Pletenice */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Pletenice</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Sitne</span>
                      <span>350 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Krupne</span>
                      <span>450 RSD</span>
                    </li>
                  </ul>
                </div>

                {/* Svečane Frizure */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Svečane Frizure (bez pranja)</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Srednja</span>
                      <span>2000 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Duga</span>
                      <span>2500 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Extra duga</span>
                      <span>3000 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Frizura za mladu srednja dužina</span>
                      <span>3300 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Frizura za mladu duga kosa</span>
                      <span>3800 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Rep</span>
                      <span>2500 RSD</span>
                    </li>
                  </ul>
                </div>

                {/* Lokne sa Peglom */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Lokne sa Peglom (bez pranja)</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Srednja</span>
                      <span>1400 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Duga</span>
                      <span>1500 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Extra duga</span>
                      <span>2000 RSD</span>
                    </li>
                  </ul>
                </div>

                {/* Talasi */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Talasi</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Krepovanje</span>
                      <span>2000 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Srednja</span>
                      <span>1000 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Duga</span>
                      <span>1300 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Extra duga</span>
                      <span>1700 RSD</span>
                    </li>
                  </ul>
                </div>

                {/* Tretmani za Negu Kose */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Tretmani za Negu Kose</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Tretman 1</span>
                      <span>1100 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tretman 2</span>
                      <span>1400 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tretman (perut)</span>
                      <span>1000 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Ampula</span>
                      <span>500 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Pakovanje</span>
                      <span>500 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Preliv - Toniranje</span>
                      <span>600 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Peglanje (bez pranja)</span>
                      <span>1000 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Šiške</span>
                      <span>200 RSD</span>
                    </li>
                  </ul>
                </div>

                {/* Balajaž */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Balajaž</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Srednja</span>
                      <span>7500 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Duga</span>
                      <span>9000 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Extra duga</span>
                      <span>10000 RSD</span>
                    </li>
                  </ul>
                </div>

                {/* Blajhanje (Skidanje Boje) */}
                <div>
                  <h4 className="text-lg font-medium text-[#9333ea]">Blajhanje (Skidanje Boje)</h4>
                  <ul className="text-left space-y-1">
                    <li className="flex justify-between">
                      <span>Kratka</span>
                      <span>2300 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Srednja</span>
                      <span>4500 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Duga</span>
                      <span>6500 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Extra duga</span>
                      <span>9000 RSD</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Doplata za farbanje</span>
                      <span>1200 RSD</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}