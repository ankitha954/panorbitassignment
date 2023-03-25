import React, { useContext } from "react";
import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import { ContextApi } from "../UserContext/ContextProvider";
import style from "../Design/comingsoonpage.module.css"

const ToDo = () => {
  const { setShowProfile } = useContext(ContextApi); 

  return (
    <div className={style.container}> 
      <Sidebar />
      <div className={style.sidesec}>
        <div className={style.gallery}>
          <h2>ToDo</h2>
          <Header />
        </div>

        <hr style ={{ color: "grey", width: "100%" }} />

        <div className={style.display} onClick={() => setShowProfile(false)}>
          <h1 className={style.ComingSoon}>Coming Soon</h1>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
