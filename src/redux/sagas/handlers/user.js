import { call, put } from 'redux-saga/effects';

import { logInFailure, logInSuccess } from '../../actions/user-actions';
import { requestLoginUser, requestUserProfile } from '../requests/user';

export function* handleLoginUser(payload) {
  try {
    const response = yield call(requestLoginUser, payload);
    console.log(response);
    if (response.status === 200) {
      const userProfile = yield call(requestUserProfile, response.data.user.id);
      console.log(userProfile.data.data[0]);
      const user = {
        user: response.data.user,
        profile: userProfile.data.data[0],
      };
      localStorage.setItem('token', response.data.jwt);
      localStorage.setItem('user', JSON.stringify(user));
      yield put(logInSuccess(user));
    }
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
