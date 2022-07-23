import { combineReducers } from 'redux';

import DashboardReducer from '../modules/dashboard';
import { LandingReducer } from '../modules/landing';

export const appReducer = combineReducers({
  landing: LandingReducer,
  dashboard: DashboardReducer,
});

const rootReducer = (state, action) => {
  const { type } = action;

  if (type === 'LOGOUT_SUCCESS') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
