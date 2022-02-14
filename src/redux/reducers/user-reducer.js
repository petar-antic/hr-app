import * as types from '../actionTypes/user-types';

const INITIAL_STATE = {
  isLogged: false,
  currentUser: [],
  error: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        currentUser: action.payload,
        error: null,
      };
    case types.LOG_IN_FAILURE:
      return {
        ...state,
        isLogged: false,
        error: action.payload,
        currentUser: [],
      };
    case types.LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
