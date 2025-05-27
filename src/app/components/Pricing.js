// src/app/components/Pricing.js
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
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {/* Pricing Card 1 */}
          <motion.div
            className="relative w-full max-w-md mx-auto rounded-lg overflow-hidden bg-[#1e1e2f] border border-[#9333ea]/30 shadow-2xl backdrop-blur-sm"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#9333ea]/20 to-[#4f46e5]/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />

            <Image
              src="/price-lists/price_list_1.png"
              alt="Cenovnik 1"
              width={400}
              height={400}
              className="max-w-sm h-auto object-contain transform hover:scale-105 transition-transform duration-500 mx-auto"
            />
          </motion.div>

          {/* Pricing Card 2 */}
          <motion.div
            className="relative w-full max-w-md mx-auto rounded-lg overflow-hidden bg-[#1e1e2f] border border-[#9333ea]/30 shadow-2xl backdrop-blur-sm"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            transition={{ delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#9333ea]/20 to-[#4f46e5]/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />

            <Image
              src="/price-lists/price_list_2.png"
              alt="Cenovnik 2"
              width={400}
              height={400}
              className="max-w-sm h-auto object-contain transform hover:scale-105 transition-transform duration-500 mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
