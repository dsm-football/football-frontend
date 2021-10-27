import { combineReducers } from "redux";
import { userSignupreducer } from "./signup";
const rootReducer = combineReducers({
    userSignupreducer
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
