import { call, put } from 'redux-saga/effects';

import {
  logInFailure,
  logInSuccess,
  saveProfileSuccess,
  saveProfileError,
} from '../../actions/user-actions';
import { requestUploadImage } from '../requests/file';
import { requestLoginUser, requestSaveProfileInfo } from '../requests/user';

export function* handleLoginUser(payload) {
  try {
    const response = yield call(requestLoginUser, payload);
    console.log(response);
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

export function* handleSaveProfileInfo({ payload }) {
  try {
    const resp = yield call(requestUploadImage, payload.image);
    const profile = {
      name: payload.name,
      profilePhoto: resp.data[0].id,
    };
    const response = yield call(requestSaveProfileInfo, profile);
    yield put(saveProfileSuccess(response));
  } catch (error) {
    console.log(error);
    yield put(saveProfileError(error));
  }
}
