import { takeLatest } from 'redux-saga/effects';

import * as types from '../actionTypes/user-types';
import { handleLoginUser, handleSaveProfileInfo } from './handlers/user';
import * as companyTypes from '../actionTypes/company-types';
import { handleRegisterUser } from './handlers/register';
import { handleSaveCompany } from './handlers/company';
import { handleImageUpload } from './handlers/image';

export function* watcherSaga() {
  yield takeLatest(types.LOG_IN_START, handleLoginUser);
  yield takeLatest(types.REGISTER_START, handleRegisterUser);
  yield takeLatest(types.SAVE_PROFILE_START, handleSaveProfileInfo);
  yield takeLatest(companyTypes.SAVE_COMPANY_START, handleSaveCompany);
  yield takeLatest(types.UPLOAD_IMAGE, handleImageUpload);
}
