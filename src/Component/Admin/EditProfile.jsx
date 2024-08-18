import React from "react";
import VenderNavbar from "./VenderNavbar";
import Foter from "../Comon/Foter";

const EditProfile = () => {
  return (
    <>
      <VenderNavbar />
      <div>
        <div className="flex justify-center ">
          <div className=" mt-11  w-2/6 border-2 p-4 rounded-lg shadow-lg">      
            <div className="flex flex-col gap-2">
            <label>First Name</label>
            <input type="text" className="border-2 border-gray-300 p-1 rounded-lg shadow-lg"></input>
            <label>Last Name</label>
            <input type="text" className="border-2 border-gray-300 p-1 rounded-lg shadow-lg"></input>
            <label>Mobile No</label>
            <input type="text" className="border-2 border-gray-300 p-1 rounded-lg shadow-lg"></input>
            <label>Email</label>
            <input type="email" className="border-2 border-gray-300 p-1 rounded-lg shadow-lg"></input>
            <label>Adrees</label>
            <input type="text" className="border-2 border-gray-300 p-1 rounded-lg shadow-lg"></input>
            <button className="bg-lime-400 p-2 rounded-lg font-semibold mt-3 shadow-lime-400 shadow-md">Save</button>
            </div>
          </div>
        </div>
      </div>
      <Foter />
    </>
  );
};

export default EditProfile;
