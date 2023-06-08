import { SET_USER, LOGOUT_USER } from "./constants";

// actions.js
export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const logoutUser = (user) => ({
  type: LOGOUT_USER,
  payload: user,
});
