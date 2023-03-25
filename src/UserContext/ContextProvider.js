import React, { useState } from "react";
import { createContext } from "react";
import { DataApi } from "../DataApi/DataApi";

export const ContextApi = createContext();
const ContextProvider = ({ children }) => {
  const [showProfile, setShowProfile] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const getAllData = () => {
    setLoading(true);
    setError(false);
    DataApi()
      .then((res) => {
        setData(res.data.users);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  };

  const getFilterData = (id) => {
    DataApi()
      .then((res) => {
        setProfileData(res.data.users.filter((el) => el.id === Number(id)));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <ContextApi.Provider
      value={{
        data,
        profileData,
        getFilterData,
        loading,
        error,
        getAllData,
        setShowProfile,
        showProfile,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
};

export default ContextProvider;
