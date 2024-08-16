import React, { useState } from "react";
import Navbar from "./Navbar";
import Foter from "./Foter";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Venderlogin = () => {

  const [phno,setphno] = useState('');
  const [password,setPassword] = useState('');

  const venLog = async(e) => {
    e.preventDefault();
    const data = {phno,password}
    await axios.post(`https://sparkstoideas.daddy11.in/vender/login`,data)
    .then((res) => {
      console.log(res);
      if(res.data.success == 1)
      {
        toast.success(res.data.message)
      }
      else{
        toast.error(res.data.message)
      }
    })
    .catch((err) => {
      console.log(err);
    }) 
  }

  return (
    <div className="h-screen">
      <Navbar />
      <div className="h-full  w-full relative">
        <img
          src="/images/propcar.png"
          className="w-full h-full opacity-90 absolute"
        ></img>
        <div className="justify-center items-center flex pt-16">
          <div className="w-1/3 bg-lime-50 rounded-2xl text-black opacity-70 p-8 z-10">
            <div className="flex w-full">
              <Link
                to={"/Login"}
                className="bg-gray-400 rounded-xl w-full p-3 text-center font-bold text-white"
              >
                User
              </Link>
              <Link
                to={"/Signup"}
                className="bg-lime-600 rounded-xl w-full p-3 text-center font-bold text-white"
              >
                Vender
              </Link>
            </div>
            <div className="flex flex-col mt-6 gap-3">
              <label>Phone No</label>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="bg-white p-3 border-2"
                value={phno}
                onChange={(e) => setphno(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col mt-6 gap-3">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="bg-white p-3 border-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button className="flex w-full justify-end  pt-2">Forgat Password?</button>
            <button className=" justify-center items-center w-full font-semibold text-white text-xl bg-lime-700 p-2 rounded-lg mt-2" onClick={venLog}>
              Vender Login
            </button>
           <p className="pt-3 text-center">Don't have an Account <span><Link to={'/VenderRegistration'} className="text-lime-700">Vender Register</Link></span></p>
          </div>
        </div>
      </div>
      <Foter />
    </div>
  );
};

export default Venderlogin;
