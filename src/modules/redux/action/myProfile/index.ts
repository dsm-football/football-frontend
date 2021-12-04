import { createAction } from "typesafe-actions";
import { MyProfileResponseType } from "../../../../constance/myProfile";
import { error } from "../../../../models/error";
import {
  GET_MY_PROFILE,
  GET_MY_PROFILE_FAILURE,
  GET_MY_PROFILE_SUCCESS,
  SET_ID,
} from "./interface";

export const getMyProfile = createAction(GET_MY_PROFILE)();
export const getMyProfileSuccess = createAction(
  GET_MY_PROFILE_SUCCESS
)<MyProfileResponseType>();
export const getMyProfileFailure = createAction(
  GET_MY_PROFILE_FAILURE
)<error>();
export const setId = createAction(SET_ID)<number>();

export type myProfileActionType =
  | ReturnType<typeof getMyProfile>
  | ReturnType<typeof getMyProfileSuccess>
  | ReturnType<typeof getMyProfileFailure>
  | ReturnType<typeof setId>;
