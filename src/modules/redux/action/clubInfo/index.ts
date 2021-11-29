import { createAction } from "typesafe-actions";
import {
  ClubInfoResponseType,
  ClubMemberResponseType,
} from "../../../../constance/clubInfo";
import { error } from "../../../../models/error";
import {
  GET_CLUB_INFO,
  GET_CLUB_INFO_FAILURE,
  GET_CLUB_INFO_SUCCESS,
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
export const setId = createAction(SET_ID)<string>();
export const getClubInfo = createAction(GET_CLUB_INFO)();
export const getClubInfoSuccess = createAction(
  GET_CLUB_INFO_SUCCESS
)<ClubInfoResponseType>();
export const getClubInfoFailure = createAction(GET_CLUB_INFO_FAILURE)<error>();


export type clubMemberActionType =
  | ReturnType<typeof getClubMember>
  | ReturnType<typeof getClubMemberSuccess>
  | ReturnType<typeof getClubMemberFailure>
  | ReturnType<typeof setId>
  | ReturnType<typeof getClubInfo>
  | ReturnType<typeof getClubInfoSuccess>
  | ReturnType<typeof getClubInfoFailure>;
