import React from "react";
import VenderNavbar from "./VenderNavbar";
import Foter from "../Comon/Foter";

const ChangePassword = () => {
  return (
    <>
      <VenderNavbar />
      <div>
        <div className="flex justify-center">
          <div className="w-2/6 border-2 p-2 mt-10 shadow-lg rounded-lg">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-semibold text-center mt-5">
                Change Password
              </p>
              <label>Old Password</label>
              <input
                type="password"
                className="border-2 border-gray-300 p-1 rounded-lg shadow-lg"
              ></input>
              <label>New Password</label>
              <input
                type="password"
                className="border-2 border-gray-300 p-1 rounded-lg shadow-lg"
              ></input>
              <label>Confirm Password</label>
              <input
                type="password"
                className="border-2 border-gray-300 p-1 rounded-lg shadow-lg"
              ></input>
              <button className="bg-lime-400 p-2 rounded-lg font-semibold mt-8 shadow-lime-400 shadow-md">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <Foter />
    </>
  );
};

export default ChangePassword;
