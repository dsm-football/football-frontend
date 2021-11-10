import { createAction } from "typesafe-actions";
import { ClubMemberResponseType } from "../../../../constance/clubManagement";
import { error } from "../../../../models/error";
import {
  GET_CLUB_MEMBER,
  GET_CLUB_MEMBER_FAILURE,
  GET_CLUB_MEMBER_SUCCESS,
  SET_ID,
} from "./interface";

export const getClubMember = createAction(GET_CLUB_MEMBER)();
export const getClubMemberSuccess = createAction(GET_CLUB_MEMBER_SUCCESS)<
  Array<ClubMemberResponseType>
>();
export const getClubMemberFailure = createAction(
  GET_CLUB_MEMBER_FAILURE
)<error>();
export const setId = createAction(SET_ID)<number>();

export type clubMemberActionType =
  | ReturnType<typeof getClubMember>
  | ReturnType<typeof getClubMemberSuccess>
  | ReturnType<typeof getClubMemberFailure>
  | ReturnType<typeof setId>;
