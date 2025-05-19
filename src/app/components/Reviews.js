// src/app/components/Reviews.js
export default function Reviews() {
  return (
    <section id="reviews" className="py-12 sm:py-16 px-2 sm:px-4 md:px-16 bg-salon-light">
      <h2 className="text-3xl sm:text-4xl font-bold text-salon-purple text-center mb-8 animate-on-scroll">
        Recenzije klijenata
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-7xl mx-auto">
        <div className="bg-salon-white p-4 sm:p-6 rounded-lg shadow-md animate-on-scroll">
          <p className="text-sm sm:text-base text-salon-black italic font-normal">
            "Neverovatno iskustvo! Dragana mi je napravila savršenu frizuru, a atmosfera je veoma prijatna."
          </p>
          <p className="text-salon-purple font-medium mt-4 text-sm sm:text-base">
            Milica K. ★★★★★
          </p>
        </div>
        <div className="bg-salon-white p-4 sm:p-6 rounded-lg shadow-md animate-on-scroll">
          <p className="text-sm sm:text-base text-salon-black italic font-normal">
            "Najbolja boja koju sam ikada imala! Milica je prava umetnica. Toplo preporučujem!"
          </p>
          <p className="text-salon-purple font-medium mt-4 text-sm sm:text-base">
            Ivana S. ★★★★★
          </p>
        </div>
        <div className="bg-salon-white p-4 sm:p-6 rounded-lg shadow-md animate-on-scroll">
          <p className="text-sm sm:text-base text-salon-black italic font-normal">
            "Slavica mi je transformisala izgled za venčanje. Ne mogu biti srećnija!"
          </p>
          <p className="text-salon-purple font-medium mt-4 text-sm sm:text-base">
            Tamara L. ★★★★★
          </p>
        </div>
      </div>
    </section>
  );
}