import React, { Suspense } from "react";
import engineImg from "../../car-dealership-pics/car-engine.jpg";
const Footer = React.lazy(() => import("../Footer"));

const RepairShop = () => {
  return (
    <>
      <div>
        <img
          src={engineImg}
          alt="engine"
          loading="eager"
          className="absolute top-0 h-screen w-screen object-cover z-10 "
        />
        <div className="absolute py-10 px-8 sm:py-20 sm:px-32 bg-black bg-opacity-70 top-2/4 left-2/4 transform -translate-y-1/2 -translate-x-1/2 rounded z-20">
          <p className="text-white text-5xl ">Repairshop</p>
        </div>
      </div>
      <div className="h-screen"></div>

      <div>
        <div className="w-8/12 m-auto text-xl">
          <p className="mb-4">
            We invest in high personal service at reasonable prices. We offer AC
            service, engine repair, timing belt replacement, wheel alignment,
            towbar assembly, clutch replacement and fixes inspection remarks.
          </p>
          <p>
            We perform car service on all car brands and we always follow the
            manufacturer's instructions on each car model. We only use parts of
            original quality, which means parts of the same or better quality
            than the original car parts. We have the latest software to be able
            to turn off the service light on most car brands and model years. Of
            course, your new car warranty applies in full when you service or
            repair your car with us.
          </p>
          <p className="font-semibold text-xl mt-4">
            Prices for the repair may vary depending on what type of car model,
            brand etc. Please contact us via phone (202-555-0123) or fill in the
            form below for further valuation.
          </p>
        </div>
      </div>
      <form className="my-12">
        <div className="m-auto w-11/12 md:w-2/4">
          <label htmlFor="fname" className="block mb-3">
            <span>Full name</span>
            <input
              type="text"
              name="fname"
              placeholder="John Smith"
              className="form-input mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label htmlFor="phone" className="block mb-3">
            <span>Phone number</span>
            <input
              type="tel"
              name="phone"
              placeholder="123-45-678"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              className="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label htmlFor="email" className="block mb-3">
            <span>Email</span>
            <input
              type="email"
              name="email"
              placeholder="John@example.com"
              className="mt-1 block w-full rounded-md border-gray-500 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </label>
          <label htmlFor="textarea">
            <span>Additional details</span>
            <textarea
              name="textarea"
              cols="20"
              rows="5"
              className="mt-1 block w-full rounded-md border-gray-500 shadow-sm resize-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            ></textarea>
          </label>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="bg-orange py-3 px-16 rounded-md text-lg hover:bg-orange-light">
            Send
          </button>
        </div>
      </form>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default RepairShop;
