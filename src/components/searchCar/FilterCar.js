import React from "react";
import { carData } from "../../carData";

const FilterCar = (props) => {
  const { vehicleMake } = props;

  const filterCar = (name) => {
    if (name.make === vehicleMake) {
      return vehicleMake;
    } else if (vehicleMake === "all") {
      return carData;
    }
  };

  return (
    <div className="sm:flex sm:justify-center md:flex-wrap lg:flex-wrap my-24 w-10/12 sm:w-11/12 m-auto">
      {carData.filter(filterCar).map((car) => {
        const {
          id,
          img,
          carName,
          horsePower,
          price,
          monthlyPrice,
          year,
          miles,
        } = car;
        return (
          <div
            key={id}
            className="mb-6 sm:ml-4 shadow-lg rounded-lg overflow-hidden pb-4 sm:w-72 text-lg cursor-pointer hover:shadow"
          >
            <img src={img} alt={img} className="w-full h-auto" />
            <div className="flex my-2">
              <p className="mx-2 text-xl">{carName}</p>
              <p className="text-xl">{horsePower}HP</p>
            </div>
            <div className="ml-2">
              <p className="mb-1">Miles: {miles}</p>
              <p className="mb-1">Year: {year}</p>
              <p className="font-semibold -mb-1">{price} SEK</p>
              <p className="text-gray-500 text-base">
                {monthlyPrice} SEK / month
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FilterCar;
