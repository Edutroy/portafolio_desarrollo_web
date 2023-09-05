import React from 'react'
import foods from "../assets/foods.png"
import linksapp from "../assets/links-app.png"
import point_sale from "../assets/sistema_venta_botica_1.png"
import parking from "../assets/parking1.png"
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function previusworks() {

  const scrollLeft = () => {
    document.getElementById("container").scrollLeft -= 280;
  }
  const scrollRight = () => {
    document.getElementById("container").scrollLeft += 280;
  }
  
    const portafolios = [
      {
        id: 1,
        image: linksapp,
        name: "Links-Aplicacion",
        github: "https://github.com/Edutroy/Links-App",
        live:"https://links-app.up.railway.app/",
      },
      {
        id: 2,
        image: foods,
        name: "Recitas-Aplicación",
        github: "https://github.com/Edutroy/ComidasAndinas_App",
        live:""
      },
       {
        id: 3,
        image: point_sale,
        name: "Sistema-Venta",
        github: "https://github.com/Edutroy/Sistema_de_Venta_Botica#sistema-de-venta-de-boticas-del-pueblo",
        live:""
      },
      {
        id: 4,
        image: parking,
        name: "Deteccion de parqueos ocupados",
        github: "https://github.com/Edutroy/IA_Parking",
        live:"https://drive.google.com/file/d/1eOXj-zcL-n08ghGMaPpB2YekKK29sA6x/view?usp=drive_link",
      },
    ];



  return (
    <div
      name="portafolio"
      className="bg-gradient-to-r from-test1 from-20% via-test2 via-40% to-test3 to-90% text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Portafolio
          </p>
          <p className="py-6">Echale un ojo a algunos de mis trabajos previos</p>
          
          <div className="absolute">
          <button onClick={scrollLeft} className="absolute top-40 right-17 p-2 m-2 rounded-full ">
          <FiChevronLeft style={{ fontSize: '30px' }} />
          </button>

          <button onClick={scrollRight} className="absolute top-40 left-45 p-2 m-2 rounded-full">
          <FiChevronRight style={{ fontSize: '30px' }}/>
          </button>
          </div>
        
        </div>
        <div id="container" 
        className="carousel flex overflow-x-auto scroll-behavior:smooth" 
        >
          { portafolios.map((item, index) => (
            <div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
                 flex justify-center items-center content-div gap-8"
            >
              <div className="w-[420px] justify-center items-center">
              {/* Hover effect for images */}
              <div className="flex flex-col items-center opacity-0 group-hover:opacity-100">
                <span className="text-2xl font bold text-white tracking-wider mb-4">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  {/* eslint-disable-next-line */}
                  <a href={item.live} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
              </div>
            </div>
          ))}
        
        </div>

      </div>
    </div>
  );
  
}

export default previusworks