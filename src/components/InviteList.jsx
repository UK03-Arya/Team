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
    <div>
    <div className="bg-orange-200 lg:mx-20 md:mx-10 mx-8 xl:mx-48 xl:mr- lg:mr-8 md:mr-4 mr-4">
      <div className=" flex xl:pl-12 lg:pl-28  lg:space-x-36 md:pl-20 md:space-x-28 space-x-10 pl-8 xl:space-x-52  ">
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
