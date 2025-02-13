import React from "react";

const ConfirmRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehcilePanelOpen(false);
        }}
        className="p-1 text-center absolute top-0 w-[93%] "
      >
        <i className="ri-arrow-down-wide-fill text-3xl text-gray-300"></i>
      </h5>
      <h3 className=" text-2xl font-semibold mb-5">Confirm your Ride </h3>
      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-44"
          src="https://www.svgrepo.com/show/408291/car-white.svg"
          alt="car"
        />
      </div>
      <div className="w-full mt-5">  
        <div className=" flex items-center gap-5 p-2 border-b-2">
        <i className=" text-lg ri-map-pin-user-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562-44/5</h3>
            <p className="text-sm text-gray-500">Madhapur, Hyderabad</p>
          </div>

        </div>
        <div className=" flex items-center gap-5 p-2 border-b-2" >
        <i className="ri-map-pin-2-fill"></i>
        <div>
            <h3 className="text-lg font-medium">562-44/5</h3>
            <p className="text-sm text-gray-500">Madhapur, Hyderabad</p>
          </div>
        </div>
        <div  className=" flex items-center gap-5 p-2">   
          <i className="ri-currency-fill"></i>
          <div>
            <h3 className="text-lg font-medium">₹193.65</h3>
            <p className="text-sm text-gray-500">Cash Cash </p>
          </div>
        </div>
      </div>
      <button 
        onClick={()=>{
          props.setVehicleFound(true)
          props.setConfirmRidePanel(false)

        }}
      className="w-full mt-5 bg-green-600 rounded-lg p-2 font-semibold text-white">
        Confirm
      </button>
    </div>
  );
};

export default ConfirmRide;
