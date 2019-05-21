import { combineReducers } from "redux";
import userReducer from "./user";
import discReducer from "./disc";

const rootReducer = combineReducers({
  user: userReducer,
  disc: discReducer
});

export default rootReducer;
