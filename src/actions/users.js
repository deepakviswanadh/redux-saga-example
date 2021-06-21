import { GET_USERS_SUCCESS, WATCH_GET_USERS_REQUEST } from "./constants";

export const watchGetUsers = () => {
  return {
    type: WATCH_GET_USERS_REQUEST,
  };
};
export const getUsersSuccess = ({ users }) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: { users },
  };
};
