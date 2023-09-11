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

        <section className=" px-56 text-center backdrop-blur-sm">
          <p className="text-gray-300 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            blanditiis officiis mollitia dolor, corporis maiores rerum molestias
            nemo quibusdam eos magni dignissimos quidem, dolorum ea ex, quo
            cupiditate quae eum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Adipisci saepe voluptas ipsam at dolore asperiores
            nulla animi. Quae sequi non eaque porro omnis voluptatem asperiores,
            facilis minima animi voluptatum quasi.
          </p>
        </section>
      </div>
    </div>
  );
}

export default home