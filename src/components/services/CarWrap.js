import React, { Suspense } from "react";
import carWrap from "../../car-dealership-pics/carwrap1.jpg";
const Footer = React.lazy(() => import("../Footer"));

const CarWrap = () => {
  return (
    <>
      <div>
        <img
          src={carWrap}
          alt="carwrap"
          loading="eager"
          className="absolute top-0 h-screen w-screen object-cover z-10"
        />
        <div className="absolute py-10 px-8 sm:py-20 sm:px-32 bg-black bg-opacity-70 top-2/4 left-2/4 transform -translate-y-1/2 -translate-x-1/2 rounded z-20">
          <p className="text-white text-5xl ">Carwrap</p>
        </div>
      </div>
      <div className="h-screen"></div>

      <div className="w-8/12 lg:w-6/12 m-auto text-xl">
        <p>
          We have a professional wrapping team which wraps your car with the
          best products on the market. We offer logo wrap, half car wrap and
          full car wrap.
        </p>
        <div className="pt-6">
          <h1 className="mb-2 text-center text-2xl font-semibold">Logo wrap</h1>
          <p>
            If you want to have a logo on your car or multiple logos we got you.
            You decide where you want them and we wrap them. Price ranges from
            1000 - 10000 sek.
          </p>
        </div>
        <div className="pt-6">
          <h1 className="mb-2 text-center text-2xl font-semibold">
            Half car wrap
          </h1>
          <p>
            If you only want some parts wrapped it is fully possible. Price
            ranges from 5000 - 15000 sek.
          </p>
        </div>
        <div className="pt-6">
          <h1 className="mb-2 text-center text-2xl font-semibold">
            Full car wrap
          </h1>
          <p>
            Its our most bought service where we fully wrap the entier car.
            Price ranges from 15000 - 30000 sek.
          </p>
        </div>
        <p className="font-semibold text-xl mt-8">
          To book a wrapping session please contact us via phone (202-555-0123)
          or fill in the form below.
        </p>
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

export default CarWrap;
