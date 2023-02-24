import React from "react";
import Cards8 from "./Card8";

const InviteList = () => {
  const cardlist2 = [
    {
     Name:"Naveen",
     Email:"xyz@gmail.com",
     Role:"Instructor",
     Invite:"Joined",
    DOJ:"14-01-2023",
    },
    {
      Name:"Naveen",
      Email:"xyz@gmail.com",
      Role:"Instructor",
      Invite:"Joined",
     DOJ:"14-01-2023",
    },
    {
      Name:"Naveen",
      Email:"xyz@gmail.com",
      Role:"Instructor",
      Invite:"Joined",
     DOJ:"14-01-2023",
    },
    {
      Name:"Naveen",
      Email:"xyz@gmail.com",
      Role:"Instructor",
      Invite:"Joined",
     DOJ:"14-01-2023",
    },
    {
      Name:"Naveen",
      Email:"xyz@gmail.com",
      Role:"Instructor",
      Invite:"Joined",
     DOJ:"14-01-2023",
    },
    {
      Name:"Naveen",
      Email:"xyz@gmail.com",
      Role:"Instructor",
      Invite:"Joined",
     DOJ:"14-01-2023",
    },
    {
      Name:"Naveen",
      Email:"xyz@gmail.com",
      Role:"Instructor",
      Invite:"Joined",
     DOJ:"14-01-2023",
    },
    {
      Name:"Naveen",
      Email:"xyz@gmail.com",
      Role:"Instructor",
      Invite:"Joined",
     DOJ:"14-01-2023",
    },
    {
      Name:"Naveen",
      Email:"xyz@gmail.com",
      Role:"Instructor",
      Invite:"Joined",
     DOJ:"14-01-2023",
    },
    {
      Name:"Naveen",
      Email:"xyz@gmail.com",
      Role:"Instructor",
      Invite:"Joined",
     DOJ:"14-01-2023",
    },
    {  Name:"Naveen",
    Email:"xyz@gmail.com",
    Role:"Instructor",
    Invite:"Joined",
   DOJ:"14-01-2023",
    },
    {
      Name:"Naveen",
      Email:"xyz@gmail.com",
      Role:"Instructor",
      Invite:"Joined",
     DOJ:"14-01-2023",
    },
  ];
  return (
    <div className="scroll-pl-6 snap-x">
    <div className="bg-orange-200  w-[385px] md:w-[740px] sm:ml-4 lg:w-[1000px] xl:w-[1400px]   md:mr-4 ml-1 mt-6">
      <div className=" flex xl:pl-36 lg:pl-12  lg:space-x-40 md:pl-10 md:space-x-28 space-x-10 pl-8 xl:space-x-52  ">
        <p className=" text-sm mt-2  font-semibold">Name</p>
        <p className=" text-sm mt-2 font-semibold">Role</p>
        <p className=" text-sm mt-2  font-semibold">Email</p>
        <p className=" text-sm mt-2  font-semibold">Invite</p>
        <p className=" text-sm mt-2 font-semibold">DOJ</p>
       </div>
       </div>
      <div className="">
        {cardlist2.map((elem, index) => (
          <Cards8
            key={index}
           Name={elem.Name}       
               Email={elem.Email}
               Role={elem.Role}

               Invite={elem.Invite}
               DOJ={elem.DOJ}





          />
        ))}
      </div>
    </div>
  );
};

export default InviteList;
