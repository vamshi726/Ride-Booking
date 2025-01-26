import React, { useRef, useState } from 'react'

import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'

const Home = () => {


  const [pickUp, setPickUp] = useState( '')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler=(e)=>{
    e.preventDefault()
  }

  useGSAP(()=>{
   if(panelOpen){
    gsap.to(panelRef.current,{
      height:'70%',
      padding:20
      // opacity:1
    })
    gsap.to(panelCloseRef.current,{
      opacity:1
    })
   }else{
    gsap.to(panelRef.current,{
      height:'0%',
      padding:0

      // opacity:0
    })
    
    gsap.to(panelCloseRef.current,{
      opacity:0
    })
   }


  },[panelOpen])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber-logo" />
      <div className='h-screen w-screen'>
        {/* image for temporary use */}
        <img className='h-full w-full object-cover' src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png" alt="" />
      </div>
      <div className='absolute top-0 h-screen w-full flex flex-col justify-end ' >
        <div className='bg-white  h-[30%] p-6 relative'>
          <h5
          ref={panelCloseRef}
          onClick={()=>{ 
            setPanelOpen(false)
          }} className='absolute top-6 right-5 text-2xl'>
          <i className="ri-arrow-down-wide-line"></i>
          </h5 >
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}>

          <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full'></div>
          <input
            onClick={()=>{
              setPanelOpen(true)
            }}

            value={pickUp}
            onChange={(e)=>{
              setPickUp(e.target.value)
            }} 
            className='bg-[#eee]  px-12 py-2 text-base rounded-lg w-full mt-5'
            type="text"
            placeholder='Add a pick-up loaction' />
          <input 

           onClick={()=>{
              setPanelOpen(true)
            }}

            value={destination}
            onChange={(e)=>{
              setDestination(e.target.value)
            }} 
          className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type="text" placeholder='Enter your destination' />
        </form>
        </div>
        <div ref={panelRef}  className=' bg-white h-0 '>
          <LocationSearchPanel/>
        </div>
      </div>
            
          <div className='fixed z-10 w-full bg-white  bottom-0 p-3'>
                <h3 className=' text-2xl font-semibold mb-5'>Choose a Vehcile</h3>
              <div className='flex border-2 border-black mb-2 rounded-xl w-full items-center justify-between p-3'>
                <img className='h-20' src="https://www.svgrepo.com/show/408291/car-white.svg" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-sm'>UberGo <span><i className="ri-user-3-fill">4</i></span></h4>
                    <h5 className='font-medium text-sm'>4 mins away</h5>
                     <p className='font-medium text-xs text-gray-700'>Affordable, compact rides</p>
                 </div>
                 <h2 className='text-xl font-semibold'>₹193.30</h2>
              </div>
              <div className='flex border-2 border-black mb-2 rounded-xl w-full items-center justify-between p-3'>
                <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-sm'>Moto <span><i className="ri-user-3-fill">1</i></span></h4>
                    <h5 className='font-medium text-sm'>3mins away</h5>
                     <p className='font-medium text-xs text-gray-700'>Affordable motorcycle rides</p>
                 </div>
                 <h2 className='text-xl font-semibold'>₹65.14</h2>
              </div>
              <div className='flex border-2 border-black mb-2 rounded-xl w-full items-center justify-between p-3'>
                <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                <div className='ml-2 w-1/2'>
                    <h4 className='font-medium text-sm'>UberAuto <span><i className="ri-user-3-fill">3</i></span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                     <p className='font-medium text-xs text-gray-700'>Affordable auto rides</p>
                 </div>
                 <h2 className='text-xl font-semibold'>₹112.26</h2>
              </div>
              
          </div>

    </div>
  )
}

export default Home