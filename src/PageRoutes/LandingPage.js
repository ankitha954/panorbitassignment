import React from "react";
import style from "../Design/Landingpage.module.css";
import ProfileData from "../Components/ProfileData";

const LandingPage = () => {
  return (
    <div className={style.landingcontainer}>
      <div className={style.box}>
        <h1 className={style.heading}>Select an account</h1>
        <ProfileData />
      </div>
    </div>
  );
};

export default LandingPage;
