import { combineReducers } from "redux";
import { userSignupreducer } from "./signup";
import { clubEstblreducer } from "./clubEstbl";
import ClubInfoReducer from "./clubInfo";
const rootReducer = combineReducers({
  userSignupreducer,
  clubEstblreducer,
  clubInfo: ClubInfoReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
