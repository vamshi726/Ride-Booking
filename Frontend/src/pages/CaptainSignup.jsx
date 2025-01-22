import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const CaptainSignup = () => {

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault() 

        setUserData({
            fullName:{
                firstName:firstName,
                lastName:lastName
            },
            password:password,
            email:email
        })
         
        
        setEmail('')
        setPassword('')
        setFirstName('')
        setLastName('')
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
          <h3 className="lg font-medium mb-2">What's our Captain's Name ?</h3> 
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

          <h3 className="text-lg font-medium mb-2">What's our Captain's Email ?</h3>
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