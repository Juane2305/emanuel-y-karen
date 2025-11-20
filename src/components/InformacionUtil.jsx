import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoCall } from "react-icons/io5";

export const InformacionUtil = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const hospedajes = [
    { nombre: "Hospedaje Lima", telefono: "3487696033" },
    { nombre: "Hostería Rural Suiza", telefono: "3487552570" },
    { nombre: "Hotel Plaza Lima", telefono: "034876826323" },
    { nombre: "Hotel Zárate Palace", telefono: "01126771925" },
    { nombre: "ARX Tango Petit Hotel", telefono: "034876955093" },
  ];

  return (
    <>
      <button
        className="py-3 px-8 border-2 border-gold bg-[#F8F5F0] text-black rounded-full mt-5 md:mt-10 transition hover:transform hover:scale-105 hover:shadow-lg font-semibold text-lg"
        data-aos='fade-up'
        onClick={() => setIsOpen(true)}
      >
        ℹ️ Información Útil
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg flex flex-col justify-center items-center border-2 border-gold max-w-md w-full mx-4">
            <div className="flex flex-col justify-center text-center space-y-6 text-gray-900 w-full">
              <div className="flex items-center justify-center gap-3">
                <span className="text-3xl">🏨</span>
                <h2 className="font-bold text-2xl text-gold">Hospedajes</h2>
              </div>

              <div className="w-full space-y-3 text-left">
                {hospedajes.map((hospedaje, index) => (
                  <a
                    key={index}
                    href={`tel:${hospedaje.telefono}`}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800">{hospedaje.nombre}</p>
                      <p className="text-sm text-gray-600">{hospedaje.telefono.replace(/(\d{4})(\d{3})(\d{4})/, '$1 $2 $3').slice(0, -4) + ' ' + hospedaje.telefono.slice(-4)}</p>
                    </div>
                    <div className="ml-3 p-2 rounded-full bg-gold text-white">
                      <IoCall size={20} />
                    </div>
                  </a>
                ))}
              </div>

              <p className="text-lg text-gray-500 italic pt-2">
                Toca cualquier hospedaje para llamar directamente
              </p>

              <button
                className="py-3 rounded-lg text-white font-bold bg-gold hover:bg-yellow-600 border-2 border-gold transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InformacionUtil;
