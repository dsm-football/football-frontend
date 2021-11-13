import { combineReducers } from "redux";
import { userSignupreducer } from "./signup";
import { clubEstblreducer } from "./clubEstbl";
import ClubManagementReducer from "./clubManagement";
const rootReducer = combineReducers({
  userSignupreducer,
  clubEstblreducer,
  clubManagement: ClubManagementReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
