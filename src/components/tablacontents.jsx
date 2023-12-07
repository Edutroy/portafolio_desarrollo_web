import React, { useState } from "react";

function tablacontents() {
  const weeks = [
    {
      id: 1,
      tittle: "Herramientas clave en el Desarr  ollo Web",
      content:
        "He adquirido conocimientos en el desarrollo web, específicamente en el área del frontend. Esto incluye tecnologías como HTML, CSS y JavaScript, las cuales se centran en la apariencia y funcionalidad visual de los sitios web. También he explorado Visual Studio Code, una herramienta versátil que facilita la creación y edición de código en múltiples lenguajes, brindando atajos y sugerencias útiles para mejorar el flujo de trabajo",
    },
    {
      id: 2,
      tittle: "Componentes de una pagina web",
      content: "Descubrí que la creación de una página web involucra el uso de lenguajes como HTML y XML según los estándares de la Plataforma Web Abierta. Esto incluye la estructuración del contenido con etiquetas HTML5, la representación del DOM en forma de árbol y la comprensión del ciclo de vida de una página web. ",
    },
    {
      id: 3,
      tittle: "Fundamentos HTML",
      content: "Adquirí conocimientos fundamentales en HTML, permitiéndome crear estructuras básicas de páginas web con etiquetas como <html>, <head> y <body>. Ahora manejo etiquetas como <h1>, <p>, <a>, <img>, <ul>, <li>, <strong>, y <em> para encabezados, párrafos, enlaces, imágenes, listas y formato de texto. Estos fundamentos son la base para iniciar la creación de páginas web simples, motivándome a seguir explorando el desarrollo web y sus posibilidades.",
    },
    {
      id: 4,
      tittle: "Introduccion a CSS",
      content: "Adquirí habilidades fundamentales en CSS para estilizar páginas web creadas con HTML. Ahora puedo aplicar estilos a elementos usando selectores, propiedades y valores CSS, ajustando colores, márgenes, fuentes, tamaños de texto y diseñando páginas con display, position y float. También comprendo el uso de selectores de clases e ID para aplicar estilos específicos. Estos conocimientos en CSS mejoran la apariencia y presentación de mis páginas web.",
    },
    {
      id: 5,
      tittle: "Flexbox y Diseño responsivo",
      content: " Aprendí sobre diseño flexbox, fluido y responsivo, potenciados por Google Fonts. Flexbox ofrece versatilidad en diseños ajustables a distintas pantallas, el diseño fluido crea experiencias uniformes en dispositivos variados, y el diseño responsivo adapta inteligentemente los sitios a diferentes tamaños con CSS. Google Fonts enriquece la estética y legibilidad con tipografías personalizadas. Estos conceptos son cruciales para sitios web atractivos y funcionales hoy.",
    },
    {
      id: 6,
      tittle: "Introduccion a Canvas",
      content: "Aprendí a emplear JavaScript para interactuar con el elemento Canvas en desarrollo web, creando funcionalidad y dinamismo en mis sitios. Con él, puedo manipular contenido, responder a eventos del usuario y generar gráficos y animaciones en tiempo real, añadiendo creatividad visual a mis proyectos. Estas habilidades mejoran la experiencia del usuario al hacer mis sitios más dinámicos y visuales.",
    },
  
  ];

  const [isDivVisible, setDivVisible] = useState(
    Array(weeks.length).fill(false)
  );

  // Función para alternar la visibilidad de un div específico
  const toggleDiv = (index) => {
    const newDivVisibility = [...isDivVisible];
    newDivVisibility[index] = !newDivVisibility[index];
    setDivVisible(newDivVisibility);
  };

  return (
    <div
      name="table"
      className=" w-full bg-gradient-to-r from-test1 from-20% via-test2 via-40% to-test3 to-90% "
    >
      <div className="justify-content-center justify-center items-center text-center">
        <div className="pb-2 justify-center w-full h-full text-center">
          <p className="text-4xl font-signature1 inline border-b-4 border-white text-cyan-500">
            Tabla de contenidos
          </p>
          <p className="py-4 text-white">
            Conocimiento brindado a lo largo del curso
          </p>
        </div>
        <div>
          {weeks.map((week, index) => (
            <div
              key={index}
              className="text-white justify-center items-center pt-6 justify-content-center "
            >
              <button
                className="pt-2 pb-2 mb-8 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md 
          justify-center items-center text-center w-48 hover:bg-blue-700 hover:shadow-blue-700/50 "
                onClick={() => toggleDiv(index)}
              >
                Semana {week.id}
              </button>
              {isDivVisible[index] && (
                <div
                  className=" w-100 b flex flex-col backdrop-blur-2xl  h-60 
            justify-center items-center text-center relative top-1/2 left-1/2 
            transform -translate-x-1/2 transition-opacity duration-500 ease-in-out shadow-lg shadow-white -500/50 "
                >
                  


                  <p className="text-blue-500 text-4xl font-bold tracking-wider">
                    {week.tittle}
                  </p>
                  <div className="text-justify p-8">
                    
                    <p>{week.content}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="pt-8">h</div>
      </div>
    </div>
  );
}

export default tablacontents;
