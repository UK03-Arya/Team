import React from "react";
// import { FaRegUserCircle } from "react-icons/fa";
// import Add from "../assets/Add.png";
import Syb from "../assets/Syb.png";
import DownArrow from "../assets/DownArrow.png";
const Card5 = () => {
  return (
    <div className="mt-0 mb-8 mx-10 xs:mx-1 ms:ml-8 xl:mx-48   ">
      <div className="relative box-content ml-1 md:ml-10 xs:ml-4  mt-4 sm:ml-6 h-[450px] xs:w-[275px] md:w-[650px] lg:w-[850px] lg:ml-16 lg:mt-8 xl:w-[1000px] md:h-96 md:pb-4 lg:pb-8 pb-4 xl:h-96 xl:pt-4 xl:pb-10   drop-shadow-xl rounded-2xl bg-white   ">
        <div>
                   <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row ml-4 xl:ml-10 ">
            <div className="flex flex-col mt-6 md:mt-4 lg:mt-2 xl:mt-2">
              <label
                for="DOB"
                className="block text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
              >
               Name
              </label>
              <div className="flex  ">
                <input
                  type="Name"
                  value="Nazneen Husain"
                  className="w-[250px] h-6 mt-2 text-xs pl-4  xl:w-96  xl:h-8 lg:w-96 lg:px-10 lg:h-6 md:w-28 md:px-36 rounded-full border-2	 border-gray-400 "
                />
                <span className="absolute text-md left-56 mt-4 	xl:left-60 xl:ml-36 lg:ml-32  md:ml-10">
                  <img src={Syb} alt="img" className="w-2 h-2  xl:h-4 xl:w-4" />
                </span>
              </div>
            </div>
            <div className="flex flex-col md:ml-2  lg:mt-2 mt-4  xl:ml-16">
              <label
                for="Email id"
                value="Email id"
                className="block text-xs ml-1 font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
              >
                Email Id
              </label>
              <div className="flex ">
                <input
                  type="text"
                  value="xyz@gmail.com"
                  className="w-[250px]  h-6 mt-2 ml-1 pl-4 text-xs lg:w-96 lg:px-10 lg:h-6  xl:w-96 xl:px-10 xl:h-8 md:w-28 md:px-36 rounded-full border-gray-400 border-2	"
                />
              
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row ml-4 mt-2 xl:ml-10">
            <div className="flex flex-col">
              <label
                for="Phone number"
                value="895225652"
                className="block text-xs font-semibold text-gray-800 xl:h-8 xl:text-md lg:text-md md:text-md"
              >
                Phone Number
              </label>
              <div className="flex ">
                <input
                  type="pp"
                  value="8956452"
                  className="w-[250px] h-6 text-xs lg:pl-10 mt-2 xl:-mt-1 pl-4 lg:w-96 lg:px-20 lg:h-6 xl:w-96  xl:h-8 xl:px-20 md:w-28 md:px-36 rounded-full border-2	 border-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col md:ml-2  xl:ml-16">
              <label
                for="Gender"
                className="block text-xs ml-1  font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
              >
                Staff Role
              </label>
              <div className="flex ">
                <input
                  type="text"
                  value="Instructor"
                  className="w-[250px]  h-6 text-xs mt-2 ml-1 pl-4 lg:w-96 lg:px-10 lg:h-6  xl:w-96 xl:px-10 xl:h-8 md:w-28 md:px-36 rounded-full border-gray-400 border-2	"
                />
                <span className="absolute text-md right-6 mt-4 lg:right-12 xl:right-28 md:right-6 ms:ml-64">
                  <img
                    src={DownArrow}
                    alt="img"
                    className="w-2 h-2 mr-8 xl:h-2 xl:mt-1 xl:w-3"
                  />
                </span>
              </div>
            </div>
            </div>
            <div className="flex flex-col md:mt-4 mt-2">
              <label
                for="Gender"
                className="block text-xs ml-6 font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
              >
                Message
              </label>
              <div className="flex ">
                <textarea
                 
                  className="w-full mx-8 h-28 xl:mb-4 xl:mx-8 px-4 pt-2 text-xs mt-2 xl:mt-4 xl:pt-2 ml-6 lg:mx-8 lg:pt-2 lg:px-10 lg:h-48 xl:w-full lg:w-full  xl:h-48 md:w-full md:px-10 md:mx-8 md:h-36 rounded border-gray-400 border-2	"
                />
              </div>
            </div>
         
          <div className="flex space-x-2  xl:pl-40 md:space-x-4 md:pl-8  lg:pl-48 pl-16 mt-6 xl:ml-56 xl:mt-0 xl:pb-8  lg:ml-40 md:ml-56 ">
            <div className=" border-2 text-[#023059] bg-white font-semibold px-4 py-1  rounded-full border-orange-300 text-sm  ">
              <button>Cancel</button>
            </div>
            <div className=" border-2 text-white bg-gradient-to-r from-orange-300 to-orange-500 font-semibold px-6 py-1 rounded-full text-sm">
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card5;
