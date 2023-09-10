import React from 'react'

function about() {
  return (
    <div
    className='bg-gradient-to-r from-test1 from-20% via-test2 via-40% to-test3 to-90% '>
       <div className="pb-8 justify-center w-full h-full text-center">
            <p className="text-4xl font-signature1 inline border-b-4 border-white  text-cyan-500 ">
              About me
            </p>
            <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
       

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4  text-white'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Soy Joeseep .Si ! mi nombre puede ser inusual, pero es solo una de las cosas que me hace unico. 
               </p>
            </div>
            <div>
              <p >
              Programar en la noche con una taza de café y música chillhop de fondo es uno de mis hobbies favoritos.
              La música es parte esencial de mi vida,estoy abierto a todos los generos aunque tengo una tendencia por el indie & pop. Disfruto aprender nuevas tecnologias,
              mi pasión por los retos ,sumado a mi proactividad por realizar las cosas me impulsan constantemente. ¿Tienes algun reto en mente?        
              </p>  
            </div>
            
          </div>
      </div>
          
        
        </div>
     
     
     
    </div>
  )
}

export default about