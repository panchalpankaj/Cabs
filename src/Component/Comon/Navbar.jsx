import React from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  const Hello = () => {
    toast.success("hello");
  };

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
    </div>
  );
};

export default Navbar;
