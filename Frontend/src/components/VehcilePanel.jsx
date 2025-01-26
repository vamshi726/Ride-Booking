import React from 'react'

const VehcilePanel = (props) => {
  return (
    <div>
        
        <h5 onClick={()=>{
                props.setVehcilePanelOpen(false)
               }} 
               className='p-1 text-center absolute top-0 w-[93%] '>
                  <i className="ri-arrow-down-wide-fill text-3xl text-gray-300"></i>
               </h5>


                <h3 className=' text-2xl font-semibold mb-5'>Choose a Vehcile</h3>
              <div className='flex border-2 active:border-black  mb-2 rounded-xl w-full items-center justify-between p-3'>
                <img className='h-20' src="https://www.svgrepo.com/show/408291/car-white.svg" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-sm'>UberGo <span><i className="ri-user-3-fill">4</i></span></h4>
                    <h5 className='font-medium text-sm'>4 mins away</h5>
                     <p className='font-medium text-xs text-gray-700'>Affordable, compact rides</p>
                 </div>
                 <h2 className='text-xl font-semibold'>₹193.30</h2>
              </div>
              <div className='flex border-2 active:border-black  mb-2 rounded-xl w-full items-center justify-between p-3'>
                <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-sm'>Moto <span><i className="ri-user-3-fill">1</i></span></h4>
                    <h5 className='font-medium text-sm'>3mins away</h5>
                     <p className='font-medium text-xs text-gray-700'>Affordable motorcycle rides</p>
                 </div>
                 <h2 className='text-xl font-semibold'>₹65.14</h2>
              </div>
              <div className='flex border-2 active:border-black  mb-2 rounded-xl w-full items-center justify-between p-3'>
                <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-sm'>UberAuto <span><i className="ri-user-3-fill">3</i></span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                     <p className='font-medium text-xs text-gray-700'>Affordable auto rides</p>
                 </div>
                 <h2 className='text-xl font-semibold'>₹112.26</h2>
                 
              </div>
    </div>
  )
}

export default VehcilePanel