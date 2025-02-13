import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link to='/home' className="fixed bg-white flex items-center right-2 top-2 justify-center rounded-full h-10 w-10"> 
      <i className="ri-home-4-line text-lg font-medium"></i>
      </Link>
      <div className="h-1/2 ">
      <img
          className="h-full w-full object-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-24"
            src="https://www.svgrepo.com/show/408291/car-white.svg"
            alt="car"
          />

          <div className="text-right">
            <h2 className="text-lg font-medium">Vamshi</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">TG 01 AB1234</h4>
            <p className="text-sm text-gray-600">Volvo S90</p>
          </div>
        </div>
        <div className="flex gap-2 justify-between flex-col items-center"></div>
        <div className="w-full mt-5">
          <div className=" flex items-center gap-5 p-2 border-b-2">
            <i className="ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562-44/5</h3>
              <p className="text-sm text-gray-500">Madhapur, Hyderabad</p>
            </div>
          </div>
          <div className=" flex items-center gap-5 p-2">
            <i className="ri-currency-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.65</h3>
              <p className="text-sm text-gray-500">Cash Cash </p>
            </div>
          </div>
        </div>
        <button className="w-full mt-5 bg-green-600 rounded-lg p-2 font-semibold text-white">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
