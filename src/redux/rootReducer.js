import { combineReducers } from 'redux';

import registerReducer from './reducers/register-reducer';
import userReducer from './reducers/user-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  register: registerReducer,
});

export default rootReducer;
