import React from "react";
import style from "../Design/Landingpage.module.css";
import ProfileData from "../Components/ProfileData";

const LandingPage = () => {
  return (
    <div className={style.landingMain}>
      <div className={style.card}>
        <h1 className={style.card_top}>Select an account</h1>
        <ProfileData />
      </div>
    </div>
  );
};

export default LandingPage;
