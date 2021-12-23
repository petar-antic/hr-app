import * as actionTypes from '../actionTypes/user-types';

const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return {};
    default:
      return state;
  }
};

export default userReducer;
