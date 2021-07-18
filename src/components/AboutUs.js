import React, { Suspense } from "react";
import dealerShip from "../car-dealership-pics/car-dealership.jpg";
const Footer = React.lazy(() => import("./Footer"));

const AboutUs = () => {
  return (
    <>
      <div className="grid justify-center md:flex md:justify-around mt-16 w-10/12 lg:w-8/12 m-auto">
        <div>
          <h2 className="text-xl">Opening hours</h2>
          <div className="mt-4">
            <p className="font-semibold text-lg">Carwash</p>
            <p>Monday - Friday: 08-17</p>
          </div>
          <div className="mt-2">
            <p className="font-semibold text-lg">Carwrap</p>
            <p>Monday - Friday: 08-17</p>
          </div>
          <div className="mt-2">
            <p className="font-semibold text-lg">Repair shop</p>
            <p>Monday - Friday: 07-16</p>
          </div>
          <div className="mt-2">
            <p className="font-semibold text-lg">Car sale</p>
            <p>Monday - Saturday: 09-19</p>
          </div>
        </div>

        <div>
          <h2 className="text-xl mt-12 md:mt-0">Contact us</h2>
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
      <div className="w-10/12 lg:w-8/12 m-auto">
        <h2 className="text-center mb-6 mt-20 font-semibold text-2xl">
          ProCars is one of United States biggest provider of exclusive cars
        </h2>
        <p className="text-xl">
          With 40 years of experience in the industry with steady growth every
          year. Our facility is located in 2616 Rockford Road, Bedford, MA and
          with 20000m2 which stores over 400 cars under roof. We have a complete
          repair shop that suites every car brand. With our own special carwash
          products your car will look as brand new.{" "}
        </p>
      </div>
      <img
        src={dealerShip}
        alt="dealership"
        className="w-10/12 lg:w-8/12 h-auto m-auto mt-20 rounded shadow-md"
      />

      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
};

export default AboutUs;
