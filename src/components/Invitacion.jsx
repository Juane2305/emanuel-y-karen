import cancion from '../assets/song.mp3'
import Countdown from "./Countdown";
import InstagramWall from "./InstagramWall";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import LugaresLineal from "./LugaresLineal";
import DressCodeElegante from "./DressCodeElegante";
import GalleryElegante from "./GalleryElegante";
import MusicScreen from "./MusicScreen";
import InformacionUtil from "./InformacionUtil";
import Cronograma from "./Cronograma";

const Invitacion = () => {

  const colorPrincipal =  "white"
  const targetDate = new Date("2026-01-24T18:00:00");


  return (
    <div className="w-full font-body relative overflow-hidden bg-[#f8f5f0]">
        <div className="absolute z-40">
          <MusicScreen cancion={cancion}/>
        </div>
      <div
        className="flex flex-col justify-center items-center h-screen w-full text-center bg-center bg-cover font-body relative"
        style={{
          backgroundImage: "url('https://res.cloudinary.com/dfschbyq2/image/upload/v1740756038/dom_3024_x_1960_px_4_dtinwr_nabgfh.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center space-y-5">
          <p className="text-white text-2xl">¡Nos casamos!</p>
          <h1 className="text-6xl md:text-8xl font-eleganteTitle text-white z-10 italic">
            Emanuel & Karen
          </h1>
          <div className="flex items-center justify-center py-6 px-4 border-y-2 border-dashed border-gold">
            <p className="text-gold italic text-2xl">Sábado, 24 de Enero de 2026</p>
          </div>
        </div>
      </div>
      <div className="font-body mb-10 border-y-2 border-gold">
          <TextoFinal textoFinal={<>
              <p className='text-2xl'>Y si... llegó el día <br /> Queremos que estés ahí con nosotros</p>
            </>}/>  
        </div>
        <div className='pb-10'>
          <Countdown targetDate={targetDate}/>
        </div>

      <div>

          <div className="bg-[#171717] border-y-3 border-gold">
            <div data-aos="fade-up">
              <LugaresLineal  borderColor="border-gold" buttonStyle="border-gold text-lg" link_ceremonia="https://maps.app.goo.gl/k27AUddWTKdqFQ4y6"/>
            </div>
            <div className="flex justify-center pb-8">
              <InformacionUtil />
            </div>
          </div>
          <Cronograma 
            titulo="Cronograma"
            eventos={[
              { hora: "18:00", descripcion: "Llegada de invitados" },
              { hora: "19:00", descripcion: "Ceremonia Civil" },
              { hora: "19:30", descripcion: "Votos" },
              { hora: "20:00", descripcion: "Refrigerio + fotos + bebidas frescas" },
              { hora: "21:00", descripcion: "Barra libre" },
              { hora: "22:30", descripcion: "Cena principal" },
              { hora: "23:30", descripcion: "Baile libre" },
              { hora: "00:00", descripcion: "Brindis + torta + cumple feliz" },
              { hora: "00:30", descripcion: "Postres y más baile" },
            ]}
          />

          <GalleryElegante 
            images={[
              {id: 1, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763600911/PHOTO-2025-11-17-22-13-49_2_ulcsyl.jpg'},
              {id: 2, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763600910/PHOTO-2025-11-17-22-13-47_2_hzhmhk.jpg'},
              {id: 3, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763600913/PHOTO-2025-11-17-22-13-50_qptjat.jpg'},
              {id: 4, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763600969/PHOTO-2025-11-17-22-13-52_a6e3vo.jpg'},
              {id: 5, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763600916/PHOTO-2025-11-17-22-13-52_3_yru9nq.jpg'},
              {id: 6, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763600911/PHOTO-2025-11-17-22-13-48_nkpxg9.jpg'},
              {id: 7, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763600911/PHOTO-2025-11-17-22-13-47_dyrqon.jpg'},
              {id: 8, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763600910/PHOTO-2025-11-17-22-13-51_levetb.jpg'},
              {id: 9, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763600911/PHOTO-2025-11-17-22-13-48_3_ozcutl.jpg'},
              {id: 10, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763600910/PHOTO-2025-11-17-22-13-48_2_x31laj.jpg'},
              {id: 11, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763600912/PHOTO-2025-11-17-22-13-49_gckqfk.jpg'},
            ]}
          />

            <InstagramWall user="@kaareenvldz"/>
          <div className="bg-[#171717] text-center relative text-white border-t-4 border-gold">
            <GoogleCalendarButton buttonClass="border-gold" titleCalendar="Casamiento de Emanuel y Karen"
              fechaComienzo="20260124T180000"
              fechaFin="20260125T050000"
              salon="XQ8P+6VG Lima, Buenos Aires Province"/>
          </div>
          <div className="">
            <DressCodeElegante/>
          </div>
          <DatosBancarios
            claseContenedor="bg-[#F8F5F0] text-[#1E1E1E]"
            textSize="text-lg"
            background={{backgroundColor: colorPrincipal}}
          />
          <Asistencia
            clase="py-10 bg-[#171717] bg-fixed border-y-3 border-gold"
            claseTitle="text-gold"
            claseButton="border-2 border-[#D4AF37] font-semibold hover:bg-[#D4AF37] text-white"
            linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSf9iuHH0NjJhz9vdVm6ycMoYquvWC10SRqbhIU0vx8JhFxfSg/viewform?usp=publish-editor"
          />
        {/* Texto Final */}
        <div className="font-eleganteTitle">
          <TextoFinal textoFinal={<>
              <p className='text-4xl'>¡Los queremos!</p><br /><p className='text-3xl'>Emanuel y Karen</p>
            </>}/>  
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
