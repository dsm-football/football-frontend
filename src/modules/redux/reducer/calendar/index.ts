import moment from "moment";
import { calendarActionType } from "../../action/calendar";
import { SET_CALENDAR, SET_DATE } from "../../action/calendar/interface";
import CalendarState from "./interface";

const initState: CalendarState = {
  date: moment(),
  isCalendar: false,
};

const calendarReducer = (
  state: CalendarState = initState,
  action: calendarActionType
): CalendarState => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        date: action.payload,
      };
    case SET_CALENDAR:
      return {
        ...state,
        isCalendar: action.payload,
      };
    default:
      return state;
  }
};

export default calendarReducer;
