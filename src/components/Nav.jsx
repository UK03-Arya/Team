import React from 'react'
import Menu from "../assets/Menu.png";
import Bell from "../assets/Bell.png";
import DownArrow from "../assets/DownArrow.png";

import Profile from "../assets/Profile.png";




const Nav = () => {
  return (
   
    <div className='flex flex-wrap  h-12 mt-10 mx-10 xl:mx-40 lg:mx-10 md:mx-10 p-4 drop-shadow-xl rounded-2xl bg-white   space-x-12  xl:space-x-80 lg:space-x-80 md:space-x-20 	'>
    <div className='flex flex-wrap space-x-2 xl:ml-8'>
    <img src={Menu} alt="img" className="w-4 h-4 mt-1 " />
    <p className="font-bold text-orange-500	" >
              Learn
              <span className="font-semibold text-black">Net </span>{" "}
            </p>
            </div>
            <div className='flex flex-wrap xl:pl-80 lg:pl-80 md:pl-80 xl:mr-40 '>
            <img src={Bell} alt="img" className="w-3 h-3 mt-2 xl:ml-10 " />

<p className='text-xs ml-2 mt-1 xl:ml-4 '> Help & FAQ</p>
<img src={Profile} alt="img" className="w-4 h-4 mt-1 ml-4 " />
<img src={DownArrow} alt="img" className="w-2 h-2 mt-2 ml-3 xl:ml-10 " />

            </div>
    </div>

  )
}

export default Nav