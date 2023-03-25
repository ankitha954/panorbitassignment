import axios from "axios";


export const DataApi = () => {
  return axios.get("https://panorbit.in/api/users.json");
};


