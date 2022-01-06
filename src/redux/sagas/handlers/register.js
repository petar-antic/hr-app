import { call, put } from 'redux-saga/effects';

import * as types from '../../actionTypes/user-types';
import { requestRegisterUser } from '../requests/register';

export function* handleRegisterUser(payload) {
  try {
    const response = yield call(requestRegisterUser, payload);
    yield [put({ type: types.REGISTER_SUCCESS, response })];
  } catch (error) {
    yield put({ type: types.REGISTER_FAILURE, error });
  }
}
