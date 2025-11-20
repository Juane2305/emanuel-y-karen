import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const LugaresLineal = ({borderColor, buttonStyle, link_ceremonia}) => {
  const [ scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const progress = Math.min(
          100,
          Math.max(
            0,
            ((viewportHeight - top) / (viewportHeight + height * 0.5)) * 120
          )
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lugares = [
    {
      id: 1,
      titulo: "Ceremonia & Celebración",
      descripcion: (
        <>
          Sábado, 24 de Enero de 2026<br />
          <strong>Fincas de Lima – Lote 67</strong><br />
          Calle 145 entre 48 y 50, Lima – Zárate
        </>
      ),
    },
  ];

  const detallesEventoPoetic = (
    <div className="mt-12 max-w-2xl mx-auto px-4 text-center">
      <div className="space-y-4 text-white/90">
        <p className="italic text-xl leading-relaxed">
          Aire libre, verano, calor,
        </p>
        <p className="italic text-xl leading-relaxed">
          grillitos y mucho amor.
        </p>
        <p className="text-xl mt-6 text-gold">
          <em>Sí, traete repelente porque los mosquitos también están invitados.</em>
        </p>
      </div>
    </div>
  );

  return (
    <div ref={sectionRef} className="relative flex flex-col items-center py-16 z-10 ">
      <h2 className="text-2xl font-bold mb-8 z-20 relative text-white">
        Información del Evento
      </h2>

      <div className="relative flex flex-col gap-12 z-20 w-full max-w-xl px-4 mb-10">
        {lugares.map((lugar) => {
          const { ref, inView } = useInView({ threshold: 0.5 });

          return (
            <div
              key={lugar.id}
              ref={ref}
              className={`p-6 shadow-md rounded-xl bg-white mx-auto w-full text-center transition-all duration-300 ${
                inView
                  ? `opacity-100 scale-105 border-2 ${borderColor} `
                  : "opacity-70 scale-100 border border-transparent"
              }`}
            >
              <h3 className="text-xl font-bold mb-1">{lugar.titulo}</h3>
              <p className="text-gray-700 text-lg">{lugar.descripcion}</p>
            </div>
          );
        })}
      </div>
      {detallesEventoPoetic}
      <div className="flex justify-center items-center z-30">
              <a
                href={link_ceremonia}
                target="_blank"
                rel="noopener noreferrer"
                >
                <button className={`z-20 border-2 ${buttonStyle} py-3 px-8 rounded-full bg-[#F8F5F0] text-black  mt-5 md:mt-10 transition hover:transform hover:scale-105`}>
                  Ver Ubicación
                </button>
              </a>
          </div>
    </div>
    
  );
};

export default LugaresLineal;