import React, { useState } from "react";
import Navbar from "./Navbar";
import Foter from "./Foter";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const Userregistration = () => {

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [email,setEmail] = useState('');
    const [phno,setphno] = useState('');
    const [password,setpassword] = useState('');
    const [confirmpassword,setconfirmpassword] = useState('');


    const UserRefister = async(e) => {
        e.preventDefault();
        const data = {firstName,lastName,email,phno,password,confirmpassword};
        await axios.post('https://sparkstoideas.daddy11.in/user/register',data)
        .then((res) => {
            console.log(res)
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
        <div className="justify-center items-center flex pt-6">
          <div className="w-1/3 bg-lime-50 rounded-2xl text-black opacity-70 p-8 z-10">
            <div className="flex w-full">
              <Link
                to={"/UserRegistration"}
                className="bg-lime-600 rounded-xl w-full p-3 text-center font-bold text-white"
              >
                User
              </Link>
              <Link
                to={"/VenderRegistration"}
                className="bg-gray-400 rounded-xl w-full p-3 text-center font-bold text-white"
              >
                Vender
              </Link>
            </div>
            <div className="flex flex-col mt-4 gap-0">
              <label>First Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="bg-white p-1 border-2 rounded-lg"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col mt-4 gap-0">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Enter your Last Name"
                className="bg-white p-1 border-2 rounded-lg"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col mt-4 gap-0">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className="bg-white p-1 border-2 rounded-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col mt-4 gap-0">
              <label>Mobile No</label>
              <input
                type="text"
                placeholder="Mobile No"
                className="bg-white p-1 border-2 rounded-lg"
                value={phno}
                onChange={(e) => setphno(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col mt-4 gap-0">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                className="bg-white p-1 border-2 rounded-lg"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              ></input>
            </div>
            <div className="flex flex-col mt-4 gap-0">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm Password"
                className="bg-white p-1 border-2 rounded-lg"
                value={confirmpassword}
                onChange={(e) => setconfirmpassword(e.target.value)}
              ></input>
            </div>

            <button className="flex w-full justify-end  pt-2">
              Forgat Password?
            </button>
            <button className=" justify-center items-center w-full font-semibold text-white text-xl bg-lime-700 p-2 rounded-lg mt-2"
            onClick={UserRefister}
            >
              User Register
            </button>
            <p className="pt-3 text-center">
              Don't have an Account{" "}
              <span>
                <Link to={"/Login"} className="text-lime-700">
                  User Login
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
      <Foter />
    </div>
  );
};

export default Userregistration;
