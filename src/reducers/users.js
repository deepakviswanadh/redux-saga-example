import { GET_USERS_SUCCESS } from "../actions/constants";

const initialState = {
  users: [{}],
};

const getUsers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return { ...state, users: action.payload.users };
    default:
      return state;
  }
};

export default getUsers;
