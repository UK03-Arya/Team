import React from "react";

import { useNavigate } from 'react-router-dom';

const Cards2 = ({ img,editT, edit,active,team, teamN,Learners,save, title, about, saveN,courses }) => {
  const navigate=useNavigate();
const EventHandler=()=>{
  navigate('/Screen2')
}
  return (
    <div className="mt-8 mx-0 xl:mx-20 xl:mt-0">
      <div className="relative box-content     h-60 w-36  drop-shadow-xl rounded-2xl bg-white  hover:scale-110 duration-300 cursor-pointer ">
        <div className=" ">
          {" "}
          <div className=" space-y-4 py-4 ml-2  ">
            <div className="flex space-x-6 ">
          
              <img src={img} alt="img" className="w-14 h-14 " />
              

              <div className="flex">
              <a href="/Screen6">{editT}</a>
              <a href="/Screen6">              <img src={edit} alt="img" className="w-3 h-3 mt-1 ml-2 " />
</a>

              </div>



            </div>
            <div>
            <p className="mr-6 font-semibold">{title}</p>
            <p className="text-sm mr-6 mt-2">{about}</p>
            <p className="text-xs text-emerald-400	mr-20 mt-2">{active}</p>
         

            </div>
          </div>
          <div className="flex ml-4" >
          <img src={team} alt="img" className="w-3 h-3 mt-1 " />
<p className="text-xs ml-1">{teamN}</p>
<p className="text-xs ml-1">{Learners}</p>
          </div>
        </div>
        <div className="flex ml-4 mt-2" >
          <img src={save} alt="img" className="w-3 h-3 mt-1 " />
<p className="text-xs ml-1">{saveN}</p>
<p className="text-xs ml-1">{courses}</p>
          </div>
            </div>
            </div>
        
  );
};

export default Cards2;
