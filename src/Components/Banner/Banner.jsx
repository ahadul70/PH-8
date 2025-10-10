import React from 'react'

function Banner() {
  return (
    <div className=" h-full flex flex-col justify-center items-center text-center pt-4 pr-4 pl-4 mb-0">
      <h1 className="text-4xl font-bold mb-4">
        We build <br />
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="text-lg mb-6 text-gray-600">
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.
        <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
      <div>
        {" "}
        <button
          className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md cursor-pointer m-2"
          onClick={() =>
            window.open("https://play.google.com/store/games?hl=en", "_blank")
          }
        >
          {" "}
          GOOGlE PLAY{" "}
        </button>
        <button
          className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md cursor-pointer"
          onClick={() =>
            window.open("https://www.apple.com/app-store", "_blank")
          }
        >
          {" "}
          APP STORE{" "}
        </button>
      </div>

      <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64  mx-auto mb-0">
        {" "}
        <img
          src="./assets/hero.png"
          alt="logo"
          className="h-full w-auto "
        />
      </div>
    </div>
  );
}

export default Banner