import { clubMemberActionType } from "../../action/clubInfo";
import {
  GET_CLUB_INFO_FAILURE,
  GET_CLUB_INFO_SUCCESS,
  GET_CLUB_MEMBER_FAILURE,
  GET_CLUB_MEMBER_SUCCESS,
  SET_ID,
} from "../../action/clubInfo/interface";
import ClubInfoState from "./interface";

const initState: ClubInfoState = {
  memberList: [],
  error: null,
  id: "",
  clubInfo: {
    main_profile: "",
    sub_profile: "",
    name: "",
    description: "",
    sns: "",
    area: "",
    cycle: "",
    gender: "",
  },
};

const ClubInfoReducer = (
  state: ClubInfoState = initState,
  action: clubMemberActionType
): ClubInfoState => {
  switch (action.type) {
    case GET_CLUB_MEMBER_SUCCESS:
      return {
        ...state,
        memberList: action.payload,
      };
    case GET_CLUB_MEMBER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SET_ID:
      return {
        ...state,
        id: action.payload,
      };
    case GET_CLUB_INFO_SUCCESS:
      return {
        ...state,
        clubInfo: action.payload,
      };
    case GET_CLUB_INFO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default ClubInfoReducer;
