import * as types from '../actionTypes/user-types';

const INITIAL_STATE = {
  currentUser: [],
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case types.LOG_IN_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case types.LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
