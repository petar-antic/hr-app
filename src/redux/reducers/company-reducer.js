import * as types from '../actionTypes/company-types';

const INITIAL_STATE = {
  company: null,
  error: null,
};

const companyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SAVE_COMPANY_SUCCESS:
      return {
        ...state,
        company: action.payload.data,
        error: null,
      };
    case types.SAVE_COMPANY_ERRROR:
      return {
        ...state,
        company: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
