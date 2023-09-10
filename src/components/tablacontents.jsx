
import React,{ useState} from 'react'

function tablacontents() {


  const weeks = [
    {
      id: 1,
      image: "image1",
      tittle: "Links-Aplicacion sdfasfsa",
      content: "asdadadasdasdasd asdadsdadadasdasd asdasdaasdadadasdasda sdasdadsdadadasdasdasdassdasdaasdad adasdasdasdasdadsdadasdasdaasdadadasdasd asdasdadsdada sdasdaasdadadasdasdasdasd adsdadaasdadadasdasda dasdadsdadadasdasda sdas",
   
    },
    {
      id: 2,
      image: "image2",
      tittle: "Recetas-Aplicación",
      content:"",
     
    },
     {
      id: 3,
      image: "image3",
      tittle: "Sistema-Venta",
      content: "",
     
    },
    {
      id: 4,
      image: "image4",
      tittle: "Deteccion de parqueos ocupados",
      content: "",
    },
  ];

  const [isDivVisible, setDivVisible] = useState(Array(weeks.length).fill(false));

  // Función para alternar la visibilidad de un div específico
  const toggleDiv = (index) => {
    const newDivVisibility = [...isDivVisible];
    newDivVisibility[index] = !newDivVisibility[index];
    setDivVisible(newDivVisibility);
  };



  return (
    <div className=" w-full bg-gradient-to-r from-test1 from-20% via-test2 via-40% to-test3 to-90% ">
      <div className="justify-content-center justify-center items-center text-center">
        <div className="pb-2 justify-center w-full h-full text-center">
          <p className="text-4xl font-signature1 inline border-b-4 border-white text-cyan-500">
            Tabla de contenidos
          </p>
          <p className="py-4 text-white">Conocimiento brindado a lo largo del curso</p>
        </div>
        <div >
      {weeks.map((week, index) => (
        <div key={index} className='text-white justify-center items-center pt-6 justify-content-center '>
          <button 
          className='pt-2 pb-2 mb-8 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md 
          justify-center items-center text-center w-48 hover:bg-blue-700 hover:shadow-blue-700/50 ' 
          onClick={() => toggleDiv(index)}>Semana {week.id}</button>
          {isDivVisible[index] && (
            <div 
            className=' w-100 b flex flex-col backdrop-blur-2xl  h-60 
            justify-center items-center text-center relative top-1/2 left-1/2 
            transform -translate-x-1/2 transition-opacity duration-500 ease-in-out shadow-lg shadow-white -500/50 ' >
              <p >Título: {week.tittle}</p>
              <p >Contenido: {week.content}</p>
              <p>Imagen: {week.image}</p>
            </div>
          )}
        </div>
      ))}
    </div>
            <div className='pt-8'>
              h
            </div>
      
      </div>
    </div>
  );
}

export default tablacontents