import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [nav,setNav]= useState(false);
    const links = [
        { id: 1, link: "home" },
        { id: 2, link: "about" },
        { id: 3, link: "portafolio" },
        { id: 4, link: 'table' },
        { id: 5, link: 'reflection' },
    ];

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

{links.map(({ id, link})=>(
        <li 
        key ={id} 
        className ="px-4 cursor-pointer capitalize font-medium
         text-gray-500 hover:scale-300  hover:text-white hover:underline decoration-cyan-500 hover:underline-offset-8 hoverunderl duration-200"
         >
            <Link to={link} smooth duration={500}>
              {link}
            </Link> 
            </li>
        ))}
  
 
</ul>
  </div>
  )
}

export default navbar

  