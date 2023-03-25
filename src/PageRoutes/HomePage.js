import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { ContextApi } from "../UserContext/ContextProvider";
import style from "../Design/Homepage.module.css";


const HomePage = () => {
  const { profileData, getFilterData, setShowProfile, showProfile } =
    useContext(ContextApi); 
  const { id } = useParams();
  sessionStorage.setItem("id", id);

  useEffect(() => {
    let ID = sessionStorage.getItem("id") || 1;
    getFilterData(ID);
  }, [id]);

  return (
    <div>
      <div className={style.HomeMain}>
        <Sidebar />
        {profileData &&
          profileData.map((el) => (
            <div
              style={{ width: "80%" }}
              className={style.profile_top}
              key={el.id}
            >
              <div className={style.profile}>
                <h2>Profile</h2>
                <Header />
              </div>

              <hr />
              <div onClick={() => setShowProfile(false)}>
                <Footer {...el} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
