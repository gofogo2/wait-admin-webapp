import Lottie from "lottie-react";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import animationData from "../menu.json";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectMenu] = useState(0);
  const lottieRef = useRef();
  
  useEffect(()=>{
    // lottieRef.setSpeed(2);
  },[]);

  const navigate = useNavigate();
  return (
    <div className={`fixed top-0 left-0 w-full `}>
      <div
        className={`w-full h-14 bg-samsungKaki flex flex-row items-center`}
      >
        <div
          className="w-8 h-8 p-0 m-0 ml-3"
          onClick={() => {
            if (isOpen) {
              setIsOpen(false);
              lottieRef.current.setSpeed(4);
              lottieRef.current.playSegments([99, 0], true);
              
            } else {
              setIsOpen(true);
              lottieRef.current.setSpeed(4);
              lottieRef.current.playSegments([0, 99], true);
            }
          }}
        >
          <Lottie
            
            lottieRef={lottieRef}
            animationData={animationData}
            autoplay={false}
            loop={false}
            controls={true}
            speed={0.25}

          />
        </div>
        <div className="ml-5 text-white" >Dashboard</div>
      </div>
      <div
        className={`border-t-[0.1px] border-gray bg-white  shadow-black shadow-lg flex flex-col ${
          !isOpen ? "w-[20%] animate-pushMenuIn" : "w-[20%] animate-pushMenuOut"
        } ${isOpen?"h-screen":"h-0"} }`}
      >
        <div className="mt-10 ml-3 text-2xl">Admin</div>
        <div>
          <div 
            className={`${
              selectedMenu === 0 ? "bg-samsungselected" : "bg-white"
            } mt-3 py-3 px-3`}
            onClick={() => {
              setSelectMenu(0);
              setIsOpen(false);
              lottieRef.current.setSpeed(4);
              lottieRef.current.playSegments([99, 0], true);
              navigate('/dashboard');
            }}
          >
            -Dashboard
          </div>
          <div
            className={`${
              selectedMenu === 1 ? "bg-samsungselected" : "bg-white"
            } py-3 px-3`}
            onClick={() => {
              setSelectMenu(1);
              setIsOpen(false);
              lottieRef.current.setSpeed(4);
              lottieRef.current.playSegments([99, 0], true);
              navigate('/setting');
            }}
          >
            -Setting
          </div>
          <div
            className={`${
              selectedMenu === 2 ? "bg-samsungselected" : "bg-white"
            } py-3 px-3`}
            onClick={() => {
              setSelectMenu(2);
              setIsOpen(false);
              lottieRef.current.setSpeed(4);
              lottieRef.current.playSegments([99, 0], true);
              navigate('/list');
            }}
          >
            -List
          </div>
          <div
            className={`${
              selectedMenu === 3 ? "bg-samsungselected" : "bg-white"
            } py-3 px-3`}
            onClick={() => {
              setSelectMenu(3);
              setIsOpen(false);
              lottieRef.current.setSpeed(4);
              lottieRef.current.playSegments([99, 0], true);
              navigate('/add');
            }}
          >
            -Add
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
