import React from 'react'
import Navbar from "./navbar.jsx"

function home() {
  return (
    <div
    name="home"
    className="w-full justify-center h-screen bg-image bg-no-repeat bg-cover flex flex-col items-center  ">
      <div className="flex flex-col items-center justify-center h-full pt-24">
        <img
          className=" rounded-full h-28  opacity-70 "
          src="../../public/shinji.jpg"
          alt="perfil"
        />

        <section className="flex items-center justify-center">
          {" "}
          <h5 className=" py-4 font-signature text-3xl text-cyan-400">
            Portafolio{" "}
          </h5>
          <div className="w-4"></div>{" "}
          <h5 className=" py-4 font-signature text-3xl text-cyan-400">
            {" "}
            Desarrollador web
          </h5>
        </section>

      
      </div>
    </div>
  );
}

export default home