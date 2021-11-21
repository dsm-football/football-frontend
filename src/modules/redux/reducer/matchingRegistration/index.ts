import { matchingRegistrationActionType } from "../../action/matchingRegistration";
import {
  POST_MATCHINGREGISTRATION_FAILURE,
  SET_MATCH_OPTION,
  SET_NOTICE_MESSAGE,
  SET_PAGE,
} from "../../action/matchingRegistration/interface";
import MatchRegistrationState from "./interface";

const initState: MatchRegistrationState = {
  matchOption: {
    gameType: 0,
    area: "",
    matchDate: "",
    matchTime: "",
    endDate: "",
    longitude: 0,
    latitude: 0,
    age: 0,
    gender: 0,
    person: 0,
    hasReferee: false,
  },
  error: {
    type: "",
    status: 0,
    message: "",
  },
  noticeMessage: "",
  page: 0,
};

const matchingRegistrationReducer = (
  state: MatchRegistrationState = initState,
  action: matchingRegistrationActionType
): MatchRegistrationState => {
  switch (action.type) {
    case SET_MATCH_OPTION:
      return {
        ...state,
        matchOption: action.payload,
      };
    case SET_NOTICE_MESSAGE:
      return {
        ...state,
        noticeMessage: action.payload,
      };
    case POST_MATCHINGREGISTRATION_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default matchingRegistrationReducer;
