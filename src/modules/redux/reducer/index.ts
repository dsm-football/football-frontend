import { combineReducers } from "redux";
import { userSignupreducer } from "./signup";
import { clubEstblreducer} from './clubEstbl';
const rootReducer = combineReducers({
    userSignupreducer,
    clubEstblreducer
});

export type reducerType = ReturnType<typeof rootReducer>;
export default rootReducer;
