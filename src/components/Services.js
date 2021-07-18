import React from "react";
import carWashImg from "../car-dealership-pics/carwash-bently.jpg";
import carWrapImg from "../car-dealership-pics/car-wrap.jpg";
import repairToolsImg from "../car-dealership-pics/repair-tools.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div>
        <div>
          <h3 className="text-center text-3xl mb-10">Our Services</h3>
        </div>

        <div className="grid w-4/5 m-auto sm:w-full sm:m-0 mt-8 md:flex md:justify-around">
          {/*  */}
          <div className="relative align-middle overflow-hidden shadow mb-6 sm:mb-0 sm:w-60 lg:w-80 rounded-md">
            <Link to="/carwash">
              <img
                src={carWashImg}
                alt="Bently"
                loading="lazy"
                className=" object-cover h-auto transform transition ease-in-out duration-400 hover:scale-105"
              />
              <div className="absolute top-2/4 left-2/4 transform -translate-y-1/2 -translate-x-1/2 pointer-events-none w-10/12 text-center">
                <p className="text-3xl text-white bg-black p-6 opacity-90 pointer-events-none rounded-sm">
                  Carwash
                </p>
              </div>
            </Link>
          </div>

          <div className="relative align-middle overflow-hidden shadow mb-6 rounded-md sm:w-60 lg:w-80 sm:mb-0">
            <Link to="/carwrap">
              <img
                src={carWrapImg}
                alt="Car wrap"
                loading="lazy"
                className="h-auto transform transition ease-in-out duration-400 hover:scale-105"
              />
              <div className="absolute top-2/4 left-2/4 transform -translate-y-1/2 -translate-x-1/2 pointer-events-none w-10/12 text-center">
                <p className="text-3xl text-white bg-black p-6 opacity-90 pointer-events-none rounded-sm">
                  Carwrap
                </p>
              </div>
            </Link>
          </div>

          <div className="relative align-middle overflow-hidden shadow mb-6 rounded-md sm:w-60 lg:w-80 sm:mb-0">
            <Link to="/repairshop">
              <img
                src={repairToolsImg}
                alt="Repair tools"
                loading="lazy"
                className="h-auto transform transition ease-in-out duration-400 hover:scale-105"
              />
              <div className="absolute top-2/4 left-2/4 transform -translate-y-1/2 -translate-x-1/2 pointer-events-none w-10/12 text-center">
                <p className="text-3xl text-white bg-black p-6 opacity-90 pointer-events-none rounded-sm">
                  Repair shop
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
