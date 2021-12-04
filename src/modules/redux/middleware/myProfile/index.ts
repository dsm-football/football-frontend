import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import { getMyProfile } from "../../../../util/api/myProfile";
import { GET_MY_PROFILE } from "../../action/myProfile/interface";
import { reducerType } from "../../reducer";
import MyProfileState from "../../reducer/myProfile/interface";

const getStateFunc = (state: reducerType): MyProfileState => state.myProfile;

export const getMyProfileRequestSaga = function* (): any {
  const type = "USER/MY_PROFILE";
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  const state = yield select(getStateFunc);
  try {
    const response = yield call(getMyProfile, state.id);
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

function* myProfileSaga() {
  yield takeLatest(GET_MY_PROFILE, getMyProfileRequestSaga);
}

export default myProfileSaga;
