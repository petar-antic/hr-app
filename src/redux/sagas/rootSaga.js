import { takeLatest } from 'redux-saga/effects';

import * as types from '../actionTypes/user-types';
import * as companyTypes from '../actionTypes/company-types';
import { handleLoginUser } from './handlers/user';
import { handleRegisterUser } from './handlers/register';
import { handleSaveCompany } from './handlers/company';

export function* watcherSaga() {
  yield takeLatest(types.LOG_IN_START, handleLoginUser);
  yield takeLatest(types.REGISTER_START, handleRegisterUser);
  yield takeLatest(companyTypes.SAVE_COMPANY_START, handleSaveCompany);
}
