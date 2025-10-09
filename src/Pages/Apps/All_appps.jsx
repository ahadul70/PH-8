import React from 'react'
import { Show_apps } from '../../Components/Show_apps/Show_apps'

export const All_appps = () => {
  return (
    <div>
      <h1 className="text-center mt-10 mb-10 font-bold text-3xl">
        Our All Applications
      </h1>
      <p className="text-center mt-10 mb-10 font-bold text-1xl">
        Explore All on the Market develop by us. We code for Millions
      </p>
      <Show_apps />
    </div>
  );
}
