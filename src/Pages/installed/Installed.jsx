import React, { useEffect, useState } from "react";
import { apps } from "../../Data";

export const Installed = () => {
  const [installedApps, setInstalledApps] = useState([]);

  // Load installed apps from localStorage on mount
  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("installedApps")) || [];
    const installed = apps.filter((app) => storedIds.includes(app.id));
    setInstalledApps(installed);
  }, []);

  // Handle uninstalling an app
  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);

    const updatedIds = updated.map((app) => app.id);
    localStorage.setItem("installedApps", JSON.stringify(updatedIds));
    alert("App uninstalled successfully ❌");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Installed Apps</h1>

      {installedApps.length === 0 ? (
        <p className="text-center text-gray-500">No installed apps yet 😢</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="border rounded-xl p-4 w-64 shadow-md flex flex-col items-center"
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-24 h-24 object-contain mb-3"
              />
              <h2 className="text-xl font-semibold">{app.title}</h2>
              <p className="text-gray-500 mb-4">{app.companyName}</p>

              <button
                onClick={() => handleUninstall(app.id)}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md mt-auto"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
