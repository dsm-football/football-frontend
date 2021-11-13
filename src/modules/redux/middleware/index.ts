import { all } from "redux-saga/effects";
import clubManagementSaga from "./clubManagement";

export default function* rootSaga() {
  yield all([clubManagementSaga()]);
}
