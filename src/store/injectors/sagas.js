import { all, fork } from "redux-saga/effects";
import postsSaga from "../../modules/saga/index";

export default function* rootSaga() {
  yield all([fork(postsSaga)]);
}
