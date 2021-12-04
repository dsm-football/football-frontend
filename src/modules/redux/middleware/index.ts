import { all } from "redux-saga/effects";
import clubInfoSaga from "./clubInfo";
import matchingRegistrationSaga from "./matchingRegistration";
import myProfileSaga from "./myProfile";

export default function* rootSaga() {
  yield all([clubInfoSaga(), matchingRegistrationSaga(), myProfileSaga()]);
}
