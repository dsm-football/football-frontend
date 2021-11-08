import { combineReducers } from "redux";
import { userSignupreducer } from "./signup";
import { clubEstblreducer } from "./clubEstbl";
import matchingRegistrationReducer from "./matchingRegistration";
const rootReducer = combineReducers({
  userSignupreducer,
  clubEstblreducer,
  matchingRegistration: matchingRegistrationReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
