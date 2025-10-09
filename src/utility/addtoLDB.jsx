const getInstalledApps = () => {
  const installedApps = localStorage.getItem("installedApps");
  return installedApps ? JSON.parse(installedApps) : [];
};

const addToLDB = (id) => {
  const installedApps = getInstalledApps();

  // Ensure id type matches (Number) since your app IDs are numeric
  const numericId = Number(id);

  if (installedApps.includes(numericId)) {
    alert("App is already installed");
  } else {
    installedApps.push(numericId);
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
    alert("App installed successfully");
  }
};

export default addToLDB;
