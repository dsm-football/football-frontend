import { reducerType } from "../../reducer";
import MatchRegistrationState from "../../reducer/matchingRegistration/interface";
import { POST_MATCHINGREGISTRATION } from "../../action/matchingRegistration/interface";
import { put, select, call, takeLatest } from "@redux-saga/core/effects";
import { postMatchingRegistration } from "../../../../util/api/matchRegistration";

const getStateFunc = (state: reducerType): MatchRegistrationState =>
  state.matchingRegistration;

export const matchingRegistrationRequestSaga = function* (): any {
  const SUCCESS = `${POST_MATCHINGREGISTRATION}_SUCCESS`;
  const FAILURE = `${POST_MATCHINGREGISTRATION}_FAILURE`;
  const state = yield select(getStateFunc);
  const accessToken = localStorage.getItem("access_token") || "";
  try {
    yield call(postMatchingRegistration, accessToken, state.matchOption);
    yield put({
      type: SUCCESS,
    });
  } catch (error: any) {
    if (error.response?.data) {
      yield put({
        type: FAILURE,
        payload: { ...error.response.data, type: POST_MATCHINGREGISTRATION },
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

function* matchingRegistrationSaga(): any {
  yield takeLatest(POST_MATCHINGREGISTRATION, matchingRegistrationRequestSaga);
}

export default matchingRegistrationSaga;
