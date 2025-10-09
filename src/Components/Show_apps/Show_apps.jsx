import React from 'react'
import { apps } from '../../Data';
import { Cards } from '../Card/Cards';

export const Show_apps = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {apps.map((app) => (
        <Cards key={app.id} app={app} />
      ))}
    </div>
  );
}
