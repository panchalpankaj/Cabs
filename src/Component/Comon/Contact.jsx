import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import PropsPract from "./PropsPract";
import { CiLocationOn } from "react-icons/ci";
import ContactForm from "./Contactform";
import Foter from "./Foter";
import { BiMobile } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <PropsPract Heading={"Contact us"} />
      <div className="mt-96 flex justify-evenly max-w-6xl mx-auto">
        <div
          className="size-64 w-80 rounded-lg p-6 flex flex-col items-center"
          style={{ backgroundColor: "rgb(242,242,242)" }}
        >
          <CiLocationOn
            className="font-bold text-4xl justify-center flex text-cyan-600"
            style={{ color: "rgb(74,222,128)" }}
          />
          <p className="text-2xl pt-2">Address :</p>
          <p className="text-center pt-6 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic commodi
            in iure, fugit ducimus optio.
          </p>
        </div>
        <div
          className="size-64 w-80 rounded-lg p-6 flex flex-col items-center"
          style={{ backgroundColor: "rgb(242,242,242)" }}
        >
          <BiMobile
            className="font-bold text-4xl justify-center flex text-cyan-600"
            style={{ color: "rgb(74,222,128)" }}
          />
          <p className="text-2xl pt-2">Mobile No:</p>
          <p className="text-center pt-6 text-gray-400">+1234567890</p>
          <p className="text-center text-gray-400">+1234567890</p>
        </div>
        <div
          className="size-64 w-80 rounded-lg p-6 flex flex-col items-center"
          style={{ backgroundColor: "rgb(242,242,242)" }}
        >
          <MdEmail
            className="font-bold text-4xl justify-center flex text-cyan-600"
            style={{ color: "rgb(74,222,128)" }}
          />
          <p className="text-2xl pt-2">Email :</p>
          <p className="text-center pt-6 text-gray-400">info@gmail.com</p>
        </div>
      </div>
      <div className="mx-60 flex mt-6 gap-24">
        <div>
          <p className="text-2xl font-semibold mb-4">Send us An Email</p>
          <ContactForm />
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.269980526099!2d72.54582587509432!3d23.102543879117814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e831ef3000001%3A0x49d12bbb154a1dd7!2sNew%20Ranchodraynagar%20Society!5e1!3m2!1sen!2sin!4v1722491030723!5m2!1sen!2sin"
            width={535}
            height={400}
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-lg mt-6"
          ></iframe>
        </div>
      </div>
      <Foter />
    </div>
  );
};

export default Contact;
