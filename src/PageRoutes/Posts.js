import React, { useContext } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { ContextApi } from "../UserContext/ContextProvider";
import style from "../Design/comingsoonpage.module.css"

const Posts = () => {
  const { setShowProfile } = useContext(ContextApi); 
  return (
    <div className={style.mainDiv}>
      <Sidebar />
      <div className={style.topDiv}>
        <div className={style.profile}>
          <h2>Posts</h2>
          <Header/>
        </div>

        <hr style ={{ color: "grey", width: "100%" }} />
        <div className={style.screen} onClick={() => setShowProfile(false)}>
          <h1 className={style.ComingSoon}>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default Posts;
