import React from 'react'
import left from "../assets/LeftArrow.png"
import { useNavigate } from 'react-router-dom'
const Card3 = () => {
  const history =useNavigate()
  return (
    <div className='flex justify-start xl:ml-20 w-[400px] md:w-[750px] lg:w-[1000px] xl:w-[1200px]'>
    <div className='flex flex-col md:flex-wrap lg:flex-wrap xl:flex-wrap mt-28 h-12 xl:mt-10 lg:mt-10 md:mt-10 mx-4 justify-between xl:mx-40 lg:mx-20 md:mx-20 p-4  bg-white     xl:space-x-80 lg:space-x-80 md:space-x-20 	'>
    <div className='flex flex-wrap space-x-2 xl:ml-0'>
   <button onClick={()=>history(-1)}>
    <img src={left} alt="img" className="xl:w-4 xl:h-4 mt-0 w-2 h-2" />
</button>
    <p className="font-bold text-black text-xs md:text-md lg:text-md xl:text-md" >
              Add Member
              
            </p>
            </div>
            <div className='flex flex-wrap  xl:pl-80 lg:pl-80 md:pl-60 xl:mr-40 '>

<p className='text-xs  mt-0 xl:ml-4 underline '> View Recently Added Member</p>


            </div>
    </div>
    </div>
  )

}

export default Card3
