import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



const DressCodeElegante = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-[#171717] py-16 flex flex-col items-center justify-center border-y-4 border-y-gold">
      <h3
        className="text-gold text-4xl font-serif tracking-widest mb-8"
        data-aos="fade-up"
      >
        Dress Code
      </h3>
      <div
        className="text-white text-lg leading-relaxed max-w-2xl px-6 space-y-3"
        data-aos="fade-up"
      >
        <p className="text-red-400 font-semibold">Colores prohibidos: blanco y rojo.</p>
        <p className="italic text-gold">Pasteles, vibrantes y con onda → SÍ.</p>
        
        <div className="pt-2 space-y-2">
          <p><span className="font-semibold">Mujeres:</span> vestidos frescos.</p>
          <p><span className="font-semibold">Hombres:</span> camisa y pantalón bien veraniegos.</p>
        </div>
        
        <p className="text-lg italic text-gray-300 pt-2">
          Y si podés, evitá los tacos finitos… la tierra no perdona.
        </p>
        
        <p className="pt-4 border-t border-gold/30">
          <span className="font-semibold text-gold">Bendiciones:</span> Pueden venir con la ropa que quieran. No hay dress code para ellos.
        </p>
      </div>
    </section>
  );
};

export default DressCodeElegante;