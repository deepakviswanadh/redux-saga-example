import { WATCH_GET_USERS_REQUEST } from "../actions/constants";

import { takeLatest, call, put, fork } from "redux-saga/effects";
import * as api from "../api/users";
import * as actions from "../actions/users";

function* getUsers() {
  try {
    let result = yield call(api.getUsersList);
    yield put(actions.getUsersSuccess({ users: result.data.data }));
  } catch (err) {
    console.log(err.message);
  }
}

function* watchGetUsers() {
  yield takeLatest(WATCH_GET_USERS_REQUEST, getUsers);
}

const userSaga = [fork(watchGetUsers)];

export default userSaga;
