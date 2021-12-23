import * as actionTypes from '../actionTypes/user-types';

export const userLogin = (email, password) => {
  return {
    type: actionTypes.USER_LOGIN,
    payload: {
      email,
      password,
    },
  };
};
