import React from 'react'

const LocationSearchPanel = (props) => {
    

    //sample array for location

    const locations = [
        "Follicure | Best Hair Transplant , Sharada Complex, Hyderabad",
        "Shree Shresta Wood Pressed Oil, Krishna nagar,  Hyderabad",
        "Unio Labs Private Limited, Hyderabad",
        "ZUDIO - Madhapur, Hyderabad"
    ]

  return (
    <div>
        {/* this is sample data */}

        {
            locations.map((element ,idx )=>{
                return  <div key={idx} onClick={()=>{
                    props.setVehcilePanelOpen(true)
                    props.setPanelOpen(false)
                }} className='flex gap-4 border-2  border-gray-50 active:border-black p-3 rounded-xl items-center justify-start my-2'>  
                <h2 className='bg-[#eee] p-3 justify-center items-center m-2 rounded-full'>
                    <i className="ri-map-pin-2-fill "></i></h2>
                <h4 className='font-medium'>{`${element}`}</h4>
            </div>
            })
        }
         
    </div>
  )
}

export default LocationSearchPanel