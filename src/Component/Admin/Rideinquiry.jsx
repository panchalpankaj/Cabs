import React, { useState } from "react";
import VenderNavbar from "./VenderNavbar";
import Foter from "../Comon/Foter";

const Rideinquiry = () => {
  const [button1Color, setButton1Color] = useState("green");
  const [button2Color, setButton2Color] = useState("White");

  const handleButton1Click = () => {
    setButton1Color(button1Color === "White" ? "green" : "White");
    setButton2Color("White");
  };

  const handleButton2Click = () => {
    setButton2Color(button2Color === "white" ? "green" : "white");
    setButton1Color("white");
  };

  return (
    <>
      <VenderNavbar />
      <p className="text-center my-9 font-semibold text-lg">Total your Ride : 0</p>
      <div className="flex justify-center">
        <div className="w-4/5 flex">
          <button
            className="w-full border-2 p-2 rounded-lg"
            style={{ backgroundColor: button1Color }}
            onClick={handleButton1Click}
          >
            Upcoming Ride
          </button>
          <button
            className="w-full border-2 p-2 rounded-lg"
            style={{ backgroundColor: button2Color }}
            onClick={handleButton2Click}
          >
            Complet Ride
          </button>
        </div>
      </div>
      <Foter />
    </>
  );
};

export default Rideinquiry;
