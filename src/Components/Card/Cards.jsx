import React from 'react'

export const Cards = () => {
  return (
    <div className="border p-4 rounded-lg shadow-md w-60">
      <img src="./assets/demo-app (1).webp" alt="app_image" />
      <h1 className='font-bold'> Forest:Focus For Productivity</h1>
      <div className="flex justify-between mt-2">
        <button>
          {" "}
          <img src="./assets/icon-downloads.png" alt="downlods" /> 9M
        </button>
        <button>
          {" "}
          <img src="./assets/icon-ratings.png" alt="rating" /> 5
        </button>
      </div>
    </div>
  );
}
