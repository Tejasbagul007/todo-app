// rootReducer.js
import { combineReducers } from "redux";
import userReducer from "./reducer";

const rootReducer = combineReducers({
  userReducer,
  // other reducers...
});

export default rootReducer;
