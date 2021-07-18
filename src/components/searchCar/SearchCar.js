import React, { useState, Suspense } from "react";
const FilterCar = React.lazy(() => import("../searchCar/FilterCar"));

const SearchCar = () => {
  const [vehicleMake, setVehicleMake] = useState("all");

  const displayCar = (e) => {
    e.preventDefault();

    setVehicleMake(e.target.value);
  };

  return (
    <>
      <div>
        <h3 className="text-3xl text-center">Search cars</h3>

        <form>
          <div>
            <div className="flex justify-center mt-4">
              <select
                name="make"
                id="make"
                value={vehicleMake}
                onChange={displayCar}
                className="rounded-sm w-72 h-14 text-lg border-2"
              >
                <option className="hidden">Make</option>
                <option value="all">All</option>
                <option value="Audi">Audi</option>
                <option value="Mercedes">Mercedes</option>
                <option value="BMW">BMW</option>
              </select>
            </div>
          </div>
        </form>
      </div>

      {/* Display cars */}
      <Suspense fallback={<div>Loading...</div>}>
        <FilterCar vehicleMake={vehicleMake} setVehicleMake={setVehicleMake} />
      </Suspense>
    </>
  );
};

export default SearchCar;
