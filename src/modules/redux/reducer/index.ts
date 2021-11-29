import { combineReducers } from "redux";
import { userSignupreducer } from "./signup";
import { clubEstblreducer } from "./clubEstbl";
import ClubInfoReducer from "./clubInfo";
import matchingRegistrationReducer from "./matchingRegistration";
const rootReducer = combineReducers({
  userSignupreducer,
  clubEstblreducer,
  matchingRegistration: matchingRegistrationReducer,
  clubInfo: ClubInfoReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
