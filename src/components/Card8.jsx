import React from "react";


const Cards8 = ({ Name,Role,Email,Invite,DOJ }) => {
  
  return (
    <div className="mt-10 xl:mx-28 md:mx-8 mx-2 lg:mx-10 xl:mt-0">
      <div className="relative ">
      
          <div className=" xl:space-y-2 xl:py-4 ml-2  ">
            
            <div className="flex xl:ml-32 lg:ml-32  xl:space-x-44 lg:space-x-32 md:ml-20 md:space-x-20 space-x-4  ml-10 border-b-2 border-gray-500">
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
