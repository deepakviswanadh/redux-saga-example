import axios from "axios";

export const getUsersList = () => {
  let config = {
    params: {
      limit: 1000,
    },
  };
  return axios.get("/users", config);
};
