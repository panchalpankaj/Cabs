import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const VenderNavbar = () => {
    const Navigate = useNavigate();
    const [visibal, setvisibal] = useState(false);
  
    let handellist = () => {
      setvisibal(!visibal);
    };
  
    let login = false;
    // let login = true;
  return (
    <div className="h-14  bg-white text-black flex justify-between pt-3 shadow-lg shadow-gray-200">
    <div className="logo ml-10">
      <img src="/images/taxilogo.png" className="h-10 w-20" />
    </div>
    <div className="flex gap-3 font-semibold cursor-pointer">
      <h3 onClick={() => Navigate("/")}>Home</h3>
      <h3 onClick={() => Navigate("/About")}>About</h3>
      <h3 onClick={() => Navigate("/Contact")}>Contact</h3>
    </div>

    {login ? (
      <div>
        <button
          className="bg-lime-500 p-2 rounded-lg w-full mr-6"
          onClick={handellist}
        >
          Pankaj
        </button>

        {visibal && (
          <ul
            className="absolute bg-white text-black p-5 rounded-md shadow-md z-10 text-xl">
            <li>Edit Profile</li>
            <li>Chane Password</li>
            <li>Ride inquiry</li>
            <li>Add ride</li>
            <li>My vehical</li>
            <li>Logout</li>
          </ul>
        )}
      </div>
    ) : (
      <div className="mr-10 pt-1">
        <Link
          to="/Login"
          className="mr-5 border-2 rounded-lg border-black p-1 px-3 font-semibold"
        >
          Login
        </Link>

        <Link
          to="/UserRegistration"
          className="mr-5 border-2 rounded-lg border-black p-1 px-3 font-semibold"
        >
          Register
        </Link>
      </div>
    )}
  </div>
  )
}

export default VenderNavbar
