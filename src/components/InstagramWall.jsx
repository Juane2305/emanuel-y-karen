import React from 'react'
import instagram from '../assets/praga/instagram.json'
import Lottie from 'react-lottie-player';

const InstagramWall = ({userClass, textClass, user}) => {

  const instagramUser = user.replace(/^@/, "");


  return (
    <div className='py-24'>
      <h2 className='text-3xl text-center mb-5'>📸 Fotos del Evento</h2>
      <div style={{  height: 120 }} className='w-full flex flex-col items-center justify-center'>
              <Lottie
                loop
                play
                animationData={instagram}
                style={{ width: "100%", height: "100%" }}
              />
            </div>            
            <div className='flex flex-col gap-y-5 items-center text-center'>
              <a href={`https://www.instagram.com/${instagramUser}/`} target='_blank' className='flex flex-col items-center justify-center'>
                    <p className={`text-3xl font-light ${userClass}`}>{user}</p>
              </a>
                    <p className={`mx-10 font-thin text-lg ${textClass}`}>Cuando subas tus fotos del día de la boda,
etiquetanos en Instagram </p>
            </div>
    </div>
  )
}

export default InstagramWall
