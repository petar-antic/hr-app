import * as types from '../actionTypes/user-types';

const INITIAL_STATE = {
  currentUser: [],
  error: [],
};

const registerReducer = (state = INITIAL_STATE, action) => {
  let response = action.response;

  switch (action.type) {
    case types.REGISTER_SUCCESS:
      return { ...state, response };
    case types.REGISTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default registerReducer;
