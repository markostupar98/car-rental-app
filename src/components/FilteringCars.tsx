import React from "react";

function FilteringCars() {
  return (
    <div className="mt-10 mx-3 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Catalog</h2>
        <h2>Explore Various Companies that offer car rental services</h2>
      </div>
      <div className="flex gap-5">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            City
          </option>
          <option>Banja Luka</option>
          <option>Prijedor</option>
        </select>
        <select className="select select-bordered md:block w-full max-w-xs">
          <option disabled selected>
            Manufactor
          </option>
          <option>BMW</option>
          <option>Audi</option>
        </select>
      </div>
    </div>
  );
}

export default FilteringCars;
