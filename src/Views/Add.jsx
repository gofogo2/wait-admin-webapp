import React, { useEffect, useState } from "react";
import { addUser, onUserChildAdded, onUserChildChanged, onUserValueChanged } from "../api/firebase";

const Add = () => {
  const [user, setUser] = useState({phone:'',region:'+82'});
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("+82");
  const [isError,setIsError] = useState(false);
  const [isSuccess,setIsSuccess] = useState(false);

    useEffect(() => {
      // onUserChildAdded((user) => {
      //   console.log(user);
      // });
  
      // onUserChildChanged((user) => {
      //   console.log(user);
      // });

      onUserValueChanged((user)=>{
    
      });

    }, []);
  
  return (
    <div className="bg-samsungKaki w-[100vw] flex flex-col justify-start items-center pt-28 h-screen px-28">
      
      <div className="w-full text-5xl text-white ">
        Please enter the phone number.
      </div>
      <div className="w-full mt-5 text-5xl text-white">
        we will let you know when it's your turn!
      </div>

      <div className="flex flex-row items-center justify-center mt-12">
        <div
          className="px-6 py-4 text-3xl text-white bg-samsungselected rounded-l-2xl"
          style={{ fontFamily: "font_medium" }}
        >
          {region}
        </div>
        
        <input
          className="px-6 py-5 pr-32 text-xl rounded-r-2xl bg-samsungyellow "
          style={{ fontFamily: "font_medium" }}
          type="text"
          placeholder="Enter phone number"
          onChange={(e) => {  setUser((prev) => ({ ...prev, phone:e.target.value})); }}
          value={user.phone}
        />
      </div>
      {isError?<div className="w-screen text-center text-red-600" >Please enter your phone number correctly. </div>:""}
      {isSuccess?<div className="w-screen text-center text-blue-600" >success success success!!!!!!!!!!!</div>:""}
      <div>
      
        <div
          onClick={async () => {
            if(user.phone ===""){
                setIsError(true);
                setTimeout(()=>{setIsError(false)},4000);
            }else
            {
              const _ = await addUser(user);
              setIsSuccess(true);
              setTimeout(()=>{setIsSuccess(false)},4000)
            }
          }}
          className="w-40 px-2 py-4 mt-6 text-center bg-samsungyellow rounded-2xl "
        >
          Confirm
        </div>
      </div>
    </div>
  );
};
export default Add;
