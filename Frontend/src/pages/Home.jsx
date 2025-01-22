import React from 'react'
import { Link } from 'react-router-dom' 

const Home = () => {
  return (
    <div>
        <div className='bg-cover bg-[url(https://i.postimg.cc/gzVn8Yj1/fetchpik-com-9-Vv-BHz-Aa-M5.jpg)] h-screen pt-8 w-full flex justify-between flex-col '>
            <img className='w-16 m-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className='bg-white py-4 px-4 pb-7'>
                <h2 className='text-2xl font-bold'>Get Started with Uber</h2>
                <Link to='/login' className='w-full flex items-center justify-center bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
            </div>
        </div>

    </div>
  )
}

export default Home