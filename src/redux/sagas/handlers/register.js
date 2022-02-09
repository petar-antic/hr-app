import { call, put } from 'redux-saga/effects';

import { registerFailure, registerSuccess } from '../../actions/user-actions';
import { requestRegisterUser } from '../requests/register';

export function* handleRegisterUser(payload) {
  try {
    const response = yield call(requestRegisterUser, payload);
    console.log(response);
    localStorage.setItem('token', response.data.jwt);
    if (response.status === 200) {
      yield call(requestRegisterUser, payload);
    }
    yield put(registerSuccess(response));
  } catch (error) {
    yield put(registerFailure(error.response.data));
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
