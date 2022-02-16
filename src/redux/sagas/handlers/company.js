import { call, put } from 'redux-saga/effects';
import { requestSaveCompany } from '../requests/company';
import {
  saveCompanySuccess,
  saveCompanyError,
} from '../../actions/company-actions';

export function* handleSaveCompany({ payload }) {
  try {
    const response = yield call(requestSaveCompany, payload);
    yield put(saveCompanySuccess(response));
  } catch (error) {
    console.log(error);
    yield put(saveCompanyError(error));
  }
}
