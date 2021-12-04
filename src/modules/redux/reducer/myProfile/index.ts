import { myProfileActionType } from "../../action/myProfile";
import {
  GET_MY_PROFILE_FAILURE,
  GET_MY_PROFILE_SUCCESS,
  SET_ID,
} from "../../action/myProfile/interface";
import MyProfileState from "./interface";

const initState: MyProfileState = {
  profileInfo: {
    name: "",
    gender: "",
    profile: "",
    is_pro: false,
    email: "",
    club: "",
    position: "",
    area: "",
    age: 0,
    bio: "",
    club_id: null,
    is_club_executive: false,
  },
  error: null,
  id: 1,
};

const myProfileReducer = (
  state: MyProfileState = initState,
  action: myProfileActionType
): MyProfileState => {
  switch (action.type) {
    case GET_MY_PROFILE_SUCCESS:
      return {
        ...state,
        profileInfo: action.payload,
      };
    case GET_MY_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SET_ID:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

export default myProfileReducer;
