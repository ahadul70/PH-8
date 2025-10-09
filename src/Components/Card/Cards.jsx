import React from "react";

export const Cards = ({ app }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md w-60 mt-4 mb-4 ml-8 mr-8">
      <img
        src={app.image}
        alt={app.title}
        className="w-full h-40 object-cover rounded-md"
      />
      <h1 className="font-bold mt-2 text-lg">{app.title}</h1>
      <p className="text-sm text-gray-600">{app.companyName}</p>
      <p className="text-sm mt-1">{app.description.slice(0, 50)}...</p>

      <div className="flex justify-between mt-3 items-center">
        <button className="flex items-center gap-1">
          <img
            src="./assets/icon-downloads.png"
            alt="downloads"
            className="w-4 h-4"
          />
          {app.downloads >= 1000000
            ? `${(app.downloads / 1000000).toFixed(1)}M`
            : app.downloads}
        </button>
        <button className="flex items-center gap-1">
          <img
            src="./assets/icon-ratings.png"
            alt="rating"
            className="w-4 h-4"
          />
          {app.ratingAvg.toFixed(1)}
        </button>
      </div>
    </div>
  );
};
