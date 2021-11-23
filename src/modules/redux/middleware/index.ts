import { all } from "redux-saga/effects";
import clubInfoSaga from "./clubInfo";
import matchingRegistrationSaga from "./matchingRegistration";

export default function* rootSaga() {
  yield all([clubInfoSaga(), matchingRegistrationSaga()]);
}
