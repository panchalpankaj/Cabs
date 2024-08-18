import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDollar,
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactForm from "../Comon/Contactform";
import Foter from "../Comon/Foter";
import Carlogo_and_text from "../Comon/Carlogo_and_text";
import VenderNavbar from "./VenderNavbar";

const VenderHome = () => {
  return (
    <>
    <VenderNavbar/>
        <div className="h-screen ">
        <img src="/images/Homeimage.jpg" className="w-full h-2/3" />
        <div className=" absolute z-10 justify-center p-4 bg-white border-2 rounded-lg ml-96 -mt-12 shadow-2xl">
          <input
            type="text"
            placeholder="Living From"
            className="border-2 rounded-lg m-2 border-gray-700 p-2"
          ></input>
          <input
            type="text"
            placeholder="Hoing to"
            className="border-2 rounded-lg m-2 border-gray-700 p-2"
          ></input>
          <input
            type="date"
            placeholder="Hoing to"
            className="border-2 rounded-lg m-2 border-gray-700 p-2"
          ></input>
          <button
            type="button"
            className="border-2 rounded-lg m-2 border-gray-700 p-2 bg-lime-500 px-12"
          >
            Search
          </button>
        </div>

        <div className="flex justify-evenly mt-24">
          <div className="w-1/5 border-2 p-7 rounded-lg border-gray-400">
            <p className="flex justify-center">
              <FontAwesomeIcon
                icon={faDollar}
                className="flex text-lime-600 text-2xl text-center justify-center"
              />
            </p>
            <p className="text-lg font-semibold">
              Your pick of rides at low prices
            </p>
            <p>
              No matter where you’re going, by bus or carpool, find the perfect
              ride from our wide range of destinations and routes at low prices.
            </p>
          </div>
          <div className="w-1/5 border-2 p-7 rounded-lg border-gray-400">
            <p className="flex justify-center">
              <FontAwesomeIcon
                icon={faDollar}
                className="flex text-lime-600 text-2xl text-center justify-center"
              />
            </p>
            <p className="text-lg font-semibold">
              Your pick of rides at low prices
            </p>
            <p>
              No matter where you’re going, by bus or carpool, find the perfect
              ride from our wide range of destinations and routes at low prices.
            </p>
          </div>
          <div className="w-1/5 border-2 p-7 rounded-lg border-gray-400">
            <p className="flex justify-center">
              <FontAwesomeIcon
                icon={faDollar}
                className="flex text-lime-600 text-2xl text-center justify-center"
              />
            </p>
            <p className="text-lg font-semibold">
              Your pick of rides at low prices
            </p>
            <p>
              No matter where you’re going, by bus or carpool, find the perfect
              ride from our wide range of destinations and routes at low prices.
            </p>
          </div>
        </div>

       <Carlogo_and_text heading1={'About us'}/>

        <div className="bg-lime-500 h-1/3 mt-4 px-36 flex">
          <div className="w-2/3 text-white pt-10">
            <p className="font-bold text-2xl">
              Help us keep you safe from scams
            </p>
            <p className="pt-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <button className="border-2 rounded-lg p-2 mt-6">Learn more</button>
          </div>
          <div className="h-full float-right">
            <img src="/images/Hometext.png" className="h-full"></img>
          </div>
        </div>

        <div className=" w-full">
          <h1 className="flex justify-center mb-2 mt-4">
            For More Details Contact us
          </h1>
          <div className="flex mx-52 gap-10">
            <div className="flex justify-center">
              <ContactForm />
            </div>
            <div>
              <p className="pl-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </p>
              <div className="flex gap-4 mt-6">
                <FontAwesomeIcon
                  icon={faLocationPin}
                  className="text-green-500 pt-4"
                />
                <p>
                  406 Akshat Tower, Nr. Pakwan Hotel, Opp. Rajpath Club, Sarkhej
                  - Gandhinagar Highway, Ahmedabad - 380054
                </p>
              </div>
              <div className="flex gap-4 mt-6">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-green-500 pt-2"
                />
                <p>cabs@gmail.com</p>
              </div>
              <div className="flex gap-4 mt-6">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-green-500 pt-2"
                />
                <p>1234567890</p>
              </div>
            </div>
          </div>
        </div>
      <Foter/>
      </div>
    </>
  )
}

export default VenderHome
