import { call, put } from 'redux-saga/effects';

import { requestUploadImage } from '../requests/image';

export function* handleImageUpload(action) {
  try {
    const response = yield call(requestUploadImage, action.formData);
    console.log(response);
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
  }
}
