import * as types from '../actionTypes/user-types';

const INITIAL_STATE = {
  isLogged: false,
  userRole: null,
  currentUser: [],
  profile: undefined,
  error: [],
  company: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        userRole: action.payload.profile.attributes.userRole,
        currentUser: action.payload,
        error: null,
        company: {
          companyID: action.payload.profile.attributes.company.data.id,
          companyName:
            action.payload.profile.attributes.company.data.attributes.name,
        },
      };
    case types.LOG_IN_FAILURE:
      return {
        ...state,
        company: null,
        isLogged: false,
        userRole: null,
        error: action.payload,
        currentUser: [],
      };
    case types.LOG_OUT:
      return INITIAL_STATE;
    case types.SAVE_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        error: null,
      };
    case types.SAVE_PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
