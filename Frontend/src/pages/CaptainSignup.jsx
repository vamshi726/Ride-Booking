import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'



const CaptainSignup = () => {

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    
    const [vehicleColor, setVehicleColor] = useState('')
    const [vehiclePlate, setVehiclePlate] = useState('')
    const [vehicleCapacity, setVehicleCapacity] = useState('')
    const [vehicleType, setVehicleType] = useState('')
    
    const {captain,setCaptain}= React.useContext(CaptainDataContext);
    
    const navigate = useNavigate()


    const submitHandler= async (e)=>{
        e.preventDefault() 

        const captainData={
            fullName:{
                firstName:firstName,
                lastName:lastName
            },
            password:password,
            email:email,
            vehicle:{
                color:vehicleColor,
                plate:vehiclePlate,
                capacity:vehicleCapacity,
                vehicleType:vehicleType,
            }
        }
         
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData)
        
        if(response.status === 201){
            const data = response.data
            setCaptain(data.captain)
            localStorage.setItem('token',data.token)
            navigate('/captain-home')
        }

        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
        setVehicleColor('')
        setVehicleCapacity('')
        setVehicleType('')
        setVehiclePlate('')
    }


return (
    <div className="p-5 flex flex-col justify-between h-screen">
        <div>
        <img className='w-20 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />


            <form
                onSubmit={(e) => {
                    submitHandler(e);
                }}
            >
                <h3 className="text-base font-medium mb-2">What's our Captain's Name ?</h3> 
                <div className="flex gap-4 mb-4">

                <input
                    required
                    value={firstName}
                    onChange={(e)=>{
                            setFirstName(e.target.value)
                    }}
                    
                    className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-base placeholder:text-base"
                    type="text"
                    placeholder="First name"
                    />
                <input
                    required
                    value={lastName}
                    onChange={(e)=>{
                            setLastName(e.target.value)
                    }}
                    
                    className="bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-base placeholder:text-base"
                    type="text"
                    placeholder="Last name"
                    />
                    </div>

                <h3 className="text-base font-medium mb-2">What's our Captain's Email ?</h3>
                <input
                    value={email}
                    onChange={(e)=>{
                            setEmail(e.target.value)
                    }}
                 

                    className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-base"
                    type="email"
                    required
                    placeholder="email@example.com"
                />
                <h3 className="text-base font-medium mb-2">Enter Password</h3>
                <input
                    value={password}
                    onChange={(e)=>{
                            setPassword(e.target.value)
                    }}
                 

                    className="bg-[#eeeeee] mb-4 rounded px-4 py-2 border w-full text-base placeholder:text-base"
                    type="password"
                    required
                    placeholder="password"
                />

            <h3 className="text-base font-medium mb-2">Vehicle Information</h3>
            <div className="flex gap-4 mb-4">
                <input
                        value={vehicleColor}
                        onChange={(e) => {
                                setVehicleColor(e.target.value);
                        }}
                        className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base"
                        type="text"
                        required
                        placeholder="Vehicle Color"
                />
                <input
                        value={vehiclePlate}
                        onChange={(e) => {
                                setVehiclePlate(e.target.value);
                        }}
                        className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base"
                        type="text"
                        required
                        placeholder="Vehicle Plate"
                />
            </div>
            <div className="flex gap-4 mb-4">
                <input
                        value={vehicleCapacity}
                        onChange={(e) => {
                                setVehicleCapacity(e.target.value);
                        }}
                        className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base"
                        type="number"
                        required
                        placeholder="Vehicle Capacity"
                />
                <select
                        value={vehicleType}
                        onChange={(e) => {
                                setVehicleType(e.target.value);
                        }}
                        className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-base"
                        required
                >
                        <option value="" disabled>Select Vehicle Type</option>
                        <option value="car">Car</option>
                        <option value="auto">Auto</option>
                        <option value="motorcycle">Moto</option>
                </select>
            </div>

                <button className="bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-base placeholder:text-base">
                    Sign up
                </button>
                <p className="text-center">
                    Already have a account ?
                    <Link to="/captain-login" className="text-blue-600">
                        {" "}
                        Login here{" "}
                    </Link>
                </p>
            </form>
        </div>
        <div>
            

            <div>
                <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
                    Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
            </div>
        </div>
    </div>
);
}

export default CaptainSignup

 