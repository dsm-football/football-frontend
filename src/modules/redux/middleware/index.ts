import { all } from "redux-saga/effects";
import clubInfoSaga from "./clubInfo";

export default function* rootSaga() {
  yield all([clubInfoSaga()]);
}
