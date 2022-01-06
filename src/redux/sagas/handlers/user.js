import { call, put } from 'redux-saga/effects';

import * as types from '../../actionTypes/user-types';
import { requestLoginUser } from '../requests/user';

export function* handleLoginUser(payload) {
  try {
    const response = yield call(requestLoginUser, payload);
    console.log(response);
    yield [put({ type: types.LOG_IN_SUCCESS, response })];
  } catch (error) {
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
    yield put({ type: types.LOG_IN_FAILURE, error });
  }
}
