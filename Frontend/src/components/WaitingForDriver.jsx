import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
    <h5
      onClick={() => {
        props.waitingForDriver(false);
      }}
      className="p-1 text-center absolute top-0 w-[93%] "
    >
      <i className="ri-arrow-down-wide-fill text-3xl text-gray-300"></i>
    </h5> 

    <div className='flex items-center justify-between'>
    <img
          className="h-24"
          src="https://www.svgrepo.com/show/408291/car-white.svg"
          alt="car"
        />

        <div className='text-right'>
          <h2 className='text-lg font-medium'>Vamshi</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>TG 01 AB1234</h4>
          <p className='text-sm text-gray-600'>Volvo S90</p>
        </div>

    </div>
    <div className="flex gap-2 justify-between flex-col items-center">
    
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
  </div>
  )
}

export default WaitingForDriver