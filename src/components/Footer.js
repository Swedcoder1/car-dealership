import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="grid sm:flex justify-around mt-12 pb-8 bg-black text-white">
      <div>
        <div className="my-4">
          <h2 className="text-xl">Contact us</h2>
          <div className="mt-4">
            <p className="font-semibold text-lg">Email</p>
            <p>procars.info@procars.com</p>
          </div>
          <div className="mt-2">
            <p className="font-semibold text-lg">Phone</p>
            <p>202-555-0123</p>
          </div>
          <div className="mt-2">
            <p className="font-semibold text-lg">Adress</p>
            <p>2616 Rockford Road, Bedford, MA</p>
          </div>
        </div>
      </div>
      <div className="my-4 ">
        <p className="mb-4 text-xl">Follow us</p>
        <div className="flex  sm:justify-around text-2xl ">
          <FaFacebook />
          <FiInstagram />
          <AiFillLinkedin />
        </div>
      </div>
    </div>
  );
};

export default Footer;
