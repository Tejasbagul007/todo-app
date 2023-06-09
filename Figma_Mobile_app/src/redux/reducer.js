import { SET_USER, LOGOUT_USER } from "./constants";

// userReducer.js

const initialState = {
  userDetails: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userDetails: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        userDetails: {},
      };
    default:
      return state;
  }
};

export default userReducer;
