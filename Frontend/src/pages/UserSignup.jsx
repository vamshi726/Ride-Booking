import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {UserDataContext} from "../context/UserContext"; 



const UserSignup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState('')
 

    const navigate = useNavigate()

    const {user,setUser} =React.useContext(UserDataContext)

    const submitHandler= async (e)=>{
        e.preventDefault() 

        const newUser= {
            fullName:{
                firstName:firstName,
                lastName:lastName
            },
            password:password,
            email:email
        }
        
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

        if(response.status===201){
            const data = response.data
            
            setUser(data.user)
            localStorage.setItem('token',data.token)
            navigate('/home')
        }
         
        
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
    }


  return (
    <div className="p-7 flex flex-col justify-between h-screen">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="lg font-medium mb-2">What's your Name ?</h3> 
          <div className="flex gap-4 mb-6">

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

          <h3 className="text-lg font-medium mb-2">What's your Email ?</h3>
          <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
           

            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base"
            type="email"
            required
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
           

            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-base"
            type="password"
            required
            placeholder="password"
          />
          <button className="bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-base placeholder:text-base">
            Sign up
          </button>
          <p className="text-center">
            Already have a account ?
            <Link to="/login" className="text-blue-600">
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
};

export default UserSignup;
