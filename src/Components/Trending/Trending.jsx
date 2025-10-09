import React from "react";
import { Cards } from "../Card/Cards";
import { apps } from "../../Data";
import { Link } from "react-router-dom";


export const Trending = () => {
  
  const topApps = apps.slice(0, 8);

  return (
    <div className="text-center my-20 px-10 lg:px-20">
      <h1 className="text-3xl font-bold mb-2">Trending Apps</h1>
      <p className="mb-8">
        Explore all trending apps on the market developed by us
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {topApps.map((app) => (
          <Cards key={app.id} app={app} />
        ))}
      </div>

      <Link to="/apps">
        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md cursor-pointer mt-20">
          Show All
        </button>
      </Link>
    </div>
  );
};
