import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import Add from "../assets/Add.png";
import Syb from "../assets/Syb.png";
import DownArrow from "../assets/DownArrow.png";
const Card9 = () => {
  return (
    <div className="flex xs:ml-10 sm:ml-16 xl:ml-10">
   {/* <div className="mt-4 mb-8  md:mx-8  flex xl:mx-48 justify-start ml-10 md:ml-10"> */}
    <div className='flex flex-wrap mt-4 md:mt-2  h-10   xl:mx-60  lg:mx-12 md:mx-10   rounded-2xl bg-white    xl:space-x-80 lg:justify-between md:justify-between 	'>

      <div className="relative box-content xs:w-[300px] xs:h-[475px] md:w-[625px] md:h[400px] lg:w-[875px] xl:w-[1000px]  xl:h-[500px] md:mr-8 xl:pt-4  drop-shadow-xl rounded-2xl bg-white   ">
        <div>
          <div className=" space-y-2 py-4 ml-8 xs:ml-4 xs:ml-4 xl:ml-10  ">
            <div className="flex space-x-10 ">
              {/* <img src={img} alt="img" className="w-14 h-14 " /> */}

              <div className="flex  ">
                <p className="text-xs mt-2 xl:text-lg xl:ml-2 xl:mt-0 lg:text-lg lg:ml-2 lg:mt-0 ">
                  Add Profile picture
                </p>
                {/* <img src={edit} alt="img" className="w-3 h-3 mt-1 ml-2 " /> */}
              </div>
            </div>
            <div className="flex ml-2">
              <div className="relative box-content ring-orange-300 border-2	mt-6 border-orange-400 	 h-24 w-26 xl:w-48  md:h-48  rounded-2xl  ">
                <div className="xl:text-8xl lg:text-8xl md:text-8xl text-5xl  mt-4  mx-2 text-orange-400 xl:mt-10 lg:mt-8 md:mt-8">
                  <FaRegUserCircle className="xl:ml-6 lg:ml-6  md:ml-6 ml-1  " />

                  <img
                    src={Add}
                    alt="img"
                    className="w-4 h-4 md:h-8 md:w-8 xl:h-8 xl:w-8 lg:h-8 lg:w-8 ml-10 xl:ml-32 lg:ml-32  md:ml-28"
                  />
                </div>
              </div>
              <div className="flex justify-center ">
              <div className="flex flex-col xs:ml-6 xl:mb-4 xl:ml-20 lg:ml-10 lg:mt-4   ">
                <div className="flex flex-col  md:mr-1 md:mt-6 lg:mr-0 xl:mr-0 ">
                  <label
                    for="DOB"
                    className="block text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
                  >
                    Name of team member{" "}
                  </label>
                  <div className="flex ">
                    <input
                      type="pp"
                      value=" twinkle"
                      className="w-[150px] text-xs h-6 pl-2 mt-2 xl:h-8 xl:w-[600px] xl:px-60 xl:pl-4  lg:h-8 lg:w-[600px] lg:px-0 lg:pl-8 md:h-8 md:w-96 md:px-0 md:pl-8 rounded-full border-2	 border-gray-400 "
                    />
                  </div>
                </div>
                <div className="flex  flex-col">
                  <label
                    for="DOB"
                    className="block text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md "
                  >
                    Contact Number{" "}
                  </label>
                  <div className="flex ">
                    <input
                      type="pp"
                      value="77777"
                      className="w-[150px] text-xs pl-2 h-6 mt-2 lg:h-8 lg:w-[600px] lg:px-0 lg:pl-8 xl:w-[600px] xl:px-60 xl:pl-4 xl:h-8  md:h-8 md:w-96 md:px-0 md:pl-8 rounded-full border-2	 border-gray-400 "
                    />
                    {/* <span className="absolute text-md right-4 mt-4 xl:mr-16 lg:mr-10	">
                      <img
                        src={Syb}
                        alt="img"
                        className="w-2 h-2 xl:h-4 xl:w-4"
                      />
                    </span> */}
                  </div>
                </div>
                <div className="flex flex-col">
                  <label
                    for="DOB"
                    className="block text-xs font-semibold text-black xl:text-md lg:text-md md:text-md"
                  >
                    Email ID{" "}
                  </label>
                  <div className="flex ">
                    <input
                      type="pp"
                      value="xyz@gmail.com"
                      className="w-[150px] text-xs h-6 mt-2 pl-2 xl:w-[600px] lg:h-8 lg:w-[600px] lg:px-80 lg:pl-10 xl:px-80 xl:pl-10 xl:h-8  md:h-8 md:w-96 md:px-0 md:pl-8 rounded-full border-2	 border-gray-400 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row ml-8 xs:ml-1 xl:ml-8 xl:space-x-16  lg:space-x-16 md:space-x-10 ">
            <div className="flex mt-4 flex-col ">
              <label
                for="DOB"
                className="block text-xs font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
              >
                D.O.B
              </label>
              <div className="flex ">
                <input
                  type="pp"
                  value="111"
                  className="w-[275px] text-xs pl-2 h-6 mt-2  xl:w-[350px] xl:px-40 xl:pl-8 xl:h-8 lg:w-[350px] lg:px-40 lg:pl-8 lg:h-8 md:w-64 md:px-40 md:pl-8 md:h-8 rounded-full border-2	 border-gray-400 "
                />
                <span className="absolute text-md xs:ml-60 mt-4 	xl:left-80 xl:ml-16 lg:ml-12 md:ml-56">
                  <img src={Syb} alt="img" className="w-2 h-2  xl:h-4 xl:w-4 lg:h-4 lg:w-4 md:h-4 md:w-4" />
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <label
                for="Gender"
                className="block text-xs mt-1 md:mt-4 font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
              >
                Gender
              </label>
              <div className="flex ">
                <input
                  type="text"
                  value="Female"
                  className="w-[275px] text-xs pl-2   h-6 mt-2  lg:w-[350px] lg:px-40 lg:pl-8 lg:h-8 xl:w-[350px] xl:px-40 xl:pl-8 xl:h-8 md:w-64 md:px-40 md:pl-8 md:h-8 rounded-full border-gray-400 border-2	"
                />
                <span className="absolute text-md xs:ml-60 mt-4 md:mt-5 lg:right-28  xl:right-44 md:ml-56 md:mb-3	">
                  <img
                    src={DownArrow}
                    alt="img"
                    className="w-2 h-2  xl:h-3 xl:w-3 lg:w-3 lg:h-3 md:w-3 md:h-3"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row ml-8 xs:ml-1 mt-2 xl:ml-8   xl:space-x-16 lg:space-x-16 md:space-x-10 ">
            <div className="flex flex-col">
              <label
                for="DOB"
                className="block mt-1 text-xs font-semibold text-gray-800 xl:h-8 xl:text-md lg:text-md md:text-md"
              >
                Language
              </label>
              <div className="flex ">
                <input
                  type="pp"
                  value="English"
                  className="w-[275px] mt-1 text-xs pl-2 h-6 lg:mt-2 lg:w-[350px]  lg:px-40 lg:pl-8 lg:h-8  xl:h-8 xl:w-[350px] xl:px-40 xl:pl-8 md:w-64 md:px-40 md:pl-8 md:h-8 md:mt-2 xl:mt-0  rounded-full border-2	 border-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                for="Gender"
                className="block text-xs mt-1 font-semibold text-gray-800 xl:text-md lg:text-md md:text-md"
              >
                Qualification
              </label>
              <div className="flex ">
                <input
                  type="text"
                  value="MCA"
                  className="w-[275px] text-xs pl-2 h-6 mt-2 xl:mt-4 lg:w-[350px]  lg:px-40 lg:pl-8 lg:h-8 xl:w-[350px] xl:px-40 xl:pl-8 xl:h-8 md:w-64 md:px-40 md:pl-8 md:h-8 rounded-full border-gray-400 border-2	"
                />
              </div>
            </div>
          </div>
          <div className="flex space-x-2   xl:pl-40 md:space-x-4 md:pl-8  lg:pl-36 xs:ml-12 mt-4  xl:ml-44 xl:mb-20 lg:mb-20 lg:ml-40 lg:8 mt- md:ml-48 xl:pb-8 lg:pb-8 md:pb-4 ">
            <div className=" border-2 text-[#023059] bg-white font-semibold px-4 py-1  rounded-full border-orange-300 text-sm  ">
              <button>Cancel</button>
            </div>
            <div className=" border-2 text-white bg-gradient-to-r from-orange-300 to-orange-500 font-semibold px-6 py-1 rounded-full text-sm">
              <button>Add</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Card9;
