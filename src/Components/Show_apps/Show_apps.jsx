import React from "react";
import { apps } from "../../Data";
import { Cards } from "../Card/Cards";
import Noapps from "../Noapps/Noapps";

export const Show_apps = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  
  const filteredApps = apps.filter((app) => {
    if (searchTerm.trim() === "") {
      return true; 
    } else {
      return app.title.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

 
    let content;
    console.log(content);
    
  if (filteredApps.length > 0) {

    content = filteredApps.map((app) => <Cards key={app.id} app={app} />);
  } else {
   
    content = <Noapps onReset={() => setSearchTerm("")} />;
  }

  return (
    <>
      <div className="flex justify-end m-4">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            value={searchTerm}
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      <div className="flex flex-wrap justify-center gap-6">{content}</div>
    </>
  );
};
