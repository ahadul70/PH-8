import React, { useEffect, useState } from "react";
import { apps } from "../../Data";

export const Installed = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("installedApps")) || [];
    const installed = apps.filter((app) => storedIds.includes(app.id));
    setInstalledApps(installed);
  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);
    const updatedIds = updated.map((app) => app.id);
    localStorage.setItem("installedApps", JSON.stringify(updatedIds));
    alert("App uninstalled successfully ❌");
  };

  return (
    <div className=" min-h-screen p-4 sm:p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-semibold">
          {installedApps.length} App{installedApps.length !== 1 && "s"} Found
        </h1>
        <select className="border border-gray-300 rounded-md px-3 py-1 text-sm text-gray-600">
          <option>Sort By Size</option>
          <option>Sort By Name</option>
        </select>
      </div>

      <div className="space-y-3">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-between p-3 hover:shadow-md transition"
          >
         
            <div className="flex items-center gap-3">

              <img src={app.image} className="w-12 h-12" alt="" />
              <div>
                <h2 className="font-semibold text-gray-900">{app.title}</h2>
                <div className="flex items-center text-sm text-gray-500 gap-3 mt-1">
                  <span className="flex items-center gap-1 text-emerald-500">
                    ⬇ 9M
                  </span>
                  <span className="flex items-center gap-1 text-orange-500">
                    ★ {app.rating || 5}
                  </span>
                  <span>{app.size || "258 MB"}</span>
                </div>
              </div>
            </div>

            {/* Right section */}
            <button
              onClick={() => handleUninstall(app.id)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>

      {installedApps.length === 0 && (
        <p className="text-center text-gray-400 mt-10">
          No installed apps yet 😢
        </p>
      )}
    </div>
  );
};
