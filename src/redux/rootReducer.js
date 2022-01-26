import { combineReducers } from 'redux';

import registerReducer from './reducers/register-reducer';
import userReducer from './reducers/user-reducer';
import companyReducer from './reducers/company-reducer';

const rootReducer = combineReducers({
  user: userReducer,
  register: registerReducer,
  companyReducer: companyReducer,
});

export default rootReducer;
