
// export const DataApi = () => {
//   return fetch("https://panorbit.in/api/users.json").then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   });
// };
import axios from "axios";


export const DataApi = () => {
  return axios.get("https://panorbit.in/api/users.json");
};
