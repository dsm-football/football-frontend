import { calendarActionType } from "../../action/calendar";
import { SET_CALENDAR } from "../../action/calendar/interface";
import CalendarState from "./interface";

const initState: CalendarState = {
  isCalendar: false,
};

const calendarReducer = (
  state: CalendarState = initState,
  action: calendarActionType
): CalendarState => {
  switch (action.type) {
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
