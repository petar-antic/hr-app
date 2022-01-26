import * as types from '../actionTypes/company-types';

export const saveCompanyStart = (companyInfo) => ({
  type: types.SAVE_COMPANY_START,
  payload: companyInfo,
});

export const saveCompanySuccess = (response) => ({
  type: types.SAVE_COMPANY_SUCCESS,
  payload: response,
});

export const saveCompanyError = (error) => ({
  type: types.SAVE_COMPANY_ERRROR,
  payload: error,
});
