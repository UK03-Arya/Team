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
    <div className='flex justify-center'>
    <div className='flex flex-col lg:flex-wrap md:flex-wrap mx-8 xl:flex-wrap mt-4 h-1  xl:mx-40 lg:w-[1200px] xl:w-[1000px] md:w-[600px] w-[400px] md:ml-20 lg:ml-20 md:mt-8 lg:mt-8   rounded-2xl bg-white   justify-between  	'>
    <div className='flex justify-between  '>
    <p className="font-bold text-black xl:pr-20	 " >
              Team
            </p>
            
            <div className=" flex mb-8  rounded-3xl ml-8 xl:px-10 lg:px-7 px-3 xl:w-[400px] lg:w-[400px] md:w-[300px]  w-[180px] py-1 border-2 border-gray-400 xl:space-x-40   xl:mb-0 md:mb-1 md:space-x-20 lg:space-x-40">


<input type="text" placeholder="Search team member..." className=" lg:text-sm md:text-sm xl:text-sm text-xs" />
    <img src={Search} alt="img" className="w-3 h-3 mt-1 text-xs" />

</div>
</div>
<div className='flex flex-wrap  justify-between  xl:pl-40 md:space-x-4 md:pl-10 lg:pl-40  '>
<div className=' border-2 text-[#023059] bg-white font-semibold lg:px-3 md:px-3 xl:px-3  px-2 py-1  rounded-full border-orange-300 xl:text-sm lg:text-sm md:text-sm  text-xs '>
            <button onClick={EventHandler}>Add Team</button>
        </div>       
         <div className=' border-2 text-white bg-gradient-to-r from-orange-300 to-orange-500 font-semibold  lg:px-3 md:px-3 xl:px-3  px-2 py-1  rounded-full xl:text-sm lg:text-sm md:text-sm  text-xs'>
            <button onClick={InviteEventhandler}>Invite Status</button>
        </div>     
</div>
</div>
   
</div>
  )
}

export default Card1