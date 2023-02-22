import React from 'react'
import Menu from "../assets/Menu.png";
import Bell from "../assets/Bell.png";
import DownArrow from "../assets/DownArrow.png";

import Profile from "../assets/Profile.png";




const Nav = () => {
  return (
   <div className='flex  ml-4 justify-center'>
    <div className='flex flex-wrap mt-4   h-10 p-8  xl:w-[1359px] xl:h-[60px]  md:w-[1200px]  lg:w-[1359px] lg:h-[60px] w-[400px]  xl:mx-40  lg:mx-12 md:mx-10  drop-shadow-xl rounded-2xl bg-white justify-between space-x-4    xl:space-x-80 lg:justify-between md:justify-between 	'>
    <div className='flex flex-wrap space-x-2 ml-2 xl:ml-8'>
    <img src={Menu} alt="img" className="w-4 h-4 mt-1 " />
    <p className="font-bold text-orange-500	" >
              Learn
              <span className="font-semibold text-black">Net </span>{" "}
            </p>
            </div>
            <div className='flex flex-wrap pl-1 xl:pl-80 lg:pl-80 md:pl-80 xl:mr-40  '>
            <img src={Bell} alt="img" className="w-3 h-3 mt-2 xl:ml-10 xl:block lg:block md:block hidden  " />

<p className='text-xs ml-2 mt-1 xl:ml-4 xl:block lg:block md:block hidden '> Help & FAQ</p>
<img src={Profile} alt="img" className="w-4 h-4 mt-1 ml-4 " />
<img src={DownArrow} alt="img" className="w-2 h-2 mt-2 ml-3 xl:ml-10 " />

            </div>
    </div></div>


  )
}

export default Nav