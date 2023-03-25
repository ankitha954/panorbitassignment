import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ContextApi } from "../UserContext/ContextProvider";
import style from "../Design/ProfileData.module.css";

const ProfileData = () => {
  const { data, getAllData } = useContext(ContextApi); 

  useEffect(() => {
    getAllData();
  }, [getAllData]);

  return (
    <div className={style.profilecontainer}>
    
      {data &&
        data.map((element) => (
          <div key={element.id}>
            <NavLink
              to={`/homepage/${element.id}`}
            >
              <div className={style.profileimagecontainer}>
                <img src={element.profilepicture} alt="profile image" />
                <p>{element.name}</p>
              </div>
            </NavLink>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default ProfileData;
