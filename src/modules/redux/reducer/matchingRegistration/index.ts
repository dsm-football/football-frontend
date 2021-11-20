import { matchingRegistrationActionType } from "../../action/matchingRegistration";
import {
  POST_MATCHINGREGISTRATION_FAILURE,
  SET_MATCH_OPTION,
  SET_NOTICE_MESSAGE,
} from "../../action/matchingRegistration/interface";
import MatchRegistrationState from "./interface";

const initState: MatchRegistrationState = {
  matchOption: {
    gameType: 0,
    areaType: 0,
    matchDate: "",
    matchTime: "",
    endDate: "",
    longitude: 0,
    latitude: 0,
    age: -1,
    gender: "",
    hasReferee: false,
    costPerson: -1,
  },
  error: {
    type: "",
    statusCode: 0,
    message: "",
  },
  noticeMessage: "",
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

    default:
      return state;
  }
};

export default matchingRegistrationReducer;
