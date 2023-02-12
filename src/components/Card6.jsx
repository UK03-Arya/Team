import React from 'react'
import left from "../assets/LeftArrow.png"
const Card6 = () => {
  return (
  
    <div className='flex flex-wrap mt-20 h-12 xl:mt-4 mx-1 xl:mx-40 lg:mx-10 md:mx-10 p-4  bg-white ml-10  space-x-16  xl:space-x-80 lg:space-x-80 md:space-x-20 	'>
    <div className='flex flex-wrap space-x-2 xl:ml-0'>
    <img src={left} alt="img" className="xl:w-4 xl:h-4 mt-1 w-2 h-2" />
    <p className="font-bold text-black text-xs md:text-md lg:text-md xl:text-md" >
              Send Invite
              
            </p>
            </div>
            <div className='flex flex-wrap xl:pl-80 lg:pl-80 md:pl-80 xl:mr-40 '>

<p className='text-xs  mt-0 xl:ml-4 underline '> View Recent Invites</p>


            </div>
    </div>
  )
}

export default Card6
