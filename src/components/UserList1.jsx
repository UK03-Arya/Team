import React from "react";
import Cards2 from "./Card2";
import Profile1 from "../assets/Profile1.png";
import edit from "../assets/edit.png";
import save from "../assets/Save.png";
import team from "../assets/team.png";
const UserList1 = () => {
  const cardlist2 = [
    {
      image: Profile1,
      editT: "Edit",
      edit: edit,
      title: "Toru Wannabe",
      about: "Graphic Designer",
      active: "ACTIVE",
      team: team,
      teamN: "2345",
      Learners: "Learners",
      save: save,
      saveN: "5",
      courses: "courses",
    },
    {
      image: Profile1,
      editT: "Edit",
      edit: edit,
      title: "Toru Wannabe",
      about: "Graphic Designer",
      active: "ACTIVE",
      team: team,
      teamN: "2345",
      Learners: "Learners",
      save: save,
      saveN: "5",
      courses: "courses",
    },
    {
      image: Profile1,
      editT: "Edit",
      edit: edit,
      title: "Toru Wannabe",
      about: "Graphic Designer",
      active: "ACTIVE",
      team: team,
      teamN: "2345",
      Learners: "Learners",
      save: save,
      saveN: "5",
      courses: "courses",
    },
    {
      image: Profile1,
      editT: "Edit",
      edit: edit,
      title: "Toru Wannabe",
      about: "Graphic Designer",
      active: "ACTIVE",
      team: team,
      teamN: "2345",
      Learners: "Learners",
      save: save,
      saveN: "5",
      courses: "courses",
    },
    {
      image: Profile1,
      editT: "Edit",
      edit: edit,
      title: "Toru Wannabe",
      about: "Graphic Designer",
      active: "ACTIVE",
      team: team,
      teamN: "2345",
      Learners: "Learners",
      save: save,
      saveN: "5",
      courses: "courses",
    },
    {
      image: Profile1,
      editT: "Edit",
      edit: edit,
      title: "Toru Wannabe",
      about: "Graphic Designer",
      active: "ACTIVE",
      team: team,
      teamN: "2345",
      Learners: "Learners",
      save: save,
      saveN: "5",
      courses: "courses",
    },
   
  ];
  return (
    <div>
      <div className="grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 grid-cols-2 xl:gap-2 lg:gap-10
       md:gap-14 sm:gap-1 gap-20 my-4 xl:mx-20 mx-10 ">
        {cardlist2.map((elem, index) => (
          <Cards2
            key={index}
            img={elem.image}
            editT={elem.editT}
            edit={elem.edit}
            title={elem.title}
            about={elem.about}
            active={elem.active}
            team={elem.team}
            teamN={elem.teamN}
            Learners={elem.Learners}
            save={elem.save}
            saveN={elem.saveN}
            courses={elem.courses}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList1;
