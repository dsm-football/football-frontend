import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import {
  getClubInfo,
  getClubMember,
} from "../../../../util/api/clubManagement";
import {
  GET_CLUB_INFO,
  GET_CLUB_MEMBER,
} from "../../action/clubInfo/interface";
import { reducerType } from "../../reducer";
import ClubInfoState from "../../reducer/clubInfo/interface";

const getStateFunc = (state: reducerType): ClubInfoState => state.clubInfo;

const getClubMemberListSaga = function* (): any {
  const type = "CLUB/GET_CLUB_MEMBER";
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  try {
    const response = yield call(getClubMember, state.id);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: type },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: "Network Error",
          status: 500,
        },
      });
    }
  }
};

const getClubInfoSaga = function* (): any {
  const type = "CLUB/GET_CLUB_INFO";
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  try {
    const response = yield call(getClubInfo, state.id);
    yield put({
      type: SUCCESS,
      payload: response ? response.data : null,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: type },
      });
    } else {
      yield put({
        type: FAILURE,
        payload: {
          message: "Network Error",
          status: 500,
        },
      });
    }
  }
};

function* clubInfoSaga() {
  yield takeLatest(GET_CLUB_MEMBER, getClubMemberListSaga);
  yield takeLatest(GET_CLUB_INFO, getClubInfoSaga);
}

export default clubInfoSaga;
