import moment from "moment";
import { createAction } from "typesafe-actions";
import { SET_CALENDAR, SET_DATE } from "./interface";

export const setDate = createAction(SET_DATE)<moment.Moment>();
export const setCalendar = createAction(SET_CALENDAR)<boolean>();

export type calendarActionType =
  | ReturnType<typeof setDate>
  | ReturnType<typeof setCalendar>;
