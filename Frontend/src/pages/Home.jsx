import React, { useRef, useState } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehcilePanel from "../components/VehcilePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehcilePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)

  const [vehcilePanelOpen, setVehcilePanelOpen] = useState(false);

  const [confirmRidePanel, setConfirmRidePanel] = useState(false)

  const [vehicleFound, setVehicleFound] = useState(false)

  const [waitingForDriver, setWaitingForDriver] = useState(false )

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 20,
        // opacity:1
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: 0,

        // opacity:0
      });

      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehcilePanelOpen) {
      gsap.to(vehcilePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehcilePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehcilePanelOpen]);

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanel]);


  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);


  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);



  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="uber-logo"
      />
      <div className="h-screen w-screen">
        {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png"
          alt=""
        />
      </div>
      <div className="absolute top-0 h-screen w-full flex flex-col justify-end ">
        <div className="bg-white  h-[30%] p-6 relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute top-6 right-5 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickUp}
              onChange={(e) => {
                setPickUp(e.target.value);
              }}
              className="bg-[#eee]  px-12 py-2 text-base rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up loaction"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0 ">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehcilePanelOpen={setVehcilePanelOpen}
          />
        </div>
      </div>

      <div
        ref={vehcilePanelRef}
        className="fixed z-10 w-full bg-white translate-y-full bottom-0 px-3 py-10 pt-12"
      >
        <VehcilePanel setConfirmRidePanel={setConfirmRidePanel} setVehcilePanelOpen={setVehcilePanelOpen} />
      </div>
      <div
         ref={confirmRidePanelRef }
        className="fixed z-10 w-full bg-white translate-y-full bottom-0 px-3 py-6 pt-12"
      > 
      <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div 
      ref={vehicleFoundRef}
        className="fixed z-10 w-full bg-white translate-y-full bottom-0 px-3 py-6 pt-12"
      > 
       <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div  
      ref={waitingForDriverRef}
        className="fixed z-10 w-full bg-white  bottom-0 px-3 py-6 pt-12"
      > 
       <WaitingForDriver waitingForDriver={waitingForDriver}/>
      </div>


    </div>
  );
};

export default Home;
