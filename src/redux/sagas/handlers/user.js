import { call, put } from 'redux-saga/effects';

import { logInFailure, logInSuccess } from '../../actions/user-actions';
import { requestLoginUser } from '../requests/user';

export function* handleLoginUser(payload) {
  try {
    const response = yield call(requestLoginUser, payload);
    console.log(response);
    localStorage.setItem('token', response.data.jwt);
    yield put(logInSuccess(response));
  } catch (error) {
    yield put(logInFailure(error));
    if (error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      console.log(error.request);
    } else {
      console.log('Error', error.message);
    }
  }
}
