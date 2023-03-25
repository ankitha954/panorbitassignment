import React, { useContext, useEffect } from "react";
import { ContextApi } from "../UserContext/ContextProvider";
import style from "../Design/Homepage.module.css";
import ProfileDetails from "../PageRoutes/ProfileDetails";

const Header = () => {
  const { profileData, setShowProfile, showProfile, getFilterData } =
    useContext(ContextApi); 

  useEffect(() => {
    const ID = sessionStorage.getItem("id") || 1;
    getFilterData(Number(ID));
  }, [getFilterData]);

  return (
    <div>
      <div
        onClick={() => setShowProfile(!showProfile)}
        className={style.profile}
      >
        <img src={profileData[0]?.profilepicture} alt="profile img" />
        <p>{profileData[0]?.name}</p>
      </div>
      <ProfileDetails />
    </div>
  );
};

export default Header;
