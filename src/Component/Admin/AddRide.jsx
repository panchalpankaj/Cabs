import React from "react";
import VenderNavbar from "./VenderNavbar";
import Foter from "../Comon/Foter";

const AddRide = () => {
  return (
    <>
      <VenderNavbar />
      <div>
        <div className="flex justify-center">
          <div className="border-2 p-2 rounded-lg my-9">
            <div className="flex w-full gap-2">
              <input type="text" placeholder="From..." className="border-2 p-2 rounded-md"></input>
              <input type="text" placeholder="To..." className="border-2 p-2 rounded-md"></input>
            </div>
            <div className="flex w-full gap-2 mt-4">
              <input type="date" placeholder="From..." className="border-2 p-2 rounded-md w-full"></input>
              <input type="time"  className="border-2 p-2 rounded-md w-full" ></input>
            </div>
            <div className="flex w-full gap-2 mt-4">
              <input type="text" placeholder="Price" className="border-2 p-2 rounded-md w-full"></input>
              <input type="dropdown" placeholder="Availbal set" className="border-2 p-2 rounded-md w-full" ></input>
            </div>
          </div>
        </div>
      </div>
      <Foter />
    </>
  );
};

export default AddRide;
