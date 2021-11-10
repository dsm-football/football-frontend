import { clubMemberActionType } from "../../action/clubManagement";
import {
  GET_CLUB_MEMBER_FAILURE,
  GET_CLUB_MEMBER_SUCCESS,
  SET_ID,
} from "../../action/clubManagement/interface";
import ClubManagementState from "./interface";

const initState: ClubManagementState = {
  memberList: [],
  error: null,
  id: 0,
};

const ClubManagementReducer = (
  state: ClubManagementState = initState,
  action: clubMemberActionType
): ClubManagementState => {
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
    default:
      return state;
  }
};

export default ClubManagementReducer;
