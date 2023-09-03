import React from 'react'
import Navbar from "./navbar.jsx"

function home() {
  return (
    <div className='w-full justify-center h-screen bg-image bg-no-repeat bg-cover flex flex-col items-center  '>
        <Navbar/>
        <div className='flex flex-col items-center justify-center h-full'>
         <img 
        className=' rounded-full h-28 w-28 opacity-70 '
        src="../../public/shinji.jpg"
        alt="perfil" 
        />
     
          
      <h5 className =" py-2 text-lg">Portafolio Desarrollador web</h5>
      <section className=' px-48 text-center'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti blanditiis officiis mollitia dolor, corporis maiores rerum molestias nemo quibusdam eos magni dignissimos quidem, dolorum ea ex, quo cupiditate quae eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe voluptas ipsam at dolore asperiores nulla animi. Quae sequi non eaque porro omnis voluptatem asperiores, facilis minima animi voluptatum quasi.</p>
      </section>
      
      </div>
    </div>
  )
}

export default home