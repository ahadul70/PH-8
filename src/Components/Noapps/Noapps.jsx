
import React from 'react'
import { Link } from 'react-router-dom';

const Noapps = ({ onReset }) => {
  return (
    <div>
      <img src="./assets/App-Error.png" alt="" />

      <Link to="/apps">
        <button
          onClick={onReset}
          className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md cursor-pointer mt-20"
        >
          Show All
        </button>
      </Link>
    </div>
  );
};

export default Noapps