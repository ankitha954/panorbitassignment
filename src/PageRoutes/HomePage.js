import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { ContextApi } from "../UserContext/ContextProvider";
import style from "../Design/Homepage.module.css";


const HomePage = () => {
  const { profileData, getFilterData, setShowProfile } =
    useContext(ContextApi); 
  const { id } = useParams();
  sessionStorage.setItem("id", id);

  useEffect(() => {
    let ID = sessionStorage.getItem("id") || 1;
    getFilterData(ID);
  }, [id,getFilterData]);

  return (
    <div>
      <div className={style.containerhome}>
        <Sidebar />
        {profileData &&
          profileData.map((element) => (
            <div
              style={{ width: "80%" }}
              className={style.homeprofile}
              key={element.id}
            >
              <div className={style.profile}>
                <h2>Profile</h2>
                <Header />
              </div>

              <hr />
              <div onClick={() => setShowProfile(false)}>
                <Footer {...element} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomePage;
