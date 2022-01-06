import { takeLatest } from 'redux-saga/effects';

import * as types from '../actionTypes/user-types';
import { handleLoginUser } from './handlers/user';
import { handleRegisterUser } from './handlers/register';

export function* watcherSaga() {
  yield takeLatest(types.LOG_IN_START, handleLoginUser);
  yield takeLatest(types.REGISTER_START, handleRegisterUser);
}
