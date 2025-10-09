import React from 'react'

function Banner() {
  return (
    <div className="bg-rgb-245245245 h-screen flex flex-col justify-center items-center text-center p-4">
      <h1  className='text-4xl font-bold mb-4'>
        We build <br />
        <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className='text-lg mb-6 text-gray-600'>
        At HERO.IO , we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.
        <br />
        Our goal is to turn your ideas into digital experiences that truly make
        an impact.
      </p>
      <div>
        {" "}
        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md cursor-pointer m-2">
          {" "}
          GOOGlE PLAY{" "}
        </button>
        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md cursor-pointer">
          {" "}
          APP STORE{" "}
        </button>
      </div>
      <img
        src="./assets/hero.png"
        alt="logo"
        className="w-200 h-200 object-contain mb-0"
      />
    </div>
  );
}

export default Banner