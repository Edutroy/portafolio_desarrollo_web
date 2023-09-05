import React from "react";
import { useEffect, useState } from "react";


const navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Función para detectar el evento de scroll y cambiar el estado "scrolled"
    function handleScroll() {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    // Agregar un event listener para el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Retirar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  <div  className={`${
    scrolled ? "bg-gray-900 text-white" : "bg-transparent text-black"
  } fixed  transition-all duration-300 ease-in-out flex justify-center items-center w-full h-16 px-4  
  opacity-90 z-10 top-0 `}>
   
<ul className="flex items-center justify-center text-white">
  <il className="mr-8 text-3xl font-signature ml-2 text-blue-500">Joeseep López</il>
  <il  className="mr-8 hover:text-blue-600" >Home</il>
  <il className="mr-8 hover:text-blue-600">Sobre mi</il>
  <il className="mr-8 hover:text-blue-600">Trabajos previos</il>
  <il className="mr-8 hover:text-blue-600">Tabla de contenidos</il>
  <il className="mr-8 hover:text-blue-600">Reflexion</il>
</ul>
  </div>
  )
}

export default navbar

  