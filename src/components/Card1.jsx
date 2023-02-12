import React from 'react'
import Search from "../assets/Search.png";
import { useNavigate } from 'react-router-dom';
const Card1 = () => {
  const navigate=useNavigate();
  const EventHandler=()=>{
    navigate('/Screen2')
  }
  const InviteEventhandler=()=>{
    navigate('/Screen4')
  }
  return (
    <div className='flex flex-wrap mt-4 h-12 mx-12 xl:mx-40 lg:mx-10 md:mx-10 md:mt-8 lg:mt-8 p-4  rounded-2xl bg-white   space-x-4 xl:space-x-10 	'>
    <div className='flex  '>
    <p className="font-bold text-black xl:pr-20	md:pr-4" >
              Team
            </p>
            </div>
            <div className=" flex mb-8  rounded-3xl xl:px-10 lg:px-7 px-3 xl:w-[400px] lg:w-[400px] md:w-[300px] sm:w-[350px] w-[200px] py-1 border-2 border-gray-400 xl:space-x-40   xl:mb-0 md:mb-1 md:space-x-20 lg:space-x-40">


<input type="text" placeholder="Search team member..." className=" text-sm" />
    <img src={Search} alt="img" className="w-4 h-4 mt-1 text-xs" />

</div>
<div className='flex space-x-10  xl:pl-40 md:space-x-4 md:pl-10 lg:pl-40  '>
<div className=' border-2 text-[#023059] bg-white font-semibold px-3 py-1 rounded-full border-orange-300 text-sm '>
            <button onClick={EventHandler}>Add Team</button>
        </div>       
         <div className=' border-2 text-white bg-gradient-to-r from-orange-300 to-orange-500 font-semibold px-3 py-1 rounded-full text-sm'>
            <button onClick={InviteEventhandler}>Invite Status</button>
        </div>     
</div>
    </div>

  )
}

export default Card1