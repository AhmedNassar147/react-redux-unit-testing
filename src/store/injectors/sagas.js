import { all, fork } from "redux-saga/effects";
import postsSaga from "../../modules/saga";

export default function* rootSaga() {
  yield all([fork(postsSaga)]);
}
