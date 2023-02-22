import React from "react";


const Cards8 = ({ Name,Role,Email,Invite,DOJ }) => {
  
  return (
    <div className="mt-10 w-[380px]   md:w-[750px]  lg:w-[950px]  xl:w-[1200px] xl:mt-4">
      <div className="relative ">
      
          <div className=" xl:space-y-2 xl:py-4 ml-2  ">
            
            <div className="flex xl:ml-36 lg:ml-10   xl:space-x-44 lg:space-x-32 md:ml-10 md:space-x-20 space-x-4  ml-1 border-b-2 border-gray-500">
            <p className="text-sm   font-semibold ">{Name}</p>
            <p className="text-sm  ">{Role}</p>
            <p className="text-xs 	 ">{Email}</p>
            <p className="text-xs  ">{Invite}</p>
            <p className="text-xs  ">{DOJ}</p>


            </div>
          </div>
          
        </div>
       
            </div>
        
        
  );
};

export default Cards8;
