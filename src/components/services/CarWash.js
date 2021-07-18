import React, { Suspense } from "react";
import carWashImg from "../../car-dealership-pics/carwash-page.jpg";
const Footer = React.lazy(() => import("../Footer"));

const CarWash = () => {
  return (
    <>
      <div>
        <img
          src={carWashImg}
          alt="carwash bently"
          loading="eager"
          className="absolute top-0 h-screen w-screen object-cover z-10 "
        />
        <div className="absolute py-10 px-8 sm:py-20 sm:px-32 bg-black bg-opacity-70 top-2/4 left-2/4 transform -translate-y-1/2 -translate-x-1/2 rounded z-20">
          <p className="text-white text-5xl">Carwash</p>
        </div>
      </div>
      <div className="h-screen"></div>

      <div>
        <div>
          <h1 className="text-center text-3xl mb-4">Hand wash</h1>
          <div className="w-8/12 m-auto text-xl">
            <p className="mb-4">
              We perform hand washing on all cars with the absolute best
              products on the market. We vacuum the car, clean carpets and wipe
              windows inside / outside your car so that it feels fresh to stay
              in. Both for you and your passengers.
            </p>
            <p>
              Our certified technicians can take care of your everyday car as
              well as your supercar.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h1 className="text-center text-3xl mb-4">Hand wash with polish</h1>
          <div className="w-8/12 m-auto text-xl">
            <p>
              Our technicians work with the latest technology in machinery and
              materials. We carefully select the types of products we work with
              that benefit both the environment and facilitate all types of jobs
              for our technicians.
            </p>
            <p className="mt-4">
              It always starts with the car's surface layer being washed
              thoroughly and then with foam wash. Internal cleaning consists of
              vacuuming, cleaning of dust and drying. We clean all windows.
            </p>
            <p className="mt-4">
              We then move on to inspecting the condition of the paint on the
              car! Based on the inspection, it is decided what type of products
              we will use to achieve the best solution for your car's paint. The
              car is then machine polished in several steps to achieve maximum
              effect.
            </p>
          </div>
        </div>

        <div className="mt-12 mb-8 p-10 shadow w-10/12 md:w-8/12 lg:w-7/12 m-auto rounded-xl">
          <div>
            <div className="grid justify-center text-center md:flex md:justify-between mb-5 border-b-2 border-dotted border-gray-400 ">
              <p className="text-lg lg:text-xl">External carwash</p>
              <p className="text-lg font-semibold lg:text-xl">60 min 450 kr</p>
            </div>
            <div className="grid justify-center text-center md:flex md:justify-between mb-5 border-b-2 border-dotted border-gray-400">
              <p className="text-lg lg:text-xl">Internal carwash</p>
              <p className="text-lg font-semibold lg:text-xl">60 min 450 kr</p>
            </div>
            <div className="grid justify-center text-center md:flex md:justify-between mb-5 border-b-2 border-dotted border-gray-400">
              <p className="text-lg lg:text-xl">Full carwash</p>
              <p className="text-lg font-semibold lg:text-xl">
                200 min 3000 kr
              </p>
            </div>
            <div className="grid justify-center text-center md:flex md:justify-between mb-5 border-b-2 border-dotted border-gray-400">
              <p className="text-lg lg:text-xl">Carwash with polish</p>
              <p className="text-lg font-semibold lg:text-xl">80 min 1500 kr</p>
            </div>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default CarWash;
