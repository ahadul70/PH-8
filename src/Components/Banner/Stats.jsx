import React from "react";

export const Stats = () => {
  return (
    <div className="py-10 px-10 text-center  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip">
      <div>
        <h1 className="text-6xl  font-bold">
          Trusted by Millions, Built for You
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 text-white">
        <div className="">
          <p>Total Downloads</p>
          <h1 className="text-7xl  font-bold m-2">29.6M</h1>
          <p>21% More Than Last Month</p>
        </div>
        <div>
          <p>Total Reviews</p>
          <h1 className="text-7xl  font-bold m-2">906K</h1>
          <p>46% More Than Last Month </p>
        </div>
        <div>
          <p>Active Apps</p>
          <h1 className="text-7xl  font-bold m-2">132+</h1>
          <p>31 More Will Launch</p>
        </div>
      </div>
    </div>
  );
};
