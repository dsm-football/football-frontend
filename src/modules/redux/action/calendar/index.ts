import { createAction } from "typesafe-actions";
import { SET_CALENDAR } from "./interface";

export const setCalendar = createAction(SET_CALENDAR)<boolean>();

export type calendarActionType = ReturnType<typeof setCalendar>;
