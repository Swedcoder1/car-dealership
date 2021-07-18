import React, { Suspense } from "react";
import blackLambo from "../car-dealership-pics/lambo-2.jpg";
const SearchCar = React.lazy(() => import("../components/searchCar/SearchCar"));
const Services = React.lazy(() => import("../components/Services"));
const Footer = React.lazy(() => import("../components/Footer"));

const HomePage = () => {
  return (
    <>
      <div className="bg-white">
        <div className="relative -top-16">
          <img
            src={blackLambo}
            alt="Black Lamborghini"
            loading="eager"
            className="h-screen w-screen object-cover z-10"
          />
          <div className="absolute bottom-0 w-full sm:pl-5 sm:w-2/4 text-center sm:text-left py-6 bg-black bg-opacity-40 rounded z-20">
            <p className="text-white text-3xl lg:text-5xl">EXPERIENCE</p>
            <p className="text-white text-3xl sm:pl-4 pt-2 lg:text-5xl">
              KNOWLEDGE
            </p>
            <p className="text-orange text-3xl sm:pl-8 pt-2 lg:text-5xl">
              NEW THINKING
            </p>
          </div>
        </div>

        <Suspense fallback={<div>Loading...</div>}>
          <SearchCar />
          <Services />
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default HomePage;
