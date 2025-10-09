import React from "react";
import { useParams } from "react-router-dom";
import { apps } from "../../Data";


export const App_dets = () => {
  const { id } = useParams();


  const app = apps.find((a) => a.id === Number(id));


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
    <div className="p-10 max-w-3xl mx-auto">
      <img
        src={app.image}
        alt={app.title}
        className="w-full h-60 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold">{app.title}</h1>
      <p className="text-gray-600 mt-2">{app.companyName}</p>
      <p className="mt-4">{app.description}</p>
    </div>
  );
};
