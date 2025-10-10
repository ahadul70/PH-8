import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apps } from "../../Data";
import addToLDB from "../../utility/addtoLDB";
import { Charts } from "./Charts";

export const App_dets = () => {
  const { id } = useParams();
  const app = apps.find((a) => a.id === Number(id));

  // Check if this app is already installed (from localStorage)
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];
    if (installedApps.includes(Number(id))) {
      setInstalled(true);
    }
  }, [id]);

  const handleClick = () => {
    addToLDB(id);
    setInstalled(true);
  };

  if (!app) {
    return (
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold text-red-500">404 - App Not Found</h1>
        <p className="text-gray-500 mt-4">
          The app you’re looking for doesn’t exist or was removed.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div>
          <img src={app.image} alt={app.title} />
        </div>

        <div>
          <div>
            <h1 className="text-3xl font-bold">{app.title}</h1>
            <p className="text-gray-500">
              Developed by:
              <span className="text-purple-700"> {app.companyName}</span>
            </p>
          </div>

          <div className="mt-9 flex flex-row gap-10">
            <div>
              <img src="/assets/icon-downloads.png" alt="" />
              <p>Downloads</p>
              <h1 className="text-3xl">{app.downloads}</h1>
            </div>
            <div>
              <img src="/assets/icon-ratings.png" alt="" />
              <p>Average Rating</p>
              <h1 className="text-3xl">{app.ratingAvg}</h1>
            </div>
            <div>
              <img src="/assets/icon-review.png" alt="" />
              <p>Total Reviews</p>
              <h1 className="text-3xl">{app.reviews}</h1>
            </div>
          </div>

          <button
            onClick={handleClick}
            className={`px-4 py-2 rounded-lg text-white transition-colors ${
              installed
                ? "bg-gray-500 cursor-default"
                : "bg-green-600 hover:bg-green-700"
            }`}
            disabled={installed}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>
      <div className="mt-10">
        <Charts appId={app.id} />
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{app.description}</p>
      </div>
    </>
  );
};
