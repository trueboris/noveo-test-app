import { call, put, takeLatest, all } from "redux-saga/effects";
import { makeDiscInfoRequest } from "../api";
import {
  DISC_INFO_REQUESTED,
  DISC_INFO_PENDING,
  DISC_INFO_RECIEVED,
  DISC_INFO_FAILED
} from "../constants";

function* watchForDiscInfoRequestAction() {
  yield takeLatest(DISC_INFO_REQUESTED, requestDiscInfo);
}

function* requestDiscInfo(action) {
  yield put({ type: DISC_INFO_PENDING });

  try {
    const response = yield call(makeDiscInfoRequest, {
      token: action.payload.token,
      path: action.payload.path
    });

    yield put({ type: DISC_INFO_RECIEVED, payload: response });
  } catch (error) {
    yield put({ type: DISC_INFO_FAILED, payload: error });
  }
}

function* rootSaga() {
  yield all([watchForDiscInfoRequestAction()]);
}

export default rootSaga;
