import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import { getClubMember } from "../../../../util/api/clubManagement";
import { GET_CLUB_MEMBER } from "../../action/clubManagement/interface";
import { reducerType } from "../../reducer";
import ClubManagementState from "../../reducer/clubManagement/interface";

const getStateFunc = (state: reducerType): ClubManagementState =>
  state.clubManagement;

const getClubMemberListSaga = function* (): any {
  const type = "CLUB/GET_CLUB_MEMBER";
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  try {
    const response = yield call(getClubMember, state.id);
    console.log(response);
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

function* clubManagementSaga() {
  yield takeLatest(GET_CLUB_MEMBER, getClubMemberListSaga);
}

export default clubManagementSaga;
