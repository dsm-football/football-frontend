import { combineReducers } from "redux";
import calendarReducer from "./calendar";

const rootReducer = combineReducers({
  calendar: calendarReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
