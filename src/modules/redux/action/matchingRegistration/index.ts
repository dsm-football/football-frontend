import { createAction } from "typesafe-actions";
import { MatchOptionType } from "../../../../constance/matchingRegistration";
import { error } from "../../../../models/error";
import {
  POST_MATCHINGREGISTRATION,
  POST_MATCHINGREGISTRATION_FAILURE,
  POST_MATCHINGREGISTRATION_SUCCESS,
  SET_MATCH_OPTION,
  SET_NOTICE_MESSAGE,
  SET_PAGE,
} from "./interface";

export const postMatchingRegistration = createAction(
  POST_MATCHINGREGISTRATION
)();
export const postMatchingRegistrationSuccess = createAction(
  POST_MATCHINGREGISTRATION_SUCCESS
)();
export const postMatchingRegistrationFailure = createAction(
  POST_MATCHINGREGISTRATION_FAILURE
)<error>();
export const setMatchOption = createAction(SET_MATCH_OPTION)<MatchOptionType>();
export const setNoticeMessage = createAction(SET_NOTICE_MESSAGE)<string>();
export const setPage = createAction(SET_PAGE)<number>();

export type matchingRegistrationActionType =
  | ReturnType<typeof postMatchingRegistration>
  | ReturnType<typeof postMatchingRegistrationFailure>
  | ReturnType<typeof postMatchingRegistrationSuccess>
  | ReturnType<typeof setMatchOption>
  | ReturnType<typeof setNoticeMessage>
  | ReturnType<typeof setPage>;
